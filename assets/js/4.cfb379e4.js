(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{257:function(t,e,n){"use strict";var r=n(32),i=n(6),c=n(33),o=n(152),a=n(153),s=n(18),u=n(150),v=n(154);i(i.S+i.F*!n(155)((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,i,l,d=c(t),f="function"==typeof this?this:Array,h=arguments.length,p=h>1?arguments[1]:void 0,b=void 0!==p,y=0,O=v(d);if(b&&(p=r(p,h>2?arguments[2]:void 0,2)),null==O||f==Array&&a(O))for(n=new f(e=s(d.length));e>y;y++)u(n,y,b?p(d[y],y):d[y]);else for(l=O.call(d),n=new f;!(i=l.next()).done;y++)u(n,y,b?o(l,p,[i.value,y],!0):i.value);return n.length=y,n}})},284:function(t,e,n){"use strict";var r=n(158),i=n(99);t.exports=n(159)("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return r.def(i(this,"Set"),t=0===t?0:t,t)}},r)},285:function(t,e,n){var r=n(6),i=n(286)(!0);r(r.S,"Object",{entries:function(t){return i(t)}})},286:function(t,e,n){var r=n(11),i=n(66),c=n(34),o=n(157).f;t.exports=function(t){return function(e){for(var n,a=c(e),s=i(a),u=s.length,v=0,l=[];u>v;)n=s[v++],r&&!o.call(a,n)||l.push(t?[n,a[n]]:a[n]);return l}}},292:function(t,e,n){"use strict";n(20),n(257),n(160);var r=n(41),i=(n(151),n(284),n(106)),c=(n(285),n(19),n(3)),o=(n(15),n(104)),a=n(105),s=n(163),u=function(){function t(e,n){Object(o.a)(this,t),this.query=e,this.cb=n,this.queryList=null,this._stopObservation=function(){}}return Object(a.a)(t,[{key:"handleChange",value:function(t){this.cb(t.matches)}},{key:"startObservation",value:function(){var t=this;if(!Object(s.a)()){var e=this.query;this.queryList=window.matchMedia(e),this._stopObservation=function(){t.queryList.removeListener(t.handleChange.bind(t)),t.queryList=null},this.cb(this.queryList.matches),this.queryList.addListener(this.handleChange.bind(this))}}},{key:"stopObservation",value:function(){this._stopObservation(),this._stopObservation=function(){}}}]),t}();function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){Object(c.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.a={provide:function(){return{$vcdkMq:this.vcdkMq}},data:function(){return{vcdkMq:l({},(t=Object.keys(this.$options.vcdkMediaQueriesByName),e={},t.forEach((function(t){return e[t]=!1})),e),{$all:[]})};var t,e},created:function(){var t=this;Object.entries(this.$options.vcdkMediaQueriesByName).forEach((function(e){var n=Object(i.a)(e,2),c=n[0],o=n[1];new u(o,(function(e){t.vcdkMq[c]=e;var n=new Set(Object(r.a)(t.vcdkMq.$all));e?n.add(c):n.delete(c),t.vcdkMq.$all=Array.from(n.values()).sort()})).startObservation()}))}}},363:function(t,e,n){"use strict";n.r(e);var r={mixins:[n(292).a],vcdkMediaQueriesByName:{mini:"only screen and (max-width: 400px)",compact:"only screen and (min-width: 500px) and (max-width: 600px)",regular:"only screen and (min-width: 600px)"}},i=n(1),c=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("vcdkMq.mini = "),n("code",[t._v(t._s(t.vcdkMq.mini))])]),t._v(" "),n("li",[t._v("vcdkMq.compact = "),n("code",[t._v(t._s(t.vcdkMq.compact))])]),t._v(" "),n("li",[t._v("vcdkMq.regular = "),n("code",[t._v(t._s(t.vcdkMq.regular))])]),t._v(" "),n("li",[t._v("vcdkMq.$all = "),n("code",[t._v(t._s(t.vcdkMq.$all))])])])}),[],!1,null,null,null);e.default=c.exports}}]);