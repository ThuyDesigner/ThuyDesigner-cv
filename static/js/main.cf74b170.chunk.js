(this["webpackJsonpmy-component"]=this["webpackJsonpmy-component"]||[]).push([[0],[,,,,,,,,function(e,t,s){},,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},,,function(e,t,s){"use strict";s.r(t);var n=s(2),i=s.n(n),c=s(9),a=s.n(c),r=(s(16),s(4)),l=s(11),o=s(10),d=s(3),j=(s(17),s(18),s(1)),b=s.n(j),u=s(0),h=Object(u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-x",children:[Object(u.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),Object(u.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),m=function(e){var t="alert-primary";switch(e){case"secondary":t="alert-secondary";break;case"success":t="alert-success";break;case"danger":t="alert-danger";break;case"warning":t="alert-warning";break;case"info":t="alert-info";break;case"light":t="alert-light";break;case"dark":t="alert-dark"}return t},x=function(e){var t=e.type,s=void 0===t?"":t,i=e.isbtnbutton,c=void 0!==i&&i,a=e.children,r=void 0===a?"":a,l=e.icon,o=void 0===l?"":l,j=Object(n.useState)(!0),x=Object(d.a)(j,2),v=x[0],O=x[1];return v?Object(u.jsxs)("div",{className:b()("alert d-flex align-self-center",m(s),{"alert-dismissible":c},{" d-flex align-items-center":o}),role:"alert",children:[o,r,c&&Object(u.jsx)("span",{className:"close-other",children:Object(u.jsx)("button",{type:"button",class:"btn-close-other","data-bs-dismiss":"alert","aria-label":"Close",onClick:function(){O(!1)},children:Object(u.jsx)("span",{"aria-hidden":"true",children:h})})})]}):Object(u.jsx)("p",{onClick:function(){return O(!0)},children:Object(u.jsx)("p",{className:"show-notification",children:"Show notification"})})},v=(s(20),s(21),function(e){switch(e){case"reset":return{typbtn:"reset",valuebtn:"Reset Button"};case"submit":return{typbtn:"submit",valuebtn:"Submit Button"};default:return{typbtn:"button",valuebtn:""}}}),O=function(e){switch(e){case"primary":return"btn-primary";case"outline-primary":return"btn-outline-primary";case"secondary":return"btn-secondary";case"outline-secondary":return"btn-outline-secondary";case"success":return"btn-success";case"outline-success":return"btn-outline-success";case"info":return"btn-info";case"outline-info":return"btn-outline-info";case"danger":return"btn-danger";case"outline-danger":return"btn-outline-danger";case"dark":return"btn-dark";case"outline-dark":return"btn-outline-dark";case"light":return"btn-light";case"outline-light":return"btn-outline-light";case"link":return"btn-link";case"outline-link":return"btn-outline-link";default:return""}},g=function(e){switch(e){case"lg":return"btn-lg";case"sm":return"btn-sm";default:return""}},p=function(e){var t=e.type,s=void 0===t?"":t,n=e.variant,i=void 0===n?"":n,c=e.children,a=void 0===c?"":c,r=e.size,l=void 0===r?"":r,o=e.addClass,d=void 0===o?"":o,j=e.isLoading,h=void 0!==j&&j;return Object(u.jsx)("div",{children:h?Object(u.jsxs)("button",{className:b()(d,O(i),"btn",g(l)),children:[Object(u.jsx)("span",{className:"spinner-border spinner-border-sm "}),"Loading..."]}):Object(u.jsx)("button",{type:v(s).typbtn,value:v(s).valuebtn,className:b()(d,O(i),"btn",g(l)),children:a})})},f=(s(22),function(e){switch(e){case"primary":return"bg-primary";case"secondary":return"bg-secondary";case"success":return"bg-success";case"danger":return"bg-danger";case"warning":return"bg-warning";case"info":return"bg-info";case"light":return"bg-light";case"dark":return"bg-dark";default:return""}}),w=function(e){var t=e.bgColor,s=void 0===t?"":t,n=e.isPill,i=void 0!==n&&n,c=e.children,a=e.addClass,r=void 0===a?"":a;return Object(u.jsx)("span",{className:b()("badge",{"rounded-pill":i},r,f(s)),children:c})},y=(s(8),function(e){switch(e){case"small":return"small";case"nomal":return"nomal";case"big":return"big";default:return""}}),N=function(e){var t=e.srcImg,s=void 0===t?"":t,n=e.isFluid,i=void 0!==n&&n,c=e.isRounded,a=void 0!==c&&c,r=e.isRoundedCircle,l=void 0!==r&&r,o=e.isthumbnai,d=void 0!==o&&o,j=e.addClass,h=void 0===j?"":j,m=e.width,x=void 0===m?"":m,v=e.height,O=void 0===v?"":v,g=e.size,p=void 0===g?"":g;return Object(u.jsx)("img",{alt:"",src:s,className:b()("float-start",{"img-fluid":i},{rounded:a},{"rounded-circle":l},{"img-thumbnail":d},h,y(p)),width:x,height:O})},C={delete:Object(u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-trash",children:[Object(u.jsx)("polyline",{points:"3 6 5 6 21 6"}),Object(u.jsx)("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),edit:Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-edit-2",children:Object(u.jsx)("path",{d:"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"})}),nav:Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-twitch",children:Object(u.jsx)("path",{d:"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"})})},k=function(e){var t=e.img,s=void 0===t?"":t,n=e.size,i=void 0===n?"nomal":n,c=e.name,a=void 0===c?"":c,r=e.info,l=void 0===r?"":r,o=e.subInfo,d=void 0===o?"":o,j=e.isBaget,b=void 0!==j&&j,h=e.isBtnAction,m=void 0!==h&&h;return Object(u.jsxs)("div",{className:"avata-user",children:[Object(u.jsx)("div",{className:" ",children:Object(u.jsx)(N,{srcImg:s,size:i,isRoundedCircle:"true"})}),Object(u.jsxs)("div",{className:"body-avata  ",children:[Object(u.jsxs)("div",{className:"title-avata ",children:[a,b&&Object(u.jsx)("span",{className:"px-2 ",children:Object(u.jsx)(w,{bgColor:"primary",children:"New"})})]}),Object(u.jsx)("div",{className:"sub-info pt-0",children:Object(u.jsxs)("span",{children:[" ",l," ",Object(u.jsx)("span",{children:" - "})," ",d]})})]}),m&&Object(u.jsx)("div",{className:" d-flex align-items-center ",children:Object(u.jsxs)("div",{className:"row ",children:[Object(u.jsx)("span",{type:"button",class:" col px-2 action-icon-delete ",children:C.delete}),Object(u.jsx)("span",{type:"button",class:" col  px-2 action-icon-edit",children:C.edit})]})})]})},B=(s(23),function(e){var t,s=e.children,n=e.addClass,i=void 0===n?"":n,c=e.color,a=void 0===c?"":c,r=e.isBaget,l=void 0!==r&&r,o=e.titleBaget,d=void 0===o?"":o;return Object(u.jsxs)("div",{className:b()("card-header",i,(t=a,"blue"===t?"bg-blue":""),{"d-flex  align-items-center ":l}),children:[s,l&&Object(u.jsx)("span",{className:"ps-2",children:Object(u.jsx)(w,{bgColor:"dark",children:d})})]})}),I=function(e){var t=e.children,s=e.addClass,n=void 0===s?"":s;return Object(u.jsx)("div",{className:b()("card-body",n),children:t})},L=function(e){var t=e.children,s=e.addClass,n=void 0===s?"":s,i=e.isButton,c=void 0!==i&&i,a=e.btn1,r=void 0===a?"":a,l=e.btn2,o=void 0===l?"":l;return Object(u.jsxs)("div",{className:b()("card-footer",{addClass:n}),children:[t,c&&Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-md-6",children:Object(u.jsx)(p,{variant:"primary",addClass:"w-100",children:r})}),Object(u.jsx)("div",{className:"col-md-6",children:Object(u.jsx)(p,{variant:"outline-primary",addClass:"w-100",children:o})})]})]})},S=(s(24),function(e){var t,s=e.type,n=void 0===s?"":s,i=e.src,c=void 0===i?"":i,a=e.isFluid,r=void 0!==a&&a,l=e.isRounded,o=void 0!==l&&l,d=e.isRoundedCircle,j=void 0!==d&&d,h=e.isthumbnai,m=void 0!==h&&h;return Object(u.jsx)("div",{children:Object(u.jsx)("img",{className:b()((t=n,"img-bottom"===t?"card-img-bottom":"card-img-top"),{"img-fluid":r},{rounded:o},{"rounded-circle":j},{"img-thumbnail":m}),src:c,alt:"Card image"})})}),T=function(e){var t=e.children,s=e.addClass,n=void 0===s?"":s,i=e.href,c=void 0===i?"":i;return Object(u.jsx)("div",{children:Object(u.jsx)("a",{href:c,className:b()("card-link",n),children:t})})},R=Object.assign((function(e){var t=e.children,s=e.addClass,n=void 0===s?"":s;return Object(u.jsx)("div",{className:b()("card","no-gutter",{addClass:n}),children:t})}),{Header:B,Body:I,Footer:L,Img:S,Link:T}),A=(s(25),s(26),function(e){var t,s=e.children,n=e.directions,i=void 0===n?[]:n,c=e.name,a=void 0===c?"":c,r=e.id,l=void 0===r?"":r,o=e.bgEx,d=void 0===o?"":o;return Object(u.jsxs)("div",{className:"show-component mt-5 ",id:l,children:[Object(u.jsxs)("div",{className:" title  col ",children:[Object(u.jsxs)("h2",{className:"",children:[" ",a," "]}),null===i||void 0===i||null===(t=i.map)||void 0===t?void 0:t.call(i,(function(e){return Object(u.jsxs)("h6",{children:["Direction",Object(u.jsx)("span",{className:"txt-secondary px-2",children:e})]})}))]}),Object(u.jsx)("div",{className:b()("example ",{bgEx:d}),children:Object(u.jsx)("div",{className:"row",children:s})})]})}),z=(s(27),function(e){var t=e.titleLists,s=void 0===t?[]:t,i=e.addClass,c=void 0===i?"":i,a=Object(n.useState)(-1),r=Object(d.a)(a,2),l=r[0],o=r[1];return Object(u.jsx)("nav",{className:b()("navbar",c),children:Object(u.jsx)("ul",{className:"navbar-nav",children:null===s||void 0===s?void 0:s.map((function(e,t){return Object(u.jsx)("li",{className:b()("nav-item ",{myActive:l==t}),children:Object(u.jsxs)("a",{className:"nav-link ",href:e.section,onClick:function(){return function(e){o(e)}(t)},children:[e.icon,e.title]})},e.id)}))})})}),D=s.p+"static/media/User.18c02b5d.png",P=(s(28),function(e){var t=e.ListItem,s=void 0===t?[]:t,i=e.addClass,c=void 0===i?"":i,a=e.nameBtn,r=void 0===a?" Dropdown button":a,l=Object(n.useState)(!1),o=Object(d.a)(l,2),j=o[0],h=o[1],m=Object(n.useRef)(null),x=Object(n.useState)(20),v=Object(d.a)(x,2),O=v[0],g=v[1];return Object(n.useEffect)((function(){console.log("refButton.current",m.current),g(m.current.clientWidth)}),[]),Object(u.jsxs)("div",{className:"dropdown",children:[Object(u.jsx)("button",{ref:m,className:b()("btn  dropdown-toggle",c),type:"button","data-bs-toggle":"dropdown",onClick:function(){return h(!j)},"aria-expanded":"false",children:r}),j&&Object(u.jsx)("ul",{className:"dropdown-menu show ",style:{width:O},children:null===s||void 0===s?void 0:s.map((function(e){return Object(u.jsx)("li",{className:"border-bottom",children:Object(u.jsx)("a",{className:"dropdown-item",href:"#",children:e})},e.id)}))})]})}),F=function(e){switch(e){case"text-muted":return"text-muted";default:return"text-primary";case"text-success":return"text-info";case"text-warning":return"text-warning";case"text-danger":return"text-danger";case"text-secondary":return"text-secondary";case"text-dark":return"text-dark";case"text-light":return"text-light"}},M=function(e){var t,s=e.type,n=void 0===s?"":s,i=e.color,c=void 0===i?"":i,a=e.addClass,r=void 0===a?"":a;return Object(u.jsx)("div",{className:b()("",(t=n,"grow"===t?"spinner-grow":"spinner-border"),F(c),r)})},E=(s(29),function(e){var t=e.ContentLabe,s=void 0===t?"":t,i=e.type,c=void 0===i?"":i,a=e.addClass,r=void 0===a?"":a,l=e.id,o=void 0===l?"":l,j=e.placeholder,h=void 0===j?"":j,m=e.name,x=void 0===m?"":m,v=e.size,O=void 0===v?"":v,g=e.isButton,f=void 0!==g&&g,w=(e.onsubmit,Object(n.useState)("")),y=Object(d.a)(w,2),N=y[0],C=y[1];return Object(u.jsxs)("form",{class:"mb-3 mt-3",onSubmit:function(e){if(e.preventDefault(),N){C("")}},children:[Object(u.jsx)("label",{for:"",class:"form-label",children:s}),Object(u.jsx)("input",{type:c,className:b()("form-control",r,O),id:o,placeholder:h,name:x,value:N,onChange:function(e){console.log(e.target.value),C(e.target.value)}}),f&&Object(u.jsx)(p,{variant:"primary",type:"submit",children:"Submit"})]})});function H(e){var t=e.onSubmit,s=Object(n.useState)(""),i=Object(d.a)(s,2),c=i[0],a=i[1],r=Object(n.useState)(""),l=Object(d.a)(r,2),o=l[0],j=l[1],b=Object(n.useState)(""),h=Object(d.a)(b,2),m=h[0],x=h[1];return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t&&c&&(t({title:c,password:o,checkbox:m}),a(""),j(""),x(""))},children:[Object(u.jsxs)("div",{className:"mb-3 mt-3",children:[Object(u.jsx)("label",{for:"email",className:"form-label",children:"Email"}),Object(u.jsx)("input",{className:"form-control",id:"email",placeholder:"Enter email",name:"email",type:"email",value:c,onChange:function(e){console.log(e.target.value),a(e.target.value)}})]}),Object(u.jsxs)("div",{className:"mb-3 mt-3",children:[Object(u.jsx)("label",{for:"pwd",className:"form-label",children:"Password"}),Object(u.jsx)("input",{className:"form-control",id:"pwd",placeholder:"Enter Password",name:"pswd",type:"password",value:o,onChange:function(e){console.log(e.target.value),j(e.target.email)}})]}),Object(u.jsxs)("div",{className:"form-check",children:[Object(u.jsx)("input",{className:"form-check-input",type:"checkbox",value:m,id:"flexCheckDefault"}),Object(u.jsx)("label",{className:"form-check-label",for:"flexCheckDefault",children:"Default checkbox"})]}),Object(u.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})}H.defaultProps={onSubmit:null};var U=H,W=(s(30),Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-exclamation-triangle-fill flex-shrink-0 me-3",viewBox:"0 0 16 16",role:"img","aria-label":"Warning:",children:Object(u.jsx)("path",{d:"M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"})})),V="https://image.thanhnien.vn/1080/uploaded/haoph/2021_03_06/img_0467_lsvb.jpg";function _(){var e,t=Object(n.useState)([{id:1,title:"Hi, I\u2019m @ThuyDesigner  \ud83d\ude0d",email:"ngthithuthuy"},{id:2,title:"I\u2019m interested in ... \ud83e\udd70"},{id:3,title:"I\u2019m looking to collaborate on\ud83d\ude80"}]),s=Object(d.a)(t,2),i=s[0],c=s[1];return Object(u.jsx)("div",{className:"bg-light ",children:Object(u.jsx)("div",{className:"container-fluid",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:" tab-selection bg-dark  col-md-2",children:Object(u.jsx)(z,{titleLists:[{title:"AlertsCommon",section:"#section1",icon:C.nav},{title:"ButtonCommon",section:"#section2",icon:C.nav},{title:"BagetCommon",section:"#section3",icon:C.nav},{title:"AvataUser & AvataImg",section:"#section4",icon:C.nav},{title:"CardCommon",section:"#section5",icon:C.nav},{title:"DropdownCommon",section:"#section6",icon:C.nav},{title:"SpinnersCommon",section:"#section7",icon:C.nav}],addClass:"fixed"})}),Object(u.jsxs)("div",{className:" col-md-10 App ",children:[Object(u.jsx)("div",{className:"fix-top",children:Object(u.jsxs)("h1",{className:"",children:[Object(u.jsx)("span",{})," Show all component"]})}),Object(u.jsxs)(A,{name:"1.AlertsCommon",directions:['type = "", isbtnbutton = false, children = "", icon = ""'],id:"section1",children:[" ",Object(u.jsxs)("div",{className:"col-md-6",children:[Object(u.jsx)(x,{className:"pd-2",isbtnbutton:"true",icon:W,children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Well done! "}),Object(u.jsx)("h6",{children:"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."}),Object(u.jsx)("hr",{})]}),Object(u.jsx)("div",{children:"An example success alert with an icon"})]})}),Object(u.jsx)(x,{type:"warning",children:"This is AlertsCommon"})]}),Object(u.jsx)("div",{className:"col-md-6",children:Object(u.jsx)(x,{className:"pd-2",isbtnbutton:"true",type:"secondary",icon:W,children:Object(u.jsx)("h2",{children:"This is Baget Secondary "})})})]}),Object(u.jsxs)(A,{name:"2.ButtonCommon",directions:['type = "", variant = "", children = "", size = "", addClass\n              = "", isLoading = false'],id:"section2",children:[Object(u.jsx)("div",{className:" p-3",children:Object(u.jsxs)(p,{type:"submit",variant:"outline-primary",children:[" ","button"]})}),Object(u.jsx)("div",{className:" p-3 ",children:Object(u.jsxs)(p,{type:"buton",addClass:"btn-outline-secondary  ",children:[" ","button"]})}),Object(u.jsx)("div",{className:"  p-3",children:Object(u.jsxs)(p,{type:"buton",isLoading:"true",addClass:"btn-primary",children:[" ","button"]})})]}),Object(u.jsx)(A,{name:"3.BagetCommon",directions:['bgColor = "", isPill = false, children, addClass = ""'],id:"section3",children:Object(u.jsxs)("div",{className:" p-3",children:[Object(u.jsxs)("h5",{children:["this is baget"," ",Object(u.jsx)(w,(e={bgColor:"secondary",isPill:"true"},Object(r.a)(e,"isPill","true"),Object(r.a)(e,"children","hello"),e))]}),Object(u.jsxs)("h1",{children:["this is baget"," ",Object(u.jsx)(w,{bgColor:"warning",children:"hello"})]})]})}),Object(u.jsxs)(A,{name:"4.AvataUser & AvataImg",directions:['srcImg = "", isFluid = false, isRounded = false,\n              isRoundedCircle = false, isthumbnai = false, addClass = "",\n              width = "", height = "", size = ""'],id:"section4",children:[Object(u.jsxs)("div",{className:"col-md-12",children:[Object(u.jsx)(N,{srcImg:V,size:"big",isRoundedCircle:"true"}),Object(u.jsx)(N,{srcImg:V,size:"big",isthumbnai:"true"})]}),Object(u.jsx)("div",{className:" p-3 col-md-4",children:Object(u.jsx)(k,{img:V,name:"Nguyen Thi Thu Thuy",info:"Designer",subInfo:"CRM",isBtnAction:"TRUE",isBaget:"true"})}),Object(u.jsx)("div",{className:" p-3 col-md-4",children:Object(u.jsx)(k,{img:V,name:"Nguyen Thi Thu Thuy",info:"Designer",subInfo:"CRM",isBtnAction:"TRUE",isBaget:"true"})}),Object(u.jsx)("div",{className:" p-3 col-md-4",children:Object(u.jsx)(k,{img:V,name:"Nguyen Thi Thu Thuy",info:"Designer",subInfo:"CRM",isBtnAction:"TRUE",isBaget:"true"})})]}),Object(u.jsxs)(A,{name:"5.CardCommon",directions:['children, addClass = "" '],id:"section5",children:[Object(u.jsx)("div",{className:"col-md-2",children:Object(u.jsxs)(R,{children:[Object(u.jsx)(R.Header,{addClass:"bg-white",children:Object(u.jsx)(R.Img,{type:"img-bottom",src:D,isRoundedCircle:"true"})}),Object(u.jsxs)(R.Body,{children:[Object(u.jsx)("h3",{class:"card-title",children:"Nguyen Thi Thu Thuy"}),Object(u.jsxs)("p",{class:"card-text",children:["\ud83d\udc4b Hi, I\u2019m @ThuyDesigner ",Object(u.jsx)("br",{}),"\ud83d\udc40 I\u2019m interested in ... ",Object(u.jsx)("br",{}),"\ud83c\udf31 I\u2019m currently learning ...",Object(u.jsx)("br",{}),"\ud83d\udc9e\ufe0f I\u2019m looking to collaborate on... ",Object(u.jsx)("br",{}),"\ud83d\udceb How to reach me ..."]})]}),Object(u.jsx)(R.Footer,{isButton:"true",btn1:"Read more",btn2:"Contact"})]})}),Object(u.jsx)("div",{className:"col-md-2",children:Object(u.jsxs)(R,{children:[Object(u.jsx)(R.Header,{children:Object(u.jsx)("h2",{children:"Help desk"})}),Object(u.jsxs)(R.Footer,{children:[Object(u.jsxs)("div",{className:"border-bottom w-100 pb-2",children:[" ",Object(u.jsx)(R.Link,{href:"",addClass:"",children:"What do you want?"})]}),Object(u.jsxs)("div",{className:"border-bottom w-100 pb-2",children:[" ",Object(u.jsx)(R.Link,{href:"",addClass:" ",children:"What\u2019s your favorite thing you own and why?"})]}),Object(u.jsxs)("div",{className:" w-100 pb-2",children:[" ",Object(u.jsx)(R.Link,{href:"",addClass:" ",children:"How do you like to be comforted when you\u2019re sad or upset?"})]})]})]})})]}),Object(u.jsx)(A,{name:"6.Dropdown",directions:['ListItem = [], addClass = "", nameBtn = " Dropdown button",'],id:"section6",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"col-md-4",children:[" ",Object(u.jsx)(P,{addClass:"btn-info",nameBtn:"Click me to see special thing!",ListItem:['"Bad Blood" (2014)','"Santa Baby" (2007)','"A Place in This World" (2006)','\n                    "Christmas Must Be Something More" (2007)']})]}),Object(u.jsxs)("div",{className:"col-md-4",children:[" ",Object(u.jsx)(P,{addClass:"btn-primary",ListItem:["list 1","list 2","list 3"]})]}),Object(u.jsxs)("div",{className:"col-md-4",children:[" ",Object(u.jsx)(P,{ListItem:["list 1","list 2","list 3"]})]})]})}),Object(u.jsx)(A,{name:"7.SpinnersCommon",directions:['type = "", color = "", addClass = ""'],id:"section7",children:Object(u.jsxs)("div",{className:"col",children:[Object(u.jsx)("span",{className:"pe-2",children:Object(u.jsx)(M,{type:"grow",addClass:"pd-2"})}),Object(u.jsxs)("span",{className:"pe-2",children:[" ",Object(u.jsx)(M,{type:"spinner"})]}),Object(u.jsxs)("span",{className:"pe-2",children:[" ",Object(u.jsx)(M,{type:"grow",color:"text-danger"})]}),Object(u.jsxs)("span",{className:"pe-2",children:[" ",Object(u.jsx)(M,{type:"spinner",color:"text-dark"})]})]})}),Object(u.jsx)(A,{name:"8.TooltipCommon",directions:[""],id:"section7",children:Object(u.jsxs)("div",{className:"col-md-3",children:[Object(u.jsx)(E,{ContentLabe:"Your name or your email",placeholder:"Please add your name or your email in here",size:"form-control-lg"}),Object(u.jsx)(E,{ContentLabe:"Your name or your email",placeholder:"Please add your name or your email in here",size:"",isButton:"true"}),Object(u.jsx)(U,{onSubmit:function(e){console.log("Form submit: ",e);var t=Object(o.a)({id:i.length+1},e),s=Object(l.a)(i);s.push(t),c(s)}}),Object(u.jsx)(z,{titleLists:i,addClass:"bg-dark"}),Object(u.jsx)(E,{isButton:"true"})]})})]})]})})})}var J=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,33)).then((function(t){var s=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;s(e),n(e),i(e),c(e),a(e)}))};a.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(_,{})}),document.getElementById("root")),J()}],[[32,1,2]]]);
//# sourceMappingURL=main.cf74b170.chunk.js.map