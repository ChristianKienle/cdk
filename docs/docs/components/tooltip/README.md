# Tooltip
You can use `@vue-cdk/tooltip` to attach tooltips to any element/component. You simply whatever you want with `CTooltip` and et voilà: A tooltip appears when the user hovers over the enclosed child.

## Installation
```sh
npm install @vue-cdk/tooltip --save
```

## Usage
`@vue-cdk/tooltip` exposes a *Vue plugin* that you can use like this:

``` js
import Vue from 'vue'
import Tooltip from '@vue-cdk/tooltip'

Vue.use(Tooltip)
```

The plugin exposes a tooltip component called `CTooltip`. You can use it to wrap any component and element. `CTooltip` attaches a tooltip to anything that is enclosed by it.

## Examples

### Default
The default tooltip is unstyled. Use the `text`-prop to set the text of the tooltip.

<Demo for="tooltip/default" />

### Placement Options
Use `placement` to set a different placement. The default is `top`

<Demo for="tooltip/placement" />

### Default with custom Content
Instead of setting the `text`-prop you can also render anything inside a tooltip by providing a custom `content`-template.

<Demo for="tooltip/default-custom" />

### Themes
#### Default
If you don't set a theme then the tooltip is rendered without any styling.

<Demo for="tooltip/themes/none" />

#### Light
Set `theme` to `light` in order to get dark tooltips.

<Demo for="tooltip/themes/light" />

You can also set a theme and render custom content.

<Demo for="tooltip/themes/light-custom" />

This is how the light theme looks like without an arrow:

<Demo for="tooltip/themes/light-no-arrow" />

#### Dark
Set `theme` to `dark` in order to get dark tooltips.

<Demo for="tooltip/themes/dark" />

You can also set a theme and render custom content.

<Demo for="tooltip/themes/dark-custom" />

This is how the dark theme looks like without an arrow:

<Demo for="tooltip/themes/dark-no-arrow" />

## Controlling the Tooltip
You can manually show and hide the tooltip by setting the `visible`–prop.

<Demo for="tooltip/prop" />

## API
- [Tooltip](./../../api/tooltip)
