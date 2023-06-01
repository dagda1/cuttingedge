"use strict";
exports.id = 7771;
exports.ids = [7771];
exports.modules = {

/***/ 7557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ CallPopupButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_calendly__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(776);
/* harmony import */ var react_calendly__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_calendly__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cutting_component_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3319);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




const CallPopupButton = ({ callType , children ="BOOK A CALL"  })=>{
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const rootElement = global?.document?.getElementById("__next");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_calendly__WEBPACK_IMPORTED_MODULE_1__.PopupModal, {
                url: `https://calendly.com/dagda1/${callType}`,
                open: open,
                onModalClose: ()=>setOpen(false),
                rootElement: rootElement,
                pageSettings: {
                    backgroundColor: "ffffff",
                    hideEventTypeDetails: false,
                    hideGdprBanner: false,
                    hideLandingPageDetails: true,
                    primaryColor: "00a2ff",
                    textColor: "4d5055"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_cutting_component_library__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .zx, {
                buttonStyle: "primary",
                onClick: ()=>setOpen(true),
                children: children
            })
        ]
    });
};


/***/ }),

/***/ 8350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fs": () => (/* binding */ header),
/* harmony export */   "Jz": () => (/* binding */ root),
/* harmony export */   "nC": () => (/* binding */ container),
/* harmony export */   "qP": () => (/* binding */ buttonContainer)
/* harmony export */ });
/* unused harmony export hidden */
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
            width: "75vw"
        },
        desktop: {
            width: "50vw"
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
const header = (0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.style)({
    ...(0,_cutting_component_library__WEBPACK_IMPORTED_MODULE_1__/* .responsiveStyle */ .gh)({
        mobile: {
            textAlign: "left"
        },
        tablet: {
            textAlign: "center"
        }
    }),
    position: "relative"
});
const hidden = (0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.style)({
    display: "none"
});


/***/ }),

/***/ 5850:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ ContactForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ContactForm_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8350);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5641);
/* harmony import */ var _cutting_component_library__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3319);
/* harmony import */ var _FormComponents_FormComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4685);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assert_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1912);
/* harmony import */ var assert_ts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assert_ts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9083);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _FormComponents_FormComponents__WEBPACK_IMPORTED_MODULE_3__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _FormComponents_FormComponents__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function ContactForm({ buttonStyle ="secondary"  }) {
    const form = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
    const botChecker = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
    const { register , handleSubmit  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
        reValidateMode: "onBlur"
    });
    const onSubmit = ()=>{
        (0,assert_ts__WEBPACK_IMPORTED_MODULE_5__.assert)(!!form?.current, `no active form in submitHandler`);
        (0,assert_ts__WEBPACK_IMPORTED_MODULE_5__.assert)(!!botChecker.current, `no botChecker`);
        (0,assert_ts__WEBPACK_IMPORTED_MODULE_5__.assert)(botChecker.current.value === "", `someone has set the bot!!!!`);
        form.current.action = _constants__WEBPACK_IMPORTED_MODULE_6__/* .CRM */ .zJ;
        form.current.submit();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: _ContactForm_css__WEBPACK_IMPORTED_MODULE_1__/* .container */ .nC,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            onSubmit: handleSubmit(onSubmit),
            name: "WebToLeads397786000000274681",
            method: "POST",
            ref: form,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("fieldset", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormComponents_FormComponents__WEBPACK_IMPORTED_MODULE_3__/* .Input */ .II, {
                            maxLength: 250,
                            ...register("Last Name", {
                                required: true,
                                minLength: 3,
                                maxLength: 250
                            }),
                            label: "What's your name",
                            required: true
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormComponents_FormComponents__WEBPACK_IMPORTED_MODULE_3__/* .Input */ .II, {
                            maxLength: 250,
                            ...register("Email", {
                                required: true,
                                minLength: 3,
                                maxLength: 250
                            }),
                            label: "What's your email",
                            type: "email",
                            required: true
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormComponents_FormComponents__WEBPACK_IMPORTED_MODULE_3__/* .Input */ .II, {
                            maxLength: 250,
                            ...register("Company", {
                                required: false,
                                minLength: 3,
                                maxLength: 250
                            }),
                            label: "Which Company"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormComponents_FormComponents__WEBPACK_IMPORTED_MODULE_3__/* .TextArea */ .Kx, {
                            maxLength: 250,
                            ...register("Description", {
                                required: true,
                                minLength: 3,
                                maxLength: 250
                            }),
                            label: "How can we help you",
                            rows: 3,
                            required: true
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: _ContactForm_css__WEBPACK_IMPORTED_MODULE_1__/* .buttonContainer */ .qP,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_cutting_component_library__WEBPACK_IMPORTED_MODULE_7__/* .Button */ .zx, {
                                type: "submit",
                                buttonStyle: buttonStyle,
                                children: "Send"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "text",
                    style: {
                        display: "none"
                    },
                    name: "xnQsjsdp",
                    defaultValue: "3c84483c277d4654a1b4c396d146b27715022726817867cc0082152855bd1c7f"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    ref: botChecker,
                    type: "hidden",
                    name: "zc_gad",
                    id: "zc_gad",
                    value: ""
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "text",
                    style: {
                        display: "none"
                    },
                    name: "xmIwtLD",
                    defaultValue: "9844a94925d654edab46a3a8cdca457ecc6f6e5c04366bcb4f13d54f1180f14f"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "text",
                    style: {
                        display: "none"
                    },
                    name: "actionType",
                    defaultValue: "TGVhZHM="
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "text",
                    style: {
                        display: "none"
                    },
                    name: "returnURL",
                    defaultValue: "https://www.frontenddx.com"
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4685:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "II": () => (/* binding */ Input),
/* harmony export */   "Kx": () => (/* binding */ TextArea),
/* harmony export */   "l": () => (/* binding */ YesNo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cutting_component_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3319);
/* harmony import */ var _YesNoRadioGroup_YesNoRadioGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5662);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_YesNoRadioGroup_YesNoRadioGroup__WEBPACK_IMPORTED_MODULE_2__]);
_YesNoRadioGroup_YesNoRadioGroup__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function createFormComponent(Component) {
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function ReactHookFormComponent({ onChange , onBlur , name , label , className , ...props }, ref) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            innerRef: ref,
            className: className,
            label: label,
            name: name,
            onChange: onChange,
            onBlur: onBlur,
            ...props
        });
    });
}
const Input = createFormComponent(_cutting_component_library__WEBPACK_IMPORTED_MODULE_3__/* .FormInput */ .yt);
const TextArea = createFormComponent(_cutting_component_library__WEBPACK_IMPORTED_MODULE_3__/* .FormTextArea */ .ld);
const YesNo = createFormComponent(_YesNoRadioGroup_YesNoRadioGroup__WEBPACK_IMPORTED_MODULE_2__/* .YesNoRadioGroup */ .q);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7277:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fs": () => (/* binding */ header),
/* harmony export */   "kQ": () => (/* binding */ content),
/* harmony export */   "oC": () => (/* binding */ modal),
/* harmony export */   "xv": () => (/* binding */ close),
/* harmony export */   "zE": () => (/* binding */ callButton)
/* harmony export */ });
/* harmony import */ var _cutting_component_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3319);
/* harmony import */ var _vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7587);
/* harmony import */ var _vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__);


const callButton = (0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.style)({
    width: "100%",
    ...(0,_cutting_component_library__WEBPACK_IMPORTED_MODULE_1__/* .responsiveStyle */ .gh)({
        mobile: {
            display: "block"
        },
        tablet: {
            display: "inline-flex"
        }
    })
});
(0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.globalStyle)(`${callButton} button:first-child`, {
    marginRight: _cutting_component_library__WEBPACK_IMPORTED_MODULE_1__/* .vars.space.small */ .gR.space.small
});
const modal = (0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.style)({});
(0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.globalStyle)(`${modal} fieldset`, {
    border: "none"
});
const close = (0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.style)({
    cursor: "pointer",
    position: "absolute",
    display: "block",
    padding: "2px 5px",
    lineHeight: "20px",
    right: "-10px",
    top: "-10px",
    borderRadius: "18px"
});
const header = (0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.style)({
    width: "100%",
    textAlign: "center",
    padding: "5px"
});
const content = (0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.style)({
    width: "100%",
    padding: "10px 5px"
});


/***/ }),

/***/ 2805:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ ContactButtons)
/* harmony export */ });
/* unused harmony export ButtonWrapper */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cutting_component_library__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3319);
/* harmony import */ var reactjs_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3041);
/* harmony import */ var reactjs_popup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactjs_popup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Call_CallPopupButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7557);
/* harmony import */ var _ContactForm_ContactForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5850);
/* harmony import */ var _ContactButtons_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7277);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ContactForm_ContactForm__WEBPACK_IMPORTED_MODULE_3__]);
_ContactForm_ContactForm__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







// eslint-disable-next-line react/display-name
const ButtonWrapper = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_5__.forwardRef)((props, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_cutting_component_library__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .zx, {
        ref: ref,
        ...props
    }));
// eslint-disable-next-line react/display-name
const closer = (buttonStyle)=>(close)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_cutting_component_library__WEBPACK_IMPORTED_MODULE_6__/* .ApplicationLayout */ .gb, {
            theme: "salesTheme",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: _ContactButtons_css__WEBPACK_IMPORTED_MODULE_4__/* .modal */ .oC,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: _ContactButtons_css__WEBPACK_IMPORTED_MODULE_4__/* .close */ .xv,
                        onClick: close,
                        children: "\xd7"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: _ContactButtons_css__WEBPACK_IMPORTED_MODULE_4__/* .header */ .Fs,
                        children: "CONTACT FORM"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: _ContactButtons_css__WEBPACK_IMPORTED_MODULE_4__/* .content */ .kQ,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ContactForm_ContactForm__WEBPACK_IMPORTED_MODULE_3__/* .ContactForm */ .t, {
                            buttonStyle: buttonStyle
                        })
                    })
                ]
            })
        });
function ContactButtons({ callType , buttonStyle ="secondary"  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: _ContactButtons_css__WEBPACK_IMPORTED_MODULE_4__/* .callButton */ .zE,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Call_CallPopupButton__WEBPACK_IMPORTED_MODULE_2__/* .CallPopupButton */ .w, {
                callType: callType
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((reactjs_popup__WEBPACK_IMPORTED_MODULE_1___default()), {
                trigger: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonWrapper, {
                    type: "button",
                    buttonStyle: "secondary",
                    children: "CONTACT BY EMAIL"
                }),
                modal: true,
                nested: true,
                children: closer(buttonStyle)
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3479:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ VideoSlideDown)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slidedown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(172);
/* harmony import */ var react_slidedown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slidedown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Intro_ContactButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2805);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Intro_ContactButtons__WEBPACK_IMPORTED_MODULE_2__]);
_Intro_ContactButtons__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function VideoSlideDown({ children , open  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_slidedown__WEBPACK_IMPORTED_MODULE_1__.SlideDown, {
        children: open && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                children ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: children
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    children: "CONTENT COMING SOON"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Intro_ContactButtons__WEBPACK_IMPORTED_MODULE_2__/* .ContactButtons */ .a, {
                    callType: "chat"
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ root)
/* harmony export */ });
/* harmony import */ var _cutting_component_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3319);
/* harmony import */ var _vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7587);
/* harmony import */ var _vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__);


const root = (0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.style)({
    marginTop: _cutting_component_library__WEBPACK_IMPORTED_MODULE_1__/* .vars.space.medium */ .gR.space.medium
});
(0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.globalStyle)(`${root} fieldset`, {
    marginTop: _cutting_component_library__WEBPACK_IMPORTED_MODULE_1__/* .vars.space.medium */ .gR.space.medium
});
(0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.globalStyle)(".popup-overlay .popup-content", {
    zIndex: 99999,
    ...(0,_cutting_component_library__WEBPACK_IMPORTED_MODULE_1__/* .responsiveStyle */ .gh)({
        mobile: {
            width: "90%"
        },
        tablet: {
            width: "auto"
        }
    })
});


/***/ }),

/***/ 5662:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ YesNoRadioGroup)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cutting_component_library__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3319);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _YesNoRadioGroup_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5961);
/* harmony import */ var _VideoSlideDown_VideoSlideDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3479);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_VideoSlideDown_VideoSlideDown__WEBPACK_IMPORTED_MODULE_3__]);
_VideoSlideDown_VideoSlideDown__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function YesNoRadioGroup({ name , // eslint-disable-next-line @typescript-eslint/no-unused-vars
onChange , setValue , errors ={} , errorMessage ="Required" , value , defaultValue , onBlur , children , label , ...rest }) {
    const invalid = Object.keys(errors).indexOf(name) > -1;
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (typeof defaultValue !== "undefined") {
            setValue(name, defaultValue);
        }
    }, [
        defaultValue,
        name,
        setValue
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: _YesNoRadioGroup_css__WEBPACK_IMPORTED_MODULE_2__/* .root */ .J,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_cutting_component_library__WEBPACK_IMPORTED_MODULE_4__/* .FormRadioGroup */ .HH, {
                label: label,
                legend: label,
                name: name,
                checkableLayout: "inline",
                checkableSize: "large",
                invalid: invalid,
                errorMessage: errorMessage,
                onChange: (e)=>{
                    setValue(name, e.target.value);
                    if (e.target.value === "no") {
                        setOpen(true);
                        return;
                    }
                    if (e.target.value === "yes") {
                        setOpen(false);
                    }
                },
                onBlur: onBlur,
                ...rest,
                options: [
                    {
                        content: "Yes",
                        value: "yes",
                        checked: value === "yes"
                    },
                    {
                        content: "No",
                        value: "no",
                        checked: value === "no"
                    }, 
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_VideoSlideDown_VideoSlideDown__WEBPACK_IMPORTED_MODULE_3__/* .VideoSlideDown */ .y, {
                open: open,
                children: children
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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


/***/ })

};
;