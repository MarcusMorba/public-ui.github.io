"use strict"; exports.id = 1933; exports.ids = [1933]; exports.modules = { /***/ 97072: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ "w": () => (/* binding */ watchTooltipAlignment) /* harmony export */ }); /* harmony import */ var _prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39895); /*! * KoliBri - The accessible HTML-Standard */ const watchTooltipAlignment=(t,o,a)=>{(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_0__.a)(t,o,(t=>"top"===t||"right"===t||"bottom"===t||"left"===t),new Set(["Alignment {top, right, buttom, left}"]),a,{defaultValue:"top"})}; /***/ }), /***/ 47192: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ "i": () => (/* binding */ isIcon), /* harmony export */ "v": () => (/* binding */ validateIcon), /* harmony export */ "w": () => (/* binding */ watchIconAlign) /* harmony export */ }); /* harmony import */ var _a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16105); /* harmony import */ var _prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39895); /* harmony import */ var _reuse_2b3b6999_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39519); /*! * KoliBri - The accessible HTML-Standard */ const mapCustomIcon=(t,o,i)=>{(0,_reuse_2b3b6999_js__WEBPACK_IMPORTED_MODULE_0__.c)(i)?t[o]=i:(0,_reuse_2b3b6999_js__WEBPACK_IMPORTED_MODULE_0__.i)(i,1)&&(t[o]={icon:i})},mapIconProp2State=(t,o)=>{let i={};if((0,_reuse_2b3b6999_js__WEBPACK_IMPORTED_MODULE_0__.i)(t,1))if("right"===o)i={right:{icon:t}};else i={left:{icon:t}};else"object"==typeof t&&null!==t&&(mapCustomIcon(i,"top",t.top),mapCustomIcon(i,"right",t.right),mapCustomIcon(i,"bottom",t.bottom),mapCustomIcon(i,"left",t.left));return i},beforePatchIcon=t=>{var o,i,e,n,a,c,s;if(null===(o=t.nextState)||void 0===o?void 0:o.has("_icon")){const o=null===(i=t.nextState)||void 0===i?void 0:i.get("_icon"),a=(null===(e=t.nextState)||void 0===e?void 0:e.get("_iconAlign"))||t.state._iconAlign;null===(n=t.nextState)||void 0===n||n.set("_icon",mapIconProp2State(o,a))}else if(null===(a=t.nextState)||void 0===a?void 0:a.has("_iconAlign")){const o=t.state._iconAlign;null===(c=t.nextState)||void 0===c||c.set("_icon",{[o]:void 0,[null===(s=t.nextState)||void 0===s?void 0:s.get("_iconAlign")]:t.state._icon[o]})}},isIcon=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,_reuse_2b3b6999_js__WEBPACK_IMPORTED_MODULE_0__.b)(t.style))&&(0,_reuse_2b3b6999_js__WEBPACK_IMPORTED_MODULE_0__.i)(t.icon,1),validateIcon=(t,o)=>{(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.o)(o,(()=>{try{o=(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.p)(o)}catch(t){}(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.a)(t,"_icon",(t=>null===t||(0,_reuse_2b3b6999_js__WEBPACK_IMPORTED_MODULE_0__.i)(t,1)||"object"==typeof t&&null!==t&&((0,_reuse_2b3b6999_js__WEBPACK_IMPORTED_MODULE_0__.i)(t.left,1)||isIcon(t.left)||(0,_reuse_2b3b6999_js__WEBPACK_IMPORTED_MODULE_0__.i)(t.right,1)||isIcon(t.right)||(0,_reuse_2b3b6999_js__WEBPACK_IMPORTED_MODULE_0__.i)(t.top,1)||isIcon(t.top)||(0,_reuse_2b3b6999_js__WEBPACK_IMPORTED_MODULE_0__.i)(t.bottom,1)||isIcon(t.bottom))),new Set(["KoliBriIcon"]),o,{hooks:{beforePatch:(o,i)=>{null===o&&i.set("_icon",{}),beforePatchIcon(t)}},required:!0})}))},watchIconAlign=(t,o)=>{(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.a)(t,"_iconAlign",(t=>"left"===t||"right"===t),new Set(["Alignment {left, right, top, bottom}"]),o,{hooks:{beforePatch:()=>{beforePatchIcon(t)},afterPatch:t=>{(0,_a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_2__.c)(`Das Property _icon-align bzw. _iconAlign ist veraltet (value: ${t}). Die Ausrichtung der Icon's kann jetzt direkt über das _icon-Property vorgenommen werden. (v1.1.10: https://public-ui.github.io/?path=/story/backlog-und-changelog--page)`)}}})}; /***/ }), /***/ 21933: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { __webpack_require__.r(__webpack_exports__); /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ "kol_link_wc": () => (/* binding */ KolLinkWc) /* harmony export */ }); /* harmony import */ var _index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55640); /* harmony import */ var _i18n_21ff76e6_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65770); /* harmony import */ var _button_link_72d562a8_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(97072); /* harmony import */ var _a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16105); /* harmony import */ var _dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12444); /* harmony import */ var _prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39895); /* harmony import */ var _reuse_2b3b6999_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39519); /* harmony import */ var _icon_65a5bdd2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47192); /* harmony import */ var _label_99de85b5_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34680); /* harmony import */ var _tab_index_91119b1c_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(64609); /*! * KoliBri - The accessible HTML-Standard */ const KolLinkWc=class{constructor(t){(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t),this.nonce=(0,_dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_1__.n)(),this.catchRef=t=>{this.ref=t,(0,_reuse_2b3b6999_js__WEBPACK_IMPORTED_MODULE_2__.a)(this.host,this.ref)},this.onClick=t=>{var a,e;"function"==typeof(null===(a=this.state._on)||void 0===a?void 0:a.onClick)&&(t.preventDefault(),(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_3__.f)(t,this.ref),null===(e=this.state._on)||void 0===e||e.onClick(t,this.state._href))},this.getRenderValues=()=>{let t={};"string"==typeof this.state._selector&&(t={role:"link",tabIndex:0,onClick:()=>{(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_3__.i)(this.state._selector)},onKeyPress:()=>{(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_3__.i)(this.state._selector)}});const a="string"==typeof this.state._target&&"_self"!==this.state._target,e={href:"string"==typeof this.state._href&&this.state._href.length>0?this.state._href:"javascript:void(0)",target:"string"==typeof this.state._target&&this.state._target.length>0?this.state._target:void 0,rel:a?"noopener":void 0};return"image"!==this.state._useCase&&!0!==this.state._iconOnly||"string"==typeof this.state._ariaLabel&&0!==this.state._ariaLabel.length||(0,_a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_4__.d)("[KolLink] Es muss ein Aria-Label gesetzt werden, wenn eine Grafik verlinkt oder der Icon-Only-Modus verwendet wird."),{isExternal:a,tagAttrs:e,goToProps:t}},this._ariaControls=void 0,this._ariaCurrent=void 0,this._ariaExpanded=void 0,this._ariaLabel="",this._ariaSelected=void 0,this._disabled=!1,this._href=void 0,this._icon=void 0,this._iconAlign="left",this._iconOnly=!1,this._label=void 0,this._on=void 0,this._role=void 0,this._selector=void 0,this._stealth=!1,this._tabIndex=void 0,this._target=void 0,this._targetDescription=(0,_i18n_21ff76e6_js__WEBPACK_IMPORTED_MODULE_5__.a)("kol-open-link-in-tab"),this._tooltipAlign="right",this._useCase="text",this.state={_ariaLabel:"",_href:"javascript:void(0)",_icon:{},_iconAlign:"left",_label:""}}render(){const{isExternal:t,tagAttrs:a,goToProps:e}=this.getRenderValues();return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",Object.assign({ref:this.catchRef},a,{"aria-controls":this.state._ariaControls,"aria-current":this.state._ariaCurrent,"aria-expanded":(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_3__.h)(this.state._ariaExpanded),"aria-labelledby":"image"===this.state._useCase||!0===this.state._iconOnly?this.nonce:void 0,"aria-selected":(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_3__.h)(this.state._ariaSelected),class:{disabled:!0===this.state._disabled,"skip ":!1!==this.state._stealth,"icon-only":!0===this.state._iconOnly,"external-link":t}},this.state._on,{onClick:this.onClick,onKeyPress:this.onClick},e,{role:this.state._role,tabIndex:this.state._tabIndex}),(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-span-wc",{_icon:this._icon,_iconOnly:this._iconOnly,_label:this.state._ariaLabel||this.state._label},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"expert",slot:"expert"})),t&&(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-icon",{class:"external-link-icon",_ariaLabel:this.state._targetDescription,_icon:"fa-solid fa-arrow-up-right-from-square"})),(!0===this.state._iconOnly||"image"===this.state._useCase)&&(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-tooltip",{"aria-hidden":"true",_align:this.state._tooltipAlign,_id:this.nonce,_label:this.state._ariaLabel||this.state._label}))}validateAriaControls(t){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_3__.w)(this,"_ariaControls",t)}validateAriaCurrent(t){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_3__.a)(this,"_ariaCurrent",(t=>!0===t||"date"===t||"location"===t||"page"===t||"step"===t||"time"===t),new Set(["boolean","String {data, location, page, step, time}"]),t)}validateAriaExpanded(t){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_3__.b)(this,"_ariaExpanded",t)}validateAriaLabel(t){(0,_label_99de85b5_js__WEBPACK_IMPORTED_MODULE_6__.v)(this,t)}validateAriaSelected(t){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_3__.b)(this,"_ariaSelected",t)}validateDisabled(t){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_3__.b)(this,"_disabled",t),!0===t&&(0,_a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_4__.e)()}validateHref(t){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_3__.w)(this,"_href",t)}validateIcon(t){(0,_icon_65a5bdd2_js__WEBPACK_IMPORTED_MODULE_7__.v)(this,t)}validateIconAlign(t){(0,_icon_65a5bdd2_js__WEBPACK_IMPORTED_MODULE_7__.w)(this,t)}validateIconOnly(t){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_3__.b)(this,"_iconOnly",t)}validateLabel(t){(0,_label_99de85b5_js__WEBPACK_IMPORTED_MODULE_6__.a)(this,t)}validateOn(t){"object"==typeof t&&null!==t&&Object.prototype.hasOwnProperty.call(t,"onClick")&&"function"==typeof t.onClick&&(this.state=Object.assign(Object.assign({},this.state),{_on:t}))}validateRole(t){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_3__.w)(this,"_role",t)}validateSelector(t){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_3__.w)(this,"_selector",t)}validateStealth(t){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_3__.b)(this,"_stealth",t)}validateTabIndex(t){(0,_tab_index_91119b1c_js__WEBPACK_IMPORTED_MODULE_8__.v)(this,t)}validateTarget(t){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_3__.w)(this,"_target",t)}validateTargetDescription(t){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_3__.w)(this,"_targetDescription",t)}validateTooltipAlign(t){(0,_button_link_72d562a8_js__WEBPACK_IMPORTED_MODULE_9__.w)(this,"_tooltipAlign",t)}validateUseCase(t){"string"==typeof t&&(this.state=Object.assign(Object.assign({},this.state),{_useCase:t}))}componentWillLoad(){this.validateAriaControls(this._ariaControls),this.validateAriaCurrent(this._ariaCurrent),this.validateAriaExpanded(this._ariaExpanded),this.validateAriaLabel(this._ariaLabel),this.validateAriaSelected(this._ariaSelected),this.validateDisabled(this._disabled),this.validateHref(this._href),this.validateIcon(this._icon),this.validateIconAlign(this._iconAlign),this.validateIconOnly(this._iconOnly),this.validateLabel(this._label),this.validateOn(this._on),this.validateRole(this._role),this.validateSelector(this._selector),this.validateStealth(this._stealth),this.validateTabIndex(this._tabIndex),this.validateTarget(this._target),this.validateTargetDescription(this._targetDescription),this.validateTooltipAlign(this._tooltipAlign),this.validateUseCase(this._useCase)}get host(){return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{_ariaControls:["validateAriaControls"],_ariaCurrent:["validateAriaCurrent"],_ariaExpanded:["validateAriaExpanded"],_ariaLabel:["validateAriaLabel"],_ariaSelected:["validateAriaSelected"],_disabled:["validateDisabled"],_href:["validateHref"],_icon:["validateIcon"],_iconAlign:["validateIconAlign"],_iconOnly:["validateIconOnly"],_label:["validateLabel"],_on:["validateOn"],_role:["validateRole"],_selector:["validateSelector"],_stealth:["validateStealth"],_tabIndex:["validateTabIndex"],_target:["validateTarget"],_targetDescription:["validateTargetDescription"],_tooltipAlign:["validateTooltipAlign"],_useCase:["validateUseCase"]}}}; /***/ }), /***/ 34680: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ "a": () => (/* binding */ validateLabel), /* harmony export */ "c": () => (/* binding */ containsOnlyNumbers), /* harmony export */ "h": () => (/* binding */ hasEnoughReadableChars), /* harmony export */ "v": () => (/* binding */ validateAriaLabel) /* harmony export */ }); /* harmony import */ var _a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16105); /* harmony import */ var _prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39895); /* harmony import */ var _reuse_2b3b6999_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39519); /*! * KoliBri - The accessible HTML-Standard */ const READABLE_CHARS=/[a-zA-Z0-9äöüÄÖÜß]/g,ONLY_NUMBERS=/^\d+$/,countReadableChars=e=>{var a;return"string"==typeof e&&(null===(a=e.match(READABLE_CHARS))||void 0===a?void 0:a.length)||0},hasEnoughReadableChars=(e,a=1)=>countReadableChars(e)>=a,containsOnlyNumbers=e=>ONLY_NUMBERS.test(e),syncAriaLabelBeforePatch=(e,a,r,i)=>{const t=a.has("_ariaLabel")?a.get("_ariaLabel"):r.state._ariaLabel;if("string"==typeof t){const e=a.has("_label")?a.get("_label"):r.state._label;!1===(0,_reuse_2b3b6999_js__WEBPACK_IMPORTED_MODULE_0__.d)(e,t)&&("_ariaLabel"===i?a.set("_label",t):a.set("_ariaLabel",e),(0,_a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_1__.a)("Das abweichende Aria-Label ist nicht barrierefrei. Ein abweichendes Aria-Label muss aus Gründern der Barrierefreiheit für die Sprachsteuerung mit dem Label-Text beginnen."))}},validateAriaLabel=(e,a)=>{(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_2__.w)(e,"_ariaLabel",a,{hooks:{afterPatch:e=>{"string"==typeof e&&e.length>0&&!1===hasEnoughReadableChars(e,3)&&!1===containsOnlyNumbers(e)&&(0,_a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_1__.a)(`Ein abweichendes Aria-Label (${e}) ist nicht barrierefrei. Ein abweichendes Aria-Label sollte aus mindestens drei lesbaren Zeichen bestehen.`)},beforePatch:syncAriaLabelBeforePatch}})},validateLabel=(e,a)=>{(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_2__.w)(e,"_label",a,{hooks:{afterPatch:e=>{"string"==typeof e&&!1===hasEnoughReadableChars(e,3)&&!1===containsOnlyNumbers(e)&&(0,_a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_1__.a)(`Ein Label (${e}) ist nicht barrierefrei. Ein Label sollte aus mindestens drei lesbaren Zeichen bestehen.`)},beforePatch:syncAriaLabelBeforePatch},required:!0})}; /***/ }), /***/ 64609: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ "v": () => (/* binding */ validateTabIndex) /* harmony export */ }); /* harmony import */ var _a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16105); /* harmony import */ var _prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39895); /*! * KoliBri - The accessible HTML-Standard */ const options={hooks:{afterPatch:a=>{-1!==a&&0!==a&&(0,_a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_0__.a)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},validateTabIndex=(a,t)=>{(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.e)(a,"_tabIndex",t,options)}; /***/ }) }; ;