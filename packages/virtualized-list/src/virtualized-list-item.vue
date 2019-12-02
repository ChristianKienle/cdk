<script>
import CDynamicScrollerItem from "vue-virtual-scroller/src/components/DynamicScrollerItem";

export default {
  name: "CVirtualizedListItem",
  functional: true,
  render(h, ctx) {
    const data = {
      ...ctx.data,
    }
    return h(CDynamicScrollerItem, data, ctx.children)
  }
};
</script>
