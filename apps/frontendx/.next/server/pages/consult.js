(() => {
var exports = {};
exports.id = 9788;
exports.ids = [9788];
exports.modules = {

/***/ 839:
/***/ (() => {

throw new Error("Module parse failed: Unexpected character '#' (1:1)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> ## Do you have a frontend development problem that is blocking your team?\n| - Do you need a second brain to think through a specific frontend problem?\n| - Got a tricky situation stopping you from shipping features to your customers?");

/***/ }),

/***/ 6515:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ divider),
/* harmony export */   "z": () => (/* binding */ callButton)
/* harmony export */ });
/* harmony import */ var _cutting_component_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3319);
/* harmony import */ var _vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7587);
/* harmony import */ var _vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__);


const buttonStyles = (0,_cutting_component_library__WEBPACK_IMPORTED_MODULE_1__/* .responsiveStyle */ .gh)({
    mobile: {
        width: "100%"
    },
    tablet: {
        width: "50%"
    },
    desktop: {
        width: "33%"
    }
});
const divider = (0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.style)({
    borderBottom: `5px solid ${_cutting_component_library__WEBPACK_IMPORTED_MODULE_1__/* .palette.teal500 */ .DG.teal500}`,
    ...buttonStyles
});
const callButton = (0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.style)({
    marginTop: _cutting_component_library__WEBPACK_IMPORTED_MODULE_1__/* .vars.space.small */ .gR.space.small,
    ...buttonStyles
});


/***/ }),

/***/ 1844:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ Consult)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _content_services_consult_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(839);
/* harmony import */ var _content_services_consult_mdx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_content_services_consult_mdx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Services_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7317);
/* harmony import */ var _Call_CallPopupButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7557);
/* harmony import */ var _Consult_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6515);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Services_Service__WEBPACK_IMPORTED_MODULE_2__]);
_Services_Service__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore





function Consult() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Services_Service__WEBPACK_IMPORTED_MODULE_2__/* .Service */ .t, {
        heading: "Frontend Strategy consult",
        callType: "frontend-strategy-consult",
        contactButtons: false,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_content_services_consult_mdx__WEBPACK_IMPORTED_MODULE_1___default()), {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: _Consult_css__WEBPACK_IMPORTED_MODULE_4__/* .callButton */ .z,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Call_CallPopupButton__WEBPACK_IMPORTED_MODULE_3__/* .CallPopupButton */ .w, {
                    callType: "frontend-strategy-consult",
                    children: "BOOK A STRATEGY CONSULT"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: _Consult_css__WEBPACK_IMPORTED_MODULE_4__/* .divider */ .q
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5913:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Consult_Consult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1844);
/* harmony import */ var _components_Layouts_FullPageLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9281);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Consult_Consult__WEBPACK_IMPORTED_MODULE_1__]);
_components_Consult_Consult__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function ConsultService() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layouts_FullPageLayout__WEBPACK_IMPORTED_MODULE_2__/* .FullPageLayout */ .u, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Consult_Consult__WEBPACK_IMPORTED_MODULE_1__/* .Consult */ .M, {})
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConsultService);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7587:
/***/ ((module) => {

"use strict";
module.exports = require("@vanilla-extract/css");

/***/ }),

/***/ 1382:
/***/ ((module) => {

"use strict";
module.exports = require("@vanilla-extract/sprinkles/createRuntimeSprinkles");

/***/ }),

/***/ 4846:
/***/ ((module) => {

"use strict";
module.exports = require("@vanilla-extract/sprinkles/createUtils");

/***/ }),

/***/ 1912:
/***/ ((module) => {

"use strict";
module.exports = require("assert-ts");

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 3623:
/***/ ((module) => {

"use strict";
module.exports = require("hamburger-react");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 776:
/***/ ((module) => {

"use strict";
module.exports = require("react-calendly");

/***/ }),

/***/ 172:
/***/ ((module) => {

"use strict";
module.exports = require("react-slidedown");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3041:
/***/ ((module) => {

"use strict";
module.exports = require("reactjs-popup");

/***/ }),

/***/ 5641:
/***/ ((module) => {

"use strict";
module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7459,8639,3319,4878,9281,7771,7317], () => (__webpack_exec__(5913)));
module.exports = __webpack_exports__;

})();