<template>
  <div>
    <div style="margin-bottom: 1rem;">Scroll State: {{ scrollState }}</div>
    <div style="height: 200px; border: 1px dashed #ccc;">
      <CInfiniteScroll
        :items="items"
        @scroll:bottom="scrollPosition = 'bottom'"
        @scroll:top="scrollPosition = 'top'"
        @scrollState="scrollState = $event"
      >
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
      scrollState: {
        nearTop: null,
        nearBottom: null
      },
      scrollPosition: 'top',
      items: [...Array(100).keys()].map(index => ({ id: index }))
    }
  }
}
</script>
