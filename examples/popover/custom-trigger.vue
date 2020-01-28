<template>
  <div>
    <button ref="button" @mouseenter="show" @mouseleave="hide">Tooltip shows hover</button>
    <CPopover
      ref="popover"
      :target="() => $refs.button"
      placement="bottom"
      with-arrow
      theme="clean"
    >
      <CPopoverContent>
        <div>Popover Body</div>
      </CPopoverContent>
    </CPopover>
  </div>
</template>

<script>
import '@vue-cdk/popover/themes/clean.css'
export default {
  methods: {
    show() {
      this.$refs.popover.show()
    },
    hide() {
      this.$refs.popover.hide()
    }
  }
}
</script>
