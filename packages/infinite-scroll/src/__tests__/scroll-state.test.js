import { createScrollState, scrollStatesEqual } from './../scroll-state'

describe('scroll-state', () => {
  it('isEqual returns true for equal states', () => {
    expect(
      scrollStatesEqual({ nearTop: null, nearBottom: null }, { nearTop: null, nearBottom: null })
    ).toBe(true)

    expect(
      scrollStatesEqual(
        { nearTop: false, nearBottom: false },
        { nearTop: false, nearBottom: false }
      )
    ).toBe(true)

    expect(
      scrollStatesEqual({ nearTop: true, nearBottom: true }, { nearTop: true, nearBottom: true })
    ).toBe(true)

    expect(
      scrollStatesEqual({ nearTop: true, nearBottom: false }, { nearTop: true, nearBottom: false })
    ).toBe(true)
  })
})
