<script>
import onServer from '@vue-cdk/utils/on-server'

export default {
  name: 'CBreakpointObserver',
  render() {
    return this.$scopedSlots.default({
      match: this.match
    })
  },
  props: {
    mediaQuery: {
      type: String,
      required: true
    }
  },
  created() {
    this.queryList = null;
  },
  data() {
    return {
      match: null,
      stopObservation: () => {}
    }
  },
  watch: {
    mediaQuery: {
      immediate: true,
      handler(mediaQuery) {
        if(onServer()) {
          return
        }
        this.stopObservation()
        this.queryList = window.matchMedia(mediaQuery)
        const handleMatchResult = (event) => {
          this.match = event.matches
        }
        this.stopObservation = () => {
          this.queryList.removeListener(handleMatchResult)
        }
        this.queryList.addListener(handleMatchResult);
      }
    }
  }
}
</script>