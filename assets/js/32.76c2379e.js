(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"../node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"70195ca0-vue-loader-template\"}!../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/@vuepress/core/node_modules/cache-loader/dist/cjs.js?!../node_modules/vue-loader/lib/index.js?!../node_modules/@vuepress/markdown-loader/index.js?!./docs/customizing/README.md?vue&type=template&id=ee0c3134&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"../node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"70195ca0-vue-loader-template"}!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/@vuepress/core/node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/vue-loader/lib??ref--1-1!../node_modules/@vuepress/markdown-loader??ref--1-2!./docs/customizing/README.md?vue&type=template&id=ee0c3134& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ContentSlotsDistributor',{attrs:{"slot-key":_vm.$parent.slotKey}},[_c('h1',{attrs:{"id":"customizing"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#customizing"}},[_vm._v("#")]),_vm._v(" Customizing")]),_vm._v(" "),_c('p',[_c('em',[_vm._v("Vue Component Development Kit")]),_vm._v(" can be customized.")]),_vm._v(" "),_c('h2',{attrs:{"id":"css"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#css"}},[_vm._v("#")]),_vm._v(" CSS")]),_vm._v(" "),_c('p',[_vm._v("The amount of custom CSS is kept at a minimum. "),_c('em',[_vm._v("Vue Component Development Kit")]),_vm._v(" only introduces custom CSS if it is required for a specific feature. For example, the "),_c('router-link',{attrs:{"to":"/components/list/"}},[_vm._v("List component")]),_vm._v(" applies "),_c('code',[_vm._v("overflow: hidden")]),_vm._v(" to the list container element – otherwise the list would not be scrollable and break your layout. Sometimes "),_c('em',[_vm._v("Vue Component Development Kit")]),_vm._v(" relies on a third party library that requires custom CSS. If that is the case we don't try to work around that. We simply accept it and move on.")],1),_vm._v(" "),_c('p',[_vm._v("Custom CSS follows a set of guidelines:")]),_vm._v(" "),_c('ul',[_c('li',[_c('strong',[_vm._v("Consistently prefixed classes:")]),_vm._v(" Custom CSS classes are consistently prefixed with\n"),_c('code',[_c('abbr',{attrs:{"title":"Vue Component Development Kit"}},[_vm._v("vcdk")]),_vm._v("-")]),_vm._v(".")]),_vm._v(" "),_c('li',[_c('strong',[_vm._v("No polluting of the global scope:")]),_vm._v(" You will never see "),_c('abbr',{attrs:{"title":"Vue Component Development Kit"}},[_vm._v("VCDK")]),_vm._v(" apply styles to elements such as "),_c('code',[_vm._v("button")]),_vm._v(", "),_c('code',[_vm._v("a")]),_vm._v(", etc.")]),_vm._v(" "),_c('li',[_c('strong',[_vm._v("Distributed separately:")]),_vm._v(" Usually our custom CSS is distributed separately from the actual component/plugin/utility. For example there is a themeable popover-component ("),_c('code',[_vm._v("@vue-cdk/popover")]),_vm._v(") that works even without any styles/themes. If you want to use one of the officially available themes then simply add "),_c('code',[_vm._v("@vue-cdk/popover-themes")]),_vm._v(" as a dependency and import the CSS:")])]),_vm._v(" "),_c('div',{staticClass:"language-js extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-js"}},[_c('code',[_c('span',{pre:true,attrs:{"class":"token comment"}},[_vm._v("// import all themes:")]),_vm._v("\n"),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("import")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token string"}},[_vm._v("'@vue-cdk/popover-themes/index.css'")]),_vm._v("\n\n"),_c('span',{pre:true,attrs:{"class":"token comment"}},[_vm._v("//                – or –                   //")]),_vm._v("\n\n"),_c('span',{pre:true,attrs:{"class":"token comment"}},[_vm._v("// import 'only' a specific theme:")]),_vm._v("\n"),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("import")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token string"}},[_vm._v("'@vue-cdk/popover-themes/clean.css'")]),_vm._v("\n")])])]),_c('ul',[_c('li',[_c('strong',[_vm._v("Use plain CSS:")]),_vm._v(" Having to use custom CSS (within the context of "),_c('abbr',{attrs:{"title":"Vue Component Development Kit"}},[_vm._v("VCDK")]),_vm._v(") is already a little bit against what we actually want – so using the CSS and working with it should not introduce additional complexities. Keep it simple.")])])])}
var staticRenderFns = []



/***/ }),

/***/ "./docs/customizing/README.md":
/*!************************************!*\
  !*** ./docs/customizing/README.md ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _README_md_vue_type_template_id_ee0c3134___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./README.md?vue&type=template&id=ee0c3134& */ "./docs/customizing/README.md?vue&type=template&id=ee0c3134&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _README_md_vue_type_template_id_ee0c3134___WEBPACK_IMPORTED_MODULE_0__["render"],
  _README_md_vue_type_template_id_ee0c3134___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./docs/customizing/README.md?vue&type=template&id=ee0c3134&":
/*!*******************************************************************!*\
  !*** ./docs/customizing/README.md?vue&type=template&id=ee0c3134& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_70195ca0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuepress_core_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_README_md_vue_type_template_id_ee0c3134___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"../node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"70195ca0-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/@vuepress/core/node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??ref--1-1!../../../node_modules/@vuepress/markdown-loader??ref--1-2!./README.md?vue&type=template&id=ee0c3134& */ "../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"../node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"70195ca0-vue-loader-template\"}!../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/@vuepress/core/node_modules/cache-loader/dist/cjs.js?!../node_modules/vue-loader/lib/index.js?!../node_modules/@vuepress/markdown-loader/index.js?!./docs/customizing/README.md?vue&type=template&id=ee0c3134&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_70195ca0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuepress_core_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_README_md_vue_type_template_id_ee0c3134___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_70195ca0_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuepress_core_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_README_md_vue_type_template_id_ee0c3134___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=32.76c2379e.js.map