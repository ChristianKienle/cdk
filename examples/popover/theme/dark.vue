<template>
  <div style="display: flex; align-items: center; justify-content: center; height: 200px;">
    <button ref="button" @click="toggle">Toggle 'dark' Popover</button>
    <CPopover trigger="$refs.button" ref="popover" theme="dark" withArrow>
      <div>I am a Popover. Wheeee. 😉</div>
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
