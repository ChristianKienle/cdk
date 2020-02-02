<template>
  <ClientOnly>
    <Portal :selector="portalSelector">
      <transition name="vcdk-modal-fade" @after-enter="afterEnter" @after-leave="afterLeave">
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
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
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
  created() {
    this.$_lockedToTarget = null
  },
  beforeDestroy() {
    if (onServer()) {
      return
    }
    if (this.$_lockedToTarget != null) {
      enableBodyScroll(this.$_lockedToTarget)
    }
    const portalEl = document.querySelector(this.portalSelector)
    if (portalEl == null) {
      return
    }
    portalEl.parentNode.removeChild(portalEl)
  },
  methods: {
    afterEnter(el) {
      disableBodyScroll(el)
      this.$_lockedToTarget = el
    },
    afterLeave(el) {
      enableBodyScroll(el)
      this.$_lockedToTarget = null
    },
    close() {
      this.open_ = false
      this.$emit('update:open', false)
    }
  }
}
</script>
