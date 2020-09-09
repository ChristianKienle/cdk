import { getPackage } from '@vue-cdk/examples'
const examplesPackage = getPackage('infinite-scroll')

export default { title: 'Infinite Scroll' };
export const defaultInfiniteScroll = examplesPackage.storyFor('default')
export const sizeDependencies = examplesPackage.storyFor('size-dependencies')
export const scrollTo = examplesPackage.storyFor('scroll-to')
export const scrollEvents = examplesPackage.storyFor('scroll-events')
export const loadMore = examplesPackage.storyFor('load-more')
