// @ts-check

/** @typedef {import('./types').ScrollPosition} ScrollPosition */

/**
 * @param {ScrollPosition} position
 * @param {ScrollPosition} newPosition
 * @returns {boolean}
 */
export default (position, newPosition) =>
  position.nearTop === newPosition.nearTop && position.nearBottom === newPosition.nearBottom
