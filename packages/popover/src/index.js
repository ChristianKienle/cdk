import KPop from "./k-pop.vue"

KPop.install = _vue => {
  _vue.component("CPopover", KPop)
}

export default KPop
