"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var withStyles_1 = require("isomorphic-style-loader/lib/withStyles");
var styles = require('./App.scss');
var AppView = function () { return (React.createElement("div", { className: styles.container },
    React.createElement("h1", null, "This is the app"))); };
exports.App = withStyles_1.default(styles)(AppView);
//# sourceMappingURL=App.js.map