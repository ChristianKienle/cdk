import normalize from './../normalize-options'
import createDefaultOptions from './../create-default-options'

describe('normalize options', () => {
  let defaultOptions = createDefaultOptions()

  beforeEach(() => {
    defaultOptions = createDefaultOptions()
  })

  it('normalizes undefined', () => {
    expect(normalize()).toMatchObject({
      items: [],
      renderer: defaultOptions.renderer,
      indexPath: null
    })
  })

  it('normalizes null', () => {
    expect(normalize(null)).toMatchObject({
      items: [],
      renderer: defaultOptions.renderer,
      indexPath: null
    })
  })

  it('normalizes {}', () => {
    expect(normalize({})).toMatchObject({
      items: [],
      renderer: defaultOptions.renderer,
      indexPath: null
    })
  })

  it('respects items', () => {
    const items = []
    expect(normalize({ items })).toMatchObject({
      items: [],
      renderer: defaultOptions.renderer,
      indexPath: null
    })
  })

  it('respects indexPath', () => {
    expect(normalize({ indexPath: '/api/index.html' })).toMatchObject({
      items: [],
      renderer: defaultOptions.renderer,
      indexPath: '/api/index.html'
    })
  })
})
