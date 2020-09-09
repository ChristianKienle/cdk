// @ts-check
// @ts-ignore
import FocusTrap from './components/focus-trap.vue'
import pluginify from '@vue-cdk/pluginify'

// export { default as createFocusTrap } from './create'
import  createFocusTrap  from './create'

export default pluginify(FocusTrap)
export { FocusTrap }

export {createFocusTrap }