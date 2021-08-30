(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
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
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __require = (x) => {
    if (typeof require !== "undefined")
      return require(x);
    throw new Error('Dynamic require of "' + x + '" is not supported');
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
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // ../devtools/react-shim.js
  var React = __toModule(__require("react"));

  // src/components/atoms/Heading/Heading.tsx
  var import_classnames = __toModule(__require("classnames"));
  var Heading = (_a) => {
    var _b = _a, { level = 1, className, tabIndex, children } = _b, rest = __objRest(_b, ["level", "className", "tabIndex", "children"]);
    const Tag = `h${level}`;
    return /* @__PURE__ */ React.createElement(Tag, __spreadProps(__spreadValues({
      className: (0, import_classnames.default)(className)
    }, rest), {
      tabIndex
    }), children);
  };
  Heading.displayName = "Heading";

  // src/components/atoms/ExternalLink/ExternalLink.tsx
  var ExternalLink = (_a) => {
    var _b = _a, {
      className,
      href,
      dataSelector = "external-link",
      blank = true,
      children,
      ariaLabel,
      ariaLabelledBy
    } = _b, rest = __objRest(_b, [
      "className",
      "href",
      "dataSelector",
      "blank",
      "children",
      "ariaLabel",
      "ariaLabelledBy"
    ]);
    return /* @__PURE__ */ React.createElement("a", __spreadValues({
      href,
      "data-selector": dataSelector,
      rel: "noopener noreferrer",
      target: blank ? "_blank" : "",
      className,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy
    }, rest), children);
  };

  // src/components/atoms/Input/Input.tsx
  var import_classnames2 = __toModule(__require("classnames"));

  // src/components/atoms/Input/Input.css.ts
  var invalid = "_1e2ye4a1";
  var root = "_1e2ye4a0";

  // src/components/atoms/Input/Input.tsx
  var Input = (_a) => {
    var _b = _a, { required: required2, className, invalid: invalid3, innerRef, type = "text" } = _b, rest = __objRest(_b, ["required", "className", "invalid", "innerRef", "type"]);
    return /* @__PURE__ */ React.createElement("input", __spreadValues({
      required: required2,
      "aria-required": required2,
      className: (0, import_classnames2.default)(root, className, {
        [invalid]: invalid3
      }),
      type,
      ref: innerRef
    }, rest));
  };
  Input.displayName = "Input";

  // src/components/atoms/Label/Label.tsx
  var import_classnames3 = __toModule(__require("classnames"));

  // src/components/atoms/Label/Label.css.ts
  var invalid2 = "_1kew5jd1";
  var required = "_1kew5jd2";
  var root2 = "_1kew5jd0";
  var strong = "_1kew5jd3";

  // src/components/atoms/Label/Label.tsx
  var Label = ({
    id,
    htmlFor,
    invalid: invalid3,
    required: required2,
    className,
    fontWeight,
    children,
    dataSelector
  }) => /* @__PURE__ */ React.createElement("label", {
    htmlFor,
    id,
    className: (0, import_classnames3.default)(root2, className, {
      [invalid2]: invalid3,
      [required]: required2,
      [strong]: fontWeight === "strong"
    }),
    "data-selector": dataSelector
  }, children);
  Label.displayName = "Label";

  // src/components/atoms/ErrorMessage/ErrorMessage.tsx
  var import_classnames4 = __toModule(__require("classnames"));

  // src/components/atoms/ErrorMessage/ErrorMessage.css.ts
  var root3 = "_1vwmm4u6c z05f11";

  // src/style/accessibility.css.ts
  var visuallyHidden = "_1lfzuus0";

  // src/components/atoms/ErrorMessage/ErrorMessage.tsx
  var ErrorMessage = ({
    id = "error",
    dataSelector = "form-error",
    errorMessage,
    className
  }) => /* @__PURE__ */ React.createElement("span", {
    id,
    "data-selector": dataSelector,
    className: (0, import_classnames4.default)(root3, className)
  }, /* @__PURE__ */ React.createElement("span", {
    className: visuallyHidden
  }, "Error:"), errorMessage);

  // src/components/atoms/Button/Button.tsx
  var import_classnames5 = __toModule(__require("classnames"));
  var import_util = __toModule(__require("@cutting/util"));

  // src/components/atoms/Button/Button.css.ts
  var buttons = { primary: "_1xodr4g2", secondary: "_1xodr4g3", warning: "_1xodr4g4" };
  var disabled = "_1xodr4g1";
  var root4 = "_1xodr4g0";

  // src/components/atoms/Button/Button.tsx
  var Button = (_a) => {
    var _b = _a, {
      onClick = import_util.identity,
      className,
      buttonStyle = "primary",
      disabled: disabled2,
      type = "button",
      children,
      title,
      dataSelector,
      ariaLabel,
      ariaLabelledBy
    } = _b, rest = __objRest(_b, [
      "onClick",
      "className",
      "buttonStyle",
      "disabled",
      "type",
      "children",
      "title",
      "dataSelector",
      "ariaLabel",
      "ariaLabelledBy"
    ]);
    return /* @__PURE__ */ React.createElement("button", __spreadValues({
      className: (0, import_classnames5.default)(className, root4, buttons[buttonStyle], { [disabled]: disabled2 }),
      type,
      onClick,
      disabled: disabled2,
      title,
      "data-selector": dataSelector,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy
    }, rest), children);
  };

  // src/components/molecules/LoadingIcon/LoadingIcon.tsx
  var import_util2 = __toModule(__require("@cutting/util"));
  var import_classnames6 = __toModule(__require("classnames"));

  // src/components/molecules/LoadingIcon/LoadingIcon.css.ts
  var bar = "_2emxpu2";
  var bars = "_2emxpu1";
  var dark = "_2emxpu3";
  var dot = "_2emxpu5";
  var dots = "_2emxpu4";
  var loadingIcon = "_2emxpu0";
  var spinner = "_2emxpu7";
  var spinnerOverlay = "_2emxpu6";

  // src/components/molecules/LoadingIcon/LoadingIcon.tsx
  var angles = [...(0, import_util2.range)(0, 360, 30)];
  var LoadingIcon = ({ darkMode }) => /* @__PURE__ */ React.createElement("svg", {
    "data-selector": "loading-icon",
    className: loadingIcon,
    xmlns: "http://www.w3.org/2000/svg",
    width: "120px",
    height: "120px",
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMid"
  }, /* @__PURE__ */ React.createElement("g", {
    className: bars
  }, Array.from(angles).map((angle) => /* @__PURE__ */ React.createElement("rect", {
    key: angle,
    x: "48.5",
    y: "30",
    width: "3",
    height: "25",
    rx: "2",
    ry: "2",
    transform: `rotate(${angle} 50 50) translate(0 -30)`,
    className: (0, import_classnames6.default)(bar, { [dark]: darkMode })
  }))), /* @__PURE__ */ React.createElement("g", {
    className: dots
  }, angles.map((x) => /* @__PURE__ */ React.createElement("circle", {
    key: x,
    cx: x,
    cy: "50",
    r: "3",
    className: dot
  }))));
  var LoadingIcon_default = LoadingIcon;

  // src/components/molecules/LoadingIcon/LoadingOverlay.tsx
  var import_classnames7 = __toModule(__require("classnames"));
  var LoadingOverlay = ({ busy, text, darkMode }) => busy ? /* @__PURE__ */ React.createElement("div", {
    className: (0, import_classnames7.default)(spinnerOverlay, { [dark]: darkMode }),
    "data-selector": "spinner"
  }, /* @__PURE__ */ React.createElement("div", {
    className: spinner
  }, /* @__PURE__ */ React.createElement(LoadingIcon_default, {
    darkMode
  }), text && /* @__PURE__ */ React.createElement("h2", null, text))) : null;

  // src/components/hoc/FormControl/FormControl.tsx
  var import_classnames8 = __toModule(__require("classnames"));
  var import_react = __toModule(__require("react"));

  // src/utl/prefixer/index.ts
  var import_util3 = __toModule(__require("@cutting/util"));
  var prefixId = (prefix = "ctrl") => `${prefix}${(0, import_util3.uniqueId)()}`;

  // src/components/hoc/FormControl/FormControl.css.ts
  var FormControl_css_exports = {};
  __export(FormControl_css_exports, {
    Full: () => Full,
    error: () => error,
    highlight: () => highlight,
    horizontal: () => horizontal,
    label__additional: () => label__additional,
    root: () => root5,
    width10: () => width10,
    width100: () => width100,
    width2: () => width2,
    width20: () => width20,
    width3: () => width3,
    width30: () => width30,
    width4: () => width4,
    width5: () => width5,
    widthHalf: () => widthHalf,
    widthQuarter: () => widthQuarter,
    widthThird: () => widthThird,
    widthThreeQuarters: () => widthThreeQuarters,
    widthTwoThirds: () => widthTwoThirds,
    wrapper: () => wrapper
  });
  var Full = "_1dier0ik";
  var error = "_1dier0i3";
  var highlight = "_1dier0i4";
  var horizontal = "_1dier0i6";
  var label__additional = "label__additional";
  var root5 = "_1dier0i2 _1vwmm4ul _1vwmm4u1f _1vwmm4ux _1dier0i1";
  var width10 = "_1dier0ib";
  var width100 = "_1dier0ie";
  var width2 = "_1dier0i7";
  var width20 = "_1dier0ic";
  var width3 = "_1dier0i8";
  var width30 = "_1dier0id";
  var width4 = "_1dier0i9";
  var width5 = "_1dier0ia";
  var widthHalf = "_1dier0ih";
  var widthQuarter = "_1dier0if";
  var widthThird = "_1dier0ig";
  var widthThreeQuarters = "_1dier0ij";
  var widthTwoThirds = "_1dier0ii";
  var wrapper = "_1dier0i5";

  // src/components/hoc/FormControl/FormControl.tsx
  function FormControl(Comp) {
    const FormControlWrapper = (_a) => {
      var _b = _a, {
        id,
        invalid: invalid3,
        name,
        label,
        errorDataSelector,
        errorMessage,
        className,
        additionalLabel,
        highlight: highlight2,
        required: required2,
        fontWeight = "strong",
        dataSelector = "form-control",
        layout = "vertical",
        width = "width100"
      } = _b, rest = __objRest(_b, [
        "id",
        "invalid",
        "name",
        "label",
        "errorDataSelector",
        "errorMessage",
        "className",
        "additionalLabel",
        "highlight",
        "required",
        "fontWeight",
        "dataSelector",
        "layout",
        "width"
      ]);
      const internalId = (0, import_react.useRef)(id || name || prefixId());
      const errorId = `${internalId.current}-error`;
      return /* @__PURE__ */ React.createElement("div", {
        className: (0, import_classnames8.default)(root5, { [horizontal]: layout === "horizontal", [error]: invalid3, [highlight]: highlight2 }, className)
      }, /* @__PURE__ */ React.createElement(Label, {
        id: `${internalId.current}-label`,
        htmlFor: internalId.current,
        required: required2,
        fontWeight,
        dataSelector: `${dataSelector}-label`
      }, label, additionalLabel && /* @__PURE__ */ React.createElement("span", {
        className: label__additional
      }, additionalLabel)), /* @__PURE__ */ React.createElement("div", {
        id: errorId,
        "aria-hidden": !invalid3,
        role: "alert"
      }, invalid3 && errorMessage && /* @__PURE__ */ React.createElement(ErrorMessage, {
        dataSelector: errorDataSelector || `${dataSelector}-error`,
        errorMessage: errorMessage.toString()
      })), /* @__PURE__ */ React.createElement("div", {
        className: wrapper
      }, /* @__PURE__ */ React.createElement(Comp, __spreadValues({
        id: internalId.current,
        name,
        invalid: invalid3,
        required: required2,
        "aria-invalid": invalid3,
        "aria-describedby": errorId,
        className: FormControl_css_exports[width]
      }, rest))));
    };
    return FormControlWrapper;
  }

  // src/components/molecules/FormControls/FormControls.tsx
  var FormInput = FormControl(Input);

  // src/components/molecules/RadioGroup/RadioGroup.tsx
  var import_react2 = __toModule(__require("react"));

  // src/components/atoms/Radio/Radio.tsx
  var import_classnames9 = __toModule(__require("classnames"));

  // src/components/atoms/Radio/Radio.css.ts
  var inline = "_1pbzfcz3 _1pbzfcz0 _1pbzfcz2";
  var item = "_1pbzfcz0";
  var small = "_1pbzfcz1 _1pbzfcz0";

  // src/components/atoms/Radio/Radio.tsx
  function Radio({
    id,
    name,
    value,
    checked,
    children,
    layout,
    onChange,
    size
  }) {
    return /* @__PURE__ */ React.createElement("div", {
      className: (0, import_classnames9.default)(item, {
        [small]: size === "small",
        [inline]: layout === "inline"
      })
    }, /* @__PURE__ */ React.createElement("input", {
      id,
      name,
      type: "radio",
      value,
      onChange,
      checked
    }), /* @__PURE__ */ React.createElement("label", {
      htmlFor: id
    }, children));
  }

  // src/components/molecules/RadioGroup/RadioGroup.tsx
  var import_classnames10 = __toModule(__require("classnames"));

  // src/components/molecules/RadioGroup/RadioGroup.css.ts
  var fieldset = "_1184x0";
  var inline2 = "_1184x3";
  var legend = "_1184x2";
  var srOnlyLegend = "_1184x1";

  // src/components/molecules/RadioGroup/RadioGroup.tsx
  function RadioGroup({
    legend: legend2,
    legendMode = "screen-reader-only",
    layout,
    size,
    name,
    options: radioOptions,
    onChange,
    className
  }) {
    const optionsWithIds = (0, import_react2.useRef)(radioOptions.map((o, index) => __spreadProps(__spreadValues({}, o), {
      name,
      id: o.id || `${name}-${index}`
    })));
    const [selectedValue, setSelectedValue] = (0, import_react2.useState)(optionsWithIds.current.find((o) => !!o.checked));
    const options = optionsWithIds.current;
    const changeHandler = (0, import_react2.useCallback)((e) => {
      const option = optionsWithIds.current.find((o) => o.id === e.target.id);
      console.log(option);
      if (!option) {
        throw new Error(`could not find option in RadioGroup changeHandler`);
      }
      setSelectedValue(option);
      onChange && onChange(option);
    }, [onChange]);
    return /* @__PURE__ */ React.createElement("fieldset", {
      className: fieldset
    }, /* @__PURE__ */ React.createElement("legend", {
      className: (0, import_classnames10.default)(legend, { [srOnlyLegend]: legendMode === "screen-reader-only" })
    }, legend2), /* @__PURE__ */ React.createElement("div", {
      className: (0, import_classnames10.default)(className, {
        [inline2]: layout === "inline"
      })
    }, options.map((_a) => {
      var _b = _a, { id, checked, name: name2, content } = _b, option = __objRest(_b, ["id", "checked", "name", "content"]);
      return /* @__PURE__ */ React.createElement(Radio, __spreadValues({
        key: id,
        id,
        name: name2,
        layout,
        size,
        checked: selectedValue && id === selectedValue.id,
        onChange: changeHandler
      }, option), content);
    })));
  }

  // src/components/templates/ApplicationLayout/ApplicationLayout.tsx
  var import_react3 = __toModule(__require("react"));
  var import_hooks = __toModule(__require("@cutting/hooks"));
  var import_classnames11 = __toModule(__require("classnames"));

  // src/components/templates/ApplicationLayout/ApplicationLayout.css.ts
  var body = "_14qckqd0";
  var hidden = "_14qckqd1";

  // src/components/templates/ApplicationLayout/ApplicationLayout.tsx
  var import_util4 = __toModule(__require("@cutting/util"));
  var ApplicationLayoutHeading = ({ heading }) => {
    if ((0, import_util4.isNil)(heading)) {
      return null;
    }
    return typeof heading === "string" ? /* @__PURE__ */ React.createElement(Heading, null, heading) : heading;
  };
  var ApplicationLayout = ({
    heading,
    className,
    innerRef,
    Header = /* @__PURE__ */ React.createElement("header", {
      className: hidden
    }, "Header"),
    Footer = /* @__PURE__ */ React.createElement("footer", {
      className: hidden
    }, "Footer"),
    children
  }) => {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, Header, /* @__PURE__ */ React.createElement("main", {
      className: (0, import_classnames11.default)(body, className),
      ref: innerRef
    }, /* @__PURE__ */ React.createElement(ApplicationLayoutHeading, {
      heading
    }), children), Footer);
  };
  var ApplicationLayoutWithRouterScroll = (props) => {
    const root6 = (0, import_react3.useRef)(null);
    (0, import_hooks.useScrollToTop)({ ref: root6 });
    return /* @__PURE__ */ React.createElement(ApplicationLayout, __spreadProps(__spreadValues({}, props), {
      innerRef: root6
    }));
  };

  // src/style/themes/default/default.css.ts
  var defaultTheme = "_5krfg10";

  // src/style/themes/cutting/cutting.css.ts
  var cuttingTheme = "_1fdirnu0";

  // src/style/themes/sales/salesTheme.css.ts
  var salesTheme = "_1sov3790";
})();
//# sourceMappingURL=src.js.map
