var Pe=Object.defineProperty,Ne=Object.defineProperties;var Ae=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var ee=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable;var q=(i,l,o)=>l in i?Pe(i,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[l]=o,X=(i,l)=>{for(var o in l||(l={}))ee.call(l,o)&&q(i,o,l[o]);if(w)for(var o of w(l))oe.call(l,o)&&q(i,o,l[o]);return i},H=(i,l)=>Ne(i,Ae(l));var ne=(i,l)=>{var o={};for(var a in i)ee.call(i,a)&&l.indexOf(a)<0&&(o[a]=i[a]);if(i!=null&&w)for(var a of w(i))l.indexOf(a)<0&&oe.call(i,a)&&(o[a]=i[a]);return o};(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[5182],{"./node_modules/@storybook/addon-docs/dist/esm/index.js":(i,l,o)=>{"use strict";o.d(l,{Xz:()=>a.Canvas,aT:()=>a.AddContext,dk:()=>a.Description,h_:()=>a.Meta});var a=o("./node_modules/@storybook/addon-docs/dist/esm/blocks/index.js")},"./src/990-health-state.stories.mdx":(i,l,o)=>{"use strict";o.r(l),o.d(l,{__namedExportsOrder:()=>V,__page:()=>M,default:()=>Z});var a=o("./node_modules/core-js/modules/es.object.keys.js"),O=o("./node_modules/core-js/modules/es.array.index-of.js"),L=o("./node_modules/core-js/modules/es.symbol.js"),I=o("./node_modules/core-js/modules/es.function.bind.js"),E=o("./node_modules/core-js/modules/es.function.name.js"),D=o("./node_modules/core-js/modules/es.object.assign.js"),R=o("./node_modules/react/index.js"),y=o("./node_modules/@mdx-js/react/dist/esm.js"),v=o("./node_modules/@storybook/addon-docs/dist/esm/index.js"),K=o("./node_modules/@public-ui/react/dist/index.mjs");const f=(c,h,b="/")=>c?`${c}${b}${h}`:`${h}`;var z=["components"];function e(){return e=Object.assign?Object.assign.bind():function(c){for(var h=1;h<arguments.length;h++){var b=arguments[h];for(var d in b)Object.prototype.hasOwnProperty.call(b,d)&&(c[d]=b[d])}return c},e.apply(this,arguments)}function S(c,h){if(c==null)return{};var b=B(c,h),d,p;if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(c);for(p=0;p<m.length;p++)d=m[p],!(h.indexOf(d)>=0)&&Object.prototype.propertyIsEnumerable.call(c,d)&&(b[d]=c[d])}return b}function B(c,h){if(c==null)return{};var b={},d=Object.keys(c),p,m;for(m=0;m<d.length;m++)p=d[m],!(h.indexOf(p)>=0)&&(b[p]=c[p]);return b}var F={},U="wrapper";function P(c){var h=c.components,b=S(c,z);return(0,y.kt)(U,e({},F,b,{components:h,mdxType:"MDXLayout"}),(0,y.kt)(v.h_,{title:"Gesundheitszustand",id:"health",mdxType:"Meta"}),(0,y.kt)(K.HA,{className:"col-12",mdxType:"KolHeading"},"Gesundheitszustand"),(0,y.kt)("p",null,"In der nachfolgenden Tabelle werden zahlreiche Informationen zu den Paketen angezeigt, um einen \xDCberblick \xFCber deren Gesundheitszustand zu erhalten."),(0,y.kt)(K.Vp,{className:"col-12",_caption:"Liste von Statuswerte zu den Paketen",_minWidth:"85em",_headers:{horizontal:[[{label:"Package",key:"name",render:function(p,m,t){return""+f(t.scope,t.name)},width:"20em"},{label:"Version",key:"name",render:function(p,m,t){return'<kol-link _href="https://www.npmjs.com/package/'+f(t.scope,t.name)+`" _target="npmjs">
	<img alt="" src="https://img.shields.io/npm/v/`+f(t.scope,t.name)+`" />
</kol-link>`}},{label:"Downloads",key:"name",render:function(p,m,t){return'<kol-link _href="https://npmcharts.com/compare/'+f(t.scope,t.name)+`" _target="npmcharts">
	<img alt="" src="https://img.shields.io/npm/dt/`+f(t.scope,t.name)+`.svg" />
</kol-link>`}},{label:"Quality",key:"name",render:function(){return'<img alt="" src="https://packagequality.com/shield/create-kolibri.svg" />'}},{label:"Install size",key:"name",render:function(p,m,t){return'<kol-link _href="https://packagephobia.com/result?p='+f(t.scope,t.name)+`" _target="packagephobia">
	<img alt="" src="https://packagephobia.now.sh/badge?p=`+f(t.scope,t.name)+`" />
</kol-link>`}},{label:"Dependencies",key:"name",render:function(p,m,t){return'<kol-link _href="https://libraries.io/npm/'+f(t.scope,t.name,"%2F")+`" _target="libraries">
	<img alt="" src="https://img.shields.io/librariesio/release/npm/`+f(t.scope,t.name)+`" />
</kol-link>`}},{label:"Health",key:"name",render:function(p,m,t){return'<kol-link _href="https://snyk.io/advisor/npm-package/'+f(t.scope,t.name)+`" _target="snyk">
	<img alt="" src="https://snyk.io/advisor/npm-package/`+f(t.scope,t.name)+`/badge.svg" />
</kol-link>`}},{label:"Vulnerabilities*",key:"name",render:function(p,m,t){return'<kol-link _href="https://snyk.io/advisor/npm-package/'+f(t.scope,t.name,"%2F")+`" _target="snyk">
	<img alt="" src="https://snyk.io/test/npm/`+f(t.scope,t.name)+`/badge.svg" />
</kol-link>`}}]]},_data:[{scope:"@public-ui",name:"components"},{scope:"@public-ui",name:"core"},{scope:"@public-ui",name:"schema"},{scope:"@public-ui",name:"themes"},{scope:"@public-ui",name:"angular-v15"},{scope:"@public-ui",name:"angular-v14"},{scope:"@public-ui",name:"angular-v13"},{scope:"@public-ui",name:"angular-v12"},{scope:"@public-ui",name:"angular-v11"},{scope:"@public-ui",name:"preact"},{scope:"@public-ui",name:"react"},{scope:"@public-ui",name:"solid"},{scope:"@public-ui",name:"vue"},{name:"create-kolibri"}],mdxType:"KolTable"}),(0,y.kt)("div",{style:{display:"block",padding:"1rem"}},(0,y.kt)(K.CV,{mdxType:"KolIndentedText"},(0,y.kt)("sup",null,"*")," Die Anzahl von Vulnerabilities gibt keinen Aufschluss \xFCber die Schwere der Betroffenheit des Pakets. Bei der Pr\xFCfung werden auch Abh\xE4ngigkeiten ber\xFCcksichtigt, die zum Entwickeln des Pakets selbst erforderlich sind (devDependencies).")))}P.displayName="MDXContent",P.isMDXComponent=!0;var M=function(){throw new Error("Docs-only story")};M.parameters={docsOnly:!0};var x={title:"Gesundheitszustand",id:"health",includeStories:["__page"]},Q={};x.parameters=x.parameters||{},x.parameters.docs=Object.assign({},x.parameters.docs||{},{page:function(){return(0,y.kt)(v.aT,{mdxStoryNameToKey:Q,mdxComponentAnnotations:x},(0,y.kt)(P,null))}});const Z=x;var V=["__page"]},"./node_modules/core-js/modules/es.array.index-of.js":(i,l,o)=>{"use strict";var a=o("./node_modules/core-js/internals/export.js"),O=o("./node_modules/core-js/internals/function-uncurry-this-clause.js"),L=o("./node_modules/core-js/internals/array-includes.js").indexOf,I=o("./node_modules/core-js/internals/array-method-is-strict.js"),E=O([].indexOf),D=!!E&&1/E([1],1,-0)<0,R=D||!I("indexOf");a({target:"Array",proto:!0,forced:R},{indexOf:function(v){var K=arguments.length>1?arguments[1]:void 0;return D?E(this,v,K)||0:L(this,v,K)}})},"./node_modules/core-js/modules/es.function.bind.js":(i,l,o)=>{var a=o("./node_modules/core-js/internals/export.js"),O=o("./node_modules/core-js/internals/function-bind.js");a({target:"Function",proto:!0,forced:Function.bind!==O},{bind:O})},"./node_modules/@public-ui/react/dist/index.mjs":(i,l,o)=>{"use strict";o.d(l,{$o:()=>fe,CO:()=>Te,CV:()=>t,CX:()=>ae,Er:()=>U,Gc:()=>V,HA:()=>b,Jl:()=>d,K5:()=>F,Lj:()=>le,MA:()=>ge,Np:()=>se,Nv:()=>ke,O:()=>re,P:()=>Ke,Q4:()=>ye,QK:()=>he,Qs:()=>Ee,RZ:()=>B,T5:()=>S,TE:()=>te,TQ:()=>ue,UD:()=>Oe,Ud:()=>be,Vp:()=>Ce,Vs:()=>me,WD:()=>pe,WR:()=>ve,Ze:()=>Ie,c2:()=>ie,cJ:()=>p,ic:()=>M,is:()=>_e,lo:()=>P,m5:()=>h,ox:()=>c,qq:()=>xe,r7:()=>je,rW:()=>m,sy:()=>de,u_:()=>De,uz:()=>x,z5:()=>ce});var a=o("./node_modules/react/index.js"),O=o("./node_modules/react-dom/index.js");const L=s=>s.toLowerCase().split("-").map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(""),I=s=>s.replace(/([A-Z])/g,n=>`-${n[0].toLowerCase()}`),E=(s,n,u={})=>{if(s instanceof Element){const k=D(s.classList,n,u);k!==""&&(s.className=k),Object.keys(n).forEach(r=>{if(!(r==="children"||r==="style"||r==="ref"||r==="class"||r==="className"||r==="forwardedRef"))if(r.indexOf("on")===0&&r[2]===r[2].toUpperCase()){const j=r.substring(2),g=j[0].toLowerCase()+j.substring(1);R(g)||y(s,g,n[r])}else s[r]=n[r],typeof n[r]==="string"&&s.setAttribute(I(r),n[r])})}},D=(s,n,u)=>{const k=n.className||n.class,r=u.className||u.class,j=v(s),g=v(k?k.split(" "):[]),N=v(r?r.split(" "):[]),T=[];return j.forEach(_=>{g.has(_)?(T.push(_),g.delete(_)):N.has(_)||T.push(_)}),g.forEach(_=>T.push(_)),T.join(" ")};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */const R=s=>{if(typeof document=="undefined")return!0;{const n="on"+s;let u=n in document;if(!u){const k=document.createElement("div");k.setAttribute(n,"return;"),u=typeof k[n]=="function"}return u}},y=(s,n,u)=>{const k=s.__events||(s.__events={}),r=k[n];r&&s.removeEventListener(n,r),s.addEventListener(n,k[n]=function(g){u&&u.call(this,g)})},v=s=>{const n=new Map;return s.forEach(u=>n.set(u,u)),n},K=(s,n)=>{typeof s=="function"?s(n):s!=null&&(s.current=n)},f=(...s)=>n=>{s.forEach(u=>{K(u,n)})},z=(s,n)=>{const u=(k,r)=>a.createElement(s,H(X({},k),{forwardedRef:r}));return u.displayName=n,a.forwardRef(u)},e=(s,n,u,k)=>{k!==void 0&&k();const r=L(s),j=class extends a.Component{constructor(g){super(g),this.setComponentElRef=N=>{this.componentEl=N}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(g){E(this.componentEl,this.props,g)}render(){const Y=this.props,{children:g,forwardedRef:N,style:T,className:_,ref:ze}=Y,J=ne(Y,["children","forwardedRef","style","className","ref"]);let W=Object.keys(J).reduce((G,C)=>{const $=J[C];if(C.indexOf("on")===0&&C[2]===C[2].toUpperCase()){const A=C.substring(2).toLowerCase();typeof document!="undefined"&&R(A)&&(G[C]=$)}else{const A=typeof $;(A==="string"||A==="boolean"||A==="number")&&(G[I(C)]=$)}return G},{});u&&(W=u(this.props,W));const Re=H(X({},W),{ref:f(N,this.setComponentElRef),style:T});return(0,a.createElement)(s,Re,g)}static get displayName(){return r}};return n&&(j.contextType=n),z(j,r)},S=e("kol-abbr"),B=e("kol-accordion"),F=e("kol-alert"),U=e("kol-badge"),P=e("kol-breadcrumb"),M=e("kol-button"),x=e("kol-button-group"),Q=null,Z=null,V=e("kol-card"),c=e("kol-details"),h=e("kol-form"),b=e("kol-heading"),d=e("kol-icon"),p=e("kol-icon-font-awesome"),m=e("kol-icon-icofont"),t=e("kol-indented-text"),Le=null,te=e("kol-input-checkbox"),se=e("kol-input-color"),re=e("kol-input-date"),le=e("kol-input-email"),ae=e("kol-input-file"),ie=e("kol-input-number"),ce=e("kol-input-password"),de=e("kol-input-radio"),ue=e("kol-input-range"),pe=e("kol-input-text"),me=e("kol-kolibri"),ke=e("kol-link"),Me=null,fe=e("kol-link-group"),he=e("kol-logo"),be=e("kol-modal"),ge=e("kol-nav"),ye=e("kol-pagination"),ve=e("kol-progress"),je=e("kol-select"),Ke=e("kol-skip-nav"),we=null,xe=e("kol-spin"),_e=e("kol-symbol"),Ce=e("kol-table"),Oe=e("kol-tabs"),Ee=e("kol-textarea"),Te=e("kol-toast"),Ie=e("kol-tooltip"),De=e("kol-version")}}]);