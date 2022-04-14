!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react"),require("xstate")):"function"==typeof define&&define.amd?define(["exports","react","xstate"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).XStateReact={},t.React,t.XState)}(this,(function(t,e,n){"use strict";function r(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}function u(t){if(t&&t.__esModule)return t;var e=Object.create(null);return t&&Object.keys(t).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})}})),e.default=t,Object.freeze(e)}var a=r(e),o=u(e),i=function(){return(i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var u in e=arguments[n])Object.prototype.hasOwnProperty.call(e,u)&&(t[u]=e[u]);return t}).apply(this,arguments)};function c(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,u,a=n.call(t),o=[];try{for(;(void 0===e||e-- >0)&&!(r=a.next()).done;)o.push(r.value)}catch(t){u={error:t}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(u)throw u.error}}return o}function s(t){var e={exports:{}};return t(e,e.exports),e.exports
/**
     * @license React
     * use-sync-external-store-shim.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */}var f="function"==typeof Object.is?Object.is:function(t,e){return t===e&&(0!==t||1/t==1/e)||t!=t&&e!=e},l=a.default.useState,v=a.default.useEffect,d=a.default.useLayoutEffect,p=a.default.useDebugValue;function b(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!f(t,n)}catch(t){return!0}}var y="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(t,e){return e()}:function(t,e){var n=e(),r=l({inst:{value:n,getSnapshot:e}}),u=r[0].inst,a=r[1];return d((function(){u.value=n,u.getSnapshot=e,b(u)&&a({inst:u})}),[t,n,e]),v((function(){return b(u)&&a({inst:u}),t((function(){b(u)&&a({inst:u})}))}),[t]),p(n),n},h={useSyncExternalStore:void 0!==a.default.useSyncExternalStore?a.default.useSyncExternalStore:y};
/**
     * @license React
     * use-sync-external-store-shim.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
s((function(t,e){}));var S=s((function(t){t.exports=h}));
/**
     * @license React
     * use-sync-external-store-shim/with-selector.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */var g="function"==typeof Object.is?Object.is:function(t,e){return t===e&&(0!==t||1/t==1/e)||t!=t&&e!=e},O=S.useSyncExternalStore,x=a.default.useRef,j=a.default.useEffect,m=a.default.useMemo,E=a.default.useDebugValue,w={useSyncExternalStoreWithSelector:function(t,e,n,r,u){var a=x(null);if(null===a.current){var o={hasValue:!1,value:null};a.current=o}else o=a.current;a=m((function(){function t(t){if(!c){if(c=!0,a=t,t=r(t),void 0!==u&&o.hasValue){var e=o.value;if(u(e,t))return i=e}return i=t}if(e=i,g(a,t))return e;var n=r(t);return void 0!==u&&u(e,n)?e:(a=t,i=n)}var a,i,c=!1,s=void 0===n?null:n;return[function(){return t(e())},null===s?void 0:function(){return t(s())}]}),[e,n,r,u]);var i=O(t,a[0],a[1]);return j((function(){o.hasValue=!0,o.value=i}),[i]),E(i),i}};
/**
     * @license React
     * use-sync-external-store-shim/with-selector.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
s((function(t,e){}));var k=s((function(t){t.exports=w})),C=e.useLayoutEffect;function P(t){var e=o.useRef();return e.current||(e.current={v:t()}),e.current.v}function I(t,e){var r=P((function(){return"function"==typeof t?t():t})),u=e.context,a=e.guards,o=e.actions,c=e.activities,s=e.services,f=e.delays;e.state;var l=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var u=0;for(r=Object.getOwnPropertySymbols(t);u<r.length;u++)e.indexOf(r[u])<0&&Object.prototype.propertyIsEnumerable.call(t,r[u])&&(n[r[u]]=t[r[u]])}return n}(e,["context","guards","actions","activities","services","delays","state"]),v=P((function(){var t={context:u,guards:a,actions:o,activities:c,services:s,delays:f},e=r.withConfig(t,(function(){return i(i({},r.context),u)}));return n.interpret(e,l)}));return C((function(){Object.assign(v.machine.options.actions,o),Object.assign(v.machine.options.guards,a),Object.assign(v.machine.options.activities,c),Object.assign(v.machine.options.services,s),Object.assign(v.machine.options.delays,f)}),[o,a,c,s,f]),v}function R(t){return t}function V(t){return"state"in t}function M(t){return"deferred"in t}function N(t){return"getSnapshot"in t?t.getSnapshot():V(t)?t.state:void 0}var _=function(t,e){return t===e},D=function(t){return"state"in(n=t)&&"machine"in n?0!==(e=t).status?e.state:e.machine.initialState:V(t)?t.state:void 0;var e,n};t.useActor=function(t,n){void 0===n&&(n=N);var r=e.useRef(t),u=e.useRef([]),a=e.useCallback((function(e){return t.subscribe(e).unsubscribe}),[t]),o=e.useCallback((function(){return n(t)}),[t,n]),i=S.useSyncExternalStore(a,o,o),c=P((function(){return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=t[0],a=r.current;M(a)&&a.deferred?u.current.push(n):a.send(n)}}));return C((function(){for(r.current=t;u.current.length>0;){var e=u.current.shift();t.send(e)}}),[t]),[i,c]},t.useInterpret=function(t){for(var r=[],u=1;u<arguments.length;u++)r[u-1]=arguments[u];var a=c(r,2),o=a[0],i=void 0===o?{}:o,s=a[1],f=I(t,i);return e.useEffect((function(){if(s){var t=f.subscribe(n.toObserver(s));return function(){t.unsubscribe()}}}),[s]),e.useEffect((function(){var t=i.state;return f.start(t?n.State.create(t):void 0),function(){f.stop(),f.status=n.InterpreterStatus.NotStarted}}),[]),f},t.useMachine=function(t){for(var r=[],u=1;u<arguments.length;u++)r[u-1]=arguments[u];var a=c(r,1),o=a[0],i=void 0===o?{}:o,s=I(t,i),f=e.useCallback((function(){return s.status===n.InterpreterStatus.NotStarted?i.state?n.State.create(i.state):s.machine.initialState:s.state}),[s]),l=e.useCallback((function(t,e){if(s.status===n.InterpreterStatus.NotStarted)return!0;var r=void 0===e.changed&&(Object.keys(e.children).length>0||"boolean"==typeof t.changed);return!(e.changed||r)}),[s]),v=e.useCallback((function(t){return s.subscribe(t).unsubscribe}),[s]),d=k.useSyncExternalStoreWithSelector(v,f,f,R,l);return e.useEffect((function(){var t=i.state;return s.start(t?n.State.create(t):void 0),function(){s.stop(),s.status=n.InterpreterStatus.NotStarted}}),[]),[d,s.send,s]},t.useSelector=function(t,n,r,u){void 0===r&&(r=_),void 0===u&&(u=D);var a=e.useCallback((function(e){return t.subscribe(e).unsubscribe}),[t]),o=e.useCallback((function(){return u(t)}),[t,u]);return k.useSyncExternalStoreWithSelector(a,o,o,n,r)},t.useSpawn=function(t){return P((function(){return n.spawnBehavior(t)}))},Object.defineProperty(t,"__esModule",{value:!0})}));
