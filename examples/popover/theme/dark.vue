<template>
  <div style="display: flex; align-items: center; justify-content: center; height: 200px;">
    <button ref="button" @click="toggle">Toggle 'dark' Popover</button>
    <CPopover ref="popover" target="$refs.button" theme="dark" with-arrow>
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
