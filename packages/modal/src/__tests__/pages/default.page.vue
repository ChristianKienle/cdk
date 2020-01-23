<template>
  <div>
    <div>outside</div>
    <input tabindex="0" />
    <button data-cy="button" @click="open = true">Open Modal</button>
    <CModal :open.sync="open">
      <template #default="{close}">
        <div data-cy="modal" style="background-color: white;">
          <div>modal</div>
          <button data-cy="close-button" @click="close">close</button>
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
  mixins: [CModal()],
  data() {
    return {
      open: false
    }
  }
}
</script>
