import MatchMedia from '@vue-cdk/match-media';
import Vue from 'vue';

export default { title: 'Match Media' };

export const defaultMatchMedia = () => ({
  mixins: [
    MatchMedia({
      mini: "(max-width: 200px)",
      compact: "(min-width: 200px) and (max-width: 400px)",
      regular: "(min-width: 400px)"
    }, { Vue })
  ],
  template: `
<div style="height: 100px; border: 1px solid red;">
{{ $mq }}
</div>`,
});
