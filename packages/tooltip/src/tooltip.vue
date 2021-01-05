<script>
import Popover from '@vue-cdk/popover/src/popover'
import Vue from 'vue'
import createOnEscListener from './on-esc-listener'
import createEventListener from './create-event-listener'
import TooltipContent from './content.vue'

export default {
  name: 'Tooltip',
  components: { Popover },
  props: {
    noArrow: {
      type: Boolean,
      default: false,
    },
    visible: {
      type: Boolean,
      default: null,
    },
    theme: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      default: null,
    },
    placement: {
      type: String,
      default: 'top',
    },
  },
  computed: {
    popoverTheme() {
      const { theme } = this
      if (theme == null) {
        return null
      }
      return `tooltip-${this.theme}`
    },
  },
  watch: {
    visible(visible) {
      const { $_popover } = this
      if ($_popover == null) {
        return
      }
      if (visible) {
        $_popover.show()
      } else {
        $_popover.hide()
      }
    },
    popoverTheme(popoverTheme) {
      const { $_popover } = this
      if ($_popover == null) {
        return
      }
      $_popover.theme = popoverTheme
    },
  },
  beforeUpdate() {
    if (this.$el == null) {
      return
    }
    this.turnListenersOff()
  },
  updated() {
    const { $el } = this
    if ($el == null) {
      return
    }
    this.setupListeners()
    this.turnListenersOn()
  },
  destroy() {
    this.$_popover.$destory()
    this.turnListenersOff()
  },
  mounted() {
    const target = () => this.$el
    const theme = this.popoverTheme
    this.$_escListener = createOnEscListener(() => this.handleESC())
    const tooltipVM = this

    this.$_popover = new Vue({
      components: { Popover },
      data() {
        return {
          theme,
          noArrow: tooltipVM.noArrow,
          visible: tooltipVM.visible,
          placement: tooltipVM.placement,
        }
      },
      methods: {
        show() {
          this.$refs.popover.show()
          this.visible = true
        },
        hide() {
          this.$refs.popover.hide()
          this.visible = false
        },
      },
      render(h) {
        const props = {
          target,
          withArrow: !this.noArrow,
          theme: this.theme,
          placement: this.placement,
        }
        const on = {
          'update:visible': (newVisible) => {
            if (this.visible != null) {
              return
            }
            this.visible = newVisible
          },
        }
        const scopedSlots = {
          default(popoverProps) {
            const { text, $scopedSlots } = tooltipVM
            if (text != null) {
              return h(TooltipContent, {}, [text])
            }
            return $scopedSlots.content(popoverProps)
          },
        }
        return h(Popover, { ref: 'popover', on, parent: tooltipVM, props, scopedSlots })
      },
    }).$mount()
    this.$forceUpdate()
  },
  methods: {
    setupListeners() {
      const { visible } = this
      if (visible != null) {
        // return
      }
      this.$_mouseEnterListener = createEventListener('mouseenter', this.$el, () => {
        this.handleMouseEnter()
      })
      this.$_mouseLeaveListener = createEventListener('mouseleave', this.$el, () => {
        this.handleMouseLeave()
      })
      this.$_blurListener = createEventListener('blur', this.$el, () => this.handleBlur())
      this.$_focusListener = createEventListener('focus', this.$el, () => this.handleFocus())
    },
    turnListenersOff() {
      this.$_mouseEnterListener != null &&
        this.$_mouseEnterListener.isOn() &&
        this.$_mouseEnterListener.off()
      this.$_mouseLeaveListener != null &&
        this.$_mouseLeaveListener.isOn() &&
        this.$_mouseLeaveListener.off()
      this.$_blurListener != null && this.$_blurListener.isOn() && this.$_blurListener.off()
      this.$_focusListener != null && this.$_focusListener.isOn() && this.$_focusListener.off()
    },
    turnListenersOn() {
      const { visible } = this
      if (visible != null) {
        // return
      }
      this.$_mouseEnterListener.isOn() === false && this.$_mouseEnterListener.on()
      this.$_mouseLeaveListener.isOn() === false && this.$_mouseLeaveListener.on()
      this.$_blurListener.isOn() === false && this.$_blurListener.on()
      this.$_focusListener.isOn() === false && this.$_focusListener.on()
    },
    handleMouseEnter() {
      this.$_popover.show()
      this.$_escListener.isOn() === false && this.$_escListener.on()
    },
    handleMouseLeave() {
      this.$_popover.hide()
      this.$_escListener.isOn() && this.$_escListener.off()
    },
    handleBlur() {
      this.$_popover.hide()
      this.$_escListener.isOn() && this.$_escListener.off()
    },
    handleFocus() {
      this.$_popover.show()
      this.$_escListener.isOn() === false && this.$_escListener.on()
    },
    handleESC() {
      this.$_popover.hide()
      this.$_escListener.isOn() && this.$_escListener.off()
    },
  },
  render() {
    return this.$slots.default
  },
}
</script>
