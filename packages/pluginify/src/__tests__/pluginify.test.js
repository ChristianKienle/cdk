import { createLocalVue, mount } from '@vue/test-utils'
import pluginify from './../'

describe('pluginify', () => {
  it('calls onDidRegisterComponent', () => {
    const localVue = createLocalVue()
    const HelloWorld = {
      name: 'HelloWorld',
      render(h) {
        return h('div', {}, '1337')
      }
    }
    const onDidRegisterComponent = jest.fn().mockName('mocked onDidRegisterComponent')
    const HelloWorldPlugin = pluginify(HelloWorld)
    localVue.use(HelloWorldPlugin, {
      onDidRegisterComponent
    })
    expect(onDidRegisterComponent).toHaveBeenCalledWith('HelloWorld', HelloWorld)
  })

  it('respects componentName options', () => {
    const localVue = createLocalVue()
    const HelloWorld = {
      name: 'HelloWorld',
      render(h) {
        return h('div', {}, '1337')
      }
    }
    const componentName = jest.fn(({ name }) => `B${name}`).mockName('mocked componentName')
    const HelloWorldPlugin = pluginify(HelloWorld)
    localVue.use(HelloWorldPlugin, {
      componentName
    })
    expect(componentName).toHaveBeenCalledWith({ name: 'HelloWorld', component: HelloWorld })

    // Also mount it and use the modified name
    const wrapper = mount(
      {
        template: `<BHelloWorld />`
      },
      { localVue }
    )
    expect(wrapper.text()).toEqual('1337')
  })

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
    const wrapper = mount(
      {
        template: `<HelloWorld />`
      },
      { localVue }
    )
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
    const wrapper = mount(
      {
        template: `<HelloWorld />`
      },
      { localVue }
    )
    expect(wrapper.html()).toContain('1337')
  })

  it('works with SFC component', async () => {
    const localVue = createLocalVue()
    const HelloWorld = await import('./fixtures/hello-world.vue')

    const HelloWorldPlugin = pluginify(HelloWorld.default)
    localVue.use(HelloWorldPlugin)
    const wrapper = mount(
      {
        template: `<HelloWorld />`
      },
      { localVue }
    )
    expect(wrapper.html()).toContain('1337')
  })
})
