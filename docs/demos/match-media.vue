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
// import MatchMedia from '@vue-cdk/match-media';
export default {
  mixins: [
    // MatchMedia({
    //   mini: "(max-width: 200px)",
    //   compact: "(min-width: 200px) and (max-width: 400px)",
    //   regular: "(min-width: 400px)"
    // })
  ]
};
</script>