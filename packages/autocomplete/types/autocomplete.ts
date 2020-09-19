export type AutocompleteItem = {
  readonly text: String
}
export type AutocompleteHighlightRange = {
  readonly start: number
  readonly length: number
}

export type MatchingAutocompleteItem = AutocompleteItem & {
  readonly highlightRanges: AutocompleteHighlightRange[]
}

export type AutocompleteFilter = (value: String, items: AutocompleteItem[]) => MatchingAutocompleteItem[]
