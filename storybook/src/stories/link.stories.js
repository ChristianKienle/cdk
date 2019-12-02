import VueRouter from 'vue-router';

export default { title: 'Link' };

export const external = () => ({
  template: `
  <CLink href="https://example.org">External Link to https://example.org</CLink>`,
});

export const internal = () => ({
  template: `
  <CLink href="/hello/world">Internal Link to /hello/world</CLink>`,
});

export const disabledInternal = () => ({
  template: `
  <CLink href="/hello/world" disabled>Disabled Internal Link to /hello/world</CLink>`,
});

export const disabledExternal = () => ({
  template: `
  <CLink disabled href="https://example.org">Disabled external Link to https://example.org</CLink>`,
});

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/'
    }
  ]
})

export const disabledRouterLink = () => ({
  router,
  template: `
  <CLink disabled :to="{path: '/'}">Disabled internal router link to /</CLink>`,
});

export const routerLink = () => ({
  router,
  template: `
  <CLink :to="{path: '/'}">Internal router link to /</CLink>`,
});
