// @ts-check
import { defaultComponentName } from './component-name'

/** @returns {import('./types/options')._Options} */
export default () => ({
  onDidRegisterComponent: () => {},
  componentName: defaultComponentName
})
