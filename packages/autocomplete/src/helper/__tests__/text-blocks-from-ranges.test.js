import textBlocksFromRanges from '../text-blocks-from-ranges'

describe('textBlocksFromRanges', () => {
  it('works with empty string + no ranges', () => {
    const sut = textBlocksFromRanges('', [])
    expect(sut).toHaveLength(0)
  })
  it('returns single block when no ranges are given', () => {
    const sut = textBlocksFromRanges('hello world', [])

    expect(sut).toHaveLength(1)
    expect(sut[0]).toEqual({ text: 'hello world', highlighted: false })
  })

  it('works for a full match', () => {
    const sut = textBlocksFromRanges('hello', [{ start: 0, length: 5 }])

    expect(sut).toHaveLength(1)
    expect(sut[0]).toEqual({ text: 'hello', highlighted: true })
  })

  it('works for two ranges', () => {
    const sut = textBlocksFromRanges('hello world', [
      { start: 0, length: 2 },
      { start: 6, length: 2 },
    ])

    expect(sut).toHaveLength(4)
    expect(sut[0]).toEqual({ text: 'he', highlighted: true })
    expect(sut[1]).toEqual({ text: 'llo ', highlighted: false })
    expect(sut[2]).toEqual({ text: 'wo', highlighted: true })
    expect(sut[3]).toEqual({ text: 'rld', highlighted: false })
  })
})
