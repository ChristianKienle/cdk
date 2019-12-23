import { getCollection } from '@vue-cdk/examples'
const collection = getCollection('match-media')

export default { title: 'Match Media' };

export const helloWorld = collection.importExample('default')
export const inject = collection.importExample('inject')
