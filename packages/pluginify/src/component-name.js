// @ts-check
/**
 * @typedef {import('./types').ComponentNameFn} ComponentNameFn
 */

/** @type {ComponentNameFn} */
export const defaultComponentName = context => {
  return `C${context.name}`
}
