(window.webpackJsonp=window.webpackJsonp||[]).push([[7,18],{227:function(e,t,r){},230:function(e,t,r){},232:function(e,t,r){"use strict";var i=r(227);r.n(i).a},233:function(e,t,r){"use strict";r.r(t);var i={props:["label"]},n=(r(232),r(1)),a=Object(n.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"row"},[t("label",{staticClass:"label"},[this._v(this._s(this.label)+":")]),this._v(" "),t("div",{staticClass:"control"},[this._t("default")],2)])}),[],!1,null,"f37ededa",null);t.default=a.exports},259:function(e,t,r){"use strict";var i=r(230);r.n(i).a},272:function(e,t,r){"use strict";r.r(t);var i=r(37),n=r(233),a=r(22),o={components:{SettingRow:n.default},watch:{kPopProps:function(e){this.$emit("changed",e)}},computed:{kPopProps:function(){return{bodySizeMode:this.bodySizeMode,boundary:this.boundary,offset:this.offset,flips:this.flips,placement:this.placement,withArrow:this.withArrow,theme:"none"===this.theme?null:this.theme}}},data:function(){return{bodySizeMode:a.e,bodySizeModes:Object(i.a)(a.d),triggerWidth:250,useNativeButton:!1,offset:0,theme:"clean",boundary:"scrollParent",placement:"bottom",flips:!0,withArrow:!0,boundaries:["scrollParent","window","viewport"],placements:["top-start","top","top-end","left-start","left","left-end","right-start","right","right-end","bottom-start","bottom","bottom-end"],themes:["none","v2","clean","big-arrow","dark"]}}},l=(r(259),r(1)),s=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"settings"},[r("SettingRow",{attrs:{label:"Placement"}},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.placement,expression:"placement"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.placement=t.target.multiple?r:r[0]}}},e._l(e.placements,(function(t){return r("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])})),0)]),e._v(" "),r("SettingRow",{attrs:{label:"Boundary"}},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.boundary,expression:"boundary"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.boundary=t.target.multiple?r:r[0]}}},e._l(e.boundaries,(function(t){return r("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])})),0)]),e._v(" "),r("SettingRow",{attrs:{label:"Theme"}},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.theme,expression:"theme"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.theme=t.target.multiple?r:r[0]}}},e._l(e.themes,(function(t){return r("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])})),0)]),e._v(" "),r("SettingRow",{attrs:{label:"Body Size Mode"}},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.bodySizeMode,expression:"bodySizeMode"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.bodySizeMode=t.target.multiple?r:r[0]}}},e._l(e.bodySizeModes,(function(t){return r("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])})),0)]),e._v(" "),r("SettingRow",{attrs:{label:"Offset"}},[r("div",{staticStyle:{display:"flex"}},[r("input",{directives:[{name:"model",rawName:"v-model.number",value:e.offset,expression:"offset",modifiers:{number:!0}}],staticClass:"input",attrs:{type:"range",min:"0",max:"100",value:"0"},domProps:{value:e.offset},on:{__r:function(t){e.offset=e._n(t.target.value)},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),r("label",{},[e._v(e._s(e.offset)+"px")])])]),e._v(" "),r("SettingRow",{attrs:{label:"Trigger Width"}},[r("div",{staticStyle:{display:"flex"}},[r("input",{directives:[{name:"model",rawName:"v-model.number",value:e.triggerWidth,expression:"triggerWidth",modifiers:{number:!0}}],staticClass:"input",attrs:{type:"range",min:"200",max:"400",value:"250"},domProps:{value:e.triggerWidth},on:{input:function(t){return e.$emit("update:triggerWidth",t.target.value)},__r:function(t){e.triggerWidth=e._n(t.target.value)},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),r("label",[e._v(e._s(e.triggerWidth)+"px")])])]),e._v(" "),r("SettingRow",{attrs:{label:"Options"}},[r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.flips,expression:"flips"}],staticClass:"input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.flips)?e._i(e.flips,null)>-1:e.flips},on:{change:function(t){var r=e.flips,i=t.target,n=!!i.checked;if(Array.isArray(r)){var a=e._i(r,null);i.checked?a<0&&(e.flips=r.concat([null])):a>-1&&(e.flips=r.slice(0,a).concat(r.slice(a+1)))}else e.flips=n}}}),e._v("Flip ")]),e._v(" "),r("br"),e._v(" "),r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.withArrow,expression:"withArrow"}],staticClass:"input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.withArrow)?e._i(e.withArrow,null)>-1:e.withArrow},on:{change:function(t){var r=e.withArrow,i=t.target,n=!!i.checked;if(Array.isArray(r)){var a=e._i(r,null);i.checked?a<0&&(e.withArrow=r.concat([null])):a>-1&&(e.withArrow=r.slice(0,a).concat(r.slice(a+1)))}else e.withArrow=n}}}),e._v("Arrow ")]),e._v(" "),r("br"),e._v(" "),r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.useNativeButton,expression:"useNativeButton"}],staticClass:"input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.useNativeButton)?e._i(e.useNativeButton,null)>-1:e.useNativeButton},on:{change:[function(t){var r=e.useNativeButton,i=t.target,n=!!i.checked;if(Array.isArray(r)){var a=e._i(r,null);i.checked?a<0&&(e.useNativeButton=r.concat([null])):a>-1&&(e.useNativeButton=r.slice(0,a).concat(r.slice(a+1)))}else e.useNativeButton=n},function(t){return e.$emit("update:useNativeButton",t.target.checked)}]}}),e._v("Native Button\n    ")])])],1)}),[],!1,null,"2af816d4",null);t.default=s.exports}}]);