(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/detail"],{"03bf":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=o(e("a34a"));function o(n){return n&&n.__esModule?n:{default:n}}function r(n,t,e,u,o,r,i){try{var a=n[r](i),c=a.value}catch(s){return void e(s)}a.done?t(c):Promise.resolve(c).then(u,o)}function i(n){return function(){var t=this,e=arguments;return new Promise((function(u,o){var i=n.apply(t,e);function a(n){r(i,u,o,a,c,"next",n)}function c(n){r(i,u,o,a,c,"throw",n)}a(void 0)}))}}var a={data:function(){return{goodsInfo:{},list:[{name:"商品详情"},{name:"商品评论"},{name:"推荐商品"}],current:0,commentList:[],isCollect:0,like_goodsList:[],loading:!1,cartCount:0}},onLoad:function(n){this.getGoodsDetail(n.goodsId),this.getCartsCount()},methods:{getGoodsDetail:function(n){var t=this;return i(u.default.mark((function e(){var o;return u.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$u.api.goodsDetail(n);case 3:o=e.sent,t.loading=!1,t.goodsInfo=o.goods,t.isCollect=o.goods.is_collect,t.commentList=o.goods.comments,t.like_goodsList=o.like_goods;case 9:case"end":return e.stop()}}),e)})))()},changeTabs:function(n){this.current=n},collectionHandle:function(){var n=this;return i(u.default.mark((function t(){return u.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n.$u.utils.isLogin()){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,n.$u.api.collectsCollectionAndCancel(n.goodsInfo.id);case 4:0===n.isCollect?(n.isCollect=1,n.$u.toast("收藏成功")):(n.isCollect=0,n.$u.toast("取消收藏成功"));case 5:case"end":return t.stop()}}),t)})))()},addCart:function(){var n=this;return i(u.default.mark((function t(){var e;return u.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={goods_id:n.goodsInfo.id},t.next=3,n.$u.api.cartsAdd(e);case 3:n.getCartsCount(),n.$u.toast("添加成功");case 5:case"end":return t.stop()}}),t)})))()},getCartsCount:function(){var n=this;return i(u.default.mark((function t(){var e;return u.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.$u.utils.isLogin()){t.next=6;break}return t.next=3,n.$u.api.cartsList();case 3:e=t.sent,console.log(e),n.cartCount=e.data.length;case 6:case"end":return t.stop()}}),t)})))()},toCart:function(){this.$u.route({type:"switchTab",url:"pages/cart/cart"})}}};t.default=a},"3bd0":function(n,t,e){"use strict";(function(n){e("21ac");u(e("66fd"));var t=u(e("fb97"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},"5f43":function(n,t,e){"use strict";var u=e("c26d"),o=e.n(u);o.a},"5ff9":function(n,t,e){"use strict";e.r(t);var u=e("03bf"),o=e.n(u);for(var r in u)"default"!==r&&function(n){e.d(t,n,(function(){return u[n]}))}(r);t["default"]=o.a},"9fc4":function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return u}));var u={uImage:function(){return e.e("uview-ui/components/u-image/u-image").then(e.bind(null,"bac7"))},uTabs:function(){return e.e("uview-ui/components/u-tabs/u-tabs").then(e.bind(null,"b6e3"))},uParse:function(){return Promise.all([e.e("common/vendor"),e.e("uview-ui/components/u-parse/u-parse")]).then(e.bind(null,"2d12"))},uIcon:function(){return e.e("uview-ui/components/u-icon/u-icon").then(e.bind(null,"3b36"))},uRow:function(){return e.e("uview-ui/components/u-row/u-row").then(e.bind(null,"e716"))},uCol:function(){return e.e("uview-ui/components/u-col/u-col").then(e.bind(null,"60af"))},goodsCard:function(){return e.e("components/goods-card/goods-card").then(e.bind(null,"3d7a"))},uBadge:function(){return e.e("uview-ui/components/u-badge/u-badge").then(e.bind(null,"bc99"))},uSkeleton:function(){return e.e("uview-ui/components/u-skeleton/u-skeleton").then(e.bind(null,"f060"))}},o=function(){var n=this,t=n.$createElement;n._self._c},r=[]},c26d:function(n,t,e){},fb97:function(n,t,e){"use strict";e.r(t);var u=e("9fc4"),o=e("5ff9");for(var r in o)"default"!==r&&function(n){e.d(t,n,(function(){return o[n]}))}(r);e("5f43");var i,a=e("f0c5"),c=Object(a["a"])(o["default"],u["b"],u["c"],!1,null,"9eafbdfe",null,!1,u["a"],i);t["default"]=c.exports}},[["3bd0","common/runtime","common/vendor"]]]);