import Popover from "./popover.vue"

Popover.install = _vue => {
  _vue.component("CPopover", Popover)
}

export default Popover
