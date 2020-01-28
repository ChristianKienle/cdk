<template>
  <CTooltip theme="dark" placement="bottom">
    <button>Hover to show Tooltip</button>
    <template #content>
      <CTooltipContent>
        <img src="./../logo-small@1x.png" width="100" height="100" />
      </CTooltipContent>
    </template>
  </CTooltip>
</template>

<script>
import '@vue-cdk/tooltip/themes/dark.css'
export default {}
</script>
