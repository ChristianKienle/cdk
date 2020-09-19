<template>
  <div>
    <slot name="input" />
    <CPopover
      placement="bottom"
      :target="popoverTarget"
      :visible="showsItems_"
      body-size-mode="same-as-trigger"
      :theme="popoverTheme"
      :with-arrow="false"
    >
      <slot />
    </CPopover>
  </div>
</template>

<script>
import CPopover from '@vue-cdk/popover/src/popover.vue'
import rangesInSubstring from '../helper/ranges-in-string'
import { AUTOCOMPLETE_KEY } from '../provide'

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
  components: { CPopover },
  provide() {
    return {
      [AUTOCOMPLETE_KEY]: this,
    }
  },
  props: {
    popoverTheme: {
      type: String,
      default: null,
    },
    showsItems: {
      type: Boolean,
      default: null,
    },
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
    popoverTarget() {
      const { $el } = this
      if ($el == null) {
        // eslint-disable-next-line no-console
        console.error(
          'Tried to determine the popover target for a list of autocomplete items. $el is null'
        )
        return
      }
      const input = $el.querySelector('input[data-vcdk-autocomplete-input]')
      if (input == null) {
        // eslint-disable-next-line no-console
        console.error(
          'Tried to determine the popover target for a list of autocomplete items. Unable to find the corresponding input element. Have you provided an input-slot?'
        )
        return
      }
      return input
    },
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
    /** @param {InputEvent} event */
    handleInput(event) {
      this.$emit('input', event.target.value)
    },
  },
}
</script>
