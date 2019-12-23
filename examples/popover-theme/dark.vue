<template>
  <div style="display: flex; align-items: center; justify-content: center; height: 200px;">
    <CPopover theme="dark">
      <template #trigger>
        <button>Show 'dark' Popover</button>
      </template>
      <div>I am a Popover. Wheeee. 😉</div>
    </CPopover>
  </div>
</template>

<script>
import '@vue-cdk/popover/themes/dark.css'
export default {}
</script>
