<template>
  <DemoButton v-on="$listeners">Copy</DemoButton>
</template>
<script>
import DemoButton from './button.vue'
export default {
  components: { DemoButton }
}
</script>
