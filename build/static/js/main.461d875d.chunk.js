(this["webpackJsonpprobability-distribution-graphs"]=this["webpackJsonpprobability-distribution-graphs"]||[]).push([[0],{174:function(t,e,a){},175:function(t,e,a){},315:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),r=a(64),o=a.n(r),c=(a(174),a(175),a(14)),s=a(25),l=a(165),u=a(318),j=a(324),b=a(322),d=a(161),h=a(162),p=a(72),x=a(70),m=a(160),f=a(158),O=a(88),v=function(t,e){for(var a=[],n=t*e,i=Math.sqrt(t*e*(1-e)),r=0;r<t+1;r++){var o=y(t,r)*Math.pow(e,r)*Math.pow(1-e,t-r),c=w(r,n,i);a.push({p:o,np:c,x:r})}return a},g=function(t,e,a){for(var n={},i=0;i<=t;i++)n[i]=0;for(var r=0;r<a;r++){for(var o=0,c=1;c<=t;c++)o+=Math.random()<e?1:0;n[o]+=1}return n},y=function(t,e){return S(t)/(S(e)*S(t-e))},S=function t(e){return e<=0?1:e*t(e-1)},w=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Math.pow(Math.E,-.5*Math.pow((t-e)/a,2))/(a*Math.sqrt(2*Math.PI))},F=a(6),I=null,C=function(t){var e=t.n,a=void 0===e?10:e,i=t.p,r=void 0===i?.5:i,o=t.scaleYaxis,y=void 0!==o&&o,S=t.showSimulation,w=void 0!==S&&S,C=t.numberOfIteration,k=void 0===C?1e3:C,N=t.showNormalAproximation,M=void 0!==N&&N,A=Object(n.useState)(v(a,r)),B=Object(c.a)(A,2),P=B[0],D=B[1],E=Object(n.useState)(1),K=Object(c.a)(E,2),T=K[0],q=K[1],Y=0;return Object(n.useEffect)((function(){var t=v(a,r),e=t.map((function(t){return t.p}));q(Math.max.apply(Math,Object(l.a)(e))),D(t)}),[a,r]),Object(n.useEffect)((function(){if(w){for(var t=[],e=0;e<10;e++)t.push(g(a,r,k/10));I&&clearInterval(I),I=setInterval((function(){for(var e={},a=0;a<Y;a++)for(var n in t[a])e[n]=(e[n]?e[n]:0)+t[a][n];var i=P.map((function(t){return Object(s.a)(Object(s.a)({},t),{},{h:e[t.x]})}));D(i),++Y>10&&clearInterval(I)}),100)}else{clearInterval(I);var n=P.map((function(t){return Object(s.a)(Object(s.a)({},t),{},{h:0})}));D(n)}return function(){clearInterval(I)}}),[w]),Object(F.jsx)(u.a,{width:"100%",height:500,children:Object(F.jsxs)(j.a,{data:P,margin:{top:60,right:30,left:0,bottom:40},children:[Object(F.jsxs)("defs",{children:[Object(F.jsxs)("linearGradient",{id:"main",x1:"0",y1:"0",x2:"0",y2:"100%",spreadMethod:"reflect",children:[Object(F.jsx)("stop",{offset:"0",stopColor:"#8F75FF"}),Object(F.jsx)("stop",{offset:"1",stopColor:"#B721FF"})]}),Object(F.jsxs)("linearGradient",{id:"simulate",x1:"0",y1:"0",x2:"0",y2:"100%",spreadMethod:"reflect",children:[Object(F.jsx)("stop",{offset:"0",stopColor:"#85FFBD"}),Object(F.jsx)("stop",{offset:"1",stopColor:"#CBFD9B"})]})]}),Object(F.jsx)(b.a,{strokeDasharray:"3 3"}),Object(F.jsx)(d.a,{dataKey:"x"}),Object(F.jsx)(h.a,{type:"number",yAxisId:"left",orientation:"left",stroke:"#8884d8",domain:[0,y?"auto":1]}),Object(F.jsx)(h.a,{type:"number",yAxisId:"right",orientation:"right",stroke:"#82ca9d",domain:[0,y?T*k:k]}),Object(F.jsx)(p.a,{}),Object(F.jsx)(x.a,{verticalAlign:"bottom"}),Object(F.jsx)(m.a,{name:"Probability",yAxisId:"left",dataKey:"p",fill:"url(#main)"}),M?Object(F.jsx)(f.a,{name:"Approx Probability",yAxisId:"left",type:"monotone",dataKey:"np",stroke:"#82ca9d",strokeWidth:2.5}):null,w?Object(F.jsx)(m.a,{name:"Frequency of Heads",dataKey:"h",yAxisId:"right",fill:"url(#simulate)"}):null,a>=70?Object(F.jsx)(O.a,{dataKey:"x",height:30,stroke:"#8884d8"}):null]})})},k=function(t){var e=t.min,a=void 0===e?0:e,n=t.max,i=void 0===n?1:n,r=t.step,o=void 0===r?.01:r,c=t.onChange,s=void 0===c?function(){}:c,l=t.value,u=t.title,j=void 0===u?"":u;return Object(F.jsxs)("div",{className:"SliderInputForm",children:[j||null,Object(F.jsxs)("div",{children:[Object(F.jsx)("span",{children:a}),Object(F.jsx)("input",{type:"range",style:{display:"inline"},min:a,max:i,step:o,onChange:s,value:l}),Object(F.jsx)("span",{children:i})]}),Object(F.jsx)("input",{type:"number",min:a,max:i,onChange:s,value:l})]})},N=a(325),M=function(t){var e=t.numberOfIteration,a=t.onChange,n=t.showSimulation,i=t.onSimulate,r=t.n,o=t.p;return Object(F.jsxs)("div",{className:"SliderInputForm",width:"250px",height:"200px",children:["Number of Iterations: ",Object(F.jsx)("input",{type:"number",min:0,max:1e6,step:1,onChange:a,value:e}),Object(F.jsx)(N.a,{disabled:n,onClick:i,children:"Simulate"}),n?"Tossing ".concat(r," coins with probability of Heads = ").concat(o," ").concat(e," times..."):null]})},A=(a(314),function(){var t=Object(n.useState)(.5),e=Object(c.a)(t,2),a=e[0],i=e[1],r=Object(n.useState)(10),o=Object(c.a)(r,2),s=o[0],l=o[1],u=Object(n.useState)(!1),j=Object(c.a)(u,2),b=j[0],d=j[1],h=Object(n.useState)(!1),p=Object(c.a)(h,2),x=p[0],m=p[1],f=Object(n.useState)(1e3),O=Object(c.a)(f,2),v=O[0],g=O[1],y=Object(n.useState)(!1),S=Object(c.a)(y,2),w=S[0],I=S[1];Object(n.useEffect)((function(){m(!1)}),[s,a]);return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("h1",{children:"Binomial Distribution"}),Object(F.jsxs)("div",{className:"grid-row",children:[Object(F.jsxs)("div",{className:"form-col",children:[Object(F.jsxs)("div",{className:"SliderInputForm",children:["Scale Y Axis:",Object(F.jsx)("div",{className:"form-check form-switch",children:Object(F.jsx)("input",{className:"form-check-input",type:"checkbox",onChange:function(){return d(!b)}})})]}),Object(F.jsx)(k,{onChange:function(t){i(parseFloat(t.target.value))},id:"slider",value:a,min:0,max:1,step:.01,title:"p: Probability of Success"}),Object(F.jsx)(k,{onChange:function(t){t.target.value<0?l(0):t.target.value>150?l(parseFloat(150)):l(parseFloat(t.target.value))},value:s,min:0,max:150,step:1,title:"n: Number of Trials"}),Object(F.jsxs)("div",{className:"SliderInputForm",children:["Show Normal Approximation:",Object(F.jsx)("div",{className:"form-check form-switch",children:Object(F.jsx)("input",{className:"form-check-input",type:"checkbox",onChange:function(){return I(!w)}})})]}),Object(F.jsx)(M,{numberOfIteration:v,onChange:function(t){m(!1),t.target.value>=0&&t.target.value<=1e6&&g(parseFloat(t.target.value))},showSimulation:x,onSimulate:function(){m(!0)},n:s,p:a})]}),Object(F.jsx)("div",{style:{margin:"5rem",width:"60%",background:"white",borderRadius:"15px",boxShadow:"rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px"},children:Object(F.jsx)(C,{n:s,p:a,scaleYaxis:b,showSimulation:x,numberOfIteration:v,showNormalAproximation:w})})]})]})});var B=function(){return Object(F.jsx)("div",{children:Object(F.jsx)(A,{})})},P=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,326)).then((function(e){var a=e.getCLS,n=e.getFID,i=e.getFCP,r=e.getLCP,o=e.getTTFB;a(t),n(t),i(t),r(t),o(t)}))};o.a.render(Object(F.jsx)(i.a.StrictMode,{children:Object(F.jsx)(B,{})}),document.getElementById("root")),P()}},[[315,1,2]]]);
//# sourceMappingURL=main.461d875d.chunk.js.map