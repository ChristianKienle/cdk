(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{478:function(e,t,n){"use strict";n.r(t);n(44);var a=n(13),i=n(142),o={components:{Modal:{render:function(e){return e("div",{style:{width:"200px",height:"200px",border:"1px solid #ccc",backgroundColor:"#fefefe"}},this.$slots.default)}}},data:function(){return{modalVisible:!1,nestedModalVisible:!1}},beforeDestroy:function(){null!=this.nestedTrap&&this.nestedTrap.deactivate(),null!=this.trap&&this.trap.deactivate()},methods:{closeModal:function(){this.trap.deactivate()},showModal:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.modalVisible=!0,t.next=3,e.$nextTick();case 3:e.trap=Object(i.a)(e.$refs.modal),e.trap.activate({onDeactivate:function(){e.modalVisible=!1},initialFocus:e.$refs.intialInput});case 5:case"end":return t.stop()}}),t)})))()},showNestedTrap:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.nestedModalVisible=!0,t.next=3,e.$nextTick();case 3:e.nestedTrap=Object(i.a)(e.$refs.nestedModal),e.nestedTrap.activate({onDeactivate:function(){e.nestedModalVisible=!1},initialFocus:e.$refs.nestedInitialInput});case 5:case"end":return t.stop()}}),t)})))()},closeNestedModal:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.nestedTrap.deactivate();case 1:case"end":return t.stop()}}),t)})))()}}},r=n(4),s=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("button",{on:{click:e.showModal}},[e._v("Show Modal")]),e._v(" "),e.modalVisible?n("Modal",{ref:"modal"},[n("div",[n("p",[e._v("I am a Modal")]),e._v(" "),n("button",{on:{click:e.showNestedTrap}},[e._v("Show nested Modal")]),e._v(" "),n("button",{on:{click:e.closeModal}},[e._v("Close Modal")]),e._v(" "),n("input",{ref:"intialInput",attrs:{tabindex:"0"}}),e._v(" "),n("input"),e._v(" "),n("input")])]):e._e(),e._v(" "),n("Modal",{directives:[{name:"show",rawName:"v-show",value:e.nestedModalVisible,expression:"nestedModalVisible"}],ref:"nestedModal"},[n("div",[n("p",[e._v("I am "),n("strong",[e._v("nested")]),e._v(" a Modal")]),e._v(" "),n("button",{on:{click:e.closeNestedModal}},[e._v("Close nested Modal")]),e._v(" "),n("input",{ref:"nestedInitialInput",attrs:{tabindex:"0"}}),e._v(" "),n("input"),e._v(" "),n("input")])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);