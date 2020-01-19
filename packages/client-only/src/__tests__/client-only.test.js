const Vue = require('vue')
const VueServerRenderer = require('vue-server-renderer')
import ClientOnly from './../client-only.vue'

describe('ClientOnly Component', () => {
  it('works with vue-server-renderer', async () => {
    const renderer = VueServerRenderer.createRenderer()
    const template = `
    <div>
      <ClientOnly>
        <p>hello browser</p>
      </ClientOnly>
      <p>hello everyone</p>
    </div>
    `
    const app = new Vue({
      components: { ClientOnly },
      template
    })
    const html = await renderer.renderToString(app)
    expect(html).toContain('hello everyone')
    expect(html).not.toContain('hello browser')
  })

  it('works with vue-server-renderer + placeholder slot', async () => {
    const renderer = VueServerRenderer.createRenderer()
    const template = `
    <div>
      <ClientOnly>
        <template #placeholder>
          <p>hello placeholder</p>
        </template>
        <p>hello browser</p>
      </ClientOnly>
      <p>hello everyone</p>
    </div>
    `
    const app = new Vue({
      components: { ClientOnly },
      template
    })
    const html = await renderer.renderToString(app)
    expect(html).toContain('hello everyone')
    expect(html).toContain('hello placeholder')
    expect(html).not.toContain('hello browser')
  })

  it('works with vue-server-renderer + placeholder prop', async () => {
    const renderer = VueServerRenderer.createRenderer()
    const template = `
    <div>
      <ClientOnly placeholder="hello placeholder">
        <p>hello browser</p>
      </ClientOnly>
      <p>hello everyone</p>
    </div>
    `
    const app = new Vue({
      components: { ClientOnly },
      template
    })
    const html = await renderer.renderToString(app)
    expect(html).toContain('hello everyone')
    expect(html).toContain('hello placeholder')
    expect(html).not.toContain('hello browser')
  })
})
