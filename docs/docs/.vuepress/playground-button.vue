<template>
  <a :href="$withBase('/storybook/')" class="playground-button">Playground</a>
</template>

<script>

export default {}
</script>

<style>
.playground-button {
  cursor: pointer;
  position: fixed;
  bottom: 2rem;
  right: 2.5rem;
  background: rgb(255, 71, 133);
  border-radius: 3em;
  color: white;
  z-index: 1;
  font-size: 14px;
  font-weight: 800;
  padding: 13px 20px;
}
</style>
