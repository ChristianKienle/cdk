# Customizing
*Vue Component Development Kit* can be customized.

## CSS
The amount of custom CSS is kept at a minimum. *Vue Component Development Kit* only introduces custom CSS if it is required for a specific feature. For example, the [List component](./../components/list/) applies `overflow: hidden` to the list container element – otherwise the list would not be scrollable and break your layout. Sometimes *Vue Component Development Kit* relies on a third party library that requires custom CSS. If that is the case we don't try to work around that. We simply accept it and move on.

Custom CSS follows a set of guidelines:

- **Consistently prefixed classes:** Custom CSS classes are consistently prefixed with
<code><abbr title="Vue Component Development Kit">vcdk</abbr>-</code>.
- **No polluting of the global scope:** You will never see <abbr title="Vue Component Development Kit">VCDK</abbr> apply styles to elements such as `button`, `a`, etc.
- **Distributed separately:** Usually our custom CSS is distributed separately from the actual component/plugin/utility. For example there is a themeable popover-component (`@vue-cdk/popover`) that works even without any styles/themes. If you want to use one of the officially available themes then simply add `@vue-cdk/popover-themes` as a dependency and import the CSS:

```js
// import all themes:
import '@vue-cdk/popover-themes/index.css'

//                – or –                   //

// import 'only' a specific theme:
import '@vue-cdk/popover-themes/clean.css'
```

- **Use plain CSS:** Having to use custom CSS (within the context of <abbr title="Vue Component Development Kit">VCDK</abbr>) is already a little bit against what we actually want – so using the CSS and working with it should not introduce additional complexities. Keep it simple.
