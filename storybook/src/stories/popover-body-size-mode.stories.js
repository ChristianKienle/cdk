import { getPackage } from '@vue-cdk/examples'
const _package = getPackage('popover')
const collection = _package.collection('body-size-mode')

export default { title: 'Popover/Body Size Mode' }
export const atLeastAsTrigger = collection.storyFor('at-least-as-trigger')
export const sameAsTrigger = collection.storyFor('same-as-trigger')