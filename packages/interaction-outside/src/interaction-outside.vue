<script>
// Thanks @LinusBorg
const isBrowser = () => typeof window !== 'undefined' && typeof document !== undefined
const getRootEl = () => document.documentElement

const EVENTS = ['click', 'touchstart']

// Our awesome click outside-component comes with a few nice enhancements.
// You use this component in order to detect clicks outside of a component/element.
// For example:
// ```markup
// <CInteractionOutside @do="handleClickOutside">
//   Hello World
// </CInteractionOutside>
// ```
// This detects all clicks outside of CInteractionOutside.
// By default CInteractionOutside is rendering it's default slot
export default {
  name: 'InteractionOutside',
  props: {
    ignored: { type: Function, default: () => [] },
    active: { type: Boolean, default: true },
  },
  watch: {
    active: {
      immediate: true,
      handler(active, wasActive) {
        setTimeout(() => {
          this.activeDidChange(active, wasActive)
        })
      },
    },
  },
  beforeDestroy() {
    if (!isBrowser()) {
      return
    }
    // We have to remove ourselves as a listener but only if we are indeed active (=listening).
    if (this.active) {
      this.removeListeners()
    }
  },
  methods: {
    click(event) {
      const { target } = event
      if (target == null) {
        return
      }
      const isClickOnSelf = this.$el.contains(target)
      if (isClickOnSelf) {
        return
      }

      const ignored = this.ignored()

      // `event` bubbles up the tree. `path` contains all elements that will receive the event if we do not stop the event. `path` starts with the deepest element and ends with ...body, html, document, window.
      const path = event.path || (event.composedPath ? event.composedPath() : undefined)
      if (path != null) {
        if (path.indexOf(target) < 0) {
          return
        }
      }

      // We now have to check the ignored elements
      for (const ignoredElement of ignored) {
        if (ignoredElement.contains(target)) {
          return
        }
        for (const pathComponent of path) {
          if (pathComponent === ignoredElement) {
            return
          }
        }
      }
      this.$emit('detected', event)
    },
    removeListeners() {
      const root = getRootEl()
      EVENTS.forEach((event) => {
        root.removeEventListener(event, this.click, false)
      })
    },
    addListeners() {
      const root = getRootEl()
      EVENTS.forEach((event) => {
        root.addEventListener(event, this.click, false)
      })
    },
    activeDidChange(isActive, wasActive) {
      if (!isBrowser()) {
        return
      }
      if (isActive && (wasActive === false || wasActive == null)) {
        this.addListeners()
      }
      if (!isActive && wasActive === true) {
        this.removeListeners()
      }
    },
  },
  render() {
    return this.$scopedSlots.default()
  },
}
</script>
