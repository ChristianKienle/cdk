// @ts-check
/* eslint-env node */

const Nothing = () => () => "";

/** @param {string} text */
const Line = text => () => text;

/** @param {string} text */
const Raw = text => () => text;

/** @param {{level: number, text: string}} options */
const Heading = ({ level, text }) => () => `${'#'.repeat(level)} ${text}`;

/** @param {number} count */
const Newline = (count = 1) => () => '\n'.repeat(count);

/** @param {string} text */
const StrongText = text => () => `**${text}**`;

 /**
  * @param {import('./../types').Data} data
  * @param {(() => string)[]} children
  */
const Div = (data, children = []) => () => {
  const attrs = Object.entries(data.attrs || {})
  const hasAttrs = attrs.length > 0
  const attrsPrefix = hasAttrs ? ' ' : ''
  const asString = attrs.map(([name, value]) => {
    if(value == null) {
      return name
    }
    if(value.length === 0) {
      return name
    }
    return `${name}="${value}"`
  }).join(' ')
  return `<div${attrsPrefix}${asString}>${Elements(children)()}</div>`
}

/** @param {string} text */
const _InlineCode = text => () => text.length > 0 ? `\`${text}\`` : "";

/**
 * @param {string[] | string | null} text
 * @param {{defaultValue: string}=} options
 */
const InlineCode = (text, { defaultValue } = { defaultValue: null }) => {
  if (text == null) {
    if (defaultValue !== null) {
      return _InlineCode(defaultValue);
    } else {
      return Nothing();
    }
  }
  if (Array.isArray(text)) {
    return () => text.map(code => _InlineCode(code)()).join(" | ");
  }
  return _InlineCode(text)
};

/**
 * @param {(() => (string))[]} elements
 * @param {{wrap: boolean}} options
 */
// The same a Lines but takes render functions as input and does not
// add newliens between the elements/lines.
const Elements = (elements, { wrap } = { wrap: false}) => {
  return () => {
    /** @type {(() => (string))[]} */ const tokens = [];
    const Wrapper = (elements.length > 0 && wrap) ? Newline : Nothing;
    tokens.push(Wrapper());
    tokens.push(...elements);
    tokens.push(Wrapper());
    const strings = tokens.map(token => token());
    return strings.join("");
  }
}

/**
 * @param {string[] | null} lines
 * @param {{wrap: boolean}} options
 */
const Lines = (lines, { wrap } = { wrap: false }) => {
  if (lines == null) {
    return Nothing();
  }
  return () => {
    // Take the lines and add newlines
    const tokens = [];
    lines.forEach(line => {
      tokens.push(Line(line), Newline());
    });
    return Elements(tokens, { wrap })();
  }
};

const Hr = () => () => {
  return `\n\n---\n\n`
}

module.exports = {
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
};
