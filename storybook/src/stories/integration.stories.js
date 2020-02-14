import { getPackage } from '@vue-cdk/examples'
const _package = getPackage('integration')

export default { title: 'Integration' }
export const dropdown = _package.importExample('dropdown')
export const popoverWithInputAsTarget = _package.importExample('popover-with-input-as-target')
