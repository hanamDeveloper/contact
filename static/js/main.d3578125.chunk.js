(this["webpackJsonpcontact-app"]=this["webpackJsonpcontact-app"]||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=n(17),s=n.n(c),o=(n(41),n(42),n(43),n(4)),u=n.n(o),i=n(12),p=n(3),l=n(8),j=n(6),d=n.n(j);var b=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return{input:e.input,users:e.users}})),n=t.input,r=t.users,c=function(){var t=Object(i.a)(u.a.mark((function t(){var a,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={no:r[0].no+1,name:n.Name,tel:n.tel,address:n.address},t.next=3,d.a.post("http://sample.bmaster.kro.kr/contacts",a);case 3:return e({type:"ADD_USER",user:a}),t.next=6,d.a.get("http://sample.bmaster.kro.kr/contacts");case 6:c=t.sent,e({type:"LOAD_USER",response:c});case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(t){var n=t.target,a=n.name,r=n.value;e({type:"CHANGE_INPUT",name:a,value:r})};return Object(a.jsxs)("div",{className:"content-container",children:[Object(a.jsx)("iframe",{name:"iframe1",style:{display:"none"}}),Object(a.jsx)("div",{className:"content-container__information",children:Object(a.jsxs)("form",{children:[Object(a.jsx)("img",{src:""}),Object(a.jsx)("input",{onChange:s,name:"Name",value:n.Name,placeholder:"\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"}),Object(a.jsx)("input",{onChange:s,name:"tel",value:n.tel,placeholder:"\uc804\ud654\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}),Object(a.jsx)("input",{onChange:s,name:"address",value:n.address,placeholder:"\uc8fc\uc18c\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}),Object(a.jsx)("input",{type:"submit",onClick:c,value:"\ucd94\uac00"})]})})]})};var m=function(){return Object(a.jsxs)("div",{className:"footer",children:[Object(a.jsx)("p",{children:"Contact(\uc8fc)"}),Object(a.jsx)("p",{children:"\ub300\ud45c: \uae40\uc601\uc12d"}),Object(a.jsx)("p",{children:"\uc0ac\uc5c5\uc790\ubc88\ud638: 010-9613-8868"}),Object(a.jsx)("p",{children:"\uc774\uba54\uc77c: zmf1118@gmail.com"})]})},h=n.p+"static/media/logo.94a4adae.png";var O=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("section",{children:Object(a.jsx)("div",{className:"header",children:Object(a.jsx)("img",{src:h,alt:""})})})})},f=n(13);var x=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return{input:e.input,users:e.users}})),n=t.users,r=t.input,c=function(){var t=Object(i.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("http://sample.bmaster.kro.kr/contacts/search/".concat(r.name));case 2:n=t.sent,e({type:"SEARCH_USER",searchUser:n});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=Object(i.a)(u.a.mark((function t(n){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.delete("http://sample.bmaster.kro.kr/contacts/".concat(n));case 2:return t.next=4,d.a.get("http://sample.bmaster.kro.kr/contacts");case 4:a=t.sent,e({type:"LOAD_USER",response:a});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=Object(i.a)(u.a.mark((function t(n){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("http://sample.bmaster.kro.kr/contacts/".concat(n));case 2:a=t.sent,e({type:"SELECTE_USER",selectedUser:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(i.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("http://sample.bmaster.kro.kr/contacts");case 2:n=t.sent,e({type:"LOAD_USER",response:n});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"sider",children:[Object(a.jsx)("div",{className:"input-box",children:Object(a.jsx)("input",{name:"name",onChange:function(t){var n=t.target,a=n.name,r=n.value;e({type:"CHANGE_INPUT",name:a,value:r})},value:r.name,placeholder:"\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"})}),Object(a.jsxs)("div",{className:"sider-button-box",children:[Object(a.jsx)("button",{type:"button",onClick:c,children:"\uac80\uc0c9"}),Object(a.jsx)("button",{type:"button",onClick:p,children:"\uc804\uccb4\ubcf4\uae30"}),Object(a.jsx)(f.b,{to:"/user/addUser",children:Object(a.jsx)("button",{type:"button",children:"\ucd94\uac00"})})]}),Object(a.jsx)("div",{className:"sider__ul-box",children:Object(a.jsx)("ul",{children:n.map((function(e){return Object(a.jsxs)("li",{onClick:function(){return o(e.no)},children:[Object(a.jsx)(f.b,{className:"Link",to:"/user/View/".concat(e.no),children:e.name}),Object(a.jsx)("div",{className:"sider__ul__li__button",children:Object(a.jsx)("button",{type:"button",onClick:function(){return s(e.no)},children:"\uc0ad\uc81c"})})]},e.no)}))})})]})})},v=n(25);var k=function(e){var t=e.match,n=Object(l.c)((function(e){return{selectedUser:e.selectedUser,input:e.input}})),r=n.selectedUser,c=n.input,s=Object(l.b)(),o=function(e){var t=e.target,n=t.name,a=t.value;s({type:"CHANGE_INPUT",name:n,value:a})},p=function(){var e=Object(i.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.put("http://sample.bmaster.kro.kr/contacts/".concat(t.params.no),Object(v.a)(Object(v.a)({},r),{},{no:t.params.no,name:c.Name,tel:c.tel,address:c.address}));case 2:return s({type:"CHANGE_VALUE"}),e.next=5,d.a.get("http://sample.bmaster.kro.kr/contacts");case 5:n=e.sent,s({type:"LOAD_USER",response:n});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"content-container",children:[Object(a.jsx)("iframe",{name:"iframe1",style:{display:"none"}}),Object(a.jsx)("div",{className:"content-container__information",children:Object(a.jsxs)("form",{method:"post",enctype:"multipart/form-data",action:"http://sample.bmaster.kro.kr/contacts/".concat(t.params.no,"/photo"),target:"iframe1",children:[Object(a.jsx)("img",{src:r.photo}),Object(a.jsx)("input",{onChange:o,name:"Name",value:c.Name,placeholder:r.name}),Object(a.jsx)("input",{onChange:o,name:"tel",value:c.tel,placeholder:r.tel}),Object(a.jsx)("input",{onChange:o,name:"address",value:c.address,placeholder:r.address}),Object(a.jsx)("input",{type:"file",name:"photo"}),Object(a.jsx)("input",{type:"submit",onClick:p,value:"\uc218\uc815"})]})})]})};var g=function(){var e=Object(l.b)(),t=function(){var t=Object(i.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("http://sample.bmaster.kro.kr/contacts");case 2:n=t.sent,e({type:"LOAD_USER",response:n});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){t()}),[]),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(O,{}),Object(a.jsxs)("div",{className:"center-container",children:[Object(a.jsx)(x,{}),Object(a.jsx)(p.a,{path:"/user/addUser",component:b,exact:!0}),Object(a.jsx)(p.a,{path:"/user/View/:no",component:k,exact:!0})]}),Object(a.jsx)(m,{})]})};var N=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(p.a,{path:"/",component:g})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},E=n(14),U={users:[],selectedUser:{},searchUser:[],input:{Name:"",name:"",tel:"",address:""}};var _=n(19),C=Object(_.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_USER":return Object(E.a)(e,(function(e){e.users=t.response.data.contacts}));case"CHANGE_INPUT":return Object(E.a)(e,(function(e){e.input[t.name]=t.value}));case"CHANGE_VALUE":return Object(E.a)(e,(function(e){e.input.Name="",e.input.tel="",e.input.address=""}));case"SEARCH_USER":return Object(E.a)(e,(function(e){e.users=t.searchUser.data,e.input.name=""}));case"ADD_USER":return Object(E.a)(e,(function(e){e.users.push(t.user),e.input.Name="",e.input.tel="",e.input.address=""}));case"SELECTE_USER":return Object(E.a)(e,(function(e){e.selectedUser=t.selectedUser.data}));default:return e}}));s.a.render(Object(a.jsx)(l.a,{store:C,children:Object(a.jsx)(f.a,{children:Object(a.jsx)(N,{})})}),document.getElementById("root")),y()}},[[67,1,2]]]);
//# sourceMappingURL=main.d3578125.chunk.js.map