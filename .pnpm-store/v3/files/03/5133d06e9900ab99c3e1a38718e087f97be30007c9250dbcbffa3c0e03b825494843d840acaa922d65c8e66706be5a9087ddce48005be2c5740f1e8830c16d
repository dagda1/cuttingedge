"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.best = exports.mapToRecord = exports.recordToMap = exports.sortObjectKeys = exports.unique = exports.flatMap = exports.isArray = exports.append = exports.addRange = exports.split = exports.join = exports.sort = exports.flatMapIterable = exports.mapIterable = exports.mapDefinedAsync = exports.mapDefined = exports.mapValues = exports.initArray = void 0;
function initArray(length, makeElement) {
    const arr = new Array(length);
    for (let i = 0; i < length; i++) {
        arr[i] = makeElement(i);
    }
    return arr;
}
exports.initArray = initArray;
function mapValues(map, valueMapper) {
    const out = new Map();
    map.forEach((value, key) => {
        out.set(key, valueMapper(value));
    });
    return out;
}
exports.mapValues = mapValues;
function mapDefined(arr, mapper) {
    const out = [];
    for (const a of arr) {
        const res = mapper(a);
        if (res !== undefined) {
            out.push(res);
        }
    }
    return out;
}
exports.mapDefined = mapDefined;
async function mapDefinedAsync(arr, mapper) {
    const out = [];
    for (const a of arr) {
        const res = await mapper(a);
        if (res !== undefined) {
            out.push(res);
        }
    }
    return out;
}
exports.mapDefinedAsync = mapDefinedAsync;
function* mapIterable(inputs, mapper) {
    for (const input of inputs) {
        yield mapper(input);
    }
}
exports.mapIterable = mapIterable;
function* flatMapIterable(inputs, mapper) {
    for (const input of inputs) {
        yield* mapper(input);
    }
}
exports.flatMapIterable = flatMapIterable;
function sort(values, comparer) {
    return Array.from(values).sort(comparer);
}
exports.sort = sort;
function join(values, joiner = ", ") {
    let s = "";
    for (const v of values) {
        s += `${v}${joiner}`;
    }
    return s.slice(0, s.length - joiner.length);
}
exports.join = join;
/** Returns [values that cb returned undefined for, defined results of cb]. */
function split(inputs, cb) {
    const keep = [];
    const splitOut = [];
    for (const input of inputs) {
        const res = cb(input);
        if (res === undefined) {
            keep.push(input);
        }
        else {
            splitOut.push(res);
        }
    }
    return [keep, splitOut];
}
exports.split = split;
/**
 * Gets the actual offset into an array for a relative offset. Negative offsets indicate a
 * position offset from the end of the array.
 */
function toOffset(array, offset) {
    return offset < 0 ? array.length + offset : offset;
}
function addRange(to, from, start, end) {
    if (from === undefined || from.length === 0)
        return to;
    if (to === undefined)
        return from.slice(start, end);
    start = start === undefined ? 0 : toOffset(from, start);
    end = end === undefined ? from.length : toOffset(from, end);
    for (let i = start; i < end && i < from.length; i++) {
        if (from[i] !== undefined) {
            to.push(from[i]);
        }
    }
    return to;
}
exports.addRange = addRange;
function append(to, value) {
    if (value === undefined)
        return to;
    if (to === undefined)
        return [value];
    to.push(value);
    return to;
}
exports.append = append;
/**
 * Tests whether a value is an array.
 */
function isArray(value) {
    return Array.isArray ? Array.isArray(value) : value instanceof Array;
}
exports.isArray = isArray;
/**
 * Maps an array. If the mapped value is an array, it is spread into the result.
 *
 * @param array The array to map.
 * @param mapfn The callback used to map the result into one or more values.
 */
function flatMap(array, mapfn) {
    let result;
    if (array) {
        for (let i = 0; i < array.length; i++) {
            const v = mapfn(array[i], i);
            if (v) {
                if (isArray(v)) {
                    result = addRange(result, v);
                }
                else {
                    result = append(result, v);
                }
            }
        }
    }
    return result || [];
}
exports.flatMap = flatMap;
function unique(arr) {
    return [...new Set(arr)];
}
exports.unique = unique;
function sortObjectKeys(data) {
    const out = {};
    for (const key of Object.keys(data).sort()) {
        out[key] = data[key];
    }
    return out;
}
exports.sortObjectKeys = sortObjectKeys;
function recordToMap(record, cb) {
    const m = new Map();
    for (const key of Object.keys(record)) {
        m.set(key, cb ? cb(record[key]) : record[key]);
    }
    return m;
}
exports.recordToMap = recordToMap;
function mapToRecord(map, cb) {
    const o = {};
    map.forEach((value, key) => {
        o[key] = cb ? cb(value) : value;
    });
    return o;
}
exports.mapToRecord = mapToRecord;
/**
 * Returns the input that is better than all others, or `undefined` if there are no inputs.
 * @param isBetter Returns true if `a` should be preferred over `b`.
 */
function best(inputs, isBetter) {
    const iter = inputs[Symbol.iterator]();
    const first = iter.next();
    if (first.done) {
        return undefined;
    }
    let res = first.value;
    while (true) {
        const { value, done } = iter.next();
        if (done) {
            break;
        }
        if (isBetter(value, res)) {
            res = value;
        }
    }
    return res;
}
exports.best = best;
//# sourceMappingURL=collections.js.map