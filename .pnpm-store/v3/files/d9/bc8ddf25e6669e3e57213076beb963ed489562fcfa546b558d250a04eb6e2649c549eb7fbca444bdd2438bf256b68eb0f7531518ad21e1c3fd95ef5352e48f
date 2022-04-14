"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Configuration_js_1 = require("../Configuration.js");
var Tags_js_1 = require("../Tags.js");
var tagID = 0;
function tagFormatConfig(config, jax) {
    var TagClass = Tags_js_1.TagsFactory.create(jax.parseOptions.options.tags).constructor;
    var Tagformat = (function (_super) {
        __extends(Tagformat, _super);
        function Tagformat() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Tagformat.prototype.formatNumber = function (n) {
            return jax.parseOptions.options.tagFormat.number(n);
        };
        Tagformat.prototype.formatTag = function (tag) {
            return jax.parseOptions.options.tagFormat.tag(tag);
        };
        Tagformat.prototype.formatId = function (id) {
            return jax.parseOptions.options.tagFormat.id(id);
        };
        Tagformat.prototype.formatUrl = function (id, base) {
            return jax.parseOptions.options.tagFormat.url(id, base);
        };
        return Tagformat;
    }(TagClass));
    tagID++;
    var tagName = 'configTags-' + tagID;
    Tags_js_1.TagsFactory.add(tagName, Tagformat);
    jax.parseOptions.options.tags = tagName;
}
exports.tagFormatConfig = tagFormatConfig;
exports.TagformatConfiguration = Configuration_js_1.Configuration.create('tagFormat', {
    config: tagFormatConfig,
    options: {
        tagFormat: {
            number: function (n) { return n.toString(); },
            tag: function (tag) { return '(' + tag + ')'; },
            id: function (id) { return 'mjx-eqn-' + id.replace(/\s/g, '_'); },
            url: function (id, base) { return base + '#' + encodeURIComponent(id); },
        }
    }
});
//# sourceMappingURL=TagFormatConfiguration.js.map