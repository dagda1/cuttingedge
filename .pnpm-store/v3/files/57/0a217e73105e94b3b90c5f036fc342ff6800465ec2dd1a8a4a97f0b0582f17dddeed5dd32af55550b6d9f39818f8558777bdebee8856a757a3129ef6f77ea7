import { useRef, useCallback } from 'react';
import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect';
import useConstant from './useConstant';
import { useSyncExternalStore } from 'use-sync-external-store/shim';
export function isActorWithState(actorRef) {
    return 'state' in actorRef;
}
function isDeferredActor(actorRef) {
    return 'deferred' in actorRef;
}
function defaultGetSnapshot(actorRef) {
    return 'getSnapshot' in actorRef
        ? actorRef.getSnapshot()
        : isActorWithState(actorRef)
            ? actorRef.state
            : undefined;
}
export function useActor(actorRef, getSnapshot) {
    if (getSnapshot === void 0) { getSnapshot = defaultGetSnapshot; }
    var actorRefRef = useRef(actorRef);
    var deferredEventsRef = useRef([]);
    var subscribe = useCallback(function (handleStoreChange) {
        var unsubscribe = actorRef.subscribe(handleStoreChange).unsubscribe;
        return unsubscribe;
    }, [actorRef]);
    var boundGetSnapshot = useCallback(function () { return getSnapshot(actorRef); }, [
        actorRef,
        getSnapshot
    ]);
    var storeSnapshot = useSyncExternalStore(subscribe, boundGetSnapshot, boundGetSnapshot);
    var send = useConstant(function () { return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var event = args[0];
        if (process.env.NODE_ENV !== 'production' && args.length > 1) {
            console.warn("Unexpected payload: ".concat(JSON.stringify(args[1]), ". Only a single event object can be sent to actor send() functions."));
        }
        var currentActorRef = actorRefRef.current;
        // If the previous actor is a deferred actor,
        // queue the events so that they can be replayed
        // on the non-deferred actor.
        if (isDeferredActor(currentActorRef) && currentActorRef.deferred) {
            deferredEventsRef.current.push(event);
        }
        else {
            currentActorRef.send(event);
        }
    }; });
    useIsomorphicLayoutEffect(function () {
        actorRefRef.current = actorRef;
        // Dequeue deferred events from the previous deferred actorRef
        while (deferredEventsRef.current.length > 0) {
            var deferredEvent = deferredEventsRef.current.shift();
            actorRef.send(deferredEvent);
        }
    }, [actorRef]);
    return [storeSnapshot, send];
}
