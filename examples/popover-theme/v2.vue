<template>
  <div style="display: flex; align-items: center; justify-content: center; height: 200px;">
    <CPopover theme="v2">
      <template #trigger>
        <button>Show 'dark' Popover</button>
      </template>
      <div>I am a Popover. Wheeee. 😉</div>
    </CPopover>
  </div>
</template>

<script>
import '@vue-cdk/popover/themes/v2.css'
export default {}
</script>
