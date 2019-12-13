<script>
import CDynamicScrollerItem from 'vue-virtual-scroller/src/components/DynamicScrollerItem.vue'

export default {
  name: 'InfiniteScrollItem',
  functional: true,
  render(h, ctx) {
    return h(CDynamicScrollerItem, ctx.data, ctx.children)
  }
}
</script>
