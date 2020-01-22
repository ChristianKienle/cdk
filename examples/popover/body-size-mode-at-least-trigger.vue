<template>
  <div style="display: flex;">
    <button ref="buttonA" @click="toggleA">Small Trigger</button>
    <button ref="buttonB" style="width: 250px;" @click="toggleB">Show Trigger</button>
    <CPopover
      ref="popoverA"
      target="$refs.buttonA"
      body-size-mode="at-least-trigger"
      with-arrow
      theme="clean"
    >
      <template #default>
        <div>I am a Popover Body.</div>
      </template>
    </CPopover>

    <CPopover
      ref="popoverB"
      target="$refs.buttonB"
      body-size-mode="at-least-trigger"
      with-arrow
      theme="clean"
    >
      <template #default>
        <div>I am a Popover Body.</div>
      </template>
    </CPopover>
  </div>
</template>

<script>
import '@vue-cdk/popover/themes/index.css'
export default {
  methods: {
    toggleA() {
      this.$refs.popoverA.toggle()
    },
    toggleB() {
      this.$refs.popoverB.toggle()
    }
  }
}
</script>
