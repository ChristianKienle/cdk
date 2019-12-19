<template>
  <div style="display: flex;">
    <CPopover body-size-mode="equal-trigger" with-arrow theme="clean">
      <template #trigger="{toggle}">
        <button @click="toggle">Small Trigger</button>
      </template>
      <template #default>
        <div>I am a Popover Body.</div>
      </template>
    </CPopover>

    <CPopover body-size-mode="equal-trigger" with-arrow theme="clean">
      <template #trigger="{toggle}">
        <button @click="toggle" style="width: 250px;">Show Trigger</button>
      </template>
      <template #default>
        <div>I am a Popover Body.</div>
      </template>
    </CPopover>
  </div>
</template>

<script>
import '@vue-cdk/popover/themes/index.css'
export default {}
</script>
