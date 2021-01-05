<script>
import createTrap from './../create'
/** @typedef {import('./../focus-trap/index').default FocusTrap */

// A component that creates a focus trap around the wrapped element/component. By default a focus trap is deactive. A deactivated focus trap is not doing anything – except rendering its default slot. You activate a focus trap by setting the `active`-prop to `true`. You may deactivate the focus tras at any time by setting the value of `active` to `false`.
export default {
  name: 'FocusTrap',
  props: {
    // Whether or not the focus trap is active. An active focus trap ensures that the focus never leaves the wrapped element/component.
    active: {
      type: Boolean,
      // By default a focus trap is not active.
      default: false,
    },
    // Specify how the focus trap should be deactivated. If set to `manual` you have to explicitely deactivate the focus trap (either by setting `active` to `false` or by calling `deactivate`).
    deactivationMode: {
      // Valid values are `on-esc` and `manual`.
      type: String,
      // 'on-esc' – by default the trap is deactivated when the user hits `ESC` (of if you trigger the deactivation manually). You can also set `deactivationMode` to `manual`. In that case you have to deactivate the trap manually by setting `active` to `false` or by calling deactivate.
      default: 'on-esc',
      // Valid values are `on-esc` and `manual`.
      validator: (value) => ['on-esc', 'manual'].indexOf(value) > -1,
    },
  },
  watch: {
    active: {
      immediate: true,
      handler(active, oldActive) {
        // Trigged when the value of active changes.
        // @arg the new value for active
        this.$emit('update:active', active)
        if (oldActive === false && active === true) {
          const trap = /** @type {FocusTrap} */ (this.trap)
          trap.activate({
            deactivation: this.deactivationMode,
          })
          // Trigged when the traps activates
          // @arg the new value for active – in this case the value if always `true`
          this.$emit('activate', true)
        }

        if (active === false && oldActive === true) {
          this.trap.deactivate()
          // Trigged when the traps deactivates
          // @arg the new value for active – in this case the value if always `false`
          this.$emit('deactivate', false)
        }
      },
    },
  },
  created() {
    this.trap = createTrap(this)
  },
  render() {
    return this.$slots.default
  },
}
</script>
