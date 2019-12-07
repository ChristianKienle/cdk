<template>
  <div>
    <button data-cy-reset @click="reset">reset</button>
    <CList
      data-cy="list"
      :minItemSize="30"
      :items="items"
      :totalItemCount="1000"
      :loadMoreItems="loadMoreItems"
      style="height: 400px;"
      keyField="id"
    >
      <template #loading>
        <div data-cy="loading">Loading Indicator</div>
      </template>
      <template #default="{ item, index }">
        <CListItem
          :item="item"
          :sizeDependencies="[item.title]"
          :data-cy-item="item.id"
        >
          <div>{{ item.title }}[{{ index }}]</div>
        </CListItem>
      </template>
    </CList>
  </div>
</template>

<script>
import '@vue-cdk/list-style/index.css'

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
  },
  data() {
    return {
      items: createItems(0, 30)
    }
  }
}
</script>
