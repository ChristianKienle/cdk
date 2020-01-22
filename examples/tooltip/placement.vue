<template>
  <div>
    <div class="container">
      <CTooltip :theme="theme" placement="left" text="I am a Tooltip">
        <button>Left</button>
      </CTooltip>

      <CTooltip :theme="theme" placement="top" text="I am a Tooltip">
        <button>Top</button>
      </CTooltip>

      <CTooltip :theme="theme" placement="bottom" text="I am a Tooltip">
        <button>Bottom</button>
      </CTooltip>

      <CTooltip :theme="theme" text="I am a Tooltip">
        <button>Default</button>
      </CTooltip>

      <CTooltip :theme="theme" placement="right" text="I am a Tooltip">
        <button>Right</button>
      </CTooltip>
    </div>

    <label for="examples-tooltip-placement-theme-picker">
      Theme:
    </label>
    <select id="examples-tooltip-placement-theme-picker" v-model="theme">
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </div>
</template>

<script>
import '@vue-cdk/tooltip/themes/index.css'
export default {
  data() {
    return {
      theme: 'dark'
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
}
.container > button {
  cursor: pointer;
  margin-right: 2px;
  margin-left: 2px;
}
</style>
