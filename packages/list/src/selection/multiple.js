// @ts-check
/** @typedef {import('./selection').MutlipleSelectionMode} Mode */

export const create = /** @type {Mode} */ () => ({ selection, affected }) => {
  const newSelection = [...selection]
  const index = selection.indexOf(affected)
  if (index > -1) {
    newSelection.splice(index, 1)
  } else {
    newSelection.push(affected)
  }
  return newSelection
}

const defaultMultipleSelectionMode = create({})
defaultMultipleSelectionMode['selectionModeName'] = 'multiple selection mode'
export default defaultMultipleSelectionMode
