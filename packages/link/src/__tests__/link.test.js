import Link from './../link.vue'
import { RouterLinkStub, createLocalVue, mount } from '@vue/test-utils'
import VueRouter from 'vue-router'

describe('Link', () => {
  it('renders as anchor in case href is used', () => {
    const wrapper = mount(Link, { propsData: { href: '/hello-world' } })
    expect(wrapper.element.tagName.toLowerCase()).toStrictEqual('a')
    expect(wrapper.attributes('href')).toStrictEqual('/hello-world')
  })

  it('allows to override attributes of external links', () => {
    const wrapper = mount(Link, {
      propsData: {
        href: 'https://example.org'
      },
      attrs: {
        target: '_parent',
        rel: 'xxx'
      }
    })
    expect(wrapper.element.tagName.toLowerCase()).toStrictEqual('a')
    expect(wrapper.attributes('href')).toStrictEqual('https://example.org')
    expect(wrapper.attributes('target')).toStrictEqual('_parent')
    expect(wrapper.attributes('rel')).toStrictEqual('xxx')
  })

  it('throws if href and to are used', () => {
    expect(() => mount(Link, { propsData: { href: '/hello-world', to: '/hello' } })).toThrow()
  })

  it('renders as anchor in case href is used and ensures external urls receive special handling', () => {
    const href = 'https://example.org/hello/worl?test=1'
    const wrapper = mount({
      template: `<Link href="${href}">hello</Link>`,
      components: { Link }
    })
    const attributes = wrapper.attributes()
    expect(attributes['href']).toEqual(href)
    expect(wrapper.element.tagName.toLowerCase()).toStrictEqual('a')
    expect(attributes['href']).toStrictEqual(href)
    expect(attributes['target']).toStrictEqual('_blank')
    expect(attributes['rel']).toStrictEqual('noopener noreferrer')
  })

  it('renders as router link in case to-prop is used', () => {
    const localVue = createLocalVue()
    localVue.use(VueRouter)

    const router = new VueRouter({
      mode: 'hash',
      routes: [
        {
          name: 'home',
          path: '/home',
          component: {
            render(h) {
              return h('div', { class: 'home' }, ['home'])
            }
          }
        }
      ]
    })

    const wrapper = mount(
      {
        template: `<Link :to="{ name: 'home' }">Home sweet Home</Link>`,
        components: { Link }
      },
      {
        stubs: { RouterLink: RouterLinkStub },
        router
      }
    )

    const routerLink = wrapper.find(RouterLinkStub)
    expect(routerLink.exists()).toBe(true)
    expect(routerLink.props().to).toEqual({ name: 'home' })
  })

  it('can be disabled', async () => {
    const localVue = createLocalVue()
    const wrapper = mount(
      {
        template: `<div><Link @click="$emit('click', 'payload')" href="#" disabled>Home sweet Home</Link></div>`,
        components: { Link }
      },
      { localVue }
    )

    wrapper.find('a').trigger('click')
    await localVue.nextTick()
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it('emits click events', async () => {
    const localVue = createLocalVue()

    const wrapper = mount(
      {
        template: `<div><Link @click="$emit('click', 'payload')" href="#">Home sweet Home</Link></div>`,
        components: { Link }
      },
      { localVue }
    )

    wrapper.find('a').trigger('click')
    await localVue.nextTick()
    expect(wrapper.emitted()).toEqual({ click: [['payload']] })
  })

  // this came up during the execution of end to end tests
  // in e2e tests we want to attach cypress-specific attributes
  // to almost any component.
  // FdLink did not render those attributes and thus the tests failed.
  // Additional attributes should just work – not just for e2e-testing.
  it('renders additional attributes', () => {
    const wrapper = mount({
      template: `<Link href="#" data-cy-test="val">Home sweet Home</Link>`,
      components: { Link }
    })
    expect(wrapper.attributes('data-cy-test')).toBe('val')
  })
})
