<template>
  <div>
    <div>outside</div>
    <input tabindex="0" />
    <button @click="open = true">Open Modal</button>
    <CModal :open.sync="open">
      <template #default="{close}">
        <div style="background-color: white;">
          <div>modal</div>
          <button @click="close">close</button>
          <div>
            <input />
          </div>
        </div>
      </template>
    </CModal>

    <div>outside</div>
    <input tabindex="0" />
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
