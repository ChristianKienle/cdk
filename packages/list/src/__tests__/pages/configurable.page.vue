<template>
  <div>
    <button data-cy-reset @click="reset">reset</button>
    <CList
      data-cy="list"
      :min-item-size="itemHeight"
      :items="items"
      :load-more="loadMore"
      :selection-mode="selectionMode_"
      :style="listStyles"
      key-field="id"
    >
      <template #loading>
        <div data-cy="loading">Loading Indicator</div>
      </template>
      <template #default="{ selected, active, item, index }">
        <CListItem
          :item="item"
          :active="active"
          data-cy="item"
          :data-cy-id="item.id"
          :data-cy-index="index"
          :data-cy-selected="String(selected)"
          :style="itemStyles"
        >
          <div> {{ selected ? '[x]' : '[ ]' }} {{ item }} – {{ item.index }} </div>
        </CListItem>
      </template>
    </CList>
  </div>
</template>

<script>
import '@vue-cdk/list/style/index.css'
import { SelectionMode } from '@vue-cdk/list'

const createItem = index => ({
  index,
  id: `${index}`,
  title: `item ${index}`
})

const createItems = (startIndex, count) =>
  [...Array(count).keys()].map(index => createItem(index + startIndex))

export default {
  props: {
    height: {
      type: Number,
      default: 200
    },
    itemHeight: {
      type: Number,
      default: 20
    },
    numberOfInitialItems: {
      type: Number,
      default: 0
    },
    batchSize: {
      type: Number,
      default: 10
    },
    selectionMode: {
      type: String,
      default: 'single',
      validator(value) {
        return ['single', 'multiple'].includes(value)
      }
    }
  },
  data() {
    return {
      items: createItems(0, this.numberOfInitialItems)
    }
  },
  computed: {
    selectionMode_() {
      switch (this.selectionMode) {
        case 'single':
          return SelectionMode.Single
        case 'multiple':
          return SelectionMode.Multiple
      }
      throw new Error('invalid selection mode')
    },
    listStyles() {
      return {
        height: `${this.height}px`
      }
    },
    itemStyles() {
      return {
        height: `${this.itemHeight}px`
      }
    }
  },
  methods: {
    reset() {
      this.items = []
    },
    loadMore(done) {
      const that = this
      setTimeout(() => {
        const { items, batchSize } = that
        items.concat(createItems(items.length, batchSize))
        done()
      }, 1000)
    }
  }
}
</script>
