<template>
  <component :is="tag" :style="styles" @scroll="onScroll">
    <slot />
  </component>
</template>

<script>
const Wrapper = {
  functional: true,
  render(h, ctx) {
    return h('div', ctx.data, ctx.children)
  },
}

// A component to conveniently create scrolling HTML elements.
export default {
  name: 'ScrollContainer',
  components: { Wrapper },
  model: {
    prop: 'scrollPosition',
    event: 'input',
  },
  props: {
    // A tag-name or component that will be rendered instead of the standard `div`-element.
    tag: {
      // By default, `CScrollView` will render a scrollable `div`-element.
      default: 'div',
      type: [Function, Object, String],
    },
    // The scroll position of the scroll view. `scrollPosition` is also the `v-model`-prop used for this component.
    scrollPosition: {
      type: Number,
      // By default (`null`) the scroll position will not be changed in any way.
      default: null,
    },
  },
  data() {
    return {
      scrollPosition_: this.scrollPosition,
    }
  },
  computed: {
    styles() {
      return {
        overflow: 'auto',
      }
    },
  },
  watch: {
    scrollPosition(scrollPosition) {
      this.scrollPosition_ = scrollPosition
      this.scrollTo(scrollPosition)
    },
  },
  methods: {
    scrollTo(scrollPosition) {
      if (scrollPosition != null) {
        this.$el.scrollTop = scrollPosition
      }
    },
    onScroll() {
      this.scrollPosition_ = this.$el.scrollTop
      this.$emit('input', this.scrollPosition_)
    },
  },
}
</script>
