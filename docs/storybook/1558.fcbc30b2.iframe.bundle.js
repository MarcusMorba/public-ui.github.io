"use strict";(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[1558],{"./node_modules/@public-ui/components/dist/esm/a11y.tipps-ff5a1a99.js":(N,k,f)=>{f.d(k,{a:()=>b,b:()=>h,c:()=>s,d:()=>l,e:()=>u,f:()=>j,u:()=>S});var g=f("./node_modules/@public-ui/components/dist/esm/dev.utils-daaf2f39.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const m=new Set,u=d=>{m.has(d)===!1&&(m.add(d),g.L.info(d,{classifier:"\u270Ba11y",overwriteStyle:"; background-color: #09f"}))},w=new Set,h=d=>{w.has(d)===!1&&(w.add(d),g.L.warn(d,{classifier:"\u{1F525}deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},p=new Set,l=d=>{p.has(d)===!1&&(p.add(d),g.L.debug(d,{classifier:"\u{1F4BB}dev",overwriteStyle:"; background-color: #f09"}))},n=new Set,j=(d,L=!1)=>{n.has(d)===!1&&(n.add(d),d+=L===!0?" \u2705":"",g.L.debug(d,{classifier:"\u{1F31F}feature",overwriteStyle:"; background-color: #309"}))};l("Wir freuen uns \xFCber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const E=new Set,T=d=>{E.has(d)===!1&&(E.add(d),Log.debug(d,{classifier:"\u{1F4D1}ui/ux",overwriteStyle:"; background-color: #060;"}))},s=()=>{u(`"Disabled" schr\xE4nkt die Zug\xE4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.
- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae`)},b=d=>{typeof d=="string"&&d!==""||u(`Manche Strukturelemente, wie bspw. der nav-Tag, k\xF6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xF6nnen, ist es erforderlich ein Aria-Label zu setzen.
- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns`)},S=(d,L=8)=>{var A;L>7&&(A=`[${d}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xFCpunkte zu verwenden.

Links:
- https://de.ryte.com/wiki/Millersche_Zahl
- https://de.wikipedia.org/wiki/Millersche_Zahl`,E.has(A)===!1&&(E.add(A),g.L.debug(A,{classifier:"\u{1F4D1}ui/ux",overwriteStyle:"; background-color: #060;"})))}},"./node_modules/@public-ui/components/dist/esm/index.m-86dc8c44.js":(N,k,f)=>{f.d(k,{f:()=>T,s:()=>E});/*!
 * KoliBri - The accessible HTML-Standard
 */var g=.2126,m=.7152,u=.0722,w=1/12.92;function h(s){return Math.pow((s+.055)/1.055,2.4)}function p(s){var b=s[0]/255,S=s[1]/255,d=s[2]/255,L=b<=.03928?b*w:h(b),A=S<=.03928?S*w:h(S),B=d<=.03928?d*w:h(d);return L*g+A*m+B*u}function l(s){var b=255;(s=s.replace(/^#/,"")).length===8&&(b=parseInt(s.slice(6,8),16),s=s.substring(0,6)),s.length===4&&(b=parseInt(s.slice(3,4).repeat(2),16),s=s.substring(0,3)),s.length===3&&(s=s[0]+s[0]+s[1]+s[1]+s[2]+s[2]);var S=parseInt(s,16);return[S>>16,S>>8&255,255&S,b]}function n(s,b){return(Math.max(s,b)+.05)/(Math.min(s,b)+.05)}function j(s,b){return n(p(s),p(b))}function E(s,b){return j(l(s),l(b))}function T(s){return s>=7?"AAA":s>=4.5?"AA":s>=3?"AA Large":"Fail"}},"./node_modules/@public-ui/components/dist/esm/kol-input-date.entry.js":(N,k,f)=>{f.r(k),f.d(k,{kol_input_date:()=>h});var g=f("./node_modules/@public-ui/components/dist/esm/index-a398b9f4.js"),m=f("./node_modules/@public-ui/components/dist/esm/prop.validators-4cac744a.js"),u=f("./node_modules/@public-ui/components/dist/esm/reuse-f9be4952.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const w=`*,::before,::after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--kolibri-border-color)}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:var(--kolibri-color);--tw-ring-color:rgba(undefined, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}::moz-focus-inner{border-style:none;padding:0}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type='search']{-webkit-appearance:textfield;outline-offset:-2px}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}b,strong{font-weight:bolder}button,select{text-transform:none}button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button}button{background-color:transparent;background-image:none}button,[role="button"]{cursor:pointer}code{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}fieldset{margin:0;padding:0}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}h1,p,h2,h3,h4,h5,h6{margin:0}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}input,button,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;padding:0;line-height:inherit;color:inherit}input::placeholder{opacity:1;color:#9ca3af}input::webkit-input-placeholder{opacity:1;color:#9ca3af}input::-moz-placeholder{opacity:1;color:#9ca3af}input:-ms-input-placeholder{opacity:1;color:#9ca3af}input::-ms-input-placeholder{opacity:1;color:#9ca3af}legend{padding:0}progress{vertical-align:baseline}small{font-size:80%}svg{display:block;vertical-align:middle}table{text-indent:0;border-color:inherit;border-collapse:collapse}textarea{resize:vertical}textarea::placeholder{opacity:1;color:#9ca3af}textarea::webkit-input-placeholder{opacity:1;color:#9ca3af}textarea::-moz-placeholder{opacity:1;color:#9ca3af}textarea:-ms-input-placeholder{opacity:1;color:#9ca3af}textarea::-ms-input-placeholder{opacity:1;color:#9ca3af}ul,ol{list-style:none;margin:0;padding:0}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.bg-normal{background-color:var(--kolibri-color-normal)}.bg-white{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}.bg-spin-1{background-color:var(--kolibri-color-spin-1)}.bg-spin-2{background-color:var(--kolibri-color-spin-2)}.bg-spin-3{background-color:var(--kolibri-color-spin-3)}.rounded{border-radius:var(--kolibri-border-radius)}.border-1{border-width:1px}.cursor-pointer{cursor:pointer}.block{display:block}.inline-block{display:inline-block}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.inline-flex{display:-webkit-inline-box;display:-ms-inline-flexbox;display:-webkit-inline-flex;display:inline-flex}.table{display:table}.grid{display:-ms-grid;display:grid}.hidden{display:none}.flex-wrap{-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap}.items-center{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.content-center{-ms-flex-line-pack:center;-webkit-align-content:center;align-content:center}.font-80{font-weight:80}.font-60{font-weight:60}.h-full{height:100%}.h-0{height:0px}.h-0\\.41c-2\\.42\\2c 0-4\\.82-1\\.57-4\\.82-3\\.58c0\\.05-0\\.98\\2c 0\\.43-1\\.91\\2c 1\\.07-2\\.65c0\\.3\\2c 0\\.05\\2c 0\\.61\\2c 0\\.09\\2c 0\\.92\\2c 0\\.09c1\\.1\\2c 0\\2c 1\\.69-0\\.58\\2c 1\\.74-1\\.16{height:0.29rem}.text-sm{font-size:0.875rem;line-height:1.25rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.leading-normal{line-height:1.5}.list-none{list-style-type:none}.list-disc{list-style-type:disc}.list-decimal{list-style-type:decimal}.mx-auto{margin-left:auto;margin-right:auto}.mb-1{margin-bottom:calc(1 * var(--kolibri-spacing))}.mt-2{margin-top:calc(2 * var(--kolibri-spacing))}.mt-4{margin-top:calc(4 * var(--kolibri-spacing))}.mr-2{margin-right:calc(2 * var(--kolibri-spacing))}.ml-2{margin-left:calc(2 * var(--kolibri-spacing))}.outline{outline-style:solid}.overflow-hidden{overflow:hidden}.overflow-y-visible{overflow-y:visible}.p-2{padding:calc(2 * var(--kolibri-spacing))}.p-4{padding:calc(4 * var(--kolibri-spacing))}.px{padding-left:1px;padding-right:1px}.py-2{padding-top:calc(2 * var(--kolibri-spacing));padding-bottom:calc(2 * var(--kolibri-spacing))}.pl-8{padding-left:2rem}.pb-2{padding-bottom:calc(2 * var(--kolibri-spacing))}.tab{-moz-tab-size:4;-o-tab-size:4;tab-size:4}.absolute{position:absolute}.text-center{text-align:center}.hover\\:text-primary:hover{color:var(--kolibri-color-primary)}.text-normal{color:var(--kolibri-color-normal)}.italic{font-style:italic}.underline{-webkit-text-decoration-line:underline;text-decoration-line:underline}.indent{text-indent:1.5rem}.visible{visibility:visible}.w-full{width:100%}.w-4\\/5{width:80%}.z-50{z-index:50}.gap-1{grid-gap:calc(1 * var(--kolibri-spacing));gap:calc(1 * var(--kolibri-spacing))}.gap-2{grid-gap:calc(2 * var(--kolibri-spacing));gap:calc(2 * var(--kolibri-spacing))}.grid-flow-col{grid-auto-flow:column}.transform{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z))}.animate{-webkit-animation-iteration-count:1;animation-iteration-count:1}.filter{--tw-blur:var(--tw-empty, );--tw-brightness:var(--tw-empty, );--tw-contrast:var(--tw-empty, );--tw-grayscale:var(--tw-empty, );--tw-hue-rotate:var(--tw-empty, );--tw-invert:var(--tw-empty, );--tw-saturate:var(--tw-empty, );--tw-sepia:var(--tw-empty, );--tw-drop-shadow:var(--tw-empty, );-webkit-filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.blur{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}:host *{-ms-hyphens:var(--kolibri-hyphens);-webkit-hyphens:var(--kolibri-hyphens);hyphens:var(--kolibri-hyphens);font-family:var(--kolibri-font-family);line-height:var(--kolibri-line-height);word-break:break-word}.kol-required span::after{content:"*"}input,select,textarea{border-color:var(--kolibri-border-color);border-style:solid;border-width:1px}input.error,select.error,textarea.error{border-color:var(--kolibri-border-error)}input:focus,input:hover,select:focus,select:hover,textarea:focus,textarea:hover{border-color:#999}input:not([type=checkbox]),option,select,textarea{font-size:inherit;letter-spacing:inherit;word-spacing:inherit}.kol-disabled{opacity:0.5}.kol-cursor-not-allowed,.kol-cursor-not-allowed *{cursor:not-allowed}input[type=color],input[type=date],input[type=datetime-local],input[type=email],input[type=file],input[type=month],input[type=number],input[type=password],input[type=search],input[type=tel],input[type=text],input[type=time],input[type=url],input[type=week],select,textarea{background-color:white;display:block;line-height:1em;padding:0.5em}input[type=color]{height:2.5em;padding:0.25em 0.5em}textarea{padding:0.5em}`,h=class{constructor(p){(0,g.r)(this,p),this.catchRef=l=>{this.ref=l,(0,u.p)(this.host,this.ref)},this._accessKey=void 0,this._alert=!0,this._autoComplete=void 0,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._icon=void 0,this._id=void 0,this._list=void 0,this._max=void 0,this._min=void 0,this._name=void 0,this._on=void 0,this._readOnly=void 0,this._required=void 0,this._smartButton=void 0,this._step=void 0,this._tabIndex=void 0,this._touched=!1,this._type="date",this._value=void 0,this.state={}}render(){return(0,g.h)(g.H,null,(0,g.h)("kol-input-number",{ref:this.catchRef,_accessKey:this._accessKey,_alert:this._alert,_autoComplete:this._autoComplete,_disabled:this._disabled,_error:this._error,_hideLabel:this._hideLabel,_hint:this._hint,_icon:this._icon,_id:this._id,_list:this._list,_max:this.state._max,_min:this.state._min,_name:this._name,_on:this._on,_readOnly:this._readOnly,_required:this._required,_smartButton:this._smartButton,_step:this._step,_tabIndex:this._tabIndex,_touched:this._touched,_type:this._type,_value:this.state._value},(0,g.h)("slot",null)))}valueAsIsoDate(p,l){const n=p!=null?p:l;if(typeof n=="string")return n;if(typeof n=="object"&&n instanceof Date)switch(this._type){case"date":return`${n.getFullYear()}-${n.getMonth()+1}-${n.getDate()}`;case"datetime-local":return`${n.getFullYear()}-${n.getMonth()+1}-${n.getDate()}T${n.getHours()}:${n.getMinutes()}:${n.getSeconds()}`;case"month":return`${n.getFullYear()}-${n.getMonth()+1}`;case"time":return`${n.getHours()}:${n.getMinutes()}:${n.getSeconds()}`;case"week":throw new Error("Auto convert to week is not supported!")}}validateDateString(p){switch(this._type){case"date":return h.isoDateRegex.test(p);case"datetime-local":return h.isoLocalDateTimeRegex.test(p);case"month":return h.isoMonthRegex.test(p);case"time":return h.isoTimeRegex.test(p);case"week":return h.isoWeekRegex.test(p)}}validateMax(p){(0,m.a)(this,"_max",l=>l===void 0||this.validateDateString(l),new Set(["Iso8601","Date"]),this.valueAsIsoDate(p,this._type==="date"||this._type==="month"||this._type==="datetime-local"?h.DEFAULT_MAX_DATE:void 0))}validateMin(p){(0,m.a)(this,"_min",l=>l===void 0||this.validateDateString(l),new Set(["Iso8601","Date"]),this.valueAsIsoDate(p))}validateValue(p){(0,m.a)(this,"_value",l=>l===void 0||this.validateDateString(l),new Set(["Iso8601","Date"]),this.valueAsIsoDate(p))}componentWillLoad(){this.validateMax(this._max),this.validateMin(this._min),this.validateValue(this._value)}get host(){return(0,g.g)(this)}static get watchers(){return{_max:["validateMax"],_min:["validateMin"],_value:["validateValue"]}}};h.DEFAULT_MAX_DATE=new Date(9999,11,31,23,59,59),h.isoDateRegex=/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])/,h.isoLocalDateTimeRegex=/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])[T ][0-2]\d:[0-5]\d(:[0-5]\d(?:\.\d+)?)?/,h.isoMonthRegex=/^\d{4}-([0]\d|1[0-2])/,h.isoTimeRegex=/^[0-2]\d:[0-5]\d(:[0-5]\d(?:\.\d+)?)?/,h.isoWeekRegex=/^\d{4}-W(?:[0-4]\d|5[0-3])$/,h.style={default:w}},"./node_modules/@public-ui/components/dist/esm/prop.validators-4cac744a.js":(N,k,f)=>{f.d(k,{K:()=>D,a:()=>P,b:()=>ge,c:()=>ve,d:()=>we,e:()=>pe,f:()=>F,g:()=>U,h:()=>ee,i:()=>Se,j:()=>x,k:()=>Y,l:()=>I,m:()=>ke,n:()=>Z,o:()=>R,p:()=>W,q:()=>G,r:()=>n,s:()=>H,t:()=>X,w:()=>be});var g=f("./node_modules/@public-ui/components/dist/esm/index.m-86dc8c44.js"),m=f("./node_modules/@public-ui/components/dist/esm/a11y.tipps-ff5a1a99.js"),u=f("./node_modules/@public-ui/components/dist/esm/dev.utils-daaf2f39.js"),w=f("./node_modules/@public-ui/components/dist/esm/index-d870d3e1.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const h=(e,t)=>{t.forEach(o=>{e.has(o)===!1&&e.add(o)})},p=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const o=new Set;h(o,t.querySelectorAll(e));const r=t.querySelectorAll('[class*="hydrated"]');for(let a=0;a<r.length;a++){const i=r[a].shadowRoot;h(o,p(e,typeof i=="object"&&i!==null?i:r[a]))}return Array.from(o)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},l=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let o=t.querySelector(e);if(o===null){const r=t.querySelectorAll('[class*="hydrated"]');for(let a=0;a<r.length;a++){const i=r[a].shadowRoot;if(o=l(e,typeof i=="object"&&i!==null?i:r[a]),o!==null)break}}return o}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var n=S,j=S,E=d,T=L,s=A,b=B;function S(e){var t=C(e);return t.length==3?t.concat(255):(t[3]=Math.round(t[3]),t)}function d(e){var t=C(e);return{r:t[0],g:t[1],b:t[2],a:t.length==3?255:Math.round(t[3])}}function L(e){var t=C(e);return t.length==3&&t.push(255),t[3]==255?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":t[3]==0?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"}function A(e){(t=C(e)).length==3&&t.push(255);var t,o=t[3]==255,r=z(t[0]),a=z(t[1]),i=z(t[2]),c=oe(r,a,i,t=z(Math.round(t[3])));return o?c?"#"+r.charAt(0)+a.charAt(0)+i.charAt(0):"#"+r+a+i:c?"#"+r.charAt(0)+a.charAt(0)+i.charAt(0)+t.charAt(0):"#"+r+a+i+t}function B(e){var t=C(e);return t.length==3?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0}function C(e){return typeof e=="string"?ae(e=e.toLowerCase())||ie(e)||ne(e)||de(e)||ue(e)||[0,0,0,255]:se(e)||le(e)||ce(e)||[0,0,0,255]}function z(e){var t=e.toString(16);return t.length==1?"0"+t:t}function oe(e,t,o,r){var a=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return a.indexOf(e)!=-1&&a.indexOf(t)!=-1&&a.indexOf(o)!=-1&&a.indexOf(r)!=-1}function ae(e){return e=="red"?[255,0,0]:e=="green"?[0,255,0]:e=="blue"?[0,0,255]:e=="black"?[0,0,0]:e=="white"?[255,255,255]:e=="cyan"?[0,255,255]:e=="gray"||e=="grey"?[128,128,128]:e=="magenta"||e=="pink"?[255,0,255]:e=="yellow"?[255,255,0]:void 0}function M(e){return e.length==1?parseInt(e+e,16):parseInt(e,16)}function ie(e){var t=e.replace(/^#/,""),o=t.length;if(o==3||o==4){var r=M(t[0]),a=M(t[1]),i=M(t[2]),c=o==3?255:M(t[3]);return isNaN(r)||isNaN(a)||isNaN(i)||isNaN(c)?void 0:[r,a,i,c]}}function ne(e){var t=e.replace(/^#/,""),o=t.length;if(o==6||o==8){var r=M(t.slice(0,2)),a=M(t.slice(2,4)),i=M(t.slice(4,6)),c=o==6?255:M(t.slice(6,8));return isNaN(r)||isNaN(a)||isNaN(i)||isNaN(c)?void 0:[r,a,i,c]}}function y(e,t){return typeof e!="number"||t===!0&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}function se(e){if(Object.prototype.toString.call(e)==="[object Object]"&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=y(e.r!=null?e.r:e.red!=null?e.red:0,!0),o=y(e.g!=null?e.g:e.green!=null?e.green:0,!0),r=y(e.b!=null?e.b:e.blue!=null?e.blue:0,!0),a=y(e.a!=null?e.a:e.alpha!=null?e.alpha:255,!0);if(t!=-1&&o!=-1&&r!=-1&&a!=-1)return[t,o,r,a]}}function le(e){if(Array.isArray(e)&&(e.length==3||e.length==4)){var t=y(e[0],!0),o=y(e[1],!0),r=y(e[2],!0),a=y(e[3]!=null?e[3]:255,!0);if(t!=-1&&o!=-1&&r!=-1&&a!=-1)return[t,o,r,a]}}function ce(e){if(typeof e=="number"&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}function de(e){if(e.substr(0,4)=="rgb("){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=y(t[0],!0),r=y(t[1],!0),a=y(t[2],!0);if(o!=-1&&r!=-1&&a!=-1)return[o,r,a,255]}}function ue(e){if(e.substr(0,5)=="rgba("){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=y(t[0],!0),r=y(t[1],!0),a=y(t[2],!0),i=y(255*t[3]);if(o!=-1&&r!=-1&&a!=-1&&i!=-1)return[o,r,a,i]}}n.arr=j,n.obj=E,n.css=T,n.hex=s,n.num=b;const he=/\[object Object\]/,R=(e,t)=>{typeof e=="string"&&he.test(e)||t()},F=(e,t)=>{typeof e=="string"&&e===""||t()},pe=(e,t)=>{(0,u.b)()&&(console.log(e,t),(0,m.d)("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},me=e=>{var t,o,r;(t=e.nextHooks)===null||t===void 0||t.forEach((a,i)=>{var c;const O=a.get("beforePatch");typeof O=="function"&&O((c=e.nextState)===null||c===void 0?void 0:c.get(i),e.nextState,e,i)}),((o=e.nextState)===null||o===void 0?void 0:o.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,(r=e.nextHooks)===null||r===void 0||r.forEach((a,i)=>{const c=a.get("afterPatch");typeof c=="function"&&c(e.state[i],e.state,e,i)})),delete e.nextHooks},H=(e,t,o,r={})=>{var a,i;e.nextHooks===void 0&&(e.nextHooks=new Map),e.nextState===void 0&&(e.nextState=new Map),e.nextState.get(t)!==o&&(!(e.nextHooks.get(t)instanceof Map)&&e.nextHooks.set(t,new Map),typeof r.afterPatch=="function"&&((a=e.nextHooks.get(t))===null||a===void 0||a.set("afterPatch",r.afterPatch)),typeof r.beforePatch=="function"&&((i=e.nextHooks.get(t))===null||i===void 0||i.set("beforePatch",r.beforePatch)),e.nextState.set(t,o),me(e))},fe=(e,t,o,r)=>{(0,m.d)(`[${e.constructor.name}] Der Property-Wert (${o}) f\xFCr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(r).join(", ")}`)},P=(e,t,o,r,a,i={})=>{o(a)?H(e,t,a,i==null?void 0:i.hooks):a===void 0||a===null&&((i==null?void 0:i.required)===void 0||(i==null?void 0:i.required)===!1)?H(e,t,i==null?void 0:i.defaultValue,i==null?void 0:i.hooks):((i==null?void 0:i.required)!==void 0&&(i==null?void 0:i.required)!==!1||r.add(null),fe(e,t,a,r))},ge=(e,t,o,r)=>{P(e,t,a=>typeof a=="boolean",new Set(["Boolean {true, false}"]),o,r)},be=(e,t,o,r={})=>{const a=typeof r.minLength=="number"?r==null?void 0:r.minLength:0;P(e,t,i=>typeof i=="string"&&i.length>=a,new Set([`String (Mindestl\xE4nge ${a})`]),o,r)},we=(e,t,o,r)=>{P(e,t,a=>typeof a=="number"&&((r==null?void 0:r.min)===void 0||typeof(r==null?void 0:r.min)=="number"&&a>=r.min)&&((r==null?void 0:r.max)===void 0||typeof(r==null?void 0:r.max)=="number"&&a<=r.max),new Set(["Number"]),o,r)},ve=(e,t,o,r,a=c=>c==c,i={})=>{F(r,()=>{R(r,()=>{r===void 0&&(r=[]);try{try{r=W(r)}catch(c){}if(Array.isArray(r)){const c=r.find(O=>!o(O));c===void 0&&a(r)?H(e,t,r,i.hooks):R(c,()=>{throw console.log(c),new Error("\u2191 Das Schema f\xFCr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xE4ndert.")})}else R(r,()=>{throw console.log(r),new Error("\u2191 Das Schema f\xFCr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xE4ndert.")})}catch(c){(0,m.d)("Known bug: Zeichenkettenliste (string[])")}})})},ye=/^(true|false)$/,xe=/^-?(0|[1-9]\d*)$/,_e=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,ke=e=>{const t=typeof e,o=`${e}`;if(typeof e=="string"){if(ye.test(e))e=e==="true";else if(xe.test(e))e=parseInt(e);else if(_e.test(e))e=parseFloat(e);else if(q.test(e))try{e=W(e)}catch(r){}}return t!==typeof e&&(0,m.d)(`You have used a stringified property value (${o} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},X=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw u.L.warn(["stringifyJson",e]),u.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},q=/^[{[]/,W=e=>{if(typeof e=="string")try{return JSON.parse(e)}catch(t){if(q.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(o){u.L.warn(["parseJson",e]),u.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xFChrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},U=e=>typeof e=="boolean"?e===!0?"true":"false":void 0,Se=e=>typeof e=="string"?e:U(e),Y=(e,t)=>l(e,t||(0,u.g)()),Z=(e,t)=>p(e,t||(0,u.g)());let J=null;const K=()=>(J=J||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,u.g)().body,level:"Fail",score:1},J),V=/(\d+, ){3}0\)/,I=(e,t=K())=>{const o=getComputedStyle(e),r=V.test(o.backgroundColor)?t.backgroundColor:n.hex(o.backgroundColor),a=V.test(o.color)?t.color:n.hex(o.color),i=(0,g.s)(r,a),c={backgroundColor:r,color:a,domNode:e,level:(0,g.f)(i),score:i};return i<4.5&&u.L.error(["Color-Contrast-Error",{backgroundColor:c.backgroundColor,color:c.color,level:c.level,score:c.score},c.domNode]),c},G=(e,t=K())=>{t.domNode instanceof HTMLElement&&(t=I(t.domNode,t));const o=t.domNode.querySelector(e);if(o===null){const r=t.domNode.querySelectorAll('[class="hydrated"]');for(let a=0;a<r.length&&(t.domNode=r[a],(t=G(e,t)).domNode===null);a++);return t}return I(o,t)},Q=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,u.a)().pageYOffset-50}),e.focus()):(0,m.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},ee=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&typeof t=="string"){(0,m.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const o=`${t}`;t=e,e=o}if(typeof e=="string"){const o=Y(e,t);o instanceof HTMLElement?Q(o):(0,m.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,m.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class x{static queryHtmlElementColors(t,o,r=!1,a=!0){let i=null;if(r===!0||x.executionLock===!1)if(r===!1&&(x.cache.clear(),x.cache.set(o.domNode,o),x.executionLock=!0,a===!0&&u.L.debug("[KoliBriUtils] Color contrast analysis started...")),t===o.domNode)i=o;else{const c=new Set;if(o.domNode.shadowRoot){const v=o.domNode.shadowRoot.children;for(let _=0;_<v.length;_++)c.add(v[_])}const O=o.domNode;if(typeof O.assignedNodes=="function"){const v=O.assignedNodes();for(let _=0;_<v.length;_++)v[_]instanceof HTMLElement&&c.add(v[_])}const te=o.domNode.children;for(let v=0;v<te.length;v++)c.add(te[v]);const $=Array.from(c);for(let v=0;v<$.length;v++){let _=x.cache.get($[v]);_===void 0&&(_=I($[v],o)),x.cache.set($[v],_);const re=x.queryHtmlElementColors(t,_,!0,!1);if(re!==null){i=re;break}}}else u.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return r===!1&&(a===!0&&u.L.debug(`[KoliBriUtils] Color contrast analysis finished (${x.cache.size} DOM elements are analysed).`),x.executionLock=!1,x.cache.clear()),i}}x.executionLock=!1,x.cache=new Map;class D{}D.patchTheme=w.p,D.patchThemeTag=w.a,D.querySelector=Y,D.querySelectorAll=Z,D.scrollByHTMLElement=Q,D.scrollBySelector=ee,D.stringifyJson=X},"./node_modules/@public-ui/components/dist/esm/reuse-f9be4952.js":(N,k,f)=>{f.d(k,{p:()=>m});var g=f("./node_modules/@public-ui/components/dist/esm/validator-8ee8737c.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const m=(u,w)=>{(0,g.i)(u)&&u&&(u.focus=h=>w==null?void 0:w.focus(h))}},"./node_modules/@public-ui/components/dist/esm/validator-8ee8737c.js":(N,k,f)=>{f.d(k,{S:()=>p,a:()=>m,b:()=>u,c:()=>h,i:()=>g});/*!
 * KoliBri - The accessible HTML-Standard
 */const g=l=>typeof l=="object"&&l!==null,m=(l,n=0)=>typeof l=="string"&&l.length>=n,u=l=>{if(typeof l!="object"||l===null)return m(l,1);for(const n in l)if(m(n,1)===!1)return!1;return!0},w=(l,n)=>n.length===0&&new RegExp(`^${l}`).test(n),h=(l,n)=>n.length===0||w(l,n),p=new Event("StateChange")}}]);