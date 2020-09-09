import { getPackage } from '@vue-cdk/examples'
const _package = getPackage('popover')
const collection = _package.collection('theme')

export default { title: 'Popover/Themes' }
export const clean = collection.storyFor('clean')
export const bigArrow = collection.storyFor('big-arrow')
export const dark = collection.storyFor('dark')