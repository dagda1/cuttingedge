"use strict";
exports.id = 4418;
exports.ids = [4418];
exports.modules = {

/***/ 4418:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Intro": () => (/* binding */ Intro),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Testimonial_Testimonial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2890);
/* harmony import */ var _styles_ProductivityTest_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5440);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_VideoPlayer_VideoPlayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_VideoPlayer_VideoPlayer__WEBPACK_IMPORTED_MODULE_4__]);
_components_VideoPlayer_VideoPlayer__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function Intro({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_ProductivityTest_css__WEBPACK_IMPORTED_MODULE_2__/* .root */ .Jz, _styles_ProductivityTest_css__WEBPACK_IMPORTED_MODULE_2__/* .introRoot */ .$X),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Testimonial_Testimonial__WEBPACK_IMPORTED_MODULE_1__/* .Testimonial */ .g, {
                    children: "Developer productivity is not measured in how many lines of code are written or tracking hours worked against a JIRA or work item ticket."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_VideoPlayer_VideoPlayer__WEBPACK_IMPORTED_MODULE_4__/* .VideoPlayer */ .Y, {
                        file: "intro.mp4"
                    })
                }),
                children
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Intro);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$X": () => (/* binding */ introRoot),
/* harmony export */   "BL": () => (/* binding */ start),
/* harmony export */   "Jz": () => (/* binding */ root),
/* harmony export */   "nC": () => (/* binding */ container)
/* harmony export */ });
/* unused harmony export action */
/* harmony import */ var _cutting_component_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3319);
/* harmony import */ var _vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7587);
/* harmony import */ var _vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__);


const root = (0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.style)({
    display: "flex",
    flexDirection: "column"
});
const introRoot = (0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.style)({
    display: "flex"
});
const container = (0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.style)({
    flex: "1",
    display: "flex",
    justifyContent: "flex-start"
});
const start = (0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.style)([
    (0,_cutting_component_library__WEBPACK_IMPORTED_MODULE_1__/* .atoms */ .HZ)({
        justifyContent: "center",
        display: "flex",
        marginTop: "small"
    }), 
]);
(0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.globalStyle)(`${start} a, ${start} > div`, {
    display: "inline-block",
    ...(0,_cutting_component_library__WEBPACK_IMPORTED_MODULE_1__/* .responsiveStyle */ .gh)({
        mobile: {
            width: "100%"
        }
    })
});
(0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.globalStyle)(`${root} h1`, {
    margin: 0,
    ...(0,_cutting_component_library__WEBPACK_IMPORTED_MODULE_1__/* .responsiveStyle */ .gh)({
        mobile: {
            fontSize: "2rem"
        },
        tablet: {
            fontSize: "3rem"
        }
    })
});
const action = (0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.style)({});


/***/ })

};
;