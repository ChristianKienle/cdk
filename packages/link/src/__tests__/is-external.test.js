import isExternal from './../is-external'

describe('isExternal', () => {
  it('works on external urls', () => {
    expect(isExternal('https://example.org')).toBeTruthy()
  })
  it('detects internal urls with leading slash', () => {
    expect(isExternal('/other/page')).toBeFalsy()
  })
  it('detects internal urls without leading slash', () => {
    expect(isExternal('other/page')).toBeFalsy()
  })
  it('considers # to be internal', () => {
    expect(isExternal('#')).toBeFalsy()
  })
  it('considers insecure external urls to be external', () => {
    expect(isExternal('http://example.org')).toBeTruthy()
  })
  it('considers mailto urls to be external', () => {
    expect(isExternal('mailto:someone@example.org')).toBeTruthy()
  })
  it('considers file urls to be external', () => {
    expect(isExternal('file:///usr/local/bin')).toBeTruthy()
  })
})
