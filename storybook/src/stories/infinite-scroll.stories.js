import { getCollection } from '@vue-cdk/examples'
const collection = getCollection('infinite-scroll')

export default { title: 'Infinite Scroll' };
export const defaultInfiniteScroll = collection.importExample('default')
export const sizeDependencies = collection.importExample('size-dependencies')
export const scrollTo = collection.importExample('scroll-to')
export const scrollEvents = collection.importExample('scroll-events')
export const loadMore = collection.importExample('load-more')
