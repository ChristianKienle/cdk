// @ts-check

/** @typedef {import('./types').ScrollState} ScrollState */

/**
 * @param {ScrollState} state
 * @param {ScrollState} newState
 * @returns {boolean}
 */
export const scrollStatesEqual = (state, newState) =>
  state.nearTop === newState.nearTop && state.nearBottom === newState.nearBottom

/** @param {ScrollState} state */
export const createScrollState = state => state
