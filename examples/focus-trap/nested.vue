<template>
  <div>
    <button @click="showModal">
      Show Modal
    </button>
    <Modal v-show="modalVisible" ref="modal">
      <div>
        <p>I am a Modal</p>
        <button @click="nestedTrap">Show nested Modal</button>
        <button @click="closeModal">Close Modal</button>
        <input ref="intialInput" tabindex="0" />
        <input />
        <input />
      </div>
    </Modal>
    <Modal v-show="nestedModalVisible" ref="nestedModal">
      <div>
        <p>I am <strong>nested</strong> a Modal</p>
        <button @click="closeNestedModal">Close nested Modal</button>
        <input ref="nestedInitialInput" tabindex="0" />
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
    const style = {
      width: '200px',
      height: '200px',
      border: '1px solid #ccc',
      backgroundColor: '#fefefe'
    }
    return h('div', { style }, this.$slots.default)
  }
}

export default {
  components: { Modal },
  data() {
    return {
      modalVisible: false,
      nestedModalVisible: false
    }
  },
  methods: {
    closeModal() {
      this.trap.deactivate()
    },
    async showModal() {
      this.modalVisible = true
      await this.$nextTick()
      this.trap = createFocusTrap(this.$refs.modal)
      this.trap.activate({
        onDeactivate: () => {
          this.modalVisible = false
        },
        initialFocus: this.$refs.intialInput
      })
    },
    async nestedTrap() {
      this.nestedModalVisible = true
      await this.$nextTick()
      this.nestedTrap = createFocusTrap(this.$refs.nestedModal)
      this.nestedTrap.activate({
        onDeactivate: () => {
          this.nestedModalVisible = false
        },
        initialFocus: this.$refs.nestedInitialInput
      })
    },
    async closeNestedModal() {
      this.nestedTrap.deactivate()
    }
  }
}
</script>
