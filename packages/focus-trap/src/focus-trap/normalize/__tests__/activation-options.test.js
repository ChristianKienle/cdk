// @ts-check
import normalize from './../activation-options'
import { createLocalVue, mount } from '@vue/test-utils'

const createTrapable = () => {
  const localVue = createLocalVue()
  const Modal = {
    render(h) {
      return h('div', { style: 'width: 200px; height: 200px;' }, ['hi mom'])
    },
  }
  const wrapper = mount(Modal, { localVue })
  const { vm } = wrapper
  return { vm, wrapper, localVue }
}

describe('normalize activation options', () => {
  let trapable = createTrapable()

  beforeEach(() => {
    trapable = createTrapable()
  })

  it('normalizes null', () => {
    const normalized = normalize(trapable.vm, null)
    expect(normalized).toHaveProperty('deactivation', 'on-esc')
    expect(normalized.onDeactivate).toBeDefined()
    expect(typeof normalized.onDeactivate).toEqual('function')
    expect(normalized.initialFocus).toBe(trapable.vm.$el)
  })

  it('normalizes undefined', () => {
    const normalized = normalize(trapable.vm)
    expect(normalized).toHaveProperty('deactivation', 'on-esc')
    expect(normalized.onDeactivate).toBeDefined()
    expect(typeof normalized.onDeactivate).toEqual('function')
    expect(normalized.initialFocus).toBe(trapable.vm.$el)
  })

  it('normalizes {}', () => {
    const normalized = normalize(trapable.vm, {})
    expect(normalized).toHaveProperty('deactivation', 'on-esc')
    expect(normalized.onDeactivate).toBeDefined()
    expect(typeof normalized.onDeactivate).toEqual('function')
    expect(normalized.initialFocus).toBe(trapable.vm.$el)
  })

  it('uses deactivation mode provided', () => {
    const normalized = normalize(trapable.vm, {
      deactivation: 'manual',
    })
    expect(normalized).toHaveProperty('deactivation', 'manual')
    expect(normalized.onDeactivate).toBeDefined()
    expect(typeof normalized.onDeactivate).toEqual('function')
    expect(normalized.initialFocus).toBe(trapable.vm.$el)
  })

  it('uses provided onDeactivate function', () => {
    const onDeactivate = () => {}
    const normalized = normalize(trapable.vm, {
      onDeactivate,
    })
    expect(normalized).toHaveProperty('deactivation', 'on-esc')
    expect(normalized.onDeactivate).toBe(onDeactivate)
    expect(normalized.initialFocus).toBe(trapable.vm.$el)
  })

  it('uses provided initialFocus element', () => {
    const wrapper = mount({
      template: '<div tabindex="-1">hi</div>',
    })
    const initialFocus = wrapper.element
    const normalized = normalize(trapable.vm, {
      initialFocus,
    })
    expect(normalized).toHaveProperty('deactivation', 'on-esc')
    expect(typeof normalized.onDeactivate).toEqual('function')
    expect(normalized.initialFocus).toBe(initialFocus)
  })
})
