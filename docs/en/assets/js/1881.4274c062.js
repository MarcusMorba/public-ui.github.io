/*! For license information please see 1881.4274c062.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[1881],{90076:(e,t,a)=>{a.d(t,{a:()=>c});var n=a(21190),i=a(27697);const r={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schlie\xdfen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Eintr\xe4ge vorhanden.","change-order":"Sortierung von {{colLabel}} \xe4ndern","action-running":"Aktion wird ausgef\xfchrt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zur\xfcck","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Eintr\xe4ge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgew\xe4hlt","page-per-site":"{{entries}} Eintr\xe4ge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab ge\xf6ffnet.","kolibri-logo":"Logo von KoliBri","sort-descending":"Spalte {{column}} absteigend sortiert","sort-ascending":"Spalte {{column}} aufsteigend sortiert","sort-none":"Spalte {{column}} nicht sortiert","table-pagination-label":"Paginierung f\xfcr die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}"},o={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo","sort-descending":"sorted column {{column}} descending","sort-ascending":"sorted column {{column}} ascending","sort-none":"column {{column}} not sorted","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}"},s=e=>Object.keys(e).reduce(((t,a)=>(t[`kol-${a}`]=e[a],t)),{}),l=new Set([e=>e("en",s(o)),e=>e("de",s(r))]),c=(e,t)=>{const a=(0,n.g)();if(void 0===a)return(0,i.d)("[I18n] I18nService not available! Please call the global register function."),e;let r=a.translate(e,t);return r===e&&((0,i.d)("[I18n] Locales not initialized! Initialize default locales automatically."),l.forEach((e=>e(((e,t)=>(a.addResourceBundle(e,t),e))))),r=a.translate(e,t)),r}},39428:(e,t,a)=>{a.d(t,{v:()=>i});var n=a(40642);const i=(e,t,a)=>{(0,n.d)(e,"_src",t,a)}},31881:(e,t,a)=>{a.r(t),a.d(t,{kol_avatar_wc:()=>l});var n=a(51705),i=a(90076),r=a(39428),o=a(41259);const s=e=>0===e.length?"":e[0].toUpperCase(),l=class{constructor(e){(0,n.r)(this,e),this._src=void 0,this._label=void 0,this.state={_src:"",_label:""}}render(){return(0,n.h)(n.H,null,(0,n.h)("div",{"aria-label":(0,i.a)("kol-avatar-alt",{placeholders:{name:this.state._label}}),class:"container",role:"img"},this.state._src?(0,n.h)("img",{alt:"","aria-hidden":"true",class:"image",src:this.state._src}):(0,n.h)("span",{"aria-hidden":"true",class:"initials"},(e=>{const t=e.split(/\s+/),a=t.at(0),n=t.at(-1);return t.length>=2&&a&&n?`${s(a)}${s(n)}`:s(e)})(this.state._label))))}validateSrc(e){(0,r.v)(this,e)}validateLabel(e){(0,o.v)(this,e)}componentWillLoad(){this.validateSrc(this._src),this.validateLabel(this._label)}static get watchers(){return{_src:["validateSrc"],_label:["validateLabel"]}}}},41259:(e,t,a)=>{a.d(t,{a:()=>u,c:()=>l,h:()=>s,v:()=>d});var n=a(27697),i=a(40642);const r=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,o=/^\d+$/;function s(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(r))||void 0===t?void 0:t.length)||0}(e)>=t}function l(e){return o.test(e)}function c(e){var t;return{hooks:{afterPatch:(t,a,i,r)=>{var o,c;"function"==typeof(null===(o=e.hooks)||void 0===o?void 0:o.afterPatch)&&(null===(c=e.hooks)||void 0===c||c.afterPatch(t,a,i,r)),"string"==typeof t&&!1===s(t,3)&&!1===l(t)&&(0,n.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,n.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=e.hooks)||void 0===t?void 0:t.beforePatch}}}const g=new Set(["string"]),d=(e,t,a={})=>{(0,i.w)(e,"_label",(e=>"string"==typeof e),g,t,c(a))},h=new Set(["string","false"]),u=(e,t,a={})=>{""!==t&&"false"!==t||(t=!1),(0,i.w)(e,"_label",(e=>!1===e||"string"==typeof e),h,t,c(a))}}}]);