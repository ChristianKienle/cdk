module.exports = () => [
  { name: 'Client Only', slug: 'client-only' },
  { name: 'Focus Trap', slug: 'focus-trap' },
  { name: 'Infinite Scroll', slug: 'infinite-scroll' },
  { name: 'Link', slug: 'link' },
  { name: 'List', slug: 'list' },
  { name: 'Match Media', slug: 'match-media' },
  { name: 'Popover', slug: 'popover' },
  { name: 'Scroll Container', slug: 'scroll-container' },
  { name: 'Interaction Outside', slug: 'interaction-outside' },
  { name: 'Tooltip', slug: 'tooltip' },
  { name: 'Modal', slug: 'modal' }
].sort((lhs, rhs) => lhs.name.localeCompare(rhs.name))