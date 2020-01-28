# Popover

::: tip API
The *Popover*-component has a dedicated [API documentation](./../../api/popover).
:::

## Installation
``` sh
$ npm install @vue-cdk/popover --save
```

## Usage
`@vue-cdk/popover` exposes a *Vue plugin* that you can use like this:

``` js
import Vue from 'vue'
import Popover from '@vue-cdk/popover'

Vue.use(Popover)
```

This will globally register the following components:
- `CPopover`: Use this component to specify **how** a popover should be rendered. Some of the available props are:
  - `withArrow`: If set to `true`, the popover will also render an arrow.
  - `theme`: Set a theme for your popover. You can create custom themes.
  - `placement`: How to place the actual popover.
- `CPopoverContent`: Use this component to specify **what** the popover should render. You use this component within `CPopover`. The element/component wrapped with `CPopoverContent` will appear inside the popover.
- `CPopoverArrow`: Use this component to customize the arrow. You usually do not need this component since the arrow can be customized by several props and themes. If you need to render a custom arrow use this component inside the `arrow`-slot of `CPopoverContent`.

## Guide

::: warning
Some features of `CPopover` have been removed temporary. Currently those features are not possible with the latest release of Poppver.JS. The features will be added back once Popper.JS supports those features again.
:::

In a typical scenario you would have some kind of *trigger*–element (a button, a link, …) that, when clicked will toggle the popover. `CPopover` expects you to render such a *trigger* yourself.

The following example shows how to render a button that toggles the visibility of a popover.

<Demo for="popover/prop" />

You can omit `theme` (or set it to `null`) to disable all styling.

::: warning CSS Required
Themes only work with the corresponding styles. You can import individual themes or all themes by importing `@vue-cdk/popover/themes/index.css`.
:::

## Examples

### Hello World

This is the a classical *Hello World* example. You control the visibility of the popover by simply setting `visible` to `true` or `false`. You have to tell `CPopover` where it should attach itself to. This is done by using `trigger` and setting it to `$refs.button`. By doing so `CPopover` will search for a `ref` called `button`.

<Demo for="popover/prop" />


### Manually showing the Popover
Instead of using the `visible`–prop to show and/or hide the popover you can manually change the visibility. You get a reference to the popover and call its methods (`show()`/`hide()`/`toggle()`) directly.

<Demo for="popover/hello-world" />

::: tip
The example above is not using any theme or custom styles. For this reason it looks like a bit boring. Most of the following examples are using a theme.
:::

### Close on Click Inside

This example shows you how to add a *close*-button inside the popover.

<Demo for="popover/click-inside" />

### Show on Hover

The popover component is very flexible: This example shows how to show the popover on `mouseenter` and `mouseleave`. The result is a very simple tooltip.

<Demo for="popover/custom-trigger" />

### Scrollable Popover Body

If you have a popover with a (potentially) large body then you might want to make it scrollable. You do that by setting custom styles on the popover's body that constraint it's size and adjust it's overflow settings.

To make this work you have to apply custom styles to your `CPopoverContent`.

::: warning IMPORTANT
It is probably a good idea to also disable flipping by setting `flips` to `false`.
:::

<Demo for="popover/scrollable-body" />

### Themes

#### Clean
<Demo for="popover/theme/clean" />

#### Dark
<Demo for="popover/theme/dark" />

#### Big Arrow
<Demo for="popover/theme/big-arrow" />

## API
- [Popover](./../../api/popover)
