import { getCollection } from '@vue-cdk/examples'
const collection = getCollection('link')

export default { title: 'Link' };

export const external = collection.importExample('external')
export const internal = collection.importExample('internal')
export const internalDisabled = collection.importExample('internal-disabled')
export const externalDisabled = collection.importExample('external-disabled')
export const routerDisabled = collection.importExample('router-disabled')
export const router = collection.importExample('router')
