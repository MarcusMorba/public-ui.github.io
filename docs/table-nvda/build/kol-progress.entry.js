/*!
 * KoliBri - The accessible HTML-Standard
 */
import{r as t,h as e,H as r}from"./index-330c31f9.js";import{v as i}from"./label-8d64163d.js";import{e as a,w as s,a as l}from"./prop.validators-0a66a178.js";import"./a11y.tipps-beae7792.js";import"./dev.utils-5b0de6da.js";import"./reuse-c2156413.js";import"./index-3711603c.js";var o;(function(t){t["bar"]="bar";t["cycle"]="cycle";t["cycle-value-label"]="cycle-value-label";t["cycle-label-value"]="cycle-label-value"})(o||(o={}));const n=":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}progress{display:block;height:0;overflow:hidden;width:0}.bar .border{fill:transparent;stroke:black}.bar .background{fill:lightgray;stroke:white}.bar .progress{fill:#0075ff;stroke:transparent;transition:250ms ease-in-out 50ms}.cycle .background{fill:transparent;stroke:lightgray}.cycle .border{fill:transparent;stroke:black}.cycle .whitespace{fill:transparent;stroke:white}.cycle .progress{fill:transparent;stroke:#0075ff;transform-origin:50% 50%;transform:rotate(-90deg);transition:250ms ease-in-out 50ms}@media (prefers-reduced-motion){.progress{transition-duration:0s;transition-delay:0s}}";const c=Object.keys(o);const d=t=>{const r=342;const i="43%";const a="57%";let s=i;let l=t._label?a:"50%";switch(t._variant){case"cycle-value-label":if(t._label){s=a;l=i}case"cycle":case"cycle-label-value":return e("svg",{class:"cycle",width:"100",viewBox:"0 0 120 120",xmlns:"http://www.w3.org/2000/svg"},e("circle",{class:"background",cx:"60",cy:"60",r:"54.5",fill:"currentColor",stroke:"currentColor","stroke-width":"8"}),e("circle",{class:"whitespace",cx:"60",cy:"60",r:"59",fill:"currentColor",stroke:"currentColor","stroke-width":"3"}),e("circle",{class:"border",cx:"60",cy:"60",r:"59",fill:"currentColor",stroke:"currentColor","stroke-width":"1"}),e("circle",{class:"whitespace",cx:"60",cy:"60",r:"51",fill:"currentColor",stroke:"currentColor","stroke-width":"1"}),e("circle",{class:"border",cx:"60",cy:"60",r:"50",fill:"currentColor",stroke:"currentColor","stroke-width":"1"}),e("circle",{class:"progress",fill:"currentColor",stroke:"currentColor","stroke-linecap":"round","stroke-dasharray":`${Math.round(t._value/t._max*r)}px ${r}px`,"stroke-width":"6",cx:"60",cy:"60",r:"54.5"}),t._label&&e("text",{"aria-hidden":"true",x:"50%",y:s,"text-anchor":"middle",fill:"currentColor"},t._label),e("text",{"aria-hidden":"true",x:"50%",y:l,"text-anchor":"middle",fill:"currentColor"},t._value,t._unit));default:return e("div",{class:"bar"},t._label&&e("div",null,t._label),e("div",{style:{display:"flex",gap:"0.3em"}},e("svg",{width:"100",viewBox:"0 0 102 8",xmlns:"http://www.w3.org/2000/svg"},e("rect",{class:"background",x:"1",y:"1",height:"10",rx:"5",fill:"currentColor",stroke:"currentColor","stroke-width":"3",width:"100"}),e("rect",{class:"progress",x:"2.5",y:"2.5",height:"7",rx:"3.5",fill:"currentColor",stroke:"currentColor","stroke-width":"3",width:95*(t._value/t._max)}),e("rect",{class:"border",x:"1",y:"1",height:"10",rx:"5",fill:"currentColor",stroke:"currentColor","stroke-width":"1",width:"100"})),e("text",{"aria-hidden":"true","text-anchor":"middle","dominant-baseline":"central",fill:"currentColor"},t._value,t._unit)))}};const h=class{constructor(e){t(this,e);this._label=undefined;this._max=undefined;this._type=undefined;this._unit="%";this._value=undefined;this._variant=undefined;this.state={_max:100,_unit:"%",_value:0,_variant:"bar",_liveValue:0}}render(){return e(r,null,d(this.state),e("progress",{"aria-busy":this.state._value<this.state._max?"true":"false",max:this.state._max,value:this.state._value}),e("span",{"aria-live":"polite","aria-relevant":"removals text",hidden:true},this.state._liveValue," von ",this.state._max," ",this.state._unit))}validateLabel(t){i(this,t)}validateMax(t){if(typeof t!=="number"){t=100}a(this,"_max",t,{required:true})}validateType(t){this.validateVariant(t)}validateUnit(t){s(this,"_unit",t)}validateValue(t){if(typeof t!=="number"){t=0}a(this,"_value",t,{required:true})}validateVariant(t){l(this,"_variant",(t=>typeof t==="string"&&c.includes(t)),new Set(c),t)}componentWillLoad(){this.validateLabel(this._label);this.validateMax(this._max);this.validateUnit(this._unit);this.validateValue(this._value);this.validateVariant(this._variant||this._type);this.interval=setInterval((()=>{if(this.state._liveValue!==this.state._value){this.state=Object.assign(Object.assign({},this.state),{_liveValue:this.state._value})}}),5e3)}disconnectedCallback(){clearInterval(this.interval)}static get watchers(){return{_label:["validateLabel"],_max:["validateMax"],_type:["validateType"],_unit:["validateUnit"],_value:["validateValue"],_variant:["validateVariant"]}}};h.style={default:n};export{h as kol_progress};
//# sourceMappingURL=kol-progress.entry.js.map