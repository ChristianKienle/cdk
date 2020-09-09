import { getPackage } from '@vue-cdk/examples'
const _package = getPackage('popover')

export default { title: 'Popover' }

export const defaultPopover = _package.storyFor('hello-world')
export const customTrigger = _package.storyFor('custom-trigger')
export const playground = _package.collection('playground').storyFor('index')
export const prop = _package.storyFor('prop')
export const withArrow = _package.storyFor('with-arrow')
export const withoutArrow = _package.storyFor('without-arrow')
export const styledContent = _package.storyFor('styled-content')
