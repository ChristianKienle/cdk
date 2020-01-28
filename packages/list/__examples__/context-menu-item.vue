<template>
  <div class="container">
    <div class="vcdk-text identifier" :style="identifierStyle">
      {{ item.index }}
    </div>
    <div class="vcdk-text main" style="flex: 2 0 0;"> Item with ID {{ item.id }} </div>
    <div>
      <CPopover
        placement="bottom-end"
        theme="clean"
        :visible="idState.menuOpen"
        :target="() => $refs.target"
      >
        <CPopoverContent class="vcdk-text menu">
          <div class="menu-item">Delete Item</div>
          <div class="menu-item">Duplicate Item</div>
          <div class="menu-item">Share Item</div>
          <div class="menu-item">Move Item</div>
        </CPopoverContent>
      </CPopover>
      <button ref="target" class="context-button" @click="idState.menuOpen = !idState.menuOpen"
        >more…</button
      >
    </div>
  </div>
</template>

<script>
import { IdState } from 'vue-virtual-scroller'
import '@vue-cdk/popover/themes/clean.css'

const colors = [
  '#BF5BAB',
  '#D6648C',
  '#E56973',
  '#ED9982',
  '#F9D68E',
  '#5B79BF',
  '#7564D6',
  '#9D69E5',
  '#CE82ED',
  '#F98EE7'
]
export default {
  mixins: [
    IdState({
      // You can customize this
      idProp: vm => vm.item.id
    })
  ],
  idState() {
    return {
      menuOpen: false
    }
  },
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    color() {
      return colors[this.item.index % colors.length]
    },
    targetId() {
      return `target-item-${this.item.id}`
    },
    identifierStyle() {
      return {
        width: '30px',
        height: '30px',
        'background-color': this.color
      }
    }
  },
  methods: {}
}
</script>

<style scoped>
@import url('./utils.css');
.menu {
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
  padding-top: 5px !important;
  padding-bottom: 5px !important;
  padding-left: 0px !important;
  padding-right: 0px !important;
}
.menu-item {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
}
.menu-item:hover {
  background-color: rgb(0, 183, 255);
  color: white;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;
}
.main {
  padding-left: 10px;
}
.identifier {
  border-radius: 25px;
  text-align: center;
  vertical-align: middle;
  line-height: 30px;
  color: white;
  font-size: 20px;
}
.container {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Color Emoji';
  display: flex;
  align-items: center;
}
.context-button,
.context-button:hover,
context-button:focus,
context-button:active {
  cursor: pointer;
  font-size: 0.75rem;
  border: 1px solid #dddddd;
  border-radius: 15px;
  padding: 8px 12px;
  outline: none;
  background-color: transparent;
  /* background-color: rgb(42, 195, 255); */
  margin-right: 10px;
  color: rgb(150, 150, 150);
  color: rgb(0, 152, 212);
}
.context-button:hover {
  background-color: #efefef;
}
.context-button:hover {
  color: black;
}
</style>
