/*! For license information please see 9931.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[9931],{69931:(e,t,i)=>{i.r(t),i.d(t,{kol_form:()=>o});var n=i(84310),s=i(26453);const o=class{constructor(e){(0,n.r)(this,e),this.onSubmit=e=>{var t,i;e.preventDefault(),"function"==typeof(null===(t=this.state._on)||void 0===t?void 0:t.onSubmit)&&(null===(i=this.state._on)||void 0===i||i.onSubmit(e))},this.onReset=e=>{var t,i;e.preventDefault(),"function"==typeof(null===(t=this.state._on)||void 0===t?void 0:t.onReset)&&(null===(i=this.state._on)||void 0===i||i.onReset(e))},this._on=void 0,this._requiredText=!0,this.state={}}render(){return(0,n.h)("form",{method:"post",onSubmit:this.onSubmit,onReset:this.onReset,autoComplete:"off",noValidate:!0},!0===this.state._requiredText?(0,n.h)("p",null,(0,n.h)("kol-indented-text",null,"Formular-Felder, die mit einem Sternchen ",(0,n.h)("span",{"aria-hidden":"true"},"(*)")," gekennzeichnet sind, sind Pflichtangaben.")):"string"==typeof this.state._requiredText&&this.state._requiredText.length>0?(0,n.h)("p",null,(0,n.h)("kol-indented-text",null,this.state._requiredText)):null,(0,n.h)("slot",null))}validateOn(e){"object"==typeof e&&null!==e&&(this.state=Object.assign(Object.assign({},this.state),{_on:e}))}validateRequiredText(e){"boolean"==typeof e?(0,s.b)(this,"_requiredText",e):(0,s.w)(this,"_requiredText",e,{minLength:0})}componentWillLoad(){this.validateOn(this._on),this.validateRequiredText(this._requiredText)}static get watchers(){return{_on:["validateOn"],_requiredText:["validateRequiredText"]}}}}}]);