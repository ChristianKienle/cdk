<script>
import InifiniteScrollItem from '@vue-cdk/infinite-scroll/src/item.vue'

export default {
  name: 'ListItem',
  inject: {
    vcdkList: { default: null }
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
  props: {
    item: {
      type: Object,
      required: true
    },
    keyField: {
      type: String,
      default: 'id'
    },
    active: {},
    sizeDependencies: {}
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
