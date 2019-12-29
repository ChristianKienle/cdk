// @ts-check
/* eslint-env node */
const assert = require('assert').strict
const { createMarkdown } = require('@vue-cdk/create-markdown')
const { getDescription } = require('./../parser-result-utils')

/**
 * @typedef {import("@vuese/parser").ParserResult} ParserResult
 * @typedef {import("@vuese/parser").PropsResult} PropsResult
 * @typedef {import("@vuese/parser").EventResult} EventResult
 * @typedef {import("@vuese/parser").SlotResult} SlotResult
 * @typedef {import("@vuese/parser").MethodResult} MethodResult
 * @typedef {import("@vuese/parser").ComputedResult} ComputedResult
 */

/** @param {PropsResult} prop */
const renderProp = prop => {
  return createMarkdown()
    .nl()
    .nl()
    .h(3, prop.name)
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
}

/** @param {EventResult} event */
const renderEvent = event => {
  const md = createMarkdown()
    .h(3, event.name)
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
const renderComputed = ({ name, describe }) =>
  createMarkdown()
    .h(3, name)
    .nl()
    .lines(describe, { wrap: true })
    .nl()

/** @param {ComputedResult[]} computed */
const renderComputedProps = computed => {
  if (computed.length === 0) {
    return ''
  }
  const md = createMarkdown()
    .nl(2)
    .h(2, 'Computed')
    .nl(2)
    .raw(computed.map(renderComputed), { wrap: true })
    .nl(2)
  return md
}

/** @param {MethodResult[]} methods */
const renderMethods = (methods = []) => {
  if (methods.length === 0) {
    return ''
  }
  return createMarkdown()
    .nl(2)
    .h(2, 'Methods')
    .nl(2)
    .raw(methods.map(renderMethod), { wrap: true })
    .nl(2)
}

/** @param {MethodResult} method */
const renderMethod = method => {
  const md = createMarkdown()
    .h(3, method.name)
    .nl()
    .lines(method.describe, { wrap: true })
  if ((method.argumentsDesc || []).length > 0) {
    md.nl(2)
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
  const md = createMarkdown()
    .h(3, slot.name)
    .nl()
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
  return createMarkdown()
    .nl(2)
    .h(2, 'Slots')
    .nl(2)
    .raw(slots.map(renderSlot), { wrap: true })
}
/** @param {EventResult[]} events */
const renderEvents = events => {
  if (events == null) {
    return ''
  }
  if (events.length === 0) {
    return ''
  }
  const md = createMarkdown()
    .nl(2)
    .h(2, 'Events')
    .nl(2)
  events.forEach(event => md.raw(renderEvent(event), { wrap: true }))
  md.nl(2)
  return md
}

/** @param {PropsResult[]} props */
const renderProps = (props = []) => {
  if (props.length === 0) {
    return ''
  }
  return createMarkdown()
    .nl(2)
    .h(2, 'Props')
    .nl(2)
    .raw(props.map(renderProp), { wrap: true })
    .nl(2)
}

/** @param {import("@vuese/parser").ParserResult} componentApi */
const render = componentApi => {
  assert(componentApi != null)
  assert(typeof componentApi === 'object')
  const md = createMarkdown()
    .h(1, componentApi.name)
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
  if (md == null) {
    throw Error(
      `Unable to render API for component ${componentApi} because 'renderMarkdown' returned 'null'.`
    )
  }
  return md.render()
}

module.exports = render
