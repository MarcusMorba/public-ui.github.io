/*! For license information please see 737.15972e72.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[737],{6735:(e,t,n)=>{n.d(t,{a:()=>i,b:()=>g,c:()=>l,d:()=>c,e:()=>h,f:()=>u,u:()=>b});var r=n(2913);const o=new Set,i=e=>{!1===o.has(e)&&(o.add(e),r.L.info(e,{classifier:"\u270b a11y",overwriteStyle:"; background-color: #09f"}))},a=new Set,l=e=>{!1===a.has(e)&&(a.add(e),r.L.warn(e,{classifier:"\ud83d\udd25 deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},s=new Set,c=e=>{!1===s.has(e)&&(s.add(e),r.L.debug(e,{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},d=new Set,u=(e,t=!1)=>{!1===d.has(e)&&(d.add(e),e+=!0===t?" \u2705":"",r.L.debug(e,{classifier:"\ud83c\udf1f feature",overwriteStyle:"; background-color: #309"}))};c("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const f=new Set,h=()=>{i('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},g=e=>{"string"==typeof e&&""!==e||i("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},b=(e,t=8)=>{var n;t>7&&(n=`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`,!1===f.has(n)&&(f.add(n),r.L.debug(n,{classifier:"\ud83d\udcd1 ui/ux",overwriteStyle:"; background-color: #060;"})))}},9520:(e,t,n)=>{n.d(t,{w:()=>o});var r=n(5974);const o=(e,t,n)=>{(0,r.a)(e,t,(e=>"top"===e||"right"===e||"bottom"===e||"left"===e),new Set(["Alignment {top, right, buttom, left}"]),n,{defaultValue:"top"})}},2731:(e,t,n)=>{n.d(t,{i:()=>s,v:()=>c,w:()=>d});var r=n(6735),o=n(5974),i=n(4928);const a=(e,t,n)=>{(0,i.c)(n)?e[t]=n:(0,i.i)(n,1)&&(e[t]={icon:n})},l=e=>{var t,n,r,o,l,s,c;if(null===(t=e.nextState)||void 0===t?void 0:t.has("_icon")){const t=null===(n=e.nextState)||void 0===n?void 0:n.get("_icon"),l=(null===(r=e.nextState)||void 0===r?void 0:r.get("_iconAlign"))||e.state._iconAlign;null===(o=e.nextState)||void 0===o||o.set("_icon",((e,t)=>{let n={};return(0,i.i)(e,1)?n="right"===t?{right:{icon:e}}:{left:{icon:e}}:"object"==typeof e&&null!==e&&(a(n,"top",e.top),a(n,"right",e.right),a(n,"bottom",e.bottom),a(n,"left",e.left)),n})(t,l))}else if(null===(l=e.nextState)||void 0===l?void 0:l.has("_iconAlign")){const t=e.state._iconAlign;null===(s=e.nextState)||void 0===s||s.set("_icon",{[t]:void 0,[null===(c=e.nextState)||void 0===c?void 0:c.get("_iconAlign")]:e.state._icon[t]})}},s=e=>"object"==typeof e&&null!==e&&(void 0===e.style||(0,i.b)(e.style))&&(0,i.i)(e.icon,1),c=(e,t)=>{(0,o.o)(t,(()=>{try{t=(0,o.p)(t)}catch(e){}(0,o.a)(e,"_icon",(e=>null===e||(0,i.i)(e,1)||"object"==typeof e&&null!==e&&((0,i.i)(e.left,1)||s(e.left)||(0,i.i)(e.right,1)||s(e.right)||(0,i.i)(e.top,1)||s(e.top)||(0,i.i)(e.bottom,1)||s(e.bottom))),new Set(["KoliBriIcon"]),t,{hooks:{beforePatch:(t,n)=>{null===t&&n.set("_icon",{}),l(e)}},required:!0})}))},d=(e,t)=>{(0,r.c)("Das Property _icon-align bzw. _iconAlign ist veraltet. Die Ausrichtung der Icon's kann jetzt direkt \xfcber das _icon-Property vorgenommen werden. (v1.1.10: https://public-ui.github.io/?path=/story/backlog-und-changelog--page)"),(0,o.a)(e,"_iconAlign",(e=>"left"===e||"right"===e),new Set(["Alignment {left, right, top, bottom}"]),t,{hooks:{beforePatch:()=>{l(e)}}})}},7301:(e,t,n)=>{n.d(t,{a:()=>s,v:()=>l});var r=n(6735),o=n(5974),i=n(4928);const a=(e,t,n,o)=>{const a=t.has("_ariaLabel")?t.get("_ariaLabel"):n.state._ariaLabel;if("string"==typeof a){const e=t.has("_label")?t.get("_label"):n.state._label;!1===(0,i.d)(e,a)&&("_ariaLabel"===o?t.set("_label",a):t.set("_ariaLabel",e),(0,r.a)("Das abweichende Aria-Label am Schalter ist nicht barrierefrei. Ein abweichendes Aria-Label muss aus Gr\xfcndern der Barrierefreiheit f\xfcr die Sprachsteuerung mit dem Label-Text beginnen."))}},l=(e,t)=>{(0,o.w)(e,"_ariaLabel",t,{hooks:{beforePatch:a}})},s=(e,t)=>{(0,o.w)(e,"_label",t,{hooks:{beforePatch:a},required:!0})}},5974:(e,t,n)=>{n.d(t,{K:()=>ne,a:()=>D,b:()=>H,c:()=>A,d:()=>q,e:()=>j,f:()=>O,g:()=>E,h:()=>W,i:()=>ee,j:()=>K,k:()=>F,l:()=>te,m:()=>R,n:()=>Y,o:()=>M,p:()=>J,q:()=>U,r:()=>c,s:()=>P,t:()=>Q,u:()=>B,w:()=>T});var r=n(1885),o=n(6735),i=n(2913);const a=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},l=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const n=new Set;a(n,t.querySelectorAll(e));const r=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<r.length;t++){const o=r[t].shadowRoot;a(n,l(e,"object"==typeof o&&null!==o?o:r[t]))}return Array.from(n)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},s=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let n=t.querySelector(e);if(null===n){const r=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<r.length;t++){const o=r[t].shadowRoot;if(n=s(e,"object"==typeof o&&null!==o?o:r[t]),null!==n)break}}return n}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var c=b,d=b,u=function(e){var t=m(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},f=function(e){var t=m(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},h=function(e){3==(t=m(e)).length&&t.push(255);var t,n=255==t[3],r=p(t[0]),o=p(t[1]),i=p(t[2]),a=function(e,t,n,r){var o=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=o.indexOf(e)&&-1!=o.indexOf(t)&&-1!=o.indexOf(n)&&-1!=o.indexOf(r)}(r,o,i,t=p(Math.round(t[3])));return n?a?"#"+r.charAt(0)+o.charAt(0)+i.charAt(0):"#"+r+o+i:a?"#"+r.charAt(0)+o.charAt(0)+i.charAt(0)+t.charAt(0):"#"+r+o+i+t},g=function(e){var t=m(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function b(e){var t=m(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function m(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),n=t.length;if(3==n||4==n){var r=v(t[0]),o=v(t[1]),i=v(t[2]),a=3==n?255:v(t[3]);if(isNaN(r)||isNaN(o)||isNaN(i)||isNaN(a))return;return[r,o,i,a]}}(e)||function(e){var t=e.replace(/^#/,""),n=t.length;if(6==n||8==n){var r=v(t.slice(0,2)),o=v(t.slice(2,4)),i=v(t.slice(4,6)),a=6==n?255:v(t.slice(6,8));if(isNaN(r)||isNaN(o)||isNaN(i)||isNaN(a))return;return[r,o,i,a]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=y(t[0],!0),r=y(t[1],!0),o=y(t[2],!0);if(-1!=n&&-1!=r&&-1!=o)return[n,r,o,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=y(t[0],!0),r=y(t[1],!0),o=y(t[2],!0),i=y(255*t[3]);if(-1!=n&&-1!=r&&-1!=o&&-1!=i)return[n,r,o,i]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=y(null!=e.r?e.r:null!=e.red?e.red:0,!0),n=y(null!=e.g?e.g:null!=e.green?e.green:0,!0),r=y(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),o=y(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=n&&-1!=r&&-1!=o)return[t,n,r,o]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=y(e[0],!0),n=y(e[1],!0),r=y(e[2],!0),o=y(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=n&&-1!=r&&-1!=o)return[t,n,r,o]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function p(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function v(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function y(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}c.arr=d,c.obj=u,c.css=f,c.hex=h,c.num=g;var w=1/12.92;function S(e){return Math.pow((e+.055)/1.055,2.4)}function k(e){var t=e[0]/255,n=e[1]/255,r=e[2]/255;return.2126*(t<=.03928?t*w:S(t))+.7152*(n<=.03928?n*w:S(n))+.0722*(r<=.03928?r*w:S(r))}function L(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var n=parseInt(e,16);return[n>>16,n>>8&255,255&n,t]}function x(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(k(e),k(t))}function A(e,t){return x(L(e),L(t))}function N(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const _=/\[object Object\]/,M=(e,t)=>{"string"==typeof e&&_.test(e)||t()},E=(e,t)=>{"string"==typeof e&&""===e||t()},O=(e,t)=>{(0,i.b)()&&(i.L.debug([e,t]),i.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},P=(e,t,n,r={})=>{var o,i;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==n&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof r.afterPatch&&(null===(o=e.nextHooks.get(t))||void 0===o||o.set("afterPatch",r.afterPatch)),"function"==typeof r.beforePatch&&(null===(i=e.nextHooks.get(t))||void 0===i||i.set("beforePatch",r.beforePatch)),e.nextState.set(t,n),(e=>{var t,n,r;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,n)=>{var r;const o=t.get("beforePatch");"function"==typeof o&&o(null===(r=e.nextState)||void 0===r?void 0:r.get(n),e.nextState,e,n)})),(null===(n=e.nextState)||void 0===n?void 0:n.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(r=e.nextHooks)||void 0===r||r.forEach(((t,n)=>{const r=t.get("afterPatch");"function"==typeof r&&r(e.state[n],e.state,e,n)}))),delete e.nextHooks})(e))},D=(e,t,n,r,i,a={})=>{n(i)?P(e,t,i,null==a?void 0:a.hooks):void 0===i||null===i&&(void 0===(null==a?void 0:a.required)||!1===(null==a?void 0:a.required))?P(e,t,null==a?void 0:a.defaultValue,null==a?void 0:a.hooks):(void 0!==(null==a?void 0:a.required)&&!1!==(null==a?void 0:a.required)||r.add(null),((e,t,n,r)=>{(0,o.d)(`[${e.constructor.name}] Der Property-Wert (${n}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(r).join(", ")}`)})(e,t,i,r))},H=(e,t,n,r)=>{D(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),n,r)},T=(e,t,n,r={})=>{const o="number"==typeof r.minLength?null==r?void 0:r.minLength:0;D(e,t,(e=>"string"==typeof e&&e.length>=o),new Set([`String (Mindestl\xe4nge ${o})`]),n,r)},j=(e,t,n,r)=>{D(e,t,(e=>"number"==typeof e&&(void 0===(null==r?void 0:r.min)||"number"==typeof(null==r?void 0:r.min)&&e>=r.min)&&(void 0===(null==r?void 0:r.max)||"number"==typeof(null==r?void 0:r.max)&&e<=r.max)),new Set(["Number"]),n,r)},q=(e,t,n,r,o=(e=>e==e),a={})=>{E(r,(()=>{M(r,(()=>{void 0===r&&(r=[]);try{try{r=J(r)}catch(e){}if(Array.isArray(r)){const l=r.find((e=>!n(e)));void 0===l&&o(r)?P(e,t,r,a.hooks):M(l,(()=>{throw i.L.debug(l),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else M(r,(()=>{throw i.L.debug(r),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){i.L.debug(e)}}))}))},C=/^(true|false)$/,$=/^-?(0|[1-9]\d*)$/,z=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,R=e=>{const t=typeof e,n=`${e}`;if("string"==typeof e)if(C.test(e))e="true"===e;else if($.test(e))e=parseInt(e);else if(z.test(e))e=parseFloat(e);else if(I.test(e))try{e=J(e)}catch(e){}return t!==typeof e&&(0,o.d)(`You have used a stringified property value (${n} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},B=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw i.L.warn(["stringifyJson",e]),i.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},I=/^[{[]/,J=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){if(I.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){i.L.warn(["parseJson",e]),i.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},W=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,K=e=>"string"==typeof e?e:W(e),F=(e,t)=>s(e,t||(0,i.g)()),U=(e,t)=>l(e,t||(0,i.g)());let V=null;const Z=()=>(V=V||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,i.g)().body,level:"Fail",score:1},V),G=/(\d+, ){3}0\)/,Y=(e,t=Z())=>{const n=getComputedStyle(e),r=G.test(n.backgroundColor)?t.backgroundColor:c.hex(n.backgroundColor),o=G.test(n.color)?t.color:c.hex(n.color),a=A(r,o),l={backgroundColor:r,color:o,domNode:e,level:N(a),score:a};return a<4.5&&i.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},Q=(e,t=Z())=>{t.domNode instanceof HTMLElement&&(t=Y(t.domNode,t));const n=t.domNode.querySelector(e);if(null===n){const n=t.domNode.querySelectorAll('[class="hydrated"]');for(let r=0;r<n.length&&(t.domNode=n[r],null===(t=Q(e,t)).domNode);r++);return t}return Y(n,t)},X=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,i.a)().pageYOffset-50}),e.focus()):(0,o.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},ee=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,o.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const n=`${t}`;t=e,e=n}if("string"==typeof e){const n=F(e,t);n instanceof HTMLElement?X(n):(0,o.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,o.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class te{static queryHtmlElementColors(e,t,n=!1,r=!0){let o=null;if(!0===n||!1===te.executionLock)if(!1===n&&(te.cache.clear(),te.cache.set(t.domNode,t),te.executionLock=!0,!0===r&&i.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)o=t;else{const n=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)n.add(e[t])}const r=t.domNode;if("function"==typeof r.assignedNodes){const e=r.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&n.add(e[t])}const i=t.domNode.children;for(let e=0;e<i.length;e++)n.add(i[e]);const a=Array.from(n);for(let l=0;l<a.length;l++){let n=te.cache.get(a[l]);void 0===n&&(n=Y(a[l],t)),te.cache.set(a[l],n);const r=te.queryHtmlElementColors(e,n,!0,!1);if(null!==r){o=r;break}}}else i.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===n&&(!0===r&&i.L.debug(`[KoliBriUtils] Color contrast analysis finished (${te.cache.size} DOM elements are analysed).`),te.executionLock=!1,te.cache.clear()),o}}te.executionLock=!1,te.cache=new Map;class ne{}ne.patchTheme=r.p,ne.patchThemeTag=r.a,ne.querySelector=F,ne.querySelectorAll=U,ne.scrollByHTMLElement=X,ne.scrollBySelector=ee,ne.stringifyJson=B},7787:(e,t,n)=>{n.d(t,{v:()=>a});var r=n(6735),o=n(5974);const i={hooks:{afterPatch:e=>{-1!==e&&0!==e&&(0,r.a)("Don\u2019t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},a=(e,t)=>{(0,o.e)(e,"_tabIndex",t,i)}}}]);