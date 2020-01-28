<template>
  <div>
    <button ref="button" data-cy="button" @click="visible = !visible">Toggle</button>

    <CPopover :target="() => $refs.button" :visible="visible" theme="clean">
      <CPopoverContent data-cy="popover">Popover Body</CPopoverContent>
    </CPopover>
  </div>
</template>

<script>
import '@vue-cdk/popover/themes/index.css'
import Popover from '@vue-cdk/popover'

export default {
  mixins: [Popover()],
  data() {
    return {
      visible: false
    }
  }
}
</script>
