import { getCollection } from '@vue-cdk/examples'
const collection = getCollection('tooltip/themes')

export default { title: 'Tooltip/Themes' }

export const light = collection.importExample('light')
export const lightWithCustomContent = collection.importExample('light-custom')
export const dark = collection.importExample('dark')
export const darkWithCustomContent = collection.importExample('dark-custom')
export const darkWithoutArrow = collection.importExample('dark-no-arrow')