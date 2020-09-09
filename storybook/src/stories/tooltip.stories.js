import { getPackage } from '@vue-cdk/examples'
const _package = getPackage('tooltip')

export default { title: 'Tooltip' }

export const defaultTooltip = _package.storyFor('default')
export const defaultWithCustomContent = _package.storyFor('default-custom')
export const prop = _package.storyFor('prop')
export const placement = _package.storyFor('placement')
