webpackJsonp([0],{"5V59":function(t,e){},"6f/g":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"a-menu"},[s("div",{staticClass:"logo"},[t._v("权限管理系统")]),t._v(" "),s("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":t.$route.path,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"}},t._l(this.$store.state.login.newRouter[0].children,function(e,n){return s("el-menu-item",{key:n,attrs:{index:e.path},on:{click:function(s){t.routerLink(e)}}},[s("i",{class:e.icon}),t._v(" "),s("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.label))])])}))],1)},staticRenderFns:[]};var i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"topbar"},[e("div",{staticClass:"info"},[e("span",{staticClass:"username"},[this._v(this._s(this.$store.state.login.username))]),this._v(" "),e("span",{staticClass:"logout",on:{click:this.logout}},[this._v("注销")])])])},staticRenderFns:[]};var a={components:{Menu:s("VU/8")({methods:{routerLink:function(t){this.$router.push({path:t.path})}}},n,!1,function(t){s("VIeW")},"data-v-49133356",null).exports,Topbar:s("VU/8")({methods:{logout:function(){var t=this;this.$store.dispatch("logout").then(function(){t.$router.push({path:"/logout"})})}}},i,!1,function(t){s("5V59")},"data-v-44d7afd5",null).exports}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"layout"},[e("Menu"),this._v(" "),e("div",{staticClass:"content"},[e("Topbar"),this._v(" "),e("div",{staticClass:"main"},[e("h2",[this._v(this._s(this.$store.state.login.describe))]),this._v(" "),e("router-view")],1)],1)],1)},staticRenderFns:[]};var r=s("VU/8")(a,o,!1,function(t){s("HTlN")},"data-v-496d2517",null);e.default=r.exports},HTlN:function(t,e){},VIeW:function(t,e){}});
//# sourceMappingURL=0.d3debce05611bc4223b2.js.map