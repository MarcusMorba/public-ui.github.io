"use strict";var Bt=Object.defineProperty,It=Object.defineProperties;var Dt=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var Z=(c,i,r)=>i in c?Bt(c,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):c[i]=r,Y=(c,i)=>{for(var r in i||(i={}))H.call(i,r)&&Z(c,r,i[r]);if(N)for(var r of N(i))J.call(i,r)&&Z(c,r,i[r]);return c},W=(c,i)=>It(c,Dt(i));var X=(c,i)=>{var r={};for(var s in c)H.call(c,s)&&i.indexOf(s)<0&&(r[s]=c[s]);if(c!=null&&N)for(var s of N(c))i.indexOf(s)<0&&J.call(c,s)&&(r[s]=c[s]);return r};(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[6351],{"./src/components/abbr/1-examples/autogen.wc.stories.tsx":(c,i,r)=>{r.r(i),r.d(i,{Bottom:()=>f,Content:()=>_,Left:()=>S,Right:()=>y,Standard:()=>k,Top:()=>g,default:()=>M});var s=r("./node_modules/react/index.js"),I=r("./node_modules/@public-ui/react/dist/index.mjs"),E=r("./src/components/abbr/1-examples/autogen.configuration.ts"),T=Object.defineProperty,x=Object.defineProperties,j=Object.getOwnPropertyDescriptors,K=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,D=(n,p,b)=>p in n?T(n,p,{enumerable:!0,configurable:!0,writable:!0,value:b}):n[p]=b,m=(n,p)=>{for(var b in p||(p={}))w.call(p,b)&&D(n,b,p[b]);if(K)for(var b of K(p))O.call(p,b)&&D(n,b,p[b]);return n},P=(n,p)=>x(n,j(p)),t=null,V={Standard:{startLoc:{col:24,line:25},endLoc:{col:1,line:29},startBody:{col:24,line:25},endBody:{col:1,line:29}},Top:{startLoc:{col:19,line:39},endLoc:{col:1,line:47},startBody:{col:19,line:39},endBody:{col:1,line:47}},Right:{startLoc:{col:21,line:58},endLoc:{col:1,line:66},startBody:{col:21,line:58},endBody:{col:1,line:66}},Bottom:{startLoc:{col:22,line:77},endLoc:{col:1,line:85},startBody:{col:22,line:77},endBody:{col:1,line:85}},Left:{startLoc:{col:20,line:96},endLoc:{col:1,line:104},startBody:{col:20,line:96},endBody:{col:1,line:104}},Content:{startLoc:{col:23,line:115},endLoc:{col:1,line:132},startBody:{col:23,line:115},endBody:{col:1,line:132}}};const M=P(m({},E.n),{title:"Web Components/Abbr/Beispiele",component:I.T5}),q=n=>React.createElement(MyComponent,m({},n),n.children),v={},k=n=>s.createElement("div",null,s.createElement("kol-abbr",m({},n),n.content));k.args=m({},v);const g=n=>s.createElement("div",null,"Ich bin eine",s.createElement("kol-abbr",{style:{margin:"0.5em"},_title:"Abk\xFCrzung","_tooltip-align":"top"},n.content),"mit Tooltip oben.");g.args=m({},v),g.storyName="Tooltip oben";const y=n=>s.createElement("div",null,"Ich bin eine",s.createElement("kol-abbr",{style:{margin:"0.5em"},_title:"Abk\xFCrzung","_tooltip-align":"right"},n.content),"mit Tooltip rechts.");y.args=m({},v),y.storyName="Tooltip rechts";const f=n=>s.createElement("div",null,"Ich bin eine",s.createElement("kol-abbr",{style:{margin:"0.5em"},_title:"Abk\xFCrzung","_tooltip-align":"bottom"},n.content),"mit Tooltip unten.");f.args=m({},v),f.storyName="Tooltip unten";const S=n=>s.createElement("div",null,"Ich bin eine",s.createElement("kol-abbr",{style:{margin:"0.5em"},_title:"Abk\xFCrzung","_tooltip-align":"left"},n.content),"mit Tooltip links.");S.args=m({},v),S.storyName="Tooltip links";const _=n=>s.createElement("div",null,s.createElement("p",{style:{fontFamily:"Arial"}},"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ",s.createElement("br",null),"Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",s.createElement("kol-abbr",{"_tooltip-align":"left",_title:"Eine Beschreibung, was Lorem bedeutet",style:{display:"inline",margin:"0px 5px"}},"Lorem"),"ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."));_.args=m({},v),_.storyName="Flie\xDFtext",k.parameters=m({storySource:{source:`(args: any) => (
	<div>
		<kol-abbr {...args}>{args.content}</kol-abbr>
	</div>
)`}},k.parameters),g.parameters=m({storySource:{source:`(args: any) => (
	<div>
		Ich bin eine
		<kol-abbr style={{ margin: '0.5em' }} _title="Abk\xFCrzung" _tooltip-align="top">
			{args.content}
		</kol-abbr>
		mit Tooltip oben.
	</div>
)`}},g.parameters),y.parameters=m({storySource:{source:`(args: any) => (
	<div>
		Ich bin eine
		<kol-abbr style={{ margin: '0.5em' }} _title="Abk\xFCrzung" _tooltip-align="right">
			{args.content}
		</kol-abbr>
		mit Tooltip rechts.
	</div>
)`}},y.parameters),f.parameters=m({storySource:{source:`(args: any) => (
	<div>
		Ich bin eine
		<kol-abbr style={{ margin: '0.5em' }} _title="Abk\xFCrzung" _tooltip-align="bottom">
			{args.content}
		</kol-abbr>
		mit Tooltip unten.
	</div>
)`}},f.parameters),S.parameters=m({storySource:{source:`(args: any) => (
	<div>
		Ich bin eine
		<kol-abbr style={{ margin: '0.5em' }} _title="Abk\xFCrzung" _tooltip-align="left">
			{args.content}
		</kol-abbr>
		mit Tooltip links.
	</div>
)`}},S.parameters),_.parameters=m({storySource:{source:`(args: any) => (
	<div>
		<p style={{ fontFamily: 'Arial' }}>
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
			voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
			voluptua. At vero eos et accusam et justo duo dolores et ea rebum. <br />
			Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
			<kol-abbr _tooltip-align="left" _title="Eine Beschreibung, was Lorem bedeutet" style={{ display: 'inline', margin: '0px 5px' }}>
				Lorem
			</kol-abbr>
			ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
			vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
			sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
			accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
		</p>
	</div>
)`}},_.parameters);try{k.displayName="Standard",k.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Standard",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/abbr/1-examples/autogen.wc.stories.tsx#Standard"]={docgenInfo:k.__docgenInfo,name:"Standard",path:"src/components/abbr/1-examples/autogen.wc.stories.tsx#Standard"})}catch(n){}try{g.displayName="Top",g.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Top",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/abbr/1-examples/autogen.wc.stories.tsx#Top"]={docgenInfo:g.__docgenInfo,name:"Top",path:"src/components/abbr/1-examples/autogen.wc.stories.tsx#Top"})}catch(n){}try{y.displayName="Right",y.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Right",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/abbr/1-examples/autogen.wc.stories.tsx#Right"]={docgenInfo:y.__docgenInfo,name:"Right",path:"src/components/abbr/1-examples/autogen.wc.stories.tsx#Right"})}catch(n){}try{f.displayName="Bottom",f.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Bottom",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/abbr/1-examples/autogen.wc.stories.tsx#Bottom"]={docgenInfo:f.__docgenInfo,name:"Bottom",path:"src/components/abbr/1-examples/autogen.wc.stories.tsx#Bottom"})}catch(n){}try{S.displayName="Left",S.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Left",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/abbr/1-examples/autogen.wc.stories.tsx#Left"]={docgenInfo:S.__docgenInfo,name:"Left",path:"src/components/abbr/1-examples/autogen.wc.stories.tsx#Left"})}catch(n){}try{_.displayName="Content",_.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Content",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/abbr/1-examples/autogen.wc.stories.tsx#Content"]={docgenInfo:_.__docgenInfo,name:"Content",path:"src/components/abbr/1-examples/autogen.wc.stories.tsx#Content"})}catch(n){}},"./src/components/abbr/1-examples/autogen.configuration.ts":(c,i,r)=>{r.d(i,{n:()=>x});var s=r("./node_modules/@storybook/addon-jest/dist/esm/index.js"),I=r("./node_modules/@public-ui/components/jest-test-results.json"),E=r("./node_modules/@geometricpanda/storybook-addon-badges/storybook-addon-badges.esm.js");const T={content:{name:"Text",control:{type:"text"},type:{required:!0},defaultValue:"z.B."},_title:{name:"Title",control:{type:"text"},type:{required:!0},defaultValue:"zum Beispiel"},_tooltipAlign:{name:"Ausrichtung",control:{type:"select"},options:["top","bottom","left","right"],defaultValue:"top"}},x={decorators:[(0,s.x)({results:I})],parameters:{badges:[E.NZ.STABLE],jest:["abbr.e2e.ts","abbr.spec.ts","abbr.spec.tsx"],status:{type:"bitv"}},argTypes:T}},"./node_modules/@public-ui/react/dist/index.mjs":(c,i,r)=>{r.d(i,{$o:()=>gt,CO:()=>xt,CV:()=>ot,CX:()=>it,Er:()=>v,Gc:()=>_,HA:()=>b,Jl:()=>$,K5:()=>q,Lj:()=>at,MA:()=>kt,Np:()=>st,Nv:()=>bt,O:()=>rt,P:()=>vt,Q4:()=>ft,QK:()=>yt,Qs:()=>Et,RZ:()=>M,T5:()=>V,TE:()=>nt,TQ:()=>dt,UD:()=>Lt,Ud:()=>_t,Vp:()=>Tt,Vs:()=>ut,WD:()=>pt,WR:()=>St,Ze:()=>Kt,c2:()=>lt,cJ:()=>tt,ic:()=>g,is:()=>At,lo:()=>k,m5:()=>p,ox:()=>n,qq:()=>ht,r7:()=>Ct,rW:()=>et,sy:()=>mt,u_:()=>Ot,uz:()=>y,z5:()=>ct});var s=r("./node_modules/react/index.js"),I=r("./node_modules/react-dom/index.js");const E=o=>o.toLowerCase().split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(""),T=o=>o.replace(/([A-Z])/g,e=>`-${e[0].toLowerCase()}`),x=(o,e,l={})=>{if(o instanceof Element){const d=j(o.classList,e,l);d!==""&&(o.className=d),Object.keys(e).forEach(a=>{if(!(a==="children"||a==="style"||a==="ref"||a==="class"||a==="className"||a==="forwardedRef"))if(a.indexOf("on")===0&&a[2]===a[2].toUpperCase()){const C=a.substring(2),u=C[0].toLowerCase()+C.substring(1);K(u)||w(o,u,e[a])}else o[a]=e[a],typeof e[a]==="string"&&o.setAttribute(T(a),e[a])})}},j=(o,e,l)=>{const d=e.className||e.class,a=l.className||l.class,C=O(o),u=O(d?d.split(" "):[]),R=O(a?a.split(" "):[]),L=[];return C.forEach(h=>{u.has(h)?(L.push(h),u.delete(h)):R.has(h)||L.push(h)}),u.forEach(h=>L.push(h)),L.join(" ")};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */const K=o=>{if(typeof document=="undefined")return!0;{const e="on"+o;let l=e in document;if(!l){const d=document.createElement("div");d.setAttribute(e,"return;"),l=typeof d[e]=="function"}return l}},w=(o,e,l)=>{const d=o.__events||(o.__events={}),a=d[e];a&&o.removeEventListener(e,a),o.addEventListener(e,d[e]=function(u){l&&l.call(this,u)})},O=o=>{const e=new Map;return o.forEach(l=>e.set(l,l)),e},D=(o,e)=>{typeof o=="function"?o(e):o!=null&&(o.current=e)},m=(...o)=>e=>{o.forEach(l=>{D(l,e)})},P=(o,e)=>{const l=(d,a)=>s.createElement(o,W(Y({},d),{forwardedRef:a}));return l.displayName=e,s.forwardRef(l)},t=(o,e,l,d)=>{d!==void 0&&d();const a=E(o),C=class extends s.Component{constructor(u){super(u),this.setComponentElRef=R=>{this.componentEl=R}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(u){x(this.componentEl,this.props,u)}render(){const Q=this.props,{children:u,forwardedRef:R,style:L,className:h,ref:Pt}=Q,G=X(Q,["children","forwardedRef","style","className","ref"]);let F=Object.keys(G).reduce((z,A)=>{const U=G[A];if(A.indexOf("on")===0&&A[2]===A[2].toUpperCase()){const B=A.substring(2).toLowerCase();typeof document!="undefined"&&K(B)&&(z[A]=U)}else{const B=typeof U;(B==="string"||B==="boolean"||B==="number")&&(z[T(A)]=U)}return z},{});l&&(F=l(this.props,F));const Rt=W(Y({},F),{ref:m(R,this.setComponentElRef),style:L});return(0,s.createElement)(o,Rt,u)}static get displayName(){return a}};return e&&(C.contextType=e),P(C,a)},V=t("kol-abbr"),M=t("kol-accordion"),q=t("kol-alert"),v=t("kol-badge"),k=t("kol-breadcrumb"),g=t("kol-button"),y=t("kol-button-group"),f=null,S=null,_=t("kol-card"),n=t("kol-details"),p=t("kol-form"),b=t("kol-heading"),$=t("kol-icon"),tt=t("kol-icon-font-awesome"),et=t("kol-icon-icofont"),ot=t("kol-indented-text"),Nt=null,nt=t("kol-input-checkbox"),st=t("kol-input-color"),rt=t("kol-input-date"),at=t("kol-input-email"),it=t("kol-input-file"),lt=t("kol-input-number"),ct=t("kol-input-password"),mt=t("kol-input-radio"),dt=t("kol-input-range"),pt=t("kol-input-text"),ut=t("kol-kolibri"),bt=t("kol-link"),jt=null,gt=t("kol-link-group"),yt=t("kol-logo"),_t=t("kol-modal"),kt=t("kol-nav"),ft=t("kol-pagination"),St=t("kol-progress"),Ct=t("kol-select"),vt=t("kol-skip-nav"),wt=null,ht=t("kol-spin"),At=t("kol-symbol"),Tt=t("kol-table"),Lt=t("kol-tabs"),Et=t("kol-textarea"),xt=t("kol-toast"),Kt=t("kol-tooltip"),Ot=t("kol-version")}}]);