/*! For license information please see 6506.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[6506],{86506:(t,e,i)=>{i.r(e),i.d(e,{kol_toast:()=>l});var s=i(46266),a=i(73681),o=i(812),n=i(26737);const l=class{constructor(t){(0,s.r)(this,t),this.handleShowAndDuration=()=>{!0===this.state._show&&"number"==typeof this.state._showDuration&&this.state._showDuration>=0&&(clearTimeout(this.durationTimeout),this.durationTimeout=setTimeout((()=>{clearTimeout(this.durationTimeout),this.close()}),this.state._showDuration))},this.close=()=>{var t;this._show=!1,this.state=Object.assign(Object.assign({},this.state),{_show:!1}),void 0!==(null===(t=this._on)||void 0===t?void 0:t.onClose)&&this._on.onClose(new Event("Close"))},this.on={onClose:this.close},this._alert=!0,this._hasCloser=!1,this._heading="",this._level=1,this._on=void 0,this._show=!0,this._showDuration=1e4,this._type="default",this.state={_alert:!0,_level:1,_show:!0}}validateAlert(t){(0,a.b)(this,"_alert",t)}validateHasCloser(t){(0,a.b)(this,"_hasCloser",t)}validateHeading(t){(0,a.w)(this,"_heading",t)}validateLevel(t){(0,o.w)(this,t)}validateOn(t){if("object"==typeof t&&null!==t){(0,n.f)("[KolToast] Prüfen, wie man auch einen EventCallback einzeln ändern kann.");const e={};"function"!=typeof t.onClose&&!0!==t.onClose||(e.onClose=t.onClose),(0,a.s)(this,"_on",e)}}validateShow(t){(0,a.b)(this,"_show",t,{hooks:{afterPatch:this.handleShowAndDuration}})}validateShowDuration(t){(0,a.d)(this,"_showDuration",t,{hooks:{afterPatch:this.handleShowAndDuration}})}validateType(t){(0,a.a)(this,"_type",(t=>"string"==typeof t&&("default"===t||"error"===t||"info"===t||"success"===t||"warning"===t)),new Set("String {success, info, warning, error}"),t)}componentWillLoad(){this.validateAlert(this._alert),this.validateHasCloser(this._hasCloser),this.validateHeading(this._heading),this.validateLevel(this._level),this.validateOn(this._on),this.validateShow(this._show),this.validateShowDuration(this._showDuration),this.validateType(this._type)}render(){return(0,s.h)(s.H,null,this.state._show&&(0,s.h)("div",null,(0,s.h)("kol-alert",{_alert:this.state._alert,_heading:this.state._heading,_level:this.state._level,_hasCloser:this.state._hasCloser,_type:this.state._type,_variant:"card",_on:this.on},(0,s.h)("slot",null))))}static get watchers(){return{_alert:["validateAlert"],_hasCloser:["validateHasCloser"],_heading:["validateHeading"],_level:["validateLevel"],_on:["validateOn"],_show:["validateShow"],_showDuration:["validateShowDuration"],_type:["validateType"]}}};l.style={default:"@windicss; *{box-sizing:border-box;font-size:inherit;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}kol-heading-wc{font-weight:700}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:0.25rem;place-items:center}a,button{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{border-width:0}"}},812:(t,e,i)=>{i.d(e,{w:()=>a});var s=i(73681);const a=(t,e)=>{(0,s.a)(t,"_level",(t=>"number"==typeof t&&1<=t&&t<=6),new Set(["Number {1, 2, 3, 4, 5, 6}"]),e,{defaultValue:1,required:!0})}}}]);