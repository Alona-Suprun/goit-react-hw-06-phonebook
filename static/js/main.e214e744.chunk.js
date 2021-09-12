(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{17:function(t,e,n){t.exports={label:"FilterContacts_label__NDwkW",input:"FilterContacts_input__6fcRJ"}},19:function(t,e,n){t.exports={title:"Section_title__V0cwg"}},20:function(t,e,n){t.exports={button:"Button_button__2lEM8"}},37:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(10),o=n.n(r),l=n(19),i=n.n(l),s=n(1),b=function(t){var e=t.title,n=t.children;return Object(s.jsxs)("section",{children:[Object(s.jsx)("h2",{className:i.a.title,children:e}),n]})},u=n(18),j=n(3),d=n(4),m=n(40),O={addContact:Object(d.b)("contact/add",(function(t){return{payload:{id:Object(m.a)(),name:t.name,number:t.number}}})),deleteContact:Object(d.b)("contact/delete"),filterContacts:Object(d.b)("contact/filterContacts")},f=function(t){return t.contacts.items},h=function(t){return t.contacts.filter},p=function(t){var e=f(t),n=h(t).toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},x=n(7),C=n.n(x),_=n(16),v=n(24),g=n(20),k=n.n(g),y=["children","onClick"],N=function(t){var e=t.children,n=t.onClick,c=Object(v.a)(t,y);return Object(s.jsx)("button",Object(_.a)(Object(_.a)({className:k.a.button,onClick:n},c),{},{children:e}))};N.defaultProps={onClick:function(){return null},children:null};var w,F=N,A=function(){var t=Object(c.useState)(""),e=Object(u.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(""),o=Object(u.a)(r,2),l=o[0],i=o[1],b=Object(j.c)(f),d=Object(j.b)(),m=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":a(c);break;case"number":i(c);break;default:return}};return Object(s.jsxs)("form",{className:C.a.form,onSubmit:function(t){t.preventDefault();var e=b.find((function(t){return t.name===n}));e?alert("".concat(e.name," is already in contact list")):(d(O.addContact({name:n,number:l})),a(""),i(""))},children:[Object(s.jsxs)("label",{className:C.a.label,children:["Name",Object(s.jsx)("input",{placeholder:"type name",className:C.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:n,onChange:m})]}),Object(s.jsxs)("label",{className:C.a.label,children:["Number",Object(s.jsx)("input",{placeholder:"type number",className:C.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:l,onChange:m})]}),Object(s.jsx)(F,{type:"submit",children:"Add contact"})]})},D=n(9),S=n.n(D),z=function(t){var e=t.name,n=t.number,c=t.onDeleteContact;return Object(s.jsxs)("li",{className:S.a.li,children:[Object(s.jsxs)("span",{className:S.a.name,children:[e,":"]}),Object(s.jsx)("span",{className:S.a.number,children:n}),Object(s.jsx)(F,{className:S.a.button,onClick:c,children:"Delete"})]})},J=function(t){t.name,t.number;var e=Object(j.c)(p),n=Object(j.b)();return Object(s.jsx)("ul",{children:e.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(s.jsx)(z,{name:c,number:a,onDeleteContact:function(){return function(t){return n(O.deleteContact(t))}(e)}},e)}))})},L=n(17),Z=n.n(L),B=function(){var t=Object(j.c)(h),e=Object(j.b)();return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("label",{className:Z.a.label,children:["Find contacts by name",Object(s.jsx)("input",{placeholder:"type name",className:Z.a.input,type:"text",name:"name",title:"Search contacts",value:t,onChange:function(t){return e(O.filterContacts(t.target.value))}})]})})},M=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{children:"Phonebook"}),Object(s.jsx)(b,{children:Object(s.jsx)(A,{})}),Object(s.jsxs)(b,{title:"Contacts",children:[Object(s.jsx)(B,{}),Object(s.jsx)(J,{})]})]})},q=n(12),E=n(21),I=n.n(E),K=n(5),P=n(22),R=n.n(P),V=n(6),Q=n(2),T=Object(d.c)([],(w={},Object(V.a)(w,O.addContact,(function(t,e){var n=e.payload;return[].concat(Object(q.a)(t),[n])})),Object(V.a)(w,O.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),w)),W=Object(d.c)("",Object(V.a)({},O.filterContacts,(function(t,e){return e.payload}))),$=Object(Q.b)({items:T,filter:W}),G={key:"contacts",storage:R.a,blacklist:["filter"]},H=[].concat(Object(q.a)(Object(d.d)({serializableCheck:{ignoredActions:[K.a,K.f,K.b,K.c,K.d,K.e]}})),[I.a]),U=Object(d.a)({reducer:{contacts:Object(K.g)(G,$)},middleware:H,devTools:!1}),X={store:U,persistor:Object(K.h)(U)},Y=n(23);n(37);o.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(j.a,{store:X.store,children:Object(s.jsx)(Y.a,{loading:null,persistor:X.persistor,children:Object(s.jsx)(M,{})})})}),document.getElementById("root"))},7:function(t,e,n){t.exports={form:"ContactForm_form__22VR5",label:"ContactForm_label__2ty0K",input:"ContactForm_input__1Q24D"}},9:function(t,e,n){t.exports={list:"ContactList_list__KfZm-",item:"ContactList_item__2c7xI"}}},[[38,1,2]]]);
//# sourceMappingURL=main.e214e744.chunk.js.map