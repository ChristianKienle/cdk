<template>
  <div>
    <input v-model.number="id" type="number" />
    <input v-model.number="height" type="number" />
    <button data-cy="setHeightButton" @click="setHeight">set height</button>
    <div style="height: 100px; border: 1px solid red">
      <CInfiniteScroll :items="items">
        <template #default="{ item, active, index }">
          <CInfiniteScrollItem
            :item="item"
            :active="active"
            :data-index="index"
            :size-dependencies="[item.height]"
          >
            <div class="sized-item" :style="{ height: `${item.height}px` }">
              {{ item }}
            </div>
          </CInfiniteScrollItem>
        </template>
      </CInfiniteScroll>
    </div>
  </div>
</template>

<script>
import '@vue-cdk/list/style/index.css'

const createItem = (id) => ({
  id,
  height: 20,
})

export default {
  data() {
    return {
      id: 0,
      height: 20,
      items: [...Array(10).keys()].map(createItem),
    }
  },
  methods: {
    setHeight() {
      const { id, height, items } = this
      const item = items.find((item) => id === item.id)
      if (item == null) {
        throw new Error('item not found')
      }
      item.height = height
    },
    loadMore(done) {
      const currentCount = this.items.length
      const ids = [...Array(10).keys()].map((index) => index + currentCount)
      const newItems = ids.map(createItem)
      this.items.push(...newItems)
      done()
    },
  },
}
</script>

<style scoped>
.sized-item {
  box-sizing: border-box;
  border-bottom: 1px solid gray;
}
</style>
