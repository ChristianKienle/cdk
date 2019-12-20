// @ts-check
import FocusTrap from './components/focus-trap.vue'
import pluginify from '@vue-cdk/pluginify'

export { default as Mixin } from './mixin'
export { default as createFocusTrap } from './create'

export default pluginify(FocusTrap)
export { FocusTrap }
