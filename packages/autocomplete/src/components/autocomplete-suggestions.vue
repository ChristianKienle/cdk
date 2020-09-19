<template>
  <CPopoverContent>
    <CList tabindex="-1" :items="filteredItems_" :key-field="`text`" :style="styles_">
      <template #default="{ item, active }">
        <CListItem data-vcdk-is-item="true" :item="item" :active="active">
          <slot name="item" :item="item" />
        </CListItem>
      </template>
    </CList>
  </CPopoverContent>
</template>

<script>
import CPopoverContent from '@vue-cdk/popover/src/content.vue'
import { AUTOCOMPLETE_KEY } from '../provide'

export default {
  name: 'AutocompleteSuggestions',
  components: { CPopoverContent },
  props: {
    maxHeight: {
      type: String,
      default: '200px',
    },
  },
  inject: {
    autocomplete: {
      default: null,
      from: AUTOCOMPLETE_KEY,
    },
  },
  computed: {
    styles_() {
      return {
        maxHeight: this.maxHeight,
      }
    },
    filteredItems_() {
      const { autocomplete } = this
      if (autocomplete == null) {
        return []
      }
      return autocomplete.filteredItems_
    },
  },
}
</script>
