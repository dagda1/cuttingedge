"use strict";
exports.id = 9281;
exports.ids = [9281];
exports.modules = {

/***/ 9281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ FullPageLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PageLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4878);
/* harmony import */ var _styles_utilities_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7196);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _PageLayout_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6281);






function FullPageLayout({ className , ...props }) {
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (!document) {
            return;
        }
        document.querySelector("#__next")?.classList.add(_styles_utilities_css__WEBPACK_IMPORTED_MODULE_2__/* .expand */ .jn);
        return ()=>{
            document.querySelector("#__next")?.classList.remove(_styles_utilities_css__WEBPACK_IMPORTED_MODULE_2__/* .expand */ .jn);
        };
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PageLayout__WEBPACK_IMPORTED_MODULE_1__/* .PageLayout */ .X, {
        ...props,
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_PageLayout_css__WEBPACK_IMPORTED_MODULE_5__/* .main */ .DH, _styles_utilities_css__WEBPACK_IMPORTED_MODULE_2__/* .pushDown */ .WR, className)
    });
}


/***/ }),

/***/ 1943:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ root)
/* harmony export */ });
/* harmony import */ var _vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7587);
/* harmony import */ var _vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__);

const root = (0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.style)({
    whiteSpace: "nowrap"
});
(0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.globalStyle)(`${root} a`, {
    padding: 0
});


/***/ }),

/***/ 7196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WR": () => (/* binding */ pushDown),
/* harmony export */   "jn": () => (/* binding */ expand),
/* harmony export */   "vk": () => (/* binding */ pad)
/* harmony export */ });
/* unused harmony export fullHeight */
/* harmony import */ var _cutting_component_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3319);
/* harmony import */ var _vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7587);
/* harmony import */ var _vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_LinkWrapper_LinkWrapper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1943);



const fullHeight = (0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.style)({
    minHeight: "100vh",
    position: "relative"
});
const pushDown = (0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.style)([
    {
        flex: 1,
        ...(0,_cutting_component_library__WEBPACK_IMPORTED_MODULE_2__/* .responsiveStyle */ .gh)({
            mobile: {
                marginTop: _cutting_component_library__WEBPACK_IMPORTED_MODULE_2__/* .vars.space.xlarge */ .gR.space.xlarge
            },
            tablet: {
                marginTop: _cutting_component_library__WEBPACK_IMPORTED_MODULE_2__/* .vars.space.large */ .gR.space.large
            }
        })
    }, 
]);
(0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.globalStyle)(`${pushDown} a:not(${_components_LinkWrapper_LinkWrapper_css__WEBPACK_IMPORTED_MODULE_1__/* .root */ .J})`, {
    color: _cutting_component_library__WEBPACK_IMPORTED_MODULE_2__/* .palette.blue500 */ .DG.blue500
});
const expand = (0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.style)({
    minHeight: "100%",
    display: "flex",
    flexDirection: "column"
});
const pad = (0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.style)([
    (0,_cutting_component_library__WEBPACK_IMPORTED_MODULE_2__/* .atoms */ .HZ)({
        marginY: "large"
    })
]);


/***/ })

};
;