import { getCollection } from '@vue-cdk/examples'
const collection = getCollection('client-only')

export default { title: 'Client Only' };
export const helloWorld = collection.importExample('default')
