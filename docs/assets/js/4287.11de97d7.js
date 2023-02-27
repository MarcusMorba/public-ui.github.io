/*! For license information please see 4287.11de97d7.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[4287],{77189:(e,t,o)=>{o.d(t,{I:()=>c,g:()=>s});var n=o(23366),i=o(55371),a=o(9018),r=o(51151);const s=e=>{const t="string"==typeof e._error&&e._error.length>0&&!0===e._touched,o="string"==typeof e._hint&&e._hint.length>0,n=[];return!0===t&&n.push(`${e._id}-error`),!0===o&&n.push(`${e._id}-hint`),{hasError:t,hasHint:o,ariaDiscribedBy:n}},l=(0,r.b)();class d{constructor(e,t,o){var n,i,a,r,s;if(this.syncFormAssociatedName=()=>{var e;l&&(null===(e=this.formAssociated)||void 0===e||e.setAttribute("name",this.component.state._name||this.component.state._id))},this.setFormAssociatedValue=(e=null)=>{var t;l&&(null===(t=this.formAssociated)||void 0===t||t.setAttribute("value",e))},this.component=e,this.name=t,this.host=o,l){this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden");const e=(null===(n=this.host)||void 0===n?void 0:n.children)||[];for(let t=0;t<e.length;t++)"INPUT"===(null===(i=this.host)||void 0===i?void 0:i.children[t].tagName)&&(null===(a=this.host)||void 0===a||a.removeChild(null===(r=this.host)||void 0===r?void 0:r.children[t]));null===(s=this.host)||void 0===s||s.appendChild(this.formAssociated)}}validateAlert(e){(0,i.b)(this.component,"_alert",e)}validateTouched(e){(0,i.b)(this.component,"_touched",e)}componentWillLoad(){this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class c extends d{constructor(e,t,o){super(e,t,o),this.hideLabel=!1,this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=e}validateAccessKey(e){(0,i.w)(this.component,"_accessKey",e)}validateAdjustHeight(e){(0,i.b)(this.component,"_adjustHeight",e)}validateDisabled(e){(0,i.b)(this.component,"_disabled",e),!0===e&&(0,n.e)()}validateError(e){(0,i.w)(this.component,"_error",e)}validateHideLabel(e){(0,i.b)(this.component,"_hideLabel",e)}validateHint(e){(0,i.w)(this.component,"_hint",e)}validateId(e){(0,i.w)(this.component,"_id",e,{hooks:{afterPatch:this.syncFormAssociatedName}}),void 0===e&&(0,n.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, k\xf6nnte aber f\xfcr die E2E-Tests relevant sein.")}validateName(e){(0,i.w)(this.component,"_name",e,{hooks:{afterPatch:this.syncFormAssociatedName}}),void 0===e&&(0,n.d)("Ein Name an den Eingabefeldern ist nicht zwingend erforderlich, kann aber f\xfcr die Autocomplete-Funktion des Eingabefeldes relevant sein.")}validateOn(e){"object"==typeof e&&(0,i.s)(this.component,"_on",e)}validateSmartButton(e){(0,i.o)(e,(()=>{try{e=(0,i.p)(e)}catch(e){}(0,i.s)(this.component,"_smartButton",e)}))}validateTabIndex(e){(0,a.v)(this.component,e)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateName(this.component._name),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex),this.syncFormAssociatedName()}onBlur(e){var t;this.component._alert=!0,this.component._touched=!0,"function"==typeof(null===(t=this.component._on)||void 0===t?void 0:t.onBlur)&&this.component._on.onBlur(e)}onChange(e){var t;this.setFormAssociatedValue(e.target.value),"function"==typeof(null===(t=this.component._on)||void 0===t?void 0:t.onChange)&&this.component._on.onChange(e,e.target.value)}onClick(e){var t;"function"==typeof(null===(t=this.component._on)||void 0===t?void 0:t.onClick)&&this.component._on.onClick(e)}onFocus(e){var t;this.component._alert=!0,"function"==typeof(null===(t=this.component._on)||void 0===t?void 0:t.onFocus)&&this.component._on.onFocus(e)}setValue(e,t){var o;this.setFormAssociatedValue(t),"function"==typeof(null===(o=this.component._on)||void 0===o?void 0:o.onChange)&&this.component._on.onChange(e,t)}}},24287:(e,t,o)=>{o.r(t),o.d(t,{kol_textarea:()=>d});var n=o(14335),i=o(42359),a=o(55371),r=o(83956),s=o(77189);class l extends s.I{constructor(e,t,o){super(e,t,o),this.afterSyncCharCounter=()=>{"string"==typeof this.component._value&&this.component._value.length>0&&(this.component.state._currentLength=this.component._value.length)},this.component=e}validateHasCounter(e){(0,a.b)(this.component,"_hasCounter",e,{hooks:{afterPatch:this.afterSyncCharCounter}})}validateMaxLength(e){(0,a.e)(this.component,"_maxLength",e,{hooks:{afterPatch:this.afterSyncCharCounter},min:0})}validatePlaceholder(e){(0,a.w)(this.component,"_placeholder",e)}validateReadOnly(e){(0,a.b)(this.component,"_readOnly",e)}validateResize(e){(0,a.a)(this.component,"_resize",(e=>"string"==typeof e&&("both"===e||"horizontal"===e||"none"===e||"vertical"===e)),new Set("String {both, horizontal, vertical, none}"),e)}validateRequired(e){(0,a.b)(this.component,"_required",e)}validateRows(e){(0,a.e)(this.component,"_rows",e)}validateValue(e){(0,a.w)(this.component,"_value",e,{hooks:{afterPatch:this.afterSyncCharCounter}}),this.setFormAssociatedValue(this.component._value)}componentWillLoad(){super.componentWillLoad(),this.validateHasCounter(this.component._hasCounter),this.validateMaxLength(this.component._maxLength),this.validatePlaceholder(this.component._placeholder),this.validateReadOnly(this.component._readOnly),this.validateResize(this.component._resize),this.validateRequired(this.component._required),this.validateRows(this.component._rows),this.validateValue(this.component._value)}}const d=class{render(){const{ariaDiscribedBy:e}=(0,s.g)(this.state);return(0,n.h)(n.H,null,(0,n.h)("kol-input",{_alert:this.state._alert,_disabled:this.state._disabled,_error:this.state._error,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_id:this.state._id,_readOnly:this.state._readOnly,_required:this.state._required,_touched:this.state._touched},(0,n.h)("span",{slot:"label"},(0,n.h)("slot",null)),(0,n.h)("div",{slot:"input"},(0,n.h)("textarea",Object.assign({ref:this.catchRef,part:"textarea",title:"",accessKey:this.state._accessKey,"aria-describedby":e.length>0?e.join(" "):void 0,"aria-labelledby":`${this.state._id}-label`,autoCapitalize:"off",autoCorrect:"off",disabled:this.state._disabled,id:this.state._id,maxlength:this.state._maxLength,name:this.state._name,readOnly:this.state._readOnly,required:this.state._required,rows:this.state._rows,placeholder:this.state._placeholder,spellcheck:"false"},this.controller.onFacade,{onKeyUp:this.onChange,style:{resize:this.state._resize},value:this.state._value})),this.state._hasCounter&&(0,n.h)("span",{"aria-atomic":"true","aria-live":"polite"},this.state._currentLength,this.state._maxLength&&(0,n.h)(n.F,null,(0,n.h)("span",{"aria-label":(0,i.a)("kol-of"),role:"img"},"/"),this.state._maxLength)," ",(0,n.h)("span",null,(0,i.a)("kol-characters"))))))}constructor(e){(0,n.r)(this,e),this.catchRef=e=>{this.ref=e,(0,r.a)(this.host,this.ref)},this.onChange=e=>{this.ref instanceof HTMLTextAreaElement&&((0,a.s)(this,"_currentLength",this.ref.value.length),this.state._adjustHeight&&(this._rows=(e=>{e.style.overflow="hidden";const t=e.rows,o=e.clientHeight/t;e.rows=1;const n=Math.round(e.scrollHeight/o);return e.rows=t,n})(this.ref))),"function"==typeof this.controller.onFacade.onChange&&this.controller.onFacade.onChange(e)},this._accessKey=void 0,this._adjustHeight=!1,this._alert=!0,this._hasCounter=void 0,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._id=void 0,this._maxLength=void 0,this._name=void 0,this._on=void 0,this._placeholder=void 0,this._readOnly=void 0,this._resize="vertical",this._required=void 0,this._rows=void 0,this._tabIndex=void 0,this._touched=!1,this._value=void 0,this.state={_adjustHeight:!1,_currentLength:0,_id:"\u26a0",_resize:"vertical"},this.controller=new l(this,"textarea",this.host)}validateAccessKey(e){this.controller.validateAccessKey(e)}validateAdjustHeight(e){this.controller.validateAdjustHeight(e)}validateAlert(e){this.controller.validateAlert(e)}validateDisabled(e){this.controller.validateDisabled(e)}validateError(e){this.controller.validateError(e)}validateHasCounter(e){this.controller.validateHasCounter(e)}validateHideLabel(e){this.controller.validateHideLabel(e)}validateHint(e){this.controller.validateHint(e)}validateId(e){this.controller.validateId(e)}validateMaxLength(e){this.controller.validateMaxLength(e)}validateName(e){this.controller.validateName(e)}validateOn(e){this.controller.validateOn(e)}validatePlaceholder(e){this.controller.validatePlaceholder(e)}validateReadOnly(e){this.controller.validateReadOnly(e)}validateResize(e){this.controller.validateResize(e)}validateRequired(e){this.controller.validateRequired(e)}validateRows(e){this.controller.validateRows(e)}validateTabIndex(e){this.controller.validateTabIndex(e)}validateTouched(e){this.controller.validateTouched(e)}validateValue(e){this.controller.validateValue(e)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad(),this.validateAdjustHeight(this._adjustHeight)}get host(){return(0,n.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_adjustHeight:["validateAdjustHeight"],_alert:["validateAlert"],_disabled:["validateDisabled"],_error:["validateError"],_hasCounter:["validateHasCounter"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_id:["validateId"],_maxLength:["validateMaxLength"],_name:["validateName"],_on:["validateOn"],_placeholder:["validatePlaceholder"],_readOnly:["validateReadOnly"],_resize:["validateResize"],_required:["validateRequired"],_rows:["validateRows"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_value:["validateValue"]}}};d.style={default:":host{--kolibri-border-color:#e0e0e0;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*{box-sizing:border-box;font-family:var(--kolibri-font-family)}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}button{min-height:44px;min-width:44px;padding:0;margin:0}a,button,input,select,textarea{cursor:pointer;font-family:inherit}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{background-color:transparent;border-width:0}h1,h2,h3,h4,h5,h6{font-size:1rem;margin:0}"}},55371:(e,t,o)=>{o.d(t,{K:()=>oe,a:()=>M,b:()=>T,c:()=>A,d:()=>q,e:()=>R,f:()=>O,g:()=>N,h:()=>K,i:()=>ee,j:()=>V,k:()=>W,l:()=>te,m:()=>I,n:()=>Q,o:()=>H,p:()=>$,q:()=>J,r:()=>d,s:()=>E,t:()=>X,u:()=>F,w:()=>j});var n=o(90401),i=o(23366),a=o(51151);const r=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},s=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const o=new Set;r(o,t.querySelectorAll(e));const n=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<n.length;t++){const i=n[t].shadowRoot;r(o,s(e,"object"==typeof i&&null!==i?i:n[t]))}return Array.from(o)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},l=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let o=t.querySelector(e);if(null===o){const n=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<n.length;t++){const i=n[t].shadowRoot;if(o=l(e,"object"==typeof i&&null!==i?i:n[t]),null!==o)break}}return o}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var d=m,c=m,h=function(e){var t=p(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},u=function(e){var t=p(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},v=function(e){3==(t=p(e)).length&&t.push(255);var t,o=255==t[3],n=g(t[0]),i=g(t[1]),a=g(t[2]),r=function(e,t,o,n){var i=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=i.indexOf(e)&&-1!=i.indexOf(t)&&-1!=i.indexOf(o)&&-1!=i.indexOf(n)}(n,i,a,t=g(Math.round(t[3])));return o?r?"#"+n.charAt(0)+i.charAt(0)+a.charAt(0):"#"+n+i+a:r?"#"+n.charAt(0)+i.charAt(0)+a.charAt(0)+t.charAt(0):"#"+n+i+a+t},f=function(e){var t=p(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function m(e){var t=p(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function p(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),o=t.length;if(3==o||4==o){var n=b(t[0]),i=b(t[1]),a=b(t[2]),r=3==o?255:b(t[3]);if(isNaN(n)||isNaN(i)||isNaN(a)||isNaN(r))return;return[n,i,a,r]}}(e)||function(e){var t=e.replace(/^#/,""),o=t.length;if(6==o||8==o){var n=b(t.slice(0,2)),i=b(t.slice(2,4)),a=b(t.slice(4,6)),r=6==o?255:b(t.slice(6,8));if(isNaN(n)||isNaN(i)||isNaN(a)||isNaN(r))return;return[n,i,a,r]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=_(t[0],!0),n=_(t[1],!0),i=_(t[2],!0);if(-1!=o&&-1!=n&&-1!=i)return[o,n,i,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=_(t[0],!0),n=_(t[1],!0),i=_(t[2],!0),a=_(255*t[3]);if(-1!=o&&-1!=n&&-1!=i&&-1!=a)return[o,n,i,a]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=_(null!=e.r?e.r:null!=e.red?e.red:0,!0),o=_(null!=e.g?e.g:null!=e.green?e.green:0,!0),n=_(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),i=_(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=o&&-1!=n&&-1!=i)return[t,o,n,i]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=_(e[0],!0),o=_(e[1],!0),n=_(e[2],!0),i=_(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=o&&-1!=n&&-1!=i)return[t,o,n,i]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function g(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function b(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function _(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}d.arr=c,d.obj=h,d.css=u,d.hex=v,d.num=f;var y=1/12.92;function w(e){return Math.pow((e+.055)/1.055,2.4)}function k(e){var t=e[0]/255,o=e[1]/255,n=e[2]/255;return.2126*(t<=.03928?t*y:w(t))+.7152*(o<=.03928?o*y:w(o))+.0722*(n<=.03928?n*y:w(n))}function x(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var o=parseInt(e,16);return[o>>16,o>>8&255,255&o,t]}function L(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(k(e),k(t))}function A(e,t){return L(x(e),x(t))}function S(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const C=/\[object Object\]/,H=(e,t)=>{"string"==typeof e&&C.test(e)||t()},N=(e,t)=>{"string"==typeof e&&""===e||t()},O=(e,t)=>{(0,a.b)()&&(a.L.debug([e,t]),a.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},E=(e,t,o,n={})=>{var i,a;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==o&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof n.afterPatch&&(null===(i=e.nextHooks.get(t))||void 0===i||i.set("afterPatch",n.afterPatch)),"function"==typeof n.beforePatch&&(null===(a=e.nextHooks.get(t))||void 0===a||a.set("beforePatch",n.beforePatch)),e.nextState.set(t,o),(e=>{var t,o,n;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,o)=>{var n;const i=t.get("beforePatch");"function"==typeof i&&i(null===(n=e.nextState)||void 0===n?void 0:n.get(o),e.nextState,e,o)})),(null===(o=e.nextState)||void 0===o?void 0:o.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(n=e.nextHooks)||void 0===n||n.forEach(((t,o)=>{const n=t.get("afterPatch");"function"==typeof n&&n(e.state[o],e.state,e,o)}))),delete e.nextHooks})(e))},M=(e,t,o,n,a,r={})=>{o(a)?E(e,t,a,null==r?void 0:r.hooks):void 0===a||null===a&&(void 0===(null==r?void 0:r.required)||!1===(null==r?void 0:r.required))?E(e,t,null==r?void 0:r.defaultValue,null==r?void 0:r.hooks):(void 0!==(null==r?void 0:r.required)&&!1!==(null==r?void 0:r.required)||n.add(null),((e,t,o,n)=>{(0,i.d)(`[${e.constructor.name}] Der Property-Wert (${o}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(n).join(", ")}`)})(e,t,a,n))},T=(e,t,o,n)=>{M(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),o,n)},j=(e,t,o,n={})=>{const i="number"==typeof n.minLength?null==n?void 0:n.minLength:0;M(e,t,(e=>"string"==typeof e&&e.length>=i&&(void 0===(null==n?void 0:n.maxLength)||e.length<=n.maxLength)),new Set(["String"]),o,n)},R=(e,t,o,n)=>{M(e,t,(e=>"number"==typeof e&&(void 0===(null==n?void 0:n.min)||"number"==typeof(null==n?void 0:n.min)&&e>=n.min)&&(void 0===(null==n?void 0:n.max)||"number"==typeof(null==n?void 0:n.max)&&e<=n.max)),new Set(["Number"]),o,n)},q=(e,t,o,n,i=(e=>e==e),r={})=>{N(n,(()=>{H(n,(()=>{void 0===n&&(n=[]);try{try{n=$(n)}catch(e){}if(Array.isArray(n)){const s=n.find((e=>!o(e)));void 0===s&&i(n)?E(e,t,n,r.hooks):H(s,(()=>{throw a.L.debug(s),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else H(n,(()=>{throw a.L.debug(n),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){a.L.debug(e)}}))}))},P=/^(true|false)$/,z=/^-?(0|[1-9]\d*)$/,D=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,I=e=>{const t=typeof e,o=`${e}`;if("string"==typeof e)if(P.test(e))e="true"===e;else if(z.test(e))e=parseInt(e);else if(D.test(e))e=parseFloat(e);else if(B.test(e))try{e=$(e)}catch(e){}return t!==typeof e&&(0,i.d)(`You have used a stringified property value (${o} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},F=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw a.L.warn(["stringifyJson",e]),a.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},B=/^[{[]/,$=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){if(B.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){a.L.warn(["parseJson",e]),a.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},K=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,V=e=>"string"==typeof e?e:K(e),W=(e,t)=>l(e,t||(0,a.g)()),J=(e,t)=>s(e,t||(0,a.g)());let U=null;const Y=()=>(U=U||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,a.g)().body,level:"Fail",score:1},U),G=/(\d+, ){3}0\)/,Q=(e,t=Y())=>{const o=getComputedStyle(e),n=G.test(o.backgroundColor)?t.backgroundColor:d.hex(o.backgroundColor),i=G.test(o.color)?t.color:d.hex(o.color),r=A(n,i),s={backgroundColor:n,color:i,domNode:e,level:S(r),score:r};return r<4.5&&a.L.error(["Color-Contrast-Error",{backgroundColor:s.backgroundColor,color:s.color,level:s.level,score:s.score},s.domNode]),s},X=(e,t=Y())=>{t.domNode instanceof HTMLElement&&(t=Q(t.domNode,t));const o=t.domNode.querySelector(e);if(null===o){const o=t.domNode.querySelectorAll('[class="hydrated"]');for(let n=0;n<o.length&&(t.domNode=o[n],null===(t=X(e,t)).domNode);n++);return t}return Q(o,t)},Z=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,a.a)().pageYOffset-50}),e.focus()):(0,i.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},ee=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,i.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const o=`${t}`;t=e,e=o}if("string"==typeof e){const o=W(e,t);o instanceof HTMLElement?Z(o):(0,i.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,i.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class te{static queryHtmlElementColors(e,t,o=!1,n=!0){let i=null;if(!0===o||!1===te.executionLock)if(!1===o&&(te.cache.clear(),te.cache.set(t.domNode,t),te.executionLock=!0,!0===n&&a.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)i=t;else{const o=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)o.add(e[t])}const n=t.domNode;if("function"==typeof n.assignedNodes){const e=n.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&o.add(e[t])}const a=t.domNode.children;for(let e=0;e<a.length;e++)o.add(a[e]);const r=Array.from(o);for(let s=0;s<r.length;s++){let o=te.cache.get(r[s]);void 0===o&&(o=Q(r[s],t)),te.cache.set(r[s],o);const n=te.queryHtmlElementColors(e,o,!0,!1);if(null!==n){i=n;break}}}else a.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===o&&(!0===n&&a.L.debug(`[KoliBriUtils] Color contrast analysis finished (${te.cache.size} DOM elements are analysed).`),te.executionLock=!1,te.cache.clear()),i}}te.executionLock=!1,te.cache=new Map;class oe{}oe.patchTheme=n.p,oe.patchThemeTag=n.a,oe.querySelector=W,oe.querySelectorAll=J,oe.scrollByHTMLElement=Z,oe.scrollBySelector=ee,oe.stringifyJson=F},9018:(e,t,o)=>{o.d(t,{v:()=>r});var n=o(23366),i=o(55371);const a={hooks:{afterPatch:e=>{-1!==e&&0!==e&&(0,n.a)("Don\u2019t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},r=(e,t)=>{(0,i.e)(e,"_tabIndex",t,a)}}}]);