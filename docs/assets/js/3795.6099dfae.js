"use strict";
exports.id = 3795;
exports.ids = [3795];
exports.modules = {

/***/ 84416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ InputCheckboxRadioController),
/* harmony export */   "a": () => (/* binding */ InputRadioController),
/* harmony export */   "f": () => (/* binding */ fillKeyOptionMap)
/* harmony export */ });
/* harmony import */ var _prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39895);
/* harmony import */ var _reuse_2b3b6999_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39519);
/* harmony import */ var _controller_cdabc4f0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38481);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const fillKeyOptionMap=(t,e,o="")=>{e.forEach(((e,a)=>{const i=`${o}-${a}`;"object"==typeof e&&null!==e&&"string"==typeof e.label&&e.label.length>0&&(Array.isArray(e.options)?fillKeyOptionMap(t,e.options,i):t.set(i,e))}))};class InputCheckboxRadioController extends _controller_cdabc4f0_js__WEBPACK_IMPORTED_MODULE_0__.I{constructor(t,e,o){super(t,e,o),this.component=t}validateRequired(t){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.component,"_required",t)}componentWillLoad(){super.componentWillLoad(),this.validateRequired(this.component._required)}}class InputRadioController extends InputCheckboxRadioController{constructor(t,e,o){super(t,e,o),this.keyOptionMap=new Map,this.getOptionByKey=t=>this.keyOptionMap.get(t),this.isValueInOptions=(t,e)=>void 0!==e.find((e=>e.value===t)),this.beforePatchListValue=(t,e)=>{const o=e.has("_list")?e.get("_list"):this.component.state._list;if(Array.isArray(o)&&o.length>0){this.keyOptionMap.clear(),fillKeyOptionMap(this.keyOptionMap,o);const t=e.has("_value")?e.get("_value"):this.component.state._value;if(!1===this.isValueInOptions(t,o)){const t=o[0].value;e.set("_value",t),this.onStateChange()}}},this.component=t}validateOrientation(t){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.a)(this.component,"_orientation",(t=>"horizontal"===t||"vertical"===t),new Set(["Orientation {horizontal, vertical}"]),t,{defaultValue:"vertical"})}validateList(t){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.d)(this.component,"_list",(t=>"object"==typeof t&&null!==t&&"string"==typeof t.label&&t.label.length>0),t,void 0,{hooks:{beforePatch:this.beforePatchListValue}})}validateValue(t){t=(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.m)(t),t=Array.isArray(t)?t[0]:t,(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.s)(this.component,"_value",t,{beforePatch:this.beforePatchListValue}),this.setFormAssociatedValue(this.component._value)}componentWillLoad(t){super.componentWillLoad(),this.onStateChange=()=>{if("function"==typeof t){const e=setTimeout((()=>{clearTimeout(e),t(_reuse_2b3b6999_js__WEBPACK_IMPORTED_MODULE_2__.S)}))}},this.validateOrientation(this.component._orientation),this.validateList(this.component._list),this.validateValue(this.component._value)}}

/***/ }),

/***/ 38481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ InputController),
/* harmony export */   "g": () => (/* binding */ getRenderStates)
/* harmony export */ });
/* harmony import */ var _a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16105);
/* harmony import */ var _prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39895);
/* harmony import */ var _tab_index_91119b1c_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64609);
/* harmony import */ var _dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12444);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const getRenderStates=t=>{const e="string"==typeof t._error&&t._error.length>0&&!0===t._touched,o="string"==typeof t._hint&&t._hint.length>0,n=[];return!0===e&&n.push(`${t._id}-error`),!0===o&&n.push(`${t._id}-hint`),{hasError:e,hasHint:o,ariaDiscribedBy:n}},EXPERIMENTAL_MODE=(0,_dev_utils_3ec9f837_js__WEBPACK_IMPORTED_MODULE_0__.b)();class ControlledInputController{constructor(t,e,o){var n,i,a,s,h;if(this.syncFormAssociatedName=()=>{var t;EXPERIMENTAL_MODE&&(null===(t=this.formAssociated)||void 0===t||t.setAttribute("name",this.component.state._name||this.component.state._id))},this.setFormAssociatedValue=(t=null)=>{var e;EXPERIMENTAL_MODE&&(null===(e=this.formAssociated)||void 0===e||e.setAttribute("value",t))},this.component=t,this.name=e,this.host=o,EXPERIMENTAL_MODE){this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden");const t=(null===(n=this.host)||void 0===n?void 0:n.children)||[];for(let e=0;e<t.length;e++)"INPUT"===(null===(i=this.host)||void 0===i?void 0:i.children[e].tagName)&&(null===(a=this.host)||void 0===a||a.removeChild(null===(s=this.host)||void 0===s?void 0:s.children[e]));null===(h=this.host)||void 0===h||h.appendChild(this.formAssociated)}}validateAlert(t){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.component,"_alert",t)}validateTouched(t){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.component,"_touched",t)}componentWillLoad(){this.validateAlert(this.component._alert),this.validateTouched(this.component._touched)}}class InputController extends ControlledInputController{constructor(t,e,o){super(t,e,o),this.hideLabel=!1,this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=t}validateAccessKey(t){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.w)(this.component,"_accessKey",t)}validateAdjustHeight(t){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.component,"_adjustHeight",t)}validateDisabled(t){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.component,"_disabled",t),!0===t&&(0,_a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_2__.e)()}validateError(t){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.w)(this.component,"_error",t)}validateHideLabel(t){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.component,"_hideLabel",t)}validateHint(t){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.w)(this.component,"_hint",t)}validateId(t){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.w)(this.component,"_id",t,{hooks:{afterPatch:this.syncFormAssociatedName}}),void 0===t&&(0,_a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_2__.d)("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, könnte aber für die E2E-Tests relevant sein.")}validateName(t){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.w)(this.component,"_name",t,{hooks:{afterPatch:this.syncFormAssociatedName}}),void 0===t&&(0,_a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_2__.d)("Ein Name an den Eingabefeldern ist nicht zwingend erforderlich, kann aber für die Autocomplete-Funktion des Eingabefeldes relevant sein.")}validateOn(t){"object"==typeof t&&(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.s)(this.component,"_on",t)}validateSmartButton(t){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.o)(t,(()=>{try{t=(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.p)(t)}catch(t){}(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.s)(this.component,"_smartButton",t)}))}validateTabIndex(t){(0,_tab_index_91119b1c_js__WEBPACK_IMPORTED_MODULE_3__.v)(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateName(this.component._name),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex),this.syncFormAssociatedName()}onBlur(t){var e;this.component._alert=!0,this.component._touched=!0,"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onBlur)&&this.component._on.onBlur(t)}onChange(t){var e;this.setFormAssociatedValue(t.target.value),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onChange)&&this.component._on.onChange(t,t.target.value)}onClick(t){var e;"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onClick)&&this.component._on.onClick(t)}onFocus(t){var e;this.component._alert=!0,"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onFocus)&&this.component._on.onFocus(t)}setValue(t,e){var o;this.setFormAssociatedValue(e),"function"==typeof(null===(o=this.component._on)||void 0===o?void 0:o.onChange)&&this.component._on.onChange(t,e)}}

/***/ }),

/***/ 33795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kol_input_checkbox": () => (/* binding */ KolInputCheckbox)
/* harmony export */ });
/* harmony import */ var _index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55640);
/* harmony import */ var _reuse_2b3b6999_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39519);
/* harmony import */ var _controller_cdabc4f0_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38481);
/* harmony import */ var _a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16105);
/* harmony import */ var _prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39895);
/* harmony import */ var _controller_b817624f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84416);
/*!
 * KoliBri - The accessible HTML-Standard
 */
class InputCheckboxController extends _controller_b817624f_js__WEBPACK_IMPORTED_MODULE_0__.I{constructor(e,t,i){super(e,t,i),this.component=e}validateChecked(e){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.component,"_checked",e),this.setFormAssociatedValue(this.component.state._checked)}validateIcon(e){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.a)(this.component,"_icons",(e=>"object"==typeof e&&null!==e&&((0,_reuse_2b3b6999_js__WEBPACK_IMPORTED_MODULE_2__.i)(e.checked,1)||(0,_reuse_2b3b6999_js__WEBPACK_IMPORTED_MODULE_2__.i)(e.indeterminate,1)||(0,_reuse_2b3b6999_js__WEBPACK_IMPORTED_MODULE_2__.i)(e.unchecked,1))),new Set(["InputCheckboxIcons"]),e)}validateIndeterminate(e){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.component,"_indeterminate",e)}validateType(e){(0,_a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_3__.d)('The "_type" prop is deprecated. Use "_variant" instead.'),this.validateVariant(e)}validateValue(e){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.s)(this.component,"_value",e)}validateVariant(e){(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.a)(this.component,"_variant",(e=>"string"==typeof e&&("button"===e||"checkbox"===e||"switch"===e)),new Set(["String {button, checkbox, switch}"]),e)}componentWillLoad(){super.componentWillLoad(),this.validateChecked(this.component._checked),this.validateIcon(this.component._icon),this.validateIndeterminate(this.component._indeterminate),this.validateValue(this.component._value),this.validateVariant(this.component._variant||this.component._type)}}const defaultStyleCss=":host{--kolibri-border-color:#e0e0e0;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*{box-sizing:border-box;font-family:var(--kolibri-font-family)}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}a,button,input,select,textarea{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{background-color:transparent;border-width:0}h1,h2,h3,h4,h5,h6{font-size:1rem;margin:0}.kol-required span::after{content:'*'}input,select,textarea{border-color:var(--kolibri-border-color);border-style:solid;border-width:1px}input input.error,input select.error,input textarea.error,select input.error,select select.error,select textarea.error,textarea input.error,textarea select.error,textarea textarea.error{border-color:var(--kolibri-border-error)}input input:focus,input input:hover,input select:focus,input select:hover,input textarea:focus,input textarea:hover,select input:focus,select input:hover,select select:focus,select select:hover,select textarea:focus,select textarea:hover,textarea input:focus,textarea input:hover,textarea select:focus,textarea select:hover,textarea textarea:focus,textarea textarea:hover{border-color:#999}input:not([type='checkbox']),option,select,textarea{font-size:inherit;letter-spacing:inherit;word-spacing:inherit}.kol-disabled{opacity:0.5}.kol-cursor-not-allowed,.kol-cursor-not-allowed *{cursor:not-allowed}input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],select,textarea{background-color:white;display:block;line-height:1em;padding:0.5em}input[type='color']{height:2.5em;padding:0.25em 0.5em}textarea{padding:0.5em}label{cursor:pointer}input{border-color:var(--kolibri-border-color);border-width:2px;border-style:solid;line-height:24px;font-size:var(--kolibri-font-size)}.required label>span::after{content:'*';padding-left:0.125em}input:hover{border-color:var(--kolibri-color-normal)}kol-input{align-items:center;display:grid;gap:calc(2 * var(--kolibri-spacing));justify-items:left;width:100%}kol-input.checkbox{grid-template-columns:calc(6 * var(--kolibri-spacing)) auto}kol-input.switch{grid-template-columns:calc(13 * var(--kolibri-spacing)) auto}kol-input .input{display:inline-flex;order:1}kol-input .input div{display:inline-flex}kol-input .input input{margin:0px}kol-input label{order:2}kol-input kol-alert.error{order:3;padding-top:0.25em;grid-column:span 2 / auto}input[type='checkbox']{appearance:none;background-color:white;cursor:pointer;transition:0.5s}input[type='checkbox'].kol-disabled:before{cursor:not-allowed}input[type='checkbox']:before{content:'';cursor:pointer}input[type='checkbox']:checked{background-color:var(--kolibri-color-primary);border-color:var(--kolibri-color-primary)}.disabled{opacity:0.33}.checkbox kol-icon,.switch kol-icon{display:none}kol-input span.hint{grid-column:span 2;font-style:italic;color:gray;display:block;order:3;padding:0 var(--kolibri-spacing)}.button label{cursor:pointer;display:inline-flex;width:auto}.button label>span>span{display:inline-flex;gap:calc(2 * var(--kolibri-spacing));place-items:center}.button input{display:none}.checkbox input[type='checkbox']{height:calc(6 * var(--kolibri-spacing));min-width:calc(6 * var(--kolibri-spacing));width:calc(6 * var(--kolibri-spacing))}.checkbox input[type='checkbox']:before{background-color:transparent;display:block;height:calc(6 * var(--kolibri-spacing));position:relative;width:calc(6 * var(--kolibri-spacing))}.checkbox input[type='checkbox']:checked:before{border-right-width:3px;border-bottom-width:3px;left:calc(1.5 * var(--kolibri-spacing) - 2px);top:calc(2.85 * var(--kolibri-spacing) - 2px);transform:rotate(40deg) translate(-50%, -50%);background-color:transparent;border-width:0px 3px 3px 0px;border-color:white;border-radius:1px;border-style:solid;height:calc(3 * var(--kolibri-spacing));width:calc(1.5 * var(--kolibri-spacing))}.checkbox input[type='checkbox']:indeterminate:before{background-color:var(--kolibri-color-normal);height:0.375rem;top:0.45rem;left:0.15rem;width:calc(4 * var(--kolibri-spacing))}.switch input[type='checkbox']{min-width:3.2em;width:3.2em;height:1.7em;display:inline-block;position:relative}.switch input[type='checkbox']:before{-webkit-transition:0.5s;-moz-transition:0.5s;-ms-transition:0.5s;transition:0.5;width:1.2em;height:1.2em;left:calc(0.25em - 2px);top:calc(0.25em - 2px);background-color:black;position:absolute}.switch input[type='checkbox']:checked:before{-webkit-transform:translateX(1.5em);-moz-transform:translateX(1.5em);-ms-transform:translateX(1.5em);transform:translateX(1.5em);background-color:white}.switch input[type='checkbox']:indeterminate:before{-webkit-transform:translateX(0.75em);-moz-transform:translateX(0.75em);-ms-transform:translateX(0.75em);transform:translateX(0.75em);background-color:var(--kolibri-color-normal)}",KolInputCheckbox=class{render(){const{ariaDiscribedBy:e}=(0,_controller_cdabc4f0_js__WEBPACK_IMPORTED_MODULE_4__.g)(this.state);return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_5__.h)(_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_5__.H,null,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_5__.h)("kol-input",{class:{[this.state._variant]:!0},_alert:this.state._alert,_disabled:this.state._disabled,_error:this.state._error,_hideLabel:this.state._hideLabel,_hint:this.state._hint,_id:this.state._id,_required:this.state._required,_touched:this.state._touched},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_5__.h)("span",{"data-role":"button"===this.state._variant?"button":void 0,onKeyPress:"button"===this.state._variant?this.onChange:void 0,tabIndex:"button"===this.state._variant?0:void 0,slot:"label"},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_5__.h)("kol-icon",{onClick:this.onChange,_ariaLabel:"",_icon:this.state._indeterminate?this.state._icon.indeterminate:this.state._checked?this.state._icon.checked:this.state._icon.unchecked}),(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_5__.h)("slot",null)),(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_5__.h)("div",{slot:"input"},(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_5__.h)("input",Object.assign({ref:this.catchRef,accessKey:this.state._accessKey,"aria-describedby":e.length>0?e.join(" "):void 0,"aria-labelledby":`${this.state._id}-label`,checked:!0===this.state._checked,disabled:!0===this.state._disabled,id:this.state._id,indeterminate:!0===this.state._indeterminate,name:this.state._name,required:!0===this.state._required,tabIndex:this.state._tabIndex,title:"",type:"checkbox",value:"string"==typeof this.state._value?this.state._value:""},this.controller.onFacade,{onChange:this.onChange})))))}constructor(e){(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_5__.r)(this,e),this.catchRef=e=>{this.ref=e,(0,_reuse_2b3b6999_js__WEBPACK_IMPORTED_MODULE_2__.a)(this.host,this.ref)},this.onChange=e=>{this._checked=!1===this._checked,this._indeterminate=!1,this.controller.setValue(e,this._checked)},this._accessKey=void 0,this._alert=!0,this._checked=!1,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._icon=void 0,this._id=void 0,this._indeterminate=void 0,this._name=void 0,this._on=void 0,this._required=void 0,this._tabIndex=void 0,this._touched=!1,this._type=void 0,this._value=void 0,this._variant=void 0,this.state={_checked:!1,_icon:{checked:"fa-solid fa-check",indeterminate:"fa-solid fa-minus",unchecked:"fa-solid fa-plus"},_id:"⚠",_indeterminate:!1,_variant:"checkbox"},this.controller=new InputCheckboxController(this,"checkbox",this.host)}validateAccessKey(e){this.controller.validateAccessKey(e)}validateAlert(e){this.controller.validateAlert(e)}validateChecked(e){this.controller.validateChecked(e)}validateDisabled(e){this.controller.validateDisabled(e)}validateError(e){this.controller.validateError(e)}validateHideLabel(e){this.controller.validateHideLabel(e)}validateHint(e){this.controller.validateHint(e)}validateIcon(e){this.controller.validateIcon(e)}validateId(e){this.controller.validateId(e)}validateIndeterminate(e){this.controller.validateIndeterminate(e)}validateName(e){this.controller.validateName(e)}validateOn(e){this.controller.validateOn(e)}validateRequired(e){this.controller.validateRequired(e)}validateTabIndex(e){this.controller.validateTabIndex(e)}validateTouched(e){this.controller.validateTouched(e)}validateType(e){this.controller.validateType(e)}validateValue(e){this.controller.validateValue(e)}validateVariant(e){this.controller.validateVariant(e)}componentWillLoad(){this._alert=!0===this._alert,this._touched=!0===this._touched,this.controller.componentWillLoad()}get host(){return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_5__.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_alert:["validateAlert"],_checked:["validateChecked"],_disabled:["validateDisabled"],_error:["validateError"],_hideLabel:["validateHideLabel"],_hint:["validateHint"],_icon:["validateIcon"],_id:["validateId"],_indeterminate:["validateIndeterminate"],_name:["validateName"],_on:["validateOn"],_required:["validateRequired"],_tabIndex:["validateTabIndex"],_touched:["validateTouched"],_type:["validateType"],_value:["validateValue"],_variant:["validateVariant"]}}};KolInputCheckbox.style={default:defaultStyleCss};

/***/ }),

/***/ 64609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ validateTabIndex)
/* harmony export */ });
/* harmony import */ var _a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16105);
/* harmony import */ var _prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39895);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const options={hooks:{afterPatch:a=>{-1!==a&&0!==a&&(0,_a11y_tipps_353a7f35_js__WEBPACK_IMPORTED_MODULE_0__.a)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},validateTabIndex=(a,t)=>{(0,_prop_validators_88dff60e_js__WEBPACK_IMPORTED_MODULE_1__.e)(a,"_tabIndex",t,options)};

/***/ })

};
;