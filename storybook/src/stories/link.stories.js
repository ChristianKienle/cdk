import { getPackage } from '@vue-cdk/examples'
const _package = getPackage('link')

export default { title: 'Link' };

export const external = _package.storyFor('external')
export const internal = _package.storyFor('internal')
export const internalDisabled = _package.storyFor('internal-disabled')
export const externalDisabled = _package.storyFor('external-disabled')
export const routerDisabled = _package.storyFor('router-disabled')
export const router = _package.storyFor('router')
