<template>
  <div>
    <input v-model.number="id" data-cy="item-id-input" type="number" />
    <input v-model.number="height" data-cy="item-height" type="number" />
    <button data-cy="set-height-button" @click="setHeight">set height</button>
    <div style="height: 200px; border: 1px solid red">
      <CList :items="items" data-cy="list">
        <template #default="{ item, active, index }">
          <CListItem
            :item="item"
            :active="active"
            :data-index="index"
            :size-dependencies="[item.height]"
            data-cy="item"
          >
            <div class="sized-item" :style="{ height: `${item.height}px` }">
              {{ item }}
            </div>
          </CListItem>
        </template>
      </CList>
    </div>
  </div>
</template>

<script>
import '@vue-cdk/list/style/index.css'

const createItem = (id) => ({
  id,
  height: 20,
})

export default {
  data() {
    return {
      id: 0,
      height: 20,
      items: [...Array(40).keys()].map(createItem),
    }
  },
  methods: {
    setHeight() {
      const { id, height, items } = this
      const item = items.find((item) => id === item.id)
      if (item == null) {
        throw new Error('item not found')
      }
      item.height = height
    },
  },
}
</script>

<style scoped>
.sized-item {
  box-sizing: border-box;
  border-bottom: 1px solid gray;
}
</style>
