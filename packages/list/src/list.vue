<template>
  <CInifiniteScroll
    ref="inifiniteScroll"
    :key-field="keyField"
    :min-item-size="minItemSize"
    :items="items"
    :load-more="loadMore"
  >
    <template #before>
      <slot name="before" />
    </template>

    <template #default="{item, active, index}">
      <slot
        :item="item"
        :active="active"
        :index="index"
        :selection="selection"
        :selected="selected(item)"
      />
    </template>

    <template #after="{ state }">
      <template v-if="state === 'loading'">
        <slot name="loading">
          <CListLoadingIndicator />
        </slot>
      </template>
    </template>
  </CInifiniteScroll>
</template>

<script>
import CInifiniteScroll from '@vue-cdk/infinite-scroll/src/infinite-scroll.vue'
import CListLoadingIndicator from './loading-indicator.vue'
import NoneSelectionMode from './selection/none'

// The `List` component allows you to render an indefinetely long list of items. Under the hood `List` uses `InifiniteScroll`. This means that much of what applies to `InifiniteScroll` also applies to `List`. You can think of `List´ as a high–level version of `InifiniteScroll`.
export default {
  name: 'List',
  components: { CInifiniteScroll, CListLoadingIndicator },
  provide() {
    return {
      vcdkList: this
    }
  },
  props: {
    // Name of property that uniquely identifies an item.
    keyField: {
      type: String,
      // `id` – by default each of your item **must** have a property called `id`. You can change this by setting the value of this prop to something else.
      default: 'id'
    },
    // Selection mode of the List. The value of this prop determines how `CList` reacts to the user selecting items.
    selectionMode: {
      // A `Function` that tells `CList` how to handle selections. Please refer to the `CList` documentation to find out how to actually implement a custom selection mode.
      type: Function,
      // `NoneSelectionMode` – by default selecting an item does nothing. `@vue-cdk/list` exports more selection modes. Please refer to the `List` guide to see how that is done.
      default: NoneSelectionMode
    },
    // Minimal size of the items. Will be passed onto DynamicScroller.
    minItemSize: { type: Number, default: 30 },
    // Items to be rendered by the virtualized list. Each item must have a unique identifier. You can specify the name of the identifying property by using the `keyField`-prop.
    items: { type: Array, default: () => [] },
    // Function to be called when the list needs more items from you. This function is called with a callback parameter that you MUST call at some point with additional items.
    loadMore: { type: Function, default: null }
  },
  data() {
    return {
      selection: []
    }
  },
  methods: {
    idOfItem(item) {
      return item[this.keyField]
    },
    // @vuese
    // Whether or not a given item is selected.
    // @arg item an item managed by this list
    selected(item) {
      return this.selection.includes(this.idOfItem(item))
    },
    // @vuese
    // Select a given item. It depends on the current selection mode whether or not the item will actually be selected after this method has been executed.
    // @arg item an item managed by this list
    select(item) {
      const id = this.idOfItem(item)
      this.selection = this.selectionMode({ selection: this.selection, affected: id })
    },
    // @vuese
    // Scrolls the list to the item at `index`.
    // @arg index The row index of the item you want to scroll to.
    scrollToIndex(index) {
      this.$refs.inifiniteScroll.scrollToIndex(index)
    }
  }
}
</script>
