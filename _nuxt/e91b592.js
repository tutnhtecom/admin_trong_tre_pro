(window.webpackJsonp=window.webpackJsonp||[]).push([[103,15],{1057:function(t,e,n){"use strict";n(900)},1058:function(t,e,n){var o=n(21)((function(i){return i[1]}));o.push([t.i,".box-x[data-v-1e9d50bc]{background:#fff;border:1px solid #e5e5e5;border-radius:10px;overflow:hidden}.box-x .box-img[data-v-1e9d50bc]{border-radius:10px;height:109px;overflow:hidden}.box-x .box-img img[data-v-1e9d50bc]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.medias i[data-v-1e9d50bc]{font-style:italic;font-weight:400;margin-left:7px}.medias .label[data-v-1e9d50bc],.medias i[data-v-1e9d50bc]{color:#2d2d2d;font-family:SVN-Gilroy;font-size:14px;line-height:normal}.medias .label[data-v-1e9d50bc]{align-items:center;display:flex;font-style:normal;font-weight:600;margin-bottom:10px}@media(max-width:600px){.medias .btn-type[data-v-1e9d50bc]{margin-bottom:7px;margin-right:7px;padding:8px 25px}}",""]),o.locals={},t.exports=o},1213:function(t,e,n){"use strict";n.r(e);var o=n(850),r=n(1153),d=(n(20),n(13)),l=(n(42),n(14),n(6),n(65)),c=(n(506),n(29)),f=n.n(c),m={layout:"admin",data:function(){return{title:{name:"Sửa cài đặt",previous:"/admin/system/configs"},type:null,selected:1,options:[{value:0,text:"Mới nhất"},{value:1,text:"Hướng dẫn"},{value:2,text:"Giới thiệu"},{value:3,text:"Hoạt động"}],suneditorInstance:null,noi_dung:"Nhập nội dung",tieu_de:"",name:"",status:!0,link:"",image:null,file:null}},validate:function(t){var e=t.params;return/^\d+$/.test(e.id)},computed:{id:function(){return this.$route.params.id},token:function(){return JSON.parse(localStorage.getItem("user")).auth_key}},methods:{load_data:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.default.get("he-thong/get-cau-hinh?id="+t.id,{"Content-Type":"multipart/form-data",Authorization:"Bearer "+t.token}).then((function(e){var n,o=null==e||null===(n=e.data)||void 0===n?void 0:n.data;t.data=o,t.noi_dung=null==o?void 0:o.content,t.title=null==o?void 0:o.name,t.name=null==o?void 0:o.name,t.suneditorInstance.setContents(null==o?void 0:o.content)}));case 2:case"end":return e.stop()}}),e)})))()},send_data:function(t){var e=this;return Object(d.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),(o=new FormData).append("id",e.id),o.append("content",e.noi_dung),n.next=6,l.default.post("he-thong/cap-nhat-cau-hinh",o,{"Content-Type":"multipart/form-data",Authorization:"Bearer "+e.token}).then((function(t){var n;200==(null==t?void 0:t.status)&&(f.a.success(null==t||null===(n=t.data)||void 0===n?void 0:n.message),e.$router.push("/admin/system/configs"))}));case 6:case"end":return n.stop()}}),n)})))()}},mounted:function(){this.load_data(),this.$store.dispatch("title/set_title",this.title)},components:{}},v=(n(1057),n(36)),component=Object(v.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-mp"},[e("div",{staticClass:"medias"},[e(r.a,{},[e(o.a,{attrs:{xs:"12",sm:"12",md:"7",lg:"7",xl:"7"}},[e("div",{staticStyle:{"min-width":"245px"}},[e("div",[e("div",[e("b-form-group",[e("label",[e("b",[t._v("Tiêu đề:")])]),t._v(" "),e("b-form-input",{attrs:{name:"ck",disabled:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1)]),t._v(" "),e("div",[e("b-form-group",[e("div",{staticClass:"label"},[e("span",{staticClass:"me-2"},[e("svg",{attrs:{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M11.0202 1.3335H5.98016C3.46016 1.3335 2.8335 2.00683 2.8335 4.6935V12.2002C2.8335 13.9735 3.80683 14.3935 4.98683 13.1268L4.9935 13.1202C5.54016 12.5402 6.3735 12.5868 6.84683 13.2202L7.52016 14.1202C8.06016 14.8335 8.9335 14.8335 9.4735 14.1202L10.1468 13.2202C10.6268 12.5802 11.4602 12.5335 12.0068 13.1202C13.1935 14.3868 14.1602 13.9668 14.1602 12.1935V4.6935C14.1668 2.00683 13.5402 1.3335 11.0202 1.3335ZM10.3935 6.66016L10.0602 7.00016H10.0535L8.0335 9.02016C7.94683 9.10683 7.76683 9.20016 7.64016 9.2135L6.74016 9.34683C6.4135 9.3935 6.18683 9.16016 6.2335 8.84016L6.36016 7.9335C6.38016 7.80683 6.46683 7.6335 6.5535 7.54016L8.58016 5.52016L8.9135 5.18016C9.1335 4.96016 9.38016 4.80016 9.64683 4.80016C9.8735 4.80016 10.1202 4.90683 10.3935 5.18016C10.9935 5.78016 10.8002 6.2535 10.3935 6.66016Z",fill:"#00C092"}})])]),t._v("\n                                Nội dung\n                            ")]),t._v(" "),e("b-form-textarea",{attrs:{id:"textarea",placeholder:"Enter something...",rows:"7","max-rows":"6"},model:{value:t.noi_dung,callback:function(e){t.noi_dung=e},expression:"noi_dung"}})],1)],1),t._v(" "),e("div",{staticClass:"mt-6"},[e("form",{on:{submit:t.send_data}},[e("button-component",{attrs:{typeBtn:"submit"}},[t._v("Lưu")])],1)])])])],1)],1)])}),[],!1,null,"1e9d50bc",null);e.default=component.exports;installComponents(component,{ButtonComponent:n(729).default})},724:function(t,e,n){var content=n(732);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("6ef7f2ae",content,!0,{sourceMap:!1})},729:function(t,e,n){"use strict";n.r(e);var o=n(277),r={props:{addClass:{type:String,default:""},typeBtn:{type:String,default:"button"}},computed:{computedClasses:function(){return""==this.addClass?"primary button":this.addClass+" button"}}},d=(n(731),n(36)),component=Object(d.a)(r,(function(){var t=this;return(0,t._self._c)(o.a,{class:t.computedClasses+" hover",attrs:{height:"100%",type:t.typeBtn}},[t._t("default")],2)}),[],!1,null,"8383f84e",null);e.default=component.exports},731:function(t,e,n){"use strict";n(724)},732:function(t,e,n){var o=n(21)((function(i){return i[1]}));o.push([t.i,".button[data-v-8383f84e]{border-radius:42px;color:#fff!important;cursor:pointer;font-family:SVN-Gilroy!important;font-size:16px!important;font-style:normal!important;font-weight:500!important;padding:12px!important;text-align:center!important;transition:.3s;width:100%!important}.danger[data-v-8383f84e]{background:#fc4d32;border:1px solid #fc4d32!important}.danger[data-v-8383f84e]:hover{background:#e7371c}.silver[data-v-8383f84e]{background:#e5e5e5!important;color:#2d2d2d!important}.silver[data-v-8383f84e]:hover{background:#9c9c9c}.primary[data-v-8383f84e]{background:#0056b1!important;border:1px solid #0056b1!important}.primary[data-v-8383f84e]:hover{background:#004691!important}.hover[data-v-8383f84e]{font-family:SVN-Gilroy;font-size:16px;font-style:normal;font-weight:500;line-height:20px;transition:.3s}.btn-header[data-v-8383f84e]{display:inline;padding:8px 28px}",""]),o.locals={},t.exports=o},900:function(t,e,n){var content=n(1058);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("5384d03c",content,!0,{sourceMap:!1})}}]);