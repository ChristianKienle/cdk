# Focus Trap
The focus trap package makes it easy to trap the focus within a component/element. `@vue-cdk/focus-trap` is a wrapper around the [focus-trap package from @davidtheclark](https://github.com/davidtheclark/focus-trap). The main motivation of this wrapper was to make it more convenient for Vue developers.

## Overview
The main objective of `@vue-cdk/focus-trap` is to make focus trapping more convenient. In order to serve different needs `@vue-cdk/focus-trap` comes with both, high– and low–level ways to accomplish focus trapping.

- **High Level Focus Trap Component:** `@vue-cdk/focus-trap` contains a component called `CFocusTrap`. You can use this component to trap the focus within a wrapped container element or component.
- **Low Level Utility Function:** `@vue-cdk/focus-trap` also exports a function that allows you to create traps manually.

## Installation

``` sh
$ npm install @vue-cdk/focus-trap --save
```

## Usage

### Using the Plugin
After installing `@vue-cdk/focus-trap` you may simply use the Vue plugin:

```js
import Vue from 'vue'
import FocusTrap from '@vue-cdk/focus-trap'
Vue.use(FocusTrap /*, optional options */)
```

The plugin globally registers a component that can be used to create focus traps. This component is called `CFocusTrap`. Please refer to the examples below to see how it is used.

### Using the Low–Level Utilities

`createFocusTrap` is the main entry point to the low-level API. The basic usage goes like this:

```js
import { createFocusTrap } from '@vue-cdk/focus-trap'
// `vm` is an instance of a Vue component
const trap = createFocusTrap(vm)
trap.activate()
// later… trap.deactivate()
```

`createFocusTrap` expects an instance of a Vue component you would like to trap the focus in. This function returns a `FocusTrap`-object that you should strongly reference – for example by assinging it to a property:

```js
methods: {
    enableTrap() {
        this.trap = createFocusTrap(this)
        // now you can use the trap
    }
}
```

`FocusTrap` exposes two methods that you can use to activate and deactivate the trap on the Vue instance you intially passed to `createFocusTrap`.

#### `activate(options)`

Activates the focus trap. The options are optional and have to following shape:

```ts
export interface _ActivateOptions {
  readonly deactivation: Deactivation
  // A function thas is called when the trap is deactivated.

  readonly onDeactivate: () => void

  // The element that should be focused initially. The focus-trap package accepts an element selector or an HTMLElement. Vue's $el is only typed Element. This is the reason why 'our' initialFocus (the one below) is typed Element – to make it more convenient for Vue developers. Internally we simply force cast to HTMLElement. Hope hope hope.
  readonly initialFocus: Element
}

export type Deactivation =
  | 'on-esc' // default
  | 'manual'
```

#### `deactivate()`

Deactivates the focus trap.

::: warning
You should always deactivate a previously activated trap. The last moment you can safely deactivate a trap is in [`beforeDestroy`](https://vuejs.org/v2/api/#beforeDestroy).
:::

### Using the (High-Level) Vue Component
The low-level API should only be used in case you really need it. Using the high-level API is more convenient. You can use it like this:

<Demo for="focus-trap/component" />

## More Examples

::: warning
On iOS the user can escape an active trap by tapping on the down arrow/up arrow buttons in Safari. This is a [known issue](https://github.com/twbs/bootstrap/issues/26770). Safari does not emit any events when tappingon the down arrow and/or up arrow. A future modal component should fix that issue though.
:::

### Using `CFocusTrap`

### Hello World
<Demo for="focus-trap/default" />

### Nested Focus Trapping
<Demo for="focus-trap/nested" />

## API
- [Focus Trap](./../../api/focus-trap)
