<template>
  <div>
    <CAutocomplete
      :shows-items.sync="showsItems"
      :value="value"
      :items="items"
      @input="handleInput"
    >
      <template #item="{ item }">
        <CAutocompleteItem
          class="example-default__item"
          href="#"
          :item="item"
          @click.prevent="pickItem(item)"
          @keyup.enter.prevent="pickItem(item)"
        >
          <template #default="{ blocks }">
            <CAutocompleteItemText :blocks="blocks" />
          </template>
        </CAutocompleteItem>
      </template>
    </CAutocomplete>
  </div>
</template>

<script>
import allCountries from './countries'

const _toItem = (text) => ({ text })

export default {
  data() {
    return {
      showsItems: false,
      value: '',
      items: allCountries.map(_toItem),
    }
  },
  methods: {
    pickItem(item) {
      this.showsItems = false
      this.value = item.text
    },
    handleInput(autocompleteValue) {
      this.value = autocompleteValue
    },
  },
}
</script>

<style>
.example-default__item {
  display: block;
}
</style>
