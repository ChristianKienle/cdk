<template>
  <ClientOnly>
    <VueSimplePortal v-bind="$attrs" v-on="$listeners">
      <slot />
    </VueSimplePortal>
  </ClientOnly>
</template>

<script>
import { Portal as VueSimplePortal } from "@linusborg/vue-simple-portal";
import { ClientOnly } from "@vue-cdk/client-only";

export default {
  name: 'Portal',
  inheritAttrs: false,
  components: {
    ClientOnly,
    VueSimplePortal
  }
};
</script>
