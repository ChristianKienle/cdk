<template>
  <Popover
    with-arrow
    theme="clean"
    :flips="false"
    :body-styles="{
      overflowY: 'scroll',
      maxWidth: '350px',
      maxHeight: '200px'
    }"
  >
  <template #trigger="{toggle}">
    <button @click="toggle">Show Popover</button>
  </template>
  <template #default>
    <div>
      <div v-for="idx in indices" :key="String(idx)">
        I am part {{ idx + 1 }} of a wonderful popover.
      </div>
    </div>
  </template>
  </Popover>
</template>

<script>
import '@vue-cdk/popover-themes/index.css'
export default {
  data: () => ({ indices: Array.from({ length: 35 }).map((_, idx) => idx) })
}
</script>
