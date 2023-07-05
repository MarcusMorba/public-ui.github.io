/*! For license information please see 9521.e8de36d2.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[9521],{59521:(t,o,a)=>{a.r(o),a.d(o,{kol_badge:()=>h});var e=a(23837),i=a(77791),s=a(52818),n=a(10313),r=a(27260),l=a(43834);(0,s.f)("[KolBadge] Optimierung des _color-Properties (rgba, rgb, hex usw.).");const h=class{constructor(t){(0,e.r)(this,t),this.bgColorStr="#000",this.colorStr="#fff",this.id=(0,r.n)(),this.handleColorChange=t=>{const o=(0,i.h)(t);this.bgColorStr=o.backgroundColor,this.colorStr=o.foregroundColor},this._color="#000",this._hideLabel=!1,this._icon=void 0,this._iconOnly=void 0,this._label=void 0,this._smartButton=void 0,this.state={_color:{backgroundColor:"#000",foregroundColor:"#fff"},_label:"\u2026"}}render(){return(0,e.h)(e.H,null,(0,e.h)("span",{class:{"smart-button":"object"==typeof this.state._smartButton&&null!==this.state._smartButton},style:{backgroundColor:this.bgColorStr,color:this.colorStr}},(0,e.h)("kol-span-wc",{id:this.id,_icon:this._icon,_hideLabel:this._hideLabel||this._iconOnly,_label:this.state._label}),"object"==typeof this.state._smartButton&&null!==this.state._smartButton&&(0,e.h)("kol-button-wc",{_ariaControls:this.id,_customClass:this.state._smartButton._customClass,_disabled:this.state._smartButton._disabled,_hideLabel:!0,_icon:this.state._smartButton._icon,_id:this.state._smartButton._id,_label:this.state._smartButton._label,_on:this.state._smartButton._on,_tooltipAlign:this.state._smartButton._tooltipAlign,_variant:this.state._smartButton._variant})))}validateColor(t){(0,i.v)(this,t,{defaultValue:"#000",hooks:{beforePatch:this.handleColorChange}})}validateLabel(t){(0,l.v)(this,t,{hooks:{afterPatch:t=>{"string"==typeof t&&t.length>32&&(0,s.a)(`[KolBadge] The label is too long for a badge (${t.length} > 32).`)}}})}validateSmartButton(t){(0,n.o)(t,(()=>{try{t=(0,n.p)(t)}catch(t){}(0,n.s)(this,"_smartButton",t)}))}componentWillLoad(){this.validateColor(this._color),this.validateLabel(this._label),this.validateSmartButton(this._smartButton)}static get watchers(){return{_color:["validateColor"],_label:["validateLabel"],_smartButton:["validateSmartButton"]}}};h.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host>span{display:inline-flex;place-items:center}:host>span>kol-button-wc button{color:inherit}"}},43834:(t,o,a)=>{a.d(o,{c:()=>l,h:()=>r,v:()=>h});var e=a(52818),i=a(10313);const s=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,n=/^\d+$/;function r(t,o=1){return function(t){var o;return"string"==typeof t&&(null===(o=t.match(s))||void 0===o?void 0:o.length)||0}(t)>=o}function l(t){return n.test(t)}const h=(t,o,a={})=>{var s;(0,i.w)(t,"_label",o,{hooks:{afterPatch:(t,o,i,s)=>{var n,h;"function"==typeof(null===(n=a.hooks)||void 0===n?void 0:n.afterPatch)&&(null===(h=a.hooks)||void 0===h||h.afterPatch(t,o,i,s)),"string"==typeof t&&!1===r(t,3)&&!1===l(t)&&(0,e.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,e.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(s=a.hooks)||void 0===s?void 0:s.beforePatch},required:!0})}}}]);