<template>
  <div style="display: flex; align-items: center; justify-content: center; height: 200px;">
    <CPopover theme="clean" withArrow>
      <template #trigger>
        <button>Show 'big-arrow' Popover</button>
      </template>
      <div>I am a Popover. Wheeee. 😉</div>
    </CPopover>
  </div>
</template>

<script>
import '@vue-cdk/popover/themes/clean.css'
export default {}
</script>
