<template>
  <Popover boundary="viewport" with-arrow theme="clean">
    <template #trigger="{ toggle }">
      <button @click="toggle">Show Popover</button>
    </template>
    <template #default="{ hide }">
      <div>
        I am a Popover Body.
        <button @click="hide">Click here to Hide the Popover</button>
      </div>
    </template>
  </Popover>
</template>

<script>
import '@vue-cdk/popover-themes/index.css'
export default {}
</script>
