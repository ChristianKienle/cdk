<template>
  <div>
    <button ref="button" @click="visible = !visible">Toggle</button>

    <CPopover placement="bottom" trigger="$refs.button" :visible="visible" theme="clean" with-arrow>
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
