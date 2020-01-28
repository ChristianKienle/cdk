<template>
  <div>
    <button ref="button" @click="toggle">Toggle</button>
    <CPopover ref="popover" placement="bottom" target="$refs.button">
      <CPopoverContent class="vcdk-example-popover__styled-content__content">
        <div>this is a popover content. yay.</div>
      </CPopoverContent>
    </CPopover>
  </div>
</template>

<script>
import '@vue-cdk/popover/themes/index.css'

export default {
  methods: {
    show() {
      this.$refs.popover.show()
    },
    toggle() {
      this.$refs.popover.toggle()
    }
  }
}
</script>

<style>
.vcdk-example-popover__styled-content__content {
  background-color: red;
}
</style>
