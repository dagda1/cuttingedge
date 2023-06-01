"use strict";
(() => {
var exports = {};
exports.id = 9195;
exports.ids = [9195];
exports.modules = {

/***/ 1839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "l": () => (/* binding */ Blog)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Layouts/FullPageLayout.tsx
var FullPageLayout = __webpack_require__(9281);
// EXTERNAL MODULE: ./components/MDX/Link.tsx
var Link = __webpack_require__(6563);
;// CONCATENATED MODULE: ./util/date.ts
function formatDate(date) {
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric"
    };
    const now = new Date(date).toLocaleDateString("en-US", options);
    return now;
}

// EXTERNAL MODULE: ../../packages/component-library/dist/esm/src.js
var src = __webpack_require__(3319);
// EXTERNAL MODULE: external "@vanilla-extract/css"
var css_ = __webpack_require__(7587);
;// CONCATENATED MODULE: ./components/Blog/blog.css.ts


const post = (0,css_.style)({
    borderBottom: "1px solid #e5e5e5;",
    paddingBottom: src/* vars.space.small */.gR.space.small,
    borderTop: "1px solid #e5e5e5;",
    paddingTop: src/* vars.space.small */.gR.space.small
});
const container = (0,css_.style)({});
(0,css_.globalStyle)(`${container} h1`, {
    opacity: 1,
    marginTop: "0",
    fontWeight: "bold",
    ...(0,src/* responsiveStyle */.gh)({
        mobile: {
            lineHeight: "1.25",
            fontSize: "36px"
        },
        tablet: {
            fontSize: "50px"
        },
        desktop: {
            fontSize: "80px"
        }
    })
});

// EXTERNAL MODULE: ../../packages/util/dist/esm/index.js
var esm = __webpack_require__(8639);
;// CONCATENATED MODULE: ./components/Tag/Tag.css.ts

const tag = (0,css_.style)({
    color: "rgb(20, 184, 166)"
});

;// CONCATENATED MODULE: ./components/Tag/Tag.tsx



function Tag({ text  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: tag,
        children: (0,esm/* capitalize */.kC)(text)
    });
}

;// CONCATENATED MODULE: ./components/Blog/Blog.tsx






const MAX_DISPLAY = 10;
function Blog({ posts  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(FullPageLayout/* FullPageLayout */.u, {
        heading: "Tips from the front",
        className: container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    children: posts.slice(0, MAX_DISPLAY).map((frontMatter)=>{
                        const { slug , date , title , summary  } = frontMatter;
                        return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: post,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("article", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dl", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                                    className: "sr-only",
                                                    children: "Published on"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("dd", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("time", {
                                                        dateTime: date,
                                                        children: formatDate(date)
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: frontMatter.tags.map((tag, i)=>{
                                                return /*#__PURE__*/ jsx_runtime_.jsx(Tag, {
                                                    text: `${tag}${i !== frontMatter.tags.length - 1 ? ", " : ""}`
                                                }, tag);
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Link/* Link */.r, {
                                                                    href: `/blog/${slug}`,
                                                                    children: title
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            children: summary
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Link/* Link */.r, {
                                                        href: `/blog/${slug}`,
                                                        "aria-label": `Read "${title}"`,
                                                        children: "Read more →"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }, slug);
                    })
                })
            }),
            posts.length > MAX_DISPLAY && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Link/* Link */.r, {
                    href: "/blog",
                    className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                    "aria-label": "all posts",
                    children: "All Posts →"
                })
            })
        ]
    });
}


/***/ }),

/***/ 4119:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Blog),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Blog_Blog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1839);
/* harmony import */ var _util_mdx_mdx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(656);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_mdx_mdx__WEBPACK_IMPORTED_MODULE_2__]);
_util_mdx_mdx__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function Blog({ posts  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Blog_Blog__WEBPACK_IMPORTED_MODULE_1__/* .Blog */ .l, {
        posts: posts
    });
}
async function getStaticProps() {
    const posts = await (0,_util_mdx_mdx__WEBPACK_IMPORTED_MODULE_2__/* .getAllFilesFrontMatter */ .sj)();
    return {
        props: {
            posts
        }
    };
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

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 3623:
/***/ ((module) => {

module.exports = require("hamburger-react");

/***/ }),

/***/ 7219:
/***/ ((module) => {

module.exports = require("image-size");

/***/ }),

/***/ 8214:
/***/ ((module) => {

module.exports = require("mdx-bundler");

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

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4956:
/***/ ((module) => {

module.exports = require("reading-time");

/***/ }),

/***/ 9847:
/***/ ((module) => {

module.exports = import("rehype-autolink-headings");;

/***/ }),

/***/ 1380:
/***/ ((module) => {

module.exports = import("rehype-citation");;

/***/ }),

/***/ 9521:
/***/ ((module) => {

module.exports = import("rehype-katex");;

/***/ }),

/***/ 6370:
/***/ ((module) => {

module.exports = import("rehype-preset-minify");;

/***/ }),

/***/ 483:
/***/ ((module) => {

module.exports = import("rehype-prism-plus");;

/***/ }),

/***/ 1871:
/***/ ((module) => {

module.exports = import("rehype-raw");;

/***/ }),

/***/ 7752:
/***/ ((module) => {

module.exports = import("rehype-slug");;

/***/ }),

/***/ 1083:
/***/ ((module) => {

module.exports = import("remark-footnotes");;

/***/ }),

/***/ 6809:
/***/ ((module) => {

module.exports = import("remark-gfm");;

/***/ }),

/***/ 9832:
/***/ ((module) => {

module.exports = import("remark-math");;

/***/ }),

/***/ 6016:
/***/ ((module) => {

module.exports = import("unist-util-visit");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7459,7777,6700,9773,8639,3319,4878,9281,2259], () => (__webpack_exec__(4119)));
module.exports = __webpack_exports__;

})();