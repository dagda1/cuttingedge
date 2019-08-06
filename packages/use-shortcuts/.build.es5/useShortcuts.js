import { useEffect, useRef } from 'react';
import { buildShortcuts } from './buildShortcuts';
import { clearArray } from './utils/clearArray';
export var useShortcuts = function (_a) {
    var shortcutMap = _a.shortcutMap, ref = _a.ref, mapKey = _a.mapKey, handler = _a.handler;
    var shortcutsRef = useRef([]);
    var mousetrapRef = useRef();
    useEffect(function () {
        if (!!mousetrapRef.current) {
            return;
        }
        if (!ref) {
            mousetrapRef.current = mousetrap;
            return;
        }
        if (!ref.current) {
            return;
        }
        mousetrapRef.current = new mousetrap(ref.current);
        return function () {
            mousetrapRef.current && mousetrapRef.current.reset();
        };
    }, [ref]);
    useEffect(function () {
        if (!mousetrapRef.current) {
            return;
        }
        var shortcuts = shortcutsRef.current;
        var trapper = mousetrapRef.current;
        var map = mapKey ? shortcutMap[mapKey] : shortcutMap;
        var shortcutActions = buildShortcuts(map);
        shortcutActions.forEach(function (shortcut) {
            trapper.bind(shortcut.keys, function (e) {
                e.preventDefault();
                e.stopPropagation();
                handler(shortcut.action, e);
            });
            shortcut.trapper = trapper;
        });
        clearArray(shortcuts);
        shortcuts.push.apply(shortcuts, shortcutActions);
        return function () {
            shortcuts.forEach(function (shortcut) {
                if (shortcut.trapper) {
                    shortcut.trapper.unbind(shortcut.keys);
                }
                trapper.reset();
            });
        };
    }, [handler, mapKey, ref, shortcutMap]);
    // for testing
    return { shortcuts: shortcutsRef.current };
};
