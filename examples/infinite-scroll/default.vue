<template>
  <div style="height: 200px; border: 1px dashed #ccc;">
    <CInfiniteScroll
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
    >
      <template #default="{item, active, index }">
        <CInfiniteScrollItem
          :item="item"
          :active="active"
          :size-dependencies="[item.id]"
          :data-index="index"
        >
          {{ item }}
        </CInfiniteScrollItem>
      </template>
    </CInfiniteScroll>
  </div>
</template>

<script>
import '@vue-cdk/infinite-scroll/style/index.css'
export default {}
</script>
