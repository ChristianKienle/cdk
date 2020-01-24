<template>
  <div data-cy="popover">
    <button ref="button" data-cy="toggleButton" @click="toggle">Toggle</button>
    <CPopover
      ref="popover"
      :body-attributes="{ 'data-test-attr': 'attr-value' }"
      theme="clean"
      trigger="$refs.button"
    >
      <template #default>
        <div data-cy="popoverBody">Popover Body</div>
      </template>
    </CPopover>
  </div>
</template>

<script>
import Popover from '@vue-cdk/popover'
import '@vue-cdk/popover/themes/clean.css'

export default {
  mixins: [Popover()],
  methods: {
    toggle() {
      this.$refs.popover.toggle()
    }
  }
}
</script>
