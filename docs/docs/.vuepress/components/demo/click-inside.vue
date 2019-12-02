<template>
  <CPopover boundary="viewport" with-arrow theme="clean">
    <template #trigger>
      <button>Show Popover</button>
    </template>
    <template #default="{ hide }">
      <div>
        I am a Popover Body.
        <button @click="hide">Click here to Hide the Popover</button>
      </div>
    </template>
  </CPopover>
</template>

<script>
import "@vue-cdk/popover/themes/clean.css";
export default {};
</script>
