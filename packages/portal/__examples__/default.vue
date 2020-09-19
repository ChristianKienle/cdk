<template>
  <div>
    <p>Before Portal Target</p>
    <div id="target"></div>
    <p>After Portal Target</p>
    <p>Before Portal</p>

    <CPortal selector="#target">
      <div>Will be placed inside the #target-div.</div>
    </CPortal>
    <p>After Portal</p>
  </div>
</template>

<script>
import '@vue-cdk/popover/themes/clean.css'

export default {
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    toggle() {
      this.visible = !this.visible
    },
  },
}
</script>
