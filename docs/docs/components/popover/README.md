# Popover

::: tip API
The *Popover*-component has a dedicated [API documentation](./../../api/popover).
:::

## Installation
``` sh
npm install @vue-cdk/popover --save
```

## Guide
You have to render a `trigger`-element and the actual popover content. The following example shows how to render a *hello-world* popover using `@vue-cdk/popover`:

```html
<Popover>
  <template #trigger>
    <button>Toggle</button>
  </template>
  <!-- Wrapping the content in a `div` is not required if you ensure -->
  <!-- that there is only a single element in the default slot. -->
  <div>Popover Body</div>
</Popover>
```

This will render a button that toggles the visibility of the *Popover Body*. No worries: There are a lot of options you can play with in order to customize almost anything. By default, `CPopover` does not style the appearance of the rendered popover. It is up to you to make it nice (using CSS). However, `CPopover` comes with a set of stylesheets that you can use to get started quickly.

Before we dig deeper into `CPopover`, let's make it just a little nicer:

```html
  <!-- 'clean' is just a simple theme -->
  <Popover theme="clean">
    <template #trigger>
      <button>Toggle</button>
    </template>
    <div>Popover Body</div>
</Popover>
```

Just setting the `theme`-prop is not enough. You also have to include the *clean*-theme:

```html
<script>
  import "~@vue-cdk/popover/themes/clean.css"
</script>
```

Now it should look much better.

## Examples

### Hello World

This is the a classical *Hello World* example:

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
