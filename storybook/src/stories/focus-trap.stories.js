import { getPackage } from '@vue-cdk/examples'
const examplesPackage = getPackage('focus-trap')

export default { title: 'Focus Trap' }
export const HelloTrap = examplesPackage.storyFor('default')
export const Nested = examplesPackage.storyFor('nested')
export const Component = examplesPackage.storyFor('component')
