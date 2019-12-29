// @ts-check
const VNode = require('./../v-node')

describe('VNode', () => {
  it('handles data = {}, children = []', () => {
    expect(new VNode('p', {}, [], null).render()).toEqual('<p></p>')
  })

  it('handles data = { attrs: {} }, children = []', () => {
    expect(new VNode('p', { attrs: {} }, [], null).render()).toEqual('<p></p>')
  })

  it('renders simple attribute children = []', () => {
    expect(new VNode('p', { attrs: { id: 'abc' } }, [], null).render()).toEqual('<p id="abc"></p>')
  })

  it('renders simple child', () => {
    const text = new VNode(null, {}, [], 'abc')
    const p = new VNode('p', {}, [text], null)
    const div = new VNode('div', {}, [p], null)
    expect(div.render()).toEqual('<div><p>abc</p></div>')
  })

  it('renders text node', () => {
    expect(new VNode(null, {}, [], 'abc').render()).toEqual('abc')
  })
})
