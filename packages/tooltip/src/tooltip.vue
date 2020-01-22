<script>
import Popover from '@vue-cdk/popover/src/popover'
import Vue from 'vue'

export default {
  name: 'Tooltip',
  components: { Popover },
  props: {
    noArrow: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    },
    placement: {
      type: String,
      default: 'top'
    }
  },
  computed: {
    popoverTheme() {
      const { theme } = this
      if (theme == null) {
        return null
      }
      return `tooltip-${this.theme}`
    }
  },
  watch: {
    visible(visible) {
      const { $_popover } = this
      if ($_popover == null) {
        return
      }
      $_popover.visible = visible
    },
    popoverTheme(popoverTheme) {
      const { $_popover } = this
      if ($_popover == null) {
        return
      }
      $_popover.theme = popoverTheme
    }
  },
  beforeUpdate() {
    if (this.$el == null) {
      return
    }

    if (this.$_showHandler != null) {
      this.$el.removeEventListener('mouseenter', this.$_showHandler)
      this.$_showHandler = null
    }
    if (this.$_hideHandler != null) {
      this.$el.removeEventListener('mouseleave', this.$_hideHandler)
      this.$_hideHandler = null
    }
  },
  updated() {
    const { $el } = this
    if ($el == null) {
      return
    }
    this.$_showHandler = () => {
      this.$_popover.show()
    }
    this.$el.addEventListener('mouseenter', this.$_showHandler)
    this.$_hideHandler = () => {
      this.$_popover.hide()
    }

    this.$el.addEventListener('mouseleave', this.$_hideHandler)
  },
  created() {
    this.$_showHandler = null
    this.$_hideHandler = null
  },
  destroy() {
    this.$_popover.$destory()
  },

  mounted() {
    const target = () => this.$el
    const parent = this
    const theme = this.popoverTheme
    const renderContent = (h, props) => {
      const { text, $scopedSlots } = this
      if (text != null) {
        return h('div', [text])
      }
      return $scopedSlots.content(props)
    }
    this.$_popover = new Vue({
      components: { Popover },
      data() {
        return {
          theme,
          noArrow: parent.noArrow,
          visible: parent.visible,
          placement: parent.placement
        }
      },
      methods: {
        show() {
          this.visible = true
        },
        hide() {
          this.visible = false
        }
      },
      render(h) {
        const props = {
          target,
          withArrow: !this.noArrow,
          visible: this.visible,
          theme: this.theme,
          placement: this.placement
        }
        const scopedSlots = {
          default(popoverProps) {
            return renderContent(h, popoverProps)
          }
        }
        return h(Popover, { parent, props, scopedSlots })
      }
    }).$mount()
    this.$forceUpdate()
  },
  render(h) {
    return this.$slots.default
  }
}
</script>
