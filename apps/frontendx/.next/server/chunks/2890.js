"use strict";
exports.id = 2890;
exports.ids = [2890];
exports.modules = {

/***/ 2890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "g": () => (/* binding */ Testimonial)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ../../packages/component-library/dist/esm/src.js
var src = __webpack_require__(3319);
// EXTERNAL MODULE: external "@vanilla-extract/css"
var css_ = __webpack_require__(7587);
;// CONCATENATED MODULE: ./components/Testimonial/Testimonial.css.ts


const root = (0,css_.style)({
    position: "relative",
    borderTop: "1px dotted #0098d8",
    borderBottom: "1px dotted #0098d8",
    color: src/* palette.black */.DG.black,
    fontStyle: "italic"
});
(0,css_.globalStyle)(`${root} blockquote`, {
    boxShadow: "0 0 6px rgb(0 0 0 / 50%)",
    background: src/* palette.white */.DG.white,
    borderLeft: "0.5rem solid #DDD",
    width: "100%",
    margin: `${src/* vars.space.small */.gR.space.small} 0 ${src/* vars.space.xxsmall */.gR.space.xxsmall} 0`,
    padding: `${src/* vars.space.xxsmall */.gR.space.xxsmall} ${src/* vars.space.xxsmall */.gR.space.xxsmall} ${src/* vars.space.xxsmall */.gR.space.xxsmall} ${src/* vars.space.small */.gR.space.small}`
});
(0,css_.globalStyle)(`${root} blockquote:before`, {
    display: "block",
    height: 0,
    content: '"“"',
    marginLeft: "-.95em",
    font: 'italic 400%/1 Cochin,Georgia,"Times New Roman", serif',
    color: src/* palette.white */.DG.white
});
(0,css_.globalStyle)(`${root} blockquote:after`, {
    display: "block",
    position: "absolute",
    right: src/* vars.space.xxsmall */.gR.space.xxsmall,
    bottom: src/* vars.space.large */.gR.space.large,
    height: 0,
    content: '"”"',
    font: 'italic 400%/1 Cochin,Georgia,"Times New Roman", serif',
    color: src/* palette.white */.DG.white
});
(0,css_.globalStyle)(`${root} a`, {
    color: src/* palette.blue500 */.DG.blue500
});
(0,css_.globalStyle)(`${root} p:first-child`, {
    padding: 0,
    margin: 0
});
(0,css_.globalStyle)(`${root} h2 a`, {
    color: src/* palette.blue500 */.DG.blue500,
    marginTop: 0
});

;// CONCATENATED MODULE: ./components/Testimonial/Testimonial.tsx



function Testimonial({ from , url , children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: root,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("figure", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("blockquote", {
                    children: children
                }),
                !!url && !!from && /*#__PURE__*/ jsx_runtime_.jsx("figcaption", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("cite", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(src/* TextLink */.hh, {
                            external: true,
                            href: url,
                            children: from
                        })
                    })
                })
            ]
        })
    });
}


/***/ })

};
;