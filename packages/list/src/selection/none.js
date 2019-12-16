// @ts-check
/** @typedef {import('./selection').NoneSelectionMode} Mode */

// The 'none'-mode simply always returns an empty array (aka no selection at all)
export const create = /** @type {Mode} */ () => () => []

const defaultNoneSelectionMode = create({})
export default defaultNoneSelectionMode
