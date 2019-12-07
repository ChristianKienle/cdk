<template>
  <div>
    <CPopoverTrigger ref="trigger" @click.native="handleClickOnTrigger">
      <slot name="trigger" v-bind="slotProps" />
    </CPopoverTrigger>
    <SimplePortal :selector="portalSelector">
      <div ref="body" :aria-hidden="String(!visible_)" :class="bodyClasses" :style="bodyStyles_">
        <slot v-bind="slotProps" />
        <vp-arrow x-arrow :class="arrowClasses" />
      </div>
    </SimplePortal>
  </div>
</template>

<script>
import { normalizedClasses, shortId } from './helper'
import Popper from 'popper.js'
import { inBrowser } from '@vue-cdk/utils'
import { defaultBoundary, isValidBoundary } from './boundary'
import * as BodySizeMode from './body-size-mode'
import { Portal as SimplePortal } from '@vue-cdk/portal'

const CPopoverTrigger = {
  mounted() {
    this.$parent.popperReference = this.$el
    this.$parent.updatePopperInstance()
  },
  render() {
    return this.$scopedSlots.default()
  }
}

export default {
  name: 'Popover',
  components: {
    CPopoverTrigger,
    SimplePortal,
    VpArrow: { render: h => h('span') }
  },
  props: {
    bodyStyles: {
      type: Object,
      default: () => {}
    },
    portalId: { default: () => 'vcdk-popover-portal-container', type: String },
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
    theme: { type: String, default: null },
    bodyClass: { type: String, default: '' },
    defaultBodyZIndex: { type: [Number, String], default: 1000 },
    arrowClass: { type: String, default: null },
    transition: { type: String, default: 'fade' },
    withArrow: { type: Boolean, default: false },
    flips: { type: Boolean, default: true },
    visible: { type: Boolean, default: false },
    modifiers: {
      type: Object,
      default: () => {}
    },
    placement: {
      type: String,
      validator: value => Popper.placements.indexOf(value) >= 0,
      default: 'bottom'
    }
  },
  data() {
    return {
      visible_: this.visible,
      outOfBoundaries_: false
    }
  },
  computed: {
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
    // This computed prop simply references every prop that, when changed
    // should cause the Popper-instance to be recreated.
    stateThatRequiredPopperInstanceUpdate() {
      return {
        offset: this.offset,
        flips: this.flips,
        withArrow: this.withArrow,
        placement: this.placement
      }
    },
    hasCustomTriggerLogic() {
      return this.$slots.trigger == null && this.$scopedSlots.trigger != null
    },
    arrowClasses() {
      const { theme, arrowClass } = this
      return normalizedClasses([arrowClass, theme ? 'vcdk-popover--arrow' : null])
    },
    bodyStyles_() {
      const result = {
        ...this.bodyStyles,
        zIndex: this.defaultBodyZIndex
      }

      if (this.theme == null && this.adjustsVisibility) {
        // We cannot adjust "display" because this will result in the popover body jumping around.
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
          enabled: this.flips
        },
        arrow: { enabled: this.withArrow },
        preventOverflow: {
          enabled: true,
          escapeWithReference: true,
          boundariesElement: this.boundary
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
    adjustsBodyWidth() {
      this.updatePopperInstance()
    },
    stateThatRequiredPopperInstanceUpdate: {
      deep: true,
      handler() {
        this.updatePopperInstance()
      }
    },
    visible(visible) {
      this.visible_ = visible
      if (visible && this.popperInstance == null) {
        this.updatePopperInstance()
      }
      this.scheduleUpdate()
    }
  },
  beforeDestroy() {
    this.destroyPopperInstance(true)
  },
  mounted() {
    this.$forceUpdate()
  },
  methods: {
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
    handleClickOnTrigger() {
      if (this.hasCustomTriggerLogic) {
        return
      }
      this.toggle()
    },
    destroyPopperInstance(isBeforeDestroy = false) {
      if (this.popperInstance == null) {
        return
      }
      if (isBeforeDestroy === true) {
        this.popperInstance.destroy()
        this.popperInstance = null
        return
      }
      const popoverNode = this.$refs.body
      const trigger = this.$refs.trigger
      if (this.visible_ === false) {
        if (popoverNode != null && popoverNode.parentNode != null) {
          popoverNode.parentNode.removeChild(popoverNode)
        }
      } else if (trigger) {
        trigger.$el.appendChild(popoverNode)
      }
    },
    updatePopperInstance() {
      if (inBrowser() === false) {
        return
      }
      this.destroyPopperInstance()
      const { placement, modifiers_: modifiers, popperReference } = this
      if (popperReference == null) {
        return
      }
      const body = this.$refs.body
      if (body == null) {
        return
      }
      const options = { modifiers, placement }
      this.popperInstance = new Popper(popperReference, body, options)
    },
    scheduleUpdate() {
      if (inBrowser() === false) {
        return
      }
      if (this.popperInstance) {
        this.popperInstance.scheduleUpdate()
      }
    },
    setVisible(newVisible) {
      this.visible_ = newVisible
      this.$emit('update:visible', this.visible_)
      if (this.visible_ && this.popperInstance == null) {
        this.updatePopperInstance()
      }
      setTimeout(this.scheduleUpdate)
    },
    show() {
      this.setVisible(true)
    },
    hide(event) {
      this.setVisible(false)
    },
    toggle() {
      this.setVisible(!this.visible_)
    }
  }
}
</script>
