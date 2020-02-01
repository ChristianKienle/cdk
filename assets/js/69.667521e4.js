(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{430:function(t,s,e){"use strict";e.r(s);var a=e(2),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"infinite-scroll"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#infinite-scroll"}},[t._v("#")]),t._v(" Infinite Scroll")]),t._v(" "),e("p",[t._v("The "),e("em",[t._v("Infinite Scroll")]),t._v(" component can be used to render an indefintely scrolling list of items.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("API")]),t._v(" "),e("p",[t._v("The "),e("em",[t._v("Infinite Scroll")]),t._v("-component has a dedicated "),e("a",{attrs:{href:"./../../api/infinite-scroll"}},[t._v("API documentation")]),t._v(".")])]),t._v(" "),e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" @vue-cdk/infinite-scroll --save\n")])])]),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),e("p",[t._v("As most "),e("code",[t._v("@vue-cdk")]),t._v("–packages, "),e("code",[t._v("@vue-cdk/infinite-scroll")]),t._v(" exposes a "),e("em",[t._v("Vue plugin")]),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"using-the-plugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-the-plugin"}},[t._v("#")]),t._v(" Using the Plugin")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" InfiniteScroll "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vue-cdk/infinite-scroll'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vue-cdk/infinite-scroll/style/index.css'")]),t._v("\n\nVue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("InfiniteScroll"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[e("code",[t._v("@vue-cdk/infinite-scroll")]),t._v(" globally registers two components:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"./../../api/infinite-scroll"}},[t._v("Infinite Scroll")]),t._v(": A component that renders an array of items.")]),t._v(" "),e("li",[e("a",{attrs:{href:"./../../api/infinite-scroll-item"}},[t._v("Infinite Scroll Item")]),t._v(": You have to tell "),e("a",{attrs:{href:"./../../api/infinite-scroll"}},[t._v("Infinite Scroll")]),t._v(" how to render an individual item. You do this by rendering a "),e("a",{attrs:{href:"./../../api/infinite-scroll-item"}},[e("em",[t._v("Infinite Scroll Item")])]),t._v(" in the default-(scoped)-slot in your "),e("a",{attrs:{href:"./../../api/infinite-scroll"}},[t._v("Infinite Scroll")]),t._v(".")])]),t._v(" "),e("h3",{attrs:{id:"using-the-components-directly"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-the-components-directly"}},[t._v("#")]),t._v(" Using the Components directly")]),t._v(" "),e("p",[t._v("If you don't like the globally registered components that come with "),e("code",[t._v("@vue-cdk/infinite-scroll")]),t._v(" you can also import the components directly.")]),t._v(" "),e("div",{staticClass:"language-markup extra-class"},[e("pre",{pre:!0,attrs:{class:"language-markup"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token script"}},[e("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  InfiniteScroll"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  InfiniteScrollItem\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vue-cdk/infinite-scroll'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MyComponent'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  components"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    InfiniteScroll"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    InfiniteScrollItem\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("CInfiniteScroll")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":items")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("[{id: '1'}]"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("#default")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{item}"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("CInfiniteScrollItem")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":item")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("item"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{item}}"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("CInfiniteScrollItem")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("CInfiniteScroll")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("h3",{attrs:{id:"importing-the-styles"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#importing-the-styles"}},[t._v("#")]),t._v(" Importing the Styles")]),t._v(" "),e("p",[t._v("In order to properly work, "),e("em",[t._v("Infinite Scroll")]),t._v(" requires some minimal styles that you should import. If you are using "),e("em",[t._v("Vue Loader")]),t._v(" you can simply import it in any "),e("code",[t._v("*.vue")]),t._v(" or "),e("code",[t._v(".js")]),t._v(" file:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vue-cdk/infinite-scroll/style/index.css'")]),t._v("\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("The CSS classes defined in that file are keeps to a minimum and don't introduce any visible styling. "),e("strong",[t._v("It is up to you to make things look nice.")])])]),t._v(" "),e("h2",{attrs:{id:"features"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[t._v("#")]),t._v(" Features")]),t._v(" "),e("p",[e("em",[t._v("Infinite Scroll")]),t._v(" has three main features that make it useful:")]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("Renders only what is visible:")]),t._v(" Imagine you have a list of "),e("em",[t._v("1000")]),t._v(" items. It would be inefficient to render all "),e("em",[t._v("1000")]),t._v(" items even though only (for example) 20 are visible at the same time. By only rendering the currently visible items "),e("em",[t._v("Infinite Scroll")]),t._v(" can scroll through thousands of them with ease.")]),t._v(" "),e("li",[e("strong",[t._v("Emits "),e("em",[t._v("useful")]),t._v(" scroll events:")]),t._v(" For example, "),e("em",[t._v("Infinite Scroll")]),t._v(" knows when you reach the bottom (or bottom) of the list while scrolling. This can come in handy when implementing more advanced features. One thing that comes to mind is to customize "),e("em",[t._v("Infinite Scroll")]),t._v(" to show a loading indicator somewhere while loading is going on.")]),t._v(" "),e("li",[e("strong",[t._v("Automatically request more items:")]),t._v(" By default, "),e("em",[t._v("Infinite Scroll")]),t._v(" will ask you for more items once the user has scrolled near the bottom of the list.")])]),t._v(" "),e("p",[t._v("Even though "),e("em",[t._v("Infinite Scroll")]),t._v(" is useful as is, there are higher level components that build on-top of it. The "),e("em",[e("a",{attrs:{href:"./../../api/list"}},[t._v("List")])]),t._v(" component is probably the most notably component that wraps "),e("em",[t._v("Infinite Scroll")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("h3",{attrs:{id:"hello-world"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hello-world"}},[t._v("#")]),t._v(" Hello World")]),t._v(" "),e("p",[t._v("Getting "),e("a",{attrs:{href:"./../../api/infinite-scroll"}},[t._v("Infinite Scroll")]),t._v(" to render a simple list is straight forward:")]),t._v(" "),e("ul",[e("li",[t._v("Provide an array of items")]),t._v(" "),e("li",[t._v("Provide a scoped default slot that renders an item")]),t._v(" "),e("li",[t._v("Call it a day.")])]),t._v(" "),e("Demo",{attrs:{for:"infinite-scroll/default"}}),t._v(" "),e("p",[e("a",{attrs:{href:"./../../api/infinite-scroll"}},[t._v("Infinite Scroll")]),t._v(" expects you give it at least as many items that will make the user have to scroll. Otherwise "),e("a",{attrs:{href:"./../../api/infinite-scroll"}},[t._v("Infinite Scroll")]),t._v(" will never ask you for more items on it's own.")]),t._v(" "),e("h3",{attrs:{id:"load-more-items"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#load-more-items"}},[t._v("#")]),t._v(" Load More Items")]),t._v(" "),e("p",[e("a",{attrs:{href:"./../../api/infinite-scroll"}},[t._v("Infinite Scroll")]),t._v(" will ask you for more items once the user has scrolled to the very end of the list. For this to work you have to set the "),e("code",[t._v("loadMore")]),t._v("-prop. "),e("code",[t._v("loadMore")]),t._v(" must be a function that loads more items (how is up to you). Once you are done simply modify the items-array you initially passed to "),e("a",{attrs:{href:"./../../api/infinite-scroll"}},[t._v("Infinite Scroll")]),t._v(".")]),t._v(" "),e("Demo",{attrs:{for:"infinite-scroll/load-more"}}),t._v(" "),e("p",[t._v("Your "),e("code",[t._v("loadMore")]),t._v("-function/method should call "),e("code",[t._v("done")]),t._v(" once it is ready.")]),t._v(" "),e("h3",{attrs:{id:"significant-scroll-events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#significant-scroll-events"}},[t._v("#")]),t._v(" Significant Scroll Events")]),t._v(" "),e("p",[t._v("The following example shows how to get significant scroll events. While the user scrolls through the list, it constantly checks to see whether or not it has been scrolled near the bottom and/or top. If the list detects either one (or both) situations it will emit a "),e("code",[t._v("scrollPosition")]),t._v("–event. The payload has the following shape:")]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ScrollPositionEventPayload")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  nearTop"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n  nearBottom"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("The current scroll position is a local state. You can access it by using "),e("code",[t._v("$refs.yourList.scrollPosition")]),t._v(". Initiall "),e("code",[t._v("scrollPosition.nearTop")]),t._v(" and "),e("code",[t._v("scrollPosition.nearBottom")]),t._v(" are both "),e("code",[t._v("null")]),t._v(" – even though it is very likely that the list is near the top (because it has not yet been scrolled). However, "),e("a",{attrs:{href:"./../../api/infinite-scroll"}},[t._v("Infinite Scroll")]),t._v(" only checks the current scroll position when scrolling actually has happened. That is why those values will initially be "),e("code",[t._v("null")]),t._v(".")])]),t._v(" "),e("p",[t._v("You can use those events for a multitude of different things. The higher–level "),e("a",{attrs:{href:"./../list"}},[t._v("List")]),t._v("–component uses those events in order to display a loading indicator automatically.")]),t._v(" "),e("Demo",{attrs:{for:"infinite-scroll/scroll-events"}}),t._v(" "),e("h2",{attrs:{id:"slot-props"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#slot-props"}},[t._v("#")]),t._v(" Slot Props")]),t._v(" "),e("p",[t._v("In every previous example certain slot props were used when rendering an item (by providing the default slot). If you want to know all slots props that are available please head over to the "),e("a",{attrs:{href:"./../../api/infinite-scroll"}},[t._v("Infinite Scroll")]),t._v(" API page.")]),t._v(" "),e("h2",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"./../../api/infinite-scroll"}},[t._v("Infinite Scroll")])]),t._v(" "),e("li",[e("a",{attrs:{href:"./../../api/infinite-scroll-item"}},[t._v("Infinite Scroll Item")])]),t._v(" "),e("li",[e("a",{attrs:{href:"./../../api/lost"}},[t._v("List")])]),t._v(" "),e("li",[e("a",{attrs:{href:"./../../api/list-item"}},[t._v("List Item")])])])],1)}),[],!1,null,null,null);s.default=n.exports}}]);