<template>
  <div>
    <div style="margin-bottom: 1rem;">Scroll Position: {{ scrollPosition }}</div>
    <div style="height: 200px; border: 1px dashed #ccc;">
      <CInfiniteScroll :items="items" @scrollPosition="scrollPosition = $event">
        <template #default="{ item, active, index }">
          <CInfiniteScrollItem :item="item" :active="active" :sizeDependencies="[item.id]">
            {{ item }}
          </CInfiniteScrollItem>
        </template>
      </CInfiniteScroll>
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
