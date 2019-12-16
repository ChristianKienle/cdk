// @ts-check
/** @typedef {import('./selection').NoneSelectionMode} Mode */

// The 'none'-mode simply always returns an empty array (aka no selection at all)
export const create = /** @type {Mode} */ () => () => []

const defaultNoneSelectionMode = create({})
defaultNoneSelectionMode['selectionModeName'] = 'none selection mode'
export default defaultNoneSelectionMode
