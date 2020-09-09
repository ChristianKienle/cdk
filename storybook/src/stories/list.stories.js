import { getPackage } from '@vue-cdk/examples'
const _package = getPackage('list')

export default { title: 'List' };
export const defaultList = _package.storyFor('default')
export const endlessLoadingList = _package.storyFor('endless')
export const endlessLoadingListWithLoadingState = _package.storyFor('endless-with-loading')
export const sizeDependencies = _package.storyFor('size-dependencies')
export const scrollTo = _package.storyFor('scroll-to')
export const singleSelectionMode = _package.storyFor('selection-single')
export const multipleSelectionMode = _package.storyFor('selection-multiple')
export const multipleSelectionModeStyled = _package.storyFor('selection-multiple-styled')
export const contextMenuStyled = _package.storyFor('context-menu-styled')
