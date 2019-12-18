<template>
  <div>
    <VueSimplePortal selector="#helloworld">
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
    VueSimplePortal
  }
}
</script>
