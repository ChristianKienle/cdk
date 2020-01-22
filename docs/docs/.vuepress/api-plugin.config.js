// @ts-check
// This file exports the options passed to the VuePress API Plugin

/**
 * @param {string} name
 * @param {string} slug
 * @param {string} id
 * @returns {{href: string, path: string, name: string, localPath: string}}
 */
const createEntry = (name, slug, id) => ({
  name,
  path: `api/${slug}/README.md`,
  href: `/api/${slug}/`,
  localPath: require.resolve(id)
})

/** @param {Array<[string, string, string]>} rawEntries */
const createEntries = (...rawEntries) => rawEntries.map(([name, slug, id]) => createEntry(name, slug, id))

module.exports = {
  indexPath: 'api/README.md',
  items: createEntries(
    ['Tooltip', 'tooltip', '@vue-cdk/tooltip/src/tooltip.vue'],
    ['List', 'list', '@vue-cdk/list/src/list.vue'],
    ['Modal', 'modal', '@vue-cdk/modal/src/modal.vue'],
    ['ModalOverlay', 'modal-overlay', '@vue-cdk/modal/src/overlay.vue'],
    ['ListItem', 'list-item', '@vue-cdk/list/src/item.vue'],
    ['InfiniteScroll', 'infinite-scroll', '@vue-cdk/infinite-scroll/src/infinite-scroll.vue'],
    ['InfiniteScrollItem', 'infinite-scroll-item', '@vue-cdk/infinite-scroll/src/item.vue'],
    ['ScrollContainer', 'scroll-container', '@vue-cdk/scroll-container/src/scroll-container.vue'],
    ['Link', 'link', '@vue-cdk/link/src/link.vue'],
    ['Popover', 'popover', '@vue-cdk/popover/src/popover.vue'],
    ['ClientOnly', 'client-only', '@vue-cdk/client-only/src/client-only.vue'],
    ['FocusTrap', 'focus-trap', '@vue-cdk/focus-trap/src/components/focus-trap.vue']
  )
}
