(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(1),a=n(7),r=n.n(a),i=(n(13),n(5)),o=n(6),l=(n(14),function(e){return Object(s.jsxs)("div",{className:"taskWrapper",children:[Object(s.jsx)("div",{className:"taskDisplay",children:Object(s.jsx)("p",{children:e.task})}),Object(s.jsx)("div",{className:"buttonWrapper",children:Object(s.jsx)("button",{onClick:function(){return e.removeHandler(e.index)},children:"delete"})})]})}),j=(n(15),function(e){var t=e.tasks.map((function(t,n){return Object(s.jsx)(l,{task:t,index:n,removeHandler:e.removeHandler},n)}));return Object(s.jsx)("div",{className:"taskList",children:e.tasks&&t})}),d=(n(16),function(){var e=Object(c.useState)(["task1","task2"]),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),l=Object(o.a)(r,2),d=l[0],u=l[1];return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("div",{className:"todoHeader",children:Object(s.jsx)("h2",{children:"to-do list"})}),Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(j,{tasks:n,removeHandler:function(e){console.log(e);var t=Object(i.a)(n);t.splice(e,1),console.log(t),a(t)}})}),Object(s.jsx)("div",{className:"userInput",children:Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a([].concat(Object(i.a)(n),[d])),u(""),console.log(n)},children:[Object(s.jsx)("input",{className:"inputBox",type:"text",value:d,onChange:function(e){u(e.target.value)}}),Object(s.jsx)("div",{className:"submitWrapper",children:Object(s.jsx)("button",{children:"submit"})})]})})]})});r.a.render(Object(s.jsx)(d,{}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.aa066ae5.chunk.js.map