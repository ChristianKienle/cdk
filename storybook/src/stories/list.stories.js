import { getPackage } from '@vue-cdk/examples'
const _package = getPackage('list')

export default { title: 'List' };
export const defaultList = _package.importExample('default')
export const endlessLoadingList = _package.importExample('endless')
export const endlessLoadingListWithLoadingState = _package.importExample('endless-with-loading')
export const sizeDependencies = _package.importExample('size-dependencies')
export const scrollTo = _package.importExample('scroll-to')
export const singleSelectionMode = _package.importExample('selection-single')
export const multipleSelectionMode = _package.importExample('selection-multiple')
export const multipleSelectionModeStyled = _package.importExample('selection-multiple-styled')
export const contextMenuStyled = _package.importExample('context-menu-styled')
