var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// ../devtools/react-shim.js
import * as React from "react";

// src/style/responsive-style.ts
import { isEqual, omit } from "@cutting/util";

// src/style/breakpoints.ts
var breakpointNames = ["mobile", "tablet", "desktop"];
var breakpoints = {
  mobile: 0,
  tablet: 48,
  desktop: 62
};

// src/style/responsive-style.ts
var makeMediaQuery = (breakpoint) => (styles) => !styles || Object.keys(styles).length === 0 ? {} : {
  [`screen and (min-width: ${breakpoints[breakpoint]}rem)`]: styles
};
var mediaQuery = {
  tablet: makeMediaQuery("tablet"),
  desktop: makeMediaQuery("desktop")
};
var responsiveStyle = ({ mobile, tablet, desktop }) => {
  const mobileStyles = typeof mobile === "undefined" ? {} : omit(mobile, "@media");
  const tabletStyles = !tablet || isEqual(tablet, mobileStyles) ? null : tablet;
  const stylesBelowDesktop = tabletStyles || mobileStyles;
  const desktopStyles = !desktop || isEqual(desktop, stylesBelowDesktop) ? null : desktop;
  const hasMediaQueries = tabletStyles || desktopStyles;
  return __spreadValues(__spreadValues({}, mobileStyles), hasMediaQueries ? {
    "@media": __spreadValues(__spreadValues({}, tabletStyles ? mediaQuery.tablet(tabletStyles) : {}), desktopStyles ? mediaQuery.desktop(desktopStyles) : {})
  } : {});
};

// src/style/themes/vars.css.ts
var vars = { borderRadius: { standard: "var(--_1cnwjzt0)" }, borderColor: { standard: "var(--_1cnwjzt1)", invalid: "var(--_1cnwjzt2)", focus: "var(--_1cnwjzt3)" }, borderWidth: { standard: "var(--_1cnwjzt4)", large: "var(--_1cnwjzt5)" }, foregroundColor: { link: "var(--_1cnwjzt6)", linkHover: "var(--_1cnwjzt7)", linkVisited: "var(--_1cnwjzt8)", error: "var(--_1cnwjzt9)", body: "var(--_1cnwjzta)" }, backgroundColor: { body: "var(--_1cnwjztb)", input: "var(--_1cnwjztc)", focus: "var(--_1cnwjztd)" }, fontFamily: { heading: "var(--_1cnwjzte)", body: "var(--_1cnwjztf)", paragraphs: "var(--_1cnwjztg)" }, colors: { primary: "var(--_1cnwjzth)", secondary: "var(--_1cnwjzti)", error: "var(--_1cnwjztj)", notification: "var(--_1cnwjztk)" }, fonts: { headings: { h1: { mobile: "var(--_1cnwjztl)", tablet: "var(--_1cnwjztm)", desktop: "var(--_1cnwjztn)" }, h2: { mobile: "var(--_1cnwjzto)", tablet: "var(--_1cnwjztp)", desktop: "var(--_1cnwjztq)" }, h3: { mobile: "var(--_1cnwjztr)", tablet: "var(--_1cnwjzts)", desktop: "var(--_1cnwjztt)" }, h4: { mobile: "var(--_1cnwjztu)", tablet: "var(--_1cnwjztv)", desktop: "var(--_1cnwjztw)" } }, text: { body: { mobile: "var(--_1cnwjztx)", tablet: "var(--_1cnwjzty)", desktop: "var(--_1cnwjztz)" }, paragraph: { mobile: "var(--_1cnwjzt10)", tablet: "var(--_1cnwjzt11)", desktop: "var(--_1cnwjzt12)" } } }, lineHeight: { headings: { h1: { mobile: "var(--_1cnwjzt13)", tablet: "var(--_1cnwjzt14)", desktop: "var(--_1cnwjzt15)" }, h2: { mobile: "var(--_1cnwjzt16)", tablet: "var(--_1cnwjzt17)", desktop: "var(--_1cnwjzt18)" }, h3: { mobile: "var(--_1cnwjzt19)", tablet: "var(--_1cnwjzt1a)", desktop: "var(--_1cnwjzt1b)" }, h4: { mobile: "var(--_1cnwjzt1c)", tablet: "var(--_1cnwjzt1d)", desktop: "var(--_1cnwjzt1e)" } }, text: { body: { mobile: "var(--_1cnwjzt1f)", tablet: "var(--_1cnwjzt1g)", desktop: "var(--_1cnwjzt1h)" }, paragraph: { mobile: "var(--_1cnwjzt1i)", tablet: "var(--_1cnwjzt1j)", desktop: "var(--_1cnwjzt1k)" } } }, fontWeight: { regular: "var(--_1cnwjzt1l)", medium: "var(--_1cnwjzt1m)", strong: "var(--_1cnwjzt1n)" }, inlineFieldSize: { standard: "var(--_1cnwjzt1o)", small: "var(--_1cnwjzt1p)" }, space: { none: "var(--_1cnwjzt1q)", "1x": "var(--_1cnwjzt1r)", "2x": "var(--_1cnwjzt1s)", "3x": "var(--_1cnwjzt1t)", "4x": "var(--_1cnwjzt1u)", "5x": "var(--_1cnwjzt1v)", "6x": "var(--_1cnwjzt1w)", "7x": "var(--_1cnwjzt1x)" }, width: { input: "var(--_1cnwjzt1y)" }, inputWidth: { width2: "var(--_1cnwjzt1z)", width3: "var(--_1cnwjzt20)", width4: "var(--_1cnwjzt21)", width5: "var(--_1cnwjzt22)", width10: "var(--_1cnwjzt23)", width20: "var(--_1cnwjzt24)", width30: "var(--_1cnwjzt25)", width100: "var(--_1cnwjzt26)", widthQuarter: "var(--_1cnwjzt27)", widthThird: "var(--_1cnwjzt28)", widthHalf: "var(--_1cnwjzt29)", widthTwoThirds: "var(--_1cnwjzt2a)", widthThreeQuarters: "var(--_1cnwjzt2b)" }, headings: { color: "var(--_1cnwjzt2c)" }, accessibility: { visibleFocus: { outline: "var(--_1cnwjzt2d)", outlineOffset: "var(--_1cnwjzt2e)" }, linkFocus: { outline: "var(--_1cnwjzt2f)", color: "var(--_1cnwjzt2g)", backgroundColor: "var(--_1cnwjzt2h)", boxShadow: "var(--_1cnwjzt2i)", textDecoration: "var(--_1cnwjzt2j)" }, accessibleOutline: { backgroundColor: "var(--_1cnwjzt2k)", outline: "var(--_1cnwjzt2l)" } }, invalid: { color: "var(--_1cnwjzt2m)" }, links: { lineHeight: "var(--_1cnwjzt2n)", color: { link: "var(--_1cnwjzt2o)", hover: "var(--_1cnwjzt2p)", active: "var(--_1cnwjzt2q)" }, decoration: { link: "var(--_1cnwjzt2r)" } }, buttons: { textTransform: "var(--_1cnwjzt2s)", fontWeight: "var(--_1cnwjzt2t)", width: { mobile: "var(--_1cnwjzt2u)", tablet: "var(--_1cnwjzt2v)" }, primary: { border: "var(--_1cnwjzt2w)", background: "var(--_1cnwjzt2x)", color: "var(--_1cnwjzt2y)", padding: "var(--_1cnwjzt2z)", boxShadow: "var(--_1cnwjzt30)", ":hover": { background: "var(--_1cnwjzt31)" } }, secondary: { border: "var(--_1cnwjzt32)", background: "var(--_1cnwjzt33)", color: "var(--_1cnwjzt34)", padding: "var(--_1cnwjzt35)", boxShadow: "var(--_1cnwjzt36)", ":hover": { background: "var(--_1cnwjzt37)" } }, warning: { border: "var(--_1cnwjzt38)", background: "var(--_1cnwjzt39)", color: "var(--_1cnwjzt3a)", padding: "var(--_1cnwjzt3b)", boxShadow: "var(--_1cnwjzt3c)", ":hover": { background: "var(--_1cnwjzt3d)" } } }, radios: { borderWidth: "var(--_1cnwjzt3e)", borderColor: "var(--_1cnwjzt3f)", regular: { width: "var(--_1cnwjzt3g)", height: "var(--_1cnwjzt3h)" } } };

// src/style/typography/typography.ts
var responsiveFont = () => {
  return __spreadValues({
    fontFamily: vars.fontFamily.body
  }, responsiveStyle({
    mobile: {
      fontSize: vars.fonts.text.paragraph.mobile,
      lineHeight: vars.lineHeight.text.paragraph.mobile
    },
    tablet: {
      fontSize: vars.fonts.text.paragraph.tablet,
      lineHeight: vars.lineHeight.text.paragraph.tablet
    },
    desktop: {
      fontSize: vars.fonts.text.paragraph.desktop,
      lineHeight: vars.lineHeight.text.paragraph.desktop
    }
  }));
};
var responsiveHeadingFont = (heading) => {
  return __spreadValues({
    fontFamily: vars.fontFamily.body
  }, responsiveStyle({
    mobile: {
      fontSize: vars.fonts.headings[heading].mobile,
      lineHeight: vars.lineHeight.headings[heading].mobile
    },
    tablet: {
      fontSize: vars.fonts.headings[heading].tablet,
      lineHeight: vars.lineHeight.headings[heading].tablet
    },
    desktop: {
      fontSize: vars.fonts.headings[heading].desktop,
      lineHeight: vars.lineHeight.headings[heading].desktop
    }
  }));
};

// src/style/atoms/sprinkles.css.ts
import { createAtomsFn as _670bd } from "@vanilla-extract/sprinkles/createRuntimeAtomsFn";
import { createMapValueFn as _51c72 } from "@vanilla-extract/sprinkles/createUtils";
import { createNormalizeValueFn as _a49f6 } from "@vanilla-extract/sprinkles/createUtils";
var atoms = _670bd({ conditions: { defaultCondition: "mobile", conditionNames: ["mobile", "tablet", "desktop"], responsiveArray: void 0 }, styles: { padding: { mappings: ["paddingBottom", "paddingTop", "paddingLeft", "paddingRight"] }, paddingY: { mappings: ["paddingTop", "paddingBottom"] }, paddingX: { mappings: ["paddingLeft", "paddingRight"] }, margin: { mappings: ["marginBottom", "marginTop", "marginLeft", "marginRight"] }, marginY: { mappings: ["marginTop", "marginBottom"] }, marginX: { mappings: ["marginLeft", "marginRight"] }, placeItems: { mappings: ["alignItems", "justifyContent"] }, position: { values: { absolute: { conditions: { mobile: "_1vwmm4u0", tablet: "_1vwmm4u1", desktop: "_1vwmm4u2" }, defaultClass: "_1vwmm4u0" }, relative: { conditions: { mobile: "_1vwmm4u3", tablet: "_1vwmm4u4", desktop: "_1vwmm4u5" }, defaultClass: "_1vwmm4u3" }, fixed: { conditions: { mobile: "_1vwmm4u6", tablet: "_1vwmm4u7", desktop: "_1vwmm4u8" }, defaultClass: "_1vwmm4u6" } } }, display: { values: { none: { conditions: { mobile: "_1vwmm4u9", tablet: "_1vwmm4ua", desktop: "_1vwmm4ub" }, defaultClass: "_1vwmm4u9" }, block: { conditions: { mobile: "_1vwmm4uc", tablet: "_1vwmm4ud", desktop: "_1vwmm4ue" }, defaultClass: "_1vwmm4uc" }, inline: { conditions: { mobile: "_1vwmm4uf", tablet: "_1vwmm4ug", desktop: "_1vwmm4uh" }, defaultClass: "_1vwmm4uf" }, "inline-block": { conditions: { mobile: "_1vwmm4ui", tablet: "_1vwmm4uj", desktop: "_1vwmm4uk" }, defaultClass: "_1vwmm4ui" }, flex: { conditions: { mobile: "_1vwmm4ul", tablet: "_1vwmm4um", desktop: "_1vwmm4un" }, defaultClass: "_1vwmm4ul" } } }, alignItems: { values: { "flex-start": { conditions: { mobile: "_1vwmm4uo", tablet: "_1vwmm4up", desktop: "_1vwmm4uq" }, defaultClass: "_1vwmm4uo" }, center: { conditions: { mobile: "_1vwmm4ur", tablet: "_1vwmm4us", desktop: "_1vwmm4ut" }, defaultClass: "_1vwmm4ur" }, "flex-end": { conditions: { mobile: "_1vwmm4uu", tablet: "_1vwmm4uv", desktop: "_1vwmm4uw" }, defaultClass: "_1vwmm4uu" } } }, justifyContent: { values: { "flex-start": { conditions: { mobile: "_1vwmm4ux", tablet: "_1vwmm4uy", desktop: "_1vwmm4uz" }, defaultClass: "_1vwmm4ux" }, center: { conditions: { mobile: "_1vwmm4u10", tablet: "_1vwmm4u11", desktop: "_1vwmm4u12" }, defaultClass: "_1vwmm4u10" }, "flex-end": { conditions: { mobile: "_1vwmm4u13", tablet: "_1vwmm4u14", desktop: "_1vwmm4u15" }, defaultClass: "_1vwmm4u13" }, "space-between": { conditions: { mobile: "_1vwmm4u16", tablet: "_1vwmm4u17", desktop: "_1vwmm4u18" }, defaultClass: "_1vwmm4u16" } } }, flexDirection: { values: { row: { conditions: { mobile: "_1vwmm4u19", tablet: "_1vwmm4u1a", desktop: "_1vwmm4u1b" }, defaultClass: "_1vwmm4u19" }, "row-reverse": { conditions: { mobile: "_1vwmm4u1c", tablet: "_1vwmm4u1d", desktop: "_1vwmm4u1e" }, defaultClass: "_1vwmm4u1c" }, column: { conditions: { mobile: "_1vwmm4u1f", tablet: "_1vwmm4u1g", desktop: "_1vwmm4u1h" }, defaultClass: "_1vwmm4u1f" }, "column-reverse": { conditions: { mobile: "_1vwmm4u1i", tablet: "_1vwmm4u1j", desktop: "_1vwmm4u1k" }, defaultClass: "_1vwmm4u1i" } } }, flexWrap: { values: { nowrap: { conditions: { mobile: "_1vwmm4u1l", tablet: "_1vwmm4u1m", desktop: "_1vwmm4u1n" }, defaultClass: "_1vwmm4u1l" }, wrap: { conditions: { mobile: "_1vwmm4u1o", tablet: "_1vwmm4u1p", desktop: "_1vwmm4u1q" }, defaultClass: "_1vwmm4u1o" }, "wrap-reverse": { conditions: { mobile: "_1vwmm4u1r", tablet: "_1vwmm4u1s", desktop: "_1vwmm4u1t" }, defaultClass: "_1vwmm4u1r" } } }, flex: { values: { "1": { conditions: { mobile: "_1vwmm4u1x", tablet: "_1vwmm4u1y", desktop: "_1vwmm4u1z" }, defaultClass: "_1vwmm4u1x" }, auto: { conditions: { mobile: "_1vwmm4u1u", tablet: "_1vwmm4u1v", desktop: "_1vwmm4u1w" }, defaultClass: "_1vwmm4u1u" }, "1 1": { conditions: { mobile: "_1vwmm4u20", tablet: "_1vwmm4u21", desktop: "_1vwmm4u22" }, defaultClass: "_1vwmm4u20" }, "1 0 auto": { conditions: { mobile: "_1vwmm4u23", tablet: "_1vwmm4u24", desktop: "_1vwmm4u25" }, defaultClass: "_1vwmm4u23" } } }, gap: { values: { none: { conditions: { mobile: "_1vwmm4u26", tablet: "_1vwmm4u27", desktop: "_1vwmm4u28" }, defaultClass: "_1vwmm4u26" }, "1x": { conditions: { mobile: "_1vwmm4u29", tablet: "_1vwmm4u2a", desktop: "_1vwmm4u2b" }, defaultClass: "_1vwmm4u29" }, "2x": { conditions: { mobile: "_1vwmm4u2c", tablet: "_1vwmm4u2d", desktop: "_1vwmm4u2e" }, defaultClass: "_1vwmm4u2c" }, "3x": { conditions: { mobile: "_1vwmm4u2f", tablet: "_1vwmm4u2g", desktop: "_1vwmm4u2h" }, defaultClass: "_1vwmm4u2f" }, "4x": { conditions: { mobile: "_1vwmm4u2i", tablet: "_1vwmm4u2j", desktop: "_1vwmm4u2k" }, defaultClass: "_1vwmm4u2i" }, "5x": { conditions: { mobile: "_1vwmm4u2l", tablet: "_1vwmm4u2m", desktop: "_1vwmm4u2n" }, defaultClass: "_1vwmm4u2l" }, "6x": { conditions: { mobile: "_1vwmm4u2o", tablet: "_1vwmm4u2p", desktop: "_1vwmm4u2q" }, defaultClass: "_1vwmm4u2o" }, "7x": { conditions: { mobile: "_1vwmm4u2r", tablet: "_1vwmm4u2s", desktop: "_1vwmm4u2t" }, defaultClass: "_1vwmm4u2r" } } }, borderRadius: { values: { standard: { conditions: { mobile: "_1vwmm4u2u", tablet: "_1vwmm4u2v", desktop: "_1vwmm4u2w" }, defaultClass: "_1vwmm4u2u" } } }, paddingTop: { values: { none: { conditions: { mobile: "_1vwmm4u2x", tablet: "_1vwmm4u2y", desktop: "_1vwmm4u2z" }, defaultClass: "_1vwmm4u2x" }, "1x": { conditions: { mobile: "_1vwmm4u30", tablet: "_1vwmm4u31", desktop: "_1vwmm4u32" }, defaultClass: "_1vwmm4u30" }, "2x": { conditions: { mobile: "_1vwmm4u33", tablet: "_1vwmm4u34", desktop: "_1vwmm4u35" }, defaultClass: "_1vwmm4u33" }, "3x": { conditions: { mobile: "_1vwmm4u36", tablet: "_1vwmm4u37", desktop: "_1vwmm4u38" }, defaultClass: "_1vwmm4u36" }, "4x": { conditions: { mobile: "_1vwmm4u39", tablet: "_1vwmm4u3a", desktop: "_1vwmm4u3b" }, defaultClass: "_1vwmm4u39" }, "5x": { conditions: { mobile: "_1vwmm4u3c", tablet: "_1vwmm4u3d", desktop: "_1vwmm4u3e" }, defaultClass: "_1vwmm4u3c" }, "6x": { conditions: { mobile: "_1vwmm4u3f", tablet: "_1vwmm4u3g", desktop: "_1vwmm4u3h" }, defaultClass: "_1vwmm4u3f" }, "7x": { conditions: { mobile: "_1vwmm4u3i", tablet: "_1vwmm4u3j", desktop: "_1vwmm4u3k" }, defaultClass: "_1vwmm4u3i" } } }, paddingBottom: { values: { none: { conditions: { mobile: "_1vwmm4u3l", tablet: "_1vwmm4u3m", desktop: "_1vwmm4u3n" }, defaultClass: "_1vwmm4u3l" }, "1x": { conditions: { mobile: "_1vwmm4u3o", tablet: "_1vwmm4u3p", desktop: "_1vwmm4u3q" }, defaultClass: "_1vwmm4u3o" }, "2x": { conditions: { mobile: "_1vwmm4u3r", tablet: "_1vwmm4u3s", desktop: "_1vwmm4u3t" }, defaultClass: "_1vwmm4u3r" }, "3x": { conditions: { mobile: "_1vwmm4u3u", tablet: "_1vwmm4u3v", desktop: "_1vwmm4u3w" }, defaultClass: "_1vwmm4u3u" }, "4x": { conditions: { mobile: "_1vwmm4u3x", tablet: "_1vwmm4u3y", desktop: "_1vwmm4u3z" }, defaultClass: "_1vwmm4u3x" }, "5x": { conditions: { mobile: "_1vwmm4u40", tablet: "_1vwmm4u41", desktop: "_1vwmm4u42" }, defaultClass: "_1vwmm4u40" }, "6x": { conditions: { mobile: "_1vwmm4u43", tablet: "_1vwmm4u44", desktop: "_1vwmm4u45" }, defaultClass: "_1vwmm4u43" }, "7x": { conditions: { mobile: "_1vwmm4u46", tablet: "_1vwmm4u47", desktop: "_1vwmm4u48" }, defaultClass: "_1vwmm4u46" } } }, paddingLeft: { values: { none: { conditions: { mobile: "_1vwmm4u49", tablet: "_1vwmm4u4a", desktop: "_1vwmm4u4b" }, defaultClass: "_1vwmm4u49" }, "1x": { conditions: { mobile: "_1vwmm4u4c", tablet: "_1vwmm4u4d", desktop: "_1vwmm4u4e" }, defaultClass: "_1vwmm4u4c" }, "2x": { conditions: { mobile: "_1vwmm4u4f", tablet: "_1vwmm4u4g", desktop: "_1vwmm4u4h" }, defaultClass: "_1vwmm4u4f" }, "3x": { conditions: { mobile: "_1vwmm4u4i", tablet: "_1vwmm4u4j", desktop: "_1vwmm4u4k" }, defaultClass: "_1vwmm4u4i" }, "4x": { conditions: { mobile: "_1vwmm4u4l", tablet: "_1vwmm4u4m", desktop: "_1vwmm4u4n" }, defaultClass: "_1vwmm4u4l" }, "5x": { conditions: { mobile: "_1vwmm4u4o", tablet: "_1vwmm4u4p", desktop: "_1vwmm4u4q" }, defaultClass: "_1vwmm4u4o" }, "6x": { conditions: { mobile: "_1vwmm4u4r", tablet: "_1vwmm4u4s", desktop: "_1vwmm4u4t" }, defaultClass: "_1vwmm4u4r" }, "7x": { conditions: { mobile: "_1vwmm4u4u", tablet: "_1vwmm4u4v", desktop: "_1vwmm4u4w" }, defaultClass: "_1vwmm4u4u" } } }, paddingRight: { values: { none: { conditions: { mobile: "_1vwmm4u4x", tablet: "_1vwmm4u4y", desktop: "_1vwmm4u4z" }, defaultClass: "_1vwmm4u4x" }, "1x": { conditions: { mobile: "_1vwmm4u50", tablet: "_1vwmm4u51", desktop: "_1vwmm4u52" }, defaultClass: "_1vwmm4u50" }, "2x": { conditions: { mobile: "_1vwmm4u53", tablet: "_1vwmm4u54", desktop: "_1vwmm4u55" }, defaultClass: "_1vwmm4u53" }, "3x": { conditions: { mobile: "_1vwmm4u56", tablet: "_1vwmm4u57", desktop: "_1vwmm4u58" }, defaultClass: "_1vwmm4u56" }, "4x": { conditions: { mobile: "_1vwmm4u59", tablet: "_1vwmm4u5a", desktop: "_1vwmm4u5b" }, defaultClass: "_1vwmm4u59" }, "5x": { conditions: { mobile: "_1vwmm4u5c", tablet: "_1vwmm4u5d", desktop: "_1vwmm4u5e" }, defaultClass: "_1vwmm4u5c" }, "6x": { conditions: { mobile: "_1vwmm4u5f", tablet: "_1vwmm4u5g", desktop: "_1vwmm4u5h" }, defaultClass: "_1vwmm4u5f" }, "7x": { conditions: { mobile: "_1vwmm4u5i", tablet: "_1vwmm4u5j", desktop: "_1vwmm4u5k" }, defaultClass: "_1vwmm4u5i" } } }, marginTop: { values: { none: { conditions: { mobile: "_1vwmm4u5l", tablet: "_1vwmm4u5m", desktop: "_1vwmm4u5n" }, defaultClass: "_1vwmm4u5l" }, "1x": { conditions: { mobile: "_1vwmm4u5o", tablet: "_1vwmm4u5p", desktop: "_1vwmm4u5q" }, defaultClass: "_1vwmm4u5o" }, "2x": { conditions: { mobile: "_1vwmm4u5r", tablet: "_1vwmm4u5s", desktop: "_1vwmm4u5t" }, defaultClass: "_1vwmm4u5r" }, "3x": { conditions: { mobile: "_1vwmm4u5u", tablet: "_1vwmm4u5v", desktop: "_1vwmm4u5w" }, defaultClass: "_1vwmm4u5u" }, "4x": { conditions: { mobile: "_1vwmm4u5x", tablet: "_1vwmm4u5y", desktop: "_1vwmm4u5z" }, defaultClass: "_1vwmm4u5x" }, "5x": { conditions: { mobile: "_1vwmm4u60", tablet: "_1vwmm4u61", desktop: "_1vwmm4u62" }, defaultClass: "_1vwmm4u60" }, "6x": { conditions: { mobile: "_1vwmm4u63", tablet: "_1vwmm4u64", desktop: "_1vwmm4u65" }, defaultClass: "_1vwmm4u63" }, "7x": { conditions: { mobile: "_1vwmm4u66", tablet: "_1vwmm4u67", desktop: "_1vwmm4u68" }, defaultClass: "_1vwmm4u66" } } }, marginBottom: { values: { none: { conditions: { mobile: "_1vwmm4u69", tablet: "_1vwmm4u6a", desktop: "_1vwmm4u6b" }, defaultClass: "_1vwmm4u69" }, "1x": { conditions: { mobile: "_1vwmm4u6c", tablet: "_1vwmm4u6d", desktop: "_1vwmm4u6e" }, defaultClass: "_1vwmm4u6c" }, "2x": { conditions: { mobile: "_1vwmm4u6f", tablet: "_1vwmm4u6g", desktop: "_1vwmm4u6h" }, defaultClass: "_1vwmm4u6f" }, "3x": { conditions: { mobile: "_1vwmm4u6i", tablet: "_1vwmm4u6j", desktop: "_1vwmm4u6k" }, defaultClass: "_1vwmm4u6i" }, "4x": { conditions: { mobile: "_1vwmm4u6l", tablet: "_1vwmm4u6m", desktop: "_1vwmm4u6n" }, defaultClass: "_1vwmm4u6l" }, "5x": { conditions: { mobile: "_1vwmm4u6o", tablet: "_1vwmm4u6p", desktop: "_1vwmm4u6q" }, defaultClass: "_1vwmm4u6o" }, "6x": { conditions: { mobile: "_1vwmm4u6r", tablet: "_1vwmm4u6s", desktop: "_1vwmm4u6t" }, defaultClass: "_1vwmm4u6r" }, "7x": { conditions: { mobile: "_1vwmm4u6u", tablet: "_1vwmm4u6v", desktop: "_1vwmm4u6w" }, defaultClass: "_1vwmm4u6u" } } }, marginLeft: { values: { none: { conditions: { mobile: "_1vwmm4u6x", tablet: "_1vwmm4u6y", desktop: "_1vwmm4u6z" }, defaultClass: "_1vwmm4u6x" }, "1x": { conditions: { mobile: "_1vwmm4u70", tablet: "_1vwmm4u71", desktop: "_1vwmm4u72" }, defaultClass: "_1vwmm4u70" }, "2x": { conditions: { mobile: "_1vwmm4u73", tablet: "_1vwmm4u74", desktop: "_1vwmm4u75" }, defaultClass: "_1vwmm4u73" }, "3x": { conditions: { mobile: "_1vwmm4u76", tablet: "_1vwmm4u77", desktop: "_1vwmm4u78" }, defaultClass: "_1vwmm4u76" }, "4x": { conditions: { mobile: "_1vwmm4u79", tablet: "_1vwmm4u7a", desktop: "_1vwmm4u7b" }, defaultClass: "_1vwmm4u79" }, "5x": { conditions: { mobile: "_1vwmm4u7c", tablet: "_1vwmm4u7d", desktop: "_1vwmm4u7e" }, defaultClass: "_1vwmm4u7c" }, "6x": { conditions: { mobile: "_1vwmm4u7f", tablet: "_1vwmm4u7g", desktop: "_1vwmm4u7h" }, defaultClass: "_1vwmm4u7f" }, "7x": { conditions: { mobile: "_1vwmm4u7i", tablet: "_1vwmm4u7j", desktop: "_1vwmm4u7k" }, defaultClass: "_1vwmm4u7i" } } }, marginRight: { values: { none: { conditions: { mobile: "_1vwmm4u7l", tablet: "_1vwmm4u7m", desktop: "_1vwmm4u7n" }, defaultClass: "_1vwmm4u7l" }, "1x": { conditions: { mobile: "_1vwmm4u7o", tablet: "_1vwmm4u7p", desktop: "_1vwmm4u7q" }, defaultClass: "_1vwmm4u7o" }, "2x": { conditions: { mobile: "_1vwmm4u7r", tablet: "_1vwmm4u7s", desktop: "_1vwmm4u7t" }, defaultClass: "_1vwmm4u7r" }, "3x": { conditions: { mobile: "_1vwmm4u7u", tablet: "_1vwmm4u7v", desktop: "_1vwmm4u7w" }, defaultClass: "_1vwmm4u7u" }, "4x": { conditions: { mobile: "_1vwmm4u7x", tablet: "_1vwmm4u7y", desktop: "_1vwmm4u7z" }, defaultClass: "_1vwmm4u7x" }, "5x": { conditions: { mobile: "_1vwmm4u80", tablet: "_1vwmm4u81", desktop: "_1vwmm4u82" }, defaultClass: "_1vwmm4u80" }, "6x": { conditions: { mobile: "_1vwmm4u83", tablet: "_1vwmm4u84", desktop: "_1vwmm4u85" }, defaultClass: "_1vwmm4u83" }, "7x": { conditions: { mobile: "_1vwmm4u86", tablet: "_1vwmm4u87", desktop: "_1vwmm4u88" }, defaultClass: "_1vwmm4u86" } } }, fontFamily: { values: { heading: { conditions: { mobile: "_1vwmm4u89", tablet: "_1vwmm4u8a", desktop: "_1vwmm4u8b" }, defaultClass: "_1vwmm4u89" }, body: { conditions: { mobile: "_1vwmm4u8c", tablet: "_1vwmm4u8d", desktop: "_1vwmm4u8e" }, defaultClass: "_1vwmm4u8c" }, paragraphs: { conditions: { mobile: "_1vwmm4u8f", tablet: "_1vwmm4u8g", desktop: "_1vwmm4u8h" }, defaultClass: "_1vwmm4u8f" } } }, pointerEvents: { values: { none: { conditions: { mobile: "_1vwmm4u8i", tablet: "_1vwmm4u8j", desktop: "_1vwmm4u8k" }, defaultClass: "_1vwmm4u8i" }, auto: { conditions: { mobile: "_1vwmm4u8l", tablet: "_1vwmm4u8m", desktop: "_1vwmm4u8n" }, defaultClass: "_1vwmm4u8l" } } }, opacity: { values: { "0": { conditions: { mobile: "_1vwmm4u8o", tablet: "_1vwmm4u8p", desktop: "_1vwmm4u8q" }, defaultClass: "_1vwmm4u8o" }, "1": { conditions: { mobile: "_1vwmm4u8r", tablet: "_1vwmm4u8s", desktop: "_1vwmm4u8t" }, defaultClass: "_1vwmm4u8r" } } }, textAlign: { values: { left: { conditions: { mobile: "_1vwmm4u8u", tablet: "_1vwmm4u8v", desktop: "_1vwmm4u8w" }, defaultClass: "_1vwmm4u8u" }, center: { conditions: { mobile: "_1vwmm4u8x", tablet: "_1vwmm4u8y", desktop: "_1vwmm4u8z" }, defaultClass: "_1vwmm4u8x" } } }, fontWeight: { values: { regular: { conditions: { mobile: "_1vwmm4u90", tablet: "_1vwmm4u91", desktop: "_1vwmm4u92" }, defaultClass: "_1vwmm4u90" }, medium: { conditions: { mobile: "_1vwmm4u93", tablet: "_1vwmm4u94", desktop: "_1vwmm4u95" }, defaultClass: "_1vwmm4u93" }, strong: { conditions: { mobile: "_1vwmm4u96", tablet: "_1vwmm4u97", desktop: "_1vwmm4u98" }, defaultClass: "_1vwmm4u96" } } } } }, { conditions: void 0, styles: { top: { values: { "0": { defaultClass: "_1vwmm4u99" } } }, bottom: { values: { "0": { defaultClass: "_1vwmm4u9a" } } }, left: { values: { "0": { defaultClass: "_1vwmm4u9b" } } }, right: { values: { "0": { defaultClass: "_1vwmm4u9c" } } }, flexShrink: { values: { "0": { defaultClass: "_1vwmm4u9d" } } }, flexGrow: { values: { "0": { defaultClass: "_1vwmm4u9e" }, "1": { defaultClass: "_1vwmm4u9f" } } }, zIndex: { values: { "0": { defaultClass: "_1vwmm4u9h" }, "1": { defaultClass: "_1vwmm4u9i" }, "-1": { defaultClass: "_1vwmm4u9g" } } }, width: { values: { full: { defaultClass: "_1vwmm4u9j" } } }, borderRadius: { values: { standard: { defaultClass: "_1vwmm4u9k" } } }, cursor: { values: { pointer: { defaultClass: "_1vwmm4u9l" } } } } });
var mapResponsiveValue = _51c72({ conditions: { defaultCondition: "mobile", conditionNames: ["mobile", "tablet", "desktop"], responsiveArray: void 0 } });
var normalizeResponsiveValue = _a49f6({ conditions: { defaultCondition: "mobile", conditionNames: ["mobile", "tablet", "desktop"], responsiveArray: void 0 } });

// src/style/themes/default/default.css.ts
var defaultTheme = "_5krfg10";

// src/style/themes/cutting/cutting.css.ts
var cuttingTheme = "_1fdirnu0";

// src/style/palette.css.ts
var palette = { white: "#fff", black: "#0b0c0c", red: "#ef4444", red600: "#dc2626", red700: "#b91c1c", red800: "#991b1b", redError: "#dc2626", yellow50: "#fefce8", yellow100: "#fef9c3", yellow200: "#fef08a", yellow300: "#fde047", yellow400: "#facc15", yellow500: "#eab308", yellow600: "#ca8a04", yellow700: "#a16207", yellow800: "#854d0e", yellow900: "#713f12", green200: "#a7f3d0", green300: "#6ee7b7", green400: "#34d399", green500: "#10b981", green800: "#065f46", green900: "#064e3b", coolGray50: "#f9fafb", coolGray100: "#f3f4f6", coolGray200: "#e5e7eb", coolGray300: "#d1d5db", coolGray400: "#9ca3af", coolGray500: "#6b7280", coolGray600: "#4b5563", coolGray700: "#374151", coolGray800: "#1f2937", coolGray900: "#111827", trueGray50: "#fafafa", trueGray100: "#f5f5f5", trueGray200: "#e5e5e5", trueGray300: "#d4d4d4", trueGray400: "#a3a3a3", trueGray500: "#737373", trueGray600: "#525252", trueGray700: "#404040", trueGray800: "#262626", trueGray900: "#171717", gray50: "#fafafa", gray100: "#f4f4f5", gray200: "#e4e4e7", gray300: "#d4d4d8", gray400: "#a1a1aa", gray500: "#71717a", gray600: "#52525b", gray700: "#3f3f46", gray800: "#27272a", gray900: "#18181b", teal50: "#f0fdfa", teal100: "#ccfbf1", teal200: "#99f6e4", teal300: "#5eead4", teal400: "#2dd4bf", teal500: "#14b8a6", teal600: "#0d9488", teal700: "#0f766e", teal800: "#115e59", teal900: "#134e4a", sky50: "#f0f9ff", sky100: "#e0f2fe", sky200: "#bae6fd", sky300: "#7dd3fc", sky400: "#38bdf8", sky500: "#0ea5e9", sky600: "#0284c7", sky700: "#0369a1", sky800: "#075985", sky900: "#0c4a6e", blue50: "#f0f9ff", blue100: "#e0f2fe", blue200: "#bae6fd", blue300: "#7dd3fc", blue400: "#38bdf8", blue500: "#0ea5e9", blue600: "#0284c7", blue700: "#0369a1", blue800: "#075985", blue900: "#0c4a6e", orange50: "#fff7ed", orange100: "#ffedd5", orange200: "#fed7aa", orange300: "#fdba74", orange400: "#fb923c", orange500: "#f97316", orange600: "#ea580c", orange700: "#c2410c", orange800: "#9a3412", orange900: "#7c2d12", violet50: "#f5f3ff", violet100: "#ede9fe", violet200: "#ddd6fe", violet300: "#c4b5fd", violet400: "#a78bfa", violet500: "#8b5cf6", violet600: "#7c3aed", violet700: "#6d28d9", violet800: "#5b21b6", violet900: "#4c1d95", fuchsia50: "#fdf4ff", fuchsia100: "#fae8ff", fuchsia200: "#f5d0fe", fuchsia300: "#f0abfc", fuchsia400: "#e879f9", fuchsia500: "#d946ef", fuchsia600: "#c026d3", fuchsia700: "#a21caf", fuchsia800: "#86198f", fuchsia900: "#701a75" };

// src/style/reset/reset-tracker.ts
import dedent from "dedent";
var resetImported = false;
var markResetImported = () => {
  resetImported = true;
};

// src/style/themes/make-theme.ts
import { mapValues } from "@cutting/util";

// src/style/themes/tokens.ts
import { rem } from "polished";
var colors = {
  primary: palette.green800,
  secondary: palette.gray100,
  error: palette.redError,
  notification: palette.yellow400
};
var spacing = [4, 8, 12, 16, 20, 24, 36];
var borderRadius = [1, 2, 4, 8, 16, 32];
var fontWeight = {
  regular: 400,
  medium: 500,
  strong: 700
};
var tokens = {
  space: __spreadValues({
    none: "0"
  }, spacing.reduce((acc, curr, i) => {
    acc[`${i + 1}x`] = rem(curr);
    return acc;
  }, {})),
  borderRadius: __spreadValues({}, borderRadius.reduce((acc, curr, i) => {
    acc[`${i + 1}x`] = `${curr}px`;
    return acc;
  }, {})),
  colors: __spreadValues({}, colors),
  inputWidth: {
    width2: "5.4ex",
    width3: "7.2ex",
    width4: "9ex",
    width5: "10.8ex",
    width10: "23ex",
    width20: "41ex",
    width30: "62ex",
    width100: "59ex + 3ex",
    widthQuarter: "25%",
    widthThird: "33.33%",
    widthHalf: "50%",
    widthTwoThirds: "66.66%",
    widthThreeQuarters: "75%"
  },
  color: {
    foreground: {
      link: palette.trueGray900,
      linkHover: palette.white,
      linkVisited: palette.trueGray700,
      error: colors.error,
      body: palette.black
    },
    background: {
      body: palette.white,
      input: palette.white,
      focus: palette.blue100
    }
  },
  typography: {
    fonts: {
      heading: '"GDS Transport",arial,sans-serif',
      body: '"GDS Transport",arial,sans-serif',
      paragraphs: '"GDS Transport",arial,sans-serif'
    },
    webFont: null,
    fontWeight: __spreadValues({}, fontWeight),
    headings: {
      h1: {
        mobile: 2,
        tablet: 2,
        desktop: 3
      },
      h2: {
        mobile: 1.5,
        tablet: 1.5,
        desktop: 2.25
      },
      h3: {
        mobile: 1.125,
        tablet: 1.125,
        desktop: 1.5
      },
      h4: {
        mobile: 1,
        tablet: 1,
        desktop: 1.1875
      }
    },
    text: {
      body: {
        mobile: 1,
        tablet: 1,
        desktop: 1
      },
      paragraph: {
        mobile: 1,
        tablet: 1,
        desktop: 1.1875
      }
    }
  },
  grid: 4,
  border: {
    radius: {
      standard: "8px"
    },
    width: {
      standard: 1,
      large: 2
    },
    color: {
      standard: palette.trueGray900,
      invalid: colors.error,
      focus: colors.primary
    }
  },
  width: {
    input: "100%"
  },
  accessibility: {
    outlineWidth: "3px",
    elementFocusColor: colors.notification,
    accessibleOutlineColor: colors.notification,
    outlineOffset: "0",
    linkFocusColor: palette.black,
    boxShadowColor: palette.black
  },
  links: {
    lineHeight: "1.31579",
    color: {
      link: palette.sky700,
      hover: palette.sky900,
      active: palette.black
    },
    decoration: {
      link: "underline"
    }
  },
  headings: {
    color: palette.black
  },
  buttons: {
    textTransform: "none",
    fontWeight: String(fontWeight.regular),
    width: {
      mobile: "100%",
      tablet: "auto"
    },
    primary: {
      borderWidth: "2px",
      borderColor: "transparent",
      hoverBackgroundColor: colors.primary,
      background: palette.green800,
      focusColor: palette.green900,
      color: palette.white,
      marginTop: 0,
      padding: "8px 10px 7px",
      fontWeight: fontWeight.regular,
      boxShadowColor: palette.gray900
    },
    secondary: {
      borderWidth: "2px",
      borderColor: "transparent",
      background: colors.secondary,
      focusColor: palette.gray300,
      hoverBackgroundColor: colors.primary,
      color: palette.black,
      marginTop: 0,
      padding: "8px 10px 7px",
      fontWeight: fontWeight.regular,
      boxShadowColor: palette.trueGray400
    },
    warning: {
      borderWidth: "2px",
      border: "transparent",
      background: colors.error,
      focusColor: palette.red700,
      hoverBackgroundColor: colors.primary,
      color: palette.white,
      marginTop: 0,
      padding: "8px 10px 7px",
      fontWeight: fontWeight.regular,
      boxShadowColor: palette.orange900
    }
  },
  radios: {
    borderWidth: "2px",
    borderColor: palette.black,
    regular: {
      width: rem(44),
      height: rem(44)
    }
  }
};

// src/style/themes/make-theme.ts
import deepmerge from "deepmerge";
var scaleCreator = (scale) => (v) => `${v}${scale}`;
var px = scaleCreator("px");
var rem2 = scaleCreator("rem");
var convertTypography = (o, f) => Object.keys(o).reduce((acc, curr) => {
  const key = curr;
  const current = o[key];
  acc[key] = mapValues(current, f);
  return acc;
}, {});
var ratio = 1.5;
var getLineHeight = (fontSize) => rem2(Number(fontSize) * ratio);
var makeTheme = (customTokens = {}) => {
  const tokens2 = __objRest(deepmerge(tokens, customTokens), []);
  const { foreground, background } = tokens2.color;
  const resolvedTokens = {
    borderRadius: tokens2.border.radius,
    borderColor: tokens2.border.color,
    borderWidth: mapValues(tokens2.border.width, px),
    foregroundColor: foreground,
    backgroundColor: __spreadValues({}, background),
    fontFamily: __spreadValues({}, tokens2.typography.fonts),
    colors: __spreadValues({}, tokens2.colors),
    fonts: {
      headings: convertTypography(tokens2.typography.headings, rem2),
      text: convertTypography(tokens2.typography.text, rem2)
    },
    lineHeight: {
      headings: convertTypography(tokens2.typography.headings, getLineHeight),
      text: convertTypography(tokens2.typography.text, getLineHeight)
    },
    fontWeight: mapValues(tokens2.typography.fontWeight, String),
    inlineFieldSize: {
      standard: "2.5rem",
      small: "1.25rem"
    },
    space: __spreadValues({}, tokens2.space),
    width: __spreadValues({}, tokens2.width),
    inputWidth: __spreadValues({}, tokens2.inputWidth),
    headings: {
      color: tokens2.headings.color
    },
    accessibility: {
      visibleFocus: {
        outline: `${tokens2.accessibility.outlineWidth} solid ${tokens2.accessibility.elementFocusColor}`,
        outlineOffset: tokens2.accessibility.outlineOffset
      },
      linkFocus: {
        outline: `3px solid transparent`,
        color: tokens2.accessibility.linkFocusColor,
        backgroundColor: tokens2.accessibility.elementFocusColor,
        boxShadow: `0 -2px #fd0, 0 4px ${tokens2.accessibility.boxShadowColor}`,
        textDecoration: `none`
      },
      accessibleOutline: {
        backgroundColor: tokens2.accessibility.accessibleOutlineColor,
        outline: `${tokens2.accessibility.outlineWidth} solid ${tokens2.accessibility.accessibleOutlineColor}`
      }
    },
    invalid: {
      color: tokens2.color.foreground.error
    },
    links: __spreadValues({}, tokens2.links),
    buttons: {
      textTransform: tokens2.buttons.textTransform,
      fontWeight: tokens2.buttons.fontWeight,
      width: __spreadValues({}, tokens2.buttons.width),
      primary: {
        border: `${tokens2.buttons.primary.borderWidth} solid ${tokens2.buttons.primary.borderWidth}`,
        background: tokens2.buttons.primary.background,
        color: tokens2.buttons.primary.color,
        padding: tokens2.buttons.primary.padding,
        boxShadow: `0 2px 0 ${tokens2.buttons.primary.boxShadowColor} !important`,
        ":hover": {
          background: tokens2.buttons.primary.focusColor
        }
      },
      secondary: {
        border: `${tokens2.buttons.secondary.borderWidth} solid ${tokens2.buttons.secondary.borderWidth}`,
        background: tokens2.buttons.secondary.background,
        color: tokens2.buttons.secondary.color,
        padding: tokens2.buttons.secondary.padding,
        boxShadow: `0 2px 0 ${tokens2.buttons.secondary.boxShadowColor} !important`,
        ":hover": {
          background: tokens2.buttons.secondary.focusColor
        }
      },
      warning: {
        border: `${tokens2.buttons.warning.borderWidth} solid ${tokens2.buttons.warning.borderWidth}`,
        background: tokens2.buttons.warning.background,
        color: tokens2.buttons.warning.color,
        padding: tokens2.buttons.secondary.padding,
        boxShadow: `0 2px 0 ${tokens2.buttons.warning.boxShadowColor} !important`,
        ":hover": {
          background: tokens2.buttons.warning.focusColor
        }
      }
    },
    radios: __spreadValues({}, tokens2.radios)
  };
  return resolvedTokens;
};

// src/style/accessibility.css.ts
var screenReaderOnly = { position: "absolute", width: "1px", height: "1px", padding: 0, margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", border: "0" };
var visuallyHidden = "_1lfzuus0";
export {
  atoms,
  breakpointNames,
  breakpoints,
  cuttingTheme,
  defaultTheme,
  makeTheme,
  markResetImported,
  palette,
  responsiveFont,
  responsiveHeadingFont,
  responsiveStyle,
  screenReaderOnly,
  vars,
  visuallyHidden
};
//# sourceMappingURL=style.js.map
