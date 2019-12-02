<script>
import isExternal from './is-external'

const EXTERNAL_ATTRS = {
  target: '_blank',
  rel: 'noopener noreferrer'
}

const renderNativeAnchor = h => (href, context) => {
  const { props, data } = context

  const attrs = {
    ...(isExternal(href) ? EXTERNAL_ATTRS : {}),
    ...data.attrs,
    href
  }
  const _class = [
    data.class,
    {
      'is-disabled': props.disabled
    }
  ]
  const _data = {
    ...context.data,
    attrs,
    class: _class
  }
  return h('a', _data, context.children || '')
}

const renderRouterLink = h => context => {
  const scopedSlots = {
    default({ href, route, navigate }) {
      return renderNativeAnchor(h)(href, context)
    }
  }
  const props = context.props
  return h('router-link', { props, scopedSlots })
}

export default {
  name: 'CLink',
  functional: true,
  props: {
    // Setting `disabled` prop will cancel all `click`-events from being emitted.
    disabled: { type: Boolean, default: false },
    // Denotes the target route of the link: The value will be passed – as is – to the `RouterLink` that will be rendered on your behalf.
    to: {},
    // Configure the resolved path/url should be used as the value for the `href`-attribute. You can only specify either `to` or `href` – not both.
    href: {
      type: String,
      default: null
    }
  },
  render(h, context) {
    const { props, children } = context
    const { to, href, disabled } = props
    if(to != null && href != null) {
      throw Error(`[Error] Serious programmer error: You cannot set values for href and to at the same time.`)
    }
    if (href != null && typeof href === 'string') {
      return renderNativeAnchor(h)(href, context)
    }
    // The last check (isExternal(to)) ensures that links like:
    //    <FdLink to="https://example.org">…</FdLink>
    // is rendered as an external link.
    if (to != null && typeof to === 'string' && isExternal(to)) {
      return renderNativeAnchor(h)(to, context)
    }
    return renderRouterLink(h)(context)
  }
}
</script>
