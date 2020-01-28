<template>
  <div>
    <button ref="button" @click="toggle">Toggle</button>

    <CPopover
      placement="bottom"
      :target="() => $refs.button"
      :visible="visible"
      theme="clean"
      with-arrow
    >
      <CPopoverContent>
        Popover Body
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
  },
  methods: {
    toggle() {
      this.visible = !this.visible
    }
  }
}
</script>
