"use strict";
exports.id = 8372;
exports.ids = [8372];
exports.modules = {

/***/ 8372:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gM": () => (/* binding */ LinkWrapper)
/* harmony export */ });
/* unused harmony exports ButtonLinkWrapper, AnchorLinkWrapper */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cutting_component_library__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3319);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6700);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _LinkWrapper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1943);
/* harmony import */ var _util_gtm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(341);







// eslint-disable-next-line react/display-name
const ButtonLinkWrapper = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_cutting_component_library__WEBPACK_IMPORTED_MODULE_6__/* .ButtonLink */ .ZP, {
            ...props
        })
    }));
// eslint-disable-next-line react/display-name
const AnchorLinkWrapper = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        ref: ref,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            ...props
        })
    }));
function LinkWrapper({ className , linkType , as , onClick , ...props }) {
    const Tag = linkType === "button" ? ButtonLinkWrapper : AnchorLinkWrapper;
    const clickHandler = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
        (0,_util_gtm__WEBPACK_IMPORTED_MODULE_5__/* .pageview */ .L)(props.href);
        onClick?.(e);
    }, [
        onClick,
        props.href
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: props.href,
        as: as,
        passHref: true,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Tag, {
            onClick: clickHandler,
            ...props,
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_LinkWrapper_css__WEBPACK_IMPORTED_MODULE_4__/* .root */ .J, className)
        })
    });
}


/***/ }),

/***/ 341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ pageview)
/* harmony export */ });
/* harmony import */ var react_cookie_consent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9779);
/* harmony import */ var react_cookie_consent__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_cookie_consent__WEBPACK_IMPORTED_MODULE_0__);

const isProduction = "production" === "production";
const pageview = (url)=>{
    if (!isProduction && (0,react_cookie_consent__WEBPACK_IMPORTED_MODULE_0__.getCookieConsentValue)() !== "true") {
        return;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof window.dataLayer !== "undefined") {
        console.log(`logging page view ${url}`);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        window.dataLayer.push({
            event: "pageview",
            page: url
        });
    }
};


/***/ })

};
;