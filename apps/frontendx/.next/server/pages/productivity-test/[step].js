"use strict";
(() => {
var exports = {};
exports.id = 7324;
exports.ids = [7324,2607,9441,8120,693,9570,1352];
exports.modules = {

/***/ 490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "C": () => (/* binding */ Navigator)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/LinkWrapper/LinkWrapper.tsx
var LinkWrapper = __webpack_require__(8372);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ../../packages/component-library/dist/esm/src.js
var src = __webpack_require__(3319);
// EXTERNAL MODULE: external "@vanilla-extract/css"
var css_ = __webpack_require__(7587);
;// CONCATENATED MODULE: ./components/Navigator/Navigator.css.ts


const buttonContainer = (0,css_.style)({
    display: "flex",
    justifyContent: "space-between"
});
(0,css_.globalStyle)(`${buttonContainer} a, ${buttonContainer} button`, {
    whiteSpace: "nowrap",
    minWidth: src/* vars.space.xlarge */.gR.space.xlarge,
    display: "inline-block",
    border: "1px solid green",
    color: src/* palette.white */.DG.white
});
(0,css_.globalStyle)(`${buttonContainer} a:visitied`, {
    color: src/* palette.white */.DG.white
});
(0,css_.globalStyle)(`${buttonContainer} button`, {
    width: src/* vars.space.xlarge */.gR.space.xlarge
});

;// CONCATENATED MODULE: ./components/Navigator/Navigator.tsx






function Navigator({}) {
    const router = (0,router_.useRouter)();
    const step = Number(router.query.step);
    const previousLink = step <= 1 ? 1 : step - 1;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: buttonContainer,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(LinkWrapper/* LinkWrapper */.gM, {
                linkType: "button",
                href: "/productivity-test/[step]",
                as: step - 1 === 0 ? "/productivity-test/1" : `/productivity-test/${previousLink}`,
                buttonStyle: step - 1 === 0 ? "warning" : "secondary",
                children: "Previous"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(src/* Button */.zx, {
                type: "submit",
                buttonStyle: "primary",
                children: "NEXT"
            })
        ]
    });
}


/***/ }),

/***/ 1689:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductivityTest)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_ProductivityTest_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5440);
/* harmony import */ var _components_Navigator_Navigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(490);
/* harmony import */ var _components_Layouts_FullPageLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9281);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_utilities_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7196);
/* harmony import */ var _Intro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4418);
/* harmony import */ var _components_LinkWrapper_LinkWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8372);
/* harmony import */ var _Communication__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(611);
/* harmony import */ var _Bugs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(983);
/* harmony import */ var _Build__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7350);
/* harmony import */ var _Testing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6020);
/* harmony import */ var _Development__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1613);
/* harmony import */ var _Report__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7064);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Intro__WEBPACK_IMPORTED_MODULE_7__, _Communication__WEBPACK_IMPORTED_MODULE_9__, _Bugs__WEBPACK_IMPORTED_MODULE_10__, _Build__WEBPACK_IMPORTED_MODULE_11__, _Testing__WEBPACK_IMPORTED_MODULE_12__, _Development__WEBPACK_IMPORTED_MODULE_13__, _Report__WEBPACK_IMPORTED_MODULE_14__]);
([_Intro__WEBPACK_IMPORTED_MODULE_7__, _Communication__WEBPACK_IMPORTED_MODULE_9__, _Bugs__WEBPACK_IMPORTED_MODULE_10__, _Build__WEBPACK_IMPORTED_MODULE_11__, _Testing__WEBPACK_IMPORTED_MODULE_12__, _Development__WEBPACK_IMPORTED_MODULE_13__, _Report__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const steps = [
    {
        title: "Frontend Productivity Healthcheck",
        Component: _Intro__WEBPACK_IMPORTED_MODULE_7__.Intro
    },
    {
        title: "Build and Deployment",
        Component: _Build__WEBPACK_IMPORTED_MODULE_11__.Build
    },
    {
        title: "Bug tracking and resolution",
        Component: _Bugs__WEBPACK_IMPORTED_MODULE_10__.Bugs
    },
    {
        title: "Testing",
        Component: _Testing__WEBPACK_IMPORTED_MODULE_12__.Testing
    },
    {
        title: "Developer Experience",
        Component: _Development__WEBPACK_IMPORTED_MODULE_13__.Development
    },
    {
        title: "Communication",
        Component: _Communication__WEBPACK_IMPORTED_MODULE_9__.Communication
    },
    {
        title: "Results",
        Component: _Report__WEBPACK_IMPORTED_MODULE_14__["default"]
    }, 
];
function ProductivityTest() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const step = Number(router.query.step);
    const current = steps[step - 1];
    if (typeof current === "undefined") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "...loading"
        });
    }
    const isIntro = step === 1;
    const pageTitle = [
        steps[0].title,
        steps.slice(-1)[0].title
    ].includes(current.title) ? current.title : `${step - 1}. ${current.title}`;
    const nextPage = step === steps.length ? undefined : `/productivity-test/${step + 1}`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layouts_FullPageLayout__WEBPACK_IMPORTED_MODULE_4__/* .FullPageLayout */ .u, {
        heading: pageTitle,
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_styles_ProductivityTest_css__WEBPACK_IMPORTED_MODULE_2__/* .root */ .Jz, _styles_utilities_css__WEBPACK_IMPORTED_MODULE_6__/* .pushDown */ .WR),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: _styles_ProductivityTest_css__WEBPACK_IMPORTED_MODULE_2__/* .container */ .nC,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(current.Component, {
                nextPage: nextPage,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: isIntro ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: _styles_ProductivityTest_css__WEBPACK_IMPORTED_MODULE_2__/* .start */ .BL,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LinkWrapper_LinkWrapper__WEBPACK_IMPORTED_MODULE_8__/* .LinkWrapper */ .gM, {
                            linkType: "button",
                            buttonStyle: "primary",
                            href: "/productivity-test/2",
                            children: "START"
                        })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navigator_Navigator__WEBPACK_IMPORTED_MODULE_3__/* .Navigator */ .C, {
                        steps: steps.length
                    })
                })
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7587:
/***/ ((module) => {

module.exports = require("@vanilla-extract/css");

/***/ }),

/***/ 1382:
/***/ ((module) => {

module.exports = require("@vanilla-extract/sprinkles/createRuntimeSprinkles");

/***/ }),

/***/ 4846:
/***/ ((module) => {

module.exports = require("@vanilla-extract/sprinkles/createUtils");

/***/ }),

/***/ 1912:
/***/ ((module) => {

module.exports = require("assert-ts");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 6330:
/***/ ((module) => {

module.exports = require("deepmerge");

/***/ }),

/***/ 3623:
/***/ ((module) => {

module.exports = require("hamburger-react");

/***/ }),

/***/ 6024:
/***/ ((module) => {

module.exports = require("little-state-machine");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 776:
/***/ ((module) => {

module.exports = require("react-calendly");

/***/ }),

/***/ 9779:
/***/ ((module) => {

module.exports = require("react-cookie-consent");

/***/ }),

/***/ 172:
/***/ ((module) => {

module.exports = require("react-slidedown");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3041:
/***/ ((module) => {

module.exports = require("reactjs-popup");

/***/ }),

/***/ 2065:
/***/ ((module) => {

module.exports = import("plyr-react");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7459,7777,6700,8639,3319,4878,9281,7771,2890,2649,7064,1613,7350,983,611,6020,8372,4418], () => (__webpack_exec__(1689)));
module.exports = __webpack_exports__;

})();