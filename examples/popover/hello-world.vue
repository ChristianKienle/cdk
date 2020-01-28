<template>
  <div>
    <button ref="button" @click="$refs.popover.toggle()"
      >Toggle – {{ slotProps.transitionState }}</button
    >
    <CPopover
      ref="popover"
      with-arrow
      placement="bottom"
      :target="() => $refs.button"
      theme="clean"
      @slotProps="slotProps = $event"
    >
      <CPopoverContent>
        <div>this is a popover content. yay.</div>
      </CPopoverContent>
    </CPopover>
  </div>
</template>

<script>
import '@vue-cdk/popover/themes/clean.css'
export default {
  data() {
    return {
      slotProps: {
        transitionState: 'inactive',
        entering: false,
        visible: false,
        show: () => {},
        hide: () => {},
        toggle: () => {}
      }
    }
  }
}
</script>
