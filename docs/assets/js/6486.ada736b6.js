"use strict"; exports.id = 6486; exports.ids = [6486]; exports.modules = { /***/ 96486: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { __webpack_require__.r(__webpack_exports__); /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ "kol_image": () => (/* binding */ KolImage) /* harmony export */ }); /* harmony import */ var _index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21622); /* harmony import */ var _prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85982); /*! * KoliBri - The accessible HTML-Standard */ const AVAILABLE_LOADING_VALUES=new Set(['"eager", "lazy"']);function validateLoading(t,a){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.a)(t,"_loading",(t=>"eager"===t||"lazy"===t),AVAILABLE_LOADING_VALUES,a)}const defaultStyleCss="img{max-height:100%;max-width:100%}",KolImage=class{constructor(t){(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.r)(this,t),this._alt=void 0,this._loading="lazy",this._sizes=void 0,this._src=void 0,this._srcset=void 0,this.state={_alt:"…",_loading:"lazy",_src:"…"}}validateAlt(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.w)(this,"_alt",t,{required:!0})}validateLoading(t){validateLoading(this,t)}validateSizes(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.w)(this,"_sizes",t)}validateSrc(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.w)(this,"_src",t,{required:!0})}validateSrcset(t){(0,_prop_validators_e402ad49_js__WEBPACK_IMPORTED_MODULE_0__.w)(this,"_srcset",t)}componentWillLoad(){this.validateAlt(this._alt),this.validateLoading(this._loading),this.validateSizes(this._sizes),this.validateSrc(this._src),this.validateSrcset(this._srcset)}render(){return (0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.H,null,(0,_index_50adf9a0_js__WEBPACK_IMPORTED_MODULE_1__.h)("img",{alt:this.state._alt,loading:this.state._loading,sizes:this.state._sizes,src:this.state._src,srcset:this.state._srcset}))}static get watchers(){return{_alt:["validateAlt"],_loading:["validateLoading"],_sizes:["validateSizes"],_src:["validateSrc"],_srcset:["validateSrcset"]}}};KolImage.style={default:defaultStyleCss}; /***/ }) }; ;