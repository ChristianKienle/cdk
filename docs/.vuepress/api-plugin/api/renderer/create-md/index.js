// @ts-check
/* eslint-env node */

const {
  Nothing,
  Line,
  Heading,
  Newline,
  StrongText,
  InlineCode,
  Lines,
  Raw,
  Elements,
  Hr,
  Div
} = require("./elements");

class CreateMarkdown {
  constructor(tokens = []) {
    /** @type {(() => string)[]} */
    this.tokens = tokens;
  }

  add(...tokens) {
    this.tokens.push(...tokens);
    return this;
  }

  hr() {
    return this.add(Hr())
  }

 /**
  * @param {import('./types').Data} data
  * @param {(() => string)[]} [children=[]]
  */
  div(data, children = []) {
    return this.add(Div(data, children))
  }

  /**
   * @param {number} level
   * @param {string} title
   */
  h(level, title) {
    return this.add(Heading({ level, text: title }));
  }

  nl(count = 1) {
    return this.add(Newline(count));
  }

  /** @param {string} text */
  strong(text) {
    return this.add(StrongText(text));
  }

  /**
   * @param {string[] | string | null} text
   * @param {{defaultValue: string}=} options
   */
  code(text, { defaultValue } = { defaultValue: null }) {
    return this.add(InlineCode(text, { defaultValue }));
  }

  /**
   * @param {string | CreateMarkdown | CreateMarkdown[]} raw
   * @param {{wrap: boolean}} options
   */
  raw(raw, { wrap } = { wrap: false }) {
    if(Array.isArray(raw)) {
      raw.forEach(md => this.raw(md, { wrap }));
      return this;
    }
    if (raw instanceof CreateMarkdown) {
      return this.add(Elements(raw.tokens, { wrap }))
    }
    return this.add(Raw(raw));
  }

  /**
   * @param {string[] | null} lines
   * @param {{wrap: boolean}} options
   */
  lines(lines, { wrap } = { wrap: false }) {
    return this.add(Lines(lines, { wrap }));
  }

  render() {
    return this.tokens.map(token => token()).join("");
  }
}

module.exports = CreateMarkdown;
