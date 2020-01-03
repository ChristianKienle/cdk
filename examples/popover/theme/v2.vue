<template>
  <div style="display: flex; align-items: center; justify-content: center; height: 200px;">
    <button ref="button" @click="toggle">Toggle 'v2' Popover</button>
    <CPopover trigger="$refs.button" ref="popover" theme="v2" withArrow>
      <div>I am a Popover. Wheeee. 😉</div>
    </CPopover>
  </div>
</template>

<script>
import '@vue-cdk/popover/themes/v2.css'
export default {
  methods: {
    toggle() {
      this.$refs.popover.toggle()
    }
  }
}
</script>
