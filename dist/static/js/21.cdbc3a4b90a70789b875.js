webpackJsonp([21],{126:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"supportBank",components:{},data:function(){return{xyks:[{name:"工商银行",db:2,mr:5},{name:"农业银行",db:2,mr:5},{name:"建设银行",db:1,mr:1},{name:"中国银行",db:2,mr:5},{name:"招商银行",db:.5,mr:2},{name:"交通银行",db:1,mr:2},{name:"邮储银行",db:2,mr:5},{name:"中信银行",db:2,mr:5},{name:"兴业银行",db:2,mr:5},{name:"浦发银行",db:2,mr:5},{name:"华夏银行",db:2,mr:5},{name:"平安银行",db:2,mr:5},{name:"光大银行",db:2,mr:5},{name:"广发银行",db:2,mr:5},{name:"北京银行",db:2,mr:5},{name:"上海银行",db:2,mr:5},{name:"民生银行",db:2,mr:5}],cxks:[{name:"工商银行",db:5,mr:5},{name:"农工银行",db:2,mr:5},{name:"中国银行",db:5,mr:5},{name:"建设银行",db:5,mr:5},{name:"邮储银行",db:5,mr:5},{name:"交通银行",db:5,mr:5},{name:"招商银行",db:5,mr:5},{name:"光大银行",db:5,mr:5},{name:"兴业银行",db:5,mr:5},{name:"华夏银行",db:5,mr:5},{name:"中信银行",db:1,mr:2},{name:"广发银行",db:2,mr:5},{name:"民生银行",db:1,mr:5},{name:"平安银行",db:2,mr:5}]}},created:function(){},methods:{}}},143:function(n,e,t){e=n.exports=t(25)(!0),e.push([n.i,".bank-title[data-v-610b7bd1]{height:1.30666rem;display:flex;justify-content:center;align-items:center;background-color:#000;color:#fff}.item-cell[data-v-610b7bd1]{display:flex;flex-wrap:nowrap;height:.93333rem;justify-content:space-between}.bbr[data-v-610b7bd1]{border-right:1px solid #bbb}.bb[data-v-610b7bd1]{border-bottom:1px solid #bbb}.item-cell span[data-v-610b7bd1]{text-align:center;width:33.33333%;display:flex;align-items:center;justify-content:center}","",{version:3,sources:["/Users/jamisonline/Documents/web/ywmjPayV2/src/pages/support/supportBank.vue"],names:[],mappings:"AACA,6BACE,kBAAmB,AACnB,aAAc,AACd,uBAAwB,AACxB,mBAAoB,AACpB,sBAA0B,AAC1B,UAAe,CAChB,AACD,4BACE,aAAc,AACd,iBAAkB,AAClB,iBAAmB,AACnB,6BAA+B,CAChC,AACD,sBACE,2BAAgC,CACjC,AACD,qBACE,4BAAiC,CAClC,AACD,iCACE,kBAAmB,AACnB,gBAAiB,AACjB,aAAc,AACd,mBAAoB,AACpB,sBAAwB,CACzB",file:"supportBank.vue",sourcesContent:["\n.bank-title[data-v-610b7bd1] {\n  height: 1.30666rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #000000;\n  color: #FFFFFF;\n}\n.item-cell[data-v-610b7bd1] {\n  display: flex;\n  flex-wrap: nowrap;\n  height: 0.93333rem;\n  justify-content: space-between;\n}\n.bbr[data-v-610b7bd1] {\n  border-right: solid 1px #bbbbbb;\n}\n.bb[data-v-610b7bd1] {\n  border-bottom: solid 1px #bbbbbb;\n}\n.item-cell span[data-v-610b7bd1] {\n  text-align: center;\n  width: 33.33333%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n"],sourceRoot:""}])},165:function(n,e,t){var a=t(143);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);t(26)("5af530d6",a,!0)},218:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"supportBank"},[t("title",[n._v("支持的银行卡及限额列表")]),n._v(" "),t("div",{staticClass:"content"},[t("div",{staticClass:"bank-title f26 b"},[n._v("\n      贷记卡（信用卡）\n    ")]),n._v(" "),t("ul",[n._m(0),n._v(" "),n._l(n.xyks,function(e,a){return t("li",{staticClass:"item-cell bb bg0 f26"},[t("span",{staticClass:"bbr"},[n._v(n._s(e.name))]),n._v(" "),t("span",{staticClass:"bbr"},[n._v(n._s(e.db)+"万")]),n._v(" "),t("span",[n._v(n._s(e.mr)+"万")])])})],2),n._v(" "),t("div",{staticClass:"bank-title f26 b mt30"},[n._v("\n      借记卡（储蓄卡）\n    ")]),n._v(" "),t("ul",[n._m(1),n._v(" "),n._l(n.cxks,function(e,a){return t("li",{staticClass:"item-cell bb bg0 f26"},[t("span",{staticClass:"bbr"},[n._v(n._s(e.name))]),n._v(" "),t("span",{staticClass:"bbr"},[n._v(n._s(e.db)+"万")]),n._v(" "),t("span",[n._v(n._s(e.mr)+"万")])])})],2)])])},staticRenderFns:[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("li",{staticClass:"item-cell f26",staticStyle:{"background-color":"#ff7963",color:"#FFFFFF"}},[t("span",[n._v("银行")]),n._v(" "),t("span",[n._v("单笔限额")]),n._v(" "),t("span",[n._v("每日限额")])])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("li",{staticClass:"item-cell f26",staticStyle:{"background-color":"#ff7963",color:"#FFFFFF"}},[t("span",[n._v("银行")]),n._v(" "),t("span",[n._v("单笔限额")]),n._v(" "),t("span",[n._v("每日限额")])])}]}},43:function(n,e,t){t(165);var a=t(11)(t(126),t(218),"data-v-610b7bd1",null);n.exports=a.exports}});
//# sourceMappingURL=21.cdbc3a4b90a70789b875.js.map