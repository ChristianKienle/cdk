import { getPackage } from '@vue-cdk/examples'
const _package = getPackage('modal')

export default { title: 'Modal' }

export const simple = _package.storyFor('default')
export const nested = _package.storyFor('nested')
export const customOverlay = _package.storyFor('custom-overlay')
export const nice = _package.storyFor('nice')
export const niceScrollableContainer = _package.storyFor('nice-scrollable-container')
