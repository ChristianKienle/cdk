# Link
A *Link*-component with sensible defaults and [Vue Router](https://router.vuejs.org/) integration.

::: tip API
The *Link*-component has a dedicated [API documentation](./../../api/link).
:::

## Installation
``` sh
$ npm install @vue-cdk/link --save
```

::: warning Weak Dependencies
If you want to use `@vue-cdk/link`'s Vue Router integration make sure to also install and properly configure [Vue Router](https://router.vuejs.org/).
:::

## Rationale & Features
At first, a link-component might seem silly. However, there are things that you can do wrong – even with seemingly trivial things. `@vue-cdk/link` tries to make it easy to do the right things.

### Security Issues
Consider the following example:

```markup
<a href="https://example.org">
  Our Sponsor
</a>
```

This renders a native *anchor*-element and from a pure functionality perspective the link will *work*. Linking to external and potentially untrusted sites can be a security issue. One security issue that is relevant for the example above is called *[tabnabbing](https://en.wikipedia.org/wiki/Tabnabbing)*.

There are also other side issues like a sub-optimal performance for external link that don't receive special are.

`@vue-cdk/link` fixes this by attaching special attributes to external links. The attributes that are attached to external links are:

Attribute | Value
---------|----------
 `target` | `_blank`
 `rel` | `noopener noreferrer`

External links are automatically detected by `@vue-cdk/link`.

### Vue Router Integration
If you are using `href` then internal links will receive no special handling:

``` markup
<CLink href="/my/other/page">
  My other Page
</CLink>
```
This will render a normal anchor-element without any special handling.

`CLink` also has a `to`-prop. If set, then `CLink` will render a `RouterLink`. This allows you to use the same component for internal–, external– and router–links:

``` markup
<CLink to="/my/route">
  Router Link to /my/route
</CLink>
```

## Demo
Nothing special here – just two examples:

### Internal Link

```markup
<CLink to="/components">/components/<CLink>
```

**Preview:**

<c-link to="/components">/components/</c-link>

### External Link

```markup
<c-link href="https://example.org">External Link (example.org)</c-link>
```

**Preview:**

<c-link href="https://example.org">External Link (example.org)</c-link>
