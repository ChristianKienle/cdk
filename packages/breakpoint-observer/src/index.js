import BreakpointObserver from './breakpoint-observer.vue'

function install(vue) {
  vue.component('BreakpointObserver', BreakpointObserver)
}

export default { install }
