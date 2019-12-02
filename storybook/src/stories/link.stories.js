export default { title: 'Link' };


export const external = () => ({
  template: `
  <CLink href="https://example.org">External Link to https://example.org</CLink>`,
});

export const internal = () => ({
  template: `
  <CLink href="/hello/world">Internal Link to /hello/world</CLink>`,
});

export const disabled = () => ({
  template: `
  <CLink href="/hello/world" disabled>Disabled Internal Link to /hello/world</CLink>`,
});
