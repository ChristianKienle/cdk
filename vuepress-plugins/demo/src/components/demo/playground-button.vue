<template>
  <form
    action="https://codesandbox.io/api/v1/sandboxes/define?json"
    method="POST"
    target="_blank"
    @submit.capture.prevent="submit"
  >
    <input type="hidden" name="parameters" :value="parameters" />
    <DemoButton type="submit" icon="play">Run</DemoButton>
  </form>
</template>

<script>
import Options from '@dynamic/vue-cdk-demo-playground'
import { getParameters } from 'codesandbox/lib/api/define'
import DemoButton from './button.vue'

export default {
  components: { DemoButton },
  props: {
    getCode: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      code: '',
    }
  },
  computed: {
    parameters() {
      return getParameters(this.rawParameters)
    },
    rawParameters() {
      return {
        files: {
          'src/setup.js': {
            content: this.setupJs,
          },
          'package.json': {
            content: Options.package,
          },
          'src/main.js': {
            content: this.mainJs,
          },
          'src/example.vue': {
            content: this.code,
          },
          'public/index.html': {
            content: this.indexHtml,
          }
        }
      }
    },
    setupJs() {
      return Options.setupModule.code
    },
    mainJs() {
      return `import Vue from 'vue'
import setupVue from './setup'
import Example from './example.vue'
setupVue({ Vue })
Vue.config.productionTip = false
new Vue({
  render: h => h(Example)
}).$mount('#app')
`
    },
    indexHtml() {
      return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>Example</title>
  </head>
  <body>
    <noscript>
      <strong>We're sorry but this example doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
  </body>
</html>`
    }
  },
  methods: {
    async submit() {
      this.code = this.getCode()
      this.$forceUpdate()
      await this.$nextTick()
      this.$el.submit()
    }
  }
}
</script>
