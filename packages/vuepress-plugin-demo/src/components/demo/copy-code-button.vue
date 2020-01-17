<template>
  <button class="copy-code-button" v-on="$listeners">Copy</button>
</template>

<style lang="scss">
.copy-code-button {
  cursor: pointer;
  background-color: transparent;
  border-radius: 8px;
  border: 0;
  color: darken(#eeeeee, 50%);
  font-size: 0.7rem;
  padding: 4px 4px;
  margin: 0;
  transform: scale(1);
  transition: all 0.25s ease;
  outline: none;
  &:hover {
    color: white;
    background-color: #5c5c5c;
  }
  &:active {
    color: white;
    background-color: #5c5c5c;
  }
}
</style>
