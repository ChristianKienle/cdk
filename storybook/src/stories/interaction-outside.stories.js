import { getPackage } from '@vue-cdk/examples'
const _package = getPackage('interaction-outside')


console.log(_package)
export default { title: 'Interaction Outside' };
export const defaultInteractionOutside = _package.storyFor('default')
