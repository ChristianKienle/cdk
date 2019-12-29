// @ts-check
/* eslint-env jest */

const {
  Raw,
  Div,
  Elements,
  StrongText,
  Nothing,
  Newline,
  Heading,
  InlineCode,
  Line,
  Lines,
  List,
  Link
} = require('./../index')

describe('Markdown Elements', () => {
  describe('Div(…)', () => {
    it('renders empty Div', () => {
      expect(Div({ attrs: {} }, [])()).toEqual('<div></div>')
    })
    it('renders child', () => {
      expect(Div({ attrs: {} }, [Raw('test')])()).toEqual('<div>test</div>')
    })
    it('renders children', () => {
      expect(Div({ attrs: {} }, [Raw('test'), Raw('test2')])()).toEqual('<div>testtest2</div>')
    })
    it('renders simple attribute', () => {
      expect(Div({ attrs: { class: 'test' } })()).toEqual('<div class="test"></div>')
    })
    it('renders attribute without value', () => {
      expect(Div({ attrs: { class: null } })()).toEqual('<div class></div>')
    })
    it('renders attributes', () => {
      expect(Div({ attrs: { class: null, test: 'chris' } })()).toEqual(
        '<div class test="chris"></div>'
      )
    })
  })

  describe('List', () => {
    it('works with empty items', () => {
      expect(List([])()).toEqual('')
    })

    it('works with single item', () => {
      const item = 'hello world'
      expect(List([item])()).toEqual(`- ${item}`)
    })

    it('works with single link-item', () => {
      const href = 'https://example.org'
      const item = Link(href)
      expect(List([item])()).toEqual(`- [${href}](${href})`)
    })

    it('works with multiple items', () => {
      const item1 = 'hello world a'
      const item2 = 'hello world b'
      const item3 = 'hello world c'
      expect(List([item1, item2, item3])()).toEqual(`- ${item1}\n- ${item2}\n- ${item3}`)
    })

    it('works with single item – ordered', () => {
      const item = 'hello world'
      expect(List([item], { ordered: true })()).toEqual(`1. ${item}`)
    })

    it('works with multiple items – ordered', () => {
      const item1 = 'hello world a'
      const item2 = 'hello world b'
      const item3 = 'hello world c'
      expect(List([item1, item2, item3], { ordered: true })()).toEqual(
        `1. ${item1}\n2. ${item2}\n3. ${item3}`
      )
    })
  })

  describe('Link', () => {
    it('works with just href', () => {
      const href = 'https://example.org'
      expect(Link(href)()).toEqual(`[${href}](${href})`)
    })

    it('works with href and title', () => {
      const href = 'https://example.org'
      const title = 'Example DOT org'
      expect(Link(href, { title })()).toEqual(`[${title}](${href})`)
    })
  })

  it('Nothing', () => {
    expect(Nothing()()).toEqual('')
  })

  it('Line', () => {
    expect(Line('')()).toEqual('')
    expect(Line('hello')()).toEqual('hello')
  })

  it('Heading', () => {
    expect(Heading({ level: 1, text: 'title' })()).toEqual('# title')
    expect(Heading({ level: 2, text: 'title' })()).toEqual('## title')
    expect(Heading({ level: 0, text: 'title' })()).toEqual(' title')
  })

  it('Newline', () => {
    expect(Newline()()).toEqual('\n')
    expect(Newline(0)()).toEqual('')
    expect(Newline(1)()).toEqual('\n')
    expect(Newline(2)()).toEqual('\n\n')
  })

  it('StrongText', () => {
    expect(StrongText('')()).toEqual('****')
    expect(StrongText('a')()).toEqual('**a**')
    expect(StrongText('a b')()).toEqual('**a b**')
    expect(StrongText('hello world')()).toEqual('**hello world**')
  })

  it('InlineCode', () => {
    expect(InlineCode('')()).toEqual('')
    expect(InlineCode('a')()).toEqual('`a`')
    expect(InlineCode('a b')()).toEqual('`a b`')

    expect(InlineCode([])()).toEqual('')
    expect(InlineCode(['a'])()).toEqual('`a`')
    expect(InlineCode(['a', 'b'])()).toEqual('`a` | `b`')
  })

  it('Lines', () => {
    expect(Lines([])()).toEqual('')
    expect(Lines(['a'])()).toEqual('a\n')
    expect(Lines(['a', 'b'])()).toEqual('a\nb\n')
  })

  it('Elements', () => {
    // s renders a string
    const s = string => () => string
    expect(s('a')()).toEqual('a')
    expect(Elements([])()).toEqual('')
    expect(Elements([s('a')])()).toEqual('a')
    expect(Elements([s('a'), s('b')])()).toEqual('ab')
  })
})
