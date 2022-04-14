"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Figspec = void 0;
var react_1 = require("react");
var react_2 = require("@figspec/react");
var components_1 = require("@storybook/components");
var theming_1 = require("@storybook/theming");
var Figma_1 = require("./Figma");
var fullscreen = theming_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n"], ["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n"])));
function unwrapJson(res) {
    return res.status !== 200 ? Promise.reject(res.statusText) : res.json();
}
function getAccessToken(cfg) {
    var _a;
    if (cfg.accessToken) {
        return cfg.accessToken;
    }
    try {
        return (_a = process.env.STORYBOOK_FIGMA_ACCESS_TOKEN) !== null && _a !== void 0 ? _a : null;
    }
    catch (err) {
        return null;
    }
}
exports.Figspec = function (_a) {
    var config = _a.config;
    var _b = react_1.useState({
        state: 'loading',
    }), state = _b[0], setState = _b[1];
    var fetchDetails = function (signal) { return __awaiter(void 0, void 0, void 0, function () {
        var match, fileKey, url, nodeId, accessToken, headers, nodeUrl, imageUrl, documentNode, frames_1, images_1, _a, nodes, images, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    setState({ state: 'loading' });
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 6, , 7]);
                    match = config.url.match(Figma_1.figmaURLPattern);
                    if (!match) {
                        throw new Error(config.url + ' is not a valid Figma URL.');
                    }
                    fileKey = match[3];
                    url = new URL(config.url);
                    nodeId = url.searchParams.get('node-id');
                    accessToken = getAccessToken(config);
                    if (!accessToken) {
                        throw new Error('Personal Access Token is required.');
                    }
                    headers = {
                        'X-FIGMA-TOKEN': accessToken,
                    };
                    nodeUrl = new URL("https://api.figma.com/v1/files/" + fileKey);
                    imageUrl = new URL("https://api.figma.com/v1/images/" + fileKey);
                    imageUrl.searchParams.set('format', 'svg');
                    if (!!nodeId) return [3, 4];
                    return [4, fetch(nodeUrl.href, {
                            headers: headers,
                            signal: signal,
                        }).then(unwrapJson)];
                case 2:
                    documentNode = _b.sent();
                    frames_1 = listAllFrames(documentNode.document);
                    imageUrl.searchParams.set('ids', frames_1.map(function (frame) { return frame.id; }).join(','));
                    return [4, fetch(imageUrl.href, {
                            headers: headers,
                            signal: signal,
                        }).then(unwrapJson)];
                case 3:
                    images_1 = _b.sent();
                    setState({
                        state: 'fetched',
                        value: {
                            type: 'file',
                            props: {
                                documentNode: documentNode,
                                renderedImages: images_1.images,
                                link: config.url
                            },
                        },
                    });
                    return [2];
                case 4:
                    nodeUrl.pathname += '/nodes';
                    nodeUrl.searchParams.set('ids', nodeId);
                    imageUrl.searchParams.set('ids', nodeId);
                    return [4, Promise.all([
                            fetch(nodeUrl.href, {
                                headers: headers,
                                signal: signal,
                            }).then(unwrapJson),
                            fetch(imageUrl.href, { headers: headers, signal: signal }).then(unwrapJson),
                        ])];
                case 5:
                    _a = _b.sent(), nodes = _a[0], images = _a[1];
                    setState({
                        state: 'fetched',
                        value: {
                            type: 'frame',
                            props: {
                                nodes: nodes,
                                renderedImage: Object.values(images.images)[0],
                                link: config.url
                            },
                        },
                    });
                    return [3, 7];
                case 6:
                    err_1 = _b.sent();
                    if (err_1 instanceof DOMException && err_1.code === DOMException.ABORT_ERR) {
                        return [2];
                    }
                    console.error(err_1);
                    setState({
                        state: 'failed',
                        error: err_1 instanceof Error ? err_1.message : String(err_1),
                    });
                    return [3, 7];
                case 7: return [2];
            }
        });
    }); };
    react_1.useEffect(function () {
        var fulfilled = false;
        var fulfil = function () {
            fulfilled = true;
        };
        var ac = new AbortController();
        fetchDetails(ac.signal).then(fulfil, fulfil);
        return function () {
            if (!fulfilled) {
                ac.abort();
            }
        };
    }, [config.url]);
    switch (state.state) {
        case 'loading':
            return (theming_1.jsx(components_1.Placeholder, null,
                theming_1.jsx(react_1.Fragment, null, "Loading Figma file...")));
        case 'failed':
            return (theming_1.jsx(components_1.Placeholder, null,
                theming_1.jsx(react_1.Fragment, null, "Failed to load Figma file"),
                theming_1.jsx(react_1.Fragment, null, state.error)));
        case 'fetched':
            return state.value.type === 'file' ? (theming_1.jsx(react_2.FigspecFileViewer, __assign({ css: fullscreen }, state.value.props))) : (theming_1.jsx(react_2.FigspecFrameViewer, __assign({ css: fullscreen }, state.value.props)));
    }
};
exports.default = exports.Figspec;
function listAllFrames(node) {
    if ('absoluteBoundingBox' in node) {
        return [node];
    }
    if (!node.children || node.children.length === 0) {
        return [];
    }
    return node.children.map(listAllFrames).flat();
}
var templateObject_1;
