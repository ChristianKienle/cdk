import { getPackage } from '@vue-cdk/examples'
const examplesPackage = getPackage('focus-trap')

export default { title: 'Focus Trap' }
export const helloTrap = examplesPackage.importExample('default')
export const nested = examplesPackage.importExample('nested')
export const component = examplesPackage.importExample('component')
