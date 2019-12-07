<template>
  <VueVirtualDynamicScroller
    tabindex="0"
    ref="dynamicScroller"
    style="height: 100%;"
    :key-field="keyField"
    :min-item-size="minItemSize"
    :items="items"
    @scroll.native.passive="handleScroll"
  >
    <template #before>
      <slot name="before" />
    </template>

    <template v-slot="{ item, active, index }">
      <slot :item="item" :active="active" :index="index" />
    </template>

    <template #after>
      <slot name="after" />
    </template>
  </VueVirtualDynamicScroller>
</template>

<script>
import VueVirtualDynamicScroller from 'vue-virtual-scroller/src/components/DynamicScroller.vue'
import { scrollStatesEqual } from './scroll-state'

export default {
  name: 'InfiniteScroll',
  components: { VueVirtualDynamicScroller },
  props: {
    // Name of property that uniquely identifies an item.
    keyField: {
      type: String,
      default: 'id'
    },
    // Minimal size of the items (in `px`). Will be passed onto DynamicScroller.
    minItemSize: {
      type: Number,
      default: 30,
    },
    // Items to be rendered by the virtualized list. Each item must have a unique identifier. You can specify the name of the identifying property by using the key-field-prop.
    items: { type: Array, default: () => [] }
  },
  data() {
    return {
      scrollState: {
        nearTop: null,
        nearBottom: null
      }
    }
  },
  methods: {
    // @vuese
    // Scrolls the list to the item at `index`.
    scrollToIndex(index) {
      const scroller = this.$refs.dynamicScroller
      scroller.scrollToItem(index)
    },
    handleScroll(event) {
      const { scrollState, $el, minItemSize, $refs } = this
      const bounds = $el.getBoundingClientRect()
      const scroller = $refs.dynamicScroller.$refs.scroller
      const clientHeight = scroller.$refs.wrapper.clientHeight
      const nearBottom = clientHeight - $el.scrollTop <= bounds.height + minItemSize
      const nearTop = $el.scrollTop <= minItemSize
      const newScrollState = { nearTop, nearBottom }
      if(scrollStatesEqual(scrollState, newScrollState)) {
        return
      }
      this.scrollState = newScrollState
      this.$emit('scrollState', { ...newScrollState })
    }
  }
}
</script>
