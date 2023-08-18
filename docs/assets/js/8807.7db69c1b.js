/*! For license information please see 8807.7db69c1b.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[8807],{39252:(e,t,a)=>{a.d(t,{v:()=>i});var n=a(56398);const i=(e,t)=>{(0,n.a)(e,"_hasCloser",t)}},18752:(e,t,a)=>{a.d(t,{a:()=>c});var n=a(20993),i=a(55726);const o={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schlie\xdfen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Eintr\xe4ge vorhanden.","change-order":"Sortierung von {{colLabel}} \xe4ndern","action-running":"Aktion wird ausgef\xfchrt...","action-done":"Aktion abgeschlossen","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zur\xfcck","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Eintr\xe4ge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgew\xe4hlt","page-per-site":"{{entries}} Eintr\xe4ge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab ge\xf6ffnet.","kolibri-logo":"Logo von KoliBri","sort-descending":"Spalte {{column}} absteigend sortiert","sort-ascending":"Spalte {{column}} aufsteigend sortiert","sort-none":"Spalte {{column}} nicht sortiert","avatar-alt":"Avatar von {{name}}"},s={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo","sort-descending":"sorted column {{column}} descending","sort-ascending":"sorted column {{column}} ascending","sort-none":"column {{column}} not sorted","avatar-alt":"Avatar of {{name}}"},l=e=>Object.keys(e).reduce(((t,a)=>(t[`kol-${a}`]=e[a],t)),{}),r=new Set([e=>e("en",l(s)),e=>e("de",l(o))]),c=(e,t)=>{const a=(0,n.g)();if(void 0===a)return(0,i.d)("[I18n] I18nService not available! Please call the global register function."),e;let o=a.translate(e,t);return o===e&&((0,i.d)("[I18n] Locales not initialized! Initialize default locales automatically."),r.forEach((e=>e(((e,t)=>(a.addResourceBundle(e,t),e))))),o=a.translate(e,t)),o}},8807:(e,t,a)=>{a.r(t),a.d(t,{kol_card:()=>c});var n=a(72209),i=a(18752),o=a(39252),s=a(56398),l=a(49399),r=a(26897);const c=class{constructor(e){(0,n.r)(this,e),this.close=()=>{var e;void 0!==(null===(e=this._on)||void 0===e?void 0:e.onClose)&&this._on.onClose(new Event("Close"))},this.on={onClick:this.close},this.validateOnValue=e=>"object"==typeof e&&null!==e&&"function"==typeof e.onClose,this._on=void 0,this._hasCloser=void 0,this._hasFooter=!1,this._heading=void 0,this._headline=void 0,this._label=void 0,this._level=1,this.state={_label:"\u2026"}}render(){return(0,n.h)(n.H,null,(0,n.h)("div",{class:"card"},(0,n.h)("div",{class:"content-container"},(0,n.h)("div",{class:"header"},(0,n.h)("kol-heading-wc",{_label:this.state._label,_level:this.state._level}),(0,n.h)("slot",{name:"header"})),(0,n.h)("div",{class:"content"},(0,n.h)("slot",{name:"content"}),(0,n.h)("slot",null)),this.state._hasFooter&&(0,n.h)("div",{class:"footer"},(0,n.h)("slot",{name:"footer"}))),this.state._hasCloser&&(0,n.h)("kol-button-wc",{class:"close",_hideLabel:!0,_icon:{left:{icon:"codicon codicon-close"}},_label:(0,i.a)("kol-close"),_on:this.on,_tooltipAlign:"left"})))}validateOn(e){this.validateOnValue(e)&&(0,s.s)(this,"_on",{onClose:e.onClose})}validateHasCloser(e){(0,o.v)(this,e)}validateHasFooter(e){((e,t)=>{(0,s.a)(e,"_hasFooter",t)})(this,e)}validateHeading(e){this.validateLabel(e)}validateHeadline(e){this.validateLabel(e)}validateLabel(e){(0,l.v)(this,e)}validateLevel(e){(0,r.w)(this,e)}componentWillLoad(){this.validateHasCloser(this._hasCloser),this.validateHasFooter(this._hasFooter),this.validateLabel(this._label||this._heading||this._headline),this.validateLevel(this._level),this.validateOn(this._on)}static get watchers(){return{_on:["validateOn"],_hasCloser:["validateHasCloser"],_hasFooter:["validateHasFooter"],_heading:["validateHeading"],_headline:["validateHeadline"],_label:["validateLabel"],_level:["validateLevel"]}}};c.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host>div.card{align-items:flex-start;display:flex;height:100%}"}},49399:(e,t,a)=>{a.d(t,{a:()=>u,c:()=>r,h:()=>l,v:()=>d});var n=a(55726),i=a(56398);const o=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,s=/^\d+$/;function l(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(o))||void 0===t?void 0:t.length)||0}(e)>=t}function r(e){return s.test(e)}function c(e){var t;return{hooks:{afterPatch:(t,a,i,o)=>{var s,c;"function"==typeof(null===(s=e.hooks)||void 0===s?void 0:s.afterPatch)&&(null===(c=e.hooks)||void 0===c||c.afterPatch(t,a,i,o)),"string"==typeof t&&!1===l(t,3)&&!1===r(t)&&(0,n.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,n.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=e.hooks)||void 0===t?void 0:t.beforePatch}}}const h=new Set(["string"]),d=(e,t,a={})=>{(0,i.w)(e,"_label",(e=>"string"==typeof e),h,t,c(a))},g=new Set(["string","false"]),u=(e,t,a={})=>{""!==t&&"false"!==t||(t=!1),(0,i.w)(e,"_label",(e=>!1===e||"string"==typeof e),g,t,c(a))}},26897:(e,t,a)=>{a.d(t,{w:()=>i});var n=a(56398);const i=(e,t)=>{(0,n.w)(e,"_level",(e=>"number"==typeof e&&0<=e&&e<=6),new Set(["Number {0, 1, 2, 3, 4, 5, 6}"]),t,{defaultValue:1,required:!0})}}}]);