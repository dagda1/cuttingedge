"use strict";
exports.id = 983;
exports.ids = [983];
exports.modules = {

/***/ 983:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bugs": () => (/* binding */ Bugs),
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









function Bugs({ nextPage , children  }) {
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
                        children: "Some estimates claim developers can spend as much as 75% of their time fixing bugs."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Our mission is to fix bugs before they happen."
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "The hidden cost of dealing with bugs is enormous. Whole days are lost as people from many different teams are sucked into the reporting, tracking, recreating and resolution process."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "Being able to spin up a development environment with the exact same versions of the code that caused the bug will save a lot of time and money."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "Being able to mock out large parts of the code like authentication and 3rd party APIs are just two things we use to slash the time it takes to fix a bug."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: "Examples of what we look for are:"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmit(onSubmit),
                method: "POST",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FormComponents_FormComponents__WEBPACK_IMPORTED_MODULE_2__/* .YesNo */ .l, {
                        ...register("bugEnvironment", {
                            required: true
                        }),
                        setValue: setValue,
                        label: _types__WEBPACK_IMPORTED_MODULE_4__/* .Questions.bugEnvironment.text */ .G.bugEnvironment.text,
                        errors: errors,
                        value: values.bugEnvironment ?? state.healthcheck.bugEnvironment,
                        defaultValue: state.healthcheck.bugEnvironment,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_VideoPlayer_VideoPlayer__WEBPACK_IMPORTED_MODULE_8__/* .VideoPlayer */ .Y, {
                            file: _types__WEBPACK_IMPORTED_MODULE_4__/* .Questions.bugEnvironment.video */ .G.bugEnvironment.video
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FormComponents_FormComponents__WEBPACK_IMPORTED_MODULE_2__/* .YesNo */ .l, {
                        ...register("mocking", {
                            required: true
                        }),
                        setValue: setValue,
                        label: _types__WEBPACK_IMPORTED_MODULE_4__/* .Questions.mocking.text */ .G.mocking.text,
                        errors: errors,
                        value: values.mocking ?? state.healthcheck.mocking,
                        defaultValue: state.healthcheck.mocking,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_VideoPlayer_VideoPlayer__WEBPACK_IMPORTED_MODULE_8__/* .VideoPlayer */ .Y, {
                            file: _types__WEBPACK_IMPORTED_MODULE_4__/* .Questions.mocking.video */ .G.mocking.video
                        })
                    }),
                    children
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bugs);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;