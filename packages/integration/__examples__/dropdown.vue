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
        <CInteractionOutside @detected="visible = false">
          <div class="inside">Try to click outside</div>
        </CInteractionOutside>
      </CPopoverContent>
    </CPopover>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    toggle() {
      this.visible = !this.visible
    },
  },
}
</script>
