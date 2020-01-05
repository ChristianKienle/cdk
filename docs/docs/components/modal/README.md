# Modal
The `CModal` component can be used to render modals/dialogs. `CModal` is highly customizable. By default only minimal styles are applied.

## Installation
The `@vue-cdk/modal` package can be installed via NPM/Yarn:

```sh
$ npm install @vue-cdk/modal --save
```
## Usage
`@vue-cdk/modal` exposes a *Vue plugin* that you can use like this:

```js
import Modal from '@vue-cdk/modal'
import Vue from 'vue'

Vue.use(Modal)
```

The plugin makes two components globally available:

- `CModal`: Use this component to render a modal. Modals are hidden/inactive by default.
- `CModalOverlay`: This component is rendered *behind* every modal. By default is renders a dark, translucent background. Usually you never have to interact with `CModalOverlay`. `CModalOverlay` exists in order to customize the overlay used for modals.

### Import the required Styles
Modals require CSS to work properly. `@vue-cdk/modal` ships with CSS that you have to import:

```js
import '@vue-cdk/modal/style/index.css'
```

::: warning Styles are REQUIRED
Make sure to import `@vue-cdk/modal/style/index.css`. Otherwise your modals will not work properly.
:::

## Examples
Modals can be used in many different ways. Each example highlights a different aspect of the modal package.

### Simple Modal
The following example shows how a default modal looks like.

<Demo for="modal/default" />

### Nested Modals
Modals can be nested.

<Demo for="modal/nested" />

### Custom Overlay
You can customize the overlay by proviing an `overlay`–slot. If you just want to customize the styling adding your own class is all you need to do.

<Demo for="modal/custom-overlay" />

### Nice Modal
You may have noticed that modals look kind of ugly by default. This does not have to be that way. Simply style the modal and its content as you wish to make it nicer.

<Demo for="modal/nice" />
