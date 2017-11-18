"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var link_1 = require("next/link");
exports.default = function () { return (React.createElement("div", null,
    "Hello World.",
    ' ',
    React.createElement(link_1.default, { href: "/about" },
        React.createElement("a", null, "About")))); };
//# sourceMappingURL=index.js.map