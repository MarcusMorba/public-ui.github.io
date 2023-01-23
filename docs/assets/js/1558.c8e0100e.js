/*! For license information please see 1558.c8e0100e.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_website=self.webpackChunk_public_ui_website||[]).push([[1558],{5149:(e,t,r)=>{r.d(t,{a:()=>g,b:()=>l,c:()=>p,d:()=>c,e:()=>a,f:()=>u,u:()=>f});var o=r(7738);const i=new Set,a=e=>{!1===i.has(e)&&(i.add(e),o.L.info(e,{classifier:"\u270ba11y",overwriteStyle:"; background-color: #09f"}))},n=new Set,l=e=>{!1===n.has(e)&&(n.add(e),o.L.warn(e,{classifier:"\ud83d\udd25deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},s=new Set,c=e=>{!1===s.has(e)&&(s.add(e),o.L.debug(e,{classifier:"\ud83d\udcbbdev",overwriteStyle:"; background-color: #f09"}))},d=new Set,u=(e,t=!1)=>{!1===d.has(e)&&(d.add(e),e+=!0===t?" \u2705":"",o.L.debug(e,{classifier:"\ud83c\udf1ffeature",overwriteStyle:"; background-color: #309"}))};c("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const h=new Set,p=()=>{a('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},g=e=>{"string"==typeof e&&""!==e||a("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},f=(e,t=8)=>{var r;t>7&&(r=`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`,!1===h.has(r)&&(h.add(r),o.L.debug(r,{classifier:"\ud83d\udcd1ui/ux",overwriteStyle:"; background-color: #060;"})))}},4340:(e,t,r)=>{r.d(t,{f:()=>c,s:()=>s});var o=1/12.92;function i(e){return Math.pow((e+.055)/1.055,2.4)}function a(e){var t=e[0]/255,r=e[1]/255,a=e[2]/255;return.2126*(t<=.03928?t*o:i(t))+.7152*(r<=.03928?r*o:i(r))+.0722*(a<=.03928?a*o:i(a))}function n(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var r=parseInt(e,16);return[r>>16,r>>8&255,255&r,t]}function l(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(a(e),a(t))}function s(e,t){return l(n(e),n(t))}function c(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}},1558:(e,t,r)=>{r.r(t),r.d(t,{kol_input_date:()=>n});var o=r(3701),i=r(6645),a=r(9571);const n=class{constructor(e){(0,o.r)(this,e),this.catchRef=e=>{this.ref=e,(0,a.p)(this.host,this.ref)},this._accessKey=void 0,this._alert=!0,this._autoComplete=void 0,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._icon=void 0,this._id=void 0,this._list=void 0,this._max=void 0,this._min=void 0,this._name=void 0,this._on=void 0,this._readOnly=void 0,this._required=void 0,this._smartButton=void 0,this._step=void 0,this._tabIndex=void 0,this._touched=!1,this._type="date",this._value=void 0,this.state={}}render(){return(0,o.h)(o.H,null,(0,o.h)("kol-input-number",{ref:this.catchRef,_accessKey:this._accessKey,_alert:this._alert,_autoComplete:this._autoComplete,_disabled:this._disabled,_error:this._error,_hideLabel:this._hideLabel,_hint:this._hint,_icon:this._icon,_id:this._id,_list:this._list,_max:this.state._max,_min:this.state._min,_name:this._name,_on:this._on,_readOnly:this._readOnly,_required:this._required,_smartButton:this._smartButton,_step:this._step,_tabIndex:this._tabIndex,_touched:this._touched,_type:this._type,_value:this.state._value},(0,o.h)("slot",null)))}valueAsIsoDate(e,t){const r=null!=e?e:t;if("string"==typeof r)return r;if("object"==typeof r&&r instanceof Date)switch(this._type){case"date":return`${r.getFullYear()}-${r.getMonth()+1}-${r.getDate()}`;case"datetime-local":return`${r.getFullYear()}-${r.getMonth()+1}-${r.getDate()}T${r.getHours()}:${r.getMinutes()}:${r.getSeconds()}`;case"month":return`${r.getFullYear()}-${r.getMonth()+1}`;case"time":return`${r.getHours()}:${r.getMinutes()}:${r.getSeconds()}`;case"week":throw new Error("Auto convert to week is not supported!")}}validateDateString(e){switch(this._type){case"date":return n.isoDateRegex.test(e);case"datetime-local":return n.isoLocalDateTimeRegex.test(e);case"month":return n.isoMonthRegex.test(e);case"time":return n.isoTimeRegex.test(e);case"week":return n.isoWeekRegex.test(e)}}validateMax(e){(0,i.a)(this,"_max",(e=>void 0===e||this.validateDateString(e)),new Set(["Iso8601","Date"]),this.valueAsIsoDate(e,"date"===this._type||"month"===this._type||"datetime-local"===this._type?n.DEFAULT_MAX_DATE:void 0))}validateMin(e){(0,i.a)(this,"_min",(e=>void 0===e||this.validateDateString(e)),new Set(["Iso8601","Date"]),this.valueAsIsoDate(e))}validateValue(e){(0,i.a)(this,"_value",(e=>void 0===e||this.validateDateString(e)),new Set(["Iso8601","Date"]),this.valueAsIsoDate(e))}componentWillLoad(){this.validateMax(this._max),this.validateMin(this._min),this.validateValue(this._value)}get host(){return(0,o.g)(this)}static get watchers(){return{_max:["validateMax"],_min:["validateMin"],_value:["validateValue"]}}};n.DEFAULT_MAX_DATE=new Date(9999,11,31,23,59,59),n.isoDateRegex=/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])/,n.isoLocalDateTimeRegex=/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])[T ][0-2]\d:[0-5]\d(:[0-5]\d(?:\.\d+)?)?/,n.isoMonthRegex=/^\d{4}-([0]\d|1[0-2])/,n.isoTimeRegex=/^[0-2]\d:[0-5]\d(:[0-5]\d(?:\.\d+)?)?/,n.isoWeekRegex=/^\d{4}-W(?:[0-4]\d|5[0-3])$/,n.style={default:'*,::before,::after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--kolibri-border-color)}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:var(--kolibri-color);--tw-ring-color:rgba(undefined, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}::moz-focus-inner{border-style:none;padding:0}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type=\'search\']{-webkit-appearance:textfield;outline-offset:-2px}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}b,strong{font-weight:bolder}button,select{text-transform:none}button,[type=\'button\'],[type=\'reset\'],[type=\'submit\']{-webkit-appearance:button}button{background-color:transparent;background-image:none}button,[role="button"]{cursor:pointer}code{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}fieldset{margin:0;padding:0}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}h1,p,h2,h3,h4,h5,h6{margin:0}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}input,button,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;padding:0;line-height:inherit;color:inherit}input::placeholder{opacity:1;color:#9ca3af}input::webkit-input-placeholder{opacity:1;color:#9ca3af}input::-moz-placeholder{opacity:1;color:#9ca3af}input:-ms-input-placeholder{opacity:1;color:#9ca3af}input::-ms-input-placeholder{opacity:1;color:#9ca3af}legend{padding:0}progress{vertical-align:baseline}small{font-size:80%}svg{display:block;vertical-align:middle}table{text-indent:0;border-color:inherit;border-collapse:collapse}textarea{resize:vertical}textarea::placeholder{opacity:1;color:#9ca3af}textarea::webkit-input-placeholder{opacity:1;color:#9ca3af}textarea::-moz-placeholder{opacity:1;color:#9ca3af}textarea:-ms-input-placeholder{opacity:1;color:#9ca3af}textarea::-ms-input-placeholder{opacity:1;color:#9ca3af}ul,ol{list-style:none;margin:0;padding:0}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.bg-normal{background-color:var(--kolibri-color-normal)}.bg-white{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}.bg-spin-1{background-color:var(--kolibri-color-spin-1)}.bg-spin-2{background-color:var(--kolibri-color-spin-2)}.bg-spin-3{background-color:var(--kolibri-color-spin-3)}.rounded{border-radius:var(--kolibri-border-radius)}.border-1{border-width:1px}.cursor-pointer{cursor:pointer}.block{display:block}.inline-block{display:inline-block}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.inline-flex{display:-webkit-inline-box;display:-ms-inline-flexbox;display:-webkit-inline-flex;display:inline-flex}.table{display:table}.grid{display:-ms-grid;display:grid}.hidden{display:none}.flex-wrap{-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap}.items-center{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.content-center{-ms-flex-line-pack:center;-webkit-align-content:center;align-content:center}.font-80{font-weight:80}.font-60{font-weight:60}.h-full{height:100%}.h-0{height:0px}.h-0\\.41c-2\\.42\\2c 0-4\\.82-1\\.57-4\\.82-3\\.58c0\\.05-0\\.98\\2c 0\\.43-1\\.91\\2c 1\\.07-2\\.65c0\\.3\\2c 0\\.05\\2c 0\\.61\\2c 0\\.09\\2c 0\\.92\\2c 0\\.09c1\\.1\\2c 0\\2c 1\\.69-0\\.58\\2c 1\\.74-1\\.16{height:0.29rem}.text-sm{font-size:0.875rem;line-height:1.25rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.leading-normal{line-height:1.5}.list-none{list-style-type:none}.list-disc{list-style-type:disc}.list-decimal{list-style-type:decimal}.mx-auto{margin-left:auto;margin-right:auto}.mb-1{margin-bottom:calc(1 * var(--kolibri-spacing))}.mt-2{margin-top:calc(2 * var(--kolibri-spacing))}.mt-4{margin-top:calc(4 * var(--kolibri-spacing))}.mr-2{margin-right:calc(2 * var(--kolibri-spacing))}.ml-2{margin-left:calc(2 * var(--kolibri-spacing))}.outline{outline-style:solid}.overflow-hidden{overflow:hidden}.overflow-y-visible{overflow-y:visible}.p-2{padding:calc(2 * var(--kolibri-spacing))}.p-4{padding:calc(4 * var(--kolibri-spacing))}.px{padding-left:1px;padding-right:1px}.py-2{padding-top:calc(2 * var(--kolibri-spacing));padding-bottom:calc(2 * var(--kolibri-spacing))}.pl-8{padding-left:2rem}.pb-2{padding-bottom:calc(2 * var(--kolibri-spacing))}.tab{-moz-tab-size:4;-o-tab-size:4;tab-size:4}.absolute{position:absolute}.text-center{text-align:center}.hover\\:text-primary:hover{color:var(--kolibri-color-primary)}.text-normal{color:var(--kolibri-color-normal)}.italic{font-style:italic}.underline{-webkit-text-decoration-line:underline;text-decoration-line:underline}.indent{text-indent:1.5rem}.visible{visibility:visible}.w-full{width:100%}.w-4\\/5{width:80%}.z-50{z-index:50}.gap-1{grid-gap:calc(1 * var(--kolibri-spacing));gap:calc(1 * var(--kolibri-spacing))}.gap-2{grid-gap:calc(2 * var(--kolibri-spacing));gap:calc(2 * var(--kolibri-spacing))}.grid-flow-col{grid-auto-flow:column}.transform{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z))}.animate{-webkit-animation-iteration-count:1;animation-iteration-count:1}.filter{--tw-blur:var(--tw-empty, );--tw-brightness:var(--tw-empty, );--tw-contrast:var(--tw-empty, );--tw-grayscale:var(--tw-empty, );--tw-hue-rotate:var(--tw-empty, );--tw-invert:var(--tw-empty, );--tw-saturate:var(--tw-empty, );--tw-sepia:var(--tw-empty, );--tw-drop-shadow:var(--tw-empty, );-webkit-filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.blur{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}:host *{-ms-hyphens:var(--kolibri-hyphens);-webkit-hyphens:var(--kolibri-hyphens);hyphens:var(--kolibri-hyphens);font-family:var(--kolibri-font-family);line-height:var(--kolibri-line-height);word-break:break-word}.kol-required span::after{content:"*"}input,select,textarea{border-color:var(--kolibri-border-color);border-style:solid;border-width:1px}input.error,select.error,textarea.error{border-color:var(--kolibri-border-error)}input:focus,input:hover,select:focus,select:hover,textarea:focus,textarea:hover{border-color:#999}input:not([type=checkbox]),option,select,textarea{font-size:inherit;letter-spacing:inherit;word-spacing:inherit}.kol-disabled{opacity:0.5}.kol-cursor-not-allowed,.kol-cursor-not-allowed *{cursor:not-allowed}input[type=color],input[type=date],input[type=datetime-local],input[type=email],input[type=file],input[type=month],input[type=number],input[type=password],input[type=search],input[type=tel],input[type=text],input[type=time],input[type=url],input[type=week],select,textarea{background-color:white;display:block;line-height:1em;padding:0.5em}input[type=color]{height:2.5em;padding:0.25em 0.5em}textarea{padding:0.5em}'}},6645:(e,t,r)=>{r.d(t,{K:()=>U,a:()=>z,b:()=>A,c:()=>D,d:()=>L,e:()=>S,f:()=>_,g:()=>j,h:()=>J,i:()=>q,j:()=>K,k:()=>I,l:()=>W,m:()=>R,n:()=>P,o:()=>x,p:()=>O,q:()=>Z,r:()=>d,s:()=>M,t:()=>C,w:()=>N});var o=r(4340),i=r(5149),a=r(7738),n=r(4776);const l=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},s=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const r=new Set;l(r,t.querySelectorAll(e));const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const i=o[t].shadowRoot;l(r,s(e,"object"==typeof i&&null!==i?i:o[t]))}return Array.from(r)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},c=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let r=t.querySelector(e);if(null===r){const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const i=o[t].shadowRoot;if(r=c(e,"object"==typeof i&&null!==i?i:o[t]),null!==r)break}}return r}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var d=b,u=b,h=function(e){var t=w(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},p=function(e){var t=w(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},g=function(e){3==(t=w(e)).length&&t.push(255);var t,r=255==t[3],o=m(t[0]),i=m(t[1]),a=m(t[2]),n=function(e,t,r,o){var i=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=i.indexOf(e)&&-1!=i.indexOf(t)&&-1!=i.indexOf(r)&&-1!=i.indexOf(o)}(o,i,a,t=m(Math.round(t[3])));return r?n?"#"+o.charAt(0)+i.charAt(0)+a.charAt(0):"#"+o+i+a:n?"#"+o.charAt(0)+i.charAt(0)+a.charAt(0)+t.charAt(0):"#"+o+i+a+t},f=function(e){var t=w(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function b(e){var t=w(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function w(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),r=t.length;if(3==r||4==r){var o=v(t[0]),i=v(t[1]),a=v(t[2]),n=3==r?255:v(t[3]);if(isNaN(o)||isNaN(i)||isNaN(a)||isNaN(n))return;return[o,i,a,n]}}(e)||function(e){var t=e.replace(/^#/,""),r=t.length;if(6==r||8==r){var o=v(t.slice(0,2)),i=v(t.slice(2,4)),a=v(t.slice(4,6)),n=6==r?255:v(t.slice(6,8));if(isNaN(o)||isNaN(i)||isNaN(a)||isNaN(n))return;return[o,i,a,n]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=y(t[0],!0),o=y(t[1],!0),i=y(t[2],!0);if(-1!=r&&-1!=o&&-1!=i)return[r,o,i,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=y(t[0],!0),o=y(t[1],!0),i=y(t[2],!0),a=y(255*t[3]);if(-1!=r&&-1!=o&&-1!=i&&-1!=a)return[r,o,i,a]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=y(null!=e.r?e.r:null!=e.red?e.red:0,!0),r=y(null!=e.g?e.g:null!=e.green?e.green:0,!0),o=y(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),i=y(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=r&&-1!=o&&-1!=i)return[t,r,o,i]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=y(e[0],!0),r=y(e[1],!0),o=y(e[2],!0),i=y(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=r&&-1!=o&&-1!=i)return[t,r,o,i]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function m(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function v(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function y(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}d.arr=u,d.obj=h,d.css=p,d.hex=g,d.num=f;const k=/\[object Object\]/,x=(e,t)=>{"string"==typeof e&&k.test(e)||t()},_=(e,t)=>{"string"==typeof e&&""===e||t()},S=(e,t)=>{(0,a.b)()&&(console.log(e,t),(0,i.d)("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},M=(e,t,r,o={})=>{var i,a;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==r&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof o.afterPatch&&(null===(i=e.nextHooks.get(t))||void 0===i||i.set("afterPatch",o.afterPatch)),"function"==typeof o.beforePatch&&(null===(a=e.nextHooks.get(t))||void 0===a||a.set("beforePatch",o.beforePatch)),e.nextState.set(t,r),(e=>{var t,r,o;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,r)=>{var o;const i=t.get("beforePatch");"function"==typeof i&&i(null===(o=e.nextState)||void 0===o?void 0:o.get(r),e.nextState,e,r)})),(null===(r=e.nextState)||void 0===r?void 0:r.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(o=e.nextHooks)||void 0===o||o.forEach(((t,r)=>{const o=t.get("afterPatch");"function"==typeof o&&o(e.state[r],e.state,e,r)}))),delete e.nextHooks})(e))},z=(e,t,r,o,a,n={})=>{r(a)?M(e,t,a,null==n?void 0:n.hooks):void 0===a||null===a&&(void 0===(null==n?void 0:n.required)||!1===(null==n?void 0:n.required))?M(e,t,null==n?void 0:n.defaultValue,null==n?void 0:n.hooks):(void 0!==(null==n?void 0:n.required)&&!1!==(null==n?void 0:n.required)||o.add(null),((e,t,r,o)=>{(0,i.d)(`[${e.constructor.name}] Der Property-Wert (${r}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(o).join(", ")}`)})(e,t,a,o))},A=(e,t,r,o)=>{z(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),r,o)},N=(e,t,r,o={})=>{const i="number"==typeof o.minLength?null==o?void 0:o.minLength:0;z(e,t,(e=>"string"==typeof e&&e.length>=i),new Set([`String (Mindestl\xe4nge ${i})`]),r,o)},L=(e,t,r,o)=>{z(e,t,(e=>"number"==typeof e&&(void 0===(null==o?void 0:o.min)||"number"==typeof(null==o?void 0:o.min)&&e>=o.min)&&(void 0===(null==o?void 0:o.max)||"number"==typeof(null==o?void 0:o.max)&&e<=o.max)),new Set(["Number"]),r,o)},D=(e,t,r,o,a=(e=>e==e),n={})=>{_(o,(()=>{x(o,(()=>{void 0===o&&(o=[]);try{try{o=O(o)}catch(e){}if(Array.isArray(o)){const i=o.find((e=>!r(e)));void 0===i&&a(o)?M(e,t,o,n.hooks):x(i,(()=>{throw console.log(i),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else x(o,(()=>{throw console.log(o),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){(0,i.d)("Known bug: Zeichenkettenliste (string[])")}}))}))},E=/^(true|false)$/,$=/^-?(0|[1-9]\d*)$/,T=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,R=e=>{const t=typeof e,r=`${e}`;if("string"==typeof e)if(E.test(e))e="true"===e;else if($.test(e))e=parseInt(e);else if(T.test(e))e=parseFloat(e);else if(H.test(e))try{e=O(e)}catch(e){}return t!==typeof e&&(0,i.d)(`You have used a stringified property value (${r} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},C=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw a.L.warn(["stringifyJson",e]),a.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},H=/^[{[]/,O=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){if(H.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){a.L.warn(["parseJson",e]),a.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},j=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,q=e=>"string"==typeof e?e:j(e),I=(e,t)=>c(e,t||(0,a.g)()),P=(e,t)=>s(e,t||(0,a.g)());let Y=null;const B=()=>(Y=Y||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,a.g)().body,level:"Fail",score:1},Y),X=/(\d+, ){3}0\)/,W=(e,t=B())=>{const r=getComputedStyle(e),i=X.test(r.backgroundColor)?t.backgroundColor:d.hex(r.backgroundColor),n=X.test(r.color)?t.color:d.hex(r.color),l=(0,o.s)(i,n),s={backgroundColor:i,color:n,domNode:e,level:(0,o.f)(l),score:l};return l<4.5&&a.L.error(["Color-Contrast-Error",{backgroundColor:s.backgroundColor,color:s.color,level:s.level,score:s.score},s.domNode]),s},Z=(e,t=B())=>{t.domNode instanceof HTMLElement&&(t=W(t.domNode,t));const r=t.domNode.querySelector(e);if(null===r){const r=t.domNode.querySelectorAll('[class="hydrated"]');for(let o=0;o<r.length&&(t.domNode=r[o],null===(t=Z(e,t)).domNode);o++);return t}return W(r,t)},F=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,a.a)().pageYOffset-50}),e.focus()):(0,i.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},J=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,i.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const r=`${t}`;t=e,e=r}if("string"==typeof e){const r=I(e,t);r instanceof HTMLElement?F(r):(0,i.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,i.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class K{static queryHtmlElementColors(e,t,r=!1,o=!0){let i=null;if(!0===r||!1===K.executionLock)if(!1===r&&(K.cache.clear(),K.cache.set(t.domNode,t),K.executionLock=!0,!0===o&&a.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)i=t;else{const r=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)r.add(e[t])}const o=t.domNode;if("function"==typeof o.assignedNodes){const e=o.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&r.add(e[t])}const a=t.domNode.children;for(let e=0;e<a.length;e++)r.add(a[e]);const n=Array.from(r);for(let l=0;l<n.length;l++){let r=K.cache.get(n[l]);void 0===r&&(r=W(n[l],t)),K.cache.set(n[l],r);const o=K.queryHtmlElementColors(e,r,!0,!1);if(null!==o){i=o;break}}}else a.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===r&&(!0===o&&a.L.debug(`[KoliBriUtils] Color contrast analysis finished (${K.cache.size} DOM elements are analysed).`),K.executionLock=!1,K.cache.clear()),i}}K.executionLock=!1,K.cache=new Map;class U{}U.patchTheme=n.p,U.patchThemeTag=n.a,U.querySelector=I,U.querySelectorAll=P,U.scrollByHTMLElement=F,U.scrollBySelector=J,U.stringifyJson=C},9571:(e,t,r)=>{r.d(t,{p:()=>i});var o=r(5617);const i=(e,t)=>{(0,o.i)(e)&&e&&(e.focus=e=>null==t?void 0:t.focus(e))}},5617:(e,t,r)=>{r.d(t,{S:()=>l,a:()=>i,b:()=>a,c:()=>n,i:()=>o});const o=e=>"object"==typeof e&&null!==e,i=(e,t=0)=>"string"==typeof e&&e.length>=t,a=e=>{if("object"!=typeof e||null===e)return i(e,1);for(const t in e)if(!1===i(t,1))return!1;return!0},n=(e,t)=>0===t.length||((e,t)=>0===t.length&&new RegExp(`^${e}`).test(t))(e,t),l=new Event("StateChange")}}]);