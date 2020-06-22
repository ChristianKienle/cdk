<template>
  <div>
    <button data-cy-reset @click="reset">reset</button>
    <CList
      data-cy="list"
      :minItemSize="20"
      :items="items"
      :loadMore="loadMore"
      keyField="id"
    >
      <template #loading>
        <div data-cy="loading">Loading Indicator</div>
      </template>
      <template #default="{ selected, active, item, index }">
        <CListItem
          :item="item"
          :active="active"
          data-cy="item"
          :data-cy-id="item.id"
          :data-cy-index="index"
          :data-cy-selected="String(selected)"
          :style="itemStyles"
        >
          <div> {{ selected ? '[x]' : '[ ]' }} {{ item }} – {{ item.index }} </div>
        </CListItem>
      </template>
    </CList>
  </div>
</template>
<script>
import '@vue-cdk/list/style/index.css'

const createItem = index => ({
  index,
  id: `${index}`,
  title: `item ${index}`
})

const createItems = (startIndex, count) => {
  return Array.from({ length: count }).map((_, index) => {
    return createItem(index + startIndex)
  })
}

export default {
  data() {
    return {
      items: createItems(0, 30)
    }
  },
  methods: {
    reset() {
      this.items = []
    },
    loadMoreItems(done) {
      const that = this
      setTimeout(() => {
        const { items } = that
        items.push(...createItems(items.length, 5))
        done()
      }, 2000)
    }
  }
}
</script>
