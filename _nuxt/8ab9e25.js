(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{773:function(t,e,n){var content=n(789);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("01dee803",content,!0,{sourceMap:!1})},788:function(t,e,n){"use strict";n(773)},789:function(t,e,n){var o=n(21)((function(i){return i[1]}));o.push([t.i,".order-service-title[data-v-8b6aa0de]{color:#2d2d2d;font-family:SVN-Gilroy;font-size:14px;font-style:normal;font-weight:600;line-height:normal}.month-picker[data-v-8b6aa0de]{width:118px}.chart-title[data-v-8b6aa0de]{color:#2d2d2d;font-family:SVN-Gilroy;font-size:16px;font-style:normal;font-weight:700;line-height:normal}.text-c-danger[data-v-8b6aa0de]{color:#fa4d32}.text-c-primary[data-v-8b6aa0de]{color:#0056b1}.text-c-warning[data-v-8b6aa0de]{color:#ffb761}.text-c-success[data-v-8b6aa0de]{color:#00c092}.text-admin .text-span[data-v-8b6aa0de]{color:rgba(45,45,45,.8);font-size:12px;font-weight:400}.text-admin .text[data-v-8b6aa0de],.text-admin .text-span[data-v-8b6aa0de]{font-family:SVN-Gilroy;font-style:normal;line-height:normal}.text-admin .text[data-v-8b6aa0de]{font-size:14px;font-weight:600}.text-admin .text-c-primary[data-v-8b6aa0de]{color:#0056b1!important}.text-admin .text-c-warning[data-v-8b6aa0de]{color:#ffb761!important}.text-admin .text-c-danger[data-v-8b6aa0de]{color:#fc4d32!important}.text-admin .text-c-success[data-v-8b6aa0de]{color:#00c092!important}.c-primary[data-v-8b6aa0de]{background:#0056b1!important}.c-danger[data-v-8b6aa0de]{background:#fc4d32!important}.c-warning[data-v-8b6aa0de]{background:#ffb761!important}.c-success[data-v-8b6aa0de]{background:#00c092!important}",""]),o.locals={},t.exports=o},808:function(t,e,n){"use strict";n.r(e);var o=n(277),l=n(1157),r=n(1154),d=n(715),c=n(781),v=n(13),_=(n(42),n(6),n(15),n(28),n(65)),h=(n(506),n(29),{name:"CustomerReport",data:function(){return{title:{name:null,previous:"/admin/dashboard"},data:null,date:(new Date).toISOString(),date1:(new Date).toISOString(),month:1,menu:!1,modal:!1,modal1:!1,selected:0,options:[{value:0,text:"Tất cả"},{value:1,text:"Giáo viên"}]}},computed:{token:function(){return JSON.parse(localStorage.getItem("user")).auth_key}},methods:{load_data:function(){var t=this;return Object(v.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.default.get("bao-cao/tong-quan-khach-hang?thang="+(null!==(n=t.month)&&void 0!==n?n:"")+"&tuNgay=".concat(t.date1,"&denNgay=").concat(t.date),{"Content-Type":"multipart/form-data",Authorization:"Bearer "+t.token}).then((function(e){var n;console.log(e),t.data=null==e||null===(n=e.data)||void 0===n?void 0:n.data}));case 2:case"end":return e.stop()}}),e)})))()},updateFilter:function(filter){var t=this;return Object(v.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,filter;case 2:if(e.t1=n=e.sent,e.t0=null!==e.t1,!e.t0){e.next=6;break}e.t0=void 0!==n;case 6:if(!e.t0){e.next=10;break}e.t2=n,e.next=11;break;case 10:e.t2="";case 11:return t.selectedFilter=e.t2,e.next=14,t.load_data();case 14:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=new Date,e=(o=t.getFullYear())+"-"+(n=("0"+(t.getMonth()+1)).slice(-2))+"-"+(l=("0"+t.getDate()).slice(-2));this.date=e;var n=("0"+t.getMonth()).slice(-2),o=t.getFullYear(),l=("0"+t.getDate()).slice(-2);this.date1=o+"-"+n+"-"+l,this.$store.dispatch("title/set_title",this.title),this.month=this.date.split("-")[2]+"/"+this.date.split("-")[1]+"/"+this.date.split("-")[0],this.load_data()},watch:{date:function(){console.log(this.date);var t=this.date.split("-");console.log(t),this.month=t[2]+"/"+t[1]+"/"+t[0],this.load_data()},date1:function(){console.log(this.date1);var t=this.date1.split("-");console.log(t),this.month=t[2]+"/"+t[1]+"/"+t[0],this.load_data()}}}),m=(n(788),n(36)),component=Object(m.a)(h,(function(){var t=this,e=t._self._c;return e("b-card",{staticClass:"mb-2 hover-card h-100",staticStyle:{"min-width":"245px"}},[e("div",{staticClass:"d-flex justify-content-between align-center"},[e("div",{staticClass:"w-100"},[e("div",{staticClass:"d-flex justify-content-between align-items-center mb-2"},[e("label",{staticClass:"chart-title"},[t._v("Tổng quan đơn hàng")]),t._v(" "),e("div",{staticClass:"d-flex"},[e(r.a,{ref:"dialog1",attrs:{"return-value":t.date1,persistent:"",width:"290px"},on:{"update:returnValue":function(e){t.date1=e},"update:return-value":function(e){t.date1=e}},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,l=n.attrs;return[e(c.a,t._g(t._b({staticClass:"month-picker me-3",attrs:{label:"","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.date1,callback:function(e){t.date1=e},expression:"date1"}},"v-text-field",l,!1),o))]}}]),model:{value:t.modal1,callback:function(e){t.modal1=e},expression:"modal1"}},[t._v(" "),e(l.a,{attrs:{type:"date",scrollable:""},model:{value:t.date1,callback:function(e){t.date1=e},expression:"date1"}},[e(d.a),t._v(" "),e(o.a,{attrs:{text:"",color:"primary"},on:{click:function(e){t.modal1=!1}}},[t._v("\n                                Cancel\n                            ")]),t._v(" "),e(o.a,{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.dialog1.save(t.date1)}}},[t._v("\n                                OK\n                            ")])],1)],1),t._v(" "),e(r.a,{ref:"dialog",attrs:{"return-value":t.date,persistent:"",width:"290px"},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,l=n.attrs;return[e(c.a,t._g(t._b({staticClass:"month-picker",attrs:{label:"","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},"v-text-field",l,!1),o))]}}]),model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[t._v(" "),e(l.a,{attrs:{type:"date",scrollable:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[e(d.a),t._v(" "),e(o.a,{attrs:{text:"",color:"primary"},on:{click:function(e){t.modal=!1}}},[t._v("\n                                Cancel\n                            ")]),t._v(" "),e(o.a,{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.dialog.save(t.date)}}},[t._v("\n                                OK\n                            ")])],1)],1)],1)]),t._v(" "),t._l(t.data,(function(n,o){return e("div",{key:o,staticClass:"w-100 mb-4"},[e("div",{staticClass:"order-service-title mb-2"},[t._v("\n                    "+t._s(null==n?void 0:n.ten_dich_vu)+"\n                ")]),t._v(" "),e("b-progress",{staticClass:"mb-1",attrs:{max:"100","show-value":""}},[e("b-progress-bar",{attrs:{value:100*parseInt(null==n?void 0:n.dang_khao_sat)/(parseInt(null==n?void 0:n.dang_day)+parseInt(null==n?void 0:n.chua_co_gv)+parseInt(null==n?void 0:n.da_huy)+parseInt(null==n?void 0:n.hoan_thanh)+parseInt(null==n?void 0:n.dang_khao_sat)),variant:"info"}}),t._v(" "),e("b-progress-bar",{staticClass:"c-primary",attrs:{value:100*parseInt(null==n?void 0:n.dang_day)/(parseInt(null==n?void 0:n.dang_day)+parseInt(null==n?void 0:n.chua_co_gv)+parseInt(null==n?void 0:n.da_huy)+parseInt(null==n?void 0:n.hoan_thanh)+parseInt(null==n?void 0:n.dang_khao_sat)),variant:"success"}}),t._v(" "),e("b-progress-bar",{staticClass:"c-warning",attrs:{value:100*parseInt(null==n?void 0:n.chua_co_gv)/(parseInt(null==n?void 0:n.dang_day)+parseInt(null==n?void 0:n.chua_co_gv)+parseInt(null==n?void 0:n.da_huy)+parseInt(null==n?void 0:n.hoan_thanh)+parseInt(null==n?void 0:n.dang_khao_sat)),variant:"warning"}}),t._v(" "),e("b-progress-bar",{staticClass:"c-danger",attrs:{value:100*parseInt(null==n?void 0:n.da_huy)/(parseInt(null==n?void 0:n.dang_day)+parseInt(null==n?void 0:n.chua_co_gv)+parseInt(null==n?void 0:n.da_huy)+parseInt(null==n?void 0:n.hoan_thanh)+parseInt(null==n?void 0:n.dang_khao_sat)),variant:"danger"}}),t._v(" "),e("b-progress-bar",{staticClass:"c-success",attrs:{value:100*parseInt(null==n?void 0:n.hoan_thanh)/(parseInt(null==n?void 0:n.dang_day)+parseInt(null==n?void 0:n.chua_co_gv)+parseInt(null==n?void 0:n.da_huy)+parseInt(null==n?void 0:n.hoan_thanh)+parseInt(null==n?void 0:n.dang_khao_sat)),variant:"info"}})],1),t._v(" "),e("div",{staticClass:"d-flex justify-content-between align-items-center mb-2"},[e("div",{staticClass:"text-admin"},[e("span",{staticClass:"text text-info"},[t._v(t._s(null==n?void 0:n.dang_khao_sat))]),t._v(" "),e("span",{staticClass:"text-span"},[t._v("Đang khảo sát")])]),t._v(" "),e("div",{staticClass:"text-admin"},[e("span",{staticClass:"text text-c-primary"},[t._v(t._s(null==n?void 0:n.dang_day))]),t._v(" "),e("span",{staticClass:"text-span"},[t._v("Đang dạy")])]),t._v(" "),e("div",{staticClass:"text-admin"},[e("span",{staticClass:"text text-c-warning"},[t._v(t._s(null==n?void 0:n.chua_co_gv))]),t._v(" "),e("span",{staticClass:"text-span"},[t._v("Chưa có GV")])]),t._v(" "),e("div",{staticClass:"text-admin"},[e("span",{staticClass:"text text-c-danger"},[t._v(t._s(null==n?void 0:n.da_huy))]),t._v(" "),e("span",{staticClass:"text-span"},[t._v("Hủy")])]),t._v(" "),e("div",{staticClass:"text-admin"},[e("span",{staticClass:"text text-c-success"},[t._v(t._s(null==n?void 0:n.hoan_thanh))]),t._v(" "),e("span",{staticClass:"text-span"},[t._v("Hoàn thành")])])])],1)}))],2)])])}),[],!1,null,"8b6aa0de",null);e.default=component.exports}}]);