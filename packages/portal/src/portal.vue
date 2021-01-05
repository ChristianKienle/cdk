<template>
  <div>
    <VueSimplePortal :selector="selector">
      <div>
        <slot />
      </div>
    </VueSimplePortal>
  </div>
</template>

<script>
import { Portal as VueSimplePortal } from '@linusborg/vue-simple-portal'

export default {
  name: 'Portal',
  components: {
    VueSimplePortal,
  },
  props: {
    selector: {
      type: String,
      default: null,
    },
  },
}
</script>
