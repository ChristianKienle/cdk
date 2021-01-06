<template>
  <a :href="$withBase('/storybook/')" class="playground-button">Playground</a>
</template>

<style>
.playground-button {
  border: 1px solid #FF307D;
  background-color: #FF307D;
  backdrop-filter: blur(2px);
  color: white;
}
</style>
<style lang="stylus">
.playground-button
  cursor pointer
  position fixed
  bottom 2rem
  right 2.5rem
  border-radius 3em
  color white
  z-index 1
  font-size 12px
  letter-spacing .08em
  padding 8px 11px
  transform scale(1)
  transition all .25s ease
  &:hover
    color: white;
    background-color: #FF307D
    transform scale(1.2)
  &:active
    color: white;
    background-color: #FF307D
    transform scale(1.1)
</style>
