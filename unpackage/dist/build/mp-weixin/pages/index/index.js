(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0573":function(n,t,e){"use strict";(function(n){e("21ac");r(e("66fd"));var t=r(e("414e"));function r(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},1836:function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){return r}));var r={uSwiper:function(){return e.e("uview-ui/components/u-swiper/u-swiper").then(e.bind(null,"ca81"))},uTabs:function(){return e.e("uview-ui/components/u-tabs/u-tabs").then(e.bind(null,"b6e3"))},uRow:function(){return e.e("uview-ui/components/u-row/u-row").then(e.bind(null,"e716"))},uCol:function(){return e.e("uview-ui/components/u-col/u-col").then(e.bind(null,"60af"))},goodsCard:function(){return e.e("components/goods-card/goods-card").then(e.bind(null,"3d7a"))},uSkeleton:function(){return e.e("uview-ui/components/u-skeleton/u-skeleton").then(e.bind(null,"f060"))}},o=function(){var n=this,t=n.$createElement;n._self._c},u=[]},"414e":function(n,t,e){"use strict";e.r(t);var r=e("1836"),o=e("fda7");for(var u in o)"default"!==u&&function(n){e.d(t,n,(function(){return o[n]}))}(u);var a,i=e("f0c5"),c=Object(i["a"])(o["default"],r["b"],r["c"],!1,null,"4c38f9de",null,!1,r["a"],a);t["default"]=c.exports},"6ea0":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(e("a34a"));function o(n){return n&&n.__esModule?n:{default:n}}function u(n){return s(n)||c(n)||i(n)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(n,t){if(n){if("string"===typeof n)return d(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?d(n,t):void 0}}function c(n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}function s(n){if(Array.isArray(n))return d(n)}function d(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function f(n,t,e,r,o,u,a){try{var i=n[u](a),c=i.value}catch(s){return void e(s)}i.done?t(c):Promise.resolve(c).then(r,o)}function l(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var u=n.apply(t,e);function a(n){f(u,r,o,a,i,"next",n)}function i(n){f(u,r,o,a,i,"throw",n)}a(void 0)}))}}var p={data:function(){return{swiperList:[],navList:[{name:"默认"},{name:"销量"},{name:"推荐"},{name:"最新"}],currentIndex:0,goodsList:[{},{},{},{}],page:1,loading:!1}},onLoad:function(){this.getIndexData()},onReachBottom:function(){this.page+=1,this.getIndexData()},methods:{getIndexData:function(){var n=this;return l(r.default.mark((function t(){var e,o;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n.loading=!0,e={page:n.page},1===n.currentIndex&&(e.sales=1),2===n.currentIndex&&(e.recommend=1),3===n.currentIndex&&(e.new=1),t.next=7,n.$u.api.index(e);case 7:o=t.sent,n.loading=!1,n.swiperList=o.slides,n.goodsList=n.goodsList.pop().title?[].concat(u(n.goodsList),u(o.goods.data)):o.goods.data;case 11:case"end":return t.stop()}}),t)})))()},navChange:function(n){this.currentIndex=n,this.goodsList=[{},{},{},{}],this.page=1,this.getIndexData()}}};t.default=p},fda7:function(n,t,e){"use strict";e.r(t);var r=e("6ea0"),o=e.n(r);for(var u in r)"default"!==u&&function(n){e.d(t,n,(function(){return r[n]}))}(u);t["default"]=o.a}},[["0573","common/runtime","common/vendor"]]]);