import { getPackage } from '@vue-cdk/examples'
const _package = getPackage('integration')

export default { title: 'Integration' }
export const dropdown = _package.storyFor('dropdown')
export const popoverWithInputAsTarget = _package.storyFor('popover-with-input-as-target')
