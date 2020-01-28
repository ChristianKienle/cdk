<template>
  <ClientOnly>
    <SimplePortal :selector="portalSelector">
      <transition
        :name="transition_"
        appear
        @leave-cancelled="leaveCancelled"
        @enter-cancelled="enterCancelled"
        @after-leave="afterLeave"
        @after-enter="afterEnter"
        @enter="enter"
        @before-enter="beforeEnter"
        @before-leave="beforeLeave"
        @leave="leave"
      >
        <slot v-if="popover.showsContent" v-bind="slotProps" />
      </transition>
    </SimplePortal>
  </ClientOnly>
</template>

<script>
const TRANSITION_STATE = Object.freeze({
  entering: 'entering',
  leaving: 'leaving',
  active: 'active',
  inactive: 'inactive'
})

const REFS_PREFIX = '$refs.'
import shortId from './helper/short-id'
import normalizedClasses from './helper/normalized-classes'
import { createPopper } from '@popperjs/core'
import { placements } from '@popperjs/core/lib/enums'
import { inBrowser } from '@vue-cdk/utils'
import { Portal as SimplePortal } from '@linusborg/vue-simple-portal'
import ClientOnly from '@vue-cdk/client-only/src/client-only.vue'
import CPopoverArrow from './arrow.vue'
import Vue from 'vue'

// You can use the `Popover` component to render popovers with any kind of content.
export default {
  name: 'Popover',
  components: {
    ClientOnly,
    SimplePortal
  },
  provide() {
    return {
      $_popover: this.popover
    }
  },
  props: {
    // The target element that the popover will be attached to.
    target: {
      required: true,
      type: Function
    },
    // The id of an `HTMLElement` that will act as a container for all popovers.
    portalId: {
      default: 'vcdk-popover-portal-container',
      type: String
    },
    // The distance between the popover body and the target element.
    offset: {
      type: Number,
      // `5px`
      default: 5
    },
    transition: {
      type: String,
      default: null
    },
    theme: {
      type: String,
      default: null
    },
    arrowClasses: {
      type: [String, Array, Object],
      default: () => []
    },
    withArrow: {
      type: Boolean,
      default: true
    },
    flips: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: false
    },
    modifiers: {
      type: Object,
      default: () => ({})
    },
    placement: {
      type: String,
      validator: value => placements.indexOf(value) >= 0,
      default: 'bottom'
    }
  },
  data() {
    return {
      queue: [],
      entering: false,
      leaving: false,
      disablePortal: false,
      popperStyles_: {},
      arrowStyles_: {},
      popover: Vue.observable({
        transitionState: TRANSITION_STATE.inactive,
        visible: this.visible,
        showsContent: false,
        theme: this.theme,
        withArrow: this.withArrow,
        arrowClasses: this.arrowClasses
      })
    }
  },
  computed: {
    isVisible() {
      return this.popover.visible
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
    slotProps() {
      return {
        transitionState: this.popover.transitionState,
        entering: this.entering,
        visible: this.popover.visible,
        show: this.show,
        hide: this.hide,
        toggle: this.toggle
      }
    },
    portalSelector() {
      return `#${this.portalId}`
    }
  },
  watch: {
    slotProps: {
      deep: true,
      initial: true,
      handler(slotProps) {
        this.$emit('slotProps', slotProps)
      }
    },
    visible(visible, oldVisible) {
      if (visible === oldVisible) {
        return
      }
      if (visible === true && (oldVisible === false || oldVisible === null)) {
        this.show()
      }
      if (visible === false && oldVisible === true) {
        this.hide()
      }
    }
  },
  created() {
    this.$_popper = null
  },
  beforeDestroy() {
    this.destroyPopperIfPossible()
  },
  methods: {
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
      this.destroyPopperIfPossible()
      this.popover.transitionState = TRANSITION_STATE.entering
      this.entering = true
    },
    async enter(el) {
      this.popover.transitionState = TRANSITION_STATE.entering
      this.entering = true
      const { $refs, offset, flips, placement, withArrow } = this
      const modifiers = [
        {
          name: 'offset',
          enabled: true,
          options: {
            offset: [0, offset]
          }
        },
        {
          name: 'flip',
          enabled: flips
        },
        {
          name: 'arrow',
          enabled: withArrow
        }
      ]
      const options = {
        modifiers,
        placement
      }
      const target = this.getTarget()
      this.$_popper = createPopper(target, el, options)
    },
    afterEnter() {
      this.entering = false
      this.popover.transitionState = TRANSITION_STATE.active
    },
    enterCancelled() {
      this.entering = false
      this.popover.transitionState = TRANSITION_STATE.inactive
    },
    beforeLeave() {
      this.leaving = true
      this.popover.transitionState = TRANSITION_STATE.leaving
    },
    leave() {
      this.leaving = true
      this.popover.transitionState = TRANSITION_STATE.leaving
    },
    leaveCancelled() {
      this.popover.transitionState = TRANSITION_STATE.active
      this.leaving = false
    },
      afterLeave() {
        this.disablePortal = true
        this.popover.transitionState = TRANSITION_STATE.inactive
        this.destroyPopperIfPossible()
      },
    getTarget() {
      return this.target()
    },
    setVisible(newVisible) {
      this.popover.visible = newVisible
      // Fires when the value for `visible` changes.
      // @arg The new value of `visible`.
      this.$emit('update:visible', this.popover.visible)
    },
    show() {
      this.queue = [...this.queue, true]
      this.popover.showsContent = true
      this.popover.visible = true
    },
    hide() {
      this.queue = [...this.queue, false]
      this.popover.showsContent = false
      this.popover.visible = false
    },
    toggle() {
      this.isVisible ? this.hide() : this.show()
    }
  }
}
</script>
