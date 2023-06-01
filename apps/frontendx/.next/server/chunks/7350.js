"use strict";
exports.id = 7350;
exports.ids = [7350];
exports.modules = {

/***/ 7350:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Build": () => (/* binding */ Build),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Testimonial_Testimonial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2890);
/* harmony import */ var _components_FormComponents_FormComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4685);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5641);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5253);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var little_state_machine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6024);
/* harmony import */ var little_state_machine__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(little_state_machine__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _state_updateHealthcheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2646);
/* harmony import */ var _components_VideoPlayer_VideoPlayer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_FormComponents_FormComponents__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _components_VideoPlayer_VideoPlayer__WEBPACK_IMPORTED_MODULE_8__]);
([_components_FormComponents_FormComponents__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _components_VideoPlayer_VideoPlayer__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function Build({ nextPage , children  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const { register , handleSubmit , setValue , formState: { errors  } , getValues ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
        reValidateMode: "onBlur"
    });
    const { actions , state  } = (0,little_state_machine__WEBPACK_IMPORTED_MODULE_6__.useStateMachine)({
        updateHealthcheck: _state_updateHealthcheck__WEBPACK_IMPORTED_MODULE_7__/* .updateHealthcheck */ .T
    });
    const onSubmit = (formValues)=>{
        actions.updateHealthcheck(formValues);
        router.push("/productivity-test/[step]", nextPage);
    };
    const values = getValues();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Testimonial_Testimonial__WEBPACK_IMPORTED_MODULE_1__/* .Testimonial */ .g, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: "An effective workflow will make your good developers great and your great ones exceptional, while a bad workflow will compromise even your best engineer’s productivity."
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                children: [
                    "We believe everything starts with continuous integration. When a developer merges a feature branch back into the main branch, the building, versioning, and automated testing should occur without any manual intervention.",
                    " "
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "We believe in reproducible and predictable builds that are automated with the correct tooling."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: "Examples of what we look for are:"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmit(onSubmit),
                method: "POST",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FormComponents_FormComponents__WEBPACK_IMPORTED_MODULE_2__/* .YesNo */ .l, {
                        errors: errors,
                        ...register("release", {
                            required: true
                        }),
                        setValue: setValue,
                        value: values.release ?? state.healthcheck.release,
                        label: _types__WEBPACK_IMPORTED_MODULE_4__/* .Questions.release.text */ .G.release.text,
                        defaultValue: state.healthcheck.release,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_VideoPlayer_VideoPlayer__WEBPACK_IMPORTED_MODULE_8__/* .VideoPlayer */ .Y, {
                            file: _types__WEBPACK_IMPORTED_MODULE_4__/* .Questions.release.video */ .G.release.video
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FormComponents_FormComponents__WEBPACK_IMPORTED_MODULE_2__/* .YesNo */ .l, {
                        errors: errors,
                        ...register("performance", {
                            required: true
                        }),
                        setValue: setValue,
                        value: values.performance ?? state.healthcheck.performance,
                        label: _types__WEBPACK_IMPORTED_MODULE_4__/* .Questions.performance.text */ .G.performance.text,
                        defaultValue: state.healthcheck.performance,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_VideoPlayer_VideoPlayer__WEBPACK_IMPORTED_MODULE_8__/* .VideoPlayer */ .Y, {
                            file: _types__WEBPACK_IMPORTED_MODULE_4__/* .Questions.performance.video */ .G.performance.video
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FormComponents_FormComponents__WEBPACK_IMPORTED_MODULE_2__/* .YesNo */ .l, {
                        errors: errors,
                        ...register("gitHook", {
                            required: true
                        }),
                        setValue: setValue,
                        value: values.gitHook ?? state.healthcheck.gitHook,
                        label: _types__WEBPACK_IMPORTED_MODULE_4__/* .Questions.gitHook.text */ .G.gitHook.text,
                        defaultValue: state.healthcheck.gitHook,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_VideoPlayer_VideoPlayer__WEBPACK_IMPORTED_MODULE_8__/* .VideoPlayer */ .Y, {
                            file: _types__WEBPACK_IMPORTED_MODULE_4__/* .Questions.gitHook.video */ .G.gitHook.video
                        })
                    }),
                    children
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Build);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;