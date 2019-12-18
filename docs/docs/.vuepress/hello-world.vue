<template>
  <div>
    <Popover>
      <template #trigger="{toggle}"><button @click="toggle">hi</button></template>
      <template #default><div>hi mom</div></template>
    </Popover>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
