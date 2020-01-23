<template>
  <div>
    <button data-cy-reset @click="reset">reset</button>
    <CList
      data-cy="list"
      :min-item-size="30"
      :items="items"
      :total-item-count="1000"
      :load-more-items="loadMoreItems"
      style="height: 400px;"
      key-field="id"
    >
      <template #loading>
        <div data-cy="loading">Loading Indicator</div>
      </template>
      <template #default="{ item, index }">
        <CListItem :item="item" :size-dependencies="[item.title]" :data-cy-item="item.id">
          <div>{{ item.title }}[{{ index }}]</div>
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
