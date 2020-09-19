// @ts-check

/**
 * @param {string} query
 * @param {string} value
 * @returns {import('./range').ACRange[]}
 */
export default (query, value) => {
  if (value.length === 0 || query.length === 0) {
    return []
  }
  let stop = false
  let lastPosition = 0
  const ranges = []
  while (stop === false) {
    lastPosition = value.toLocaleLowerCase().indexOf(query.toLocaleLowerCase(), lastPosition)
    stop = lastPosition < 0
    if (lastPosition > -1) {
      const range = {
        start: lastPosition,
        length: query.length,
      }
      ranges.push(range)
      lastPosition += query.length
    }
  }
  return ranges
}
