<template>
  <div>
    <div>
      <input tabindex="-1" ref="inputOutside" />
    </div>
    <button @click.prevent.cancel.stop="trap">
      trap
    </button>
    <Modal ref="modal">
      <div>
        <p>I am a Modal</p>
        <input tabindex="0" ref="intialInput" />
        <input />
        <input />
      </div>
    </Modal>
  </div>
</template>

<script>
import { create as createFocusTrap } from '@vue-cdk/focus-trap'

const Modal = {
  render(h) {
    return h('div', { style: 'width: 200px; height: 200px;' }, this.$slots.default)
  }
}

export default {
  components: { Modal },
  // mixins: [FocusTrap],
  methods: {
    trap() {
      const t = createFocusTrap(this.$refs.modal)
      console.log('trap', t)
      t.activate({
        onDeactivate: () => {
          console.log('onDeactivate')
          this.$refs.inputOutside.focus()
        },
        initialFocus: this.$refs.intialInput
      })
      // this.$trapFocus()
    }
  }
}
</script>
