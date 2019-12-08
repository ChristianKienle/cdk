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
      <slot :item="item" :active="active" :index="index" />
    </template>

    <template #after="{ state }">
      <template v-if="state === 'loading'">
        <slot name="loading">
          <div>Loading…</div>
        </slot>
      </template>
    </template>
  </InifiniteScroll>
</template>

<script>
import InifiniteScroll from '@vue-cdk/infinite-scroll/src/infinite-scroll.vue'

export default {
  name: 'List',
  components: { InifiniteScroll },
  props: {
    // Name of property that uniquely identifies an item.
    keyField: {
      type: String,
      default: 'id'
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
      selectedId: null
    }
  }
}
</script>
