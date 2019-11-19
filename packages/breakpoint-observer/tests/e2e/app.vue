<template>
  <BreakpointObserver mediaQuery="(max-width: 600px)">
    <template v-slot:default="{ match }">
      <div data-cy="match">{{ match }}</div>
    </template>
  </BreakpointObserver>
</template>

<script>
export default {};
</script>
