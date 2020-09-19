import createEscListener from './../on-esc-listener'
import { createLocalVue, mount } from '@vue/test-utils'

describe('createEscListener', () => {
  const createElement = () => {
    const localVue = createLocalVue()
    return mount(
      {
        template: '<div />',
      },
      { localVue }
    ).element
  }
  const dispatchKeyboardEvent = (element, type, options) => {
    element.dispatchEvent(new KeyboardEvent(type, options))
  }

  const dispatchEscEvent = (element) => {
    dispatchKeyboardEvent(element, 'keyup', { key: 'Escape' })
  }

  it('does not call handler if not turned on', () => {
    const element = createElement()
    const handler = jest.fn(() => ({}))
    createEscListener(handler, { element })
    expect(handler.mock.calls.length).toEqual(0)
    dispatchEscEvent(element)
    expect(handler.mock.calls.length).toEqual(0)
  })

  it('calls handler if turned on', () => {
    const element = createElement()
    const handler = jest.fn(() => ({}))
    const listener = createEscListener(handler, { element })
    listener.on()
    dispatchEscEvent(element)
    expect(handler.mock.calls.length).toEqual(1)
  })

  it('stopps calling handler if turned off', () => {
    const element = createElement()
    const handler = jest.fn(() => ({}))
    const listener = createEscListener(handler, { element })
    listener.on()
    dispatchEscEvent(element)
    expect(handler.mock.calls.length).toEqual(1)
    listener.off()
    dispatchEscEvent(element)
    expect(handler.mock.calls.length).toEqual(1)
    listener.on()
    dispatchEscEvent(element)
    expect(handler.mock.calls.length).toEqual(2)
  })
})
