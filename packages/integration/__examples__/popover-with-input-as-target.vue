<template>
  <div>
    <input
      ref="input"
      v-model="text"
      @keydown.tab="hide"
      @keyup.enter="hide"
      @keyup.esc="hide"
      @focus="show"
      @click="show"
    />
    <input style="width: 200px;" value="Focus this by pressing tab" />
    <CPopover
      placement="bottom"
      :target="() => $refs.input"
      :visible="visible"
      theme="clean"
      with-arrow
    >
      <CPopoverContent>
        <CInteractionOutside :ignored="() => [$refs.input]" @detected="visible = false">
          <div>
            <p>Text: {{ text }}</p>
            <p>Enter/ESC/Tab: will hide the popover</p>
            <p>onFocus/onClick: will show the popover</p>
          </div>
        </CInteractionOutside>
      </CPopoverContent>
    </CPopover>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: 'Edit me',
      visible: false
    }
  },
  methods: {
    show() {
      this.visible = true
    },
    hide() {
      this.visible = false
    }
  }
}
</script>
