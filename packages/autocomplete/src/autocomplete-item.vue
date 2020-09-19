<script>
import textBlocksFromRanges from './helper/text-blocks-from-ranges'

export default {
  name: 'AutocompleteItem',
  props: {
    tag: {
      type: String,
      default: () => 'a',
    },
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    highlightRanges_() {
      return this.item.highlightRanges
    },
    text_() {
      return this.item.text
    },
    textBlocks_() {
      return textBlocksFromRanges(this.text_, this.highlightRanges_)
    },
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    },
  },
  render(h) {
    const children = this.$scopedSlots.default({
      blocks: this.textBlocks_,
    })
    const on = {
      click: this.handleClick,
    }
    return h(this.tag, { on }, children)
  },
}
</script>
