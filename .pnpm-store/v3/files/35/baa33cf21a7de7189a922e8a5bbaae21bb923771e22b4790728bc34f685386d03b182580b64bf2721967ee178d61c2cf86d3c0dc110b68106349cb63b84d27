"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aggregateFilesChanges = exports.clearFilesChange = exports.updateFilesChange = exports.consumeFilesChange = exports.getFilesChange = void 0;
const compilerFilesChangeMap = new WeakMap();
function getFilesChange(compiler) {
    return compilerFilesChangeMap.get(compiler) || { changedFiles: [], deletedFiles: [] };
}
exports.getFilesChange = getFilesChange;
function consumeFilesChange(compiler) {
    const change = getFilesChange(compiler);
    clearFilesChange(compiler);
    return change;
}
exports.consumeFilesChange = consumeFilesChange;
function updateFilesChange(compiler, change) {
    compilerFilesChangeMap.set(compiler, aggregateFilesChanges([getFilesChange(compiler), change]));
}
exports.updateFilesChange = updateFilesChange;
function clearFilesChange(compiler) {
    compilerFilesChangeMap.delete(compiler);
}
exports.clearFilesChange = clearFilesChange;
/**
 * Computes aggregated files change based on the subsequent files changes.
 *
 * @param changes List of subsequent files changes
 * @returns Files change that represents all subsequent changes as a one event
 */
function aggregateFilesChanges(changes) {
    const changedFilesSet = new Set();
    const deletedFilesSet = new Set();
    for (const { changedFiles = [], deletedFiles = [] } of changes) {
        for (const changedFile of changedFiles) {
            changedFilesSet.add(changedFile);
            deletedFilesSet.delete(changedFile);
        }
        for (const deletedFile of deletedFiles) {
            changedFilesSet.delete(deletedFile);
            deletedFilesSet.add(deletedFile);
        }
    }
    return {
        changedFiles: Array.from(changedFilesSet),
        deletedFiles: Array.from(deletedFilesSet),
    };
}
exports.aggregateFilesChanges = aggregateFilesChanges;
