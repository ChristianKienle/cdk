<template>
  <div style="height: 100px; border: 1px solid red;">
  <List
    :items="items" :loadMore="loadMore">
      <template #default="{item, active, index }">
        <ListItem
          :item="item"
          :active="active"
          :sizeDependencies="[item.id]"
          :data-index="index"
        >
        {{item}}
      </ListItem>
    </template>
  </List>
</div>
</template>

<script>
import '@vue-cdk/list-style/index.css'

export default {
  data() {
    return {
      items: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }]
    }
  },
  methods: {
    loadMore(done) {
      const count = 10
      const currentCount = this.items.length
      const ids = Array.from({ length: count }).map((_, index) => index + currentCount)
      const newItems = ids.map(id => ({ id }))
      this.items.push(...newItems)
      done()
    }
  }
}

</script>