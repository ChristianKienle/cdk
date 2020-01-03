<template>
  <div style="display: flex; align-items: center; justify-content: center; height: 200px;">
    <button ref="button" @click="toggle">Toggle 'big-arrow' Popover</button>
    <CPopover trigger="$refs.button" ref="popover" theme="big-arrow" withArrow>
      <div>I am a Popover. Wheeee. 😉</div>
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
