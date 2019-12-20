<template>
  <div>
    <div>
      <input data-cy="input-outside" tabindex="-1" ref="inputOutside" />
    </div>
    <button data-cy="trap-button" @click.prevent.cancel.stop="trap">
      trap
    </button>
    <Modal ref="modal">
      <div class="modal">
        <input data-cy="input-a" tabindex="0" ref="intialInput" />
        <input  data-cy="input-b" />
        <input  data-cy="input-c" />
      </div>
    </Modal>
  </div>
</template>

<script>
import { createFocusTrap } from '@vue-cdk/focus-trap'

const Modal = {
  render(h) {
    return h('div', { style: 'width: 200px; height: 200px;' }, this.$slots.default)
  }
}

export default {
  components: { Modal },
  methods: {
    trap() {
      const t = createFocusTrap(this.$refs.modal)
      t.activate({
        onDeactivate: () => {
          // console.log('onDeactivate')
          // this.$refs.inputOutside.focus()
        },
        initialFocus: this.$refs.intialInput
      })
      // this.$trapFocus()
    }
  }
}
</script>

<style scoped>
.modal {
  background-color: #fefefe;
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem;
}
</style>