(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{1252:function(t,C,n){"use strict";n.r(C);var e=n(850),r=n(1153),l=(n(14),{layout:"admin",data:function(){return{title:{name:"Khuyến mãi",previous:"/admin/service/edit/"+this.id},panel:[0]}},validate:function(t){var C=t.params;return/^[0-9]{0,2}$/.test(C.id)},computed:{id:function(){return this.$route.params.id}},methods:{togglePassword:function(){this.showPassword=!this.showPassword}},mounted:function(){this.title.previous="/admin/service/edit/"+this.id,this.$store.dispatch("title/set_title",this.title)}}),d=n(36),component=Object(d.a)(l,(function(){var t=this,C=t._self._c;return C("div",{staticClass:"content-mp detail-form-review form-edit-train form-detail-train form-create-train service"},[C(r.a,[C(e.a,{staticClass:"mt-0 pt-0",staticStyle:{"min-width":"373px"},attrs:{xs:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[C("div",{staticClass:"w-100"},[C("div",{staticClass:"w-100"},t._l(6,(function(n){return C("div",{key:n,staticClass:"d-flex justify-content-between align-items-center brb"},[C("div",[C("div",[C("span",[C("svg",{attrs:{width:"11",height:"13",viewBox:"0 0 11 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[C("path",{attrs:{d:"M8.41471 1.51269V0.491134C8.41471 0.222648 8.20605 0 7.95443 0C7.70281 0 7.49414 0.222648 7.49414 0.491134V1.4734H3.50501V0.491134C3.50501 0.222648 3.29635 0 3.04473 0C2.79311 0 2.58445 0.222648 2.58445 0.491134V1.51269C0.927422 1.67641 0.123458 2.73071 0.000716005 4.29579C-0.0115582 4.48569 0.135733 4.64286 0.307572 4.64286H10.6916C10.8696 4.64286 11.0169 4.47915 10.9984 4.29579C10.8757 2.73071 10.0717 1.67641 8.41471 1.51269Z",fill:"#FC4D32"}}),t._v(" "),C("path",{attrs:{d:"M10.3889 5.57129H0.611111C0.275 5.57129 0 5.8462 0 6.18219V9.94535C0 11.7781 0.916667 12.9999 3.05556 12.9999H7.94444C10.0833 12.9999 11 11.7781 11 9.94535V6.18219C11 5.8462 10.725 5.57129 10.3889 5.57129ZM3.795 10.6845C3.76444 10.709 3.73389 10.7395 3.70333 10.7578C3.66667 10.7823 3.63 10.8006 3.59333 10.8128C3.55667 10.8312 3.52 10.8434 3.48333 10.8495C3.44056 10.8556 3.40389 10.8617 3.36111 10.8617C3.28167 10.8617 3.20222 10.8434 3.12889 10.8128C3.04944 10.7823 2.98833 10.7395 2.92722 10.6845C2.81722 10.5685 2.75 10.4096 2.75 10.2508C2.75 10.092 2.81722 9.93313 2.92722 9.81706C2.98833 9.76208 3.04944 9.71932 3.12889 9.68877C3.23889 9.6399 3.36111 9.62768 3.48333 9.65212C3.52 9.65823 3.55667 9.67044 3.59333 9.68877C3.63 9.70099 3.66667 9.71932 3.70333 9.74375C3.73389 9.76819 3.76444 9.79262 3.795 9.81706C3.905 9.93313 3.97222 10.092 3.97222 10.2508C3.97222 10.4096 3.905 10.5685 3.795 10.6845ZM3.795 8.54638C3.67889 8.65635 3.52 8.72354 3.36111 8.72354C3.20222 8.72354 3.04333 8.65635 2.92722 8.54638C2.81722 8.43031 2.75 8.27148 2.75 8.11264C2.75 7.95381 2.81722 7.79497 2.92722 7.6789C3.09833 7.50785 3.36722 7.45287 3.59333 7.55061C3.67278 7.58116 3.74 7.62392 3.795 7.6789C3.905 7.79497 3.97222 7.95381 3.97222 8.11264C3.97222 8.27148 3.905 8.43031 3.795 8.54638ZM5.93389 10.6845C5.81778 10.7945 5.65889 10.8617 5.5 10.8617C5.34111 10.8617 5.18222 10.7945 5.06611 10.6845C4.95611 10.5685 4.88889 10.4096 4.88889 10.2508C4.88889 10.092 4.95611 9.93313 5.06611 9.81706C5.29222 9.59103 5.70778 9.59103 5.93389 9.81706C6.04389 9.93313 6.11111 10.092 6.11111 10.2508C6.11111 10.4096 6.04389 10.5685 5.93389 10.6845ZM5.93389 8.54638C5.90333 8.57082 5.87278 8.59526 5.84222 8.61969C5.80556 8.64413 5.76889 8.66245 5.73222 8.67467C5.69556 8.693 5.65889 8.70522 5.62222 8.71133C5.57944 8.71744 5.54278 8.72354 5.5 8.72354C5.34111 8.72354 5.18222 8.65635 5.06611 8.54638C4.95611 8.43031 4.88889 8.27148 4.88889 8.11264C4.88889 7.95381 4.95611 7.79497 5.06611 7.6789C5.12111 7.62392 5.18833 7.58116 5.26778 7.55061C5.49389 7.45287 5.76278 7.50785 5.93389 7.6789C6.04389 7.79497 6.11111 7.95381 6.11111 8.11264C6.11111 8.27148 6.04389 8.43031 5.93389 8.54638ZM8.07278 10.6845C7.95667 10.7945 7.79778 10.8617 7.63889 10.8617C7.48 10.8617 7.32111 10.7945 7.205 10.6845C7.095 10.5685 7.02778 10.4096 7.02778 10.2508C7.02778 10.092 7.095 9.93313 7.205 9.81706C7.43111 9.59103 7.84667 9.59103 8.07278 9.81706C8.18278 9.93313 8.25 10.092 8.25 10.2508C8.25 10.4096 8.18278 10.5685 8.07278 10.6845ZM8.07278 8.54638C8.04222 8.57082 8.01167 8.59526 7.98111 8.61969C7.94444 8.64413 7.90778 8.66245 7.87111 8.67467C7.83444 8.693 7.79778 8.70522 7.76111 8.71133C7.71833 8.71744 7.67556 8.72354 7.63889 8.72354C7.48 8.72354 7.32111 8.65635 7.205 8.54638C7.095 8.43031 7.02778 8.27148 7.02778 8.11264C7.02778 7.95381 7.095 7.79497 7.205 7.6789C7.26611 7.62392 7.32722 7.58116 7.40667 7.55061C7.51667 7.50174 7.63889 7.48952 7.76111 7.51396C7.79778 7.52007 7.83444 7.53229 7.87111 7.55061C7.90778 7.56283 7.94444 7.58116 7.98111 7.60559C8.01167 7.63003 8.04222 7.65447 8.07278 7.6789C8.18278 7.79497 8.25 7.95381 8.25 8.11264C8.25 8.27148 8.18278 8.43031 8.07278 8.54638Z",fill:"#FC4D32"}})])]),t._v(" "),C("span",{staticClass:"text-span ms-1"},[t._v("\n                                    Số ngày "+t._s(n+1)+"\n                                ")])])]),t._v(" "),C("div",{staticClass:"price"},[t._v("\n                            "+t._s(3*n)+" %\n                        ")])])})),0),t._v(" "),C("div",{staticClass:"mt-7"},[C("nuxt-link",{staticClass:"btn-add-service br-42",attrs:{to:""}},[C("span",{staticClass:"mdi mdi-plus"}),t._v(" "),C("span",[t._v("Thêm khuyến mãi")])])],1),t._v(" "),C("div",{staticClass:"mt-4"},[C("button",{staticClass:"btn btn-save-pass"},[t._v("Lưu thay đổi")])])])])],1)],1)}),[],!1,null,null,null);C.default=component.exports}}]);