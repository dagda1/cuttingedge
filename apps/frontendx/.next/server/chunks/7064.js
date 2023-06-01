"use strict";
exports.id = 7064;
exports.ids = [7064];
exports.modules = {

/***/ 7064:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Report": () => (/* binding */ Report),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Report_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7534);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5253);
/* harmony import */ var little_state_machine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6024);
/* harmony import */ var little_state_machine__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(little_state_machine__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _state_updateHealthcheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2646);
/* harmony import */ var _cutting_component_library__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3319);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_VideoSlideDown_VideoSlideDown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3479);
/* harmony import */ var _components_VideoPlayer_VideoPlayer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_VideoSlideDown_VideoSlideDown__WEBPACK_IMPORTED_MODULE_6__, _components_VideoPlayer_VideoPlayer__WEBPACK_IMPORTED_MODULE_7__]);
([_components_VideoSlideDown_VideoSlideDown__WEBPACK_IMPORTED_MODULE_6__, _components_VideoPlayer_VideoPlayer__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function Question({ question  }) {
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: _styles_Report_css__WEBPACK_IMPORTED_MODULE_1__/* .noAnswer */ .U9,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                children: _types__WEBPACK_IMPORTED_MODULE_2__/* .Questions */ .G[question].text
            }),
            !open && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_cutting_component_library__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .zx, {
                buttonStyle: "secondary",
                onClick: ()=>setOpen(true),
                children: "SHOW ADVICE"
            }),
            open && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_cutting_component_library__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .zx, {
                        buttonStyle: "warning",
                        onClick: ()=>setOpen(false),
                        children: "CLOSE"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_VideoSlideDown_VideoSlideDown__WEBPACK_IMPORTED_MODULE_6__/* .VideoSlideDown */ .y, {
                        open: open,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_VideoPlayer_VideoPlayer__WEBPACK_IMPORTED_MODULE_7__/* .VideoPlayer */ .Y, {
                            file: _types__WEBPACK_IMPORTED_MODULE_2__/* .Questions */ .G[question].video
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_cutting_component_library__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .zx, {
                        buttonStyle: "warning",
                        onClick: ()=>setOpen(false),
                        children: "CLOSE"
                    })
                ]
            })
        ]
    });
}
function Report() {
    const { state  } = (0,little_state_machine__WEBPACK_IMPORTED_MODULE_3__.useStateMachine)({
        updateHealthcheck: _state_updateHealthcheck__WEBPACK_IMPORTED_MODULE_4__/* .updateHealthcheck */ .T
    });
    const numberOfQuestions = Object.keys(state.healthcheck).length;
    const yesAnswers = Object.entries(state.healthcheck).flatMap(([k, v])=>v === "yes" ? [
            k
        ] : []);
    const score = Math.ceil(yesAnswers.length / numberOfQuestions * 100);
    const noAnswers = Object.entries(state.healthcheck).flatMap(([k, v])=>v === "no" ? [
            k
        ] : []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: _styles_Report_css__WEBPACK_IMPORTED_MODULE_1__/* .root */ .Jz,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: _styles_Report_css__WEBPACK_IMPORTED_MODULE_1__/* .donut */ .cS,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            children: "You scored"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_cutting_component_library__WEBPACK_IMPORTED_MODULE_8__/* .Donut */ .yi, {
                        score: score
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "Arrange a no obligation call or email us to find out more."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_VideoSlideDown_VideoSlideDown__WEBPACK_IMPORTED_MODULE_6__/* .VideoSlideDown */ .y, {
                        open: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
            noAnswers.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: _styles_Report_css__WEBPACK_IMPORTED_MODULE_1__/* .wrongAnswers */ .Zz,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "You answered no to the following questions:"
                    }),
                    noAnswers.map((question)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Question, {
                            question: question
                        }, question))
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
            yesAnswers.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: _styles_Report_css__WEBPACK_IMPORTED_MODULE_1__/* .wrongAnswers */ .Zz,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "You answered yes to the following questions:"
                    }),
                    yesAnswers.map((question)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Question, {
                            question: question
                        }, question))
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Report);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jz": () => (/* binding */ root),
/* harmony export */   "U9": () => (/* binding */ noAnswer),
/* harmony export */   "Zz": () => (/* binding */ wrongAnswers),
/* harmony export */   "cS": () => (/* binding */ donut)
/* harmony export */ });
/* unused harmony export callButton */
/* harmony import */ var _cutting_component_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3319);
/* harmony import */ var _vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7587);
/* harmony import */ var _vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__);


const root = (0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.style)({
    flex: 1
});
const donut = (0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.style)({
    display: "flex",
    alignItems: "center"
});
(0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.globalStyle)(`${donut} > div`, {
    marginLeft: _cutting_component_library__WEBPACK_IMPORTED_MODULE_1__/* .vars.space.small */ .gR.space.small,
    marginRight: _cutting_component_library__WEBPACK_IMPORTED_MODULE_1__/* .vars.space.small */ .gR.space.small
});
const wrongAnswers = (0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.style)({
    display: "flex",
    flexDirection: "column"
});
const noAnswer = (0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.style)({});
(0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.globalStyle)(`${noAnswer} button`, {
    ...(0,_cutting_component_library__WEBPACK_IMPORTED_MODULE_1__/* .responsiveStyle */ .gh)({
        mobile: {
            width: "100%"
        },
        tablet: {
            width: "50%"
        },
        desktop: {
            width: "33%"
        }
    })
});
const callButton = (0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.style)({
    marginTop: _cutting_component_library__WEBPACK_IMPORTED_MODULE_1__/* .vars.space.small */ .gR.space.small,
    ...(0,_cutting_component_library__WEBPACK_IMPORTED_MODULE_1__/* .responsiveStyle */ .gh)({
        mobile: {
            width: "100%"
        },
        tablet: {
            width: "50%"
        },
        desktop: {
            width: "33%"
        }
    })
});
(0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.globalStyle)(`${noAnswer} ${callButton} button`, {
    width: "100%"
});


/***/ })

};
;