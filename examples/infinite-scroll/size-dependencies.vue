<template>
  <div>
    <input type="number" v-model.number="id" />
    <input type="number" v-model.number="height" />
    <button data-cy="setHeightButton" @click="setHeight">set height</button>
    <div style="height: 100px; border: 1px solid red;">
      <InfiniteScroll :items="items">
        <template #default="{item, active, index}">
          <InfiniteScrollItem
            :item="item"
            :active="active"
            :data-index="index"
            :sizeDependencies="[item.height]"
          >
            <div class="sized-item" :style="{ height: `${item.height}px` }">
              {{ item }}
            </div>
          </InfiniteScrollItem>
        </template>
      </InfiniteScroll>
    </div>
  </div>
</template>

<script>
import "@vue-cdk/list-style/index.css";

const createItem = id => ({
  id,
  height: 20
});

export default {
  data() {
    return {
      id: 0,
      height: 20,
      items: [...Array(10).keys()].map(createItem)
    };
  },
  methods: {
    setHeight() {
      console.log("setHeight");
      const { id, height, items } = this;
      const item = items.find(item => id === item.id);
      if (item == null) {
        throw new Error("item not found");
      }
      item.height = height
    },
    loadMore(done) {
      const count = 10;
      const currentCount = this.items.length;
      const ids = [...Array(10).keys()].map(index => index + currentCount);
      const newItems = ids.map(createItem);
      this.items.push(...newItems);
      done();
    }
  }
};
</script>

<style scoped>
.sized-item {
  box-sizing: border-box;
  border-bottom: 1px solid gray;
}
</style>
