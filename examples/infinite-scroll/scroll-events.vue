<template>
  <div>
    <div style="margin-bottom: 1rem;">Scroll Position: {{ scrollPosition }}</div>
    <div style="height: 200px; border: 1px dashed #ccc;">
      <InfiniteScroll :items="items" @scrollPosition="scrollPosition = $event">
        <template #default="{ item, active, index }">
          <InfiniteScrollItem :item="item" :active="active" :sizeDependencies="[item.id]">
            {{ item }}
          </InfiniteScrollItem>
        </template>
      </InfiniteScroll>
    </div>
  </div>
</template>

<script>
import '@vue-cdk/infinite-scroll/style/index.css'
export default {
  data() {
    return {
      scrollPosition: {
        nearTop: null,
        nearBottom: null
      },
      items: [...Array(50).keys()].map(index => ({ id: index }))
    }
  }
}
</script>
