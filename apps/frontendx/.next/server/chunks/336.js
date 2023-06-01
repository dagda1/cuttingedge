"use strict";
exports.id = 336;
exports.ids = [336];
exports.modules = {

/***/ 4413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ main)
/* harmony export */ });
/* harmony import */ var _vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7587);
/* harmony import */ var _vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__);

const main = (0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.style)({});


/***/ }),

/***/ 336:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DXVideo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DXVideo_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4413);
/* harmony import */ var _Layouts_FullPageLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9281);
/* harmony import */ var _VideoPlayer_VideoPlayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4197);
/* harmony import */ var _Intro_ContactButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2805);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_VideoPlayer_VideoPlayer__WEBPACK_IMPORTED_MODULE_3__, _Intro_ContactButtons__WEBPACK_IMPORTED_MODULE_4__]);
([_VideoPlayer_VideoPlayer__WEBPACK_IMPORTED_MODULE_3__, _Intro_ContactButtons__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function DXVideo({ heading , title ="please press play below" , video  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layouts_FullPageLayout__WEBPACK_IMPORTED_MODULE_2__/* .FullPageLayout */ .u, {
        heading: heading,
        className: _DXVideo_css__WEBPACK_IMPORTED_MODULE_1__/* .main */ .D,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_VideoPlayer_VideoPlayer__WEBPACK_IMPORTED_MODULE_3__/* .VideoPlayer */ .Y, {
                file: video
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Intro_ContactButtons__WEBPACK_IMPORTED_MODULE_4__/* .ContactButtons */ .a, {
                callType: "chat"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4197:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ VideoPlayer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var plyr_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2065);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9083);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([plyr_react__WEBPACK_IMPORTED_MODULE_1__]);
plyr_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function VideoPlayer({ file  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(plyr_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
        source: {
            type: "video",
            sources: [
                {
                    src: `${_constants__WEBPACK_IMPORTED_MODULE_2__/* .CDN */ .G3}/videos/${file}`
                }
            ]
        }
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;