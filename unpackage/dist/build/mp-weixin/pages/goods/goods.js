(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/goods"],{"08d1":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("a34a"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t){return s(t)||c(t)||i(t)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(t,e){if(t){if("string"===typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,e):void 0}}function c(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function s(t){if(Array.isArray(t))return f(t)}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function d(t,e,n,r,o,a,u){try{var i=t[a](u),c=i.value}catch(s){return void n(s)}i.done?e(c):Promise.resolve(c).then(r,o)}function l(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function u(t){d(a,r,o,u,i,"next",t)}function i(t){d(a,r,o,u,i,"throw",t)}u(void 0)}))}}var m={data:function(){return{tabbar:[],scrollTop:0,current:0,menuHeight:0,menuItemHeight:0,categoryList:[],goodsList:[],keyword:"",page:1,status:"loadmore",loadText:{loading:"加载中",loadmore:"轻轻上拉",nomore:"实在没有了"},category_id:0}},computed:{},onLoad:function(){this.getGoodsData()},methods:{init:function(){this.page=1,this.status="loadmore",this.goodsList=[]},searchGoods:function(){this.init(),this.getGoodsData()},scrollHandle:function(){this.page=this.page+1,this.getGoodsData()},getGoodsData:function(){var t=this;return l(r.default.mark((function e(){var n,o,u;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("nomore"!==t.status){e.next=2;break}return e.abrupt("return");case 2:return t.status="loading",n={title:t.keyword,page:t.page,category_id:t.category_id},e.next=6,t.$u.api.goodsList(n);case 6:o=e.sent,u=[],o.categories.map((function(t){t.children.map((function(t){u.push(t)}))})),t.categoryList=u,t.goodsList=[].concat(a(t.goodsList),a(o.goods.data)),o.goods.data.length<10?t.status="nomore":t.status="loadmore";case 12:case"end":return e.stop()}}),e)})))()},getImg:function(){return Math.floor(35*Math.random())},swichMenu:function(t,e){var n=this;return l(r.default.mark((function o(){return r.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t!=n.current){r.next=2;break}return r.abrupt("return");case 2:if(n.current=t,0!=n.menuHeight&&0!=n.menuItemHeight){r.next=8;break}return r.next=6,n.getElRect("menu-scroll-view","menuHeight");case 6:return r.next=8,n.getElRect("u-tab-item","menuItemHeight");case 8:n.scrollTop=t*n.menuItemHeight+n.menuItemHeight/2-n.menuHeight/2,n.category_id=e,n.init(),n.getGoodsData();case 12:case"end":return r.stop()}}),o)})))()},getElRect:function(e,n){var r=this;new Promise((function(o,a){var u=t.createSelectorQuery().in(r);u.select("."+e).fields({size:!0},(function(t){t?r[n]=t.height:setTimeout((function(){r.getElRect(e)}),10)})).exec()}))}}};e.default=m}).call(this,n("543d")["default"])},"3dbf":function(t,e,n){"use strict";var r=n("cfdf"),o=n.n(r);o.a},"700a":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var r={uSearch:function(){return n.e("uview-ui/components/u-search/u-search").then(n.bind(null,"35c6"))},uLoadmore:function(){return n.e("uview-ui/components/u-loadmore/u-loadmore").then(n.bind(null,"6bab"))}},o=function(){var t=this,e=t.$createElement;t._self._c},a=[]},c244:function(t,e,n){"use strict";(function(t){n("21ac");r(n("66fd"));var e=r(n("c99a"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},c99a:function(t,e,n){"use strict";n.r(e);var r=n("700a"),o=n("f29c");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("3dbf");var u,i=n("f0c5"),c=Object(i["a"])(o["default"],r["b"],r["c"],!1,null,"c8c99fda",null,!1,r["a"],u);e["default"]=c.exports},cfdf:function(t,e,n){},f29c:function(t,e,n){"use strict";n.r(e);var r=n("08d1"),o=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=o.a}},[["c244","common/runtime","common/vendor"]]]);