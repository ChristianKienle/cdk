<template>
  <div>
    <button ref="button" @mouseenter="show" @mouseleave="hide">Tooltip shows hover</button>
    <CPopover ref="popover" target="$refs.button" placement="bottom" with-arrow theme="clean">
      <template #default>
        <div>Popover Body</div>
      </template>
    </CPopover>
  </div>
</template>

<script>
import '@vue-cdk/popover/themes/index.css'
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
