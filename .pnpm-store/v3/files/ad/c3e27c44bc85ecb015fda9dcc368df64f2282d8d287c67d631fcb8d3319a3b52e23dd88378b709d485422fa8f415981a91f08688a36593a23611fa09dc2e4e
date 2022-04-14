import { useCallback } from 'react';
import { useSyncExternalStoreWithSelector } from 'use-sync-external-store/shim/with-selector';
import { isActorWithState } from './useActor';
import { getServiceSnapshot } from './utils';
function isService(actor) {
    return 'state' in actor && 'machine' in actor;
}
var defaultCompare = function (a, b) { return a === b; };
var defaultGetSnapshot = function (a) {
    return isService(a)
        ? getServiceSnapshot(a)
        : isActorWithState(a)
            ? a.state
            : undefined;
};
export function useSelector(actor, selector, compare, getSnapshot) {
    if (compare === void 0) { compare = defaultCompare; }
    if (getSnapshot === void 0) { getSnapshot = defaultGetSnapshot; }
    var subscribe = useCallback(function (handleStoreChange) {
        var unsubscribe = actor.subscribe(handleStoreChange).unsubscribe;
        return unsubscribe;
    }, [actor]);
    var boundGetSnapshot = useCallback(function () { return getSnapshot(actor); }, [
        actor,
        getSnapshot
    ]);
    var selectedSnapshot = useSyncExternalStoreWithSelector(subscribe, boundGetSnapshot, boundGetSnapshot, selector, compare);
    return selectedSnapshot;
}
