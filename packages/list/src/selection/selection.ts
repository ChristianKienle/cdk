interface Mutation {
  selection: string[]
  affected?: string
  event?: Event
}

export type SelectionMode = (mutation: Mutation) => string[]
export type CreateSelectionMode<O = any> = (options: O) => (mutation: Mutation) => string[]

export interface SingleSelectionModeOptions {
  allowsEmpty: boolean
}

export type SingleSelectionMode = CreateSelectionMode<SingleSelectionModeOptions>
export type MutlipleSelectionMode = CreateSelectionMode<object>
export type NoneSelectionMode = CreateSelectionMode<any>
