(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-book-book"],{"1fab":function(e,t,i){var o=i("f9e3");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=i("4f06").default;n("7849c348",o,!0,{sourceMap:!1,shadowMode:!1})},"2e11":function(e,t,i){"use strict";i.r(t);var o=i("3444"),n=i.n(o);for(var a in o)"default"!==a&&function(e){i.d(t,e,function(){return o[e]})}(a);t["default"]=n.a},"2fb8":function(e,t,i){"use strict";i.r(t);var o=i("8edb"),n=i("2e11");for(var a in n)"default"!==a&&function(e){i.d(t,e,function(){return n[e]})}(a);i("7122");var r=i("2877"),s=Object(r["a"])(n["default"],o["a"],o["b"],!1,null,"73977c05",null);t["default"]=s.exports},3444:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={props:["book"],data:function(){return{showLike:!0}}};t.default=o},"3aea":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".book-container[data-v-de70069e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:100%}.sub-container[data-v-de70069e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background-color:#f5f5f5;margin-top:%?100?%;width:100%;padding-bottom:20px}.box[data-v-de70069e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;border-radius:50px;background-color:#f5f5f5;height:%?68?%;width:%?700?%;color:#999}.header[data-v-de70069e]{position:fixed;background-color:#fff;height:%?100?%;width:100%;border-top:1px solid #f5f5f5;border-bottom:1px solid #f5f5f5;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-shadow:0 0 3px 0 #e3e3e3;box-shadow:0 0 3px 0 #e3e3e3;z-index:99}.head-img[data-v-de70069e]{width:%?106?%;height:%?34?%;margin-top:%?40?%}.box uni-image[data-v-de70069e]{margin-right:10px;width:14px;height:14px;margin-bottom:-2px}.books-container[data-v-de70069e]{margin-top:%?10?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:0 %?90?%}.books-container v-book[data-v-de70069e]{margin-bottom:%?10?%}",""])},"3cde":function(e,t,i){"use strict";var o=i("61cf"),n=i.n(o);n.a},"42c9":function(e,t,i){"use strict";i.r(t);var o=i("aac6"),n=i("c522");for(var a in n)"default"!==a&&function(e){i.d(t,e,function(){return n[e]})}(a);i("3cde");var r=i("2877"),s=Object(r["a"])(n["default"],o["a"],o["b"],!1,null,"de70069e",null);t["default"]=s.exports},"61cf":function(e,t,i){var o=i("3aea");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=i("4f06").default;n("038fa06d",o,!0,{sourceMap:!1,shadowMode:!1})},7122:function(e,t,i){"use strict";var o=i("1fab"),n=i.n(o);n.a},"8edb":function(e,t,i){"use strict";var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"book-item-container"},[i("v-uni-image",{attrs:{src:e.book.image}}),i("v-uni-view",{staticClass:"description"},[i("v-uni-text",{staticClass:"title"},[e._v(e._s(e.book.title))]),i("v-uni-text",{staticClass:"author"},[e._v(e._s(e.book.author))]),e.showLike?i("v-uni-view",{staticClass:"foot"},[i("v-uni-text",{staticClass:"footer"},[e._v(e._s(e.book.fav_nums)+" 喜欢")])],1):e._e()],1)],1)},n=[];i.d(t,"a",function(){return o}),i.d(t,"b",function(){return n})},aac6:function(e,t,i){"use strict";var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.searching?e._e():i("v-uni-view",{staticClass:"book-container"},[i("v-uni-view",{staticClass:"header"},[i("v-uni-view",{staticClass:"box",on:{click:function(t){t=e.$handleEvent(t),e.onSearching(t)}}},[i("v-uni-image",{attrs:{src:"../../static/search.png"}}),i("v-uni-text",[e._v("搜索书籍")])],1)],1),i("v-uni-view",{staticClass:"sub-container"},[i("v-uni-image",{staticClass:"head-img",attrs:{src:"../../static/quality.png"}}),i("v-uni-view",{staticClass:"books-container"},[e._l(e.books,function(e,t){return[i("v-book",{key:t,attrs:{book:e}})]})],2)],1)],1)},n=[];i.d(t,"a",function(){return o}),i.d(t,"b",function(){return n})},c522:function(e,t,i){"use strict";i.r(t);var o=i("fbba"),n=i.n(o);for(var a in o)"default"!==a&&function(e){i.d(t,e,function(){return o[e]})}(a);t["default"]=n.a},f9e3:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".book-item-container[data-v-73977c05]{margin-top:%?30?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;-webkit-box-shadow:2px 2px 3px #e3e3e3;box-shadow:2px 2px 3px #e3e3e3;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:%?240?%;height:%?360?%}.book-item-container uni-image[data-v-73977c05]{width:100%;height:100%;border-radius:2px}.description[data-v-73977c05]{width:%?216?%;position:absolute;bottom:0;background-color:#fff;padding:%?5?% %?10?% %?8?% %?15?%;font-size:%?24?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-bottom-right-radius:2px;border-bottom-left-radius:2px}.title[data-v-73977c05]{margin-top:%?10?%;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.author[data-v-73977c05]{font-size:%?20?%;color:#999;margin-bottom:%?10?%;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.foot[data-v-73977c05]{font-size:%?20?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.footer[data-v-73977c05]{color:#666}",""])},fbba:function(e,t,i){"use strict";var o=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(i("2fb8")),a={data:function(){return{books:[{title:"忘，刑警",author:"陈浩基",fav_nums:100,image:"https://img3.doubanio.com/view/subject/m/public/s33467424.jpg"},{title:"半泽直树1",author:"池井户润",fav_nums:130,image:"https://img3.doubanio.com/view/subject/m/public/s33487932.jpg"},{title:"张岪与木心",author:"陈丹青",fav_nums:300,image:"https://img1.doubanio.com/view/subject/m/public/s33462098.jpg"},{title:"三月十五",author:"[美]桑顿·怀尔德",fav_nums:1e3,image:"https://img9.doubanio.com/view/subject/m/public/s33472456.jpg"},{title:"日本書紀",author:"[日]舍人亲王",fav_nums:100,image:"https://img3.doubanio.com/view/subject/m/public/s33496954.jpg"},{title:"恐妻家",author:"[日] 伊坂幸太郎",fav_nums:100,image:"https://img3.doubanio.com/view/subject/m/public/s33485390.jpg"}],searching:!1,more:""}},components:{VBook:n.default},methods:{onSearching:function(){uni.showToast({title:"暂不能搜索，抱歉",duration:1e3})}}};t.default=a}}]);