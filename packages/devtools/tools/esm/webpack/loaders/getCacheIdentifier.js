export const getCacheIdentifier = ({ isDevelopment, moduleFormat, isNode, }) => {
    return [isDevelopment ? 'development' : 'production', isNode ? 'node' : 'web', moduleFormat].join('-');
};
//# sourceMappingURL=getCacheIdentifier.js.map