(window.webpackJsonp=window.webpackJsonp||[]).push([[65,15],{1002:function(t,e,n){"use strict";n(869)},1003:function(t,e,n){var o=n(21)((function(i){return i[1]}));o.push([t.i,".btn-banner-delete[data-v-7bf390f4],.btn-banner-save[data-v-7bf390f4]{cursor:pointer;transition:.3s}.card-img[data-v-7bf390f4]{background:#fff;border:1px solid #e5e5e5;border-radius:10px;display:flex;justify-content:space-between;padding:10px}.box-img[data-v-7bf390f4]{height:72px;width:104px}.box-img img[data-v-7bf390f4]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.materials i[data-v-7bf390f4]{font-style:italic;font-weight:400;margin-left:7px}.materials .label[data-v-7bf390f4],.materials i[data-v-7bf390f4]{color:#2d2d2d;font-family:SVN-Gilroy;font-size:14px;line-height:normal}.materials .label[data-v-7bf390f4]{align-items:center;display:flex;font-style:normal;font-weight:600;margin-bottom:10px}@media(max-width:600px){.materials .btn-type[data-v-7bf390f4]{margin-bottom:7px;margin-right:7px;padding:8px 25px}}",""]),o.locals={},t.exports=o},1179:function(t,e,n){"use strict";n.r(e);var o=n(850),l=n(1153),r=n(13),d=(n(42),n(6),n(65)),f=(n(506),n(29)),c=n.n(f),m={layout:"admin",data:function(){return{title:{name:"Thêm mới giáo cụ",previous:"/admin/materials"},code:null,so_luong_tong:null,so_luong_ton:null,ghi_chu:null,file:null,clearFiles:function(){this.$refs["file-input"].reset()}}},computed:{token:function(){return JSON.parse(localStorage.getItem("user")).auth_key}},methods:{send_data:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),(o=new FormData).append("code",e.code),o.append("so_luong_tong",e.so_luong_tong),o.append("so_luong_ton",e.so_luong_ton),o.append("ghi_chu",e.ghi_chu),o.append("image",e.file),n.next=9,d.default.post("giao-cu/tao-moi",o,{"Content-Type":"multipart/form-data",Authorization:"Bearer "+e.token}).then((function(t){var n;200==(null==t?void 0:t.status)&&(c.a.success(null==t||null===(n=t.data)||void 0===n?void 0:n.message),e.$router.push("/admin/materials"))}));case 9:case"end":return n.stop()}}),n)})))()}},mounted:function(){this.$store.dispatch("title/set_title",this.title)},components:{}},C=(n(1002),n(36)),component=Object(C.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-mp"},[e("div",{staticClass:"materials"},[e(l.a,{},[e(o.a,{attrs:{xs:"12",sm:"12",md:"7",lg:"7",xl:"7"}},[e("div",{staticClass:"wow animate__animated animate__zoomIn",staticStyle:{"min-width":"245px"}},[e("div",[e("b-form-group",[e("div",{staticClass:"label"},[e("span",{staticClass:"me-2"},[e("svg",{attrs:{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M13.0588 6.87422L12.9518 6.72022C12.7645 6.48222 12.5438 6.29322 12.2896 6.15321C11.9485 5.95021 11.5606 5.84521 11.1593 5.84521H2.83224C2.43094 5.84521 2.0497 5.95021 1.7019 6.15321C1.44105 6.30022 1.20696 6.50322 1.013 6.75522C0.631757 7.26622 0.451171 7.89622 0.511366 8.52622L0.758837 11.7952C0.845786 12.7822 0.959489 14.0002 3.07971 14.0002H10.9185C13.0387 14.0002 13.1457 12.7822 13.2394 11.7882L13.4869 8.53322C13.547 7.94522 13.3999 7.35722 13.0588 6.87422ZM8.59764 10.7382H5.39389C5.13305 10.7382 4.92571 10.5142 4.92571 10.2482C4.92571 9.98222 5.13305 9.75822 5.39389 9.75822H8.59764C8.85848 9.75822 9.06582 9.98222 9.06582 10.2482C9.06582 10.5212 8.85848 10.7382 8.59764 10.7382Z",fill:"#FC4D32"}}),t._v(" "),e("path",{attrs:{d:"M12.6923 4.34012C12.7472 4.72504 12.3176 4.98641 11.94 4.89386C11.6901 4.83262 11.4315 4.80201 11.1657 4.80201H2.83192C2.56 4.80201 2.29114 4.83564 2.03265 4.9006C1.65976 4.99432 1.2334 4.74232 1.2334 4.35783V3.262C1.2334 0.763001 1.96243 0 4.35019 0H5.13942C6.09586 0 6.39684 0.322 6.78477 0.847001L7.58737 1.967C7.75458 2.205 7.76127 2.219 8.05556 2.219H9.6474C11.6274 2.219 12.4649 2.74472 12.6923 4.34012Z",fill:"#FC4D32"}})])]),t._v("\n                                Chủ đề thông báo\n                            ")]),t._v(" "),e("div",{staticClass:"w-100"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"form-control input-text",attrs:{placeholder:"Nhập mã gói giáo cụ",type:"text"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}})])])],1),t._v(" "),e("div",[e("b-form-group",[e("div",{staticClass:"label"},[e("span",{staticClass:"me-2"},[e("svg",{attrs:{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M12.8824 4.07404L7.36554 7.19742C7.14343 7.32347 6.86401 7.32347 6.63474 7.19742L1.11788 4.07404C0.723821 3.84994 0.623514 3.32471 0.924434 2.99557C1.13221 2.76447 1.36865 2.57538 1.61941 2.44232L5.50271 0.3414C6.33382 -0.1138 7.68079 -0.1138 8.5119 0.3414L12.3952 2.44232C12.646 2.57538 12.8824 2.77147 13.0902 2.99557C13.3768 3.32471 13.2765 3.84994 12.8824 4.07404Z",fill:"#FFB761"}}),t._v(" "),e("path",{attrs:{d:"M6.59157 8.5003V13.2764C6.59157 13.8086 6.03988 14.1588 5.55268 13.9277C4.07674 13.2204 1.59057 11.8968 1.59057 11.8968C0.716474 11.4136 0 10.195 0 9.19361V5.58002C0 5.02677 0.594674 4.67662 1.08188 4.94974L6.23333 7.87002C6.44827 8.00308 6.59157 8.24119 6.59157 8.5003Z",fill:"#FFB761"}}),t._v(" "),e("path",{attrs:{d:"M7.4082 8.5003V13.2764C7.4082 13.8086 7.95989 14.1588 8.44709 13.9277C9.92303 13.2204 12.4092 11.8968 12.4092 11.8968C13.2833 11.4136 13.9998 10.195 13.9998 9.19361V5.58002C13.9998 5.02677 13.4051 4.67662 12.9179 4.94974L7.76644 7.87002C7.5515 8.00308 7.4082 8.24119 7.4082 8.5003Z",fill:"#FFB761"}})])]),t._v("\n                                Số lượng tổng\n                            ")]),t._v(" "),e("div",{staticClass:"w-100"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.so_luong_tong,expression:"so_luong_tong"}],staticClass:"form-control input-text",attrs:{placeholder:"Nhập số lượng",type:"number"},domProps:{value:t.so_luong_tong},on:{input:function(e){e.target.composing||(t.so_luong_tong=e.target.value)}}})])])],1),t._v(" "),e("div",[e("b-form-group",[e("div",{staticClass:"label"},[e("span",{staticClass:"me-2"},[e("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M10.5197 1.3335H5.47967C2.95967 1.3335 2.33301 2.00683 2.33301 4.6935V12.2002C2.33301 13.9735 3.30634 14.3935 4.48634 13.1268L4.49301 13.1202C5.03967 12.5402 5.87301 12.5868 6.34634 13.2202L7.01967 14.1202C7.55967 14.8335 8.43301 14.8335 8.97301 14.1202L9.64634 13.2202C10.1263 12.5802 10.9597 12.5335 11.5063 13.1202C12.693 14.3868 13.6597 13.9668 13.6597 12.1935V4.6935C13.6663 2.00683 13.0397 1.3335 10.5197 1.3335ZM9.89301 6.66016L9.55967 7.00016H9.55301L7.53301 9.02016C7.44634 9.10683 7.26634 9.20016 7.13967 9.2135L6.23967 9.34683C5.91301 9.3935 5.68634 9.16016 5.73301 8.84016L5.85967 7.9335C5.87967 7.80683 5.96634 7.6335 6.05301 7.54016L8.07967 5.52016L8.41301 5.18016C8.63301 4.96016 8.87967 4.80016 9.14634 4.80016C9.37301 4.80016 9.61967 4.90683 9.89301 5.18016C10.493 5.78016 10.2997 6.2535 9.89301 6.66016Z",fill:"#4EAEEA"}})])]),t._v("\n                                Số tồn kho\n                            ")]),t._v(" "),e("div",{staticClass:"w-100"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.so_luong_ton,expression:"so_luong_ton"}],staticClass:"form-control input-text",attrs:{placeholder:"Nhập số lượng",type:"number"},domProps:{value:t.so_luong_ton},on:{input:function(e){e.target.composing||(t.so_luong_ton=e.target.value)}}})])])],1),t._v(" "),e("div",[e("b-form-group",[e("div",{staticClass:"label"},[e("span",{staticClass:"me-2"},[e("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M1.71954 12.6735L1.70621 12.6868C1.52621 12.2935 1.41288 11.8468 1.36621 11.3535C1.41288 11.8402 1.53954 12.2802 1.71954 12.6735Z",fill:"#0056B1"}}),t._v(" "),e("path",{attrs:{d:"M5.99975 6.91992C6.87604 6.91992 7.58642 6.20954 7.58642 5.33325C7.58642 4.45696 6.87604 3.74658 5.99975 3.74658C5.12346 3.74658 4.41309 4.45696 4.41309 5.33325C4.41309 6.20954 5.12346 6.91992 5.99975 6.91992Z",fill:"#0056B1"}}),t._v(" "),e("path",{attrs:{d:"M10.793 1.3335H5.20634C2.77967 1.3335 1.33301 2.78016 1.33301 5.20683V10.7935C1.33301 11.5202 1.45967 12.1535 1.70634 12.6868C2.27967 13.9535 3.50634 14.6668 5.20634 14.6668H10.793C13.2197 14.6668 14.6663 13.2202 14.6663 10.7935V9.26683V5.20683C14.6663 2.78016 13.2197 1.3335 10.793 1.3335ZM13.5797 8.3335C13.0597 7.88683 12.2197 7.88683 11.6997 8.3335L8.92634 10.7135C8.40634 11.1602 7.56634 11.1602 7.04634 10.7135L6.81967 10.5268C6.34634 10.1135 5.59301 10.0735 5.05967 10.4335L2.56634 12.1068C2.41967 11.7335 2.33301 11.3002 2.33301 10.7935V5.20683C2.33301 3.32683 3.32634 2.3335 5.20634 2.3335H10.793C12.673 2.3335 13.6663 3.32683 13.6663 5.20683V8.40683L13.5797 8.3335Z",fill:"#0056B1"}})])]),t._v("\n                                Hình ảnh "),e("i",[t._v("(Tối thiểu không quá 2mb)")])]),t._v(" "),e("div",{staticClass:"w-100"},[e("b-form-file",{ref:"file-input",attrs:{id:"file-default"},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}})],1)])],1),t._v(" "),e("div",[e("b-form-group",[e("div",{staticClass:"label"},[e("span",{staticClass:"me-2"},[e("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M8.4 0H3.6C1.2 0 0 1.2 0 3.6V11.4C0 11.73 0.27 12 0.6 12H8.4C10.8 12 12 10.8 12 8.4V3.6C12 1.2 10.8 0 8.4 0ZM5.466 8.796C5.316 8.946 5.04 9.084 4.836 9.114L3.588 9.288C3.54 9.294 3.492 9.3 3.45 9.3C3.24 9.3 3.048 9.228 2.91 9.09C2.742 8.922 2.67 8.676 2.712 8.412L2.886 7.164C2.916 6.96 3.054 6.678 3.204 6.534L5.466 4.272C5.502 4.38 5.55 4.488 5.604 4.608C5.658 4.716 5.712 4.824 5.772 4.926C5.82 5.01 5.874 5.094 5.922 5.154C5.982 5.244 6.042 5.322 6.084 5.364C6.108 5.4 6.132 5.424 6.138 5.436C6.27 5.586 6.408 5.73 6.54 5.838C6.576 5.874 6.6 5.892 6.606 5.898C6.684 5.958 6.756 6.024 6.828 6.066C6.906 6.126 6.99 6.18 7.074 6.228C7.176 6.288 7.284 6.348 7.398 6.402C7.512 6.456 7.62 6.498 7.728 6.534L5.466 8.796ZM8.73 5.538L8.262 6.006C8.232 6.036 8.19 6.054 8.148 6.054C8.136 6.054 8.112 6.054 8.1 6.048C7.068 5.754 6.246 4.932 5.952 3.9C5.934 3.846 5.952 3.786 5.994 3.744L6.468 3.27C7.242 2.496 7.974 2.514 8.73 3.27C9.114 3.654 9.306 4.026 9.3 4.41C9.3 4.788 9.114 5.154 8.73 5.538Z",fill:"#00C092"}})])]),t._v("\n                                Ghi chú\n                            ")]),t._v(" "),e("div",{staticClass:"w-100"},[e("b-form-textarea",{attrs:{id:"textarea",placeholder:"Nhập...",rows:"3","max-rows":"6"},model:{value:t.ghi_chu,callback:function(e){t.ghi_chu=e},expression:"ghi_chu"}})],1)])],1),t._v(" "),e("div",{staticClass:"mt-7"},[e("form",{attrs:{id:"form"},on:{submit:t.send_data}},[e("button-component",{attrs:{typeBtn:"submit"}},[t._v("\n                                Lưu\n                            ")])],1)])])])],1)],1)])}),[],!1,null,"7bf390f4",null);e.default=component.exports;installComponents(component,{ButtonComponent:n(729).default})},724:function(t,e,n){var content=n(732);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("6ef7f2ae",content,!0,{sourceMap:!1})},729:function(t,e,n){"use strict";n.r(e);var o=n(277),l={props:{addClass:{type:String,default:""},typeBtn:{type:String,default:"button"}},computed:{computedClasses:function(){return""==this.addClass?"primary button":this.addClass+" button"}}},r=(n(731),n(36)),component=Object(r.a)(l,(function(){var t=this;return(0,t._self._c)(o.a,{class:t.computedClasses+" hover",attrs:{height:"100%",type:t.typeBtn}},[t._t("default")],2)}),[],!1,null,"8383f84e",null);e.default=component.exports},731:function(t,e,n){"use strict";n(724)},732:function(t,e,n){var o=n(21)((function(i){return i[1]}));o.push([t.i,".button[data-v-8383f84e]{border-radius:42px;color:#fff!important;cursor:pointer;font-family:SVN-Gilroy!important;font-size:16px!important;font-style:normal!important;font-weight:500!important;padding:12px!important;text-align:center!important;transition:.3s;width:100%!important}.danger[data-v-8383f84e]{background:#fc4d32;border:1px solid #fc4d32!important}.danger[data-v-8383f84e]:hover{background:#e7371c}.silver[data-v-8383f84e]{background:#e5e5e5!important;color:#2d2d2d!important}.silver[data-v-8383f84e]:hover{background:#9c9c9c}.primary[data-v-8383f84e]{background:#0056b1!important;border:1px solid #0056b1!important}.primary[data-v-8383f84e]:hover{background:#004691!important}.hover[data-v-8383f84e]{font-family:SVN-Gilroy;font-size:16px;font-style:normal;font-weight:500;line-height:20px;transition:.3s}.btn-header[data-v-8383f84e]{display:inline;padding:8px 28px}",""]),o.locals={},t.exports=o},869:function(t,e,n){var content=n(1003);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("06f53584",content,!0,{sourceMap:!1})}}]);