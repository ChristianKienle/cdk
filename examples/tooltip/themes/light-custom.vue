<template>
  <CTooltip theme="light">
    <button>Hover to show Tooltip</button>
    <template #content>
      <div>
        <img src="./../logo-small@1x.png" width="100" height="100" />
      </div>
    </template>
  </CTooltip>
</template>

<script>
import '@vue-cdk/tooltip/themes/light.css'
export default {}
</script>
