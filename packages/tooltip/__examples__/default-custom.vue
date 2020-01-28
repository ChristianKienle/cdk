<template>
  <CTooltip placement="bottom">
    <button>Hover</button>
    <template #content>
      <CTooltipContent class="content">
        <p>I am a Tooltip with <strong>custom</strong> content.</p>
        <p>I can display <strong>multiple</strong> lines of text…</p>
        <p>…and anything else.</p>
      </CTooltipContent>
    </template>
  </CTooltip>
</template>

<style scoped>
.content {
  border: 1px solid red;
  background-color: white;
  z-index: 19;
  padding: 10px;
}
.content > p {
  margin: 0;
  font-size: 0.75rem;
}
</style>
