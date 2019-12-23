# Tasks and Ideas

## Tasks
- The component API renderer needs to be improved
  - A meaningful title is missing: We have access to the component name so that would be suitable in most cases.
  - There is no table of contents. There should be one that simply let's me jump to *Props*, *Events*, *Methods*, ….
  - The actual output looks ugly when displayed in the browser. Spacing is bad, etc.
  - Vue Docs was able to automatically create links to the component documentation automatically: `CLink` would automatically become an internal link to the API documentation of `CLink`.
  - At the moment, the API of a component is only available by going to a dedicated page. We are using the `additionalPages`–option that comes with VuePress which makes this super easy. However this also means that it is not possible to simply include the API documentation inline – right where we have the actual documentation for each component. I am not yet sure what makes most sense. In a perfect world we may need both.
  - At the moment there is no (automatically generated) list that allows me to quickly jump to the API documentation of every component. I always have to go to the package documentation and then to the API documentation.
- Search Integration (VuePress plugin exists)
- Finish Netlify Integration
- Find out how to best distribute the packages and actually do it.
  - At the moment we only distribute the source code of our components/plugins/mixins/styles/…. This worked great so far and may also be rasonable for a *low–level* framework like *Vue Component Development Kit*. But I feel we should think about the following things:
    - Make all packages tree-shakeable: Distributing the source code is good for tree shaking. But there are steps that have to be done to actually enable this (specify side effects in `package.json`, …). Fundamental Vue has a good setup for this.
    - Also distribute other module formats in `dist`. Fundamental Vue also has a working setup here. We can just copy that one. However since we are using Lerna (and have multiple packages) we have to find a way to make building a production build run on all packages. Should not be hard but has to be done.
    - Actually test tree shaking and the different distributed module formats.
- **`Focus Trap` needs more tests:** The focus trap component has some logic but no tests. It cannot be easily tested within a unit test though.
- **Smoke Test using Examples:** I would love to see some kind of test that simply launches every example there is and sees if there is any error logged. If yes the test should fail. In the past there were several failures that would have been caught by that. A simple rename of a component (without adjusting the examples) would cause such a failure and is totally confusing for users.
- Portal stories are not yet in the examples package

## Ideas

### Drag and Drop
…

### ✅ Focus Trapping

### Modals
…

### Overlay
…

### Master Detail
Implementing an abstract yet useful master–detail–component is not trivial. Fundamental Vue has one (SplitView) and we could just use it?

This would be another component that introduces custom styles but not that much. The only thing the SplitView component from Fundamental Vue styles is the overlay – if memory serves correctly. All other styles are only needed for the functionality.

Those custom styles could even be reduced further by using other `@vue-cdk` packages (there is one to create scroll containers and there should also be one for overlays – but not sure about that one to be honest).

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