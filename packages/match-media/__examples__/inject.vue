<template>
  <Consumer />
</template>

<script>
import MatchMedia from '@vue-cdk/match-media'

const Consumer = {
  inject: ['$vcdkMq'],
  render(h) {
    const { $vcdkMq } = this
    const items = [
      h('li', String($vcdkMq.mini)),
      h('li', String($vcdkMq.compact)),
      h('li', String($vcdkMq.regular)),
      h('li', String($vcdkMq.$all)),
    ]
    return h('ul', items)
  },
}

export default {
  components: { Consumer },
  mixins: [MatchMedia],
  vcdkMediaQueriesByName: {
    mini: 'only screen and (max-width: 400px)',
    compact: 'only screen and (min-width: 500px) and (max-width: 600px)',
    regular: 'only screen and (min-width: 600px)',
  },
}
</script>
