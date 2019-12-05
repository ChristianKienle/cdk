// @ts-check
const VNode = require('./v-node')

/**
 * @param {string | null} tag
 * @param {import('./v-node-types').Data} data
 * @param {VNode[]} children
 * @param {string | null} text
 */
const createElement = (tag, data, children, text) => new VNode(tag, data, children, text)

module.exports = createElement
