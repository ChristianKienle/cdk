import '@vue-cdk/popover-themes/index.css'

export default { title: 'Popover Themes' }

export const cleanPopover = () => ({
  template: `
<div style="display: flex; align-items: center; justify-content: center; height: 200px;">
  <CPopover theme="clean">
    <template #trigger>
      <button>Show 'clean' Popover</button>
    </template>
    <div>I am a Popover. Wheeee. 😉</div>
  </CPopover>
</div>`
});

export const bigArrowPopover = () => ({
  template: `
<div style="display: flex; align-items: center; justify-content: center; height: 200px;">
  <CPopover theme="big-arrow" withArrow>
    <template #trigger>
      <button>Show 'big-arrow' Popover</button>
    </template>
    <div>I am a Popover. Wheeee. 😉</div>
  </CPopover>
</div>`
});

export const darkPopover = () => ({
  template: `
<div style="display: flex; align-items: center; justify-content: center; height: 200px;">
  <CPopover theme="dark">
    <template #trigger>
      <button>Show 'dark' Popover</button>
    </template>
    <div>I am a Popover. Wheeee. 😉</div>
  </CPopover>
</div>`
});

export const versionTwoPopover = () => ({
  template: `
<div style="display: flex; align-items: center; justify-content: center; height: 200px;">
  <CPopover theme="v2">
    <template #trigger>
      <button>Show 'dark' Popover</button>
    </template>
    <div>I am a Popover. Wheeee. 😉</div>
  </CPopover>
</div>`
});
