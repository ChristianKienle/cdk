<template>
  <VirtualizedList
    keyField="id"
    :items="[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]"
    ><template #item="{item}"
      ><div>{{ item.id }}</div></template
    ></VirtualizedList
  >
</template>

<script>
export default {};
</script>

<style>
</style>