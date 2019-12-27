<style lang="stylus">
@require './summary.styl'
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
      max-height 400px
      overflow auto
    h4
      margin-top 0
    figure, p
      &:last-child
        margin-bottom 0
        padding-bottom 0
</style>

<template>
  <div class="demo">
    <div class="demo__preview">
      <div><component :is="previewComponentName"/></div>
    </div>
    <div class="sc-container">
      <details class="sc-container__details">
        <summary class="sc-container__summary">
          <div style="display:flex;">
            <ToggleControl class="sc-container__control" />
            <div>Show Code</div>
          </div>
        </summary>
        <div class="sc-container__body">
          <Content :pageKey="keyForExampleAtPath" />
        </div>
      </details>
    </div>
  </div>
</template>

<script>
import ToggleControl from './toggle-control.vue'

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
  name: 'Demo',
  components: { ToggleControl },
  props: {
    for: {
      type: String,
      required: true
    }
  },
  computed: {
    keyForExampleAtPath() {
      const page = this.$site.pages.find(({ frontmatter = {} }) => {
        const { examplePath = '' } = frontmatter
        return examplePath.replace('.vue', '') === this.for.replace('.vue', '')
      })
      if (page == null) {
        return
      }
      return page.key
    },
    previewComponentName() {
      return `Example-${this.for
        .replace('.vue', '')
        .split('/')
        .map(toPascalCase)
        .join('-')}`
    }
  }
}
</script>
