import getTarget from './../get-target'
import { mount } from '@vue/test-utils'

describe('get-target', () => {
  it('works with $ref.button', () => {
    const Popover = {
      name: 'Popover',
      template: '<div>Popover</div>'
    }

    const wrapper = mount({
      template: `
      <div>
        <button data-target ref="button">toggle</button>
      </div>
      `
    })

    const target = getTarget({
      vm: wrapper.vm,
      target: '$refs.button'
    })

    expect(target).toBeDefined()
    expect(target.dataset.target).toBeDefined()
  })
})
