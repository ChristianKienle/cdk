<template>
  <CList
    :load-more="loadMore"
    style="height: 100vh; outline: none;"
    :selection-mode="selectionMode"
    :items="items"
    :min-item-size="40"
  >
    <template #default="{ item, active, index, selected }">
      <CListItem
        class="item"
        :class="classesFor({ selected })"
        :item="item"
        :active="active"
        :size-dependencies="[item.id]"
      >
        <CustomItem :item="item" />
      </CListItem>
    </template>
  </CList>
</template>

<script>
import '@vue-cdk/list/style/index.css'
import { SelectionMode } from '@vue-cdk/list'
import CustomItem from './context-menu-item.vue'

export default {
  components: { CustomItem },
  data: () => ({
    selectionMode: SelectionMode.Single,
    items: [...Array(100).keys()].map(id => ({ index: id, id }))
  }),
  methods: {
    loadMore(done) {
      const count = 100
      const currentCount = this.items.length
      const ids = Array.from({ length: count }).map((_, index) => index + currentCount)
      const newItems = ids.map(id => ({ id, index: id }))
      this.items.push(...newItems)
      done()
    },
    targetIdFor(item) {
      return `target-item-${item.id}`
    },
    classesFor({ selected }) {
      return {
        'item--selected': selected
      }
    }
  }
}
</script>

<style>
*::-webkit-scrollbar {
  width: 0 !important;
}
body {
  margin: 0;
}
</style>

<style scoped>
.item {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Color Emoji';
  padding: 10px;
}

.item--selected {
  z-index: -1;
  background-color: #f9fafc;
}
</style>
