import Link from './link.vue'
// import pluginify from '@vue-cdk/pluginify'
// export default pluginify(Link)
export { Link }

const install = (vue) => {
vue.component('CLink', Link)
}

export default install
