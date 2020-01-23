<template>
  <div>
    <ul>
      <li><button data-cy="activateTabA" @click="component = 'TabA'">tab A</button></li>
      <li><button data-cy="activateTabB" @click="component = 'TabB'">tab B</button></li>
    </ul>
    <div>
      <component :is="component" />
    </div>
  </div>
</template>

<script>
import TabA from './cleanup/tab-a.vue'
import TabB from './cleanup/tab-b.vue'

export default {
  components: {
    TabA,
    TabB
  },
  data() {
    return {
      component: null
    }
  },
  methods: {
    tabAClicked() {},
    tabBClicked() {}
  }
}
</script>
