(window.webpackJsonp=window.webpackJsonp||[]).push([[67,15,30],{1053:function(t,e,n){"use strict";n(898)},1054:function(t,e,n){var o=n(21)((function(i){return i[1]}));o.push([t.i,".note[data-v-7aeecb6a]{left:16px;position:absolute;top:6px;z-index:1}.box-img[data-v-7aeecb6a]{border:1px solid #e5e5e5;border-radius:0 10px 10px 10px;height:225px;min-width:353px;width:100%}.box-img img[data-v-7aeecb6a]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.span1[data-v-7aeecb6a]{font-weight:400}.span1[data-v-7aeecb6a],.span2[data-v-7aeecb6a]{color:#fff;font-family:SVN-Gilroy;font-size:14px;font-style:normal;line-height:20px}.span2[data-v-7aeecb6a]{font-weight:700}.btn-edit[data-v-7aeecb6a]{align-items:center;background:#e5e5e5;border-radius:46px;color:#2d2d2d;display:flex;flex-shrink:0;font-family:SVN-Gilroy;font-size:14px;font-style:normal;font-weight:500;gap:10px;justify-content:center;line-height:normal;padding:12px 32px;text-align:center;transition:.3s}.btn-edit[data-v-7aeecb6a]:hover{background:transparent;border:1px solid #e5e5e5}",""]),o.locals={},t.exports=o},1209:function(t,e,n){"use strict";n.r(e);var o=n(850),r=n(1153),l=n(13),d=(n(42),n(14),n(6),n(729)),c=n(65),f=n(506),h=n.n(f),v=n(29),C=n.n(v),m={layout:"admin",data:function(){return{title:{name:"Chi tiết gói giáo cụ",previous:"/admin/materials"},data:null,data_bangiao:null}},validate:function(t){var e=t.params;return/^\d+$/.test(e.id)},computed:{id:function(){return this.$route.params.id},token:function(){return JSON.parse(localStorage.getItem("user")).auth_key}},methods:{delete_giaocu:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=new FormData).append("id",t.id),h.a.fire({title:"Bạn có chắc chắn?",text:"Xoá giáo cụ đã chọn!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Chắc chắn!",cancelButtonText:"Huỷ"}).then(function(){var e=Object(l.a)(regeneratorRuntime.mark((function e(o){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o.isConfirmed){e.next=3;break}return e.next=3,c.default.post("giao-cu/xoa-giao-cu",n,{"Content-Type":"multipart/form-data",Authorization:"Bearer "+t.token}).then((function(e){var n,o;200==(null==e?void 0:e.status)?(C.a.success(null==e||null===(n=e.data)||void 0===n?void 0:n.message),t.$router.push("/admin/materials")):C.a.error(null==e||null===(o=e.data)||void 0===o?void 0:o.message)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)})))()},load_data:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.default.get("giao-cu/chi-tiet?id="+t.id,{"Content-Type":"multipart/form-data",Authorization:"Bearer "+t.token}).then((function(e){var n,o=null==e||null===(n=e.data)||void 0===n?void 0:n.data;t.data=o}));case 2:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.$store.dispatch("title/set_title",this.title),this.load_data()},components:{ButtonComponent:d.default}},w=m,x=(n(1053),n(36)),component=Object(x.a)(w,(function(){var t,e,n,l,d=this,c=d._self._c;return c("div",{staticClass:"content-mp"},[c("div",{staticClass:"material"},[c(r.a,[c(o.a,{staticClass:"w-100",attrs:{xs:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[c("div",{staticClass:"d-flex justify-content-between align-items-center mb-4"},[c("title-header",[d._v("Gói giáo cụ "+d._s(null===(t=d.data)||void 0===t?void 0:t.code))]),d._v(" "),c("nuxt-link",{staticClass:"btn btn-edit",attrs:{to:"/admin/materials/edit/"+this.id}},[c("svg",{attrs:{width:"15",height:"14",viewBox:"0 0 15 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[c("path",{attrs:{d:"M14.125 11.5982L13.4027 12.365C13.0196 12.7716 12.5001 13 11.9584 13C11.4168 13 10.8973 12.7716 10.5142 12.365C10.1306 11.9593 9.61111 11.7314 9.06958 11.7314C8.52806 11.7314 8.00861 11.9593 7.62499 12.365M1.125 13H2.33439C2.68769 13 2.86434 13 3.03058 12.9613C3.17796 12.9269 3.31886 12.8703 3.4481 12.7934C3.59387 12.7067 3.71878 12.5855 3.9686 12.3431L13.0417 3.53811C13.64 2.95748 13.64 2.0161 13.0417 1.43547C12.4434 0.854843 11.4733 0.854843 10.875 1.43547L1.80191 10.2404C1.55209 10.4829 1.42718 10.6041 1.33785 10.7456C1.25866 10.871 1.20029 11.0077 1.16491 11.1507C1.125 11.3121 1.125 11.4835 1.125 11.8264V13Z",stroke:"#2D2D2D","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})]),d._v("\n                        Chỉnh sửa\n                    ")])],1),d._v(" "),c("div",[c("div",{staticClass:"position-relative"},[c("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"290",height:"37",viewBox:"0 0 290 37",fill:"none"}},[c("path",{attrs:{d:"M0 10C0 4.47715 4.47715 0 10 0H272.344C276.862 0 280.819 3.02939 281.998 7.39091L290 37H0V10Z",fill:"#FC4D32"}})]),d._v(" "),c("div",{staticClass:"note"},[c("span",{staticClass:"span1"},[c("svg",{attrs:{width:"10",height:"11",viewBox:"0 0 10 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[c("path",{attrs:{d:"M8.9344 3.20109L5.10829 5.65521C4.95426 5.75426 4.76046 5.75426 4.60146 5.65521L0.775346 3.20109C0.502052 3.02501 0.432487 2.61232 0.641184 2.3537C0.785284 2.17212 0.94926 2.02355 1.12317 1.919L3.81636 0.268248C4.39276 -0.0894159 5.32693 -0.0894159 5.90333 0.268248L8.59652 1.919C8.77043 2.02355 8.93441 2.17762 9.07851 2.3537C9.27726 2.61232 9.2077 3.02501 8.9344 3.20109Z",fill:"white"}}),d._v(" "),c("path",{attrs:{d:"M4.57146 6.67868V10.4314C4.57146 10.8496 4.18885 11.1247 3.85096 10.9431C2.82735 10.3874 1.10311 9.3474 1.10311 9.3474C0.496897 8.96773 0 8.01029 0 7.22343V4.38413C0 3.94944 0.412425 3.67431 0.750315 3.88891L4.32301 6.18346C4.47208 6.288 4.57146 6.47509 4.57146 6.67868Z",fill:"white"}}),d._v(" "),c("path",{attrs:{d:"M5.1377 6.67868V10.4314C5.1377 10.8496 5.52031 11.1247 5.8582 10.9431C6.88181 10.3874 8.60604 9.3474 8.60604 9.3474C9.21226 8.96773 9.70915 8.01029 9.70915 7.22343V4.38413C9.70915 3.94944 9.29673 3.67431 8.95884 3.88891L5.38614 6.18346C5.23707 6.288 5.1377 6.47509 5.1377 6.67868Z",fill:"white"}})]),d._v("\n                                Tổng: "),c("span",{staticClass:"span2 ms-1"},[d._v(d._s(null===(e=d.data)||void 0===e?void 0:e.so_luong_tong)+" bộ")])]),d._v(" "),c("span",{staticClass:"span1 ms-3"},[c("svg",{attrs:{width:"10",height:"9",viewBox:"0 0 10 9",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[c("path",{attrs:{d:"M9.7093 1.35V2.25C9.7093 3.0735 9.30637 3.519 8.49564 3.5865C8.41796 3.5955 8.33544 3.6 8.25291 3.6H1.4564C1.37387 3.6 1.29134 3.5955 1.21366 3.5865C0.402936 3.519 0 3.0735 0 2.25V1.35C0 0.45 0.485465 0 1.4564 0H8.25291C9.22384 0 9.7093 0.45 9.7093 1.35Z",fill:"white"}}),d._v(" "),c("path",{attrs:{d:"M1.69933 4.1626C1.43233 4.1626 1.21387 4.3651 1.21387 4.6126V7.6501C1.21387 8.5501 1.4566 9.0001 2.67026 9.0001H7.03945C8.25311 9.0001 8.49584 8.5501 8.49584 7.6501V4.6126C8.49584 4.3651 8.27738 4.1626 8.01038 4.1626H1.69933ZM5.7384 6.1876H3.97131C3.77227 6.1876 3.60721 6.0346 3.60721 5.8501C3.60721 5.6656 3.77227 5.5126 3.97131 5.5126H5.7384C5.93744 5.5126 6.1025 5.6656 6.1025 5.8501C6.1025 6.0346 5.93744 6.1876 5.7384 6.1876Z",fill:"white"}})]),d._v("\n                                Tồn kho: "),c("span",{staticClass:"span2 ms-1"},[d._v(d._s(null===(n=d.data)||void 0===n?void 0:n.so_luong_ton)+" bộ")])])])]),d._v(" "),c("div",{staticClass:"box-img"},[c("img",{attrs:{src:null===(l=d.data)||void 0===l?void 0:l.image}})])]),d._v(" "),c("div",{staticClass:"mt-7"},[c("nuxt-link",{attrs:{to:"/admin/materials/"+this.id+"/histories"}},[c("button-component",{attrs:{addClass:"red"}},[c("svg",{staticClass:"me-2",attrs:{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[c("circle",{attrs:{cx:"9",cy:"9",r:"9",fill:"white","fill-opacity":"0.3"}}),d._v(" "),c("path",{attrs:{d:"M9 3.2998C5.694 3.2998 3 5.8591 3 8.9998C3 12.1405 5.694 14.6998 9 14.6998C12.306 14.6998 15 12.1405 15 8.9998C15 5.8591 12.306 3.2998 9 3.2998ZM11.61 11.0347C11.526 11.1715 11.376 11.2456 11.22 11.2456C11.142 11.2456 11.064 11.2285 10.992 11.1829L9.132 10.1284C8.67 9.8662 8.328 9.2905 8.328 8.7832V6.4462C8.328 6.2125 8.532 6.0187 8.778 6.0187C9.024 6.0187 9.228 6.2125 9.228 6.4462V8.7832C9.228 8.9884 9.408 9.2905 9.594 9.3931L11.454 10.4476C11.67 10.5673 11.742 10.8295 11.61 11.0347Z",fill:"white"}})]),d._v("\n\n                            Lịch sử bàn giao\n                        ")])],1)],1),d._v(" "),c("div",{staticClass:"mt-7"},[c("div",{on:{click:function(t){return d.delete_giaocu()}}},[c("button-component",{attrs:{addClass:"primary"}},[c("svg",{attrs:{width:"19",height:"18",viewBox:"0 0 19 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[c("path",{attrs:{d:"M9.5 9C11.5711 9 13.25 7.32107 13.25 5.25C13.25 3.17893 11.5711 1.5 9.5 1.5C7.42893 1.5 5.75 3.17893 5.75 5.25C5.75 7.32107 7.42893 9 9.5 9Z",fill:"white"}}),d._v(" "),c("path",{attrs:{opacity:"0.4",d:"M9.50014 10.875C5.74264 10.875 2.68262 13.395 2.68262 16.5C2.68262 16.71 2.84762 16.875 3.05762 16.875H15.9427C16.1527 16.875 16.3177 16.71 16.3177 16.5C16.3177 13.395 13.2576 10.875 9.50014 10.875Z",fill:"white"}}),d._v(" "),c("path",{attrs:{d:"M16.5723 11.055C15.8973 10.38 15.3648 10.5975 14.9073 11.055L12.2523 13.71C12.1473 13.815 12.0498 14.01 12.0273 14.1525L11.8848 15.165C11.8323 15.5325 12.0873 15.7875 12.4548 15.735L13.4673 15.5925C13.6098 15.57 13.8123 15.4725 13.9098 15.3675L16.5648 12.7125C17.0298 12.2625 17.2473 11.73 16.5723 11.055Z",fill:"white"}})]),d._v("\n                            Xoá giáo cụ\n                        ")])],1)])])],1)],1)])}),[],!1,null,"7aeecb6a",null);e.default=component.exports;installComponents(component,{TitleHeader:n(726).default,ButtonComponent:n(729).default})},723:function(t,e,n){var content=n(728);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("794e685a",content,!0,{sourceMap:!1})},724:function(t,e,n){var content=n(732);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("6ef7f2ae",content,!0,{sourceMap:!1})},726:function(t,e,n){"use strict";n.r(e);n(727);var o=n(36),component=Object(o.a)({},(function(){return(0,this._self._c)("h3",{staticClass:"title-component"},[this._t("default")],2)}),[],!1,null,"4f45fb1e",null);e.default=component.exports},727:function(t,e,n){"use strict";n(723)},728:function(t,e,n){var o=n(21)((function(i){return i[1]}));o.push([t.i,".title-component[data-v-4f45fb1e]{color:#2d2d2d;font-family:SVN-Gilroy;font-size:19px;font-style:normal;font-weight:700;line-height:normal;margin:0}",""]),o.locals={},t.exports=o},729:function(t,e,n){"use strict";n.r(e);var o=n(277),r={props:{addClass:{type:String,default:""},typeBtn:{type:String,default:"button"}},computed:{computedClasses:function(){return""==this.addClass?"primary button":this.addClass+" button"}}},l=(n(731),n(36)),component=Object(l.a)(r,(function(){var t=this;return(0,t._self._c)(o.a,{class:t.computedClasses+" hover",attrs:{height:"100%",type:t.typeBtn}},[t._t("default")],2)}),[],!1,null,"8383f84e",null);e.default=component.exports},731:function(t,e,n){"use strict";n(724)},732:function(t,e,n){var o=n(21)((function(i){return i[1]}));o.push([t.i,".button[data-v-8383f84e]{border-radius:42px;color:#fff!important;cursor:pointer;font-family:SVN-Gilroy!important;font-size:16px!important;font-style:normal!important;font-weight:500!important;padding:12px!important;text-align:center!important;transition:.3s;width:100%!important}.danger[data-v-8383f84e]{background:#fc4d32;border:1px solid #fc4d32!important}.danger[data-v-8383f84e]:hover{background:#e7371c}.silver[data-v-8383f84e]{background:#e5e5e5!important;color:#2d2d2d!important}.silver[data-v-8383f84e]:hover{background:#9c9c9c}.primary[data-v-8383f84e]{background:#0056b1!important;border:1px solid #0056b1!important}.primary[data-v-8383f84e]:hover{background:#004691!important}.hover[data-v-8383f84e]{font-family:SVN-Gilroy;font-size:16px;font-style:normal;font-weight:500;line-height:20px;transition:.3s}.btn-header[data-v-8383f84e]{display:inline;padding:8px 28px}",""]),o.locals={},t.exports=o},898:function(t,e,n){var content=n(1054);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("40100268",content,!0,{sourceMap:!1})}}]);