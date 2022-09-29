/*! For license information please see 32.bdc7e97b5dcaced36557.manager.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{905:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return a11yHintLabelingLandmarks})),__webpack_require__.d(__webpack_exports__,"b",(function(){return a11yHintDisabled})),__webpack_require__.d(__webpack_exports__,"c",(function(){return a11yHint})),__webpack_require__.d(__webpack_exports__,"d",(function(){return devHint})),__webpack_require__.d(__webpack_exports__,"e",(function(){return deprecatedHint})),__webpack_require__.d(__webpack_exports__,"f",(function(){return featureHint})),__webpack_require__.d(__webpack_exports__,"g",(function(){return uiUxHintMillerscheZahl}));var _dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(61);const a11yCache=new Set,a11yHint=e=>{!1===a11yCache.has(e)&&(a11yCache.add(e),_dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__.c.info(e,{classifier:"✋a11y",overwriteStyle:"; background-color: #09f"}))},deprecatedCache=new Set,deprecatedHint=e=>{!1===deprecatedCache.has(e)&&(deprecatedCache.add(e),_dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__.c.warn(e,{classifier:"🔥deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},devCache=new Set,devHint=e=>{!1===devCache.has(e)&&(devCache.add(e),_dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__.c.debug(e,{classifier:"💻dev",overwriteStyle:"; background-color: #f09"}))},featureCache=new Set,featureHint=(e,a=!1)=>{!1===featureCache.has(e)&&(featureCache.add(e),e+=!0===a?" ✅":"",_dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__.c.debug(e,{classifier:"🌟feature",overwriteStyle:"; background-color: #309"}))};devHint("Wir freuen uns über jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const uiUxCache=new Set,a11yHintDisabled=()=>{a11yHint('"Disabled" schränkt die Zugänglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},a11yHintLabelingLandmarks=e=>{"string"==typeof e&&""!==e||a11yHint("Manche Strukturelemente, wie bspw. der nav-Tag, können mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden können, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},uiUxHintMillerscheZahl=(e,a=8)=>{var i;a>7&&(i=`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Menüpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`,!1===uiUxCache.has(i)&&(uiUxCache.add(i),_dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__.c.debug(i,{classifier:"📑ui/ux",overwriteStyle:"; background-color: #060;"})))}},906:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return watchValidator})),__webpack_require__.d(__webpack_exports__,"b",(function(){return watchBoolean})),__webpack_require__.d(__webpack_exports__,"c",(function(){return watchJsonArrayString})),__webpack_require__.d(__webpack_exports__,"d",(function(){return watchNumber})),__webpack_require__.d(__webpack_exports__,"e",(function(){return setEventTargetAndStopPropagation})),__webpack_require__.d(__webpack_exports__,"f",(function(){return emptyStringByArrayHandler})),__webpack_require__.d(__webpack_exports__,"g",(function(){return mapBoolean2String})),__webpack_require__.d(__webpack_exports__,"h",(function(){return scrollBySelector})),__webpack_require__.d(__webpack_exports__,"i",(function(){return KoliBriUtils})),__webpack_require__.d(__webpack_exports__,"j",(function(){return koliBriA11yColorContrast})),__webpack_require__.d(__webpack_exports__,"k",(function(){return koliBriQuerySelector})),__webpack_require__.d(__webpack_exports__,"l",(function(){return koliBriQuerySelectorAll})),__webpack_require__.d(__webpack_exports__,"m",(function(){return mapStringOrBoolean2String})),__webpack_require__.d(__webpack_exports__,"n",(function(){return koliBriQuerySelectorColors})),__webpack_require__.d(__webpack_exports__,"o",(function(){return objectObjectHandler})),__webpack_require__.d(__webpack_exports__,"p",(function(){return parseJson})),__webpack_require__.d(__webpack_exports__,"q",(function(){return stringifyJson})),__webpack_require__.d(__webpack_exports__,"r",(function(){return rgbaConvert})),__webpack_require__.d(__webpack_exports__,"s",(function(){return setState})),__webpack_require__.d(__webpack_exports__,"t",(function(){return watchString}));var _dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(61),_index_m_df5ce03f_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(907),_a11y_tipps_1f6fb00f_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(905),_register_9f63b6c5_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(62);const pushNodes=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},querySelectorAll=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const r=new Set;pushNodes(r,t.querySelectorAll(e));const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const n=o[t].shadowRoot;pushNodes(r,querySelectorAll(e,"object"==typeof n&&null!==n?n:o[t]))}return Array.from(r)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},querySelector=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let r=t.querySelector(e);if(null===r){const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const n=o[t].shadowRoot;if(r=querySelector(e,"object"==typeof n&&null!==n?n:o[t]),null!==r)break}}return r}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var rgbaConvert=arr,arr_1=arr,obj_1=function obj(e){var t=parse(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},css_1=function css(e){var t=parse(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},hex_1=function hex(e){3==(t=parse(e)).length&&t.push(255);var t,r=255==t[3],o=num2hex(t[0]),n=num2hex(t[1]),l=num2hex(t[2]),a=function isshort(e,t,r,o){var n=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=n.indexOf(e)&&-1!=n.indexOf(t)&&-1!=n.indexOf(r)&&-1!=n.indexOf(o)}(o,n,l,t=num2hex(Math.round(t[3])));return r?a?"#"+o.charAt(0)+n.charAt(0)+l.charAt(0):"#"+o+n+l:a?"#"+o.charAt(0)+n.charAt(0)+l.charAt(0)+t.charAt(0):"#"+o+n+l+t},num_1=function num(e){var t=parse(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function arr(e){var t=parse(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function parse(e){return"string"==typeof e?function name(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function hex3(e){var t=e.replace(/^#/,""),r=t.length;if(3==r||4==r){var o=hex2num(t[0]),n=hex2num(t[1]),l=hex2num(t[2]),a=3==r?255:hex2num(t[3]);if(isNaN(o)||isNaN(n)||isNaN(l)||isNaN(a))return;return[o,n,l,a]}}(e)||function hex6(e){var t=e.replace(/^#/,""),r=t.length;if(6==r||8==r){var o=hex2num(t.slice(0,2)),n=hex2num(t.slice(2,4)),l=hex2num(t.slice(4,6)),a=6==r?255:hex2num(t.slice(6,8));if(isNaN(o)||isNaN(n)||isNaN(l)||isNaN(a))return;return[o,n,l,a]}}(e)||function rgb(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=getnum(t[0],!0),o=getnum(t[1],!0),n=getnum(t[2],!0);if(-1!=r&&-1!=o&&-1!=n)return[r,o,n,255]}}(e)||function rgba(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=getnum(t[0],!0),o=getnum(t[1],!0),n=getnum(t[2],!0),l=getnum(255*t[3]);if(-1!=r&&-1!=o&&-1!=n&&-1!=l)return[r,o,n,l]}}(e)||[0,0,0,255]:function object(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=getnum(null!=e.r?e.r:null!=e.red?e.red:0,!0),r=getnum(null!=e.g?e.g:null!=e.green?e.green:0,!0),o=getnum(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),n=getnum(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=r&&-1!=o&&-1!=n)return[t,r,o,n]}}(e)||function array(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=getnum(e[0],!0),r=getnum(e[1],!0),o=getnum(e[2],!0),n=getnum(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=r&&-1!=o&&-1!=n)return[t,r,o,n]}}(e)||function number(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function num2hex(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function hex2num(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function getnum(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}rgbaConvert.arr=arr_1,rgbaConvert.obj=obj_1,rgbaConvert.css=css_1,rgbaConvert.hex=hex_1,rgbaConvert.num=num_1;const OBJECT_OBJECT=/\[object Object\]/,objectObjectHandler=(e,t)=>{"string"==typeof e&&OBJECT_OBJECT.test(e)||t()},emptyStringByArrayHandler=(e,t)=>{"string"==typeof e&&""===e||t()},setEventTargetAndStopPropagation=(e,t)=>{Object.defineProperty(e,"target",{value:t,writable:!1}),null==e||e.stopPropagation()},setState=(e,t,r,o={})=>{var n,l;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==r&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof o.afterPatch&&(null===(n=e.nextHooks.get(t))||void 0===n||n.set("afterPatch",o.afterPatch)),"function"==typeof o.beforePatch&&(null===(l=e.nextHooks.get(t))||void 0===l||l.set("beforePatch",o.beforePatch)),e.nextState.set(t,r),(e=>{var t,r,o;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,r)=>{var o;const n=t.get("beforePatch");"function"==typeof n&&n(null===(o=e.nextState)||void 0===o?void 0:o.get(r),e.nextState,e,r)})),(null===(r=e.nextState)||void 0===r?void 0:r.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(o=e.nextHooks)||void 0===o||o.forEach(((t,r)=>{const o=t.get("afterPatch");"function"==typeof o&&o(e.state[r],e.state,e,r)}))),delete e.nextHooks})(e))},watchValidator=(e,t,r,o,n,l={})=>{!r(n)||void 0!==(null==l?void 0:l.allowNull)&&!1!==(null==l?void 0:l.allowNull)&&null!==n?void 0!==(null==l?void 0:l.defaultValue)||void 0===(null==l?void 0:l.required)||!1===(null==l?void 0:l.required)?setState(e,t,null==l?void 0:l.defaultValue,null==l?void 0:l.hooks):(!0===l.allowNull&&o.add(null),!0!==l.required&&o.add(void 0),((e,t,r,o)=>{Object(_a11y_tipps_1f6fb00f_js__WEBPACK_IMPORTED_MODULE_2__.d)(`[${e.constructor.name}] Der Property-Wert (${r}) für '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(o).join(", ")}`)})(e,t,n,o)):setState(e,t,n,null==l?void 0:l.hooks)},watchBoolean=(e,t,r,o)=>{watchValidator(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),r,o)},watchString=(e,t,r,o)=>{watchValidator(e,t,(e=>"string"==typeof e&&e.length>=("number"==typeof(null==o?void 0:o.minLength)?null==o?void 0:o.minLength:1)),new Set(["String (nicht leer)"]),r,o)},watchNumber=(e,t,r,o)=>{watchValidator(e,t,(e=>"number"==typeof e&&(void 0===(null==o?void 0:o.min)||"number"==typeof(null==o?void 0:o.min)&&e>=o.min)&&(void 0===(null==o?void 0:o.max)||"number"==typeof(null==o?void 0:o.max)&&e<=o.max)),new Set(["Number"]),r,o)},watchJsonArrayString=(e,t,r,o,n=(e=>e==e),l={})=>{emptyStringByArrayHandler(o,(()=>{objectObjectHandler(o,(()=>{void 0===o&&(o=[]);try{if("string"==typeof o&&(o=parseJson(o)),Array.isArray(o)){const a=o.find((e=>!r(e)));void 0===a&&n(o)?setState(e,t,o,l.hooks):objectObjectHandler(a,(()=>{throw console.log(a),new Error("↑ Das Schema für das Property (_options) ist nicht valide. Der Wert wird nicht geändert.")}))}else objectObjectHandler(o,(()=>{throw new Error("↑ Das Schema für das Property (_options) ist nicht valide. Der Wert wird nicht geändert.")}))}catch(e){Object(_a11y_tipps_1f6fb00f_js__WEBPACK_IMPORTED_MODULE_2__.d)("Known bug: Zeichenkettenliste (string[])")}}))}))},stringifyJson=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(e){throw new Error("↑ Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet.")}},parseJson=e=>{try{return JSON.parse(e)}catch(t){try{return JSON.parse(e.replace(/'/g,'"'))}catch(e){throw new Error("↑ Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anführungszeichen im Text maskiert werden (&#8216;).")}}},mapBoolean2String=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,mapStringOrBoolean2String=e=>"string"==typeof e?e:mapBoolean2String(e),koliBriQuerySelector=(e,t)=>querySelector(e,t||Object(_dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__.i)()),koliBriQuerySelectorAll=(e,t)=>querySelectorAll(e,t||Object(_dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__.i)());let DEFAULT_COLOR_CONTRAST=null;const getDefaultColorContrast=()=>(DEFAULT_COLOR_CONTRAST=DEFAULT_COLOR_CONTRAST||{backgroundColor:"#00000000",color:"#00000000",domNode:Object(_dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__.i)().body,level:"Fail",score:1},DEFAULT_COLOR_CONTRAST),TRANSPARENT_REGEXP=/(\d+, ){3}0\)/,koliBriA11yColorContrast=(e,t=getDefaultColorContrast())=>{const r=getComputedStyle(e),o=TRANSPARENT_REGEXP.test(r.backgroundColor)?t.backgroundColor:rgbaConvert.hex(r.backgroundColor),n=TRANSPARENT_REGEXP.test(r.color)?t.color:rgbaConvert.hex(r.color),l=Object(_index_m_df5ce03f_js__WEBPACK_IMPORTED_MODULE_1__.b)(o,n),a={backgroundColor:o,color:n,domNode:e,level:Object(_index_m_df5ce03f_js__WEBPACK_IMPORTED_MODULE_1__.a)(l),score:l};return l<4.5&&_dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__.c.error(["Color-Contrast-Error",{backgroundColor:a.backgroundColor,color:a.color,level:a.level,score:a.score},a.domNode]),a},koliBriQuerySelectorColors=(e,t=getDefaultColorContrast())=>{t.domNode instanceof HTMLElement&&(t=koliBriA11yColorContrast(t.domNode,t));const r=t.domNode.querySelector(e);if(null===r){const r=t.domNode.querySelectorAll('[class="hydrated"]');for(let o=0;o<r.length&&(t.domNode=r[o],null===(t=koliBriQuerySelectorColors(e,t)).domNode);o++);return t}return koliBriA11yColorContrast(r,t)},scrollByHTMLElement=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+Object(_dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__.d)().pageYOffset-50}),e.focus()):Object(_a11y_tipps_1f6fb00f_js__WEBPACK_IMPORTED_MODULE_2__.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},scrollBySelector=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){Object(_a11y_tipps_1f6fb00f_js__WEBPACK_IMPORTED_MODULE_2__.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const r=`${t}`;t=e,e=r}if("string"==typeof e){const r=koliBriQuerySelector(e,t);r instanceof HTMLElement?scrollByHTMLElement(r):Object(_a11y_tipps_1f6fb00f_js__WEBPACK_IMPORTED_MODULE_2__.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else Object(_a11y_tipps_1f6fb00f_js__WEBPACK_IMPORTED_MODULE_2__.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class KoliBriUtils{static queryHtmlElementColors(e,t,r=!1,o=!0){let n=null;if(!0===r||!1===KoliBriUtils.executionLock)if(!1===r&&(KoliBriUtils.cache.clear(),KoliBriUtils.cache.set(t.domNode,t),KoliBriUtils.executionLock=!0,!0===o&&_dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__.c.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)n=t;else{const r=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)r.add(e[t])}const o=t.domNode;if("function"==typeof o.assignedNodes){const e=o.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&r.add(e[t])}const l=t.domNode.children;for(let e=0;e<l.length;e++)r.add(l[e]);const a=Array.from(r);for(let r=0;r<a.length;r++){let o=KoliBriUtils.cache.get(a[r]);void 0===o&&(o=koliBriA11yColorContrast(a[r],t)),KoliBriUtils.cache.set(a[r],o);const l=KoliBriUtils.queryHtmlElementColors(e,o,!0,!1);if(null!==l){n=l;break}}}else _dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__.c.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===r&&(!0===o&&_dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__.c.debug(`[KoliBriUtils] Color contrast analysis finished (${KoliBriUtils.cache.size} DOM elements are analysed).`),KoliBriUtils.executionLock=!1,KoliBriUtils.cache.clear()),n}}KoliBriUtils.executionLock=!1,KoliBriUtils.cache=new Map;class KoliBriKeyValueStore extends _dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__.a{constructor(){super(...arguments),this.store=new Map}register(e,t){return this.store.set(e,t),this}get(e){if(this.store.has(e))return this.store.get(e);throw new Error(`No value for key '${e}' in KoliBri-Store found.`)}}class KoliBriDevHelper{}KoliBriDevHelper.keyStore=new KoliBriKeyValueStore,KoliBriDevHelper.patchTheme=_register_9f63b6c5_js__WEBPACK_IMPORTED_MODULE_3__.d,KoliBriDevHelper.patchThemeTag=_register_9f63b6c5_js__WEBPACK_IMPORTED_MODULE_3__.b,KoliBriDevHelper.querySelector=koliBriQuerySelector,KoliBriDevHelper.querySelectorAll=koliBriQuerySelectorAll,KoliBriDevHelper.scrollByHTMLElement=scrollByHTMLElement,KoliBriDevHelper.scrollBySelector=scrollBySelector,KoliBriDevHelper.stringifyJson=stringifyJson},907:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return f})),__webpack_require__.d(__webpack_exports__,"b",(function(){return s}));var e=1/12.92;function u(n){return Math.pow((n+.055)/1.055,2.4)}function a(a){var i=a[0]/255,c=a[1]/255,o=a[2]/255;return.2126*(i<=.03928?i*e:u(i))+.7152*(c<=.03928?c*e:u(c))+.0722*(o<=.03928?o*e:u(o))}function i(n){var r=255;8===(n=n.replace(/^#/,"")).length&&(r=parseInt(n.slice(6,8),16),n=n.substring(0,6)),4===n.length&&(r=parseInt(n.slice(3,4).repeat(2),16),n=n.substring(0,3)),3===n.length&&(n=n[0]+n[0]+n[1]+n[1]+n[2]+n[2]);var t=parseInt(n,16);return[t>>16,t>>8&255,255&t,r]}function o(n,r){return function c(n,r){return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}(a(n),a(r))}function s(n,r){return o(i(n),i(r))}function f(n){return n>=7?"AAA":n>=4.5?"AA":n>=3?"AA Large":"Fail"}},971:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"initialize",(function(){return initialize}));var _dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(61),_prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(906);function prototypeKoliBri(e,t){try{Object.defineProperty(_dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__.b,e,{get:function(){return t}})}catch(t){_dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__.c.debug(`KoliBri property ${e} is already bind.`)}}const initialize=()=>{if(Object(_dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__.j)(),Object(_dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__.g)()){Object(_dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__.m)(),prototypeKoliBri("a11yColorContrast",_prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_1__.j),prototypeKoliBri("querySelector",_prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_1__.k),prototypeKoliBri("querySelectorAll",_prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_1__.l),prototypeKoliBri("querySelectorColors",_prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_1__.n),prototypeKoliBri("utils",(function(){return _prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_1__.i})),prototypeKoliBri("parseJson",_prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_1__.p),prototypeKoliBri("stringifyJson",_prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_1__.q);const e=Object(_dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__.i)().body,t=Object(_dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__.i)().createElement("svg");if(t.setAttribute("aria-label","KoliBri-DevTools"),t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t.setAttribute("role","toolbar"),t.setAttribute("style","position: fixed;color: black;font-size: 200%;bottom: 0.25rem;right: 0.25rem;"),t.innerHTML='<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="50"\n  height="50"\n  viewBox="0 0 600 600"\n>\n  <path d="M353 322L213 304V434L353 322Z" fill="#047" />\n  <path d="M209 564V304L149 434L209 564Z" fill="#047" />\n  <path d="M357 316L417 250L361 210L275 244L357 316Z" fill="#047" />\n  <path d="M353 318L35 36L213 300L353 318Z" fill="#047" />\n  <path d="M329 218L237 92L250 222L272 241L329 218Z" fill="#047" />\n  <path d="M391 286L565 272L421 252L391 286Z" fill="#047" />\n</svg>',Object(_dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__.i)().body.appendChild(t),_dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__.c.debug("Wer weiß, wie Intelligence im VS Code auch bei peerDependencies funktioniert?\n\nAutovervollständigung funktioniert bei uns nur mit Paketen, die auch in der package.json eingetragen sind unabhängig davon das sie in den node_modules liegen."),Object(_dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__.h)()){_dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__.c.debug("Color-Contrast-Analysis activated");const t=setTimeout((()=>{clearTimeout(t),setInterval((()=>{_prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_1__.i.queryHtmlElementColors(Object(_dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__.i)().createElement("div"),Object(_prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_1__.j)(e),!1,!1)}),1e4)}),2500)}else _dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_0__.c.debug("Color-Contrast-Analysis not activated")}}}}]);