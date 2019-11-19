<template>
  <BreakpointObserver mediaQuery='(max-width: 600px)'>
    <template v-slot:default="{ match }">
      <button>BreakpointObserver: {{match}}</button>
    </template>
  </BreakpointObserver>
</template>