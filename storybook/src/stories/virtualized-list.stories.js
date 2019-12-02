export default { title: 'Virtualized List' };

export const defaultList = () => ({
  template: `
<div style="height: 100px; border: 1px solid red;">
  <CVirtualizedList
    :items="[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }]">
      <template #item="{item, active, index }">
        <CVirtualizedListItem
          :item="item"
          :active="active"
          :size-dependencies="[item.id]"
          :data-index="index"
        >
        {{item}}
      </CVirtualizedListItem>
    </template>
  </CVirtualizedList>
</div>`,
});

export const endlessLoadingList = () => ({
  data() {
    return {
      items: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }]
    }
  },
  methods: {
    loadMore(done) {
      const count = 10
      const currentCount = this.items.length
      const ids = Array.from({ length: count }).map((_, index) => index + currentCount)
      const newItems = ids.map(id => ({ id }))
      this.items.push(...newItems)
      done()
    }
  },
  template: `
<div style="height: 100px; border: 1px solid red;">
  <CVirtualizedList
    :items="items" :loadMoreItems="loadMore">
      <template #item="{item, active, index }">
        <CVirtualizedListItem
          :item="item"
          :active="active"
          :size-dependencies="[item.id]"
          :data-index="index"
        >
        {{item}}
      </CVirtualizedListItem>
    </template>
  </CVirtualizedList>
</div>`,
});

export const endlessLoadingListWithLoadingState = () => ({
  data() {
    return {
      items: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }]
    }
  },
  methods: {
    loadMore(done) {
      const count = 10
      const currentCount = this.items.length
      const ids = Array.from({ length: count }).map((_, index) => index + currentCount)
      const newItems = ids.map(id => ({ id }))
      this.items.push(...newItems)
      setTimeout(done, 2000)
    }
  },
  template: `
<div style="height: 100px; border: 1px solid red;">
  <CVirtualizedList
    :items="items" :loadMoreItems="loadMore">
      <template #item="{item, active, index }">
        <CVirtualizedListItem
          :item="item"
          :active="active"
          :size-dependencies="[item.id]"
          :data-index="index"
        >
        {{item}}
      </CVirtualizedListItem>
    </template>
  </CVirtualizedList>
</div>`,
});

