<template>
  <router-link v-slot="{ href, route, navigate }" :to="location">
    <button class="component-api-button" :class="classes" @click="navigate">
      <ArrowRight class="icon-right" />
      <span class="component-api-button__title">more</span>
    </button>
  </router-link>
</template>

<script>
import ArrowRight from './arrow-right.vue'

export default {
  name: 'ComponentApiButton',
  components: { ArrowRight },
  props: {
    for: {
      type: String,
      required: true
    },
    right: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        'component-api-button--right': this.right
      }
    },
    location() {
      return this.$vcdkComponentApiPageLocation(this.for)
    }
  }
}
</script>

<style lang="stylus">
.vcdk-icon--fill
  fill: $accentColor

.icon-right
  display block
  margin-right 4px
  height 0.6rem

.component-api-button
  align-items center
  background-color lighten($accentColor, 95%)
  border 0
  border-radius 0.3rem
  cursor pointer
  display inline-flex
  font-size 0.6rem
  font-weight 500
  justify-content center
  outline none
  padding 4px
  text-decoration none
  vertical-align middle
  position relative
  bottom 2px
  &--right
    float right
  &:hover
    background-color lighten($accentColor, 85%)

.component-api-button__title
  display block
  color $accentColor
</style>
