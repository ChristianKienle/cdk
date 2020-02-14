<template>
  <button class="demo-button" v-on="$listeners"><slot /></button>
</template>

<style lang="scss">
.demo-button {
  cursor: pointer;
  background-color: transparent;
  border-radius: 4px;
  border: 0;
  color: darken(#eeeeee, 50%);
  font-size: 0.7rem;
  padding: 4px 4px;
  margin: 0 10px;
  margin-left: 4px;
  margin-right: 0px;
  margin-top: 0px;
  margin-bottom: 0px;

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
