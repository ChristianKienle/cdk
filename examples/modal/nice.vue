<template>
  <div>
    <button @click="open = true">Open Modal</button>

    <CModal :open.sync="open">
      <div class="modal">
        <div class="modal-title">Delete Account?</div>
        <div class="modal-content"
          >Are you sure to delete your account? You can also just deactivate your account and
          activate it later on if you just want to get a little break.</div
        >
        <div class="modal-actions">
          <button class="modal-action modal-confirm" @click="open = false"
            ><span class="modal-action__title">Delete</span></button
          >
          <button class="modal-action modal-cancel" @click="open = false"
            ><span class="modal-action__title">Cancel</span></button
          >
        </div>
      </div>
    </CModal>
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

<style scoped>
.modal {
  max-width: 30vw;
  background-color: white;
  padding: 2rem 1.5rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Color Emoji';
  border-radius: 0.2rem;
}
.modal {
  box-shadow: 0px 0px 68px -15px rgba(0, 0, 0, 0.8);
  transition: box-shadow 0.3s ease-in-out;
}
.modal:hover {
  box-shadow: 0px 10px 68px -10px rgba(0, 0, 0, 1);
}
.modal-title {
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 1rem;
}
.modal-content {
  font-size: 1rem;
  margin: 1rem 0rem;
  line-height: 1.7rem;
}
.modal-actions {
  display: flex;
  justify-content: flex-end;
}
.modal-action {
  margin-left: 1rem;
  font-size: 1rem;
  padding: 0.9rem 1.2rem;
  border-radius: 0.33rem;
  color: white;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s ease-in-out;
}
.modal-confirm {
  border: 1px solid rgb(84, 119, 0);
  color: rgb(84, 119, 0);
  background-color: rgb(245, 255, 221);
}
.modal-confirm:hover {
  background-color: rgb(224, 255, 151);
}
.modal-confirm:focus {
  box-shadow: 0px 0px 5px 0px rgba(84, 119, 0, 150);
}
.modal-cancel {
  border: 1px solid rgb(119, 24, 0);
  color: rgb(119, 24, 0);
  background-color: rgb(255, 225, 221);
}
.modal-cancel:hover {
  background-color: rgb(255, 189, 180);
}
.modal-cancel:focus {
  box-shadow: 0px 0px 5px 0px rgba(201, 131, 122, 200);
}
</style>
