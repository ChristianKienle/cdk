import { getCollection } from '@vue-cdk/examples'
const collection = getCollection('popover')

export default { title: 'Popover' }

export const defaultPopover = collection.importExample('hello-world')
export const customTrigger = collection.importExample('custom-trigger')
export const playground = () => require('./../components/k-playground.vue').default
export const bodySizeModeAtLeastTrigger = collection.importExample('body-size-mode-at-least-trigger')
