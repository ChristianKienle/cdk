<template>
  <div>
    <Settings
      @changed="popoverProps = $event"
      @update:useNativeButton="useNativeButton = $event"
      @update:triggerWidth="triggerWidth = $event"
    />

    <div class="outer" ref="scrollcontainer">
      <div class="inner" ref="contentview">
        <Trigger ref="button" :style="triggerStyle" :native="useNativeButton" @click="toggle"
          >Show Popover</Trigger
        >
        <CPopover v-bind="popoverProps" ref="popover" trigger="$refs.button">
          <template #default>
            <div class="title">Sample Popover Title</div>
            <div class="body">
              <p class="text">Not like the brazen giant of Greek fame,</p>
              <p class="text">With conquering limbs astride from land to land.</p>
            </div>
          </template>
        </CPopover>
      </div>
    </div>
  </div>
</template>

<script>
import Settings from './settings/index.vue'
import Trigger from './trigger.vue'
import '@vue-cdk/popover/themes/index.css'

export default {
  components: { Trigger, Settings },
  data: () => ({
    useNativeButton: false,
    triggerWidth: 250,
    popoverProps: {
      offset: 0,
      overflowContainer: 'scrollParent',
      placement: 'bottom',
      flips: true,
      withArrow: true,
      theme: 'clean'
    }
  }),
  computed: {
    triggerStyle() {
      return {
        width: `${this.triggerWidth}px`
      }
    }
  },
  methods: {
    show() {
      this.$refs.popover.show()
    },
    hide() {
      this.$refs.popover.hide()
    },
    toggle() {
      this.$refs.popover.toggle()
    },
    scrollTriggerIntoView() {
      const scrollView = this.$refs.scrollcontainer
      const contentView = this.$refs.contentview
      const estimatedTrigerHeight = 50
      const y = 0.5 * (contentView.clientHeight - scrollView.clientHeight) + estimatedTrigerHeight
      const x = 0.5 * (contentView.clientWidth - scrollView.clientWidth)
      scrollView.scrollTop = y
      scrollView.scrollLeft = x
    }
  },
  mounted() {
    this.$forceUpdate()
    requestAnimationFrame(this.scrollTriggerIntoView)
  }
}
</script>

<style scoped>
.title {
  font-weight: bold;
  padding-bottom: 5px;
  border-bottom: 1px solid #dadada;
  margin-bottom: 20px;
  font-size: 1.3rem;
}

.text {
  margin: 0;
}

.body {
  line-height: 2rem;
  font-size: 1rem;
}

.inner {
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  position: relative;
  height: 300%;
  width: 300%;
  align-items: center;
}

.outer {
  height: 400px;
  background-color: #fdfdfd;
  overflow: auto;
  outline: 1px solid #eeeeee;
}
</style>
