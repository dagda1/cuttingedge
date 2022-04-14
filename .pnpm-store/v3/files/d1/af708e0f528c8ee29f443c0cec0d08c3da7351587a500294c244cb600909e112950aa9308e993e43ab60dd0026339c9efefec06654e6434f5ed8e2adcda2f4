"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logUncaughtErrors = exports.filterNAtATimeOrdered = exports.filter = exports.nAtATime = void 0;
const progress_1 = require("./progress");
const collections_1 = require("./collections");
async function nAtATime(n, inputs, use, progressOptions) {
    const progress = progressOptions ? new progress_1.ProgressBar({ name: progressOptions.name }) : undefined;
    const results = new Array(inputs.length);
    // We have n "threads" which each run `continuouslyWork`.
    // They all share `nextIndex`, so each work item is done only once.
    let nextIndex = 0;
    await Promise.all((0, collections_1.initArray)(n, async () => {
        while (nextIndex !== inputs.length) {
            const index = nextIndex;
            nextIndex++;
            const input = inputs[index];
            const output = await use(input);
            results[index] = output;
            if (progress) {
                progress.update(index / inputs.length, progressOptions.flavor(input, output));
            }
        }
    }));
    if (progress) {
        progress.done();
    }
    return results;
}
exports.nAtATime = nAtATime;
function filter(iterable, predicate) {
    const iter = iterable[Symbol.iterator]();
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            while (true) {
                const res = iter.next();
                if (res.done || predicate(res.value)) {
                    return res;
                }
            }
        }
    };
}
exports.filter = filter;
async function filterNAtATimeOrdered(n, inputs, shouldKeep, progress) {
    const shouldKeeps = await nAtATime(n, inputs, shouldKeep, progress);
    return inputs.filter((_, idx) => shouldKeeps[idx]);
}
exports.filterNAtATimeOrdered = filterNAtATimeOrdered;
function logUncaughtErrors(promise) {
    return (typeof promise === "function" ? promise() : promise).catch(error => {
        if (error && error.stack) {
            console.error(error.stack);
        }
        else {
            console.error(error);
        }
        process.exit(1);
    });
}
exports.logUncaughtErrors = logUncaughtErrors;
//# sourceMappingURL=async.js.map