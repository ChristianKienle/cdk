# Tasks and Ideas

## Tasks

## Ideas

### Drag and Drop
…

### Focus Trapping
…

### Modals
…

### Overlay
…

### Master Detail
…

### Platform Utils
- get the current OS + version
- get the current browser + version
- get the current Vue version
- get the current Vue CDK version

### Deprecations Mixin
Inspired by Element-UI we could have some kind of mixin that helps to deal with incompatible changes/depcrecations/ etc.

```js
import Migrate from '@vue-cdk/migrate'

export default {
  mixins: [
    Migrate({
      props: {
        isSmall: `Use size="small" instead`
      }
    })
  ],
  props: ['isSmall', 'size']
}
```

This mixin could do so much cool things:

- Warn the developer for upcoming breaking changes when the prop/whatever is used (during development).
- Generate a test that ensures that all props/… mentioned actually exist.