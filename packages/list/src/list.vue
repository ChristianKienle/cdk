<template>
  <InifiniteScroll
    ref="inifiniteScroll"
    :keyField="keyField"
    :minItemSize="minItemSize"
    :items="items"
    :loadMore="loadMore"
  >
    <template #before>
      <slot name="before" />
    </template>

    <template #default="{item, active, index}">
      <slot :item="item" :active="active" :index="index" :selection="selection" :selected="selected(item)" />
    </template>

    <template #after="{ state }">
      <template v-if="state === 'loading'">
        <slot name="loading">
          <ListLoadingIndicator />
        </slot>
      </template>
    </template>
  </InifiniteScroll>
</template>

<script>
import InifiniteScroll from '@vue-cdk/infinite-scroll/src/infinite-scroll.vue'
import ListLoadingIndicator from './loading-indicator.vue'
import SingleSelectionMode from './selection/single'

export default {
  name: 'List',
  components: { InifiniteScroll, ListLoadingIndicator },
  provide() {
    return {
      vcdkList: this
    }
  },
  props: {
    // Name of property that uniquely identifies an item.
    keyField: {
      type: String,
      default: 'id'
    },
    selectionMode: {
      type: Function,
      default: SingleSelectionMode
    },
    // Minimal size of the items. Will be passed onto DynamicScroller.
    minItemSize: { type: Number, default: 30 },
    // Items to be rendered by the virtualized list. Each item must have a unique identifier. You can specify the name of the identifying property by using the key-field-prop.
    items: { type: Array, default: () => [] },
    // Function to be called when the list needs more items from you. This function is called with a callback parameter that you MUST call at some point with additional items.
    loadMore: { type: Function, default: null }
  },
  computed: {
    // selectedItem() {
      //   const { selectedId, items } = this
    //   if (selectedId == null) {
      //     return
    //   }
    //   const index = items.findIndex(item => {
      //     return this.idForItem(item) === selectedId
    //   })
    //   return index < 0 ? undefined : items[index]
    // }
  },
  methods: {
    idOfItem(item) {
      return item[this.keyField]
    },
    selected(item) {
      return this.selection.includes(this.idOfItem(item))
    },
    select(item) {
      const id = this.idOfItem(item)
      this.selection = this.selectionMode({selection: this.selection, affected: id })
    },
    // loadMore_(done_) {
      //   this.loadMore(() => {
        //     done_()
    //   })
    // },
    scrollToIndex(index) {
      this.$refs.inifiniteScroll.scrollToIndex(index)
    }
  },
  data() {
    return {
      selection: []
    }
  }
}
</script>
