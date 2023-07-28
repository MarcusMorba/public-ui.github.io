/*! * KoliBri - The accessible HTML-Standard */ import{a as watchBoolean,d as watchString,s as setState,o as objectObjectHandler,p as parseJson}from"./prop.validators-05d07b50.js";import{a as validateLabelWithExpertSlot}from"./label-e3523fd1.js";import{d as devHint,g as devWarning,h as a11yHintDisabled}from"./a11y.tipps-5aaa4b49.js";import{d as dispatchKoliBriEvent}from"./events-3762d15f.js";import{v as validateTabIndex}from"./tab-index-fcb7ecac.js";import{b as getExperimentalMode}from"./dev.utils-465c4239.js";const getRenderStates=t=>{const e="string"==typeof t._error&&t._error.length>0&&!0===t._touched,o="string"==typeof t._hint&&t._hint.length>0,i=[];return!0===e&&i.push(`${t._id}-error`),!0===o&&i.push(`${t._id}-hint`),{hasError:e,hasHint:o,ariaDescribedBy:i}},validateAdjustHeight=(t,e)=>{watchBoolean(t,"_adjustHeight",e)},validateTouched=(t,e)=>{watchBoolean(t,"_touched",e)},EXPERIMENTAL_MODE=getExperimentalMode();class ControlledInputController{constructor(t,e,o){var i,n;if(this.setFormAssociatedValue=t=>{var e;const o=null===(e=this.formAssociated)||void 0===e?void 0:e.getAttribute("name");null!==o&&""!==o||devHint(` The form field (${this.name}) must have a name attribute to be form-associated. Please define the _name attribute.`);const i=this.tryToStringifyValue(t);this.syncValue(t,i,this.formAssociated),this.syncValue(t,i,this.syncToOwnInput)},this.component=t,this.name=e,this.host=o,EXPERIMENTAL_MODE){switch(null===(i=this.host)||void 0===i||i.querySelectorAll("input,select,textarea").forEach((t=>{var e;null===(e=this.host)||void 0===e||e.removeChild(t)})),this.name){case"select":this.formAssociated=document.createElement("select"),this.formAssociated.setAttribute("multiple","");break;case"textarea":this.formAssociated=document.createElement("textarea");break;default:this.formAssociated=document.createElement("input"),this.formAssociated.setAttribute("type","hidden")}this.formAssociated.setAttribute("aria-hidden","true"),this.formAssociated.setAttribute("data-form-associated",""),this.formAssociated.setAttribute("hidden",""),null===(n=this.host)||void 0===n||n.appendChild(this.formAssociated)}}setAttribute(t,e,o){if(EXPERIMENTAL_MODE)try{if("boolean"!=typeof(o="object"==typeof o&&null!==o?JSON.stringify(o):o)&&"number"!=typeof o&&"string"!=typeof o)throw new Error("Invalid value type: "+typeof o);null==e||e.setAttribute(t,`${o}`)}catch(o){null==e||e.removeAttribute(t)}}tryToStringifyValue(t){try{return"object"==typeof t&&null!==t?JSON.stringify(t).toString():null==t?null:t.toString()}catch(t){return devWarning(`The form field raw value is not able to stringify! ${t}`),""}}syncValue(t,e,o){if(o)if("select"===this.name)o.querySelectorAll("option").forEach((t=>{o.removeChild(t)})),Array.isArray(t)&&t.forEach((t=>{const e=this.tryToStringifyValue(t);if("string"==typeof e){const t=document.createElement("option");t.setAttribute("value",e),t.setAttribute("selected",""),o.appendChild(t)}}));else"string"==typeof e?(o.setAttribute("value",e),o.value=e):(o.removeAttribute("value"),o.value="")}validateAlert(t){watchBoolean(this.component,"_alert",t)}validateSyncValueBySelector(t){if(EXPERIMENTAL_MODE&&"string"==typeof t){const e=document.querySelector(t);e&&(this.syncToOwnInput=e)}}validateTouched(t){validateTouched(this.component,t)}componentWillLoad(){this.validateAlert(this.component._alert),this.validateSyncValueBySelector(this.component._syncValueBySelector),this.validateTouched(this.component._touched)}}class InputController extends ControlledInputController{constructor(t,e,o){super(t,e,o),this.hideLabel=!1,this.valueChangeListeners=[],this.onFacade={onBlur:this.onBlur.bind(this),onChange:this.onChange.bind(this),onClick:this.onClick.bind(this),onFocus:this.onFocus.bind(this)},this.component=t}validateAccessKey(t){watchString(this.component,"_accessKey",t)}validateAdjustHeight(t){validateAdjustHeight(this.component,t)}validateDisabled(t){watchBoolean(this.component,"_disabled",t),!0===t&&a11yHintDisabled()}validateError(t){watchString(this.component,"_error",t)}validateHideLabel(t){watchBoolean(this.component,"_hideLabel",t)}validateHint(t){watchString(this.component,"_hint",t)}validateId(t){watchString(this.component,"_id",t,{hooks:{afterPatch:()=>{this.setAttribute("id",this.formAssociated,this.component.state._id)}},minLength:1}),""!==t&&void 0!==t||devHint("Eine eindeutige ID an den Eingabefeldern ist nicht zwingend erforderlich, könnte aber für die E2E-Tests relevant sein.")}validateLabel(t){validateLabelWithExpertSlot(this.component,t)}validateName(t){watchString(this.component,"_name",t,{hooks:{afterPatch:()=>{this.setAttribute("name",this.formAssociated,this.component.state._name)}}}),void 0===t&&devHint("Ein Name an den Eingabefeldern ist nicht zwingend erforderlich, kann aber für die Autocomplete-Funktion und für das statische Versenden des Eingabefeldes relevant sein.")}validateOn(t){"object"==typeof t&&setState(this.component,"_on",t)}validateSmartButton(t){objectObjectHandler(t,(()=>{try{t=parseJson(t)}catch(t){}setState(this.component,"_smartButton",t)}))}validateTabIndex(t){validateTabIndex(this.component,t)}componentWillLoad(){super.componentWillLoad(),this.validateAccessKey(this.component._accessKey),this.validateAdjustHeight(this.component._adjustHeight),this.validateError(this.component._error),this.validateDisabled(this.component._disabled),this.validateHideLabel(this.component._hideLabel),this.validateHint(this.component._hint),this.validateId(this.component._id),this.validateLabel(this.component._label),this.validateName(this.component._name),this.validateSmartButton(this.component._smartButton),this.validateOn(this.component._on),this.validateTabIndex(this.component._tabIndex)}onBlur(t){var e;t.preventDefault(),t.stopPropagation(),this.component._alert=!0,this.component._touched=!0,"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onBlur)?this.component._on.onBlur(t):(console.log("dispatchKoliBriEvent",this.host,"blur"),this.host&&dispatchKoliBriEvent(this.host,"blur"))}onChange(t){var e;t.preventDefault(),t.stopPropagation();const o=t.target.value;this.setFormAssociatedValue(o),this.valueChangeListeners.forEach((t=>t(o))),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onChange)?this.component._on.onChange(t,o):(console.log("dispatchKoliBriEvent",this.host,"change",o),this.host&&dispatchKoliBriEvent(this.host,"change",o))}onClick(t){var e;t.preventDefault(),t.stopPropagation(),"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onClick)?this.component._on.onClick(t):(console.log("dispatchKoliBriEvent",this.host,"click"),this.host&&dispatchKoliBriEvent(this.host,"click"))}onFocus(t){var e;t.preventDefault(),t.stopPropagation(),this.component._alert=!0,"function"==typeof(null===(e=this.component._on)||void 0===e?void 0:e.onFocus)?this.component._on.onFocus(t):(console.log("dispatchKoliBriEvent",this.host,"focus"),this.host&&dispatchKoliBriEvent(this.host,"focus"))}setValue(t,e){var o;this.setFormAssociatedValue(e),"function"==typeof(null===(o=this.component._on)||void 0===o?void 0:o.onChange)&&this.component._on.onChange(t,e)}addValueChangeListener(t){this.valueChangeListeners.push(t)}}export{InputController as I,getRenderStates as g};