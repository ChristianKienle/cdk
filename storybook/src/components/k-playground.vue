<template>
  <div>
    <k-settings
      @changed="kPopProps = $event"
      @update:useNativeButton="useNativeButton = $event"
      @update:triggerWidth="triggerWidth = $event"
    />

    <div class="outer" ref="scrollcontainer">
      <div class="inner" ref="contentview">
        <Popover v-bind="kPopProps">
          <template #trigger="{toggle}">
            <k-btn
              :style="triggerStyle"
              :native="useNativeButton"
              @click="toggle"
              >Show Popover</k-btn
            >
          </template>
          <div class="title">Sample Popover Title</div>
          <div class="body">
            <p>Not like the brazen giant of Greek fame,</p>
            <p>With conquering limbs astride from land to land.</p>
          </div>
        </Popover>
      </div>
    </div>
  </div>
</template>

<script>
import KSettings from "./playground/k-settings.vue";
import KBtn from "./k-btn.vue";
import '@vue-cdk/popover/themes/index.css'

export default {
  name: "playground",
  components: { KBtn, KSettings },
  data: () => ({
    useNativeButton: false,
    triggerWidth: 250,
    kPopProps: {
      offset: 0,
      overflowContainer: "scrollParent",
      placement: "bottom",
      flips: true,
      withArrow: true,
      theme: "clean"
    }
  }),
  computed: {
    triggerStyle() {
      return {
        width: `${this.triggerWidth}px`
      };
    }
  },
  methods: {
    scrollTriggerIntoView() {
      const scrollView = this.$refs.scrollcontainer;
      const contentView = this.$refs.contentview;
      const estimatedTrigerHeight = 50;
      const y =
        0.5 * (contentView.clientHeight - scrollView.clientHeight) +
        estimatedTrigerHeight;
      const x = 0.5 * (contentView.clientWidth - scrollView.clientWidth);
      scrollView.scrollTop = y;
      scrollView.scrollLeft = x;
    }
  },
  mounted() {
    this.$forceUpdate();
    requestAnimationFrame(this.scrollTriggerIntoView);
  }
};
</script>

<style scoped>
.title {
  font-weight: 500;
  margin-bottom: 20px;
  font-size: 1.3rem;
  filter: saturate(150%);
}

p {
  margin: 0;
}

.body {
  line-height: 29px;
  font-size: 12px;
  filter: saturate(90%);
  filter: brightness(70%);
}
</style>


<style scoped>
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
  border: 1px solid #eeeeee;
}
</style>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
