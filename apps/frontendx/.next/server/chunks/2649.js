"use strict";
exports.id = 2649;
exports.ids = [2649];
exports.modules = {

/***/ 4197:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ VideoPlayer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var plyr_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2065);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9083);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([plyr_react__WEBPACK_IMPORTED_MODULE_1__]);
plyr_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function VideoPlayer({ file  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(plyr_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
        source: {
            type: "video",
            sources: [
                {
                    src: `${_constants__WEBPACK_IMPORTED_MODULE_2__/* .CDN */ .G3}/videos/${file}`
                }
            ]
        }
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ updateHealthcheck)
/* harmony export */ });
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6330);
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_0__);

function updateHealthcheck(state, payload) {
    return deepmerge__WEBPACK_IMPORTED_MODULE_0___default()(state, {
        healthcheck: {
            ...payload
        }
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (updateHealthcheck)));


/***/ }),

/***/ 5253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ Questions)
/* harmony export */ });
const Questions = {
    ticketTemplate: {
        text: "Do you have a new ticket template that ensures EVERY NEW work item is clearly defined in the same terms?",
        video: "template.mp4"
    },
    wireframe: {
        text: "Do you use a good wireframing tool that requires NO DEVELOPER assistance to mock up a new UI?",
        video: "wireframe.mp4"
    },
    bugEnvironment: {
        text: `Is it easy to spin up a LOCAL development environment ON THE DEV's machine with the exact version of the code that has the bug?`,
        video: "environment.mp4"
    },
    mocking: {
        text: "Can you easily mock the parts of your application that you do not control like authentication or APIs?",
        video: "mocking.mp4"
    },
    release: {
        text: "Do you have a release formula with no manual steps?",
        video: "releasing.mp4"
    },
    performance: {
        text: "Do you record performance metrics and does your CI build fail if performance falls below an agreed threshold?",
        video: "performance.mp4"
    },
    gitHook: {
        text: "Do you have automatic checks that run before a developer pushes any code to the source control repository?",
        video: "git_hook.mp4"
    },
    atLeastOneEndToEnd: {
        text: "Do you have at least one end to end test that tests the most critical functionality on each deploy?",
        video: "e2e.mp4"
    },
    componentLibrary: {
        text: "Can your team easily create responsive web pages that look great on mobile, tablet and desktop devices with minimal styling?",
        video: "ui-elements2.mp4"
    },
    feedback: {
        text: "Do your developers get constant feedback from their environment to alert them early of errors?",
        video: "eslint2.mp4"
    }
};


/***/ })

};
;