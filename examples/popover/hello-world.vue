<template>
  <CPopover>
    <template #trigger="{toggle}">
      <button @click="toggle">Toggle</button>
    </template>
    <template #default>
      <div>Popover Body</div>
    </template>
  </CPopover>
</template>

<script>
import '@vue-cdk/popover-themes/index.css'
export default {};
</script>
