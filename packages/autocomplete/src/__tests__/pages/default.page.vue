<template>
  <div>
    <input data-cy="outer-input" />
    <CAutocomplete
      data-cy="autcomplete"
      :shows-items.sync="showsItems"
      :value="value"
      :items="items"
      @input="handleInput"
    >
      <template #input>
        <CAutocompleteInput v-model="value" data-cy="input" />
      </template>

      <template #item="{ item }">
        <CAutocompleteItem
          class="example-default__item"
          :data-cy="`item-${item.text}`"
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
const _toItem = (text) => ({ text })

export default {
  data() {
    return {
      showsItems: false,
      value: '',
      items: [_toItem('aaa'), _toItem('aab'), _toItem('aac')], // allCountries.map(_toItem),
    }
  },
  methods: {
    pickItem() {
      // this.showsItems = false
      // this.value = item.text
    },
    handleInput() {
      // this.value = autocompleteValue
    },
  },
}
</script>

<style>
.example-default__item {
  display: block;
}
</style>
