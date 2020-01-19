<template>
  <p
    >The following link is rendered using <code>CLink</code> which has been prefixed with
    <code>MyPrefix</code>:
    <MyPrefixLink href="https://example.org">https://example.org</MyPrefixLink></p
  >
</template>
<script>
import * as Link from '@vue-cdk/link'

export default {
  mixins: [
    Link({
      componentName({ name, component }) {
        return `MyPrefix${name}`
      }
    })
  ]
}
</script>
