"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isIterable = isIterable;
exports.isRecord = isRecord;
exports.isImmutable = isImmutable;
exports.isList = isList;
exports.isMap = isMap;
exports.shallowToJS = shallowToJS;
exports.IMMUTABLE_MAP = exports.IMMUTABLE_LIST = exports.IMMUTABLE_RECORD = exports.IMMUTABLE_ITERABLE = void 0;

/* eslint-disable func-style */
var IMMUTABLE_ITERABLE = "@@__IMMUTABLE_ITERABLE__@@";
exports.IMMUTABLE_ITERABLE = IMMUTABLE_ITERABLE;
var IMMUTABLE_RECORD = "@@__IMMUTABLE_RECORD__@@";
exports.IMMUTABLE_RECORD = IMMUTABLE_RECORD;
var IMMUTABLE_LIST = "@@__IMMUTABLE_LIST__@@";
exports.IMMUTABLE_LIST = IMMUTABLE_LIST;
var IMMUTABLE_MAP = "@@__IMMUTABLE_MAP__@@";
exports.IMMUTABLE_MAP = IMMUTABLE_MAP;

function isIterable(x) {
  return !!(x && x[IMMUTABLE_ITERABLE]);
}

function isRecord(x) {
  return !!(x && x[IMMUTABLE_RECORD]);
}

function isImmutable(x) {
  return isIterable(x) || isRecord(x);
}

function isList(x) {
  return !!(x && x[IMMUTABLE_LIST]);
}

function isMap(x) {
  return !!(x && x[IMMUTABLE_MAP]);
}

function shallowToJS(x, whitelist) {
  return isIterable(x) ? x.reduce(function (prev, curr, key) {
    if (whitelist && whitelist[key]) {
      curr = shallowToJS(curr);
    }

    prev[key] = curr;
    return prev;
  }, isList(x) ? [] : {}) : x;
}