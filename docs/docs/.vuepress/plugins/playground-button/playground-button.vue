<template>
  <a :href="$withBase('/storybook/')" class="playground-button"><span class="playground-button__title">Playground</span></a>
</template>

<style>
.playground-button {
  background:
    linear-gradient(-90deg, rgb(13, 26, 102) 0%, #1A63BA 50%, #FF307D 100%);
}
</style>
<style lang="stylus">
.playground-button
  &__title
    text-shadow 0px 1px 2px black
  cursor pointer
  position fixed
  bottom 2rem
  right 2.5rem
  border-radius 3em
  color white
  z-index 1
  font-size 12px
  font-weight 900
  letter-spacing .08em
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
