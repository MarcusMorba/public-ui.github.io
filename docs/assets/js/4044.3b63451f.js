"use strict"; exports.id = 4044; exports.ids = [4044]; exports.modules = { /***/ 96049: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ a: () => (/* binding */ a11yHint), /* harmony export */ b: () => (/* binding */ a11yHintLabelingLandmarks), /* harmony export */ c: () => (/* binding */ uiUxHintMillerscheZahl), /* harmony export */ d: () => (/* binding */ devHint), /* harmony export */ e: () => (/* binding */ deprecatedHint), /* harmony export */ f: () => (/* binding */ featureHint), /* harmony export */ g: () => (/* binding */ devWarning), /* harmony export */ h: () => (/* binding */ a11yHintDisabled), /* harmony export */ u: () => (/* binding */ uiUxHint) /* harmony export */ }); /* harmony import */ var _dev_utils_d7ee8485_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8534); /*! * KoliBri - The accessible HTML-Standard */ const a11yCache=new Set,a11yHint=(e,i)=>{(!1===a11yCache.has(e)||(null==i?void 0:i.force))&&(a11yCache.add(e),_dev_utils_d7ee8485_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==i?void 0:i.details)||[]),{classifier:"✋ a11y",overwriteStyle:"; background-color: #09f"}))},deprecatedCache=new Set,deprecatedHint=(e,i)=>{(!1===deprecatedCache.has(e)||(null==i?void 0:i.force))&&(deprecatedCache.add(e),_dev_utils_d7ee8485_js__WEBPACK_IMPORTED_MODULE_0__.L.warn([e].concat((null==i?void 0:i.details)||[]),{classifier:"🔥 deprecated",overwriteStyle:"; background-color: #f00"}))},devCache=new Set,devHint=(e,i)=>{(!1===devCache.has(e)||(null==i?void 0:i.force))&&(devCache.add(e),_dev_utils_d7ee8485_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==i?void 0:i.details)||[]),{classifier:"💻 dev",overwriteStyle:"; background-color: #f09"}))},devWarning=(e,i)=>{(!1===devCache.has(e)||(null==i?void 0:i.force))&&(devCache.add(e),_dev_utils_d7ee8485_js__WEBPACK_IMPORTED_MODULE_0__.L.warn([e].concat((null==i?void 0:i.details)||[]),{classifier:"💻 dev",overwriteStyle:"; background-color: #f09"}))},featureCache=new Set,featureHint=(e,i=!1,a)=>{(!1===featureCache.has(e)||(null==a?void 0:a.force))&&(featureCache.add(e),e+=!0===i?" ✅":"",_dev_utils_d7ee8485_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==a?void 0:a.details)||[]),{classifier:"🌟 feature",overwriteStyle:"; background-color: #309"}))};devHint("Wir freuen uns über jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const uiUxCache=new Set,uiUxHint=(e,i)=>{(!1===uiUxCache.has(e)||(null==i?void 0:i.force))&&(uiUxCache.add(e),_dev_utils_d7ee8485_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==i?void 0:i.details)||[]),{classifier:"📑 ui/ux",overwriteStyle:"; background-color: #060;"}))},a11yHintDisabled=()=>{a11yHint('"Disabled" schränkt die Zugänglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},a11yHintLabelingLandmarks=e=>{"string"==typeof e&&""!==e||a11yHint("Manche Strukturelemente, wie bspw. der nav-Tag, können mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden können, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},uiUxHintMillerscheZahl=(e,i=8)=>{i>7&&uiUxHint(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Menüpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)}; /***/ }), /***/ 84044: /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { __webpack_require__.r(__webpack_exports__); /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */ kol_input_adapter_leanup: () => (/* binding */ KolInputAdapterLeanup) /* harmony export */ }); /* harmony import */ var _index_5ab2ea42_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60775); /* harmony import */ var _a11y_tipps_35a8451a_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96049); /*! * KoliBri - The accessible HTML-Standard */ const KolInputAdapterLeanup=class{constructor(e){(0,_index_5ab2ea42_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,e)}componentWillLoad(){(0,_a11y_tipps_35a8451a_js__WEBPACK_IMPORTED_MODULE_1__.e)("Die Komponente 'kol-input-adapter-leanup' mit dem Release v1.1.7 umgezogen. Lesen Sie hier, wie Sie sie migrieren: https://public-ui.github.io/docs/changelog/#117---30092022")}render(){return (0,_index_5ab2ea42_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_5ab2ea42_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_5ab2ea42_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-alert",{_type:"warning"},"Die Komponente ",(0,_index_5ab2ea42_js__WEBPACK_IMPORTED_MODULE_0__.h)("code",null,"kol-input-adapter-leanup")," ist umgezogen. Lesen Sie hier, wie Sie sie migrieren:"," ",(0,_index_5ab2ea42_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-link",{_href:"https://public-ui.github.io/docs/changelog#118---07102022",_label:"https://public-ui.github.io/docs/changelog#118---07102022",_target:"documentation"})))}}; /***/ }) }; ;