(window.webpackJsonp=window.webpackJsonp||[]).push([[63,15,30],{1136:function(t,n,e){"use strict";e(936)},1137:function(t,n,e){var o=e(21)((function(i){return i[1]}));o.push([t.i,".text-input[data-v-2f496a57]{background:#fff;border:1px solid #e5e5e5;border-radius:10px}.title-complain[data-v-2f496a57]{font-weight:700}.span1[data-v-2f496a57],.title-complain[data-v-2f496a57]{color:#2d2d2d;font-family:SVN-Gilroy;font-size:14px;font-style:normal;line-height:normal}.span1[data-v-2f496a57]{align-items:start;display:flex;font-weight:400}.span1 p[data-v-2f496a57]{margin-left:6px}.p-text[data-v-2f496a57]{color:#2d2d2d;font-family:SVN-Gilroy;font-size:14px;font-style:normal;font-weight:500;line-height:18px}tr td[data-v-2f496a57]{padding-bottom:10px}.layout-user-complain[data-v-2f496a57]{border-radius:50%;height:48px;overflow:hidden;width:48px}.layout-user-complain img[data-v-2f496a57]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.complain-detail .lauout-user-complain[data-v-2f496a57]{border-radius:50%;height:48px;overflow:hidden;width:48px}.complain-detail .lauout-user-complain img[data-v-2f496a57]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.complain-detail .btn-call[data-v-2f496a57]{background:#0056b1;border-radius:50px;color:#fff;font-family:SVN-Gilroy;font-size:16px;font-style:normal;font-weight:500;line-height:120%;padding:13px 5px;text-align:center;width:48%}.complain-detail .btn-call svg[data-v-2f496a57]{left:5px;position:absolute;top:3px}.complain-detail .btn-chat[data-v-2f496a57]{background:#00c092;border-radius:50px;color:#fff;font-family:SVN-Gilroy;font-size:16px;font-style:normal;font-weight:500;line-height:120%;padding:13px 5px;text-align:center;width:48%}.complain-detail .btn-chat svg[data-v-2f496a57]{left:5px;position:absolute;top:3px}.complain-detail .input-check[data-v-2f496a57]{height:30px;width:30px}",""]),o.locals={},t.exports=o},1256:function(t,n,e){"use strict";e.r(n);var o=e(850),l=e(1153),r=(e(15),e(28),e(13)),c=(e(42),e(6),e(823),e(2),e(38),e(65)),d=(e(506),e(29)),h=e.n(d),v={layout:"admin",data:function(){return{title:{name:"Lịch sử dùng giáo cụ",previous:"/admin/complain"},data:null,xacNhanBanGiao:!1,xacNhanHoanTra:!1,ghi_chu:null,currentDate:new Date}},computed:{id:function(){return this.$route.params.id},id_list:function(){return this.$route.params.id_list},token:function(){return JSON.parse(localStorage.getItem("user")).auth_key}},methods:{load_data:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.default.get("giao-cu/chi-tiet-ban-giao?id="+t.id_list,{"Content-Type":"multipart/form-data",Authorization:"Bearer "+t.token}).then((function(n){var e,o=null==n||null===(e=n.data)||void 0===e?void 0:e.data;t.data=o,t.xacNhanBanGiao=null==o?void 0:o.xacNhanBanGiao,t.xacNhanHoanTra=null==o?void 0:o.xacNhanHoanTra}));case 2:case"end":return n.stop()}}),n)})))()},send_xacNhanBanGiao:function(){var t=this,n=new FormData;if(n.append("id",this.id_list),!this.ghi_chu)return this.load_data(),void h.a.error("Vui lòng nhập ghi chú");n.append("ghi_chu",this.ghi_chu),c.default.post("giao-cu/xac-nhan-hoan-tra",n,{"Content-Type":"multipart/form-data",Authorization:"Bearer "+this.token}).then((function(n){var e;200==(null==n?void 0:n.status)&&(h.a.success(null==n||null===(e=n.data)||void 0===e?void 0:e.message),t.$router.push("/admin/materials/"+t.id+"/histories"))})),this.load_data()},send_data:function(t){var n=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var e,o,l,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=n.currentDate.getDate().toString().padStart(2,"0"),o=(n.currentDate.getMonth()+1).toString().padStart(2,"0"),l=n.currentDate.getFullYear(),(r=new FormData).append("id",n.id_list),r.append("ngay_tra","".concat(e,"/").concat(o,"/").concat(l)),!n.ghi_chu){t.next=12;break}return r.append("ghi_chu",n.ghi_chu),h.a.error("Vui lòng nhập ghi chú"),t.abrupt("return");case 12:return n.load_data(),h.a.error("Vui lòng nhập ghi chú"),t.abrupt("return");case 15:return t.next=17,c.default.post("giao-cu/giao-vien-hoan-tra",r,{"Content-Type":"multipart/form-data",Authorization:"Bearer "+n.token}).then((function(t){var e;200==(null==t?void 0:t.status)&&(h.a.success(null==t||null===(e=t.data)||void 0===e?void 0:e.message),n.$router.push("/admin/materials/"+n.id+"/histories"))}));case 17:n.load_data();case 18:case"end":return t.stop()}}),t)})))()}},mounted:function(){this.load_data(),this.title.previous="/admin/materials/"+this.id+"/histories",this.$store.dispatch("title/set_title",this.title)},watch:{}},C=(e(1136),e(36)),component=Object(C.a)(v,(function(){var t,n,e,r,c,d,h,v,C,f,m,x,w,_,y,L=this,k=L._self._c;return k("div",{staticClass:"content-mp complain-detail"},[k("div",{staticClass:"d-flex align-items-center justify-content-between wmt-27"},[k("title-header",[k("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[k("circle",{attrs:{cx:"12",cy:"12",r:"12",fill:"#0056B1","fill-opacity":"0.2"}}),L._v(" "),k("path",{attrs:{d:"M15.6692 14.1312C16.1782 13.7945 16.8466 14.1618 16.8466 14.774V15.7611C16.8466 16.733 16.0946 17.7737 15.1907 18.0798L12.7676 18.891C12.3423 19.0363 11.651 19.0363 11.2333 18.891L8.81019 18.0798C7.89869 17.7737 7.1543 16.733 7.1543 15.7611V14.7663C7.1543 14.1618 7.82273 13.7945 8.32406 14.1235L9.8888 15.1489C10.4889 15.5545 11.2485 15.7535 12.008 15.7535C12.7676 15.7535 13.5272 15.5545 14.1273 15.1489L15.6692 14.1312Z",fill:"#0056B1"}}),L._v(" "),k("path",{attrs:{d:"M17.9452 8.13048L13.4882 5.37355C12.6845 4.87548 11.3601 4.87548 10.5565 5.37355L6.07706 8.13048C4.64098 9.00737 4.64098 10.9926 6.07706 11.8765L7.2676 12.6061L10.5565 14.6264C11.3601 15.1245 12.6845 15.1245 13.4882 14.6264L16.7547 12.6061L17.7741 11.9747V14.1214C17.7741 14.409 18.0271 14.6475 18.3321 14.6475C18.6372 14.6475 18.8902 14.409 18.8902 14.1214V10.6699C19.1878 9.76499 18.8828 8.71273 17.9452 8.13048Z",fill:"#0056B1"}})]),L._v(" "),k("span",{staticClass:"ms-1"},[L._v("\n                Thông tin lịch dùng giáo cụ\n            ")])])],1),L._v(" "),k(l.a,[k(o.a,{staticClass:"mt-0 pt-0",attrs:{xs:"12",sm:"12",md:"8",lg:"6",xl:"6"}},[k("b-card",{staticStyle:{"min-width":"245px"}},[k("div",{staticClass:"block w-100 teachers teacher-detail"},[k("div",{staticClass:"w-100"},[k("div",{staticClass:"d-flex align-items-center card-body-p-16 mb-4"},[k("div",{staticClass:"d-flex align-items-center"},[k("div",{staticClass:"me-2 layout-user-complain"},[k("img",{attrs:{src:null===(t=L.data)||void 0===t||null===(t=t.giaoVien)||void 0===t?void 0:t.anh_nguoi_dung,alt:""}})]),L._v(" "),k("div",[k("h3",{staticClass:"user-name"},[L._v("\n                                        "+L._s(null===(n=L.data)||void 0===n||null===(n=n.giaoVien)||void 0===n?void 0:n.hoten)+"\n                                    ")]),L._v(" "),k("p",{staticClass:"w-p p-0 m-0"},[L._v("\n                                        Giáo viên\n                                    ")])])])]),L._v(" "),k("div",{staticClass:"card-body-p-16 w-100 pt-0 mb-4"},[k("table",{staticClass:"w-100"},[k("tbody",[k("tr",[k("td",[k("div",{staticClass:"span1",staticStyle:{"min-width":"94px"}},[k("span",{staticClass:"me-2"},[k("svg",{attrs:{width:"12",height:"14",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[k("rect",{attrs:{x:"0.5",y:"0.5",width:"11",height:"13",rx:"2.5",fill:"#FC4D32",stroke:"#FC4D32"}}),L._v(" "),k("path",{attrs:{d:"M9 10H3",stroke:"white"}})])]),L._v(" "),k("span",{staticClass:"p"},[L._v("\n                                                    Điện thoại\n                                                ")])])]),L._v(" "),k("td",[k("div",{staticClass:"w-100 p-text"},[L._v("\n                                                "+L._s(null===(e=L.data)||void 0===e||null===(e=e.giaoVien)||void 0===e?void 0:e.dien_thoai)+"\n                                            ")])])]),L._v(" "),k("tr",[k("td",[k("div",{staticClass:"span1",staticStyle:{"min-width":"94px"}},[k("span",{staticClass:"me-2"},[k("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[k("path",{attrs:{d:"M6 0C2.694 0 0 2.694 0 6C0 9.306 2.694 12 6 12C9.306 12 12 9.306 12 6C12 2.694 9.306 0 6 0ZM8.61 8.142C8.526 8.286 8.376 8.364 8.22 8.364C8.142 8.364 8.064 8.346 7.992 8.298L6.132 7.188C5.67 6.912 5.328 6.306 5.328 5.772V3.312C5.328 3.066 5.532 2.862 5.778 2.862C6.024 2.862 6.228 3.066 6.228 3.312V5.772C6.228 5.988 6.408 6.306 6.594 6.414L8.454 7.524C8.67 7.65 8.742 7.926 8.61 8.142Z",fill:"#FFB761"}})])]),L._v(" "),k("span",{staticClass:"p"},[L._v("\n                                                    Thời gian\n                                                ")])])]),L._v(" "),k("td",[k("div",{staticClass:"w-100 p-text"},[L._v("\n                                                "+L._s(null===(r=L.data)||void 0===r?void 0:r.ngay_nhan)+"\n                                            ")])])]),L._v(" "),k("tr",[k("td",[k("div",{staticClass:"span1",staticStyle:{"min-width":"94px"}},[k("span",{staticClass:"me-2"},[k("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[k("path",{attrs:{d:"M11.0887 3.85635L8.14509 0.908632C7.52778 0.290456 6.67655 -0.0414065 5.80582 0.00414328L2.55684 0.160314C1.25725 0.218878 0.224075 1.25351 0.159095 2.54842L0.00314402 5.80198C-0.0358437 6.67393 0.289054 7.52636 0.90636 8.14454L3.84994 11.0923C5.05856 12.3026 7.02094 12.3026 8.23606 11.0923L11.0887 8.23564C12.3038 7.03182 12.3038 5.06667 11.0887 3.85635ZM4.37627 6.25097C3.34309 6.25097 2.50486 5.41155 2.50486 4.37692C2.50486 3.34229 3.34309 2.50287 4.37627 2.50287C5.40945 2.50287 6.24768 3.34229 6.24768 4.37692C6.24768 5.41155 5.40945 6.25097 4.37627 6.25097Z",fill:"#4EAEEA"}})])]),L._v(" "),k("span",{staticClass:"p"},[L._v("\n                                                    Số Seri\n                                                ")])])]),L._v(" "),k("td",[k("div",{staticClass:"w-100 p-text"},[L._v("\n                                                "+L._s(null!==(c=null===(d=L.data)||void 0===d?void 0:d.codeGiaoCu)&&void 0!==c?c:"Chưa cập nhật")+"\n                                            ")])])]),L._v(" "),k("tr",[k("td",[k("div",{staticClass:"span1",staticStyle:{"min-width":"94px"}},[k("span",{staticClass:"me-2"},[k("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[k("path",{attrs:{d:"M6 0C2.694 0 0 2.694 0 6C0 9.306 2.694 12 6 12C9.306 12 12 9.306 12 6C12 2.694 9.306 0 6 0ZM8.61 8.142C8.526 8.286 8.376 8.364 8.22 8.364C8.142 8.364 8.064 8.346 7.992 8.298L6.132 7.188C5.67 6.912 5.328 6.306 5.328 5.772V3.312C5.328 3.066 5.532 2.862 5.778 2.862C6.024 2.862 6.228 3.066 6.228 3.312V5.772C6.228 5.988 6.408 6.306 6.594 6.414L8.454 7.524C8.67 7.65 8.742 7.926 8.61 8.142Z",fill:"#00C092"}})])]),L._v(" "),k("span",{staticClass:"p"},[L._v("\n                                                    Ngày trả\n                                                ")])])]),L._v(" "),k("td",[k("div",{staticClass:"w-100 p-text"},[L._v("\n                                                "+L._s(null!==(h=null===(v=L.data)||void 0===v?void 0:v.ngay_tra)&&void 0!==h?h:"Chưa cập nhật")+"\n                                            ")])])]),L._v(" "),k("tr",[k("td",[k("div",{staticClass:"span1",staticStyle:{"min-width":"94px"}},[k("span",{staticClass:"me-2"},[k("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[k("path",{attrs:{d:"M8.4 0H3.6C1.2 0 0 1.2 0 3.6V11.4C0 11.73 0.27 12 0.6 12H8.4C10.8 12 12 10.8 12 8.4V3.6C12 1.2 10.8 0 8.4 0ZM5.466 8.796C5.316 8.946 5.04 9.084 4.836 9.114L3.588 9.288C3.54 9.294 3.492 9.3 3.45 9.3C3.24 9.3 3.048 9.228 2.91 9.09C2.742 8.922 2.67 8.676 2.712 8.412L2.886 7.164C2.916 6.96 3.054 6.678 3.204 6.534L5.466 4.272C5.502 4.38 5.55 4.488 5.604 4.608C5.658 4.716 5.712 4.824 5.772 4.926C5.82 5.01 5.874 5.094 5.922 5.154C5.982 5.244 6.042 5.322 6.084 5.364C6.108 5.4 6.132 5.424 6.138 5.436C6.27 5.586 6.408 5.73 6.54 5.838C6.576 5.874 6.6 5.892 6.606 5.898C6.684 5.958 6.756 6.024 6.828 6.066C6.906 6.126 6.99 6.18 7.074 6.228C7.176 6.288 7.284 6.348 7.398 6.402C7.512 6.456 7.62 6.498 7.728 6.534L5.466 8.796ZM8.73 5.538L8.262 6.006C8.232 6.036 8.19 6.054 8.148 6.054C8.136 6.054 8.112 6.054 8.1 6.048C7.068 5.754 6.246 4.932 5.952 3.9C5.934 3.846 5.952 3.786 5.994 3.744L6.468 3.27C7.242 2.496 7.974 2.514 8.73 3.27C9.114 3.654 9.306 4.026 9.3 4.41C9.3 4.788 9.114 5.154 8.73 5.538Z",fill:"#0056B1"}})])]),L._v(" "),k("span",{staticClass:"p"},[L._v("\n                                                    Ghi chú\n                                                ")])])]),L._v(" "),k("td",[k("div",{staticClass:"w-100 p-text"},[L._v("\n                                                "+L._s(null!==(C=null===(f=L.data)||void 0===f?void 0:f.ghi_chu)&&void 0!==C?C:"Chưa cập nhật")+"\n                                            ")])])]),L._v(" "),k("tr",[k("td",[k("div",{staticClass:"span1",staticStyle:{"min-width":"94px"}},[k("span",{staticClass:"me-2"},[k("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[k("path",{attrs:{d:"M8.4 0H3.6C1.2 0 0 1.2 0 3.6V11.4C0 11.73 0.27 12 0.6 12H8.4C10.8 12 12 10.8 12 8.4V3.6C12 1.2 10.8 0 8.4 0ZM5.466 8.796C5.316 8.946 5.04 9.084 4.836 9.114L3.588 9.288C3.54 9.294 3.492 9.3 3.45 9.3C3.24 9.3 3.048 9.228 2.91 9.09C2.742 8.922 2.67 8.676 2.712 8.412L2.886 7.164C2.916 6.96 3.054 6.678 3.204 6.534L5.466 4.272C5.502 4.38 5.55 4.488 5.604 4.608C5.658 4.716 5.712 4.824 5.772 4.926C5.82 5.01 5.874 5.094 5.922 5.154C5.982 5.244 6.042 5.322 6.084 5.364C6.108 5.4 6.132 5.424 6.138 5.436C6.27 5.586 6.408 5.73 6.54 5.838C6.576 5.874 6.6 5.892 6.606 5.898C6.684 5.958 6.756 6.024 6.828 6.066C6.906 6.126 6.99 6.18 7.074 6.228C7.176 6.288 7.284 6.348 7.398 6.402C7.512 6.456 7.62 6.498 7.728 6.534L5.466 8.796ZM8.73 5.538L8.262 6.006C8.232 6.036 8.19 6.054 8.148 6.054C8.136 6.054 8.112 6.054 8.1 6.048C7.068 5.754 6.246 4.932 5.952 3.9C5.934 3.846 5.952 3.786 5.994 3.744L6.468 3.27C7.242 2.496 7.974 2.514 8.73 3.27C9.114 3.654 9.306 4.026 9.3 4.41C9.3 4.788 9.114 5.154 8.73 5.538Z",fill:"#0056B1"}})])]),L._v(" "),k("span",{staticClass:"p"},[L._v("\n                                                    Mã đơn hàng:\n                                                ")])])]),L._v(" "),k("td",[k("div",{staticClass:"w-100 p-text"},[L._v("\n                                                "+L._s(null!==(m=null===(x=L.data)||void 0===x?void 0:x.ma_don_hang)&&void 0!==m?m:"Chưa cập nhật")+"\n                                            ")])])])])])]),L._v(" "),k("div",{staticClass:"br-top"}),L._v(" "),k("div",{staticClass:"d-flex align-items-center justify-content-between card-body-p-16"},[k("a",{staticClass:"btn btn-call position-relative",attrs:{href:"tel:+"+(null===(w=L.data)||void 0===w||null===(w=w.giaoVien)||void 0===w?void 0:w.dien_thoai),type:"text"}},[k("svg",{attrs:{width:"38",height:"38",viewBox:"0 0 38 38",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[k("circle",{attrs:{cx:"19",cy:"19",r:"19",fill:"white","fill-opacity":"0.3"}}),L._v(" "),k("path",{attrs:{d:"M11.6796 9.84669L12.8192 8.70711C13.2097 8.31658 13.8429 8.31658 14.2334 8.70711L17.2403 11.7139C17.6308 12.1045 17.6308 12.7376 17.2403 13.1282L15.1847 15.1837C14.8544 15.514 14.7725 16.0187 14.9814 16.4365C16.1892 18.8521 18.1479 20.8108 20.5635 22.0186C20.9813 22.2275 21.486 22.1456 21.8163 21.8153L23.8718 19.7597C24.2624 19.3692 24.8955 19.3692 25.2861 19.7597L28.2929 22.7666C28.6834 23.1571 28.6834 23.7903 28.2929 24.1808L27.1533 25.3204C25.042 27.4317 21.6994 27.6693 19.3107 25.8777L17.2602 24.3398C15.5166 23.0322 13.9678 21.4834 12.6602 19.7399L11.1223 17.6893C9.33072 15.3006 9.56827 11.958 11.6796 9.84669Z",fill:"white"}})]),L._v(" "),k("span",[L._v("Gọi điện")])]),L._v(" "),k("a",{staticClass:"btn btn-chat position-relative",attrs:{href:"sms:+"+(null===(_=L.data)||void 0===_||null===(_=_.giaoVien)||void 0===_?void 0:_.dien_thoai)+"?body=Xin chào",type:"text"}},[k("svg",{attrs:{width:"38",height:"38",viewBox:"0 0 38 38",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[k("circle",{attrs:{cx:"19",cy:"19",r:"19",fill:"white","fill-opacity":"0.3"}}),L._v(" "),k("path",{attrs:{opacity:"0.4",d:"M29 13.25V18.35C29 19.62 28.58 20.69 27.83 21.43C27.09 22.18 26.02 22.6 24.75 22.6V24.41C24.75 25.09 23.99 25.5 23.43 25.12L22.46 24.48C22.55 24.17 22.59 23.83 22.59 23.47V19.4C22.59 17.36 21.23 16 19.19 16H12.4C12.26 16 12.13 16.01 12 16.02V13.25C12 10.7 13.7 9 16.25 9H24.75C27.3 9 29 10.7 29 13.25Z",fill:"white"}}),L._v(" "),k("path",{attrs:{d:"M22.59 19.4V23.47C22.59 23.83 22.55 24.17 22.46 24.48C22.09 25.95 20.87 26.87 19.19 26.87H16.47L13.45 28.88C13 29.19 12.4 28.86 12.4 28.32V26.87C11.38 26.87 10.53 26.53 9.94 25.94C9.34 25.34 9 24.49 9 23.47V19.4C9 17.5 10.18 16.19 12 16.02C12.13 16.01 12.26 16 12.4 16H19.19C21.23 16 22.59 17.36 22.59 19.4Z",fill:"white"}})]),L._v(" "),k("span",[L._v("Nhắn tin")])])])])])]),L._v(" "),L._l(null===(y=this.data)||void 0===y?void 0:y.giaoCu,(function(t,n){return k("b-card",{key:n,staticClass:"my-6",staticStyle:{"min-width":"245px"}},[k("div",{staticClass:"block w-100 teachers teacher-detail"},[k("div",{staticClass:"card-body-p-16"},[k("div",{staticClass:"d-flex"},[k("label",{staticClass:"m-0 p-0 d-block w-100 d-flex justify-content-between align-items-center",attrs:{for:"check1"}},[k("span",[L._v("Code: "+L._s(null==t?void 0:t.code))]),L._v(" "),k("span",{staticClass:"fw-cold text-primary"},[L._v("Số lượng: "+L._s(null==t?void 0:t.so_luong))])])])])])])})),L._v(" "),k("b-card",{staticClass:"my-6",staticStyle:{"min-width":"245px"}},[k("div",{staticClass:"block w-100 teachers teacher-detail"},[k("div",{staticClass:"card-body-p-16"},[k("div",{staticClass:"d-flex"},[k("label",{staticClass:"m-0 p-0 d-block w-100 d-flex justify-content-between align-items-center",attrs:{for:"check1"}},[k("span",[L._v("Xác nhận hoàn trả giáo cụ")]),L._v(" "),k("span",{staticClass:"center"},[k("input",{directives:[{name:"model",rawName:"v-model",value:L.xacNhanHoanTra,expression:"xacNhanHoanTra"}],staticClass:"input-check",attrs:{id:"check1",type:"checkbox"},domProps:{checked:Array.isArray(L.xacNhanHoanTra)?L._i(L.xacNhanHoanTra,null)>-1:L.xacNhanHoanTra},on:{click:L.send_xacNhanBanGiao,change:function(t){var n=L.xacNhanHoanTra,e=t.target,o=!!e.checked;if(Array.isArray(n)){var l=L._i(n,null);e.checked?l<0&&(L.xacNhanHoanTra=n.concat([null])):l>-1&&(L.xacNhanHoanTra=n.slice(0,l).concat(n.slice(l+1)))}else L.xacNhanHoanTra=o}}})])])])])])]),L._v(" "),k("b-card",{staticClass:"my-6",staticStyle:{"min-width":"245px"}},[k("div",{staticClass:"block w-100 teachers teacher-detail"},[k("div",{staticClass:"card-body-p-16"},[k("div",{staticClass:"d-flex"},[k("label",{staticClass:"m-0 p-0 d-block w-100 d-flex justify-content-between align-items-center",attrs:{for:"check"}},[k("span",[L._v("Xác nhận bàn giao giáo cụ")]),L._v(" "),k("span",{staticClass:"center"},[k("input",{directives:[{name:"model",rawName:"v-model",value:L.xacNhanBanGiao,expression:"xacNhanBanGiao"}],staticClass:"input-check",attrs:{id:"check",type:"checkbox"},domProps:{checked:Array.isArray(L.xacNhanBanGiao)?L._i(L.xacNhanBanGiao,null)>-1:L.xacNhanBanGiao},on:{change:function(t){var n=L.xacNhanBanGiao,e=t.target,o=!!e.checked;if(Array.isArray(n)){var l=L._i(n,null);e.checked?l<0&&(L.xacNhanBanGiao=n.concat([null])):l>-1&&(L.xacNhanBanGiao=n.slice(0,l).concat(n.slice(l+1)))}else L.xacNhanBanGiao=o}}})])])])])])]),L._v(" "),k("div",{staticClass:"mb-5"},[k("div",{staticClass:"title-complain mb-2 d-flex align-items-center"},[k("svg",{staticClass:"me-2",attrs:{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[k("path",{attrs:{d:"M8.4 0H3.6C1.2 0 0 1.2 0 3.6V11.4C0 11.73 0.27 12 0.6 12H8.4C10.8 12 12 10.8 12 8.4V3.6C12 1.2 10.8 0 8.4 0ZM5.466 8.796C5.316 8.946 5.04 9.084 4.836 9.114L3.588 9.288C3.54 9.294 3.492 9.3 3.45 9.3C3.24 9.3 3.048 9.228 2.91 9.09C2.742 8.922 2.67 8.676 2.712 8.412L2.886 7.164C2.916 6.96 3.054 6.678 3.204 6.534L5.466 4.272C5.502 4.38 5.55 4.488 5.604 4.608C5.658 4.716 5.712 4.824 5.772 4.926C5.82 5.01 5.874 5.094 5.922 5.154C5.982 5.244 6.042 5.322 6.084 5.364C6.108 5.4 6.132 5.424 6.138 5.436C6.27 5.586 6.408 5.73 6.54 5.838C6.576 5.874 6.6 5.892 6.606 5.898C6.684 5.958 6.756 6.024 6.828 6.066C6.906 6.126 6.99 6.18 7.074 6.228C7.176 6.288 7.284 6.348 7.398 6.402C7.512 6.456 7.62 6.498 7.728 6.534L5.466 8.796ZM8.73 5.538L8.262 6.006C8.232 6.036 8.19 6.054 8.148 6.054C8.136 6.054 8.112 6.054 8.1 6.048C7.068 5.754 6.246 4.932 5.952 3.9C5.934 3.846 5.952 3.786 5.994 3.744L6.468 3.27C7.242 2.496 7.974 2.514 8.73 3.27C9.114 3.654 9.306 4.026 9.3 4.41C9.3 4.788 9.114 5.154 8.73 5.538Z",fill:"#4EAEEA"}})]),L._v("\n                    Ghi chú\n                ")]),L._v(" "),k("div",[k("textarea",{directives:[{name:"model",rawName:"v-model",value:L.ghi_chu,expression:"ghi_chu"}],staticClass:"form-control text-input",attrs:{placeholder:"Nhập ghi chú"},domProps:{value:L.ghi_chu},on:{input:function(t){t.target.composing||(L.ghi_chu=t.target.value)}}})])]),L._v(" "),k("div",{staticClass:"mt-7",on:{click:function(t){return L.send_data()}}},[k("button-component",[L._v("Lưu")])],1)],2)],1)],1)}),[],!1,null,"2f496a57",null);n.default=component.exports;installComponents(component,{TitleHeader:e(726).default,ButtonComponent:e(729).default})},723:function(t,n,e){var content=e(728);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(22).default)("794e685a",content,!0,{sourceMap:!1})},724:function(t,n,e){var content=e(732);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(22).default)("6ef7f2ae",content,!0,{sourceMap:!1})},726:function(t,n,e){"use strict";e.r(n);e(727);var o=e(36),component=Object(o.a)({},(function(){return(0,this._self._c)("h3",{staticClass:"title-component"},[this._t("default")],2)}),[],!1,null,"4f45fb1e",null);n.default=component.exports},727:function(t,n,e){"use strict";e(723)},728:function(t,n,e){var o=e(21)((function(i){return i[1]}));o.push([t.i,".title-component[data-v-4f45fb1e]{color:#2d2d2d;font-family:SVN-Gilroy;font-size:19px;font-style:normal;font-weight:700;line-height:normal;margin:0}",""]),o.locals={},t.exports=o},729:function(t,n,e){"use strict";e.r(n);var o=e(277),l={props:{addClass:{type:String,default:""},typeBtn:{type:String,default:"button"}},computed:{computedClasses:function(){return""==this.addClass?"primary button":this.addClass+" button"}}},r=(e(731),e(36)),component=Object(r.a)(l,(function(){var t=this;return(0,t._self._c)(o.a,{class:t.computedClasses+" hover",attrs:{height:"100%",type:t.typeBtn}},[t._t("default")],2)}),[],!1,null,"8383f84e",null);n.default=component.exports},731:function(t,n,e){"use strict";e(724)},732:function(t,n,e){var o=e(21)((function(i){return i[1]}));o.push([t.i,".button[data-v-8383f84e]{border-radius:42px;color:#fff!important;cursor:pointer;font-family:SVN-Gilroy!important;font-size:16px!important;font-style:normal!important;font-weight:500!important;padding:12px!important;text-align:center!important;transition:.3s;width:100%!important}.danger[data-v-8383f84e]{background:#fc4d32;border:1px solid #fc4d32!important}.danger[data-v-8383f84e]:hover{background:#e7371c}.silver[data-v-8383f84e]{background:#e5e5e5!important;color:#2d2d2d!important}.silver[data-v-8383f84e]:hover{background:#9c9c9c}.primary[data-v-8383f84e]{background:#0056b1!important;border:1px solid #0056b1!important}.primary[data-v-8383f84e]:hover{background:#004691!important}.hover[data-v-8383f84e]{font-family:SVN-Gilroy;font-size:16px;font-style:normal;font-weight:500;line-height:20px;transition:.3s}.btn-header[data-v-8383f84e]{display:inline;padding:8px 28px}",""]),o.locals={},t.exports=o},823:function(t,n,e){"use strict";var o=e(16),l=e(824).start;o({target:"String",proto:!0,forced:e(825)},{padStart:function(t){return l(this,t,arguments.length>1?arguments[1]:void 0)}})},824:function(t,n,e){"use strict";var o=e(23),l=e(124),r=e(52),c=e(272),d=e(75),h=o(c),v=o("".slice),C=Math.ceil,f=function(t){return function(n,e,o){var c,f,m=r(d(n)),x=l(e),w=m.length,_=void 0===o?" ":r(o);return x<=w||""==_?m:((f=h(_,C((c=x-w)/_.length))).length>c&&(f=v(f,0,c)),t?m+f:f+m)}};t.exports={start:f(!1),end:f(!0)}},825:function(t,n,e){"use strict";var o=e(102);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(o)},936:function(t,n,e){var content=e(1137);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(22).default)("41762104",content,!0,{sourceMap:!1})}}]);