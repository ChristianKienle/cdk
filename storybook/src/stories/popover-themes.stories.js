import { getPackage } from '@vue-cdk/examples'
const _package = getPackage('popover')
const collection = _package.collection('theme')

export default { title: 'Popover/Themes' }
export const clean = collection.importExample('clean')
export const bigArrow = collection.importExample('big-arrow')
export const dark = collection.importExample('dark')