<template>
  <List style="height: 100px;" :selectionMode="selectionMode" :items="items">
    <template #default="{item, active, index, selected}">
      <ListItem :item="item" :active="active" :sizeDependencies="[item.id]">
        {{ selected ? '[x]' : '[ ]' }} {{ item }}
      </ListItem>
    </template>
  </List>
</template>

<script>
import '@vue-cdk/list/style/index.css'
import { SelectionMode } from '@vue-cdk/list'

export default {
  data: () => ({
    selectionMode: SelectionMode.Single,
    items: [...Array(10).keys()].map(id => ({ id }))
  })
}
</script>
