(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{472:function(e,t,n){"use strict";n.r(t);n(49);var a=n(21),i=n(85),o={components:{Modal:{render:function(e){return e("div",{style:{width:"200px",height:"200px",border:"1px solid #ccc",backgroundColor:"#fefefe"}},this.$slots.default)}}},data:function(){return{modalVisible:!1,nestedModalVisible:!1}},methods:{closeModal:function(){this.trap.deactivate()},showModal:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.modalVisible=!0,t.next=3,e.$nextTick();case 3:e.trap=Object(i.a)(e.$refs.modal),e.trap.activate({onDeactivate:function(){e.modalVisible=!1},initialFocus:e.$refs.intialInput});case 5:case"end":return t.stop()}}),t)})))()},nestedTrap:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.nestedModalVisible=!0,t.next=3,e.$nextTick();case 3:e.nestedTrap=Object(i.a)(e.$refs.nestedModal),e.nestedTrap.activate({onDeactivate:function(){e.nestedModalVisible=!1},initialFocus:e.$refs.nestedInitialInput});case 5:case"end":return t.stop()}}),t)})))()},closeNestedModal:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.nestedTrap.deactivate();case 1:case"end":return t.stop()}}),t)})))()}}},r=n(1),s=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("button",{on:{click:e.showModal}},[e._v("\n    Show Modal\n  ")]),e._v(" "),n("Modal",{directives:[{name:"show",rawName:"v-show",value:e.modalVisible,expression:"modalVisible"}],ref:"modal"},[n("div",[n("p",[e._v("I am a Modal")]),e._v(" "),n("button",{on:{click:e.nestedTrap}},[e._v("Show nested Modal")]),e._v(" "),n("button",{on:{click:e.closeModal}},[e._v("Close Modal")]),e._v(" "),n("input",{ref:"intialInput",attrs:{tabindex:"0"}}),e._v(" "),n("input"),e._v(" "),n("input")])]),e._v(" "),n("Modal",{directives:[{name:"show",rawName:"v-show",value:e.nestedModalVisible,expression:"nestedModalVisible"}],ref:"nestedModal"},[n("div",[n("p",[e._v("I am "),n("strong",[e._v("nested")]),e._v(" a Modal")]),e._v(" "),n("button",{on:{click:e.closeNestedModal}},[e._v("Close nested Modal")]),e._v(" "),n("input",{ref:"nestedInitialInput",attrs:{tabindex:"0"}}),e._v(" "),n("input"),e._v(" "),n("input")])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);