<script>
import CDynamicScrollerItem from 'vue-virtual-scroller/src/components/DynamicScrollerItem.vue'
// The `InfiniteScrollItem` component is used within the `InfiniteScroll` component to render a single item.
export default {
  name: 'InfiniteScrollItem',
  functional: true,
  render(h, ctx) {
    return h(CDynamicScrollerItem, ctx.data, ctx.children)
  }
}
</script>
