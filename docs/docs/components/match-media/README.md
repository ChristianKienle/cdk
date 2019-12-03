# Match Media

## Installation

```sh
$ npm install @vue-cdk/match-media --save
```

## Usage

`@vue-cdk/match-media` exposes a Vue mixin that you can use in two steps:

### Step 1: Import `@vue-cdk/match-media` and define your media queries

```markup
<script>
import MatchMedia from '@vue-cdk/match-media'

export default {
  mixins: [MatchMedia],
  vcdkMediaQueriesByName: {
    mini: 'only screen and (max-width: 400px)',
    compact: 'only screen and (min-width: 500px) and (max-width: 600px)',
    regular: 'only screen and (min-width: 600px)'
  }
}
</script>
```

### Step 2: Access the (reative) result

``` markup
<template>
  <ul>
    <li>Mini: {{ vcdkMq.mini }}</li>
    <li>Compact: {{ vcdkMq.compact }}</li>
    <li>Regular: {{ vcdkMq.regular }}</li>
    <li>$all: {{ vcdkMq.$all }}</li>
  </ul>
</template>
```

## Misc

::: tip Good to know
`@vue-cdk/match-media` was heavily inspired by [drenglish/vue-match-media](https://github.com/drenglish/vue-match-media). The main difference between those two is that `@vue-cdk/match-media` takes a slighlty more conservative approach: [drenglish/vue-match-media](https://github.com/drenglish/vue-match-media) is doing a lot of magic out of the box that `@vue-cdk/match-media` does not.
:::
