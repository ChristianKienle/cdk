(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{196:function(t,e,n){},198:function(t,e,n){"use strict";var r=n(26),i=n(7),o=n(36),a=n(117),s=n(118),u=n(20),l=n(115),c=n(119);i(i.S+i.F*!n(120)((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,i,d,f=o(t),m="function"==typeof this?this:Array,p=arguments.length,h=p>1?arguments[1]:void 0,v=void 0!==h,y=0,w=c(f);if(v&&(h=r(h,p>2?arguments[2]:void 0,2)),null==w||m==Array&&s(w))for(n=new m(e=u(f.length));e>y;y++)l(n,y,v?h(f[y],y):f[y]);else for(d=w.call(f),n=new m;!(i=d.next()).done;y++)l(n,y,v?a(d,h,[i.value,y],!0):i.value);return n.length=y,n}})},284:function(t,e,n){"use strict";n.r(e);n(116),n(198),n(15);var r=n(35),i=(n(196),{data:function(){return{items:Object(r.a)(Array(0).keys()).map((function(t){return{id:t}}))}},methods:{loadMore:function(t){var e,n=this.items.length,i=Array.from({length:5}).map((function(t,e){return e+n})).map((function(t){return{id:t}}));(e=this.items).push.apply(e,Object(r.a)(i)),setTimeout(t,2e3)}}}),o=n(1),a=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"200px",border:"1px solid red"}},[n("List",{attrs:{items:t.items,loadMore:t.loadMore},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.item,i=e.active,o=e.index;return[n("ListItem",{attrs:{item:r,active:i,sizeDependencies:[r.id],"data-index":o}},[t._v("\n        "+t._s(r)+"\n      ")])]}}])})],1)}),[],!1,null,null,null);e.default=a.exports}}]);