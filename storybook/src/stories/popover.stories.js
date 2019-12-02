import Playground from './../components/k-playground.vue'

export default { title: 'Popover' }

export const defaultPopover = () => ({
  template: `
<div style="height: 100px; border: 1px solid red;">
  <CPopover>
    <template #trigger>
      <button>Toggle</button>
    </template>
    <div>hi mom</div>
  </CPopover>
</div>`,
});


export const customTriggerPopover = () => ({
  template: `
<div style="height: 100px; border: 1px solid red;">
<CPopover placement="bottom" with-arrow theme="clean">
    <template #trigger="{ show, hide }">
      <button @mouseenter="show" @mouseleave="hide">Tooltip shows hover</button>
    </template>
    Popover Body
  </CPopover>
</div>`,
});

export const playground = () => ({
  components: { Playground },
  template: `<Playground />`,
});

