<template>
  <div>
    <input
      ref="input"
      autocomplete="off"
      type="text"
      :value="value"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    />

    <CPopover
      placement="bottom"
      :target="() => $refs.input"
      :visible="showsItems_"
      body-size-mode="same-as-trigger"
      theme="clean"
      with-arrow
    >
      <CPopoverContent ref="content">
        <CList tabindex="-1" :items="filteredItems_" style="max-height: 200px" :key-field="`text`">
          <template #default="{ item, active }">
            <CListItem data-vcdk-is-item="true" :item="item" :active="active">
              <slot name="item" :item="item" />
            </CListItem>
          </template>
        </CList>
      </CPopoverContent>
    </CPopover>
  </div>
</template>

<script>
import CPopover from '@vue-cdk/popover/src/popover.vue'
import CPopoverContent from '@vue-cdk/popover/src/content.vue'
import CList from '@vue-cdk/list/src/list.vue'
import rangesInSubstring from './helper/ranges-in-string'

/**
 * @param {HTMLElement} node
 */
const hasACItemAsParent = (node) => {
  if (node == null) {
    return false
  }
  if (node.dataset.vcdkIsItem != null) {
    return true
  }
  return hasACItemAsParent(node.parentElement)
}
/** @type {import('./../types/autocomplete').AutocompleteFilter}*/
const defaultFilter = (value, items) =>
  items
    .map((item) => {
      return {
        ...item,
        highlightRanges: rangesInSubstring(value, item.text),
      }
    })
    .filter((item) => {
      const text = item.text.toLocaleLowerCase()
      const matches = text.indexOf(value.toLocaleLowerCase()) >= 0
      return matches
    })

export default {
  name: 'Autocomplete',
  components: { CList, CPopover, CPopoverContent },
  props: {
    showsItems: { type: Boolean, required: false, default: null },
    value: {
      required: true,
      type: String,
    },
    items: {
      type: Array,
      required: true,
    },
    filter: {
      type: Function,
      default: defaultFilter,
    },
  },
  data() {
    return {
      showsItems_: this.showsItems || false,
    }
  },
  computed: {
    filteredItems_() {
      return this.filter(this.value, this.items)
    },
  },
  watch: {
    showsItems(showsItems) {
      this.showsItems_ = showsItems
    },
  },
  methods: {
    showItems_() {
      this.showsItems_ = true
      this.emitShowsItemsUpdate_()
    },
    hideItems_() {
      this.showsItems_ = false
      this.emitShowsItemsUpdate_()
    },
    emitShowsItemsUpdate_() {
      this.$emit('update:showsItems', this.showsItems_)
    },
    handleFocus() {
      this.showItems_()
    },
    handleBlur(event = {}) {
      const { relatedTarget } = event
      if (relatedTarget == null) {
        return
      }
      if (hasACItemAsParent(relatedTarget)) {
        return
      }

      this.hideItems_()
    },
    /**
     * @param {InputEvent} event
     */
    handleInput(event) {
      this.$emit('input', event.target.value)
    },
  },
}
</script>
