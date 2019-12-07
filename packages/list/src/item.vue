<script>
import InifiniteScrollItem from '@vue-cdk/infinite-scroll/src/item.vue'

export default {
  name: "ListItem",
  functional: true,
  render(h, ctx) {
    return h(InifiniteScrollItem, ctx.data, ctx.children)
  }
};
</script>
