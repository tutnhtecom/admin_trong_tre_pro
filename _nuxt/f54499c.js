(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{1218:function(t,n,e){"use strict";e.r(n);var o=e(850),r=e(1153),l=(e(14),{layout:"admin",data:function(){var t;return{title:{name:"Thêm bài học",previous:"/admin/teacher-training/"+(null!==(t=this.id)&&void 0!==t?t:0)},panel:[0]}},validate:function(t){var n=t.params;return/^[0-9]{0,2}$/.test(n.id)},computed:{id:function(){return this.$route.params.id}},methods:{togglePassword:function(){this.showPassword=!this.showPassword}},mounted:function(){var t;this.title.previous="/admin/teacher-training/"+(null!==(t=this.id)&&void 0!==t?t:0),this.$store.dispatch("title/set_title",this.title)}}),c=e(36),component=Object(c.a)(l,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"content-mp detail-form-review form-edit-train form-detail-train form-create-train"},[n(r.a,[n(o.a,{staticClass:"mt-0 pt-0",staticStyle:{"min-width":"373px"},attrs:{xs:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[n("div",{staticClass:"w-100"},[n("div",{staticClass:"mt-3"},[n("strong",{staticClass:"strong-title"},[n("span",[t._v("Tên bài học")])]),t._v(" "),n("div",{staticClass:"input-grop"},[n("input",{staticClass:"input",attrs:{type:"text",placeholder:"Nhập tên bài học"}})])]),t._v(" "),n("div",{staticClass:"mt-3"},[n("strong",{staticClass:"strong-title"},[n("span",[t._v("Thứ tự bài học")])]),t._v(" "),n("div",{staticClass:"input-grop"},[n("select",{staticClass:"select"},[n("option",[t._v("Bài 1")]),t._v(" "),n("option",[t._v("Bài 2")])]),t._v(" "),n("span",{staticClass:"icon-down mdi mdi-chevron-down"})])]),t._v(" "),n("div",{staticClass:"mt-3"},[n("strong",{staticClass:"strong-title"},[n("span",[t._v("Giới thiệu bài học")])]),t._v(" "),n("div",{staticClass:"input-grop"},[n("textarea",{staticClass:"textarea",attrs:{placeholder:"Nhập giới thiệu"}})])]),t._v(" "),n("div",{staticClass:"mt-3"},[n("strong",{staticClass:"strong-title"},[n("span",[t._v("Video bài học")])]),t._v(" "),n("div",{staticClass:"input-grop"},[n("input",{staticClass:"input",attrs:{type:"text",placeholder:"Gán đường dẫn"}}),t._v(" "),n("span",{staticClass:"copy"},[n("svg",{attrs:{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M9.61204 14.5083L8.38796 15.7324C6.69786 17.4225 3.95767 17.4225 2.26757 15.7324C0.577475 14.0423 0.577476 11.3021 2.26757 9.61204L3.49165 8.38796M14.5083 9.61204L15.7324 8.38796C17.4225 6.69786 17.4225 3.95767 15.7324 2.26757C14.0423 0.577475 11.3021 0.577476 9.61204 2.26757L8.38796 3.49165M5.97056 12.0294L12.0294 5.97054",stroke:"#979797","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])])]),t._v(" "),n("div",{staticClass:"w-100 mt-4 mb-4"},[n("button",{staticClass:"btn-add-le"},[n("svg",{staticClass:"me-1",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"13",height:"13",viewBox:"0 0 13 13",fill:"none"}},[n("path",{attrs:{d:"M6.5 1V12M1 6.5H12",stroke:"#4EAEEA","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})]),t._v("\n                            Thêm bài học\n                        ")])])]),t._v(" "),n("div",{staticClass:"mt-3"},[n("strong",{staticClass:"strong-title"},[n("span",[t._v("Bài kiểm tra")]),t._v(" "),n("span",{staticClass:"web-text-red"},[t._v(" *")])]),t._v(" "),n("div",{staticClass:"input-grop"},[n("input",{staticClass:"input",attrs:{type:"text",placeholder:"Gán đường dẫn"}}),t._v(" "),n("span",{staticClass:"copy"},[n("svg",{attrs:{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M9.61204 14.5083L8.38796 15.7324C6.69786 17.4225 3.95767 17.4225 2.26757 15.7324C0.577475 14.0423 0.577476 11.3021 2.26757 9.61204L3.49165 8.38796M14.5083 9.61204L15.7324 8.38796C17.4225 6.69786 17.4225 3.95767 15.7324 2.26757C14.0423 0.577475 11.3021 0.577476 9.61204 2.26757L8.38796 3.49165M5.97056 12.0294L12.0294 5.97054",stroke:"#979797","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])])]),t._v(" "),n("div",{staticClass:"w-100 mt-4 mb-4"},[n("button",{staticClass:"btn-add-le"},[n("svg",{staticClass:"me-1",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"13",height:"13",viewBox:"0 0 13 13",fill:"none"}},[n("path",{attrs:{d:"M6.5 1V12M1 6.5H12",stroke:"#4EAEEA","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})]),t._v("\n                            Thêm bài kiểm tra\n                        ")])])]),t._v(" "),n("div",{staticClass:"mt-8 cr-btn"},[n("button",{staticClass:"btn btn-cancel"},[t._v("Hủy")]),t._v(" "),n("button",{staticClass:"btn btn-save"},[t._v("Lưu")])])])])],1)],1)}),[],!1,null,null,null);n.default=component.exports}}]);