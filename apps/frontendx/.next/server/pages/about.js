(() => {
var exports = {};
exports.id = 2521;
exports.ids = [2521];
exports.modules = {

/***/ 2030:
/***/ (() => {

throw new Error("Module parse failed: Unexpected character '#' (3:1)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n| import { MyPullRequests } from '../components/MyPullRequests/MyPullRequests';\n| \n> ## [Paul Cowan (CEO)](https://www.linkedin.com/in/paul-cowan-19bb1116/)\n| \n| My passion is and always has been frontend development. I love the instant visual feedback that is unique to frontend development.");

/***/ }),

/***/ 9083:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ax": () => (/* binding */ GTM_ID),
/* harmony export */   "G3": () => (/* binding */ CDN),
/* harmony export */   "Sg": () => (/* binding */ NEWSLETTER),
/* harmony export */   "zJ": () => (/* binding */ CRM)
/* harmony export */ });
/* unused harmony exports blurDataURL, ESM */
const GTM_ID = "GTM-PB62LSD";
const blurDataURL = "data:image/png;basez64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==";
const CDN = "https://d966n3f4vz4e1.cloudfront.net";
const CRM = "https://crm.zoho.eu/crm/WebToLeadForm";
const NEWSLETTER = "https://maillist-manage.eu/weboptin.zc";
const ESM = "https://esm.sh";


/***/ }),

/***/ 1826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "AboutUs": () => (/* binding */ AboutUs),
  "default": () => (/* binding */ pages_about)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./content/about.mdx
var about = __webpack_require__(2030);
var about_default = /*#__PURE__*/__webpack_require__.n(about);
// EXTERNAL MODULE: ./util/image.ts
var util_image = __webpack_require__(4827);
// EXTERNAL MODULE: ./components/Layouts/FullPageLayout.tsx
var FullPageLayout = __webpack_require__(9281);
// EXTERNAL MODULE: ../../packages/component-library/dist/esm/src.js
var src = __webpack_require__(3319);
// EXTERNAL MODULE: external "@vanilla-extract/css"
var css_ = __webpack_require__(7587);
;// CONCATENATED MODULE: ./components/About/About.css.ts


const About_css_image = (0,css_.style)({
    marginTop: src/* vars.space.small */.gR.space.small,
    display: "flex",
    flex: 1
});
(0,css_.globalStyle)(`${About_css_image} img`, {
    maxWidth: "100%"
});

;// CONCATENATED MODULE: ./components/About/About.tsx
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore





function About() {
    return /*#__PURE__*/ jsx_runtime_.jsx(FullPageLayout/* FullPageLayout */.u, {
        heading: "Our story",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: About_css_image,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        alt: "Paul Cowan (CEO)",
                        src: (0,util_image/* getImageSrc */.Q)("/me.jpeg")
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((about_default()), {})
            ]
        })
    });
}

;// CONCATENATED MODULE: ./pages/about.tsx


function AboutUs() {
    return /*#__PURE__*/ jsx_runtime_.jsx(About, {});
}
/* harmony default export */ const pages_about = (AboutUs);


/***/ }),

/***/ 4827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ getImageSrc)
/* harmony export */ });
/* harmony import */ var _cutting_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8639);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9083);


const getImageSrc = (src)=>_cutting_util__WEBPACK_IMPORTED_MODULE_0__/* .isProduction */ .yv ? `${_constants__WEBPACK_IMPORTED_MODULE_1__/* .CDN */ .G3}${src}` : src;


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

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7459,8639,3319,4878,9281], () => (__webpack_exec__(1826)));
module.exports = __webpack_exports__;

})();