/*! * KoliBri - The accessible HTML-Standard */ import{r as i,h as t,H as s}from"./index-330c31f9.js";import{c as o,b as e,o as a,f as n,s as h,a as l}from"./floating-ui.dom.esm-0dc6aa99.js";import{w as r}from"./button-link-6460a64a.js";import{v as d}from"./label-8d64163d.js";import{g as p,n as c}from"./dev.utils-5b0de6da.js";import{w as f}from"./prop.validators-0a66a178.js";import{p as m}from"./reuse-c2156413.js";import"./a11y.tipps-beae7792.js";import"./index-3711603c.js";const u=new Set;function b(i){u.forEach((i=>{i.style.setProperty("z-index","999")}));u.add(i);i.style.setProperty("z-index","1000")}function v(i){u.delete(i);if(u.size>0){const i=Array.from(u).pop();if(i){i.style.setProperty("z-index","1000")}}}const x=":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}kol-tooltip #floating{animation-duration:0.5s;animation-iteration-count:1;animation-name:fadeInOpacity;animation-timing-function:ease-in;box-sizing:border-box;display:none;position:absolute;visibility:hidden;width:max-content;top:0;left:0}kol-tooltip #arrow{height:10px;position:absolute;transform:rotate(45deg);width:10px;z-index:999}kol-tooltip .area{background-color:#fff;color:#000}kol-tooltip kol-span-wc{position:relative;z-index:1000}@keyframes fadeInOpacity{0%{opacity:0}100%{opacity:1}}";const y=class{constructor(t){i(this,t);this.alignTooltip=()=>{var i;if(m!=="test"&&this.previousSibling&&this.tooltipElement){const t=this.previousSibling;const s=this.tooltipElement;const e=this.arrowElement;const r=[a((i=e===null||e===void 0?void 0:e.offsetHeight)!==null&&i!==void 0?i:10),n(),h()];if(e){r.push(l({element:e}))}void o(t,s,{placement:this.state._align,middleware:r}).then((({x:i,y:t,middlewareData:o,placement:a})=>{var n,h;Object.assign(s.style,{left:`${i}px`,top:`${t}px`,visibility:"visible"});if(e){if((n=o.arrow)===null||n===void 0?void 0:n.x){Object.assign(e.style,{left:`${o.arrow.x}px`,top:a==="bottom"?`${-e.offsetHeight/2}px`:"",bottom:a==="top"?`${-e.offsetHeight/2}px`:""})}else if((h=o.arrow)===null||h===void 0?void 0:h.y){Object.assign(e.style,{left:a==="right"?`${-e.offsetWidth/2}px`:"",right:a==="left"?`${-e.offsetWidth/2}px`:"",top:`${o.arrow.y}px`})}}}))}};this.showTooltip=()=>{if(this.previousSibling&&this.tooltipElement){b(this.tooltipElement);this.tooltipElement.style.setProperty("display","block");p().body.addEventListener("keyup",this.hideTooltipByEscape);const i=this.previousSibling;const t=this.tooltipElement;this.cleanupAutoPositioning=e(i,t,this.alignTooltip)}};this.hideTooltip=()=>{if(this.tooltipElement){v(this.tooltipElement);this.tooltipElement.style.setProperty("display","none");this.tooltipElement.style.setProperty("visibility","hidden");if(this.cleanupAutoPositioning){this.cleanupAutoPositioning();this.cleanupAutoPositioning=undefined}}};this.hideTooltipByEscape=i=>{if(i.key==="Escape"){p().body.removeEventListener("keyup",this.hideTooltipByEscape);this.hideTooltip()}};this.addListeners=i=>{i.addEventListener("mouseover",this.incrementOverFocusCount);i.addEventListener("focus",this.incrementOverFocusCount);i.addEventListener("mouseout",this.decrementOverFocusCount);i.addEventListener("blur",this.decrementOverFocusCount)};this.removeListeners=i=>{i.removeEventListener("mouseover",this.incrementOverFocusCount);i.removeEventListener("focus",this.incrementOverFocusCount);i.removeEventListener("mouseout",this.decrementOverFocusCount);i.removeEventListener("blur",this.decrementOverFocusCount)};this.resyncListeners=i=>{this.removeListeners(i);this.addListeners(i)};this.catchHostElement=i=>{if(i){this.previousSibling=i.previousElementSibling;if(this.previousSibling){this.resyncListeners(this.previousSibling)}}};this.catchTooltipElement=i=>{this.tooltipElement=i;if(this.tooltipElement){this.resyncListeners(this.tooltipElement)}};this.catchArrowElement=i=>{this.arrowElement=i};this.overFocusCount=0;this.incrementOverFocusCount=()=>{this.overFocusCount++;this.showOrHideTooltip()};this.decrementOverFocusCount=()=>{this.overFocusCount--;this.showOrHideTooltip()};this.showOrHideTooltip=()=>{clearTimeout(this.overFocusTimeout);this.overFocusTimeout=setTimeout((()=>{clearTimeout(this.overFocusTimeout);if(this.overFocusCount>0){this.showTooltip()}else{this.hideTooltip()}}),250)};this._align="top";this._id=undefined;this._label=undefined;this.state={_align:"top",_id:c(),_label:"…"}}render(){return t(s,{ref:this.catchHostElement},this.state._label!==""&&t("div",{id:"floating",ref:this.catchTooltipElement},t("div",{class:"area",id:"arrow",ref:this.catchArrowElement}),t("kol-span-wc",{class:"area",id:this.state._id,_label:this.state._label})))}validateAlign(i){r(this,"_align",i)}validateId(i){f(this,"_id",i)}validateLabel(i){d(this,i)}componentWillLoad(){this.validateAlign(this._align);this.validateId(this._id);this.validateLabel(this._label)}disconnectedCallback(){if(this.previousSibling){this.removeListeners(this.previousSibling)}if(this.tooltipElement){this.removeListeners(this.tooltipElement)}if(this.cleanupAutoPositioning){this.cleanupAutoPositioning()}}static get watchers(){return{_align:["validateAlign"],_id:["validateId"],_label:["validateLabel"]}}};y.style=x;export{y as kol_tooltip}; //# sourceMappingURL=kol-tooltip.entry.js.map