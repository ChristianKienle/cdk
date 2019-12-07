<style lang="stylus">
.demo
  &__preview
    border 1px solid #eee
    padding: 10px;
.custom-block
  .custom-block-title
    font-weight 600
  &.details
    display block
    position relative
    border-radius 0px
    margin 0
    padding 0em
    background-color #fff
    > div > div > pre
      padding 0
      margin 1rem
      margin-top 10px
      max-height 400px
      overflow auto
    h4
      margin-top 0
    figure, p
      &:last-child
        margin-bottom 0
        padding-bottom 0
    summary
      background-color #eee
      outline none
      cursor pointer
      border-radius 5px
      margin-top: 10px;
      padding 0.5rem
</style>

<script>
const titlecase = input => input[0].toLocaleUpperCase() + input.slice(1)

const toPascalCase = value => {
  if (value === null || value === void 0) return ''
  if (typeof value.toString !== 'function') return ''

  let input = value.toString().trim()
  if (input === '') return ''
  if (input.length === 1) return input.toLocaleUpperCase()

  let match = input.match(/[a-zA-Z0-9]+/g)
  if (match) {
    return match.map(m => titlecase(m)).join('')
  }

  return input
}

export default {
  props: {
    for: {
      type: String
    }
  },
  methods: {
    keyForExampleAtPath() {
      return this.$site.pages.find(({ frontmatter = {} }) => {
        const { examplePath = '' } = frontmatter
        return examplePath.replace('.vue', '') === this.for.replace('.vue', '')
      }).key
    }
  },
  render(h) {
    const srcComponent = h('Content', {
      props: {
        pageKey: this.keyForExampleAtPath()
      }
    })
    const summary = h('summary', {}, 'Show Code')
    const details = h(
      'details',
      {
        class: 'custom-block details'
      },
      [summary, srcComponent]
    )
    const exampleComponentName = `Example-${this.for
      .replace('.vue', '')
      .split('/')
      .map(toPascalCase)
      .join('-')}`
    const preview = h('div', { class: 'demo__preview' }, [h('div', {}, [h(exampleComponentName)])])
    return h(
      'div',
      {
        class: 'demo'
      },
      [preview, details]
    )
  }
}
</script>
