<template>
  <div style="display: flex">
    <button ref="smallTrigger" @click="smallVisible = !smallVisible">Small Trigger</button>
    <CPopover
      :target="() => $refs.smallTrigger"
      :visible="smallVisible"
      body-size-mode="at-least-as-trigger"
      with-arrow
      theme="clean"
    >
      <CPopoverContent>
        <p style="margin 5px; width: 250px">I am a Popover Body.</p>
      </CPopoverContent>
    </CPopover>

    <button ref="bigTrigger" style="width: 250px" @click="bigVisible = !bigVisible"
      >Big Trigger</button
    >
    <CPopover
      :target="() => $refs.bigTrigger"
      :visible="bigVisible"
      body-size-mode="at-least-as-trigger"
      with-arrow
      theme="clean"
    >
      <CPopoverContent>
        <p style="padding: 20px; width: 250px"> I am a Popover Body. </p>
      </CPopoverContent>
    </CPopover>
  </div>
</template>

<script>
import '@vue-cdk/popover/themes/clean.css'
export default {
  data() {
    return {
      smallVisible: false,
      bigVisible: false,
    }
  },
}
</script>
