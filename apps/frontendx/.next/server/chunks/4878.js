"use strict";
exports.id = 4878;
exports.ids = [4878];
exports.modules = {

/***/ 6281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DH": () => (/* binding */ main)
/* harmony export */ });
/* unused harmony exports container, full */
/* harmony import */ var _vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7587);
/* harmony import */ var _vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cutting_component_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3319);


const main = (0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.style)({
    ...(0,_cutting_component_library__WEBPACK_IMPORTED_MODULE_1__/* .responsiveStyle */ .gh)({
        mobile: {
            maxWidth: "none",
            padding: `0 ${_cutting_component_library__WEBPACK_IMPORTED_MODULE_1__/* .vars.space.small */ .gR.space.small}`
        },
        tablet: {
            maxWidth: `${_cutting_component_library__WEBPACK_IMPORTED_MODULE_1__/* .breakpoints.tablet */ .AV.tablet}rem`
        },
        desktop: {
            maxWidth: `${_cutting_component_library__WEBPACK_IMPORTED_MODULE_1__/* .breakpoints.desktop */ .AV.desktop}rem`
        }
    })
});
const container = (0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.style)({
    display: "flex",
    flexDirection: "column",
    flex: 1
});
const full = (0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.style)({
    marginTop: _cutting_component_library__WEBPACK_IMPORTED_MODULE_1__/* .vars.space.large */ .gR.space.large
});
(0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.globalStyle)(`${full} h1`, {
    ...(0,_cutting_component_library__WEBPACK_IMPORTED_MODULE_1__/* .responsiveStyle */ .gh)({
        mobile: {
            marginTop: _cutting_component_library__WEBPACK_IMPORTED_MODULE_1__/* .vars.space.large */ .gR.space.large
        },
        tablet: {
            marginTop: "0"
        }
    })
});


/***/ }),

/***/ 4878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ PageLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PageLayout_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6281);



function PageLayout({ heading , className , children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_PageLayout_css__WEBPACK_IMPORTED_MODULE_2__/* .main */ .DH, className),
        children: [
            heading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: heading
            }),
            children
        ]
    });
}


/***/ })

};
;