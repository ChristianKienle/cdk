/**
 * @param {string} text
 * @param {import('./range').ACRange[]} ranges
 * @returns {import('./range').ACTextBlock[]}
 */
export default (text, ranges) => {
  if (text.length === 0) {
    return []
  }
  if (ranges.length === 0) {
    return [{ text, highlighted: false }]
  }

  let pos = 0
  /** @type {import('./range').ACTextBlock[]} */
  const blocks = []
  for (const range of ranges) {
    // Everything between pos (inclusive) and range.start is not highlighted
    // but only if pos < range.start
    if (pos < range.start) {
      // Add everything before the range
      blocks.push({
        text: text.substring(pos, range.start),
        highlighted: false,
      })
      pos = range.start
    }
    // Add the current range
    blocks.push({
      text: text.substring(pos, pos + range.length),
      highlighted: true,
    })

    pos += range.length
  }

  if (pos + 1 < text.length) {
    blocks.push({
      text: text.substring(pos),
      highlighted: false,
    })
  }
  return blocks
}
