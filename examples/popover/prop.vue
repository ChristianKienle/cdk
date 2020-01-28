<template>
  <div>
    <button ref="button" @click="visible = !visible">Toggle</button>

    <CPopover
      placement="bottom"
      :target="() => $refs.button"
      :visible="visible"
      theme="clean"
      with-arrow
    >
      <CPopoverContent>
        <div>Popover Body</div>
      </CPopoverContent>
    </CPopover>
  </div>
</template>

<script>
import '@vue-cdk/popover/themes/index.css'

export default {
  data() {
    return {
      visible: false
    }
  }
}
</script>
