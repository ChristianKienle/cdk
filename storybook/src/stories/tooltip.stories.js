import { getCollection } from '@vue-cdk/examples'
const collection = getCollection('tooltip')

export default { title: 'Tooltip' }

export const defaultTooltip = collection.importExample('default')
export const defaultWithCustomContent = collection.importExample('default-custom')
export const prop = collection.importExample('prop')
export const placement = collection.importExample('placement')
