<template>
  <List :items="items" style="height: 100px;">
    <template #default="{item, active, index}">
      <ListItem :item="item" :active="active">{{ item }}</ListItem>
    </template>
  </List>
</template>

<script>
import '@vue-cdk/list/style/index.css'
export default {
  data: () => ({
    items: [...Array(10).keys()].map(id => ({ id }))
  })
}
</script>
