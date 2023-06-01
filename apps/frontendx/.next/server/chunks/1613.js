"use strict";
exports.id = 1613;
exports.ids = [1613];
exports.modules = {

/***/ 1613:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Development": () => (/* binding */ Development),
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
/* harmony import */ var _cutting_component_library__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3319);
/* harmony import */ var _components_VideoPlayer_VideoPlayer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_FormComponents_FormComponents__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _components_VideoPlayer_VideoPlayer__WEBPACK_IMPORTED_MODULE_8__]);
([_components_FormComponents_FormComponents__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _components_VideoPlayer_VideoPlayer__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function Development({ nextPage , children  }) {
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
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Testimonial_Testimonial__WEBPACK_IMPORTED_MODULE_1__/* .Testimonial */ .g, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "By working on developer experience, you work on increasing your team's morale, productivity, speed, and engagement."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Our definition of developer experience is to remove all the external tasks that stop developers working on features."
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                children: [
                    "One survey found that developers only",
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_cutting_component_library__WEBPACK_IMPORTED_MODULE_9__/* .TextLink */ .hh, {
                        external: true,
                        href: "https://services.google.com/fh/files/misc/state-of-devops-2018.pdf",
                        children: "spent 30-40%"
                    }),
                    " ",
                    "of their time on feature development."
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "Improving the overall developer experience is essential to increasing your team's productivity and morale."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "Once developers are free from hidden friction, they are free to work 100% on features."
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
                        ...register("feedback", {
                            required: true
                        }),
                        setValue: setValue,
                        value: values.feedback ?? state.healthcheck.feedback,
                        label: _types__WEBPACK_IMPORTED_MODULE_4__/* .Questions.feedback.text */ .G.feedback.text,
                        defaultValue: state.healthcheck.feedback,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_VideoPlayer_VideoPlayer__WEBPACK_IMPORTED_MODULE_8__/* .VideoPlayer */ .Y, {
                            file: _types__WEBPACK_IMPORTED_MODULE_4__/* .Questions.feedback.video */ .G.feedback.video
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FormComponents_FormComponents__WEBPACK_IMPORTED_MODULE_2__/* .YesNo */ .l, {
                        errors: errors,
                        ...register("componentLibrary", {
                            required: true
                        }),
                        setValue: setValue,
                        value: values.componentLibrary ?? state.healthcheck.componentLibrary,
                        label: _types__WEBPACK_IMPORTED_MODULE_4__/* .Questions.componentLibrary.text */ .G.componentLibrary.text,
                        defaultValue: state.healthcheck.componentLibrary,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_VideoPlayer_VideoPlayer__WEBPACK_IMPORTED_MODULE_8__/* .VideoPlayer */ .Y, {
                            file: _types__WEBPACK_IMPORTED_MODULE_4__/* .Questions.componentLibrary.video */ .G.componentLibrary.video
                        })
                    }),
                    children
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Development);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;