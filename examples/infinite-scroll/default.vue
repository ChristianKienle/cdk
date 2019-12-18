<template>
  <InfiniteScroll style="height: 200px" :items="items">
    <template #default="{ item, active, index }">
      <InfiniteScrollItem :item="item" :active="active">
        Item[{{ index }}] = {{ item.id }}
      </InfiniteScrollItem>
    </template>
  </InfiniteScroll>
</template>

<script>
import '@vue-cdk/infinite-scroll/style/index.css'
export default {
  data: () => ({
    items: [...Array(50).keys()].map(id => ({ id }))
  })
}
</script>
