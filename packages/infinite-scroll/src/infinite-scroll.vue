<template>
  <VueVirtualDynamicScroller
    tabindex="0"
    ref="dynamicScroller"
    style="height: 100%;"
    :keyField="keyField"
    :minItemSize="minItemSize"
    :items="items"
    :prerender="items.length"
    @scroll.native.passive="handleScroll"
  >
    <template #before>
      <slot name="before" :state="state" :scrollPosition="scrollPosition" />
    </template>

    <template v-slot="{ item, active, index }">
      <slot :item="item" :active="active" :index="index" />
    </template>

    <template #after>
      <slot name="after" :state="state" :scrollPosition="scrollPosition" />
    </template>
  </VueVirtualDynamicScroller>
</template>

<script>
import VueVirtualDynamicScroller from 'vue-virtual-scroller/src/components/DynamicScroller.vue'
import scrollPositionsEqual from './scroll-positions-equal'

// The `InfiniteScroll` component expects you to do tell it two things at a minimum:
// - **What to render:**: You do this by setting the `items`-prop. The items should be an array of objects with an `id`-field.
// - **How to render a single item:** You do this by providing the scoped default slot. By default, `InfiniteScroll` expects the items-array to contain objects that have a least an `id`-property. You can override this by setting the `keyField`-prop.
//
// **Slot Props**
//
// The default slot you have to provide receives several slot-props:
//
// - `item`: The item that should be rendered
// - `index`: The index (type: `Number`) of the item
// - `active`: A `boolean` value that is `true` the item is currently active. An item is considered active when it is currently beeing positioned by the [virtualization library](https://github.com/Akryum/vue-virtual-scroller/) that is used under the hood.
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
      default: 18
    },
    // Items to be rendered by the infinite scroll component. Each item must have a unique identifier. You can specify the name of the identifying property by using the key-field-prop.
    items: { type: Array, default: () => [] },
    // Function to be called when the list needs more items from you. This function is called with a callback parameter that you MUST call at some point with additional items.
    loadMore: { type: Function, default: null }
  },
  data() {
    return {
      state: 'default',
      scrollPosition: {
        nearTop: null,
        nearBottom: null
      }
    }
  },
  computed: {
    isLoading() {
      return this.state === 'loading'
    }
  },
  mounted() {
    if (this.items.length === 0) {
      this.startToLoadMore()
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
      const { scrollPosition, $el, minItemSize, $refs } = this
      const bounds = $el.getBoundingClientRect()
      const scroller = $refs.dynamicScroller.$refs.scroller
      const clientHeight = scroller.$refs.wrapper.clientHeight
      const nearBottom = clientHeight - $el.scrollTop <= bounds.height + minItemSize
      const nearTop = $el.scrollTop <= minItemSize
      const newScrollState = { nearTop, nearBottom }
      if (scrollPositionsEqual(scrollPosition, newScrollState)) {
        return
      }
      this.scrollPosition = newScrollState
      this.$emit('scrollPosition', { ...newScrollState })
      if (newScrollState.nearBottom && this.isLoading === false) {
        this.loadMoreIfNeeded()
      }
    },
    loadMoreIfNeeded() {
      const { isLoading } = this
      if (isLoading === true) {
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
        this.loadMore(() => (this.state = 'default'))
      }
    }
  }
}
</script>
