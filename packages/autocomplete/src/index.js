import pluginify from '@vue-cdk/pluginify'
import Autocomplete from './components/autocomplete.vue'
import AutocompleteItem from './components/autocomplete-item.vue'
import AutocompleteInput from './components/autocomplete-input.vue'
import AutocompleteSuggestions from './components/autocomplete-suggestions.vue'
import AutocompleteItemText from './components/autocomplete-item-text.vue'

export default pluginify(
  Autocomplete,
  AutocompleteItem,
  AutocompleteItemText,
  AutocompleteInput,
  AutocompleteSuggestions
)
export {
  Autocomplete,
  AutocompleteItem,
  AutocompleteItemText,
  AutocompleteInput,
  AutocompleteSuggestions,
}
