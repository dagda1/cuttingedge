"use strict";
exports.id = 2259;
exports.ids = [2259];
exports.modules = {

/***/ 6563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ Link)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6700);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


function Link({ href , children , ...rest }) {
    const isInternalLink = href && href.startsWith("/");
    const isAnchorLink = href && href.startsWith("#");
    if (isInternalLink) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: href,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                ...rest,
                children: children
            })
        });
    }
    if (isAnchorLink) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: href,
            ...rest,
            children: children
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: href,
        ...rest,
        children: children
    });
}


/***/ }),

/***/ 3457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ getAllFilesRecursively)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);


const pipe = (...fns)=>(x)=>fns.reduce((v, f)=>f(v), x);
function flattenArray(input) {
    return input.reduce((acc, item)=>[
            ...acc,
            ...Array.isArray(item) ? item : [
                item
            ]
        ], []);
}
const map = (fn)=>(input)=>input.map(fn);
function walkDir(fullPath) {
    return fs__WEBPACK_IMPORTED_MODULE_0___default().statSync(fullPath).isFile() ? fullPath : getAllFilesRecursively(fullPath);
}
const pathJoinPrefix = (prefix)=>(extraPath)=>path__WEBPACK_IMPORTED_MODULE_1___default().join(prefix, extraPath);
function getAllFilesRecursively(folder) {
    return pipe((fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync), map(pipe(pathJoinPrefix(folder), walkDir)), flattenArray)(folder);
}


/***/ }),

/***/ 656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bE": () => (/* binding */ getFiles),
/* harmony export */   "gf": () => (/* binding */ formatSlug),
/* harmony export */   "sj": () => (/* binding */ getAllFilesFrontMatter),
/* harmony export */   "x7": () => (/* binding */ getFileBySlug)
/* harmony export */ });
/* unused harmony export dateSortDesc */
/* harmony import */ var mdx_bundler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8214);
/* harmony import */ var mdx_bundler__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mdx_bundler__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reading_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4956);
/* harmony import */ var reading_time__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reading_time__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _files_files__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3457);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6809);
/* harmony import */ var remark_footnotes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1083);
/* harmony import */ var remark_math__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9832);
/* harmony import */ var _remark_extract_frontmatter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3057);
/* harmony import */ var _remark_code_title__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8368);
/* harmony import */ var _remark_img_to_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3427);
/* harmony import */ var rehype_slug__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7752);
/* harmony import */ var rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9847);
/* harmony import */ var rehype_katex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9521);
/* harmony import */ var rehype_citation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1380);
/* harmony import */ var rehype_prism_plus__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(483);
/* harmony import */ var rehype_preset_minify__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6370);
/* harmony import */ var _remark_inline_code_language__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6586);
/* harmony import */ var rehype_raw__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1871);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([remark_gfm__WEBPACK_IMPORTED_MODULE_6__, remark_footnotes__WEBPACK_IMPORTED_MODULE_7__, remark_math__WEBPACK_IMPORTED_MODULE_8__, _remark_extract_frontmatter__WEBPACK_IMPORTED_MODULE_9__, _remark_code_title__WEBPACK_IMPORTED_MODULE_10__, _remark_img_to_jsx__WEBPACK_IMPORTED_MODULE_11__, rehype_slug__WEBPACK_IMPORTED_MODULE_12__, rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_13__, rehype_katex__WEBPACK_IMPORTED_MODULE_14__, rehype_citation__WEBPACK_IMPORTED_MODULE_15__, rehype_prism_plus__WEBPACK_IMPORTED_MODULE_16__, rehype_preset_minify__WEBPACK_IMPORTED_MODULE_17__, _remark_inline_code_language__WEBPACK_IMPORTED_MODULE_18__, rehype_raw__WEBPACK_IMPORTED_MODULE_19__]);
([remark_gfm__WEBPACK_IMPORTED_MODULE_6__, remark_footnotes__WEBPACK_IMPORTED_MODULE_7__, remark_math__WEBPACK_IMPORTED_MODULE_8__, _remark_extract_frontmatter__WEBPACK_IMPORTED_MODULE_9__, _remark_code_title__WEBPACK_IMPORTED_MODULE_10__, _remark_img_to_jsx__WEBPACK_IMPORTED_MODULE_11__, rehype_slug__WEBPACK_IMPORTED_MODULE_12__, rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_13__, rehype_katex__WEBPACK_IMPORTED_MODULE_14__, rehype_citation__WEBPACK_IMPORTED_MODULE_15__, rehype_prism_plus__WEBPACK_IMPORTED_MODULE_16__, rehype_preset_minify__WEBPACK_IMPORTED_MODULE_17__, _remark_inline_code_language__WEBPACK_IMPORTED_MODULE_18__, rehype_raw__WEBPACK_IMPORTED_MODULE_19__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






// Remark packages






// Rehype packages








const root = process.cwd();
function getFiles() {
    const prefixPaths = path__WEBPACK_IMPORTED_MODULE_3___default().join(root, "_posts");
    const files = (0,_files_files__WEBPACK_IMPORTED_MODULE_5__/* .getAllFilesRecursively */ ._)(prefixPaths);
    // Only want to return blog/path and ignore root, replace is needed to work on Windows
    return files.map((file)=>file.slice(prefixPaths.length + 1).replace(/\\/g, "/"));
}
function formatSlug(slug) {
    return slug.replace(/\.(mdx|md)/, "");
}
function dateSortDesc(a, b) {
    if (a > b) {
        return -1;
    }
    if (a < b) {
        return 1;
    }
    return 0;
}
async function getFileBySlug(slug) {
    const mdxPath = path__WEBPACK_IMPORTED_MODULE_3___default().join(root, "_posts", `${slug}.mdx`);
    const mdPath = path__WEBPACK_IMPORTED_MODULE_3___default().join(root, "_posts", `${slug}.md`);
    const source = fs__WEBPACK_IMPORTED_MODULE_1___default().existsSync(mdxPath) ? fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(mdxPath, "utf8") : fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(mdPath, "utf8");
    // https://github.com/kentcdodds/mdx-bundler#nextjs-esbuild-enoent
    if (process.platform === "win32") {
        process.env.ESBUILD_BINARY_PATH = path__WEBPACK_IMPORTED_MODULE_3___default().join(root, "node_modules", "esbuild", "esbuild.exe");
    } else {
        process.env.ESBUILD_BINARY_PATH = path__WEBPACK_IMPORTED_MODULE_3___default().join(root, "node_modules", "esbuild", "bin", "esbuild");
    }
    const { code , frontmatter  } = await (0,mdx_bundler__WEBPACK_IMPORTED_MODULE_0__.bundleMDX)({
        source,
        // mdx imports can be automatically source from the components directory
        cwd: path__WEBPACK_IMPORTED_MODULE_3___default().join(root, "components"),
        mdxOptions (options) {
            // this is the recommended way to add custom remark/rehype plugins:
            // The syntax might look weird, but it protects you in case we add/remove
            // plugins in the future.
            options.remarkPlugins = [
                ...options.remarkPlugins ?? [],
                _remark_extract_frontmatter__WEBPACK_IMPORTED_MODULE_9__/* .extractFrontmatter */ .k,
                remark_gfm__WEBPACK_IMPORTED_MODULE_6__["default"],
                _remark_code_title__WEBPACK_IMPORTED_MODULE_10__/* .remarkCodeTitles */ .w,
                _remark_inline_code_language__WEBPACK_IMPORTED_MODULE_18__/* .remarkInlineCodeLanguage */ .x,
                [
                    remark_footnotes__WEBPACK_IMPORTED_MODULE_7__["default"],
                    {
                        inlineNotes: true
                    }
                ],
                remark_math__WEBPACK_IMPORTED_MODULE_8__["default"],
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                _remark_img_to_jsx__WEBPACK_IMPORTED_MODULE_11__/* .remarkImgToJsx */ .w, 
            ];
            options.rehypePlugins = [
                ...options.rehypePlugins ?? [],
                rehype_slug__WEBPACK_IMPORTED_MODULE_12__["default"],
                rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_13__["default"],
                rehype_katex__WEBPACK_IMPORTED_MODULE_14__["default"],
                [
                    rehype_citation__WEBPACK_IMPORTED_MODULE_15__["default"],
                    {
                        path: path__WEBPACK_IMPORTED_MODULE_3___default().join(root, "data")
                    }
                ],
                [
                    rehype_prism_plus__WEBPACK_IMPORTED_MODULE_16__["default"],
                    {
                        ignoreMissing: true
                    }
                ],
                rehype_preset_minify__WEBPACK_IMPORTED_MODULE_17__["default"],
                [
                    rehype_raw__WEBPACK_IMPORTED_MODULE_19__["default"],
                    {
                        passThrough: [
                            "mdxjsEsm",
                            "mdxFlowExpression",
                            "mdxTextExpression",
                            "mdxJsxFlowElement",
                            "mdxJsxTextElement", 
                        ]
                    }, 
                ], 
            ];
            return options;
        },
        esbuildOptions: (options)=>{
            options.loader = {
                ...options.loader,
                ".ts": "tsx"
            };
            return options;
        }
    });
    return {
        mdxSource: code,
        frontMatter: {
            readingTime: reading_time__WEBPACK_IMPORTED_MODULE_4___default()(code),
            slug,
            fileName: fs__WEBPACK_IMPORTED_MODULE_1___default().existsSync(mdxPath) ? `${slug}.mdx` : `${slug}.md`,
            ...frontmatter,
            date: new Date(frontmatter.date).toISOString()
        }
    };
}
async function getAllFilesFrontMatter() {
    const prefixPaths = path__WEBPACK_IMPORTED_MODULE_3___default().join(root, "_posts");
    const files = (0,_files_files__WEBPACK_IMPORTED_MODULE_5__/* .getAllFilesRecursively */ ._)(prefixPaths);
    const allFrontMatter = [];
    for (const file of files){
        // Replace is needed to work on Windows
        const fileName = file.slice(prefixPaths.length + 1).replace(/\\/g, "/");
        // Remove Unexpected File
        if (path__WEBPACK_IMPORTED_MODULE_3___default().extname(fileName) !== ".md" && path__WEBPACK_IMPORTED_MODULE_3___default().extname(fileName) !== ".mdx") {
            continue;
        }
        const source = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(file, "utf8");
        const { data: frontmatter  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(source);
        if (frontmatter.draft !== true) {
            allFrontMatter.push({
                slug: formatSlug(fileName),
                ...frontmatter,
                date: new Date(frontmatter.date).toISOString()
            });
        }
    }
    return allFrontMatter.sort((a, b)=>dateSortDesc(a.date, b.date));
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8368:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ remarkCodeTitles)
/* harmony export */ });
/* harmony import */ var unist_util_visit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6016);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([unist_util_visit__WEBPACK_IMPORTED_MODULE_0__]);
unist_util_visit__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function remarkCodeTitles() {
    return (tree)=>(0,unist_util_visit__WEBPACK_IMPORTED_MODULE_0__.visit)(tree, "code", (node, index, parent)=>{
            const nodeLang = node.lang || "";
            let language = "";
            let title = "";
            if (nodeLang.includes(":")) {
                language = nodeLang.slice(0, nodeLang.search(":"));
                title = nodeLang.slice(nodeLang.search(":") + 1, nodeLang.length);
            }
            if (!title) {
                return;
            }
            const className = "remark-code-title";
            const titleNode = {
                type: "mdxJsxFlowElement",
                name: "div",
                attributes: [
                    {
                        type: "mdxJsxAttribute",
                        name: "className",
                        value: className
                    }
                ],
                children: [
                    {
                        type: "text",
                        value: title
                    }
                ],
                data: {
                    _xdmExplicitJsx: true
                }
            };
            parent.children.splice(index, 0, titleNode);
            node.lang = language;
        });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3057:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ extractFrontmatter)
/* harmony export */ });
/* harmony import */ var unist_util_visit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6016);
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9773);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([unist_util_visit__WEBPACK_IMPORTED_MODULE_0__]);
unist_util_visit__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function extractFrontmatter() {
    return (tree, file)=>{
        (0,unist_util_visit__WEBPACK_IMPORTED_MODULE_0__.visit)(tree, "yaml", (node)=>{
            file.data.frontmatter = (0,js_yaml__WEBPACK_IMPORTED_MODULE_1__/* .load */ .zD)(node.value);
        });
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3427:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ remarkImgToJsx)
/* harmony export */ });
/* harmony import */ var unist_util_visit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6016);
/* harmony import */ var image_size__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7219);
/* harmony import */ var image_size__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(image_size__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([unist_util_visit__WEBPACK_IMPORTED_MODULE_0__]);
unist_util_visit__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function remarkImgToJsx() {
    return (tree)=>{
        (0,unist_util_visit__WEBPACK_IMPORTED_MODULE_0__.visit)(tree, // only visit p tags that contain an img element
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (node)=>node.type === "paragraph" && node.children.some((n)=>n.type === "image"), // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (node)=>{
            const imageNode = node.children.find((n)=>n.type === "image");
            // only local files
            if (fs__WEBPACK_IMPORTED_MODULE_2___default().existsSync(`${process.cwd()}/public${imageNode.url}`)) {
                const dimensions = image_size__WEBPACK_IMPORTED_MODULE_1___default()(`${process.cwd()}/public${imageNode.url}`);
                // Convert original node to next/image
                imageNode.type = "mdxJsxFlowElement", imageNode.name = "Image", imageNode.attributes = [
                    {
                        type: "mdxJsxAttribute",
                        name: "alt",
                        value: imageNode.alt
                    },
                    {
                        type: "mdxJsxAttribute",
                        name: "src",
                        value: imageNode.url
                    },
                    {
                        type: "mdxJsxAttribute",
                        name: "width",
                        value: dimensions.width
                    },
                    {
                        type: "mdxJsxAttribute",
                        name: "height",
                        value: dimensions.height
                    }, 
                ];
                // Change node type from p to div to avoid nesting error
                node.type = "div";
                node.children = [
                    imageNode
                ];
            }
        });
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6586:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ remarkInlineCodeLanguage)
/* harmony export */ });
/* harmony import */ var _cutting_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8639);
/* harmony import */ var unist_util_visit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6016);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([unist_util_visit__WEBPACK_IMPORTED_MODULE_0__]);
unist_util_visit__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function remarkInlineCodeLanguage() {
    return (tree)=>(0,unist_util_visit__WEBPACK_IMPORTED_MODULE_0__.visit)(tree, "inlineCode", (node)=>{
            const className = `language-typescript`;
            node.type = "html";
            node.value = `<code class="${className}">${(0,_cutting_util__WEBPACK_IMPORTED_MODULE_1__/* .escapeHtml */ .Xv)(node.value)}</code>`;
        });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;