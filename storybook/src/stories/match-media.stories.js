import MatchMedia from '@vue-cdk/match-media';

export default { title: 'Match Media' };


const MediaQueryConsumer = {
  inject: ['$vcdkMq'],
  template: `
  <div>
  <h2>Consumer</h2>
  <ul>
  <li data-cy="mini">{{ $vcdkMq.mini }}</li>
  <li data-cy="compact">{{ $vcdkMq.compact }}</li>
  <li data-cy="regular">{{ $vcdkMq.regular }}</li>
  <li data-cy="all">{{ $vcdkMq.$all }}</li>
</ul>
  </div>
  `
}

export const defaultMatchMedia = () => ({
  vcdkMediaQueriesByName: {
    mini: "only screen and (max-width: 400px)",
    compact: "only screen and (min-width: 500px) and (max-width: 600px)",
    regular: "only screen and (min-width: 600px)"
  },
  components: { MediaQueryConsumer },
  mixins: [MatchMedia],
  template: `
<div style="height: 200px; border: 1px solid red;">
  <ul>
    <li data-cy="mini">{{ vcdkMq.mini }}</li>
    <li data-cy="compact">{{ vcdkMq.compact }}</li>
    <li data-cy="regular">{{ vcdkMq.regular }}</li>
    <li data-cy="all">{{ vcdkMq.$all }}</li>
  </ul>
  <MediaQueryConsumer />
</div>`,
});
