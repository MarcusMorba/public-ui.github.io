"use strict";var Ae=Object.defineProperty,De=Object.defineProperties;var Be=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var H=(c,s,n)=>s in c?Ae(c,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):c[s]=n,j=(c,s)=>{for(var n in s||(s={}))Q.call(s,n)&&H(c,n,s[n]);if(N)for(var n of N(s))q.call(s,n)&&H(c,n,s[n]);return c},W=(c,s)=>De(c,Be(s));var $=(c,s)=>{var n={};for(var t in c)Q.call(c,t)&&s.indexOf(t)<0&&(n[t]=c[t]);if(c!=null&&N)for(var t of N(c))s.indexOf(t)<0&&q.call(c,t)&&(n[t]=c[t]);return n};(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[4698],{"./src/components/input-range/1-examples/autogen.wc.stories.tsx":(c,s,n)=>{n.r(s),n.d(s,{Disabled:()=>f,Error:()=>h,Formularbeispiel:()=>L,Standard:()=>k,default:()=>M});var t=n("./node_modules/react/index.js"),b=n("./node_modules/@public-ui/react/dist/index.mjs"),_=n("./src/components/bik-bitv-test.tsx"),y=n("./src/components/input-range/1-examples/autogen.configuration.ts"),T=Object.defineProperty,B=Object.defineProperties,K=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,R=(l,u,g)=>u in l?T(l,u,{enumerable:!0,configurable:!0,writable:!0,value:g}):l[u]=g,d=(l,u)=>{for(var g in u||(u={}))E.call(u,g)&&R(l,g,u[g]);if(x)for(var g of x(u))S.call(u,g)&&R(l,g,u[g]);return l},e=(l,u)=>B(l,K(u)),V=null,z={Standard:{startLoc:{col:24,line:26},endLoc:{col:1,line:30},startBody:{col:24,line:26},endBody:{col:1,line:30}},Error:{startLoc:{col:21,line:40},endLoc:{col:1,line:44},startBody:{col:21,line:40},endBody:{col:1,line:44}},Disabled:{startLoc:{col:24,line:55},endLoc:{col:1,line:61},startBody:{col:24,line:55},endBody:{col:1,line:61}},Formularbeispiel:{startLoc:{col:32,line:67},endLoc:{col:1,line:112},startBody:{col:32,line:67},endBody:{col:1,line:112}}};const M=e(d({},y.E),{title:"Web Components/InputRange/Beispiele",component:b.TQ}),Y=l=>React.createElement(MyComponent,d({},l),l.children),P={},k=l=>t.createElement("div",null,t.createElement("kol-input-range",d({},l)));k.args=d({},P);const h=l=>t.createElement("div",null,t.createElement("kol-input-range",{_id:"meine_range",_name:"meine_range",_error:"Fehlermeldung",_touched:!0}));h.args=d({},P),h.storyName="Fehlermeldung";const f=l=>t.createElement("div",null,t.createElement("kol-input-range",{_id:"meine_range",_name:"meine_range"}),t.createElement("div",{className:"mt-2"}),t.createElement("kol-input-range",{_id:"meine_range",_name:"meine_range",_disabled:!0}));f.args=d({},P),f.storyName="Aktiv / Nicht aktiv";const L=()=>{const[l,u]=(0,t.useState)(!1);return t.createElement("div",{style:{display:"grid",gap:"0.25em"}},t.createElement("kol-input-range",e(d({_min:0,_max:50},_.kM),{_touched:l}),"Schieberegler"),t.createElement("kol-input-range",e(d({_min:0,_max:50,_step:10},_.kM),{_touched:l}),"Schieberegler (mit Raster)"),t.createElement("kol-input-range",e(d({_list:"[{'value':0,'label':'sehr schlecht'},{'value':10,'label':'schlecht'},{'value':20,'label':'mangelhaft'},{'value':30,'label':'gut'},{'value':40,'label':'naja'},{'value':50,'label':'sehr gut'}]",_min:0,_max:50,_step:10},_.kM),{_touched:l}),"Schieberegler (mit Rasterlinien)"),t.createElement("kol-input-range",e(d({_min:0,_max:50,_disabled:!0},_.kM),{_touched:l}),"Schieberegler (Disabled)"),t.createElement("div",{style:{display:"flex",gap:"0.25em"}},t.createElement("kol-button",{_variant:"primary",_label:"Absenden",_on:{onClick:()=>{u(!0)}}}),t.createElement("kol-button",{_variant:"ghost",_label:"Zur\xFCcksetzen",_on:{onClick:()=>{u(!1)}}})))};k.parameters=d({storySource:{source:`(args: any) => (
	<div>
		<kol-input-range {...args}></kol-input-range>
	</div>
)`}},k.parameters),h.parameters=d({storySource:{source:`(args: any) => (
	<div>
		<kol-input-range _id="meine_range" _name="meine_range" _error="Fehlermeldung" _touched></kol-input-range>
	</div>
)`}},h.parameters),f.parameters=d({storySource:{source:`(args: any) => (
	<div>
		<kol-input-range _id="meine_range" _name="meine_range"></kol-input-range>
		<div className="mt-2"></div>
		<kol-input-range _id="meine_range" _name="meine_range" _disabled></kol-input-range>
	</div>
)`}},f.parameters),L.parameters=d({storySource:{source:`() => {
	const [touched, setTouched] = useState<boolean>(false);
	return (
		<div style={{ display: 'grid', gap: '0.25em' }}>
			<kol-input-range _min={0} _max={50} {...DEFAULT_INPUT_PROPS} _touched={touched}>
				Schieberegler
			</kol-input-range>
			<kol-input-range _min={0} _max={50} _step={10} {...DEFAULT_INPUT_PROPS} _touched={touched}>
				Schieberegler (mit Raster)
			</kol-input-range>
			<kol-input-range
				_list="[{'value':0,'label':'sehr schlecht'},{'value':10,'label':'schlecht'},{'value':20,'label':'mangelhaft'},{'value':30,'label':'gut'},{'value':40,'label':'naja'},{'value':50,'label':'sehr gut'}]"
				_min={0}
				_max={50}
				_step={10}
				{...DEFAULT_INPUT_PROPS}
				_touched={touched}
			>
				Schieberegler (mit Rasterlinien)
			</kol-input-range>
			<kol-input-range _min={0} _max={50} _disabled {...DEFAULT_INPUT_PROPS} _touched={touched}>
				Schieberegler (Disabled)
			</kol-input-range>
			<div style={{ display: 'flex', gap: '0.25em' }}>
				<kol-button
					_variant="primary"
					_label="Absenden"
					_on={{
						onClick: () => {
							setTouched(true);
						},
					}}
				></kol-button>
				<kol-button
					_variant="ghost"
					_label="Zur\xFCcksetzen"
					_on={{
						onClick: () => {
							setTouched(false);
						},
					}}
				></kol-button>
			</div>
		</div>
	);
}`}},L.parameters);try{k.displayName="Standard",k.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Standard",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/input-range/1-examples/autogen.wc.stories.tsx#Standard"]={docgenInfo:k.__docgenInfo,name:"Standard",path:"src/components/input-range/1-examples/autogen.wc.stories.tsx#Standard"})}catch(l){}try{h.displayName="Error",h.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Error",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/input-range/1-examples/autogen.wc.stories.tsx#Error"]={docgenInfo:h.__docgenInfo,name:"Error",path:"src/components/input-range/1-examples/autogen.wc.stories.tsx#Error"})}catch(l){}try{f.displayName="Disabled",f.__docgenInfo={description:"Die Component stellt eine konkrete Story im Storybook dar.",displayName:"Disabled",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/input-range/1-examples/autogen.wc.stories.tsx#Disabled"]={docgenInfo:f.__docgenInfo,name:"Disabled",path:"src/components/input-range/1-examples/autogen.wc.stories.tsx#Disabled"})}catch(l){}},"./src/components/bik-bitv-test.tsx":(c,s,n)=>{n.d(s,{BS:()=>T,_F:()=>S,kM:()=>K});var t=n("./node_modules/react/index.js"),b=n("./node_modules/@public-ui/react/dist/index.mjs"),_=n("./node_modules/@leanup/form/esm/index.js");const y=new _.I2;y.validators.add(_.Fj);const T={parameters:{layout:"centered"}};new _.gs("input",{mandatory:!0}).setValidationHandler(y);const K={_error:"Ich bin ein Fehler"};let x="";const E=localStorage.getItem("kol-theme");typeof E=="string"&&(x=E);class S extends t.Component{constructor(){super(...arguments),this.state={activeElement:null,theme:x}}renderModal(){return t.createElement(b.Ud,{_activeElement:this.state.activeElement,_on:{onClose:()=>{this.setState(()=>({activeElement:null}))}},_width:"40em"},t.createElement(b.Gc,{style:{display:"block",backgroundColor:"white"},_hasFooter:!0,_headline:"Hinweise zu den Styleguides"},t.createElement("p",{style:{margin:0,padding:0},slot:"content"},"Dieses Auswahl-Men\xFC ist nur f\xFCr den BIK BITV-Test vorgesehen und erm\xF6glicht das Umschalten des Styleguides. Wenn das Auswahl-Men\xFC im Storybook angezeigt wird, sollte es immer auf Neutral eingestellt sein, damit diese Einstellung nicht mit der Storybook-Theme-Einstellung kollidiert."),t.createElement("div",{slot:"footer"},t.createElement(b.ic,{_label:"Schlie\xDFen",_on:{onClick:()=>{this.setState(()=>({activeElement:null}))}}}))))}render(){return t.createElement("div",{className:`d-grid gap-2 ${this.state.theme}`,style:{margin:"auto",maxWidth:this.props._maxWidth||"50em"}},t.createElement("div",{style:{position:"fixed",display:"flex",gap:".5em",top:"1em",left:"1em",alignItems:"end",justifyContent:"center"}},t.createElement(b.r7,{_list:[{label:"Neutral",value:""},{label:"BAMF-Styleguide",value:"bamf"},{label:"BMF-Styleguide",value:"bmf"},{label:"BZSt-Styleguide",value:"bzst"},{label:"ITZBund-Styleguide",value:"itzbund"},{label:"MAPZoll-Styleguide",value:"mapz"}],_on:{onChange:(d,e)=>{Array.isArray(e)&&e.length>0&&typeof e[0]=="string"&&(localStorage.setItem("kol-theme",e[0]),this.setState(()=>({theme:e[0]})))}},_value:[this.state.theme]},"Styleguide umschalten"),t.createElement(b.ic,{style:{fontSize:"95%"},_label:"Hilfe",_icon:"icofont-info",_iconOnly:!0,_on:{onClick:d=>{this.setState(()=>({activeElement:d.target}))}}}),this.renderModal()),t.createElement(b.HA,null,this.props._heading),this.props.children)}}try{S.displayName="BikBitvTest",S.__docgenInfo={description:"",displayName:"BikBitvTest",props:{_heading:{defaultValue:null,description:"",name:"_heading",required:!0,type:{name:"string"}},_maxWidth:{defaultValue:null,description:"",name:"_maxWidth",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/bik-bitv-test.tsx#BikBitvTest"]={docgenInfo:S.__docgenInfo,name:"BikBitvTest",path:"src/components/bik-bitv-test.tsx#BikBitvTest"})}catch(R){}},"./src/components/input-range/1-examples/autogen.configuration.ts":(c,s,n)=>{n.d(s,{E:()=>T});var t=n("./node_modules/@storybook/addon-jest/dist/esm/index.js"),b=n("./node_modules/@public-ui/components/jest-test-results.json"),_=n("./node_modules/@geometricpanda/storybook-addon-badges/storybook-addon-badges.esm.js");const y={_accessKey:{name:"Tastenkombination Input",control:{type:"text"},type:{required:!1},defaultValue:""},_autoFocus:{name:"Input fokussierbar?",control:{type:"boolean"},type:{required:!1},defaultValue:0},_disabled:{name:"Deaktiviert",control:{type:"boolean"},type:{required:!1},defaultValue:0},_error:{name:"Fehlermeldung",control:{type:"text"},type:{required:!1},defaultValue:""},_id:{name:"ID",control:{type:"text"},type:{required:!0},defaultValue:""},_max:{name:"Max. Eingabewert",control:{type:"number"},type:{required:!1}},_min:{name:"Min. Eingabewert",control:{type:"number"},type:{required:!1}},_name:{name:"Name (technisch)",control:{type:"text"},type:{required:!0},defaultValue:""},_step:{name:"Schrittweite Eingabewert",control:{type:"number"},type:{required:!1}},_tabIndex:{name:"Tab-Index",control:{type:"text"},type:{required:!1},defaultValue:0},_touched:{name:"Besucht",control:{type:"boolean"},type:{required:!1},defaultValue:0},_value:{name:"Wert",control:{type:"text"},type:{required:!1},defaultValue:100}},T={decorators:[(0,t.x)({results:b})],parameters:{badges:[_.NZ.STABLE],jest:["input-range.e2e.ts","input-range.spec.ts","input-range.spec.tsx"],status:{type:"bitv"}},argTypes:y}},"./node_modules/@public-ui/react/dist/index.mjs":(c,s,n)=>{n.d(s,{$o:()=>ge,CO:()=>Ke,CV:()=>oe,CX:()=>se,Er:()=>Y,Gc:()=>l,HA:()=>J,Jl:()=>X,K5:()=>M,Lj:()=>le,MA:()=>ye,Np:()=>ae,Nv:()=>_e,O:()=>re,P:()=>Ee,Q4:()=>ke,QK:()=>be,Qs:()=>Oe,RZ:()=>z,T5:()=>V,TE:()=>ne,TQ:()=>ue,UD:()=>xe,Ud:()=>he,Vp:()=>Te,Vs:()=>me,WD:()=>pe,WR:()=>fe,Ze:()=>Re,c2:()=>ie,cJ:()=>ee,ic:()=>k,is:()=>Ce,lo:()=>P,m5:()=>g,ox:()=>u,qq:()=>Se,r7:()=>ve,rW:()=>te,sy:()=>de,u_:()=>Ie,uz:()=>h,z5:()=>ce});var t=n("./node_modules/react/index.js"),b=n("./node_modules/react-dom/index.js");const _=a=>a.toLowerCase().split("-").map(o=>o.charAt(0).toUpperCase()+o.slice(1)).join(""),y=a=>a.replace(/([A-Z])/g,o=>`-${o[0].toLowerCase()}`),T=(a,o,i={})=>{if(a instanceof Element){const p=B(a.classList,o,i);p!==""&&(a.className=p),Object.keys(o).forEach(r=>{if(!(r==="children"||r==="style"||r==="ref"||r==="class"||r==="className"||r==="forwardedRef"))if(r.indexOf("on")===0&&r[2]===r[2].toUpperCase()){const v=r.substring(2),m=v[0].toLowerCase()+v.substring(1);K(m)||x(a,m,o[r])}else a[r]=o[r],typeof o[r]==="string"&&a.setAttribute(y(r),o[r])})}},B=(a,o,i)=>{const p=o.className||o.class,r=i.className||i.class,v=E(a),m=E(p?p.split(" "):[]),A=E(r?r.split(" "):[]),I=[];return v.forEach(C=>{m.has(C)?(I.push(C),m.delete(C)):A.has(C)||I.push(C)}),m.forEach(C=>I.push(C)),I.join(" ")};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */const K=a=>{if(typeof document=="undefined")return!0;{const o="on"+a;let i=o in document;if(!i){const p=document.createElement("div");p.setAttribute(o,"return;"),i=typeof p[o]=="function"}return i}},x=(a,o,i)=>{const p=a.__events||(a.__events={}),r=p[o];r&&a.removeEventListener(o,r),a.addEventListener(o,p[o]=function(m){i&&i.call(this,m)})},E=a=>{const o=new Map;return a.forEach(i=>o.set(i,i)),o},S=(a,o)=>{typeof a=="function"?a(o):a!=null&&(a.current=o)},R=(...a)=>o=>{a.forEach(i=>{S(i,o)})},d=(a,o)=>{const i=(p,r)=>t.createElement(a,W(j({},p),{forwardedRef:r}));return i.displayName=o,t.forwardRef(i)},e=(a,o,i,p)=>{p!==void 0&&p();const r=_(a),v=class extends t.Component{constructor(m){super(m),this.setComponentElRef=A=>{this.componentEl=A}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(m){T(this.componentEl,this.props,m)}render(){const G=this.props,{children:m,forwardedRef:A,style:I,className:C,ref:Fe}=G,Z=$(G,["children","forwardedRef","style","className","ref"]);let F=Object.keys(Z).reduce((U,O)=>{const w=Z[O];if(O.indexOf("on")===0&&O[2]===O[2].toUpperCase()){const D=O.substring(2).toLowerCase();typeof document!="undefined"&&K(D)&&(U[O]=w)}else{const D=typeof w;(D==="string"||D==="boolean"||D==="number")&&(U[y(O)]=w)}return U},{});i&&(F=i(this.props,F));const Pe=W(j({},F),{ref:R(A,this.setComponentElRef),style:I});return(0,t.createElement)(a,Pe,m)}static get displayName(){return r}};return o&&(v.contextType=o),d(v,r)},V=e("kol-abbr"),z=e("kol-accordion"),M=e("kol-alert"),Y=e("kol-badge"),P=e("kol-breadcrumb"),k=e("kol-button"),h=e("kol-button-group"),f=null,L=null,l=e("kol-card"),u=e("kol-details"),g=e("kol-form"),J=e("kol-heading"),X=e("kol-icon"),ee=e("kol-icon-font-awesome"),te=e("kol-icon-icofont"),oe=e("kol-indented-text"),Le=null,ne=e("kol-input-checkbox"),ae=e("kol-input-color"),re=e("kol-input-date"),le=e("kol-input-email"),se=e("kol-input-file"),ie=e("kol-input-number"),ce=e("kol-input-password"),de=e("kol-input-radio"),ue=e("kol-input-range"),pe=e("kol-input-text"),me=e("kol-kolibri"),_e=e("kol-link"),Ne=null,ge=e("kol-link-group"),be=e("kol-logo"),he=e("kol-modal"),ye=e("kol-nav"),ke=e("kol-pagination"),fe=e("kol-progress"),ve=e("kol-select"),Ee=e("kol-skip-nav"),Me=null,Se=e("kol-spin"),Ce=e("kol-symbol"),Te=e("kol-table"),xe=e("kol-tabs"),Oe=e("kol-textarea"),Ke=e("kol-toast"),Re=e("kol-tooltip"),Ie=e("kol-version")}}]);