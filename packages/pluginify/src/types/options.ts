import { Component } from 'vue'

interface NamedComponent { component: Component; name: string }

export type DidRegisterComponentFn = (context: NamedComponent) => void

export type GetComponentName = (context: NamedComponent) => string

export interface _Options {
  componentName: GetComponentName
  onDidRegisterComponent: DidRegisterComponentFn
}

export type Options = Partial<_Options>
