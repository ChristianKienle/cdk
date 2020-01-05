import { getCollection } from '@vue-cdk/examples'
const collection = getCollection('modal')

export default { title: 'Modal' }

export const simple = collection.importExample('default')
export const nested = collection.importExample('nested')
export const customOverlay = collection.importExample('custom-overlay')
export const nice = collection.importExample('nice')
