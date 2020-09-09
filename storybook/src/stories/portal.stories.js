import { getPackage } from '@vue-cdk/examples'

const _package = getPackage('portal')

export default { title: 'Portal' }
export const Default = _package.storyFor('default')
