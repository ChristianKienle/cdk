(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{196:function(t,e,i){},217:function(t,e,i){},270:function(t,e,i){"use strict";var n=i(217);i.n(n).a},280:function(t,e,i){"use strict";i.r(e);i(123),i(15);var n=i(35),r=(i(196),function(t){return{id:t,height:20}}),s={data:function(){return{id:0,height:20,items:Object(n.a)(Array(10).keys()).map(r)}},methods:{setHeight:function(){var t=this.id,e=this.height,i=this.items.find((function(e){return t===e.id}));if(null==i)throw new Error("item not found");i.height=e},loadMore:function(t){var e,i=this.items.length,s=Object(n.a)(Array(10).keys()).map((function(t){return t+i})).map(r);(e=this.items).push.apply(e,Object(n.a)(s)),t()}}},a=(i(270),i(1)),o=Object(a.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.id,expression:"id",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.id},on:{input:function(e){e.target.composing||(t.id=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.height,expression:"height",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.height},on:{input:function(e){e.target.composing||(t.height=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),i("button",{attrs:{"data-cy":"setHeightButton"},on:{click:t.setHeight}},[t._v("set height")]),t._v(" "),i("div",{staticStyle:{height:"100px",border:"1px solid red"}},[i("InfiniteScroll",{attrs:{items:t.items},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item,r=e.active,s=e.index;return[i("InfiniteScrollItem",{attrs:{item:n,active:r,"data-index":s,sizeDependencies:[n.height]}},[i("div",{staticClass:"sized-item",style:{height:n.height+"px"}},[t._v("\n            "+t._s(n)+"\n          ")])])]}}])})],1)])}),[],!1,null,"3c113c12",null);e.default=o.exports}}]);