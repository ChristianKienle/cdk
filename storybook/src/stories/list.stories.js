import { getCollection } from '@vue-cdk/examples'
const collection = getCollection('list')

export default { title: 'List' };
export const defaultList = collection.importExample('default')
export const endlessLoadingList = collection.importExample('endless')
export const endlessLoadingListWithLoadingState = collection.importExample('endless-with-loading')
export const sizeDependencies = collection.importExample('size-dependencies')
export const scrollTo = collection.importExample('scroll-to')
export const singleSelectionMode = collection.importExample('selection-single')
export const multipleSelectionMode = collection.importExample('selection-multiple')
export const multipleSelectionModeStyled = collection.importExample('selection-multiple-styled')
