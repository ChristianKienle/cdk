export type Deactivation =
  | 'on-esc' // default
  | 'manual'

import Vue from 'vue/types/vue'

export type DeactivationHandler = () => void

export interface _ActivateOptions {
  readonly deactivation: Deactivation
  // A function thas is called when the trap is deactivated.
  readonly onDeactivate: DeactivationHandler
  // The element that should be focused initially. The focus-trap package accepts an element selector or an HTMLElement. Vue's $el is only typed Element. This is the reason why 'our' initialFocus (the one below) is typed Element – to make it more convenient for Vue developers. Internally we simply force cast to HTMLElement. Hope hope hope.
  readonly initialFocus: Element
}

export type ActivateOptions = Partial<_ActivateOptions>

export type Trapable = Vue
