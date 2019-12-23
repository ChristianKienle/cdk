# Match Media

## Installation

```sh
$ npm install @vue-cdk/match-media --save
```

## Usage

You use `@vue-cdk/match-media` like this:

- You import the mixin from `@vue-cdk/match-media`. The mixin is the default export of that package.
- You add the mixin to the `mixins`–option of your component. This enables the match-media capbailities for that specific component.
- Use the `vcdkMediaQueriesByName`–option of your component to define names media queries.

::: tip
If you are a bit confused by the steps outlined above please take a look at the examples below.
:::

## Examples

### Hello World: Using the Mixin
This example imports and uses the mixin. It also uses `vcdkMediaQueriesByName` to define three queries for three different size classes (`mini`, `compact` and `regular`). Those queries are arbitrary. You may use any valid CSS media query as the value. The mixin exposes a reactive object on your component called `vcdkMq`. This object has a key for each of your queries. The value of each entry in `vcdkMq` is either `true` (query matches) or `false` (query does not match).

::: tip
Resize your browser window to see the effect.
:::

<Demo for="match-media/default" />

### Using the injected reactive Object
You may have noticed that `vcdkMq` is only available on the instance that actually uses the mixin. If you want to make `vcdkMq` available to your child components you can do so manually. However, you should know that `@vue-cdk/match-media` also provides the object to all of it's child components by default. So in theroy there is no need to *manually* make `vcdkMq` available to your child components. Just use `inject` like so:

<Demo for="match-media/inject" />

::: tip `Consume` can be anything
In the example above `Consume` is just a placeholder for an arbitrary child component. You may not even control or know about the child componet.
:::

## Misc

### `vcdkMq.$all`
The reactive object `vcdkMq` has a specia property called `$all`. The value of `vcdkMq.$all` is an array of query names that currently match.

::: tip `vcdkMq.$all` is sorted
`vcdkMq.$all` is sorted
:::

### Origin and Credits
`@vue-cdk/match-media` was heavily inspired by [drenglish/vue-match-media](https://github.com/drenglish/vue-match-media). The main difference between those two is that `@vue-cdk/match-media` takes a slighlty more conservative approach: [drenglish/vue-match-media](https://github.com/drenglish/vue-match-media) is doing a lot of magic out of the box that `@vue-cdk/match-media` does not.
