<template>
  <div>
    <button ref="button" @click="visible = !visible">Toggle</button>

    <CPopover trigger="$refs.button" :visible="visible" theme="clean" withArrow>
      <template #default>
        <div>Popover Body</div>
      </template>
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
  }
}
</script>
