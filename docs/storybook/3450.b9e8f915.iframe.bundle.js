"use strict";(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[3450],{"./node_modules/@public-ui/components/dist/esm/a11y.tipps-ff5a1a99.js":(z,E,h)=>{h.d(E,{a:()=>g,b:()=>w,c:()=>i,d:()=>u,e:()=>d,f:()=>O,u:()=>_});var c=h("./node_modules/@public-ui/components/dist/esm/dev.utils-daaf2f39.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const f=new Set,d=s=>{f.has(s)===!1&&(f.add(s),c.L.info(s,{classifier:"\u270Ba11y",overwriteStyle:"; background-color: #09f"}))},y=new Set,w=s=>{y.has(s)===!1&&(y.add(s),c.L.warn(s,{classifier:"\u{1F525}deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},S=new Set,u=s=>{S.has(s)===!1&&(S.add(s),c.L.debug(s,{classifier:"\u{1F4BB}dev",overwriteStyle:"; background-color: #f09"}))},p=new Set,O=(s,C=!1)=>{p.has(s)===!1&&(p.add(s),s+=C===!0?" \u2705":"",c.L.debug(s,{classifier:"\u{1F31F}feature",overwriteStyle:"; background-color: #309"}))};u("Wir freuen uns \xFCber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const x=new Set,T=s=>{x.has(s)===!1&&(x.add(s),Log.debug(s,{classifier:"\u{1F4D1}ui/ux",overwriteStyle:"; background-color: #060;"}))},i=()=>{d(`"Disabled" schr\xE4nkt die Zug\xE4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.
- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae`)},g=s=>{typeof s=="string"&&s!==""||d(`Manche Strukturelemente, wie bspw. der nav-Tag, k\xF6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xF6nnen, ist es erforderlich ein Aria-Label zu setzen.
- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns`)},_=(s,C=8)=>{var A;C>7&&(A=`[${s}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xFCpunkte zu verwenden.

Links:
- https://de.ryte.com/wiki/Millersche_Zahl
- https://de.wikipedia.org/wiki/Millersche_Zahl`,x.has(A)===!1&&(x.add(A),c.L.debug(A,{classifier:"\u{1F4D1}ui/ux",overwriteStyle:"; background-color: #060;"})))}},"./node_modules/@public-ui/components/dist/esm/index.m-86dc8c44.js":(z,E,h)=>{h.d(E,{f:()=>T,s:()=>x});/*!
 * KoliBri - The accessible HTML-Standard
 */var c=.2126,f=.7152,d=.0722,y=1/12.92;function w(i){return Math.pow((i+.055)/1.055,2.4)}function S(i){var g=i[0]/255,_=i[1]/255,s=i[2]/255,C=g<=.03928?g*y:w(g),A=_<=.03928?_*y:w(_),W=s<=.03928?s*y:w(s);return C*c+A*f+W*d}function u(i){var g=255;(i=i.replace(/^#/,"")).length===8&&(g=parseInt(i.slice(6,8),16),i=i.substring(0,6)),i.length===4&&(g=parseInt(i.slice(3,4).repeat(2),16),i=i.substring(0,3)),i.length===3&&(i=i[0]+i[0]+i[1]+i[1]+i[2]+i[2]);var _=parseInt(i,16);return[_>>16,_>>8&255,255&_,g]}function p(i,g){return(Math.max(i,g)+.05)/(Math.min(i,g)+.05)}function O(i,g){return p(S(i),S(g))}function x(i,g){return O(u(i),u(g))}function T(i){return i>=7?"AAA":i>=4.5?"AA":i>=3?"AA Large":"Fail"}},"./node_modules/@public-ui/components/dist/esm/kol-accordion.entry.js":(z,E,h)=>{h.r(E),h.d(E,{kol_accordion:()=>S});var c=h("./node_modules/@public-ui/components/dist/esm/index-a398b9f4.js"),f=h("./node_modules/@public-ui/components/dist/esm/a11y.tipps-ff5a1a99.js"),d=h("./node_modules/@public-ui/components/dist/esm/prop.validators-4cac744a.js"),y=h("./node_modules/@public-ui/components/dist/esm/validation-b0cccd61.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const w=`*,::before,::after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--kolibri-border-color)}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:var(--kolibri-color);--tw-ring-color:rgba(undefined, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}::moz-focus-inner{border-style:none;padding:0}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type='search']{-webkit-appearance:textfield;outline-offset:-2px}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}b,strong{font-weight:bolder}button,select{text-transform:none}button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button}button{background-color:transparent;background-image:none}button,[role="button"]{cursor:pointer}code{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}fieldset{margin:0;padding:0}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}h1,p,h2,h3,h4,h5,h6{margin:0}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}input,button,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;padding:0;line-height:inherit;color:inherit}input::placeholder{opacity:1;color:#9ca3af}input::webkit-input-placeholder{opacity:1;color:#9ca3af}input::-moz-placeholder{opacity:1;color:#9ca3af}input:-ms-input-placeholder{opacity:1;color:#9ca3af}input::-ms-input-placeholder{opacity:1;color:#9ca3af}legend{padding:0}progress{vertical-align:baseline}small{font-size:80%}svg{display:block;vertical-align:middle}table{text-indent:0;border-color:inherit;border-collapse:collapse}textarea{resize:vertical}textarea::placeholder{opacity:1;color:#9ca3af}textarea::webkit-input-placeholder{opacity:1;color:#9ca3af}textarea::-moz-placeholder{opacity:1;color:#9ca3af}textarea:-ms-input-placeholder{opacity:1;color:#9ca3af}textarea::-ms-input-placeholder{opacity:1;color:#9ca3af}ul,ol{list-style:none;margin:0;padding:0}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.bg-normal{background-color:var(--kolibri-color-normal)}.bg-white{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}.bg-spin-1{background-color:var(--kolibri-color-spin-1)}.bg-spin-2{background-color:var(--kolibri-color-spin-2)}.bg-spin-3{background-color:var(--kolibri-color-spin-3)}.rounded{border-radius:var(--kolibri-border-radius)}.border-1{border-width:1px}.cursor-pointer{cursor:pointer}.block{display:block}.inline-block{display:inline-block}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.inline-flex{display:-webkit-inline-box;display:-ms-inline-flexbox;display:-webkit-inline-flex;display:inline-flex}.table{display:table}.grid{display:-ms-grid;display:grid}.hidden{display:none}.flex-wrap{-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap}.items-center{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.content-center{-ms-flex-line-pack:center;-webkit-align-content:center;align-content:center}.font-80{font-weight:80}.font-60{font-weight:60}.h-full{height:100%}.h-0{height:0px}.h-0\\.41c-2\\.42\\2c 0-4\\.82-1\\.57-4\\.82-3\\.58c0\\.05-0\\.98\\2c 0\\.43-1\\.91\\2c 1\\.07-2\\.65c0\\.3\\2c 0\\.05\\2c 0\\.61\\2c 0\\.09\\2c 0\\.92\\2c 0\\.09c1\\.1\\2c 0\\2c 1\\.69-0\\.58\\2c 1\\.74-1\\.16{height:0.29rem}.text-sm{font-size:0.875rem;line-height:1.25rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.leading-normal{line-height:1.5}.list-none{list-style-type:none}.list-disc{list-style-type:disc}.list-decimal{list-style-type:decimal}.mx-auto{margin-left:auto;margin-right:auto}.mb-1{margin-bottom:calc(1 * var(--kolibri-spacing))}.mt-2{margin-top:calc(2 * var(--kolibri-spacing))}.mt-4{margin-top:calc(4 * var(--kolibri-spacing))}.mr-2{margin-right:calc(2 * var(--kolibri-spacing))}.ml-2{margin-left:calc(2 * var(--kolibri-spacing))}.outline{outline-style:solid}.overflow-hidden{overflow:hidden}.overflow-y-visible{overflow-y:visible}.p-2{padding:calc(2 * var(--kolibri-spacing))}.p-4{padding:calc(4 * var(--kolibri-spacing))}.px{padding-left:1px;padding-right:1px}.py-2{padding-top:calc(2 * var(--kolibri-spacing));padding-bottom:calc(2 * var(--kolibri-spacing))}.pl-8{padding-left:2rem}.pb-2{padding-bottom:calc(2 * var(--kolibri-spacing))}.tab{-moz-tab-size:4;-o-tab-size:4;tab-size:4}.absolute{position:absolute}.text-center{text-align:center}.hover\\:text-primary:hover{color:var(--kolibri-color-primary)}.text-normal{color:var(--kolibri-color-normal)}.italic{font-style:italic}.underline{-webkit-text-decoration-line:underline;text-decoration-line:underline}.indent{text-indent:1.5rem}.visible{visibility:visible}.w-full{width:100%}.w-4\\/5{width:80%}.z-50{z-index:50}.gap-1{grid-gap:calc(1 * var(--kolibri-spacing));gap:calc(1 * var(--kolibri-spacing))}.gap-2{grid-gap:calc(2 * var(--kolibri-spacing));gap:calc(2 * var(--kolibri-spacing))}.grid-flow-col{grid-auto-flow:column}.transform{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z))}.animate{-webkit-animation-iteration-count:1;animation-iteration-count:1}.filter{--tw-blur:var(--tw-empty, );--tw-brightness:var(--tw-empty, );--tw-contrast:var(--tw-empty, );--tw-grayscale:var(--tw-empty, );--tw-hue-rotate:var(--tw-empty, );--tw-invert:var(--tw-empty, );--tw-saturate:var(--tw-empty, );--tw-sepia:var(--tw-empty, );--tw-drop-shadow:var(--tw-empty, );-webkit-filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.blur{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}:host *{-ms-hyphens:var(--kolibri-hyphens);-webkit-hyphens:var(--kolibri-hyphens);hyphens:var(--kolibri-hyphens);font-family:var(--kolibri-font-family);line-height:var(--kolibri-line-height);word-break:break-word}`;(0,f.f)(`[KolAccordion] Anfrage nach einer KolAccordionGroup bei dem immer nur ein Accordion ge\xF6ffnet ist.

- onClick auf der KolAccordion anwenden
- Click-Event pr\xFCft den _open-Status der Accordions
- Logik \xD6ffnet und Schlie\xDFt entsprechend`),(0,f.f)("[KolAccordion] Tab-Sperre des Inhalts im geschlossenen Zustand.");const S=class{constructor(u){(0,c.r)(this,u),this.catchAriaExpanded=p=>{p instanceof HTMLButtonElement&&(this.buttonRef=p)},this.triggerAriaExpanded=p=>{p.setAttribute("aria-expanded",this.state._open?"true":"false")},this.onClick=p=>{this._open=this._open===!1;const O=setTimeout(()=>{var x;clearTimeout(O),typeof((x=this.state._on)===null||x===void 0?void 0:x.onClick)=="function"&&this.state._on.onClick(p,this._open===!0),this.buttonRef instanceof HTMLButtonElement&&this.triggerAriaExpanded(this.buttonRef)})},this._heading=void 0,this._level=1,this._on=void 0,this._open=!1,this.state={_heading:"\u26A0",_level:1}}render(){return(0,c.h)(c.H,null,(0,c.h)("div",{part:"accordion "+(this.state._open?"open":"close")},(0,c.h)("kol-heading-wc",{_level:this.state._level},(0,c.h)("button",{ref:this.catchAriaExpanded,onClick:this.onClick},(0,c.h)("kol-icon",{_ariaLabel:"",_icon:this.state._open?"fa-solid fa-minus":"fa-solid fa-plus",_part:this.state._open?"close":"open"}),(0,c.h)("span",null,this.state._heading))),(0,c.h)("div",{part:"header"},(0,c.h)("slot",{name:"header"})),(0,c.h)("div",{part:"content",style:this.state._open===!1?{display:"none",height:"0",visibility:"hidden"}:void 0},(0,c.h)("slot",{name:"content"}))))}validateHeading(u){(0,d.w)(this,"_heading",u,{required:!0})}validateLevel(u){(0,y.w)(this,u)}validateOn(u){typeof u=="object"&&u!==null&&typeof u.onClick=="function"&&(0,d.s)(this,"_on",u)}validateOpen(u){(0,d.b)(this,"_open",u)}componentWillLoad(){this.validateHeading(this._heading),this.validateLevel(this._level),this.validateOn(this._on),this.validateOpen(this._open)}static get watchers(){return{_heading:["validateHeading"],_level:["validateLevel"],_on:["validateOn"],_open:["validateOpen"]}}};S.style={default:w}},"./node_modules/@public-ui/components/dist/esm/prop.validators-4cac744a.js":(z,E,h)=>{h.d(E,{K:()=>M,a:()=>R,b:()=>me,c:()=>ve,d:()=>we,e:()=>pe,f:()=>K,g:()=>X,h:()=>ee,i:()=>Se,j:()=>v,k:()=>J,l:()=>B,m:()=>_e,n:()=>q,o:()=>D,p:()=>$,q:()=>G,r:()=>p,s:()=>P,t:()=>Y,w:()=>be});var c=h("./node_modules/@public-ui/components/dist/esm/index.m-86dc8c44.js"),f=h("./node_modules/@public-ui/components/dist/esm/a11y.tipps-ff5a1a99.js"),d=h("./node_modules/@public-ui/components/dist/esm/dev.utils-daaf2f39.js"),y=h("./node_modules/@public-ui/components/dist/esm/index-d870d3e1.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const w=(e,t)=>{t.forEach(o=>{e.has(o)===!1&&e.add(o)})},S=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const o=new Set;w(o,t.querySelectorAll(e));const r=t.querySelectorAll('[class*="hydrated"]');for(let n=0;n<r.length;n++){const a=r[n].shadowRoot;w(o,S(e,typeof a=="object"&&a!==null?a:r[n]))}return Array.from(o)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},u=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let o=t.querySelector(e);if(o===null){const r=t.querySelectorAll('[class*="hydrated"]');for(let n=0;n<r.length;n++){const a=r[n].shadowRoot;if(o=u(e,typeof a=="object"&&a!==null?a:r[n]),o!==null)break}}return o}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var p=_,O=_,x=s,T=C,i=A,g=W;function _(e){var t=j(e);return t.length==3?t.concat(255):(t[3]=Math.round(t[3]),t)}function s(e){var t=j(e);return{r:t[0],g:t[1],b:t[2],a:t.length==3?255:Math.round(t[3])}}function C(e){var t=j(e);return t.length==3&&t.push(255),t[3]==255?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":t[3]==0?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"}function A(e){(t=j(e)).length==3&&t.push(255);var t,o=t[3]==255,r=H(t[0]),n=H(t[1]),a=H(t[2]),l=oe(r,n,a,t=H(Math.round(t[3])));return o?l?"#"+r.charAt(0)+n.charAt(0)+a.charAt(0):"#"+r+n+a:l?"#"+r.charAt(0)+n.charAt(0)+a.charAt(0)+t.charAt(0):"#"+r+n+a+t}function W(e){var t=j(e);return t.length==3?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0}function j(e){return typeof e=="string"?ne(e=e.toLowerCase())||ae(e)||ie(e)||de(e)||ue(e)||[0,0,0,255]:le(e)||se(e)||ce(e)||[0,0,0,255]}function H(e){var t=e.toString(16);return t.length==1?"0"+t:t}function oe(e,t,o,r){var n=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return n.indexOf(e)!=-1&&n.indexOf(t)!=-1&&n.indexOf(o)!=-1&&n.indexOf(r)!=-1}function ne(e){return e=="red"?[255,0,0]:e=="green"?[0,255,0]:e=="blue"?[0,0,255]:e=="black"?[0,0,0]:e=="white"?[255,255,255]:e=="cyan"?[0,255,255]:e=="gray"||e=="grey"?[128,128,128]:e=="magenta"||e=="pink"?[255,0,255]:e=="yellow"?[255,255,0]:void 0}function L(e){return e.length==1?parseInt(e+e,16):parseInt(e,16)}function ae(e){var t=e.replace(/^#/,""),o=t.length;if(o==3||o==4){var r=L(t[0]),n=L(t[1]),a=L(t[2]),l=o==3?255:L(t[3]);return isNaN(r)||isNaN(n)||isNaN(a)||isNaN(l)?void 0:[r,n,a,l]}}function ie(e){var t=e.replace(/^#/,""),o=t.length;if(o==6||o==8){var r=L(t.slice(0,2)),n=L(t.slice(2,4)),a=L(t.slice(4,6)),l=o==6?255:L(t.slice(6,8));return isNaN(r)||isNaN(n)||isNaN(a)||isNaN(l)?void 0:[r,n,a,l]}}function b(e,t){return typeof e!="number"||t===!0&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}function le(e){if(Object.prototype.toString.call(e)==="[object Object]"&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=b(e.r!=null?e.r:e.red!=null?e.red:0,!0),o=b(e.g!=null?e.g:e.green!=null?e.green:0,!0),r=b(e.b!=null?e.b:e.blue!=null?e.blue:0,!0),n=b(e.a!=null?e.a:e.alpha!=null?e.alpha:255,!0);if(t!=-1&&o!=-1&&r!=-1&&n!=-1)return[t,o,r,n]}}function se(e){if(Array.isArray(e)&&(e.length==3||e.length==4)){var t=b(e[0],!0),o=b(e[1],!0),r=b(e[2],!0),n=b(e[3]!=null?e[3]:255,!0);if(t!=-1&&o!=-1&&r!=-1&&n!=-1)return[t,o,r,n]}}function ce(e){if(typeof e=="number"&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}function de(e){if(e.substr(0,4)=="rgb("){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=b(t[0],!0),r=b(t[1],!0),n=b(t[2],!0);if(o!=-1&&r!=-1&&n!=-1)return[o,r,n,255]}}function ue(e){if(e.substr(0,5)=="rgba("){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=b(t[0],!0),r=b(t[1],!0),n=b(t[2],!0),a=b(255*t[3]);if(o!=-1&&r!=-1&&n!=-1&&a!=-1)return[o,r,n,a]}}p.arr=O,p.obj=x,p.css=T,p.hex=i,p.num=g;const he=/\[object Object\]/,D=(e,t)=>{typeof e=="string"&&he.test(e)||t()},K=(e,t)=>{typeof e=="string"&&e===""||t()},pe=(e,t)=>{(0,d.b)()&&(console.log(e,t),(0,f.d)("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},fe=e=>{var t,o,r;(t=e.nextHooks)===null||t===void 0||t.forEach((n,a)=>{var l;const N=n.get("beforePatch");typeof N=="function"&&N((l=e.nextState)===null||l===void 0?void 0:l.get(a),e.nextState,e,a)}),((o=e.nextState)===null||o===void 0?void 0:o.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,(r=e.nextHooks)===null||r===void 0||r.forEach((n,a)=>{const l=n.get("afterPatch");typeof l=="function"&&l(e.state[a],e.state,e,a)})),delete e.nextHooks},P=(e,t,o,r={})=>{var n,a;e.nextHooks===void 0&&(e.nextHooks=new Map),e.nextState===void 0&&(e.nextState=new Map),e.nextState.get(t)!==o&&(!(e.nextHooks.get(t)instanceof Map)&&e.nextHooks.set(t,new Map),typeof r.afterPatch=="function"&&((n=e.nextHooks.get(t))===null||n===void 0||n.set("afterPatch",r.afterPatch)),typeof r.beforePatch=="function"&&((a=e.nextHooks.get(t))===null||a===void 0||a.set("beforePatch",r.beforePatch)),e.nextState.set(t,o),fe(e))},ge=(e,t,o,r)=>{(0,f.d)(`[${e.constructor.name}] Der Property-Wert (${o}) f\xFCr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(r).join(", ")}`)},R=(e,t,o,r,n,a={})=>{o(n)?P(e,t,n,a==null?void 0:a.hooks):n===void 0||n===null&&((a==null?void 0:a.required)===void 0||(a==null?void 0:a.required)===!1)?P(e,t,a==null?void 0:a.defaultValue,a==null?void 0:a.hooks):((a==null?void 0:a.required)!==void 0&&(a==null?void 0:a.required)!==!1||r.add(null),ge(e,t,n,r))},me=(e,t,o,r)=>{R(e,t,n=>typeof n=="boolean",new Set(["Boolean {true, false}"]),o,r)},be=(e,t,o,r={})=>{const n=typeof r.minLength=="number"?r==null?void 0:r.minLength:0;R(e,t,a=>typeof a=="string"&&a.length>=n,new Set([`String (Mindestl\xE4nge ${n})`]),o,r)},we=(e,t,o,r)=>{R(e,t,n=>typeof n=="number"&&((r==null?void 0:r.min)===void 0||typeof(r==null?void 0:r.min)=="number"&&n>=r.min)&&((r==null?void 0:r.max)===void 0||typeof(r==null?void 0:r.max)=="number"&&n<=r.max),new Set(["Number"]),o,r)},ve=(e,t,o,r,n=l=>l==l,a={})=>{K(r,()=>{D(r,()=>{r===void 0&&(r=[]);try{try{r=$(r)}catch(l){}if(Array.isArray(r)){const l=r.find(N=>!o(N));l===void 0&&n(r)?P(e,t,r,a.hooks):D(l,()=>{throw console.log(l),new Error("\u2191 Das Schema f\xFCr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xE4ndert.")})}else D(r,()=>{throw console.log(r),new Error("\u2191 Das Schema f\xFCr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xE4ndert.")})}catch(l){(0,f.d)("Known bug: Zeichenkettenliste (string[])")}})})},ye=/^(true|false)$/,ke=/^-?(0|[1-9]\d*)$/,xe=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,_e=e=>{const t=typeof e,o=`${e}`;if(typeof e=="string"){if(ye.test(e))e=e==="true";else if(ke.test(e))e=parseInt(e);else if(xe.test(e))e=parseFloat(e);else if(U.test(e))try{e=$(e)}catch(r){}}return t!==typeof e&&(0,f.d)(`You have used a stringified property value (${o} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},Y=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw d.L.warn(["stringifyJson",e]),d.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},U=/^[{[]/,$=e=>{if(typeof e=="string")try{return JSON.parse(e)}catch(t){if(U.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(o){d.L.warn(["parseJson",e]),d.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xFChrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},X=e=>typeof e=="boolean"?e===!0?"true":"false":void 0,Se=e=>typeof e=="string"?e:X(e),J=(e,t)=>u(e,t||(0,d.g)()),q=(e,t)=>S(e,t||(0,d.g)());let Z=null;const F=()=>(Z=Z||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,d.g)().body,level:"Fail",score:1},Z),V=/(\d+, ){3}0\)/,B=(e,t=F())=>{const o=getComputedStyle(e),r=V.test(o.backgroundColor)?t.backgroundColor:p.hex(o.backgroundColor),n=V.test(o.color)?t.color:p.hex(o.color),a=(0,c.s)(r,n),l={backgroundColor:r,color:n,domNode:e,level:(0,c.f)(a),score:a};return a<4.5&&d.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},G=(e,t=F())=>{t.domNode instanceof HTMLElement&&(t=B(t.domNode,t));const o=t.domNode.querySelector(e);if(o===null){const r=t.domNode.querySelectorAll('[class="hydrated"]');for(let n=0;n<r.length&&(t.domNode=r[n],(t=G(e,t)).domNode===null);n++);return t}return B(o,t)},Q=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,d.a)().pageYOffset-50}),e.focus()):(0,f.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},ee=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&typeof t=="string"){(0,f.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const o=`${t}`;t=e,e=o}if(typeof e=="string"){const o=J(e,t);o instanceof HTMLElement?Q(o):(0,f.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,f.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class v{static queryHtmlElementColors(t,o,r=!1,n=!0){let a=null;if(r===!0||v.executionLock===!1)if(r===!1&&(v.cache.clear(),v.cache.set(o.domNode,o),v.executionLock=!0,n===!0&&d.L.debug("[KoliBriUtils] Color contrast analysis started...")),t===o.domNode)a=o;else{const l=new Set;if(o.domNode.shadowRoot){const m=o.domNode.shadowRoot.children;for(let k=0;k<m.length;k++)l.add(m[k])}const N=o.domNode;if(typeof N.assignedNodes=="function"){const m=N.assignedNodes();for(let k=0;k<m.length;k++)m[k]instanceof HTMLElement&&l.add(m[k])}const te=o.domNode.children;for(let m=0;m<te.length;m++)l.add(te[m]);const I=Array.from(l);for(let m=0;m<I.length;m++){let k=v.cache.get(I[m]);k===void 0&&(k=B(I[m],o)),v.cache.set(I[m],k);const re=v.queryHtmlElementColors(t,k,!0,!1);if(re!==null){a=re;break}}}else d.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return r===!1&&(n===!0&&d.L.debug(`[KoliBriUtils] Color contrast analysis finished (${v.cache.size} DOM elements are analysed).`),v.executionLock=!1,v.cache.clear()),a}}v.executionLock=!1,v.cache=new Map;class M{}M.patchTheme=y.p,M.patchThemeTag=y.a,M.querySelector=J,M.querySelectorAll=q,M.scrollByHTMLElement=Q,M.scrollBySelector=ee,M.stringifyJson=Y},"./node_modules/@public-ui/components/dist/esm/validation-b0cccd61.js":(z,E,h)=>{h.d(E,{w:()=>f});var c=h("./node_modules/@public-ui/components/dist/esm/prop.validators-4cac744a.js");/*!
 * KoliBri - The accessible HTML-Standard
 */const f=(d,y)=>{(0,c.a)(d,"_level",w=>typeof w=="number"&&1<=w&&w<=6,new Set(["Number {1, 2, 3, 4, 5, 6}"]),y,{defaultValue:1,required:!0})}}}]);