<template>
  <a :href="$withBase('/storybook/')" class="playground-button">Playground</a>
</template>

<script>
export default {}
</script>

<style lang="stylus">
@import url('./styles/palette');
.playground-button
  cursor pointer
  position fixed
  bottom 2rem
  right 2.5rem
  background-color $accentColor
  border-radius 3em
  color white
  z-index 1
  font-size 12px
  font-weight 500
  padding 8px 11px
  transform scale(1)
  transition all .25s ease
  &:hover
    background-color: darken($accentColor, 30%)
    transform scale(1.2)
    box-shadow: 0 3px 12px 0 rgba(0,0,0,.3)
  &:active
    background-color: darken($accentColor, 30%)
    transform scale(1.1)
    box-shadow: 0 3px 6px 0 rgba(0,0,0,.4)
</style>
