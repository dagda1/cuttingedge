"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var document_1 = require("next/document");
var document_2 = require("next/document");
var MyDocument = /** @class */ (function (_super) {
    __extends(MyDocument, _super);
    function MyDocument() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyDocument.prototype.getChildContext = function () {
        return {
            _documentProps: __assign({}, this.props, { dev: false })
        };
    };
    MyDocument.prototype.render = function () {
        return (React.createElement("html", null,
            React.createElement(document_2.Head, null,
                React.createElement("title", null, "My page")),
            React.createElement("body", null,
                React.createElement(document_2.Main, null),
                React.createElement(document_2.NextScript, null))));
    };
    return MyDocument;
}(document_1.default));
exports.default = MyDocument;
//# sourceMappingURL=_document.js.map