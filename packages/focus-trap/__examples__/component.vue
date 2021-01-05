<template>
  <div>
    <div>
      <input tabindex="0" style="width: 100%" value="focusable input outside" />
    </div>
    <button @click="active = true">Activate Trap</button>
    <CFocusTrap :active="active">
      <div
        :style="{
          width: '200px',
          height: '200px',
          padding: '20px',
          margin: '20px 0',
          border: '1px solid #ccc',
          backgroundColor: '#fefefe',
        }"
      >
        <p>I am a Modal</p>
        <input ref="intialInput" tabindex="0" />
        <input />
        <input />
        <button @click="active = false">Deactivate Trap</button>
      </div>
    </CFocusTrap>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    }
  },
}
</script>
