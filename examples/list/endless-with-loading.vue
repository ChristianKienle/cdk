<template>
  <div style="height: 200px; border: 1px solid red;">
    <CList :items="items" :loadMore="loadMore">
      <template #default="{item, active, index }">
        <CListItem :item="item" :active="active" :size-dependencies="[item.id]" :data-index="index">
          {{ item }}
        </CListItem>
      </template>
    </CList>
  </div>
</template>

<script>
import '@vue-cdk/list-style/index.css'

export default {
  data() {
    return {
      items: [...Array(100).keys()].map(index => ({ id: index }))
    }
  },
  methods: {
    loadMore(done) {
      const count = 10
      const currentCount = this.items.length
      const ids = Array.from({ length: count }).map((_, index) => index + currentCount)
      const newItems = ids.map(id => ({ id }))
      this.items.push(...newItems)
      setTimeout(done, 2000)
    }
  }
}
</script>
