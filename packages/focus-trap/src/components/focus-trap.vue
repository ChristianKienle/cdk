<script>
import createTrap from './../create'
export default {
  name: 'FocusTrap',
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  render(h) {
    return this.$slots.default
  },
  created() {
    this.trap = createTrap(this)
  },
  watch: {
    active: {
      immediate: true,
      handler(active, oldActive) {
        if (oldActive === false && active === true) {
          this.trap.activate()
          console.log('activate')
        }
        if (active === false && oldActive === true) {
          this.trap.deactivate()
          console.log('deactivate')
        }
      }
    }
  }
}
</script>
