"use strict";
(() => {
var exports = {};
exports.id = 4094;
exports.ids = [4094];
exports.modules = {

/***/ 7711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* binding */ MDXLayoutRenderer)
});

// UNUSED EXPORTS: MDXComponents

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "mdx-bundler/client"
const client_namespaceObject = require("mdx-bundler/client");
// EXTERNAL MODULE: ./components/MDX/Link.tsx
var Link = __webpack_require__(6563);
// EXTERNAL MODULE: ./components/Layouts/FullPageLayout.tsx
var FullPageLayout = __webpack_require__(9281);
// EXTERNAL MODULE: ../../packages/component-library/dist/esm/src.js
var src = __webpack_require__(3319);
// EXTERNAL MODULE: external "@vanilla-extract/css"
var css_ = __webpack_require__(7587);
;// CONCATENATED MODULE: external "polished"
const external_polished_namespaceObject = require("polished");
;// CONCATENATED MODULE: ./components/Layouts/BlogLayout/BlogLayout.css.ts



const container = (0,css_.style)({});
const blockquoteColor = (0,external_polished_namespaceObject.darken)("0.2", "rgb(203, 213, 225)");
(0,css_.globalStyle)(`${container} blockquote`, {
    padding: "0 1em",
    color: blockquoteColor,
    borderLeft: "0.25em solid #8B949E",
    marginLeft: src/* vars.space.small */.gR.space.small,
    fontStyle: "italic"
});

;// CONCATENATED MODULE: ./components/Layouts/BlogLayout/index.tsx



function Layout({ heading , children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(FullPageLayout/* FullPageLayout */.u, {
        className: container,
        heading: heading,
        children: children
    });
}
/* harmony default export */ const BlogLayout = (Layout);

// EXTERNAL MODULE: ./constants.ts
var constants = __webpack_require__(9083);
// EXTERNAL MODULE: external "assert-ts"
var external_assert_ts_ = __webpack_require__(1912);
;// CONCATENATED MODULE: ./components/MDX/Img.tsx



function Img({ src , alt , ...rest }) {
    (0,external_assert_ts_.assert)(!!src, `an img must have a valid src attribute`);
    const url = new URL(src, constants/* CDN */.G3).href;
    return /*#__PURE__*/ jsx_runtime_.jsx("img", {
        alt: alt,
        src: url,
        ...rest
    });
}

;// CONCATENATED MODULE: ./components/MDX/MDX.tsx


// TODO: replace getMDXComponent, it breaks csp with new Function




const MDXComponents = {
    a: Link/* Link */.r,
    img: Img
};
function MDXLayoutRenderer({ mdxSource , ...rest }) {
    const MDXLayout = (0,external_react_.useMemo)(()=>(0,client_namespaceObject.getMDXComponent)(mdxSource), [
        mdxSource
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(BlogLayout, {
        heading: rest.frontMatter.title,
        children: /*#__PURE__*/ jsx_runtime_.jsx(MDXLayout, {
            components: MDXComponents,
            ...rest
        })
    });
}


/***/ }),

/***/ 9083:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 2181:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Blog),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_mdx_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(656);
/* harmony import */ var _components_MDX_MDX__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7711);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_mdx_mdx__WEBPACK_IMPORTED_MODULE_1__]);
_util_mdx_mdx__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function Blog({ post  }) {
    const { mdxSource , frontMatter  } = post;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MDX_MDX__WEBPACK_IMPORTED_MODULE_2__/* .MDXLayoutRenderer */ .J, {
        mdxSource: mdxSource,
        frontMatter: frontMatter
    });
}
async function getStaticPaths() {
    const posts = (0,_util_mdx_mdx__WEBPACK_IMPORTED_MODULE_1__/* .getFiles */ .bE)();
    return {
        paths: posts.map((p)=>({
                params: {
                    slug: (0,_util_mdx_mdx__WEBPACK_IMPORTED_MODULE_1__/* .formatSlug */ .gf)(p).split("/")
                }
            })),
        fallback: false
    };
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getStaticProps({ params  }) {
    // const allPosts = await getAllFilesFrontMatter();
    // TODO: add previous and next
    // const postIndex = allPosts.findIndex((post) => formatSlug(post.slug) === params.slug.join('/'));
    // const prev = allPosts[postIndex + 1] || null;
    // const next = allPosts[postIndex - 1] || null;
    const post = await (0,_util_mdx_mdx__WEBPACK_IMPORTED_MODULE_1__/* .getFileBySlug */ .x7)(params.slug.join("/"));
    // TODO: add rss
    // if (allPosts.length > 0) {
    //   const rss = generateRss(allPosts);
    //   fs.writeFileSync('./public/feed.xml', rss);
    // }
    return {
        props: {
            post
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7459,7777,6700,9773,8639,3319,4878,9281,2259], () => (__webpack_exec__(2181)));
module.exports = __webpack_exports__;

})();