<template>
  <div>
    <button data-cy="activate" @click="active = true">Activate</button>
    <input data-cy="inputOutside" />
    <CFocusTrap :active="active">
      <div>
        <input tabindex="0" data-cy="inputInside" />
        <button data-cy="deactivate" @click="active = false">Deactivate</button>
      </div>
    </CFocusTrap>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false
    }
  }
}
</script>
