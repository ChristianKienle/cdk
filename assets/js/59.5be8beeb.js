(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{472:function(n,e,t){"use strict";t.r(e);t(23),t(18),t(37),t(14),t(19);var o=t(1),r=(t(44),t(13));function a(n,e,t,o,r,a,i,c,l,s){"boolean"!=typeof i&&(l=c,c=i,i=!1);var d,u="function"==typeof t?t.options:t;if(n&&n.render&&(u.render=n.render,u.staticRenderFns=n.staticRenderFns,u._compiled=!0,r&&(u.functional=!0)),o&&(u._scopeId=o),a?(d=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),e&&e.call(this,l(n)),n&&n._registeredComponents&&n._registeredComponents.add(a)},u._ssrRegister=d):e&&(d=i?function(n){e.call(this,s(n,this.$root.$options.shadowRoot))}:function(n){e.call(this,c(n))}),d)if(u.functional){var p=u.render;u.render=function(n,e){return d.call(e),p(n,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,d):[d]}return t}var i=a({},void 0,{name:"ClientOnly",functional:!0,props:{placeholder:{type:String,default:null},placeholderTag:{type:String,default:"div"}},render:function(n,e){var t=e.parent,o=e.slots,a=e.props,i=o(),c=i.default,l=void 0===c?[]:c,s=i.placeholder;return t._isMounted?l:(t.$once("hook:mounted",Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t._isMounted,n.next=3,t.$nextTick();case 3:t.$forceUpdate();case 4:case"end":return n.stop()}}),n)})))),a.placeholderTag&&(a.placeholder||s)?n(a.placeholderTag,{class:["no-ssr-placeholder"]},a.placeholder||s):l.length>0?l.map((function(){return n(!1)})):n(!1))}},void 0,void 0,void 0,!1,void 0,void 0,void 0),c=function(n){return"C".concat(n.name)},l=function(){return{onDidRegisterComponent:function(){},componentName:c}},s=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l();return Object(o.a)(Object(o.a)({},l()),n)},d=function(n){return"function"==typeof n?n.prototype.constructor.extendOptions.name:n.name},u=(function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];var o=function(n,t){var o=s(t),r=o.onDidRegisterComponent;e.forEach((function(e){var t=d(e);if(null==t)throw new Error("\n            Unable to determine component name. Component: ".concat(e,". Did you forget to add a 'name' attribute?\n                "));var a=o.componentName({name:t,component:e});n.component(a,e),r({component:e,name:a})}))};function r(n){var t=s(n),o={};return e.forEach((function(n){var e=d(n);if(null==e)throw new Error("\n            Unable to determine component name. Component: ".concat(n,". Did you forget to add a 'name' attribute?\n                "));var r=t.componentName({name:e,component:n});o[r]=n})),{components:o}}r.install=o}(i),{components:{ClientOnly:i}}),p=t(4),f=Object(p.a)(u,(function(){var n=this.$createElement,e=this._self._c||n;return e("div",[e("ClientOnly",[e("div",{attrs:{"data-cy":"client"}},[this._v("hello browser")])]),this._v(" "),e("div",{attrs:{"data-cy":"all"}},[this._v("hello all")])],1)}),[],!1,null,null,null);e.default=f.exports}}]);