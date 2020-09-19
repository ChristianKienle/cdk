<template>
  <div class="box">
    <button ref="button" @click="toggle">Toggle 'clean' Popover</button>
    <CPopover
      ref="popover"
      placement="bottom"
      :target="() => $refs.button"
      with-arrow
      theme="clean"
    >
      <CPopoverContent>I am a Popover. Wheeee. 😉</CPopoverContent>
    </CPopover>
  </div>
</template>

<script>
import '@vue-cdk/popover/themes/clean.css'
export default {
  methods: {
    toggle() {
      this.$refs.popover.toggle()
    },
  },
}
</script>

<style scoped>
.box {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
}
</style>
