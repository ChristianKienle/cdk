(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{277:function(t,e,n){"use strict";var r=n(39),i=n(11),o=n(40),c=n(169),a=n(170),s=n(24),u=n(167),l=n(171);i(i.S+i.F*!n(172)((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,i,f,h=o(t),d="function"==typeof this?this:Array,v=arguments.length,p=v>1?arguments[1]:void 0,b=void 0!==p,y=0,O=l(h);if(b&&(p=r(p,v>2?arguments[2]:void 0,2)),null==O||d==Array&&a(O))for(n=new d(e=s(h.length));e>y;y++)u(n,y,b?p(h[y],y):h[y]);else for(f=O.call(h),n=new d;!(i=f.next()).done;y++)u(n,y,b?c(f,p,[i.value,y],!0):i.value);return n.length=y,n}})},304:function(t,e,n){"use strict";var r=n(175),i=n(115);t.exports=n(176)("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return r.def(i(this,"Set"),t=0===t?0:t,t)}},r)},305:function(t,e,n){var r=n(11),i=n(306)(!0);r(r.S,"Object",{entries:function(t){return i(t)}})},306:function(t,e,n){var r=n(16),i=n(81),o=n(41),c=n(174).f;t.exports=function(t){return function(e){for(var n,a=o(e),s=i(a),u=s.length,l=0,f=[];u>l;)n=s[l++],r&&!c.call(a,n)||f.push(t?[n,a[n]]:a[n]);return f}}},312:function(t,e,n){"use strict";n(26),n(277),n(177);var r=n(49),i=(n(168),n(304),n(123)),o=(n(305),n(25),n(8)),c=(n(20),n(121)),a=n(122),s=n(180),u=function(){function t(e,n){Object(c.a)(this,t),this.query=e,this.cb=n,this.queryList=null,this._stopObservation=function(){}}return Object(a.a)(t,[{key:"handleChange",value:function(t){this.cb(t.matches)}},{key:"startObservation",value:function(){var t=this;if(!Object(s.a)()){var e=this.query;this.queryList=window.matchMedia(e),this._stopObservation=function(){t.queryList.removeListener(t.handleChange.bind(t)),t.queryList=null},this.cb(this.queryList.matches),this.queryList.addListener(this.handleChange.bind(this))}}},{key:"stopObservation",value:function(){this._stopObservation(),this._stopObservation=function(){}}}]),t}();function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.a={provide:function(){return{$vcdkMq:this.vcdkMq}},data:function(){return{vcdkMq:f({},(t=Object.keys(this.$options.vcdkMediaQueriesByName),e={},t.forEach((function(t){return e[t]=!1})),e),{$all:[]})};var t,e},created:function(){var t=this;Object.entries(this.$options.vcdkMediaQueriesByName).forEach((function(e){var n=Object(i.a)(e,2),o=n[0],c=n[1];new u(c,(function(e){t.vcdkMq[o]=e;var n=new Set(Object(r.a)(t.vcdkMq.$all));e?n.add(o):n.delete(o),t.vcdkMq.$all=Array.from(n.values()).sort()})).startObservation()}))}}},383:function(t,e,n){"use strict";n.r(e);var r={components:{Consumer:{inject:["$vcdkMq"],render:function(t){var e=this.$vcdkMq,n=[t("li",String(e.mini)),t("li",String(e.compact)),t("li",String(e.regular)),t("li",String(e.$all))];return t("ul",n)}}},mixins:[n(312).a],vcdkMediaQueriesByName:{mini:"only screen and (max-width: 400px)",compact:"only screen and (min-width: 500px) and (max-width: 600px)",regular:"only screen and (min-width: 600px)"}},i=n(2),o=Object(i.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("Consumer")}),[],!1,null,null,null);e.default=o.exports}}]);