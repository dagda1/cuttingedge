"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var pageWithStyles_1 = require("../pageWIthStyles/pageWithStyles");
var react_1 = require("react");
var styles = require('./App.scss');
var AppView = function () { return (React.createElement("div", { className: styles.container },
    React.createElement("h1", null, "This is the app"),
    react_1.Children)); };
exports.App = pageWithStyles_1.pageWithStyles(AppView);
//# sourceMappingURL=App.js.map