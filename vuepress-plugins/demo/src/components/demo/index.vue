<style lang="stylus">
@import './../summary'
@import './../demo'
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
            <div style="display:flex;">
              <ToggleControl class="sc-container__control" />
              <div class="sc-container__title">Show Code</div>
            </div>
            <div style="margin-left: auto;">
              <CopyCodeButton @click="copyCode" />
            </div>
          </div>
        </summary>
        <div class="sc-container__body">
          <Content ref="code" :page-key="keyForExampleAtPath" />
        </div>
      </details>
    </div>
  </div>
</template>

<script>
import ToggleControl from './../toggle-control.vue'
import CopyCodeButton from './copy-code-button.vue'

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
  components: { CopyCodeButton, ToggleControl },
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
  },
  methods: {
    copyCode() {
      const codeEl = this.$refs.code.$el
      const code = codeEl.textContent
      this.$copyText(code, codeEl)
    }
  }
}
</script>
