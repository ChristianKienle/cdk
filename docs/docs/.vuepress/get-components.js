module.exports = () => [
  { name: 'Client Only', slug: 'client-only' },
  { name: 'Focus Trap', slug: 'focus-trap' },
  { name: 'Infinite Scroll', slug: 'infinite-scroll' },
  { name: 'Link', slug: 'link' },
  { name: 'List', slug: 'list' },
  { name: 'Match Media', slug: 'match-media' },
  { name: 'Popover', slug: 'popover' },
  { name: 'Scroll Container', slug: 'scroll-container' },
  { name: 'Modal', slug: 'modal' }
].sort((lhs, rhs) => rhs.name.localeCompare(lhs.name))