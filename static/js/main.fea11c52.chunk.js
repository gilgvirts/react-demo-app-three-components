(this["webpackJsonpdemo-app"]=this["webpackJsonpdemo-app"]||[]).push([[0],[,function(e,a,t){},,,,function(e,a,t){e.exports=t(11)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(4),o=t.n(c),l=(t(10),t(2));t(1);var u=function(e){var a=e.setName,t=e.name,n=e.setAge,c=e.age;return r.a.createElement("div",{className:"Form"},r.a.createElement("h2",null,"Insert Name:"),r.a.createElement("input",{type:"text",placeholder:"Name...",value:t,onChange:function(e){var t=e.target;return a(t.value)}}),r.a.createElement("h2",null,"Insert Age:"),r.a.createElement("input",{type:"number",value:c,onChange:function(e){var a=e.target;return n(parseInt(a.value))}}))};function s(e){var a=e.marked,t=e.setMarked;return r.a.createElement("div",{className:"Tabs"},r.a.createElement("button",{disabled:0===a,onClick:function(){return t(0)}},"Form Tab"),r.a.createElement("button",{disabled:1===a,onClick:function(){return t(1)}},"Display Tab"))}s.defaultProps={marked:0};var m=s;var i=function(e){var a=e.name,t=e.age;return r.a.createElement("div",{className:"Display"},r.a.createElement("h2",null,"Hello ",a,"!"),r.a.createElement("h2",null,t," is a fun age!"))};var d=function(){var e=Object(n.useState)(""),a=Object(l.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)(0),s=Object(l.a)(o,2),d=s[0],v=s[1],p=Object(n.useState)(0),h=Object(l.a)(p,2),E=h[0],g=h[1];return r.a.createElement("div",{className:"App-header"},r.a.createElement(m,{marked:E,setMarked:g}),0===E&&r.a.createElement(u,{name:t,age:d,setAge:v,setName:c}),1===E&&r.a.createElement(i,{name:t,age:d}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.fea11c52.chunk.js.map