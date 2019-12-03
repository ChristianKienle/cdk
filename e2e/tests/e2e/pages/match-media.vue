<template>
  <div>
    match media
    <ul>
      <li data-cy="mini">{{ $mq.mini }}</li>
      <li data-cy="compact">{{ $mq.compact }}</li>
      <li data-cy="regular">{{ $mq.regular }}</li>
      <li data-cy="all">{{ $mq.$all }}</li>
    </ul>
  </div>
</template>


<script>
import MatchMedia from '@vue-cdk/match-media';
import Vue from 'vue';
export default {
  mixins: [
    MatchMedia({
      mini: "only screen and (max-width: 400px)",
      compact: "only screen and (min-width: 500px) and (max-width: 600px)",
      regular: "only screen and (min-width: 600px)"
    }, { Vue })
  ]
};
</script>