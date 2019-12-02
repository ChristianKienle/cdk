// @ts-check
/* eslint-env node */
const assert = require('assert').strict
const CreateMarkdown = require('./create-md')
const createElement = require('../create-element')

const classPrefix = 'component-documentation'
/**
 * @param {string} child
 */
const createScopedClass = child => `${classPrefix}${child}`

/**
 * @typedef {import("@vuese/parser").ParserResult} ParserResult
 * @typedef {import("@vuese/parser").PropsResult} PropsResult
 * @typedef {import("@vuese/parser").EventResult} EventResult
 * @typedef {import("@vuese/parser").SlotResult} SlotResult
 * @typedef {import("@vuese/parser").MethodResult} MethodResult
 * @typedef {import("@vuese/parser").ComputedResult} ComputedResult
 */

/** @param {ParserResult} result */
const getDescription = result => {
  const { componentDesc = { 'default': [] } } = result
  return componentDesc.default
}

/**
 * @param {number} level
 * @param {string} text
 */
const renderHeading = (level, text) => {
  const attrs = {
    class: `component-documentation__title component-documentation__title--${level}`
  }
  const textNode = createElement(null, {}, [], text)
  const raw = createElement('div', { attrs }, [textNode], null).render()
  return new CreateMarkdown().raw(raw)
}

/**
 * @param {string} text
 * @param {string=} cssClass
 */
const renderDivWithScopedClass = (text, cssClass) => {
  const scopedClass = cssClass == null ? 'component-documentation' : `component-documentation__${cssClass}`
  return new CreateMarkdown().raw(`<div class="${scopedClass}">${text}</div>`)
}

const renderWithScopedClass = (cssClass, children = []) => {
  const scopedClass = createScopedClass(cssClass)
  const attrs = { class: scopedClass }
  return new CreateMarkdown().div({ attrs }, children)
}

/** @param {PropsResult} prop */
const renderProp = prop => {
  const md = new CreateMarkdown()
    .nl()
    .nl()
    .strong('Name:')
    .raw('&nbsp;')
    .raw(prop.name)
    .nl()
    .nl()
    .strong('Type:')
    .raw('&nbsp;')
    .code(prop.type, { defaultValue: 'not specified' })
    .nl()
    .nl()
    .lines(prop.typeDesc, { wrap: true })
    .strong('Default:')
    .raw('&nbsp;')
    .code(prop.default || '–')
    .nl()
    .lines(prop.defaultDesc, { wrap: true })
    .lines(prop.describe, { wrap: true })
    .nl()
    .nl()

  return renderWithScopedClass('__prop', md.tokens)
}

/** @param {EventResult} event */
const renderEvent = event => {
  const md = renderDivWithScopedClass(event.name, 'event-name')
    .nl()
    .lines(event.describe, { wrap: true })
    .nl()
  if (event.isSync) {
    md.raw(`<span style="color=blue;">syncs ${event.syncProp}</span>`).nl()
  }
  md.nl()
    .strong('Arguments:')
    .nl()
  const args = (event.argumentsDesc || []).map(arg => `- ${arg}`)
  md.lines(args, { wrap: true })
  md.nl()
  return md
}

/** @param {ComputedResult} computed */
const renderComputed = ({ name, describe }) => renderDivWithScopedClass(name, 'computed-name').nl().lines(describe, { wrap: true }).nl()

/** @param {ComputedResult[]} computed */
const renderComputedProps = (computed) => {
  if (computed.length === 0) {
    return ''
  }
  const md = new CreateMarkdown()
    .nl(2)
    .raw(renderDivWithScopedClass('Computed', 'computed-props-heading'))
    .nl(2)
    .raw(computed.map(renderComputed), { wrap: true })
    .nl(2)
  return renderWithScopedClass('__computed-props', md.tokens)
}

/** @param {MethodResult[]} methods */
const renderMethods = (methods = []) => {
  if (methods.length === 0) {
    return ''
  }
  const md = new CreateMarkdown()
    .nl(2)
    .raw(renderDivWithScopedClass('Methods', 'methods-heading'))
    .nl(2)
    .raw(methods.map(renderMethod), { wrap: true })
    .nl(2)
  return renderWithScopedClass('__methods', md.tokens)
}

/** @param {MethodResult} method */
const renderMethod = method => {
  const md = renderDivWithScopedClass('', 'method')
  md.add(...renderDivWithScopedClass(method.name, 'method-name').tokens)
    .nl()
    .lines(method.describe, { wrap: true })
  if ((method.argumentsDesc || []).length > 0) {
    md
      .nl(2)
      .strong('Arguments:')
      .nl()
    const args = (method.argumentsDesc || []).map(arg => `- ${arg}`)
    md.lines(args, { wrap: true })
    md.nl()
  }
  return md
}


/** @param {SlotResult} slot */
const renderSlot = slot => {
  const md = renderDivWithScopedClass(slot.name, 'slot-name').nl()
  if (slot.scoped) {
    // TODO: Remove this
    md.raw(`<span style="color: blue;">scoped</span>`).nl()
  }
  md.lines([slot.describe], { wrap: true }).nl()
  return md
}
/** @param {SlotResult[]} slots */
const renderSlots = slots => {
  if (slots.length === 0) {
    return ''
  }
  const md = new CreateMarkdown()
    .nl(2)
  renderDivWithScopedClass('Slots', 'slots-heading')
    .nl(2)
    .raw(slots.map(renderSlot), { wrap: true })
  return renderWithScopedClass('__slots', md.tokens)
}
/** @param {EventResult[]} events */
const renderEvents = events => {
  if (events == null) {
    return ''
  }
  if (events.length === 0) {
    return ''
  }
  const md = new CreateMarkdown()
    .nl(2)
    .raw(renderDivWithScopedClass('Events', 'events-heading'))
    .nl(2)
  events.forEach(event => md.raw(renderEvent(event), { wrap: true }))
  md
    .nl(2)
  return renderWithScopedClass('__events', md.tokens)
}

/** @param {PropsResult[]} props */
const renderProps = (props = []) => {
  if (props.length === 0) {
    return ''
  }
  const md = new CreateMarkdown()
    .nl(2)
    .raw(renderDivWithScopedClass('Props', 'props-heading'))
    .nl(2)
    .raw(props.map(renderProp), { wrap: true })
    .nl(2)
  return renderWithScopedClass('__props', md.tokens)
}

/** @param {import("@vuese/parser").ParserResult} componentApi */
const render = componentApi => {
  assert(componentApi != null)
  assert(typeof componentApi === 'object')
  const md = new CreateMarkdown()
    .raw('<div class="component-documentation">')
    .nl(2)
    .lines(getDescription(componentApi), { wrap: true })
    .nl(2)
    .raw(renderProps(componentApi.props))
    .nl(2)
    .raw(renderSlots(componentApi.slots))
    .nl(2)
    .raw(renderEvents(componentApi.events))
    .nl(2)
    .raw(renderMethods(componentApi.methods))
    .nl(2)
    .raw(renderComputedProps(componentApi.computed || []))
    .nl(2)
    .raw('</div>')
  if (md == null) {
    throw Error(`Unable to render API for component ${componentApi} because 'renderMarkdown' returned 'null'.`)
  }
  return md.render()
}

module.exports = render
