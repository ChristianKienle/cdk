<template>
  <div style="display: flex;">
    <CPopover body-size-mode="equal-trigger" with-arrow theme="clean">
      <template #trigger>
        <button>Small Trigger</button>
      </template>
      <template #default>
        <div>I am a Popover Body.</div>
      </template>
    </CPopover>

    <CPopover body-size-mode="equal-trigger" with-arrow theme="clean">
      <template #trigger>
        <button style="width: 250px;">Show Trigger</button>
      </template>
      <template #default>
        <div>I am a Popover Body.</div>
      </template>
    </CPopover>
  </div>
</template>

<script>
import "@vue-cdk/popover/themes/clean.css";
export default {};
</script>
