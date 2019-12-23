<template>
  <ul>
    <li
      >vcdkMq.mini = <code>{{ vcdkMq.mini }}</code></li
    >
    <li
      >vcdkMq.compact = <code>{{ vcdkMq.compact }}</code></li
    >
    <li
      >vcdkMq.regular = <code>{{ vcdkMq.regular }}</code></li
    >
    <li
      >vcdkMq.$all = <code>{{ vcdkMq.$all }}</code></li
    >
  </ul>
</template>

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

<style></style>
