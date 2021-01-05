<template>
  <div>
    <div>
      <input ref="inputOutside" tabindex="-1" />
    </div>
    <button @click.prevent.cancel.stop="activateTrap">trap</button>
    <Modal ref="modal">
      <div>
        <p>I am a Modal</p>
        <input ref="intialInput" tabindex="0" />
        <input />
        <input />
      </div>
    </Modal>
  </div>
</template>

<script>
import { createFocusTrap } from '@vue-cdk/focus-trap'

const Modal = {
  render(h) {
    return h('div', { style: 'width: 200px; height: 200px;' }, this.$slots.default)
  },
}

export default {
  components: { Modal },
  beforeDestroy() {
    if (this.trap != null) {
      this.trap.deactivate()
    }
  },
  methods: {
    activateTrap() {
      this.trap = createFocusTrap(this.$refs.modal)
      this.trap.activate({
        onDeactivate: () => {
          this.$refs.inputOutside.focus()
        },
        initialFocus: this.$refs.intialInput,
      })
    },
  },
}
</script>
