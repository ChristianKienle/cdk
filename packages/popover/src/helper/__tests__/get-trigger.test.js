import getTrigger from './../get-trigger'
import { mount } from '@vue/test-utils'

describe('get-trigger', () => {
  it('works with $ref.button', () => {
    const Popover = {
      name: 'Popover',
      template: '<div>Popover</div>'
    }

    const wrapper = mount({
      template: `
      <div>
        <button data-trigger ref="button">toggle</button>
      </div>
      `
    })

    const trigger = getTrigger({
      vm: wrapper.vm,
      trigger: '$refs.button'
    })

    expect(trigger).toBeDefined()
    expect(trigger.dataset.trigger).toBeDefined()
  })
})
