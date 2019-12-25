<template>
  <div data-cy="popover">
    <CPopover theme="clean">
      <template #trigger="{toggle}">
        <button @click="toggle">Toggle</button>
      </template>
      <template #default>
        <div>Popover Body</div>
      </template>
    </CPopover>
  </div>
</template>

<script>
import Popover from '@vue-cdk/popover'
import '@vue-cdk/popover/themes/clean.css'

export default {
  mixins: [Popover()]
}
</script>
