/*!
 * KoliBri - The accessible HTML-Standard
 */
import{p as e}from"./reuse-c2156413.js";class t{constructor(){this.lockedElements=new Map;this.modalStack=new Map}lockElement(e){const t=e.getAttribute("tabindex");if(e instanceof HTMLAnchorElement||e instanceof HTMLButtonElement||e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement||typeof t==="string"||e.dataset.kolModal!==undefined){if(typeof t==="string"){this.lockedElements.set(e,{tabIndex:t})}else{this.lockedElements.set(e,{})}e.setAttribute("tabindex","-1");e.setAttribute("aria-hidden","true");e.style.userSelect="none"}}unlockElement(e,t){if(typeof e.tabIndex==="string"){t.setAttribute("tabindex",e.tabIndex)}else{t.removeAttribute("tabindex")}t.removeAttribute("aria-hidden");t.style.userSelect="unset";this.lockedElements.delete(t)}unlockLockedElements(e){e.forEach(this.unlockElement.bind(this))}lockFocus(e,t){if(e!==t&&(e instanceof HTMLElement||e instanceof ShadowRoot)){if(e instanceof HTMLElement){this.lockElement(e);this.lockFocus(e.shadowRoot,t)}for(let i=0;i<e.children.length;i++){this.lockFocus(e.children[i],t)}}}renderModalIfExists(e){if(e instanceof HTMLElement){if(this.lockedElements.has(e)){this.unlockElement(this.lockedElements.get(e),e)}const t=setTimeout((()=>{clearTimeout(t);e.focus()}),500)}this.unlockLockedElements(this.lockedElements);if(this.modalStack.size>0){const e=Array.from(this.modalStack.keys());const t=e[e.length-1];this.modalStack.forEach(((e,i)=>{if(t===i){i.style.display="inline"}else{i.style.display=`none`}}));a().body.style.maxHeight="100vh";a().body.style.overflow="hidden";this.lockFocus(a().body,t)}else{a().body.style.maxHeight="unset";a().body.style.overflow="unset"}}openModal(e,t){if(e instanceof HTMLElement===false){v.warn(`[KolModalService] Die DOM-Referenz des Modals ist nicht valide.`)}else{this.modalStack.set(e,{activeElement:t});this.renderModalIfExists()}}closeModal(e){var t;if(e instanceof HTMLElement===false){v.warn(`[KolModalService] Die DOM-Referenz des Modals ist nicht valide.`)}else{const i=(t=this.modalStack.get(e))===null||t===void 0?void 0:t.activeElement;this.modalStack.delete(e);this.renderModalIfExists(i)}}}class i{constructor(e){this.document=e;this.queue=new Set;this.isOpen=false;this.toastElement=this.document.createElement("kol-toast");this.toastElement.setAttribute("_level","3");this.toastElement.setAttribute("_show","false");this.toastElement.setAttribute("_show-duration","-1");this.toastElement.setAttribute("_has-closer","true");this.toastElement._on={onClose:()=>{const e=this.queue.values().next();if(e.value){this.queue.delete(e.value);setTimeout((()=>{this.showToast(e.value)}),200)}else{this.isOpen=false}}};this.document.body.insertBefore(this.toastElement,this.document.body.firstChild)}enqueue(e){if(this.isOpen){this.queue.add(e)}else{this.showToast(e)}}showToast(e){this.toastElement.setAttribute("_heading",e.heading);this.toastElement.setAttribute("_show","true");this.toastElement.setAttribute("_type",e.type);this.toastElement.innerText=e.description;this.isOpen=true}}let n=null;let s=null;const o=e=>{if(e instanceof Window){n=e;if(n.document instanceof Document){s=e.document}else{console.warn(`The given Window has no valid Document.`)}}else{console.warn(`The given Window is not valid.`)}};const l=()=>n||typeof window==="undefined"?null:window;const a=()=>s||typeof l().document==="undefined"?null:l().document;let c=null;let r=null;let u=null;let d=null;const h=()=>r===true;const f=()=>u===true;const m=()=>d===true;class v{static mapToArray(e){return Array.isArray(e)?e:[e]}static handleClassifier(e){if(typeof e==="string"&&e.length>0){return`${v.shield.label} | ${e}`}else{return v.shield.label}}static getShield(e){return[v.handleClassifier(e===null||e===void 0?void 0:e.classifier),`${v.shield.style};${(e===null||e===void 0?void 0:e.overwriteStyle)||""}`]}static debug(e,t){if(r||(t===null||t===void 0?void 0:t.forceLog)===true){console.debug(...v.getShield(t),...v.mapToArray(e))}}static info(e,t){if(r||(t===null||t===void 0?void 0:t.forceLog)===true){console.info(...v.getShield(t),...v.mapToArray(e))}}static trace(e,t){if(r||(t===null||t===void 0?void 0:t.forceLog)===true){console.trace(...v.getShield(t),...v.mapToArray(e))}}static warn(e,t){if(r||(t===null||t===void 0?void 0:t.forceLog)===true){console.warn(...v.getShield(t),...v.mapToArray(e))}}static error(e,t){if(r||(t===null||t===void 0?void 0:t.forceLog)===true){console.error(...v.getShield(t),...v.mapToArray(e))}}static throw(e,t){if(r||(t===null||t===void 0?void 0:t.forceLog)===true){throw new Error(...v.getShield(t),...v.mapToArray(e))}}}v.shield={label:"%cKoliBri",style:"color: white; background: #666; font-weight: bold; padding: .25em .5em; border-radius: 3px; border: 1px solid #000"};const p=()=>{if(r===null&&u===null&&d===null){const e=a().querySelector('meta[name="kolibri"]');if(e&&e.hasAttribute("content")){c=e.getAttribute("content");if(typeof c==="string"){r=c.includes("dev-mode=true");u=c.includes("experimental-mode=true");d=c.includes("color-contrast-analysis=true")}}}else{console.warn(`You can only initialize DEV_MODE and COLOR_CONTRAST_ANALYSIS once.`)}};let b=null;const w=()=>b||{};const M=()=>{if(b===null){b=l().KoliBri||{};const e=new t;const n=new i(a());Object.defineProperty(b,"Modal",{get:function(){return e}});Object.defineProperty(b,"Toaster",{get:function(){return n}});p();v.debug(`\n\t,--. ,--.         ,--. ,--. ,-----.           ,--.\n\t|  .'   /  ,---.  |  | \`--' |  |) /_  ,--.--. \`--'\n\t|  .   '  | .-. | |  | ,--. |  .-.  \\ |  .--' ,--.\n\t|  |\\   \\ | '-' | |  | |  | |  '--' / |  |    |  |\n\t\`--' \`--´  \`---´  \`--' \`--' \`------´  \`--'    \`--'\n\t🚹 The accessible HTML-Standard | 👉 https://public-ui.github.io\n\t\t`,{forceLog:true})}else{console.warn(`You can only initialize KoliBri once.`)}};const T=()=>{if(l().KoliBri===undefined){Object.defineProperty(window,"KoliBri",{get:function(){return b}})}if(w().adviceShown!==true){Object.defineProperty(b,"adviceShown",{get:function(){return true}});v.debug(`\nYou are using the KoliBri component library. If you have any suggestions for improvement or find a problem, please contact us:\n\nTicket: https://github.com/public-ui/kolibri/issues/new/choose (for privacy reasons, please use email)\nEmail: kolibri@itzbund.de\n`)}};let g=()=>Math.floor(Math.random()*16777215).toString(16);if(e==="test"){g=()=>"nonce"}export{b as K,v as L,i as T,l as a,f as b,o as c,w as d,h as e,m as f,a as g,M as i,g as n,T as r};
//# sourceMappingURL=dev.utils-5b0de6da.js.map