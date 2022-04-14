"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPaddingLineSequences = exports.getActualLastToken = exports.isValidParent = exports.areTokensOnSameLine = exports.isTokenASemicolon = void 0;
const isTokenASemicolon = (token) => token.value === ';' && token.type === 'Punctuator';
exports.isTokenASemicolon = isTokenASemicolon;
const areTokensOnSameLine = (left, right) => left.loc.end.line === right.loc.start.line;
exports.areTokensOnSameLine = areTokensOnSameLine;
const STATEMENT_LIST_PARENTS = new Set([
    'Program',
    'BlockStatement',
    'SwitchCase',
    'SwitchStatement',
]);
const isValidParent = (parentType) => {
    return STATEMENT_LIST_PARENTS.has(parentType);
};
exports.isValidParent = isValidParent;
const getActualLastToken = (sourceCode, node) => {
    const semiToken = sourceCode.getLastToken(node);
    const prevToken = sourceCode.getTokenBefore(semiToken);
    const nextToken = sourceCode.getTokenAfter(semiToken);
    const isSemicolonLessStyle = Boolean(prevToken &&
        nextToken &&
        prevToken.range[0] >= node.range[0] &&
        (0, exports.isTokenASemicolon)(semiToken) &&
        semiToken.loc.start.line !== prevToken.loc.end.line &&
        semiToken.loc.end.line === nextToken.loc.start.line);
    return isSemicolonLessStyle ? prevToken : semiToken;
};
exports.getActualLastToken = getActualLastToken;
const getPaddingLineSequences = (prevNode, nextNode, sourceCode) => {
    const pairs = [];
    const includeComments = true;
    let prevToken = (0, exports.getActualLastToken)(sourceCode, prevNode);
    if (nextNode.loc.start.line - prevToken.loc.end.line >= 2) {
        do {
            const token = sourceCode.getTokenAfter(prevToken, {
                includeComments,
            });
            if (token.loc.start.line - prevToken.loc.end.line >= 2) {
                pairs.push([prevToken, token]);
            }
            prevToken = token;
        } while (prevToken.range[0] < nextNode.range[0]);
    }
    return pairs;
};
exports.getPaddingLineSequences = getPaddingLineSequences;
