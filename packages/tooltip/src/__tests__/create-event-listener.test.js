import createEventListener from './../create-event-listener'
import { createLocalVue, mount } from '@vue/test-utils'

describe('createEventListener', () => {
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

  it('does not call handler if not turned on', () => {
    const element = createElement()
    const handler = jest.fn(() => ({}))
    const listener = createEventListener('keyup', element, handler)
    expect(handler.mock.calls.length).toEqual(0)
    dispatchKeyboardEvent(element, 'keyup', {})
    expect(handler.mock.calls.length).toEqual(0)
    listener.on()
    dispatchKeyboardEvent(element, 'keyup', {})
    expect(handler.mock.calls.length).toEqual(1)
  })

  it('calls handler if turned on', () => {
    const element = createElement()
    const handler = jest.fn(() => ({}))
    const listener = createEventListener('keyup', element, handler)
    listener.on()
    dispatchKeyboardEvent(element, 'keyup', {})
    expect(handler.mock.calls.length).toEqual(1)
  })

  it('stopps calling handler if turned off', () => {
    const element = createElement()
    const handler = jest.fn(() => ({}))
    const listener = createEventListener('keyup', element, handler)
    listener.on()
    dispatchKeyboardEvent(element, 'keyup', {})
    expect(handler.mock.calls.length).toEqual(1)
    listener.off()
    dispatchKeyboardEvent(element, 'keyup', {})
    expect(handler.mock.calls.length).toEqual(1)
    listener.on()
    dispatchKeyboardEvent(element, 'keyup', {})
    expect(handler.mock.calls.length).toEqual(2)
  })
})
