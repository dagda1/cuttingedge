"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePage = void 0;
var react_1 = require("react");
exports.usePage = function (initialPage) {
    if (initialPage === void 0) { initialPage = 1; }
    var _a = react_1.useState(1), current = _a[0], setCurrent = _a[1];
    var _b = react_1.useState(1), total = _b[0], setTotal = _b[1];
    var init = react_1.useCallback(function (total) {
        setTotal(total);
        setCurrent(total > 0 ? initialPage : 0);
    }, [initialPage, setTotal, setCurrent]);
    var jump = react_1.useCallback(function (page) {
        setCurrent(page > total ? total : page <= 0 ? 1 : page);
    }, [total, setCurrent]);
    react_1.useEffect(function () {
        jump(initialPage);
    }, [initialPage]);
    var isFirst = current <= 1;
    var isLast = current >= total;
    var next = react_1.useCallback(function () {
        if (isLast) {
            return;
        }
        setCurrent(function (page) { return page + 1; });
    }, [isLast, setCurrent]);
    var prev = react_1.useCallback(function () {
        if (isFirst) {
            return;
        }
        setCurrent(function (page) { return page - 1; });
    }, [isFirst, setCurrent]);
    return {
        current: current,
        total: total,
        isFirst: isFirst,
        isLast: isLast,
        next: next,
        prev: prev,
        jump: jump,
        init: init
    };
};
