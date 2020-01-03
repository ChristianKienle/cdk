<template>
  <div class="row">
    <label class="label">{{ label }}:</label>
    <div class="control">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: ['label']
}
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  margin-top: 3px;
  margin-bottom: 3px;
}
.control {
  font-size: 11px;
  margin-left: 10px;
  max-width: 50%;
  flex-basis: 50%;
  vertical-align: middle;
}

.label {
  text-align: right;
  flex-basis: 50%;
  max-width: 50%;
}
</style>
