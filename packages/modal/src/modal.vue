<template>
  <ClientOnly>
    <Portal :selector="portalSelector">
      <transition name="vcdk-modal-fade">
        <slot name="overlay">
          <Overlay v-if="open_" class="vcdk-modal__overlay">
            <div v-show="open_" :aria-hidden="String(!open_)" style="outline: none">
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
  components: { ClientOnly, Overlay, Portal },
  mixins: [CFocusTrap()],
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
  data() {
    return {
      open_: this.open
    }
  },
  watch: {
    open(open) {
      this.open_ = open
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
  methods: {
    close() {
      this.open_ = false
      this.$emit('update:open', false)
    }
  }
}
</script>
