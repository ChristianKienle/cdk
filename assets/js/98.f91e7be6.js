(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{471:function(e,t,s){"use strict";s.r(t);var o=s(2),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#list"}},[e._v("#")]),e._v(" List")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("List")]),e._v(" component allows you to render an indefinetely long list of items. Under the hood "),s("code",[e._v("List")]),e._v(" uses "),s("code",[e._v("InifiniteScroll")]),e._v(". This means that much of what applies to "),s("code",[e._v("InifiniteScroll")]),e._v(" also applies to "),s("code",[e._v("List")]),e._v(". You can think of "),s("code",[e._v("List´ as a high–level version of")]),e._v("InifiniteScroll`.")]),e._v(" "),s("h2",{attrs:{id:"props"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[e._v("#")]),e._v(" Props")]),e._v(" "),s("h3",{attrs:{id:"keyfield"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keyfield"}},[e._v("#")]),e._v(" keyField")]),e._v(" "),s("p",[s("strong",[e._v("Type:")]),e._v(" "),s("code",[e._v("String")])]),e._v(" "),s("p",[s("strong",[e._v("Default:")]),e._v(" "),s("code",[e._v("id")])]),e._v(" "),s("p",[s("code",[e._v("id")]),e._v(" – by default each of your item "),s("strong",[e._v("must")]),e._v(" have a property called "),s("code",[e._v("id")]),e._v(". You can change this by setting the value of this prop to something else.")]),e._v(" "),s("p",[e._v("Name of property that uniquely identifies an item.")]),e._v(" "),s("h3",{attrs:{id:"selectionmode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#selectionmode"}},[e._v("#")]),e._v(" selectionMode")]),e._v(" "),s("p",[s("strong",[e._v("Type:")]),e._v(" "),s("code",[e._v("Function")])]),e._v(" "),s("p",[e._v("A "),s("code",[e._v("Function")]),e._v(" that tells "),s("code",[e._v("CList")]),e._v(" how to handle selections. Please refer to the "),s("code",[e._v("CList")]),e._v(" documentation to find out how to actually implement a custom selection mode.")]),e._v(" "),s("p",[s("strong",[e._v("Default:")]),e._v(" "),s("code",[e._v("not specified")])]),e._v(" "),s("p",[s("code",[e._v("NoneSelectionMode")]),e._v(" – by default selecting an item does nothing. "),s("code",[e._v("@vue-cdk/list")]),e._v(" exports more selection modes. Please refer to the "),s("code",[e._v("List")]),e._v(" guide to see how that is done.")]),e._v(" "),s("p",[e._v("Selection mode of the List. The value of this prop determines how "),s("code",[e._v("CList")]),e._v(" reacts to the user selecting items.")]),e._v(" "),s("h3",{attrs:{id:"minitemsize"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#minitemsize"}},[e._v("#")]),e._v(" minItemSize")]),e._v(" "),s("p",[s("strong",[e._v("Type:")]),e._v(" "),s("code",[e._v("Number")])]),e._v(" "),s("p",[s("strong",[e._v("Default:")])]),e._v(" "),s("p",[e._v("Minimal size of the items. Will be passed onto DynamicScroller.")]),e._v(" "),s("h3",{attrs:{id:"items"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#items"}},[e._v("#")]),e._v(" items")]),e._v(" "),s("p",[s("strong",[e._v("Type:")]),e._v(" "),s("code",[e._v("Array")])]),e._v(" "),s("p",[s("strong",[e._v("Default:")]),e._v(" "),s("code",[e._v("[]")])]),e._v(" "),s("p",[e._v("Items to be rendered by the virtualized list. Each item must have a unique identifier. You can specify the name of the identifying property by using the "),s("code",[e._v("keyField")]),e._v("-prop.")]),e._v(" "),s("h3",{attrs:{id:"loadmore"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loadmore"}},[e._v("#")]),e._v(" loadMore")]),e._v(" "),s("p",[s("strong",[e._v("Type:")]),e._v(" "),s("code",[e._v("Function")])]),e._v(" "),s("p",[s("strong",[e._v("Default:")]),e._v(" "),s("code",[e._v("not specified")])]),e._v(" "),s("p",[e._v("Function to be called when the list needs more items from you. This function is called with a callback parameter that you MUST call at some point with additional items.")]),e._v(" "),s("h2",{attrs:{id:"methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[e._v("#")]),e._v(" Methods")]),e._v(" "),s("h3",{attrs:{id:"selected"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#selected"}},[e._v("#")]),e._v(" selected")]),e._v(" "),s("p",[e._v("Whether or not a given item is selected.")]),e._v(" "),s("p",[s("strong",[e._v("Arguments:")])]),e._v(" "),s("ul",[s("li",[e._v("item an item managed by this list")])]),e._v(" "),s("h3",{attrs:{id:"select"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#select"}},[e._v("#")]),e._v(" select")]),e._v(" "),s("p",[e._v("Select a given item. It depends on the current selection mode whether or not the item will actually be selected after this method has been executed.")]),e._v(" "),s("p",[s("strong",[e._v("Arguments:")])]),e._v(" "),s("ul",[s("li",[e._v("item an item managed by this list")])]),e._v(" "),s("h3",{attrs:{id:"scrolltoindex"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scrolltoindex"}},[e._v("#")]),e._v(" scrollToIndex")]),e._v(" "),s("p",[e._v("Scrolls the list to the item at "),s("code",[e._v("index")]),e._v(".")]),e._v(" "),s("p",[s("strong",[e._v("Arguments:")])]),e._v(" "),s("ul",[s("li",[e._v("index The row index of the item you want to scroll to.")])])])}),[],!1,null,null,null);t.default=i.exports}}]);