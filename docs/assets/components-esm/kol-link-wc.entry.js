/*! * KoliBri - The accessible HTML-Standard */ import{r as registerInstance,h,H as Host,g as getElement}from"./index-2c046ff1.js";import{a as translate}from"./i18n-23b83118.js";import{w as watchTooltipAlignment}from"./button-link-99acae48.js";import{v as validateAriaCurrent,a as validateAriaSelected}from"./aria-selected-b9d7d1e4.js";import{b as watchBoolean,w as watchString,f as setEventTarget,h as mapBoolean2String,i as scrollBySelector}from"./prop.validators-601f1068.js";import{v as validateHideLabel}from"./hide-label-9248468d.js";import{v as validateIcon,w as watchIconAlign}from"./icon-e03e73f6.js";import{a as validateLabelWithExpertSlot}from"./label-223fef8f.js";import{d as devHint,h as a11yHintDisabled}from"./a11y.tipps-9f948961.js";import{n as nonce}from"./dev.utils-4290338e.js";import{a as propagateFocus}from"./reuse-c2156413.js";import{v as validateTabIndex}from"./tab-index-fc60df7a.js";import"./index-d8ac1088.js";import"./index-37b5cbcf.js";const validateDownload=(t,a)=>{"boolean"==typeof a?watchBoolean(t,"_download",a):watchString(t,"_download",a)},validateHref=(t,a,e={})=>{watchString(t,"_href",a,e)},validateStealth=(t,a)=>{watchBoolean(t,"_stealth",a)},KolLinkWc=class{constructor(t){registerInstance(this,t),this.nonce=nonce(),this.catchRef=t=>{this.ref=t,propagateFocus(this.host,this.ref)},this.onClick=t=>{var a,e;"function"==typeof(null===(a=this.state._on)||void 0===a?void 0:a.onClick)&&(t.preventDefault(),setEventTarget(t,this.ref),null===(e=this.state._on)||void 0===e||e.onClick(t,this.state._href))},this.getRenderValues=()=>{let t={};"string"==typeof this.state._selector&&(t={role:"link",tabIndex:0,onClick:()=>{scrollBySelector(this.state._selector)},onKeyPress:()=>{scrollBySelector(this.state._selector)}});const a="string"==typeof this.state._target&&"_self"!==this.state._target,e={href:"string"==typeof this.state._href&&this.state._href.length>0?this.state._href:"javascript:void(0);",target:"string"==typeof this.state._target&&this.state._target.length>0?this.state._target:void 0,rel:a?"noopener":void 0};return"image"!==this.state._useCase&&!0!==this.state._hideLabel||this.state._label||devHint("[KolLink] Es muss ein Aria-Label gesetzt werden, wenn eine Grafik verlinkt oder der _hide-label gesetzt ist."),{isExternal:a,tagAttrs:e,goToProps:t}},this._ariaControls=void 0,this._ariaCurrent=void 0,this._ariaExpanded=void 0,this._ariaLabel=void 0,this._ariaSelected=void 0,this._disabled=!1,this._download=!1,this._hideLabel=!1,this._href=void 0,this._icon=void 0,this._iconAlign=void 0,this._iconOnly=void 0,this._label=void 0,this._on=void 0,this._role=void 0,this._selector=void 0,this._stealth=!1,this._tabIndex=void 0,this._target=void 0,this._targetDescription=translate("kol-open-link-in-tab"),this._tooltipAlign="right",this._useCase="text",this.state={_href:"…",_icon:{},_label:!1}}render(){const{isExternal:t,tagAttrs:a,goToProps:e}=this.getRenderValues(),i=!1===this.state._label;return h(Host,null,h("a",Object.assign({ref:this.catchRef},a,{"aria-controls":this.state._ariaControls,"aria-current":this.state._ariaCurrent,"aria-expanded":mapBoolean2String(this.state._ariaExpanded),"aria-labelledby":this.state._hideLabel?this.nonce:void 0,"aria-selected":mapBoolean2String(this.state._ariaSelected),class:{disabled:!0===this.state._disabled,"skip ":!1!==this.state._stealth,"icon-only":!0===this.state._hideLabel,"hide-label":!0===this.state._hideLabel,"external-link":t}},this.state._on,{onClick:this.onClick,onKeyPress:this.onClick},e,{role:this.state._role,tabIndex:this.state._tabIndex}),h("kol-span-wc",{_icon:this.state._icon,_hideLabel:this.state._hideLabel,_label:!i&&(this.state._label||this.state._href)},h("slot",{name:"expert",slot:"expert"})),t&&h("kol-icon",{class:"external-link-icon",_label:this.state._targetDescription,_icon:"codicon codicon-link-external"})),h("kol-tooltip",{"aria-hidden":"true",hidden:i||!this.state._hideLabel,_align:this.state._tooltipAlign,_id:this.nonce,_label:this.state._label||this.state._href}))}validateAriaControls(t){watchString(this,"_ariaControls",t)}validateAriaCurrent(t){validateAriaCurrent(this,t)}validateAriaExpanded(t){watchBoolean(this,"_ariaExpanded",t)}validateAriaLabel(t){this.validateLabel(t)}validateAriaSelected(t){validateAriaSelected(this,t)}validateDisabled(t){watchBoolean(this,"_disabled",t),!0===t&&a11yHintDisabled()}validateDownload(t){validateDownload(this,t)}validateHideLabel(t){validateHideLabel(this,t)}validateHref(t){validateHref(this,t)}validateIcon(t){validateIcon(this,t)}validateIconAlign(t){watchIconAlign(this,t)}validateIconOnly(t){this.validateHideLabel(t)}validateLabel(t){validateLabelWithExpertSlot(this,t)}validateOn(t){"object"==typeof t&&"function"==typeof(null==t?void 0:t.onClick)&&(this.state=Object.assign(Object.assign({},this.state),{_on:t}))}validateRole(t){watchString(this,"_role",t)}validateSelector(t){watchString(this,"_selector",t)}validateStealth(t){validateStealth(this,t)}validateTabIndex(t){validateTabIndex(this,t)}validateTarget(t){watchString(this,"_target",t)}validateTargetDescription(t){watchString(this,"_targetDescription",t)}validateTooltipAlign(t){watchTooltipAlignment(this,"_tooltipAlign",t)}validateUseCase(t){"string"==typeof t&&(this.state=Object.assign(Object.assign({},this.state),{_useCase:t}))}componentWillLoad(){this.validateAriaControls(this._ariaControls),this.validateAriaCurrent(this._ariaCurrent),this.validateAriaExpanded(this._ariaExpanded),this.validateAriaSelected(this._ariaSelected),this.validateDisabled(this._disabled),this.validateDownload(this._download),this.validateHideLabel(this._hideLabel||this._iconOnly),this.validateHref(this._href),this.validateIcon(this._icon),this.validateIconAlign(this._iconAlign),this.validateLabel(this._label||this._ariaLabel),this.validateOn(this._on),this.validateRole(this._role),this.validateSelector(this._selector),this.validateStealth(this._stealth),this.validateTabIndex(this._tabIndex),this.validateTarget(this._target),this.validateTargetDescription(this._targetDescription),this.validateTooltipAlign(this._tooltipAlign),this.validateUseCase(this._useCase)}get host(){return getElement(this)}static get watchers(){return{_ariaControls:["validateAriaControls"],_ariaCurrent:["validateAriaCurrent"],_ariaExpanded:["validateAriaExpanded"],_ariaLabel:["validateAriaLabel"],_ariaSelected:["validateAriaSelected"],_disabled:["validateDisabled"],_download:["validateDownload"],_hideLabel:["validateHideLabel"],_href:["validateHref"],_icon:["validateIcon"],_iconAlign:["validateIconAlign"],_iconOnly:["validateIconOnly"],_label:["validateLabel"],_on:["validateOn"],_role:["validateRole"],_selector:["validateSelector"],_stealth:["validateStealth"],_tabIndex:["validateTabIndex"],_target:["validateTarget"],_targetDescription:["validateTargetDescription"],_tooltipAlign:["validateTooltipAlign"],_useCase:["validateUseCase"]}}};export{KolLinkWc as kol_link_wc};