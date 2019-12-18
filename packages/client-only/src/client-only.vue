<script>
// A component to wrap non SSR friendly components/markup. You can provide a placeholder text that will be shown until the component has been mounted. Alternatively you can also provide a placeholder-slot. The slot is useful if you want to render something other than text – like a loading indicator.
export default {
  name: 'ClientOnly',
  functional: true,
  props: {
    // Text that will be rendered as a placeholder until <CClientOnly /> is mounted on the client-side. You can use this to show a loading indicator or some other kind of placeholder.
    placeholder: {
      type: String,
      default: null
    },
    // By default the placeholder will be wrapped in a div tag, however you can use `placeholderTag` prop to customize it.
    placeholderTag: {
      type: String,
      // `div`
      default: 'div'
    }
  },
  render(h, { parent, slots, props }) {
    const { default: defaultSlot = [], placeholder: placeholderSlot } = slots()
    if (parent._isMounted) {
      return defaultSlot
    }

    parent.$once('hook:mounted', async () => {
      parent._isMounted
      await parent.$nextTick()
      parent.$forceUpdate()
    })

    if (props.placeholderTag && (props.placeholder || placeholderSlot)) {
      return h(
        props.placeholderTag,
        {
          class: ['no-ssr-placeholder']
        },
        props.placeholder || placeholderSlot
      )
    }

    // Return a placeholder element for each child in the default slot
    // Or if no children return a single placeholder
    return defaultSlot.length > 0 ? defaultSlot.map(() => h(false)) : h(false)
  }
}
// Adopted from https://raw.githubusercontent.com/egoist/vue-no-ssr
// LICENSE: see LICENSE-no-ssr.text
// This copyright note is not at the top of this file because it would screw up
// the API documentation for this component. Additional credit is given in the
// user-facing documentation.
</script>
