<template>
  <div>
    <button data-cy-reset @click="reset">reset</button>
    <CList
      data-cy="list"
      :min-item-size="itemHeight"
      :items="items"
      :total-item-count="1000"
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

/** @param {string | number | null} value */
const _toInt = value => {
  if (Number.isSafeInteger(value)) {
    return value
  }
  if (typeof value === 'number') {
    return value //Math.round(value)
  }
  // Here we should have a string.
  // We still call toString() to also support objects and stuff
  return Number.parseInt(value.toString(), 10)
}

/**
 * @param {string | number | null} value
 * @param {(string | number | null)=} fallbackValue
 */
const toInt = (value, fallbackValue) => {
  if (value == null && fallbackValue == null) {
    throw new Error(
      `toInt(…) requires either a value as the first arg or a valid fallback value as the second arg.`
    )
  }
  return _toInt(value == null ? fallbackValue : value)
}

export const route = {
  props({ query }) {
    const itemHeight = toInt(query.itemHeight, 18)
    const height = toInt(query.height, 10 * itemHeight)
    const { numberOfInitialItems, batchSize } = query
    return {
      itemHeight,
      height,
      numberOfInitialItems: toInt(numberOfInitialItems, 0),
      batchSize: toInt(batchSize, 10),
      selectionMode: query.selectionMode || 'single'
    }
  }
}

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
