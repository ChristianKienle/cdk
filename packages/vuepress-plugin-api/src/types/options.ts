import { Renderer } from './renderer'

export interface Item {
  localPath: string
  path: string
}

export interface _Options {
  items: Item[]
  renderer: Renderer
}

export type Options = Partial<_Options>
