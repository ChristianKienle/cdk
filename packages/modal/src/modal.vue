<template>
  <ClientOnly>
    <Portal :selector="portalSelector">
      <transition name="vcdk-modal-fade">
        <slot name="overlay">
          <Overlay v-if="open_" class="vcdk-modal__overlay">
            <div :aria-hidden="String(!open_)" v-show="open_" style="outline: none">
              <CFocusTrap :active="open_">
                <div role="dialog" aria-modal="true" tabindex="-1" style="outline: none">
                  <slot :close="close" />
                </div>
              </CFocusTrap>
            </div>
          </Overlay>
        </slot>
      </transition>
    </Portal>
  </ClientOnly>
</template>

<script>
import CFocusTrap from '@vue-cdk/focus-trap'
import Overlay from './overlay.vue'
import { Portal } from '@linusborg/vue-simple-portal'
import shortId from './short-id'
import onServer from '@vue-cdk/utils/on-server'
import ClientOnly from '@vue-cdk/client-only/src/client-only.vue'

export default {
  name: 'Modal',
  mixins: [CFocusTrap()],
  components: { ClientOnly, Overlay, Portal },
  props: {
    portalSelector: {
      default: () => `#${shortId()}`,
      type: String
    },
    open: {
      type: Boolean,
      default: false
    }
  },
  beforeDestroy() {
    if (onServer()) {
      return
    }
    const portalEl = document.querySelector(this.portalSelector)
    if (portalEl == null) {
      return
    }
    portalEl.parentNode.removeChild(portalEl)
  },
  watch: {
    open(open) {
      this.open_ = open
    }
  },
  data() {
    return {
      open_: this.open
    }
  },
  methods: {
    close() {
      this.open_ = false
      this.$emit('update:open', false)
    }
  }
}
</script>
