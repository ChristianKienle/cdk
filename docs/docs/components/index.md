# Components

The following components/plugins/mixins are available:

- [List](./list)
- [Infinite Scroll](./infinite-scroll)
- [Link](./link)
- [Popover](./popover)
- [Client Only](./client-only)
- [Match Media](./match-media)
- [Scroll Container](./scroll-container)
- [Focus Trap](./focus-trap)

## Usage

In general, components/plugins/mixins are grouped into packages that can be consumed individually. This allows you to incrementally adopt _Vue Component Development Kit_.

Every package exposes by default a _Vue plugin_ that can be installed globally by using `Vue.use(…)`. For example:

```js
import Vue from "vue";
import List from "@vue-cdk/list";

Vue.use(List /* options (optional) */);
```

### Options

All plugins share a common set of options.

```js
import Vue from 'vue'
import List from '@vue-cdk/list'

const options = {
  componentName({ name, component }) {
    return `MyPrefix${name}`
  },
  onDidRegisterComponent({ name, component }) {
    // Do something with `name`|`component`
    console.log(`did register component ${name}`)
  }
}

Vue.use(List, options)
```

- `componentName` allows you to change the (global) name of a component. By default components are prefixed with `C`.
- `onDidRegisterComponent` is called for every component the plugin registered globally.
