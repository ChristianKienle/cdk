# Interaction Outside
`@vue-cdk/interaction-outside` makes it easy to detect user–interactions that happen outside of a specific element/component.

## Installation
The `@vue-cdk/interaction-outside` package can be installed via NPM/Yarn:

```sh
$ npm install @vue-cdk/interaction-outside --save
```

## Usage
`@vue-cdk/interaction-outside` exposes a *Vue plugin* that you can use like this:

```js
import InteractionOutside from '@vue-cdk/interaction-outside'
import Vue from 'vue'

Vue.use(InteractionOutside)
```

The plugin makes a component called `CInteractionOutside` globally available.

Just wrap any element or component with `CInteractionOutside`. `CInteractionOutside` will listen for events and once user–interaction outside of the wrapped element/component is detected `CInteractionOutside` emits the `detected`–event.

## Examples

### Hello World
<Demo for="interaction-outside/default" />

### Ignoring Elements
You can disable the detection of outside interaction for specific elements. Simply set `ignored` to a method that returns an array of `HTMLElement`s that should be ignored.

<Demo for="interaction-outside/ignored" />

### Activating and Deactivating
By default `CInteractionOutside` is active. An active `CInteractionOutside` will listen for events and try to detect interaction outside of it. You can disable the detection of outside–interaction by setting `active` to `false`. This is useful if you want to temporary disable any *accidental* actions.

<Demo for="interaction-outside/active" />
