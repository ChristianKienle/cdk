import { getPackage } from '@vue-cdk/examples'
const _package = getPackage('modal')

export default { title: 'Modal' }

export const simple = _package.importExample('default')
export const nested = _package.importExample('nested')
export const customOverlay = _package.importExample('custom-overlay')
export const nice = _package.importExample('nice')
