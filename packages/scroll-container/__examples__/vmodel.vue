<template>
  <div>
    <label>Scroll Position: <input v-model.number="scrollPosition" /></label>
    <CScrollContainer v-model="scrollPosition" style="border: 1px solid black; height: 300px">
      <div v-for="row in 100" :key="String(row)" :style="styleFor(row)">Row #{{ row }}</div>
    </CScrollContainer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: 0,
    }
  },
  methods: {
    styleFor(row) {
      return {
        color: 'white',
        padding: '10px',
        backgroundColor: `hsla(${(255 / 100) * row}, 50%, 50%, 1)`,
      }
    },
  },
}
</script>
