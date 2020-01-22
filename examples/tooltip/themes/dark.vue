<template>
  <CTooltip theme="dark">
    <button>Hover to show Tooltip</button>
    <template #content>
      <div>I am a tooltip</div>
    </template>
  </CTooltip>
</template>

<script>
import '@vue-cdk/tooltip/themes/dark.css'
export default {}
</script>
