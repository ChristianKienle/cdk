<template>
  <div class="container">
    <button @click="visible = true">Show Tooltip of 'Button'</button>
    <button @click="visible = false">Hide Tooltip of 'Button'</button>

    <CTooltip theme="dark" :visible="visible" text="I am a Tooltip">
      <button>Button</button>
    </CTooltip>
  </div>
</template>
<script>
import '@vue-cdk/tooltip/themes/dark.css'
export default {
  data() {
    return {
      visible: false
    }
  }
}
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
.container > button {
  margin-top: 10px;
}
</style>
