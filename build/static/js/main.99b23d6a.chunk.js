(this.webpackJsonpchat_application=this.webpackJsonpchat_application||[]).push([[0],{350:function(e,t,a){},351:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(23),n=a.n(c),r=a(42),l=a(29),i=a(17),o=a.n(i),u=a(24),d=a(9),j=a(147),m=a.n(j),b=a(3),h=function(){var e=Object(s.useState)(""),t=Object(d.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),r=Object(d.a)(n,2),l=r[0],i=r[1],j=Object(s.useState)(""),h=Object(d.a)(j,2),p=h[0],g=h[1],v=function(){var e=Object(u.a)(o.a.mark((function e(t){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s={"Project-ID":"c8bf485d-7813-41f2-ade5-e741179e1875","User-Name":a,"User-Secret":l},e.prev=2,e.next=5,m.a.get("https://api.chatengine.io/chats",{headers:s});case 5:localStorage.setItem("username",a),localStorage.setItem("password",l),window.location.reload(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),g("Oops, incorrect Credentials.");case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"wrapper",children:Object(b.jsxs)("div",{className:"form",children:[Object(b.jsx)("h1",{className:"title",children:"codeApe Chat Application"}),Object(b.jsxs)("form",{onSubmit:v,children:[Object(b.jsx)("input",{type:"text",value:a,onChange:function(e){return c(e.target.value)},className:"input",placeholder:"Username",required:!0}),Object(b.jsx)("input",{type:"password",value:l,onChange:function(e){return i(e.target.value)},className:"input",placeholder:"Password",required:!0}),Object(b.jsx)("div",{align:"center",children:Object(b.jsx)("button",{type:"submit",className:"button",children:Object(b.jsx)("span",{children:"Start Chatting"})})}),Object(b.jsx)("h2",{className:"error",children:p})]})]})})},p=a(353),g=a(354),v=function(e){var t=Object(s.useState)(""),a=Object(d.a)(t,2),c=a[0],n=a[1],r=e.chatId,i=e.creds,o=function(e){e.preventDefault();var t=c.trim();t.length>0&&Object(l.t)(i,r,{text:t}),n("")};return Object(b.jsxs)("form",{className:"message-form",onSubmit:o,children:[Object(b.jsx)("input",{className:"message-input",placeholder:"Send a message...",value:c,onChange:function(t){n(t.target.value),Object(l.p)(e,r)},onSubmit:o}),Object(b.jsx)("label",{htmlFor:"upload-button",children:Object(b.jsx)("span",{className:"image-button",children:Object(b.jsx)(p.a,{className:"picture-icon"})})}),Object(b.jsx)("input",{type:"file",multiple:!1,id:"upload-button",style:{display:"none"},onChange:function(e){Object(l.t)(i,r,{files:e.target.files,text:""})}}),Object(b.jsx)("button",{type:"submit",className:"send-button",children:Object(b.jsx)(g.a,{className:"send-icon"})})]})},x=function(e){var t,a=e.message;return(null===a||void 0===a||null===(t=a.attachments)||void 0===t?void 0:t.length)>0?Object(b.jsx)("img",{src:a.attachments[0].file,alt:"message-attachment",className:"message-image",style:{float:"right"}}):Object(b.jsx)("div",{className:"message",style:{float:"right",marginRight:"18px",color:"white",backgroundColor:"#3B2A50"},children:a.text})},O=function(e){var t,a,s=e.lastMessage,c=e.message,n=!s||s.sender.username!==c.sender.username;return Object(b.jsxs)("div",{className:"message-row",children:[n&&Object(b.jsx)("div",{className:"message-avatar",style:{backgroundImage:"url(".concat(null===c||void 0===c||null===(t=c.sender)||void 0===t?void 0:t.avatar,")")}}),(null===c||void 0===c||null===(a=c.attachments)||void 0===a?void 0:a.length)>0?Object(b.jsx)("img",{src:c.attachments[0].file,alt:"message-attachment",className:"message-image",style:{marginLeft:n?"4px":"48px"}}):Object(b.jsx)("div",{className:"message",style:{float:"left",backgroundColor:"#CABCDC",marginLeft:n?"4px":"48px"},children:c.text})]})},f=function(e){var t=e.chats,a=e.activeChat,s=e.userName,c=e.messages,n=t&&t[a],l=function(e,t){return n.people.map((function(a,s){var c;return a.last_read===e.id&&Object(b.jsx)("div",{className:"read-receipt",style:{float:t?"right":"left",backgroundImage:"url(".concat(null===a||void 0===a||null===(c=a.person)||void 0===c?void 0:c.avatar,")")}},"read_".concat(s))}))};return n?Object(b.jsxs)("div",{className:"chat-feed",children:[Object(b.jsxs)("div",{className:"chat-title-container",children:[Object(b.jsx)("div",{className:"chat-title",children:null===n||void 0===n?void 0:n.title}),Object(b.jsx)("div",{className:"chat-subtitle",children:n.people.map((function(e){return"".concat(e.person.username)}))})]}),function(){var e=Object.keys(c);return e.map((function(t,a){var n=c[t],r=0===a?null:e[a-1],i=s===n.sender.username;return Object(b.jsxs)("div",{style:{width:"100%"},children:[Object(b.jsx)("div",{className:"message-block",children:i?Object(b.jsx)(x,{message:n}):Object(b.jsx)(O,{message:n,lastMessage:c[r]})}),Object(b.jsx)("div",{className:"read-receipts",style:{marginRight:i?"18px":"0px",marginLeft:i?"0px":"68px"},children:l(n,i)})]},"msg_".concat(a))}))}(),Object(b.jsx)("div",{style:{height:"100px"}}),Object(b.jsx)("div",{className:"message-form-container",children:Object(b.jsx)(v,Object(r.a)(Object(r.a)({},e),{},{chatId:a}))})]}):"Loading..."},N=(a(350),function(){return localStorage.getItem("username")?Object(b.jsx)(l.d,{height:"100vh",projectID:"c8bf485d-7813-41f2-ade5-e741179e1875",userName:localStorage.getItem("username"),userSecret:localStorage.getItem("password"),renderChatFeed:function(e){return Object(b.jsx)(f,Object(r.a)({},e))}}):Object(b.jsx)(h,{})});n.a.render(Object(b.jsx)(N,{}),document.getElementById("root"))}},[[351,1,2]]]);
//# sourceMappingURL=main.99b23d6a.chunk.js.map