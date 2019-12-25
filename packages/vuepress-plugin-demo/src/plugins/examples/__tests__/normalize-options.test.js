const normalize = require('./../normalize-options')

describe('normalize options', () => {
  it('normalizes undefined', () => {
    expect(normalize()).toHaveProperty('dir')
  })
})
