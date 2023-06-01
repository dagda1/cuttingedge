"use strict";
exports.id = 6020;
exports.ids = [6020];
exports.modules = {

/***/ 6020:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Testing": () => (/* binding */ Testing),
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









function Testing({ nextPage , children  }) {
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
                    children: "Software Testing Saves Money, if bugs are caught in the earlier stages it costs much less to fix them. That is why it’s important to get testing done as soon as possible."
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "We firmly believe in preemptively fixing problems before they happen. We believe in giving developers constant feedback to alert them that something might be wrong....before it happens! Having the right tests in the right place is the foundation of robust software."
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
                        ...register("atLeastOneEndToEnd", {
                            required: true
                        }),
                        setValue: setValue,
                        value: values.atLeastOneEndToEnd ?? state.healthcheck.atLeastOneEndToEnd,
                        label: _types__WEBPACK_IMPORTED_MODULE_4__/* .Questions.atLeastOneEndToEnd.text */ .G.atLeastOneEndToEnd.text,
                        defaultValue: state.healthcheck.atLeastOneEndToEnd,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_VideoPlayer_VideoPlayer__WEBPACK_IMPORTED_MODULE_8__/* .VideoPlayer */ .Y, {
                            file: _types__WEBPACK_IMPORTED_MODULE_4__/* .Questions.atLeastOneEndToEnd.video */ .G.atLeastOneEndToEnd.video
                        })
                    }),
                    children
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testing);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;