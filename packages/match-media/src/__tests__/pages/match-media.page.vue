<template>
  <div>
    match media: {{ vcdkMq }}
    <ul>
      <li data-cy="mini">{{ vcdkMq.mini }}</li>
      <li data-cy="compact">{{ vcdkMq.compact }}</li>
      <li data-cy="regular">{{ vcdkMq.regular }}</li>
      <li data-cy="all">{{ vcdkMq.$all }}</li>
    </ul>
  </div>
</template>

<script>
import MatchMedia from '@vue-cdk/match-media'
export default {
  vcdkMediaQueriesByName: {
    mini: 'only screen and (max-width: 400px)',
    compact: 'only screen and (min-width: 500px) and (max-width: 600px)',
    regular: 'only screen and (min-width: 600px)',
  },
  mixins: [MatchMedia],
}
</script>
