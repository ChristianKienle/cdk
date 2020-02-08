/* eslint-env node */
// @ts-check
const { parser } = require('@vuese/parser')
const { $getDescription } = require('./parser-result-utils')

/**
 * Two things happen here:
 *    1. We ensure that there is a kebab-cased name-prop in the result we export.
 *    2. We ensure that there are no duplicate slots.
 * @param {string} code
 * @returns {import("./types").ImprovedResult}
 */
module.exports = code => {
  try {
    const result = parser(code)
    const { name } = result
    const slots = []
    for (const slotToAdd of result.slots || []) {
      const index = slots.findIndex(slot => slot.name === slotToAdd.name)
      if (index < 0) {
        slots.push(slotToAdd)
      } else {
        const existingSlot = slots[index]
        if (existingSlot.target === 'template') {
          continue
        }
        slots.splice(index, 1, slotToAdd)
      }
    }
    const $description = $getDescription(result)
    return {
      ...result,
      slots,
      name,
      $description
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to parse code: %s', code)
    return {
      $description: ''
    }
  }
}
