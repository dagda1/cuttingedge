"use strict";
exports.id = 7317;
exports.ids = [7317];
exports.modules = {

/***/ 4623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DH": () => (/* binding */ main),
/* harmony export */   "pI": () => (/* binding */ children)
/* harmony export */ });
/* unused harmony exports container, images, cta */
/* harmony import */ var _vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7587);
/* harmony import */ var _vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cutting_component_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3319);


const main = (0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.style)({});
(0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.globalStyle)(`${main} h1`, {
    opacity: 1,
    fontWeight: "bold",
    color: _cutting_component_library__WEBPACK_IMPORTED_MODULE_1__/* .palette.white */ .DG.white
});
(0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.globalStyle)(`${main} ul`, {
    listStyle: "inside"
});
(0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.globalStyle)(`${main} h1`, {});
(0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.globalStyle)(`${main} h2:not(#notification-banner-title)`, {
    color: "#facc15",
    marginBottom: _cutting_component_library__WEBPACK_IMPORTED_MODULE_1__/* .vars.space.xxsmall */ .gR.space.xxsmall
});
const container = (0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.style)({
    display: "flex"
});
const children = (0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.style)({
    flex: 2
});
const images = (0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.style)({
    flex: 1,
    display: "flex",
    flexWrap: "wrap"
});
const cta = (0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.style)({});


/***/ }),

/***/ 7317:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ Service)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Service_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4623);
/* harmony import */ var _Intro_ContactButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2805);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Intro_ContactButtons__WEBPACK_IMPORTED_MODULE_2__]);
_Intro_ContactButtons__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function Service({ heading , callType , contactButtons =true , children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: _Service_css__WEBPACK_IMPORTED_MODULE_1__/* .main */ .DH,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: heading
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: _Service_css__WEBPACK_IMPORTED_MODULE_1__/* .children */ .pI,
                children: children
            }),
            contactButtons && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        children: [
                            "To find out more, either ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                children: "BOOK A CALL"
                            }),
                            " or ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                children: "send us an email"
                            }),
                            " using the buttons below."
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Intro_ContactButtons__WEBPACK_IMPORTED_MODULE_2__/* .ContactButtons */ .a, {
                        buttonStyle: "primary",
                        callType: callType
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;