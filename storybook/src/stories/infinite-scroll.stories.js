import { getPackage } from '@vue-cdk/examples'
const examplesPackage = getPackage('infinite-scroll')

export default { title: 'Infinite Scroll' };
export const defaultInfiniteScroll = examplesPackage.importExample('default')
export const sizeDependencies = examplesPackage.importExample('size-dependencies')
export const scrollTo = examplesPackage.importExample('scroll-to')
export const scrollEvents = examplesPackage.importExample('scroll-events')
export const loadMore = examplesPackage.importExample('load-more')
