# List
The *List* component displays a list of items. Internally it is using the *[Infinite Scroll](../infinite-scroll/)* component. Because of that they have a lot of similarities. *List* adds a few convenient, higher-level features to *[Infinite Scroll](../infinite-scroll/)*.


::: tip
You should prefer *List* over *[Infinite Scroll](../infinite-scroll/)*. You can fall back to *[Infinite Scroll](../infinite-scroll/)* if you have special needs.
:::

**Table of Contents**
[[toc]]

::: tip API
The *List*-component has a dedicated [API documentation](./../../api/list).
:::

## Installation
``` sh
npm install @vue-cdk/list --save
```

## Usage
`@vue-cdk/list` exposes a *Vue plugin* that you can use like this:

```js
import Vue from 'vue'
import List from '@vue-cdk/list'
// …
Vue.use(List, /* optional options */)
```

The plugin registers two components globally:

- `CList`: `CList` takes an array of items (`items`-prop). However, `CList` does not know how to render an item. It is up to you do do that by providing doing so in the default scoped slot. Please refer to the *Hello World* example to get an idea how to do that.
- `CListItem`: In the scoped default slot of `CList` you have to use `CListItem` to render the actual item. `CListItem` let's you render almost anything you like.

## Differences to `Infinite Scroll`
`@vue-cdk/list` depends on `@vue-cdk/virtual-scroll` for the heavy lifting. However there are some notable differences/additions for `Infinite Scroll`.

### Selection Management
As a higher level package `@vue-cdk/list` has a notion of selection. It knows which of your items are selected. It has different selection modes (*single selection*, *multiple selection*) and some modes even take options.

### Additional *Slot Props*

## Examples

### Hello World
<Demo for="list/default" />


### Single Selection Mode
<Demo for="list/selection-single" />

### Multiple Selection Mode
<Demo for="list/selection-multiple" />

## Custom Selection Mode
The *List* component supports different selection modes. An item can either be selected or not selected.

You can create a custom selection mode and simply use it as a value for the `selectionMode`-prop. A custom selection mode is simply a function that takes a `Mutation`-object and returns an array of selected item-ids. The `Mutation`-object looks like this:

```ts
interface Mutation {
  // An array of ids that are currently selected
  selection: string[]
  // An id that is affected by the mutation.
  // If a user clicks on an item this will be the id of the clicked item.
  affected?: string
  // An optional even object that triggered the mutation.
  event?: Event
}
```

Your custom selection mode is a function that turns a mutation object and turns it into an array of item-ids:

```js
const customSelectionMode = ({ selection, affected, event }) => {
  // compute the new selection and return it
  return [/* item ids */]
}
```

## API

- [List](./../../api/list)
- [List Item](./../../api/list-item)
