<template>
  <div class="container">
    <label> Active <input v-model="active" data-cy="activeCheckbox" type="checkbox" /> </label>
    <div data-cy="lastDetectedInteraction">{{ formattedLastDetectedInteraction }}</div>
    <div class="outside" :class="outsideClasses">
      <div data-cy="outside">Outside</div>
      <CInteractionOutside
        :ignored="ignored"
        :active="active"
        @detected="lastDetectedInteraction = 'outside'"
      >
        <div
          data-cy="inside"
          class="inside"
          :class="insideClasses"
          @click="lastDetectedInteraction = 'inside'"
        >
          try click outside
        </div>
      </CInteractionOutside>
    </div>
    <div ref="ignoredContainer" class="ignored" data-cy="ignoredContainer">
      <div data-cy="always-ignored">
        ignored
      </div>
      <div
        v-if="showIgnored"
        data-cy="inner-ignored"
        class="inner-ignored"
        @click="showIgnored = !showIgnored"
      >
        inner ignored
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showIgnored: true,
      lastDetectedInteraction: null,
      active: false
    }
  },
  computed: {
    formattedLastDetectedInteraction() {
      const { lastDetectedInteraction } = this
      return lastDetectedInteraction == null ? 'none' : lastDetectedInteraction
    },
    insideClasses() {
      return {
        'is-active': this.lastDetectedInteraction === 'inside'
      }
    },
    outsideClasses() {
      return {
        'is-active': this.lastDetectedInteraction === 'outside'
      }
    }
  },
  methods: {
    ignored() {
      return [this.$refs.ignoredContainer]
    }
  }
}
</script>

<style scoped>
.inside {
  text-align: center;
  border: 1px solid #cccccc;
  margin: 1rem;
  padding: 1rem;
  background-color: white;
}
.inner-ignored {
  text-align: center;
  border: 1px solid #cccccc;
  margin: 1rem;
  padding: 1rem;
  background-color: white;
}
.ignored {
  text-align: center;
  border: 1px solid #cccccc;
  margin: 1rem;
  padding: 1rem;
  background-color: white;
}
.inside.is-active {
  background-color: rgb(210, 253, 255);
}
.outside {
  text-align: center;
  background-color: white;
  border: 1px solid #cccccc;
  margin: 1rem;
  padding: 1rem;
}
.outside.is-active {
  background-color: rgb(210, 253, 255);
}
.container {
  height: 100vh;
}
</style>
