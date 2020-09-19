<template>
  <div data-cy="popover">
    <button ref="button" data-cy="toggleButton" @click="toggle">Toggle</button>
    <CPopover ref="popover" with-arrow theme="clean" :target="() => $refs.button">
      <CPopoverContent data-cy="popoverBody">Popover Body</CPopoverContent>
    </CPopover>
  </div>
</template>

<script>
import Popover from '@vue-cdk/popover'
import '@vue-cdk/popover/themes/clean.css'

export default {
  mixins: [Popover()],
  methods: {
    toggle() {
      this.$refs.popover.toggle()
    },
  },
}
</script>
