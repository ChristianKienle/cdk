<template>
  <div>
    <button ref="button" @click="toggle">Toggle Popover</button>
    <CPopover
      ref="popover"
      target="$refs.button"
      with-arrow
      theme="clean"
      :flips="false"
      :body-styles="{
        overflowY: 'scroll',
        maxWidth: '350px',
        maxHeight: '200px'
      }"
    >
      <template #default>
        <div>
          <p v-for="index in 35" :key="String(index)">
            I am part {{ index }} of a wonderful popover.
          </p>
        </div>
      </template>
    </CPopover>
  </div>
</template>

<script>
import '@vue-cdk/popover/themes/index.css'
export default {
  methods: {
    toggle() {
      this.$refs.popover.toggle()
    }
  }
}
</script>
