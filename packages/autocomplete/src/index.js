import Autocomplete from './autocomplete.vue'
import AutocompleteItem from './autocomplete-item.vue'
import AutocompleteItemText from './autocomplete-item-text.vue'
import pluginify from '@vue-cdk/pluginify'

export default pluginify(Autocomplete, AutocompleteItem, AutocompleteItemText)
export { Autocomplete, AutocompleteItem, AutocompleteItemText }
