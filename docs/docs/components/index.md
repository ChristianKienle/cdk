---
sidebar: false
---


# Components

The following components/plugins/mixins are available:

<ul>
  <template v-for="componentPage in $vcdkDocsComponentPages">
    <li>
      <router-link :to="{ name: componentPage.key }" :key="componentPage.key">{{componentPage.title}}</router-link>
    </li>
  </template>
</ul>

## General Usage Instructions
In general, components/plugins/mixins are grouped into packages that can be consumed individually. This allows you to incrementally adopt _Vue Component Development Kit_.

Usually a package exposes a _Vue plugin_ that can installed by using `Vue.use(…)`. For example:

```js
import Vue from 'vue'
import List from '@vue-cdk/list'

Vue.use(List /* options (optional) */)
```

Every package that exposes a _Vue Plugin_ also exposes a Vue mixin factory. You can use to create _Vue mixins_:

```js
import List from '@vue-cdk/list'
export default {
  mixins: [
    List(/* options (optional) */)
  ]
}
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
