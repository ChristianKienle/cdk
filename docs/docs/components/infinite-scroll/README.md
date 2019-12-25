# Infinite Scroll

The *Infinite Scroll* component can be used to render an indefintely scrolling list of items.

::: tip API
The *Infinite Scroll*-component has a dedicated [API documentation](./../../api/infinite-scroll).
:::

**Table of Contents**

[[toc]]

## Installation
``` sh
npm install @vue-cdk/infinite-scroll --save
```

## Usage
As most `@vue-cdk`–packages, `@vue-cdk/infinite-scroll` exposes a *Vue plugin*.

### Using the Plugin
``` js
import Vue from 'vue'
import InfiniteScroll from '@vue-cdk/infinite-scroll'
import '@vue-cdk/infinite-scroll/style/index.css'

Vue.use(InfiniteScroll)
```

`@vue-cdk/infinite-scroll` globally registers two components:

- [Infinite Scroll](./../../api/infinite-scroll): A component that renders an array of items.
- [Infinite Scroll Item](./../../api/infinite-scroll-item): You have to tell [Infinite Scroll](./../../api/infinite-scroll) how to render an individual item. You do this by rendering a [*Infinite Scroll Item*](./../../api/infinite-scroll-item) in the default-(scoped)-slot in your [Infinite Scroll](./../../api/infinite-scroll).

### Using the Components directly
If you don't like the globally registered components that come with `@vue-cdk/infinite-scroll` you can also import the components directly.

```markup
<script>
import {
  InfiniteScroll,
  InfiniteScrollItem
} from '@vue-cdk/infinite-scroll'

export default {
  name: 'MyComponent',
  components: {
    InfiniteScroll,
    InfiniteScrollItem
  }
}
</script>

<template>
  <CInfiniteScroll :items="[{id: '1'}]">
    <template #default="{item}">
      <CInfiniteScrollItem :item="item">{{item}}</CInfiniteScrollItem>
    </template>
  </CInfiniteScroll>
</template>
```

### Importing the Styles
In order to properly work, *Infinite Scroll* requires some minimal styles that you should import. If you are using *Vue Loader* you can simply import it in any `*.vue` or `.js` file:

```js
import '@vue-cdk/infinite-scroll/style/index.css'
```

::: tip
The CSS classes defined in that file are keeps to a minimum and don't introduce any visible styling. **It is up to you to make things look nice.**
:::

## Features

*Infinite Scroll* has three main features that make it useful:

1. **Renders only what is visible:** Imagine you have a list of *1000* items. It would be inefficient to render all *1000* items even though only (for example) 20 are visible at the same time. By only rendering the currently visible items *Infinite Scroll* can scroll through thousands of them with ease.
2. **Emits *useful* scroll events:** For example, *Infinite Scroll* knows when you reach the bottom (or bottom) of the list while scrolling. This can come in handy when implementing more advanced features. One thing that comes to mind is to customize *Infinite Scroll* to show a loading indicator somewhere while loading is going on.
3. **Automatically request more items:** By default, *Infinite Scroll* will ask you for more items once the user has scrolled near the bottom of the list.

Even though *Infinite Scroll* is useful as is, there are higher level components that build on-top of it. The *[List](./../../api/list)* component is probably the most notably component that wraps *Infinite Scroll*.

## Examples

### Hello World
Getting [Infinite Scroll](./../../api/infinite-scroll) to render a simple list is straight forward:

- Provide an array of items
- Provide a scoped default slot that renders an item
- Call it a day.

<Demo for="infinite-scroll/default" />

[Infinite Scroll](./../../api/infinite-scroll) expects you give it at least as many items that will make the user have to scroll. Otherwise [Infinite Scroll](./../../api/infinite-scroll) will never ask you for more items on it's own.


### Load More Items
[Infinite Scroll](./../../api/infinite-scroll) will ask you for more items once the user has scrolled to the very end of the list. For this to work you have to set the `loadMore`-prop. `loadMore` must be a function that loads more items (how is up to you). Once you are done simply modify the items-array you initially passed to [Infinite Scroll](./../../api/infinite-scroll).

<Demo for="infinite-scroll/load-more" />

Your `loadMore`-function/method should call `done` once it is ready.

### Significant Scroll Events
The following example shows how to get significant scroll events. While the user scrolls through the list, it constantly checks to see whether or not it has been scrolled near the bottom and/or top. If the list detects either one (or both) situations it will emit a `scrollPosition`–event. The payload has the following shape:

```ts
interface ScrollPositionEventPayload {
  nearTop: boolean | null
  nearBottom: boolean | null
}
```

::: warning
The current scroll position is a local state. You can access it by using `$refs.yourList.scrollPosition`. Initiall `scrollPosition.nearTop` and `scrollPosition.nearBottom` are both `null` – even though it is very likely that the list is near the top (because it has not yet been scrolled). However, [Infinite Scroll](./../../api/infinite-scroll) only checks the current scroll position when scrolling actually has happened. That is why those values will initially be `null`.
:::

You can use those events for a multitude of different things. The higher–level [List](./../list)–component uses those events in order to display a loading indicator automatically.

<Demo for="infinite-scroll/scroll-events" />

## Slot Props
In every previous example certain slot props were used when rendering an item (by providing the default slot). If you want to know all slots props that are available please head over to the [Infinite Scroll](./../../api/infinite-scroll) API page.

## API

- [Infinite Scroll](./../../api/infinite-scroll)
- [Infinite Scroll Item](./../../api/infinite-scroll-item)
- [List](./../../api/lost)
- [List Item](./../../api/list-item)
