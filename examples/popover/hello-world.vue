<template>
  <div>
    <button ref="button" @click="toggle">Toggle</button>

    <CPopover trigger="$refs.button" ref="popover" theme="clean">
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
    toggle() {
      this.$refs.popover.toggle()
    }
  }
}
</script>
