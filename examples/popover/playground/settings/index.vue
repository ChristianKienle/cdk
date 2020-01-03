<template>
  <div class="settings">
    <SettingRow label="Placement">
      <select v-model="placement">
        <option v-for="aPlacement in placements" :value="aPlacement" :key="aPlacement">{{
          aPlacement
        }}</option>
      </select>
    </SettingRow>

    <SettingRow label="Boundary">
      <select v-model="boundary">
        <option
          v-for="availableBoundary in boundaries"
          :value="availableBoundary"
          :key="availableBoundary"
          >{{ availableBoundary }}</option
        >
      </select>
    </SettingRow>

    <SettingRow label="Theme">
      <select v-model="theme">
        <option v-for="aTheme in themes" :value="aTheme" :key="aTheme">{{ aTheme }}</option>
      </select>
    </SettingRow>
    <SettingRow label="Body Size Mode">
      <select v-model="bodySizeMode">
        <option
          v-for="aBodySizeMode in bodySizeModes"
          :value="aBodySizeMode"
          :key="aBodySizeMode"
          >{{ aBodySizeMode }}</option
        >
      </select>
    </SettingRow>
    <SettingRow label="Offset">
      <div style="display: flex;">
        <input type="range" v-model.number="offset" min="0" max="100" value="0" />
        <label style="">{{ offset }}px</label>
      </div>
    </SettingRow>
    <SettingRow label="Trigger Width">
      <div style="display: flex;">
        <input
          type="range"
          v-model.number="triggerWidth"
          @input="$emit('update:triggerWidth', $event.target.value)"
          min="200"
          max="400"
          value="250"
        />
        <label>{{ triggerWidth }}px</label>
      </div>
    </SettingRow>

    <SettingRow label="Options">
      <label> <input type="checkbox" v-model="flips" />Flip </label>
      <br />
      <label> <input type="checkbox" v-model="withArrow" />Arrow </label>
      <br />
      <label>
        <input
          type="checkbox"
          v-model="useNativeButton"
          @change="$emit('update:useNativeButton', $event.target.checked)"
        />Native Button
      </label>
    </SettingRow>
  </div>
</template>

<script>
import SettingRow from './k-row.vue'
import * as BodySizeMode from '@vue-cdk/popover/src/body-size-mode'

export default {
  components: { SettingRow },
  watch: {
    kPopProps(newProps) {
      this.$emit('changed', newProps)
    }
  },
  computed: {
    kPopProps() {
      return {
        bodySizeMode: this.bodySizeMode,
        boundary: this.boundary,
        offset: this.offset,
        flips: this.flips,
        placement: this.placement,
        withArrow: this.withArrow,
        theme: this.theme === 'none' ? null : this.theme
      }
    }
  },
  data() {
    return {
      bodySizeMode: BodySizeMode.defaultMode,
      bodySizeModes: [...BodySizeMode.all],
      triggerWidth: 250,
      useNativeButton: false,
      offset: 0,
      theme: 'clean',
      boundary: 'scrollParent',
      placement: 'bottom',
      flips: true,
      withArrow: true,
      boundaries: ['scrollParent', 'window', 'viewport'],
      placements: [
        'top-start',
        'top',
        'top-end',
        'left-start',
        'left',
        'left-end',
        'right-start',
        'right',
        'right-end',
        'bottom-start',
        'bottom',
        'bottom-end'
      ],
      themes: ['none', 'v2', 'clean', 'big-arrow', 'dark']
    }
  }
}
</script>

<style scoped>
input {
  margin: 0;
  margin-right: 5px;
}
.settings {
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: #fdfdfd;
  border: 1px solid #eeeeee;
  font-size: 11px;
}
</style>
