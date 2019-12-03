import { createLocalVue, mount } from '@vue/test-utils'
import pluginify from './../'

describe('pluginify', () => {
  it('works with simple component', () => {
    const localVue = createLocalVue()
    const HelloWorld = {
      name: 'HelloWorld',
      render(h) {
        return h('div', {}, '1337')
      }
    }
    const HelloWorldPlugin = pluginify(HelloWorld)
    localVue.use(HelloWorldPlugin)
    const wrapper = mount({
      template: `<HelloWorld />`
    }, { localVue })
    expect(wrapper.text()).toEqual('1337')
  })

  it('works with functional component', () => {
    const localVue = createLocalVue()
    const HelloWorld = {
      name: 'HelloWorld',
      functional: true,
      render(h) {
        return h('div', {}, '1337')
      }
    }
    const HelloWorldPlugin = pluginify(HelloWorld)
    localVue.use(HelloWorldPlugin)
    const wrapper = mount({
      template: `<HelloWorld />`
    }, { localVue })
    expect(wrapper.html()).toContain('1337')
  })

  it('works with SFC component', async () => {
    const localVue = createLocalVue()
    const HelloWorld = await import('./fixtures/hello-world.vue')

    const HelloWorldPlugin = pluginify(HelloWorld.default)
    localVue.use(HelloWorldPlugin)
    const wrapper = mount({
      template: `<HelloWorld />`
    }, { localVue })
    expect(wrapper.html()).toContain('1337')
  })
})
