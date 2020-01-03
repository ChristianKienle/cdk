# Popover

::: tip API
The *Popover*-component has a dedicated [API documentation](./../../api/popover).
:::

**Table of Contents**

[[toc]]

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

This will globally register a popover component called `CPopover`.

## Guide
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

### Body Size Modes <Badge text="New"/>

By default, the popover component does not modify the width of the popover body. This default behavior is great is most cases and, at the same time, allows you to handle it manually if so desired.

After using this component for some time in [Fundamental Vue](https://github.com/SAP/fundamental-vue) (a component library) it became clear that this is not convenient enough – for certain use cases.

So, if you find yourself in the situation that the default sizing behavior is not working for you read ahead.

#### `at-least-trigger`

By setting the `body-size-mode`-prop to `at-least-trigger` you tell the popover component to make the popover body at least as wide width as the trigger element/component. The example below contains two popovers + triggers. You will notice two things:

1. Big popovers stay big: Even when attached to a small trigger the popover body is not scaled down but just keeps it size.
2. Small popovers are made wider to match the width of the trigger.

<Demo for="popover/body-size-mode-at-least-trigger" />

#### `equal-trigger`

By setting the `body-size-mode`-prop to `equal-trigger` you tell the popover to make the popover body the same width as the trigger element/component. The popovers below have the same width as the button.

<Demo for="popover/body-size-mode-equal-trigger" />

### Scrollable Popover Body

If you have a popover with a (potentially) large body then you might want to make it scrollable. You do that by setting custom styles on the popover's body that constraint it's size and adjust it's overflow settings.

`body-styles` can be used to do just that.

::: warning IMPORTANT
It is probably a good idea to also disable flipping by setting `flips` to `false`.
:::

<Demo for="popover/scrollable-body" />

## API
- [Popover](./../../api/popover)
