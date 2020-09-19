<script>
import CPopoverContent from '@vue-cdk/popover/src/content.vue'

export default {
  name: 'TooltipContent',
  functional: true,
  render(h, context) {
    const scopedSlots = {
      default: context.scopedSlots.default,
    }

    const attrs = {
      ...context.data.attrs,
      role: 'tooltip',
    }

    const data = {
      ...context.data,
      scopedSlots,
      attrs,
    }
    return h(CPopoverContent, data, [context.children])
  },
}
</script>
