// @ts-check
import { defaultComponentName } from './component-name'

/** @returns {import('./types')._Options} */
export default () => ({
  onDidRegisterComponent: () => {},
  componentName: defaultComponentName
})
