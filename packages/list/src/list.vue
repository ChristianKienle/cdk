<template>
  <InifiniteScroll
    ref="inifiniteScroll"
    :keyField="keyField"
    :minItemSize="minItemSize"
    :items="items"
    @scrollState="handleScrollState"
  >
    <template #before>
      <slot name="before" />
    </template>

    <template #default="{item, active, index}">
      <slot :item="item" :active="active" :index="index" />
    </template>

    <template #after>
      <template v-if="isLoading">
        <slot name="loading">
          <div>Loading…</div>
        </slot>
      </template>
    </template>
  </InifiniteScroll>
</template>

<script>
import InifiniteScroll from '@vue-cdk/infinite-scroll/src/infinite-scroll.vue'
// import InifiniteScrollItem from '@vue-cdk/infinite-scroll/src/item.vue'

export default {
  name: 'List',
  components: { InifiniteScroll },
  props: {
    // Name of property that uniquely identifies an item.
    keyField: {
      type: String,
      default: 'id'
    },
    // By default fd-virtualized-list will automatically requests more items if the use has scrolled down to the bottom of the list. Assume that your list has space for 30 items to be displayed at the same time and after loading the initial batch there is still space left. If total-item-count is set to a value greater than 30 or to null fd-virtualized-list automatically requests more items. This is repeated, until there is no space left or the total item count specified is reached. Of course the user can still load more items by scrolling to the bottom.
    totalItemCount: {
      type: Number,
      default: null
    },
    // Minimal size of the items. Will be passed onto DynamicScroller.
    minItemSize: { type: Number, default: 30 },
    // Items to be rendered by the virtualized list. Each item must have a unique identifier. You can specify the name of the identifying property by using the key-field-prop.
    items: { type: Array, default: () => [] },
    // Function to be called when the list needs more items from you. This function is called with a callback parameter that you MUST call at some point with additional items.
    loadMore: { type: Function, default: null }
  },
  computed: {
    isLoading() {
      return this.state === 'loading'
    },
    selectedItem() {
      const { selectedId, items } = this
      if (selectedId == null) {
        return
      }
      const index = items.findIndex(item => {
        return this.idForItem(item) === selectedId
      })
      return index < 0 ? undefined : items[index]
    }
  },
  mounted() {
    this.loadMoreIfNeeded()
  },
  updated() {
    requestAnimationFrame(() => this.loadMoreIfNeeded())
  },
  methods: {
    handleScrollState(scrollState) {
      if (scrollState.nearBottom === true) {
        this.loadMoreIfNeeded()
      }
    },
    isSelected(item) {
      return this.idForItem(item) === this.selectedId
    },
    idForItem(item) {
      return item[this.keyField]
    },
    loadMoreIfNeeded() {
      const { totalItemCount, isLoading, items } = this
      if (isLoading === true) {
        return
      }
      const moreItemsAvailable = totalItemCount == null ? true : totalItemCount > items.length
      if (moreItemsAvailable === false) {
        return
      }
      this.startToLoadMore()
    },
    startToLoadMore(event) {
      if (this.loadMore != null) {
        this.state = 'loading'
        if (event != null) {
          event.preventDefault()
          event.stopPropagation()
        }
        this.loadMore(this.acceptNewItems)
      }
    },
    acceptNewItems() {
      this.state = 'default'
      setTimeout(() => {
        this.loadMoreIfNeeded()
      }, 100)
    },
    // @vuese
    // Scrolls the list to the item at `index`.
    scrollToIndex(index) {
      this.$refs.inifiniteScroll.scrollToIndex(index)
    }
  },
  data() {
    return {
      state: 'default',
      selectedId: null
    }
  }
}
</script>
