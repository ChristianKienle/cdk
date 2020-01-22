<template>
  <div style="display: flex; align-items: center; justify-content: center; height: 200px;">
    <button ref="button" @click="toggle">Toggle 'clean' Popover</button>
    <CPopover ref="popover" placement="bottom" target="$refs.button" with-arrow theme="clean">
      <div>I am a Popover. Wheeee. 😉</div>
    </CPopover>
  </div>
</template>

<script>
import '@vue-cdk/popover/themes/clean.css'
export default {
  methods: {
    toggle() {
      this.$refs.popover.toggle()
    }
  }
}
</script>
