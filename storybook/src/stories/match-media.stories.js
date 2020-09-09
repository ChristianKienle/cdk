import { getPackage } from '@vue-cdk/examples'
const _package = getPackage('match-media')

export default { title: 'Match Media' };

export const helloWorld = _package.storyFor('default')
export const inject = _package.storyFor('inject')
