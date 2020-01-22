<template>
  <CTooltip theme="light">
    <button>Hover to show Tooltip</button>
    <template #content>
      <div>I am a tooltip</div>
    </template>
  </CTooltip>
</template>

<script>
import '@vue-cdk/tooltip/themes/light.css'
export default {}
</script>
