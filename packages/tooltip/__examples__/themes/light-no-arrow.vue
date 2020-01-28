<template>
  <CTooltip no-arrow placement="bottom" theme="light">
    <button>Hover to show Tooltip</button>
    <template #content>
      <CTooltipContent>I am a tooltip</CTooltipContent>
    </template>
  </CTooltip>
</template>

<script>
import '@vue-cdk/tooltip/themes/light.css'
export default {}
</script>
