<template>
  <Popover placement="bottom" with-arrow theme="clean">
    <template #trigger="{ show, hide }">
      <button @mouseenter="show" @mouseleave="hide">Tooltip shows hover</button>
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
