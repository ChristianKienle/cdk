<script>
import InifiniteScrollItem from '@vue-cdk/infinite-scroll/src/item.vue'

// The `ListItem` component is used within the `List` component to render a single item.
export default {
  name: 'ListItem',
  inject: {
    vcdkList: { default: null }
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    keyField: {
      type: String,
      default: 'id'
    },
    active: {
      type: Boolean,
      default: false
    },
    sizeDependencies: {
      type: [Array, Object],
      default: () => []
    }
  },
  methods: {
    click() {
      const { vcdkList } = this
      if (vcdkList == null) {
        return
      }
      vcdkList.select(this.item)
    }
  },
  render(h) {
    const nativeOn = {
      click: this.click
    }
    const data = {
      props: this.$props,
      attrs: this.$attrs,
      nativeOn
    }
    return h(InifiniteScrollItem, data, this.$slots.default)
  }
}
</script>
