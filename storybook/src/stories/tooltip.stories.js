import { getPackage } from '@vue-cdk/examples'
const _package = getPackage('tooltip')

export default { title: 'Tooltip' }

export const defaultTooltip = _package.importExample('default')
export const defaultWithCustomContent = _package.importExample('default-custom')
export const prop = _package.importExample('prop')
export const placement = _package.importExample('placement')
