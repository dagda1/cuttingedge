import { useEffect, useRef } from 'react';
import { buildShortcuts } from './buildShortcuts';
import { clearArray } from './utils/clearArray';
export const useShortcuts = ({ shortcutMap, ref, mapKey, handler }) => {
    const shortcutsRef = useRef([]);
    const mousetrapRef = useRef();
    useEffect(() => {
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
        return () => {
            mousetrapRef.current && mousetrapRef.current.reset();
        };
    }, [ref]);
    useEffect(() => {
        if (!mousetrapRef.current) {
            return;
        }
        const shortcuts = shortcutsRef.current;
        const trapper = mousetrapRef.current;
        const map = mapKey ? shortcutMap[mapKey] : shortcutMap;
        const shortcutActions = buildShortcuts(map);
        shortcutActions.forEach((shortcut) => {
            trapper.bind(shortcut.keys, (e) => {
                e.preventDefault();
                e.stopPropagation();
                handler(shortcut.action, e);
            });
            shortcut.trapper = trapper;
        });
        clearArray(shortcuts);
        shortcuts.push(...shortcutActions);
        return () => {
            shortcuts.forEach((shortcut) => {
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
