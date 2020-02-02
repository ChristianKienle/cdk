<template>
  <div class="outside" :class="outsideClasses">
    <CInteractionOutside :ignored="ignored" @detected="outside = true">
      <div class="inside" :class="insideClasses" @click="outside = false">
        {{ innerText }}
      </div>
    </CInteractionOutside>
    <div v-show="outside === false" ref="ignored" class="ignored">
      Clicks here are ignored. Try it!
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      outside: null
    }
  },
  computed: {
    innerText() {
      const { outside } = this
      switch (outside) {
        case null: {
          return 'This is the inside. Click here.'
        }
        case false: {
          return 'Now click anywhere – just not here.'
        }
        case true: {
          return 'Click outside of this element detected.'
        }
        default: {
          throw Error('invalid state')
        }
      }
    },
    outsideText() {
      return this.outside === false ? 'You can click here or anywhere else.' : ''
    },
    insideClasses() {
      return {
        'is-active': this.outside === false
      }
    },
    outsideClasses() {
      return {
        'is-active': this.outside === true
      }
    }
  },
  methods: {
    ignored() {
      return [this.$refs.ignored]
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
.ignored {
  text-align: center;
  border: 1px solid #cccccc;
  margin: 1rem;
  padding: 1rem;
  color: rgb(173, 2, 2);
  font-weight: bold;
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
</style>
