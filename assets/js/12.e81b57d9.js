(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{207:function(t,e,n){},208:function(t,e,n){"use strict";var i=n(26),r=n(8),o=n(36),a=n(125),s=n(126),d=n(21),u=n(123),l=n(127);r(r.S+r.F*!n(128)((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,r,c,f=o(t),p="function"==typeof this?this:Array,h=arguments.length,m=h>1?arguments[1]:void 0,v=void 0!==m,y=0,w=l(f);if(v&&(m=i(m,h>2?arguments[2]:void 0,2)),null==w||p==Array&&s(w))for(n=new p(e=d(f.length));e>y;y++)u(n,y,v?m(f[y],y):f[y]);else for(c=w.call(f),n=new p;!(r=c.next()).done;y++)u(n,y,v?a(c,m,[r.value,y],!0):r.value);return n.length=y,n}})},312:function(t,e,n){"use strict";n.r(e);var i=n(35),r=(n(124),n(208),n(207),{data:function(){return{items:[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8}]}},methods:{loadMore:function(t){var e,n=this.items.length,r=Array.from({length:10}).map((function(t,e){return e+n})).map((function(t){return{id:t}}));(e=this.items).push.apply(e,Object(i.a)(r)),t()}}}),o=n(1),a=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"100px",border:"1px solid red"}},[n("CList",{attrs:{items:t.items,loadMore:t.loadMore},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.item,r=e.active,o=e.index;return[n("CListItem",{attrs:{item:i,active:r,sizeDependencies:[i.id],"data-index":o}},[t._v("\n        "+t._s(i)+"\n      ")])]}}])})],1)}),[],!1,null,null,null);e.default=a.exports}}]);