# Customizing
*Vue Component Development Kit* can be customized.

## Plugin Options
A lot of *Vue Component Development Kit* packages export a *Vue plugin*. Usually you simply call `Vue.use(Plugin)` and you are done. You should know that all *Vue Component Development Kit* packages that export a Vue plugin, accept a common set of options. Some plugins support more options than others but all of them share the same minimum set of options that allow you to customize basic things like the component name of the components.

The following TypeScript declarations show which options are currently supported.

<<< ../packages/pluginify/src/types/options.ts

### Change the Component Name
The `componentName`-option expects a `function` that gets a context object with the following properties:

- `component`: A Vue component
- `name`: The *raw* component name (without any prefixes) – basically simply `component.name`

`componentName` must return a `string` that will be used as the name for the component during registration.

## Mixin Factories
Every package that exports a *Vue plugin* also exports a *mixin factory function*. The *mixin factory functions* accepts the same options as the *Vue plugin*. A mixin created with one of the factory functions mimicks the corresponding plugin. However the mixin won't *pollute* the global namespace.

For example, `@vue-cdk/link` exposes a *Vue plugin*, that globally registers a component called `CLink` when used like this:

```js
import Link from '@vue-cdk/link'
import Vue from 'vue'

Vue.use(Link)
// Now you can use `CLink` everywhere.
```

You can use the mixin factory exported by `@vue-cdk/link` like this:

<Demo for="pluginify/component-name" />

Using the mixin can be great for testing, wrapping *Vue Component Development Kit* or whenever you prefer local over global registration.

## CSS
The amount of custom CSS is kept at a minimum. *Vue Component Development Kit* only introduces custom CSS if it is required for a specific feature. For example, the [List component](./../components/list/) applies `overflow: hidden` to the list container element – otherwise the list would not be scrollable and break your layout. Sometimes *Vue Component Development Kit* relies on a third party library that requires custom CSS. If that is the case we don't try to work around that. We simply accept it and move on.

Custom CSS follows a set of guidelines:

- **Consistently prefixed classes:** Custom CSS classes are consistently prefixed with
<code><abbr title="Vue Component Development Kit">vcdk</abbr>-</code>.
- **No polluting of the global scope:** You will never see <abbr title="Vue Component Development Kit">VCDK</abbr> apply styles to elements such as `button`, `a`, etc.
- **Distributed:** Usually our custom CSS is distributed within the actual component/plugin/utility. For example there is a themeable popover-component (`@vue-cdk/popover`) that works even without any styles/themes. If you want to use one of the officially available themes then simply import the theme styles from `@vue-cdk/popover/themes/$theme-name`.

Importing from within CSS:

```js
// import all themes:
import '@vue-cdk/popover/themes/index.css'

//                – or –                   //

// import 'only' a specific theme:
import '@vue-cdk/popover/themes/clean.css'
```

- **Use plain CSS:** Having to use custom CSS (within the context of <abbr title="Vue Component Development Kit">VCDK</abbr>) is already a little bit against what we actually want – so using the CSS and working with it should not introduce additional complexities. Keep it simple.
