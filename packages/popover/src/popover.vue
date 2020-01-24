<template>
  <ClientOnly>
    <SimplePortal :selector="portalSelector">
      <transition :name="transition_" appear @enter="enter">
        <div
          v-if="showsBody_"
          ref="body"
          :aria-hidden="String(!visible_)"
          :class="bodyClasses"
          :style="bodyStyles_"
          v-bind="bodyAttributes"
        >
          <slot v-bind="slotProps" />
          <CPopoverArrow v-if="withArrow" ref="arrow" :class="arrowClasses" :style="arrowStyles_" />
        </div>
      </transition>
    </SimplePortal>
  </ClientOnly>
</template>

<script>
const REFS_PREFIX = '$refs.'
import NoSsr from './helper/no-ssr'
import { normalizedClasses, shortId } from './helper'
import { createPopper } from '@popperjs/core'
import { placements } from '@popperjs/core/lib/enums'
import { inBrowser } from '@vue-cdk/utils'
import { Portal as SimplePortal } from '@linusborg/vue-simple-portal'
import getTarget from './helper/get-target'
import ClientOnly from '@vue-cdk/client-only/src/client-only.vue'
import CPopoverArrow from './arrow.vue'

// You can use the `Popover` component to render popovers with any kind of content.
export default {
  name: 'Popover',
  components: {
    ClientOnly,
    SimplePortal,
    CPopoverArrow
  },
  props: {
    // CSS styles applied to the body element that wraps the contents of the popover.
    bodyStyles: {
      type: Object,
      // `{}` – no styles
      default: () => ({})
    },
    bodyAttributes: {
      type: Object,
      default: () => ({})
    },
    // The target element that the popover will be attached to.
    target: {
      required: true,
      type: [String, Function]
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
      default: 'bottom'
    }
  },
  data() {
    return {
      popperStyles_: {},
      arrowStyles_: {},
      showsBody_: false,
      visible_: this.visible,
      outOfBoundaries_: false
    }
  },
  computed: {
    isVisible() {
      return this.visible_
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
  created() {
    this.$_popper = null
  },
  beforeDestroy() {
    if (this.$_popper == null) {
      return
    }
    this.$_popper.destroy()
    this.$_popper = null
  },
  methods: {
    getTarget() {
      const { target, $parent } = this
      return getTarget({ vm: $parent, target })
    },
    async enter(el) {
      const { $refs, offset, flips, placement, withArrow } = this
      // const arrowElement = $refs.arrow != null ? $refs.arrow.$el : null
      // console.log({arrowElement})
      // const arrowOptions = arrowElement != null ? { element: arrowElement, padding: 10 }: {}
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
          // options:
        }
      ]
      const options = {
        modifiers,
        placement
      }
      const target = this.getTarget()
      this.$_popper = createPopper(target, el, options)
    },
    setVisible(newVisible) {
      this.visible_ = newVisible
      // Fires when the value for `visible` changes.
      // @arg The new value of `visible`.
      this.$emit('update:visible', this.visible_)
    },
    show() {
      const target = this.getTarget()
      if (this.showsBody_) {
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
