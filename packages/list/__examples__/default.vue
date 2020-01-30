<template>
  <CList :items="items" style="height: 100px;">
    <template #default="{ item, active }">
      <CListItem :item="item" :active="active">{{ item }}</CListItem>
    </template>
  </CList>
</template>

<script>
import '@vue-cdk/list/style/index.css'
export default {
  data: () => ({
    items: [...Array(10).keys()].map(id => ({ id }))
  })
}
</script>
