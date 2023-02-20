/*! For license information please see 7720.89fd3034.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[7720],{97072:(t,e,i)=>{i.d(e,{w:()=>s});var a=i(39895);const s=(t,e,i)=>{(0,a.a)(t,e,(t=>"top"===t||"right"===t||"bottom"===t||"left"===t),new Set(["Alignment {top, right, buttom, left}"]),i,{defaultValue:"top"})}},77596:(t,e,i)=>{i.d(e,{a:()=>o,p:()=>r});var a=i(16105),s=i(12444),n=i(39895);const l=t=>{for((0,s.b)()&&((0,a.d)("\u2193 Search form element start."),console.log(t));t instanceof HTMLElement&&"FORM"!==t.tagName&&"KOL-FORM"!==t.tagName;)t=t.parentElement instanceof HTMLElement?t.parentElement:t.parentNode instanceof ShadowRoot?t.parentNode.host:null,(0,s.b)()&&console.log(t);return(0,s.b)()&&(0,a.d)("\u2191 Search form element finished."),t},o=(t={})=>{const e=l(t.form);if(e instanceof HTMLElement){const t=new Event("reset",{bubbles:!0,cancelable:!0});if("FORM"===e.tagName)(0,n.f)(t,e),e.dispatchEvent(t);else if("KOL-FORM"===e.tagName){(0,n.f)(t,n.K.querySelector("form",e));const i=e;"object"==typeof i._on&&null!==typeof i._on&&"function"==typeof i._on.onReset&&i._on.onReset(t)}}},r=(t={})=>{const e=l(t.form);if(e instanceof HTMLElement){const t=new SubmitEvent("submit",{bubbles:!0,cancelable:!0,submitter:e});if("FORM"===e.tagName)(0,n.f)(t,e),e.dispatchEvent(t);else if("KOL-FORM"===e.tagName){(0,n.f)(t,n.K.querySelector("form",e));const i=e;"object"==typeof i._on&&null!==typeof i._on&&"function"==typeof i._on.onSubmit&&i._on.onSubmit(t)}}}},25885:(t,e,i)=>{i.d(e,{a:()=>s,w:()=>n});var a=i(39895);const s=(t,e,i)=>{(0,a.a)(t,e,(t=>"button"===t||"reset"===t||"submit"===t),new Set(["KoliBriButtonType {button, reset, submit}"]),i)},n=(t,e,i)=>{(0,a.a)(t,e,(t=>"primary"===t||"secondary"===t||"normal"===t||"danger"===t||"ghost"===t||"custom"===t),new Set(["KoliBriButtonVariant {primary, secondary, normal, danger, ghost, custom}"]),i,{defaultValue:"normal"})}},47192:(t,e,i)=>{i.d(e,{i:()=>r,v:()=>h,w:()=>c});var a=i(16105),s=i(39895),n=i(39519);const l=(t,e,i)=>{(0,n.c)(i)?t[e]=i:(0,n.i)(i,1)&&(t[e]={icon:i})},o=t=>{var e,i,a,s,o,r,h;if(null===(e=t.nextState)||void 0===e?void 0:e.has("_icon")){const e=null===(i=t.nextState)||void 0===i?void 0:i.get("_icon"),o=(null===(a=t.nextState)||void 0===a?void 0:a.get("_iconAlign"))||t.state._iconAlign;null===(s=t.nextState)||void 0===s||s.set("_icon",((t,e)=>{let i={};return(0,n.i)(t,1)?i="right"===e?{right:{icon:t}}:{left:{icon:t}}:"object"==typeof t&&null!==t&&(l(i,"top",t.top),l(i,"right",t.right),l(i,"bottom",t.bottom),l(i,"left",t.left)),i})(e,o))}else if(null===(o=t.nextState)||void 0===o?void 0:o.has("_iconAlign")){const e=t.state._iconAlign;null===(r=t.nextState)||void 0===r||r.set("_icon",{[e]:void 0,[null===(h=t.nextState)||void 0===h?void 0:h.get("_iconAlign")]:t.state._icon[e]})}},r=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,n.b)(t.style))&&(0,n.i)(t.icon,1),h=(t,e)=>{(0,s.o)(e,(()=>{try{e=(0,s.p)(e)}catch(t){}(0,s.a)(t,"_icon",(t=>null===t||(0,n.i)(t,1)||"object"==typeof t&&null!==t&&((0,n.i)(t.left,1)||r(t.left)||(0,n.i)(t.right,1)||r(t.right)||(0,n.i)(t.top,1)||r(t.top)||(0,n.i)(t.bottom,1)||r(t.bottom))),new Set(["KoliBriIcon"]),e,{hooks:{beforePatch:(e,i)=>{null===e&&i.set("_icon",{}),o(t)}},required:!0})}))},c=(t,e)=>{(0,s.a)(t,"_iconAlign",(t=>"left"===t||"right"===t),new Set(["Alignment {left, right, top, bottom}"]),e,{hooks:{beforePatch:()=>{o(t)},afterPatch:t=>{(0,a.c)(`Das Property _icon-align bzw. _iconAlign ist veraltet (value: ${t}). Die Ausrichtung der Icon's kann jetzt direkt \xfcber das _icon-Property vorgenommen werden. (v1.1.10: https://public-ui.github.io/?path=/story/backlog-und-changelog--page)`)}}})}},57720:(t,e,i)=>{i.r(e),i.d(e,{kol_button_wc:()=>v,kol_span_wc:()=>p});var a=i(55640),s=i(97072),n=i(16105),l=i(12444),o=i(39895),r=i(39519),h=i(47192),c=i(34680),d=i(64609),_=i(77596),b=i(25885);const v=class{constructor(t){(0,a.r)(this,t),this.nonce=(0,l.n)(),this.catchRef=t=>{this.ref=t,(0,r.a)(this.host,this.ref)},this.onClick=t=>{var e,i;"submit"===this.state._type?(0,_.p)({form:this.host,ref:this.ref}):"reset"===this.state._type?(0,_.a)({form:this.host,ref:this.ref}):"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onClick)?((0,o.f)(t,this.ref),null===(i=this.state._on)||void 0===i||i.onClick(t,this.state._value)):(0,n.d)("It was no button click callback configured!")},this._accessKey=void 0,this._ariaControls=void 0,this._ariaCurrent=void 0,this._ariaExpanded=void 0,this._ariaLabel="",this._ariaSelected=void 0,this._customClass=void 0,this._disabled=!1,this._icon=void 0,this._iconAlign="left",this._iconOnly=!1,this._id=void 0,this._label=void 0,this._on=void 0,this._role=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._type="button",this._value=void 0,this._variant="normal",this.state={_ariaLabel:"",_icon:{},_iconAlign:"left",_label:"",_on:{},_type:"button"}}render(){return(0,a.h)(a.H,null,(0,a.h)("button",Object.assign({ref:this.catchRef,accessKey:this.state._accessKey,"aria-controls":this.state._ariaControls,"aria-current":(0,o.j)(this.state._ariaCurrent),"aria-expanded":(0,o.h)(this.state._ariaExpanded),"aria-label":!1===this.state._iconOnly?this.state._ariaLabel||this.state._label:void 0,"aria-labelledby":!0===this.state._iconOnly?this.nonce:void 0,"aria-selected":(0,o.j)(this.state._ariaSelected),class:{[this.state._variant]:"custom"!==this.state._variant,[this.state._customClass]:"custom"===this.state._variant&&"string"==typeof this.state._customClass&&this.state._customClass.length>0,"icon-only":!0===this.state._iconOnly},disabled:this.state._disabled,id:this.state._id},this.state._on,{onClick:this.onClick,role:this.state._role,tabIndex:this.state._tabIndex,type:this.state._type}),(0,a.h)("kol-span-wc",{_icon:this._icon,_iconOnly:this._iconOnly,_label:this.state._ariaLabel||this.state._label},(0,a.h)("slot",{name:"expert",slot:"expert"}))),!0===this.state._iconOnly&&(0,a.h)("kol-tooltip",{"aria-hidden":"true",_align:this.state._tooltipAlign,_id:this.nonce,_label:this.state._ariaLabel||this.state._label}))}validateAccessKey(t){(0,o.w)(this,"_accessKey",t)}validateAriaControls(t){(0,o.w)(this,"_ariaControls",t)}validateAriaCurrent(t){(0,o.a)(this,"_ariaControls",(t=>!0===t||"date"===t||"location"===t||"page"===t||"step"===t||"time"===t),new Set(["boolean","String {data, location, page, step, time}"]),t)}validateAriaExpanded(t){(0,o.b)(this,"_ariaExpanded",t)}validateAriaLabel(t){(0,c.v)(this,t)}validateAriaSelected(t){(0,o.b)(this,"_ariaSelected",t)}validateCustomClass(t){(0,o.w)(this,"_customClass",t,{defaultValue:void 0})}validateDisabled(t){(0,o.b)(this,"_disabled",t),!0===t&&(0,n.e)()}validateIcon(t){(0,h.v)(this,t)}validateIconAlign(t){(0,h.w)(this,t)}validateIconOnly(t){(0,o.b)(this,"_iconOnly",t,{defaultValue:!1})}validateId(t){(0,o.w)(this,"_id",t)}validateLabel(t){(0,c.a)(this,t)}validateOn(t){"object"==typeof t&&null!==t&&(this.state=Object.assign(Object.assign({},this.state),{_on:t}))}validateRole(t){(0,o.w)(this,"_role",t)}validateTabIndex(t){(0,d.v)(this,t)}validateTooltipAlign(t){(0,s.w)(this,"_tooltipAlign",t)}validateType(t){(0,b.a)(this,"_type",t)}validateValue(t){(0,o.s)(this,"_value",t)}validateVariant(t){(0,b.w)(this,"_variant",t)}componentWillLoad(){this.validateAccessKey(this._accessKey),this.validateAriaControls(this._ariaControls),this.validateAriaCurrent(this._ariaCurrent),this.validateAriaExpanded(this._ariaExpanded),this.validateAriaLabel(this._ariaLabel),this.validateAriaSelected(this._ariaSelected),this.validateCustomClass(this._customClass),this.validateDisabled(this._disabled),this.validateIcon(this._icon),this.validateIconAlign(this._iconAlign),this.validateIconOnly(this._iconOnly),this.validateId(this._id),this.validateLabel(this._label),this.validateOn(this._on),this.validateRole(this._role),this.validateTabIndex(this._tabIndex),this.validateTooltipAlign(this._tooltipAlign),this.validateType(this._type),this.validateValue(this._value),this.validateVariant(this._variant)}get host(){return(0,a.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_ariaControls:["validateAriaControls"],_ariaCurrent:["validateAriaCurrent"],_ariaExpanded:["validateAriaExpanded"],_ariaLabel:["validateAriaLabel"],_ariaSelected:["validateAriaSelected"],_customClass:["validateCustomClass"],_disabled:["validateDisabled"],_icon:["validateIcon"],_iconAlign:["validateIconAlign"],_iconOnly:["validateIconOnly"],_id:["validateId"],_label:["validateLabel"],_on:["validateOn"],_role:["validateRole"],_tabIndex:["validateTabIndex"],_tooltipAlign:["validateTooltipAlign"],_type:["validateType"],_value:["validateValue"],_variant:["validateVariant"]}}},u=t=>{t instanceof Node&&setTimeout((()=>{var e,i;null===(e=t.parentElement)||void 0===e||e.removeChild(t),null===(i=t.parentNode)||void 0===i||i.removeChild(t)}))},p=class{constructor(t){(0,a.r)(this,t),this._icon=void 0,this._iconOnly=!1,this._label=void 0,this.state={_icon:{},_iconOnly:!1,_label:""}}render(){return(0,a.h)(a.H,{class:{"icon-only":this.state._iconOnly}},this.state._icon.top&&(0,a.h)("kol-icon",{class:{"icon top":!0},style:this.state._icon.top.style,_ariaLabel:"",_icon:this.state._icon.top.icon}),(0,a.h)("span",null,this.state._icon.left&&(0,a.h)("kol-icon",{class:{"icon left":!0},style:this.state._icon.left.style,_ariaLabel:"",_icon:this.state._icon.left.icon}),!0!==this.state._iconOnly&&this.state._label.length>0?(0,a.h)("span",null,this.state._label):"",(0,a.h)("span",{ref:this.state._label.length>0||!0===this.state._iconOnly?u:void 0},(0,a.h)("slot",{name:"expert"})),this.state._icon.right&&(0,a.h)("kol-icon",{class:{"icon right":!0},style:this.state._icon.right.style,_ariaLabel:"",_icon:this.state._icon.right.icon})),this.state._icon.bottom&&(0,a.h)("kol-icon",{class:{"icon bottom":!0},style:this.state._icon.bottom.style,_ariaLabel:"",_icon:this.state._icon.bottom.icon}))}validateIcon(t){(0,h.v)(this,t)}validateIconOnly(t){(0,o.b)(this,"_iconOnly",t)}validateLabel(t){(0,c.a)(this,t)}componentWillLoad(){this.validateIcon(this._icon),this.validateIconOnly(this._iconOnly),this.validateLabel(this._label)}static get watchers(){return{_icon:["validateIcon"],_iconOnly:["validateIconOnly"],_label:["validateLabel"]}}}},34680:(t,e,i)=>{i.d(e,{a:()=>_,c:()=>h,h:()=>r,v:()=>d});var a=i(16105),s=i(39895),n=i(39519);const l=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,o=/^\d+$/,r=(t,e=1)=>(t=>{var e;return"string"==typeof t&&(null===(e=t.match(l))||void 0===e?void 0:e.length)||0})(t)>=e,h=t=>o.test(t),c=(t,e,i,s)=>{const l=e.has("_ariaLabel")?e.get("_ariaLabel"):i.state._ariaLabel;if("string"==typeof l){const t=e.has("_label")?e.get("_label"):i.state._label;!1===(0,n.d)(t,l)&&("_ariaLabel"===s?e.set("_label",l):e.set("_ariaLabel",t),(0,a.a)("Das abweichende Aria-Label ist nicht barrierefrei. Ein abweichendes Aria-Label muss aus Gr\xfcndern der Barrierefreiheit f\xfcr die Sprachsteuerung mit dem Label-Text beginnen."))}},d=(t,e)=>{(0,s.w)(t,"_ariaLabel",e,{hooks:{afterPatch:t=>{"string"==typeof t&&t.length>0&&!1===r(t,3)&&!1===h(t)&&(0,a.a)(`Ein abweichendes Aria-Label (${t}) ist nicht barrierefrei. Ein abweichendes Aria-Label sollte aus mindestens drei lesbaren Zeichen bestehen.`)},beforePatch:c}})},_=(t,e)=>{(0,s.w)(t,"_label",e,{hooks:{afterPatch:t=>{"string"==typeof t&&!1===r(t,3)&&!1===h(t)&&(0,a.a)(`Ein Label (${t}) ist nicht barrierefrei. Ein Label sollte aus mindestens drei lesbaren Zeichen bestehen.`)},beforePatch:c},required:!0})}},64609:(t,e,i)=>{i.d(e,{v:()=>l});var a=i(16105),s=i(39895);const n={hooks:{afterPatch:t=>{-1!==t&&0!==t&&(0,a.a)("Don\u2019t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},l=(t,e)=>{(0,s.e)(t,"_tabIndex",e,n)}}}]);