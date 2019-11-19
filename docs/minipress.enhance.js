import VirtualizedList from '@vue-cdk/virtualized-list'
import BreakpointObserver from '@vue-cdk/breakpoint-observer'

export default ({ Vue }) => {
  Vue.use(VirtualizedList)
  Vue.use(BreakpointObserver)
}
