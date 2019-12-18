<template>
  <CList
    style="height: 100px;"
    :selectionMode="selectionMode"
    :items="items"
  >
    <template #default="{item, active, index, selected}">
      <CListItem :item="item" :active="active" :sizeDependencies="[item.id]">
        {{ selected ? '[x]' : '[ ]' }} {{ item }}
      </CListItem>
    </template>
  </CList>
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
