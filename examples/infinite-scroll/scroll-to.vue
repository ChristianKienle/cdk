<template>
  <div>
    <input type="number" v-model.number="itemIndex" />
    <button data-cy="setHeightButton" @click="scrollToItem">scroll</button>
    <div style="height: 100px; border: 1px solid red;">
      <CInfiniteScroll ref="list" :items="items">
        <template #default="{item, active, index}">
          <CInfiniteScrollItem
            :item="item"
            :active="active"
            :data-index="index"
            :sizeDependencies="[item.height]"
          >
            <div class="sized-item">
              {{ item }}
            </div>
          </CInfiniteScrollItem>
        </template>
      </CInfiniteScroll>
    </div>
  </div>
</template>

<script>
import '@vue-cdk/infinite-scroll/style/index.css'

const createItem = id => ({
  id,
  height: 20
})

export default {
  data() {
    return {
      itemIndex: 0,
      items: [...Array(10).keys()].map(createItem)
    }
  },
  methods: {
    scrollToItem() {
      this.$refs.list.scrollToIndex(this.itemIndex)
    }
  }
}
</script>

<style scoped>
.sized-item {
  box-sizing: border-box;
  border-bottom: 1px solid gray;
}
</style>
