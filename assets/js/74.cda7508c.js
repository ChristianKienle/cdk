(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{525:function(t,a,e){"use strict";e.r(a);var s=e(1),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"focus-trap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#focus-trap"}},[t._v("#")]),t._v(" Focus Trap")]),t._v(" "),e("p",[t._v("The focus trap package makes it easy to trap the focus within a component/element. "),e("code",[t._v("@vue-cdk/focus-trap")]),t._v(" is a wrapper around the "),e("a",{attrs:{href:"https://github.com/davidtheclark/focus-trap",target:"_blank",rel:"noopener noreferrer"}},[t._v("focus-trap package from @davidtheclark"),e("OutboundLink")],1),t._v(". The main motivation of this wrapper was to make it more convenient for Vue developers.")]),t._v(" "),e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),e("p",[t._v("The main objective of "),e("code",[t._v("@vue-cdk/focus-trap")]),t._v(" is to make focus trapping more convenient. In order to serve different needs "),e("code",[t._v("@vue-cdk/focus-trap")]),t._v(" comes with both, high– and low–level ways to accomplish focus trapping.")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("High Level Focus Trap Component:")]),t._v(" "),e("code",[t._v("@vue-cdk/focus-trap")]),t._v(" contains a component called "),e("code",[t._v("CFocusTrap")]),t._v(". You can use this component to trap the focus within a wrapped container element or component.")]),t._v(" "),e("li",[e("strong",[t._v("Low Level Utility Function:")]),t._v(" "),e("code",[t._v("@vue-cdk/focus-trap")]),t._v(" also exports a function that allows you to create traps manually.")])]),t._v(" "),e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" @vue-cdk/focus-trap --save\n")])])]),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),e("h3",{attrs:{id:"using-the-plugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-the-plugin"}},[t._v("#")]),t._v(" Using the Plugin")]),t._v(" "),e("p",[t._v("After installing "),e("code",[t._v("@vue-cdk/focus-trap")]),t._v(" you may simply use the Vue plugin:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" FocusTrap "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vue-cdk/focus-trap'")]),t._v("\nVue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FocusTrap "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*, optional options */")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("The plugin globally registers a component that can be used to create focus traps. This component is called "),e("code",[t._v("CFocusTrap")]),t._v(". Please refer to the examples below to see how it is used.")]),t._v(" "),e("h3",{attrs:{id:"using-the-low-level-utilities"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-the-low-level-utilities"}},[t._v("#")]),t._v(" Using the Low–Level Utilities")]),t._v(" "),e("p",[e("code",[t._v("createFocusTrap")]),t._v(" is the main entry point to the low-level API. The basic usage goes like this:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createFocusTrap "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vue-cdk/focus-trap'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// `vm` is an instance of a Vue component")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" trap "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createFocusTrap")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntrap"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("activate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// later… trap.deactivate()")]),t._v("\n")])])]),e("p",[e("code",[t._v("createFocusTrap")]),t._v(" expects an instance of a Vue component you would like to trap the focus in. This function returns a "),e("code",[t._v("FocusTrap")]),t._v("-object that you should strongly reference – for example by assinging it to a property:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("methods"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("enableTrap")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("trap "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createFocusTrap")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// now you can use the trap")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[e("code",[t._v("FocusTrap")]),t._v(" exposes two methods that you can use to activate and deactivate the trap on the Vue instance you intially passed to "),e("code",[t._v("createFocusTrap")]),t._v(".")]),t._v(" "),e("h4",{attrs:{id:"activate-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#activate-options"}},[t._v("#")]),t._v(" "),e("code",[t._v("activate(options)")])]),t._v(" "),e("p",[t._v("Activates the focus trap. The options are optional and have to following shape:")]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("_ActivateOptions")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" deactivation"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Deactivation\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// A function thas is called when the trap is deactivated.")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onDeactivate")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The element that should be focused initially. The focus-trap package accepts an element selector or an HTMLElement. Vue's $el is only typed Element. This is the reason why 'our' initialFocus (the one below) is typed Element – to make it more convenient for Vue developers. Internally we simply force cast to HTMLElement. Hope hope hope.")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" initialFocus"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Element\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Deactivation")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'on-esc'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// default")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'manual'")]),t._v("\n")])])]),e("h4",{attrs:{id:"deactivate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deactivate"}},[t._v("#")]),t._v(" "),e("code",[t._v("deactivate()")])]),t._v(" "),e("p",[t._v("Deactivates the focus trap.")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("You should always deactivate a previously activated trap. The last moment you can safely deactivate a trap is in "),e("a",{attrs:{href:"https://vuejs.org/v2/api/#beforeDestroy",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("beforeDestroy")]),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("h3",{attrs:{id:"using-the-high-level-vue-component"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-the-high-level-vue-component"}},[t._v("#")]),t._v(" Using the (High-Level) Vue Component")]),t._v(" "),e("p",[t._v("The low-level API should only be used in case you really need it. Using the high-level API is more convenient. You can use it like this:")]),t._v(" "),e("Demo",{attrs:{for:"focus-trap/component"}}),t._v(" "),e("h2",{attrs:{id:"more-examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#more-examples"}},[t._v("#")]),t._v(" More Examples")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("On iOS the user can escape an active trap by tapping on the down arrow/up arrow buttons in Safari. This is a "),e("a",{attrs:{href:"https://github.com/twbs/bootstrap/issues/26770",target:"_blank",rel:"noopener noreferrer"}},[t._v("known issue"),e("OutboundLink")],1),t._v(". Safari does not emit any events when tappingon the down arrow and/or up arrow. A future modal component should fix that issue though.")])]),t._v(" "),e("h3",{attrs:{id:"using-cfocustrap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-cfocustrap"}},[t._v("#")]),t._v(" Using "),e("code",[t._v("CFocusTrap")])]),t._v(" "),e("h3",{attrs:{id:"hello-world"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hello-world"}},[t._v("#")]),t._v(" Hello World")]),t._v(" "),e("Demo",{attrs:{for:"focus-trap/default"}}),t._v(" "),e("h3",{attrs:{id:"nested-focus-trapping"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nested-focus-trapping"}},[t._v("#")]),t._v(" Nested Focus Trapping")]),t._v(" "),e("Demo",{attrs:{for:"focus-trap/nested"}}),t._v(" "),e("h2",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"./../../api/focus-trap"}},[t._v("Focus Trap")])])])],1)}),[],!1,null,null,null);a.default=n.exports}}]);