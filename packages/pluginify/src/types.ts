import Vue from 'vue'

interface NamedComponent {
  component: Vue.Component
  name: string
}
export type DidRegisterComponentFn = (context: NamedComponent) => void


interface ComponentNameOptions {}
export type ComponentNameFn = (context: NamedComponent) => string

export interface _Options {
  componentName: ComponentNameFn
  onDidRegisterComponent: DidRegisterComponentFn
}

export type Options = Partial<_Options>
