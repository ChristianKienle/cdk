<template>
  <NoSsr>
    <SimplePortal :selector="portalSelector">
      <transition :name="transition_" appear @enter="enter">
        <div ref="body" :aria-hidden="String(!visible_)" v-if="showsBody_" :class="bodyClasses">
          <!-- :style="bodyStyles_" -->
          <slot v-bind="slotProps" />
          <CPopoverArrow :class="arrowClasses" />
        </div>
      </transition>
    </SimplePortal>
  </NoSsr>
</template>

<script>
const REFS_PREFIX = '$refs.'
import NoSsr from './helper/no-ssr'
import { normalizedClasses, shortId } from './helper'
import { createPopper, defaultModifiers } from '@popperjs/core'
import { placements } from '@popperjs/core/lib/enums'
import arrowModifier from '@popperjs/core/lib/modifiers/arrow'
import offsetModifier from '@popperjs/core/lib/modifiers/offset'
console.log('placements', placements)
console.log('arrowModifier', arrowModifier)
import { inBrowser } from '@vue-cdk/utils'
import { defaultBoundary, isValidBoundary } from './boundary'
import * as BodySizeMode from './body-size-mode'
import { Portal as SimplePortal } from '@linusborg/vue-simple-portal'
import getTrigger from './helper/get-trigger'

// You can use the `Popover` component to render popovers with any kind of content.
export default {
  name: 'Popover',
  components: {
    NoSsr,
    SimplePortal,
    CPopoverArrow: { render: h => h('div', { attrs: { 'data-popper-arrow': 'true' } }) }
  },
  props: {
    // CSS styles applied to the body element that wraps the contents of the popover.
    bodyStyles: {
      type: Object,
      // `{}` – no styles
      default: () => ({})
    },
    // The trigger that the popover will be attached to.
    trigger: {
      required: true,
      type: String
    },
    // The id of an `HTMLElement` that will act as a container for all popovers.
    portalId: {
      default: 'vcdk-popover-portal-container',
      type: String
    },
    offset: { type: Number, default: 0 },
    adjustsBodyWidth: { type: Boolean, default: false },
    adjustsVisibility: { type: Boolean, default: true },
    boundary: {
      type: String,
      default: defaultBoundary,
      validator: isValidBoundary
    },
    bodySizeMode: {
      type: String,
      default: BodySizeMode.defaultMode,
      validator: BodySizeMode.isValid
    },
    transition: {
      type: String,
      default: null
    },
    theme: {
      type: String,
      default: null
    },
    bodyClass: {
      type: String,
      default: ''
    },
    defaultBodyZIndex: {
      type: [Number, String],
      default: 1000
    },
    arrowClass: {
      type: String,
      default: null
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
      default: 'top'
    }
  },
  created() {
    this.$_popper = null
  },
  data() {
    return {
      showsBody_: false,
      visible_: this.visible,
      outOfBoundaries_: false
    }
  },
  computed: {
    isVisible() {
      return this.visible_
    },
    showsBody() {
      return this.showsBody_
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
    bodySizeMode_() {
      // Handle deprecated first for compatibility
      if (this.adjustsBodyWidth) {
        return BodySizeMode.EQUALS_TRIGGER
      }
      return this.bodySizeMode
    },
    slotProps() {
      return {
        visible: this.visible_,
        show: this.show,
        hide: this.hide,
        toggle: this.toggle
      }
    },
    portalSelector() {
      return `#${this.portalId}`
    },
    arrowClasses() {
      const { theme, arrowClass } = this
      return normalizedClasses([arrowClass, theme ? 'vcdk-popover--arrow' : null])
    },
    bodyStyles_() {
      const result = {
        ...this.bodyStyles,
        zIndex: this.defaultBodyZIndex
        // we cannot set "display" to "none" and/or "block" because then the transitions that may be applied to the popovers (by a theme) will have no effect and thus the popover will jum around.
      }

      if (this.theme == null && this.adjustsVisibility) {
        result.visibility = this.visible_ && this.outOfBoundaries_ === false ? 'visible' : 'hidden'
      }
      return result
    },
    bodyClasses() {
      const { theme, bodyClass, withArrow } = this
      const bodyClassAsArray = bodyClass.split(' ')
      return normalizedClasses([
        ...bodyClassAsArray,
        'vcdk-popover-body',
        theme ? `vcdk-popover-theme-${this.theme}` : null,
        !withArrow ? 'vcdk-popover--no-arrow' : null
      ])
    },
    // We merge the user defined modifiers with the modifiers required by FdPopper
    modifiers_() {
      return {
        updateState: {
          enabled: true,
          order: 9999999,
          fn: this.modifier_updateState
        },
        bodySizeMode: {
          enabled: true,
          order: 0,
          fn: this.modifier_bodySizeMode
        },
        flip: {
          order: 600,
          enabled: this.flips,
          flipVariations: true,
          flipVariationsByContent: true,
          behavior: [this.placement]
        },
        arrow: { enabled: this.withArrow },
        preventOverflow: {
          order: 300,
          enabled: true,
          escapeWithReference: true,
          boundariesElement: this.boundary
        },
        hide: {
          enabled: true,
          order: 800
        },
        offset: {
          enabled: true,
          offset: `0,${this.offset}`
        },
        ...this.modifiers
      }
    }
  },
  watch: {
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
  beforeDestroy() {
    this.destroyPopperInstance(true)
  },
  methods: {
    getTrigger() {
      const { trigger, $parent } = this
      return getTrigger({ vm: $parent, trigger })
    },
    enter(el) {
      const modifiers = [
        // ...defaultModifiers,
        // {
        //   name: 'arrow',
        //   enabled: true,
        //   options: {
        //     padding: 5
        //   }
        // },
        {
          name: 'offset',
          enabled: true,
          options: {
            offset: [0, 10]
          }
        }
      ]
      const placement = 'auto'
      const options = {
        modifiers,
        placement
      }
      this.$forceUpdate()
      const trigger = this.getTrigger()
      this.$_popper = createPopper(trigger, el, options) //new Popper(trigger, el, options)
    },
    modifier_bodySizeMode(data) {
      const mode = this.bodySizeMode_
      if (mode === BodySizeMode.AUTO) {
        return data
      }
      const { instance, offsets } = data
      const { reference, popper } = instance
      const referenceWidth = instance.reference.clientWidth
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
    modifier_updateState(data) {
      const rawOutOfBoundaries = data.attributes['x-out-of-boundaries']
      const isOutOfBoundaries =
        rawOutOfBoundaries === true || rawOutOfBoundaries === '' || rawOutOfBoundaries === 'true'
      this.outOfBoundaries_ = isOutOfBoundaries
      return data
    },
    destroyPopperInstance(isBeforeDestroy = false) {
      if (this.$_popper == null) {
        return
      }
      if (isBeforeDestroy === true) {
        this.$_popper.destroy()
        this.$_popper = null
        return
      }
    },
    setVisible(newVisible) {
      this.visible_ = newVisible
      // Fires when the value for `visible` changes.
      // @arg The new value of `visible`.
      this.$emit('update:visible', this.visible_)
    },
    show() {
      const trigger = this.getTrigger()
      if (this.showsBody) {
        return
      }
      this.showsBody_ = true
      this.setVisible(true)
    },
    hide() {
      this.setVisible(false)
      this.showsBody_ = false
    },
    toggle() {
      this.isVisible ? this.hide() : this.show()
    }
  }
}
</script>
