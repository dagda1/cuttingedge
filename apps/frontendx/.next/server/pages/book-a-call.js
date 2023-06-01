"use strict";
(() => {
var exports = {};
exports.id = 7302;
exports.ids = [7302];
exports.modules = {

/***/ 2720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BookACall)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Layouts/PageLayout.tsx
var PageLayout = __webpack_require__(4878);
// EXTERNAL MODULE: external "react-calendly"
var external_react_calendly_ = __webpack_require__(776);
// EXTERNAL MODULE: ../../packages/component-library/dist/esm/src.js
var src = __webpack_require__(3319);
// EXTERNAL MODULE: external "@vanilla-extract/css"
var css_ = __webpack_require__(7587);
;// CONCATENATED MODULE: ./components/Call/Call.css.ts


const root = (0,css_.style)([
    {
        width: "100vw"
    },
    (0,src/* atoms */.HZ)({
        marginTop: {
            mobile: "large",
            tablet: "small"
        }
    }), 
]);
(0,css_.globalStyle)(".calendly-inline-widget", {
    ...(0,src/* responsiveStyle */.gh)({
        mobile: {
            marginTop: src/* vars.space.small */.gR.space.small,
            height: "87vh !important"
        },
        tablet: {
            marginTop: 0,
            height: "91vh !important"
        },
        desktop: {
            marginTop: 0,
            height: "95vh !important"
        }
    })
});

;// CONCATENATED MODULE: ./components/Call/Call.tsx




function Call({ callType  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(PageLayout/* PageLayout */.X, {
        className: root,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_calendly_.InlineWidget, {
            pageSettings: {
                backgroundColor: "ffffff",
                hideEventTypeDetails: false,
                hideGdprBanner: false,
                hideLandingPageDetails: true,
                primaryColor: "00a2ff",
                textColor: "4d5055"
            },
            url: `https://calendly.com/dagda1/${callType}`
        })
    });
}

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./pages/book-a-call.tsx



function BookACall() {
    const router = (0,router_.useRouter)();
    const { calltype  } = router.query;
    return /*#__PURE__*/ jsx_runtime_.jsx(Call, {
        callType: calltype
    });
}


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

/***/ 3623:
/***/ ((module) => {

module.exports = require("hamburger-react");

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

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7459,8639,3319,4878], () => (__webpack_exec__(2720)));
module.exports = __webpack_exports__;

})();