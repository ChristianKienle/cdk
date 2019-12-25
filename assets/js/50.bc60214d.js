(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{340:function(e,t,a){"use strict";a.r(t);var s=a(1),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"match-media"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#match-media"}},[e._v("#")]),e._v(" Match Media")]),e._v(" "),a("p",[a("strong",[e._v("Table of Contents")])]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#installation"}},[e._v("Installation")])]),a("li",[a("a",{attrs:{href:"#usage"}},[e._v("Usage")])]),a("li",[a("a",{attrs:{href:"#examples"}},[e._v("Examples")]),a("ul",[a("li",[a("a",{attrs:{href:"#hello-world-using-the-mixin"}},[e._v("Hello World: Using the Mixin")])]),a("li",[a("a",{attrs:{href:"#using-the-injected-reactive-object"}},[e._v("Using the injected reactive Object")])])])]),a("li",[a("a",{attrs:{href:"#misc"}},[e._v("Misc")]),a("ul",[a("li",[a("a",{attrs:{href:"#vcdkmq-all"}},[e._v("vcdkMq.$all")])]),a("li",[a("a",{attrs:{href:"#origin-and-credits"}},[e._v("Origin and Credits")])])])])])]),a("p"),e._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" @vue-cdk/match-media --save\n")])])]),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("p",[e._v("You use "),a("code",[e._v("@vue-cdk/match-media")]),e._v(" like this:")]),e._v(" "),a("ul",[a("li",[e._v("You import the mixin from "),a("code",[e._v("@vue-cdk/match-media")]),e._v(". The mixin is the default export of that package.")]),e._v(" "),a("li",[e._v("You add the mixin to the "),a("code",[e._v("mixins")]),e._v("–option of your component. This enables the match-media capbailities for that specific component.")]),e._v(" "),a("li",[e._v("Use the "),a("code",[e._v("vcdkMediaQueriesByName")]),e._v("–option of your component to define names media queries.")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("If you are a bit confused by the steps outlined above please take a look at the examples below.")])]),e._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("h3",{attrs:{id:"hello-world-using-the-mixin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hello-world-using-the-mixin"}},[e._v("#")]),e._v(" Hello World: Using the Mixin")]),e._v(" "),a("p",[e._v("This example imports and uses the mixin. It also uses "),a("code",[e._v("vcdkMediaQueriesByName")]),e._v(" to define three queries for three different size classes ("),a("code",[e._v("mini")]),e._v(", "),a("code",[e._v("compact")]),e._v(" and "),a("code",[e._v("regular")]),e._v("). Those queries are arbitrary. You may use any valid CSS media query as the value. The mixin exposes a reactive object on your component called "),a("code",[e._v("vcdkMq")]),e._v(". This object has a key for each of your queries. The value of each entry in "),a("code",[e._v("vcdkMq")]),e._v(" is either "),a("code",[e._v("true")]),e._v(" (query matches) or "),a("code",[e._v("false")]),e._v(" (query does not match).")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Resize your browser window to see the effect.")])]),e._v(" "),a("Demo",{attrs:{for:"match-media/default"}}),e._v(" "),a("h3",{attrs:{id:"using-the-injected-reactive-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-injected-reactive-object"}},[e._v("#")]),e._v(" Using the injected reactive Object")]),e._v(" "),a("p",[e._v("You may have noticed that "),a("code",[e._v("vcdkMq")]),e._v(" is only available on the instance that actually uses the mixin. If you want to make "),a("code",[e._v("vcdkMq")]),e._v(" available to your child components you can do so manually. However, you should know that "),a("code",[e._v("@vue-cdk/match-media")]),e._v(" also provides the object to all of it's child components by default. So in theroy there is no need to "),a("em",[e._v("manually")]),e._v(" make "),a("code",[e._v("vcdkMq")]),e._v(" available to your child components. Just use "),a("code",[e._v("inject")]),e._v(" like so:")]),e._v(" "),a("Demo",{attrs:{for:"match-media/inject"}}),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("`Consume` can be anything")]),e._v(" "),a("p",[e._v("In the example above "),a("code",[e._v("Consume")]),e._v(" is just a placeholder for an arbitrary child component. You may not even control or know about the child componet.")])]),e._v(" "),a("h2",{attrs:{id:"misc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#misc"}},[e._v("#")]),e._v(" Misc")]),e._v(" "),a("h3",{attrs:{id:"vcdkmq-all"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vcdkmq-all"}},[e._v("#")]),e._v(" "),a("code",[e._v("vcdkMq.$all")])]),e._v(" "),a("p",[e._v("The reactive object "),a("code",[e._v("vcdkMq")]),e._v(" has a specia property called "),a("code",[e._v("$all")]),e._v(". The value of "),a("code",[e._v("vcdkMq.$all")]),e._v(" is an array of query names that currently match.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("`vcdkMq.$all` is sorted")]),e._v(" "),a("p",[a("code",[e._v("vcdkMq.$all")]),e._v(" is sorted")])]),e._v(" "),a("h3",{attrs:{id:"origin-and-credits"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#origin-and-credits"}},[e._v("#")]),e._v(" Origin and Credits")]),e._v(" "),a("p",[a("code",[e._v("@vue-cdk/match-media")]),e._v(" was heavily inspired by "),a("a",{attrs:{href:"https://github.com/drenglish/vue-match-media",target:"_blank",rel:"noopener noreferrer"}},[e._v("drenglish/vue-match-media"),a("OutboundLink")],1),e._v(". The main difference between those two is that "),a("code",[e._v("@vue-cdk/match-media")]),e._v(" takes a slighlty more conservative approach: "),a("a",{attrs:{href:"https://github.com/drenglish/vue-match-media",target:"_blank",rel:"noopener noreferrer"}},[e._v("drenglish/vue-match-media"),a("OutboundLink")],1),e._v(" is doing a lot of magic out of the box that "),a("code",[e._v("@vue-cdk/match-media")]),e._v(" does not.")])],1)}),[],!1,null,null,null);t.default=i.exports}}]);