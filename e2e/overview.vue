<template>
  <div>
    <ul>
      <li v-for="page in pages" :key="page.name">
        <RouterLink :to="page.path">{{ page.name }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pages: {
      type: Array,
      default: () => []
    }
  }
}
</script>
