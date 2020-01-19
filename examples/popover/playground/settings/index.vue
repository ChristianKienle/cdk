<template>
  <div class="settings">
    <SettingRow label="Placement">
      <select v-model="placement">
        <option v-for="aPlacement in placements" :key="aPlacement" :value="aPlacement">{{
          aPlacement
        }}</option>
      </select>
    </SettingRow>

    <SettingRow label="Theme">
      <select v-model="theme">
        <option v-for="aTheme in themes" :key="aTheme" :value="aTheme">{{ aTheme }}</option>
      </select>
    </SettingRow>

    <SettingRow label="Offset">
      <div style="display: flex;">
        <input v-model.number="offset" class="input" type="range" min="0" max="100" value="0" />
        <label style="">{{ offset }}px</label>
      </div>
    </SettingRow>

    <SettingRow label="Trigger Width">
      <div style="display: flex;">
        <input
          v-model.number="triggerWidth"
          class="input"
          type="range"
          min="200"
          max="400"
          value="250"
          @input="$emit('update:triggerWidth', $event.target.value)"
        />
        <label>{{ triggerWidth }}px</label>
      </div>
    </SettingRow>

    <SettingRow label="Options">
      <label> <input v-model="flips" class="input" type="checkbox" />Flip </label>
      <br />
      <label> <input v-model="withArrow" class="input" type="checkbox" />Arrow </label>
      <br />
      <label>
        <input
          v-model="useNativeButton"
          class="input"
          type="checkbox"
          @change="$emit('update:useNativeButton', $event.target.checked)"
        />Native Button
      </label>
    </SettingRow>
  </div>
</template>

<script>
import SettingRow from './k-row.vue'

export default {
  components: { SettingRow },
  data() {
    return {
      triggerWidth: 250,
      useNativeButton: false,
      offset: 0,
      theme: 'clean',
      placement: 'bottom',
      flips: true,
      withArrow: true,
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
      themes: ['none', 'clean', 'big-arrow', 'dark']
    }
  },
  computed: {
    kPopProps() {
      return {
        offset: this.offset,
        flips: this.flips,
        placement: this.placement,
        withArrow: this.withArrow,
        theme: this.theme === 'none' ? null : this.theme
      }
    }
  },
  watch: {
    kPopProps(newProps) {
      this.$emit('changed', newProps)
    }
  }
}
</script>

<style scoped>
.input {
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
