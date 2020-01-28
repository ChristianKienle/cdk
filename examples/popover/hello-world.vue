<template>
  <div>
    <button ref="button" @click="$refs.popover.toggle()">Toggle</button>
    <CPopover
      ref="popover"
      with-arrow
      placement="bottom"
      :target="() => $refs.button"
      theme="clean"
    >
      <CPopoverContent>
        This is a popover. Yay!
      </CPopoverContent>
    </CPopover>
  </div>
</template>

<script>
import '@vue-cdk/popover/themes/clean.css'
export default {}
</script>
