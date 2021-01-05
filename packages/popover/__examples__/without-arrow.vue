<template>
  <div>
    <button ref="button" @click="toggle">Toggle</button>

    <CPopover
      ref="popover"
      :with-arrow="false"
      placement="bottom"
      :target="() => $refs.button"
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
    toggle() {
      this.$refs.popover.toggle()
    },
  },
}
</script>
