<template>
  <Popover>
    <template #trigger="{toggle}">
      <button @click="toggle">Toggle</button>
    </template>
    <template #default>
      <div>Popover Body</div>
    </template>
  </Popover>
</template>

<script>
import '@vue-cdk/popover-themes/index.css'
export default {}
</script>
