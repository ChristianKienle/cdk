import { getPackage } from '@vue-cdk/examples'
const _package = getPackage('link')

export default { title: 'Link' };

export const external = _package.importExample('external')
export const internal = _package.importExample('internal')
export const internalDisabled = _package.importExample('internal-disabled')
export const externalDisabled = _package.importExample('external-disabled')
export const routerDisabled = _package.importExample('router-disabled')
export const router = _package.importExample('router')
