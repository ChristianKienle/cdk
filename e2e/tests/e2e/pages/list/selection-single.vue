<template>
  <div style="height: 100px;">
    <List data-cy="list"
      :items="[
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 }
      ]"
      keyField="id"
    >
      <template #default="{item, active, index, selected}">
        <ListItem
          :item="item"
          :active="active"
          :sizeDependencies="[item.id]"
        >
          {{selected ? '[x]' : '[ ]'}} {{ item }}
        </ListItem>
      </template>
    </List>
  </div>
</template>

<script>
import '@vue-cdk/list/style/index.css'

export default {}

</script>