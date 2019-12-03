<template>
  <div style="display: flex;">
    <CPopover body-size-mode="at-least-trigger" with-arrow theme="clean">
      <template #trigger>
        <button>Small Trigger</button>
      </template>

      <template #default>
        <p style="padding: 20px; width: 250px;">
          I am a Popover Body.
        </p>
      </template>
    </CPopover>

    <CPopover body-size-mode="at-least-trigger" with-arrow theme="clean">
      <template #trigger>
        <button style="width: 250px;">Show Popover</button>
      </template>
      <template #default>
        <div>I am a Popover Body.</div>
      </template>
    </CPopover>
  </div>
</template>

<script>
import '@vue-cdk/popover-themes/index.css'
export default {};
</script>
