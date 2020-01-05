(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{415:function(t,e,o){"use strict";o.r(e);var n=o(1),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"api-reference"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#api-reference"}},[t._v("#")]),t._v(" API Reference")]),t._v(" "),o("h2",{attrs:{id:"list"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#list"}},[t._v("#")]),t._v(" List "),o("ComponentApiButton",{staticStyle:{"margin-left":"5px"},attrs:{for:"List"}})],1),t._v(" "),o("p",[t._v("The "),o("code",[t._v("List")]),t._v(" component allows you to render an indefinetely long list of items. Under the hood "),o("code",[t._v("List")]),t._v(" uses "),o("code",[t._v("InifiniteScroll")]),t._v(". This means that much of what applies to "),o("code",[t._v("InifiniteScroll")]),t._v(" also applies to "),o("code",[t._v("List")]),t._v(". You can think of "),o("code",[t._v("List´ as a high–level version of")]),t._v("InifiniteScroll`.")]),t._v(" "),o("p",[o("ComponentApiButton",{staticStyle:{transform:"scale(1.5)"},attrs:{for:"List"}})],1),t._v(" "),o("h2",{attrs:{id:"listitem"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#listitem"}},[t._v("#")]),t._v(" ListItem "),o("ComponentApiButton",{staticStyle:{"margin-left":"5px"},attrs:{for:"ListItem"}})],1),t._v(" "),o("p",[t._v("The "),o("code",[t._v("ListItem")]),t._v(" component is used within the "),o("code",[t._v("List")]),t._v(" component to render a single item.")]),t._v(" "),o("p",[o("ComponentApiButton",{staticStyle:{transform:"scale(1.5)"},attrs:{for:"ListItem"}})],1),t._v(" "),o("h2",{attrs:{id:"infinitescroll"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#infinitescroll"}},[t._v("#")]),t._v(" InfiniteScroll "),o("ComponentApiButton",{staticStyle:{"margin-left":"5px"},attrs:{for:"InfiniteScroll"}})],1),t._v(" "),o("p",[t._v("The "),o("code",[t._v("InfiniteScroll")]),t._v(" component expects you to do tell it two things at a minimum:")]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("What to render:")]),t._v(": You do this by setting the "),o("code",[t._v("items")]),t._v("-prop. The items should be an array of objects with an "),o("code",[t._v("id")]),t._v("-field.")]),t._v(" "),o("li",[o("strong",[t._v("How to render a single item:")]),t._v(" You do this by providing the scoped default slot. By default, "),o("code",[t._v("InfiniteScroll")]),t._v(" expects the items-array to contain objects that have a least an "),o("code",[t._v("id")]),t._v("-property. You can override this by setting the "),o("code",[t._v("keyField")]),t._v("-prop.")])]),t._v(" "),o("p",[o("strong",[t._v("Slot Props")])]),t._v(" "),o("p",[t._v("The default slot you have to provide receives several slot-props:")]),t._v(" "),o("ul",[o("li",[o("code",[t._v("item")]),t._v(": The item that should be rendered")]),t._v(" "),o("li",[o("code",[t._v("index")]),t._v(": The index (type: "),o("code",[t._v("Number")]),t._v(") of the item")]),t._v(" "),o("li",[o("code",[t._v("active")]),t._v(": A "),o("code",[t._v("boolean")]),t._v(" value that is "),o("code",[t._v("true")]),t._v(" the item is currently active. An item is considered active when it is currently beeing positioned by the "),o("a",{attrs:{href:"https://github.com/Akryum/vue-virtual-scroller/",target:"_blank",rel:"noopener noreferrer"}},[t._v("virtualization library"),o("OutboundLink")],1),t._v(" that is used under the hood.")])]),t._v(" "),o("p",[o("ComponentApiButton",{staticStyle:{transform:"scale(1.5)"},attrs:{for:"InfiniteScroll"}})],1),t._v(" "),o("h2",{attrs:{id:"infinitescrollitem"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#infinitescrollitem"}},[t._v("#")]),t._v(" InfiniteScrollItem "),o("ComponentApiButton",{staticStyle:{"margin-left":"5px"},attrs:{for:"InfiniteScrollItem"}})],1),t._v(" "),o("p",[t._v("The "),o("code",[t._v("InfiniteScrollItem")]),t._v(" component is used within the "),o("code",[t._v("InfiniteScroll")]),t._v(" component to render a single item.")]),t._v(" "),o("p",[o("ComponentApiButton",{staticStyle:{transform:"scale(1.5)"},attrs:{for:"InfiniteScrollItem"}})],1),t._v(" "),o("h2",{attrs:{id:"scrollcontainer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#scrollcontainer"}},[t._v("#")]),t._v(" ScrollContainer "),o("ComponentApiButton",{staticStyle:{"margin-left":"5px"},attrs:{for:"ScrollContainer"}})],1),t._v(" "),o("p",[t._v("A component to conveniently create scrolling HTML elements.")]),t._v(" "),o("p",[o("ComponentApiButton",{staticStyle:{transform:"scale(1.5)"},attrs:{for:"ScrollContainer"}})],1),t._v(" "),o("h2",{attrs:{id:"link"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#link"}},[t._v("#")]),t._v(" Link "),o("ComponentApiButton",{staticStyle:{"margin-left":"5px"},attrs:{for:"Link"}})],1),t._v(" "),o("p",[t._v("A component that can be used to render links to internal routes or external resources. Depends on "),o("a",{attrs:{href:"https://router.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue Router"),o("OutboundLink")],1)]),t._v(" "),o("p",[o("ComponentApiButton",{staticStyle:{transform:"scale(1.5)"},attrs:{for:"Link"}})],1),t._v(" "),o("h2",{attrs:{id:"popover"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#popover"}},[t._v("#")]),t._v(" Popover "),o("ComponentApiButton",{staticStyle:{"margin-left":"5px"},attrs:{for:"Popover"}})],1),t._v(" "),o("p",[t._v("You can use the "),o("code",[t._v("Popover")]),t._v(" component to render popovers with any kind of content.")]),t._v(" "),o("p",[o("ComponentApiButton",{staticStyle:{transform:"scale(1.5)"},attrs:{for:"Popover"}})],1),t._v(" "),o("h2",{attrs:{id:"clientonly"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#clientonly"}},[t._v("#")]),t._v(" ClientOnly "),o("ComponentApiButton",{staticStyle:{"margin-left":"5px"},attrs:{for:"ClientOnly"}})],1),t._v(" "),o("p",[t._v("A component to wrap non SSR friendly components/markup. You can provide a placeholder text that will be shown until the component has been mounted. Alternatively you can also provide a placeholder-slot. The slot is useful if you want to render something other than text – like a loading indicator.")]),t._v(" "),o("p",[o("ComponentApiButton",{staticStyle:{transform:"scale(1.5)"},attrs:{for:"ClientOnly"}})],1),t._v(" "),o("h2",{attrs:{id:"focustrap"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#focustrap"}},[t._v("#")]),t._v(" FocusTrap "),o("ComponentApiButton",{staticStyle:{"margin-left":"5px"},attrs:{for:"FocusTrap"}})],1),t._v(" "),o("p",[t._v("A component that creates a focus trap around the wrapped element/component. By default a focus trap is deactive. A deactivated focus trap is not doing anything – except rendering its default slot. You activate a focus trap by setting the "),o("code",[t._v("active")]),t._v("-prop to "),o("code",[t._v("true")]),t._v(". You may deactivate the focus tras at any time by setting the value of "),o("code",[t._v("active")]),t._v(" to "),o("code",[t._v("false")]),t._v(".")]),t._v(" "),o("p",[o("ComponentApiButton",{staticStyle:{transform:"scale(1.5)"},attrs:{for:"FocusTrap"}})],1)])}),[],!1,null,null,null);e.default=r.exports}}]);