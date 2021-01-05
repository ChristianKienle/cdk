<template>
  <CLink disabled :to="{ path: '/internal-path' }"
    >Disabled internal router link to /internal-path</CLink
  >
</template>

<script>
import VueRouter from 'vue-router'

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/internal-path',
      component: {
        render(h) {
          return h('div', 'hrhr')
        },
      },
    },
  ],
})

export default {
  router,
}
</script>
