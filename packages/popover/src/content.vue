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
        showsContent: false,
        theme: null,
        withArrow: false,
        arrowClass: null
      }
    }
  },
  computed: {
    arrowClass() {
      return this.$_popover.arrowClass
    },
    arrowClasses() {
      const { theme, arrowClass } = this
      return normalizedClasses([arrowClass, theme ? 'vcdk-popover--arrow' : null])
    },
    theme() {
      return this.$_popover.theme
    },
    classes() {
      const { theme, bodyClass = '', withArrow } = this
      const bodyClassAsArray = bodyClass.split(' ')
      return normalizedClasses([
        ...bodyClassAsArray,
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
    },
    showsContent() {
      return this.$_popover.showsContent
    }
  }
}
</script>
