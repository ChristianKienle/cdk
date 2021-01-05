// @ts-check
/** @typedef {import('./selection').SingleSelectionMode} Mode */

/**
 * @param {string[]} selection
 * @returns {string[]}
 */
const repair = (selection) => {
  const [first] = selection
  return first == null ? [] : [first]
}

export const create = /** @type {Mode} */ (options = { allowsEmpty: true }) => ({
  selection,
  affected,
}) => {
  const { allowsEmpty } = options
  const isSelected = selection.indexOf(affected) >= 0
  if (isSelected) {
    return repair(allowsEmpty ? [] : [affected])
  }
  return repair(affected == null ? selection : [affected])
}

const defaultSingleSelectionMode = create({ allowsEmpty: true })
defaultSingleSelectionMode['selectionModeName'] = 'single selection mode'
export default defaultSingleSelectionMode
