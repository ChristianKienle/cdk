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
    expect(onDidRegisterComponent).toHaveBeenCalledWith({
      name: 'CHelloWorld',
      component: HelloWorld
    })
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
        template: `<CHelloWorld />`
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
        template: `<CHelloWorld />`
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
        template: `<CHelloWorld />`
      },
      { localVue }
    )
    expect(wrapper.html()).toContain('1337')
  })

  describe('the exported mixin', () => {
    it('works with simple component', () => {
      const HelloWorld = {
        name: 'HelloWorld',
        render(h) {
          return h('div', {}, '1337')
        }
      }
      const mixin = pluginify(HelloWorld)()
      expect(mixin).toBeDefined()
      expect(mixin).toMatchObject({
        components: {
          CHelloWorld: HelloWorld
        }
      })
      const wrapper = mount({
        template: `<CHelloWorld />`,
        mixins: [mixin]
      })
      expect(wrapper.text()).toEqual('1337')
    })

    it('respects componentName options', () => {
      const HelloWorld = {
        name: 'HelloWorld',
        render(h) {
          return h('div', {}, '1337')
        }
      }
      const componentName = jest.fn(({ name }) => `B${name}`).mockName('mocked componentName')
      const mixin = pluginify(HelloWorld)({ componentName })
      expect(mixin).toBeDefined()
      expect(mixin).toMatchObject({
        components: {
          BHelloWorld: HelloWorld
        }
      })

      expect(componentName).toHaveBeenCalledWith({ name: 'HelloWorld', component: HelloWorld })

      // Also mount it and use the modified name
      const wrapper = mount({
        mixins: [mixin],
        template: `<BHelloWorld />`
      })
      expect(wrapper.text()).toEqual('1337')
    })
  })
})
