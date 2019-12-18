// @ts-check
/**
 * @typedef {import('./types').ComponentNameFn} ComponentNameFn
 */

/** @type {ComponentNameFn} */
export const defaultComponentName = context => {
  return `${context.name}`
}
