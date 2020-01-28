<template>
  <div class="box">
    <button ref="button" @click="toggle">Toggle 'big-arrow' Popover</button>
    <CPopover ref="popover" :target="() => $refs.button" theme="big-arrow" with-arrow>
      <CPopoverContent>I am a Popover. Wheeee. 😉</CPopoverContent>
    </CPopover>
  </div>
</template>

<script>
import '@vue-cdk/popover/themes/big-arrow.css'
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
