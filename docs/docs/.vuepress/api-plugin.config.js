// @ts-check
// This file exports the options passed to the VuePress API Plugin
/**
 * @param {string} name
 * @param {string} id
 * @returns {{path: string, localPath: string}}
 */
const createEntry = (name, id) => ({
  path: `api/${name}/README.md`,
  localPath: require.resolve(id)
})

/** @param {Array<[string, string]>} namesAndIds */
const createEntries = (...namesAndIds) => namesAndIds.map(([name, id]) => createEntry(name, id))

const toObject = entries => {
  const result = {}
  entries.forEach(([name, path]) => result[name] = path)
  return result
}

module.exports = {
  indexPath: 'api/README.md',
  items: createEntries(
    ['list', '@vue-cdk/list/src/list.vue'],
    ['list-item', '@vue-cdk/list/src/item.vue'],
    ['infinite-scroll', '@vue-cdk/infinite-scroll/src/infinite-scroll.vue'],
    ['infinite-scroll-item', '@vue-cdk/infinite-scroll/src/item.vue'],
    ['scroll-container', '@vue-cdk/scroll-container/src/scroll-container.vue'],
    ['link', '@vue-cdk/link/src/link.vue'],
    ['popover', '@vue-cdk/popover/src/popover.vue'],
    ['client-only', '@vue-cdk/client-only/src/client-only.vue'],
    ['focus-trap', '@vue-cdk/focus-trap/src/components/focus-trap.vue']
  )
}
