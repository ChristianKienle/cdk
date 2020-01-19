import ComponentApiButton from './components/component-api-button.vue'

export default ({ Vue }) => {
  Vue.component('ComponentApiButton', ComponentApiButton)
  Vue.mixin({
    computed: {
      $vcdkApiPages() {
        return this.$site.pages.filter(page => {
          const { frontmatter = {} } = page
          return frontmatter.vcdkComponentApi != null
        })
      }
    },
    methods: {
      $vcdkComponentApiPath(name) {
        const apiPage = this.$vcdkComponentApiPage(name)
        return apiPage.path
      },
      $vcdkComponentApiPage(name) {
        return this.$vcdkApiPages.find(page => page.frontmatter.vcdkComponentApi.name === name)
      },
      $vcdkComponentApiPageLocation(name) {
        return {
          path: this.$vcdkComponentApiPath(name)
        }
      }
    }
  })
}
