<script>
export default {
  functional: true,
  props: {
    native: {
      type: Boolean,
      default: false
    }
  },
  render(h, context) {
    const data = {
      ...context.data,
      class: context.props.native ? null : 'kpop-button'
    }
    return h('button', data, context.children)
  }
}
</script>

<style scoped>
.kpop-button {
  box-sizing: border-box;
  display: inline-block;
  border: none;
  padding: 0.7rem 1rem;
  border-radius: 4px;
  margin: 0;
  text-decoration: none;
  background: #6a029b;
  color: #f6e3ff;
  font-family: sans-serif;
  font-size: 0.75rem;
  line-height: 1;
  cursor: pointer;
  text-align: center;
  /*
  There is an issue with Popper.js + using a scale transform on the trigger:
  https://github.com/popperjs/popper.js/issues/376
  The reason seems to be that Popper.js also wants to set the transform and
  by using 'transform 500ms ease;' in combination with:
    .kpop-button:active {
      transform: scale(0.95);
    }
  the popover disappears once shown
  */
  transition: background 500ms ease-in-out;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.kpop-button:hover,
.kpop-button:focus {
  color: #e4b3fa;
  background: #36014e;
}

.kpop-button:focus {
  outline: none;
}

.kpop-button:active {
  transform: scale(0.95);
}
</style>
