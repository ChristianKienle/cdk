(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{224:function(t,e,n){"use strict";var r=n(27),i=n(5),o=n(28),c=n(135),a=n(136),s=n(16),u=n(133),l=n(137);i(i.S+i.F*!n(138)((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,i,f,h=o(t),d="function"==typeof this?this:Array,v=arguments.length,p=v>1?arguments[1]:void 0,b=void 0!==p,y=0,O=l(h);if(b&&(p=r(p,v>2?arguments[2]:void 0,2)),null==O||d==Array&&a(O))for(n=new d(e=s(h.length));e>y;y++)u(n,y,b?p(h[y],y):h[y]);else for(f=O.call(h),n=new d;!(i=f.next()).done;y++)u(n,y,b?c(f,p,[i.value,y],!0):i.value);return n.length=y,n}})},251:function(t,e,n){"use strict";var r=n(142),i=n(84);t.exports=n(143)("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return r.def(i(this,"Set"),t=0===t?0:t,t)}},r)},252:function(t,e,n){var r=n(5),i=n(253)(!0);r(r.S,"Object",{entries:function(t){return i(t)}})},253:function(t,e,n){var r=n(8),i=n(57),o=n(30),c=n(141).f;t.exports=function(t){return function(e){for(var n,a=o(e),s=i(a),u=s.length,l=0,f=[];u>l;)n=s[l++],r&&!c.call(a,n)||f.push(t?[n,a[n]]:a[n]);return f}}},257:function(t,e,n){"use strict";n(18),n(224),n(144);var r=n(37),i=(n(134),n(251),n(99)),o=(n(252),n(17),n(3)),c=(n(13),n(88)),a=n(89),s=n(147),u=function(){function t(e,n){Object(c.a)(this,t),this.query=e,this.cb=n,this.queryList=null,this._stopObservation=function(){}}return Object(a.a)(t,[{key:"handleChange",value:function(t){this.cb(t.matches)}},{key:"startObservation",value:function(){var t=this;if(!Object(s.a)()){var e=this.query;this.queryList=window.matchMedia(e),this._stopObservation=function(){t.queryList.removeListener(t.handleChange.bind(t)),t.queryList=null},this.cb(this.queryList.matches),this.queryList.addListener(this.handleChange.bind(this))}}},{key:"stopObservation",value:function(){this._stopObservation(),this._stopObservation=function(){}}}]),t}();function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.a={provide:function(){return{$vcdkMq:this.vcdkMq}},data:function(){return{vcdkMq:f({},(t=Object.keys(this.$options.vcdkMediaQueriesByName),e={},t.forEach((function(t){return e[t]=!1})),e),{$all:[]})};var t,e},created:function(){var t=this;Object.entries(this.$options.vcdkMediaQueriesByName).forEach((function(e){var n=Object(i.a)(e,2),o=n[0],c=n[1];new u(c,(function(e){t.vcdkMq[o]=e;var n=new Set(Object(r.a)(t.vcdkMq.$all));e?n.add(o):n.delete(o),t.vcdkMq.$all=Array.from(n.values()).sort()})).startObservation()}))}}},345:function(t,e,n){"use strict";n.r(e);var r={inject:["$vcdkMq"],render:function(t){var e=this.$vcdkMq,n=[t("li",String(e.mini)),t("li",String(e.compact)),t("li",String(e.regular)),t("li",String(e.$all))];return t("ul",n)}},i={mixins:[n(257).a],components:{Consumer:r},vcdkMediaQueriesByName:{mini:"only screen and (max-width: 400px)",compact:"only screen and (min-width: 500px) and (max-width: 600px)",regular:"only screen and (min-width: 600px)"}},o=n(1),c=Object(o.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("Consumer")}),[],!1,null,null,null);e.default=c.exports}}]);