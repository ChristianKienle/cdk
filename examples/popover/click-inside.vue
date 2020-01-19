<template>
  <div>
    <button ref="button" @click="toggle">Show Popover</button>

    <CPopover ref="popover" trigger="$refs.button" boundary="viewport" with-arrow theme="clean">
      <template #default>
        <div>
          I am a Popover Body.
          <button @click="toggle">Click here to Hide the Popover</button>
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
