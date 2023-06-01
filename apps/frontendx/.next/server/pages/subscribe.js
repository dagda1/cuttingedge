"use strict";
(() => {
var exports = {};
exports.id = 367;
exports.ids = [367];
exports.modules = {

/***/ 3208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nC": () => (/* binding */ container),
/* harmony export */   "qP": () => (/* binding */ buttonContainer)
/* harmony export */ });
/* unused harmony export root */
/* harmony import */ var _cutting_component_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3319);
/* harmony import */ var _vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7587);
/* harmony import */ var _vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__);


const root = (0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.style)({
    display: "flex",
    flexDirection: "column",
    ...(0,_cutting_component_library__WEBPACK_IMPORTED_MODULE_1__/* .responsiveStyle */ .gh)({
        mobile: {},
        tablet: {
            alignItems: "center"
        }
    })
});
(0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.globalStyle)(`${root} h1`, {
    marginBottom: "0"
});
(0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.globalStyle)(`${root} fieldset`, {
    border: "none"
});
const container = (0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.style)({
    display: "flex",
    flexDirection: "column",
    ...(0,_cutting_component_library__WEBPACK_IMPORTED_MODULE_1__/* .responsiveStyle */ .gh)({
        mobile: {
            width: "100%"
        },
        tablet: {
            width: "50vw"
        },
        desktop: {
            width: "35vw"
        }
    })
});
const buttonContainer = (0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.style)({
    ...(0,_cutting_component_library__WEBPACK_IMPORTED_MODULE_1__/* .responsiveStyle */ .gh)({
        mobile: {
            textAlign: "left"
        },
        tablet: {
            textAlign: "center"
        }
    })
});
(0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.globalStyle)(`${buttonContainer} button`, {
    ...(0,_cutting_component_library__WEBPACK_IMPORTED_MODULE_1__/* .responsiveStyle */ .gh)({
        mobile: {
            width: "100%"
        },
        tablet: {
            width: "50%"
        }
    })
});


/***/ }),

/***/ 2810:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ SignupForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SignupForm_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3208);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5641);
/* harmony import */ var _FormComponents_FormComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4685);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assert_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1912);
/* harmony import */ var assert_ts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assert_ts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9083);
/* harmony import */ var _cutting_component_library__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3319);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _FormComponents_FormComponents__WEBPACK_IMPORTED_MODULE_3__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _FormComponents_FormComponents__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function SignupForm() {
    const form = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
    const botChecker = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
    const { register , handleSubmit  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
        reValidateMode: "onBlur"
    });
    const onSubmit = ()=>{
        (0,assert_ts__WEBPACK_IMPORTED_MODULE_5__.assert)(!!form?.current, `no active form in submitHandler`);
        (0,assert_ts__WEBPACK_IMPORTED_MODULE_5__.assert)(!!botChecker.current, `no botChecker`);
        (0,assert_ts__WEBPACK_IMPORTED_MODULE_5__.assert)(botChecker.current.value === "", `someone has set the bot!!!!`);
        form.current.action = _constants__WEBPACK_IMPORTED_MODULE_6__/* .NEWSLETTER */ .Sg;
        form.current.submit();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: _SignupForm_css__WEBPACK_IMPORTED_MODULE_1__/* .container */ .nC,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            onSubmit: handleSubmit(onSubmit),
            method: "POST",
            ref: form,
            name: "SignupForm",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("fieldset", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormComponents_FormComponents__WEBPACK_IMPORTED_MODULE_3__/* .Input */ .II, {
                            maxLength: 250,
                            ...register("FIRSTNAME", {
                                required: true,
                                minLength: 3,
                                maxLength: 80
                            }),
                            label: "First Name",
                            required: true
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormComponents_FormComponents__WEBPACK_IMPORTED_MODULE_3__/* .Input */ .II, {
                            maxLength: 250,
                            ...register("CONTACT_EMAIL", {
                                required: true,
                                minLength: 3,
                                maxLength: 100
                            }),
                            label: "Email",
                            type: "email",
                            required: true
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: _SignupForm_css__WEBPACK_IMPORTED_MODULE_1__/* .buttonContainer */ .qP,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_cutting_component_library__WEBPACK_IMPORTED_MODULE_7__/* .Button */ .zx, {
                                type: "submit",
                                children: "Send"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    ref: botChecker,
                    type: "hidden",
                    id: "zc_gad",
                    value: ""
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "hidden",
                    id: "submitType",
                    name: "submitType",
                    value: "optinCustomView"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "hidden",
                    id: "emailReportId",
                    name: "emailReportId",
                    value: ""
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "hidden",
                    id: "formType",
                    name: "formType",
                    value: "QuickForm"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "hidden",
                    name: "zx",
                    id: "cmpZuid",
                    value: "14accd9c53"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "hidden",
                    name: "oldListIds",
                    id: "allCheckedListIds",
                    value: ""
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "hidden",
                    id: "mode",
                    name: "mode",
                    value: "OptinCreateView"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "hidden",
                    id: "zcld",
                    name: "zcld",
                    value: "1137292f1802e29b"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "hidden",
                    id: "zctd",
                    name: "zctd",
                    value: "1137292f180357cf"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "hidden",
                    name: "zc_trackCode",
                    id: "zc_trackCode",
                    value: "ZCFORMVIEW"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "hidden",
                    id: "scriptless",
                    name: "scriptless",
                    value: "yes"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "hidden",
                    id: "zc_formIx",
                    name: "zc_formIx",
                    value: "3ze5729e86886ecde4d99379728dd24ebe54cdf8d5bda2b2dd78eae44df5bf16fe"
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bn": () => (/* binding */ benefits),
/* harmony export */   "cr": () => (/* binding */ form),
/* harmony export */   "nC": () => (/* binding */ container)
/* harmony export */ });
/* harmony import */ var _cutting_component_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3319);
/* harmony import */ var _vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7587);
/* harmony import */ var _vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__);


const container = (0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.style)({});
(0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.globalStyle)(`${container} section`, {
    paddingTop: 0
});
(0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.globalStyle)(`${container} h1`, {
    textAlign: "center"
});
(0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.globalStyle)(`${container} p`, {
    textAlign: "center"
});
const benefits = (0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.style)([
    (0,_cutting_component_library__WEBPACK_IMPORTED_MODULE_1__/* .atoms */ .HZ)({
        display: {
            mobile: "block",
            tablet: "flex"
        }
    }), 
]);
(0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.globalStyle)(`${benefits} > div`, {
    flex: 1,
    padding: "0 1rem 1rem"
});
const form = (0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.style)({
    display: "flex",
    justifyContent: "center"
});
(0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.globalStyle)(`${form} fieldset`, {
    paddingLeft: _cutting_component_library__WEBPACK_IMPORTED_MODULE_1__/* .vars.space.small */ .gR.space.small,
    marginTop: _cutting_component_library__WEBPACK_IMPORTED_MODULE_1__/* .vars.space.small */ .gR.space.small,
    marginBottom: _cutting_component_library__WEBPACK_IMPORTED_MODULE_1__/* .vars.space.small */ .gR.space.small
});


/***/ }),

/***/ 1833:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ Subscribe)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SignupForm_SignupForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2810);
/* harmony import */ var _Subscribe_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1514);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Layouts_FullPageLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9281);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SignupForm_SignupForm__WEBPACK_IMPORTED_MODULE_1__]);
_SignupForm_SignupForm__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function Subscribe() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layouts_FullPageLayout__WEBPACK_IMPORTED_MODULE_4__/* .FullPageLayout */ .u, {
        heading: "Receive weekly emails that will revolutionise how you deliver frontend features",
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_Subscribe_css__WEBPACK_IMPORTED_MODULE_2__/* .container */ .nC),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: _Subscribe_css__WEBPACK_IMPORTED_MODULE_2__/* .benefits */ .bn,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: "Supercharge your development environment"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: "Learn the techniques that industry experts use to take the pain out of delivering frontend features."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: "Learn how problems are fixed"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: "We are always looking for new ways to flex our DX muscles, and we will fix and showcase any user-submitted question that covers new ground. We also monitor user forums and will fix any challenges that we deem worthy."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: "Stay current"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: "Let us keep abreast of all the latest frontend development tooling so you don't have to."
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: _Subscribe_css__WEBPACK_IMPORTED_MODULE_2__/* .form */ .cr,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SignupForm_SignupForm__WEBPACK_IMPORTED_MODULE_1__/* .SignupForm */ .C, {})
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 444:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Subscribe)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Subscribe_Subscribe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1833);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Subscribe_Subscribe__WEBPACK_IMPORTED_MODULE_1__]);
_components_Subscribe_Subscribe__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function Subscribe() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Subscribe_Subscribe__WEBPACK_IMPORTED_MODULE_1__/* .Subscribe */ .x, {});
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

/***/ 3623:
/***/ ((module) => {

module.exports = require("hamburger-react");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 776:
/***/ ((module) => {

module.exports = require("react-calendly");

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

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7459,8639,3319,4878,9281,7771], () => (__webpack_exec__(444)));
module.exports = __webpack_exports__;

})();