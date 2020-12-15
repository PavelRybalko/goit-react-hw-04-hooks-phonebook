(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={label:"Filter_label__3_9AD",input:"Filter_input__1Vkry"}},13:function(t,e,n){t.exports={Container:"Container_Container__YWQNd"}},28:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),o=n.n(c),r=n(11),i=n.n(r),s=n(14),u=n(2),l=n(12),b=n.n(l),m=n(13),j=n.n(m),d=function(t){var e=t.children;return Object(a.jsx)("div",{className:j.a.Container,children:e})},_=n(8),f=n.n(_),C=n(9),h=n.n(C),O=function(t){var e=t.contact,n=e.id,c=e.name,o=e.number,r=t.onDeleteContact;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("li",{className:h.a.ContactList__item,children:[Object(a.jsxs)("p",{className:h.a.ContactList__text,children:[Object(a.jsx)("span",{children:c})," : ",Object(a.jsx)("span",{children:o})]}),Object(a.jsx)("button",{type:"button",onClick:function(){return r(n)},children:"Delete"})]})})},p=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{className:f.a.title,children:"Contacts"}),Object(a.jsx)("ul",{className:f.a.ContactList,children:e.map((function(t){return Object(a.jsx)(O,{contact:t,onDeleteContact:n},t.id)}))})]})},x=n(3),g=n.n(x);function v(t){var e=t.onSubmit,n=t.onCheckUnique,o=Object(c.useState)(""),r=Object(u.a)(o,2),i=r[0],s=r[1],l=Object(c.useState)(""),b=Object(u.a)(l,2),m=b[0],j=b[1],d=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":s(a);break;case"number":j(a);break;default:console.warn("\u0422\u0438\u043f \u043f\u043e\u043b\u044f name - ".concat(n," \u043d\u0435 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f!"))}},_=function(){if(i&&m)return n(i);alert("Some fields are empty! Please write something")};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{className:g.a.title,children:"Phonebook"}),Object(a.jsxs)("form",{className:g.a.ContactForm,onSubmit:function(t){t.preventDefault(),_()&&(e(i,m),s(""),j(""))},children:[Object(a.jsxs)("label",{children:["Name",Object(a.jsx)("input",{autoComplete:"off",className:g.a.input,name:"name",type:"text",value:i,onChange:d})]}),Object(a.jsxs)("label",{children:["Number",Object(a.jsx)("input",{autoComplete:"off",className:g.a.input,name:"number",type:"tel",value:m,onChange:d})]}),Object(a.jsx)("button",{type:"submit",className:g.a.button,children:"Add contact"})]})]})}var N=n(10),S=n.n(N),k=function(t){var e=t.value,n=t.onChange;return Object(a.jsxs)("label",{className:S.a.label,children:["Find contacts by name:",Object(a.jsx)("input",{className:S.a.input,type:"text",value:e,onChange:n})]})},w=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}];function F(){var t=JSON.parse(window.localStorage.getItem("contacts")),e=Object(c.useState)(""),n=Object(u.a)(e,2),o=n[0],r=n[1],i=Object(c.useState)((function(){return t.length?t:w})),l=Object(u.a)(i,2),m=l[0],j=l[1];Object(c.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(m))}),[m]);return Object(a.jsxs)(d,{children:[Object(a.jsx)(v,{onSubmit:function(t,e){var n={id:b.a.generate(),name:t,number:e};j((function(t){return[n].concat(Object(s.a)(t))}))},onCheckUnique:function(t){var e=!!m.find((function(e){return e.name===t}));return e&&alert("Contact is already exist!"),!e}}),Object(a.jsx)(k,{value:o,onChange:function(t){return r(t.currentTarget.value)}}),Object(a.jsx)(p,{contacts:function(){var t=o.toLowerCase();return m.filter((function(e){return e.name.toLowerCase().includes(t)}))}(),onDeleteContact:function(t){j((function(e){return e.filter((function(e){return e.id!==t}))}))}})]})}i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(F,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={title:"ContactForm_title__XwnMT",ContactForm:"ContactForm_ContactForm__2g4R2",input:"ContactForm_input__3lXYr",button:"ContactForm_button__1zg2f"}},8:function(t,e,n){t.exports={title:"ContactList_title__qQwXJ",ContactList:"ContactList_ContactList__yPQE3"}},9:function(t,e,n){t.exports={ContactList__item:"ContactItem_ContactList__item__3qjUs",ContactList__text:"ContactItem_ContactList__text__3Na3J"}}},[[28,1,2]]]);
//# sourceMappingURL=main.928fdee7.chunk.js.map