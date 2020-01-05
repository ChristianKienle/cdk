<template>
  <button class="copy-code-button" v-on="$listeners">Copy</button>
</template>

<style lang="stylus">
.copy-code-button
  cursor pointer
  background-color saturate(lighten($accentColor, 85%), 10%)
  border-radius 8px
  border 0
  color saturate(darken($accentColor, 90%), 90%)
  font-size 0.70rem
  padding 4px 4px
  margin 0
  transform scale(1)
  transition all .25s ease
  outline none
  &:hover
    color white
    background-color: darken($accentColor, 30%)
  &:active
    color white
    background-color: darken($accentColor, 30%)
</style>
