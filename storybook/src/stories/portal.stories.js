
export default { title: 'Portal' }

export const defaultPortal = () => ({
  template: `
<div style="height: 100px; border: 1px solid red;">
  <CPortal>
      <button>Toggle</button>
    <div>hi mom</div>
  </CPortal>
</div>`,
});

