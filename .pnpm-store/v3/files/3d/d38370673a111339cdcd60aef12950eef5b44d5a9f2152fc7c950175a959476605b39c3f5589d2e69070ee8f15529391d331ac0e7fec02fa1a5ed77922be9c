import { useCallback, useEffect, useState } from 'react';
export var usePage = function (initialPage) {
    if (initialPage === void 0) { initialPage = 1; }
    var _a = useState(1), current = _a[0], setCurrent = _a[1];
    var _b = useState(1), total = _b[0], setTotal = _b[1];
    var init = useCallback(function (total) {
        setTotal(total);
        setCurrent(total > 0 ? initialPage : 0);
    }, [initialPage, setTotal, setCurrent]);
    var jump = useCallback(function (page) {
        setCurrent(page > total ? total : page <= 0 ? 1 : page);
    }, [total, setCurrent]);
    useEffect(function () {
        jump(initialPage);
    }, [initialPage]);
    var isFirst = current <= 1;
    var isLast = current >= total;
    var next = useCallback(function () {
        if (isLast) {
            return;
        }
        setCurrent(function (page) { return page + 1; });
    }, [isLast, setCurrent]);
    var prev = useCallback(function () {
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
