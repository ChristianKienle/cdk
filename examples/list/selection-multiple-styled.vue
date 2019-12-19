<template>
  <CList style="height: 100px;" :selectionMode="selectionMode" :items="items">
    <template #default="{ item, active, index, selected }">
      <CListItem
        class="item"
        :class="classesFor({ selected })"
        :item="item"
        :active="active"
        :sizeDependencies="[item.id]"
      >
        {{ item }}
      </CListItem>
    </template>
  </CList>
</template>

<script>
import '@vue-cdk/list/style/index.css'
import { SelectionMode } from '@vue-cdk/list'

export default {
  data: () => ({
    selectionMode: SelectionMode.Multiple,
    items: [...Array(10).keys()].map(id => ({ id }))
  }),
  methods: {
    classesFor({ selected }) {
      return {
        'item--selected': selected
      }
    }
  }
}
</script>

<style scoped>
.item {
  cursor: pointer;
}

.item--selected {
  background-color: #d8ecfe;
}
</style>
