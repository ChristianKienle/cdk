<template>
  <div>
    <CAutocomplete
      :shows-items.sync="showsItems"
      :value="value"
      :items="items"
      @input="handleInput"
    >
      <template #input>
        <CAutocompleteInput v-model="value" />
      </template>

      <CAutocompleteSuggestions style="background-color: white">
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
      </CAutocompleteSuggestions>
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
      items: ['aaa', 'aab', 'aac'].map(_toItem),
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
