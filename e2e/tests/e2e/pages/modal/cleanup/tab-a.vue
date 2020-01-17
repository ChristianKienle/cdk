<template>
  <div>
    <p data-cy="tab-a">tab a</p>
    <button data-cy="button" @click="open = true">Open Modal</button>
    <CModal :portalSelector="portalSelector" :open.sync="open">
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
  </div>
</template>

<script>
import '@vue-cdk/modal/style/index.css'
import CModal from '@vue-cdk/modal'
import shortId from './short-id'

export default {
  data() {
    return {
      open: false,
      portalSelector: `#modal-tab-a-${shortId()}`
    }
  },
  mixins: [CModal()]
}
</script>
