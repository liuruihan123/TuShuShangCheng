(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/center/personInfo"],{"0368":function(n,t,e){"use strict";var u=e("f506"),r=e.n(u);r.a},4393:function(n,t,e){"use strict";(function(n){e("21ac");u(e("66fd"));var t=u(e("a56b"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},9855:function(n,t,e){"use strict";e.r(t);var u=e("e2a9"),r=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,(function(){return u[n]}))}(a);t["default"]=r.a},a56b:function(n,t,e){"use strict";e.r(t);var u=e("f94c"),r=e("9855");for(var a in r)"default"!==a&&function(n){e.d(t,n,(function(){return r[n]}))}(a);e("0368");var o,c=e("f0c5"),i=Object(c["a"])(r["default"],u["b"],u["c"],!1,null,"69933fbb",null,!1,u["a"],o);t["default"]=i.exports},e2a9:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(e("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function a(n,t,e,u,r,a,o){try{var c=n[a](o),i=c.value}catch(f){return void e(f)}c.done?t(i):Promise.resolve(i).then(u,r)}function o(n){return function(){var t=this,e=arguments;return new Promise((function(u,r){var o=n.apply(t,e);function c(n){a(o,u,r,c,i,"next",n)}function i(n){a(o,u,r,c,i,"throw",n)}c(void 0)}))}}var c={data:function(){return{name:""}},onLoad:function(n){this.name=n.name},methods:{submit:function(){var n=this;return o(u.default.mark((function t(){return u.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n.name){t.next=2;break}return t.abrupt("return",n.$u.toast("昵称不能为空"));case 2:return t.next=4,n.$u.api.userInfoUpdate({name:n.name});case 4:n.$u.toast("更新用户信息成功"),n.$u.utils.updateUserInfo(),n.$u.route({type:"switchTab",url:"pages/center/index"});case 7:case"end":return t.stop()}}),t)})))()}}};t.default=c},f506:function(n,t,e){},f94c:function(n,t,e){"use strict";e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return u}));var u={uButton:function(){return e.e("uview-ui/components/u-button/u-button").then(e.bind(null,"8b39"))}},r=function(){var n=this,t=n.$createElement;n._self._c},a=[]}},[["4393","common/runtime","common/vendor"]]]);