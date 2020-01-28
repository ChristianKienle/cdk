<template>
  <div>
    <button ref="button" @click="toggle">Toggle Popover</button>
    <CPopover ref="popover" :target="() => $refs.button" with-arrow theme="clean" :flips="false">
      <CPopoverContent class="scroll-container">
        <p class="text" v-for="index in 35" :key="String(index)">
          I am part {{ index }} of a wonderful popover.
        </p>
      </CPopoverContent>
    </CPopover>
  </div>
</template>

<script>
import '@vue-cdk/popover/themes/clean.css'

export default {
  methods: {
    toggle() {
      this.$refs.popover.toggle()
    }
  }
}
</script>

<style scoped>
.text {
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
}
.scroll-container {
  overflow-y: scroll;
  max-width: 350px;
  max-height: 200px;
}
</style>
