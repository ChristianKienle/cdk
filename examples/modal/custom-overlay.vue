<template>
  <div>
    <button @click="open = true">Open Modal</button>
    <CModal :open.sync="open">
      <template #overlay>
        <CModalOverlay v-show="open" class="custom-overlay">
          <div style="background-color: white;">
            <div>modal</div>
            <button @click="open = false">close</button>
            <div>
              <input />
            </div>
          </div>
        </CModalOverlay>
      </template>
    </CModal>
  </div>
</template>

<script>
import CModal from '@vue-cdk/modal'
import '@vue-cdk/modal/style/index.css'
export default {
  data() {
    return {
      open: false
    }
  },
  mixins: [CModal()]
}
</script>

<style scoped>
.custom-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 100%, #333, #333 50%, #eee 75%, #333 75%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001 !important;
}
</style>
