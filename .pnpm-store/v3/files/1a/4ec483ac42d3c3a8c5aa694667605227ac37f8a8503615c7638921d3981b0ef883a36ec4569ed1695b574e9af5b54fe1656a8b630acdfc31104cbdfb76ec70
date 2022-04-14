"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useActor = exports.isActorWithState = void 0;
var react_1 = require("react");
var use_isomorphic_layout_effect_1 = require("use-isomorphic-layout-effect");
var useConstant_1 = require("./useConstant");
var shim_1 = require("use-sync-external-store/shim");
function isActorWithState(actorRef) {
    return 'state' in actorRef;
}
exports.isActorWithState = isActorWithState;
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
function useActor(actorRef, getSnapshot) {
    if (getSnapshot === void 0) { getSnapshot = defaultGetSnapshot; }
    var actorRefRef = (0, react_1.useRef)(actorRef);
    var deferredEventsRef = (0, react_1.useRef)([]);
    var subscribe = (0, react_1.useCallback)(function (handleStoreChange) {
        var unsubscribe = actorRef.subscribe(handleStoreChange).unsubscribe;
        return unsubscribe;
    }, [actorRef]);
    var boundGetSnapshot = (0, react_1.useCallback)(function () { return getSnapshot(actorRef); }, [
        actorRef,
        getSnapshot
    ]);
    var storeSnapshot = (0, shim_1.useSyncExternalStore)(subscribe, boundGetSnapshot, boundGetSnapshot);
    var send = (0, useConstant_1.default)(function () { return function () {
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
    (0, use_isomorphic_layout_effect_1.default)(function () {
        actorRefRef.current = actorRef;
        // Dequeue deferred events from the previous deferred actorRef
        while (deferredEventsRef.current.length > 0) {
            var deferredEvent = deferredEventsRef.current.shift();
            actorRef.send(deferredEvent);
        }
    }, [actorRef]);
    return [storeSnapshot, send];
}
exports.useActor = useActor;
