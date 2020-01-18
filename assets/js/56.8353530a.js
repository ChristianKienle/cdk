(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{386:function(t,a,e){"use strict";e.r(a);var s=e(1),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"link"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#link"}},[t._v("#")]),t._v(" Link")]),t._v(" "),e("p",[t._v("A "),e("em",[t._v("Link")]),t._v("-component with sensible defaults and "),e("a",{attrs:{href:"https://router.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue Router"),e("OutboundLink")],1),t._v(" integration.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("API")]),t._v(" "),e("p",[t._v("The "),e("em",[t._v("Link")]),t._v("-component has a dedicated "),e("a",{attrs:{href:"./../../api/link"}},[t._v("API documentation")]),t._v(".")])]),t._v(" "),e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" @vue-cdk/link --save\n")])])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("Weak Dependencies")]),t._v(" "),e("p",[t._v("If you want to use "),e("code",[t._v("@vue-cdk/link")]),t._v("'s Vue Router integration make sure to also install and properly configure "),e("a",{attrs:{href:"https://router.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue Router"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("h2",{attrs:{id:"rationale-features"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rationale-features"}},[t._v("#")]),t._v(" Rationale & Features")]),t._v(" "),e("p",[t._v("At first, a link-component might seem silly. However, there are things that you can do wrong – even with seemingly trivial things. "),e("code",[t._v("@vue-cdk/link")]),t._v(" tries to make it easy to do the right things.")]),t._v(" "),e("h3",{attrs:{id:"security-issues"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#security-issues"}},[t._v("#")]),t._v(" Security Issues")]),t._v(" "),e("p",[t._v("Consider the following example:")]),t._v(" "),e("div",{staticClass:"language-markup extra-class"},[e("pre",{pre:!0,attrs:{class:"language-markup"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://example.org"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  Our Sponsor\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("This renders a native "),e("em",[t._v("anchor")]),t._v("-element and from a pure functionality perspective the link will "),e("em",[t._v("work")]),t._v(". Linking to external and potentially untrusted sites can be a security issue. One security issue that is relevant for the example above is called "),e("em",[e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Tabnabbing",target:"_blank",rel:"noopener noreferrer"}},[t._v("tabnabbing"),e("OutboundLink")],1)]),t._v(".")]),t._v(" "),e("p",[t._v("There are also other side issues like a sub-optimal performance for external link that don't receive special are.")]),t._v(" "),e("p",[e("code",[t._v("@vue-cdk/link")]),t._v(" fixes this by attaching special attributes to external links. The attributes that are attached to external links are:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Attribute")]),t._v(" "),e("th",[t._v("Value")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("target")])]),t._v(" "),e("td",[e("code",[t._v("_blank")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("rel")])]),t._v(" "),e("td",[e("code",[t._v("noopener noreferrer")])])])])]),t._v(" "),e("p",[t._v("External links are automatically detected by "),e("code",[t._v("@vue-cdk/link")]),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"vue-router-integration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-router-integration"}},[t._v("#")]),t._v(" Vue Router Integration")]),t._v(" "),e("p",[t._v("If you are using "),e("code",[t._v("href")]),t._v(" then internal links will receive no special handling:")]),t._v(" "),e("div",{staticClass:"language-markup extra-class"},[e("pre",{pre:!0,attrs:{class:"language-markup"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("CLink")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/my/other/page"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  My other Page\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("CLink")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("This will render a normal anchor-element without any special handling.")]),t._v(" "),e("p",[e("code",[t._v("Link")]),t._v(" also has a "),e("code",[t._v("to")]),t._v("-prop. If set, then "),e("code",[t._v("Link")]),t._v(" will render a "),e("code",[t._v("RouterLink")]),t._v(". This allows you to use the same component for internal–, external– and router–links:")]),t._v(" "),e("div",{staticClass:"language-markup extra-class"},[e("pre",{pre:!0,attrs:{class:"language-markup"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("CLink")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("to")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/my/route"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  Router Link to /my/route\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("CLink")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("h2",{attrs:{id:"demo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#demo"}},[t._v("#")]),t._v(" Demo")]),t._v(" "),e("p",[t._v("Nothing special here – just two examples:")]),t._v(" "),e("h3",{attrs:{id:"internal-link"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#internal-link"}},[t._v("#")]),t._v(" Internal Link")]),t._v(" "),e("Demo",{attrs:{for:"link/internal"}}),t._v(" "),e("h3",{attrs:{id:"external-link"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#external-link"}},[t._v("#")]),t._v(" External Link")]),t._v(" "),e("Demo",{attrs:{for:"link/external"}})],1)}),[],!1,null,null,null);a.default=n.exports}}]);