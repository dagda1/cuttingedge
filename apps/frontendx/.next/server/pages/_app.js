(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 1943:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ root)
/* harmony export */ });
/* harmony import */ var _vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7587);
/* harmony import */ var _vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__);

const root = (0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.style)({
    whiteSpace: "nowrap"
});
(0,_vanilla_extract_css__WEBPACK_IMPORTED_MODULE_0__.globalStyle)(`${root} a`, {
    padding: 0
});


/***/ }),

/***/ 9083:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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


/***/ }),

/***/ 5763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@vanilla-extract/css"
var css_ = __webpack_require__(7587);
// EXTERNAL MODULE: ../../packages/component-library/dist/esm/src.js
var src = __webpack_require__(3319);
;// CONCATENATED MODULE: ./styles/globals.css.ts


(0,css_.globalFontFace)("Oswald", {
    fontStyle: "normal",
    fontWeight: 200,
    src: "url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Sora&display=swap')"
});
(0,css_.globalStyle)("body", {
    background: src/* palette.gray800 */.DG.gray800,
    overflowX: "hidden",
    ...(0,src/* responsiveStyle */.gh)({
        mobile: {
            letterSpacing: "normal"
        },
        tablet: {
            letterSpacing: "1px"
        }
    })
});
(0,css_.globalStyle)("fieldset", {
    paddingLeft: 0
});
(0,css_.globalStyle)("h2", {
    fontWeight: 300,
    margin: 0,
    padding: 0
});
(0,css_.globalStyle)("ul", {
    margin: 0
});
(0,css_.globalStyle)("header", {
    position: "fixed",
    zIndex: 33,
    left: 0,
    right: 0,
    boxShadow: "0 4px 8px 0 rgba(0,0,0,.2)"
});
(0,css_.globalStyle)("header > div", {
    ...(0,src/* responsiveStyle */.gh)({
        mobile: {
            display: "block"
        },
        tablet: {
            display: "flex",
            justifyContent: "space-between"
        }
    })
});
(0,css_.globalStyle)("main section", {
    position: "relative",
    ...(0,src/* responsiveStyle */.gh)({
        mobile: {
            padding: "1rem 0 0 0"
        },
        tablet: {
            padding: "3rem 0 0 0"
        }
    })
});
(0,css_.globalStyle)("dl,dd,dt", {
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: "100%",
    font: "inherit",
    verticalAlign: "baseline"
});
(0,css_.globalStyle)("h1", {
    marginBottom: src/* vars.space.small */.gR.space.small
});
const cookieContainer = (0,css_.style)({
    alignItems: "center !important"
});
const cookieContent = (0,css_.style)({
    display: "flex",
    flexGrow: 1,
    flexShrink: 0,
    ...(0,src/* responsiveStyle */.gh)({
        mobile: {
            justifyContent: "center"
        },
        desktop: {
            justifyContent: "flex-end"
        }
    })
});
const buttonWrapper = (0,css_.style)({
    flexGrow: 1,
    flexShrink: 0,
    display: "flex",
    ...(0,src/* responsiveStyle */.gh)({
        mobile: {
            justifyContent: "center"
        },
        desktop: {
            justifyContent: "flex-start"
        }
    })
});

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./components/Layouts/Layout.css.ts

const main = (0,css_.style)({
    margin: "0 auto",
    display: "block"
});
(0,css_.globalStyle)(`${main} section`, {
    position: "relative",
    flex: 1
});
const layout = (0,css_.style)({
    position: "relative"
});

;// CONCATENATED MODULE: ./components/TopNav/TopNav.css.ts


const TopNav_css_main = (0,css_.style)({
    flex: 1,
    position: "relative"
});
const root = (0,css_.style)({
    display: "flex",
    justifyContent: "flex-end",
    ...(0,src/* responsiveStyle */.gh)({
        mobile: {
            position: "relative",
            display: "none"
        },
        desktop: {
            position: "static",
            display: "block"
        }
    })
});
const navList = (0,css_.style)({
    display: "flex",
    alignItems: "center",
    margin: 0
});
(0,css_.globalStyle)("header a:hover,footer a:hover", {
    color: src/* palette.gray300 */.DG.gray300
});
(0,css_.globalStyle)(`${navList} li`, {
    padding: 0,
    marginRight: src/* vars.space.small */.gR.space.small
});
(0,css_.globalStyle)(`${navList} ul`, {
    padding: 0
});
(0,css_.globalStyle)(`${navList} li a`, {
    padding: `${src/* vars.space.xxsmall */.gR.space.xxsmall} ${src/* vars.space.small */.gR.space.small}`,
    width: "100%",
    background: "inherit",
    boxShadow: "none",
    ...(0,src/* responsiveStyle */.gh)({
        mobile: {
            display: "none"
        },
        desktop: {
            display: "inline"
        }
    })
});
const left = (0,css_.style)({
    display: "grid",
    ...(0,src/* responsiveStyle */.gh)({
        mobile: {
            gridTemplateColumns: "auto",
            justifyContent: "flex-start"
        },
        tablet: {
            gridTemplateColumns: "repeat(2, auto)",
            flex: "1",
            alignItems: "center"
        }
    })
});
const logoContainer = (0,css_.style)({
    width: "300px"
});
(0,css_.globalStyle)(`${logoContainer} img`, {
    maxWidth: "100%"
});
const logo = (0,css_.style)({
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1
});
(0,css_.globalStyle)(`${logoContainer} a`, {
    display: "block",
    ...(0,src/* responsiveStyle */.gh)({
        mobile: {
            padding: 0
        },
        tablet: {
            padding: src/* vars.space.small */.gR.space.small
        }
    })
});
(0,css_.globalStyle)(`${logoContainer} svg`, {
    width: "100%",
    height: "auto",
    ...(0,src/* responsiveStyle */.gh)({
        mobile: {
            textAlign: "initial"
        },
        tablet: {
            textAlign: "center"
        }
    })
});
(0,css_.globalStyle)(`${logo} h2`, {
    color: src/* palette.gray600 */.DG.gray600
});
const mobileMenu = (0,css_.style)({
    ...(0,src/* responsiveStyle */.gh)({
        mobile: {
            display: "block"
        },
        desktop: {
            display: "none"
        }
    })
});
(0,css_.globalStyle)(`${mobileMenu} > div`, {});
const mobileNav = (0,css_.style)({
    background: src/* palette.gray800 */.DG.gray800,
    color: src/* palette.white */.DG.white,
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: 3,
    display: "flex"
});
(0,css_.globalStyle)(`.hamburger-react`, {
    zIndex: 4
});
(0,css_.globalStyle)(`${mobileNav} ul`, {
    padding: `${src/* vars.space.large */.gR.space.large} vars.space['small']`,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
});
(0,css_.globalStyle)(`${mobileNav} li`, {
    border: `1px solid ${src/* palette.white */.DG.white}`,
    paddingTop: `${src/* vars.space.xxsmall */.gR.space.xxsmall} !important`,
    paddingBottom: `${src/* vars.space.small */.gR.space.small} !important`,
    marginBottom: `${src/* vars.space.xxsmall */.gR.space.xxsmall} !important`,
    paddingLeft: `${src/* vars.space.xxsmall */.gR.space.xxsmall} !important`
});
(0,css_.globalStyle)(`${mobileNav} a`, {
    display: "block",
    width: "100%",
    height: "100%",
    marginTop: src/* vars.space.small */.gR.space.small,
    fontWeight: "bold",
    textTransform: "uppercase"
});
(0,css_.globalStyle)(`${mobileNav} li:hover`, {
    background: src/* palette.gray200 */.DG.gray200,
    color: `${src/* palette.white */.DG.white} !important`
});
const work = (0,css_.style)({
    position: "absolute",
    right: "8px"
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@12.3.4_@babel+core@7.22.1_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js
var next_link = __webpack_require__(6700);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/LinkWrapper/LinkWrapper.tsx
var LinkWrapper = __webpack_require__(8372);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "hamburger-react"
var external_hamburger_react_ = __webpack_require__(3623);
var external_hamburger_react_default = /*#__PURE__*/__webpack_require__.n(external_hamburger_react_);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@szhsin+react-menu@4.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@szhsin/react-menu/dist/index.css
var dist = __webpack_require__(8166);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@szhsin+react-menu@4.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@szhsin/react-menu/dist/transitions/slide.css
var slide = __webpack_require__(2783);
// EXTERNAL MODULE: ./util/image.ts
var util_image = __webpack_require__(4827);
;// CONCATENATED MODULE: external "@szhsin/react-menu"
const react_menu_namespaceObject = require("@szhsin/react-menu");
;// CONCATENATED MODULE: ./components/WorkWIthUsButton/WorkWithUsButton.css.ts


const workWithUsButtonContainer = (0,css_.style)({
    zIndex: 2
});
(0,css_.globalStyle)(`${workWithUsButtonContainer} button`, {
    background: src/* vars.colors.primary */.gR.colors.primary,
    boxShadow: "none",
    display: "inline",
    color: src/* palette.white */.DG.white,
    border: "none",
    padding: src/* vars.space.small */.gR.space.small,
    fontWeight: 800,
    cursor: "pointer",
    whiteSpace: "nowrap"
});
(0,css_.globalStyle)(`${workWithUsButtonContainer} a`, {
    color: src/* palette.black */.DG.black,
    display: "block"
});
(0,css_.globalStyle)(".szh-menu-button", {
    whiteSpace: "nowrap"
});

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./components/WorkWIthUsButton/WorkWIthUsButton.tsx





function WorkWithUsButton() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_classnames_default()(workWithUsButtonContainer),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_menu_namespaceObject.Menu, {
            menuButton: /*#__PURE__*/ jsx_runtime_.jsx(react_menu_namespaceObject.MenuButton, {
                children: "WORK WITH US"
            }),
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_menu_namespaceObject.MenuItem, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(LinkWrapper/* LinkWrapper */.gM, {
                        linkType: "anchor",
                        href: `/roadmap`,
                        children: "PRODUCTIVITY ROADMAP"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_menu_namespaceObject.MenuItem, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(LinkWrapper/* LinkWrapper */.gM, {
                        linkType: "anchor",
                        href: `/consult`,
                        children: "STRATEGY CONSULT"
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/TopNav/TopNav.tsx










const NavLinks = [
    {
        content: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
            children: "Healthcheck"
        }),
        href: "/productivity-test/1"
    },
    // { content: 'Subscribe', href: '/subscribe' },
    {
        content: "Blog",
        href: "/blog"
    },
    {
        content: "About",
        href: "/about"
    },
    {
        content: "Contact",
        href: "/contact"
    }, 
];
const createNav = (onClick)=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: NavLinks.map(({ content , href  })=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(LinkWrapper/* LinkWrapper */.gM, {
                    linkType: "anchor",
                    onClick: onClick,
                    href: href,
                    children: content
                })
            }, href))
    });
/* eslint-disable jsx-a11y/anchor-is-valid */ function TopNav() {
    const { 0: isOpen , 1: setOpen  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: TopNav_css_main,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: logo,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: left,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: logoContainer,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                passHref: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        alt: "cutting edge solutions",
                                        src: (0,util_image/* getImageSrc */.Q)("/frontenddx.png"),
                                        placeholder: "blur"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(WorkWithUsButton, {})
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    className: root,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: navList,
                        children: createNav()
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: mobileMenu,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((external_hamburger_react_default()), {
                            toggle: setOpen,
                            toggled: isOpen
                        }),
                        isOpen && /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                            className: mobileNav,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(LinkWrapper/* LinkWrapper */.gM, {
                                            linkType: "anchor",
                                            onClick: ()=>setOpen(false),
                                            href: "/",
                                            children: "HOME"
                                        })
                                    }, "/"),
                                    createNav(()=>setOpen(false))
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/Footer/Footer.css.ts


const Footer_css_main = (0,css_.style)({
    ...(0,src/* responsiveStyle */.gh)({
        mobile: {
            display: "block",
            textAlign: "center"
        },
        tablet: {
            display: "flex",
            textAlign: "left"
        }
    }),
    flexShrink: 0,
    justifyContent: "stretch",
    padding: src/* vars.space.small */.gR.space.small
});
const links = (0,css_.style)([
    {
        marginTop: 0,
        paddingTop: 0
    },
    (0,src/* atoms */.HZ)({
        marginBottom: {
            mobile: "small",
            tablet: "none"
        }
    }), 
]);
(0,css_.globalStyle)(`${links} li`, {
    display: "inline-block"
});
(0,css_.globalStyle)(`${links} li:not(:last-of-type):after`, {
    content: '"|"',
    marginLeft: src/* vars.space.small */.gR.space.small,
    marginRight: src/* vars.space.small */.gR.space.small
});
const Footer_css_left = (0,css_.style)({
    display: "flex",
    flex: `0 0 66.66%`,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
});
const right = (0,css_.style)({
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
});

;// CONCATENATED MODULE: ./components/Footer/Footer.tsx



const footerPages = [
    "privacy policy",
    "terms and conditions"
];
function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        role: "contentinfo",
        className: Footer_css_main,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: Footer_css_left,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: links,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        children: footerPages.map((page)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(LinkWrapper/* LinkWrapper */.gM, {
                                    linkType: "anchor",
                                    href: `/${page.replace(/\s/g, "-")}`,
                                    children: `${page[0].toUpperCase()}${page.substring(1)}`
                                })
                            }, page))
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: right,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: "Copyright \xa9 Cutting-Edge Solutions (Scotland) inc. All rights reserved"
                })
            })
        ]
    });
}

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Layouts/Layout.tsx








const basePath = "https://frontenddx.com";
const Layout_image = `https://d966n3f4vz4e1.cloudfront.net/dx.jpeg`;
function Layout({ title ="Frontend dx consultant" , description =`We boost software team's frontend productivity` , className , children  }) {
    const router = (0,router_.useRouter)();
    const canonicalUrl = `${basePath}${router.asPath}`;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        httpEquiv: "X-UA-Compatible",
                        content: "IE=edge"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        httpEquiv: "Content-Type",
                        content: "text/html; charset=UTF-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, height=device-height, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "robots",
                        content: "follow, index"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:url",
                        content: canonicalUrl
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:site_name",
                        content: "Frontend DX"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: Layout_image
                    }, Layout_image),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:site",
                        content: "https://twitter.com/dagda1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:title",
                        content: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:description",
                        content: description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:image",
                        content: Layout_image
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "canonical",
                        href: canonicalUrl
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(src/* ApplicationLayout */.gb, {
                theme: "salesTheme",
                header: /*#__PURE__*/ jsx_runtime_.jsx(TopNav, {}),
                footer: /*#__PURE__*/ jsx_runtime_.jsx(Footer, {}),
                center: true,
                className: external_classnames_default()(layout, className),
                children: children
            })
        ]
    });
}

;// CONCATENATED MODULE: external "react-scroll-parallax"
const external_react_scroll_parallax_namespaceObject = require("react-scroll-parallax");
// EXTERNAL MODULE: external "little-state-machine"
var external_little_state_machine_ = __webpack_require__(6024);
// EXTERNAL MODULE: external "react-cookie-consent"
var external_react_cookie_consent_ = __webpack_require__(9779);
var external_react_cookie_consent_default = /*#__PURE__*/__webpack_require__.n(external_react_cookie_consent_);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@12.3.4_@babel+core@7.22.1_react-dom@18.2.0_react@18.2.0/node_modules/next/script.js
var script = __webpack_require__(6714);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
// EXTERNAL MODULE: ./constants.ts
var constants = __webpack_require__(9083);
// EXTERNAL MODULE: ./util/gtm.ts
var gtm = __webpack_require__(341);
;// CONCATENATED MODULE: ./pages/_app.tsx














const intitalState = {
    healthcheck: {}
};
const isProduction = "production" === "production";
(0,external_little_state_machine_.createStore)(intitalState, {
    name: "state",
    middleWares: []
});
function App({ Component , pageProps  }) {
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        router.events.on("routeChangeComplete", gtm/* pageview */.L);
        return ()=>{
            router.events.off("routeChangeComplete", gtm/* pageview */.L);
        };
    }, [
        router.events
    ]);
    const grantConsent = ()=>{
        if (typeof window.gtag !== "undefined") {
            window.gtag("consent", "update", {
                analytics_storage: "granted",
                ad_storage: "granted"
            });
        }
    };
    const revokeConsent = ()=>{
        if (!isProduction) {
            return;
        }
        if (typeof window.gtag !== "undefined") {
            window.gtag("consent", "update", {
                analytics_storage: "denied",
                ad_storage: "denied"
            });
        }
    };
    (0,external_react_.useEffect)(()=>{
        if (!isProduction) {
            return;
        }
        if ((0,external_react_cookie_consent_.getCookieConsentValue)() === "true") {
            console.log("granting analytics");
            grantConsent();
            return;
        } else {
            console.log("revoking analytics");
            revokeConsent();
        }
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_little_state_machine_.StateMachineProvider, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_parallax_namespaceObject.ParallaxProvider, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                                ...pageProps
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((external_react_cookie_consent_default()), {
                                location: "bottom",
                                buttonText: "Accept",
                                declineButtonText: "Reject",
                                enableDeclineButton: true,
                                expires: 365,
                                onAccept: grantConsent,
                                onDecline: revokeConsent,
                                containerClasses: cookieContainer,
                                contentClasses: cookieContent,
                                buttonWrapperClasses: buttonWrapper,
                                children: "This website uses cookies for analytics."
                            })
                        ]
                    })
                })
            }),
            isProduction && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                    id: "gtm-script",
                    strategy: "afterInteractive",
                    dangerouslySetInnerHTML: {
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${constants/* GTM_ID */.Ax}');`
                    }
                })
            })
        ]
    });
}
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 4827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ getImageSrc)
/* harmony export */ });
/* harmony import */ var _cutting_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8639);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9083);


const getImageSrc = (src)=>_cutting_util__WEBPACK_IMPORTED_MODULE_0__/* .isProduction */ .yv ? `${_constants__WEBPACK_IMPORTED_MODULE_1__/* .CDN */ .G3}${src}` : src;


/***/ }),

/***/ 8166:
/***/ (() => {



/***/ }),

/***/ 2783:
/***/ (() => {



/***/ }),

/***/ 6714:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(8404)


/***/ }),

/***/ 7587:
/***/ ((module) => {

"use strict";
module.exports = require("@vanilla-extract/css");

/***/ }),

/***/ 1382:
/***/ ((module) => {

"use strict";
module.exports = require("@vanilla-extract/sprinkles/createRuntimeSprinkles");

/***/ }),

/***/ 4846:
/***/ ((module) => {

"use strict";
module.exports = require("@vanilla-extract/sprinkles/createUtils");

/***/ }),

/***/ 1912:
/***/ ((module) => {

"use strict";
module.exports = require("assert-ts");

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 3623:
/***/ ((module) => {

"use strict";
module.exports = require("hamburger-react");

/***/ }),

/***/ 6024:
/***/ ((module) => {

"use strict";
module.exports = require("little-state-machine");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9779:
/***/ ((module) => {

"use strict";
module.exports = require("react-cookie-consent");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7459,7777,6700,8639,3319,8372], () => (__webpack_exec__(5763)));
module.exports = __webpack_exports__;

})();