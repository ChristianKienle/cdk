<template>
  <ClientOnly>
    <Portal v-bind="$attrs" v-on="$listeners">
      <slot />
    </Portal>
  </ClientOnly>
</template>

<script>
import { Portal } from "@linusborg/vue-simple-portal";
import { ClientOnly } from "@vue-cdk/client-only";

export default {
  name: 'CPortal',
  inheritAttrs: false,
  components: {
    ClientOnly,
    Portal
  }
};
</script>
