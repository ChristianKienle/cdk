<template>
  <div>
    <CAutocomplete
      :shows-items.sync="showsItems"
      :value="value"
      :items="items"
      @input="handleInput"
    >
      <template #input>
        <CInteractionOutside :ignored="ignored" @detected="handleInteractionOutside">
          <CAutocompleteInput v-model="value" />
        </CInteractionOutside>
      </template>
      <CAutocompleteSuggestions ref="suggestions" style="background-color: white">
        <template #item="{ item }">
          <CAutocompleteItem
            class="example-auto-hide__item"
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
    ignored() {
      // console.log('this', this)
      const { suggestions } = this.$refs
      if (suggestions == null) {
        // $refs.suggestions can be null in case the popover is dismissed shortly before
        // the interaction outside was detected. Thus we have to handle that case.
        // In that case what we return here does not matter so we simply return an empty array.
        return []
      }
      return [suggestions.$el]
    },
    handleInteractionOutside() {
      this.showsItems = false
    },
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
.example-auto-hide__item {
  display: block;
}
</style>
