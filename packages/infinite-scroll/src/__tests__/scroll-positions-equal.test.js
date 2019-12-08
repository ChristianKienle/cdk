import scrollPositionsEqual from './../scroll-positions-equal'

describe('scroll-positions-equal', () => {
  it('isEqual returns true for equal position', () => {
    expect(
      scrollPositionsEqual({ nearTop: null, nearBottom: null }, { nearTop: null, nearBottom: null })
    ).toBe(true)

    expect(
      scrollPositionsEqual(
        { nearTop: false, nearBottom: false },
        { nearTop: false, nearBottom: false }
      )
    ).toBe(true)

    expect(
      scrollPositionsEqual({ nearTop: true, nearBottom: true }, { nearTop: true, nearBottom: true })
    ).toBe(true)

    expect(
      scrollPositionsEqual(
        { nearTop: true, nearBottom: false },
        { nearTop: true, nearBottom: false }
      )
    ).toBe(true)
  })
})
