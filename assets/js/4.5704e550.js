(window.webpackJsonp=window.webpackJsonp||[]).push([[4,7,18,19],{225:function(t,e,r){},227:function(t,e,r){},230:function(t,e,r){},231:function(t,e,r){},232:function(t,e,r){"use strict";var n=r(227);r.n(n).a},233:function(t,e,r){"use strict";r.r(e);var n={props:["label"]},i=(r(232),r(1)),o=Object(i.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("label",{staticClass:"label"},[this._v(this._s(this.label)+":")]),this._v(" "),e("div",{staticClass:"control"},[this._t("default")],2)])}),[],!1,null,"f37ededa",null);e.default=o.exports},259:function(t,e,r){"use strict";var n=r(230);r.n(n).a},260:function(t,e,r){"use strict";var n=r(231);r.n(n).a},261:function(t,e,r){},272:function(t,e,r){"use strict";r.r(e);var n=r(37),i=r(233),o=r(22),a={components:{SettingRow:i.default},watch:{kPopProps:function(t){this.$emit("changed",t)}},computed:{kPopProps:function(){return{bodySizeMode:this.bodySizeMode,boundary:this.boundary,offset:this.offset,flips:this.flips,placement:this.placement,withArrow:this.withArrow,theme:"none"===this.theme?null:this.theme}}},data:function(){return{bodySizeMode:o.e,bodySizeModes:Object(n.a)(o.d),triggerWidth:250,useNativeButton:!1,offset:0,theme:"clean",boundary:"scrollParent",placement:"bottom",flips:!0,withArrow:!0,boundaries:["scrollParent","window","viewport"],placements:["top-start","top","top-end","left-start","left","left-end","right-start","right","right-end","bottom-start","bottom","bottom-end"],themes:["none","v2","clean","big-arrow","dark"]}}},s=(r(259),r(1)),l=Object(s.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"settings"},[r("SettingRow",{attrs:{label:"Placement"}},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.placement,expression:"placement"}],on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.placement=e.target.multiple?r:r[0]}}},t._l(t.placements,(function(e){return r("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])})),0)]),t._v(" "),r("SettingRow",{attrs:{label:"Boundary"}},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.boundary,expression:"boundary"}],on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.boundary=e.target.multiple?r:r[0]}}},t._l(t.boundaries,(function(e){return r("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])})),0)]),t._v(" "),r("SettingRow",{attrs:{label:"Theme"}},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.theme,expression:"theme"}],on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.theme=e.target.multiple?r:r[0]}}},t._l(t.themes,(function(e){return r("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])})),0)]),t._v(" "),r("SettingRow",{attrs:{label:"Body Size Mode"}},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.bodySizeMode,expression:"bodySizeMode"}],on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.bodySizeMode=e.target.multiple?r:r[0]}}},t._l(t.bodySizeModes,(function(e){return r("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])})),0)]),t._v(" "),r("SettingRow",{attrs:{label:"Offset"}},[r("div",{staticStyle:{display:"flex"}},[r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.offset,expression:"offset",modifiers:{number:!0}}],staticClass:"input",attrs:{type:"range",min:"0",max:"100",value:"0"},domProps:{value:t.offset},on:{__r:function(e){t.offset=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),r("label",{},[t._v(t._s(t.offset)+"px")])])]),t._v(" "),r("SettingRow",{attrs:{label:"Trigger Width"}},[r("div",{staticStyle:{display:"flex"}},[r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.triggerWidth,expression:"triggerWidth",modifiers:{number:!0}}],staticClass:"input",attrs:{type:"range",min:"200",max:"400",value:"250"},domProps:{value:t.triggerWidth},on:{input:function(e){return t.$emit("update:triggerWidth",e.target.value)},__r:function(e){t.triggerWidth=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),r("label",[t._v(t._s(t.triggerWidth)+"px")])])]),t._v(" "),r("SettingRow",{attrs:{label:"Options"}},[r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.flips,expression:"flips"}],staticClass:"input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.flips)?t._i(t.flips,null)>-1:t.flips},on:{change:function(e){var r=t.flips,n=e.target,i=!!n.checked;if(Array.isArray(r)){var o=t._i(r,null);n.checked?o<0&&(t.flips=r.concat([null])):o>-1&&(t.flips=r.slice(0,o).concat(r.slice(o+1)))}else t.flips=i}}}),t._v("Flip ")]),t._v(" "),r("br"),t._v(" "),r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.withArrow,expression:"withArrow"}],staticClass:"input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.withArrow)?t._i(t.withArrow,null)>-1:t.withArrow},on:{change:function(e){var r=t.withArrow,n=e.target,i=!!n.checked;if(Array.isArray(r)){var o=t._i(r,null);n.checked?o<0&&(t.withArrow=r.concat([null])):o>-1&&(t.withArrow=r.slice(0,o).concat(r.slice(o+1)))}else t.withArrow=i}}}),t._v("Arrow ")]),t._v(" "),r("br"),t._v(" "),r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.useNativeButton,expression:"useNativeButton"}],staticClass:"input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.useNativeButton)?t._i(t.useNativeButton,null)>-1:t.useNativeButton},on:{change:[function(e){var r=t.useNativeButton,n=e.target,i=!!n.checked;if(Array.isArray(r)){var o=t._i(r,null);n.checked?o<0&&(t.useNativeButton=r.concat([null])):o>-1&&(t.useNativeButton=r.slice(0,o).concat(r.slice(o+1)))}else t.useNativeButton=i},function(e){return t.$emit("update:useNativeButton",e.target.checked)}]}}),t._v("Native Button\n    ")])])],1)}),[],!1,null,"2af816d4",null);e.default=l.exports},274:function(t,e,r){"use strict";r.r(e);r(18),r(13),r(17);var n=r(3);function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var o={functional:!0,props:{native:{type:Boolean,default:!1}},render:function(t,e){return t("button",function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},e.data,{class:e.props.native?null:"kpop-button"}),e.children)}},a=(r(260),r(1)),s=Object(a.a)(o,void 0,void 0,!1,null,"58295bd8",null);e.default=s.exports},321:function(t,e,r){"use strict";var n=r(261);r.n(n).a},365:function(t,e,r){"use strict";r.r(e);var n=r(272),i=r(274),o=(r(225),{components:{Trigger:i.default,Settings:n.default},data:function(){return{useNativeButton:!1,triggerWidth:250,popoverProps:{offset:0,overflowContainer:"scrollParent",placement:"bottom",flips:!0,withArrow:!0,theme:"clean"}}},computed:{triggerStyle:function(){return{width:"".concat(this.triggerWidth,"px")}}},methods:{show:function(){this.$refs.popover.show()},hide:function(){this.$refs.popover.hide()},toggle:function(){this.$refs.popover.toggle()},scrollTriggerIntoView:function(){var t=this.$refs.scrollcontainer,e=this.$refs.contentview,r=.5*(e.clientHeight-t.clientHeight)+50,n=.5*(e.clientWidth-t.clientWidth);t.scrollTop=r,t.scrollLeft=n}},mounted:function(){this.$forceUpdate(),requestAnimationFrame(this.scrollTriggerIntoView)}}),a=(r(321),r(1)),s=Object(a.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Settings",{on:{changed:function(e){t.popoverProps=e},"update:useNativeButton":function(e){t.useNativeButton=e},"update:triggerWidth":function(e){t.triggerWidth=e}}}),t._v(" "),r("div",{ref:"scrollcontainer",staticClass:"outer"},[r("div",{ref:"contentview",staticClass:"inner"},[r("Trigger",{ref:"button",style:t.triggerStyle,attrs:{native:t.useNativeButton},on:{click:t.toggle}},[t._v("Show Popover")]),t._v(" "),r("CPopover",t._b({ref:"popover",attrs:{trigger:"$refs.button"},scopedSlots:t._u([{key:"default",fn:function(){return[r("div",{staticClass:"title"},[t._v("Sample Popover Title")]),t._v(" "),r("div",{staticClass:"body"},[r("p",{staticClass:"text"},[t._v("Not like the brazen giant of Greek fame,")]),t._v(" "),r("p",{staticClass:"text"},[t._v("With conquering limbs astride from land to land.")])])]},proxy:!0}])},"CPopover",t.popoverProps,!1))],1)])],1)}),[],!1,null,"300a69a7",null);e.default=s.exports}}]);