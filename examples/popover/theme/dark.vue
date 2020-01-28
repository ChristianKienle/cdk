<template>
  <div class="box">
    <button ref="button" @click="toggle">Toggle 'dark' Popover</button>
    <CPopover ref="popover" :target="() => $refs.button" theme="dark" with-arrow>
      <CPopoverContent>I am a Popover. Wheeee. 😉</CPopoverContent>
    </CPopover>
  </div>
</template>

<script>
import '@vue-cdk/popover/themes/dark.css'
export default {
  methods: {
    toggle() {
      this.$refs.popover.toggle()
    }
  }
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
