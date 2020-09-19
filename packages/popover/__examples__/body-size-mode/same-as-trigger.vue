<template>
  <div style="display: flex">
    <button ref="smallTrigger" @click="smallVisible = !smallVisible">Small Trigger</button>
    <CPopover
      :target="() => $refs.smallTrigger"
      :visible="smallVisible"
      body-size-mode="same-as-trigger"
      with-arrow
      theme="clean"
    >
      <CPopoverContent>
        <p>I am a Popover Body.</p>
      </CPopoverContent>
    </CPopover>

    <button ref="bigTrigger" style="width: 250px" @click="bigVisible = !bigVisible"
      >Big Trigger</button
    >
    <CPopover
      :target="() => $refs.bigTrigger"
      :visible="bigVisible"
      body-size-mode="same-as-trigger"
      with-arrow
      theme="clean"
    >
      <CPopoverContent>
        <p> I am a Popover Body. </p>
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
