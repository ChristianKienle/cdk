import { getPackage } from '@vue-cdk/examples'
const _package = getPackage('popover')

export default { title: 'Popover' }

export const defaultPopover = _package.importExample('hello-world')
export const customTrigger = _package.importExample('custom-trigger')
export const playground = _package.collection('playground').importExample('index')
export const prop = _package.importExample('prop')
export const withArrow = _package.importExample('with-arrow')
export const withoutArrow = _package.importExample('without-arrow')
export const styledContent = _package.importExample('styled-content')
