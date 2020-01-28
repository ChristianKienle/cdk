<template>
  <div :class="classes">
    <slot />
    <slot v-if="withArrow" name="arrow">
      <CPopoverArrow :class="arrowClasses" />
    </slot>
  </div>
</template>

<script>
import CPopoverArrow from './arrow.vue'
import normalizedClasses from './helper/normalized-classes'

export default {
  name: 'PopoverContent',
  components: { CPopoverArrow },
  inject: {
    $_popover: {
      default: {
        visible: false,
        theme: null,
        withArrow: false,
        arrowClasses: []
      }
    }
  },
  computed: {
    popoverArrowClasses() {
      return this.$_popover.arrowClasses
    },
    arrowClasses() {
      const { theme, popoverArrowClasses } = this
      return normalizedClasses([popoverArrowClasses, theme ? 'vcdk-popover--arrow' : null])
    },
    theme() {
      return this.$_popover.theme
    },
    classes() {
      const { theme, withArrow } = this
      return normalizedClasses([
        'vcdk-popover-body',
        theme ? `vcdk-popover-theme-${this.theme}` : null,
        !withArrow ? 'vcdk-popover--no-arrow' : null
      ])
    },
    withArrow() {
      return this.$_popover.withArrow
    },
    visible() {
      return this.$_popover.visible
    }
  }
}
</script>
