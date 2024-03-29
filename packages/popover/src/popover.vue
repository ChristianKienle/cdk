<template>
  <ClientOnly>
    <SimplePortal :selector="portalSelector">
      <transition
        :name="transition_"
        appear
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
        @after-leave="afterLeave"
      >
        <slot
          v-if="showsContent"
          v-bind="contentSlotProps"
          :show="show"
          :hide="hide"
          :toggle="toggle"
        />
      </transition>
    </SimplePortal>
  </ClientOnly>
</template>

<script>
import { createPopper } from '@popperjs/core'
import { placements } from '@popperjs/core/lib/enums'
import { Portal as SimplePortal } from '@linusborg/vue-simple-portal'
import ClientOnly from '@vue-cdk/client-only/src/client-only.vue'
import Vue from 'vue'
import * as BodySizeMode from './helper/body-size-mode'

// You can use the `Popover` component to render popovers with any kind of content.
export default {
  name: 'Popover',
  components: {
    SimplePortal,
    ClientOnly,
  },
  provide() {
    return {
      $_popover: this.popover,
    }
  },
  props: {
    // The target element that the popover will be attached to.
    target: {
      required: true,
      type: Function,
    },
    // The id of an `HTMLElement` that will act as a container for all popovers.
    portalId: {
      default: 'vcdk-popover-portal-container',
      type: String,
    },
    // The distance between the popover body and the target element.
    offset: {
      type: Number,
      // `5px`
      default: 5,
    },
    transition: {
      type: String,
      default: null,
    },
    bodySizeMode: {
      type: String,
      default: BodySizeMode.defaultMode,
      validator: BodySizeMode.isValid,
    },
    theme: {
      type: String,
      default: null,
    },
    arrowClasses: {
      type: [String, Array, Object],
      default: () => [],
    },
    withArrow: {
      type: Boolean,
      default: true,
    },
    flips: {
      type: Boolean,
      default: false,
    },
    visible: {
      type: Boolean,
      default: false,
    },
    modifiers: {
      type: Array,
      default: () => [],
    },
    placement: {
      type: String,
      validator: (value) => placements.indexOf(value) >= 0,
      default: 'bottom',
    },
  },
  data() {
    return {
      isTransitioning: false,
      isVisibleWhileTransitioning: null,
      // We need to know the current visibility in order to implement toggle(…)
      visible_: this.visible,
      showsContent: false,
      popover: Vue.observable({
        // The following props are injected into PopoverContent. They are needed to determine the CSS classes.
        theme: this.theme,
        withArrow: this.withArrow,
        arrowClasses: this.arrowClasses,
      }),
    }
  },
  computed: {
    contentSlotProps() {
      return {
        theme: this.theme,
        withArrow: this.withArrow,
        arrowClasses: this.arrowClasses,
      }
    },
    transition_() {
      const { transition, theme } = this
      if (transition != null) {
        return transition
      }
      if (theme == null) {
        return null
      }
      return `vcdk-popover-theme-${theme}-show`
    },
    portalSelector() {
      return `#${this.portalId}`
    },
  },
  watch: {
    contentSlotProps: {
      immediate: true,
      deep: true,
      handler({ theme, withArrow, arrowClasses }) {
        this.popover.theme = theme
        this.popover.withArrow = withArrow
        this.popover.arrowClasses = arrowClasses
      },
    },
    visible(visible) {
      this.setVisible(visible, { emitUpdate: false })
    },
  },
  created() {
    this.$_popper = null
  },
  methods: {
    modifier_bodySizeMode(data) {
      const mode = this.bodySizeMode_
      if (mode === BodySizeMode.AUTO) {
        return data
      }
      const { instance, offsets } = data
      const { reference, popper } = instance
      const referenceWidth = reference.clientWidth
      if (mode === BodySizeMode.AT_LEAST_TRIGGER) {
        popper.style.minWidth = referenceWidth + 'px'
        return data
      }

      if (mode === BodySizeMode.EQUALS_TRIGGER) {
        const delta = referenceWidth - offsets.popper.width
        popper.style.width = referenceWidth + 'px'
        offsets.popper.width = referenceWidth
        offsets.popper.left = offsets.popper.left - 0.5 * delta
        return data
      }
      return data
    },
    destroyPopperIfPossible() {
      const { $_popper } = this
      if ($_popper == null) {
        return
      }
      $_popper.destroy()
      this.$_popper = null
    },
    // Transition related Methods
    beforeEnter() {
      this.isTransitioning = true
    },
    async enter(el) {
      const { bodySizeMode } = this
      const bodySizeModifier = {
        name: 'bodySizeMode',
        enabled: true,
        phase: 'beforeWrite',
        requires: ['computeStyles'],
        fn: ({ state }) => {
          const widthInPx = `${state.rects.reference.width}px`
          if (bodySizeMode === BodySizeMode.SAME_AS_TRIGGER) {
            state.styles.popper.width = widthInPx
          }

          if (bodySizeMode === BodySizeMode.AT_LEAST_AS_TRIGGER) {
            state.styles.popper.minWidth = widthInPx
          }
        },
        effect: ({ state }) => {
          const widthInPx = `${state.elements.reference.offsetWidth}px`
          if (bodySizeMode === BodySizeMode.SAME_AS_TRIGGER) {
            state.elements.popper.style.width = widthInPx
          }
          if (bodySizeMode === BodySizeMode.AT_LEAST_AS_TRIGGER) {
            state.elements.popper.style.minWidth = widthInPx
          }
        },
      }

      const { offset, flips, placement, withArrow, target } = this
      const modifiers = [
        // {
        //   name: 'bodySizeMode',
        //   enabled: true,
        //   fn: this.modifier_bodySizeMode,
        // },
        bodySizeModifier,
        {
          name: 'offset',
          enabled: true,
          options: {
            offset: [0, offset],
          },
        },
        {
          name: 'flip',
          enabled: flips,
        },
        {
          name: 'arrow',
          enabled: withArrow,
        },
        {
          // See:
          // https://github.com/popperjs/popper-core/pull/985/files
          name: 'computeStyles',
          options: { adaptive: false },
          enabled: true,
        },
        ...this.modifiers,
      ]
      const options = {
        modifiers,
        placement,
      }
      this.$_popper = createPopper(target(), el, options)
    },
    afterEnter() {
      this.isTransitioning = false
      if (this.isVisibleWhileTransitioning === false) {
        this.isVisibleWhileTransitioning = null
        this.visible_ = false
        this.setVisible(false, { emitUpdate: true })
      }
    },
    beforeLeave() {
      this.isTransitioning = true
    },
    afterLeave() {
      this.isTransitioning = false
      this.destroyPopperIfPossible()
      this.showsContent = false
      if (this.isVisibleWhileTransitioning === true) {
        this.isVisibleWhileTransitioning = null
        this.visible_ = true
        this.setVisible(true, { emitUpdate: true })
      }
      if (this.isVisibleWhileTransitioning === false) {
        this.isVisibleWhileTransitioning = null
        this.visible_ = false
        this.setVisible(false, { emitUpdate: true })
      }
    },
    // Public Instance Methods
    setVisible(newVisible, { emitUpdate = true } = { emitUpdate: true }) {
      if (this.isTransitioning === true) {
        this.isVisibleWhileTransitioning = newVisible
        return
      }
      this.visible_ = newVisible
      this.showsContent = newVisible
      if (emitUpdate === true) {
        // Fires when the value for `visible` changes.
        // @arg The new value of `visible`.
        this.$emit('update:visible', this.visible_)
      }
    },
    show({ emitUpdate = true } = { emitUpdate: true }) {
      this.setVisible(true, { emitUpdate })
    },
    hide({ emitUpdate = true } = { emitUpdate: true }) {
      this.setVisible(false, { emitUpdate })
    },
    toggle({ emitUpdate = true } = { emitUpdate: true }) {
      if (this.visible_ === true) {
        this.hide({ emitUpdate })
      } else {
        this.show({ emitUpdate })
      }
    },
  },
}
</script>
