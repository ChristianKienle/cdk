<template>
  <CDynamicScroller
    tabindex="0"
    ref="vList"
    style="height: 100%;"
    :key-field="keyField"
    :min-item-size="minItemSize"
    :items="items"
  >
    <template v-slot:after>
      <div
        style="height: 10px;"
        ref="after"
        v-observe-visibility="afterVisibilityChanged"
      >
        <template v-if="isLoading">
          <slot name="loading">
            <div>Loading…</div>
          </slot>
        </template>
      </div>
    </template>

    <template v-slot="{ item, active, index }">
      <div>
        <slot name="item" :item="item" :active="active" :index="index"></slot>
      </div>
    </template>
  </CDynamicScroller>
</template>

<script>
import CDynamicScroller from "vue-virtual-scroller/src/components/DynamicScroller";
import CDynamicScrollerItem from "vue-virtual-scroller/src/components/DynamicScrollerItem";

export default {
  name: "CList",
  components: {
    CDynamicScroller,
    CDynamicScrollerItem
  },
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
    loadMoreItems: { type: Function, default: null }
  },
  computed: {
    isLoading() {
      return this.state === "loading";
    },
    selectedItem() {
      const { selectedId, items } = this;
      if (selectedId == null) {
        return;
      }
      const index = items.findIndex(item => {
        return this.idForItem(item) === selectedId;
      });
      return index < 0 ? undefined : items[index];
    }
  },
  mounted() {
    if (this.items.length === 0) {
      this.startToLoadMoreItems();
    }
    this.$forceUpdate();
  },
  updated() {
    requestAnimationFrame(() => {
      this.loadMoreItemsIfNeeded();
    });
  },
  methods: {
    itemIsSelected(item) {
      return this.idForItem(item) === this.selectedId;
    },
    idForItem(item) {
      return item[this.keyField];
    },
    afterVisibilityChanged(isVisible) {
      this.afterSlotVisible = isVisible;
      if (isVisible) {
        this.loadMoreItemsIfNeeded();
      }
    },
    loadMoreItemsIfNeeded() {
      const { totalItemCount, isLoading, items, afterSlotVisible } = this;
      const loadingIsPossible = !isLoading;
      if (!loadingIsPossible) {
        return;
      }
      const moreItemsAvailable =
        totalItemCount == null ? true : totalItemCount > items.length;
      const isNeeded = afterSlotVisible && moreItemsAvailable;
      if (!isNeeded) {
        return;
      }
      this.startToLoadMoreItems();
    },
    startToLoadMoreItems(event) {
      if (this.loadMoreItems != null) {
        this.state = "loading";
        if (event != null) {
          event.preventDefault();
          event.stopPropagation();
        }
        this.loadMoreItems(this.acceptNewItems);
        this.updateScroll();
      }
    },
    acceptNewItems() {
      this.state = "default";
      setTimeout(() => {
        this.loadMoreItemsIfNeeded();
      }, 100);
    },
    updateScroll() {
      this.$refs["vList"].$el.scrollTop = this.$refs["vList"].$el.scrollTop - 5;
    }
  },
  data() {
    return {
      afterSlotVisible: false,
      state: "default",
      selectedId: null
    };
  }
};
</script>
