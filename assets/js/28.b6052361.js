(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"../node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"70195ca0-vue-loader-template\"}!../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/@vuepress/core/node_modules/cache-loader/dist/cjs.js?!../node_modules/vue-loader/lib/index.js?!../node_modules/@vuepress/markdown-loader/index.js?!./docs/components/list/README.md?vue&type=template&id=305e0f9e&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"../node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"70195ca0-vue-loader-template"}!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/@vuepress/core/node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/vue-loader/lib??ref--1-1!../node_modules/@vuepress/markdown-loader??ref--1-2!./docs/components/list/README.md?vue&type=template&id=305e0f9e& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ContentSlotsDistributor',{attrs:{"slot-key":_vm.$parent.slotKey}},[_c('h1',{attrs:{"id":"list"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#list"}},[_vm._v("#")]),_vm._v(" List")]),_vm._v(" "),_c('p',[_vm._v("The "),_c('em',[_vm._v("List")]),_vm._v(" component displays a list of items. Internally it is using the "),_c('em',[_c('router-link',{attrs:{"to":"/components/infinite-scroll/"}},[_vm._v("Infinite Scroll")])],1),_vm._v(" component. Because of that they have a lot of similarities. "),_c('em',[_vm._v("List")]),_vm._v(" adds a few convenient, higher-level features to "),_c('em',[_c('router-link',{attrs:{"to":"/components/infinite-scroll/"}},[_vm._v("Infinite Scroll")])],1),_vm._v(".")]),_vm._v(" "),_c('div',{staticClass:"custom-block tip"},[_c('p',{staticClass:"custom-block-title"},[_vm._v("TIP")]),_vm._v(" "),_c('p',[_vm._v("You should prefer "),_c('em',[_vm._v("List")]),_vm._v(" over "),_c('em',[_c('router-link',{attrs:{"to":"/components/infinite-scroll/"}},[_vm._v("Infinite Scroll")])],1),_vm._v(". You can fall back to "),_c('em',[_c('router-link',{attrs:{"to":"/components/infinite-scroll/"}},[_vm._v("Infinite Scroll")])],1),_vm._v(" if you have special needs.")])]),_vm._v(" "),_c('p',[_c('strong',[_vm._v("Table of Contents")])]),_c('div',{staticClass:"table-of-contents"},[_c('ul',[_c('li',[_c('a',{attrs:{"href":"#installation"}},[_vm._v("Installation")])]),_c('li',[_c('a',{attrs:{"href":"#usage"}},[_vm._v("Usage")])]),_c('li',[_c('a',{attrs:{"href":"#differences-to-infinite-scroll"}},[_vm._v("Differences to Infinite Scroll")]),_c('ul',[_c('li',[_c('a',{attrs:{"href":"#selection-management"}},[_vm._v("Selection Management")])]),_c('li',[_c('a',{attrs:{"href":"#additional-slot-props"}},[_vm._v("Additional Slot Props")])])])]),_c('li',[_c('a',{attrs:{"href":"#examples"}},[_vm._v("Examples")]),_c('ul',[_c('li',[_c('a',{attrs:{"href":"#hello-world"}},[_vm._v("Hello World")])]),_c('li',[_c('a',{attrs:{"href":"#single-selection-mode"}},[_vm._v("Single Selection Mode")])]),_c('li',[_c('a',{attrs:{"href":"#multiple-selection-mode"}},[_vm._v("Multiple Selection Mode")])])])]),_c('li',[_c('a',{attrs:{"href":"#api"}},[_vm._v("API")])])])]),_c('p'),_vm._v(" "),_c('div',{staticClass:"custom-block tip"},[_c('p',{staticClass:"custom-block-title"},[_vm._v("API")]),_vm._v(" "),_c('p',[_vm._v("The "),_c('em',[_vm._v("List")]),_vm._v("-component has a dedicated "),_c('a',{attrs:{"href":"./../../api/list"}},[_vm._v("API documentation")]),_vm._v(".")])]),_vm._v(" "),_c('h2',{attrs:{"id":"installation"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#installation"}},[_vm._v("#")]),_vm._v(" Installation")]),_vm._v(" "),_c('div',{staticClass:"language-sh extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-sh"}},[_c('code',[_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("npm")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("install")]),_vm._v(" @vue-cdk/list --save\n")])])]),_c('h2',{attrs:{"id":"usage"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#usage"}},[_vm._v("#")]),_vm._v(" Usage")]),_vm._v(" "),_c('p',[_c('code',[_vm._v("@vue-cdk/list")]),_vm._v(" exposes a "),_c('em',[_vm._v("Vue plugin")]),_vm._v(" that you can use like this:")]),_vm._v(" "),_c('div',{staticClass:"language-js extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-js"}},[_c('code',[_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("import")]),_vm._v(" Vue "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token string"}},[_vm._v("'vue'")]),_vm._v("\n"),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("import")]),_vm._v(" List "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token string"}},[_vm._v("'@vue-cdk/list'")]),_vm._v("\n"),_c('span',{pre:true,attrs:{"class":"token comment"}},[_vm._v("// …")]),_vm._v("\nVue"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("use")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("List"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(",")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token comment"}},[_vm._v("/* optional options */")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n")])])]),_c('p',[_vm._v("The plugin registers two components globally:")]),_vm._v(" "),_c('ul',[_c('li',[_c('code',[_vm._v("CList")]),_vm._v(": "),_c('code',[_vm._v("CList")]),_vm._v(" takes an array of items ("),_c('code',[_vm._v("items")]),_vm._v("-prop). However, "),_c('code',[_vm._v("CList")]),_vm._v(" does not know how to render an item. It is up to you do do that by providing doing so in the default scoped slot. Please refer to the "),_c('em',[_vm._v("Hello World")]),_vm._v(" example to get an idea how to do that.")]),_vm._v(" "),_c('li',[_c('code',[_vm._v("CListItem")]),_vm._v(": In the scoped default slot of "),_c('code',[_vm._v("CList")]),_vm._v(" you have to use "),_c('code',[_vm._v("CListItem")]),_vm._v(" to render the actual item. "),_c('code',[_vm._v("CListItem")]),_vm._v(" let's you render almost anything you like.")])]),_vm._v(" "),_c('h2',{attrs:{"id":"differences-to-infinite-scroll"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#differences-to-infinite-scroll"}},[_vm._v("#")]),_vm._v(" Differences to "),_c('code',[_vm._v("Infinite Scroll")])]),_vm._v(" "),_c('p',[_c('code',[_vm._v("@vue-cdk/list")]),_vm._v(" depends on "),_c('code',[_vm._v("@vue-cdk/virtual-scroll")]),_vm._v(" for the heavy lifting. However there are some notable differences/additions for "),_c('code',[_vm._v("Infinite Scroll")]),_vm._v(".")]),_vm._v(" "),_c('h3',{attrs:{"id":"selection-management"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#selection-management"}},[_vm._v("#")]),_vm._v(" Selection Management")]),_vm._v(" "),_c('p',[_vm._v("As a higher level package "),_c('code',[_vm._v("@vue-cdk/list")]),_vm._v(" has a notion of selection. It knows which of your items are selected. It has different selection modes ("),_c('em',[_vm._v("single selection")]),_vm._v(", "),_c('em',[_vm._v("multiple selection")]),_vm._v(") and some modes even take options.")]),_vm._v(" "),_c('h3',{attrs:{"id":"additional-slot-props"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#additional-slot-props"}},[_vm._v("#")]),_vm._v(" Additional "),_c('em',[_vm._v("Slot Props")])]),_vm._v(" "),_c('h2',{attrs:{"id":"examples"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#examples"}},[_vm._v("#")]),_vm._v(" Examples")]),_vm._v(" "),_c('h3',{attrs:{"id":"hello-world"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#hello-world"}},[_vm._v("#")]),_vm._v(" Hello World")]),_vm._v(" "),_c('Demo',{attrs:{"for":"list/default"}}),_vm._v(" "),_c('h3',{attrs:{"id":"single-selection-mode"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#single-selection-mode"}},[_vm._v("#")]),_vm._v(" Single Selection Mode")]),_vm._v(" "),_c('Demo',{attrs:{"for":"list/selection-single"}}),_vm._v(" "),_c('h3',{attrs:{"id":"multiple-selection-mode"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#multiple-selection-mode"}},[_vm._v("#")]),_vm._v(" Multiple Selection Mode")]),_vm._v(" "),_c('Demo',{attrs:{"for":"list/selection-multiple"}}),_vm._v(" "),_c('h2',{attrs:{"id":"api"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#api"}},[_vm._v("#")]),_vm._v(" API")]),_vm._v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"./../../api/list"}},[_vm._v("List")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"./../../api/list-item"}},[_vm._v("List Item")])])])],1)}
var staticRenderFns = []



/***/ }),

/***/ "./docs/components/list/README.md":
/*!****************************************!*\
  !*** ./docs/components/list/README.md ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _README_md_vue_type_template_id_305e0f9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./README.md?vue&type=template&id=305e0f9e& */ "./docs/components/list/README.md?vue&type=template&id=305e0f9e&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _README_md_vue_type_template_id_305e0f9e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _README_md_vue_type_template_id_305e0f9e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./docs/components/list/README.md?vue&type=template&id=305e0f9e&":
/*!***********************************************************************!*\
  !*** ./docs/components/list/README.md?vue&type=template&id=305e0f9e& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_70195ca0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuepress_core_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_README_md_vue_type_template_id_305e0f9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"../node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"70195ca0-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/@vuepress/core/node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??ref--1-1!../../../../node_modules/@vuepress/markdown-loader??ref--1-2!./README.md?vue&type=template&id=305e0f9e& */ "../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"../node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"70195ca0-vue-loader-template\"}!../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/@vuepress/core/node_modules/cache-loader/dist/cjs.js?!../node_modules/vue-loader/lib/index.js?!../node_modules/@vuepress/markdown-loader/index.js?!./docs/components/list/README.md?vue&type=template&id=305e0f9e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_70195ca0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuepress_core_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_README_md_vue_type_template_id_305e0f9e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_70195ca0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuepress_core_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_README_md_vue_type_template_id_305e0f9e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=28.b6052361.js.map