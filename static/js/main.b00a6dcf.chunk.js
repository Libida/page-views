(this["webpackJsonppage-views"]=this["webpackJsonppage-views"]||[]).push([[0],[,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(3),c=a.n(s);a(8);const l=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";return e?e.toString().split(t):[]},i=e=>Object.entries(e).sort(((e,t)=>t[1]-e[1])),o=e=>l(e,"\n").map((e=>(e=>l(e))(e))).filter((e=>e.length));a(9);var r=a(0);var u=e=>{let{acceptTypes:t=".txt",onChange:a,onReset:n,shouldShowReset:s=!1,uploadRef:c}=e;return Object(r.jsxs)("section",{className:"upload-form-section",children:[Object(r.jsx)("h2",{className:"h-2",children:"Add a Document"}),Object(r.jsxs)("form",{className:"upload-form",children:[Object(r.jsx)("input",{type:"file",className:"upload-form__choose-file",accept:t,onChange:a,ref:c}),s&&Object(r.jsx)("button",{type:"button",className:"upload-form__reset","aria-label":"Reset",title:"Reset",onClick:n})]})]})};a(11);var d=e=>{let{caption:t,headingsArray:a,bodyData:n,bodyKeysArray:s}=e;return(null===n||void 0===n?void 0:n.length)?Object(r.jsx)("div",{className:"table-wrapper",children:Object(r.jsxs)("table",{className:"table",children:[t&&Object(r.jsx)("caption",{className:"table__caption",children:t}),Object(r.jsx)("thead",{children:(null===a||void 0===a?void 0:a.length)&&Object(r.jsx)("tr",{className:"table__tr",children:a.map(((e,t)=>Object(r.jsx)("th",{className:"table__th",children:e},"".concat(e,"-").concat(t))))})}),Object(r.jsx)("tbody",{children:n.map(((e,t)=>Object(r.jsx)("tr",{className:"table__tr",children:s.map(((t,a)=>Object(r.jsx)("td",{className:"table__td",children:e[t]},"".concat(e,"-").concat(t,"-").concat(a))))},t)))})]})}):null};var j=e=>{let{data:t,caption:a}=e;return Object(r.jsx)(d,{caption:a,headingsArray:["Page URL","Views"],bodyData:t,bodyKeysArray:[0,1]})};var b=()=>{const e={},[t,a]=Object(n.useState)(e),s=Object(n.useRef)(null);return Object(r.jsxs)("div",{className:"log-viewer",children:[Object(r.jsx)(u,{acceptTypes:".log",onChange:async e=>{try{const t=function(e){var t;let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!e)return null;const n=null===(t=e.target)||void 0===t?void 0:t.files;return(null===n||void 0===n?void 0:n.length)?n[a]:null}(e),n=await(e=>null===e||void 0===e?void 0:e.text())(t),s=(e=>{const t=o(e),a=new Map,n=t.reduce(((e,t)=>{const n=t[1],s=t[0];a[s]=a[s]||new Set;let c=!a[s].has(n);return a[s].add(n),{...e,totalViews:{...e.totalViews,[s]:(e.totalViews&&e.totalViews[s]||0)+1},uniqueViews:{...e.uniqueViews,...c&&{[s]:(e.uniqueViews&&e.uniqueViews[s]||0)+1}}}}),{});return{totalViews:i(n.totalViews),uniqueViews:i(n.uniqueViews)}})(n);a(s)}catch(e){alert("Something went wrong, could you please try again")}},shouldShowReset:!!t.totalViews,onReset:()=>{a(e),s.current.value=null},uploadRef:s}),Object(r.jsx)(j,{caption:"Total page views",data:null===t||void 0===t?void 0:t.totalViews}),Object(r.jsx)(j,{caption:"Unique page views",data:null===t||void 0===t?void 0:t.uniqueViews})]})};a(12);function h(){return Object(r.jsx)("main",{className:"main",children:Object(r.jsx)(b,{})})}const p=document.getElementById("root");c.a.render(Object(r.jsx)(n.StrictMode,{children:Object(r.jsx)(h,{})}),p)}],[[13,1,2]]]);
//# sourceMappingURL=main.b00a6dcf.chunk.js.map