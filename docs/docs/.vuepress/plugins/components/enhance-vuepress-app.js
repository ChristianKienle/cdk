import { components } from '@dynamic/vue-cdk/docs/components'
const isComponentPage = ({ path }) => path != null && path.startsWith('/components/') && path !== '/components/'
export default ({ Vue }) => {
  Vue.mixin({
    computed: {
      $vcdkDocsComponents() {
        return components
      },
      $vcdkDocsComponentPages() {
        return this.$site.pages
          .filter(isComponentPage)
          .sort((pageA, pageB) => pageA.title.localeCompare(pageB.title))
      }
    }
  })
}
