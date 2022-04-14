var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import { useCallback, useEffect } from 'react';
import { useSyncExternalStoreWithSelector } from 'use-sync-external-store/shim/with-selector';
import { InterpreterStatus, State } from 'xstate';
import { useIdleInterpreter } from './useInterpret';
function identity(a) {
    return a;
}
export function useMachine(getMachine) {
    var _a = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        _a[_i - 1] = arguments[_i];
    }
    var _b = __read(_a, 1), _c = _b[0], options = _c === void 0 ? {} : _c;
    // using `useIdleInterpreter` allows us to subscribe to the service *before* we start it
    // so we don't miss any notifications
    var service = useIdleInterpreter(getMachine, options);
    var getSnapshot = useCallback(function () {
        if (service.status === InterpreterStatus.NotStarted) {
            return (options.state
                ? State.create(options.state)
                : service.machine.initialState);
        }
        return service.state;
    }, [service]);
    var isEqual = useCallback(function (prevState, nextState) {
        if (service.status === InterpreterStatus.NotStarted) {
            return true;
        }
        // Only change the current state if:
        // - the incoming state is the "live" initial state (since it might have new actors)
        // - OR the incoming state actually changed.
        //
        // The "live" initial state will have .changed === undefined.
        var initialStateChanged = nextState.changed === undefined &&
            (Object.keys(nextState.children).length > 0 ||
                typeof prevState.changed === 'boolean');
        return !(nextState.changed || initialStateChanged);
    }, [service]);
    var subscribe = useCallback(function (handleStoreChange) {
        var unsubscribe = service.subscribe(handleStoreChange).unsubscribe;
        return unsubscribe;
    }, [service]);
    var storeSnapshot = useSyncExternalStoreWithSelector(subscribe, getSnapshot, getSnapshot, identity, isEqual);
    useEffect(function () {
        var rehydratedState = options.state;
        service.start(rehydratedState ? State.create(rehydratedState) : undefined);
        return function () {
            service.stop();
            service.status = InterpreterStatus.NotStarted;
        };
    }, []);
    return [storeSnapshot, service.send, service];
}
