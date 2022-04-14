'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var marked = require('marked');
var pluginutils = require('@rollup/pluginutils');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var marked__default = /*#__PURE__*/_interopDefault(marked);

const ext = /\.md$/;
const md = (options = {}) => {
    const filter = pluginutils.createFilter(options.include || ['**/*.md'], options.exclude);
    if (options.marked) {
        marked__default['default'].setOptions(options.marked);
    }
    return {
        name: 'md',
        transform(md, id) {
            if (!ext.test(id)) {
                return null;
            }
            if (!filter(id)) {
                return null;
            }
            const data = marked__default['default'](md);
            return {
                code: `export default ${JSON.stringify(data.toString())};`,
                map: { mappings: '' },
            };
        },
    };
};

exports.md = md;
//# sourceMappingURL=rollup-plugin-md.cjs.development.js.map
