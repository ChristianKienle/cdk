<template>
  <div>
    <button data-cy-reset @click="reset">reset</button>
    <CList
      data-cy="list"
      :minItemSize="20"
      :items="items"
      :totalItemCount="1000"
      :loadMore="loadMore"
      style="height: 200px;"
      keyField="id"
    >
      <template #loading>
        <div data-cy="loading">Loading Indicator</div>
      </template>
      <template #default="{ item, index }">
        <CListItem
          :item="item"
          style="height: 20px;"
          data-cy="item" :data-cy-id="item.id"
        >
          <div>{{item.index}}</div>
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

const createItems = (startIndex, count) => [...Array(count).keys()].map(index => createItem(index + startIndex))

export default {
  methods: {
    reset() {
      this.items = []
    },
    loadMore(done) {
      const that = this
      setTimeout(() => {
        const { items } = that
        items.push(...createItems(items.length, 5))
        done()
      }, 1000)
    }
  },
  data() {
    return {
      items: createItems(0, Number.parseInt(this.$route.query.numberOfInitialItems || 0, 10))
    }
  }
}
</script>
