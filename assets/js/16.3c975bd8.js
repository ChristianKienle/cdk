(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{208:function(t,e,n){"use strict";var r=n(26),i=n(8),o=n(36),a=n(125),l=n(126),u=n(21),s=n(123),c=n(127);i(i.S+i.F*!n(128)((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,i,f,d=o(t),m="function"==typeof this?this:Array,p=arguments.length,h=p>1?arguments[1]:void 0,v=void 0!==h,y=0,w=c(d);if(v&&(h=r(h,p>2?arguments[2]:void 0,2)),null==w||m==Array&&l(w))for(n=new m(e=u(d.length));e>y;y++)s(n,y,v?h(d[y],y):d[y]);else for(f=w.call(d),n=new m;!(i=f.next()).done;y++)s(n,y,v?a(f,h,[i.value,y],!0):i.value);return n.length=y,n}})},298:function(t,e,n){"use strict";n.r(e);n(124),n(208),n(13);var r=n(35),i=(n(129),{data:function(){return{items:Object(r.a)(Array(20).keys()).map((function(t){return{id:t}}))}},methods:{loadMore:function(t){var e,n=this.items.length,i=Array.from({length:10}).map((function(t,e){return e+n})).map((function(t){return{id:t}}));(e=this.items).push.apply(e,Object(r.a)(i)),t()}}}),o=n(1),a=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("CInfiniteScroll",{staticStyle:{height:"200px"},attrs:{items:t.items,loadMore:t.loadMore},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.item,i=e.active;return[n("CInfiniteScrollItem",{attrs:{item:r,active:i,sizeDependencies:[r.id]}},[t._v("\n      Scroll down – "+t._s(r.id)+"\n    ")])]}}])})}),[],!1,null,null,null);e.default=a.exports}}]);