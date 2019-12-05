// @ts-check
const stringifyAttributes = require('stringify-attributes')

module.exports = class VNode {
/**
 * @param {string | null} tag
 * @param {import('./v-node-types').Data} data
 * @param {VNode[]} children
 * @param {string | null} text
 */
  constructor(tag, data, children, text) {
    this.tag = tag
    this.data = data
    this.children = children
    this.text = text
  }

  render() {
    const { tag, data, children, text } = this
    if(tag == null) {
      return text
    }
    const { attrs } = data
    let attrsString = ''
    if(attrs != null) {
      attrsString = stringifyAttributes(attrs)
    }
    const childrenString = children.map(child => child.render())
    return `<${tag}${attrsString}>${childrenString}</${tag}>`
  }
}
