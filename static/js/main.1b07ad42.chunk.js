(this["webpackJsonpmessage-board-app"]=this["webpackJsonpmessage-board-app"]||[]).push([[0],{40:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(33),i=a.n(n),r=(a(40),a(11)),l=a(2),d=a(3),o=a(5),u=a(0),j=function(e){var t=e.userInfo,a=e.logOut,s=Object(c.useState)(null),n=Object(l.a)(s,2),i=n[0],r=n[1],d=Object(c.useState)(!1),j=Object(l.a)(d,2),h=j[0],m=j[1];return Object(c.useEffect)((function(){m(a)}),[a]),Object(c.useEffect)((function(){if(t&&null!==t&&t.length>0&&""!==t[0].name)r(t[0].name);else{var e=JSON.parse(localStorage.getItem("authorName"));""!==e&&r(e)}}),[t]),Object(u.jsx)("div",{className:"ui block left aligned header Header",children:Object(u.jsx)("div",{className:"",children:Object(u.jsx)("div",{className:"",children:Object(u.jsxs)("div",{className:"",children:[Object(u.jsx)("h2",{children:"Message Board App"}),Object(u.jsxs)("div",{className:"ui pointing menu",children:[Object(u.jsx)(o.c,{exact:!0,activeClassName:"active item",className:"item",to:"/",children:"Home"}),Object(u.jsx)(o.c,{exact:!0,activeClassName:"active item",className:"item",to:"/About",children:"About us"}),Object(u.jsx)(o.c,{exact:!0,activeClassName:"active item",className:"item",to:"/Contact",children:"Contact us"}),Object(u.jsx)("div",{className:"right menu",children:!h&&i&&null!==i&&""!==i?Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(o.c,{activeClassName:"active item",className:"item",to:"/Logout",children:"Logout"})}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(o.c,{activeClassName:"active item",className:"item",to:"/Login",children:"Login"}),Object(u.jsx)(o.c,{activeClassName:"active item",className:"item",to:"/Register",children:"Register"})]})})]}),!h&&i&&null!==i&&""!==i?Object(u.jsx)("div",{className:"Welcome-msg",children:Object(u.jsxs)("h4",{children:["Welcome : ",i]})}):Object(u.jsx)(u.Fragment,{})]})})})})},h=function(){return Object(u.jsxs)("div",{className:"ui left aligned placeholder segment",children:[Object(u.jsx)("h3",{className:"ui header",children:"About us"}),Object(u.jsx)("p",{children:"We are expert in developing web apps using React js :)"})]})},m=function(){return Object(u.jsxs)("div",{className:"ui left aligned placeholder segment",children:[Object(u.jsx)("h3",{className:"ui header",children:"Contact us"}),Object(u.jsx)("p",{children:"For any queries reach out to us on our helpdesk no."})]})},b=a(6),O=a.n(b),x=a(12),p=a(14),f=a(35),v=a.n(f),g=function(e){var t=e.loginHandler,a=Object(c.useState)({email:"",password:""}),s=Object(l.a)(a,2),n=s[0],i=s[1],j=Object(c.useState)(null),h=Object(l.a)(j,2),m=h[0],b=h[1],f=Object(c.useState)(!1),g=Object(l.a)(f,2),N=g[0],S=g[1],C=Object(d.f)(),y=m&&m.length>0?m[0].id:"",w=m&&m.length>0?m[0].name:"";Object(c.useEffect)((function(){localStorage.setItem("authorId",JSON.stringify(y)),localStorage.setItem("authorName",JSON.stringify(w))}),[y,w]),Object(c.useEffect)((function(){m&&null!==m&&m.length>0&&t(m)}),[m]);var I=function(e){var t=e.target,a=t.name,c=t.value;i(Object(r.a)(Object(r.a)({},n),{},Object(p.a)({},a,c)))},k=function(){var e=Object(x.a)(O.a.mark((function e(t){var a,c,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a="http://localhost:5000/login?email=".concat(n.email,"&password=").concat(n.password),e.next=4,v.a.get(a);case 4:return c=e.sent,e.next=7,c.data;case 7:null!==(s=e.sent)&&s.length>0&&(b(c.data),C.push("/")),null!==s&&0!==s.length||(S(!0),i({email:"",password:""}));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"ui placeholder segment",children:[Object(u.jsxs)("div",{className:"ui stackable very relaxed two column grid",children:[Object(u.jsxs)("div",{className:"column",children:[Object(u.jsxs)("form",{className:"ui form",onSubmit:k,children:[Object(u.jsxs)("div",{className:"field",children:[Object(u.jsx)("label",{children:"Username"}),Object(u.jsxs)("div",{className:"ui left icon input",children:[Object(u.jsx)("input",{type:"text",name:"email",placeholder:"Email",value:n.email,onChange:I,required:!0}),Object(u.jsx)("i",{"aria-hidden":"true",className:"user icon"})]})]}),Object(u.jsxs)("div",{className:"field",children:[Object(u.jsx)("label",{children:"Password"}),Object(u.jsxs)("div",{className:"ui left icon input",children:[Object(u.jsx)("input",{type:"password",name:"password",placeholder:"Password",value:n.password,onChange:I,required:!0}),Object(u.jsx)("i",{"aria-hidden":"true",className:"lock icon"})]})]}),Object(u.jsx)("button",{className:"ui primary button",type:"submit",children:"Login"})]}),N&&Object(u.jsx)("div",{className:"Shift-down Warning",children:"User not found. Please sign up."})]}),Object(u.jsx)("div",{className:"middle aligned column",children:Object(u.jsx)(o.b,{to:"Register",children:Object(u.jsxs)("button",{className:"ui large button",children:[Object(u.jsx)("i",{"aria-hidden":"true",className:"signup icon"}),"Sign up"]})})})]}),Object(u.jsx)("div",{className:"ui vertical divider",children:"Or"})]})},N=a(17),S=a(69),C=function(){var e=Object(x.a)(O.a.mark((function e(){var t,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"http://localhost:5000/messages",e.next=4,fetch("http://localhost:5000/messages");case 4:return t=e.sent,e.next=7,t.json();case 7:return a=e.sent,e.abrupt("return",a);case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(x.a)(O.a.mark((function e(t){var a,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"http://localhost:5000/messages",e.next=4,fetch("http://localhost:5000/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:return a=e.sent,e.next=7,a.json();case 7:return c=e.sent,e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(x.a)(O.a.mark((function e(t){var a,c,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="http://localhost:5000/messages/".concat(t),e.next=4,fetch(a,{method:"DELETE",headers:{"Content-Type":"application/json"},body:null});case 4:return c=e.sent,e.next=7,c.json();case 7:return s=e.sent,e.abrupt("return",s);case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(x.a)(O.a.mark((function e(t){var a,c,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="http://localhost:5000/messages/".concat(t.id),e.next=4,fetch(a,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:return c=e.sent,e.next=7,c.json();case 7:return s=e.sent,e.abrupt("return",s);case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(x.a)(O.a.mark((function e(t){var a,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"http://localhost:5000/login",e.next=4,fetch("http://localhost:5000/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:return a=e.sent,e.next=7,a.json();case 7:return c=e.sent,e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),E=function(e){var t=e.id,a=e.childItem,s=e.editFlagChange,n=e.editing,i=e.authorId,r=e.authorName,d=e.parentId,o=Object(c.useState)(""),j=Object(l.a)(o,2),h=j[0],m=j[1],b=Object(c.useState)(""),O=Object(l.a)(b,2),x=O[0],p=O[1],f=Object(c.useState)(!1),v=Object(l.a)(f,2),g=v[0],N=v[1],C=Object(c.useState)(!1),k=Object(l.a)(C,2),E=k[0],L=k[1],D=(new Date).toLocaleDateString();return Object(u.jsx)("div",{className:"comment Shift-right",children:Object(u.jsx)("div",{children:n&&E?Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"content Shift-down",children:[Object(u.jsx)("div",{className:"avatar",children:Object(u.jsx)("img",{src:"avatar.jpg",alt:"avatar"})}),Object(u.jsxs)("div",{className:"author User Shift-right",children:[a.authorName,Object(u.jsx)("div",{className:"metadata",children:a.date})]}),Object(u.jsx)("div",{className:"fields Edit-input",children:Object(u.jsx)("div",{className:"field",children:Object(u.jsx)("div",{className:"ui input",children:Object(u.jsx)("input",{type:"text",value:h,onChange:function(e){m(e.target.value)},placeholder:a.message,required:!0})})})}),Object(u.jsxs)("div",{className:"actions Shift-right",children:[Object(u.jsx)("a",{href:"/#",onClick:function(){return function(e){if(""!==h){var a={id:e.id,message:h,parentId:d,authorName:r,author:i,date:D};s(t,"CANCEL"),I(a).then((function(e){return m(e.message)}))}else alert("Message text is mandatory!")}(a)},children:"Save"}),Object(u.jsx)("a",{href:"/#",onClick:function(){L(!1)},children:"Cancel"})]})]})},t):Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"content Shift-down",children:[Object(u.jsx)("div",{className:"avatar",children:Object(u.jsx)("img",{src:"avatar.jpg",alt:"avatar"})}),Object(u.jsxs)("div",{className:"author User Shift-right",children:[a.authorName,Object(u.jsx)("div",{className:"metadata",children:a.date})]}),Object(u.jsx)("div",{className:"text Shift-right",children:h||a.message}),Object(u.jsx)("div",{className:"actions Shift-right",children:""!==i&&i===a.author&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("a",{href:"/#",onClick:function(){return function(e){L(!0),s(e,"EDIT")}(t)},children:"Edit"}),Object(u.jsx)("a",{href:"/#",onClick:function(){return function(e){s("","CANCEL"),w(e).then((function(e){return e}))}(t)},children:"Delete"})]})}),g&&Object(u.jsx)("form",{className:"ui reply form Shift-right",children:Object(u.jsxs)("div",{className:"fields Reply-input",children:[Object(u.jsx)("div",{className:"field",children:Object(u.jsx)("div",{className:"ui input",children:Object(u.jsx)("input",{className:"field",type:"text",name:"reply",placeholder:"Reply to message thread",value:x,onChange:function(e){p(e.target.value)},required:!0})})}),Object(u.jsx)("div",{className:"field",children:Object(u.jsx)("button",{className:"ui button",onClick:function(e){if(e.preventDefault(),""!==x){var t={id:Object(S.a)(),message:x,parentId:a.id,authorName:r,author:i,date:D};y(t).then((function(e){return e}))}else alert("Reply text is mandatory!")},children:"Post"})}),Object(u.jsx)("div",{className:"field",children:Object(u.jsx)("button",{className:"ui button",onClick:function(){N(!1)},children:"Cancel"})})]})})]})},t)})})},L=function(e){var t=e.id,a=e.messageItem,s=e.editFlagChange,n=e.editing,i=e.authorId,r=e.authorName,d=e.messages,o=e.editFlagId,j=Object(c.useState)(""),h=Object(l.a)(j,2),m=h[0],b=h[1],O=Object(c.useState)(""),x=Object(l.a)(O,2),p=x[0],f=x[1],v=Object(c.useState)(!1),g=Object(l.a)(v,2),N=g[0],C=g[1],k=Object(c.useState)(!1),L=Object(l.a)(k,2),D=L[0],F=L[1],P=Object(c.useState)(!1),R=Object(l.a)(P,2),T=R[0],q=R[1],A=Object(c.useState)(!1),J=Object(l.a)(A,2),H=J[0],M=J[1],U=(new Date).toLocaleDateString(),W=d.filter((function(e){return e.parentId===t})).map((function(e,a){return Object(u.jsx)(E,{id:e.id,childItem:e,editFlagChange:s,editing:o===e.id,authorId:i,authorName:r,parentId:t},a)}));return Object(u.jsxs)("div",{className:"comment",children:[n&&H?Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"content Shift-down",children:[Object(u.jsx)("div",{className:"avatar",children:Object(u.jsx)("img",{src:"avatar.jpg",alt:"avatar"})}),Object(u.jsxs)("div",{className:"author User Shift-right",children:[a.authorName,Object(u.jsx)("div",{className:"metadata",children:a.date})]}),Object(u.jsx)("div",{className:"fields Edit-input",children:Object(u.jsx)("div",{className:"field",children:Object(u.jsx)("div",{className:"ui input",children:Object(u.jsx)("input",{type:"text",value:m,onChange:function(e){b(e.target.value)},placeholder:a.message,required:!0})})})}),Object(u.jsxs)("div",{className:"actions Shift-right",children:[Object(u.jsx)("a",{href:"/#",onClick:function(){return function(e){if(""!==m){var a={id:e.id,message:m,parentId:null,authorName:r,author:i,date:U};s(t,"CANCEL"),I(a).then((function(e){return b(e.message)}))}else alert("Message text is mandatory!")}(a)},children:"Save"}),Object(u.jsx)("a",{href:"/#",onClick:function(){M(!1)},children:"Cancel"})]})]})},t):Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"content Shift-down",children:[Object(u.jsx)("div",{className:"avatar",children:Object(u.jsx)("img",{src:"avatar.jpg",alt:"avatar"})}),Object(u.jsxs)("div",{className:"author User Shift-right",children:[a.authorName,Object(u.jsx)("div",{className:"metadata",children:a.date})]}),Object(u.jsx)("div",{className:"text Shift-right",children:m||a.message}),Object(u.jsxs)("div",{className:"actions Shift-right",children:[i&&""!==i&&Object(u.jsx)("a",{href:"/#",onClick:function(){return q(!0),F(!0),void C(!1)},children:"Reply"}),i&&""!==i&&i===a.author&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("a",{href:"/#",onClick:function(){return function(e){M(!0),s(e,"EDIT")}(t)},children:"Edit"}),Object(u.jsx)("a",{href:"/#",onClick:function(){return function(e){s("","CANCEL"),w(e).then((function(e){return e}))}(t)},children:"Delete"})]})]}),D&&T&&Object(u.jsx)("form",{className:"ui reply form Shift-right",children:!N&&Object(u.jsx)("div",{className:"fields Reply-input",children:Object(u.jsxs)("div",{className:"field",children:[Object(u.jsx)("div",{className:"ui input",children:Object(u.jsx)("input",{className:"field",type:"text",name:"reply",placeholder:"Reply to message thread",value:p,onChange:function(e){f(e.target.value)},required:!0})}),Object(u.jsxs)("div",{className:"actions Shift-top",children:[Object(u.jsx)("a",{href:"/#",onClick:function(e){if(e.preventDefault(),""!==p){var t={id:Object(S.a)(),message:p,parentId:a.id,authorName:r,author:i,date:U};y(t).then((function(e){return e})),C(!0)}else alert("Reply text is mandatory!")},children:"Post"}),Object(u.jsx)("a",{href:"/#",onClick:function(){q(!1)},children:"Cancel"})]})]})})})]})},t),Object(u.jsx)("div",{children:W})]})},D=function(e){var t=e.messages,a=e.authorId,s=e.authorName,n=Object(c.useState)(null),i=Object(l.a)(n,2),r=i[0],d=i[1],o=function(e,t){d("EDIT"===t?e:null)},j=t.filter((function(e){return null===e.parentId})).map((function(e,c){return Object(u.jsx)(L,{id:e.id,messageItem:e,editFlagChange:o,editing:r===e.id,authorId:a,authorName:s,messages:t,editFlagId:r},c)}));return Object(u.jsx)("div",{children:j})},F=function(e){var t=e.inputMessage,a=e.handleSubmit,c=e.onhandleChanged,s=e.authorId;return s&&void 0!==s&&null!==s&&""!==s?Object(u.jsx)("form",{className:"ui reply form",onSubmit:a,children:Object(u.jsxs)("div",{className:"fields",children:[Object(u.jsx)("div",{className:"field",children:Object(u.jsx)("div",{className:"ui input",children:Object(u.jsx)("input",{className:"field",type:"text",name:"message",placeholder:"Write something...",value:t,onChange:c,required:!0})})}),Object(u.jsx)("div",{className:"field",children:Object(u.jsx)("button",{className:"ui primary button",type:"submit",children:"Submit"})})]})}):Object(u.jsx)("div",{className:"Shift-down",children:Object(u.jsxs)("p",{children:["Please ",Object(u.jsx)(o.b,{to:"/Login",children:"Login"})," to create a new message thread"]})})},P=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)([]),i=Object(l.a)(n,2),r=i[0],d=i[1],o=Object(c.useState)(""),j=Object(l.a)(o,2),h=j[0],m=j[1],b=Object(c.useState)(""),O=Object(l.a)(b,2),x=O[0],p=O[1],f=(new Date).toLocaleDateString();Object(c.useEffect)((function(){C().then((function(e){return d(e)}))}),[r]),Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("authorId"));""!==e&&m(e);var t=JSON.parse(localStorage.getItem("authorName"));""!==t&&p(t)}),[]);var v={id:Object(S.a)(),message:a,parentId:null,authorName:x,author:h,date:f};return Object(u.jsx)("div",{className:"ui left aligned segment Message-board Comment-scroll",children:Object(u.jsxs)("div",{className:"ui comments",children:[Object(u.jsx)("h3",{className:"ui header",children:"Messages"}),Object(u.jsx)(D,{messages:r,authorId:h,authorName:x}),Object(u.jsx)(F,{handleSubmit:function(e){e.preventDefault(),y(v).then((function(e){return d([].concat(Object(N.a)(r),[{id:e.id,message:e.message,parentId:e.parentId,authorName:e.authorName,author:e.author,date:e.date}]))}),s(""))},inputMessage:a,onhandleChanged:function(e){s(e.target.value)},authorId:h})]})})},R=function(e){var t=Object(c.useState)([]),a=Object(l.a)(t,2),s=a[0],n=a[1],i=Object(c.useState)({name:"",email:"",password:""}),d=Object(l.a)(i,2),o=d[0],j=d[1],h=Object(c.useState)(!1),m=Object(l.a)(h,2),b=m[0],O=m[1],x=(new Date).toLocaleDateString(),f=function(e){var t=e.target,a=t.name,c=t.value;j(Object(r.a)(Object(r.a)({},o),{},Object(p.a)({},a,c)))},v={id:Object(S.a)(),name:o.name,email:o.email,password:o.password,date:x};return Object(u.jsx)("div",{className:"ui placeholder segment",children:Object(u.jsx)("div",{className:"ui stackable very relaxed two column grid",children:Object(u.jsxs)("div",{className:"column",children:[!b&&Object(u.jsxs)("form",{className:"ui form",onSubmit:function(e){e.preventDefault(),n([].concat(Object(N.a)(s),[{name:o.name,email:o.email,password:o.password}])),k(v).then((function(e){return n([].concat(Object(N.a)(s),[{id:e.id,name:e.name,email:e.email,password:e.password,date:e.date}]))})),O(!0)},children:[Object(u.jsxs)("div",{className:"field",children:[Object(u.jsx)("label",{children:"Name"}),Object(u.jsxs)("div",{className:"ui left icon input",children:[Object(u.jsx)("input",{type:"text",name:"name",placeholder:"Name",value:o.name,onChange:f,required:!0}),Object(u.jsx)("i",{"aria-hidden":"true",className:"user icon"})]})]}),Object(u.jsxs)("div",{className:"field",children:[Object(u.jsx)("label",{children:"Email"}),Object(u.jsxs)("div",{className:"ui left icon input",children:[Object(u.jsx)("input",{type:"text",name:"email",placeholder:"Email",value:o.email,onChange:f,required:!0}),Object(u.jsx)("i",{"aria-hidden":"true",className:"mail icon"})]})]}),Object(u.jsxs)("div",{className:"field",children:[Object(u.jsx)("label",{children:"Password"}),Object(u.jsxs)("div",{className:"ui left icon input",children:[Object(u.jsx)("input",{type:"password",name:"password",placeholder:"Password",value:o.password,onChange:f,required:!0}),Object(u.jsx)("i",{"aria-hidden":"true",className:"lock icon"})]})]}),Object(u.jsx)("button",{className:"ui primary button",type:"submit",children:"Sign up"})]}),b&&Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{children:"Successfully Registered! Click Login to authenticate."}),Object(u.jsx)("div",{className:"middle aligned column",children:Object(u.jsxs)("button",{className:"ui large button",onClick:function(){e.history.push("/Login")},children:[Object(u.jsx)("i",{"aria-hidden":"true",className:"user icon"}),"Login"]})})]})]})})})},T=function(e){var t=e.logOutHandler,a=Object(c.useState)(!1),s=Object(l.a)(a,2),n=s[0],i=s[1];Object(c.useEffect)((function(){t(n)}),[n]);return Object(u.jsxs)("div",{className:"ui left aligned placeholder segment",children:[n&&Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{className:"ui header",children:"Logout Successfully"}),Object(u.jsxs)("p",{children:["Please go to ",Object(u.jsx)(o.b,{to:"/",children:"Home"})," page to see the messages."]})]}),!n&&Object(u.jsxs)("button",{className:"ui large button",onClick:function(){localStorage.clear(),i(!0)},children:[Object(u.jsx)("i",{"aria-hidden":"true",className:"user circle icon"}),"Logout"]})]})},q=function(){return Object(u.jsxs)("div",{className:"ui left aligned placeholder segment",children:[Object(u.jsx)("h3",{className:"ui header",children:"Sorry the page you're looking for can't be found!"}),Object(u.jsx)("p",{children:Object(u.jsx)(o.b,{to:"/",children:"Home"})})]})};a(66);var A=function(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(!1),i=Object(l.a)(n,2),o=i[0],b=i[1],O=function(e){s(e),b(!1)},x=function(e){b(e)};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(j,{userInfo:a,logOut:o}),Object(u.jsxs)(d.c,{children:[Object(u.jsx)(d.a,{exact:!0,path:"/",component:P}),Object(u.jsx)(d.a,{exact:!0,path:"/About",component:h}),Object(u.jsx)(d.a,{exact:!0,path:"/Contact",component:m}),Object(u.jsx)(d.a,{path:"/Login",render:function(e){return Object(u.jsx)(g,Object(r.a)(Object(r.a)({},e),{},{loginHandler:O}))}}),Object(u.jsx)(d.a,{path:"/Register",component:R}),Object(u.jsx)(d.a,{path:"/Logout",render:function(e){return Object(u.jsx)(T,Object(r.a)(Object(r.a)({},e),{},{logOutHandler:x}))}}),Object(u.jsx)(d.a,{component:q})]})]})},J=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,70)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};a(67);i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(o.a,{children:Object(u.jsx)(A,{})})}),document.getElementById("root")),J()}},[[68,1,2]]]);
//# sourceMappingURL=main.1b07ad42.chunk.js.map