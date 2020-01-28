<template>
  <CTooltip no-arrow placement="bottom" theme="dark">
    <button>Hover to show Tooltip</button>
    <template #content>
      <CTooltipContent>I am a tooltip</CTooltipContent>
    </template>
  </CTooltip>
</template>

<script>
import '@vue-cdk/tooltip/themes/dark.css'
export default {}
</script>
