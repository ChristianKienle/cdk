<template>
  <div>
    <ClientOnly>
      <div data-cy="client">hello browser</div>
    </ClientOnly>
    <div data-cy="all">hello all</div>
  </div>
</template>

<script>
import { ClientOnly } from '@vue-cdk/client-only'
export default {
  components: {
    ClientOnly,
  },
}
</script>
