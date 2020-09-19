import rangesInString from '../ranges-in-string'

describe('rangesInString', () => {
  it('works with empty strings', () => {
    expect(rangesInString('', '')).toHaveLength(0)
  })
  it('works with empty query', () => {
    expect(rangesInString('', 'hello')).toHaveLength(0)
  })

  it('works with empty string', () => {
    expect(rangesInString('hello', '')).toHaveLength(0)
  })

  it('finds something', () => {
    const sut = rangesInString('ll', 'hello')
    expect(sut).toHaveLength(1)
    expect(sut[0]).toEqual({
      start: 2,
      length: 2,
    })
  })

  it('correctly handles repeating strings', () => {
    const sut = rangesInString('a', 'aaa')
    expect(sut).toHaveLength(3)
    expect(sut[0]).toEqual({
      start: 0,
      length: 1,
    })
    expect(sut[1]).toEqual({
      start: 1,
      length: 1,
    })
    expect(sut[2]).toEqual({
      start: 2,
      length: 1,
    })
  })

  it('correctly handles repeating strings (aab)', () => {
    const sut = rangesInString('a', 'aab')
    expect(sut).toHaveLength(2)
    expect(sut[0]).toEqual({
      start: 0,
      length: 1,
    })
    expect(sut[1]).toEqual({
      start: 1,
      length: 1,
    })
  })

  it('finds multiple substrings', () => {
    const sut = rangesInString('ll', 'hello worlld')
    expect(sut).toHaveLength(2)
    expect(sut[0]).toEqual({
      start: 2,
      length: 2,
    })

    expect(sut[1]).toEqual({
      start: 9,
      length: 2,
    })
  })
})
