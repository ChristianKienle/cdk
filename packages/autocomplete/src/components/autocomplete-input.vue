<template>
  <input
    v-model="value_"
    data-vcdk-autocomplete-input
    autocomplete="off"
    type="text"
    @mouseup="handleMouseup"
    @focus="handleFocus"
    @blur="handleBlur"
    @keyup.esc="handleEscapeUp"
  />
</template>

<script>
import { AUTOCOMPLETE_KEY } from '../provide'

const warnAboutMissingParent = () => {
  // eslint-disable-next-line no-console
  console.warn(
    'AutocompleteInput should be embedded inside the Autocomplete component. It is almost useless on its own.'
  )
}

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

export default {
  name: 'AutocompleteInput',
  inject: {
    [AUTOCOMPLETE_KEY]: {
      default: null,
    },
  },
  props: {
    value: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      value_: this.value,
    }
  },
  computed: {
    autocomplete_() {
      return this[AUTOCOMPLETE_KEY]
    },
  },
  watch: {
    value_(value_) {
      this.$emit('input', value_)
    },
    value(value) {
      this.value_ = value
    },
  },
  methods: {
    /**
     * @param {MouseEvent} event
     */
    handleMouseup() {
      const { autocomplete_ } = this
      if (autocomplete_ == null) {
        warnAboutMissingParent()
        return
      }
      autocomplete_.showItems_()
    },
    handleEscapeUp() {
      const { autocomplete_ } = this
      if (autocomplete_ == null) {
        warnAboutMissingParent()
        return
      }
      autocomplete_.hideItems_()
    },
    handleFocus() {
      const { autocomplete_ } = this
      if (autocomplete_ == null) {
        warnAboutMissingParent()
        return
      }
      autocomplete_.showItems_()
    },
    handleBlur(event = {}) {
      const { autocomplete_ } = this
      if (autocomplete_ == null) {
        warnAboutMissingParent()
        return
      }

      const { relatedTarget } = event
      if (relatedTarget == null) {
        return
      }
      if (hasACItemAsParent(relatedTarget)) {
        return
      }

      autocomplete_.hideItems_()
    },
  },
}
</script>
