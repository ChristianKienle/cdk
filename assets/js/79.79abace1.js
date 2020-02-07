(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{472:function(e,o,t){"use strict";t.r(o);var s=t(2),a=Object(s.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"popover"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#popover"}},[e._v("#")]),e._v(" Popover")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("API")]),e._v(" "),t("p",[e._v("The "),t("em",[e._v("Popover")]),e._v("-component has a dedicated "),t("a",{attrs:{href:"./../../api/popover"}},[e._v("API documentation")]),e._v(".")])]),e._v(" "),t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" @vue-cdk/popover --save\n")])])]),t("h2",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("p",[t("code",[e._v("@vue-cdk/popover")]),e._v(" exposes a "),t("em",[e._v("Vue plugin")]),e._v(" that you can use like this:")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" Vue "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'vue'")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" Popover "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'@vue-cdk/popover'")]),e._v("\n\nVue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("use")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Popover"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),t("p",[e._v("This will globally register the following components:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("CPopover")]),e._v(": Use this component to specify "),t("strong",[e._v("how")]),e._v(" a popover should be rendered. Some of the available props are:\n"),t("ul",[t("li",[t("code",[e._v("withArrow")]),e._v(": If set to "),t("code",[e._v("true")]),e._v(", the popover will also render an arrow.")]),e._v(" "),t("li",[t("code",[e._v("theme")]),e._v(": Set a theme for your popover. You can create custom themes.")]),e._v(" "),t("li",[t("code",[e._v("placement")]),e._v(": How to place the actual popover.")])])]),e._v(" "),t("li",[t("code",[e._v("CPopoverContent")]),e._v(": Use this component to specify "),t("strong",[e._v("what")]),e._v(" the popover should render. You use this component within "),t("code",[e._v("CPopover")]),e._v(". The element/component wrapped with "),t("code",[e._v("CPopoverContent")]),e._v(" will appear inside the popover.")]),e._v(" "),t("li",[t("code",[e._v("CPopoverArrow")]),e._v(": Use this component to customize the arrow. You usually do not need this component since the arrow can be customized by several props and themes. If you need to render a custom arrow use this component inside the "),t("code",[e._v("arrow")]),e._v("-slot of "),t("code",[e._v("CPopoverContent")]),e._v(".")])]),e._v(" "),t("h2",{attrs:{id:"guide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#guide"}},[e._v("#")]),e._v(" Guide")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("Some features of "),t("code",[e._v("CPopover")]),e._v(" have been removed temporary. Currently those features are not possible with the latest release of Poppver.JS. The features will be added back once Popper.JS supports those features again.")])]),e._v(" "),t("p",[e._v("In a typical scenario you would have some kind of "),t("em",[e._v("trigger")]),e._v("–element (a button, a link, …) that, when clicked will toggle the popover. "),t("code",[e._v("CPopover")]),e._v(" expects you to render such a "),t("em",[e._v("trigger")]),e._v(" yourself.")]),e._v(" "),t("p",[e._v("The following example shows how to render a button that toggles the visibility of a popover.")]),e._v(" "),t("Demo",{attrs:{for:"popover/prop"}}),e._v(" "),t("p",[e._v("You can omit "),t("code",[e._v("theme")]),e._v(" (or set it to "),t("code",[e._v("null")]),e._v(") to disable all styling.")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("CSS Required")]),e._v(" "),t("p",[e._v("Themes only work with the corresponding styles. You can import individual themes or all themes by importing "),t("code",[e._v("@vue-cdk/popover/themes/index.css")]),e._v(".")])]),e._v(" "),t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),t("h3",{attrs:{id:"hello-world"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hello-world"}},[e._v("#")]),e._v(" Hello World")]),e._v(" "),t("p",[e._v("This is the a classical "),t("em",[e._v("Hello World")]),e._v(" example. You control the visibility of the popover by simply setting "),t("code",[e._v("visible")]),e._v(" to "),t("code",[e._v("true")]),e._v(" or "),t("code",[e._v("false")]),e._v(". You have to tell "),t("code",[e._v("CPopover")]),e._v(" where it should attach itself to. This is done by using "),t("code",[e._v("trigger")]),e._v(" and setting it to "),t("code",[e._v("$refs.button")]),e._v(". By doing so "),t("code",[e._v("CPopover")]),e._v(" will search for a "),t("code",[e._v("ref")]),e._v(" called "),t("code",[e._v("button")]),e._v(".")]),e._v(" "),t("Demo",{attrs:{for:"popover/prop"}}),e._v(" "),t("h3",{attrs:{id:"manually-showing-the-popover"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#manually-showing-the-popover"}},[e._v("#")]),e._v(" Manually showing the Popover")]),e._v(" "),t("p",[e._v("Instead of using the "),t("code",[e._v("visible")]),e._v("–prop to show and/or hide the popover you can manually change the visibility. You get a reference to the popover and call its methods ("),t("code",[e._v("show()")]),e._v("/"),t("code",[e._v("hide()")]),e._v("/"),t("code",[e._v("toggle()")]),e._v(") directly.")]),e._v(" "),t("Demo",{attrs:{for:"popover/hello-world"}}),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("The example above is not using any theme or custom styles. For this reason it looks like a bit boring. Most of the following examples are using a theme.")])]),e._v(" "),t("h3",{attrs:{id:"close-on-click-inside"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#close-on-click-inside"}},[e._v("#")]),e._v(" Close on Click Inside")]),e._v(" "),t("p",[e._v("This example shows you how to add a "),t("em",[e._v("close")]),e._v("-button inside the popover.")]),e._v(" "),t("Demo",{attrs:{for:"popover/click-inside"}}),e._v(" "),t("h3",{attrs:{id:"show-on-hover"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-on-hover"}},[e._v("#")]),e._v(" Show on Hover")]),e._v(" "),t("p",[e._v("The popover component is very flexible: This example shows how to show the popover on "),t("code",[e._v("mouseenter")]),e._v(" and "),t("code",[e._v("mouseleave")]),e._v(". The result is a very simple tooltip.")]),e._v(" "),t("Demo",{attrs:{for:"popover/custom-trigger"}}),e._v(" "),t("h3",{attrs:{id:"scrollable-popover-body"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scrollable-popover-body"}},[e._v("#")]),e._v(" Scrollable Popover Body")]),e._v(" "),t("p",[e._v("If you have a popover with a (potentially) large body then you might want to make it scrollable. You do that by setting custom styles on the popover's body that constraint it's size and adjust it's overflow settings.")]),e._v(" "),t("p",[e._v("To make this work you have to apply custom styles to your "),t("code",[e._v("CPopoverContent")]),e._v(".")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("IMPORTANT")]),e._v(" "),t("p",[e._v("It is probably a good idea to also disable flipping by setting "),t("code",[e._v("flips")]),e._v(" to "),t("code",[e._v("false")]),e._v(".")])]),e._v(" "),t("Demo",{attrs:{for:"popover/scrollable-body"}}),e._v(" "),t("h3",{attrs:{id:"themes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#themes"}},[e._v("#")]),e._v(" Themes")]),e._v(" "),t("h4",{attrs:{id:"clean"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clean"}},[e._v("#")]),e._v(" Clean")]),e._v(" "),t("Demo",{attrs:{for:"popover/theme/clean"}}),e._v(" "),t("h4",{attrs:{id:"dark"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dark"}},[e._v("#")]),e._v(" Dark")]),e._v(" "),t("Demo",{attrs:{for:"popover/theme/dark"}}),e._v(" "),t("h4",{attrs:{id:"big-arrow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#big-arrow"}},[e._v("#")]),e._v(" Big Arrow")]),e._v(" "),t("Demo",{attrs:{for:"popover/theme/big-arrow"}}),e._v(" "),t("h2",{attrs:{id:"api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[e._v("#")]),e._v(" API")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"./../../api/popover"}},[e._v("Popover")])])])],1)}),[],!1,null,null,null);o.default=a.exports}}]);