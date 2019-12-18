<template>
  <InfiniteScroll style="height: 200px;" :items="items" :loadMore="loadMore">
    <template #default="{item, active }">
      <InfiniteScrollItem :item="item" :active="active" :sizeDependencies="[item.id]">
        Scroll down – {{ item.id }}
      </InfiniteScrollItem>
    </template>
  </InfiniteScroll>
</template>

<script>
import '@vue-cdk/infinite-scroll/style/index.css'
export default {
  data() {
    return {
      items: [...Array(20).keys()].map(index => ({ id: index }))
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
