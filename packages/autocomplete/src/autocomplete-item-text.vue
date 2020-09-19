<script>
export default {
  name: 'AutocompleteItemText',
  functional: true,
  props: {
    blocks: {
      type: Array,
      required: true,
    },
  },
  render(h, ctx) {
    return ctx.props.blocks.map((block) => {
      const tag = block.highlighted ? 'strong' : 'span'
      return h(tag, {}, block.text)
    })
  },
}
</script>
