(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.MockServiceWorker = {}));
})(this, (function (exports) { 'use strict';

  var statuses = {
  	"100": "Continue",
  	"101": "Switching Protocols",
  	"102": "Processing",
  	"103": "Early Hints",
  	"200": "OK",
  	"201": "Created",
  	"202": "Accepted",
  	"203": "Non-Authoritative Information",
  	"204": "No Content",
  	"205": "Reset Content",
  	"206": "Partial Content",
  	"207": "Multi-Status",
  	"208": "Already Reported",
  	"226": "IM Used",
  	"300": "Multiple Choices",
  	"301": "Moved Permanently",
  	"302": "Found",
  	"303": "See Other",
  	"304": "Not Modified",
  	"305": "Use Proxy",
  	"307": "Temporary Redirect",
  	"308": "Permanent Redirect",
  	"400": "Bad Request",
  	"401": "Unauthorized",
  	"402": "Payment Required",
  	"403": "Forbidden",
  	"404": "Not Found",
  	"405": "Method Not Allowed",
  	"406": "Not Acceptable",
  	"407": "Proxy Authentication Required",
  	"408": "Request Timeout",
  	"409": "Conflict",
  	"410": "Gone",
  	"411": "Length Required",
  	"412": "Precondition Failed",
  	"413": "Payload Too Large",
  	"414": "URI Too Long",
  	"415": "Unsupported Media Type",
  	"416": "Range Not Satisfiable",
  	"417": "Expectation Failed",
  	"418": "I'm a Teapot",
  	"421": "Misdirected Request",
  	"422": "Unprocessable Entity",
  	"423": "Locked",
  	"424": "Failed Dependency",
  	"425": "Too Early",
  	"426": "Upgrade Required",
  	"428": "Precondition Required",
  	"429": "Too Many Requests",
  	"431": "Request Header Fields Too Large",
  	"451": "Unavailable For Legal Reasons",
  	"500": "Internal Server Error",
  	"501": "Not Implemented",
  	"502": "Bad Gateway",
  	"503": "Service Unavailable",
  	"504": "Gateway Timeout",
  	"505": "HTTP Version Not Supported",
  	"506": "Variant Also Negotiates",
  	"507": "Insufficient Storage",
  	"508": "Loop Detected",
  	"509": "Bandwidth Limit Exceeded",
  	"510": "Not Extended",
  	"511": "Network Authentication Required"
  };

  /**
   * Sets a response status code and text.
   * @example
   * res(ctx.status(301))
   * res(ctx.status(400, 'Custom status text'))
   * @see {@link https://mswjs.io/docs/api/context/status `ctx.status()`}
   */
  const status = (statusCode, statusText) => {
      return (res) => {
          res.status = statusCode;
          res.statusText =
              statusText || statuses[String(statusCode)];
          return res;
      };
  };

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  var lib$7 = {};

  var Headers = {};

  var normalizeHeaderName$1 = {};

  Object.defineProperty(normalizeHeaderName$1, "__esModule", { value: true });
  normalizeHeaderName$1.normalizeHeaderName = void 0;
  var HEADERS_INVALID_CHARACTERS = /[^a-z0-9\-#$%&'*+.^_`|~]/i;
  function normalizeHeaderName(name) {
      if (typeof name !== 'string') {
          name = String(name);
      }
      if (HEADERS_INVALID_CHARACTERS.test(name) || name.trim() === '') {
          throw new TypeError('Invalid character in header field name');
      }
      return name.toLowerCase();
  }
  normalizeHeaderName$1.normalizeHeaderName = normalizeHeaderName;

  var normalizeHeaderValue$1 = {};

  Object.defineProperty(normalizeHeaderValue$1, "__esModule", { value: true });
  normalizeHeaderValue$1.normalizeHeaderValue = void 0;
  function normalizeHeaderValue(value) {
      if (typeof value !== 'string') {
          value = String(value);
      }
      return value;
  }
  normalizeHeaderValue$1.normalizeHeaderValue = normalizeHeaderValue;

  var __generator$3 = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
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
  var __read$5 = (commonjsGlobal && commonjsGlobal.__read) || function (o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o), r, ar = [], e;
      try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      }
      catch (error) { e = { error: error }; }
      finally {
          try {
              if (r && !r.done && (m = i["return"])) m.call(i);
          }
          finally { if (e) throw e.error; }
      }
      return ar;
  };
  var __values$1 = (commonjsGlobal && commonjsGlobal.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  Object.defineProperty(Headers, "__esModule", { value: true });
  var normalizeHeaderName_1 = normalizeHeaderName$1;
  var normalizeHeaderValue_1 = normalizeHeaderValue$1;
  var HeadersPolyfill = /** @class */ (function () {
      function HeadersPolyfill(init) {
          var _this = this;
          // Normalized header {"name":"a, b"} storage.
          this._headers = {};
          // Keeps the mapping between the raw header name
          // and the normalized header name to ease the lookup.
          this._names = new Map();
          /**
           * @note Cannot check if the `init` is an instance of the `Headers`
           * because that class is only defined in the browser.
           */
          if (['Headers', 'HeadersPolyfill'].includes(init === null || init === void 0 ? void 0 : init.constructor.name) ||
              init instanceof HeadersPolyfill) {
              var initialHeaders = init;
              initialHeaders.forEach(function (value, name) {
                  _this.append(name, value);
              }, this);
          }
          else if (Array.isArray(init)) {
              init.forEach(function (_a) {
                  var _b = __read$5(_a, 2), name = _b[0], value = _b[1];
                  _this.append(name, Array.isArray(value) ? value.join(', ') : value);
              });
          }
          else if (init) {
              Object.getOwnPropertyNames(init).forEach(function (name) {
                  var value = init[name];
                  _this.append(name, Array.isArray(value) ? value.join(', ') : value);
              });
          }
      }
      HeadersPolyfill.prototype[Symbol.iterator] = function () {
          return this.entries();
      };
      HeadersPolyfill.prototype.keys = function () {
          var _a, _b, name_1, e_1_1;
          var e_1, _c;
          return __generator$3(this, function (_d) {
              switch (_d.label) {
                  case 0:
                      _d.trys.push([0, 5, 6, 7]);
                      _a = __values$1(Object.keys(this._headers)), _b = _a.next();
                      _d.label = 1;
                  case 1:
                      if (!!_b.done) return [3 /*break*/, 4];
                      name_1 = _b.value;
                      return [4 /*yield*/, name_1];
                  case 2:
                      _d.sent();
                      _d.label = 3;
                  case 3:
                      _b = _a.next();
                      return [3 /*break*/, 1];
                  case 4: return [3 /*break*/, 7];
                  case 5:
                      e_1_1 = _d.sent();
                      e_1 = { error: e_1_1 };
                      return [3 /*break*/, 7];
                  case 6:
                      try {
                          if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                      }
                      finally { if (e_1) throw e_1.error; }
                      return [7 /*endfinally*/];
                  case 7: return [2 /*return*/];
              }
          });
      };
      HeadersPolyfill.prototype.values = function () {
          var _a, _b, value, e_2_1;
          var e_2, _c;
          return __generator$3(this, function (_d) {
              switch (_d.label) {
                  case 0:
                      _d.trys.push([0, 5, 6, 7]);
                      _a = __values$1(Object.values(this._headers)), _b = _a.next();
                      _d.label = 1;
                  case 1:
                      if (!!_b.done) return [3 /*break*/, 4];
                      value = _b.value;
                      return [4 /*yield*/, value];
                  case 2:
                      _d.sent();
                      _d.label = 3;
                  case 3:
                      _b = _a.next();
                      return [3 /*break*/, 1];
                  case 4: return [3 /*break*/, 7];
                  case 5:
                      e_2_1 = _d.sent();
                      e_2 = { error: e_2_1 };
                      return [3 /*break*/, 7];
                  case 6:
                      try {
                          if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                      }
                      finally { if (e_2) throw e_2.error; }
                      return [7 /*endfinally*/];
                  case 7: return [2 /*return*/];
              }
          });
      };
      HeadersPolyfill.prototype.entries = function () {
          var _a, _b, name_2, e_3_1;
          var e_3, _c;
          return __generator$3(this, function (_d) {
              switch (_d.label) {
                  case 0:
                      _d.trys.push([0, 5, 6, 7]);
                      _a = __values$1(Object.keys(this._headers)), _b = _a.next();
                      _d.label = 1;
                  case 1:
                      if (!!_b.done) return [3 /*break*/, 4];
                      name_2 = _b.value;
                      return [4 /*yield*/, [name_2, this.get(name_2)]];
                  case 2:
                      _d.sent();
                      _d.label = 3;
                  case 3:
                      _b = _a.next();
                      return [3 /*break*/, 1];
                  case 4: return [3 /*break*/, 7];
                  case 5:
                      e_3_1 = _d.sent();
                      e_3 = { error: e_3_1 };
                      return [3 /*break*/, 7];
                  case 6:
                      try {
                          if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                      }
                      finally { if (e_3) throw e_3.error; }
                      return [7 /*endfinally*/];
                  case 7: return [2 /*return*/];
              }
          });
      };
      /**
       * Returns a `ByteString` sequence of all the values of a header with a given name.
       */
      HeadersPolyfill.prototype.get = function (name) {
          return this._headers[normalizeHeaderName_1.normalizeHeaderName(name)] || null;
      };
      /**
       * Sets a new value for an existing header inside a `Headers` object, or adds the header if it does not already exist.
       */
      HeadersPolyfill.prototype.set = function (name, value) {
          var normalizedName = normalizeHeaderName_1.normalizeHeaderName(name);
          this._headers[normalizedName] = normalizeHeaderValue_1.normalizeHeaderValue(value);
          this._names.set(normalizedName, name);
      };
      /**
       * Appends a new value onto an existing header inside a `Headers` object, or adds the header if it does not already exist.
       */
      HeadersPolyfill.prototype.append = function (name, value) {
          var resolvedValue = this.has(name) ? this.get(name) + ", " + value : value;
          this.set(name, resolvedValue);
      };
      /**
       * Deletes a header from the `Headers` object.
       */
      HeadersPolyfill.prototype.delete = function (name) {
          if (!this.has(name)) {
              return this;
          }
          var normalizedName = normalizeHeaderName_1.normalizeHeaderName(name);
          delete this._headers[normalizedName];
          this._names.delete(normalizedName);
          return this;
      };
      /**
       * Returns the object of all the normalized headers.
       */
      HeadersPolyfill.prototype.all = function () {
          return this._headers;
      };
      /**
       * Returns the object of all the raw headers.
       */
      HeadersPolyfill.prototype.raw = function () {
          var _this = this;
          return Object.entries(this._headers).reduce(function (headers, _a) {
              var _b = __read$5(_a, 2), name = _b[0], value = _b[1];
              headers[_this._names.get(name)] = value;
              return headers;
          }, {});
      };
      /**
       * Returns a boolean stating whether a `Headers` object contains a certain header.
       */
      HeadersPolyfill.prototype.has = function (name) {
          return this._headers.hasOwnProperty(normalizeHeaderName_1.normalizeHeaderName(name));
      };
      /**
       * Traverses the `Headers` object,
       * calling the given callback for each header.
       */
      HeadersPolyfill.prototype.forEach = function (callback, thisArg) {
          for (var name_3 in this._headers) {
              if (this._headers.hasOwnProperty(name_3)) {
                  callback.call(thisArg, this._headers[name_3], name_3, this);
              }
          }
      };
      return HeadersPolyfill;
  }());
  Headers.default = HeadersPolyfill;

  var headersToString$1 = {};

  var headersToList$1 = {};

  Object.defineProperty(headersToList$1, "__esModule", { value: true });
  headersToList$1.headersToList = void 0;
  function headersToList(headers) {
      var headersList = [];
      headers.forEach(function (value, name) {
          var resolvedValue = value.includes(',')
              ? value.split(',').map(function (value) { return value.trim(); })
              : value;
          headersList.push([name, resolvedValue]);
      });
      return headersList;
  }
  headersToList$1.headersToList = headersToList;

  var __read$4 = (commonjsGlobal && commonjsGlobal.__read) || function (o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o), r, ar = [], e;
      try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      }
      catch (error) { e = { error: error }; }
      finally {
          try {
              if (r && !r.done && (m = i["return"])) m.call(i);
          }
          finally { if (e) throw e.error; }
      }
      return ar;
  };
  Object.defineProperty(headersToString$1, "__esModule", { value: true });
  headersToString$1.headersToString = void 0;
  var headersToList_1 = headersToList$1;
  /**
   * Converts a given `Headers` instance to its string representation.
   */
  function headersToString(headers) {
      var list = headersToList_1.headersToList(headers);
      var lines = list.map(function (_a) {
          var _b = __read$4(_a, 2), name = _b[0], value = _b[1];
          var values = [].concat(value);
          return name + ": " + values.join(', ');
      });
      return lines.join('\r\n');
  }
  headersToString$1.headersToString = headersToString;

  var headersToObject$1 = {};

  Object.defineProperty(headersToObject$1, "__esModule", { value: true });
  headersToObject$1.headersToObject = void 0;
  // List of headers that cannot have multiple values,
  // while potentially having a comma in their single value.
  var singleValueHeaders = ['user-agent'];
  /**
   * Converts a given `Headers` instance into a plain object.
   * Respects headers with multiple values.
   */
  function headersToObject(headers) {
      var headersObject = {};
      headers.forEach(function (value, name) {
          var isMultiValue = !singleValueHeaders.includes(name.toLowerCase()) && value.includes(',');
          headersObject[name] = isMultiValue
              ? value.split(',').map(function (s) { return s.trim(); })
              : value;
      });
      return headersObject;
  }
  headersToObject$1.headersToObject = headersToObject;

  var stringToHeaders$1 = {};

  Object.defineProperty(stringToHeaders$1, "__esModule", { value: true });
  stringToHeaders$1.stringToHeaders = void 0;
  var Headers_1$2 = Headers;
  /**
   * Converts a string representation of headers (i.e. from XMLHttpRequest)
   * to a new `Headers` instance.
   */
  function stringToHeaders(str) {
      var lines = str.trim().split(/[\r\n]+/);
      return lines.reduce(function (headers, line) {
          if (line.trim() === '') {
              return headers;
          }
          var parts = line.split(': ');
          var name = parts.shift();
          var value = parts.join(': ');
          headers.append(name, value);
          return headers;
      }, new Headers_1$2.default());
  }
  stringToHeaders$1.stringToHeaders = stringToHeaders;

  var listToHeaders$1 = {};

  var __read$3 = (commonjsGlobal && commonjsGlobal.__read) || function (o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o), r, ar = [], e;
      try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      }
      catch (error) { e = { error: error }; }
      finally {
          try {
              if (r && !r.done && (m = i["return"])) m.call(i);
          }
          finally { if (e) throw e.error; }
      }
      return ar;
  };
  Object.defineProperty(listToHeaders$1, "__esModule", { value: true });
  listToHeaders$1.listToHeaders = void 0;
  var Headers_1$1 = Headers;
  function listToHeaders(list) {
      var headers = new Headers_1$1.default();
      list.forEach(function (_a) {
          var _b = __read$3(_a, 2), name = _b[0], value = _b[1];
          var values = [].concat(value);
          values.forEach(function (value) {
              headers.append(name, value);
          });
      });
      return headers;
  }
  listToHeaders$1.listToHeaders = listToHeaders;

  var objectToHeaders$1 = {};

  var reduceHeadersObject$1 = {};

  Object.defineProperty(reduceHeadersObject$1, "__esModule", { value: true });
  reduceHeadersObject$1.reduceHeadersObject = void 0;
  /**
   * Reduces given headers object instnace.
   */
  function reduceHeadersObject(headers, reducer, initialState) {
      return Object.keys(headers).reduce(function (nextHeaders, name) {
          return reducer(nextHeaders, name, headers[name]);
      }, initialState);
  }
  reduceHeadersObject$1.reduceHeadersObject = reduceHeadersObject;

  Object.defineProperty(objectToHeaders$1, "__esModule", { value: true });
  objectToHeaders$1.objectToHeaders = void 0;
  var Headers_1 = Headers;
  var reduceHeadersObject_1$1 = reduceHeadersObject$1;
  /**
   * Converts a given headers object to a new `Headers` instance.
   */
  function objectToHeaders(headersObject) {
      return reduceHeadersObject_1$1.reduceHeadersObject(headersObject, function (headers, name, value) {
          var values = [].concat(value).filter(Boolean);
          values.forEach(function (value) {
              headers.append(name, value);
          });
          return headers;
      }, new Headers_1.default());
  }
  objectToHeaders$1.objectToHeaders = objectToHeaders;

  var flattenHeadersList$1 = {};

  var __read$2 = (commonjsGlobal && commonjsGlobal.__read) || function (o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o), r, ar = [], e;
      try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      }
      catch (error) { e = { error: error }; }
      finally {
          try {
              if (r && !r.done && (m = i["return"])) m.call(i);
          }
          finally { if (e) throw e.error; }
      }
      return ar;
  };
  Object.defineProperty(flattenHeadersList$1, "__esModule", { value: true });
  flattenHeadersList$1.flattenHeadersList = void 0;
  function flattenHeadersList(list) {
      return list.map(function (_a) {
          var _b = __read$2(_a, 2), name = _b[0], values = _b[1];
          return [name, [].concat(values).join('; ')];
      });
  }
  flattenHeadersList$1.flattenHeadersList = flattenHeadersList;

  var flattenHeadersObject$1 = {};

  Object.defineProperty(flattenHeadersObject$1, "__esModule", { value: true });
  flattenHeadersObject$1.flattenHeadersObject = void 0;
  var reduceHeadersObject_1 = reduceHeadersObject$1;
  function flattenHeadersObject(headersObject) {
      return reduceHeadersObject_1.reduceHeadersObject(headersObject, function (headers, name, value) {
          headers[name] = [].concat(value).join('; ');
          return headers;
      }, {});
  }
  flattenHeadersObject$1.flattenHeadersObject = flattenHeadersObject;

  (function (exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.flattenHeadersObject = exports.flattenHeadersList = exports.reduceHeadersObject = exports.objectToHeaders = exports.listToHeaders = exports.stringToHeaders = exports.headersToObject = exports.headersToList = exports.headersToString = exports.Headers = void 0;
  var Headers_1 = Headers;
  Object.defineProperty(exports, "Headers", { enumerable: true, get: function () { return Headers_1.default; } });
  var headersToString_1 = headersToString$1;
  Object.defineProperty(exports, "headersToString", { enumerable: true, get: function () { return headersToString_1.headersToString; } });
  var headersToList_1 = headersToList$1;
  Object.defineProperty(exports, "headersToList", { enumerable: true, get: function () { return headersToList_1.headersToList; } });
  var headersToObject_1 = headersToObject$1;
  Object.defineProperty(exports, "headersToObject", { enumerable: true, get: function () { return headersToObject_1.headersToObject; } });
  var stringToHeaders_1 = stringToHeaders$1;
  Object.defineProperty(exports, "stringToHeaders", { enumerable: true, get: function () { return stringToHeaders_1.stringToHeaders; } });
  var listToHeaders_1 = listToHeaders$1;
  Object.defineProperty(exports, "listToHeaders", { enumerable: true, get: function () { return listToHeaders_1.listToHeaders; } });
  var objectToHeaders_1 = objectToHeaders$1;
  Object.defineProperty(exports, "objectToHeaders", { enumerable: true, get: function () { return objectToHeaders_1.objectToHeaders; } });
  var reduceHeadersObject_1 = reduceHeadersObject$1;
  Object.defineProperty(exports, "reduceHeadersObject", { enumerable: true, get: function () { return reduceHeadersObject_1.reduceHeadersObject; } });
  var flattenHeadersList_1 = flattenHeadersList$1;
  Object.defineProperty(exports, "flattenHeadersList", { enumerable: true, get: function () { return flattenHeadersList_1.flattenHeadersList; } });
  var flattenHeadersObject_1 = flattenHeadersObject$1;
  Object.defineProperty(exports, "flattenHeadersObject", { enumerable: true, get: function () { return flattenHeadersObject_1.flattenHeadersObject; } });
  }(lib$7));

  /**
   * Sets one or multiple response headers.
   * @example
   * ctx.set('Content-Type', 'text/plain')
   * ctx.set({
   *   'Accept': 'application/javascript',
   *   'Content-Type': "text/plain"
   * })
   * @see {@link https://mswjs.io/docs/api/context/set `ctx.set()`}
   */
  function set(...args) {
      return (res) => {
          const [name, value] = args;
          if (typeof name === 'string') {
              res.headers.append(name, value);
          }
          else {
              const headers = lib$7.objectToHeaders(name);
              headers.forEach((value, name) => {
                  res.headers.append(name, value);
              });
          }
          return res;
      };
  }

  /*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   */

  /**
   * Module exports.
   * @public
   */

  var parse_1 = parse$5;
  var serialize_1 = serialize;

  /**
   * Module variables.
   * @private
   */

  var decode = decodeURIComponent;
  var encode = encodeURIComponent;

  /**
   * RegExp to match field-content in RFC 7230 sec 3.2
   *
   * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
   * field-vchar   = VCHAR / obs-text
   * obs-text      = %x80-FF
   */

  var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

  /**
   * Parse a cookie header.
   *
   * Parse the given cookie header string into an object
   * The object has the various cookies as keys(names) => values
   *
   * @param {string} str
   * @param {object} [options]
   * @return {object}
   * @public
   */

  function parse$5(str, options) {
    if (typeof str !== 'string') {
      throw new TypeError('argument str must be a string');
    }

    var obj = {};
    var opt = options || {};
    var pairs = str.split(';');
    var dec = opt.decode || decode;

    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i];
      var index = pair.indexOf('=');

      // skip things that don't look like key=value
      if (index < 0) {
        continue;
      }

      var key = pair.substring(0, index).trim();

      // only assign once
      if (undefined == obj[key]) {
        var val = pair.substring(index + 1, pair.length).trim();

        // quoted values
        if (val[0] === '"') {
          val = val.slice(1, -1);
        }

        obj[key] = tryDecode(val, dec);
      }
    }

    return obj;
  }

  /**
   * Serialize data into a cookie header.
   *
   * Serialize the a name value pair into a cookie string suitable for
   * http headers. An optional options object specified cookie parameters.
   *
   * serialize('foo', 'bar', { httpOnly: true })
   *   => "foo=bar; httpOnly"
   *
   * @param {string} name
   * @param {string} val
   * @param {object} [options]
   * @return {string}
   * @public
   */

  function serialize(name, val, options) {
    var opt = options || {};
    var enc = opt.encode || encode;

    if (typeof enc !== 'function') {
      throw new TypeError('option encode is invalid');
    }

    if (!fieldContentRegExp.test(name)) {
      throw new TypeError('argument name is invalid');
    }

    var value = enc(val);

    if (value && !fieldContentRegExp.test(value)) {
      throw new TypeError('argument val is invalid');
    }

    var str = name + '=' + value;

    if (null != opt.maxAge) {
      var maxAge = opt.maxAge - 0;

      if (isNaN(maxAge) || !isFinite(maxAge)) {
        throw new TypeError('option maxAge is invalid')
      }

      str += '; Max-Age=' + Math.floor(maxAge);
    }

    if (opt.domain) {
      if (!fieldContentRegExp.test(opt.domain)) {
        throw new TypeError('option domain is invalid');
      }

      str += '; Domain=' + opt.domain;
    }

    if (opt.path) {
      if (!fieldContentRegExp.test(opt.path)) {
        throw new TypeError('option path is invalid');
      }

      str += '; Path=' + opt.path;
    }

    if (opt.expires) {
      if (typeof opt.expires.toUTCString !== 'function') {
        throw new TypeError('option expires is invalid');
      }

      str += '; Expires=' + opt.expires.toUTCString();
    }

    if (opt.httpOnly) {
      str += '; HttpOnly';
    }

    if (opt.secure) {
      str += '; Secure';
    }

    if (opt.sameSite) {
      var sameSite = typeof opt.sameSite === 'string'
        ? opt.sameSite.toLowerCase() : opt.sameSite;

      switch (sameSite) {
        case true:
          str += '; SameSite=Strict';
          break;
        case 'lax':
          str += '; SameSite=Lax';
          break;
        case 'strict':
          str += '; SameSite=Strict';
          break;
        case 'none':
          str += '; SameSite=None';
          break;
        default:
          throw new TypeError('option sameSite is invalid');
      }
    }

    return str;
  }

  /**
   * Try decoding a string using a decoding function.
   *
   * @param {string} str
   * @param {function} decode
   * @private
   */

  function tryDecode(str, decode) {
    try {
      return decode(str);
    } catch (e) {
      return str;
    }
  }

  /**
   * Sets a given cookie on the mocked response.
   * @example res(ctx.cookie('name', 'value'))
   */
  const cookie = (name, value, options) => {
      return (res) => {
          const serializedCookie = serialize_1(name, value, options);
          res.headers.set('Set-Cookie', serializedCookie);
          if (typeof document !== 'undefined') {
              document.cookie = serializedCookie;
          }
          return res;
      };
  };

  /**
   * Sets a raw response body. Does not append any `Content-Type` headers.
   * @example
   * res(ctx.body('Successful response'))
   * res(ctx.body(JSON.stringify({ key: 'value' })))
   * @see {@link https://mswjs.io/docs/api/context/body `ctx.body()`}
   */
  const body = (value) => {
      return (res) => {
          res.body = value;
          return res;
      };
  };

  /**
   * Parses a given value into a JSON.
   * Does not throw an exception on an invalid JSON string.
   */
  function jsonParse(value) {
      try {
          return JSON.parse(value);
      }
      catch (error) {
          return undefined;
      }
  }

  /**
   * Determines if the given value is an object.
   */
  function isObject(value) {
      return value != null && typeof value === 'object' && !Array.isArray(value);
  }

  /**
   * Deeply merges two given objects with the right one
   * having a priority during property assignment.
   */
  function mergeRight(left, right) {
      return Object.entries(right).reduce((result, [key, rightValue]) => {
          const leftValue = result[key];
          if (Array.isArray(leftValue) && Array.isArray(rightValue)) {
              result[key] = leftValue.concat(rightValue);
              return result;
          }
          if (isObject(leftValue) && isObject(rightValue)) {
              result[key] = mergeRight(leftValue, rightValue);
              return result;
          }
          result[key] = rightValue;
          return result;
      }, Object.assign({}, left));
  }

  /**
   * Sets the given value as the JSON body of the response.
   * Appends a `Content-Type: application/json` header on the
   * mocked response.
   * @example
   * res(ctx.json('Some string'))
   * res(ctx.json({ key: 'value' }))
   * res(ctx.json([1, '2', false, { ok: true }]))
   * @see {@link https://mswjs.io/docs/api/context/json `ctx.json()`}
   */
  const json = (body) => {
      return (res) => {
          res.headers.set('Content-Type', 'application/json');
          res.body = JSON.stringify(body);
          return res;
      };
  };

  /**
   * Sets a given payload as a GraphQL response body.
   * @example
   * res(ctx.data({ user: { firstName: 'John' }}))
   * @see {@link https://mswjs.io/docs/api/context/data `ctx.data()`}
   */
  const data = (payload) => {
      return (res) => {
          const prevBody = jsonParse(res.body) || {};
          const nextBody = mergeRight(prevBody, { data: payload });
          return json(nextBody)(res);
      };
  };

  /**
   * Sets the GraphQL extensions on a given response.
   * @example
   * res(ctx.extensions({ tracing: { version: 1 }}))
   * @see {@link https://mswjs.io/docs/api/context/extensions `ctx.extensions()`}
   */
  const extensions = (payload) => {
      return (res) => {
          const prevBody = jsonParse(res.body) || {};
          const nextBody = mergeRight(prevBody, { extensions: payload });
          return json(nextBody)(res);
      };
  };

  var lib$6 = {exports: {}};

  (function (module, exports) {
  (function (global, factory) {
    factory(exports) ;
  }(commonjsGlobal, (function (exports) {
    /**
     * Determines if the current process is a Node.js process.
     */
    function isNodeProcess() {
        if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
            return true;
        }
        return !!(typeof process !== 'undefined' &&
            process.versions &&
            process.versions.node);
    }

    exports.isNodeProcess = isNodeProcess;

    Object.defineProperty(exports, '__esModule', { value: true });

  })));
  }(lib$6, lib$6.exports));

  const SET_TIMEOUT_MAX_ALLOWED_INT = 2147483647;
  const MIN_SERVER_RESPONSE_TIME = 100;
  const MAX_SERVER_RESPONSE_TIME = 400;
  const NODE_SERVER_RESPONSE_TIME = 5;
  const getRandomServerResponseTime = () => {
      if (lib$6.exports.isNodeProcess()) {
          return NODE_SERVER_RESPONSE_TIME;
      }
      return Math.floor(Math.random() * (MAX_SERVER_RESPONSE_TIME - MIN_SERVER_RESPONSE_TIME) +
          MIN_SERVER_RESPONSE_TIME);
  };
  /**
   * Delays the response by the given duration (ms).
   * @example
   * res(ctx.delay(1200)) // delay response by 1200ms
   * res(ctx.delay()) // emulate realistic server response time
   * res(ctx.delay('infinite')) // delay response infinitely
   * @see {@link https://mswjs.io/docs/api/context/delay `ctx.delay()`}
   */
  const delay = (durationOrMode) => {
      return (res) => {
          let delayTime;
          if (typeof durationOrMode === 'string') {
              switch (durationOrMode) {
                  case 'infinite': {
                      // Using `Infinity` as a delay value executes the response timeout immediately.
                      // Instead, use the maximum allowed integer for `setTimeout`.
                      delayTime = SET_TIMEOUT_MAX_ALLOWED_INT;
                      break;
                  }
                  case 'real': {
                      delayTime = getRandomServerResponseTime();
                      break;
                  }
                  default: {
                      throw new Error(`Failed to delay a response: unknown delay mode "${durationOrMode}". Please make sure you provide one of the supported modes ("real", "infinite") or a number to "ctx.delay".`);
                  }
              }
          }
          else if (typeof durationOrMode === 'undefined') {
              // Use random realistic server response time when no explicit delay duration was provided.
              delayTime = getRandomServerResponseTime();
          }
          else {
              // Guard against passing values like `Infinity` or `Number.MAX_VALUE`
              // as the response delay duration. They don't produce the result you may expect.
              if (durationOrMode > SET_TIMEOUT_MAX_ALLOWED_INT) {
                  throw new Error(`Failed to delay a response: provided delay duration (${durationOrMode}) exceeds the maximum allowed duration for "setTimeout" (${SET_TIMEOUT_MAX_ALLOWED_INT}). This will cause the response to be returned immediately. Please use a number within the allowed range to delay the response by exact duration, or consider the "infinite" delay mode to delay the response indefinitely.`);
              }
              delayTime = durationOrMode;
          }
          res.delay = delayTime;
          return res;
      };
  };

  /**
   * Sets a given list of GraphQL errors on the mocked response.
   * @example res(ctx.errors([{ message: 'Unauthorized' }]))
   * @see {@link https://mswjs.io/docs/api/context/errors}
   */
  const errors = (errorsList) => {
      return (res) => {
          if (errorsList == null) {
              return res;
          }
          const prevBody = jsonParse(res.body) || {};
          const nextBody = mergeRight(prevBody, { errors: errorsList });
          return json(nextBody)(res);
      };
  };

  const useFetch = lib$6.exports.isNodeProcess() ? require('node-fetch') : window.fetch;
  const augmentRequestInit = (requestInit) => {
      const headers = new lib$7.Headers(requestInit.headers);
      headers.set('x-msw-bypass', 'true');
      return Object.assign(Object.assign({}, requestInit), { headers: headers.all() });
  };
  const createFetchRequestParameters = (input) => {
      const { body, method } = input;
      const requestParameters = Object.assign(Object.assign({}, input), { body: undefined });
      if (['GET', 'HEAD'].includes(method)) {
          return requestParameters;
      }
      if (typeof body === 'object' ||
          typeof body === 'number' ||
          typeof body === 'boolean') {
          requestParameters.body = JSON.stringify(body);
      }
      else {
          requestParameters.body = body;
      }
      return requestParameters;
  };
  /**
   * Performs a bypassed request inside a request handler.
   * @example
   * const originalResponse = await ctx.fetch(req)
   * @see {@link https://mswjs.io/docs/api/context/fetch `ctx.fetch()`}
   */
  const fetch$1 = (input, requestInit = {}) => {
      if (typeof input === 'string') {
          return useFetch(input, augmentRequestInit(requestInit));
      }
      const requestParameters = createFetchRequestParameters(input);
      const derivedRequestInit = augmentRequestInit(requestParameters);
      return useFetch(input.url.href, derivedRequestInit);
  };

  /**
   * Sets a textual response body. Appends a `Content-Type: text/plain`
   * header on the mocked response.
   * @example res(ctx.text('Successful response'))
   * @see {@link https://mswjs.io/docs/api/context/text `ctx.text()`}
   */
  const text = (body) => {
      return (res) => {
          res.headers.set('Content-Type', 'text/plain');
          res.body = body;
          return res;
      };
  };

  /**
   * Sets an XML response body. Appends a `Content-Type: text/xml` header
   * on the mocked response.
   * @example
   * res(ctx.xml('<node key="value">Content</node>'))
   * @see {@link https://mswjs.io/docs/api/context/xml `ctx.xml()`}
   */
  const xml = (body) => {
      return (res) => {
          res.headers.set('Content-Type', 'text/xml');
          res.body = body;
          return res;
      };
  };

  var index = /*#__PURE__*/Object.freeze({
    __proto__: null,
    status: status,
    set: set,
    cookie: cookie,
    body: body,
    data: data,
    extensions: extensions,
    delay: delay,
    errors: errors,
    fetch: fetch$1,
    json: json,
    text: text,
    xml: xml
  });

  var lib$5 = {};

  var StrictEventEmitter$1 = {};

  var events = {exports: {}};

  var R = typeof Reflect === 'object' ? Reflect : null;
  var ReflectApply = R && typeof R.apply === 'function'
    ? R.apply
    : function ReflectApply(target, receiver, args) {
      return Function.prototype.apply.call(target, receiver, args);
    };

  var ReflectOwnKeys;
  if (R && typeof R.ownKeys === 'function') {
    ReflectOwnKeys = R.ownKeys;
  } else if (Object.getOwnPropertySymbols) {
    ReflectOwnKeys = function ReflectOwnKeys(target) {
      return Object.getOwnPropertyNames(target)
        .concat(Object.getOwnPropertySymbols(target));
    };
  } else {
    ReflectOwnKeys = function ReflectOwnKeys(target) {
      return Object.getOwnPropertyNames(target);
    };
  }

  function ProcessEmitWarning(warning) {
    if (console && console.warn) console.warn(warning);
  }

  var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
    return value !== value;
  };

  function EventEmitter() {
    EventEmitter.init.call(this);
  }
  events.exports = EventEmitter;
  events.exports.once = once;

  // Backwards-compat with node 0.10.x
  EventEmitter.EventEmitter = EventEmitter;

  EventEmitter.prototype._events = undefined;
  EventEmitter.prototype._eventsCount = 0;
  EventEmitter.prototype._maxListeners = undefined;

  // By default EventEmitters will print a warning if more than 10 listeners are
  // added to it. This is a useful default which helps finding memory leaks.
  var defaultMaxListeners = 10;

  function checkListener(listener) {
    if (typeof listener !== 'function') {
      throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
    }
  }

  Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
    enumerable: true,
    get: function() {
      return defaultMaxListeners;
    },
    set: function(arg) {
      if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
      }
      defaultMaxListeners = arg;
    }
  });

  EventEmitter.init = function() {

    if (this._events === undefined ||
        this._events === Object.getPrototypeOf(this)._events) {
      this._events = Object.create(null);
      this._eventsCount = 0;
    }

    this._maxListeners = this._maxListeners || undefined;
  };

  // Obviously not all Emitters should be limited to 10. This function allows
  // that to be increased. Set to zero for unlimited.
  EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
    if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
      throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
    }
    this._maxListeners = n;
    return this;
  };

  function _getMaxListeners(that) {
    if (that._maxListeners === undefined)
      return EventEmitter.defaultMaxListeners;
    return that._maxListeners;
  }

  EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
    return _getMaxListeners(this);
  };

  EventEmitter.prototype.emit = function emit(type) {
    var args = [];
    for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
    var doError = (type === 'error');

    var events = this._events;
    if (events !== undefined)
      doError = (doError && events.error === undefined);
    else if (!doError)
      return false;

    // If there is no 'error' event listener then throw.
    if (doError) {
      var er;
      if (args.length > 0)
        er = args[0];
      if (er instanceof Error) {
        // Note: The comments on the `throw` lines are intentional, they show
        // up in Node's output if this results in an unhandled exception.
        throw er; // Unhandled 'error' event
      }
      // At least give some kind of context to the user
      var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
      err.context = er;
      throw err; // Unhandled 'error' event
    }

    var handler = events[type];

    if (handler === undefined)
      return false;

    if (typeof handler === 'function') {
      ReflectApply(handler, this, args);
    } else {
      var len = handler.length;
      var listeners = arrayClone(handler, len);
      for (var i = 0; i < len; ++i)
        ReflectApply(listeners[i], this, args);
    }

    return true;
  };

  function _addListener(target, type, listener, prepend) {
    var m;
    var events;
    var existing;

    checkListener(listener);

    events = target._events;
    if (events === undefined) {
      events = target._events = Object.create(null);
      target._eventsCount = 0;
    } else {
      // To avoid recursion in the case that type === "newListener"! Before
      // adding it to the listeners, first emit "newListener".
      if (events.newListener !== undefined) {
        target.emit('newListener', type,
                    listener.listener ? listener.listener : listener);

        // Re-assign `events` because a newListener handler could have caused the
        // this._events to be assigned to a new object
        events = target._events;
      }
      existing = events[type];
    }

    if (existing === undefined) {
      // Optimize the case of one listener. Don't need the extra array object.
      existing = events[type] = listener;
      ++target._eventsCount;
    } else {
      if (typeof existing === 'function') {
        // Adding the second element, need to change to array.
        existing = events[type] =
          prepend ? [listener, existing] : [existing, listener];
        // If we've already got an array, just append.
      } else if (prepend) {
        existing.unshift(listener);
      } else {
        existing.push(listener);
      }

      // Check for listener leak
      m = _getMaxListeners(target);
      if (m > 0 && existing.length > m && !existing.warned) {
        existing.warned = true;
        // No error code for this since it is a Warning
        // eslint-disable-next-line no-restricted-syntax
        var w = new Error('Possible EventEmitter memory leak detected. ' +
                            existing.length + ' ' + String(type) + ' listeners ' +
                            'added. Use emitter.setMaxListeners() to ' +
                            'increase limit');
        w.name = 'MaxListenersExceededWarning';
        w.emitter = target;
        w.type = type;
        w.count = existing.length;
        ProcessEmitWarning(w);
      }
    }

    return target;
  }

  EventEmitter.prototype.addListener = function addListener(type, listener) {
    return _addListener(this, type, listener, false);
  };

  EventEmitter.prototype.on = EventEmitter.prototype.addListener;

  EventEmitter.prototype.prependListener =
      function prependListener(type, listener) {
        return _addListener(this, type, listener, true);
      };

  function onceWrapper() {
    if (!this.fired) {
      this.target.removeListener(this.type, this.wrapFn);
      this.fired = true;
      if (arguments.length === 0)
        return this.listener.call(this.target);
      return this.listener.apply(this.target, arguments);
    }
  }

  function _onceWrap(target, type, listener) {
    var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
    var wrapped = onceWrapper.bind(state);
    wrapped.listener = listener;
    state.wrapFn = wrapped;
    return wrapped;
  }

  EventEmitter.prototype.once = function once(type, listener) {
    checkListener(listener);
    this.on(type, _onceWrap(this, type, listener));
    return this;
  };

  EventEmitter.prototype.prependOnceListener =
      function prependOnceListener(type, listener) {
        checkListener(listener);
        this.prependListener(type, _onceWrap(this, type, listener));
        return this;
      };

  // Emits a 'removeListener' event if and only if the listener was removed.
  EventEmitter.prototype.removeListener =
      function removeListener(type, listener) {
        var list, events, position, i, originalListener;

        checkListener(listener);

        events = this._events;
        if (events === undefined)
          return this;

        list = events[type];
        if (list === undefined)
          return this;

        if (list === listener || list.listener === listener) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else {
            delete events[type];
            if (events.removeListener)
              this.emit('removeListener', type, list.listener || listener);
          }
        } else if (typeof list !== 'function') {
          position = -1;

          for (i = list.length - 1; i >= 0; i--) {
            if (list[i] === listener || list[i].listener === listener) {
              originalListener = list[i].listener;
              position = i;
              break;
            }
          }

          if (position < 0)
            return this;

          if (position === 0)
            list.shift();
          else {
            spliceOne(list, position);
          }

          if (list.length === 1)
            events[type] = list[0];

          if (events.removeListener !== undefined)
            this.emit('removeListener', type, originalListener || listener);
        }

        return this;
      };

  EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

  EventEmitter.prototype.removeAllListeners =
      function removeAllListeners(type) {
        var listeners, events, i;

        events = this._events;
        if (events === undefined)
          return this;

        // not listening for removeListener, no need to emit
        if (events.removeListener === undefined) {
          if (arguments.length === 0) {
            this._events = Object.create(null);
            this._eventsCount = 0;
          } else if (events[type] !== undefined) {
            if (--this._eventsCount === 0)
              this._events = Object.create(null);
            else
              delete events[type];
          }
          return this;
        }

        // emit removeListener for all listeners on all events
        if (arguments.length === 0) {
          var keys = Object.keys(events);
          var key;
          for (i = 0; i < keys.length; ++i) {
            key = keys[i];
            if (key === 'removeListener') continue;
            this.removeAllListeners(key);
          }
          this.removeAllListeners('removeListener');
          this._events = Object.create(null);
          this._eventsCount = 0;
          return this;
        }

        listeners = events[type];

        if (typeof listeners === 'function') {
          this.removeListener(type, listeners);
        } else if (listeners !== undefined) {
          // LIFO order
          for (i = listeners.length - 1; i >= 0; i--) {
            this.removeListener(type, listeners[i]);
          }
        }

        return this;
      };

  function _listeners(target, type, unwrap) {
    var events = target._events;

    if (events === undefined)
      return [];

    var evlistener = events[type];
    if (evlistener === undefined)
      return [];

    if (typeof evlistener === 'function')
      return unwrap ? [evlistener.listener || evlistener] : [evlistener];

    return unwrap ?
      unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
  }

  EventEmitter.prototype.listeners = function listeners(type) {
    return _listeners(this, type, true);
  };

  EventEmitter.prototype.rawListeners = function rawListeners(type) {
    return _listeners(this, type, false);
  };

  EventEmitter.listenerCount = function(emitter, type) {
    if (typeof emitter.listenerCount === 'function') {
      return emitter.listenerCount(type);
    } else {
      return listenerCount.call(emitter, type);
    }
  };

  EventEmitter.prototype.listenerCount = listenerCount;
  function listenerCount(type) {
    var events = this._events;

    if (events !== undefined) {
      var evlistener = events[type];

      if (typeof evlistener === 'function') {
        return 1;
      } else if (evlistener !== undefined) {
        return evlistener.length;
      }
    }

    return 0;
  }

  EventEmitter.prototype.eventNames = function eventNames() {
    return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
  };

  function arrayClone(arr, n) {
    var copy = new Array(n);
    for (var i = 0; i < n; ++i)
      copy[i] = arr[i];
    return copy;
  }

  function spliceOne(list, index) {
    for (; index + 1 < list.length; index++)
      list[index] = list[index + 1];
    list.pop();
  }

  function unwrapListeners(arr) {
    var ret = new Array(arr.length);
    for (var i = 0; i < ret.length; ++i) {
      ret[i] = arr[i].listener || arr[i];
    }
    return ret;
  }

  function once(emitter, name) {
    return new Promise(function (resolve, reject) {
      function errorListener(err) {
        emitter.removeListener(name, resolver);
        reject(err);
      }

      function resolver() {
        if (typeof emitter.removeListener === 'function') {
          emitter.removeListener('error', errorListener);
        }
        resolve([].slice.call(arguments));
      }
      eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
      if (name !== 'error') {
        addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
      }
    });
  }

  function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
    if (typeof emitter.on === 'function') {
      eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
    }
  }

  function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
    if (typeof emitter.on === 'function') {
      if (flags.once) {
        emitter.once(name, listener);
      } else {
        emitter.on(name, listener);
      }
    } else if (typeof emitter.addEventListener === 'function') {
      // EventTarget does not have `error` event semantics like Node
      // EventEmitters, we do not listen for `error` events here.
      emitter.addEventListener(name, function wrapListener(arg) {
        // IE does not have builtin `{ once: true }` support so we
        // have to do it manually.
        if (flags.once) {
          emitter.removeEventListener(name, wrapListener);
        }
        listener(arg);
      });
    } else {
      throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
    }
  }

  var __extends$2 = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var __spreadArrays = (commonjsGlobal && commonjsGlobal.__spreadArrays) || function () {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
              r[k] = a[j];
      return r;
  };
  StrictEventEmitter$1.__esModule = true;
  StrictEventEmitter$1.StrictEventEmitter = void 0;
  var events_1 = events.exports;
  var StrictEventEmitter = /** @class */ (function (_super) {
      __extends$2(StrictEventEmitter, _super);
      function StrictEventEmitter() {
          return _super.call(this) || this;
      }
      StrictEventEmitter.prototype.on = function (event, listener) {
          return _super.prototype.on.call(this, event.toString(), listener);
      };
      StrictEventEmitter.prototype.once = function (event, listener) {
          return _super.prototype.on.call(this, event.toString(), listener);
      };
      StrictEventEmitter.prototype.off = function (event, listener) {
          return _super.prototype.off.call(this, event.toString(), listener);
      };
      StrictEventEmitter.prototype.emit = function (event) {
          var data = [];
          for (var _i = 1; _i < arguments.length; _i++) {
              data[_i - 1] = arguments[_i];
          }
          return _super.prototype.emit.apply(this, __spreadArrays([event.toString()], data));
      };
      StrictEventEmitter.prototype.addListener = function (event, listener) {
          return _super.prototype.addListener.call(this, event.toString(), listener);
      };
      StrictEventEmitter.prototype.removeListener = function (event, listener) {
          return _super.prototype.removeListener.call(this, event.toString(), listener);
      };
      return StrictEventEmitter;
  }(events_1.EventEmitter));
  StrictEventEmitter$1.StrictEventEmitter = StrictEventEmitter;

  (function (exports) {
  var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
  }) : (function(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
  }));
  exports.__esModule = true;
  exports.StrictEventEmitter = void 0;
  var StrictEventEmitter_1 = StrictEventEmitter$1;
  __createBinding(exports, StrictEventEmitter_1, "StrictEventEmitter");
  }(lib$5));

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */

  function __rest(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                  t[p[i]] = s[p[i]];
          }
      return t;
  }

  function __awaiter$3(thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  }

  var lib$4 = {};

  var until$1 = {};

  Object.defineProperty(until$1, "__esModule", { value: true });
  /**
   * Gracefully handles a given Promise factory.
   * @example
   * cosnt [error, data] = await until(() => asyncAction())
   */
  until$1.until = async (promise) => {
      try {
          const data = await promise().catch((error) => {
              throw error;
          });
          return [null, data];
      }
      catch (error) {
          return [error, null];
      }
  };

  Object.defineProperty(lib$4, "__esModule", { value: true });
  var until_1$1 = until$1;
  var until = lib$4.until = until_1$1.until;

  /**
   * Attempts to resolve a Service Worker instance from a given registration,
   * regardless of its state (active, installing, waiting).
   */
  const getWorkerByRegistration = (registration, absoluteWorkerUrl, findWorker) => {
      const allStates = [
          registration.active,
          registration.installing,
          registration.waiting,
      ];
      const existingStates = allStates.filter(Boolean);
      const mockWorker = existingStates.find((worker) => {
          return findWorker(worker.scriptURL, absoluteWorkerUrl);
      });
      return mockWorker || null;
  };

  /**
   * Returns an absolute Service Worker URL based on the given
   * relative URL (known during the registration).
   */
  function getAbsoluteWorkerUrl(relativeUrl) {
      return new URL(relativeUrl, location.origin).href;
  }

  var lib$3 = {};

  var invariant$3 = {};

  var format$1 = {};

  Object.defineProperty(format$1, "__esModule", { value: true });
  format$1.format = void 0;
  var POSITIONALS_EXP = /(%?)(%([sdjo]))/g;
  function serializePositional(positional, flag) {
      switch (flag) {
          // Strings.
          case 's':
              return positional;
          // Digits.
          case 'd':
          case 'i':
              return Number(positional);
          // JSON.
          case 'j':
              return JSON.stringify(positional);
          // Objects.
          case 'o': {
              // Preserve stings to prevent extra quotes around them.
              if (typeof positional === 'string') {
                  return positional;
              }
              var json = JSON.stringify(positional);
              // If the positional isn't serializable, return it as-is.
              if (json === '{}' || json === '[]' || /^\[object .+?\]$/.test(json)) {
                  return positional;
              }
              return json;
          }
      }
  }
  function format(message) {
      var positionals = [];
      for (var _i = 1; _i < arguments.length; _i++) {
          positionals[_i - 1] = arguments[_i];
      }
      if (positionals.length === 0) {
          return message;
      }
      var positionalIndex = 0;
      var formattedMessage = message.replace(POSITIONALS_EXP, function (match, isEscaped, _, flag) {
          var positional = positionals[positionalIndex];
          var value = serializePositional(positional, flag);
          if (!isEscaped) {
              positionalIndex++;
              return value;
          }
          return match;
      });
      // Append unresolved positionals to string as-is.
      if (positionalIndex < positionals.length) {
          formattedMessage += " " + positionals.slice(positionalIndex).join(' ');
      }
      formattedMessage = formattedMessage.replace(/%{2,2}/g, '%');
      return formattedMessage;
  }
  format$1.format = format;

  var __extends$1 = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          if (typeof b !== "function" && b !== null)
              throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var __spreadArray = (commonjsGlobal && commonjsGlobal.__spreadArray) || function (to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
          to[j] = from[i];
      return to;
  };
  Object.defineProperty(invariant$3, "__esModule", { value: true });
  invariant$3.invariant = invariant$3.InvariantError = void 0;
  var format_1 = format$1;
  var STACK_FRAMES_TO_IGNORE = 2;
  var InvariantError = /** @class */ (function (_super) {
      __extends$1(InvariantError, _super);
      function InvariantError(message) {
          var positionals = [];
          for (var _i = 1; _i < arguments.length; _i++) {
              positionals[_i - 1] = arguments[_i];
          }
          var _this = _super.call(this, message) || this;
          _this.name = 'Invariant Violation';
          _this.message = format_1.format.apply(void 0, __spreadArray([message], positionals));
          if (_this.stack) {
              var nextStack = _this.stack.split('\n');
              nextStack.splice(1, STACK_FRAMES_TO_IGNORE);
              _this.stack = nextStack.join('\n');
          }
          return _this;
      }
      return InvariantError;
  }(Error));
  invariant$3.InvariantError = InvariantError;
  function invariant$2(predicate, message) {
      var positionals = [];
      for (var _i = 2; _i < arguments.length; _i++) {
          positionals[_i - 2] = arguments[_i];
      }
      if (!predicate) {
          throw new (InvariantError.bind.apply(InvariantError, __spreadArray([void 0, message], positionals)))();
      }
  }
  invariant$3.invariant = invariant$2;

  (function (exports) {
  var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
  }) : (function(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
  }));
  var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(invariant$3, exports);
  __exportStar(format$1, exports);
  }(lib$3));

  const LIBRARY_PREFIX = '[MSW]';
  /**
   * Formats a given message by appending the library's prefix string.
   */
  function formatMessage(message, ...positionals) {
      const interpolatedMessage = lib$3.format(message, ...positionals);
      return `${LIBRARY_PREFIX} ${interpolatedMessage}`;
  }
  /**
   * Prints a library-specific warning.
   */
  function warn(message, ...positionals) {
      console.warn(formatMessage(message, ...positionals));
  }
  /**
   * Prints a library-specific error.
   */
  function error$1(message, ...positionals) {
      console.error(formatMessage(message, ...positionals));
  }
  const devUtils = {
      formatMessage,
      warn,
      error: error$1,
  };

  /**
   * Returns an active Service Worker instance.
   * When not found, registers a new Service Worker.
   */
  const getWorkerInstance = (url, options = {}, findWorker) => __awaiter$3(void 0, void 0, void 0, function* () {
      // Resolve the absolute Service Worker URL.
      const absoluteWorkerUrl = getAbsoluteWorkerUrl(url);
      const mockRegistrations = yield navigator.serviceWorker
          .getRegistrations()
          .then((registrations) => registrations.filter((registration) => getWorkerByRegistration(registration, absoluteWorkerUrl, findWorker)));
      if (!navigator.serviceWorker.controller && mockRegistrations.length > 0) {
          // Reload the page when it has associated workers, but no active controller.
          // The absence of a controller can mean either:
          // - page has no Service Worker associated with it
          // - page has been hard-reloaded and its workers won't be used until the next reload.
          // Since we've checked that there are registrations associated with this page,
          // at this point we are sure it's hard reload that falls into this clause.
          location.reload();
      }
      const [existingRegistration] = mockRegistrations;
      if (existingRegistration) {
          // When the Service Worker is registered, update it and return the reference.
          return existingRegistration.update().then(() => {
              return [
                  getWorkerByRegistration(existingRegistration, absoluteWorkerUrl, findWorker),
                  existingRegistration,
              ];
          });
      }
      // When the Service Worker wasn't found, register it anew and return the reference.
      const [error, instance] = yield until(() => __awaiter$3(void 0, void 0, void 0, function* () {
          const registration = yield navigator.serviceWorker.register(url, options);
          return [
              // Compare existing worker registration by its worker URL,
              // to prevent irrelevant workers to resolve here (such as Codesandbox worker).
              getWorkerByRegistration(registration, absoluteWorkerUrl, findWorker),
              registration,
          ];
      }));
      // Handle Service Worker registration errors.
      if (error) {
          const isWorkerMissing = error.message.includes('(404)');
          // Produce a custom error message when given a non-existing Service Worker url.
          // Suggest developers to check their setup.
          if (isWorkerMissing) {
              const scopeUrl = new URL((options === null || options === void 0 ? void 0 : options.scope) || '/', location.href);
              throw new Error(devUtils.formatMessage(`\
Failed to register a Service Worker for scope ('${scopeUrl.href}') with script ('${absoluteWorkerUrl}'): Service Worker script does not exist at the given path.

Did you forget to run "npx msw init <PUBLIC_DIR>"?

Learn more about creating the Service Worker script: https://mswjs.io/docs/cli/init`));
          }
          // Fallback error message for any other registration errors.
          throw new Error(devUtils.formatMessage('Failed to register the Service Worker:\n\n%s', error.message));
      }
      return instance;
  });

  /**
   * Prints a worker activation message in the browser's console.
   */
  function printStartMessage(args = {}) {
      if (args.quiet) {
          return;
      }
      const message = args.message || 'Mocking enabled.';
      console.groupCollapsed(`%c${devUtils.formatMessage(message)}`, 'color:orangered;font-weight:bold;');
      console.log('%cDocumentation: %chttps://mswjs.io/docs', 'font-weight:bold', 'font-weight:normal');
      console.log('Found an issue? https://github.com/mswjs/msw/issues');
      console.groupEnd();
  }

  /**
   * Signals the worker to enable the interception of requests.
   */
  function enableMocking(context, options) {
      return __awaiter$3(this, void 0, void 0, function* () {
          context.workerChannel.send('MOCK_ACTIVATE');
          return context.events.once('MOCKING_ENABLED').then(() => {
              printStartMessage({ quiet: options.quiet });
          });
      });
  }

  /**
   * Creates a communication channel between the client
   * and the Service Worker associated with the given event.
   */
  const createBroadcastChannel = (event) => {
      const port = event.ports[0];
      return {
          /**
           * Sends a text message to the connected Service Worker.
           */
          send(message) {
              if (port) {
                  port.postMessage(message);
              }
          },
      };
  };

  class NetworkError extends Error {
      constructor(message) {
          super(message);
          this.name = 'NetworkError';
      }
  }

  var lib$2 = {};

  var CookieStore = {};

  var setCookie = {exports: {}};

  var defaultParseOptions = {
    decodeValues: true,
    map: false,
    silent: false,
  };

  function isNonEmptyString(str) {
    return typeof str === "string" && !!str.trim();
  }

  function parseString(setCookieValue, options) {
    var parts = setCookieValue.split(";").filter(isNonEmptyString);
    var nameValue = parts.shift().split("=");
    var name = nameValue.shift();
    var value = nameValue.join("="); // everything after the first =, joined by a "=" if there was more than one part

    options = options
      ? Object.assign({}, defaultParseOptions, options)
      : defaultParseOptions;

    try {
      value = options.decodeValues ? decodeURIComponent(value) : value; // decode cookie value
    } catch (e) {
      console.error(
        "set-cookie-parser encountered an error while decoding a cookie with value '" +
          value +
          "'. Set options.decodeValues to false to disable this feature.",
        e
      );
    }

    var cookie = {
      name: name, // grab everything before the first =
      value: value,
    };

    parts.forEach(function (part) {
      var sides = part.split("=");
      var key = sides.shift().trimLeft().toLowerCase();
      var value = sides.join("=");
      if (key === "expires") {
        cookie.expires = new Date(value);
      } else if (key === "max-age") {
        cookie.maxAge = parseInt(value, 10);
      } else if (key === "secure") {
        cookie.secure = true;
      } else if (key === "httponly") {
        cookie.httpOnly = true;
      } else if (key === "samesite") {
        cookie.sameSite = value;
      } else {
        cookie[key] = value;
      }
    });

    return cookie;
  }

  function parse$4(input, options) {
    options = options
      ? Object.assign({}, defaultParseOptions, options)
      : defaultParseOptions;

    if (!input) {
      if (!options.map) {
        return [];
      } else {
        return {};
      }
    }

    if (input.headers && input.headers["set-cookie"]) {
      // fast-path for node.js (which automatically normalizes header names to lower-case
      input = input.headers["set-cookie"];
    } else if (input.headers) {
      // slow-path for other environments - see #25
      var sch =
        input.headers[
          Object.keys(input.headers).find(function (key) {
            return key.toLowerCase() === "set-cookie";
          })
        ];
      // warn if called on a request-like object with a cookie header rather than a set-cookie header - see #34, 36
      if (!sch && input.headers.cookie && !options.silent) {
        console.warn(
          "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
        );
      }
      input = sch;
    }
    if (!Array.isArray(input)) {
      input = [input];
    }

    options = options
      ? Object.assign({}, defaultParseOptions, options)
      : defaultParseOptions;

    if (!options.map) {
      return input.filter(isNonEmptyString).map(function (str) {
        return parseString(str, options);
      });
    } else {
      var cookies = {};
      return input.filter(isNonEmptyString).reduce(function (cookies, str) {
        var cookie = parseString(str, options);
        cookies[cookie.name] = cookie;
        return cookies;
      }, cookies);
    }
  }

  /*
    Set-Cookie header field-values are sometimes comma joined in one string. This splits them without choking on commas
    that are within a single set-cookie field-value, such as in the Expires portion.

    This is uncommon, but explicitly allowed - see https://tools.ietf.org/html/rfc2616#section-4.2
    Node.js does this for every header *except* set-cookie - see https://github.com/nodejs/node/blob/d5e363b77ebaf1caf67cd7528224b651c86815c1/lib/_http_incoming.js#L128
    React Native's fetch does this for *every* header, including set-cookie.

    Based on: https://github.com/google/j2objc/commit/16820fdbc8f76ca0c33472810ce0cb03d20efe25
    Credits to: https://github.com/tomball for original and https://github.com/chrusart for JavaScript implementation
  */
  function splitCookiesString(cookiesString) {
    if (Array.isArray(cookiesString)) {
      return cookiesString;
    }
    if (typeof cookiesString !== "string") {
      return [];
    }

    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;

    function skipWhitespace() {
      while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
        pos += 1;
      }
      return pos < cookiesString.length;
    }

    function notSpecialChar() {
      ch = cookiesString.charAt(pos);

      return ch !== "=" && ch !== ";" && ch !== ",";
    }

    while (pos < cookiesString.length) {
      start = pos;
      cookiesSeparatorFound = false;

      while (skipWhitespace()) {
        ch = cookiesString.charAt(pos);
        if (ch === ",") {
          // ',' is a cookie separator if we have later first '=', not ';' or ','
          lastComma = pos;
          pos += 1;

          skipWhitespace();
          nextStart = pos;

          while (pos < cookiesString.length && notSpecialChar()) {
            pos += 1;
          }

          // currently special character
          if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
            // we found cookies separator
            cookiesSeparatorFound = true;
            // pos is inside the next cookie, so back up and return it.
            pos = nextStart;
            cookiesStrings.push(cookiesString.substring(start, lastComma));
            start = pos;
          } else {
            // in param ',' or param separator ';',
            // we continue from that comma
            pos = lastComma + 1;
          }
        } else {
          pos += 1;
        }
      }

      if (!cookiesSeparatorFound || pos >= cookiesString.length) {
        cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
      }
    }

    return cookiesStrings;
  }

  setCookie.exports = parse$4;
  setCookie.exports.parse = parse$4;
  setCookie.exports.parseString = parseString;
  setCookie.exports.splitCookiesString = splitCookiesString;

  (function (exports) {
  var __rest = (commonjsGlobal && commonjsGlobal.__rest) || function (s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                  t[p[i]] = s[p[i]];
          }
      return t;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.store = exports.PERSISTENCY_KEY = void 0;
  const set_cookie_parser_1 = setCookie.exports;
  exports.PERSISTENCY_KEY = 'MSW_COOKIE_STORE';
  function supportsLocalStorage() {
      try {
          if (localStorage == null) {
              return false;
          }
          localStorage.setItem('test', 'test');
          localStorage.getItem('test');
          return true;
      }
      catch (error) {
          return false;
      }
  }
  class CookieStore {
      constructor() {
          this.store = new Map();
      }
      /**
       * Sets the given request cookies into the store.
       * Respects the `request.credentials` policy.
       */
      add(request, response) {
          if (request.credentials === 'omit') {
              return;
          }
          const requestUrl = new URL(request.url);
          const responseCookies = response.headers.get('set-cookie');
          if (!responseCookies) {
              return;
          }
          const now = Date.now();
          const parsedResponseCookies = set_cookie_parser_1.parse(responseCookies).map((_a) => {
              var { maxAge } = _a, cookie = __rest(_a, ["maxAge"]);
              return (Object.assign(Object.assign({}, cookie), { expires: maxAge === undefined ? cookie.expires : new Date(now + maxAge * 1000), maxAge }));
          });
          const prevCookies = this.store.get(requestUrl.origin) || new Map();
          parsedResponseCookies.forEach((cookie) => {
              this.store.set(requestUrl.origin, prevCookies.set(cookie.name, cookie));
          });
      }
      /**
       * Returns cookies relevant to the given request
       * and its `request.credentials` policy.
       */
      get(request) {
          this.deleteExpiredCookies();
          const requestUrl = new URL(request.url);
          const originCookies = this.store.get(requestUrl.origin) || new Map();
          switch (request.credentials) {
              case 'include': {
                  const documentCookies = set_cookie_parser_1.parse(document.cookie);
                  documentCookies.forEach((cookie) => {
                      originCookies.set(cookie.name, cookie);
                  });
                  return originCookies;
              }
              case 'same-origin': {
                  return originCookies;
              }
              default:
                  return new Map();
          }
      }
      /**
       * Returns a collection of all stored cookies.
       */
      getAll() {
          this.deleteExpiredCookies();
          return this.store;
      }
      /**
       * Deletes all cookies associated with the given request.
       */
      deleteAll(request) {
          const requestUrl = new URL(request.url);
          this.store.delete(requestUrl.origin);
      }
      /**
       * Clears the entire cookie store.
       */
      clear() {
          this.store.clear();
      }
      /**
       * Hydrates the virtual cookie store from the `localStorage` if defined.
       */
      hydrate() {
          if (!supportsLocalStorage()) {
              return;
          }
          const persistedCookies = localStorage.getItem(exports.PERSISTENCY_KEY);
          if (!persistedCookies) {
              return;
          }
          try {
              const parsedCookies = JSON.parse(persistedCookies);
              parsedCookies.forEach(([origin, cookies]) => {
                  this.store.set(origin, new Map(cookies.map((_a) => {
                      var [token, _b] = _a, { expires } = _b, cookie = __rest(_b, ["expires"]);
                      return [
                          token,
                          expires === undefined
                              ? cookie
                              : Object.assign(Object.assign({}, cookie), { expires: new Date(expires) }),
                      ];
                  })));
              });
          }
          catch (error) {
              console.warn(`
[virtual-cookie] Failed to parse a stored cookie from the localStorage (key "${exports.PERSISTENCY_KEY}").

Stored value:
${localStorage.getItem(exports.PERSISTENCY_KEY)}

Thrown exception:
${error}

Invalid value has been removed from localStorage to prevent subsequent failed parsing attempts.`);
              localStorage.removeItem(exports.PERSISTENCY_KEY);
          }
      }
      /**
       * Persists the current virtual cookies into the `localStorage` if defined,
       * so they are available on the next page load.
       */
      persist() {
          if (!supportsLocalStorage()) {
              return;
          }
          const serializedCookies = Array.from(this.store.entries()).map(([origin, cookies]) => {
              return [origin, Array.from(cookies.entries())];
          });
          localStorage.setItem(exports.PERSISTENCY_KEY, JSON.stringify(serializedCookies));
      }
      deleteExpiredCookies() {
          const now = Date.now();
          this.store.forEach((originCookies, origin) => {
              originCookies.forEach(({ expires, name }) => {
                  if (expires !== undefined && expires.getTime() <= now) {
                      originCookies.delete(name);
                  }
              });
              if (originCookies.size === 0) {
                  this.store.delete(origin);
              }
          });
      }
  }
  exports.store = new CookieStore();
  }(CookieStore));

  (function (exports) {
  var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
  }) : (function(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
  }));
  var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(CookieStore, exports);
  }(lib$2));

  function getAllCookies() {
      return parse_1(document.cookie);
  }
  /**
   * Returns relevant document cookies based on the request `credentials` option.
   */
  function getRequestCookies(request) {
      /**
       * @note No cookies persist on the document in Node.js: no document.
       */
      if (typeof document === 'undefined' || typeof location === 'undefined') {
          return {};
      }
      switch (request.credentials) {
          case 'same-origin': {
              // Return document cookies only when requested a resource
              // from the same origin as the current document.
              return location.origin === request.url.origin ? getAllCookies() : {};
          }
          case 'include': {
              // Return all document cookies.
              return getAllCookies();
          }
          default: {
              return {};
          }
      }
  }

  /**
   * Sets relevant cookies on the request.
   * Request cookies are taken from the following sources:
   * - Immediate (own) request cookies (those in the "Cookie" request header);
   * - From the `document.cookie` based on the request's `credentials` value;
   * - From the internal cookie store that persists/hydrates cookies in Node.js
   */
  function setRequestCookies(request) {
      var _a;
      // Set mocked request cookies from the `cookie` header of the original request.
      // No need to take `credentials` into account, because in Node.js requests are intercepted
      // _after_ they happen. Request issuer should have already taken care of sending relevant cookies.
      // Unlike browser, where interception is on the worker level, _before_ the request happens.
      const requestCookiesString = request.headers.get('cookie');
      lib$2.store.hydrate();
      const cookiesFromStore = Array.from((_a = lib$2.store.get(Object.assign(Object.assign({}, request), { url: request.url.toString() }))) === null || _a === void 0 ? void 0 : _a.entries()).reduce((cookies, [name, { value }]) => {
          return Object.assign(cookies, { [name.trim()]: value });
      }, {});
      const cookiesFromDocument = getRequestCookies(request);
      const forwardedCookies = Object.assign(Object.assign({}, cookiesFromDocument), cookiesFromStore);
      // Ensure the persisted (document) cookies are propagated to the request.
      // Propagated the cookies persisted in the Cookuie Store to the request headers.
      // This forwards relevant request cookies based on the request's credentials.
      for (const [name, value] of Object.entries(forwardedCookies)) {
          request.headers.append('cookie', `${name}=${value}`);
      }
      const ownCookies = requestCookiesString
          ? parse_1(requestCookiesString)
          : {};
      request.cookies = Object.assign(Object.assign(Object.assign({}, request.cookies), forwardedCookies), ownCookies);
  }

  function parseContentHeaders(headersString) {
      var _a, _b;
      const headers = lib$7.stringToHeaders(headersString);
      const contentType = headers.get('content-type') || 'text/plain';
      const disposition = headers.get('content-disposition');
      if (!disposition) {
          throw new Error('"Content-Disposition" header is required.');
      }
      const directives = disposition.split(';').reduce((acc, chunk) => {
          const [name, ...rest] = chunk.trim().split('=');
          acc[name] = rest.join('=');
          return acc;
      }, {});
      const name = (_a = directives.name) === null || _a === void 0 ? void 0 : _a.slice(1, -1);
      const filename = (_b = directives.filename) === null || _b === void 0 ? void 0 : _b.slice(1, -1);
      return {
          name,
          filename,
          contentType,
      };
  }
  /**
   * Parses a given string as a multipart/form-data.
   * Does not throw an exception on an invalid multipart string.
   */
  function parseMultipartData(data, headers) {
      const contentType = headers === null || headers === void 0 ? void 0 : headers.get('content-type');
      if (!contentType) {
          return undefined;
      }
      const [, ...directives] = contentType.split(/; */);
      const boundary = directives
          .filter((d) => d.startsWith('boundary='))
          .map((s) => s.replace(/^boundary=/, ''))[0];
      if (!boundary) {
          return undefined;
      }
      const boundaryRegExp = new RegExp(`--+${boundary}`);
      const fields = data
          .split(boundaryRegExp)
          .filter((chunk) => chunk.startsWith('\r\n') && chunk.endsWith('\r\n'))
          .map((chunk) => chunk.trimStart().replace(/\r\n$/, ''));
      if (!fields.length) {
          return undefined;
      }
      const parsedBody = {};
      try {
          for (const field of fields) {
              const [contentHeaders, ...rest] = field.split('\r\n\r\n');
              const contentBody = rest.join('\r\n\r\n');
              const { contentType, filename, name } = parseContentHeaders(contentHeaders);
              const value = filename === undefined
                  ? contentBody
                  : new File([contentBody], filename, { type: contentType });
              const parsedValue = parsedBody[name];
              if (parsedValue === undefined) {
                  parsedBody[name] = value;
              }
              else if (Array.isArray(parsedValue)) {
                  parsedBody[name] = [...parsedValue, value];
              }
              else {
                  parsedBody[name] = [parsedValue, value];
              }
          }
          return parsedBody;
      }
      catch (error) {
          return undefined;
      }
  }

  /**
   * Parses a given request/response body based on the "Content-Type" header.
   */
  function parseBody(body, headers) {
      var _a;
      // Return whatever falsey body value is given.
      if (!body) {
          return body;
      }
      const contentType = ((_a = headers === null || headers === void 0 ? void 0 : headers.get('content-type')) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || '';
      // If the body has a Multipart Content-Type
      // parse it into an object.
      const hasMultipartContent = contentType.startsWith('multipart/form-data');
      if (hasMultipartContent && typeof body !== 'object') {
          return parseMultipartData(body.toString(), headers) || body;
      }
      // If the intercepted request's body has a JSON Content-Type
      // parse it into an object.
      const hasJsonContent = contentType.includes('json');
      if (hasJsonContent && typeof body !== 'object') {
          return jsonParse(body.toString()) || body;
      }
      // Otherwise leave as-is.
      return body;
  }

  /**
   * Performs a case-insensitive comparison of two given strings.
   */
  function isStringEqual(actual, expected) {
      return actual.toLowerCase() === expected.toLowerCase();
  }

  /**
   * Ensures that an empty GET request body is always represented as `undefined`.
   */
  function pruneGetRequestBody(request) {
      if (request.method &&
          isStringEqual(request.method, 'GET') &&
          request.body === '') {
          return undefined;
      }
      return request.body;
  }

  /**
   * Converts a given request received from the Service Worker
   * into a `MockedRequest` instance.
   */
  function parseWorkerRequest(rawRequest) {
      const request = {
          id: rawRequest.id,
          cache: rawRequest.cache,
          credentials: rawRequest.credentials,
          method: rawRequest.method,
          url: new URL(rawRequest.url),
          referrer: rawRequest.referrer,
          referrerPolicy: rawRequest.referrerPolicy,
          redirect: rawRequest.redirect,
          mode: rawRequest.mode,
          params: {},
          cookies: {},
          integrity: rawRequest.integrity,
          keepalive: rawRequest.keepalive,
          destination: rawRequest.destination,
          body: pruneGetRequestBody(rawRequest),
          bodyUsed: rawRequest.bodyUsed,
          headers: new lib$7.Headers(rawRequest.headers),
      };
      // Set document cookies on the request.
      setRequestCookies(request);
      // Parse the request's body based on the "Content-Type" header.
      request.body = parseBody(request.body, request.headers);
      return request;
  }

  /**
   * Returns a mocked response for a given request using following request handlers.
   */
  const getResponse = (request, handlers, resolutionContext) => __awaiter$3(void 0, void 0, void 0, function* () {
      const relevantHandlers = handlers.filter((handler) => {
          return handler.test(request, resolutionContext);
      });
      if (relevantHandlers.length === 0) {
          return {
              handler: undefined,
              response: undefined,
          };
      }
      const result = yield relevantHandlers.reduce((executionResult, handler) => __awaiter$3(void 0, void 0, void 0, function* () {
          const previousResults = yield executionResult;
          if (!!(previousResults === null || previousResults === void 0 ? void 0 : previousResults.response)) {
              return executionResult;
          }
          const result = yield handler.run(request, resolutionContext);
          if (result === null || result.handler.shouldSkip) {
              return null;
          }
          if (!result.response) {
              return {
                  request: result.request,
                  handler: result.handler,
                  response: undefined,
                  parsedResult: result.parsedResult,
              };
          }
          if (result.response.once) {
              handler.markAsSkipped(true);
          }
          return result;
      }), Promise.resolve(null));
      // Although reducing a list of relevant request handlers, it's possible
      // that in the end there will be no handler associted with the request
      // (i.e. if relevant handlers are fall-through).
      if (!result) {
          return {
              handler: undefined,
              response: undefined,
          };
      }
      return {
          handler: result.handler,
          publicRequest: result.request,
          parsedRequest: result.parsedResult,
          response: result.response,
      };
  });

  var jsLevenshtein = (function()
  {
    function _min(d0, d1, d2, bx, ay)
    {
      return d0 < d1 || d2 < d1
          ? d0 > d2
              ? d2 + 1
              : d0 + 1
          : bx === ay
              ? d1
              : d1 + 1;
    }

    return function(a, b)
    {
      if (a === b) {
        return 0;
      }

      if (a.length > b.length) {
        var tmp = a;
        a = b;
        b = tmp;
      }

      var la = a.length;
      var lb = b.length;

      while (la > 0 && (a.charCodeAt(la - 1) === b.charCodeAt(lb - 1))) {
        la--;
        lb--;
      }

      var offset = 0;

      while (offset < la && (a.charCodeAt(offset) === b.charCodeAt(offset))) {
        offset++;
      }

      la -= offset;
      lb -= offset;

      if (la === 0 || lb < 3) {
        return lb;
      }

      var x = 0;
      var y;
      var d0;
      var d1;
      var d2;
      var d3;
      var dd;
      var dy;
      var ay;
      var bx0;
      var bx1;
      var bx2;
      var bx3;

      var vector = [];

      for (y = 0; y < la; y++) {
        vector.push(y + 1);
        vector.push(a.charCodeAt(offset + y));
      }

      var len = vector.length - 1;

      for (; x < lb - 3;) {
        bx0 = b.charCodeAt(offset + (d0 = x));
        bx1 = b.charCodeAt(offset + (d1 = x + 1));
        bx2 = b.charCodeAt(offset + (d2 = x + 2));
        bx3 = b.charCodeAt(offset + (d3 = x + 3));
        dd = (x += 4);
        for (y = 0; y < len; y += 2) {
          dy = vector[y];
          ay = vector[y + 1];
          d0 = _min(dy, d0, d1, bx0, ay);
          d1 = _min(d0, d1, d2, bx1, ay);
          d2 = _min(d1, d2, d3, bx2, ay);
          dd = _min(d2, d3, dd, bx3, ay);
          vector[y] = dd;
          d3 = d2;
          d2 = d1;
          d1 = d0;
          d0 = dy;
        }
      }

      for (; x < lb;) {
        bx0 = b.charCodeAt(offset + (d0 = x));
        dd = ++x;
        for (y = 0; y < len; y += 2) {
          dy = vector[y];
          vector[y] = dd = _min(dy, d0, dd, bx0, vector[y + 1]);
          d0 = dy;
        }
      }

      return dd;
    };
  })();

  var graphql$3 = {};

  var version$1 = {};

  Object.defineProperty(version$1, '__esModule', {
    value: true,
  });
  version$1.versionInfo = version$1.version = void 0;
  // Note: This file is autogenerated using "resources/gen-version.js" script and
  // automatically updated by "npm version" command.

  /**
   * A string containing the version of the GraphQL.js library
   */
  const version = '16.3.0';
  /**
   * An object containing the components of the GraphQL.js version string
   */

  version$1.version = version;
  const versionInfo = Object.freeze({
    major: 16,
    minor: 3,
    patch: 0,
    preReleaseTag: null,
  });
  version$1.versionInfo = versionInfo;

  var graphql$2 = {};

  var devAssert$1 = {};

  Object.defineProperty(devAssert$1, '__esModule', {
    value: true,
  });
  devAssert$1.devAssert = devAssert;

  function devAssert(condition, message) {
    const booleanCondition = Boolean(condition);

    if (!booleanCondition) {
      throw new Error(message);
    }
  }

  var isPromise$1 = {};

  Object.defineProperty(isPromise$1, '__esModule', {
    value: true,
  });
  isPromise$1.isPromise = isPromise;

  /**
   * Returns true if the value acts like a Promise, i.e. has a "then" function,
   * otherwise returns false.
   */
  function isPromise(value) {
    return (
      typeof (value === null || value === void 0 ? void 0 : value.then) ===
      'function'
    );
  }

  var parser = {};

  var syntaxError$1 = {};

  var GraphQLError$1 = {};

  var isObjectLike$1 = {};

  Object.defineProperty(isObjectLike$1, '__esModule', {
    value: true,
  });
  isObjectLike$1.isObjectLike = isObjectLike;

  /**
   * Return true if `value` is object-like. A value is object-like if it's not
   * `null` and has a `typeof` result of "object".
   */
  function isObjectLike(value) {
    return typeof value == 'object' && value !== null;
  }

  var location$1 = {};

  var invariant$1 = {};

  Object.defineProperty(invariant$1, '__esModule', {
    value: true,
  });
  invariant$1.invariant = invariant;

  function invariant(condition, message) {
    const booleanCondition = Boolean(condition);

    if (!booleanCondition) {
      throw new Error(
        message != null ? message : 'Unexpected invariant triggered.',
      );
    }
  }

  Object.defineProperty(location$1, '__esModule', {
    value: true,
  });
  location$1.getLocation = getLocation;

  var _invariant$e = invariant$1;

  const LineRegExp = /\r\n|[\n\r]/g;
  /**
   * Represents a location in a Source.
   */

  /**
   * Takes a Source and a UTF-8 character offset, and returns the corresponding
   * line and column as a SourceLocation.
   */
  function getLocation(source, position) {
    let lastLineStart = 0;
    let line = 1;

    for (const match of source.body.matchAll(LineRegExp)) {
      typeof match.index === 'number' || (0, _invariant$e.invariant)(false);

      if (match.index >= position) {
        break;
      }

      lastLineStart = match.index + match[0].length;
      line += 1;
    }

    return {
      line,
      column: position + 1 - lastLineStart,
    };
  }

  var printLocation$1 = {};

  Object.defineProperty(printLocation$1, '__esModule', {
    value: true,
  });
  printLocation$1.printLocation = printLocation;
  printLocation$1.printSourceLocation = printSourceLocation;

  var _location$1 = location$1;

  /**
   * Render a helpful description of the location in the GraphQL Source document.
   */
  function printLocation(location) {
    return printSourceLocation(
      location.source,
      (0, _location$1.getLocation)(location.source, location.start),
    );
  }
  /**
   * Render a helpful description of the location in the GraphQL Source document.
   */

  function printSourceLocation(source, sourceLocation) {
    const firstLineColumnOffset = source.locationOffset.column - 1;
    const body = ''.padStart(firstLineColumnOffset) + source.body;
    const lineIndex = sourceLocation.line - 1;
    const lineOffset = source.locationOffset.line - 1;
    const lineNum = sourceLocation.line + lineOffset;
    const columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
    const columnNum = sourceLocation.column + columnOffset;
    const locationStr = `${source.name}:${lineNum}:${columnNum}\n`;
    const lines = body.split(/\r\n|[\n\r]/g);
    const locationLine = lines[lineIndex]; // Special case for minified documents

    if (locationLine.length > 120) {
      const subLineIndex = Math.floor(columnNum / 80);
      const subLineColumnNum = columnNum % 80;
      const subLines = [];

      for (let i = 0; i < locationLine.length; i += 80) {
        subLines.push(locationLine.slice(i, i + 80));
      }

      return (
        locationStr +
        printPrefixedLines([
          [`${lineNum} |`, subLines[0]],
          ...subLines.slice(1, subLineIndex + 1).map((subLine) => ['|', subLine]),
          ['|', '^'.padStart(subLineColumnNum)],
          ['|', subLines[subLineIndex + 1]],
        ])
      );
    }

    return (
      locationStr +
      printPrefixedLines([
        // Lines specified like this: ["prefix", "string"],
        [`${lineNum - 1} |`, lines[lineIndex - 1]],
        [`${lineNum} |`, locationLine],
        ['|', '^'.padStart(columnNum)],
        [`${lineNum + 1} |`, lines[lineIndex + 1]],
      ])
    );
  }

  function printPrefixedLines(lines) {
    const existingLines = lines.filter(([_, line]) => line !== undefined);
    const padLen = Math.max(...existingLines.map(([prefix]) => prefix.length));
    return existingLines
      .map(([prefix, line]) => prefix.padStart(padLen) + (line ? ' ' + line : ''))
      .join('\n');
  }

  Object.defineProperty(GraphQLError$1, '__esModule', {
    value: true,
  });
  GraphQLError$1.GraphQLError = void 0;
  GraphQLError$1.formatError = formatError;
  GraphQLError$1.printError = printError;

  var _isObjectLike$8 = isObjectLike$1;

  var _location = location$1;

  var _printLocation = printLocation$1;

  function toNormalizedArgs(args) {
    const firstArg = args[0];

    if (firstArg == null || 'kind' in firstArg || 'length' in firstArg) {
      return {
        nodes: firstArg,
        source: args[1],
        positions: args[2],
        path: args[3],
        originalError: args[4],
        extensions: args[5],
      };
    }

    return firstArg;
  }
  /**
   * A GraphQLError describes an Error found during the parse, validate, or
   * execute phases of performing a GraphQL operation. In addition to a message
   * and stack trace, it also includes information about the locations in a
   * GraphQL document and/or execution result that correspond to the Error.
   */

  class GraphQLError extends Error {
    /**
     * An array of `{ line, column }` locations within the source GraphQL document
     * which correspond to this error.
     *
     * Errors during validation often contain multiple locations, for example to
     * point out two things with the same name. Errors during execution include a
     * single location, the field which produced the error.
     *
     * Enumerable, and appears in the result of JSON.stringify().
     */

    /**
     * An array describing the JSON-path into the execution response which
     * corresponds to this error. Only included for errors during execution.
     *
     * Enumerable, and appears in the result of JSON.stringify().
     */

    /**
     * An array of GraphQL AST Nodes corresponding to this error.
     */

    /**
     * The source GraphQL document for the first location of this error.
     *
     * Note that if this Error represents more than one node, the source may not
     * represent nodes after the first node.
     */

    /**
     * An array of character offsets within the source GraphQL document
     * which correspond to this error.
     */

    /**
     * The original error thrown from a field resolver during execution.
     */

    /**
     * Extension fields to add to the formatted error.
     */

    /**
     * @deprecated Please use the `GraphQLErrorArgs` constructor overload instead.
     */
    constructor(message, ...rawArgs) {
      var _this$nodes, _nodeLocations$, _ref;

      const { nodes, source, positions, path, originalError, extensions } =
        toNormalizedArgs(rawArgs);
      super(message);
      this.name = 'GraphQLError';
      this.path = path !== null && path !== void 0 ? path : undefined;
      this.originalError =
        originalError !== null && originalError !== void 0
          ? originalError
          : undefined; // Compute list of blame nodes.

      this.nodes = undefinedIfEmpty(
        Array.isArray(nodes) ? nodes : nodes ? [nodes] : undefined,
      );
      const nodeLocations = undefinedIfEmpty(
        (_this$nodes = this.nodes) === null || _this$nodes === void 0
          ? void 0
          : _this$nodes.map((node) => node.loc).filter((loc) => loc != null),
      ); // Compute locations in the source for the given nodes/positions.

      this.source =
        source !== null && source !== void 0
          ? source
          : nodeLocations === null || nodeLocations === void 0
          ? void 0
          : (_nodeLocations$ = nodeLocations[0]) === null ||
            _nodeLocations$ === void 0
          ? void 0
          : _nodeLocations$.source;
      this.positions =
        positions !== null && positions !== void 0
          ? positions
          : nodeLocations === null || nodeLocations === void 0
          ? void 0
          : nodeLocations.map((loc) => loc.start);
      this.locations =
        positions && source
          ? positions.map((pos) => (0, _location.getLocation)(source, pos))
          : nodeLocations === null || nodeLocations === void 0
          ? void 0
          : nodeLocations.map((loc) =>
              (0, _location.getLocation)(loc.source, loc.start),
            );
      const originalExtensions = (0, _isObjectLike$8.isObjectLike)(
        originalError === null || originalError === void 0
          ? void 0
          : originalError.extensions,
      )
        ? originalError === null || originalError === void 0
          ? void 0
          : originalError.extensions
        : undefined;
      this.extensions =
        (_ref =
          extensions !== null && extensions !== void 0
            ? extensions
            : originalExtensions) !== null && _ref !== void 0
          ? _ref
          : Object.create(null); // Only properties prescribed by the spec should be enumerable.
      // Keep the rest as non-enumerable.

      Object.defineProperties(this, {
        message: {
          writable: true,
          enumerable: true,
        },
        name: {
          enumerable: false,
        },
        nodes: {
          enumerable: false,
        },
        source: {
          enumerable: false,
        },
        positions: {
          enumerable: false,
        },
        originalError: {
          enumerable: false,
        },
      }); // Include (non-enumerable) stack trace.

      /* c8 ignore start */
      // FIXME: https://github.com/graphql/graphql-js/issues/2317

      if (
        originalError !== null &&
        originalError !== void 0 &&
        originalError.stack
      ) {
        Object.defineProperty(this, 'stack', {
          value: originalError.stack,
          writable: true,
          configurable: true,
        });
      } else if (Error.captureStackTrace) {
        Error.captureStackTrace(this, GraphQLError);
      } else {
        Object.defineProperty(this, 'stack', {
          value: Error().stack,
          writable: true,
          configurable: true,
        });
      }
      /* c8 ignore stop */
    }

    get [Symbol.toStringTag]() {
      return 'GraphQLError';
    }

    toString() {
      let output = this.message;

      if (this.nodes) {
        for (const node of this.nodes) {
          if (node.loc) {
            output += '\n\n' + (0, _printLocation.printLocation)(node.loc);
          }
        }
      } else if (this.source && this.locations) {
        for (const location of this.locations) {
          output +=
            '\n\n' +
            (0, _printLocation.printSourceLocation)(this.source, location);
        }
      }

      return output;
    }

    toJSON() {
      const formattedError = {
        message: this.message,
      };

      if (this.locations != null) {
        formattedError.locations = this.locations;
      }

      if (this.path != null) {
        formattedError.path = this.path;
      }

      if (this.extensions != null && Object.keys(this.extensions).length > 0) {
        formattedError.extensions = this.extensions;
      }

      return formattedError;
    }
  }

  GraphQLError$1.GraphQLError = GraphQLError;

  function undefinedIfEmpty(array) {
    return array === undefined || array.length === 0 ? undefined : array;
  }
  /**
   * See: https://spec.graphql.org/draft/#sec-Errors
   */

  /**
   * Prints a GraphQLError to a string, representing useful location information
   * about the error's position in the source.
   *
   * @deprecated Please use `error.toString` instead. Will be removed in v17
   */
  function printError(error) {
    return error.toString();
  }
  /**
   * Given a GraphQLError, format it according to the rules described by the
   * Response Format, Errors section of the GraphQL Specification.
   *
   * @deprecated Please use `error.toString` instead. Will be removed in v17
   */

  function formatError(error) {
    return error.toJSON();
  }

  Object.defineProperty(syntaxError$1, '__esModule', {
    value: true,
  });
  syntaxError$1.syntaxError = syntaxError;

  var _GraphQLError$M = GraphQLError$1;

  /**
   * Produces a GraphQLError representing a syntax error, containing useful
   * descriptive information about the syntax error's position in the source.
   */
  function syntaxError(source, position, description) {
    return new _GraphQLError$M.GraphQLError(
      `Syntax Error: ${description}`,
      undefined,
      source,
      [position],
    );
  }

  var ast = {};

  Object.defineProperty(ast, '__esModule', {
    value: true,
  });
  ast.Token =
    ast.QueryDocumentKeys =
    ast.OperationTypeNode =
    ast.Location =
      void 0;
  ast.isNode = isNode;

  /**
   * Contains a range of UTF-8 character offsets and token references that
   * identify the region of the source from which the AST derived.
   */
  class Location {
    /**
     * The character offset at which this Node begins.
     */

    /**
     * The character offset at which this Node ends.
     */

    /**
     * The Token at which this Node begins.
     */

    /**
     * The Token at which this Node ends.
     */

    /**
     * The Source document the AST represents.
     */
    constructor(startToken, endToken, source) {
      this.start = startToken.start;
      this.end = endToken.end;
      this.startToken = startToken;
      this.endToken = endToken;
      this.source = source;
    }

    get [Symbol.toStringTag]() {
      return 'Location';
    }

    toJSON() {
      return {
        start: this.start,
        end: this.end,
      };
    }
  }
  /**
   * Represents a range of characters represented by a lexical token
   * within a Source.
   */

  ast.Location = Location;

  class Token {
    /**
     * The kind of Token.
     */

    /**
     * The character offset at which this Node begins.
     */

    /**
     * The character offset at which this Node ends.
     */

    /**
     * The 1-indexed line number on which this Token appears.
     */

    /**
     * The 1-indexed column number at which this Token begins.
     */

    /**
     * For non-punctuation tokens, represents the interpreted value of the token.
     *
     * Note: is undefined for punctuation tokens, but typed as string for
     * convenience in the parser.
     */

    /**
     * Tokens exist as nodes in a double-linked-list amongst all tokens
     * including ignored tokens. <SOF> is always the first node and <EOF>
     * the last.
     */
    constructor(kind, start, end, line, column, value) {
      this.kind = kind;
      this.start = start;
      this.end = end;
      this.line = line;
      this.column = column; // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

      this.value = value;
      this.prev = null;
      this.next = null;
    }

    get [Symbol.toStringTag]() {
      return 'Token';
    }

    toJSON() {
      return {
        kind: this.kind,
        value: this.value,
        line: this.line,
        column: this.column,
      };
    }
  }
  /**
   * The list of all possible AST node types.
   */

  ast.Token = Token;

  /**
   * @internal
   */
  const QueryDocumentKeys = {
    Name: [],
    Document: ['definitions'],
    OperationDefinition: [
      'name',
      'variableDefinitions',
      'directives',
      'selectionSet',
    ],
    VariableDefinition: ['variable', 'type', 'defaultValue', 'directives'],
    Variable: ['name'],
    SelectionSet: ['selections'],
    Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
    Argument: ['name', 'value'],
    FragmentSpread: ['name', 'directives'],
    InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
    FragmentDefinition: [
      'name', // Note: fragment variable definitions are deprecated and will removed in v17.0.0
      'variableDefinitions',
      'typeCondition',
      'directives',
      'selectionSet',
    ],
    IntValue: [],
    FloatValue: [],
    StringValue: [],
    BooleanValue: [],
    NullValue: [],
    EnumValue: [],
    ListValue: ['values'],
    ObjectValue: ['fields'],
    ObjectField: ['name', 'value'],
    Directive: ['name', 'arguments'],
    NamedType: ['name'],
    ListType: ['type'],
    NonNullType: ['type'],
    SchemaDefinition: ['description', 'directives', 'operationTypes'],
    OperationTypeDefinition: ['type'],
    ScalarTypeDefinition: ['description', 'name', 'directives'],
    ObjectTypeDefinition: [
      'description',
      'name',
      'interfaces',
      'directives',
      'fields',
    ],
    FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
    InputValueDefinition: [
      'description',
      'name',
      'type',
      'defaultValue',
      'directives',
    ],
    InterfaceTypeDefinition: [
      'description',
      'name',
      'interfaces',
      'directives',
      'fields',
    ],
    UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
    EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
    EnumValueDefinition: ['description', 'name', 'directives'],
    InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],
    DirectiveDefinition: ['description', 'name', 'arguments', 'locations'],
    SchemaExtension: ['directives', 'operationTypes'],
    ScalarTypeExtension: ['name', 'directives'],
    ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
    InterfaceTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
    UnionTypeExtension: ['name', 'directives', 'types'],
    EnumTypeExtension: ['name', 'directives', 'values'],
    InputObjectTypeExtension: ['name', 'directives', 'fields'],
  };
  ast.QueryDocumentKeys = QueryDocumentKeys;
  const kindValues = new Set(Object.keys(QueryDocumentKeys));
  /**
   * @internal
   */

  function isNode(maybeNode) {
    const maybeKind =
      maybeNode === null || maybeNode === void 0 ? void 0 : maybeNode.kind;
    return typeof maybeKind === 'string' && kindValues.has(maybeKind);
  }
  /** Name */

  let OperationTypeNode;
  ast.OperationTypeNode = OperationTypeNode;

  (function (OperationTypeNode) {
    OperationTypeNode['QUERY'] = 'query';
    OperationTypeNode['MUTATION'] = 'mutation';
    OperationTypeNode['SUBSCRIPTION'] = 'subscription';
  })(OperationTypeNode || (ast.OperationTypeNode = OperationTypeNode = {}));

  var directiveLocation = {};

  Object.defineProperty(directiveLocation, '__esModule', {
    value: true,
  });
  directiveLocation.DirectiveLocation = void 0;

  /**
   * The set of allowed directive location values.
   */
  let DirectiveLocation;
  /**
   * The enum type representing the directive location values.
   *
   * @deprecated Please use `DirectiveLocation`. Will be remove in v17.
   */

  directiveLocation.DirectiveLocation = DirectiveLocation;

  (function (DirectiveLocation) {
    DirectiveLocation['QUERY'] = 'QUERY';
    DirectiveLocation['MUTATION'] = 'MUTATION';
    DirectiveLocation['SUBSCRIPTION'] = 'SUBSCRIPTION';
    DirectiveLocation['FIELD'] = 'FIELD';
    DirectiveLocation['FRAGMENT_DEFINITION'] = 'FRAGMENT_DEFINITION';
    DirectiveLocation['FRAGMENT_SPREAD'] = 'FRAGMENT_SPREAD';
    DirectiveLocation['INLINE_FRAGMENT'] = 'INLINE_FRAGMENT';
    DirectiveLocation['VARIABLE_DEFINITION'] = 'VARIABLE_DEFINITION';
    DirectiveLocation['SCHEMA'] = 'SCHEMA';
    DirectiveLocation['SCALAR'] = 'SCALAR';
    DirectiveLocation['OBJECT'] = 'OBJECT';
    DirectiveLocation['FIELD_DEFINITION'] = 'FIELD_DEFINITION';
    DirectiveLocation['ARGUMENT_DEFINITION'] = 'ARGUMENT_DEFINITION';
    DirectiveLocation['INTERFACE'] = 'INTERFACE';
    DirectiveLocation['UNION'] = 'UNION';
    DirectiveLocation['ENUM'] = 'ENUM';
    DirectiveLocation['ENUM_VALUE'] = 'ENUM_VALUE';
    DirectiveLocation['INPUT_OBJECT'] = 'INPUT_OBJECT';
    DirectiveLocation['INPUT_FIELD_DEFINITION'] = 'INPUT_FIELD_DEFINITION';
  })(DirectiveLocation || (directiveLocation.DirectiveLocation = DirectiveLocation = {}));

  var kinds = {};

  Object.defineProperty(kinds, '__esModule', {
    value: true,
  });
  kinds.Kind = void 0;

  /**
   * The set of allowed kind values for AST nodes.
   */
  let Kind;
  /**
   * The enum type representing the possible kind values of AST nodes.
   *
   * @deprecated Please use `Kind`. Will be remove in v17.
   */

  kinds.Kind = Kind;

  (function (Kind) {
    Kind['NAME'] = 'Name';
    Kind['DOCUMENT'] = 'Document';
    Kind['OPERATION_DEFINITION'] = 'OperationDefinition';
    Kind['VARIABLE_DEFINITION'] = 'VariableDefinition';
    Kind['SELECTION_SET'] = 'SelectionSet';
    Kind['FIELD'] = 'Field';
    Kind['ARGUMENT'] = 'Argument';
    Kind['FRAGMENT_SPREAD'] = 'FragmentSpread';
    Kind['INLINE_FRAGMENT'] = 'InlineFragment';
    Kind['FRAGMENT_DEFINITION'] = 'FragmentDefinition';
    Kind['VARIABLE'] = 'Variable';
    Kind['INT'] = 'IntValue';
    Kind['FLOAT'] = 'FloatValue';
    Kind['STRING'] = 'StringValue';
    Kind['BOOLEAN'] = 'BooleanValue';
    Kind['NULL'] = 'NullValue';
    Kind['ENUM'] = 'EnumValue';
    Kind['LIST'] = 'ListValue';
    Kind['OBJECT'] = 'ObjectValue';
    Kind['OBJECT_FIELD'] = 'ObjectField';
    Kind['DIRECTIVE'] = 'Directive';
    Kind['NAMED_TYPE'] = 'NamedType';
    Kind['LIST_TYPE'] = 'ListType';
    Kind['NON_NULL_TYPE'] = 'NonNullType';
    Kind['SCHEMA_DEFINITION'] = 'SchemaDefinition';
    Kind['OPERATION_TYPE_DEFINITION'] = 'OperationTypeDefinition';
    Kind['SCALAR_TYPE_DEFINITION'] = 'ScalarTypeDefinition';
    Kind['OBJECT_TYPE_DEFINITION'] = 'ObjectTypeDefinition';
    Kind['FIELD_DEFINITION'] = 'FieldDefinition';
    Kind['INPUT_VALUE_DEFINITION'] = 'InputValueDefinition';
    Kind['INTERFACE_TYPE_DEFINITION'] = 'InterfaceTypeDefinition';
    Kind['UNION_TYPE_DEFINITION'] = 'UnionTypeDefinition';
    Kind['ENUM_TYPE_DEFINITION'] = 'EnumTypeDefinition';
    Kind['ENUM_VALUE_DEFINITION'] = 'EnumValueDefinition';
    Kind['INPUT_OBJECT_TYPE_DEFINITION'] = 'InputObjectTypeDefinition';
    Kind['DIRECTIVE_DEFINITION'] = 'DirectiveDefinition';
    Kind['SCHEMA_EXTENSION'] = 'SchemaExtension';
    Kind['SCALAR_TYPE_EXTENSION'] = 'ScalarTypeExtension';
    Kind['OBJECT_TYPE_EXTENSION'] = 'ObjectTypeExtension';
    Kind['INTERFACE_TYPE_EXTENSION'] = 'InterfaceTypeExtension';
    Kind['UNION_TYPE_EXTENSION'] = 'UnionTypeExtension';
    Kind['ENUM_TYPE_EXTENSION'] = 'EnumTypeExtension';
    Kind['INPUT_OBJECT_TYPE_EXTENSION'] = 'InputObjectTypeExtension';
  })(Kind || (kinds.Kind = Kind = {}));

  var lexer$1 = {};

  var blockString = {};

  var characterClasses = {};

  Object.defineProperty(characterClasses, '__esModule', {
    value: true,
  });
  characterClasses.isDigit = isDigit$1;
  characterClasses.isLetter = isLetter;
  characterClasses.isNameContinue = isNameContinue;
  characterClasses.isNameStart = isNameStart;
  characterClasses.isWhiteSpace = isWhiteSpace;

  /**
   * ```
   * WhiteSpace ::
   *   - "Horizontal Tab (U+0009)"
   *   - "Space (U+0020)"
   * ```
   * @internal
   */
  function isWhiteSpace(code) {
    return code === 0x0009 || code === 0x0020;
  }
  /**
   * ```
   * Digit :: one of
   *   - `0` `1` `2` `3` `4` `5` `6` `7` `8` `9`
   * ```
   * @internal
   */

  function isDigit$1(code) {
    return code >= 0x0030 && code <= 0x0039;
  }
  /**
   * ```
   * Letter :: one of
   *   - `A` `B` `C` `D` `E` `F` `G` `H` `I` `J` `K` `L` `M`
   *   - `N` `O` `P` `Q` `R` `S` `T` `U` `V` `W` `X` `Y` `Z`
   *   - `a` `b` `c` `d` `e` `f` `g` `h` `i` `j` `k` `l` `m`
   *   - `n` `o` `p` `q` `r` `s` `t` `u` `v` `w` `x` `y` `z`
   * ```
   * @internal
   */

  function isLetter(code) {
    return (
      (code >= 0x0061 && code <= 0x007a) || // A-Z
      (code >= 0x0041 && code <= 0x005a) // a-z
    );
  }
  /**
   * ```
   * NameStart ::
   *   - Letter
   *   - `_`
   * ```
   * @internal
   */

  function isNameStart(code) {
    return isLetter(code) || code === 0x005f;
  }
  /**
   * ```
   * NameContinue ::
   *   - Letter
   *   - Digit
   *   - `_`
   * ```
   * @internal
   */

  function isNameContinue(code) {
    return isLetter(code) || isDigit$1(code) || code === 0x005f;
  }

  Object.defineProperty(blockString, '__esModule', {
    value: true,
  });
  blockString.dedentBlockStringLines = dedentBlockStringLines;
  blockString.isPrintableAsBlockString = isPrintableAsBlockString;
  blockString.printBlockString = printBlockString;

  var _characterClasses$2 = characterClasses;

  /**
   * Produces the value of a block string from its parsed raw value, similar to
   * CoffeeScript's block string, Python's docstring trim or Ruby's strip_heredoc.
   *
   * This implements the GraphQL spec's BlockStringValue() static algorithm.
   *
   * @internal
   */
  function dedentBlockStringLines(lines) {
    var _firstNonEmptyLine2;

    let commonIndent = Number.MAX_SAFE_INTEGER;
    let firstNonEmptyLine = null;
    let lastNonEmptyLine = -1;

    for (let i = 0; i < lines.length; ++i) {
      var _firstNonEmptyLine;

      const line = lines[i];
      const indent = leadingWhitespace(line);

      if (indent === line.length) {
        continue; // skip empty lines
      }

      firstNonEmptyLine =
        (_firstNonEmptyLine = firstNonEmptyLine) !== null &&
        _firstNonEmptyLine !== void 0
          ? _firstNonEmptyLine
          : i;
      lastNonEmptyLine = i;

      if (i !== 0 && indent < commonIndent) {
        commonIndent = indent;
      }
    }

    return lines // Remove common indentation from all lines but first.
      .map((line, i) => (i === 0 ? line : line.slice(commonIndent))) // Remove leading and trailing blank lines.
      .slice(
        (_firstNonEmptyLine2 = firstNonEmptyLine) !== null &&
          _firstNonEmptyLine2 !== void 0
          ? _firstNonEmptyLine2
          : 0,
        lastNonEmptyLine + 1,
      );
  }

  function leadingWhitespace(str) {
    let i = 0;

    while (
      i < str.length &&
      (0, _characterClasses$2.isWhiteSpace)(str.charCodeAt(i))
    ) {
      ++i;
    }

    return i;
  }
  /**
   * @internal
   */

  function isPrintableAsBlockString(value) {
    if (value === '') {
      return true; // empty string is printable
    }

    let isEmptyLine = true;
    let hasIndent = false;
    let hasCommonIndent = true;
    let seenNonEmptyLine = false;

    for (let i = 0; i < value.length; ++i) {
      switch (value.codePointAt(i)) {
        case 0x0000:
        case 0x0001:
        case 0x0002:
        case 0x0003:
        case 0x0004:
        case 0x0005:
        case 0x0006:
        case 0x0007:
        case 0x0008:
        case 0x000b:
        case 0x000c:
        case 0x000e:
        case 0x000f:
          return false;
        // Has non-printable characters

        case 0x000d:
          //  \r
          return false;
        // Has \r or \r\n which will be replaced as \n

        case 10:
          //  \n
          if (isEmptyLine && !seenNonEmptyLine) {
            return false; // Has leading new line
          }

          seenNonEmptyLine = true;
          isEmptyLine = true;
          hasIndent = false;
          break;

        case 9: //   \t

        case 32:
          //  <space>
          hasIndent || (hasIndent = isEmptyLine);
          break;

        default:
          hasCommonIndent && (hasCommonIndent = hasIndent);
          isEmptyLine = false;
      }
    }

    if (isEmptyLine) {
      return false; // Has trailing empty lines
    }

    if (hasCommonIndent && seenNonEmptyLine) {
      return false; // Has internal indent
    }

    return true;
  }
  /**
   * Print a block string in the indented block form by adding a leading and
   * trailing blank line. However, if a block string starts with whitespace and is
   * a single-line, adding a leading blank line would strip that whitespace.
   *
   * @internal
   */

  function printBlockString(value, options) {
    const escapedValue = value.replace(/"""/g, '\\"""'); // Expand a block string's raw value into independent lines.

    const lines = escapedValue.split(/\r\n|[\n\r]/g);
    const isSingleLine = lines.length === 1; // If common indentation is found we can fix some of those cases by adding leading new line

    const forceLeadingNewLine =
      lines.length > 1 &&
      lines
        .slice(1)
        .every(
          (line) =>
            line.length === 0 ||
            (0, _characterClasses$2.isWhiteSpace)(line.charCodeAt(0)),
        ); // Trailing triple quotes just looks confusing but doesn't force trailing new line

    const hasTrailingTripleQuotes = escapedValue.endsWith('\\"""'); // Trailing quote (single or double) or slash forces trailing new line

    const hasTrailingQuote = value.endsWith('"') && !hasTrailingTripleQuotes;
    const hasTrailingSlash = value.endsWith('\\');
    const forceTrailingNewline = hasTrailingQuote || hasTrailingSlash;
    const printAsMultipleLines =
      !(options !== null && options !== void 0 && options.minimize) && // add leading and trailing new lines only if it improves readability
      (!isSingleLine ||
        value.length > 70 ||
        forceTrailingNewline ||
        forceLeadingNewLine ||
        hasTrailingTripleQuotes);
    let result = ''; // Format a multi-line block quote to account for leading space.

    const skipLeadingNewLine =
      isSingleLine && (0, _characterClasses$2.isWhiteSpace)(value.charCodeAt(0));

    if ((printAsMultipleLines && !skipLeadingNewLine) || forceLeadingNewLine) {
      result += '\n';
    }

    result += escapedValue;

    if (printAsMultipleLines || forceTrailingNewline) {
      result += '\n';
    }

    return '"""' + result + '"""';
  }

  var tokenKind = {};

  Object.defineProperty(tokenKind, '__esModule', {
    value: true,
  });
  tokenKind.TokenKind = void 0;

  /**
   * An exported enum describing the different kinds of tokens that the
   * lexer emits.
   */
  let TokenKind;
  /**
   * The enum type representing the token kinds values.
   *
   * @deprecated Please use `TokenKind`. Will be remove in v17.
   */

  tokenKind.TokenKind = TokenKind;

  (function (TokenKind) {
    TokenKind['SOF'] = '<SOF>';
    TokenKind['EOF'] = '<EOF>';
    TokenKind['BANG'] = '!';
    TokenKind['DOLLAR'] = '$';
    TokenKind['AMP'] = '&';
    TokenKind['PAREN_L'] = '(';
    TokenKind['PAREN_R'] = ')';
    TokenKind['SPREAD'] = '...';
    TokenKind['COLON'] = ':';
    TokenKind['EQUALS'] = '=';
    TokenKind['AT'] = '@';
    TokenKind['BRACKET_L'] = '[';
    TokenKind['BRACKET_R'] = ']';
    TokenKind['BRACE_L'] = '{';
    TokenKind['PIPE'] = '|';
    TokenKind['BRACE_R'] = '}';
    TokenKind['NAME'] = 'Name';
    TokenKind['INT'] = 'Int';
    TokenKind['FLOAT'] = 'Float';
    TokenKind['STRING'] = 'String';
    TokenKind['BLOCK_STRING'] = 'BlockString';
    TokenKind['COMMENT'] = 'Comment';
  })(TokenKind || (tokenKind.TokenKind = TokenKind = {}));

  Object.defineProperty(lexer$1, '__esModule', {
    value: true,
  });
  lexer$1.Lexer = void 0;
  lexer$1.isPunctuatorTokenKind = isPunctuatorTokenKind;

  var _syntaxError$1 = syntaxError$1;

  var _ast$7 = ast;

  var _blockString$3 = blockString;

  var _characterClasses$1 = characterClasses;

  var _tokenKind$2 = tokenKind;

  /**
   * Given a Source object, creates a Lexer for that source.
   * A Lexer is a stateful stream generator in that every time
   * it is advanced, it returns the next token in the Source. Assuming the
   * source lexes, the final Token emitted by the lexer will be of kind
   * EOF, after which the lexer will repeatedly return the same EOF token
   * whenever called.
   */
  class Lexer {
    /**
     * The previously focused non-ignored token.
     */

    /**
     * The currently focused non-ignored token.
     */

    /**
     * The (1-indexed) line containing the current token.
     */

    /**
     * The character offset at which the current line begins.
     */
    constructor(source) {
      const startOfFileToken = new _ast$7.Token(
        _tokenKind$2.TokenKind.SOF,
        0,
        0,
        0,
        0,
      );
      this.source = source;
      this.lastToken = startOfFileToken;
      this.token = startOfFileToken;
      this.line = 1;
      this.lineStart = 0;
    }

    get [Symbol.toStringTag]() {
      return 'Lexer';
    }
    /**
     * Advances the token stream to the next non-ignored token.
     */

    advance() {
      this.lastToken = this.token;
      const token = (this.token = this.lookahead());
      return token;
    }
    /**
     * Looks ahead and returns the next non-ignored token, but does not change
     * the state of Lexer.
     */

    lookahead() {
      let token = this.token;

      if (token.kind !== _tokenKind$2.TokenKind.EOF) {
        do {
          if (token.next) {
            token = token.next;
          } else {
            // Read the next token and form a link in the token linked-list.
            const nextToken = readNextToken(this, token.end); // @ts-expect-error next is only mutable during parsing.

            token.next = nextToken; // @ts-expect-error prev is only mutable during parsing.

            nextToken.prev = token;
            token = nextToken;
          }
        } while (token.kind === _tokenKind$2.TokenKind.COMMENT);
      }

      return token;
    }
  }
  /**
   * @internal
   */

  lexer$1.Lexer = Lexer;

  function isPunctuatorTokenKind(kind) {
    return (
      kind === _tokenKind$2.TokenKind.BANG ||
      kind === _tokenKind$2.TokenKind.DOLLAR ||
      kind === _tokenKind$2.TokenKind.AMP ||
      kind === _tokenKind$2.TokenKind.PAREN_L ||
      kind === _tokenKind$2.TokenKind.PAREN_R ||
      kind === _tokenKind$2.TokenKind.SPREAD ||
      kind === _tokenKind$2.TokenKind.COLON ||
      kind === _tokenKind$2.TokenKind.EQUALS ||
      kind === _tokenKind$2.TokenKind.AT ||
      kind === _tokenKind$2.TokenKind.BRACKET_L ||
      kind === _tokenKind$2.TokenKind.BRACKET_R ||
      kind === _tokenKind$2.TokenKind.BRACE_L ||
      kind === _tokenKind$2.TokenKind.PIPE ||
      kind === _tokenKind$2.TokenKind.BRACE_R
    );
  }
  /**
   * A Unicode scalar value is any Unicode code point except surrogate code
   * points. In other words, the inclusive ranges of values 0x0000 to 0xD7FF and
   * 0xE000 to 0x10FFFF.
   *
   * SourceCharacter ::
   *   - "Any Unicode scalar value"
   */

  function isUnicodeScalarValue(code) {
    return (
      (code >= 0x0000 && code <= 0xd7ff) || (code >= 0xe000 && code <= 0x10ffff)
    );
  }
  /**
   * The GraphQL specification defines source text as a sequence of unicode scalar
   * values (which Unicode defines to exclude surrogate code points). However
   * JavaScript defines strings as a sequence of UTF-16 code units which may
   * include surrogates. A surrogate pair is a valid source character as it
   * encodes a supplementary code point (above U+FFFF), but unpaired surrogate
   * code points are not valid source characters.
   */

  function isSupplementaryCodePoint(body, location) {
    return (
      isLeadingSurrogate(body.charCodeAt(location)) &&
      isTrailingSurrogate(body.charCodeAt(location + 1))
    );
  }

  function isLeadingSurrogate(code) {
    return code >= 0xd800 && code <= 0xdbff;
  }

  function isTrailingSurrogate(code) {
    return code >= 0xdc00 && code <= 0xdfff;
  }
  /**
   * Prints the code point (or end of file reference) at a given location in a
   * source for use in error messages.
   *
   * Printable ASCII is printed quoted, while other points are printed in Unicode
   * code point form (ie. U+1234).
   */

  function printCodePointAt(lexer, location) {
    const code = lexer.source.body.codePointAt(location);

    if (code === undefined) {
      return _tokenKind$2.TokenKind.EOF;
    } else if (code >= 0x0020 && code <= 0x007e) {
      // Printable ASCII
      const char = String.fromCodePoint(code);
      return char === '"' ? "'\"'" : `"${char}"`;
    } // Unicode code point

    return 'U+' + code.toString(16).toUpperCase().padStart(4, '0');
  }
  /**
   * Create a token with line and column location information.
   */

  function createToken(lexer, kind, start, end, value) {
    const line = lexer.line;
    const col = 1 + start - lexer.lineStart;
    return new _ast$7.Token(kind, start, end, line, col, value);
  }
  /**
   * Gets the next token from the source starting at the given position.
   *
   * This skips over whitespace until it finds the next lexable token, then lexes
   * punctuators immediately or calls the appropriate helper function for more
   * complicated tokens.
   */

  function readNextToken(lexer, start) {
    const body = lexer.source.body;
    const bodyLength = body.length;
    let position = start;

    while (position < bodyLength) {
      const code = body.charCodeAt(position); // SourceCharacter

      switch (code) {
        // Ignored ::
        //   - UnicodeBOM
        //   - WhiteSpace
        //   - LineTerminator
        //   - Comment
        //   - Comma
        //
        // UnicodeBOM :: "Byte Order Mark (U+FEFF)"
        //
        // WhiteSpace ::
        //   - "Horizontal Tab (U+0009)"
        //   - "Space (U+0020)"
        //
        // Comma :: ,
        case 0xfeff: // <BOM>

        case 0x0009: // \t

        case 0x0020: // <space>

        case 0x002c:
          // ,
          ++position;
          continue;
        // LineTerminator ::
        //   - "New Line (U+000A)"
        //   - "Carriage Return (U+000D)" [lookahead != "New Line (U+000A)"]
        //   - "Carriage Return (U+000D)" "New Line (U+000A)"

        case 0x000a:
          // \n
          ++position;
          ++lexer.line;
          lexer.lineStart = position;
          continue;

        case 0x000d:
          // \r
          if (body.charCodeAt(position + 1) === 0x000a) {
            position += 2;
          } else {
            ++position;
          }

          ++lexer.line;
          lexer.lineStart = position;
          continue;
        // Comment

        case 0x0023:
          // #
          return readComment(lexer, position);
        // Token ::
        //   - Punctuator
        //   - Name
        //   - IntValue
        //   - FloatValue
        //   - StringValue
        //
        // Punctuator :: one of ! $ & ( ) ... : = @ [ ] { | }

        case 0x0021:
          // !
          return createToken(
            lexer,
            _tokenKind$2.TokenKind.BANG,
            position,
            position + 1,
          );

        case 0x0024:
          // $
          return createToken(
            lexer,
            _tokenKind$2.TokenKind.DOLLAR,
            position,
            position + 1,
          );

        case 0x0026:
          // &
          return createToken(
            lexer,
            _tokenKind$2.TokenKind.AMP,
            position,
            position + 1,
          );

        case 0x0028:
          // (
          return createToken(
            lexer,
            _tokenKind$2.TokenKind.PAREN_L,
            position,
            position + 1,
          );

        case 0x0029:
          // )
          return createToken(
            lexer,
            _tokenKind$2.TokenKind.PAREN_R,
            position,
            position + 1,
          );

        case 0x002e:
          // .
          if (
            body.charCodeAt(position + 1) === 0x002e &&
            body.charCodeAt(position + 2) === 0x002e
          ) {
            return createToken(
              lexer,
              _tokenKind$2.TokenKind.SPREAD,
              position,
              position + 3,
            );
          }

          break;

        case 0x003a:
          // :
          return createToken(
            lexer,
            _tokenKind$2.TokenKind.COLON,
            position,
            position + 1,
          );

        case 0x003d:
          // =
          return createToken(
            lexer,
            _tokenKind$2.TokenKind.EQUALS,
            position,
            position + 1,
          );

        case 0x0040:
          // @
          return createToken(
            lexer,
            _tokenKind$2.TokenKind.AT,
            position,
            position + 1,
          );

        case 0x005b:
          // [
          return createToken(
            lexer,
            _tokenKind$2.TokenKind.BRACKET_L,
            position,
            position + 1,
          );

        case 0x005d:
          // ]
          return createToken(
            lexer,
            _tokenKind$2.TokenKind.BRACKET_R,
            position,
            position + 1,
          );

        case 0x007b:
          // {
          return createToken(
            lexer,
            _tokenKind$2.TokenKind.BRACE_L,
            position,
            position + 1,
          );

        case 0x007c:
          // |
          return createToken(
            lexer,
            _tokenKind$2.TokenKind.PIPE,
            position,
            position + 1,
          );

        case 0x007d:
          // }
          return createToken(
            lexer,
            _tokenKind$2.TokenKind.BRACE_R,
            position,
            position + 1,
          );
        // StringValue

        case 0x0022:
          // "
          if (
            body.charCodeAt(position + 1) === 0x0022 &&
            body.charCodeAt(position + 2) === 0x0022
          ) {
            return readBlockString(lexer, position);
          }

          return readString(lexer, position);
      } // IntValue | FloatValue (Digit | -)

      if ((0, _characterClasses$1.isDigit)(code) || code === 0x002d) {
        return readNumber(lexer, position, code);
      } // Name

      if ((0, _characterClasses$1.isNameStart)(code)) {
        return readName(lexer, position);
      }

      throw (0, _syntaxError$1.syntaxError)(
        lexer.source,
        position,
        code === 0x0027
          ? 'Unexpected single quote character (\'), did you mean to use a double quote (")?'
          : isUnicodeScalarValue(code) || isSupplementaryCodePoint(body, position)
          ? `Unexpected character: ${printCodePointAt(lexer, position)}.`
          : `Invalid character: ${printCodePointAt(lexer, position)}.`,
      );
    }

    return createToken(lexer, _tokenKind$2.TokenKind.EOF, bodyLength, bodyLength);
  }
  /**
   * Reads a comment token from the source file.
   *
   * ```
   * Comment :: # CommentChar* [lookahead != CommentChar]
   *
   * CommentChar :: SourceCharacter but not LineTerminator
   * ```
   */

  function readComment(lexer, start) {
    const body = lexer.source.body;
    const bodyLength = body.length;
    let position = start + 1;

    while (position < bodyLength) {
      const code = body.charCodeAt(position); // LineTerminator (\n | \r)

      if (code === 0x000a || code === 0x000d) {
        break;
      } // SourceCharacter

      if (isUnicodeScalarValue(code)) {
        ++position;
      } else if (isSupplementaryCodePoint(body, position)) {
        position += 2;
      } else {
        break;
      }
    }

    return createToken(
      lexer,
      _tokenKind$2.TokenKind.COMMENT,
      start,
      position,
      body.slice(start + 1, position),
    );
  }
  /**
   * Reads a number token from the source file, either a FloatValue or an IntValue
   * depending on whether a FractionalPart or ExponentPart is encountered.
   *
   * ```
   * IntValue :: IntegerPart [lookahead != {Digit, `.`, NameStart}]
   *
   * IntegerPart ::
   *   - NegativeSign? 0
   *   - NegativeSign? NonZeroDigit Digit*
   *
   * NegativeSign :: -
   *
   * NonZeroDigit :: Digit but not `0`
   *
   * FloatValue ::
   *   - IntegerPart FractionalPart ExponentPart [lookahead != {Digit, `.`, NameStart}]
   *   - IntegerPart FractionalPart [lookahead != {Digit, `.`, NameStart}]
   *   - IntegerPart ExponentPart [lookahead != {Digit, `.`, NameStart}]
   *
   * FractionalPart :: . Digit+
   *
   * ExponentPart :: ExponentIndicator Sign? Digit+
   *
   * ExponentIndicator :: one of `e` `E`
   *
   * Sign :: one of + -
   * ```
   */

  function readNumber(lexer, start, firstCode) {
    const body = lexer.source.body;
    let position = start;
    let code = firstCode;
    let isFloat = false; // NegativeSign (-)

    if (code === 0x002d) {
      code = body.charCodeAt(++position);
    } // Zero (0)

    if (code === 0x0030) {
      code = body.charCodeAt(++position);

      if ((0, _characterClasses$1.isDigit)(code)) {
        throw (0, _syntaxError$1.syntaxError)(
          lexer.source,
          position,
          `Invalid number, unexpected digit after 0: ${printCodePointAt(
          lexer,
          position,
        )}.`,
        );
      }
    } else {
      position = readDigits(lexer, position, code);
      code = body.charCodeAt(position);
    } // Full stop (.)

    if (code === 0x002e) {
      isFloat = true;
      code = body.charCodeAt(++position);
      position = readDigits(lexer, position, code);
      code = body.charCodeAt(position);
    } // E e

    if (code === 0x0045 || code === 0x0065) {
      isFloat = true;
      code = body.charCodeAt(++position); // + -

      if (code === 0x002b || code === 0x002d) {
        code = body.charCodeAt(++position);
      }

      position = readDigits(lexer, position, code);
      code = body.charCodeAt(position);
    } // Numbers cannot be followed by . or NameStart

    if (code === 0x002e || (0, _characterClasses$1.isNameStart)(code)) {
      throw (0, _syntaxError$1.syntaxError)(
        lexer.source,
        position,
        `Invalid number, expected digit but got: ${printCodePointAt(
        lexer,
        position,
      )}.`,
      );
    }

    return createToken(
      lexer,
      isFloat ? _tokenKind$2.TokenKind.FLOAT : _tokenKind$2.TokenKind.INT,
      start,
      position,
      body.slice(start, position),
    );
  }
  /**
   * Returns the new position in the source after reading one or more digits.
   */

  function readDigits(lexer, start, firstCode) {
    if (!(0, _characterClasses$1.isDigit)(firstCode)) {
      throw (0, _syntaxError$1.syntaxError)(
        lexer.source,
        start,
        `Invalid number, expected digit but got: ${printCodePointAt(
        lexer,
        start,
      )}.`,
      );
    }

    const body = lexer.source.body;
    let position = start + 1; // +1 to skip first firstCode

    while ((0, _characterClasses$1.isDigit)(body.charCodeAt(position))) {
      ++position;
    }

    return position;
  }
  /**
   * Reads a single-quote string token from the source file.
   *
   * ```
   * StringValue ::
   *   - `""` [lookahead != `"`]
   *   - `"` StringCharacter+ `"`
   *
   * StringCharacter ::
   *   - SourceCharacter but not `"` or `\` or LineTerminator
   *   - `\u` EscapedUnicode
   *   - `\` EscapedCharacter
   *
   * EscapedUnicode ::
   *   - `{` HexDigit+ `}`
   *   - HexDigit HexDigit HexDigit HexDigit
   *
   * EscapedCharacter :: one of `"` `\` `/` `b` `f` `n` `r` `t`
   * ```
   */

  function readString(lexer, start) {
    const body = lexer.source.body;
    const bodyLength = body.length;
    let position = start + 1;
    let chunkStart = position;
    let value = '';

    while (position < bodyLength) {
      const code = body.charCodeAt(position); // Closing Quote (")

      if (code === 0x0022) {
        value += body.slice(chunkStart, position);
        return createToken(
          lexer,
          _tokenKind$2.TokenKind.STRING,
          start,
          position + 1,
          value,
        );
      } // Escape Sequence (\)

      if (code === 0x005c) {
        value += body.slice(chunkStart, position);
        const escape =
          body.charCodeAt(position + 1) === 0x0075 // u
            ? body.charCodeAt(position + 2) === 0x007b // {
              ? readEscapedUnicodeVariableWidth(lexer, position)
              : readEscapedUnicodeFixedWidth(lexer, position)
            : readEscapedCharacter(lexer, position);
        value += escape.value;
        position += escape.size;
        chunkStart = position;
        continue;
      } // LineTerminator (\n | \r)

      if (code === 0x000a || code === 0x000d) {
        break;
      } // SourceCharacter

      if (isUnicodeScalarValue(code)) {
        ++position;
      } else if (isSupplementaryCodePoint(body, position)) {
        position += 2;
      } else {
        throw (0, _syntaxError$1.syntaxError)(
          lexer.source,
          position,
          `Invalid character within String: ${printCodePointAt(
          lexer,
          position,
        )}.`,
        );
      }
    }

    throw (0, _syntaxError$1.syntaxError)(
      lexer.source,
      position,
      'Unterminated string.',
    );
  } // The string value and lexed size of an escape sequence.

  function readEscapedUnicodeVariableWidth(lexer, position) {
    const body = lexer.source.body;
    let point = 0;
    let size = 3; // Cannot be larger than 12 chars (\u{00000000}).

    while (size < 12) {
      const code = body.charCodeAt(position + size++); // Closing Brace (})

      if (code === 0x007d) {
        // Must be at least 5 chars (\u{0}) and encode a Unicode scalar value.
        if (size < 5 || !isUnicodeScalarValue(point)) {
          break;
        }

        return {
          value: String.fromCodePoint(point),
          size,
        };
      } // Append this hex digit to the code point.

      point = (point << 4) | readHexDigit(code);

      if (point < 0) {
        break;
      }
    }

    throw (0, _syntaxError$1.syntaxError)(
      lexer.source,
      position,
      `Invalid Unicode escape sequence: "${body.slice(
      position,
      position + size,
    )}".`,
    );
  }

  function readEscapedUnicodeFixedWidth(lexer, position) {
    const body = lexer.source.body;
    const code = read16BitHexCode(body, position + 2);

    if (isUnicodeScalarValue(code)) {
      return {
        value: String.fromCodePoint(code),
        size: 6,
      };
    } // GraphQL allows JSON-style surrogate pair escape sequences, but only when
    // a valid pair is formed.

    if (isLeadingSurrogate(code)) {
      // \u
      if (
        body.charCodeAt(position + 6) === 0x005c &&
        body.charCodeAt(position + 7) === 0x0075
      ) {
        const trailingCode = read16BitHexCode(body, position + 8);

        if (isTrailingSurrogate(trailingCode)) {
          // JavaScript defines strings as a sequence of UTF-16 code units and
          // encodes Unicode code points above U+FFFF using a surrogate pair of
          // code units. Since this is a surrogate pair escape sequence, just
          // include both codes into the JavaScript string value. Had JavaScript
          // not been internally based on UTF-16, then this surrogate pair would
          // be decoded to retrieve the supplementary code point.
          return {
            value: String.fromCodePoint(code, trailingCode),
            size: 12,
          };
        }
      }
    }

    throw (0, _syntaxError$1.syntaxError)(
      lexer.source,
      position,
      `Invalid Unicode escape sequence: "${body.slice(position, position + 6)}".`,
    );
  }
  /**
   * Reads four hexadecimal characters and returns the positive integer that 16bit
   * hexadecimal string represents. For example, "000f" will return 15, and "dead"
   * will return 57005.
   *
   * Returns a negative number if any char was not a valid hexadecimal digit.
   */

  function read16BitHexCode(body, position) {
    // readHexDigit() returns -1 on error. ORing a negative value with any other
    // value always produces a negative value.
    return (
      (readHexDigit(body.charCodeAt(position)) << 12) |
      (readHexDigit(body.charCodeAt(position + 1)) << 8) |
      (readHexDigit(body.charCodeAt(position + 2)) << 4) |
      readHexDigit(body.charCodeAt(position + 3))
    );
  }
  /**
   * Reads a hexadecimal character and returns its positive integer value (0-15).
   *
   * '0' becomes 0, '9' becomes 9
   * 'A' becomes 10, 'F' becomes 15
   * 'a' becomes 10, 'f' becomes 15
   *
   * Returns -1 if the provided character code was not a valid hexadecimal digit.
   *
   * HexDigit :: one of
   *   - `0` `1` `2` `3` `4` `5` `6` `7` `8` `9`
   *   - `A` `B` `C` `D` `E` `F`
   *   - `a` `b` `c` `d` `e` `f`
   */

  function readHexDigit(code) {
    return code >= 0x0030 && code <= 0x0039 // 0-9
      ? code - 0x0030
      : code >= 0x0041 && code <= 0x0046 // A-F
      ? code - 0x0037
      : code >= 0x0061 && code <= 0x0066 // a-f
      ? code - 0x0057
      : -1;
  }
  /**
   * | Escaped Character | Code Point | Character Name               |
   * | ----------------- | ---------- | ---------------------------- |
   * | `"`               | U+0022     | double quote                 |
   * | `\`               | U+005C     | reverse solidus (back slash) |
   * | `/`               | U+002F     | solidus (forward slash)      |
   * | `b`               | U+0008     | backspace                    |
   * | `f`               | U+000C     | form feed                    |
   * | `n`               | U+000A     | line feed (new line)         |
   * | `r`               | U+000D     | carriage return              |
   * | `t`               | U+0009     | horizontal tab               |
   */

  function readEscapedCharacter(lexer, position) {
    const body = lexer.source.body;
    const code = body.charCodeAt(position + 1);

    switch (code) {
      case 0x0022:
        // "
        return {
          value: '\u0022',
          size: 2,
        };

      case 0x005c:
        // \
        return {
          value: '\u005c',
          size: 2,
        };

      case 0x002f:
        // /
        return {
          value: '\u002f',
          size: 2,
        };

      case 0x0062:
        // b
        return {
          value: '\u0008',
          size: 2,
        };

      case 0x0066:
        // f
        return {
          value: '\u000c',
          size: 2,
        };

      case 0x006e:
        // n
        return {
          value: '\u000a',
          size: 2,
        };

      case 0x0072:
        // r
        return {
          value: '\u000d',
          size: 2,
        };

      case 0x0074:
        // t
        return {
          value: '\u0009',
          size: 2,
        };
    }

    throw (0, _syntaxError$1.syntaxError)(
      lexer.source,
      position,
      `Invalid character escape sequence: "${body.slice(
      position,
      position + 2,
    )}".`,
    );
  }
  /**
   * Reads a block string token from the source file.
   *
   * ```
   * StringValue ::
   *   - `"""` BlockStringCharacter* `"""`
   *
   * BlockStringCharacter ::
   *   - SourceCharacter but not `"""` or `\"""`
   *   - `\"""`
   * ```
   */

  function readBlockString(lexer, start) {
    const body = lexer.source.body;
    const bodyLength = body.length;
    let lineStart = lexer.lineStart;
    let position = start + 3;
    let chunkStart = position;
    let currentLine = '';
    const blockLines = [];

    while (position < bodyLength) {
      const code = body.charCodeAt(position); // Closing Triple-Quote (""")

      if (
        code === 0x0022 &&
        body.charCodeAt(position + 1) === 0x0022 &&
        body.charCodeAt(position + 2) === 0x0022
      ) {
        currentLine += body.slice(chunkStart, position);
        blockLines.push(currentLine);
        const token = createToken(
          lexer,
          _tokenKind$2.TokenKind.BLOCK_STRING,
          start,
          position + 3, // Return a string of the lines joined with U+000A.
          (0, _blockString$3.dedentBlockStringLines)(blockLines).join('\n'),
        );
        lexer.line += blockLines.length - 1;
        lexer.lineStart = lineStart;
        return token;
      } // Escaped Triple-Quote (\""")

      if (
        code === 0x005c &&
        body.charCodeAt(position + 1) === 0x0022 &&
        body.charCodeAt(position + 2) === 0x0022 &&
        body.charCodeAt(position + 3) === 0x0022
      ) {
        currentLine += body.slice(chunkStart, position);
        chunkStart = position + 1; // skip only slash

        position += 4;
        continue;
      } // LineTerminator

      if (code === 0x000a || code === 0x000d) {
        currentLine += body.slice(chunkStart, position);
        blockLines.push(currentLine);

        if (code === 0x000d && body.charCodeAt(position + 1) === 0x000a) {
          position += 2;
        } else {
          ++position;
        }

        currentLine = '';
        chunkStart = position;
        lineStart = position;
        continue;
      } // SourceCharacter

      if (isUnicodeScalarValue(code)) {
        ++position;
      } else if (isSupplementaryCodePoint(body, position)) {
        position += 2;
      } else {
        throw (0, _syntaxError$1.syntaxError)(
          lexer.source,
          position,
          `Invalid character within String: ${printCodePointAt(
          lexer,
          position,
        )}.`,
        );
      }
    }

    throw (0, _syntaxError$1.syntaxError)(
      lexer.source,
      position,
      'Unterminated string.',
    );
  }
  /**
   * Reads an alphanumeric + underscore name from the source.
   *
   * ```
   * Name ::
   *   - NameStart NameContinue* [lookahead != NameContinue]
   * ```
   */

  function readName(lexer, start) {
    const body = lexer.source.body;
    const bodyLength = body.length;
    let position = start + 1;

    while (position < bodyLength) {
      const code = body.charCodeAt(position);

      if ((0, _characterClasses$1.isNameContinue)(code)) {
        ++position;
      } else {
        break;
      }
    }

    return createToken(
      lexer,
      _tokenKind$2.TokenKind.NAME,
      start,
      position,
      body.slice(start, position),
    );
  }

  var source = {};

  var inspect$1 = {};

  Object.defineProperty(inspect$1, '__esModule', {
    value: true,
  });
  inspect$1.inspect = inspect;
  const MAX_ARRAY_LENGTH = 10;
  const MAX_RECURSIVE_DEPTH = 2;
  /**
   * Used to print values in error messages.
   */

  function inspect(value) {
    return formatValue(value, []);
  }

  function formatValue(value, seenValues) {
    switch (typeof value) {
      case 'string':
        return JSON.stringify(value);

      case 'function':
        return value.name ? `[function ${value.name}]` : '[function]';

      case 'object':
        return formatObjectValue(value, seenValues);

      default:
        return String(value);
    }
  }

  function formatObjectValue(value, previouslySeenValues) {
    if (value === null) {
      return 'null';
    }

    if (previouslySeenValues.includes(value)) {
      return '[Circular]';
    }

    const seenValues = [...previouslySeenValues, value];

    if (isJSONable(value)) {
      const jsonValue = value.toJSON(); // check for infinite recursion

      if (jsonValue !== value) {
        return typeof jsonValue === 'string'
          ? jsonValue
          : formatValue(jsonValue, seenValues);
      }
    } else if (Array.isArray(value)) {
      return formatArray(value, seenValues);
    }

    return formatObject(value, seenValues);
  }

  function isJSONable(value) {
    return typeof value.toJSON === 'function';
  }

  function formatObject(object, seenValues) {
    const entries = Object.entries(object);

    if (entries.length === 0) {
      return '{}';
    }

    if (seenValues.length > MAX_RECURSIVE_DEPTH) {
      return '[' + getObjectTag(object) + ']';
    }

    const properties = entries.map(
      ([key, value]) => key + ': ' + formatValue(value, seenValues),
    );
    return '{ ' + properties.join(', ') + ' }';
  }

  function formatArray(array, seenValues) {
    if (array.length === 0) {
      return '[]';
    }

    if (seenValues.length > MAX_RECURSIVE_DEPTH) {
      return '[Array]';
    }

    const len = Math.min(MAX_ARRAY_LENGTH, array.length);
    const remaining = array.length - len;
    const items = [];

    for (let i = 0; i < len; ++i) {
      items.push(formatValue(array[i], seenValues));
    }

    if (remaining === 1) {
      items.push('... 1 more item');
    } else if (remaining > 1) {
      items.push(`... ${remaining} more items`);
    }

    return '[' + items.join(', ') + ']';
  }

  function getObjectTag(object) {
    const tag = Object.prototype.toString
      .call(object)
      .replace(/^\[object /, '')
      .replace(/]$/, '');

    if (tag === 'Object' && typeof object.constructor === 'function') {
      const name = object.constructor.name;

      if (typeof name === 'string' && name !== '') {
        return name;
      }
    }

    return tag;
  }

  var instanceOf$1 = {};

  Object.defineProperty(instanceOf$1, '__esModule', {
    value: true,
  });
  instanceOf$1.instanceOf = void 0;

  var _inspect$s = inspect$1;

  /**
   * A replacement for instanceof which includes an error warning when multi-realm
   * constructors are detected.
   * See: https://expressjs.com/en/advanced/best-practice-performance.html#set-node_env-to-production
   * See: https://webpack.js.org/guides/production/
   */
  const instanceOf =
    /* c8 ignore next 5 */
    // FIXME: https://github.com/graphql/graphql-js/issues/2317
    function instanceOf(value, constructor) {
          if (value instanceof constructor) {
            return true;
          }

          if (typeof value === 'object' && value !== null) {
            var _value$constructor;

            // Prefer Symbol.toStringTag since it is immune to minification.
            const className = constructor.prototype[Symbol.toStringTag];
            const valueClassName = // We still need to support constructor's name to detect conflicts with older versions of this library.
              Symbol.toStringTag in value // @ts-expect-error TS bug see, https://github.com/microsoft/TypeScript/issues/38009
                ? value[Symbol.toStringTag]
                : (_value$constructor = value.constructor) === null ||
                  _value$constructor === void 0
                ? void 0
                : _value$constructor.name;

            if (className === valueClassName) {
              const stringifiedValue = (0, _inspect$s.inspect)(value);
              throw new Error(`Cannot use ${className} "${stringifiedValue}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
            }
          }

          return false;
        };
  instanceOf$1.instanceOf = instanceOf;

  Object.defineProperty(source, '__esModule', {
    value: true,
  });
  source.Source = void 0;
  source.isSource = isSource;

  var _devAssert$d = devAssert$1;

  var _inspect$r = inspect$1;

  var _instanceOf$3 = instanceOf$1;

  /**
   * A representation of source input to GraphQL. The `name` and `locationOffset` parameters are
   * optional, but they are useful for clients who store GraphQL documents in source files.
   * For example, if the GraphQL input starts at line 40 in a file named `Foo.graphql`, it might
   * be useful for `name` to be `"Foo.graphql"` and location to be `{ line: 40, column: 1 }`.
   * The `line` and `column` properties in `locationOffset` are 1-indexed.
   */
  class Source {
    constructor(
      body,
      name = 'GraphQL request',
      locationOffset = {
        line: 1,
        column: 1,
      },
    ) {
      typeof body === 'string' ||
        (0, _devAssert$d.devAssert)(
          false,
          `Body must be a string. Received: ${(0, _inspect$r.inspect)(body)}.`,
        );
      this.body = body;
      this.name = name;
      this.locationOffset = locationOffset;
      this.locationOffset.line > 0 ||
        (0, _devAssert$d.devAssert)(
          false,
          'line in locationOffset is 1-indexed and must be positive.',
        );
      this.locationOffset.column > 0 ||
        (0, _devAssert$d.devAssert)(
          false,
          'column in locationOffset is 1-indexed and must be positive.',
        );
    }

    get [Symbol.toStringTag]() {
      return 'Source';
    }
  }
  /**
   * Test if the given value is a Source object.
   *
   * @internal
   */

  source.Source = Source;

  function isSource(source) {
    return (0, _instanceOf$3.instanceOf)(source, Source);
  }

  Object.defineProperty(parser, '__esModule', {
    value: true,
  });
  parser.Parser = void 0;
  parser.parse = parse$3;
  parser.parseConstValue = parseConstValue;
  parser.parseType = parseType;
  parser.parseValue = parseValue;

  var _syntaxError = syntaxError$1;

  var _ast$6 = ast;

  var _directiveLocation$3 = directiveLocation;

  var _kinds$u = kinds;

  var _lexer$1 = lexer$1;

  var _source$1 = source;

  var _tokenKind$1 = tokenKind;

  /**
   * Given a GraphQL source, parses it into a Document.
   * Throws GraphQLError if a syntax error is encountered.
   */
  function parse$3(source, options) {
    const parser = new Parser(source, options);
    return parser.parseDocument();
  }
  /**
   * Given a string containing a GraphQL value (ex. `[42]`), parse the AST for
   * that value.
   * Throws GraphQLError if a syntax error is encountered.
   *
   * This is useful within tools that operate upon GraphQL Values directly and
   * in isolation of complete GraphQL documents.
   *
   * Consider providing the results to the utility function: valueFromAST().
   */

  function parseValue(source, options) {
    const parser = new Parser(source, options);
    parser.expectToken(_tokenKind$1.TokenKind.SOF);
    const value = parser.parseValueLiteral(false);
    parser.expectToken(_tokenKind$1.TokenKind.EOF);
    return value;
  }
  /**
   * Similar to parseValue(), but raises a parse error if it encounters a
   * variable. The return type will be a constant value.
   */

  function parseConstValue(source, options) {
    const parser = new Parser(source, options);
    parser.expectToken(_tokenKind$1.TokenKind.SOF);
    const value = parser.parseConstValueLiteral();
    parser.expectToken(_tokenKind$1.TokenKind.EOF);
    return value;
  }
  /**
   * Given a string containing a GraphQL Type (ex. `[Int!]`), parse the AST for
   * that type.
   * Throws GraphQLError if a syntax error is encountered.
   *
   * This is useful within tools that operate upon GraphQL Types directly and
   * in isolation of complete GraphQL documents.
   *
   * Consider providing the results to the utility function: typeFromAST().
   */

  function parseType(source, options) {
    const parser = new Parser(source, options);
    parser.expectToken(_tokenKind$1.TokenKind.SOF);
    const type = parser.parseTypeReference();
    parser.expectToken(_tokenKind$1.TokenKind.EOF);
    return type;
  }
  /**
   * This class is exported only to assist people in implementing their own parsers
   * without duplicating too much code and should be used only as last resort for cases
   * such as experimental syntax or if certain features could not be contributed upstream.
   *
   * It is still part of the internal API and is versioned, so any changes to it are never
   * considered breaking changes. If you still need to support multiple versions of the
   * library, please use the `versionInfo` variable for version detection.
   *
   * @internal
   */

  class Parser {
    constructor(source, options) {
      const sourceObj = (0, _source$1.isSource)(source)
        ? source
        : new _source$1.Source(source);
      this._lexer = new _lexer$1.Lexer(sourceObj);
      this._options = options;
    }
    /**
     * Converts a name lex token into a name parse node.
     */

    parseName() {
      const token = this.expectToken(_tokenKind$1.TokenKind.NAME);
      return this.node(token, {
        kind: _kinds$u.Kind.NAME,
        value: token.value,
      });
    } // Implements the parsing rules in the Document section.

    /**
     * Document : Definition+
     */

    parseDocument() {
      return this.node(this._lexer.token, {
        kind: _kinds$u.Kind.DOCUMENT,
        definitions: this.many(
          _tokenKind$1.TokenKind.SOF,
          this.parseDefinition,
          _tokenKind$1.TokenKind.EOF,
        ),
      });
    }
    /**
     * Definition :
     *   - ExecutableDefinition
     *   - TypeSystemDefinition
     *   - TypeSystemExtension
     *
     * ExecutableDefinition :
     *   - OperationDefinition
     *   - FragmentDefinition
     *
     * TypeSystemDefinition :
     *   - SchemaDefinition
     *   - TypeDefinition
     *   - DirectiveDefinition
     *
     * TypeDefinition :
     *   - ScalarTypeDefinition
     *   - ObjectTypeDefinition
     *   - InterfaceTypeDefinition
     *   - UnionTypeDefinition
     *   - EnumTypeDefinition
     *   - InputObjectTypeDefinition
     */

    parseDefinition() {
      if (this.peek(_tokenKind$1.TokenKind.BRACE_L)) {
        return this.parseOperationDefinition();
      } // Many definitions begin with a description and require a lookahead.

      const hasDescription = this.peekDescription();
      const keywordToken = hasDescription
        ? this._lexer.lookahead()
        : this._lexer.token;

      if (keywordToken.kind === _tokenKind$1.TokenKind.NAME) {
        switch (keywordToken.value) {
          case 'schema':
            return this.parseSchemaDefinition();

          case 'scalar':
            return this.parseScalarTypeDefinition();

          case 'type':
            return this.parseObjectTypeDefinition();

          case 'interface':
            return this.parseInterfaceTypeDefinition();

          case 'union':
            return this.parseUnionTypeDefinition();

          case 'enum':
            return this.parseEnumTypeDefinition();

          case 'input':
            return this.parseInputObjectTypeDefinition();

          case 'directive':
            return this.parseDirectiveDefinition();
        }

        if (hasDescription) {
          throw (0, _syntaxError.syntaxError)(
            this._lexer.source,
            this._lexer.token.start,
            'Unexpected description, descriptions are supported only on type definitions.',
          );
        }

        switch (keywordToken.value) {
          case 'query':
          case 'mutation':
          case 'subscription':
            return this.parseOperationDefinition();

          case 'fragment':
            return this.parseFragmentDefinition();

          case 'extend':
            return this.parseTypeSystemExtension();
        }
      }

      throw this.unexpected(keywordToken);
    } // Implements the parsing rules in the Operations section.

    /**
     * OperationDefinition :
     *  - SelectionSet
     *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
     */

    parseOperationDefinition() {
      const start = this._lexer.token;

      if (this.peek(_tokenKind$1.TokenKind.BRACE_L)) {
        return this.node(start, {
          kind: _kinds$u.Kind.OPERATION_DEFINITION,
          operation: _ast$6.OperationTypeNode.QUERY,
          name: undefined,
          variableDefinitions: [],
          directives: [],
          selectionSet: this.parseSelectionSet(),
        });
      }

      const operation = this.parseOperationType();
      let name;

      if (this.peek(_tokenKind$1.TokenKind.NAME)) {
        name = this.parseName();
      }

      return this.node(start, {
        kind: _kinds$u.Kind.OPERATION_DEFINITION,
        operation,
        name,
        variableDefinitions: this.parseVariableDefinitions(),
        directives: this.parseDirectives(false),
        selectionSet: this.parseSelectionSet(),
      });
    }
    /**
     * OperationType : one of query mutation subscription
     */

    parseOperationType() {
      const operationToken = this.expectToken(_tokenKind$1.TokenKind.NAME);

      switch (operationToken.value) {
        case 'query':
          return _ast$6.OperationTypeNode.QUERY;

        case 'mutation':
          return _ast$6.OperationTypeNode.MUTATION;

        case 'subscription':
          return _ast$6.OperationTypeNode.SUBSCRIPTION;
      }

      throw this.unexpected(operationToken);
    }
    /**
     * VariableDefinitions : ( VariableDefinition+ )
     */

    parseVariableDefinitions() {
      return this.optionalMany(
        _tokenKind$1.TokenKind.PAREN_L,
        this.parseVariableDefinition,
        _tokenKind$1.TokenKind.PAREN_R,
      );
    }
    /**
     * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
     */

    parseVariableDefinition() {
      return this.node(this._lexer.token, {
        kind: _kinds$u.Kind.VARIABLE_DEFINITION,
        variable: this.parseVariable(),
        type:
          (this.expectToken(_tokenKind$1.TokenKind.COLON),
          this.parseTypeReference()),
        defaultValue: this.expectOptionalToken(_tokenKind$1.TokenKind.EQUALS)
          ? this.parseConstValueLiteral()
          : undefined,
        directives: this.parseConstDirectives(),
      });
    }
    /**
     * Variable : $ Name
     */

    parseVariable() {
      const start = this._lexer.token;
      this.expectToken(_tokenKind$1.TokenKind.DOLLAR);
      return this.node(start, {
        kind: _kinds$u.Kind.VARIABLE,
        name: this.parseName(),
      });
    }
    /**
     * ```
     * SelectionSet : { Selection+ }
     * ```
     */

    parseSelectionSet() {
      return this.node(this._lexer.token, {
        kind: _kinds$u.Kind.SELECTION_SET,
        selections: this.many(
          _tokenKind$1.TokenKind.BRACE_L,
          this.parseSelection,
          _tokenKind$1.TokenKind.BRACE_R,
        ),
      });
    }
    /**
     * Selection :
     *   - Field
     *   - FragmentSpread
     *   - InlineFragment
     */

    parseSelection() {
      return this.peek(_tokenKind$1.TokenKind.SPREAD)
        ? this.parseFragment()
        : this.parseField();
    }
    /**
     * Field : Alias? Name Arguments? Directives? SelectionSet?
     *
     * Alias : Name :
     */

    parseField() {
      const start = this._lexer.token;
      const nameOrAlias = this.parseName();
      let alias;
      let name;

      if (this.expectOptionalToken(_tokenKind$1.TokenKind.COLON)) {
        alias = nameOrAlias;
        name = this.parseName();
      } else {
        name = nameOrAlias;
      }

      return this.node(start, {
        kind: _kinds$u.Kind.FIELD,
        alias,
        name,
        arguments: this.parseArguments(false),
        directives: this.parseDirectives(false),
        selectionSet: this.peek(_tokenKind$1.TokenKind.BRACE_L)
          ? this.parseSelectionSet()
          : undefined,
      });
    }
    /**
     * Arguments[Const] : ( Argument[?Const]+ )
     */

    parseArguments(isConst) {
      const item = isConst ? this.parseConstArgument : this.parseArgument;
      return this.optionalMany(
        _tokenKind$1.TokenKind.PAREN_L,
        item,
        _tokenKind$1.TokenKind.PAREN_R,
      );
    }
    /**
     * Argument[Const] : Name : Value[?Const]
     */

    parseArgument(isConst = false) {
      const start = this._lexer.token;
      const name = this.parseName();
      this.expectToken(_tokenKind$1.TokenKind.COLON);
      return this.node(start, {
        kind: _kinds$u.Kind.ARGUMENT,
        name,
        value: this.parseValueLiteral(isConst),
      });
    }

    parseConstArgument() {
      return this.parseArgument(true);
    } // Implements the parsing rules in the Fragments section.

    /**
     * Corresponds to both FragmentSpread and InlineFragment in the spec.
     *
     * FragmentSpread : ... FragmentName Directives?
     *
     * InlineFragment : ... TypeCondition? Directives? SelectionSet
     */

    parseFragment() {
      const start = this._lexer.token;
      this.expectToken(_tokenKind$1.TokenKind.SPREAD);
      const hasTypeCondition = this.expectOptionalKeyword('on');

      if (!hasTypeCondition && this.peek(_tokenKind$1.TokenKind.NAME)) {
        return this.node(start, {
          kind: _kinds$u.Kind.FRAGMENT_SPREAD,
          name: this.parseFragmentName(),
          directives: this.parseDirectives(false),
        });
      }

      return this.node(start, {
        kind: _kinds$u.Kind.INLINE_FRAGMENT,
        typeCondition: hasTypeCondition ? this.parseNamedType() : undefined,
        directives: this.parseDirectives(false),
        selectionSet: this.parseSelectionSet(),
      });
    }
    /**
     * FragmentDefinition :
     *   - fragment FragmentName on TypeCondition Directives? SelectionSet
     *
     * TypeCondition : NamedType
     */

    parseFragmentDefinition() {
      var _this$_options;

      const start = this._lexer.token;
      this.expectKeyword('fragment'); // Legacy support for defining variables within fragments changes
      // the grammar of FragmentDefinition:
      //   - fragment FragmentName VariableDefinitions? on TypeCondition Directives? SelectionSet

      if (
        ((_this$_options = this._options) === null || _this$_options === void 0
          ? void 0
          : _this$_options.allowLegacyFragmentVariables) === true
      ) {
        return this.node(start, {
          kind: _kinds$u.Kind.FRAGMENT_DEFINITION,
          name: this.parseFragmentName(),
          variableDefinitions: this.parseVariableDefinitions(),
          typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
          directives: this.parseDirectives(false),
          selectionSet: this.parseSelectionSet(),
        });
      }

      return this.node(start, {
        kind: _kinds$u.Kind.FRAGMENT_DEFINITION,
        name: this.parseFragmentName(),
        typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
        directives: this.parseDirectives(false),
        selectionSet: this.parseSelectionSet(),
      });
    }
    /**
     * FragmentName : Name but not `on`
     */

    parseFragmentName() {
      if (this._lexer.token.value === 'on') {
        throw this.unexpected();
      }

      return this.parseName();
    } // Implements the parsing rules in the Values section.

    /**
     * Value[Const] :
     *   - [~Const] Variable
     *   - IntValue
     *   - FloatValue
     *   - StringValue
     *   - BooleanValue
     *   - NullValue
     *   - EnumValue
     *   - ListValue[?Const]
     *   - ObjectValue[?Const]
     *
     * BooleanValue : one of `true` `false`
     *
     * NullValue : `null`
     *
     * EnumValue : Name but not `true`, `false` or `null`
     */

    parseValueLiteral(isConst) {
      const token = this._lexer.token;

      switch (token.kind) {
        case _tokenKind$1.TokenKind.BRACKET_L:
          return this.parseList(isConst);

        case _tokenKind$1.TokenKind.BRACE_L:
          return this.parseObject(isConst);

        case _tokenKind$1.TokenKind.INT:
          this._lexer.advance();

          return this.node(token, {
            kind: _kinds$u.Kind.INT,
            value: token.value,
          });

        case _tokenKind$1.TokenKind.FLOAT:
          this._lexer.advance();

          return this.node(token, {
            kind: _kinds$u.Kind.FLOAT,
            value: token.value,
          });

        case _tokenKind$1.TokenKind.STRING:
        case _tokenKind$1.TokenKind.BLOCK_STRING:
          return this.parseStringLiteral();

        case _tokenKind$1.TokenKind.NAME:
          this._lexer.advance();

          switch (token.value) {
            case 'true':
              return this.node(token, {
                kind: _kinds$u.Kind.BOOLEAN,
                value: true,
              });

            case 'false':
              return this.node(token, {
                kind: _kinds$u.Kind.BOOLEAN,
                value: false,
              });

            case 'null':
              return this.node(token, {
                kind: _kinds$u.Kind.NULL,
              });

            default:
              return this.node(token, {
                kind: _kinds$u.Kind.ENUM,
                value: token.value,
              });
          }

        case _tokenKind$1.TokenKind.DOLLAR:
          if (isConst) {
            this.expectToken(_tokenKind$1.TokenKind.DOLLAR);

            if (this._lexer.token.kind === _tokenKind$1.TokenKind.NAME) {
              const varName = this._lexer.token.value;
              throw (0, _syntaxError.syntaxError)(
                this._lexer.source,
                token.start,
                `Unexpected variable "$${varName}" in constant value.`,
              );
            } else {
              throw this.unexpected(token);
            }
          }

          return this.parseVariable();

        default:
          throw this.unexpected();
      }
    }

    parseConstValueLiteral() {
      return this.parseValueLiteral(true);
    }

    parseStringLiteral() {
      const token = this._lexer.token;

      this._lexer.advance();

      return this.node(token, {
        kind: _kinds$u.Kind.STRING,
        value: token.value,
        block: token.kind === _tokenKind$1.TokenKind.BLOCK_STRING,
      });
    }
    /**
     * ListValue[Const] :
     *   - [ ]
     *   - [ Value[?Const]+ ]
     */

    parseList(isConst) {
      const item = () => this.parseValueLiteral(isConst);

      return this.node(this._lexer.token, {
        kind: _kinds$u.Kind.LIST,
        values: this.any(
          _tokenKind$1.TokenKind.BRACKET_L,
          item,
          _tokenKind$1.TokenKind.BRACKET_R,
        ),
      });
    }
    /**
     * ```
     * ObjectValue[Const] :
     *   - { }
     *   - { ObjectField[?Const]+ }
     * ```
     */

    parseObject(isConst) {
      const item = () => this.parseObjectField(isConst);

      return this.node(this._lexer.token, {
        kind: _kinds$u.Kind.OBJECT,
        fields: this.any(
          _tokenKind$1.TokenKind.BRACE_L,
          item,
          _tokenKind$1.TokenKind.BRACE_R,
        ),
      });
    }
    /**
     * ObjectField[Const] : Name : Value[?Const]
     */

    parseObjectField(isConst) {
      const start = this._lexer.token;
      const name = this.parseName();
      this.expectToken(_tokenKind$1.TokenKind.COLON);
      return this.node(start, {
        kind: _kinds$u.Kind.OBJECT_FIELD,
        name,
        value: this.parseValueLiteral(isConst),
      });
    } // Implements the parsing rules in the Directives section.

    /**
     * Directives[Const] : Directive[?Const]+
     */

    parseDirectives(isConst) {
      const directives = [];

      while (this.peek(_tokenKind$1.TokenKind.AT)) {
        directives.push(this.parseDirective(isConst));
      }

      return directives;
    }

    parseConstDirectives() {
      return this.parseDirectives(true);
    }
    /**
     * ```
     * Directive[Const] : @ Name Arguments[?Const]?
     * ```
     */

    parseDirective(isConst) {
      const start = this._lexer.token;
      this.expectToken(_tokenKind$1.TokenKind.AT);
      return this.node(start, {
        kind: _kinds$u.Kind.DIRECTIVE,
        name: this.parseName(),
        arguments: this.parseArguments(isConst),
      });
    } // Implements the parsing rules in the Types section.

    /**
     * Type :
     *   - NamedType
     *   - ListType
     *   - NonNullType
     */

    parseTypeReference() {
      const start = this._lexer.token;
      let type;

      if (this.expectOptionalToken(_tokenKind$1.TokenKind.BRACKET_L)) {
        const innerType = this.parseTypeReference();
        this.expectToken(_tokenKind$1.TokenKind.BRACKET_R);
        type = this.node(start, {
          kind: _kinds$u.Kind.LIST_TYPE,
          type: innerType,
        });
      } else {
        type = this.parseNamedType();
      }

      if (this.expectOptionalToken(_tokenKind$1.TokenKind.BANG)) {
        return this.node(start, {
          kind: _kinds$u.Kind.NON_NULL_TYPE,
          type,
        });
      }

      return type;
    }
    /**
     * NamedType : Name
     */

    parseNamedType() {
      return this.node(this._lexer.token, {
        kind: _kinds$u.Kind.NAMED_TYPE,
        name: this.parseName(),
      });
    } // Implements the parsing rules in the Type Definition section.

    peekDescription() {
      return (
        this.peek(_tokenKind$1.TokenKind.STRING) ||
        this.peek(_tokenKind$1.TokenKind.BLOCK_STRING)
      );
    }
    /**
     * Description : StringValue
     */

    parseDescription() {
      if (this.peekDescription()) {
        return this.parseStringLiteral();
      }
    }
    /**
     * ```
     * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
     * ```
     */

    parseSchemaDefinition() {
      const start = this._lexer.token;
      const description = this.parseDescription();
      this.expectKeyword('schema');
      const directives = this.parseConstDirectives();
      const operationTypes = this.many(
        _tokenKind$1.TokenKind.BRACE_L,
        this.parseOperationTypeDefinition,
        _tokenKind$1.TokenKind.BRACE_R,
      );
      return this.node(start, {
        kind: _kinds$u.Kind.SCHEMA_DEFINITION,
        description,
        directives,
        operationTypes,
      });
    }
    /**
     * OperationTypeDefinition : OperationType : NamedType
     */

    parseOperationTypeDefinition() {
      const start = this._lexer.token;
      const operation = this.parseOperationType();
      this.expectToken(_tokenKind$1.TokenKind.COLON);
      const type = this.parseNamedType();
      return this.node(start, {
        kind: _kinds$u.Kind.OPERATION_TYPE_DEFINITION,
        operation,
        type,
      });
    }
    /**
     * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
     */

    parseScalarTypeDefinition() {
      const start = this._lexer.token;
      const description = this.parseDescription();
      this.expectKeyword('scalar');
      const name = this.parseName();
      const directives = this.parseConstDirectives();
      return this.node(start, {
        kind: _kinds$u.Kind.SCALAR_TYPE_DEFINITION,
        description,
        name,
        directives,
      });
    }
    /**
     * ObjectTypeDefinition :
     *   Description?
     *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
     */

    parseObjectTypeDefinition() {
      const start = this._lexer.token;
      const description = this.parseDescription();
      this.expectKeyword('type');
      const name = this.parseName();
      const interfaces = this.parseImplementsInterfaces();
      const directives = this.parseConstDirectives();
      const fields = this.parseFieldsDefinition();
      return this.node(start, {
        kind: _kinds$u.Kind.OBJECT_TYPE_DEFINITION,
        description,
        name,
        interfaces,
        directives,
        fields,
      });
    }
    /**
     * ImplementsInterfaces :
     *   - implements `&`? NamedType
     *   - ImplementsInterfaces & NamedType
     */

    parseImplementsInterfaces() {
      return this.expectOptionalKeyword('implements')
        ? this.delimitedMany(_tokenKind$1.TokenKind.AMP, this.parseNamedType)
        : [];
    }
    /**
     * ```
     * FieldsDefinition : { FieldDefinition+ }
     * ```
     */

    parseFieldsDefinition() {
      return this.optionalMany(
        _tokenKind$1.TokenKind.BRACE_L,
        this.parseFieldDefinition,
        _tokenKind$1.TokenKind.BRACE_R,
      );
    }
    /**
     * FieldDefinition :
     *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
     */

    parseFieldDefinition() {
      const start = this._lexer.token;
      const description = this.parseDescription();
      const name = this.parseName();
      const args = this.parseArgumentDefs();
      this.expectToken(_tokenKind$1.TokenKind.COLON);
      const type = this.parseTypeReference();
      const directives = this.parseConstDirectives();
      return this.node(start, {
        kind: _kinds$u.Kind.FIELD_DEFINITION,
        description,
        name,
        arguments: args,
        type,
        directives,
      });
    }
    /**
     * ArgumentsDefinition : ( InputValueDefinition+ )
     */

    parseArgumentDefs() {
      return this.optionalMany(
        _tokenKind$1.TokenKind.PAREN_L,
        this.parseInputValueDef,
        _tokenKind$1.TokenKind.PAREN_R,
      );
    }
    /**
     * InputValueDefinition :
     *   - Description? Name : Type DefaultValue? Directives[Const]?
     */

    parseInputValueDef() {
      const start = this._lexer.token;
      const description = this.parseDescription();
      const name = this.parseName();
      this.expectToken(_tokenKind$1.TokenKind.COLON);
      const type = this.parseTypeReference();
      let defaultValue;

      if (this.expectOptionalToken(_tokenKind$1.TokenKind.EQUALS)) {
        defaultValue = this.parseConstValueLiteral();
      }

      const directives = this.parseConstDirectives();
      return this.node(start, {
        kind: _kinds$u.Kind.INPUT_VALUE_DEFINITION,
        description,
        name,
        type,
        defaultValue,
        directives,
      });
    }
    /**
     * InterfaceTypeDefinition :
     *   - Description? interface Name Directives[Const]? FieldsDefinition?
     */

    parseInterfaceTypeDefinition() {
      const start = this._lexer.token;
      const description = this.parseDescription();
      this.expectKeyword('interface');
      const name = this.parseName();
      const interfaces = this.parseImplementsInterfaces();
      const directives = this.parseConstDirectives();
      const fields = this.parseFieldsDefinition();
      return this.node(start, {
        kind: _kinds$u.Kind.INTERFACE_TYPE_DEFINITION,
        description,
        name,
        interfaces,
        directives,
        fields,
      });
    }
    /**
     * UnionTypeDefinition :
     *   - Description? union Name Directives[Const]? UnionMemberTypes?
     */

    parseUnionTypeDefinition() {
      const start = this._lexer.token;
      const description = this.parseDescription();
      this.expectKeyword('union');
      const name = this.parseName();
      const directives = this.parseConstDirectives();
      const types = this.parseUnionMemberTypes();
      return this.node(start, {
        kind: _kinds$u.Kind.UNION_TYPE_DEFINITION,
        description,
        name,
        directives,
        types,
      });
    }
    /**
     * UnionMemberTypes :
     *   - = `|`? NamedType
     *   - UnionMemberTypes | NamedType
     */

    parseUnionMemberTypes() {
      return this.expectOptionalToken(_tokenKind$1.TokenKind.EQUALS)
        ? this.delimitedMany(_tokenKind$1.TokenKind.PIPE, this.parseNamedType)
        : [];
    }
    /**
     * EnumTypeDefinition :
     *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
     */

    parseEnumTypeDefinition() {
      const start = this._lexer.token;
      const description = this.parseDescription();
      this.expectKeyword('enum');
      const name = this.parseName();
      const directives = this.parseConstDirectives();
      const values = this.parseEnumValuesDefinition();
      return this.node(start, {
        kind: _kinds$u.Kind.ENUM_TYPE_DEFINITION,
        description,
        name,
        directives,
        values,
      });
    }
    /**
     * ```
     * EnumValuesDefinition : { EnumValueDefinition+ }
     * ```
     */

    parseEnumValuesDefinition() {
      return this.optionalMany(
        _tokenKind$1.TokenKind.BRACE_L,
        this.parseEnumValueDefinition,
        _tokenKind$1.TokenKind.BRACE_R,
      );
    }
    /**
     * EnumValueDefinition : Description? EnumValue Directives[Const]?
     */

    parseEnumValueDefinition() {
      const start = this._lexer.token;
      const description = this.parseDescription();
      const name = this.parseEnumValueName();
      const directives = this.parseConstDirectives();
      return this.node(start, {
        kind: _kinds$u.Kind.ENUM_VALUE_DEFINITION,
        description,
        name,
        directives,
      });
    }
    /**
     * EnumValue : Name but not `true`, `false` or `null`
     */

    parseEnumValueName() {
      if (
        this._lexer.token.value === 'true' ||
        this._lexer.token.value === 'false' ||
        this._lexer.token.value === 'null'
      ) {
        throw (0, _syntaxError.syntaxError)(
          this._lexer.source,
          this._lexer.token.start,
          `${getTokenDesc(
          this._lexer.token,
        )} is reserved and cannot be used for an enum value.`,
        );
      }

      return this.parseName();
    }
    /**
     * InputObjectTypeDefinition :
     *   - Description? input Name Directives[Const]? InputFieldsDefinition?
     */

    parseInputObjectTypeDefinition() {
      const start = this._lexer.token;
      const description = this.parseDescription();
      this.expectKeyword('input');
      const name = this.parseName();
      const directives = this.parseConstDirectives();
      const fields = this.parseInputFieldsDefinition();
      return this.node(start, {
        kind: _kinds$u.Kind.INPUT_OBJECT_TYPE_DEFINITION,
        description,
        name,
        directives,
        fields,
      });
    }
    /**
     * ```
     * InputFieldsDefinition : { InputValueDefinition+ }
     * ```
     */

    parseInputFieldsDefinition() {
      return this.optionalMany(
        _tokenKind$1.TokenKind.BRACE_L,
        this.parseInputValueDef,
        _tokenKind$1.TokenKind.BRACE_R,
      );
    }
    /**
     * TypeSystemExtension :
     *   - SchemaExtension
     *   - TypeExtension
     *
     * TypeExtension :
     *   - ScalarTypeExtension
     *   - ObjectTypeExtension
     *   - InterfaceTypeExtension
     *   - UnionTypeExtension
     *   - EnumTypeExtension
     *   - InputObjectTypeDefinition
     */

    parseTypeSystemExtension() {
      const keywordToken = this._lexer.lookahead();

      if (keywordToken.kind === _tokenKind$1.TokenKind.NAME) {
        switch (keywordToken.value) {
          case 'schema':
            return this.parseSchemaExtension();

          case 'scalar':
            return this.parseScalarTypeExtension();

          case 'type':
            return this.parseObjectTypeExtension();

          case 'interface':
            return this.parseInterfaceTypeExtension();

          case 'union':
            return this.parseUnionTypeExtension();

          case 'enum':
            return this.parseEnumTypeExtension();

          case 'input':
            return this.parseInputObjectTypeExtension();
        }
      }

      throw this.unexpected(keywordToken);
    }
    /**
     * ```
     * SchemaExtension :
     *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
     *  - extend schema Directives[Const]
     * ```
     */

    parseSchemaExtension() {
      const start = this._lexer.token;
      this.expectKeyword('extend');
      this.expectKeyword('schema');
      const directives = this.parseConstDirectives();
      const operationTypes = this.optionalMany(
        _tokenKind$1.TokenKind.BRACE_L,
        this.parseOperationTypeDefinition,
        _tokenKind$1.TokenKind.BRACE_R,
      );

      if (directives.length === 0 && operationTypes.length === 0) {
        throw this.unexpected();
      }

      return this.node(start, {
        kind: _kinds$u.Kind.SCHEMA_EXTENSION,
        directives,
        operationTypes,
      });
    }
    /**
     * ScalarTypeExtension :
     *   - extend scalar Name Directives[Const]
     */

    parseScalarTypeExtension() {
      const start = this._lexer.token;
      this.expectKeyword('extend');
      this.expectKeyword('scalar');
      const name = this.parseName();
      const directives = this.parseConstDirectives();

      if (directives.length === 0) {
        throw this.unexpected();
      }

      return this.node(start, {
        kind: _kinds$u.Kind.SCALAR_TYPE_EXTENSION,
        name,
        directives,
      });
    }
    /**
     * ObjectTypeExtension :
     *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
     *  - extend type Name ImplementsInterfaces? Directives[Const]
     *  - extend type Name ImplementsInterfaces
     */

    parseObjectTypeExtension() {
      const start = this._lexer.token;
      this.expectKeyword('extend');
      this.expectKeyword('type');
      const name = this.parseName();
      const interfaces = this.parseImplementsInterfaces();
      const directives = this.parseConstDirectives();
      const fields = this.parseFieldsDefinition();

      if (
        interfaces.length === 0 &&
        directives.length === 0 &&
        fields.length === 0
      ) {
        throw this.unexpected();
      }

      return this.node(start, {
        kind: _kinds$u.Kind.OBJECT_TYPE_EXTENSION,
        name,
        interfaces,
        directives,
        fields,
      });
    }
    /**
     * InterfaceTypeExtension :
     *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
     *  - extend interface Name ImplementsInterfaces? Directives[Const]
     *  - extend interface Name ImplementsInterfaces
     */

    parseInterfaceTypeExtension() {
      const start = this._lexer.token;
      this.expectKeyword('extend');
      this.expectKeyword('interface');
      const name = this.parseName();
      const interfaces = this.parseImplementsInterfaces();
      const directives = this.parseConstDirectives();
      const fields = this.parseFieldsDefinition();

      if (
        interfaces.length === 0 &&
        directives.length === 0 &&
        fields.length === 0
      ) {
        throw this.unexpected();
      }

      return this.node(start, {
        kind: _kinds$u.Kind.INTERFACE_TYPE_EXTENSION,
        name,
        interfaces,
        directives,
        fields,
      });
    }
    /**
     * UnionTypeExtension :
     *   - extend union Name Directives[Const]? UnionMemberTypes
     *   - extend union Name Directives[Const]
     */

    parseUnionTypeExtension() {
      const start = this._lexer.token;
      this.expectKeyword('extend');
      this.expectKeyword('union');
      const name = this.parseName();
      const directives = this.parseConstDirectives();
      const types = this.parseUnionMemberTypes();

      if (directives.length === 0 && types.length === 0) {
        throw this.unexpected();
      }

      return this.node(start, {
        kind: _kinds$u.Kind.UNION_TYPE_EXTENSION,
        name,
        directives,
        types,
      });
    }
    /**
     * EnumTypeExtension :
     *   - extend enum Name Directives[Const]? EnumValuesDefinition
     *   - extend enum Name Directives[Const]
     */

    parseEnumTypeExtension() {
      const start = this._lexer.token;
      this.expectKeyword('extend');
      this.expectKeyword('enum');
      const name = this.parseName();
      const directives = this.parseConstDirectives();
      const values = this.parseEnumValuesDefinition();

      if (directives.length === 0 && values.length === 0) {
        throw this.unexpected();
      }

      return this.node(start, {
        kind: _kinds$u.Kind.ENUM_TYPE_EXTENSION,
        name,
        directives,
        values,
      });
    }
    /**
     * InputObjectTypeExtension :
     *   - extend input Name Directives[Const]? InputFieldsDefinition
     *   - extend input Name Directives[Const]
     */

    parseInputObjectTypeExtension() {
      const start = this._lexer.token;
      this.expectKeyword('extend');
      this.expectKeyword('input');
      const name = this.parseName();
      const directives = this.parseConstDirectives();
      const fields = this.parseInputFieldsDefinition();

      if (directives.length === 0 && fields.length === 0) {
        throw this.unexpected();
      }

      return this.node(start, {
        kind: _kinds$u.Kind.INPUT_OBJECT_TYPE_EXTENSION,
        name,
        directives,
        fields,
      });
    }
    /**
     * ```
     * DirectiveDefinition :
     *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
     * ```
     */

    parseDirectiveDefinition() {
      const start = this._lexer.token;
      const description = this.parseDescription();
      this.expectKeyword('directive');
      this.expectToken(_tokenKind$1.TokenKind.AT);
      const name = this.parseName();
      const args = this.parseArgumentDefs();
      const repeatable = this.expectOptionalKeyword('repeatable');
      this.expectKeyword('on');
      const locations = this.parseDirectiveLocations();
      return this.node(start, {
        kind: _kinds$u.Kind.DIRECTIVE_DEFINITION,
        description,
        name,
        arguments: args,
        repeatable,
        locations,
      });
    }
    /**
     * DirectiveLocations :
     *   - `|`? DirectiveLocation
     *   - DirectiveLocations | DirectiveLocation
     */

    parseDirectiveLocations() {
      return this.delimitedMany(
        _tokenKind$1.TokenKind.PIPE,
        this.parseDirectiveLocation,
      );
    }
    /*
     * DirectiveLocation :
     *   - ExecutableDirectiveLocation
     *   - TypeSystemDirectiveLocation
     *
     * ExecutableDirectiveLocation : one of
     *   `QUERY`
     *   `MUTATION`
     *   `SUBSCRIPTION`
     *   `FIELD`
     *   `FRAGMENT_DEFINITION`
     *   `FRAGMENT_SPREAD`
     *   `INLINE_FRAGMENT`
     *
     * TypeSystemDirectiveLocation : one of
     *   `SCHEMA`
     *   `SCALAR`
     *   `OBJECT`
     *   `FIELD_DEFINITION`
     *   `ARGUMENT_DEFINITION`
     *   `INTERFACE`
     *   `UNION`
     *   `ENUM`
     *   `ENUM_VALUE`
     *   `INPUT_OBJECT`
     *   `INPUT_FIELD_DEFINITION`
     */

    parseDirectiveLocation() {
      const start = this._lexer.token;
      const name = this.parseName();

      if (
        Object.prototype.hasOwnProperty.call(
          _directiveLocation$3.DirectiveLocation,
          name.value,
        )
      ) {
        return name;
      }

      throw this.unexpected(start);
    } // Core parsing utility functions

    /**
     * Returns a node that, if configured to do so, sets a "loc" field as a
     * location object, used to identify the place in the source that created a
     * given parsed object.
     */

    node(startToken, node) {
      var _this$_options2;

      if (
        ((_this$_options2 = this._options) === null || _this$_options2 === void 0
          ? void 0
          : _this$_options2.noLocation) !== true
      ) {
        node.loc = new _ast$6.Location(
          startToken,
          this._lexer.lastToken,
          this._lexer.source,
        );
      }

      return node;
    }
    /**
     * Determines if the next token is of a given kind
     */

    peek(kind) {
      return this._lexer.token.kind === kind;
    }
    /**
     * If the next token is of the given kind, return that token after advancing the lexer.
     * Otherwise, do not change the parser state and throw an error.
     */

    expectToken(kind) {
      const token = this._lexer.token;

      if (token.kind === kind) {
        this._lexer.advance();

        return token;
      }

      throw (0, _syntaxError.syntaxError)(
        this._lexer.source,
        token.start,
        `Expected ${getTokenKindDesc(kind)}, found ${getTokenDesc(token)}.`,
      );
    }
    /**
     * If the next token is of the given kind, return "true" after advancing the lexer.
     * Otherwise, do not change the parser state and return "false".
     */

    expectOptionalToken(kind) {
      const token = this._lexer.token;

      if (token.kind === kind) {
        this._lexer.advance();

        return true;
      }

      return false;
    }
    /**
     * If the next token is a given keyword, advance the lexer.
     * Otherwise, do not change the parser state and throw an error.
     */

    expectKeyword(value) {
      const token = this._lexer.token;

      if (token.kind === _tokenKind$1.TokenKind.NAME && token.value === value) {
        this._lexer.advance();
      } else {
        throw (0, _syntaxError.syntaxError)(
          this._lexer.source,
          token.start,
          `Expected "${value}", found ${getTokenDesc(token)}.`,
        );
      }
    }
    /**
     * If the next token is a given keyword, return "true" after advancing the lexer.
     * Otherwise, do not change the parser state and return "false".
     */

    expectOptionalKeyword(value) {
      const token = this._lexer.token;

      if (token.kind === _tokenKind$1.TokenKind.NAME && token.value === value) {
        this._lexer.advance();

        return true;
      }

      return false;
    }
    /**
     * Helper function for creating an error when an unexpected lexed token is encountered.
     */

    unexpected(atToken) {
      const token =
        atToken !== null && atToken !== void 0 ? atToken : this._lexer.token;
      return (0, _syntaxError.syntaxError)(
        this._lexer.source,
        token.start,
        `Unexpected ${getTokenDesc(token)}.`,
      );
    }
    /**
     * Returns a possibly empty list of parse nodes, determined by the parseFn.
     * This list begins with a lex token of openKind and ends with a lex token of closeKind.
     * Advances the parser to the next lex token after the closing token.
     */

    any(openKind, parseFn, closeKind) {
      this.expectToken(openKind);
      const nodes = [];

      while (!this.expectOptionalToken(closeKind)) {
        nodes.push(parseFn.call(this));
      }

      return nodes;
    }
    /**
     * Returns a list of parse nodes, determined by the parseFn.
     * It can be empty only if open token is missing otherwise it will always return non-empty list
     * that begins with a lex token of openKind and ends with a lex token of closeKind.
     * Advances the parser to the next lex token after the closing token.
     */

    optionalMany(openKind, parseFn, closeKind) {
      if (this.expectOptionalToken(openKind)) {
        const nodes = [];

        do {
          nodes.push(parseFn.call(this));
        } while (!this.expectOptionalToken(closeKind));

        return nodes;
      }

      return [];
    }
    /**
     * Returns a non-empty list of parse nodes, determined by the parseFn.
     * This list begins with a lex token of openKind and ends with a lex token of closeKind.
     * Advances the parser to the next lex token after the closing token.
     */

    many(openKind, parseFn, closeKind) {
      this.expectToken(openKind);
      const nodes = [];

      do {
        nodes.push(parseFn.call(this));
      } while (!this.expectOptionalToken(closeKind));

      return nodes;
    }
    /**
     * Returns a non-empty list of parse nodes, determined by the parseFn.
     * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
     * Advances the parser to the next lex token after last item in the list.
     */

    delimitedMany(delimiterKind, parseFn) {
      this.expectOptionalToken(delimiterKind);
      const nodes = [];

      do {
        nodes.push(parseFn.call(this));
      } while (this.expectOptionalToken(delimiterKind));

      return nodes;
    }
  }
  /**
   * A helper function to describe a token as a string for debugging.
   */

  parser.Parser = Parser;

  function getTokenDesc(token) {
    const value = token.value;
    return getTokenKindDesc(token.kind) + (value != null ? ` "${value}"` : '');
  }
  /**
   * A helper function to describe a token kind as a string for debugging.
   */

  function getTokenKindDesc(kind) {
    return (0, _lexer$1.isPunctuatorTokenKind)(kind) ? `"${kind}"` : kind;
  }

  var validate$2 = {};

  var typeComparators = {};

  var definition = {};

  var didYouMean$1 = {};

  Object.defineProperty(didYouMean$1, '__esModule', {
    value: true,
  });
  didYouMean$1.didYouMean = didYouMean;
  const MAX_SUGGESTIONS = 5;
  /**
   * Given [ A, B, C ] return ' Did you mean A, B, or C?'.
   */

  function didYouMean(firstArg, secondArg) {
    const [subMessage, suggestionsArg] = secondArg
      ? [firstArg, secondArg]
      : [undefined, firstArg];
    let message = ' Did you mean ';

    if (subMessage) {
      message += subMessage + ' ';
    }

    const suggestions = suggestionsArg.map((x) => `"${x}"`);

    switch (suggestions.length) {
      case 0:
        return '';

      case 1:
        return message + suggestions[0] + '?';

      case 2:
        return message + suggestions[0] + ' or ' + suggestions[1] + '?';
    }

    const selected = suggestions.slice(0, MAX_SUGGESTIONS);
    const lastItem = selected.pop();
    return message + selected.join(', ') + ', or ' + lastItem + '?';
  }

  var identityFunc$1 = {};

  Object.defineProperty(identityFunc$1, '__esModule', {
    value: true,
  });
  identityFunc$1.identityFunc = identityFunc;

  /**
   * Returns the first argument it receives.
   */
  function identityFunc(x) {
    return x;
  }

  var keyMap$1 = {};

  Object.defineProperty(keyMap$1, '__esModule', {
    value: true,
  });
  keyMap$1.keyMap = keyMap;

  /**
   * Creates a keyed JS object from an array, given a function to produce the keys
   * for each value in the array.
   *
   * This provides a convenient lookup for the array items if the key function
   * produces unique results.
   * ```ts
   * const phoneBook = [
   *   { name: 'Jon', num: '555-1234' },
   *   { name: 'Jenny', num: '867-5309' }
   * ]
   *
   * const entriesByName = keyMap(
   *   phoneBook,
   *   entry => entry.name
   * )
   *
   * // {
   * //   Jon: { name: 'Jon', num: '555-1234' },
   * //   Jenny: { name: 'Jenny', num: '867-5309' }
   * // }
   *
   * const jennyEntry = entriesByName['Jenny']
   *
   * // { name: 'Jenny', num: '857-6309' }
   * ```
   */
  function keyMap(list, keyFn) {
    const result = Object.create(null);

    for (const item of list) {
      result[keyFn(item)] = item;
    }

    return result;
  }

  var keyValMap$1 = {};

  Object.defineProperty(keyValMap$1, '__esModule', {
    value: true,
  });
  keyValMap$1.keyValMap = keyValMap;

  /**
   * Creates a keyed JS object from an array, given a function to produce the keys
   * and a function to produce the values from each item in the array.
   * ```ts
   * const phoneBook = [
   *   { name: 'Jon', num: '555-1234' },
   *   { name: 'Jenny', num: '867-5309' }
   * ]
   *
   * // { Jon: '555-1234', Jenny: '867-5309' }
   * const phonesByName = keyValMap(
   *   phoneBook,
   *   entry => entry.name,
   *   entry => entry.num
   * )
   * ```
   */
  function keyValMap(list, keyFn, valFn) {
    const result = Object.create(null);

    for (const item of list) {
      result[keyFn(item)] = valFn(item);
    }

    return result;
  }

  var mapValue$1 = {};

  Object.defineProperty(mapValue$1, '__esModule', {
    value: true,
  });
  mapValue$1.mapValue = mapValue;

  /**
   * Creates an object map with the same keys as `map` and values generated by
   * running each value of `map` thru `fn`.
   */
  function mapValue(map, fn) {
    const result = Object.create(null);

    for (const key of Object.keys(map)) {
      result[key] = fn(map[key], key);
    }

    return result;
  }

  var suggestionList$1 = {};

  var naturalCompare$1 = {};

  Object.defineProperty(naturalCompare$1, '__esModule', {
    value: true,
  });
  naturalCompare$1.naturalCompare = naturalCompare;

  /**
   * Returns a number indicating whether a reference string comes before, or after,
   * or is the same as the given string in natural sort order.
   *
   * See: https://en.wikipedia.org/wiki/Natural_sort_order
   *
   */
  function naturalCompare(aStr, bStr) {
    let aIndex = 0;
    let bIndex = 0;

    while (aIndex < aStr.length && bIndex < bStr.length) {
      let aChar = aStr.charCodeAt(aIndex);
      let bChar = bStr.charCodeAt(bIndex);

      if (isDigit(aChar) && isDigit(bChar)) {
        let aNum = 0;

        do {
          ++aIndex;
          aNum = aNum * 10 + aChar - DIGIT_0;
          aChar = aStr.charCodeAt(aIndex);
        } while (isDigit(aChar) && aNum > 0);

        let bNum = 0;

        do {
          ++bIndex;
          bNum = bNum * 10 + bChar - DIGIT_0;
          bChar = bStr.charCodeAt(bIndex);
        } while (isDigit(bChar) && bNum > 0);

        if (aNum < bNum) {
          return -1;
        }

        if (aNum > bNum) {
          return 1;
        }
      } else {
        if (aChar < bChar) {
          return -1;
        }

        if (aChar > bChar) {
          return 1;
        }

        ++aIndex;
        ++bIndex;
      }
    }

    return aStr.length - bStr.length;
  }

  const DIGIT_0 = 48;
  const DIGIT_9 = 57;

  function isDigit(code) {
    return !isNaN(code) && DIGIT_0 <= code && code <= DIGIT_9;
  }

  Object.defineProperty(suggestionList$1, '__esModule', {
    value: true,
  });
  suggestionList$1.suggestionList = suggestionList;

  var _naturalCompare$3 = naturalCompare$1;

  /**
   * Given an invalid input string and a list of valid options, returns a filtered
   * list of valid options sorted based on their similarity with the input.
   */
  function suggestionList(input, options) {
    const optionsByDistance = Object.create(null);
    const lexicalDistance = new LexicalDistance(input);
    const threshold = Math.floor(input.length * 0.4) + 1;

    for (const option of options) {
      const distance = lexicalDistance.measure(option, threshold);

      if (distance !== undefined) {
        optionsByDistance[option] = distance;
      }
    }

    return Object.keys(optionsByDistance).sort((a, b) => {
      const distanceDiff = optionsByDistance[a] - optionsByDistance[b];
      return distanceDiff !== 0
        ? distanceDiff
        : (0, _naturalCompare$3.naturalCompare)(a, b);
    });
  }
  /**
   * Computes the lexical distance between strings A and B.
   *
   * The "distance" between two strings is given by counting the minimum number
   * of edits needed to transform string A into string B. An edit can be an
   * insertion, deletion, or substitution of a single character, or a swap of two
   * adjacent characters.
   *
   * Includes a custom alteration from Damerau-Levenshtein to treat case changes
   * as a single edit which helps identify mis-cased values with an edit distance
   * of 1.
   *
   * This distance can be useful for detecting typos in input or sorting
   */

  class LexicalDistance {
    constructor(input) {
      this._input = input;
      this._inputLowerCase = input.toLowerCase();
      this._inputArray = stringToArray(this._inputLowerCase);
      this._rows = [
        new Array(input.length + 1).fill(0),
        new Array(input.length + 1).fill(0),
        new Array(input.length + 1).fill(0),
      ];
    }

    measure(option, threshold) {
      if (this._input === option) {
        return 0;
      }

      const optionLowerCase = option.toLowerCase(); // Any case change counts as a single edit

      if (this._inputLowerCase === optionLowerCase) {
        return 1;
      }

      let a = stringToArray(optionLowerCase);
      let b = this._inputArray;

      if (a.length < b.length) {
        const tmp = a;
        a = b;
        b = tmp;
      }

      const aLength = a.length;
      const bLength = b.length;

      if (aLength - bLength > threshold) {
        return undefined;
      }

      const rows = this._rows;

      for (let j = 0; j <= bLength; j++) {
        rows[0][j] = j;
      }

      for (let i = 1; i <= aLength; i++) {
        const upRow = rows[(i - 1) % 3];
        const currentRow = rows[i % 3];
        let smallestCell = (currentRow[0] = i);

        for (let j = 1; j <= bLength; j++) {
          const cost = a[i - 1] === b[j - 1] ? 0 : 1;
          let currentCell = Math.min(
            upRow[j] + 1, // delete
            currentRow[j - 1] + 1, // insert
            upRow[j - 1] + cost, // substitute
          );

          if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
            // transposition
            const doubleDiagonalCell = rows[(i - 2) % 3][j - 2];
            currentCell = Math.min(currentCell, doubleDiagonalCell + 1);
          }

          if (currentCell < smallestCell) {
            smallestCell = currentCell;
          }

          currentRow[j] = currentCell;
        } // Early exit, since distance can't go smaller than smallest element of the previous row.

        if (smallestCell > threshold) {
          return undefined;
        }
      }

      const distance = rows[aLength % 3][bLength];
      return distance <= threshold ? distance : undefined;
    }
  }

  function stringToArray(str) {
    const strLength = str.length;
    const array = new Array(strLength);

    for (let i = 0; i < strLength; ++i) {
      array[i] = str.charCodeAt(i);
    }

    return array;
  }

  var toObjMap$1 = {};

  Object.defineProperty(toObjMap$1, '__esModule', {
    value: true,
  });
  toObjMap$1.toObjMap = toObjMap;

  function toObjMap(obj) {
    if (obj == null) {
      return Object.create(null);
    }

    if (Object.getPrototypeOf(obj) === null) {
      return obj;
    }

    const map = Object.create(null);

    for (const [key, value] of Object.entries(obj)) {
      map[key] = value;
    }

    return map;
  }

  var printer = {};

  var printString$1 = {};

  Object.defineProperty(printString$1, '__esModule', {
    value: true,
  });
  printString$1.printString = printString;

  /**
   * Prints a string as a GraphQL StringValue literal. Replaces control characters
   * and excluded characters (" U+0022 and \\ U+005C) with escape sequences.
   */
  function printString(str) {
    return `"${str.replace(escapedRegExp, escapedReplacer)}"`;
  } // eslint-disable-next-line no-control-regex

  const escapedRegExp = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;

  function escapedReplacer(str) {
    return escapeSequences[str.charCodeAt(0)];
  } // prettier-ignore

  const escapeSequences = [
    '\\u0000',
    '\\u0001',
    '\\u0002',
    '\\u0003',
    '\\u0004',
    '\\u0005',
    '\\u0006',
    '\\u0007',
    '\\b',
    '\\t',
    '\\n',
    '\\u000B',
    '\\f',
    '\\r',
    '\\u000E',
    '\\u000F',
    '\\u0010',
    '\\u0011',
    '\\u0012',
    '\\u0013',
    '\\u0014',
    '\\u0015',
    '\\u0016',
    '\\u0017',
    '\\u0018',
    '\\u0019',
    '\\u001A',
    '\\u001B',
    '\\u001C',
    '\\u001D',
    '\\u001E',
    '\\u001F',
    '',
    '',
    '\\"',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '', // 2F
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '', // 3F
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '', // 4F
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '\\\\',
    '',
    '',
    '', // 5F
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '', // 6F
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '\\u007F',
    '\\u0080',
    '\\u0081',
    '\\u0082',
    '\\u0083',
    '\\u0084',
    '\\u0085',
    '\\u0086',
    '\\u0087',
    '\\u0088',
    '\\u0089',
    '\\u008A',
    '\\u008B',
    '\\u008C',
    '\\u008D',
    '\\u008E',
    '\\u008F',
    '\\u0090',
    '\\u0091',
    '\\u0092',
    '\\u0093',
    '\\u0094',
    '\\u0095',
    '\\u0096',
    '\\u0097',
    '\\u0098',
    '\\u0099',
    '\\u009A',
    '\\u009B',
    '\\u009C',
    '\\u009D',
    '\\u009E',
    '\\u009F',
  ];

  var visitor = {};

  Object.defineProperty(visitor, '__esModule', {
    value: true,
  });
  visitor.BREAK = void 0;
  visitor.getEnterLeaveForKind = getEnterLeaveForKind;
  visitor.getVisitFn = getVisitFn;
  visitor.visit = visit;
  visitor.visitInParallel = visitInParallel;

  var _devAssert$c = devAssert$1;

  var _inspect$q = inspect$1;

  var _ast$5 = ast;

  var _kinds$t = kinds;

  const BREAK = Object.freeze({});
  /**
   * visit() will walk through an AST using a depth-first traversal, calling
   * the visitor's enter function at each node in the traversal, and calling the
   * leave function after visiting that node and all of its child nodes.
   *
   * By returning different values from the enter and leave functions, the
   * behavior of the visitor can be altered, including skipping over a sub-tree of
   * the AST (by returning false), editing the AST by returning a value or null
   * to remove the value, or to stop the whole traversal by returning BREAK.
   *
   * When using visit() to edit an AST, the original AST will not be modified, and
   * a new version of the AST with the changes applied will be returned from the
   * visit function.
   *
   * ```ts
   * const editedAST = visit(ast, {
   *   enter(node, key, parent, path, ancestors) {
   *     // @return
   *     //   undefined: no action
   *     //   false: skip visiting this node
   *     //   visitor.BREAK: stop visiting altogether
   *     //   null: delete this node
   *     //   any value: replace this node with the returned value
   *   },
   *   leave(node, key, parent, path, ancestors) {
   *     // @return
   *     //   undefined: no action
   *     //   false: no action
   *     //   visitor.BREAK: stop visiting altogether
   *     //   null: delete this node
   *     //   any value: replace this node with the returned value
   *   }
   * });
   * ```
   *
   * Alternatively to providing enter() and leave() functions, a visitor can
   * instead provide functions named the same as the kinds of AST nodes, or
   * enter/leave visitors at a named key, leading to three permutations of the
   * visitor API:
   *
   * 1) Named visitors triggered when entering a node of a specific kind.
   *
   * ```ts
   * visit(ast, {
   *   Kind(node) {
   *     // enter the "Kind" node
   *   }
   * })
   * ```
   *
   * 2) Named visitors that trigger upon entering and leaving a node of a specific kind.
   *
   * ```ts
   * visit(ast, {
   *   Kind: {
   *     enter(node) {
   *       // enter the "Kind" node
   *     }
   *     leave(node) {
   *       // leave the "Kind" node
   *     }
   *   }
   * })
   * ```
   *
   * 3) Generic visitors that trigger upon entering and leaving any node.
   *
   * ```ts
   * visit(ast, {
   *   enter(node) {
   *     // enter any node
   *   },
   *   leave(node) {
   *     // leave any node
   *   }
   * })
   * ```
   */

  visitor.BREAK = BREAK;

  function visit(root, visitor, visitorKeys = _ast$5.QueryDocumentKeys) {
    const enterLeaveMap = new Map();

    for (const kind of Object.values(_kinds$t.Kind)) {
      enterLeaveMap.set(kind, getEnterLeaveForKind(visitor, kind));
    }
    /* eslint-disable no-undef-init */

    let stack = undefined;
    let inArray = Array.isArray(root);
    let keys = [root];
    let index = -1;
    let edits = [];
    let node = root;
    let key = undefined;
    let parent = undefined;
    const path = [];
    const ancestors = [];
    /* eslint-enable no-undef-init */

    do {
      index++;
      const isLeaving = index === keys.length;
      const isEdited = isLeaving && edits.length !== 0;

      if (isLeaving) {
        key = ancestors.length === 0 ? undefined : path[path.length - 1];
        node = parent;
        parent = ancestors.pop();

        if (isEdited) {
          if (inArray) {
            node = node.slice();
            let editOffset = 0;

            for (const [editKey, editValue] of edits) {
              const arrayKey = editKey - editOffset;

              if (editValue === null) {
                node.splice(arrayKey, 1);
                editOffset++;
              } else {
                node[arrayKey] = editValue;
              }
            }
          } else {
            node = Object.defineProperties(
              {},
              Object.getOwnPropertyDescriptors(node),
            );

            for (const [editKey, editValue] of edits) {
              node[editKey] = editValue;
            }
          }
        }

        index = stack.index;
        keys = stack.keys;
        edits = stack.edits;
        inArray = stack.inArray;
        stack = stack.prev;
      } else if (parent) {
        key = inArray ? index : keys[index];
        node = parent[key];

        if (node === null || node === undefined) {
          continue;
        }

        path.push(key);
      }

      let result;

      if (!Array.isArray(node)) {
        var _enterLeaveMap$get, _enterLeaveMap$get2;

        (0, _ast$5.isNode)(node) ||
          (0, _devAssert$c.devAssert)(
            false,
            `Invalid AST Node: ${(0, _inspect$q.inspect)(node)}.`,
          );
        const visitFn = isLeaving
          ? (_enterLeaveMap$get = enterLeaveMap.get(node.kind)) === null ||
            _enterLeaveMap$get === void 0
            ? void 0
            : _enterLeaveMap$get.leave
          : (_enterLeaveMap$get2 = enterLeaveMap.get(node.kind)) === null ||
            _enterLeaveMap$get2 === void 0
          ? void 0
          : _enterLeaveMap$get2.enter;
        result =
          visitFn === null || visitFn === void 0
            ? void 0
            : visitFn.call(visitor, node, key, parent, path, ancestors);

        if (result === BREAK) {
          break;
        }

        if (result === false) {
          if (!isLeaving) {
            path.pop();
            continue;
          }
        } else if (result !== undefined) {
          edits.push([key, result]);

          if (!isLeaving) {
            if ((0, _ast$5.isNode)(result)) {
              node = result;
            } else {
              path.pop();
              continue;
            }
          }
        }
      }

      if (result === undefined && isEdited) {
        edits.push([key, node]);
      }

      if (isLeaving) {
        path.pop();
      } else {
        var _node$kind;

        stack = {
          inArray,
          index,
          keys,
          edits,
          prev: stack,
        };
        inArray = Array.isArray(node);
        keys = inArray
          ? node
          : (_node$kind = visitorKeys[node.kind]) !== null &&
            _node$kind !== void 0
          ? _node$kind
          : [];
        index = -1;
        edits = [];

        if (parent) {
          ancestors.push(parent);
        }

        parent = node;
      }
    } while (stack !== undefined);

    if (edits.length !== 0) {
      // New root
      return edits[edits.length - 1][1];
    }

    return root;
  }
  /**
   * Creates a new visitor instance which delegates to many visitors to run in
   * parallel. Each visitor will be visited for each node before moving on.
   *
   * If a prior visitor edits a node, no following visitors will see that node.
   */

  function visitInParallel(visitors) {
    const skipping = new Array(visitors.length).fill(null);
    const mergedVisitor = Object.create(null);

    for (const kind of Object.values(_kinds$t.Kind)) {
      let hasVisitor = false;
      const enterList = new Array(visitors.length).fill(undefined);
      const leaveList = new Array(visitors.length).fill(undefined);

      for (let i = 0; i < visitors.length; ++i) {
        const { enter, leave } = getEnterLeaveForKind(visitors[i], kind);
        hasVisitor || (hasVisitor = enter != null || leave != null);
        enterList[i] = enter;
        leaveList[i] = leave;
      }

      if (!hasVisitor) {
        continue;
      }

      const mergedEnterLeave = {
        enter(...args) {
          const node = args[0];

          for (let i = 0; i < visitors.length; i++) {
            if (skipping[i] === null) {
              var _enterList$i;

              const result =
                (_enterList$i = enterList[i]) === null || _enterList$i === void 0
                  ? void 0
                  : _enterList$i.apply(visitors[i], args);

              if (result === false) {
                skipping[i] = node;
              } else if (result === BREAK) {
                skipping[i] = BREAK;
              } else if (result !== undefined) {
                return result;
              }
            }
          }
        },

        leave(...args) {
          const node = args[0];

          for (let i = 0; i < visitors.length; i++) {
            if (skipping[i] === null) {
              var _leaveList$i;

              const result =
                (_leaveList$i = leaveList[i]) === null || _leaveList$i === void 0
                  ? void 0
                  : _leaveList$i.apply(visitors[i], args);

              if (result === BREAK) {
                skipping[i] = BREAK;
              } else if (result !== undefined && result !== false) {
                return result;
              }
            } else if (skipping[i] === node) {
              skipping[i] = null;
            }
          }
        },
      };
      mergedVisitor[kind] = mergedEnterLeave;
    }

    return mergedVisitor;
  }
  /**
   * Given a visitor instance and a node kind, return EnterLeaveVisitor for that kind.
   */

  function getEnterLeaveForKind(visitor, kind) {
    const kindVisitor = visitor[kind];

    if (typeof kindVisitor === 'object') {
      // { Kind: { enter() {}, leave() {} } }
      return kindVisitor;
    } else if (typeof kindVisitor === 'function') {
      // { Kind() {} }
      return {
        enter: kindVisitor,
        leave: undefined,
      };
    } // { enter() {}, leave() {} }

    return {
      enter: visitor.enter,
      leave: visitor.leave,
    };
  }
  /**
   * Given a visitor instance, if it is leaving or not, and a node kind, return
   * the function the visitor runtime should call.
   *
   * @deprecated Please use `getEnterLeaveForKind` instead. Will be removed in v17
   */

  /* c8 ignore next 8 */

  function getVisitFn(visitor, kind, isLeaving) {
    const { enter, leave } = getEnterLeaveForKind(visitor, kind);
    return isLeaving ? leave : enter;
  }

  Object.defineProperty(printer, '__esModule', {
    value: true,
  });
  printer.print = print;

  var _blockString$2 = blockString;

  var _printString = printString$1;

  var _visitor$4 = visitor;

  /**
   * Converts an AST into a string, using one set of reasonable
   * formatting rules.
   */
  function print(ast) {
    return (0, _visitor$4.visit)(ast, printDocASTReducer);
  }

  const MAX_LINE_LENGTH = 80;
  const printDocASTReducer = {
    Name: {
      leave: (node) => node.value,
    },
    Variable: {
      leave: (node) => '$' + node.name,
    },
    // Document
    Document: {
      leave: (node) => join(node.definitions, '\n\n'),
    },
    OperationDefinition: {
      leave(node) {
        const varDefs = wrap('(', join(node.variableDefinitions, ', '), ')');
        const prefix = join(
          [
            node.operation,
            join([node.name, varDefs]),
            join(node.directives, ' '),
          ],
          ' ',
        ); // Anonymous queries with no directives or variable definitions can use
        // the query short form.

        return (prefix === 'query' ? '' : prefix + ' ') + node.selectionSet;
      },
    },
    VariableDefinition: {
      leave: ({ variable, type, defaultValue, directives }) =>
        variable +
        ': ' +
        type +
        wrap(' = ', defaultValue) +
        wrap(' ', join(directives, ' ')),
    },
    SelectionSet: {
      leave: ({ selections }) => block(selections),
    },
    Field: {
      leave({ alias, name, arguments: args, directives, selectionSet }) {
        const prefix = wrap('', alias, ': ') + name;
        let argsLine = prefix + wrap('(', join(args, ', '), ')');

        if (argsLine.length > MAX_LINE_LENGTH) {
          argsLine = prefix + wrap('(\n', indent(join(args, '\n')), '\n)');
        }

        return join([argsLine, join(directives, ' '), selectionSet], ' ');
      },
    },
    Argument: {
      leave: ({ name, value }) => name + ': ' + value,
    },
    // Fragments
    FragmentSpread: {
      leave: ({ name, directives }) =>
        '...' + name + wrap(' ', join(directives, ' ')),
    },
    InlineFragment: {
      leave: ({ typeCondition, directives, selectionSet }) =>
        join(
          [
            '...',
            wrap('on ', typeCondition),
            join(directives, ' '),
            selectionSet,
          ],
          ' ',
        ),
    },
    FragmentDefinition: {
      leave: (
        { name, typeCondition, variableDefinitions, directives, selectionSet }, // Note: fragment variable definitions are experimental and may be changed
      ) =>
        // or removed in the future.
        `fragment ${name}${wrap('(', join(variableDefinitions, ', '), ')')} ` +
        `on ${typeCondition} ${wrap('', join(directives, ' '), ' ')}` +
        selectionSet,
    },
    // Value
    IntValue: {
      leave: ({ value }) => value,
    },
    FloatValue: {
      leave: ({ value }) => value,
    },
    StringValue: {
      leave: ({ value, block: isBlockString }) =>
        isBlockString
          ? (0, _blockString$2.printBlockString)(value)
          : (0, _printString.printString)(value),
    },
    BooleanValue: {
      leave: ({ value }) => (value ? 'true' : 'false'),
    },
    NullValue: {
      leave: () => 'null',
    },
    EnumValue: {
      leave: ({ value }) => value,
    },
    ListValue: {
      leave: ({ values }) => '[' + join(values, ', ') + ']',
    },
    ObjectValue: {
      leave: ({ fields }) => '{' + join(fields, ', ') + '}',
    },
    ObjectField: {
      leave: ({ name, value }) => name + ': ' + value,
    },
    // Directive
    Directive: {
      leave: ({ name, arguments: args }) =>
        '@' + name + wrap('(', join(args, ', '), ')'),
    },
    // Type
    NamedType: {
      leave: ({ name }) => name,
    },
    ListType: {
      leave: ({ type }) => '[' + type + ']',
    },
    NonNullType: {
      leave: ({ type }) => type + '!',
    },
    // Type System Definitions
    SchemaDefinition: {
      leave: ({ description, directives, operationTypes }) =>
        wrap('', description, '\n') +
        join(['schema', join(directives, ' '), block(operationTypes)], ' '),
    },
    OperationTypeDefinition: {
      leave: ({ operation, type }) => operation + ': ' + type,
    },
    ScalarTypeDefinition: {
      leave: ({ description, name, directives }) =>
        wrap('', description, '\n') +
        join(['scalar', name, join(directives, ' ')], ' '),
    },
    ObjectTypeDefinition: {
      leave: ({ description, name, interfaces, directives, fields }) =>
        wrap('', description, '\n') +
        join(
          [
            'type',
            name,
            wrap('implements ', join(interfaces, ' & ')),
            join(directives, ' '),
            block(fields),
          ],
          ' ',
        ),
    },
    FieldDefinition: {
      leave: ({ description, name, arguments: args, type, directives }) =>
        wrap('', description, '\n') +
        name +
        (hasMultilineItems(args)
          ? wrap('(\n', indent(join(args, '\n')), '\n)')
          : wrap('(', join(args, ', '), ')')) +
        ': ' +
        type +
        wrap(' ', join(directives, ' ')),
    },
    InputValueDefinition: {
      leave: ({ description, name, type, defaultValue, directives }) =>
        wrap('', description, '\n') +
        join(
          [name + ': ' + type, wrap('= ', defaultValue), join(directives, ' ')],
          ' ',
        ),
    },
    InterfaceTypeDefinition: {
      leave: ({ description, name, interfaces, directives, fields }) =>
        wrap('', description, '\n') +
        join(
          [
            'interface',
            name,
            wrap('implements ', join(interfaces, ' & ')),
            join(directives, ' '),
            block(fields),
          ],
          ' ',
        ),
    },
    UnionTypeDefinition: {
      leave: ({ description, name, directives, types }) =>
        wrap('', description, '\n') +
        join(
          ['union', name, join(directives, ' '), wrap('= ', join(types, ' | '))],
          ' ',
        ),
    },
    EnumTypeDefinition: {
      leave: ({ description, name, directives, values }) =>
        wrap('', description, '\n') +
        join(['enum', name, join(directives, ' '), block(values)], ' '),
    },
    EnumValueDefinition: {
      leave: ({ description, name, directives }) =>
        wrap('', description, '\n') + join([name, join(directives, ' ')], ' '),
    },
    InputObjectTypeDefinition: {
      leave: ({ description, name, directives, fields }) =>
        wrap('', description, '\n') +
        join(['input', name, join(directives, ' '), block(fields)], ' '),
    },
    DirectiveDefinition: {
      leave: ({ description, name, arguments: args, repeatable, locations }) =>
        wrap('', description, '\n') +
        'directive @' +
        name +
        (hasMultilineItems(args)
          ? wrap('(\n', indent(join(args, '\n')), '\n)')
          : wrap('(', join(args, ', '), ')')) +
        (repeatable ? ' repeatable' : '') +
        ' on ' +
        join(locations, ' | '),
    },
    SchemaExtension: {
      leave: ({ directives, operationTypes }) =>
        join(
          ['extend schema', join(directives, ' '), block(operationTypes)],
          ' ',
        ),
    },
    ScalarTypeExtension: {
      leave: ({ name, directives }) =>
        join(['extend scalar', name, join(directives, ' ')], ' '),
    },
    ObjectTypeExtension: {
      leave: ({ name, interfaces, directives, fields }) =>
        join(
          [
            'extend type',
            name,
            wrap('implements ', join(interfaces, ' & ')),
            join(directives, ' '),
            block(fields),
          ],
          ' ',
        ),
    },
    InterfaceTypeExtension: {
      leave: ({ name, interfaces, directives, fields }) =>
        join(
          [
            'extend interface',
            name,
            wrap('implements ', join(interfaces, ' & ')),
            join(directives, ' '),
            block(fields),
          ],
          ' ',
        ),
    },
    UnionTypeExtension: {
      leave: ({ name, directives, types }) =>
        join(
          [
            'extend union',
            name,
            join(directives, ' '),
            wrap('= ', join(types, ' | ')),
          ],
          ' ',
        ),
    },
    EnumTypeExtension: {
      leave: ({ name, directives, values }) =>
        join(['extend enum', name, join(directives, ' '), block(values)], ' '),
    },
    InputObjectTypeExtension: {
      leave: ({ name, directives, fields }) =>
        join(['extend input', name, join(directives, ' '), block(fields)], ' '),
    },
  };
  /**
   * Given maybeArray, print an empty string if it is null or empty, otherwise
   * print all items together separated by separator if provided
   */

  function join(maybeArray, separator = '') {
    var _maybeArray$filter$jo;

    return (_maybeArray$filter$jo =
      maybeArray === null || maybeArray === void 0
        ? void 0
        : maybeArray.filter((x) => x).join(separator)) !== null &&
      _maybeArray$filter$jo !== void 0
      ? _maybeArray$filter$jo
      : '';
  }
  /**
   * Given array, print each item on its own line, wrapped in an indented `{ }` block.
   */

  function block(array) {
    return wrap('{\n', indent(join(array, '\n')), '\n}');
  }
  /**
   * If maybeString is not null or empty, then wrap with start and end, otherwise print an empty string.
   */

  function wrap(start, maybeString, end = '') {
    return maybeString != null && maybeString !== ''
      ? start + maybeString + end
      : '';
  }

  function indent(str) {
    return wrap('  ', str.replace(/\n/g, '\n  '));
  }

  function hasMultilineItems(maybeArray) {
    var _maybeArray$some;

    // FIXME: https://github.com/graphql/graphql-js/issues/2203

    /* c8 ignore next */
    return (_maybeArray$some =
      maybeArray === null || maybeArray === void 0
        ? void 0
        : maybeArray.some((str) => str.includes('\n'))) !== null &&
      _maybeArray$some !== void 0
      ? _maybeArray$some
      : false;
  }

  var valueFromASTUntyped$1 = {};

  Object.defineProperty(valueFromASTUntyped$1, '__esModule', {
    value: true,
  });
  valueFromASTUntyped$1.valueFromASTUntyped = valueFromASTUntyped;

  var _keyValMap$3 = keyValMap$1;

  var _kinds$s = kinds;

  /**
   * Produces a JavaScript value given a GraphQL Value AST.
   *
   * Unlike `valueFromAST()`, no type is provided. The resulting JavaScript value
   * will reflect the provided GraphQL value AST.
   *
   * | GraphQL Value        | JavaScript Value |
   * | -------------------- | ---------------- |
   * | Input Object         | Object           |
   * | List                 | Array            |
   * | Boolean              | Boolean          |
   * | String / Enum        | String           |
   * | Int / Float          | Number           |
   * | Null                 | null             |
   *
   */
  function valueFromASTUntyped(valueNode, variables) {
    switch (valueNode.kind) {
      case _kinds$s.Kind.NULL:
        return null;

      case _kinds$s.Kind.INT:
        return parseInt(valueNode.value, 10);

      case _kinds$s.Kind.FLOAT:
        return parseFloat(valueNode.value);

      case _kinds$s.Kind.STRING:
      case _kinds$s.Kind.ENUM:
      case _kinds$s.Kind.BOOLEAN:
        return valueNode.value;

      case _kinds$s.Kind.LIST:
        return valueNode.values.map((node) =>
          valueFromASTUntyped(node, variables),
        );

      case _kinds$s.Kind.OBJECT:
        return (0, _keyValMap$3.keyValMap)(
          valueNode.fields,
          (field) => field.name.value,
          (field) => valueFromASTUntyped(field.value, variables),
        );

      case _kinds$s.Kind.VARIABLE:
        return variables === null || variables === void 0
          ? void 0
          : variables[valueNode.name.value];
    }
  }

  var assertName$1 = {};

  Object.defineProperty(assertName$1, '__esModule', {
    value: true,
  });
  assertName$1.assertEnumValueName = assertEnumValueName;
  assertName$1.assertName = assertName;

  var _devAssert$b = devAssert$1;

  var _GraphQLError$L = GraphQLError$1;

  var _characterClasses = characterClasses;

  /**
   * Upholds the spec rules about naming.
   */
  function assertName(name) {
    name != null || (0, _devAssert$b.devAssert)(false, 'Must provide name.');
    typeof name === 'string' ||
      (0, _devAssert$b.devAssert)(false, 'Expected name to be a string.');

    if (name.length === 0) {
      throw new _GraphQLError$L.GraphQLError(
        'Expected name to be a non-empty string.',
      );
    }

    for (let i = 1; i < name.length; ++i) {
      if (!(0, _characterClasses.isNameContinue)(name.charCodeAt(i))) {
        throw new _GraphQLError$L.GraphQLError(
          `Names must only contain [_a-zA-Z0-9] but "${name}" does not.`,
        );
      }
    }

    if (!(0, _characterClasses.isNameStart)(name.charCodeAt(0))) {
      throw new _GraphQLError$L.GraphQLError(
        `Names must start with [_a-zA-Z] but "${name}" does not.`,
      );
    }

    return name;
  }
  /**
   * Upholds the spec rules about naming enum values.
   *
   * @internal
   */

  function assertEnumValueName(name) {
    if (name === 'true' || name === 'false' || name === 'null') {
      throw new _GraphQLError$L.GraphQLError(
        `Enum values cannot be named: ${name}`,
      );
    }

    return assertName(name);
  }

  Object.defineProperty(definition, '__esModule', {
    value: true,
  });
  definition.GraphQLUnionType =
    definition.GraphQLScalarType =
    definition.GraphQLObjectType =
    definition.GraphQLNonNull =
    definition.GraphQLList =
    definition.GraphQLInterfaceType =
    definition.GraphQLInputObjectType =
    definition.GraphQLEnumType =
      void 0;
  definition.argsToArgsConfig = argsToArgsConfig;
  definition.assertAbstractType = assertAbstractType;
  definition.assertCompositeType = assertCompositeType;
  definition.assertEnumType = assertEnumType;
  definition.assertInputObjectType = assertInputObjectType;
  definition.assertInputType = assertInputType;
  definition.assertInterfaceType = assertInterfaceType;
  definition.assertLeafType = assertLeafType;
  definition.assertListType = assertListType;
  definition.assertNamedType = assertNamedType;
  definition.assertNonNullType = assertNonNullType;
  definition.assertNullableType = assertNullableType;
  definition.assertObjectType = assertObjectType;
  definition.assertOutputType = assertOutputType;
  definition.assertScalarType = assertScalarType;
  definition.assertType = assertType;
  definition.assertUnionType = assertUnionType;
  definition.assertWrappingType = assertWrappingType;
  definition.defineArguments = defineArguments;
  definition.getNamedType = getNamedType;
  definition.getNullableType = getNullableType;
  definition.isAbstractType = isAbstractType;
  definition.isCompositeType = isCompositeType;
  definition.isEnumType = isEnumType;
  definition.isInputObjectType = isInputObjectType;
  definition.isInputType = isInputType;
  definition.isInterfaceType = isInterfaceType;
  definition.isLeafType = isLeafType;
  definition.isListType = isListType;
  definition.isNamedType = isNamedType;
  definition.isNonNullType = isNonNullType;
  definition.isNullableType = isNullableType;
  definition.isObjectType = isObjectType;
  definition.isOutputType = isOutputType;
  definition.isRequiredArgument = isRequiredArgument;
  definition.isRequiredInputField = isRequiredInputField;
  definition.isScalarType = isScalarType;
  definition.isType = isType;
  definition.isUnionType = isUnionType;
  definition.isWrappingType = isWrappingType;
  definition.resolveObjMapThunk = resolveObjMapThunk;
  definition.resolveReadonlyArrayThunk = resolveReadonlyArrayThunk;

  var _devAssert$a = devAssert$1;

  var _didYouMean$6 = didYouMean$1;

  var _identityFunc = identityFunc$1;

  var _inspect$p = inspect$1;

  var _instanceOf$2 = instanceOf$1;

  var _isObjectLike$7 = isObjectLike$1;

  var _keyMap$6 = keyMap$1;

  var _keyValMap$2 = keyValMap$1;

  var _mapValue$1 = mapValue$1;

  var _suggestionList$6 = suggestionList$1;

  var _toObjMap$2 = toObjMap$1;

  var _GraphQLError$K = GraphQLError$1;

  var _kinds$r = kinds;

  var _printer$a = printer;

  var _valueFromASTUntyped = valueFromASTUntyped$1;

  var _assertName$2 = assertName$1;

  function isType(type) {
    return (
      isScalarType(type) ||
      isObjectType(type) ||
      isInterfaceType(type) ||
      isUnionType(type) ||
      isEnumType(type) ||
      isInputObjectType(type) ||
      isListType(type) ||
      isNonNullType(type)
    );
  }

  function assertType(type) {
    if (!isType(type)) {
      throw new Error(
        `Expected ${(0, _inspect$p.inspect)(type)} to be a GraphQL type.`,
      );
    }

    return type;
  }
  /**
   * There are predicates for each kind of GraphQL type.
   */

  function isScalarType(type) {
    return (0, _instanceOf$2.instanceOf)(type, GraphQLScalarType);
  }

  function assertScalarType(type) {
    if (!isScalarType(type)) {
      throw new Error(
        `Expected ${(0, _inspect$p.inspect)(type)} to be a GraphQL Scalar type.`,
      );
    }

    return type;
  }

  function isObjectType(type) {
    return (0, _instanceOf$2.instanceOf)(type, GraphQLObjectType);
  }

  function assertObjectType(type) {
    if (!isObjectType(type)) {
      throw new Error(
        `Expected ${(0, _inspect$p.inspect)(type)} to be a GraphQL Object type.`,
      );
    }

    return type;
  }

  function isInterfaceType(type) {
    return (0, _instanceOf$2.instanceOf)(type, GraphQLInterfaceType);
  }

  function assertInterfaceType(type) {
    if (!isInterfaceType(type)) {
      throw new Error(
        `Expected ${(0, _inspect$p.inspect)(type)} to be a GraphQL Interface type.`,
      );
    }

    return type;
  }

  function isUnionType(type) {
    return (0, _instanceOf$2.instanceOf)(type, GraphQLUnionType);
  }

  function assertUnionType(type) {
    if (!isUnionType(type)) {
      throw new Error(
        `Expected ${(0, _inspect$p.inspect)(type)} to be a GraphQL Union type.`,
      );
    }

    return type;
  }

  function isEnumType(type) {
    return (0, _instanceOf$2.instanceOf)(type, GraphQLEnumType);
  }

  function assertEnumType(type) {
    if (!isEnumType(type)) {
      throw new Error(
        `Expected ${(0, _inspect$p.inspect)(type)} to be a GraphQL Enum type.`,
      );
    }

    return type;
  }

  function isInputObjectType(type) {
    return (0, _instanceOf$2.instanceOf)(type, GraphQLInputObjectType);
  }

  function assertInputObjectType(type) {
    if (!isInputObjectType(type)) {
      throw new Error(
        `Expected ${(0, _inspect$p.inspect)(
        type,
      )} to be a GraphQL Input Object type.`,
      );
    }

    return type;
  }

  function isListType(type) {
    return (0, _instanceOf$2.instanceOf)(type, GraphQLList);
  }

  function assertListType(type) {
    if (!isListType(type)) {
      throw new Error(
        `Expected ${(0, _inspect$p.inspect)(type)} to be a GraphQL List type.`,
      );
    }

    return type;
  }

  function isNonNullType(type) {
    return (0, _instanceOf$2.instanceOf)(type, GraphQLNonNull);
  }

  function assertNonNullType(type) {
    if (!isNonNullType(type)) {
      throw new Error(
        `Expected ${(0, _inspect$p.inspect)(type)} to be a GraphQL Non-Null type.`,
      );
    }

    return type;
  }
  /**
   * These types may be used as input types for arguments and directives.
   */

  function isInputType(type) {
    return (
      isScalarType(type) ||
      isEnumType(type) ||
      isInputObjectType(type) ||
      (isWrappingType(type) && isInputType(type.ofType))
    );
  }

  function assertInputType(type) {
    if (!isInputType(type)) {
      throw new Error(
        `Expected ${(0, _inspect$p.inspect)(type)} to be a GraphQL input type.`,
      );
    }

    return type;
  }
  /**
   * These types may be used as output types as the result of fields.
   */

  function isOutputType(type) {
    return (
      isScalarType(type) ||
      isObjectType(type) ||
      isInterfaceType(type) ||
      isUnionType(type) ||
      isEnumType(type) ||
      (isWrappingType(type) && isOutputType(type.ofType))
    );
  }

  function assertOutputType(type) {
    if (!isOutputType(type)) {
      throw new Error(
        `Expected ${(0, _inspect$p.inspect)(type)} to be a GraphQL output type.`,
      );
    }

    return type;
  }
  /**
   * These types may describe types which may be leaf values.
   */

  function isLeafType(type) {
    return isScalarType(type) || isEnumType(type);
  }

  function assertLeafType(type) {
    if (!isLeafType(type)) {
      throw new Error(
        `Expected ${(0, _inspect$p.inspect)(type)} to be a GraphQL leaf type.`,
      );
    }

    return type;
  }
  /**
   * These types may describe the parent context of a selection set.
   */

  function isCompositeType(type) {
    return isObjectType(type) || isInterfaceType(type) || isUnionType(type);
  }

  function assertCompositeType(type) {
    if (!isCompositeType(type)) {
      throw new Error(
        `Expected ${(0, _inspect$p.inspect)(type)} to be a GraphQL composite type.`,
      );
    }

    return type;
  }
  /**
   * These types may describe the parent context of a selection set.
   */

  function isAbstractType(type) {
    return isInterfaceType(type) || isUnionType(type);
  }

  function assertAbstractType(type) {
    if (!isAbstractType(type)) {
      throw new Error(
        `Expected ${(0, _inspect$p.inspect)(type)} to be a GraphQL abstract type.`,
      );
    }

    return type;
  }
  /**
   * List Type Wrapper
   *
   * A list is a wrapping type which points to another type.
   * Lists are often created within the context of defining the fields of
   * an object type.
   *
   * Example:
   *
   * ```ts
   * const PersonType = new GraphQLObjectType({
   *   name: 'Person',
   *   fields: () => ({
   *     parents: { type: new GraphQLList(PersonType) },
   *     children: { type: new GraphQLList(PersonType) },
   *   })
   * })
   * ```
   */

  class GraphQLList {
    constructor(ofType) {
      isType(ofType) ||
        (0, _devAssert$a.devAssert)(
          false,
          `Expected ${(0, _inspect$p.inspect)(ofType)} to be a GraphQL type.`,
        );
      this.ofType = ofType;
    }

    get [Symbol.toStringTag]() {
      return 'GraphQLList';
    }

    toString() {
      return '[' + String(this.ofType) + ']';
    }

    toJSON() {
      return this.toString();
    }
  }
  /**
   * Non-Null Type Wrapper
   *
   * A non-null is a wrapping type which points to another type.
   * Non-null types enforce that their values are never null and can ensure
   * an error is raised if this ever occurs during a request. It is useful for
   * fields which you can make a strong guarantee on non-nullability, for example
   * usually the id field of a database row will never be null.
   *
   * Example:
   *
   * ```ts
   * const RowType = new GraphQLObjectType({
   *   name: 'Row',
   *   fields: () => ({
   *     id: { type: new GraphQLNonNull(GraphQLString) },
   *   })
   * })
   * ```
   * Note: the enforcement of non-nullability occurs within the executor.
   */

  definition.GraphQLList = GraphQLList;

  class GraphQLNonNull {
    constructor(ofType) {
      isNullableType(ofType) ||
        (0, _devAssert$a.devAssert)(
          false,
          `Expected ${(0, _inspect$p.inspect)(
          ofType,
        )} to be a GraphQL nullable type.`,
        );
      this.ofType = ofType;
    }

    get [Symbol.toStringTag]() {
      return 'GraphQLNonNull';
    }

    toString() {
      return String(this.ofType) + '!';
    }

    toJSON() {
      return this.toString();
    }
  }
  /**
   * These types wrap and modify other types
   */

  definition.GraphQLNonNull = GraphQLNonNull;

  function isWrappingType(type) {
    return isListType(type) || isNonNullType(type);
  }

  function assertWrappingType(type) {
    if (!isWrappingType(type)) {
      throw new Error(
        `Expected ${(0, _inspect$p.inspect)(type)} to be a GraphQL wrapping type.`,
      );
    }

    return type;
  }
  /**
   * These types can all accept null as a value.
   */

  function isNullableType(type) {
    return isType(type) && !isNonNullType(type);
  }

  function assertNullableType(type) {
    if (!isNullableType(type)) {
      throw new Error(
        `Expected ${(0, _inspect$p.inspect)(type)} to be a GraphQL nullable type.`,
      );
    }

    return type;
  }

  function getNullableType(type) {
    if (type) {
      return isNonNullType(type) ? type.ofType : type;
    }
  }
  /**
   * These named types do not include modifiers like List or NonNull.
   */

  function isNamedType(type) {
    return (
      isScalarType(type) ||
      isObjectType(type) ||
      isInterfaceType(type) ||
      isUnionType(type) ||
      isEnumType(type) ||
      isInputObjectType(type)
    );
  }

  function assertNamedType(type) {
    if (!isNamedType(type)) {
      throw new Error(
        `Expected ${(0, _inspect$p.inspect)(type)} to be a GraphQL named type.`,
      );
    }

    return type;
  }

  function getNamedType(type) {
    if (type) {
      let unwrappedType = type;

      while (isWrappingType(unwrappedType)) {
        unwrappedType = unwrappedType.ofType;
      }

      return unwrappedType;
    }
  }
  /**
   * Used while defining GraphQL types to allow for circular references in
   * otherwise immutable type definitions.
   */

  function resolveReadonlyArrayThunk(thunk) {
    return typeof thunk === 'function' ? thunk() : thunk;
  }

  function resolveObjMapThunk(thunk) {
    return typeof thunk === 'function' ? thunk() : thunk;
  }
  /**
   * Custom extensions
   *
   * @remarks
   * Use a unique identifier name for your extension, for example the name of
   * your library or project. Do not use a shortened identifier as this increases
   * the risk of conflicts. We recommend you add at most one extension field,
   * an object which can contain all the values you need.
   */

  /**
   * Scalar Type Definition
   *
   * The leaf values of any request and input values to arguments are
   * Scalars (or Enums) and are defined with a name and a series of functions
   * used to parse input from ast or variables and to ensure validity.
   *
   * If a type's serialize function does not return a value (i.e. it returns
   * `undefined`) then an error will be raised and a `null` value will be returned
   * in the response. If the serialize function returns `null`, then no error will
   * be included in the response.
   *
   * Example:
   *
   * ```ts
   * const OddType = new GraphQLScalarType({
   *   name: 'Odd',
   *   serialize(value) {
   *     if (value % 2 === 1) {
   *       return value;
   *     }
   *   }
   * });
   * ```
   */
  class GraphQLScalarType {
    constructor(config) {
      var _config$parseValue,
        _config$serialize,
        _config$parseLiteral,
        _config$extensionASTN;

      const parseValue =
        (_config$parseValue = config.parseValue) !== null &&
        _config$parseValue !== void 0
          ? _config$parseValue
          : _identityFunc.identityFunc;
      this.name = (0, _assertName$2.assertName)(config.name);
      this.description = config.description;
      this.specifiedByURL = config.specifiedByURL;
      this.serialize =
        (_config$serialize = config.serialize) !== null &&
        _config$serialize !== void 0
          ? _config$serialize
          : _identityFunc.identityFunc;
      this.parseValue = parseValue;
      this.parseLiteral =
        (_config$parseLiteral = config.parseLiteral) !== null &&
        _config$parseLiteral !== void 0
          ? _config$parseLiteral
          : (node, variables) =>
              parseValue(
                (0, _valueFromASTUntyped.valueFromASTUntyped)(node, variables),
              );
      this.extensions = (0, _toObjMap$2.toObjMap)(config.extensions);
      this.astNode = config.astNode;
      this.extensionASTNodes =
        (_config$extensionASTN = config.extensionASTNodes) !== null &&
        _config$extensionASTN !== void 0
          ? _config$extensionASTN
          : [];
      config.specifiedByURL == null ||
        typeof config.specifiedByURL === 'string' ||
        (0, _devAssert$a.devAssert)(
          false,
          `${this.name} must provide "specifiedByURL" as a string, ` +
            `but got: ${(0, _inspect$p.inspect)(config.specifiedByURL)}.`,
        );
      config.serialize == null ||
        typeof config.serialize === 'function' ||
        (0, _devAssert$a.devAssert)(
          false,
          `${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`,
        );

      if (config.parseLiteral) {
        (typeof config.parseValue === 'function' &&
          typeof config.parseLiteral === 'function') ||
          (0, _devAssert$a.devAssert)(
            false,
            `${this.name} must provide both "parseValue" and "parseLiteral" functions.`,
          );
      }
    }

    get [Symbol.toStringTag]() {
      return 'GraphQLScalarType';
    }

    toConfig() {
      return {
        name: this.name,
        description: this.description,
        specifiedByURL: this.specifiedByURL,
        serialize: this.serialize,
        parseValue: this.parseValue,
        parseLiteral: this.parseLiteral,
        extensions: this.extensions,
        astNode: this.astNode,
        extensionASTNodes: this.extensionASTNodes,
      };
    }

    toString() {
      return this.name;
    }

    toJSON() {
      return this.toString();
    }
  }

  definition.GraphQLScalarType = GraphQLScalarType;

  /**
   * Object Type Definition
   *
   * Almost all of the GraphQL types you define will be object types. Object types
   * have a name, but most importantly describe their fields.
   *
   * Example:
   *
   * ```ts
   * const AddressType = new GraphQLObjectType({
   *   name: 'Address',
   *   fields: {
   *     street: { type: GraphQLString },
   *     number: { type: GraphQLInt },
   *     formatted: {
   *       type: GraphQLString,
   *       resolve(obj) {
   *         return obj.number + ' ' + obj.street
   *       }
   *     }
   *   }
   * });
   * ```
   *
   * When two types need to refer to each other, or a type needs to refer to
   * itself in a field, you can use a function expression (aka a closure or a
   * thunk) to supply the fields lazily.
   *
   * Example:
   *
   * ```ts
   * const PersonType = new GraphQLObjectType({
   *   name: 'Person',
   *   fields: () => ({
   *     name: { type: GraphQLString },
   *     bestFriend: { type: PersonType },
   *   })
   * });
   * ```
   */
  class GraphQLObjectType {
    constructor(config) {
      var _config$extensionASTN2;

      this.name = (0, _assertName$2.assertName)(config.name);
      this.description = config.description;
      this.isTypeOf = config.isTypeOf;
      this.extensions = (0, _toObjMap$2.toObjMap)(config.extensions);
      this.astNode = config.astNode;
      this.extensionASTNodes =
        (_config$extensionASTN2 = config.extensionASTNodes) !== null &&
        _config$extensionASTN2 !== void 0
          ? _config$extensionASTN2
          : [];

      this._fields = () => defineFieldMap(config);

      this._interfaces = () => defineInterfaces(config);

      config.isTypeOf == null ||
        typeof config.isTypeOf === 'function' ||
        (0, _devAssert$a.devAssert)(
          false,
          `${this.name} must provide "isTypeOf" as a function, ` +
            `but got: ${(0, _inspect$p.inspect)(config.isTypeOf)}.`,
        );
    }

    get [Symbol.toStringTag]() {
      return 'GraphQLObjectType';
    }

    getFields() {
      if (typeof this._fields === 'function') {
        this._fields = this._fields();
      }

      return this._fields;
    }

    getInterfaces() {
      if (typeof this._interfaces === 'function') {
        this._interfaces = this._interfaces();
      }

      return this._interfaces;
    }

    toConfig() {
      return {
        name: this.name,
        description: this.description,
        interfaces: this.getInterfaces(),
        fields: fieldsToFieldsConfig(this.getFields()),
        isTypeOf: this.isTypeOf,
        extensions: this.extensions,
        astNode: this.astNode,
        extensionASTNodes: this.extensionASTNodes,
      };
    }

    toString() {
      return this.name;
    }

    toJSON() {
      return this.toString();
    }
  }

  definition.GraphQLObjectType = GraphQLObjectType;

  function defineInterfaces(config) {
    var _config$interfaces;

    const interfaces = resolveReadonlyArrayThunk(
      (_config$interfaces = config.interfaces) !== null &&
        _config$interfaces !== void 0
        ? _config$interfaces
        : [],
    );
    Array.isArray(interfaces) ||
      (0, _devAssert$a.devAssert)(
        false,
        `${config.name} interfaces must be an Array or a function which returns an Array.`,
      );
    return interfaces;
  }

  function defineFieldMap(config) {
    const fieldMap = resolveObjMapThunk(config.fields);
    isPlainObj(fieldMap) ||
      (0, _devAssert$a.devAssert)(
        false,
        `${config.name} fields must be an object with field names as keys or a function which returns such an object.`,
      );
    return (0, _mapValue$1.mapValue)(fieldMap, (fieldConfig, fieldName) => {
      var _fieldConfig$args;

      isPlainObj(fieldConfig) ||
        (0, _devAssert$a.devAssert)(
          false,
          `${config.name}.${fieldName} field config must be an object.`,
        );
      fieldConfig.resolve == null ||
        typeof fieldConfig.resolve === 'function' ||
        (0, _devAssert$a.devAssert)(
          false,
          `${config.name}.${fieldName} field resolver must be a function if ` +
            `provided, but got: ${(0, _inspect$p.inspect)(fieldConfig.resolve)}.`,
        );
      const argsConfig =
        (_fieldConfig$args = fieldConfig.args) !== null &&
        _fieldConfig$args !== void 0
          ? _fieldConfig$args
          : {};
      isPlainObj(argsConfig) ||
        (0, _devAssert$a.devAssert)(
          false,
          `${config.name}.${fieldName} args must be an object with argument names as keys.`,
        );
      return {
        name: (0, _assertName$2.assertName)(fieldName),
        description: fieldConfig.description,
        type: fieldConfig.type,
        args: defineArguments(argsConfig),
        resolve: fieldConfig.resolve,
        subscribe: fieldConfig.subscribe,
        deprecationReason: fieldConfig.deprecationReason,
        extensions: (0, _toObjMap$2.toObjMap)(fieldConfig.extensions),
        astNode: fieldConfig.astNode,
      };
    });
  }

  function defineArguments(config) {
    return Object.entries(config).map(([argName, argConfig]) => ({
      name: (0, _assertName$2.assertName)(argName),
      description: argConfig.description,
      type: argConfig.type,
      defaultValue: argConfig.defaultValue,
      deprecationReason: argConfig.deprecationReason,
      extensions: (0, _toObjMap$2.toObjMap)(argConfig.extensions),
      astNode: argConfig.astNode,
    }));
  }

  function isPlainObj(obj) {
    return (0, _isObjectLike$7.isObjectLike)(obj) && !Array.isArray(obj);
  }

  function fieldsToFieldsConfig(fields) {
    return (0, _mapValue$1.mapValue)(fields, (field) => ({
      description: field.description,
      type: field.type,
      args: argsToArgsConfig(field.args),
      resolve: field.resolve,
      subscribe: field.subscribe,
      deprecationReason: field.deprecationReason,
      extensions: field.extensions,
      astNode: field.astNode,
    }));
  }
  /**
   * @internal
   */

  function argsToArgsConfig(args) {
    return (0, _keyValMap$2.keyValMap)(
      args,
      (arg) => arg.name,
      (arg) => ({
        description: arg.description,
        type: arg.type,
        defaultValue: arg.defaultValue,
        deprecationReason: arg.deprecationReason,
        extensions: arg.extensions,
        astNode: arg.astNode,
      }),
    );
  }

  function isRequiredArgument(arg) {
    return isNonNullType(arg.type) && arg.defaultValue === undefined;
  }

  /**
   * Interface Type Definition
   *
   * When a field can return one of a heterogeneous set of types, a Interface type
   * is used to describe what types are possible, what fields are in common across
   * all types, as well as a function to determine which type is actually used
   * when the field is resolved.
   *
   * Example:
   *
   * ```ts
   * const EntityType = new GraphQLInterfaceType({
   *   name: 'Entity',
   *   fields: {
   *     name: { type: GraphQLString }
   *   }
   * });
   * ```
   */
  class GraphQLInterfaceType {
    constructor(config) {
      var _config$extensionASTN3;

      this.name = (0, _assertName$2.assertName)(config.name);
      this.description = config.description;
      this.resolveType = config.resolveType;
      this.extensions = (0, _toObjMap$2.toObjMap)(config.extensions);
      this.astNode = config.astNode;
      this.extensionASTNodes =
        (_config$extensionASTN3 = config.extensionASTNodes) !== null &&
        _config$extensionASTN3 !== void 0
          ? _config$extensionASTN3
          : [];
      this._fields = defineFieldMap.bind(undefined, config);
      this._interfaces = defineInterfaces.bind(undefined, config);
      config.resolveType == null ||
        typeof config.resolveType === 'function' ||
        (0, _devAssert$a.devAssert)(
          false,
          `${this.name} must provide "resolveType" as a function, ` +
            `but got: ${(0, _inspect$p.inspect)(config.resolveType)}.`,
        );
    }

    get [Symbol.toStringTag]() {
      return 'GraphQLInterfaceType';
    }

    getFields() {
      if (typeof this._fields === 'function') {
        this._fields = this._fields();
      }

      return this._fields;
    }

    getInterfaces() {
      if (typeof this._interfaces === 'function') {
        this._interfaces = this._interfaces();
      }

      return this._interfaces;
    }

    toConfig() {
      return {
        name: this.name,
        description: this.description,
        interfaces: this.getInterfaces(),
        fields: fieldsToFieldsConfig(this.getFields()),
        resolveType: this.resolveType,
        extensions: this.extensions,
        astNode: this.astNode,
        extensionASTNodes: this.extensionASTNodes,
      };
    }

    toString() {
      return this.name;
    }

    toJSON() {
      return this.toString();
    }
  }

  definition.GraphQLInterfaceType = GraphQLInterfaceType;

  /**
   * Union Type Definition
   *
   * When a field can return one of a heterogeneous set of types, a Union type
   * is used to describe what types are possible as well as providing a function
   * to determine which type is actually used when the field is resolved.
   *
   * Example:
   *
   * ```ts
   * const PetType = new GraphQLUnionType({
   *   name: 'Pet',
   *   types: [ DogType, CatType ],
   *   resolveType(value) {
   *     if (value instanceof Dog) {
   *       return DogType;
   *     }
   *     if (value instanceof Cat) {
   *       return CatType;
   *     }
   *   }
   * });
   * ```
   */
  class GraphQLUnionType {
    constructor(config) {
      var _config$extensionASTN4;

      this.name = (0, _assertName$2.assertName)(config.name);
      this.description = config.description;
      this.resolveType = config.resolveType;
      this.extensions = (0, _toObjMap$2.toObjMap)(config.extensions);
      this.astNode = config.astNode;
      this.extensionASTNodes =
        (_config$extensionASTN4 = config.extensionASTNodes) !== null &&
        _config$extensionASTN4 !== void 0
          ? _config$extensionASTN4
          : [];
      this._types = defineTypes.bind(undefined, config);
      config.resolveType == null ||
        typeof config.resolveType === 'function' ||
        (0, _devAssert$a.devAssert)(
          false,
          `${this.name} must provide "resolveType" as a function, ` +
            `but got: ${(0, _inspect$p.inspect)(config.resolveType)}.`,
        );
    }

    get [Symbol.toStringTag]() {
      return 'GraphQLUnionType';
    }

    getTypes() {
      if (typeof this._types === 'function') {
        this._types = this._types();
      }

      return this._types;
    }

    toConfig() {
      return {
        name: this.name,
        description: this.description,
        types: this.getTypes(),
        resolveType: this.resolveType,
        extensions: this.extensions,
        astNode: this.astNode,
        extensionASTNodes: this.extensionASTNodes,
      };
    }

    toString() {
      return this.name;
    }

    toJSON() {
      return this.toString();
    }
  }

  definition.GraphQLUnionType = GraphQLUnionType;

  function defineTypes(config) {
    const types = resolveReadonlyArrayThunk(config.types);
    Array.isArray(types) ||
      (0, _devAssert$a.devAssert)(
        false,
        `Must provide Array of types or a function which returns such an array for Union ${config.name}.`,
      );
    return types;
  }

  /**
   * Enum Type Definition
   *
   * Some leaf values of requests and input values are Enums. GraphQL serializes
   * Enum values as strings, however internally Enums can be represented by any
   * kind of type, often integers.
   *
   * Example:
   *
   * ```ts
   * const RGBType = new GraphQLEnumType({
   *   name: 'RGB',
   *   values: {
   *     RED: { value: 0 },
   *     GREEN: { value: 1 },
   *     BLUE: { value: 2 }
   *   }
   * });
   * ```
   *
   * Note: If a value is not provided in a definition, the name of the enum value
   * will be used as its internal value.
   */
  class GraphQLEnumType {
    /* <T> */
    constructor(config) {
      var _config$extensionASTN5;

      this.name = (0, _assertName$2.assertName)(config.name);
      this.description = config.description;
      this.extensions = (0, _toObjMap$2.toObjMap)(config.extensions);
      this.astNode = config.astNode;
      this.extensionASTNodes =
        (_config$extensionASTN5 = config.extensionASTNodes) !== null &&
        _config$extensionASTN5 !== void 0
          ? _config$extensionASTN5
          : [];
      this._values = defineEnumValues(this.name, config.values);
      this._valueLookup = new Map(
        this._values.map((enumValue) => [enumValue.value, enumValue]),
      );
      this._nameLookup = (0, _keyMap$6.keyMap)(this._values, (value) => value.name);
    }

    get [Symbol.toStringTag]() {
      return 'GraphQLEnumType';
    }

    getValues() {
      return this._values;
    }

    getValue(name) {
      return this._nameLookup[name];
    }

    serialize(outputValue) {
      const enumValue = this._valueLookup.get(outputValue);

      if (enumValue === undefined) {
        throw new _GraphQLError$K.GraphQLError(
          `Enum "${this.name}" cannot represent value: ${(0, _inspect$p.inspect)(
          outputValue,
        )}`,
        );
      }

      return enumValue.name;
    }

    parseValue(inputValue) /* T */
    {
      if (typeof inputValue !== 'string') {
        const valueStr = (0, _inspect$p.inspect)(inputValue);
        throw new _GraphQLError$K.GraphQLError(
          `Enum "${this.name}" cannot represent non-string value: ${valueStr}.` +
            didYouMeanEnumValue(this, valueStr),
        );
      }

      const enumValue = this.getValue(inputValue);

      if (enumValue == null) {
        throw new _GraphQLError$K.GraphQLError(
          `Value "${inputValue}" does not exist in "${this.name}" enum.` +
            didYouMeanEnumValue(this, inputValue),
        );
      }

      return enumValue.value;
    }

    parseLiteral(valueNode, _variables) /* T */
    {
      // Note: variables will be resolved to a value before calling this function.
      if (valueNode.kind !== _kinds$r.Kind.ENUM) {
        const valueStr = (0, _printer$a.print)(valueNode);
        throw new _GraphQLError$K.GraphQLError(
          `Enum "${this.name}" cannot represent non-enum value: ${valueStr}.` +
            didYouMeanEnumValue(this, valueStr),
          valueNode,
        );
      }

      const enumValue = this.getValue(valueNode.value);

      if (enumValue == null) {
        const valueStr = (0, _printer$a.print)(valueNode);
        throw new _GraphQLError$K.GraphQLError(
          `Value "${valueStr}" does not exist in "${this.name}" enum.` +
            didYouMeanEnumValue(this, valueStr),
          valueNode,
        );
      }

      return enumValue.value;
    }

    toConfig() {
      const values = (0, _keyValMap$2.keyValMap)(
        this.getValues(),
        (value) => value.name,
        (value) => ({
          description: value.description,
          value: value.value,
          deprecationReason: value.deprecationReason,
          extensions: value.extensions,
          astNode: value.astNode,
        }),
      );
      return {
        name: this.name,
        description: this.description,
        values,
        extensions: this.extensions,
        astNode: this.astNode,
        extensionASTNodes: this.extensionASTNodes,
      };
    }

    toString() {
      return this.name;
    }

    toJSON() {
      return this.toString();
    }
  }

  definition.GraphQLEnumType = GraphQLEnumType;

  function didYouMeanEnumValue(enumType, unknownValueStr) {
    const allNames = enumType.getValues().map((value) => value.name);
    const suggestedValues = (0, _suggestionList$6.suggestionList)(
      unknownValueStr,
      allNames,
    );
    return (0, _didYouMean$6.didYouMean)('the enum value', suggestedValues);
  }

  function defineEnumValues(typeName, valueMap) {
    isPlainObj(valueMap) ||
      (0, _devAssert$a.devAssert)(
        false,
        `${typeName} values must be an object with value names as keys.`,
      );
    return Object.entries(valueMap).map(([valueName, valueConfig]) => {
      isPlainObj(valueConfig) ||
        (0, _devAssert$a.devAssert)(
          false,
          `${typeName}.${valueName} must refer to an object with a "value" key ` +
            `representing an internal value but got: ${(0, _inspect$p.inspect)(
            valueConfig,
          )}.`,
        );
      return {
        name: (0, _assertName$2.assertEnumValueName)(valueName),
        description: valueConfig.description,
        value: valueConfig.value !== undefined ? valueConfig.value : valueName,
        deprecationReason: valueConfig.deprecationReason,
        extensions: (0, _toObjMap$2.toObjMap)(valueConfig.extensions),
        astNode: valueConfig.astNode,
      };
    });
  }

  /**
   * Input Object Type Definition
   *
   * An input object defines a structured collection of fields which may be
   * supplied to a field argument.
   *
   * Using `NonNull` will ensure that a value must be provided by the query
   *
   * Example:
   *
   * ```ts
   * const GeoPoint = new GraphQLInputObjectType({
   *   name: 'GeoPoint',
   *   fields: {
   *     lat: { type: new GraphQLNonNull(GraphQLFloat) },
   *     lon: { type: new GraphQLNonNull(GraphQLFloat) },
   *     alt: { type: GraphQLFloat, defaultValue: 0 },
   *   }
   * });
   * ```
   */
  class GraphQLInputObjectType {
    constructor(config) {
      var _config$extensionASTN6;

      this.name = (0, _assertName$2.assertName)(config.name);
      this.description = config.description;
      this.extensions = (0, _toObjMap$2.toObjMap)(config.extensions);
      this.astNode = config.astNode;
      this.extensionASTNodes =
        (_config$extensionASTN6 = config.extensionASTNodes) !== null &&
        _config$extensionASTN6 !== void 0
          ? _config$extensionASTN6
          : [];
      this._fields = defineInputFieldMap.bind(undefined, config);
    }

    get [Symbol.toStringTag]() {
      return 'GraphQLInputObjectType';
    }

    getFields() {
      if (typeof this._fields === 'function') {
        this._fields = this._fields();
      }

      return this._fields;
    }

    toConfig() {
      const fields = (0, _mapValue$1.mapValue)(this.getFields(), (field) => ({
        description: field.description,
        type: field.type,
        defaultValue: field.defaultValue,
        deprecationReason: field.deprecationReason,
        extensions: field.extensions,
        astNode: field.astNode,
      }));
      return {
        name: this.name,
        description: this.description,
        fields,
        extensions: this.extensions,
        astNode: this.astNode,
        extensionASTNodes: this.extensionASTNodes,
      };
    }

    toString() {
      return this.name;
    }

    toJSON() {
      return this.toString();
    }
  }

  definition.GraphQLInputObjectType = GraphQLInputObjectType;

  function defineInputFieldMap(config) {
    const fieldMap = resolveObjMapThunk(config.fields);
    isPlainObj(fieldMap) ||
      (0, _devAssert$a.devAssert)(
        false,
        `${config.name} fields must be an object with field names as keys or a function which returns such an object.`,
      );
    return (0, _mapValue$1.mapValue)(fieldMap, (fieldConfig, fieldName) => {
      !('resolve' in fieldConfig) ||
        (0, _devAssert$a.devAssert)(
          false,
          `${config.name}.${fieldName} field has a resolve property, but Input Types cannot define resolvers.`,
        );
      return {
        name: (0, _assertName$2.assertName)(fieldName),
        description: fieldConfig.description,
        type: fieldConfig.type,
        defaultValue: fieldConfig.defaultValue,
        deprecationReason: fieldConfig.deprecationReason,
        extensions: (0, _toObjMap$2.toObjMap)(fieldConfig.extensions),
        astNode: fieldConfig.astNode,
      };
    });
  }

  function isRequiredInputField(field) {
    return isNonNullType(field.type) && field.defaultValue === undefined;
  }

  Object.defineProperty(typeComparators, '__esModule', {
    value: true,
  });
  typeComparators.doTypesOverlap = doTypesOverlap;
  typeComparators.isEqualType = isEqualType;
  typeComparators.isTypeSubTypeOf = isTypeSubTypeOf;

  var _definition$w = definition;

  /**
   * Provided two types, return true if the types are equal (invariant).
   */
  function isEqualType(typeA, typeB) {
    // Equivalent types are equal.
    if (typeA === typeB) {
      return true;
    } // If either type is non-null, the other must also be non-null.

    if (
      (0, _definition$w.isNonNullType)(typeA) &&
      (0, _definition$w.isNonNullType)(typeB)
    ) {
      return isEqualType(typeA.ofType, typeB.ofType);
    } // If either type is a list, the other must also be a list.

    if (
      (0, _definition$w.isListType)(typeA) &&
      (0, _definition$w.isListType)(typeB)
    ) {
      return isEqualType(typeA.ofType, typeB.ofType);
    } // Otherwise the types are not equal.

    return false;
  }
  /**
   * Provided a type and a super type, return true if the first type is either
   * equal or a subset of the second super type (covariant).
   */

  function isTypeSubTypeOf(schema, maybeSubType, superType) {
    // Equivalent type is a valid subtype
    if (maybeSubType === superType) {
      return true;
    } // If superType is non-null, maybeSubType must also be non-null.

    if ((0, _definition$w.isNonNullType)(superType)) {
      if ((0, _definition$w.isNonNullType)(maybeSubType)) {
        return isTypeSubTypeOf(schema, maybeSubType.ofType, superType.ofType);
      }

      return false;
    }

    if ((0, _definition$w.isNonNullType)(maybeSubType)) {
      // If superType is nullable, maybeSubType may be non-null or nullable.
      return isTypeSubTypeOf(schema, maybeSubType.ofType, superType);
    } // If superType type is a list, maybeSubType type must also be a list.

    if ((0, _definition$w.isListType)(superType)) {
      if ((0, _definition$w.isListType)(maybeSubType)) {
        return isTypeSubTypeOf(schema, maybeSubType.ofType, superType.ofType);
      }

      return false;
    }

    if ((0, _definition$w.isListType)(maybeSubType)) {
      // If superType is not a list, maybeSubType must also be not a list.
      return false;
    } // If superType type is an abstract type, check if it is super type of maybeSubType.
    // Otherwise, the child type is not a valid subtype of the parent type.

    return (
      (0, _definition$w.isAbstractType)(superType) &&
      ((0, _definition$w.isInterfaceType)(maybeSubType) ||
        (0, _definition$w.isObjectType)(maybeSubType)) &&
      schema.isSubType(superType, maybeSubType)
    );
  }
  /**
   * Provided two composite types, determine if they "overlap". Two composite
   * types overlap when the Sets of possible concrete types for each intersect.
   *
   * This is often used to determine if a fragment of a given type could possibly
   * be visited in a context of another type.
   *
   * This function is commutative.
   */

  function doTypesOverlap(schema, typeA, typeB) {
    // Equivalent types overlap
    if (typeA === typeB) {
      return true;
    }

    if ((0, _definition$w.isAbstractType)(typeA)) {
      if ((0, _definition$w.isAbstractType)(typeB)) {
        // If both types are abstract, then determine if there is any intersection
        // between possible concrete types of each.
        return schema
          .getPossibleTypes(typeA)
          .some((type) => schema.isSubType(typeB, type));
      } // Determine if the latter type is a possible concrete type of the former.

      return schema.isSubType(typeA, typeB);
    }

    if ((0, _definition$w.isAbstractType)(typeB)) {
      // Determine if the former type is a possible concrete type of the latter.
      return schema.isSubType(typeB, typeA);
    } // Otherwise the types do not overlap.

    return false;
  }

  var directives = {};

  var scalars = {};

  Object.defineProperty(scalars, '__esModule', {
    value: true,
  });
  scalars.GraphQLString =
    scalars.GraphQLInt =
    scalars.GraphQLID =
    scalars.GraphQLFloat =
    scalars.GraphQLBoolean =
    scalars.GRAPHQL_MIN_INT =
    scalars.GRAPHQL_MAX_INT =
      void 0;
  scalars.isSpecifiedScalarType = isSpecifiedScalarType;
  scalars.specifiedScalarTypes = void 0;

  var _inspect$o = inspect$1;

  var _isObjectLike$6 = isObjectLike$1;

  var _GraphQLError$J = GraphQLError$1;

  var _kinds$q = kinds;

  var _printer$9 = printer;

  var _definition$v = definition;

  /**
   * Maximum possible Int value as per GraphQL Spec (32-bit signed integer).
   * n.b. This differs from JavaScript's numbers that are IEEE 754 doubles safe up-to 2^53 - 1
   * */
  const GRAPHQL_MAX_INT = 2147483647;
  /**
   * Minimum possible Int value as per GraphQL Spec (32-bit signed integer).
   * n.b. This differs from JavaScript's numbers that are IEEE 754 doubles safe starting at -(2^53 - 1)
   * */

  scalars.GRAPHQL_MAX_INT = GRAPHQL_MAX_INT;
  const GRAPHQL_MIN_INT = -2147483648;
  scalars.GRAPHQL_MIN_INT = GRAPHQL_MIN_INT;
  const GraphQLInt = new _definition$v.GraphQLScalarType({
    name: 'Int',
    description:
      'The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.',

    serialize(outputValue) {
      const coercedValue = serializeObject(outputValue);

      if (typeof coercedValue === 'boolean') {
        return coercedValue ? 1 : 0;
      }

      let num = coercedValue;

      if (typeof coercedValue === 'string' && coercedValue !== '') {
        num = Number(coercedValue);
      }

      if (typeof num !== 'number' || !Number.isInteger(num)) {
        throw new _GraphQLError$J.GraphQLError(
          `Int cannot represent non-integer value: ${(0, _inspect$o.inspect)(
          coercedValue,
        )}`,
        );
      }

      if (num > GRAPHQL_MAX_INT || num < GRAPHQL_MIN_INT) {
        throw new _GraphQLError$J.GraphQLError(
          'Int cannot represent non 32-bit signed integer value: ' +
            (0, _inspect$o.inspect)(coercedValue),
        );
      }

      return num;
    },

    parseValue(inputValue) {
      if (typeof inputValue !== 'number' || !Number.isInteger(inputValue)) {
        throw new _GraphQLError$J.GraphQLError(
          `Int cannot represent non-integer value: ${(0, _inspect$o.inspect)(
          inputValue,
        )}`,
        );
      }

      if (inputValue > GRAPHQL_MAX_INT || inputValue < GRAPHQL_MIN_INT) {
        throw new _GraphQLError$J.GraphQLError(
          `Int cannot represent non 32-bit signed integer value: ${inputValue}`,
        );
      }

      return inputValue;
    },

    parseLiteral(valueNode) {
      if (valueNode.kind !== _kinds$q.Kind.INT) {
        throw new _GraphQLError$J.GraphQLError(
          `Int cannot represent non-integer value: ${(0, _printer$9.print)(
          valueNode,
        )}`,
          valueNode,
        );
      }

      const num = parseInt(valueNode.value, 10);

      if (num > GRAPHQL_MAX_INT || num < GRAPHQL_MIN_INT) {
        throw new _GraphQLError$J.GraphQLError(
          `Int cannot represent non 32-bit signed integer value: ${valueNode.value}`,
          valueNode,
        );
      }

      return num;
    },
  });
  scalars.GraphQLInt = GraphQLInt;
  const GraphQLFloat = new _definition$v.GraphQLScalarType({
    name: 'Float',
    description:
      'The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).',

    serialize(outputValue) {
      const coercedValue = serializeObject(outputValue);

      if (typeof coercedValue === 'boolean') {
        return coercedValue ? 1 : 0;
      }

      let num = coercedValue;

      if (typeof coercedValue === 'string' && coercedValue !== '') {
        num = Number(coercedValue);
      }

      if (typeof num !== 'number' || !Number.isFinite(num)) {
        throw new _GraphQLError$J.GraphQLError(
          `Float cannot represent non numeric value: ${(0, _inspect$o.inspect)(
          coercedValue,
        )}`,
        );
      }

      return num;
    },

    parseValue(inputValue) {
      if (typeof inputValue !== 'number' || !Number.isFinite(inputValue)) {
        throw new _GraphQLError$J.GraphQLError(
          `Float cannot represent non numeric value: ${(0, _inspect$o.inspect)(
          inputValue,
        )}`,
        );
      }

      return inputValue;
    },

    parseLiteral(valueNode) {
      if (
        valueNode.kind !== _kinds$q.Kind.FLOAT &&
        valueNode.kind !== _kinds$q.Kind.INT
      ) {
        throw new _GraphQLError$J.GraphQLError(
          `Float cannot represent non numeric value: ${(0, _printer$9.print)(
          valueNode,
        )}`,
          valueNode,
        );
      }

      return parseFloat(valueNode.value);
    },
  });
  scalars.GraphQLFloat = GraphQLFloat;
  const GraphQLString = new _definition$v.GraphQLScalarType({
    name: 'String',
    description:
      'The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.',

    serialize(outputValue) {
      const coercedValue = serializeObject(outputValue); // Serialize string, boolean and number values to a string, but do not
      // attempt to coerce object, function, symbol, or other types as strings.

      if (typeof coercedValue === 'string') {
        return coercedValue;
      }

      if (typeof coercedValue === 'boolean') {
        return coercedValue ? 'true' : 'false';
      }

      if (typeof coercedValue === 'number' && Number.isFinite(coercedValue)) {
        return coercedValue.toString();
      }

      throw new _GraphQLError$J.GraphQLError(
        `String cannot represent value: ${(0, _inspect$o.inspect)(outputValue)}`,
      );
    },

    parseValue(inputValue) {
      if (typeof inputValue !== 'string') {
        throw new _GraphQLError$J.GraphQLError(
          `String cannot represent a non string value: ${(0, _inspect$o.inspect)(
          inputValue,
        )}`,
        );
      }

      return inputValue;
    },

    parseLiteral(valueNode) {
      if (valueNode.kind !== _kinds$q.Kind.STRING) {
        throw new _GraphQLError$J.GraphQLError(
          `String cannot represent a non string value: ${(0, _printer$9.print)(
          valueNode,
        )}`,
          valueNode,
        );
      }

      return valueNode.value;
    },
  });
  scalars.GraphQLString = GraphQLString;
  const GraphQLBoolean = new _definition$v.GraphQLScalarType({
    name: 'Boolean',
    description: 'The `Boolean` scalar type represents `true` or `false`.',

    serialize(outputValue) {
      const coercedValue = serializeObject(outputValue);

      if (typeof coercedValue === 'boolean') {
        return coercedValue;
      }

      if (Number.isFinite(coercedValue)) {
        return coercedValue !== 0;
      }

      throw new _GraphQLError$J.GraphQLError(
        `Boolean cannot represent a non boolean value: ${(0, _inspect$o.inspect)(
        coercedValue,
      )}`,
      );
    },

    parseValue(inputValue) {
      if (typeof inputValue !== 'boolean') {
        throw new _GraphQLError$J.GraphQLError(
          `Boolean cannot represent a non boolean value: ${(0, _inspect$o.inspect)(
          inputValue,
        )}`,
        );
      }

      return inputValue;
    },

    parseLiteral(valueNode) {
      if (valueNode.kind !== _kinds$q.Kind.BOOLEAN) {
        throw new _GraphQLError$J.GraphQLError(
          `Boolean cannot represent a non boolean value: ${(0, _printer$9.print)(
          valueNode,
        )}`,
          valueNode,
        );
      }

      return valueNode.value;
    },
  });
  scalars.GraphQLBoolean = GraphQLBoolean;
  const GraphQLID = new _definition$v.GraphQLScalarType({
    name: 'ID',
    description:
      'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',

    serialize(outputValue) {
      const coercedValue = serializeObject(outputValue);

      if (typeof coercedValue === 'string') {
        return coercedValue;
      }

      if (Number.isInteger(coercedValue)) {
        return String(coercedValue);
      }

      throw new _GraphQLError$J.GraphQLError(
        `ID cannot represent value: ${(0, _inspect$o.inspect)(outputValue)}`,
      );
    },

    parseValue(inputValue) {
      if (typeof inputValue === 'string') {
        return inputValue;
      }

      if (typeof inputValue === 'number' && Number.isInteger(inputValue)) {
        return inputValue.toString();
      }

      throw new _GraphQLError$J.GraphQLError(
        `ID cannot represent value: ${(0, _inspect$o.inspect)(inputValue)}`,
      );
    },

    parseLiteral(valueNode) {
      if (
        valueNode.kind !== _kinds$q.Kind.STRING &&
        valueNode.kind !== _kinds$q.Kind.INT
      ) {
        throw new _GraphQLError$J.GraphQLError(
          'ID cannot represent a non-string and non-integer value: ' +
            (0, _printer$9.print)(valueNode),
          valueNode,
        );
      }

      return valueNode.value;
    },
  });
  scalars.GraphQLID = GraphQLID;
  const specifiedScalarTypes = Object.freeze([
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLBoolean,
    GraphQLID,
  ]);
  scalars.specifiedScalarTypes = specifiedScalarTypes;

  function isSpecifiedScalarType(type) {
    return specifiedScalarTypes.some(({ name }) => type.name === name);
  } // Support serializing objects with custom valueOf() or toJSON() functions -
  // a common way to represent a complex value which can be represented as
  // a string (ex: MongoDB id objects).

  function serializeObject(outputValue) {
    if ((0, _isObjectLike$6.isObjectLike)(outputValue)) {
      if (typeof outputValue.valueOf === 'function') {
        const valueOfResult = outputValue.valueOf();

        if (!(0, _isObjectLike$6.isObjectLike)(valueOfResult)) {
          return valueOfResult;
        }
      }

      if (typeof outputValue.toJSON === 'function') {
        return outputValue.toJSON();
      }
    }

    return outputValue;
  }

  Object.defineProperty(directives, '__esModule', {
    value: true,
  });
  directives.GraphQLSpecifiedByDirective =
    directives.GraphQLSkipDirective =
    directives.GraphQLIncludeDirective =
    directives.GraphQLDirective =
    directives.GraphQLDeprecatedDirective =
    directives.DEFAULT_DEPRECATION_REASON =
      void 0;
  directives.assertDirective = assertDirective;
  directives.isDirective = isDirective;
  directives.isSpecifiedDirective = isSpecifiedDirective;
  directives.specifiedDirectives = void 0;

  var _devAssert$9 = devAssert$1;

  var _inspect$n = inspect$1;

  var _instanceOf$1 = instanceOf$1;

  var _isObjectLike$5 = isObjectLike$1;

  var _toObjMap$1 = toObjMap$1;

  var _directiveLocation$2 = directiveLocation;

  var _assertName$1 = assertName$1;

  var _definition$u = definition;

  var _scalars$7 = scalars;

  /**
   * Test if the given value is a GraphQL directive.
   */
  function isDirective(directive) {
    return (0, _instanceOf$1.instanceOf)(directive, GraphQLDirective);
  }

  function assertDirective(directive) {
    if (!isDirective(directive)) {
      throw new Error(
        `Expected ${(0, _inspect$n.inspect)(directive)} to be a GraphQL directive.`,
      );
    }

    return directive;
  }
  /**
   * Custom extensions
   *
   * @remarks
   * Use a unique identifier name for your extension, for example the name of
   * your library or project. Do not use a shortened identifier as this increases
   * the risk of conflicts. We recommend you add at most one extension field,
   * an object which can contain all the values you need.
   */

  /**
   * Directives are used by the GraphQL runtime as a way of modifying execution
   * behavior. Type system creators will usually not create these directly.
   */
  class GraphQLDirective {
    constructor(config) {
      var _config$isRepeatable, _config$args;

      this.name = (0, _assertName$1.assertName)(config.name);
      this.description = config.description;
      this.locations = config.locations;
      this.isRepeatable =
        (_config$isRepeatable = config.isRepeatable) !== null &&
        _config$isRepeatable !== void 0
          ? _config$isRepeatable
          : false;
      this.extensions = (0, _toObjMap$1.toObjMap)(config.extensions);
      this.astNode = config.astNode;
      Array.isArray(config.locations) ||
        (0, _devAssert$9.devAssert)(
          false,
          `@${config.name} locations must be an Array.`,
        );
      const args =
        (_config$args = config.args) !== null && _config$args !== void 0
          ? _config$args
          : {};
      ((0, _isObjectLike$5.isObjectLike)(args) && !Array.isArray(args)) ||
        (0, _devAssert$9.devAssert)(
          false,
          `@${config.name} args must be an object with argument names as keys.`,
        );
      this.args = (0, _definition$u.defineArguments)(args);
    }

    get [Symbol.toStringTag]() {
      return 'GraphQLDirective';
    }

    toConfig() {
      return {
        name: this.name,
        description: this.description,
        locations: this.locations,
        args: (0, _definition$u.argsToArgsConfig)(this.args),
        isRepeatable: this.isRepeatable,
        extensions: this.extensions,
        astNode: this.astNode,
      };
    }

    toString() {
      return '@' + this.name;
    }

    toJSON() {
      return this.toString();
    }
  }

  directives.GraphQLDirective = GraphQLDirective;

  /**
   * Used to conditionally include fields or fragments.
   */
  const GraphQLIncludeDirective = new GraphQLDirective({
    name: 'include',
    description:
      'Directs the executor to include this field or fragment only when the `if` argument is true.',
    locations: [
      _directiveLocation$2.DirectiveLocation.FIELD,
      _directiveLocation$2.DirectiveLocation.FRAGMENT_SPREAD,
      _directiveLocation$2.DirectiveLocation.INLINE_FRAGMENT,
    ],
    args: {
      if: {
        type: new _definition$u.GraphQLNonNull(_scalars$7.GraphQLBoolean),
        description: 'Included when true.',
      },
    },
  });
  /**
   * Used to conditionally skip (exclude) fields or fragments.
   */

  directives.GraphQLIncludeDirective = GraphQLIncludeDirective;
  const GraphQLSkipDirective = new GraphQLDirective({
    name: 'skip',
    description:
      'Directs the executor to skip this field or fragment when the `if` argument is true.',
    locations: [
      _directiveLocation$2.DirectiveLocation.FIELD,
      _directiveLocation$2.DirectiveLocation.FRAGMENT_SPREAD,
      _directiveLocation$2.DirectiveLocation.INLINE_FRAGMENT,
    ],
    args: {
      if: {
        type: new _definition$u.GraphQLNonNull(_scalars$7.GraphQLBoolean),
        description: 'Skipped when true.',
      },
    },
  });
  /**
   * Constant string used for default reason for a deprecation.
   */

  directives.GraphQLSkipDirective = GraphQLSkipDirective;
  const DEFAULT_DEPRECATION_REASON = 'No longer supported';
  /**
   * Used to declare element of a GraphQL schema as deprecated.
   */

  directives.DEFAULT_DEPRECATION_REASON = DEFAULT_DEPRECATION_REASON;
  const GraphQLDeprecatedDirective = new GraphQLDirective({
    name: 'deprecated',
    description: 'Marks an element of a GraphQL schema as no longer supported.',
    locations: [
      _directiveLocation$2.DirectiveLocation.FIELD_DEFINITION,
      _directiveLocation$2.DirectiveLocation.ARGUMENT_DEFINITION,
      _directiveLocation$2.DirectiveLocation.INPUT_FIELD_DEFINITION,
      _directiveLocation$2.DirectiveLocation.ENUM_VALUE,
    ],
    args: {
      reason: {
        type: _scalars$7.GraphQLString,
        description:
          'Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).',
        defaultValue: DEFAULT_DEPRECATION_REASON,
      },
    },
  });
  /**
   * Used to provide a URL for specifying the behavior of custom scalar definitions.
   */

  directives.GraphQLDeprecatedDirective = GraphQLDeprecatedDirective;
  const GraphQLSpecifiedByDirective = new GraphQLDirective({
    name: 'specifiedBy',
    description: 'Exposes a URL that specifies the behavior of this scalar.',
    locations: [_directiveLocation$2.DirectiveLocation.SCALAR],
    args: {
      url: {
        type: new _definition$u.GraphQLNonNull(_scalars$7.GraphQLString),
        description: 'The URL that specifies the behavior of this scalar.',
      },
    },
  });
  /**
   * The full list of specified directives.
   */

  directives.GraphQLSpecifiedByDirective = GraphQLSpecifiedByDirective;
  const specifiedDirectives = Object.freeze([
    GraphQLIncludeDirective,
    GraphQLSkipDirective,
    GraphQLDeprecatedDirective,
    GraphQLSpecifiedByDirective,
  ]);
  directives.specifiedDirectives = specifiedDirectives;

  function isSpecifiedDirective(directive) {
    return specifiedDirectives.some(({ name }) => name === directive.name);
  }

  var introspection = {};

  var astFromValue$1 = {};

  var isIterableObject$1 = {};

  Object.defineProperty(isIterableObject$1, '__esModule', {
    value: true,
  });
  isIterableObject$1.isIterableObject = isIterableObject;

  /**
   * Returns true if the provided object is an Object (i.e. not a string literal)
   * and implements the Iterator protocol.
   *
   * This may be used in place of [Array.isArray()][isArray] to determine if
   * an object should be iterated-over e.g. Array, Map, Set, Int8Array,
   * TypedArray, etc. but excludes string literals.
   *
   * @example
   * ```ts
   * isIterableObject([ 1, 2, 3 ]) // true
   * isIterableObject(new Map()) // true
   * isIterableObject('ABC') // false
   * isIterableObject({ key: 'value' }) // false
   * isIterableObject({ length: 1, 0: 'Alpha' }) // false
   * ```
   */
  function isIterableObject(maybeIterable) {
    return (
      typeof maybeIterable === 'object' &&
      typeof (maybeIterable === null || maybeIterable === void 0
        ? void 0
        : maybeIterable[Symbol.iterator]) === 'function'
    );
  }

  Object.defineProperty(astFromValue$1, '__esModule', {
    value: true,
  });
  astFromValue$1.astFromValue = astFromValue;

  var _inspect$m = inspect$1;

  var _invariant$d = invariant$1;

  var _isIterableObject$2 = isIterableObject$1;

  var _isObjectLike$4 = isObjectLike$1;

  var _kinds$p = kinds;

  var _definition$t = definition;

  var _scalars$6 = scalars;

  /**
   * Produces a GraphQL Value AST given a JavaScript object.
   * Function will match JavaScript/JSON values to GraphQL AST schema format
   * by using suggested GraphQLInputType. For example:
   *
   *     astFromValue("value", GraphQLString)
   *
   * A GraphQL type must be provided, which will be used to interpret different
   * JavaScript values.
   *
   * | JSON Value    | GraphQL Value        |
   * | ------------- | -------------------- |
   * | Object        | Input Object         |
   * | Array         | List                 |
   * | Boolean       | Boolean              |
   * | String        | String / Enum Value  |
   * | Number        | Int / Float          |
   * | Unknown       | Enum Value           |
   * | null          | NullValue            |
   *
   */
  function astFromValue(value, type) {
    if ((0, _definition$t.isNonNullType)(type)) {
      const astValue = astFromValue(value, type.ofType);

      if (
        (astValue === null || astValue === void 0 ? void 0 : astValue.kind) ===
        _kinds$p.Kind.NULL
      ) {
        return null;
      }

      return astValue;
    } // only explicit null, not undefined, NaN

    if (value === null) {
      return {
        kind: _kinds$p.Kind.NULL,
      };
    } // undefined

    if (value === undefined) {
      return null;
    } // Convert JavaScript array to GraphQL list. If the GraphQLType is a list, but
    // the value is not an array, convert the value using the list's item type.

    if ((0, _definition$t.isListType)(type)) {
      const itemType = type.ofType;

      if ((0, _isIterableObject$2.isIterableObject)(value)) {
        const valuesNodes = [];

        for (const item of value) {
          const itemNode = astFromValue(item, itemType);

          if (itemNode != null) {
            valuesNodes.push(itemNode);
          }
        }

        return {
          kind: _kinds$p.Kind.LIST,
          values: valuesNodes,
        };
      }

      return astFromValue(value, itemType);
    } // Populate the fields of the input object by creating ASTs from each value
    // in the JavaScript object according to the fields in the input type.

    if ((0, _definition$t.isInputObjectType)(type)) {
      if (!(0, _isObjectLike$4.isObjectLike)(value)) {
        return null;
      }

      const fieldNodes = [];

      for (const field of Object.values(type.getFields())) {
        const fieldValue = astFromValue(value[field.name], field.type);

        if (fieldValue) {
          fieldNodes.push({
            kind: _kinds$p.Kind.OBJECT_FIELD,
            name: {
              kind: _kinds$p.Kind.NAME,
              value: field.name,
            },
            value: fieldValue,
          });
        }
      }

      return {
        kind: _kinds$p.Kind.OBJECT,
        fields: fieldNodes,
      };
    }

    if ((0, _definition$t.isLeafType)(type)) {
      // Since value is an internally represented value, it must be serialized
      // to an externally represented value before converting into an AST.
      const serialized = type.serialize(value);

      if (serialized == null) {
        return null;
      } // Others serialize based on their corresponding JavaScript scalar types.

      if (typeof serialized === 'boolean') {
        return {
          kind: _kinds$p.Kind.BOOLEAN,
          value: serialized,
        };
      } // JavaScript numbers can be Int or Float values.

      if (typeof serialized === 'number' && Number.isFinite(serialized)) {
        const stringNum = String(serialized);
        return integerStringRegExp.test(stringNum)
          ? {
              kind: _kinds$p.Kind.INT,
              value: stringNum,
            }
          : {
              kind: _kinds$p.Kind.FLOAT,
              value: stringNum,
            };
      }

      if (typeof serialized === 'string') {
        // Enum types use Enum literals.
        if ((0, _definition$t.isEnumType)(type)) {
          return {
            kind: _kinds$p.Kind.ENUM,
            value: serialized,
          };
        } // ID types can use Int literals.

        if (type === _scalars$6.GraphQLID && integerStringRegExp.test(serialized)) {
          return {
            kind: _kinds$p.Kind.INT,
            value: serialized,
          };
        }

        return {
          kind: _kinds$p.Kind.STRING,
          value: serialized,
        };
      }

      throw new TypeError(
        `Cannot convert value to AST: ${(0, _inspect$m.inspect)(serialized)}.`,
      );
    }
    /* c8 ignore next 3 */
    // Not reachable, all possible types have been considered.

    (0, _invariant$d.invariant)(
        false,
        'Unexpected input type: ' + (0, _inspect$m.inspect)(type),
      );
  }
  /**
   * IntValue:
   *   - NegativeSign? 0
   *   - NegativeSign? NonZeroDigit ( Digit+ )?
   */

  const integerStringRegExp = /^-?(?:0|[1-9][0-9]*)$/;

  Object.defineProperty(introspection, '__esModule', {
    value: true,
  });
  introspection.introspectionTypes =
    introspection.__TypeKind =
    introspection.__Type =
    introspection.__Schema =
    introspection.__InputValue =
    introspection.__Field =
    introspection.__EnumValue =
    introspection.__DirectiveLocation =
    introspection.__Directive =
    introspection.TypeNameMetaFieldDef =
    introspection.TypeMetaFieldDef =
    introspection.TypeKind =
    introspection.SchemaMetaFieldDef =
      void 0;
  introspection.isIntrospectionType = isIntrospectionType;

  var _inspect$l = inspect$1;

  var _invariant$c = invariant$1;

  var _directiveLocation$1 = directiveLocation;

  var _printer$8 = printer;

  var _astFromValue$2 = astFromValue$1;

  var _definition$s = definition;

  var _scalars$5 = scalars;

  const __Schema = new _definition$s.GraphQLObjectType({
    name: '__Schema',
    description:
      'A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.',
    fields: () => ({
      description: {
        type: _scalars$5.GraphQLString,
        resolve: (schema) => schema.description,
      },
      types: {
        description: 'A list of all types supported by this server.',
        type: new _definition$s.GraphQLNonNull(
          new _definition$s.GraphQLList(new _definition$s.GraphQLNonNull(__Type)),
        ),

        resolve(schema) {
          return Object.values(schema.getTypeMap());
        },
      },
      queryType: {
        description: 'The type that query operations will be rooted at.',
        type: new _definition$s.GraphQLNonNull(__Type),
        resolve: (schema) => schema.getQueryType(),
      },
      mutationType: {
        description:
          'If this server supports mutation, the type that mutation operations will be rooted at.',
        type: __Type,
        resolve: (schema) => schema.getMutationType(),
      },
      subscriptionType: {
        description:
          'If this server support subscription, the type that subscription operations will be rooted at.',
        type: __Type,
        resolve: (schema) => schema.getSubscriptionType(),
      },
      directives: {
        description: 'A list of all directives supported by this server.',
        type: new _definition$s.GraphQLNonNull(
          new _definition$s.GraphQLList(
            new _definition$s.GraphQLNonNull(__Directive),
          ),
        ),
        resolve: (schema) => schema.getDirectives(),
      },
    }),
  });

  introspection.__Schema = __Schema;

  const __Directive = new _definition$s.GraphQLObjectType({
    name: '__Directive',
    description:
      "A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.",
    fields: () => ({
      name: {
        type: new _definition$s.GraphQLNonNull(_scalars$5.GraphQLString),
        resolve: (directive) => directive.name,
      },
      description: {
        type: _scalars$5.GraphQLString,
        resolve: (directive) => directive.description,
      },
      isRepeatable: {
        type: new _definition$s.GraphQLNonNull(_scalars$5.GraphQLBoolean),
        resolve: (directive) => directive.isRepeatable,
      },
      locations: {
        type: new _definition$s.GraphQLNonNull(
          new _definition$s.GraphQLList(
            new _definition$s.GraphQLNonNull(__DirectiveLocation),
          ),
        ),
        resolve: (directive) => directive.locations,
      },
      args: {
        type: new _definition$s.GraphQLNonNull(
          new _definition$s.GraphQLList(
            new _definition$s.GraphQLNonNull(__InputValue),
          ),
        ),
        args: {
          includeDeprecated: {
            type: _scalars$5.GraphQLBoolean,
            defaultValue: false,
          },
        },

        resolve(field, { includeDeprecated }) {
          return includeDeprecated
            ? field.args
            : field.args.filter((arg) => arg.deprecationReason == null);
        },
      },
    }),
  });

  introspection.__Directive = __Directive;

  const __DirectiveLocation = new _definition$s.GraphQLEnumType({
    name: '__DirectiveLocation',
    description:
      'A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.',
    values: {
      QUERY: {
        value: _directiveLocation$1.DirectiveLocation.QUERY,
        description: 'Location adjacent to a query operation.',
      },
      MUTATION: {
        value: _directiveLocation$1.DirectiveLocation.MUTATION,
        description: 'Location adjacent to a mutation operation.',
      },
      SUBSCRIPTION: {
        value: _directiveLocation$1.DirectiveLocation.SUBSCRIPTION,
        description: 'Location adjacent to a subscription operation.',
      },
      FIELD: {
        value: _directiveLocation$1.DirectiveLocation.FIELD,
        description: 'Location adjacent to a field.',
      },
      FRAGMENT_DEFINITION: {
        value: _directiveLocation$1.DirectiveLocation.FRAGMENT_DEFINITION,
        description: 'Location adjacent to a fragment definition.',
      },
      FRAGMENT_SPREAD: {
        value: _directiveLocation$1.DirectiveLocation.FRAGMENT_SPREAD,
        description: 'Location adjacent to a fragment spread.',
      },
      INLINE_FRAGMENT: {
        value: _directiveLocation$1.DirectiveLocation.INLINE_FRAGMENT,
        description: 'Location adjacent to an inline fragment.',
      },
      VARIABLE_DEFINITION: {
        value: _directiveLocation$1.DirectiveLocation.VARIABLE_DEFINITION,
        description: 'Location adjacent to a variable definition.',
      },
      SCHEMA: {
        value: _directiveLocation$1.DirectiveLocation.SCHEMA,
        description: 'Location adjacent to a schema definition.',
      },
      SCALAR: {
        value: _directiveLocation$1.DirectiveLocation.SCALAR,
        description: 'Location adjacent to a scalar definition.',
      },
      OBJECT: {
        value: _directiveLocation$1.DirectiveLocation.OBJECT,
        description: 'Location adjacent to an object type definition.',
      },
      FIELD_DEFINITION: {
        value: _directiveLocation$1.DirectiveLocation.FIELD_DEFINITION,
        description: 'Location adjacent to a field definition.',
      },
      ARGUMENT_DEFINITION: {
        value: _directiveLocation$1.DirectiveLocation.ARGUMENT_DEFINITION,
        description: 'Location adjacent to an argument definition.',
      },
      INTERFACE: {
        value: _directiveLocation$1.DirectiveLocation.INTERFACE,
        description: 'Location adjacent to an interface definition.',
      },
      UNION: {
        value: _directiveLocation$1.DirectiveLocation.UNION,
        description: 'Location adjacent to a union definition.',
      },
      ENUM: {
        value: _directiveLocation$1.DirectiveLocation.ENUM,
        description: 'Location adjacent to an enum definition.',
      },
      ENUM_VALUE: {
        value: _directiveLocation$1.DirectiveLocation.ENUM_VALUE,
        description: 'Location adjacent to an enum value definition.',
      },
      INPUT_OBJECT: {
        value: _directiveLocation$1.DirectiveLocation.INPUT_OBJECT,
        description: 'Location adjacent to an input object type definition.',
      },
      INPUT_FIELD_DEFINITION: {
        value: _directiveLocation$1.DirectiveLocation.INPUT_FIELD_DEFINITION,
        description: 'Location adjacent to an input object field definition.',
      },
    },
  });

  introspection.__DirectiveLocation = __DirectiveLocation;

  const __Type = new _definition$s.GraphQLObjectType({
    name: '__Type',
    description:
      'The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.',
    fields: () => ({
      kind: {
        type: new _definition$s.GraphQLNonNull(__TypeKind),

        resolve(type) {
          if ((0, _definition$s.isScalarType)(type)) {
            return TypeKind.SCALAR;
          }

          if ((0, _definition$s.isObjectType)(type)) {
            return TypeKind.OBJECT;
          }

          if ((0, _definition$s.isInterfaceType)(type)) {
            return TypeKind.INTERFACE;
          }

          if ((0, _definition$s.isUnionType)(type)) {
            return TypeKind.UNION;
          }

          if ((0, _definition$s.isEnumType)(type)) {
            return TypeKind.ENUM;
          }

          if ((0, _definition$s.isInputObjectType)(type)) {
            return TypeKind.INPUT_OBJECT;
          }

          if ((0, _definition$s.isListType)(type)) {
            return TypeKind.LIST;
          }

          if ((0, _definition$s.isNonNullType)(type)) {
            return TypeKind.NON_NULL;
          }
          /* c8 ignore next 3 */
          // Not reachable, all possible types have been considered)

          (0, _invariant$c.invariant)(
              false,
              `Unexpected type: "${(0, _inspect$l.inspect)(type)}".`,
            );
        },
      },
      name: {
        type: _scalars$5.GraphQLString,
        resolve: (type) => ('name' in type ? type.name : undefined),
      },
      description: {
        type: _scalars$5.GraphQLString,
        resolve: (
          type, // FIXME: add test case
        ) =>
          /* c8 ignore next */
          'description' in type ? type.description : undefined,
      },
      specifiedByURL: {
        type: _scalars$5.GraphQLString,
        resolve: (obj) =>
          'specifiedByURL' in obj ? obj.specifiedByURL : undefined,
      },
      fields: {
        type: new _definition$s.GraphQLList(
          new _definition$s.GraphQLNonNull(__Field),
        ),
        args: {
          includeDeprecated: {
            type: _scalars$5.GraphQLBoolean,
            defaultValue: false,
          },
        },

        resolve(type, { includeDeprecated }) {
          if (
            (0, _definition$s.isObjectType)(type) ||
            (0, _definition$s.isInterfaceType)(type)
          ) {
            const fields = Object.values(type.getFields());
            return includeDeprecated
              ? fields
              : fields.filter((field) => field.deprecationReason == null);
          }
        },
      },
      interfaces: {
        type: new _definition$s.GraphQLList(new _definition$s.GraphQLNonNull(__Type)),

        resolve(type) {
          if (
            (0, _definition$s.isObjectType)(type) ||
            (0, _definition$s.isInterfaceType)(type)
          ) {
            return type.getInterfaces();
          }
        },
      },
      possibleTypes: {
        type: new _definition$s.GraphQLList(new _definition$s.GraphQLNonNull(__Type)),

        resolve(type, _args, _context, { schema }) {
          if ((0, _definition$s.isAbstractType)(type)) {
            return schema.getPossibleTypes(type);
          }
        },
      },
      enumValues: {
        type: new _definition$s.GraphQLList(
          new _definition$s.GraphQLNonNull(__EnumValue),
        ),
        args: {
          includeDeprecated: {
            type: _scalars$5.GraphQLBoolean,
            defaultValue: false,
          },
        },

        resolve(type, { includeDeprecated }) {
          if ((0, _definition$s.isEnumType)(type)) {
            const values = type.getValues();
            return includeDeprecated
              ? values
              : values.filter((field) => field.deprecationReason == null);
          }
        },
      },
      inputFields: {
        type: new _definition$s.GraphQLList(
          new _definition$s.GraphQLNonNull(__InputValue),
        ),
        args: {
          includeDeprecated: {
            type: _scalars$5.GraphQLBoolean,
            defaultValue: false,
          },
        },

        resolve(type, { includeDeprecated }) {
          if ((0, _definition$s.isInputObjectType)(type)) {
            const values = Object.values(type.getFields());
            return includeDeprecated
              ? values
              : values.filter((field) => field.deprecationReason == null);
          }
        },
      },
      ofType: {
        type: __Type,
        resolve: (type) => ('ofType' in type ? type.ofType : undefined),
      },
    }),
  });

  introspection.__Type = __Type;

  const __Field = new _definition$s.GraphQLObjectType({
    name: '__Field',
    description:
      'Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.',
    fields: () => ({
      name: {
        type: new _definition$s.GraphQLNonNull(_scalars$5.GraphQLString),
        resolve: (field) => field.name,
      },
      description: {
        type: _scalars$5.GraphQLString,
        resolve: (field) => field.description,
      },
      args: {
        type: new _definition$s.GraphQLNonNull(
          new _definition$s.GraphQLList(
            new _definition$s.GraphQLNonNull(__InputValue),
          ),
        ),
        args: {
          includeDeprecated: {
            type: _scalars$5.GraphQLBoolean,
            defaultValue: false,
          },
        },

        resolve(field, { includeDeprecated }) {
          return includeDeprecated
            ? field.args
            : field.args.filter((arg) => arg.deprecationReason == null);
        },
      },
      type: {
        type: new _definition$s.GraphQLNonNull(__Type),
        resolve: (field) => field.type,
      },
      isDeprecated: {
        type: new _definition$s.GraphQLNonNull(_scalars$5.GraphQLBoolean),
        resolve: (field) => field.deprecationReason != null,
      },
      deprecationReason: {
        type: _scalars$5.GraphQLString,
        resolve: (field) => field.deprecationReason,
      },
    }),
  });

  introspection.__Field = __Field;

  const __InputValue = new _definition$s.GraphQLObjectType({
    name: '__InputValue',
    description:
      'Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.',
    fields: () => ({
      name: {
        type: new _definition$s.GraphQLNonNull(_scalars$5.GraphQLString),
        resolve: (inputValue) => inputValue.name,
      },
      description: {
        type: _scalars$5.GraphQLString,
        resolve: (inputValue) => inputValue.description,
      },
      type: {
        type: new _definition$s.GraphQLNonNull(__Type),
        resolve: (inputValue) => inputValue.type,
      },
      defaultValue: {
        type: _scalars$5.GraphQLString,
        description:
          'A GraphQL-formatted string representing the default value for this input value.',

        resolve(inputValue) {
          const { type, defaultValue } = inputValue;
          const valueAST = (0, _astFromValue$2.astFromValue)(defaultValue, type);
          return valueAST ? (0, _printer$8.print)(valueAST) : null;
        },
      },
      isDeprecated: {
        type: new _definition$s.GraphQLNonNull(_scalars$5.GraphQLBoolean),
        resolve: (field) => field.deprecationReason != null,
      },
      deprecationReason: {
        type: _scalars$5.GraphQLString,
        resolve: (obj) => obj.deprecationReason,
      },
    }),
  });

  introspection.__InputValue = __InputValue;

  const __EnumValue = new _definition$s.GraphQLObjectType({
    name: '__EnumValue',
    description:
      'One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.',
    fields: () => ({
      name: {
        type: new _definition$s.GraphQLNonNull(_scalars$5.GraphQLString),
        resolve: (enumValue) => enumValue.name,
      },
      description: {
        type: _scalars$5.GraphQLString,
        resolve: (enumValue) => enumValue.description,
      },
      isDeprecated: {
        type: new _definition$s.GraphQLNonNull(_scalars$5.GraphQLBoolean),
        resolve: (enumValue) => enumValue.deprecationReason != null,
      },
      deprecationReason: {
        type: _scalars$5.GraphQLString,
        resolve: (enumValue) => enumValue.deprecationReason,
      },
    }),
  });

  introspection.__EnumValue = __EnumValue;
  let TypeKind;
  introspection.TypeKind = TypeKind;

  (function (TypeKind) {
    TypeKind['SCALAR'] = 'SCALAR';
    TypeKind['OBJECT'] = 'OBJECT';
    TypeKind['INTERFACE'] = 'INTERFACE';
    TypeKind['UNION'] = 'UNION';
    TypeKind['ENUM'] = 'ENUM';
    TypeKind['INPUT_OBJECT'] = 'INPUT_OBJECT';
    TypeKind['LIST'] = 'LIST';
    TypeKind['NON_NULL'] = 'NON_NULL';
  })(TypeKind || (introspection.TypeKind = TypeKind = {}));

  const __TypeKind = new _definition$s.GraphQLEnumType({
    name: '__TypeKind',
    description: 'An enum describing what kind of type a given `__Type` is.',
    values: {
      SCALAR: {
        value: TypeKind.SCALAR,
        description: 'Indicates this type is a scalar.',
      },
      OBJECT: {
        value: TypeKind.OBJECT,
        description:
          'Indicates this type is an object. `fields` and `interfaces` are valid fields.',
      },
      INTERFACE: {
        value: TypeKind.INTERFACE,
        description:
          'Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields.',
      },
      UNION: {
        value: TypeKind.UNION,
        description:
          'Indicates this type is a union. `possibleTypes` is a valid field.',
      },
      ENUM: {
        value: TypeKind.ENUM,
        description:
          'Indicates this type is an enum. `enumValues` is a valid field.',
      },
      INPUT_OBJECT: {
        value: TypeKind.INPUT_OBJECT,
        description:
          'Indicates this type is an input object. `inputFields` is a valid field.',
      },
      LIST: {
        value: TypeKind.LIST,
        description: 'Indicates this type is a list. `ofType` is a valid field.',
      },
      NON_NULL: {
        value: TypeKind.NON_NULL,
        description:
          'Indicates this type is a non-null. `ofType` is a valid field.',
      },
    },
  });
  /**
   * Note that these are GraphQLField and not GraphQLFieldConfig,
   * so the format for args is different.
   */

  introspection.__TypeKind = __TypeKind;
  const SchemaMetaFieldDef = {
    name: '__schema',
    type: new _definition$s.GraphQLNonNull(__Schema),
    description: 'Access the current type schema of this server.',
    args: [],
    resolve: (_source, _args, _context, { schema }) => schema,
    deprecationReason: undefined,
    extensions: Object.create(null),
    astNode: undefined,
  };
  introspection.SchemaMetaFieldDef = SchemaMetaFieldDef;
  const TypeMetaFieldDef = {
    name: '__type',
    type: __Type,
    description: 'Request the type information of a single type.',
    args: [
      {
        name: 'name',
        description: undefined,
        type: new _definition$s.GraphQLNonNull(_scalars$5.GraphQLString),
        defaultValue: undefined,
        deprecationReason: undefined,
        extensions: Object.create(null),
        astNode: undefined,
      },
    ],
    resolve: (_source, { name }, _context, { schema }) => schema.getType(name),
    deprecationReason: undefined,
    extensions: Object.create(null),
    astNode: undefined,
  };
  introspection.TypeMetaFieldDef = TypeMetaFieldDef;
  const TypeNameMetaFieldDef = {
    name: '__typename',
    type: new _definition$s.GraphQLNonNull(_scalars$5.GraphQLString),
    description: 'The name of the current Object type at runtime.',
    args: [],
    resolve: (_source, _args, _context, { parentType }) => parentType.name,
    deprecationReason: undefined,
    extensions: Object.create(null),
    astNode: undefined,
  };
  introspection.TypeNameMetaFieldDef = TypeNameMetaFieldDef;
  const introspectionTypes = Object.freeze([
    __Schema,
    __Directive,
    __DirectiveLocation,
    __Type,
    __Field,
    __InputValue,
    __EnumValue,
    __TypeKind,
  ]);
  introspection.introspectionTypes = introspectionTypes;

  function isIntrospectionType(type) {
    return introspectionTypes.some(({ name }) => type.name === name);
  }

  var schema = {};

  Object.defineProperty(schema, '__esModule', {
    value: true,
  });
  schema.GraphQLSchema = void 0;
  schema.assertSchema = assertSchema;
  schema.isSchema = isSchema;

  var _devAssert$8 = devAssert$1;

  var _inspect$k = inspect$1;

  var _instanceOf = instanceOf$1;

  var _isObjectLike$3 = isObjectLike$1;

  var _toObjMap = toObjMap$1;

  var _ast$4 = ast;

  var _definition$r = definition;

  var _directives$b = directives;

  var _introspection$9 = introspection;

  /**
   * Test if the given value is a GraphQL schema.
   */
  function isSchema(schema) {
    return (0, _instanceOf.instanceOf)(schema, GraphQLSchema);
  }

  function assertSchema(schema) {
    if (!isSchema(schema)) {
      throw new Error(
        `Expected ${(0, _inspect$k.inspect)(schema)} to be a GraphQL schema.`,
      );
    }

    return schema;
  }
  /**
   * Custom extensions
   *
   * @remarks
   * Use a unique identifier name for your extension, for example the name of
   * your library or project. Do not use a shortened identifier as this increases
   * the risk of conflicts. We recommend you add at most one extension field,
   * an object which can contain all the values you need.
   */

  /**
   * Schema Definition
   *
   * A Schema is created by supplying the root types of each type of operation,
   * query and mutation (optional). A schema definition is then supplied to the
   * validator and executor.
   *
   * Example:
   *
   * ```ts
   * const MyAppSchema = new GraphQLSchema({
   *   query: MyAppQueryRootType,
   *   mutation: MyAppMutationRootType,
   * })
   * ```
   *
   * Note: When the schema is constructed, by default only the types that are
   * reachable by traversing the root types are included, other types must be
   * explicitly referenced.
   *
   * Example:
   *
   * ```ts
   * const characterInterface = new GraphQLInterfaceType({
   *   name: 'Character',
   *   ...
   * });
   *
   * const humanType = new GraphQLObjectType({
   *   name: 'Human',
   *   interfaces: [characterInterface],
   *   ...
   * });
   *
   * const droidType = new GraphQLObjectType({
   *   name: 'Droid',
   *   interfaces: [characterInterface],
   *   ...
   * });
   *
   * const schema = new GraphQLSchema({
   *   query: new GraphQLObjectType({
   *     name: 'Query',
   *     fields: {
   *       hero: { type: characterInterface, ... },
   *     }
   *   }),
   *   ...
   *   // Since this schema references only the `Character` interface it's
   *   // necessary to explicitly list the types that implement it if
   *   // you want them to be included in the final schema.
   *   types: [humanType, droidType],
   * })
   * ```
   *
   * Note: If an array of `directives` are provided to GraphQLSchema, that will be
   * the exact list of directives represented and allowed. If `directives` is not
   * provided then a default set of the specified directives (e.g. `@include` and
   * `@skip`) will be used. If you wish to provide *additional* directives to these
   * specified directives, you must explicitly declare them. Example:
   *
   * ```ts
   * const MyAppSchema = new GraphQLSchema({
   *   ...
   *   directives: specifiedDirectives.concat([ myCustomDirective ]),
   * })
   * ```
   */
  class GraphQLSchema {
    // Used as a cache for validateSchema().
    constructor(config) {
      var _config$extensionASTN, _config$directives;

      // If this schema was built from a source known to be valid, then it may be
      // marked with assumeValid to avoid an additional type system validation.
      this.__validationErrors = config.assumeValid === true ? [] : undefined; // Check for common mistakes during construction to produce early errors.

      (0, _isObjectLike$3.isObjectLike)(config) ||
        (0, _devAssert$8.devAssert)(false, 'Must provide configuration object.');
      !config.types ||
        Array.isArray(config.types) ||
        (0, _devAssert$8.devAssert)(
          false,
          `"types" must be Array if provided but got: ${(0, _inspect$k.inspect)(
          config.types,
        )}.`,
        );
      !config.directives ||
        Array.isArray(config.directives) ||
        (0, _devAssert$8.devAssert)(
          false,
          '"directives" must be Array if provided but got: ' +
            `${(0, _inspect$k.inspect)(config.directives)}.`,
        );
      this.description = config.description;
      this.extensions = (0, _toObjMap.toObjMap)(config.extensions);
      this.astNode = config.astNode;
      this.extensionASTNodes =
        (_config$extensionASTN = config.extensionASTNodes) !== null &&
        _config$extensionASTN !== void 0
          ? _config$extensionASTN
          : [];
      this._queryType = config.query;
      this._mutationType = config.mutation;
      this._subscriptionType = config.subscription; // Provide specified directives (e.g. @include and @skip) by default.

      this._directives =
        (_config$directives = config.directives) !== null &&
        _config$directives !== void 0
          ? _config$directives
          : _directives$b.specifiedDirectives; // To preserve order of user-provided types, we add first to add them to
      // the set of "collected" types, so `collectReferencedTypes` ignore them.

      const allReferencedTypes = new Set(config.types);

      if (config.types != null) {
        for (const type of config.types) {
          // When we ready to process this type, we remove it from "collected" types
          // and then add it together with all dependent types in the correct position.
          allReferencedTypes.delete(type);
          collectReferencedTypes(type, allReferencedTypes);
        }
      }

      if (this._queryType != null) {
        collectReferencedTypes(this._queryType, allReferencedTypes);
      }

      if (this._mutationType != null) {
        collectReferencedTypes(this._mutationType, allReferencedTypes);
      }

      if (this._subscriptionType != null) {
        collectReferencedTypes(this._subscriptionType, allReferencedTypes);
      }

      for (const directive of this._directives) {
        // Directives are not validated until validateSchema() is called.
        if ((0, _directives$b.isDirective)(directive)) {
          for (const arg of directive.args) {
            collectReferencedTypes(arg.type, allReferencedTypes);
          }
        }
      }

      collectReferencedTypes(_introspection$9.__Schema, allReferencedTypes); // Storing the resulting map for reference by the schema.

      this._typeMap = Object.create(null);
      this._subTypeMap = Object.create(null); // Keep track of all implementations by interface name.

      this._implementationsMap = Object.create(null);

      for (const namedType of allReferencedTypes) {
        if (namedType == null) {
          continue;
        }

        const typeName = namedType.name;
        typeName ||
          (0, _devAssert$8.devAssert)(
            false,
            'One of the provided types for building the Schema is missing a name.',
          );

        if (this._typeMap[typeName] !== undefined) {
          throw new Error(
            `Schema must contain uniquely named types but contains multiple types named "${typeName}".`,
          );
        }

        this._typeMap[typeName] = namedType;

        if ((0, _definition$r.isInterfaceType)(namedType)) {
          // Store implementations by interface.
          for (const iface of namedType.getInterfaces()) {
            if ((0, _definition$r.isInterfaceType)(iface)) {
              let implementations = this._implementationsMap[iface.name];

              if (implementations === undefined) {
                implementations = this._implementationsMap[iface.name] = {
                  objects: [],
                  interfaces: [],
                };
              }

              implementations.interfaces.push(namedType);
            }
          }
        } else if ((0, _definition$r.isObjectType)(namedType)) {
          // Store implementations by objects.
          for (const iface of namedType.getInterfaces()) {
            if ((0, _definition$r.isInterfaceType)(iface)) {
              let implementations = this._implementationsMap[iface.name];

              if (implementations === undefined) {
                implementations = this._implementationsMap[iface.name] = {
                  objects: [],
                  interfaces: [],
                };
              }

              implementations.objects.push(namedType);
            }
          }
        }
      }
    }

    get [Symbol.toStringTag]() {
      return 'GraphQLSchema';
    }

    getQueryType() {
      return this._queryType;
    }

    getMutationType() {
      return this._mutationType;
    }

    getSubscriptionType() {
      return this._subscriptionType;
    }

    getRootType(operation) {
      switch (operation) {
        case _ast$4.OperationTypeNode.QUERY:
          return this.getQueryType();

        case _ast$4.OperationTypeNode.MUTATION:
          return this.getMutationType();

        case _ast$4.OperationTypeNode.SUBSCRIPTION:
          return this.getSubscriptionType();
      }
    }

    getTypeMap() {
      return this._typeMap;
    }

    getType(name) {
      return this.getTypeMap()[name];
    }

    getPossibleTypes(abstractType) {
      return (0, _definition$r.isUnionType)(abstractType)
        ? abstractType.getTypes()
        : this.getImplementations(abstractType).objects;
    }

    getImplementations(interfaceType) {
      const implementations = this._implementationsMap[interfaceType.name];
      return implementations !== null && implementations !== void 0
        ? implementations
        : {
            objects: [],
            interfaces: [],
          };
    }

    isSubType(abstractType, maybeSubType) {
      let map = this._subTypeMap[abstractType.name];

      if (map === undefined) {
        map = Object.create(null);

        if ((0, _definition$r.isUnionType)(abstractType)) {
          for (const type of abstractType.getTypes()) {
            map[type.name] = true;
          }
        } else {
          const implementations = this.getImplementations(abstractType);

          for (const type of implementations.objects) {
            map[type.name] = true;
          }

          for (const type of implementations.interfaces) {
            map[type.name] = true;
          }
        }

        this._subTypeMap[abstractType.name] = map;
      }

      return map[maybeSubType.name] !== undefined;
    }

    getDirectives() {
      return this._directives;
    }

    getDirective(name) {
      return this.getDirectives().find((directive) => directive.name === name);
    }

    toConfig() {
      return {
        description: this.description,
        query: this.getQueryType(),
        mutation: this.getMutationType(),
        subscription: this.getSubscriptionType(),
        types: Object.values(this.getTypeMap()),
        directives: this.getDirectives(),
        extensions: this.extensions,
        astNode: this.astNode,
        extensionASTNodes: this.extensionASTNodes,
        assumeValid: this.__validationErrors !== undefined,
      };
    }
  }

  schema.GraphQLSchema = GraphQLSchema;

  function collectReferencedTypes(type, typeSet) {
    const namedType = (0, _definition$r.getNamedType)(type);

    if (!typeSet.has(namedType)) {
      typeSet.add(namedType);

      if ((0, _definition$r.isUnionType)(namedType)) {
        for (const memberType of namedType.getTypes()) {
          collectReferencedTypes(memberType, typeSet);
        }
      } else if (
        (0, _definition$r.isObjectType)(namedType) ||
        (0, _definition$r.isInterfaceType)(namedType)
      ) {
        for (const interfaceType of namedType.getInterfaces()) {
          collectReferencedTypes(interfaceType, typeSet);
        }

        for (const field of Object.values(namedType.getFields())) {
          collectReferencedTypes(field.type, typeSet);

          for (const arg of field.args) {
            collectReferencedTypes(arg.type, typeSet);
          }
        }
      } else if ((0, _definition$r.isInputObjectType)(namedType)) {
        for (const field of Object.values(namedType.getFields())) {
          collectReferencedTypes(field.type, typeSet);
        }
      }
    }

    return typeSet;
  }

  Object.defineProperty(validate$2, '__esModule', {
    value: true,
  });
  validate$2.assertValidSchema = assertValidSchema;
  validate$2.validateSchema = validateSchema;

  var _inspect$j = inspect$1;

  var _GraphQLError$I = GraphQLError$1;

  var _ast$3 = ast;

  var _typeComparators$2 = typeComparators;

  var _definition$q = definition;

  var _directives$a = directives;

  var _introspection$8 = introspection;

  var _schema$4 = schema;

  /**
   * Implements the "Type Validation" sub-sections of the specification's
   * "Type System" section.
   *
   * Validation runs synchronously, returning an array of encountered errors, or
   * an empty array if no errors were encountered and the Schema is valid.
   */
  function validateSchema(schema) {
    // First check to ensure the provided value is in fact a GraphQLSchema.
    (0, _schema$4.assertSchema)(schema); // If this Schema has already been validated, return the previous results.

    if (schema.__validationErrors) {
      return schema.__validationErrors;
    } // Validate the schema, producing a list of errors.

    const context = new SchemaValidationContext(schema);
    validateRootTypes(context);
    validateDirectives(context);
    validateTypes(context); // Persist the results of validation before returning to ensure validation
    // does not run multiple times for this schema.

    const errors = context.getErrors();
    schema.__validationErrors = errors;
    return errors;
  }
  /**
   * Utility function which asserts a schema is valid by throwing an error if
   * it is invalid.
   */

  function assertValidSchema(schema) {
    const errors = validateSchema(schema);

    if (errors.length !== 0) {
      throw new Error(errors.map((error) => error.message).join('\n\n'));
    }
  }

  class SchemaValidationContext {
    constructor(schema) {
      this._errors = [];
      this.schema = schema;
    }

    reportError(message, nodes) {
      const _nodes = Array.isArray(nodes) ? nodes.filter(Boolean) : nodes;

      this._errors.push(new _GraphQLError$I.GraphQLError(message, _nodes));
    }

    getErrors() {
      return this._errors;
    }
  }

  function validateRootTypes(context) {
    const schema = context.schema;
    const queryType = schema.getQueryType();

    if (!queryType) {
      context.reportError('Query root type must be provided.', schema.astNode);
    } else if (!(0, _definition$q.isObjectType)(queryType)) {
      var _getOperationTypeNode;

      context.reportError(
        `Query root type must be Object type, it cannot be ${(0, _inspect$j.inspect)(queryType)}.`,
        (_getOperationTypeNode = getOperationTypeNode(
          schema,
          _ast$3.OperationTypeNode.QUERY,
        )) !== null && _getOperationTypeNode !== void 0
          ? _getOperationTypeNode
          : queryType.astNode,
      );
    }

    const mutationType = schema.getMutationType();

    if (mutationType && !(0, _definition$q.isObjectType)(mutationType)) {
      var _getOperationTypeNode2;

      context.reportError(
        'Mutation root type must be Object type if provided, it cannot be ' +
          `${(0, _inspect$j.inspect)(mutationType)}.`,
        (_getOperationTypeNode2 = getOperationTypeNode(
          schema,
          _ast$3.OperationTypeNode.MUTATION,
        )) !== null && _getOperationTypeNode2 !== void 0
          ? _getOperationTypeNode2
          : mutationType.astNode,
      );
    }

    const subscriptionType = schema.getSubscriptionType();

    if (subscriptionType && !(0, _definition$q.isObjectType)(subscriptionType)) {
      var _getOperationTypeNode3;

      context.reportError(
        'Subscription root type must be Object type if provided, it cannot be ' +
          `${(0, _inspect$j.inspect)(subscriptionType)}.`,
        (_getOperationTypeNode3 = getOperationTypeNode(
          schema,
          _ast$3.OperationTypeNode.SUBSCRIPTION,
        )) !== null && _getOperationTypeNode3 !== void 0
          ? _getOperationTypeNode3
          : subscriptionType.astNode,
      );
    }
  }

  function getOperationTypeNode(schema, operation) {
    var _flatMap$find;

    return (_flatMap$find = [schema.astNode, ...schema.extensionASTNodes]
      .flatMap(
        // FIXME: https://github.com/graphql/graphql-js/issues/2203
        (schemaNode) => {
          var _schemaNode$operation;

          return (
            /* c8 ignore next */
            (_schemaNode$operation =
              schemaNode === null || schemaNode === void 0
                ? void 0
                : schemaNode.operationTypes) !== null &&
              _schemaNode$operation !== void 0
              ? _schemaNode$operation
              : []
          );
        },
      )
      .find((operationNode) => operationNode.operation === operation)) === null ||
      _flatMap$find === void 0
      ? void 0
      : _flatMap$find.type;
  }

  function validateDirectives(context) {
    for (const directive of context.schema.getDirectives()) {
      // Ensure all directives are in fact GraphQL directives.
      if (!(0, _directives$a.isDirective)(directive)) {
        context.reportError(
          `Expected directive but got: ${(0, _inspect$j.inspect)(directive)}.`,
          directive === null || directive === void 0 ? void 0 : directive.astNode,
        );
        continue;
      } // Ensure they are named correctly.

      validateName(context, directive); // TODO: Ensure proper locations.
      // Ensure the arguments are valid.

      for (const arg of directive.args) {
        // Ensure they are named correctly.
        validateName(context, arg); // Ensure the type is an input type.

        if (!(0, _definition$q.isInputType)(arg.type)) {
          context.reportError(
            `The type of @${directive.name}(${arg.name}:) must be Input Type ` +
              `but got: ${(0, _inspect$j.inspect)(arg.type)}.`,
            arg.astNode,
          );
        }

        if (
          (0, _definition$q.isRequiredArgument)(arg) &&
          arg.deprecationReason != null
        ) {
          var _arg$astNode;

          context.reportError(
            `Required argument @${directive.name}(${arg.name}:) cannot be deprecated.`,
            [
              getDeprecatedDirectiveNode(arg.astNode),
              (_arg$astNode = arg.astNode) === null || _arg$astNode === void 0
                ? void 0
                : _arg$astNode.type,
            ],
          );
        }
      }
    }
  }

  function validateName(context, node) {
    // Ensure names are valid, however introspection types opt out.
    if (node.name.startsWith('__')) {
      context.reportError(
        `Name "${node.name}" must not begin with "__", which is reserved by GraphQL introspection.`,
        node.astNode,
      );
    }
  }

  function validateTypes(context) {
    const validateInputObjectCircularRefs =
      createInputObjectCircularRefsValidator(context);
    const typeMap = context.schema.getTypeMap();

    for (const type of Object.values(typeMap)) {
      // Ensure all provided types are in fact GraphQL type.
      if (!(0, _definition$q.isNamedType)(type)) {
        context.reportError(
          `Expected GraphQL named type but got: ${(0, _inspect$j.inspect)(type)}.`,
          type.astNode,
        );
        continue;
      } // Ensure it is named correctly (excluding introspection types).

      if (!(0, _introspection$8.isIntrospectionType)(type)) {
        validateName(context, type);
      }

      if ((0, _definition$q.isObjectType)(type)) {
        // Ensure fields are valid
        validateFields(context, type); // Ensure objects implement the interfaces they claim to.

        validateInterfaces(context, type);
      } else if ((0, _definition$q.isInterfaceType)(type)) {
        // Ensure fields are valid.
        validateFields(context, type); // Ensure interfaces implement the interfaces they claim to.

        validateInterfaces(context, type);
      } else if ((0, _definition$q.isUnionType)(type)) {
        // Ensure Unions include valid member types.
        validateUnionMembers(context, type);
      } else if ((0, _definition$q.isEnumType)(type)) {
        // Ensure Enums have valid values.
        validateEnumValues(context, type);
      } else if ((0, _definition$q.isInputObjectType)(type)) {
        // Ensure Input Object fields are valid.
        validateInputFields(context, type); // Ensure Input Objects do not contain non-nullable circular references

        validateInputObjectCircularRefs(type);
      }
    }
  }

  function validateFields(context, type) {
    const fields = Object.values(type.getFields()); // Objects and Interfaces both must define one or more fields.

    if (fields.length === 0) {
      context.reportError(`Type ${type.name} must define one or more fields.`, [
        type.astNode,
        ...type.extensionASTNodes,
      ]);
    }

    for (const field of fields) {
      // Ensure they are named correctly.
      validateName(context, field); // Ensure the type is an output type

      if (!(0, _definition$q.isOutputType)(field.type)) {
        var _field$astNode;

        context.reportError(
          `The type of ${type.name}.${field.name} must be Output Type ` +
            `but got: ${(0, _inspect$j.inspect)(field.type)}.`,
          (_field$astNode = field.astNode) === null || _field$astNode === void 0
            ? void 0
            : _field$astNode.type,
        );
      } // Ensure the arguments are valid

      for (const arg of field.args) {
        const argName = arg.name; // Ensure they are named correctly.

        validateName(context, arg); // Ensure the type is an input type

        if (!(0, _definition$q.isInputType)(arg.type)) {
          var _arg$astNode2;

          context.reportError(
            `The type of ${type.name}.${field.name}(${argName}:) must be Input ` +
              `Type but got: ${(0, _inspect$j.inspect)(arg.type)}.`,
            (_arg$astNode2 = arg.astNode) === null || _arg$astNode2 === void 0
              ? void 0
              : _arg$astNode2.type,
          );
        }

        if (
          (0, _definition$q.isRequiredArgument)(arg) &&
          arg.deprecationReason != null
        ) {
          var _arg$astNode3;

          context.reportError(
            `Required argument ${type.name}.${field.name}(${argName}:) cannot be deprecated.`,
            [
              getDeprecatedDirectiveNode(arg.astNode),
              (_arg$astNode3 = arg.astNode) === null || _arg$astNode3 === void 0
                ? void 0
                : _arg$astNode3.type,
            ],
          );
        }
      }
    }
  }

  function validateInterfaces(context, type) {
    const ifaceTypeNames = Object.create(null);

    for (const iface of type.getInterfaces()) {
      if (!(0, _definition$q.isInterfaceType)(iface)) {
        context.reportError(
          `Type ${(0, _inspect$j.inspect)(
          type,
        )} must only implement Interface types, ` +
            `it cannot implement ${(0, _inspect$j.inspect)(iface)}.`,
          getAllImplementsInterfaceNodes(type, iface),
        );
        continue;
      }

      if (type === iface) {
        context.reportError(
          `Type ${type.name} cannot implement itself because it would create a circular reference.`,
          getAllImplementsInterfaceNodes(type, iface),
        );
        continue;
      }

      if (ifaceTypeNames[iface.name]) {
        context.reportError(
          `Type ${type.name} can only implement ${iface.name} once.`,
          getAllImplementsInterfaceNodes(type, iface),
        );
        continue;
      }

      ifaceTypeNames[iface.name] = true;
      validateTypeImplementsAncestors(context, type, iface);
      validateTypeImplementsInterface(context, type, iface);
    }
  }

  function validateTypeImplementsInterface(context, type, iface) {
    const typeFieldMap = type.getFields(); // Assert each interface field is implemented.

    for (const ifaceField of Object.values(iface.getFields())) {
      const fieldName = ifaceField.name;
      const typeField = typeFieldMap[fieldName]; // Assert interface field exists on type.

      if (!typeField) {
        context.reportError(
          `Interface field ${iface.name}.${fieldName} expected but ${type.name} does not provide it.`,
          [ifaceField.astNode, type.astNode, ...type.extensionASTNodes],
        );
        continue;
      } // Assert interface field type is satisfied by type field type, by being
      // a valid subtype. (covariant)

      if (
        !(0, _typeComparators$2.isTypeSubTypeOf)(
          context.schema,
          typeField.type,
          ifaceField.type,
        )
      ) {
        var _ifaceField$astNode, _typeField$astNode;

        context.reportError(
          `Interface field ${iface.name}.${fieldName} expects type ` +
            `${(0, _inspect$j.inspect)(ifaceField.type)} but ${
            type.name
          }.${fieldName} ` +
            `is type ${(0, _inspect$j.inspect)(typeField.type)}.`,
          [
            (_ifaceField$astNode = ifaceField.astNode) === null ||
            _ifaceField$astNode === void 0
              ? void 0
              : _ifaceField$astNode.type,
            (_typeField$astNode = typeField.astNode) === null ||
            _typeField$astNode === void 0
              ? void 0
              : _typeField$astNode.type,
          ],
        );
      } // Assert each interface field arg is implemented.

      for (const ifaceArg of ifaceField.args) {
        const argName = ifaceArg.name;
        const typeArg = typeField.args.find((arg) => arg.name === argName); // Assert interface field arg exists on object field.

        if (!typeArg) {
          context.reportError(
            `Interface field argument ${iface.name}.${fieldName}(${argName}:) expected but ${type.name}.${fieldName} does not provide it.`,
            [ifaceArg.astNode, typeField.astNode],
          );
          continue;
        } // Assert interface field arg type matches object field arg type.
        // (invariant)
        // TODO: change to contravariant?

        if (!(0, _typeComparators$2.isEqualType)(ifaceArg.type, typeArg.type)) {
          var _ifaceArg$astNode, _typeArg$astNode;

          context.reportError(
            `Interface field argument ${iface.name}.${fieldName}(${argName}:) ` +
              `expects type ${(0, _inspect$j.inspect)(ifaceArg.type)} but ` +
              `${type.name}.${fieldName}(${argName}:) is type ` +
              `${(0, _inspect$j.inspect)(typeArg.type)}.`,
            [
              (_ifaceArg$astNode = ifaceArg.astNode) === null ||
              _ifaceArg$astNode === void 0
                ? void 0
                : _ifaceArg$astNode.type,
              (_typeArg$astNode = typeArg.astNode) === null ||
              _typeArg$astNode === void 0
                ? void 0
                : _typeArg$astNode.type,
            ],
          );
        } // TODO: validate default values?
      } // Assert additional arguments must not be required.

      for (const typeArg of typeField.args) {
        const argName = typeArg.name;
        const ifaceArg = ifaceField.args.find((arg) => arg.name === argName);

        if (!ifaceArg && (0, _definition$q.isRequiredArgument)(typeArg)) {
          context.reportError(
            `Object field ${type.name}.${fieldName} includes required argument ${argName} that is missing from the Interface field ${iface.name}.${fieldName}.`,
            [typeArg.astNode, ifaceField.astNode],
          );
        }
      }
    }
  }

  function validateTypeImplementsAncestors(context, type, iface) {
    const ifaceInterfaces = type.getInterfaces();

    for (const transitive of iface.getInterfaces()) {
      if (!ifaceInterfaces.includes(transitive)) {
        context.reportError(
          transitive === type
            ? `Type ${type.name} cannot implement ${iface.name} because it would create a circular reference.`
            : `Type ${type.name} must implement ${transitive.name} because it is implemented by ${iface.name}.`,
          [
            ...getAllImplementsInterfaceNodes(iface, transitive),
            ...getAllImplementsInterfaceNodes(type, iface),
          ],
        );
      }
    }
  }

  function validateUnionMembers(context, union) {
    const memberTypes = union.getTypes();

    if (memberTypes.length === 0) {
      context.reportError(
        `Union type ${union.name} must define one or more member types.`,
        [union.astNode, ...union.extensionASTNodes],
      );
    }

    const includedTypeNames = Object.create(null);

    for (const memberType of memberTypes) {
      if (includedTypeNames[memberType.name]) {
        context.reportError(
          `Union type ${union.name} can only include type ${memberType.name} once.`,
          getUnionMemberTypeNodes(union, memberType.name),
        );
        continue;
      }

      includedTypeNames[memberType.name] = true;

      if (!(0, _definition$q.isObjectType)(memberType)) {
        context.reportError(
          `Union type ${union.name} can only include Object types, ` +
            `it cannot include ${(0, _inspect$j.inspect)(memberType)}.`,
          getUnionMemberTypeNodes(union, String(memberType)),
        );
      }
    }
  }

  function validateEnumValues(context, enumType) {
    const enumValues = enumType.getValues();

    if (enumValues.length === 0) {
      context.reportError(
        `Enum type ${enumType.name} must define one or more values.`,
        [enumType.astNode, ...enumType.extensionASTNodes],
      );
    }

    for (const enumValue of enumValues) {
      // Ensure valid name.
      validateName(context, enumValue);
    }
  }

  function validateInputFields(context, inputObj) {
    const fields = Object.values(inputObj.getFields());

    if (fields.length === 0) {
      context.reportError(
        `Input Object type ${inputObj.name} must define one or more fields.`,
        [inputObj.astNode, ...inputObj.extensionASTNodes],
      );
    } // Ensure the arguments are valid

    for (const field of fields) {
      // Ensure they are named correctly.
      validateName(context, field); // Ensure the type is an input type

      if (!(0, _definition$q.isInputType)(field.type)) {
        var _field$astNode2;

        context.reportError(
          `The type of ${inputObj.name}.${field.name} must be Input Type ` +
            `but got: ${(0, _inspect$j.inspect)(field.type)}.`,
          (_field$astNode2 = field.astNode) === null || _field$astNode2 === void 0
            ? void 0
            : _field$astNode2.type,
        );
      }

      if (
        (0, _definition$q.isRequiredInputField)(field) &&
        field.deprecationReason != null
      ) {
        var _field$astNode3;

        context.reportError(
          `Required input field ${inputObj.name}.${field.name} cannot be deprecated.`,
          [
            getDeprecatedDirectiveNode(field.astNode),
            (_field$astNode3 = field.astNode) === null ||
            _field$astNode3 === void 0
              ? void 0
              : _field$astNode3.type,
          ],
        );
      }
    }
  }

  function createInputObjectCircularRefsValidator(context) {
    // Modified copy of algorithm from 'src/validation/rules/NoFragmentCycles.js'.
    // Tracks already visited types to maintain O(N) and to ensure that cycles
    // are not redundantly reported.
    const visitedTypes = Object.create(null); // Array of types nodes used to produce meaningful errors

    const fieldPath = []; // Position in the type path

    const fieldPathIndexByTypeName = Object.create(null);
    return detectCycleRecursive; // This does a straight-forward DFS to find cycles.
    // It does not terminate when a cycle was found but continues to explore
    // the graph to find all possible cycles.

    function detectCycleRecursive(inputObj) {
      if (visitedTypes[inputObj.name]) {
        return;
      }

      visitedTypes[inputObj.name] = true;
      fieldPathIndexByTypeName[inputObj.name] = fieldPath.length;
      const fields = Object.values(inputObj.getFields());

      for (const field of fields) {
        if (
          (0, _definition$q.isNonNullType)(field.type) &&
          (0, _definition$q.isInputObjectType)(field.type.ofType)
        ) {
          const fieldType = field.type.ofType;
          const cycleIndex = fieldPathIndexByTypeName[fieldType.name];
          fieldPath.push(field);

          if (cycleIndex === undefined) {
            detectCycleRecursive(fieldType);
          } else {
            const cyclePath = fieldPath.slice(cycleIndex);
            const pathStr = cyclePath.map((fieldObj) => fieldObj.name).join('.');
            context.reportError(
              `Cannot reference Input Object "${fieldType.name}" within itself through a series of non-null fields: "${pathStr}".`,
              cyclePath.map((fieldObj) => fieldObj.astNode),
            );
          }

          fieldPath.pop();
        }
      }

      fieldPathIndexByTypeName[inputObj.name] = undefined;
    }
  }

  function getAllImplementsInterfaceNodes(type, iface) {
    const { astNode, extensionASTNodes } = type;
    const nodes =
      astNode != null ? [astNode, ...extensionASTNodes] : extensionASTNodes; // FIXME: https://github.com/graphql/graphql-js/issues/2203

    return nodes
      .flatMap((typeNode) => {
        var _typeNode$interfaces;

        return (
          /* c8 ignore next */
          (_typeNode$interfaces = typeNode.interfaces) !== null &&
            _typeNode$interfaces !== void 0
            ? _typeNode$interfaces
            : []
        );
      })
      .filter((ifaceNode) => ifaceNode.name.value === iface.name);
  }

  function getUnionMemberTypeNodes(union, typeName) {
    const { astNode, extensionASTNodes } = union;
    const nodes =
      astNode != null ? [astNode, ...extensionASTNodes] : extensionASTNodes; // FIXME: https://github.com/graphql/graphql-js/issues/2203

    return nodes
      .flatMap((unionNode) => {
        var _unionNode$types;

        return (
          /* c8 ignore next */
          (_unionNode$types = unionNode.types) !== null &&
            _unionNode$types !== void 0
            ? _unionNode$types
            : []
        );
      })
      .filter((typeNode) => typeNode.name.value === typeName);
  }

  function getDeprecatedDirectiveNode(definitionNode) {
    var _definitionNode$direc;

    return definitionNode === null || definitionNode === void 0
      ? void 0
      : (_definitionNode$direc = definitionNode.directives) === null ||
        _definitionNode$direc === void 0
      ? void 0
      : _definitionNode$direc.find(
          (node) =>
            node.name.value === _directives$a.GraphQLDeprecatedDirective.name,
        );
  }

  var validate$1 = {};

  var TypeInfo$1 = {};

  var typeFromAST$1 = {};

  Object.defineProperty(typeFromAST$1, '__esModule', {
    value: true,
  });
  typeFromAST$1.typeFromAST = typeFromAST;

  var _kinds$o = kinds;

  var _definition$p = definition;

  function typeFromAST(schema, typeNode) {
    switch (typeNode.kind) {
      case _kinds$o.Kind.LIST_TYPE: {
        const innerType = typeFromAST(schema, typeNode.type);
        return innerType && new _definition$p.GraphQLList(innerType);
      }

      case _kinds$o.Kind.NON_NULL_TYPE: {
        const innerType = typeFromAST(schema, typeNode.type);
        return innerType && new _definition$p.GraphQLNonNull(innerType);
      }

      case _kinds$o.Kind.NAMED_TYPE:
        return schema.getType(typeNode.name.value);
    }
  }

  Object.defineProperty(TypeInfo$1, '__esModule', {
    value: true,
  });
  TypeInfo$1.TypeInfo = void 0;
  TypeInfo$1.visitWithTypeInfo = visitWithTypeInfo;

  var _ast$2 = ast;

  var _kinds$n = kinds;

  var _visitor$3 = visitor;

  var _definition$o = definition;

  var _introspection$7 = introspection;

  var _typeFromAST$7 = typeFromAST$1;

  /**
   * TypeInfo is a utility class which, given a GraphQL schema, can keep track
   * of the current field and type definitions at any point in a GraphQL document
   * AST during a recursive descent by calling `enter(node)` and `leave(node)`.
   */
  class TypeInfo {
    constructor(
      schema,
      /**
       * Initial type may be provided in rare cases to facilitate traversals
       *  beginning somewhere other than documents.
       */
      initialType,
      /** @deprecated will be removed in 17.0.0 */
      getFieldDefFn,
    ) {
      this._schema = schema;
      this._typeStack = [];
      this._parentTypeStack = [];
      this._inputTypeStack = [];
      this._fieldDefStack = [];
      this._defaultValueStack = [];
      this._directive = null;
      this._argument = null;
      this._enumValue = null;
      this._getFieldDef =
        getFieldDefFn !== null && getFieldDefFn !== void 0
          ? getFieldDefFn
          : getFieldDef$1;

      if (initialType) {
        if ((0, _definition$o.isInputType)(initialType)) {
          this._inputTypeStack.push(initialType);
        }

        if ((0, _definition$o.isCompositeType)(initialType)) {
          this._parentTypeStack.push(initialType);
        }

        if ((0, _definition$o.isOutputType)(initialType)) {
          this._typeStack.push(initialType);
        }
      }
    }

    get [Symbol.toStringTag]() {
      return 'TypeInfo';
    }

    getType() {
      if (this._typeStack.length > 0) {
        return this._typeStack[this._typeStack.length - 1];
      }
    }

    getParentType() {
      if (this._parentTypeStack.length > 0) {
        return this._parentTypeStack[this._parentTypeStack.length - 1];
      }
    }

    getInputType() {
      if (this._inputTypeStack.length > 0) {
        return this._inputTypeStack[this._inputTypeStack.length - 1];
      }
    }

    getParentInputType() {
      if (this._inputTypeStack.length > 1) {
        return this._inputTypeStack[this._inputTypeStack.length - 2];
      }
    }

    getFieldDef() {
      if (this._fieldDefStack.length > 0) {
        return this._fieldDefStack[this._fieldDefStack.length - 1];
      }
    }

    getDefaultValue() {
      if (this._defaultValueStack.length > 0) {
        return this._defaultValueStack[this._defaultValueStack.length - 1];
      }
    }

    getDirective() {
      return this._directive;
    }

    getArgument() {
      return this._argument;
    }

    getEnumValue() {
      return this._enumValue;
    }

    enter(node) {
      const schema = this._schema; // Note: many of the types below are explicitly typed as "unknown" to drop
      // any assumptions of a valid schema to ensure runtime types are properly
      // checked before continuing since TypeInfo is used as part of validation
      // which occurs before guarantees of schema and document validity.

      switch (node.kind) {
        case _kinds$n.Kind.SELECTION_SET: {
          const namedType = (0, _definition$o.getNamedType)(this.getType());

          this._parentTypeStack.push(
            (0, _definition$o.isCompositeType)(namedType) ? namedType : undefined,
          );

          break;
        }

        case _kinds$n.Kind.FIELD: {
          const parentType = this.getParentType();
          let fieldDef;
          let fieldType;

          if (parentType) {
            fieldDef = this._getFieldDef(schema, parentType, node);

            if (fieldDef) {
              fieldType = fieldDef.type;
            }
          }

          this._fieldDefStack.push(fieldDef);

          this._typeStack.push(
            (0, _definition$o.isOutputType)(fieldType) ? fieldType : undefined,
          );

          break;
        }

        case _kinds$n.Kind.DIRECTIVE:
          this._directive = schema.getDirective(node.name.value);
          break;

        case _kinds$n.Kind.OPERATION_DEFINITION: {
          const rootType = schema.getRootType(node.operation);

          this._typeStack.push(
            (0, _definition$o.isObjectType)(rootType) ? rootType : undefined,
          );

          break;
        }

        case _kinds$n.Kind.INLINE_FRAGMENT:
        case _kinds$n.Kind.FRAGMENT_DEFINITION: {
          const typeConditionAST = node.typeCondition;
          const outputType = typeConditionAST
            ? (0, _typeFromAST$7.typeFromAST)(schema, typeConditionAST)
            : (0, _definition$o.getNamedType)(this.getType());

          this._typeStack.push(
            (0, _definition$o.isOutputType)(outputType) ? outputType : undefined,
          );

          break;
        }

        case _kinds$n.Kind.VARIABLE_DEFINITION: {
          const inputType = (0, _typeFromAST$7.typeFromAST)(schema, node.type);

          this._inputTypeStack.push(
            (0, _definition$o.isInputType)(inputType) ? inputType : undefined,
          );

          break;
        }

        case _kinds$n.Kind.ARGUMENT: {
          var _this$getDirective;

          let argDef;
          let argType;
          const fieldOrDirective =
            (_this$getDirective = this.getDirective()) !== null &&
            _this$getDirective !== void 0
              ? _this$getDirective
              : this.getFieldDef();

          if (fieldOrDirective) {
            argDef = fieldOrDirective.args.find(
              (arg) => arg.name === node.name.value,
            );

            if (argDef) {
              argType = argDef.type;
            }
          }

          this._argument = argDef;

          this._defaultValueStack.push(argDef ? argDef.defaultValue : undefined);

          this._inputTypeStack.push(
            (0, _definition$o.isInputType)(argType) ? argType : undefined,
          );

          break;
        }

        case _kinds$n.Kind.LIST: {
          const listType = (0, _definition$o.getNullableType)(this.getInputType());
          const itemType = (0, _definition$o.isListType)(listType)
            ? listType.ofType
            : listType; // List positions never have a default value.

          this._defaultValueStack.push(undefined);

          this._inputTypeStack.push(
            (0, _definition$o.isInputType)(itemType) ? itemType : undefined,
          );

          break;
        }

        case _kinds$n.Kind.OBJECT_FIELD: {
          const objectType = (0, _definition$o.getNamedType)(this.getInputType());
          let inputFieldType;
          let inputField;

          if ((0, _definition$o.isInputObjectType)(objectType)) {
            inputField = objectType.getFields()[node.name.value];

            if (inputField) {
              inputFieldType = inputField.type;
            }
          }

          this._defaultValueStack.push(
            inputField ? inputField.defaultValue : undefined,
          );

          this._inputTypeStack.push(
            (0, _definition$o.isInputType)(inputFieldType)
              ? inputFieldType
              : undefined,
          );

          break;
        }

        case _kinds$n.Kind.ENUM: {
          const enumType = (0, _definition$o.getNamedType)(this.getInputType());
          let enumValue;

          if ((0, _definition$o.isEnumType)(enumType)) {
            enumValue = enumType.getValue(node.value);
          }

          this._enumValue = enumValue;
          break;
        }
      }
    }

    leave(node) {
      switch (node.kind) {
        case _kinds$n.Kind.SELECTION_SET:
          this._parentTypeStack.pop();

          break;

        case _kinds$n.Kind.FIELD:
          this._fieldDefStack.pop();

          this._typeStack.pop();

          break;

        case _kinds$n.Kind.DIRECTIVE:
          this._directive = null;
          break;

        case _kinds$n.Kind.OPERATION_DEFINITION:
        case _kinds$n.Kind.INLINE_FRAGMENT:
        case _kinds$n.Kind.FRAGMENT_DEFINITION:
          this._typeStack.pop();

          break;

        case _kinds$n.Kind.VARIABLE_DEFINITION:
          this._inputTypeStack.pop();

          break;

        case _kinds$n.Kind.ARGUMENT:
          this._argument = null;

          this._defaultValueStack.pop();

          this._inputTypeStack.pop();

          break;

        case _kinds$n.Kind.LIST:
        case _kinds$n.Kind.OBJECT_FIELD:
          this._defaultValueStack.pop();

          this._inputTypeStack.pop();

          break;

        case _kinds$n.Kind.ENUM:
          this._enumValue = null;
          break;
      }
    }
  }

  TypeInfo$1.TypeInfo = TypeInfo;

  /**
   * Not exactly the same as the executor's definition of getFieldDef, in this
   * statically evaluated environment we do not always have an Object type,
   * and need to handle Interface and Union types.
   */
  function getFieldDef$1(schema, parentType, fieldNode) {
    const name = fieldNode.name.value;

    if (
      name === _introspection$7.SchemaMetaFieldDef.name &&
      schema.getQueryType() === parentType
    ) {
      return _introspection$7.SchemaMetaFieldDef;
    }

    if (
      name === _introspection$7.TypeMetaFieldDef.name &&
      schema.getQueryType() === parentType
    ) {
      return _introspection$7.TypeMetaFieldDef;
    }

    if (
      name === _introspection$7.TypeNameMetaFieldDef.name &&
      (0, _definition$o.isCompositeType)(parentType)
    ) {
      return _introspection$7.TypeNameMetaFieldDef;
    }

    if (
      (0, _definition$o.isObjectType)(parentType) ||
      (0, _definition$o.isInterfaceType)(parentType)
    ) {
      return parentType.getFields()[name];
    }
  }
  /**
   * Creates a new visitor instance which maintains a provided TypeInfo instance
   * along with visiting visitor.
   */

  function visitWithTypeInfo(typeInfo, visitor) {
    return {
      enter(...args) {
        const node = args[0];
        typeInfo.enter(node);
        const fn = (0, _visitor$3.getEnterLeaveForKind)(visitor, node.kind).enter;

        if (fn) {
          const result = fn.apply(visitor, args);

          if (result !== undefined) {
            typeInfo.leave(node);

            if ((0, _ast$2.isNode)(result)) {
              typeInfo.enter(result);
            }
          }

          return result;
        }
      },

      leave(...args) {
        const node = args[0];
        const fn = (0, _visitor$3.getEnterLeaveForKind)(visitor, node.kind).leave;
        let result;

        if (fn) {
          result = fn.apply(visitor, args);
        }

        typeInfo.leave(node);
        return result;
      },
    };
  }

  var specifiedRules$1 = {};

  var ExecutableDefinitionsRule$1 = {};

  var predicates = {};

  Object.defineProperty(predicates, '__esModule', {
    value: true,
  });
  predicates.isConstValueNode = isConstValueNode;
  predicates.isDefinitionNode = isDefinitionNode;
  predicates.isExecutableDefinitionNode = isExecutableDefinitionNode;
  predicates.isSelectionNode = isSelectionNode;
  predicates.isTypeDefinitionNode = isTypeDefinitionNode;
  predicates.isTypeExtensionNode = isTypeExtensionNode;
  predicates.isTypeNode = isTypeNode;
  predicates.isTypeSystemDefinitionNode = isTypeSystemDefinitionNode;
  predicates.isTypeSystemExtensionNode = isTypeSystemExtensionNode;
  predicates.isValueNode = isValueNode;

  var _kinds$m = kinds;

  function isDefinitionNode(node) {
    return (
      isExecutableDefinitionNode(node) ||
      isTypeSystemDefinitionNode(node) ||
      isTypeSystemExtensionNode(node)
    );
  }

  function isExecutableDefinitionNode(node) {
    return (
      node.kind === _kinds$m.Kind.OPERATION_DEFINITION ||
      node.kind === _kinds$m.Kind.FRAGMENT_DEFINITION
    );
  }

  function isSelectionNode(node) {
    return (
      node.kind === _kinds$m.Kind.FIELD ||
      node.kind === _kinds$m.Kind.FRAGMENT_SPREAD ||
      node.kind === _kinds$m.Kind.INLINE_FRAGMENT
    );
  }

  function isValueNode(node) {
    return (
      node.kind === _kinds$m.Kind.VARIABLE ||
      node.kind === _kinds$m.Kind.INT ||
      node.kind === _kinds$m.Kind.FLOAT ||
      node.kind === _kinds$m.Kind.STRING ||
      node.kind === _kinds$m.Kind.BOOLEAN ||
      node.kind === _kinds$m.Kind.NULL ||
      node.kind === _kinds$m.Kind.ENUM ||
      node.kind === _kinds$m.Kind.LIST ||
      node.kind === _kinds$m.Kind.OBJECT
    );
  }

  function isConstValueNode(node) {
    return (
      isValueNode(node) &&
      (node.kind === _kinds$m.Kind.LIST
        ? node.values.some(isConstValueNode)
        : node.kind === _kinds$m.Kind.OBJECT
        ? node.fields.some((field) => isConstValueNode(field.value))
        : node.kind !== _kinds$m.Kind.VARIABLE)
    );
  }

  function isTypeNode(node) {
    return (
      node.kind === _kinds$m.Kind.NAMED_TYPE ||
      node.kind === _kinds$m.Kind.LIST_TYPE ||
      node.kind === _kinds$m.Kind.NON_NULL_TYPE
    );
  }

  function isTypeSystemDefinitionNode(node) {
    return (
      node.kind === _kinds$m.Kind.SCHEMA_DEFINITION ||
      isTypeDefinitionNode(node) ||
      node.kind === _kinds$m.Kind.DIRECTIVE_DEFINITION
    );
  }

  function isTypeDefinitionNode(node) {
    return (
      node.kind === _kinds$m.Kind.SCALAR_TYPE_DEFINITION ||
      node.kind === _kinds$m.Kind.OBJECT_TYPE_DEFINITION ||
      node.kind === _kinds$m.Kind.INTERFACE_TYPE_DEFINITION ||
      node.kind === _kinds$m.Kind.UNION_TYPE_DEFINITION ||
      node.kind === _kinds$m.Kind.ENUM_TYPE_DEFINITION ||
      node.kind === _kinds$m.Kind.INPUT_OBJECT_TYPE_DEFINITION
    );
  }

  function isTypeSystemExtensionNode(node) {
    return (
      node.kind === _kinds$m.Kind.SCHEMA_EXTENSION || isTypeExtensionNode(node)
    );
  }

  function isTypeExtensionNode(node) {
    return (
      node.kind === _kinds$m.Kind.SCALAR_TYPE_EXTENSION ||
      node.kind === _kinds$m.Kind.OBJECT_TYPE_EXTENSION ||
      node.kind === _kinds$m.Kind.INTERFACE_TYPE_EXTENSION ||
      node.kind === _kinds$m.Kind.UNION_TYPE_EXTENSION ||
      node.kind === _kinds$m.Kind.ENUM_TYPE_EXTENSION ||
      node.kind === _kinds$m.Kind.INPUT_OBJECT_TYPE_EXTENSION
    );
  }

  Object.defineProperty(ExecutableDefinitionsRule$1, '__esModule', {
    value: true,
  });
  ExecutableDefinitionsRule$1.ExecutableDefinitionsRule = ExecutableDefinitionsRule;

  var _GraphQLError$H = GraphQLError$1;

  var _kinds$l = kinds;

  var _predicates$4 = predicates;

  /**
   * Executable definitions
   *
   * A GraphQL document is only valid for execution if all definitions are either
   * operation or fragment definitions.
   *
   * See https://spec.graphql.org/draft/#sec-Executable-Definitions
   */
  function ExecutableDefinitionsRule(context) {
    return {
      Document(node) {
        for (const definition of node.definitions) {
          if (!(0, _predicates$4.isExecutableDefinitionNode)(definition)) {
            const defName =
              definition.kind === _kinds$l.Kind.SCHEMA_DEFINITION ||
              definition.kind === _kinds$l.Kind.SCHEMA_EXTENSION
                ? 'schema'
                : '"' + definition.name.value + '"';
            context.reportError(
              new _GraphQLError$H.GraphQLError(
                `The ${defName} definition is not executable.`,
                definition,
              ),
            );
          }
        }

        return false;
      },
    };
  }

  var FieldsOnCorrectTypeRule$1 = {};

  Object.defineProperty(FieldsOnCorrectTypeRule$1, '__esModule', {
    value: true,
  });
  FieldsOnCorrectTypeRule$1.FieldsOnCorrectTypeRule = FieldsOnCorrectTypeRule;

  var _didYouMean$5 = didYouMean$1;

  var _naturalCompare$2 = naturalCompare$1;

  var _suggestionList$5 = suggestionList$1;

  var _GraphQLError$G = GraphQLError$1;

  var _definition$n = definition;

  /**
   * Fields on correct type
   *
   * A GraphQL document is only valid if all fields selected are defined by the
   * parent type, or are an allowed meta field such as __typename.
   *
   * See https://spec.graphql.org/draft/#sec-Field-Selections
   */
  function FieldsOnCorrectTypeRule(context) {
    return {
      Field(node) {
        const type = context.getParentType();

        if (type) {
          const fieldDef = context.getFieldDef();

          if (!fieldDef) {
            // This field doesn't exist, lets look for suggestions.
            const schema = context.getSchema();
            const fieldName = node.name.value; // First determine if there are any suggested types to condition on.

            let suggestion = (0, _didYouMean$5.didYouMean)(
              'to use an inline fragment on',
              getSuggestedTypeNames(schema, type, fieldName),
            ); // If there are no suggested types, then perhaps this was a typo?

            if (suggestion === '') {
              suggestion = (0, _didYouMean$5.didYouMean)(
                getSuggestedFieldNames(type, fieldName),
              );
            } // Report an error, including helpful suggestions.

            context.reportError(
              new _GraphQLError$G.GraphQLError(
                `Cannot query field "${fieldName}" on type "${type.name}".` +
                  suggestion,
                node,
              ),
            );
          }
        }
      },
    };
  }
  /**
   * Go through all of the implementations of type, as well as the interfaces that
   * they implement. If any of those types include the provided field, suggest them,
   * sorted by how often the type is referenced.
   */

  function getSuggestedTypeNames(schema, type, fieldName) {
    if (!(0, _definition$n.isAbstractType)(type)) {
      // Must be an Object type, which does not have possible fields.
      return [];
    }

    const suggestedTypes = new Set();
    const usageCount = Object.create(null);

    for (const possibleType of schema.getPossibleTypes(type)) {
      if (!possibleType.getFields()[fieldName]) {
        continue;
      } // This object type defines this field.

      suggestedTypes.add(possibleType);
      usageCount[possibleType.name] = 1;

      for (const possibleInterface of possibleType.getInterfaces()) {
        var _usageCount$possibleI;

        if (!possibleInterface.getFields()[fieldName]) {
          continue;
        } // This interface type defines this field.

        suggestedTypes.add(possibleInterface);
        usageCount[possibleInterface.name] =
          ((_usageCount$possibleI = usageCount[possibleInterface.name]) !==
            null && _usageCount$possibleI !== void 0
            ? _usageCount$possibleI
            : 0) + 1;
      }
    }

    return [...suggestedTypes]
      .sort((typeA, typeB) => {
        // Suggest both interface and object types based on how common they are.
        const usageCountDiff = usageCount[typeB.name] - usageCount[typeA.name];

        if (usageCountDiff !== 0) {
          return usageCountDiff;
        } // Suggest super types first followed by subtypes

        if (
          (0, _definition$n.isInterfaceType)(typeA) &&
          schema.isSubType(typeA, typeB)
        ) {
          return -1;
        }

        if (
          (0, _definition$n.isInterfaceType)(typeB) &&
          schema.isSubType(typeB, typeA)
        ) {
          return 1;
        }

        return (0, _naturalCompare$2.naturalCompare)(typeA.name, typeB.name);
      })
      .map((x) => x.name);
  }
  /**
   * For the field name provided, determine if there are any similar field names
   * that may be the result of a typo.
   */

  function getSuggestedFieldNames(type, fieldName) {
    if (
      (0, _definition$n.isObjectType)(type) ||
      (0, _definition$n.isInterfaceType)(type)
    ) {
      const possibleFieldNames = Object.keys(type.getFields());
      return (0, _suggestionList$5.suggestionList)(fieldName, possibleFieldNames);
    } // Otherwise, must be a Union type, which does not define fields.

    return [];
  }

  var FragmentsOnCompositeTypesRule$1 = {};

  Object.defineProperty(FragmentsOnCompositeTypesRule$1, '__esModule', {
    value: true,
  });
  FragmentsOnCompositeTypesRule$1.FragmentsOnCompositeTypesRule = FragmentsOnCompositeTypesRule;

  var _GraphQLError$F = GraphQLError$1;

  var _printer$7 = printer;

  var _definition$m = definition;

  var _typeFromAST$6 = typeFromAST$1;

  /**
   * Fragments on composite type
   *
   * Fragments use a type condition to determine if they apply, since fragments
   * can only be spread into a composite type (object, interface, or union), the
   * type condition must also be a composite type.
   *
   * See https://spec.graphql.org/draft/#sec-Fragments-On-Composite-Types
   */
  function FragmentsOnCompositeTypesRule(context) {
    return {
      InlineFragment(node) {
        const typeCondition = node.typeCondition;

        if (typeCondition) {
          const type = (0, _typeFromAST$6.typeFromAST)(
            context.getSchema(),
            typeCondition,
          );

          if (type && !(0, _definition$m.isCompositeType)(type)) {
            const typeStr = (0, _printer$7.print)(typeCondition);
            context.reportError(
              new _GraphQLError$F.GraphQLError(
                `Fragment cannot condition on non composite type "${typeStr}".`,
                typeCondition,
              ),
            );
          }
        }
      },

      FragmentDefinition(node) {
        const type = (0, _typeFromAST$6.typeFromAST)(
          context.getSchema(),
          node.typeCondition,
        );

        if (type && !(0, _definition$m.isCompositeType)(type)) {
          const typeStr = (0, _printer$7.print)(node.typeCondition);
          context.reportError(
            new _GraphQLError$F.GraphQLError(
              `Fragment "${node.name.value}" cannot condition on non composite type "${typeStr}".`,
              node.typeCondition,
            ),
          );
        }
      },
    };
  }

  var KnownArgumentNamesRule$1 = {};

  Object.defineProperty(KnownArgumentNamesRule$1, '__esModule', {
    value: true,
  });
  KnownArgumentNamesRule$1.KnownArgumentNamesOnDirectivesRule = KnownArgumentNamesOnDirectivesRule;
  KnownArgumentNamesRule$1.KnownArgumentNamesRule = KnownArgumentNamesRule;

  var _didYouMean$4 = didYouMean$1;

  var _suggestionList$4 = suggestionList$1;

  var _GraphQLError$E = GraphQLError$1;

  var _kinds$k = kinds;

  var _directives$9 = directives;

  /**
   * Known argument names
   *
   * A GraphQL field is only valid if all supplied arguments are defined by
   * that field.
   *
   * See https://spec.graphql.org/draft/#sec-Argument-Names
   * See https://spec.graphql.org/draft/#sec-Directives-Are-In-Valid-Locations
   */
  function KnownArgumentNamesRule(context) {
    return {
      // eslint-disable-next-line new-cap
      ...KnownArgumentNamesOnDirectivesRule(context),

      Argument(argNode) {
        const argDef = context.getArgument();
        const fieldDef = context.getFieldDef();
        const parentType = context.getParentType();

        if (!argDef && fieldDef && parentType) {
          const argName = argNode.name.value;
          const knownArgsNames = fieldDef.args.map((arg) => arg.name);
          const suggestions = (0, _suggestionList$4.suggestionList)(
            argName,
            knownArgsNames,
          );
          context.reportError(
            new _GraphQLError$E.GraphQLError(
              `Unknown argument "${argName}" on field "${parentType.name}.${fieldDef.name}".` +
                (0, _didYouMean$4.didYouMean)(suggestions),
              argNode,
            ),
          );
        }
      },
    };
  }
  /**
   * @internal
   */

  function KnownArgumentNamesOnDirectivesRule(context) {
    const directiveArgs = Object.create(null);
    const schema = context.getSchema();
    const definedDirectives = schema
      ? schema.getDirectives()
      : _directives$9.specifiedDirectives;

    for (const directive of definedDirectives) {
      directiveArgs[directive.name] = directive.args.map((arg) => arg.name);
    }

    const astDefinitions = context.getDocument().definitions;

    for (const def of astDefinitions) {
      if (def.kind === _kinds$k.Kind.DIRECTIVE_DEFINITION) {
        var _def$arguments;

        // FIXME: https://github.com/graphql/graphql-js/issues/2203

        /* c8 ignore next */
        const argsNodes =
          (_def$arguments = def.arguments) !== null && _def$arguments !== void 0
            ? _def$arguments
            : [];
        directiveArgs[def.name.value] = argsNodes.map((arg) => arg.name.value);
      }
    }

    return {
      Directive(directiveNode) {
        const directiveName = directiveNode.name.value;
        const knownArgs = directiveArgs[directiveName];

        if (directiveNode.arguments && knownArgs) {
          for (const argNode of directiveNode.arguments) {
            const argName = argNode.name.value;

            if (!knownArgs.includes(argName)) {
              const suggestions = (0, _suggestionList$4.suggestionList)(
                argName,
                knownArgs,
              );
              context.reportError(
                new _GraphQLError$E.GraphQLError(
                  `Unknown argument "${argName}" on directive "@${directiveName}".` +
                    (0, _didYouMean$4.didYouMean)(suggestions),
                  argNode,
                ),
              );
            }
          }
        }

        return false;
      },
    };
  }

  var KnownDirectivesRule$1 = {};

  Object.defineProperty(KnownDirectivesRule$1, '__esModule', {
    value: true,
  });
  KnownDirectivesRule$1.KnownDirectivesRule = KnownDirectivesRule;

  var _inspect$i = inspect$1;

  var _invariant$b = invariant$1;

  var _GraphQLError$D = GraphQLError$1;

  var _ast$1 = ast;

  var _directiveLocation = directiveLocation;

  var _kinds$j = kinds;

  var _directives$8 = directives;

  /**
   * Known directives
   *
   * A GraphQL document is only valid if all `@directives` are known by the
   * schema and legally positioned.
   *
   * See https://spec.graphql.org/draft/#sec-Directives-Are-Defined
   */
  function KnownDirectivesRule(context) {
    const locationsMap = Object.create(null);
    const schema = context.getSchema();
    const definedDirectives = schema
      ? schema.getDirectives()
      : _directives$8.specifiedDirectives;

    for (const directive of definedDirectives) {
      locationsMap[directive.name] = directive.locations;
    }

    const astDefinitions = context.getDocument().definitions;

    for (const def of astDefinitions) {
      if (def.kind === _kinds$j.Kind.DIRECTIVE_DEFINITION) {
        locationsMap[def.name.value] = def.locations.map((name) => name.value);
      }
    }

    return {
      Directive(node, _key, _parent, _path, ancestors) {
        const name = node.name.value;
        const locations = locationsMap[name];

        if (!locations) {
          context.reportError(
            new _GraphQLError$D.GraphQLError(`Unknown directive "@${name}".`, node),
          );
          return;
        }

        const candidateLocation = getDirectiveLocationForASTPath(ancestors);

        if (candidateLocation && !locations.includes(candidateLocation)) {
          context.reportError(
            new _GraphQLError$D.GraphQLError(
              `Directive "@${name}" may not be used on ${candidateLocation}.`,
              node,
            ),
          );
        }
      },
    };
  }

  function getDirectiveLocationForASTPath(ancestors) {
    const appliedTo = ancestors[ancestors.length - 1];
    'kind' in appliedTo || (0, _invariant$b.invariant)(false);

    switch (appliedTo.kind) {
      case _kinds$j.Kind.OPERATION_DEFINITION:
        return getDirectiveLocationForOperation(appliedTo.operation);

      case _kinds$j.Kind.FIELD:
        return _directiveLocation.DirectiveLocation.FIELD;

      case _kinds$j.Kind.FRAGMENT_SPREAD:
        return _directiveLocation.DirectiveLocation.FRAGMENT_SPREAD;

      case _kinds$j.Kind.INLINE_FRAGMENT:
        return _directiveLocation.DirectiveLocation.INLINE_FRAGMENT;

      case _kinds$j.Kind.FRAGMENT_DEFINITION:
        return _directiveLocation.DirectiveLocation.FRAGMENT_DEFINITION;

      case _kinds$j.Kind.VARIABLE_DEFINITION:
        return _directiveLocation.DirectiveLocation.VARIABLE_DEFINITION;

      case _kinds$j.Kind.SCHEMA_DEFINITION:
      case _kinds$j.Kind.SCHEMA_EXTENSION:
        return _directiveLocation.DirectiveLocation.SCHEMA;

      case _kinds$j.Kind.SCALAR_TYPE_DEFINITION:
      case _kinds$j.Kind.SCALAR_TYPE_EXTENSION:
        return _directiveLocation.DirectiveLocation.SCALAR;

      case _kinds$j.Kind.OBJECT_TYPE_DEFINITION:
      case _kinds$j.Kind.OBJECT_TYPE_EXTENSION:
        return _directiveLocation.DirectiveLocation.OBJECT;

      case _kinds$j.Kind.FIELD_DEFINITION:
        return _directiveLocation.DirectiveLocation.FIELD_DEFINITION;

      case _kinds$j.Kind.INTERFACE_TYPE_DEFINITION:
      case _kinds$j.Kind.INTERFACE_TYPE_EXTENSION:
        return _directiveLocation.DirectiveLocation.INTERFACE;

      case _kinds$j.Kind.UNION_TYPE_DEFINITION:
      case _kinds$j.Kind.UNION_TYPE_EXTENSION:
        return _directiveLocation.DirectiveLocation.UNION;

      case _kinds$j.Kind.ENUM_TYPE_DEFINITION:
      case _kinds$j.Kind.ENUM_TYPE_EXTENSION:
        return _directiveLocation.DirectiveLocation.ENUM;

      case _kinds$j.Kind.ENUM_VALUE_DEFINITION:
        return _directiveLocation.DirectiveLocation.ENUM_VALUE;

      case _kinds$j.Kind.INPUT_OBJECT_TYPE_DEFINITION:
      case _kinds$j.Kind.INPUT_OBJECT_TYPE_EXTENSION:
        return _directiveLocation.DirectiveLocation.INPUT_OBJECT;

      case _kinds$j.Kind.INPUT_VALUE_DEFINITION: {
        const parentNode = ancestors[ancestors.length - 3];
        'kind' in parentNode || (0, _invariant$b.invariant)(false);
        return parentNode.kind === _kinds$j.Kind.INPUT_OBJECT_TYPE_DEFINITION
          ? _directiveLocation.DirectiveLocation.INPUT_FIELD_DEFINITION
          : _directiveLocation.DirectiveLocation.ARGUMENT_DEFINITION;
      }
      // Not reachable, all possible types have been considered.

      /* c8 ignore next */

      default:
        (0, _invariant$b.invariant)(
            false,
            'Unexpected kind: ' + (0, _inspect$i.inspect)(appliedTo.kind),
          );
    }
  }

  function getDirectiveLocationForOperation(operation) {
    switch (operation) {
      case _ast$1.OperationTypeNode.QUERY:
        return _directiveLocation.DirectiveLocation.QUERY;

      case _ast$1.OperationTypeNode.MUTATION:
        return _directiveLocation.DirectiveLocation.MUTATION;

      case _ast$1.OperationTypeNode.SUBSCRIPTION:
        return _directiveLocation.DirectiveLocation.SUBSCRIPTION;
    }
  }

  var KnownFragmentNamesRule$1 = {};

  Object.defineProperty(KnownFragmentNamesRule$1, '__esModule', {
    value: true,
  });
  KnownFragmentNamesRule$1.KnownFragmentNamesRule = KnownFragmentNamesRule;

  var _GraphQLError$C = GraphQLError$1;

  /**
   * Known fragment names
   *
   * A GraphQL document is only valid if all `...Fragment` fragment spreads refer
   * to fragments defined in the same document.
   *
   * See https://spec.graphql.org/draft/#sec-Fragment-spread-target-defined
   */
  function KnownFragmentNamesRule(context) {
    return {
      FragmentSpread(node) {
        const fragmentName = node.name.value;
        const fragment = context.getFragment(fragmentName);

        if (!fragment) {
          context.reportError(
            new _GraphQLError$C.GraphQLError(
              `Unknown fragment "${fragmentName}".`,
              node.name,
            ),
          );
        }
      },
    };
  }

  var KnownTypeNamesRule$1 = {};

  Object.defineProperty(KnownTypeNamesRule$1, '__esModule', {
    value: true,
  });
  KnownTypeNamesRule$1.KnownTypeNamesRule = KnownTypeNamesRule;

  var _didYouMean$3 = didYouMean$1;

  var _suggestionList$3 = suggestionList$1;

  var _GraphQLError$B = GraphQLError$1;

  var _predicates$3 = predicates;

  var _introspection$6 = introspection;

  var _scalars$4 = scalars;

  /**
   * Known type names
   *
   * A GraphQL document is only valid if referenced types (specifically
   * variable definitions and fragment conditions) are defined by the type schema.
   *
   * See https://spec.graphql.org/draft/#sec-Fragment-Spread-Type-Existence
   */
  function KnownTypeNamesRule(context) {
    const schema = context.getSchema();
    const existingTypesMap = schema ? schema.getTypeMap() : Object.create(null);
    const definedTypes = Object.create(null);

    for (const def of context.getDocument().definitions) {
      if ((0, _predicates$3.isTypeDefinitionNode)(def)) {
        definedTypes[def.name.value] = true;
      }
    }

    const typeNames = [
      ...Object.keys(existingTypesMap),
      ...Object.keys(definedTypes),
    ];
    return {
      NamedType(node, _1, parent, _2, ancestors) {
        const typeName = node.name.value;

        if (!existingTypesMap[typeName] && !definedTypes[typeName]) {
          var _ancestors$;

          const definitionNode =
            (_ancestors$ = ancestors[2]) !== null && _ancestors$ !== void 0
              ? _ancestors$
              : parent;
          const isSDL = definitionNode != null && isSDLNode(definitionNode);

          if (isSDL && standardTypeNames.includes(typeName)) {
            return;
          }

          const suggestedTypes = (0, _suggestionList$3.suggestionList)(
            typeName,
            isSDL ? standardTypeNames.concat(typeNames) : typeNames,
          );
          context.reportError(
            new _GraphQLError$B.GraphQLError(
              `Unknown type "${typeName}".` +
                (0, _didYouMean$3.didYouMean)(suggestedTypes),
              node,
            ),
          );
        }
      },
    };
  }

  const standardTypeNames = [
    ..._scalars$4.specifiedScalarTypes,
    ..._introspection$6.introspectionTypes,
  ].map((type) => type.name);

  function isSDLNode(value) {
    return (
      'kind' in value &&
      ((0, _predicates$3.isTypeSystemDefinitionNode)(value) ||
        (0, _predicates$3.isTypeSystemExtensionNode)(value))
    );
  }

  var LoneAnonymousOperationRule$1 = {};

  Object.defineProperty(LoneAnonymousOperationRule$1, '__esModule', {
    value: true,
  });
  LoneAnonymousOperationRule$1.LoneAnonymousOperationRule = LoneAnonymousOperationRule;

  var _GraphQLError$A = GraphQLError$1;

  var _kinds$i = kinds;

  /**
   * Lone anonymous operation
   *
   * A GraphQL document is only valid if when it contains an anonymous operation
   * (the query short-hand) that it contains only that one operation definition.
   *
   * See https://spec.graphql.org/draft/#sec-Lone-Anonymous-Operation
   */
  function LoneAnonymousOperationRule(context) {
    let operationCount = 0;
    return {
      Document(node) {
        operationCount = node.definitions.filter(
          (definition) => definition.kind === _kinds$i.Kind.OPERATION_DEFINITION,
        ).length;
      },

      OperationDefinition(node) {
        if (!node.name && operationCount > 1) {
          context.reportError(
            new _GraphQLError$A.GraphQLError(
              'This anonymous operation must be the only defined operation.',
              node,
            ),
          );
        }
      },
    };
  }

  var LoneSchemaDefinitionRule$1 = {};

  Object.defineProperty(LoneSchemaDefinitionRule$1, '__esModule', {
    value: true,
  });
  LoneSchemaDefinitionRule$1.LoneSchemaDefinitionRule = LoneSchemaDefinitionRule;

  var _GraphQLError$z = GraphQLError$1;

  /**
   * Lone Schema definition
   *
   * A GraphQL document is only valid if it contains only one schema definition.
   */
  function LoneSchemaDefinitionRule(context) {
    var _ref, _ref2, _oldSchema$astNode;

    const oldSchema = context.getSchema();
    const alreadyDefined =
      (_ref =
        (_ref2 =
          (_oldSchema$astNode =
            oldSchema === null || oldSchema === void 0
              ? void 0
              : oldSchema.astNode) !== null && _oldSchema$astNode !== void 0
            ? _oldSchema$astNode
            : oldSchema === null || oldSchema === void 0
            ? void 0
            : oldSchema.getQueryType()) !== null && _ref2 !== void 0
          ? _ref2
          : oldSchema === null || oldSchema === void 0
          ? void 0
          : oldSchema.getMutationType()) !== null && _ref !== void 0
        ? _ref
        : oldSchema === null || oldSchema === void 0
        ? void 0
        : oldSchema.getSubscriptionType();
    let schemaDefinitionsCount = 0;
    return {
      SchemaDefinition(node) {
        if (alreadyDefined) {
          context.reportError(
            new _GraphQLError$z.GraphQLError(
              'Cannot define a new schema within a schema extension.',
              node,
            ),
          );
          return;
        }

        if (schemaDefinitionsCount > 0) {
          context.reportError(
            new _GraphQLError$z.GraphQLError(
              'Must provide only one schema definition.',
              node,
            ),
          );
        }

        ++schemaDefinitionsCount;
      },
    };
  }

  var NoFragmentCyclesRule$1 = {};

  Object.defineProperty(NoFragmentCyclesRule$1, '__esModule', {
    value: true,
  });
  NoFragmentCyclesRule$1.NoFragmentCyclesRule = NoFragmentCyclesRule;

  var _GraphQLError$y = GraphQLError$1;

  /**
   * No fragment cycles
   *
   * The graph of fragment spreads must not form any cycles including spreading itself.
   * Otherwise an operation could infinitely spread or infinitely execute on cycles in the underlying data.
   *
   * See https://spec.graphql.org/draft/#sec-Fragment-spreads-must-not-form-cycles
   */
  function NoFragmentCyclesRule(context) {
    // Tracks already visited fragments to maintain O(N) and to ensure that cycles
    // are not redundantly reported.
    const visitedFrags = Object.create(null); // Array of AST nodes used to produce meaningful errors

    const spreadPath = []; // Position in the spread path

    const spreadPathIndexByName = Object.create(null);
    return {
      OperationDefinition: () => false,

      FragmentDefinition(node) {
        detectCycleRecursive(node);
        return false;
      },
    }; // This does a straight-forward DFS to find cycles.
    // It does not terminate when a cycle was found but continues to explore
    // the graph to find all possible cycles.

    function detectCycleRecursive(fragment) {
      if (visitedFrags[fragment.name.value]) {
        return;
      }

      const fragmentName = fragment.name.value;
      visitedFrags[fragmentName] = true;
      const spreadNodes = context.getFragmentSpreads(fragment.selectionSet);

      if (spreadNodes.length === 0) {
        return;
      }

      spreadPathIndexByName[fragmentName] = spreadPath.length;

      for (const spreadNode of spreadNodes) {
        const spreadName = spreadNode.name.value;
        const cycleIndex = spreadPathIndexByName[spreadName];
        spreadPath.push(spreadNode);

        if (cycleIndex === undefined) {
          const spreadFragment = context.getFragment(spreadName);

          if (spreadFragment) {
            detectCycleRecursive(spreadFragment);
          }
        } else {
          const cyclePath = spreadPath.slice(cycleIndex);
          const viaPath = cyclePath
            .slice(0, -1)
            .map((s) => '"' + s.name.value + '"')
            .join(', ');
          context.reportError(
            new _GraphQLError$y.GraphQLError(
              `Cannot spread fragment "${spreadName}" within itself` +
                (viaPath !== '' ? ` via ${viaPath}.` : '.'),
              cyclePath,
            ),
          );
        }

        spreadPath.pop();
      }

      spreadPathIndexByName[fragmentName] = undefined;
    }
  }

  var NoUndefinedVariablesRule$1 = {};

  Object.defineProperty(NoUndefinedVariablesRule$1, '__esModule', {
    value: true,
  });
  NoUndefinedVariablesRule$1.NoUndefinedVariablesRule = NoUndefinedVariablesRule;

  var _GraphQLError$x = GraphQLError$1;

  /**
   * No undefined variables
   *
   * A GraphQL operation is only valid if all variables encountered, both directly
   * and via fragment spreads, are defined by that operation.
   *
   * See https://spec.graphql.org/draft/#sec-All-Variable-Uses-Defined
   */
  function NoUndefinedVariablesRule(context) {
    let variableNameDefined = Object.create(null);
    return {
      OperationDefinition: {
        enter() {
          variableNameDefined = Object.create(null);
        },

        leave(operation) {
          const usages = context.getRecursiveVariableUsages(operation);

          for (const { node } of usages) {
            const varName = node.name.value;

            if (variableNameDefined[varName] !== true) {
              context.reportError(
                new _GraphQLError$x.GraphQLError(
                  operation.name
                    ? `Variable "$${varName}" is not defined by operation "${operation.name.value}".`
                    : `Variable "$${varName}" is not defined.`,
                  [node, operation],
                ),
              );
            }
          }
        },
      },

      VariableDefinition(node) {
        variableNameDefined[node.variable.name.value] = true;
      },
    };
  }

  var NoUnusedFragmentsRule$1 = {};

  Object.defineProperty(NoUnusedFragmentsRule$1, '__esModule', {
    value: true,
  });
  NoUnusedFragmentsRule$1.NoUnusedFragmentsRule = NoUnusedFragmentsRule;

  var _GraphQLError$w = GraphQLError$1;

  /**
   * No unused fragments
   *
   * A GraphQL document is only valid if all fragment definitions are spread
   * within operations, or spread within other fragments spread within operations.
   *
   * See https://spec.graphql.org/draft/#sec-Fragments-Must-Be-Used
   */
  function NoUnusedFragmentsRule(context) {
    const operationDefs = [];
    const fragmentDefs = [];
    return {
      OperationDefinition(node) {
        operationDefs.push(node);
        return false;
      },

      FragmentDefinition(node) {
        fragmentDefs.push(node);
        return false;
      },

      Document: {
        leave() {
          const fragmentNameUsed = Object.create(null);

          for (const operation of operationDefs) {
            for (const fragment of context.getRecursivelyReferencedFragments(
              operation,
            )) {
              fragmentNameUsed[fragment.name.value] = true;
            }
          }

          for (const fragmentDef of fragmentDefs) {
            const fragName = fragmentDef.name.value;

            if (fragmentNameUsed[fragName] !== true) {
              context.reportError(
                new _GraphQLError$w.GraphQLError(
                  `Fragment "${fragName}" is never used.`,
                  fragmentDef,
                ),
              );
            }
          }
        },
      },
    };
  }

  var NoUnusedVariablesRule$1 = {};

  Object.defineProperty(NoUnusedVariablesRule$1, '__esModule', {
    value: true,
  });
  NoUnusedVariablesRule$1.NoUnusedVariablesRule = NoUnusedVariablesRule;

  var _GraphQLError$v = GraphQLError$1;

  /**
   * No unused variables
   *
   * A GraphQL operation is only valid if all variables defined by an operation
   * are used, either directly or within a spread fragment.
   *
   * See https://spec.graphql.org/draft/#sec-All-Variables-Used
   */
  function NoUnusedVariablesRule(context) {
    let variableDefs = [];
    return {
      OperationDefinition: {
        enter() {
          variableDefs = [];
        },

        leave(operation) {
          const variableNameUsed = Object.create(null);
          const usages = context.getRecursiveVariableUsages(operation);

          for (const { node } of usages) {
            variableNameUsed[node.name.value] = true;
          }

          for (const variableDef of variableDefs) {
            const variableName = variableDef.variable.name.value;

            if (variableNameUsed[variableName] !== true) {
              context.reportError(
                new _GraphQLError$v.GraphQLError(
                  operation.name
                    ? `Variable "$${variableName}" is never used in operation "${operation.name.value}".`
                    : `Variable "$${variableName}" is never used.`,
                  variableDef,
                ),
              );
            }
          }
        },
      },

      VariableDefinition(def) {
        variableDefs.push(def);
      },
    };
  }

  var OverlappingFieldsCanBeMergedRule$1 = {};

  var sortValueNode$1 = {};

  Object.defineProperty(sortValueNode$1, '__esModule', {
    value: true,
  });
  sortValueNode$1.sortValueNode = sortValueNode;

  var _naturalCompare$1 = naturalCompare$1;

  var _kinds$h = kinds;

  /**
   * Sort ValueNode.
   *
   * This function returns a sorted copy of the given ValueNode.
   *
   * @internal
   */
  function sortValueNode(valueNode) {
    switch (valueNode.kind) {
      case _kinds$h.Kind.OBJECT:
        return { ...valueNode, fields: sortFields(valueNode.fields) };

      case _kinds$h.Kind.LIST:
        return { ...valueNode, values: valueNode.values.map(sortValueNode) };

      case _kinds$h.Kind.INT:
      case _kinds$h.Kind.FLOAT:
      case _kinds$h.Kind.STRING:
      case _kinds$h.Kind.BOOLEAN:
      case _kinds$h.Kind.NULL:
      case _kinds$h.Kind.ENUM:
      case _kinds$h.Kind.VARIABLE:
        return valueNode;
    }
  }

  function sortFields(fields) {
    return fields
      .map((fieldNode) => ({
        ...fieldNode,
        value: sortValueNode(fieldNode.value),
      }))
      .sort((fieldA, fieldB) =>
        (0, _naturalCompare$1.naturalCompare)(fieldA.name.value, fieldB.name.value),
      );
  }

  Object.defineProperty(OverlappingFieldsCanBeMergedRule$1, '__esModule', {
    value: true,
  });
  OverlappingFieldsCanBeMergedRule$1.OverlappingFieldsCanBeMergedRule = OverlappingFieldsCanBeMergedRule;

  var _inspect$h = inspect$1;

  var _GraphQLError$u = GraphQLError$1;

  var _kinds$g = kinds;

  var _printer$6 = printer;

  var _definition$l = definition;

  var _sortValueNode$1 = sortValueNode$1;

  var _typeFromAST$5 = typeFromAST$1;

  function reasonMessage(reason) {
    if (Array.isArray(reason)) {
      return reason
        .map(
          ([responseName, subReason]) =>
            `subfields "${responseName}" conflict because ` +
            reasonMessage(subReason),
        )
        .join(' and ');
    }

    return reason;
  }
  /**
   * Overlapping fields can be merged
   *
   * A selection set is only valid if all fields (including spreading any
   * fragments) either correspond to distinct response names or can be merged
   * without ambiguity.
   *
   * See https://spec.graphql.org/draft/#sec-Field-Selection-Merging
   */

  function OverlappingFieldsCanBeMergedRule(context) {
    // A memoization for when two fragments are compared "between" each other for
    // conflicts. Two fragments may be compared many times, so memoizing this can
    // dramatically improve the performance of this validator.
    const comparedFragmentPairs = new PairSet(); // A cache for the "field map" and list of fragment names found in any given
    // selection set. Selection sets may be asked for this information multiple
    // times, so this improves the performance of this validator.

    const cachedFieldsAndFragmentNames = new Map();
    return {
      SelectionSet(selectionSet) {
        const conflicts = findConflictsWithinSelectionSet(
          context,
          cachedFieldsAndFragmentNames,
          comparedFragmentPairs,
          context.getParentType(),
          selectionSet,
        );

        for (const [[responseName, reason], fields1, fields2] of conflicts) {
          const reasonMsg = reasonMessage(reason);
          context.reportError(
            new _GraphQLError$u.GraphQLError(
              `Fields "${responseName}" conflict because ${reasonMsg}. Use different aliases on the fields to fetch both if this was intentional.`,
              fields1.concat(fields2),
            ),
          );
        }
      },
    };
  }

  /**
   * Algorithm:
   *
   * Conflicts occur when two fields exist in a query which will produce the same
   * response name, but represent differing values, thus creating a conflict.
   * The algorithm below finds all conflicts via making a series of comparisons
   * between fields. In order to compare as few fields as possible, this makes
   * a series of comparisons "within" sets of fields and "between" sets of fields.
   *
   * Given any selection set, a collection produces both a set of fields by
   * also including all inline fragments, as well as a list of fragments
   * referenced by fragment spreads.
   *
   * A) Each selection set represented in the document first compares "within" its
   * collected set of fields, finding any conflicts between every pair of
   * overlapping fields.
   * Note: This is the *only time* that a the fields "within" a set are compared
   * to each other. After this only fields "between" sets are compared.
   *
   * B) Also, if any fragment is referenced in a selection set, then a
   * comparison is made "between" the original set of fields and the
   * referenced fragment.
   *
   * C) Also, if multiple fragments are referenced, then comparisons
   * are made "between" each referenced fragment.
   *
   * D) When comparing "between" a set of fields and a referenced fragment, first
   * a comparison is made between each field in the original set of fields and
   * each field in the the referenced set of fields.
   *
   * E) Also, if any fragment is referenced in the referenced selection set,
   * then a comparison is made "between" the original set of fields and the
   * referenced fragment (recursively referring to step D).
   *
   * F) When comparing "between" two fragments, first a comparison is made between
   * each field in the first referenced set of fields and each field in the the
   * second referenced set of fields.
   *
   * G) Also, any fragments referenced by the first must be compared to the
   * second, and any fragments referenced by the second must be compared to the
   * first (recursively referring to step F).
   *
   * H) When comparing two fields, if both have selection sets, then a comparison
   * is made "between" both selection sets, first comparing the set of fields in
   * the first selection set with the set of fields in the second.
   *
   * I) Also, if any fragment is referenced in either selection set, then a
   * comparison is made "between" the other set of fields and the
   * referenced fragment.
   *
   * J) Also, if two fragments are referenced in both selection sets, then a
   * comparison is made "between" the two fragments.
   *
   */
  // Find all conflicts found "within" a selection set, including those found
  // via spreading in fragments. Called when visiting each SelectionSet in the
  // GraphQL Document.
  function findConflictsWithinSelectionSet(
    context,
    cachedFieldsAndFragmentNames,
    comparedFragmentPairs,
    parentType,
    selectionSet,
  ) {
    const conflicts = [];
    const [fieldMap, fragmentNames] = getFieldsAndFragmentNames(
      context,
      cachedFieldsAndFragmentNames,
      parentType,
      selectionSet,
    ); // (A) Find find all conflicts "within" the fields of this selection set.
    // Note: this is the *only place* `collectConflictsWithin` is called.

    collectConflictsWithin(
      context,
      conflicts,
      cachedFieldsAndFragmentNames,
      comparedFragmentPairs,
      fieldMap,
    );

    if (fragmentNames.length !== 0) {
      // (B) Then collect conflicts between these fields and those represented by
      // each spread fragment name found.
      for (let i = 0; i < fragmentNames.length; i++) {
        collectConflictsBetweenFieldsAndFragment(
          context,
          conflicts,
          cachedFieldsAndFragmentNames,
          comparedFragmentPairs,
          false,
          fieldMap,
          fragmentNames[i],
        ); // (C) Then compare this fragment with all other fragments found in this
        // selection set to collect conflicts between fragments spread together.
        // This compares each item in the list of fragment names to every other
        // item in that same list (except for itself).

        for (let j = i + 1; j < fragmentNames.length; j++) {
          collectConflictsBetweenFragments(
            context,
            conflicts,
            cachedFieldsAndFragmentNames,
            comparedFragmentPairs,
            false,
            fragmentNames[i],
            fragmentNames[j],
          );
        }
      }
    }

    return conflicts;
  } // Collect all conflicts found between a set of fields and a fragment reference
  // including via spreading in any nested fragments.

  function collectConflictsBetweenFieldsAndFragment(
    context,
    conflicts,
    cachedFieldsAndFragmentNames,
    comparedFragmentPairs,
    areMutuallyExclusive,
    fieldMap,
    fragmentName,
  ) {
    const fragment = context.getFragment(fragmentName);

    if (!fragment) {
      return;
    }

    const [fieldMap2, referencedFragmentNames] =
      getReferencedFieldsAndFragmentNames(
        context,
        cachedFieldsAndFragmentNames,
        fragment,
      ); // Do not compare a fragment's fieldMap to itself.

    if (fieldMap === fieldMap2) {
      return;
    } // (D) First collect any conflicts between the provided collection of fields
    // and the collection of fields represented by the given fragment.

    collectConflictsBetween(
      context,
      conflicts,
      cachedFieldsAndFragmentNames,
      comparedFragmentPairs,
      areMutuallyExclusive,
      fieldMap,
      fieldMap2,
    ); // (E) Then collect any conflicts between the provided collection of fields
    // and any fragment names found in the given fragment.

    for (const referencedFragmentName of referencedFragmentNames) {
      // Memoize so two fragments are not compared for conflicts more than once.
      if (
        comparedFragmentPairs.has(
          referencedFragmentName,
          fragmentName,
          areMutuallyExclusive,
        )
      ) {
        continue;
      }

      comparedFragmentPairs.add(
        referencedFragmentName,
        fragmentName,
        areMutuallyExclusive,
      );
      collectConflictsBetweenFieldsAndFragment(
        context,
        conflicts,
        cachedFieldsAndFragmentNames,
        comparedFragmentPairs,
        areMutuallyExclusive,
        fieldMap,
        referencedFragmentName,
      );
    }
  } // Collect all conflicts found between two fragments, including via spreading in
  // any nested fragments.

  function collectConflictsBetweenFragments(
    context,
    conflicts,
    cachedFieldsAndFragmentNames,
    comparedFragmentPairs,
    areMutuallyExclusive,
    fragmentName1,
    fragmentName2,
  ) {
    // No need to compare a fragment to itself.
    if (fragmentName1 === fragmentName2) {
      return;
    } // Memoize so two fragments are not compared for conflicts more than once.

    if (
      comparedFragmentPairs.has(
        fragmentName1,
        fragmentName2,
        areMutuallyExclusive,
      )
    ) {
      return;
    }

    comparedFragmentPairs.add(fragmentName1, fragmentName2, areMutuallyExclusive);
    const fragment1 = context.getFragment(fragmentName1);
    const fragment2 = context.getFragment(fragmentName2);

    if (!fragment1 || !fragment2) {
      return;
    }

    const [fieldMap1, referencedFragmentNames1] =
      getReferencedFieldsAndFragmentNames(
        context,
        cachedFieldsAndFragmentNames,
        fragment1,
      );
    const [fieldMap2, referencedFragmentNames2] =
      getReferencedFieldsAndFragmentNames(
        context,
        cachedFieldsAndFragmentNames,
        fragment2,
      ); // (F) First, collect all conflicts between these two collections of fields
    // (not including any nested fragments).

    collectConflictsBetween(
      context,
      conflicts,
      cachedFieldsAndFragmentNames,
      comparedFragmentPairs,
      areMutuallyExclusive,
      fieldMap1,
      fieldMap2,
    ); // (G) Then collect conflicts between the first fragment and any nested
    // fragments spread in the second fragment.

    for (const referencedFragmentName2 of referencedFragmentNames2) {
      collectConflictsBetweenFragments(
        context,
        conflicts,
        cachedFieldsAndFragmentNames,
        comparedFragmentPairs,
        areMutuallyExclusive,
        fragmentName1,
        referencedFragmentName2,
      );
    } // (G) Then collect conflicts between the second fragment and any nested
    // fragments spread in the first fragment.

    for (const referencedFragmentName1 of referencedFragmentNames1) {
      collectConflictsBetweenFragments(
        context,
        conflicts,
        cachedFieldsAndFragmentNames,
        comparedFragmentPairs,
        areMutuallyExclusive,
        referencedFragmentName1,
        fragmentName2,
      );
    }
  } // Find all conflicts found between two selection sets, including those found
  // via spreading in fragments. Called when determining if conflicts exist
  // between the sub-fields of two overlapping fields.

  function findConflictsBetweenSubSelectionSets(
    context,
    cachedFieldsAndFragmentNames,
    comparedFragmentPairs,
    areMutuallyExclusive,
    parentType1,
    selectionSet1,
    parentType2,
    selectionSet2,
  ) {
    const conflicts = [];
    const [fieldMap1, fragmentNames1] = getFieldsAndFragmentNames(
      context,
      cachedFieldsAndFragmentNames,
      parentType1,
      selectionSet1,
    );
    const [fieldMap2, fragmentNames2] = getFieldsAndFragmentNames(
      context,
      cachedFieldsAndFragmentNames,
      parentType2,
      selectionSet2,
    ); // (H) First, collect all conflicts between these two collections of field.

    collectConflictsBetween(
      context,
      conflicts,
      cachedFieldsAndFragmentNames,
      comparedFragmentPairs,
      areMutuallyExclusive,
      fieldMap1,
      fieldMap2,
    ); // (I) Then collect conflicts between the first collection of fields and
    // those referenced by each fragment name associated with the second.

    for (const fragmentName2 of fragmentNames2) {
      collectConflictsBetweenFieldsAndFragment(
        context,
        conflicts,
        cachedFieldsAndFragmentNames,
        comparedFragmentPairs,
        areMutuallyExclusive,
        fieldMap1,
        fragmentName2,
      );
    } // (I) Then collect conflicts between the second collection of fields and
    // those referenced by each fragment name associated with the first.

    for (const fragmentName1 of fragmentNames1) {
      collectConflictsBetweenFieldsAndFragment(
        context,
        conflicts,
        cachedFieldsAndFragmentNames,
        comparedFragmentPairs,
        areMutuallyExclusive,
        fieldMap2,
        fragmentName1,
      );
    } // (J) Also collect conflicts between any fragment names by the first and
    // fragment names by the second. This compares each item in the first set of
    // names to each item in the second set of names.

    for (const fragmentName1 of fragmentNames1) {
      for (const fragmentName2 of fragmentNames2) {
        collectConflictsBetweenFragments(
          context,
          conflicts,
          cachedFieldsAndFragmentNames,
          comparedFragmentPairs,
          areMutuallyExclusive,
          fragmentName1,
          fragmentName2,
        );
      }
    }

    return conflicts;
  } // Collect all Conflicts "within" one collection of fields.

  function collectConflictsWithin(
    context,
    conflicts,
    cachedFieldsAndFragmentNames,
    comparedFragmentPairs,
    fieldMap,
  ) {
    // A field map is a keyed collection, where each key represents a response
    // name and the value at that key is a list of all fields which provide that
    // response name. For every response name, if there are multiple fields, they
    // must be compared to find a potential conflict.
    for (const [responseName, fields] of Object.entries(fieldMap)) {
      // This compares every field in the list to every other field in this list
      // (except to itself). If the list only has one item, nothing needs to
      // be compared.
      if (fields.length > 1) {
        for (let i = 0; i < fields.length; i++) {
          for (let j = i + 1; j < fields.length; j++) {
            const conflict = findConflict(
              context,
              cachedFieldsAndFragmentNames,
              comparedFragmentPairs,
              false, // within one collection is never mutually exclusive
              responseName,
              fields[i],
              fields[j],
            );

            if (conflict) {
              conflicts.push(conflict);
            }
          }
        }
      }
    }
  } // Collect all Conflicts between two collections of fields. This is similar to,
  // but different from the `collectConflictsWithin` function above. This check
  // assumes that `collectConflictsWithin` has already been called on each
  // provided collection of fields. This is true because this validator traverses
  // each individual selection set.

  function collectConflictsBetween(
    context,
    conflicts,
    cachedFieldsAndFragmentNames,
    comparedFragmentPairs,
    parentFieldsAreMutuallyExclusive,
    fieldMap1,
    fieldMap2,
  ) {
    // A field map is a keyed collection, where each key represents a response
    // name and the value at that key is a list of all fields which provide that
    // response name. For any response name which appears in both provided field
    // maps, each field from the first field map must be compared to every field
    // in the second field map to find potential conflicts.
    for (const [responseName, fields1] of Object.entries(fieldMap1)) {
      const fields2 = fieldMap2[responseName];

      if (fields2) {
        for (const field1 of fields1) {
          for (const field2 of fields2) {
            const conflict = findConflict(
              context,
              cachedFieldsAndFragmentNames,
              comparedFragmentPairs,
              parentFieldsAreMutuallyExclusive,
              responseName,
              field1,
              field2,
            );

            if (conflict) {
              conflicts.push(conflict);
            }
          }
        }
      }
    }
  } // Determines if there is a conflict between two particular fields, including
  // comparing their sub-fields.

  function findConflict(
    context,
    cachedFieldsAndFragmentNames,
    comparedFragmentPairs,
    parentFieldsAreMutuallyExclusive,
    responseName,
    field1,
    field2,
  ) {
    const [parentType1, node1, def1] = field1;
    const [parentType2, node2, def2] = field2; // If it is known that two fields could not possibly apply at the same
    // time, due to the parent types, then it is safe to permit them to diverge
    // in aliased field or arguments used as they will not present any ambiguity
    // by differing.
    // It is known that two parent types could never overlap if they are
    // different Object types. Interface or Union types might overlap - if not
    // in the current state of the schema, then perhaps in some future version,
    // thus may not safely diverge.

    const areMutuallyExclusive =
      parentFieldsAreMutuallyExclusive ||
      (parentType1 !== parentType2 &&
        (0, _definition$l.isObjectType)(parentType1) &&
        (0, _definition$l.isObjectType)(parentType2));

    if (!areMutuallyExclusive) {
      // Two aliases must refer to the same field.
      const name1 = node1.name.value;
      const name2 = node2.name.value;

      if (name1 !== name2) {
        return [
          [responseName, `"${name1}" and "${name2}" are different fields`],
          [node1],
          [node2],
        ];
      } // Two field calls must have the same arguments.

      if (stringifyArguments(node1) !== stringifyArguments(node2)) {
        return [
          [responseName, 'they have differing arguments'],
          [node1],
          [node2],
        ];
      }
    } // The return type for each field.

    const type1 = def1 === null || def1 === void 0 ? void 0 : def1.type;
    const type2 = def2 === null || def2 === void 0 ? void 0 : def2.type;

    if (type1 && type2 && doTypesConflict(type1, type2)) {
      return [
        [
          responseName,
          `they return conflicting types "${(0, _inspect$h.inspect)(
          type1,
        )}" and "${(0, _inspect$h.inspect)(type2)}"`,
        ],
        [node1],
        [node2],
      ];
    } // Collect and compare sub-fields. Use the same "visited fragment names" list
    // for both collections so fields in a fragment reference are never
    // compared to themselves.

    const selectionSet1 = node1.selectionSet;
    const selectionSet2 = node2.selectionSet;

    if (selectionSet1 && selectionSet2) {
      const conflicts = findConflictsBetweenSubSelectionSets(
        context,
        cachedFieldsAndFragmentNames,
        comparedFragmentPairs,
        areMutuallyExclusive,
        (0, _definition$l.getNamedType)(type1),
        selectionSet1,
        (0, _definition$l.getNamedType)(type2),
        selectionSet2,
      );
      return subfieldConflicts(conflicts, responseName, node1, node2);
    }
  }

  function stringifyArguments(fieldNode) {
    var _fieldNode$arguments;

    // FIXME https://github.com/graphql/graphql-js/issues/2203
    const args =
      /* c8 ignore next */
      (_fieldNode$arguments = fieldNode.arguments) !== null &&
      _fieldNode$arguments !== void 0
        ? _fieldNode$arguments
        : [];
    const inputObjectWithArgs = {
      kind: _kinds$g.Kind.OBJECT,
      fields: args.map((argNode) => ({
        kind: _kinds$g.Kind.OBJECT_FIELD,
        name: argNode.name,
        value: argNode.value,
      })),
    };
    return (0, _printer$6.print)(
      (0, _sortValueNode$1.sortValueNode)(inputObjectWithArgs),
    );
  } // Two types conflict if both types could not apply to a value simultaneously.
  // Composite types are ignored as their individual field types will be compared
  // later recursively. However List and Non-Null types must match.

  function doTypesConflict(type1, type2) {
    if ((0, _definition$l.isListType)(type1)) {
      return (0, _definition$l.isListType)(type2)
        ? doTypesConflict(type1.ofType, type2.ofType)
        : true;
    }

    if ((0, _definition$l.isListType)(type2)) {
      return true;
    }

    if ((0, _definition$l.isNonNullType)(type1)) {
      return (0, _definition$l.isNonNullType)(type2)
        ? doTypesConflict(type1.ofType, type2.ofType)
        : true;
    }

    if ((0, _definition$l.isNonNullType)(type2)) {
      return true;
    }

    if (
      (0, _definition$l.isLeafType)(type1) ||
      (0, _definition$l.isLeafType)(type2)
    ) {
      return type1 !== type2;
    }

    return false;
  } // Given a selection set, return the collection of fields (a mapping of response
  // name to field nodes and definitions) as well as a list of fragment names
  // referenced via fragment spreads.

  function getFieldsAndFragmentNames(
    context,
    cachedFieldsAndFragmentNames,
    parentType,
    selectionSet,
  ) {
    const cached = cachedFieldsAndFragmentNames.get(selectionSet);

    if (cached) {
      return cached;
    }

    const nodeAndDefs = Object.create(null);
    const fragmentNames = Object.create(null);

    _collectFieldsAndFragmentNames(
      context,
      parentType,
      selectionSet,
      nodeAndDefs,
      fragmentNames,
    );

    const result = [nodeAndDefs, Object.keys(fragmentNames)];
    cachedFieldsAndFragmentNames.set(selectionSet, result);
    return result;
  } // Given a reference to a fragment, return the represented collection of fields
  // as well as a list of nested fragment names referenced via fragment spreads.

  function getReferencedFieldsAndFragmentNames(
    context,
    cachedFieldsAndFragmentNames,
    fragment,
  ) {
    // Short-circuit building a type from the node if possible.
    const cached = cachedFieldsAndFragmentNames.get(fragment.selectionSet);

    if (cached) {
      return cached;
    }

    const fragmentType = (0, _typeFromAST$5.typeFromAST)(
      context.getSchema(),
      fragment.typeCondition,
    );
    return getFieldsAndFragmentNames(
      context,
      cachedFieldsAndFragmentNames,
      fragmentType,
      fragment.selectionSet,
    );
  }

  function _collectFieldsAndFragmentNames(
    context,
    parentType,
    selectionSet,
    nodeAndDefs,
    fragmentNames,
  ) {
    for (const selection of selectionSet.selections) {
      switch (selection.kind) {
        case _kinds$g.Kind.FIELD: {
          const fieldName = selection.name.value;
          let fieldDef;

          if (
            (0, _definition$l.isObjectType)(parentType) ||
            (0, _definition$l.isInterfaceType)(parentType)
          ) {
            fieldDef = parentType.getFields()[fieldName];
          }

          const responseName = selection.alias
            ? selection.alias.value
            : fieldName;

          if (!nodeAndDefs[responseName]) {
            nodeAndDefs[responseName] = [];
          }

          nodeAndDefs[responseName].push([parentType, selection, fieldDef]);
          break;
        }

        case _kinds$g.Kind.FRAGMENT_SPREAD:
          fragmentNames[selection.name.value] = true;
          break;

        case _kinds$g.Kind.INLINE_FRAGMENT: {
          const typeCondition = selection.typeCondition;
          const inlineFragmentType = typeCondition
            ? (0, _typeFromAST$5.typeFromAST)(context.getSchema(), typeCondition)
            : parentType;

          _collectFieldsAndFragmentNames(
            context,
            inlineFragmentType,
            selection.selectionSet,
            nodeAndDefs,
            fragmentNames,
          );

          break;
        }
      }
    }
  } // Given a series of Conflicts which occurred between two sub-fields, generate
  // a single Conflict.

  function subfieldConflicts(conflicts, responseName, node1, node2) {
    if (conflicts.length > 0) {
      return [
        [responseName, conflicts.map(([reason]) => reason)],
        [node1, ...conflicts.map(([, fields1]) => fields1).flat()],
        [node2, ...conflicts.map(([, , fields2]) => fields2).flat()],
      ];
    }
  }
  /**
   * A way to keep track of pairs of things when the ordering of the pair does not matter.
   */

  class PairSet {
    constructor() {
      this._data = new Map();
    }

    has(a, b, areMutuallyExclusive) {
      var _this$_data$get;

      const [key1, key2] = a < b ? [a, b] : [b, a];
      const result =
        (_this$_data$get = this._data.get(key1)) === null ||
        _this$_data$get === void 0
          ? void 0
          : _this$_data$get.get(key2);

      if (result === undefined) {
        return false;
      } // areMutuallyExclusive being false is a superset of being true, hence if
      // we want to know if this PairSet "has" these two with no exclusivity,
      // we have to ensure it was added as such.

      return areMutuallyExclusive ? true : areMutuallyExclusive === result;
    }

    add(a, b, areMutuallyExclusive) {
      const [key1, key2] = a < b ? [a, b] : [b, a];

      const map = this._data.get(key1);

      if (map === undefined) {
        this._data.set(key1, new Map([[key2, areMutuallyExclusive]]));
      } else {
        map.set(key2, areMutuallyExclusive);
      }
    }
  }

  var PossibleFragmentSpreadsRule$1 = {};

  Object.defineProperty(PossibleFragmentSpreadsRule$1, '__esModule', {
    value: true,
  });
  PossibleFragmentSpreadsRule$1.PossibleFragmentSpreadsRule = PossibleFragmentSpreadsRule;

  var _inspect$g = inspect$1;

  var _GraphQLError$t = GraphQLError$1;

  var _definition$k = definition;

  var _typeComparators$1 = typeComparators;

  var _typeFromAST$4 = typeFromAST$1;

  /**
   * Possible fragment spread
   *
   * A fragment spread is only valid if the type condition could ever possibly
   * be true: if there is a non-empty intersection of the possible parent types,
   * and possible types which pass the type condition.
   */
  function PossibleFragmentSpreadsRule(context) {
    return {
      InlineFragment(node) {
        const fragType = context.getType();
        const parentType = context.getParentType();

        if (
          (0, _definition$k.isCompositeType)(fragType) &&
          (0, _definition$k.isCompositeType)(parentType) &&
          !(0, _typeComparators$1.doTypesOverlap)(
            context.getSchema(),
            fragType,
            parentType,
          )
        ) {
          const parentTypeStr = (0, _inspect$g.inspect)(parentType);
          const fragTypeStr = (0, _inspect$g.inspect)(fragType);
          context.reportError(
            new _GraphQLError$t.GraphQLError(
              `Fragment cannot be spread here as objects of type "${parentTypeStr}" can never be of type "${fragTypeStr}".`,
              node,
            ),
          );
        }
      },

      FragmentSpread(node) {
        const fragName = node.name.value;
        const fragType = getFragmentType(context, fragName);
        const parentType = context.getParentType();

        if (
          fragType &&
          parentType &&
          !(0, _typeComparators$1.doTypesOverlap)(
            context.getSchema(),
            fragType,
            parentType,
          )
        ) {
          const parentTypeStr = (0, _inspect$g.inspect)(parentType);
          const fragTypeStr = (0, _inspect$g.inspect)(fragType);
          context.reportError(
            new _GraphQLError$t.GraphQLError(
              `Fragment "${fragName}" cannot be spread here as objects of type "${parentTypeStr}" can never be of type "${fragTypeStr}".`,
              node,
            ),
          );
        }
      },
    };
  }

  function getFragmentType(context, name) {
    const frag = context.getFragment(name);

    if (frag) {
      const type = (0, _typeFromAST$4.typeFromAST)(
        context.getSchema(),
        frag.typeCondition,
      );

      if ((0, _definition$k.isCompositeType)(type)) {
        return type;
      }
    }
  }

  var PossibleTypeExtensionsRule$1 = {};

  Object.defineProperty(PossibleTypeExtensionsRule$1, '__esModule', {
    value: true,
  });
  PossibleTypeExtensionsRule$1.PossibleTypeExtensionsRule = PossibleTypeExtensionsRule;

  var _didYouMean$2 = didYouMean$1;

  var _inspect$f = inspect$1;

  var _invariant$a = invariant$1;

  var _suggestionList$2 = suggestionList$1;

  var _GraphQLError$s = GraphQLError$1;

  var _kinds$f = kinds;

  var _predicates$2 = predicates;

  var _definition$j = definition;

  /**
   * Possible type extension
   *
   * A type extension is only valid if the type is defined and has the same kind.
   */
  function PossibleTypeExtensionsRule(context) {
    const schema = context.getSchema();
    const definedTypes = Object.create(null);

    for (const def of context.getDocument().definitions) {
      if ((0, _predicates$2.isTypeDefinitionNode)(def)) {
        definedTypes[def.name.value] = def;
      }
    }

    return {
      ScalarTypeExtension: checkExtension,
      ObjectTypeExtension: checkExtension,
      InterfaceTypeExtension: checkExtension,
      UnionTypeExtension: checkExtension,
      EnumTypeExtension: checkExtension,
      InputObjectTypeExtension: checkExtension,
    };

    function checkExtension(node) {
      const typeName = node.name.value;
      const defNode = definedTypes[typeName];
      const existingType =
        schema === null || schema === void 0 ? void 0 : schema.getType(typeName);
      let expectedKind;

      if (defNode) {
        expectedKind = defKindToExtKind[defNode.kind];
      } else if (existingType) {
        expectedKind = typeToExtKind(existingType);
      }

      if (expectedKind) {
        if (expectedKind !== node.kind) {
          const kindStr = extensionKindToTypeName(node.kind);
          context.reportError(
            new _GraphQLError$s.GraphQLError(
              `Cannot extend non-${kindStr} type "${typeName}".`,
              defNode ? [defNode, node] : node,
            ),
          );
        }
      } else {
        const allTypeNames = Object.keys({
          ...definedTypes,
          ...(schema === null || schema === void 0
            ? void 0
            : schema.getTypeMap()),
        });
        const suggestedTypes = (0, _suggestionList$2.suggestionList)(
          typeName,
          allTypeNames,
        );
        context.reportError(
          new _GraphQLError$s.GraphQLError(
            `Cannot extend type "${typeName}" because it is not defined.` +
              (0, _didYouMean$2.didYouMean)(suggestedTypes),
            node.name,
          ),
        );
      }
    }
  }

  const defKindToExtKind = {
    [_kinds$f.Kind.SCALAR_TYPE_DEFINITION]: _kinds$f.Kind.SCALAR_TYPE_EXTENSION,
    [_kinds$f.Kind.OBJECT_TYPE_DEFINITION]: _kinds$f.Kind.OBJECT_TYPE_EXTENSION,
    [_kinds$f.Kind.INTERFACE_TYPE_DEFINITION]: _kinds$f.Kind.INTERFACE_TYPE_EXTENSION,
    [_kinds$f.Kind.UNION_TYPE_DEFINITION]: _kinds$f.Kind.UNION_TYPE_EXTENSION,
    [_kinds$f.Kind.ENUM_TYPE_DEFINITION]: _kinds$f.Kind.ENUM_TYPE_EXTENSION,
    [_kinds$f.Kind.INPUT_OBJECT_TYPE_DEFINITION]:
      _kinds$f.Kind.INPUT_OBJECT_TYPE_EXTENSION,
  };

  function typeToExtKind(type) {
    if ((0, _definition$j.isScalarType)(type)) {
      return _kinds$f.Kind.SCALAR_TYPE_EXTENSION;
    }

    if ((0, _definition$j.isObjectType)(type)) {
      return _kinds$f.Kind.OBJECT_TYPE_EXTENSION;
    }

    if ((0, _definition$j.isInterfaceType)(type)) {
      return _kinds$f.Kind.INTERFACE_TYPE_EXTENSION;
    }

    if ((0, _definition$j.isUnionType)(type)) {
      return _kinds$f.Kind.UNION_TYPE_EXTENSION;
    }

    if ((0, _definition$j.isEnumType)(type)) {
      return _kinds$f.Kind.ENUM_TYPE_EXTENSION;
    }

    if ((0, _definition$j.isInputObjectType)(type)) {
      return _kinds$f.Kind.INPUT_OBJECT_TYPE_EXTENSION;
    }
    /* c8 ignore next 3 */
    // Not reachable. All possible types have been considered

    (0, _invariant$a.invariant)(
        false,
        'Unexpected type: ' + (0, _inspect$f.inspect)(type),
      );
  }

  function extensionKindToTypeName(kind) {
    switch (kind) {
      case _kinds$f.Kind.SCALAR_TYPE_EXTENSION:
        return 'scalar';

      case _kinds$f.Kind.OBJECT_TYPE_EXTENSION:
        return 'object';

      case _kinds$f.Kind.INTERFACE_TYPE_EXTENSION:
        return 'interface';

      case _kinds$f.Kind.UNION_TYPE_EXTENSION:
        return 'union';

      case _kinds$f.Kind.ENUM_TYPE_EXTENSION:
        return 'enum';

      case _kinds$f.Kind.INPUT_OBJECT_TYPE_EXTENSION:
        return 'input object';
      // Not reachable. All possible types have been considered

      /* c8 ignore next */

      default:
        (0, _invariant$a.invariant)(
            false,
            'Unexpected kind: ' + (0, _inspect$f.inspect)(kind),
          );
    }
  }

  var ProvidedRequiredArgumentsRule$1 = {};

  Object.defineProperty(ProvidedRequiredArgumentsRule$1, '__esModule', {
    value: true,
  });
  ProvidedRequiredArgumentsRule$1.ProvidedRequiredArgumentsOnDirectivesRule =
    ProvidedRequiredArgumentsOnDirectivesRule;
  ProvidedRequiredArgumentsRule$1.ProvidedRequiredArgumentsRule = ProvidedRequiredArgumentsRule;

  var _inspect$e = inspect$1;

  var _keyMap$5 = keyMap$1;

  var _GraphQLError$r = GraphQLError$1;

  var _kinds$e = kinds;

  var _printer$5 = printer;

  var _definition$i = definition;

  var _directives$7 = directives;

  /**
   * Provided required arguments
   *
   * A field or directive is only valid if all required (non-null without a
   * default value) field arguments have been provided.
   */
  function ProvidedRequiredArgumentsRule(context) {
    return {
      // eslint-disable-next-line new-cap
      ...ProvidedRequiredArgumentsOnDirectivesRule(context),
      Field: {
        // Validate on leave to allow for deeper errors to appear first.
        leave(fieldNode) {
          var _fieldNode$arguments;

          const fieldDef = context.getFieldDef();

          if (!fieldDef) {
            return false;
          }

          const providedArgs = new Set( // FIXME: https://github.com/graphql/graphql-js/issues/2203
            /* c8 ignore next */
            (_fieldNode$arguments = fieldNode.arguments) === null ||
            _fieldNode$arguments === void 0
              ? void 0
              : _fieldNode$arguments.map((arg) => arg.name.value),
          );

          for (const argDef of fieldDef.args) {
            if (
              !providedArgs.has(argDef.name) &&
              (0, _definition$i.isRequiredArgument)(argDef)
            ) {
              const argTypeStr = (0, _inspect$e.inspect)(argDef.type);
              context.reportError(
                new _GraphQLError$r.GraphQLError(
                  `Field "${fieldDef.name}" argument "${argDef.name}" of type "${argTypeStr}" is required, but it was not provided.`,
                  fieldNode,
                ),
              );
            }
          }
        },
      },
    };
  }
  /**
   * @internal
   */

  function ProvidedRequiredArgumentsOnDirectivesRule(context) {
    var _schema$getDirectives;

    const requiredArgsMap = Object.create(null);
    const schema = context.getSchema();
    const definedDirectives =
      (_schema$getDirectives =
        schema === null || schema === void 0
          ? void 0
          : schema.getDirectives()) !== null && _schema$getDirectives !== void 0
        ? _schema$getDirectives
        : _directives$7.specifiedDirectives;

    for (const directive of definedDirectives) {
      requiredArgsMap[directive.name] = (0, _keyMap$5.keyMap)(
        directive.args.filter(_definition$i.isRequiredArgument),
        (arg) => arg.name,
      );
    }

    const astDefinitions = context.getDocument().definitions;

    for (const def of astDefinitions) {
      if (def.kind === _kinds$e.Kind.DIRECTIVE_DEFINITION) {
        var _def$arguments;

        // FIXME: https://github.com/graphql/graphql-js/issues/2203

        /* c8 ignore next */
        const argNodes =
          (_def$arguments = def.arguments) !== null && _def$arguments !== void 0
            ? _def$arguments
            : [];
        requiredArgsMap[def.name.value] = (0, _keyMap$5.keyMap)(
          argNodes.filter(isRequiredArgumentNode),
          (arg) => arg.name.value,
        );
      }
    }

    return {
      Directive: {
        // Validate on leave to allow for deeper errors to appear first.
        leave(directiveNode) {
          const directiveName = directiveNode.name.value;
          const requiredArgs = requiredArgsMap[directiveName];

          if (requiredArgs) {
            var _directiveNode$argume;

            // FIXME: https://github.com/graphql/graphql-js/issues/2203

            /* c8 ignore next */
            const argNodes =
              (_directiveNode$argume = directiveNode.arguments) !== null &&
              _directiveNode$argume !== void 0
                ? _directiveNode$argume
                : [];
            const argNodeMap = new Set(argNodes.map((arg) => arg.name.value));

            for (const [argName, argDef] of Object.entries(requiredArgs)) {
              if (!argNodeMap.has(argName)) {
                const argType = (0, _definition$i.isType)(argDef.type)
                  ? (0, _inspect$e.inspect)(argDef.type)
                  : (0, _printer$5.print)(argDef.type);
                context.reportError(
                  new _GraphQLError$r.GraphQLError(
                    `Directive "@${directiveName}" argument "${argName}" of type "${argType}" is required, but it was not provided.`,
                    directiveNode,
                  ),
                );
              }
            }
          }
        },
      },
    };
  }

  function isRequiredArgumentNode(arg) {
    return (
      arg.type.kind === _kinds$e.Kind.NON_NULL_TYPE && arg.defaultValue == null
    );
  }

  var ScalarLeafsRule$1 = {};

  Object.defineProperty(ScalarLeafsRule$1, '__esModule', {
    value: true,
  });
  ScalarLeafsRule$1.ScalarLeafsRule = ScalarLeafsRule;

  var _inspect$d = inspect$1;

  var _GraphQLError$q = GraphQLError$1;

  var _definition$h = definition;

  /**
   * Scalar leafs
   *
   * A GraphQL document is valid only if all leaf fields (fields without
   * sub selections) are of scalar or enum types.
   */
  function ScalarLeafsRule(context) {
    return {
      Field(node) {
        const type = context.getType();
        const selectionSet = node.selectionSet;

        if (type) {
          if ((0, _definition$h.isLeafType)((0, _definition$h.getNamedType)(type))) {
            if (selectionSet) {
              const fieldName = node.name.value;
              const typeStr = (0, _inspect$d.inspect)(type);
              context.reportError(
                new _GraphQLError$q.GraphQLError(
                  `Field "${fieldName}" must not have a selection since type "${typeStr}" has no subfields.`,
                  selectionSet,
                ),
              );
            }
          } else if (!selectionSet) {
            const fieldName = node.name.value;
            const typeStr = (0, _inspect$d.inspect)(type);
            context.reportError(
              new _GraphQLError$q.GraphQLError(
                `Field "${fieldName}" of type "${typeStr}" must have a selection of subfields. Did you mean "${fieldName} { ... }"?`,
                node,
              ),
            );
          }
        }
      },
    };
  }

  var SingleFieldSubscriptionsRule$1 = {};

  var collectFields$1 = {};

  var values = {};

  var printPathArray$1 = {};

  Object.defineProperty(printPathArray$1, '__esModule', {
    value: true,
  });
  printPathArray$1.printPathArray = printPathArray;

  /**
   * Build a string describing the path.
   */
  function printPathArray(path) {
    return path
      .map((key) =>
        typeof key === 'number' ? '[' + key.toString() + ']' : '.' + key,
      )
      .join('');
  }

  var coerceInputValue$1 = {};

  var Path = {};

  Object.defineProperty(Path, '__esModule', {
    value: true,
  });
  Path.addPath = addPath;
  Path.pathToArray = pathToArray;

  /**
   * Given a Path and a key, return a new Path containing the new key.
   */
  function addPath(prev, key, typename) {
    return {
      prev,
      key,
      typename,
    };
  }
  /**
   * Given a Path, return an Array of the path keys.
   */

  function pathToArray(path) {
    const flattened = [];
    let curr = path;

    while (curr) {
      flattened.push(curr.key);
      curr = curr.prev;
    }

    return flattened.reverse();
  }

  Object.defineProperty(coerceInputValue$1, '__esModule', {
    value: true,
  });
  coerceInputValue$1.coerceInputValue = coerceInputValue;

  var _didYouMean$1 = didYouMean$1;

  var _inspect$c = inspect$1;

  var _invariant$9 = invariant$1;

  var _isIterableObject$1 = isIterableObject$1;

  var _isObjectLike$2 = isObjectLike$1;

  var _Path$2 = Path;

  var _printPathArray$1 = printPathArray$1;

  var _suggestionList$1 = suggestionList$1;

  var _GraphQLError$p = GraphQLError$1;

  var _definition$g = definition;

  /**
   * Coerces a JavaScript value given a GraphQL Input Type.
   */
  function coerceInputValue(inputValue, type, onError = defaultOnError) {
    return coerceInputValueImpl(inputValue, type, onError, undefined);
  }

  function defaultOnError(path, invalidValue, error) {
    let errorPrefix = 'Invalid value ' + (0, _inspect$c.inspect)(invalidValue);

    if (path.length > 0) {
      errorPrefix += ` at "value${(0, _printPathArray$1.printPathArray)(path)}"`;
    }

    error.message = errorPrefix + ': ' + error.message;
    throw error;
  }

  function coerceInputValueImpl(inputValue, type, onError, path) {
    if ((0, _definition$g.isNonNullType)(type)) {
      if (inputValue != null) {
        return coerceInputValueImpl(inputValue, type.ofType, onError, path);
      }

      onError(
        (0, _Path$2.pathToArray)(path),
        inputValue,
        new _GraphQLError$p.GraphQLError(
          `Expected non-nullable type "${(0, _inspect$c.inspect)(
          type,
        )}" not to be null.`,
        ),
      );
      return;
    }

    if (inputValue == null) {
      // Explicitly return the value null.
      return null;
    }

    if ((0, _definition$g.isListType)(type)) {
      const itemType = type.ofType;

      if ((0, _isIterableObject$1.isIterableObject)(inputValue)) {
        return Array.from(inputValue, (itemValue, index) => {
          const itemPath = (0, _Path$2.addPath)(path, index, undefined);
          return coerceInputValueImpl(itemValue, itemType, onError, itemPath);
        });
      } // Lists accept a non-list value as a list of one.

      return [coerceInputValueImpl(inputValue, itemType, onError, path)];
    }

    if ((0, _definition$g.isInputObjectType)(type)) {
      if (!(0, _isObjectLike$2.isObjectLike)(inputValue)) {
        onError(
          (0, _Path$2.pathToArray)(path),
          inputValue,
          new _GraphQLError$p.GraphQLError(
            `Expected type "${type.name}" to be an object.`,
          ),
        );
        return;
      }

      const coercedValue = {};
      const fieldDefs = type.getFields();

      for (const field of Object.values(fieldDefs)) {
        const fieldValue = inputValue[field.name];

        if (fieldValue === undefined) {
          if (field.defaultValue !== undefined) {
            coercedValue[field.name] = field.defaultValue;
          } else if ((0, _definition$g.isNonNullType)(field.type)) {
            const typeStr = (0, _inspect$c.inspect)(field.type);
            onError(
              (0, _Path$2.pathToArray)(path),
              inputValue,
              new _GraphQLError$p.GraphQLError(
                `Field "${field.name}" of required type "${typeStr}" was not provided.`,
              ),
            );
          }

          continue;
        }

        coercedValue[field.name] = coerceInputValueImpl(
          fieldValue,
          field.type,
          onError,
          (0, _Path$2.addPath)(path, field.name, type.name),
        );
      } // Ensure every provided field is defined.

      for (const fieldName of Object.keys(inputValue)) {
        if (!fieldDefs[fieldName]) {
          const suggestions = (0, _suggestionList$1.suggestionList)(
            fieldName,
            Object.keys(type.getFields()),
          );
          onError(
            (0, _Path$2.pathToArray)(path),
            inputValue,
            new _GraphQLError$p.GraphQLError(
              `Field "${fieldName}" is not defined by type "${type.name}".` +
                (0, _didYouMean$1.didYouMean)(suggestions),
            ),
          );
        }
      }

      return coercedValue;
    }

    if ((0, _definition$g.isLeafType)(type)) {
      let parseResult; // Scalars and Enums determine if a input value is valid via parseValue(),
      // which can throw to indicate failure. If it throws, maintain a reference
      // to the original error.

      try {
        parseResult = type.parseValue(inputValue);
      } catch (error) {
        if (error instanceof _GraphQLError$p.GraphQLError) {
          onError((0, _Path$2.pathToArray)(path), inputValue, error);
        } else {
          onError(
            (0, _Path$2.pathToArray)(path),
            inputValue,
            new _GraphQLError$p.GraphQLError(
              `Expected type "${type.name}". ` + error.message,
              undefined,
              undefined,
              undefined,
              undefined,
              error,
            ),
          );
        }

        return;
      }

      if (parseResult === undefined) {
        onError(
          (0, _Path$2.pathToArray)(path),
          inputValue,
          new _GraphQLError$p.GraphQLError(`Expected type "${type.name}".`),
        );
      }

      return parseResult;
    }
    /* c8 ignore next 3 */
    // Not reachable, all possible types have been considered.

    (0, _invariant$9.invariant)(
        false,
        'Unexpected input type: ' + (0, _inspect$c.inspect)(type),
      );
  }

  var valueFromAST$1 = {};

  Object.defineProperty(valueFromAST$1, '__esModule', {
    value: true,
  });
  valueFromAST$1.valueFromAST = valueFromAST;

  var _inspect$b = inspect$1;

  var _invariant$8 = invariant$1;

  var _keyMap$4 = keyMap$1;

  var _kinds$d = kinds;

  var _definition$f = definition;

  /**
   * Produces a JavaScript value given a GraphQL Value AST.
   *
   * A GraphQL type must be provided, which will be used to interpret different
   * GraphQL Value literals.
   *
   * Returns `undefined` when the value could not be validly coerced according to
   * the provided type.
   *
   * | GraphQL Value        | JSON Value    |
   * | -------------------- | ------------- |
   * | Input Object         | Object        |
   * | List                 | Array         |
   * | Boolean              | Boolean       |
   * | String               | String        |
   * | Int / Float          | Number        |
   * | Enum Value           | Unknown       |
   * | NullValue            | null          |
   *
   */
  function valueFromAST(valueNode, type, variables) {
    if (!valueNode) {
      // When there is no node, then there is also no value.
      // Importantly, this is different from returning the value null.
      return;
    }

    if (valueNode.kind === _kinds$d.Kind.VARIABLE) {
      const variableName = valueNode.name.value;

      if (variables == null || variables[variableName] === undefined) {
        // No valid return value.
        return;
      }

      const variableValue = variables[variableName];

      if (variableValue === null && (0, _definition$f.isNonNullType)(type)) {
        return; // Invalid: intentionally return no value.
      } // Note: This does no further checking that this variable is correct.
      // This assumes that this query has been validated and the variable
      // usage here is of the correct type.

      return variableValue;
    }

    if ((0, _definition$f.isNonNullType)(type)) {
      if (valueNode.kind === _kinds$d.Kind.NULL) {
        return; // Invalid: intentionally return no value.
      }

      return valueFromAST(valueNode, type.ofType, variables);
    }

    if (valueNode.kind === _kinds$d.Kind.NULL) {
      // This is explicitly returning the value null.
      return null;
    }

    if ((0, _definition$f.isListType)(type)) {
      const itemType = type.ofType;

      if (valueNode.kind === _kinds$d.Kind.LIST) {
        const coercedValues = [];

        for (const itemNode of valueNode.values) {
          if (isMissingVariable(itemNode, variables)) {
            // If an array contains a missing variable, it is either coerced to
            // null or if the item type is non-null, it considered invalid.
            if ((0, _definition$f.isNonNullType)(itemType)) {
              return; // Invalid: intentionally return no value.
            }

            coercedValues.push(null);
          } else {
            const itemValue = valueFromAST(itemNode, itemType, variables);

            if (itemValue === undefined) {
              return; // Invalid: intentionally return no value.
            }

            coercedValues.push(itemValue);
          }
        }

        return coercedValues;
      }

      const coercedValue = valueFromAST(valueNode, itemType, variables);

      if (coercedValue === undefined) {
        return; // Invalid: intentionally return no value.
      }

      return [coercedValue];
    }

    if ((0, _definition$f.isInputObjectType)(type)) {
      if (valueNode.kind !== _kinds$d.Kind.OBJECT) {
        return; // Invalid: intentionally return no value.
      }

      const coercedObj = Object.create(null);
      const fieldNodes = (0, _keyMap$4.keyMap)(
        valueNode.fields,
        (field) => field.name.value,
      );

      for (const field of Object.values(type.getFields())) {
        const fieldNode = fieldNodes[field.name];

        if (!fieldNode || isMissingVariable(fieldNode.value, variables)) {
          if (field.defaultValue !== undefined) {
            coercedObj[field.name] = field.defaultValue;
          } else if ((0, _definition$f.isNonNullType)(field.type)) {
            return; // Invalid: intentionally return no value.
          }

          continue;
        }

        const fieldValue = valueFromAST(fieldNode.value, field.type, variables);

        if (fieldValue === undefined) {
          return; // Invalid: intentionally return no value.
        }

        coercedObj[field.name] = fieldValue;
      }

      return coercedObj;
    }

    if ((0, _definition$f.isLeafType)(type)) {
      // Scalars and Enums fulfill parsing a literal value via parseLiteral().
      // Invalid values represent a failure to parse correctly, in which case
      // no value is returned.
      let result;

      try {
        result = type.parseLiteral(valueNode, variables);
      } catch (_error) {
        return; // Invalid: intentionally return no value.
      }

      if (result === undefined) {
        return; // Invalid: intentionally return no value.
      }

      return result;
    }
    /* c8 ignore next 3 */
    // Not reachable, all possible input types have been considered.

    (0, _invariant$8.invariant)(
        false,
        'Unexpected input type: ' + (0, _inspect$b.inspect)(type),
      );
  } // Returns true if the provided valueNode is a variable which is not defined
  // in the set of variables.

  function isMissingVariable(valueNode, variables) {
    return (
      valueNode.kind === _kinds$d.Kind.VARIABLE &&
      (variables == null || variables[valueNode.name.value] === undefined)
    );
  }

  Object.defineProperty(values, '__esModule', {
    value: true,
  });
  values.getArgumentValues = getArgumentValues;
  values.getDirectiveValues = getDirectiveValues;
  values.getVariableValues = getVariableValues;

  var _inspect$a = inspect$1;

  var _keyMap$3 = keyMap$1;

  var _printPathArray = printPathArray$1;

  var _GraphQLError$o = GraphQLError$1;

  var _kinds$c = kinds;

  var _printer$4 = printer;

  var _definition$e = definition;

  var _coerceInputValue = coerceInputValue$1;

  var _typeFromAST$3 = typeFromAST$1;

  var _valueFromAST$2 = valueFromAST$1;

  /**
   * Prepares an object map of variableValues of the correct type based on the
   * provided variable definitions and arbitrary input. If the input cannot be
   * parsed to match the variable definitions, a GraphQLError will be thrown.
   *
   * Note: The returned value is a plain Object with a prototype, since it is
   * exposed to user code. Care should be taken to not pull values from the
   * Object prototype.
   */
  function getVariableValues(schema, varDefNodes, inputs, options) {
    const errors = [];
    const maxErrors =
      options === null || options === void 0 ? void 0 : options.maxErrors;

    try {
      const coerced = coerceVariableValues(
        schema,
        varDefNodes,
        inputs,
        (error) => {
          if (maxErrors != null && errors.length >= maxErrors) {
            throw new _GraphQLError$o.GraphQLError(
              'Too many errors processing variables, error limit reached. Execution aborted.',
            );
          }

          errors.push(error);
        },
      );

      if (errors.length === 0) {
        return {
          coerced,
        };
      }
    } catch (error) {
      errors.push(error);
    }

    return {
      errors,
    };
  }

  function coerceVariableValues(schema, varDefNodes, inputs, onError) {
    const coercedValues = {};

    for (const varDefNode of varDefNodes) {
      const varName = varDefNode.variable.name.value;
      const varType = (0, _typeFromAST$3.typeFromAST)(schema, varDefNode.type);

      if (!(0, _definition$e.isInputType)(varType)) {
        // Must use input types for variables. This should be caught during
        // validation, however is checked again here for safety.
        const varTypeStr = (0, _printer$4.print)(varDefNode.type);
        onError(
          new _GraphQLError$o.GraphQLError(
            `Variable "$${varName}" expected value of type "${varTypeStr}" which cannot be used as an input type.`,
            varDefNode.type,
          ),
        );
        continue;
      }

      if (!hasOwnProperty(inputs, varName)) {
        if (varDefNode.defaultValue) {
          coercedValues[varName] = (0, _valueFromAST$2.valueFromAST)(
            varDefNode.defaultValue,
            varType,
          );
        } else if ((0, _definition$e.isNonNullType)(varType)) {
          const varTypeStr = (0, _inspect$a.inspect)(varType);
          onError(
            new _GraphQLError$o.GraphQLError(
              `Variable "$${varName}" of required type "${varTypeStr}" was not provided.`,
              varDefNode,
            ),
          );
        }

        continue;
      }

      const value = inputs[varName];

      if (value === null && (0, _definition$e.isNonNullType)(varType)) {
        const varTypeStr = (0, _inspect$a.inspect)(varType);
        onError(
          new _GraphQLError$o.GraphQLError(
            `Variable "$${varName}" of non-null type "${varTypeStr}" must not be null.`,
            varDefNode,
          ),
        );
        continue;
      }

      coercedValues[varName] = (0, _coerceInputValue.coerceInputValue)(
        value,
        varType,
        (path, invalidValue, error) => {
          let prefix =
            `Variable "$${varName}" got invalid value ` +
            (0, _inspect$a.inspect)(invalidValue);

          if (path.length > 0) {
            prefix += ` at "${varName}${(0, _printPathArray.printPathArray)(
            path,
          )}"`;
          }

          onError(
            new _GraphQLError$o.GraphQLError(
              prefix + '; ' + error.message,
              varDefNode,
              undefined,
              undefined,
              undefined,
              error.originalError,
            ),
          );
        },
      );
    }

    return coercedValues;
  }
  /**
   * Prepares an object map of argument values given a list of argument
   * definitions and list of argument AST nodes.
   *
   * Note: The returned value is a plain Object with a prototype, since it is
   * exposed to user code. Care should be taken to not pull values from the
   * Object prototype.
   *
   * @internal
   */

  function getArgumentValues(def, node, variableValues) {
    var _node$arguments;

    const coercedValues = {}; // FIXME: https://github.com/graphql/graphql-js/issues/2203

    /* c8 ignore next */

    const argumentNodes =
      (_node$arguments = node.arguments) !== null && _node$arguments !== void 0
        ? _node$arguments
        : [];
    const argNodeMap = (0, _keyMap$3.keyMap)(
      argumentNodes,
      (arg) => arg.name.value,
    );

    for (const argDef of def.args) {
      const name = argDef.name;
      const argType = argDef.type;
      const argumentNode = argNodeMap[name];

      if (!argumentNode) {
        if (argDef.defaultValue !== undefined) {
          coercedValues[name] = argDef.defaultValue;
        } else if ((0, _definition$e.isNonNullType)(argType)) {
          throw new _GraphQLError$o.GraphQLError(
            `Argument "${name}" of required type "${(0, _inspect$a.inspect)(
            argType,
          )}" ` + 'was not provided.',
            node,
          );
        }

        continue;
      }

      const valueNode = argumentNode.value;
      let isNull = valueNode.kind === _kinds$c.Kind.NULL;

      if (valueNode.kind === _kinds$c.Kind.VARIABLE) {
        const variableName = valueNode.name.value;

        if (
          variableValues == null ||
          !hasOwnProperty(variableValues, variableName)
        ) {
          if (argDef.defaultValue !== undefined) {
            coercedValues[name] = argDef.defaultValue;
          } else if ((0, _definition$e.isNonNullType)(argType)) {
            throw new _GraphQLError$o.GraphQLError(
              `Argument "${name}" of required type "${(0, _inspect$a.inspect)(
              argType,
            )}" ` +
                `was provided the variable "$${variableName}" which was not provided a runtime value.`,
              valueNode,
            );
          }

          continue;
        }

        isNull = variableValues[variableName] == null;
      }

      if (isNull && (0, _definition$e.isNonNullType)(argType)) {
        throw new _GraphQLError$o.GraphQLError(
          `Argument "${name}" of non-null type "${(0, _inspect$a.inspect)(
          argType,
        )}" ` + 'must not be null.',
          valueNode,
        );
      }

      const coercedValue = (0, _valueFromAST$2.valueFromAST)(
        valueNode,
        argType,
        variableValues,
      );

      if (coercedValue === undefined) {
        // Note: ValuesOfCorrectTypeRule validation should catch this before
        // execution. This is a runtime check to ensure execution does not
        // continue with an invalid argument value.
        throw new _GraphQLError$o.GraphQLError(
          `Argument "${name}" has invalid value ${(0, _printer$4.print)(
          valueNode,
        )}.`,
          valueNode,
        );
      }

      coercedValues[name] = coercedValue;
    }

    return coercedValues;
  }
  /**
   * Prepares an object map of argument values given a directive definition
   * and a AST node which may contain directives. Optionally also accepts a map
   * of variable values.
   *
   * If the directive does not exist on the node, returns undefined.
   *
   * Note: The returned value is a plain Object with a prototype, since it is
   * exposed to user code. Care should be taken to not pull values from the
   * Object prototype.
   */

  function getDirectiveValues(directiveDef, node, variableValues) {
    var _node$directives;

    const directiveNode =
      (_node$directives = node.directives) === null || _node$directives === void 0
        ? void 0
        : _node$directives.find(
            (directive) => directive.name.value === directiveDef.name,
          );

    if (directiveNode) {
      return getArgumentValues(directiveDef, directiveNode, variableValues);
    }
  }

  function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }

  Object.defineProperty(collectFields$1, '__esModule', {
    value: true,
  });
  collectFields$1.collectFields = collectFields;
  collectFields$1.collectSubfields = collectSubfields$1;

  var _kinds$b = kinds;

  var _definition$d = definition;

  var _directives$6 = directives;

  var _typeFromAST$2 = typeFromAST$1;

  var _values$3 = values;

  /**
   * Given a selectionSet, collects all of the fields and returns them.
   *
   * CollectFields requires the "runtime type" of an object. For a field that
   * returns an Interface or Union type, the "runtime type" will be the actual
   * object type returned by that field.
   *
   * @internal
   */
  function collectFields(
    schema,
    fragments,
    variableValues,
    runtimeType,
    selectionSet,
  ) {
    const fields = new Map();
    collectFieldsImpl(
      schema,
      fragments,
      variableValues,
      runtimeType,
      selectionSet,
      fields,
      new Set(),
    );
    return fields;
  }
  /**
   * Given an array of field nodes, collects all of the subfields of the passed
   * in fields, and returns them at the end.
   *
   * CollectSubFields requires the "return type" of an object. For a field that
   * returns an Interface or Union type, the "return type" will be the actual
   * object type returned by that field.
   *
   * @internal
   */

  function collectSubfields$1(
    schema,
    fragments,
    variableValues,
    returnType,
    fieldNodes,
  ) {
    const subFieldNodes = new Map();
    const visitedFragmentNames = new Set();

    for (const node of fieldNodes) {
      if (node.selectionSet) {
        collectFieldsImpl(
          schema,
          fragments,
          variableValues,
          returnType,
          node.selectionSet,
          subFieldNodes,
          visitedFragmentNames,
        );
      }
    }

    return subFieldNodes;
  }

  function collectFieldsImpl(
    schema,
    fragments,
    variableValues,
    runtimeType,
    selectionSet,
    fields,
    visitedFragmentNames,
  ) {
    for (const selection of selectionSet.selections) {
      switch (selection.kind) {
        case _kinds$b.Kind.FIELD: {
          if (!shouldIncludeNode(variableValues, selection)) {
            continue;
          }

          const name = getFieldEntryKey(selection);
          const fieldList = fields.get(name);

          if (fieldList !== undefined) {
            fieldList.push(selection);
          } else {
            fields.set(name, [selection]);
          }

          break;
        }

        case _kinds$b.Kind.INLINE_FRAGMENT: {
          if (
            !shouldIncludeNode(variableValues, selection) ||
            !doesFragmentConditionMatch(schema, selection, runtimeType)
          ) {
            continue;
          }

          collectFieldsImpl(
            schema,
            fragments,
            variableValues,
            runtimeType,
            selection.selectionSet,
            fields,
            visitedFragmentNames,
          );
          break;
        }

        case _kinds$b.Kind.FRAGMENT_SPREAD: {
          const fragName = selection.name.value;

          if (
            visitedFragmentNames.has(fragName) ||
            !shouldIncludeNode(variableValues, selection)
          ) {
            continue;
          }

          visitedFragmentNames.add(fragName);
          const fragment = fragments[fragName];

          if (
            !fragment ||
            !doesFragmentConditionMatch(schema, fragment, runtimeType)
          ) {
            continue;
          }

          collectFieldsImpl(
            schema,
            fragments,
            variableValues,
            runtimeType,
            fragment.selectionSet,
            fields,
            visitedFragmentNames,
          );
          break;
        }
      }
    }
  }
  /**
   * Determines if a field should be included based on the `@include` and `@skip`
   * directives, where `@skip` has higher precedence than `@include`.
   */

  function shouldIncludeNode(variableValues, node) {
    const skip = (0, _values$3.getDirectiveValues)(
      _directives$6.GraphQLSkipDirective,
      node,
      variableValues,
    );

    if ((skip === null || skip === void 0 ? void 0 : skip.if) === true) {
      return false;
    }

    const include = (0, _values$3.getDirectiveValues)(
      _directives$6.GraphQLIncludeDirective,
      node,
      variableValues,
    );

    if (
      (include === null || include === void 0 ? void 0 : include.if) === false
    ) {
      return false;
    }

    return true;
  }
  /**
   * Determines if a fragment is applicable to the given type.
   */

  function doesFragmentConditionMatch(schema, fragment, type) {
    const typeConditionNode = fragment.typeCondition;

    if (!typeConditionNode) {
      return true;
    }

    const conditionalType = (0, _typeFromAST$2.typeFromAST)(
      schema,
      typeConditionNode,
    );

    if (conditionalType === type) {
      return true;
    }

    if ((0, _definition$d.isAbstractType)(conditionalType)) {
      return schema.isSubType(conditionalType, type);
    }

    return false;
  }
  /**
   * Implements the logic to compute the key of a given field's entry
   */

  function getFieldEntryKey(node) {
    return node.alias ? node.alias.value : node.name.value;
  }

  Object.defineProperty(SingleFieldSubscriptionsRule$1, '__esModule', {
    value: true,
  });
  SingleFieldSubscriptionsRule$1.SingleFieldSubscriptionsRule = SingleFieldSubscriptionsRule;

  var _GraphQLError$n = GraphQLError$1;

  var _kinds$a = kinds;

  var _collectFields$2 = collectFields$1;

  /**
   * Subscriptions must only include a non-introspection field.
   *
   * A GraphQL subscription is valid only if it contains a single root field and
   * that root field is not an introspection field.
   *
   * See https://spec.graphql.org/draft/#sec-Single-root-field
   */
  function SingleFieldSubscriptionsRule(context) {
    return {
      OperationDefinition(node) {
        if (node.operation === 'subscription') {
          const schema = context.getSchema();
          const subscriptionType = schema.getSubscriptionType();

          if (subscriptionType) {
            const operationName = node.name ? node.name.value : null;
            const variableValues = Object.create(null);
            const document = context.getDocument();
            const fragments = Object.create(null);

            for (const definition of document.definitions) {
              if (definition.kind === _kinds$a.Kind.FRAGMENT_DEFINITION) {
                fragments[definition.name.value] = definition;
              }
            }

            const fields = (0, _collectFields$2.collectFields)(
              schema,
              fragments,
              variableValues,
              subscriptionType,
              node.selectionSet,
            );

            if (fields.size > 1) {
              const fieldSelectionLists = [...fields.values()];
              const extraFieldSelectionLists = fieldSelectionLists.slice(1);
              const extraFieldSelections = extraFieldSelectionLists.flat();
              context.reportError(
                new _GraphQLError$n.GraphQLError(
                  operationName != null
                    ? `Subscription "${operationName}" must select only one top level field.`
                    : 'Anonymous Subscription must select only one top level field.',
                  extraFieldSelections,
                ),
              );
            }

            for (const fieldNodes of fields.values()) {
              const field = fieldNodes[0];
              const fieldName = field.name.value;

              if (fieldName.startsWith('__')) {
                context.reportError(
                  new _GraphQLError$n.GraphQLError(
                    operationName != null
                      ? `Subscription "${operationName}" must not select an introspection top level field.`
                      : 'Anonymous Subscription must not select an introspection top level field.',
                    fieldNodes,
                  ),
                );
              }
            }
          }
        }
      },
    };
  }

  var UniqueArgumentDefinitionNamesRule$1 = {};

  var groupBy$1 = {};

  Object.defineProperty(groupBy$1, '__esModule', {
    value: true,
  });
  groupBy$1.groupBy = groupBy;

  /**
   * Groups array items into a Map, given a function to produce grouping key.
   */
  function groupBy(list, keyFn) {
    const result = new Map();

    for (const item of list) {
      const key = keyFn(item);
      const group = result.get(key);

      if (group === undefined) {
        result.set(key, [item]);
      } else {
        group.push(item);
      }
    }

    return result;
  }

  Object.defineProperty(UniqueArgumentDefinitionNamesRule$1, '__esModule', {
    value: true,
  });
  UniqueArgumentDefinitionNamesRule$1.UniqueArgumentDefinitionNamesRule = UniqueArgumentDefinitionNamesRule;

  var _groupBy$2 = groupBy$1;

  var _GraphQLError$m = GraphQLError$1;

  /**
   * Unique argument definition names
   *
   * A GraphQL Object or Interface type is only valid if all its fields have uniquely named arguments.
   * A GraphQL Directive is only valid if all its arguments are uniquely named.
   */
  function UniqueArgumentDefinitionNamesRule(context) {
    return {
      DirectiveDefinition(directiveNode) {
        var _directiveNode$argume;

        // FIXME: https://github.com/graphql/graphql-js/issues/2203

        /* c8 ignore next */
        const argumentNodes =
          (_directiveNode$argume = directiveNode.arguments) !== null &&
          _directiveNode$argume !== void 0
            ? _directiveNode$argume
            : [];
        return checkArgUniqueness(`@${directiveNode.name.value}`, argumentNodes);
      },

      InterfaceTypeDefinition: checkArgUniquenessPerField,
      InterfaceTypeExtension: checkArgUniquenessPerField,
      ObjectTypeDefinition: checkArgUniquenessPerField,
      ObjectTypeExtension: checkArgUniquenessPerField,
    };

    function checkArgUniquenessPerField(typeNode) {
      var _typeNode$fields;

      const typeName = typeNode.name.value; // FIXME: https://github.com/graphql/graphql-js/issues/2203

      /* c8 ignore next */

      const fieldNodes =
        (_typeNode$fields = typeNode.fields) !== null &&
        _typeNode$fields !== void 0
          ? _typeNode$fields
          : [];

      for (const fieldDef of fieldNodes) {
        var _fieldDef$arguments;

        const fieldName = fieldDef.name.value; // FIXME: https://github.com/graphql/graphql-js/issues/2203

        /* c8 ignore next */

        const argumentNodes =
          (_fieldDef$arguments = fieldDef.arguments) !== null &&
          _fieldDef$arguments !== void 0
            ? _fieldDef$arguments
            : [];
        checkArgUniqueness(`${typeName}.${fieldName}`, argumentNodes);
      }

      return false;
    }

    function checkArgUniqueness(parentName, argumentNodes) {
      const seenArgs = (0, _groupBy$2.groupBy)(
        argumentNodes,
        (arg) => arg.name.value,
      );

      for (const [argName, argNodes] of seenArgs) {
        if (argNodes.length > 1) {
          context.reportError(
            new _GraphQLError$m.GraphQLError(
              `Argument "${parentName}(${argName}:)" can only be defined once.`,
              argNodes.map((node) => node.name),
            ),
          );
        }
      }

      return false;
    }
  }

  var UniqueArgumentNamesRule$1 = {};

  Object.defineProperty(UniqueArgumentNamesRule$1, '__esModule', {
    value: true,
  });
  UniqueArgumentNamesRule$1.UniqueArgumentNamesRule = UniqueArgumentNamesRule;

  var _groupBy$1 = groupBy$1;

  var _GraphQLError$l = GraphQLError$1;

  /**
   * Unique argument names
   *
   * A GraphQL field or directive is only valid if all supplied arguments are
   * uniquely named.
   *
   * See https://spec.graphql.org/draft/#sec-Argument-Names
   */
  function UniqueArgumentNamesRule(context) {
    return {
      Field: checkArgUniqueness,
      Directive: checkArgUniqueness,
    };

    function checkArgUniqueness(parentNode) {
      var _parentNode$arguments;

      // FIXME: https://github.com/graphql/graphql-js/issues/2203

      /* c8 ignore next */
      const argumentNodes =
        (_parentNode$arguments = parentNode.arguments) !== null &&
        _parentNode$arguments !== void 0
          ? _parentNode$arguments
          : [];
      const seenArgs = (0, _groupBy$1.groupBy)(
        argumentNodes,
        (arg) => arg.name.value,
      );

      for (const [argName, argNodes] of seenArgs) {
        if (argNodes.length > 1) {
          context.reportError(
            new _GraphQLError$l.GraphQLError(
              `There can be only one argument named "${argName}".`,
              argNodes.map((node) => node.name),
            ),
          );
        }
      }
    }
  }

  var UniqueDirectiveNamesRule$1 = {};

  Object.defineProperty(UniqueDirectiveNamesRule$1, '__esModule', {
    value: true,
  });
  UniqueDirectiveNamesRule$1.UniqueDirectiveNamesRule = UniqueDirectiveNamesRule;

  var _GraphQLError$k = GraphQLError$1;

  /**
   * Unique directive names
   *
   * A GraphQL document is only valid if all defined directives have unique names.
   */
  function UniqueDirectiveNamesRule(context) {
    const knownDirectiveNames = Object.create(null);
    const schema = context.getSchema();
    return {
      DirectiveDefinition(node) {
        const directiveName = node.name.value;

        if (
          schema !== null &&
          schema !== void 0 &&
          schema.getDirective(directiveName)
        ) {
          context.reportError(
            new _GraphQLError$k.GraphQLError(
              `Directive "@${directiveName}" already exists in the schema. It cannot be redefined.`,
              node.name,
            ),
          );
          return;
        }

        if (knownDirectiveNames[directiveName]) {
          context.reportError(
            new _GraphQLError$k.GraphQLError(
              `There can be only one directive named "@${directiveName}".`,
              [knownDirectiveNames[directiveName], node.name],
            ),
          );
        } else {
          knownDirectiveNames[directiveName] = node.name;
        }

        return false;
      },
    };
  }

  var UniqueDirectivesPerLocationRule$1 = {};

  Object.defineProperty(UniqueDirectivesPerLocationRule$1, '__esModule', {
    value: true,
  });
  UniqueDirectivesPerLocationRule$1.UniqueDirectivesPerLocationRule = UniqueDirectivesPerLocationRule;

  var _GraphQLError$j = GraphQLError$1;

  var _kinds$9 = kinds;

  var _predicates$1 = predicates;

  var _directives$5 = directives;

  /**
   * Unique directive names per location
   *
   * A GraphQL document is only valid if all non-repeatable directives at
   * a given location are uniquely named.
   *
   * See https://spec.graphql.org/draft/#sec-Directives-Are-Unique-Per-Location
   */
  function UniqueDirectivesPerLocationRule(context) {
    const uniqueDirectiveMap = Object.create(null);
    const schema = context.getSchema();
    const definedDirectives = schema
      ? schema.getDirectives()
      : _directives$5.specifiedDirectives;

    for (const directive of definedDirectives) {
      uniqueDirectiveMap[directive.name] = !directive.isRepeatable;
    }

    const astDefinitions = context.getDocument().definitions;

    for (const def of astDefinitions) {
      if (def.kind === _kinds$9.Kind.DIRECTIVE_DEFINITION) {
        uniqueDirectiveMap[def.name.value] = !def.repeatable;
      }
    }

    const schemaDirectives = Object.create(null);
    const typeDirectivesMap = Object.create(null);
    return {
      // Many different AST nodes may contain directives. Rather than listing
      // them all, just listen for entering any node, and check to see if it
      // defines any directives.
      enter(node) {
        if (!('directives' in node) || !node.directives) {
          return;
        }

        let seenDirectives;

        if (
          node.kind === _kinds$9.Kind.SCHEMA_DEFINITION ||
          node.kind === _kinds$9.Kind.SCHEMA_EXTENSION
        ) {
          seenDirectives = schemaDirectives;
        } else if (
          (0, _predicates$1.isTypeDefinitionNode)(node) ||
          (0, _predicates$1.isTypeExtensionNode)(node)
        ) {
          const typeName = node.name.value;
          seenDirectives = typeDirectivesMap[typeName];

          if (seenDirectives === undefined) {
            typeDirectivesMap[typeName] = seenDirectives = Object.create(null);
          }
        } else {
          seenDirectives = Object.create(null);
        }

        for (const directive of node.directives) {
          const directiveName = directive.name.value;

          if (uniqueDirectiveMap[directiveName]) {
            if (seenDirectives[directiveName]) {
              context.reportError(
                new _GraphQLError$j.GraphQLError(
                  `The directive "@${directiveName}" can only be used once at this location.`,
                  [seenDirectives[directiveName], directive],
                ),
              );
            } else {
              seenDirectives[directiveName] = directive;
            }
          }
        }
      },
    };
  }

  var UniqueEnumValueNamesRule$1 = {};

  Object.defineProperty(UniqueEnumValueNamesRule$1, '__esModule', {
    value: true,
  });
  UniqueEnumValueNamesRule$1.UniqueEnumValueNamesRule = UniqueEnumValueNamesRule;

  var _GraphQLError$i = GraphQLError$1;

  var _definition$c = definition;

  /**
   * Unique enum value names
   *
   * A GraphQL enum type is only valid if all its values are uniquely named.
   */
  function UniqueEnumValueNamesRule(context) {
    const schema = context.getSchema();
    const existingTypeMap = schema ? schema.getTypeMap() : Object.create(null);
    const knownValueNames = Object.create(null);
    return {
      EnumTypeDefinition: checkValueUniqueness,
      EnumTypeExtension: checkValueUniqueness,
    };

    function checkValueUniqueness(node) {
      var _node$values;

      const typeName = node.name.value;

      if (!knownValueNames[typeName]) {
        knownValueNames[typeName] = Object.create(null);
      } // FIXME: https://github.com/graphql/graphql-js/issues/2203

      /* c8 ignore next */

      const valueNodes =
        (_node$values = node.values) !== null && _node$values !== void 0
          ? _node$values
          : [];
      const valueNames = knownValueNames[typeName];

      for (const valueDef of valueNodes) {
        const valueName = valueDef.name.value;
        const existingType = existingTypeMap[typeName];

        if (
          (0, _definition$c.isEnumType)(existingType) &&
          existingType.getValue(valueName)
        ) {
          context.reportError(
            new _GraphQLError$i.GraphQLError(
              `Enum value "${typeName}.${valueName}" already exists in the schema. It cannot also be defined in this type extension.`,
              valueDef.name,
            ),
          );
        } else if (valueNames[valueName]) {
          context.reportError(
            new _GraphQLError$i.GraphQLError(
              `Enum value "${typeName}.${valueName}" can only be defined once.`,
              [valueNames[valueName], valueDef.name],
            ),
          );
        } else {
          valueNames[valueName] = valueDef.name;
        }
      }

      return false;
    }
  }

  var UniqueFieldDefinitionNamesRule$1 = {};

  Object.defineProperty(UniqueFieldDefinitionNamesRule$1, '__esModule', {
    value: true,
  });
  UniqueFieldDefinitionNamesRule$1.UniqueFieldDefinitionNamesRule = UniqueFieldDefinitionNamesRule;

  var _GraphQLError$h = GraphQLError$1;

  var _definition$b = definition;

  /**
   * Unique field definition names
   *
   * A GraphQL complex type is only valid if all its fields are uniquely named.
   */
  function UniqueFieldDefinitionNamesRule(context) {
    const schema = context.getSchema();
    const existingTypeMap = schema ? schema.getTypeMap() : Object.create(null);
    const knownFieldNames = Object.create(null);
    return {
      InputObjectTypeDefinition: checkFieldUniqueness,
      InputObjectTypeExtension: checkFieldUniqueness,
      InterfaceTypeDefinition: checkFieldUniqueness,
      InterfaceTypeExtension: checkFieldUniqueness,
      ObjectTypeDefinition: checkFieldUniqueness,
      ObjectTypeExtension: checkFieldUniqueness,
    };

    function checkFieldUniqueness(node) {
      var _node$fields;

      const typeName = node.name.value;

      if (!knownFieldNames[typeName]) {
        knownFieldNames[typeName] = Object.create(null);
      } // FIXME: https://github.com/graphql/graphql-js/issues/2203

      /* c8 ignore next */

      const fieldNodes =
        (_node$fields = node.fields) !== null && _node$fields !== void 0
          ? _node$fields
          : [];
      const fieldNames = knownFieldNames[typeName];

      for (const fieldDef of fieldNodes) {
        const fieldName = fieldDef.name.value;

        if (hasField(existingTypeMap[typeName], fieldName)) {
          context.reportError(
            new _GraphQLError$h.GraphQLError(
              `Field "${typeName}.${fieldName}" already exists in the schema. It cannot also be defined in this type extension.`,
              fieldDef.name,
            ),
          );
        } else if (fieldNames[fieldName]) {
          context.reportError(
            new _GraphQLError$h.GraphQLError(
              `Field "${typeName}.${fieldName}" can only be defined once.`,
              [fieldNames[fieldName], fieldDef.name],
            ),
          );
        } else {
          fieldNames[fieldName] = fieldDef.name;
        }
      }

      return false;
    }
  }

  function hasField(type, fieldName) {
    if (
      (0, _definition$b.isObjectType)(type) ||
      (0, _definition$b.isInterfaceType)(type) ||
      (0, _definition$b.isInputObjectType)(type)
    ) {
      return type.getFields()[fieldName] != null;
    }

    return false;
  }

  var UniqueFragmentNamesRule$1 = {};

  Object.defineProperty(UniqueFragmentNamesRule$1, '__esModule', {
    value: true,
  });
  UniqueFragmentNamesRule$1.UniqueFragmentNamesRule = UniqueFragmentNamesRule;

  var _GraphQLError$g = GraphQLError$1;

  /**
   * Unique fragment names
   *
   * A GraphQL document is only valid if all defined fragments have unique names.
   *
   * See https://spec.graphql.org/draft/#sec-Fragment-Name-Uniqueness
   */
  function UniqueFragmentNamesRule(context) {
    const knownFragmentNames = Object.create(null);
    return {
      OperationDefinition: () => false,

      FragmentDefinition(node) {
        const fragmentName = node.name.value;

        if (knownFragmentNames[fragmentName]) {
          context.reportError(
            new _GraphQLError$g.GraphQLError(
              `There can be only one fragment named "${fragmentName}".`,
              [knownFragmentNames[fragmentName], node.name],
            ),
          );
        } else {
          knownFragmentNames[fragmentName] = node.name;
        }

        return false;
      },
    };
  }

  var UniqueInputFieldNamesRule$1 = {};

  Object.defineProperty(UniqueInputFieldNamesRule$1, '__esModule', {
    value: true,
  });
  UniqueInputFieldNamesRule$1.UniqueInputFieldNamesRule = UniqueInputFieldNamesRule;

  var _invariant$7 = invariant$1;

  var _GraphQLError$f = GraphQLError$1;

  /**
   * Unique input field names
   *
   * A GraphQL input object value is only valid if all supplied fields are
   * uniquely named.
   *
   * See https://spec.graphql.org/draft/#sec-Input-Object-Field-Uniqueness
   */
  function UniqueInputFieldNamesRule(context) {
    const knownNameStack = [];
    let knownNames = Object.create(null);
    return {
      ObjectValue: {
        enter() {
          knownNameStack.push(knownNames);
          knownNames = Object.create(null);
        },

        leave() {
          const prevKnownNames = knownNameStack.pop();
          prevKnownNames || (0, _invariant$7.invariant)(false);
          knownNames = prevKnownNames;
        },
      },

      ObjectField(node) {
        const fieldName = node.name.value;

        if (knownNames[fieldName]) {
          context.reportError(
            new _GraphQLError$f.GraphQLError(
              `There can be only one input field named "${fieldName}".`,
              [knownNames[fieldName], node.name],
            ),
          );
        } else {
          knownNames[fieldName] = node.name;
        }
      },
    };
  }

  var UniqueOperationNamesRule$1 = {};

  Object.defineProperty(UniqueOperationNamesRule$1, '__esModule', {
    value: true,
  });
  UniqueOperationNamesRule$1.UniqueOperationNamesRule = UniqueOperationNamesRule;

  var _GraphQLError$e = GraphQLError$1;

  /**
   * Unique operation names
   *
   * A GraphQL document is only valid if all defined operations have unique names.
   *
   * See https://spec.graphql.org/draft/#sec-Operation-Name-Uniqueness
   */
  function UniqueOperationNamesRule(context) {
    const knownOperationNames = Object.create(null);
    return {
      OperationDefinition(node) {
        const operationName = node.name;

        if (operationName) {
          if (knownOperationNames[operationName.value]) {
            context.reportError(
              new _GraphQLError$e.GraphQLError(
                `There can be only one operation named "${operationName.value}".`,
                [knownOperationNames[operationName.value], operationName],
              ),
            );
          } else {
            knownOperationNames[operationName.value] = operationName;
          }
        }

        return false;
      },

      FragmentDefinition: () => false,
    };
  }

  var UniqueOperationTypesRule$1 = {};

  Object.defineProperty(UniqueOperationTypesRule$1, '__esModule', {
    value: true,
  });
  UniqueOperationTypesRule$1.UniqueOperationTypesRule = UniqueOperationTypesRule;

  var _GraphQLError$d = GraphQLError$1;

  /**
   * Unique operation types
   *
   * A GraphQL document is only valid if it has only one type per operation.
   */
  function UniqueOperationTypesRule(context) {
    const schema = context.getSchema();
    const definedOperationTypes = Object.create(null);
    const existingOperationTypes = schema
      ? {
          query: schema.getQueryType(),
          mutation: schema.getMutationType(),
          subscription: schema.getSubscriptionType(),
        }
      : {};
    return {
      SchemaDefinition: checkOperationTypes,
      SchemaExtension: checkOperationTypes,
    };

    function checkOperationTypes(node) {
      var _node$operationTypes;

      // See: https://github.com/graphql/graphql-js/issues/2203

      /* c8 ignore next */
      const operationTypesNodes =
        (_node$operationTypes = node.operationTypes) !== null &&
        _node$operationTypes !== void 0
          ? _node$operationTypes
          : [];

      for (const operationType of operationTypesNodes) {
        const operation = operationType.operation;
        const alreadyDefinedOperationType = definedOperationTypes[operation];

        if (existingOperationTypes[operation]) {
          context.reportError(
            new _GraphQLError$d.GraphQLError(
              `Type for ${operation} already defined in the schema. It cannot be redefined.`,
              operationType,
            ),
          );
        } else if (alreadyDefinedOperationType) {
          context.reportError(
            new _GraphQLError$d.GraphQLError(
              `There can be only one ${operation} type in schema.`,
              [alreadyDefinedOperationType, operationType],
            ),
          );
        } else {
          definedOperationTypes[operation] = operationType;
        }
      }

      return false;
    }
  }

  var UniqueTypeNamesRule$1 = {};

  Object.defineProperty(UniqueTypeNamesRule$1, '__esModule', {
    value: true,
  });
  UniqueTypeNamesRule$1.UniqueTypeNamesRule = UniqueTypeNamesRule;

  var _GraphQLError$c = GraphQLError$1;

  /**
   * Unique type names
   *
   * A GraphQL document is only valid if all defined types have unique names.
   */
  function UniqueTypeNamesRule(context) {
    const knownTypeNames = Object.create(null);
    const schema = context.getSchema();
    return {
      ScalarTypeDefinition: checkTypeName,
      ObjectTypeDefinition: checkTypeName,
      InterfaceTypeDefinition: checkTypeName,
      UnionTypeDefinition: checkTypeName,
      EnumTypeDefinition: checkTypeName,
      InputObjectTypeDefinition: checkTypeName,
    };

    function checkTypeName(node) {
      const typeName = node.name.value;

      if (schema !== null && schema !== void 0 && schema.getType(typeName)) {
        context.reportError(
          new _GraphQLError$c.GraphQLError(
            `Type "${typeName}" already exists in the schema. It cannot also be defined in this type definition.`,
            node.name,
          ),
        );
        return;
      }

      if (knownTypeNames[typeName]) {
        context.reportError(
          new _GraphQLError$c.GraphQLError(
            `There can be only one type named "${typeName}".`,
            [knownTypeNames[typeName], node.name],
          ),
        );
      } else {
        knownTypeNames[typeName] = node.name;
      }

      return false;
    }
  }

  var UniqueVariableNamesRule$1 = {};

  Object.defineProperty(UniqueVariableNamesRule$1, '__esModule', {
    value: true,
  });
  UniqueVariableNamesRule$1.UniqueVariableNamesRule = UniqueVariableNamesRule;

  var _groupBy = groupBy$1;

  var _GraphQLError$b = GraphQLError$1;

  /**
   * Unique variable names
   *
   * A GraphQL operation is only valid if all its variables are uniquely named.
   */
  function UniqueVariableNamesRule(context) {
    return {
      OperationDefinition(operationNode) {
        var _operationNode$variab;

        // See: https://github.com/graphql/graphql-js/issues/2203

        /* c8 ignore next */
        const variableDefinitions =
          (_operationNode$variab = operationNode.variableDefinitions) !== null &&
          _operationNode$variab !== void 0
            ? _operationNode$variab
            : [];
        const seenVariableDefinitions = (0, _groupBy.groupBy)(
          variableDefinitions,
          (node) => node.variable.name.value,
        );

        for (const [variableName, variableNodes] of seenVariableDefinitions) {
          if (variableNodes.length > 1) {
            context.reportError(
              new _GraphQLError$b.GraphQLError(
                `There can be only one variable named "$${variableName}".`,
                variableNodes.map((node) => node.variable.name),
              ),
            );
          }
        }
      },
    };
  }

  var ValuesOfCorrectTypeRule$1 = {};

  Object.defineProperty(ValuesOfCorrectTypeRule$1, '__esModule', {
    value: true,
  });
  ValuesOfCorrectTypeRule$1.ValuesOfCorrectTypeRule = ValuesOfCorrectTypeRule;

  var _didYouMean = didYouMean$1;

  var _inspect$9 = inspect$1;

  var _keyMap$2 = keyMap$1;

  var _suggestionList = suggestionList$1;

  var _GraphQLError$a = GraphQLError$1;

  var _printer$3 = printer;

  var _definition$a = definition;

  /**
   * Value literals of correct type
   *
   * A GraphQL document is only valid if all value literals are of the type
   * expected at their position.
   *
   * See https://spec.graphql.org/draft/#sec-Values-of-Correct-Type
   */
  function ValuesOfCorrectTypeRule(context) {
    return {
      ListValue(node) {
        // Note: TypeInfo will traverse into a list's item type, so look to the
        // parent input type to check if it is a list.
        const type = (0, _definition$a.getNullableType)(
          context.getParentInputType(),
        );

        if (!(0, _definition$a.isListType)(type)) {
          isValidValueNode(context, node);
          return false; // Don't traverse further.
        }
      },

      ObjectValue(node) {
        const type = (0, _definition$a.getNamedType)(context.getInputType());

        if (!(0, _definition$a.isInputObjectType)(type)) {
          isValidValueNode(context, node);
          return false; // Don't traverse further.
        } // Ensure every required field exists.

        const fieldNodeMap = (0, _keyMap$2.keyMap)(
          node.fields,
          (field) => field.name.value,
        );

        for (const fieldDef of Object.values(type.getFields())) {
          const fieldNode = fieldNodeMap[fieldDef.name];

          if (!fieldNode && (0, _definition$a.isRequiredInputField)(fieldDef)) {
            const typeStr = (0, _inspect$9.inspect)(fieldDef.type);
            context.reportError(
              new _GraphQLError$a.GraphQLError(
                `Field "${type.name}.${fieldDef.name}" of required type "${typeStr}" was not provided.`,
                node,
              ),
            );
          }
        }
      },

      ObjectField(node) {
        const parentType = (0, _definition$a.getNamedType)(
          context.getParentInputType(),
        );
        const fieldType = context.getInputType();

        if (!fieldType && (0, _definition$a.isInputObjectType)(parentType)) {
          const suggestions = (0, _suggestionList.suggestionList)(
            node.name.value,
            Object.keys(parentType.getFields()),
          );
          context.reportError(
            new _GraphQLError$a.GraphQLError(
              `Field "${node.name.value}" is not defined by type "${parentType.name}".` +
                (0, _didYouMean.didYouMean)(suggestions),
              node,
            ),
          );
        }
      },

      NullValue(node) {
        const type = context.getInputType();

        if ((0, _definition$a.isNonNullType)(type)) {
          context.reportError(
            new _GraphQLError$a.GraphQLError(
              `Expected value of type "${(0, _inspect$9.inspect)(
              type,
            )}", found ${(0, _printer$3.print)(node)}.`,
              node,
            ),
          );
        }
      },

      EnumValue: (node) => isValidValueNode(context, node),
      IntValue: (node) => isValidValueNode(context, node),
      FloatValue: (node) => isValidValueNode(context, node),
      StringValue: (node) => isValidValueNode(context, node),
      BooleanValue: (node) => isValidValueNode(context, node),
    };
  }
  /**
   * Any value literal may be a valid representation of a Scalar, depending on
   * that scalar type.
   */

  function isValidValueNode(context, node) {
    // Report any error at the full type expected by the location.
    const locationType = context.getInputType();

    if (!locationType) {
      return;
    }

    const type = (0, _definition$a.getNamedType)(locationType);

    if (!(0, _definition$a.isLeafType)(type)) {
      const typeStr = (0, _inspect$9.inspect)(locationType);
      context.reportError(
        new _GraphQLError$a.GraphQLError(
          `Expected value of type "${typeStr}", found ${(0, _printer$3.print)(
          node,
        )}.`,
          node,
        ),
      );
      return;
    } // Scalars and Enums determine if a literal value is valid via parseLiteral(),
    // which may throw or return an invalid value to indicate failure.

    try {
      const parseResult = type.parseLiteral(
        node,
        undefined,
        /* variables */
      );

      if (parseResult === undefined) {
        const typeStr = (0, _inspect$9.inspect)(locationType);
        context.reportError(
          new _GraphQLError$a.GraphQLError(
            `Expected value of type "${typeStr}", found ${(0, _printer$3.print)(
            node,
          )}.`,
            node,
          ),
        );
      }
    } catch (error) {
      const typeStr = (0, _inspect$9.inspect)(locationType);

      if (error instanceof _GraphQLError$a.GraphQLError) {
        context.reportError(error);
      } else {
        context.reportError(
          new _GraphQLError$a.GraphQLError(
            `Expected value of type "${typeStr}", found ${(0, _printer$3.print)(
            node,
          )}; ` + error.message,
            node,
            undefined,
            undefined,
            undefined,
            error,
          ),
        );
      }
    }
  }

  var VariablesAreInputTypesRule$1 = {};

  Object.defineProperty(VariablesAreInputTypesRule$1, '__esModule', {
    value: true,
  });
  VariablesAreInputTypesRule$1.VariablesAreInputTypesRule = VariablesAreInputTypesRule;

  var _GraphQLError$9 = GraphQLError$1;

  var _printer$2 = printer;

  var _definition$9 = definition;

  var _typeFromAST$1 = typeFromAST$1;

  /**
   * Variables are input types
   *
   * A GraphQL operation is only valid if all the variables it defines are of
   * input types (scalar, enum, or input object).
   *
   * See https://spec.graphql.org/draft/#sec-Variables-Are-Input-Types
   */
  function VariablesAreInputTypesRule(context) {
    return {
      VariableDefinition(node) {
        const type = (0, _typeFromAST$1.typeFromAST)(
          context.getSchema(),
          node.type,
        );

        if (type !== undefined && !(0, _definition$9.isInputType)(type)) {
          const variableName = node.variable.name.value;
          const typeName = (0, _printer$2.print)(node.type);
          context.reportError(
            new _GraphQLError$9.GraphQLError(
              `Variable "$${variableName}" cannot be non-input type "${typeName}".`,
              node.type,
            ),
          );
        }
      },
    };
  }

  var VariablesInAllowedPositionRule$1 = {};

  Object.defineProperty(VariablesInAllowedPositionRule$1, '__esModule', {
    value: true,
  });
  VariablesInAllowedPositionRule$1.VariablesInAllowedPositionRule = VariablesInAllowedPositionRule;

  var _inspect$8 = inspect$1;

  var _GraphQLError$8 = GraphQLError$1;

  var _kinds$8 = kinds;

  var _definition$8 = definition;

  var _typeComparators = typeComparators;

  var _typeFromAST = typeFromAST$1;

  /**
   * Variables in allowed position
   *
   * Variable usages must be compatible with the arguments they are passed to.
   *
   * See https://spec.graphql.org/draft/#sec-All-Variable-Usages-are-Allowed
   */
  function VariablesInAllowedPositionRule(context) {
    let varDefMap = Object.create(null);
    return {
      OperationDefinition: {
        enter() {
          varDefMap = Object.create(null);
        },

        leave(operation) {
          const usages = context.getRecursiveVariableUsages(operation);

          for (const { node, type, defaultValue } of usages) {
            const varName = node.name.value;
            const varDef = varDefMap[varName];

            if (varDef && type) {
              // A var type is allowed if it is the same or more strict (e.g. is
              // a subtype of) than the expected type. It can be more strict if
              // the variable type is non-null when the expected type is nullable.
              // If both are list types, the variable item type can be more strict
              // than the expected item type (contravariant).
              const schema = context.getSchema();
              const varType = (0, _typeFromAST.typeFromAST)(schema, varDef.type);

              if (
                varType &&
                !allowedVariableUsage(
                  schema,
                  varType,
                  varDef.defaultValue,
                  type,
                  defaultValue,
                )
              ) {
                const varTypeStr = (0, _inspect$8.inspect)(varType);
                const typeStr = (0, _inspect$8.inspect)(type);
                context.reportError(
                  new _GraphQLError$8.GraphQLError(
                    `Variable "$${varName}" of type "${varTypeStr}" used in position expecting type "${typeStr}".`,
                    [varDef, node],
                  ),
                );
              }
            }
          }
        },
      },

      VariableDefinition(node) {
        varDefMap[node.variable.name.value] = node;
      },
    };
  }
  /**
   * Returns true if the variable is allowed in the location it was found,
   * which includes considering if default values exist for either the variable
   * or the location at which it is located.
   */

  function allowedVariableUsage(
    schema,
    varType,
    varDefaultValue,
    locationType,
    locationDefaultValue,
  ) {
    if (
      (0, _definition$8.isNonNullType)(locationType) &&
      !(0, _definition$8.isNonNullType)(varType)
    ) {
      const hasNonNullVariableDefaultValue =
        varDefaultValue != null && varDefaultValue.kind !== _kinds$8.Kind.NULL;
      const hasLocationDefaultValue = locationDefaultValue !== undefined;

      if (!hasNonNullVariableDefaultValue && !hasLocationDefaultValue) {
        return false;
      }

      const nullableLocationType = locationType.ofType;
      return (0, _typeComparators.isTypeSubTypeOf)(
        schema,
        varType,
        nullableLocationType,
      );
    }

    return (0, _typeComparators.isTypeSubTypeOf)(schema, varType, locationType);
  }

  Object.defineProperty(specifiedRules$1, '__esModule', {
    value: true,
  });
  specifiedRules$1.specifiedSDLRules = specifiedRules$1.specifiedRules = void 0;

  var _ExecutableDefinitionsRule = ExecutableDefinitionsRule$1;

  var _FieldsOnCorrectTypeRule = FieldsOnCorrectTypeRule$1;

  var _FragmentsOnCompositeTypesRule = FragmentsOnCompositeTypesRule$1;

  var _KnownArgumentNamesRule = KnownArgumentNamesRule$1;

  var _KnownDirectivesRule = KnownDirectivesRule$1;

  var _KnownFragmentNamesRule = KnownFragmentNamesRule$1;

  var _KnownTypeNamesRule = KnownTypeNamesRule$1;

  var _LoneAnonymousOperationRule = LoneAnonymousOperationRule$1;

  var _LoneSchemaDefinitionRule = LoneSchemaDefinitionRule$1;

  var _NoFragmentCyclesRule = NoFragmentCyclesRule$1;

  var _NoUndefinedVariablesRule = NoUndefinedVariablesRule$1;

  var _NoUnusedFragmentsRule = NoUnusedFragmentsRule$1;

  var _NoUnusedVariablesRule = NoUnusedVariablesRule$1;

  var _OverlappingFieldsCanBeMergedRule = OverlappingFieldsCanBeMergedRule$1;

  var _PossibleFragmentSpreadsRule = PossibleFragmentSpreadsRule$1;

  var _PossibleTypeExtensionsRule = PossibleTypeExtensionsRule$1;

  var _ProvidedRequiredArgumentsRule = ProvidedRequiredArgumentsRule$1;

  var _ScalarLeafsRule = ScalarLeafsRule$1;

  var _SingleFieldSubscriptionsRule = SingleFieldSubscriptionsRule$1;

  var _UniqueArgumentDefinitionNamesRule = UniqueArgumentDefinitionNamesRule$1;

  var _UniqueArgumentNamesRule = UniqueArgumentNamesRule$1;

  var _UniqueDirectiveNamesRule = UniqueDirectiveNamesRule$1;

  var _UniqueDirectivesPerLocationRule = UniqueDirectivesPerLocationRule$1;

  var _UniqueEnumValueNamesRule = UniqueEnumValueNamesRule$1;

  var _UniqueFieldDefinitionNamesRule = UniqueFieldDefinitionNamesRule$1;

  var _UniqueFragmentNamesRule = UniqueFragmentNamesRule$1;

  var _UniqueInputFieldNamesRule = UniqueInputFieldNamesRule$1;

  var _UniqueOperationNamesRule = UniqueOperationNamesRule$1;

  var _UniqueOperationTypesRule = UniqueOperationTypesRule$1;

  var _UniqueTypeNamesRule = UniqueTypeNamesRule$1;

  var _UniqueVariableNamesRule = UniqueVariableNamesRule$1;

  var _ValuesOfCorrectTypeRule = ValuesOfCorrectTypeRule$1;

  var _VariablesAreInputTypesRule = VariablesAreInputTypesRule$1;

  var _VariablesInAllowedPositionRule = VariablesInAllowedPositionRule$1;

  // Spec Section: "Executable Definitions"
  // Spec Section: "Field Selections on Objects, Interfaces, and Unions Types"
  // Spec Section: "Fragments on Composite Types"
  // Spec Section: "Argument Names"
  // Spec Section: "Directives Are Defined"
  // Spec Section: "Fragment spread target defined"
  // Spec Section: "Fragment Spread Type Existence"
  // Spec Section: "Lone Anonymous Operation"
  // SDL-specific validation rules
  // Spec Section: "Fragments must not form cycles"
  // Spec Section: "All Variable Used Defined"
  // Spec Section: "Fragments must be used"
  // Spec Section: "All Variables Used"
  // Spec Section: "Field Selection Merging"
  // Spec Section: "Fragment spread is possible"
  // Spec Section: "Argument Optionality"
  // Spec Section: "Leaf Field Selections"
  // Spec Section: "Subscriptions with Single Root Field"
  // Spec Section: "Argument Uniqueness"
  // Spec Section: "Directives Are Unique Per Location"
  // Spec Section: "Fragment Name Uniqueness"
  // Spec Section: "Input Object Field Uniqueness"
  // Spec Section: "Operation Name Uniqueness"
  // Spec Section: "Variable Uniqueness"
  // Spec Section: "Value Type Correctness"
  // Spec Section: "Variables are Input Types"
  // Spec Section: "All Variable Usages Are Allowed"

  /**
   * This set includes all validation rules defined by the GraphQL spec.
   *
   * The order of the rules in this list has been adjusted to lead to the
   * most clear output when encountering multiple validation errors.
   */
  const specifiedRules = Object.freeze([
    _ExecutableDefinitionsRule.ExecutableDefinitionsRule,
    _UniqueOperationNamesRule.UniqueOperationNamesRule,
    _LoneAnonymousOperationRule.LoneAnonymousOperationRule,
    _SingleFieldSubscriptionsRule.SingleFieldSubscriptionsRule,
    _KnownTypeNamesRule.KnownTypeNamesRule,
    _FragmentsOnCompositeTypesRule.FragmentsOnCompositeTypesRule,
    _VariablesAreInputTypesRule.VariablesAreInputTypesRule,
    _ScalarLeafsRule.ScalarLeafsRule,
    _FieldsOnCorrectTypeRule.FieldsOnCorrectTypeRule,
    _UniqueFragmentNamesRule.UniqueFragmentNamesRule,
    _KnownFragmentNamesRule.KnownFragmentNamesRule,
    _NoUnusedFragmentsRule.NoUnusedFragmentsRule,
    _PossibleFragmentSpreadsRule.PossibleFragmentSpreadsRule,
    _NoFragmentCyclesRule.NoFragmentCyclesRule,
    _UniqueVariableNamesRule.UniqueVariableNamesRule,
    _NoUndefinedVariablesRule.NoUndefinedVariablesRule,
    _NoUnusedVariablesRule.NoUnusedVariablesRule,
    _KnownDirectivesRule.KnownDirectivesRule,
    _UniqueDirectivesPerLocationRule.UniqueDirectivesPerLocationRule,
    _KnownArgumentNamesRule.KnownArgumentNamesRule,
    _UniqueArgumentNamesRule.UniqueArgumentNamesRule,
    _ValuesOfCorrectTypeRule.ValuesOfCorrectTypeRule,
    _ProvidedRequiredArgumentsRule.ProvidedRequiredArgumentsRule,
    _VariablesInAllowedPositionRule.VariablesInAllowedPositionRule,
    _OverlappingFieldsCanBeMergedRule.OverlappingFieldsCanBeMergedRule,
    _UniqueInputFieldNamesRule.UniqueInputFieldNamesRule,
  ]);
  /**
   * @internal
   */

  specifiedRules$1.specifiedRules = specifiedRules;
  const specifiedSDLRules = Object.freeze([
    _LoneSchemaDefinitionRule.LoneSchemaDefinitionRule,
    _UniqueOperationTypesRule.UniqueOperationTypesRule,
    _UniqueTypeNamesRule.UniqueTypeNamesRule,
    _UniqueEnumValueNamesRule.UniqueEnumValueNamesRule,
    _UniqueFieldDefinitionNamesRule.UniqueFieldDefinitionNamesRule,
    _UniqueArgumentDefinitionNamesRule.UniqueArgumentDefinitionNamesRule,
    _UniqueDirectiveNamesRule.UniqueDirectiveNamesRule,
    _KnownTypeNamesRule.KnownTypeNamesRule,
    _KnownDirectivesRule.KnownDirectivesRule,
    _UniqueDirectivesPerLocationRule.UniqueDirectivesPerLocationRule,
    _PossibleTypeExtensionsRule.PossibleTypeExtensionsRule,
    _KnownArgumentNamesRule.KnownArgumentNamesOnDirectivesRule,
    _UniqueArgumentNamesRule.UniqueArgumentNamesRule,
    _UniqueInputFieldNamesRule.UniqueInputFieldNamesRule,
    _ProvidedRequiredArgumentsRule.ProvidedRequiredArgumentsOnDirectivesRule,
  ]);
  specifiedRules$1.specifiedSDLRules = specifiedSDLRules;

  var ValidationContext$1 = {};

  Object.defineProperty(ValidationContext$1, '__esModule', {
    value: true,
  });
  ValidationContext$1.ValidationContext =
    ValidationContext$1.SDLValidationContext =
    ValidationContext$1.ASTValidationContext =
      void 0;

  var _kinds$7 = kinds;

  var _visitor$2 = visitor;

  var _TypeInfo$1 = TypeInfo$1;

  /**
   * An instance of this class is passed as the "this" context to all validators,
   * allowing access to commonly useful contextual information from within a
   * validation rule.
   */
  class ASTValidationContext {
    constructor(ast, onError) {
      this._ast = ast;
      this._fragments = undefined;
      this._fragmentSpreads = new Map();
      this._recursivelyReferencedFragments = new Map();
      this._onError = onError;
    }

    get [Symbol.toStringTag]() {
      return 'ASTValidationContext';
    }

    reportError(error) {
      this._onError(error);
    }

    getDocument() {
      return this._ast;
    }

    getFragment(name) {
      let fragments;

      if (this._fragments) {
        fragments = this._fragments;
      } else {
        fragments = Object.create(null);

        for (const defNode of this.getDocument().definitions) {
          if (defNode.kind === _kinds$7.Kind.FRAGMENT_DEFINITION) {
            fragments[defNode.name.value] = defNode;
          }
        }

        this._fragments = fragments;
      }

      return fragments[name];
    }

    getFragmentSpreads(node) {
      let spreads = this._fragmentSpreads.get(node);

      if (!spreads) {
        spreads = [];
        const setsToVisit = [node];
        let set;

        while ((set = setsToVisit.pop())) {
          for (const selection of set.selections) {
            if (selection.kind === _kinds$7.Kind.FRAGMENT_SPREAD) {
              spreads.push(selection);
            } else if (selection.selectionSet) {
              setsToVisit.push(selection.selectionSet);
            }
          }
        }

        this._fragmentSpreads.set(node, spreads);
      }

      return spreads;
    }

    getRecursivelyReferencedFragments(operation) {
      let fragments = this._recursivelyReferencedFragments.get(operation);

      if (!fragments) {
        fragments = [];
        const collectedNames = Object.create(null);
        const nodesToVisit = [operation.selectionSet];
        let node;

        while ((node = nodesToVisit.pop())) {
          for (const spread of this.getFragmentSpreads(node)) {
            const fragName = spread.name.value;

            if (collectedNames[fragName] !== true) {
              collectedNames[fragName] = true;
              const fragment = this.getFragment(fragName);

              if (fragment) {
                fragments.push(fragment);
                nodesToVisit.push(fragment.selectionSet);
              }
            }
          }
        }

        this._recursivelyReferencedFragments.set(operation, fragments);
      }

      return fragments;
    }
  }

  ValidationContext$1.ASTValidationContext = ASTValidationContext;

  class SDLValidationContext extends ASTValidationContext {
    constructor(ast, schema, onError) {
      super(ast, onError);
      this._schema = schema;
    }

    get [Symbol.toStringTag]() {
      return 'SDLValidationContext';
    }

    getSchema() {
      return this._schema;
    }
  }

  ValidationContext$1.SDLValidationContext = SDLValidationContext;

  class ValidationContext extends ASTValidationContext {
    constructor(schema, ast, typeInfo, onError) {
      super(ast, onError);
      this._schema = schema;
      this._typeInfo = typeInfo;
      this._variableUsages = new Map();
      this._recursiveVariableUsages = new Map();
    }

    get [Symbol.toStringTag]() {
      return 'ValidationContext';
    }

    getSchema() {
      return this._schema;
    }

    getVariableUsages(node) {
      let usages = this._variableUsages.get(node);

      if (!usages) {
        const newUsages = [];
        const typeInfo = new _TypeInfo$1.TypeInfo(this._schema);
        (0, _visitor$2.visit)(
          node,
          (0, _TypeInfo$1.visitWithTypeInfo)(typeInfo, {
            VariableDefinition: () => false,

            Variable(variable) {
              newUsages.push({
                node: variable,
                type: typeInfo.getInputType(),
                defaultValue: typeInfo.getDefaultValue(),
              });
            },
          }),
        );
        usages = newUsages;

        this._variableUsages.set(node, usages);
      }

      return usages;
    }

    getRecursiveVariableUsages(operation) {
      let usages = this._recursiveVariableUsages.get(operation);

      if (!usages) {
        usages = this.getVariableUsages(operation);

        for (const frag of this.getRecursivelyReferencedFragments(operation)) {
          usages = usages.concat(this.getVariableUsages(frag));
        }

        this._recursiveVariableUsages.set(operation, usages);
      }

      return usages;
    }

    getType() {
      return this._typeInfo.getType();
    }

    getParentType() {
      return this._typeInfo.getParentType();
    }

    getInputType() {
      return this._typeInfo.getInputType();
    }

    getParentInputType() {
      return this._typeInfo.getParentInputType();
    }

    getFieldDef() {
      return this._typeInfo.getFieldDef();
    }

    getDirective() {
      return this._typeInfo.getDirective();
    }

    getArgument() {
      return this._typeInfo.getArgument();
    }

    getEnumValue() {
      return this._typeInfo.getEnumValue();
    }
  }

  ValidationContext$1.ValidationContext = ValidationContext;

  Object.defineProperty(validate$1, '__esModule', {
    value: true,
  });
  validate$1.assertValidSDL = assertValidSDL;
  validate$1.assertValidSDLExtension = assertValidSDLExtension;
  validate$1.validate = validate;
  validate$1.validateSDL = validateSDL;

  var _devAssert$7 = devAssert$1;

  var _GraphQLError$7 = GraphQLError$1;

  var _visitor$1 = visitor;

  var _validate$4 = validate$2;

  var _TypeInfo = TypeInfo$1;

  var _specifiedRules = specifiedRules$1;

  var _ValidationContext = ValidationContext$1;

  /**
   * Implements the "Validation" section of the spec.
   *
   * Validation runs synchronously, returning an array of encountered errors, or
   * an empty array if no errors were encountered and the document is valid.
   *
   * A list of specific validation rules may be provided. If not provided, the
   * default list of rules defined by the GraphQL specification will be used.
   *
   * Each validation rules is a function which returns a visitor
   * (see the language/visitor API). Visitor methods are expected to return
   * GraphQLErrors, or Arrays of GraphQLErrors when invalid.
   *
   * Validate will stop validation after a `maxErrors` limit has been reached.
   * Attackers can send pathologically invalid queries to induce a DoS attack,
   * so by default `maxErrors` set to 100 errors.
   *
   * Optionally a custom TypeInfo instance may be provided. If not provided, one
   * will be created from the provided schema.
   */
  function validate(
    schema,
    documentAST,
    rules = _specifiedRules.specifiedRules,
    options,
    /** @deprecated will be removed in 17.0.0 */
    typeInfo = new _TypeInfo.TypeInfo(schema),
  ) {
    var _options$maxErrors;

    const maxErrors =
      (_options$maxErrors =
        options === null || options === void 0 ? void 0 : options.maxErrors) !==
        null && _options$maxErrors !== void 0
        ? _options$maxErrors
        : 100;
    documentAST || (0, _devAssert$7.devAssert)(false, 'Must provide document.'); // If the schema used for validation is invalid, throw an error.

    (0, _validate$4.assertValidSchema)(schema);
    const abortObj = Object.freeze({});
    const errors = [];
    const context = new _ValidationContext.ValidationContext(
      schema,
      documentAST,
      typeInfo,
      (error) => {
        if (errors.length >= maxErrors) {
          errors.push(
            new _GraphQLError$7.GraphQLError(
              'Too many validation errors, error limit reached. Validation aborted.',
            ),
          ); // eslint-disable-next-line @typescript-eslint/no-throw-literal

          throw abortObj;
        }

        errors.push(error);
      },
    ); // This uses a specialized visitor which runs multiple visitors in parallel,
    // while maintaining the visitor skip and break API.

    const visitor = (0, _visitor$1.visitInParallel)(
      rules.map((rule) => rule(context)),
    ); // Visit the whole document with each instance of all provided rules.

    try {
      (0, _visitor$1.visit)(
        documentAST,
        (0, _TypeInfo.visitWithTypeInfo)(typeInfo, visitor),
      );
    } catch (e) {
      if (e !== abortObj) {
        throw e;
      }
    }

    return errors;
  }
  /**
   * @internal
   */

  function validateSDL(
    documentAST,
    schemaToExtend,
    rules = _specifiedRules.specifiedSDLRules,
  ) {
    const errors = [];
    const context = new _ValidationContext.SDLValidationContext(
      documentAST,
      schemaToExtend,
      (error) => {
        errors.push(error);
      },
    );
    const visitors = rules.map((rule) => rule(context));
    (0, _visitor$1.visit)(documentAST, (0, _visitor$1.visitInParallel)(visitors));
    return errors;
  }
  /**
   * Utility function which asserts a SDL document is valid by throwing an error
   * if it is invalid.
   *
   * @internal
   */

  function assertValidSDL(documentAST) {
    const errors = validateSDL(documentAST);

    if (errors.length !== 0) {
      throw new Error(errors.map((error) => error.message).join('\n\n'));
    }
  }
  /**
   * Utility function which asserts a SDL document is valid by throwing an error
   * if it is invalid.
   *
   * @internal
   */

  function assertValidSDLExtension(documentAST, schema) {
    const errors = validateSDL(documentAST, schema);

    if (errors.length !== 0) {
      throw new Error(errors.map((error) => error.message).join('\n\n'));
    }
  }

  var execute$1 = {};

  var memoize3$1 = {};

  Object.defineProperty(memoize3$1, '__esModule', {
    value: true,
  });
  memoize3$1.memoize3 = memoize3;

  /**
   * Memoizes the provided three-argument function.
   */
  function memoize3(fn) {
    let cache0;
    return function memoized(a1, a2, a3) {
      if (cache0 === undefined) {
        cache0 = new WeakMap();
      }

      let cache1 = cache0.get(a1);

      if (cache1 === undefined) {
        cache1 = new WeakMap();
        cache0.set(a1, cache1);
      }

      let cache2 = cache1.get(a2);

      if (cache2 === undefined) {
        cache2 = new WeakMap();
        cache1.set(a2, cache2);
      }

      let fnResult = cache2.get(a3);

      if (fnResult === undefined) {
        fnResult = fn(a1, a2, a3);
        cache2.set(a3, fnResult);
      }

      return fnResult;
    };
  }

  var promiseForObject$1 = {};

  Object.defineProperty(promiseForObject$1, '__esModule', {
    value: true,
  });
  promiseForObject$1.promiseForObject = promiseForObject;

  /**
   * This function transforms a JS object `ObjMap<Promise<T>>` into
   * a `Promise<ObjMap<T>>`
   *
   * This is akin to bluebird's `Promise.props`, but implemented only using
   * `Promise.all` so it will work with any implementation of ES6 promises.
   */
  function promiseForObject(object) {
    return Promise.all(Object.values(object)).then((resolvedValues) => {
      const resolvedObject = Object.create(null);

      for (const [i, key] of Object.keys(object).entries()) {
        resolvedObject[key] = resolvedValues[i];
      }

      return resolvedObject;
    });
  }

  var promiseReduce$1 = {};

  Object.defineProperty(promiseReduce$1, '__esModule', {
    value: true,
  });
  promiseReduce$1.promiseReduce = promiseReduce;

  var _isPromise$2 = isPromise$1;

  /**
   * Similar to Array.prototype.reduce(), however the reducing callback may return
   * a Promise, in which case reduction will continue after each promise resolves.
   *
   * If the callback does not return a Promise, then this function will also not
   * return a Promise.
   */
  function promiseReduce(values, callbackFn, initialValue) {
    let accumulator = initialValue;

    for (const value of values) {
      accumulator = (0, _isPromise$2.isPromise)(accumulator)
        ? accumulator.then((resolved) => callbackFn(resolved, value))
        : callbackFn(accumulator, value);
    }

    return accumulator;
  }

  var locatedError$1 = {};

  var toError$1 = {};

  Object.defineProperty(toError$1, '__esModule', {
    value: true,
  });
  toError$1.toError = toError;

  var _inspect$7 = inspect$1;

  /**
   * Sometimes a non-error is thrown, wrap it as an Error instance to ensure a consistent Error interface.
   */
  function toError(thrownValue) {
    return thrownValue instanceof Error
      ? thrownValue
      : new NonErrorThrown(thrownValue);
  }

  class NonErrorThrown extends Error {
    constructor(thrownValue) {
      super('Unexpected error value: ' + (0, _inspect$7.inspect)(thrownValue));
      this.name = 'NonErrorThrown';
      this.thrownValue = thrownValue;
    }
  }

  Object.defineProperty(locatedError$1, '__esModule', {
    value: true,
  });
  locatedError$1.locatedError = locatedError;

  var _toError = toError$1;

  var _GraphQLError$6 = GraphQLError$1;

  /**
   * Given an arbitrary value, presumably thrown while attempting to execute a
   * GraphQL operation, produce a new GraphQLError aware of the location in the
   * document responsible for the original Error.
   */
  function locatedError(rawOriginalError, nodes, path) {
    var _nodes;

    const originalError = (0, _toError.toError)(rawOriginalError); // Note: this uses a brand-check to support GraphQL errors originating from other contexts.

    if (isLocatedGraphQLError(originalError)) {
      return originalError;
    }

    return new _GraphQLError$6.GraphQLError(
      originalError.message,
      (_nodes = originalError.nodes) !== null && _nodes !== void 0
        ? _nodes
        : nodes,
      originalError.source,
      originalError.positions,
      path,
      originalError,
    );
  }

  function isLocatedGraphQLError(error) {
    return Array.isArray(error.path);
  }

  Object.defineProperty(execute$1, '__esModule', {
    value: true,
  });
  execute$1.assertValidExecutionArguments = assertValidExecutionArguments;
  execute$1.buildExecutionContext = buildExecutionContext;
  execute$1.buildResolveInfo = buildResolveInfo;
  execute$1.defaultTypeResolver = execute$1.defaultFieldResolver = void 0;
  execute$1.execute = execute;
  execute$1.executeSync = executeSync;
  execute$1.getFieldDef = getFieldDef;

  var _devAssert$6 = devAssert$1;

  var _inspect$6 = inspect$1;

  var _invariant$6 = invariant$1;

  var _isIterableObject = isIterableObject$1;

  var _isObjectLike$1 = isObjectLike$1;

  var _isPromise$1 = isPromise$1;

  var _memoize = memoize3$1;

  var _Path$1 = Path;

  var _promiseForObject = promiseForObject$1;

  var _promiseReduce = promiseReduce$1;

  var _GraphQLError$5 = GraphQLError$1;

  var _locatedError$1 = locatedError$1;

  var _ast = ast;

  var _kinds$6 = kinds;

  var _definition$7 = definition;

  var _introspection$5 = introspection;

  var _validate$3 = validate$2;

  var _collectFields$1 = collectFields$1;

  var _values$2 = values;

  /**
   * A memoized collection of relevant subfields with regard to the return
   * type. Memoizing ensures the subfields are not repeatedly calculated, which
   * saves overhead when resolving lists of values.
   */
  const collectSubfields = (0, _memoize.memoize3)(
    (exeContext, returnType, fieldNodes) =>
      (0, _collectFields$1.collectSubfields)(
        exeContext.schema,
        exeContext.fragments,
        exeContext.variableValues,
        returnType,
        fieldNodes,
      ),
  );
  /**
   * Terminology
   *
   * "Definitions" are the generic name for top-level statements in the document.
   * Examples of this include:
   * 1) Operations (such as a query)
   * 2) Fragments
   *
   * "Operations" are a generic name for requests in the document.
   * Examples of this include:
   * 1) query,
   * 2) mutation
   *
   * "Selections" are the definitions that can appear legally and at
   * single level of the query. These include:
   * 1) field references e.g `a`
   * 2) fragment "spreads" e.g. `...c`
   * 3) inline fragment "spreads" e.g. `...on Type { a }`
   */

  /**
   * Data that must be available at all points during query execution.
   *
   * Namely, schema of the type system that is currently executing,
   * and the fragments defined in the query document
   */

  /**
   * Implements the "Executing requests" section of the GraphQL specification.
   *
   * Returns either a synchronous ExecutionResult (if all encountered resolvers
   * are synchronous), or a Promise of an ExecutionResult that will eventually be
   * resolved and never rejected.
   *
   * If the arguments to this function do not result in a legal execution context,
   * a GraphQLError will be thrown immediately explaining the invalid input.
   */
  function execute(args) {
    // Temporary for v15 to v16 migration. Remove in v17
    arguments.length < 2 ||
      (0, _devAssert$6.devAssert)(
        false,
        'graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead.',
      );
    const { schema, document, variableValues, rootValue } = args; // If arguments are missing or incorrect, throw an error.

    assertValidExecutionArguments(schema, document, variableValues); // If a valid execution context cannot be created due to incorrect arguments,
    // a "Response" with only errors is returned.

    const exeContext = buildExecutionContext(args); // Return early errors if execution context failed.

    if (!('schema' in exeContext)) {
      return {
        errors: exeContext,
      };
    } // Return a Promise that will eventually resolve to the data described by
    // The "Response" section of the GraphQL specification.
    //
    // If errors are encountered while executing a GraphQL field, only that
    // field and its descendants will be omitted, and sibling fields will still
    // be executed. An execution which encounters errors will still result in a
    // resolved Promise.
    //
    // Errors from sub-fields of a NonNull type may propagate to the top level,
    // at which point we still log the error and null the parent field, which
    // in this case is the entire response.

    try {
      const { operation } = exeContext;
      const result = executeOperation(exeContext, operation, rootValue);

      if ((0, _isPromise$1.isPromise)(result)) {
        return result.then(
          (data) => buildResponse(data, exeContext.errors),
          (error) => {
            exeContext.errors.push(error);
            return buildResponse(null, exeContext.errors);
          },
        );
      }

      return buildResponse(result, exeContext.errors);
    } catch (error) {
      exeContext.errors.push(error);
      return buildResponse(null, exeContext.errors);
    }
  }
  /**
   * Also implements the "Executing requests" section of the GraphQL specification.
   * However, it guarantees to complete synchronously (or throw an error) assuming
   * that all field resolvers are also synchronous.
   */

  function executeSync(args) {
    const result = execute(args); // Assert that the execution was synchronous.

    if ((0, _isPromise$1.isPromise)(result)) {
      throw new Error('GraphQL execution failed to complete synchronously.');
    }

    return result;
  }
  /**
   * Given a completed execution context and data, build the `{ errors, data }`
   * response defined by the "Response" section of the GraphQL specification.
   */

  function buildResponse(data, errors) {
    return errors.length === 0
      ? {
          data,
        }
      : {
          errors,
          data,
        };
  }
  /**
   * Essential assertions before executing to provide developer feedback for
   * improper use of the GraphQL library.
   *
   * @internal
   */

  function assertValidExecutionArguments(schema, document, rawVariableValues) {
    document || (0, _devAssert$6.devAssert)(false, 'Must provide document.'); // If the schema used for execution is invalid, throw an error.

    (0, _validate$3.assertValidSchema)(schema); // Variables, if provided, must be an object.

    rawVariableValues == null ||
      (0, _isObjectLike$1.isObjectLike)(rawVariableValues) ||
      (0, _devAssert$6.devAssert)(
        false,
        'Variables must be provided as an Object where each property is a variable value. Perhaps look to see if an unparsed JSON string was provided.',
      );
  }
  /**
   * Constructs a ExecutionContext object from the arguments passed to
   * execute, which we will pass throughout the other execution methods.
   *
   * Throws a GraphQLError if a valid execution context cannot be created.
   *
   * @internal
   */

  function buildExecutionContext(args) {
    var _definition$name, _operation$variableDe;

    const {
      schema,
      document,
      rootValue,
      contextValue,
      variableValues: rawVariableValues,
      operationName,
      fieldResolver,
      typeResolver,
      subscribeFieldResolver,
    } = args;
    let operation;
    const fragments = Object.create(null);

    for (const definition of document.definitions) {
      switch (definition.kind) {
        case _kinds$6.Kind.OPERATION_DEFINITION:
          if (operationName == null) {
            if (operation !== undefined) {
              return [
                new _GraphQLError$5.GraphQLError(
                  'Must provide operation name if query contains multiple operations.',
                ),
              ];
            }

            operation = definition;
          } else if (
            ((_definition$name = definition.name) === null ||
            _definition$name === void 0
              ? void 0
              : _definition$name.value) === operationName
          ) {
            operation = definition;
          }

          break;

        case _kinds$6.Kind.FRAGMENT_DEFINITION:
          fragments[definition.name.value] = definition;
          break;
      }
    }

    if (!operation) {
      if (operationName != null) {
        return [
          new _GraphQLError$5.GraphQLError(
            `Unknown operation named "${operationName}".`,
          ),
        ];
      }

      return [new _GraphQLError$5.GraphQLError('Must provide an operation.')];
    } // FIXME: https://github.com/graphql/graphql-js/issues/2203

    /* c8 ignore next */

    const variableDefinitions =
      (_operation$variableDe = operation.variableDefinitions) !== null &&
      _operation$variableDe !== void 0
        ? _operation$variableDe
        : [];
    const coercedVariableValues = (0, _values$2.getVariableValues)(
      schema,
      variableDefinitions,
      rawVariableValues !== null && rawVariableValues !== void 0
        ? rawVariableValues
        : {},
      {
        maxErrors: 50,
      },
    );

    if (coercedVariableValues.errors) {
      return coercedVariableValues.errors;
    }

    return {
      schema,
      fragments,
      rootValue,
      contextValue,
      operation,
      variableValues: coercedVariableValues.coerced,
      fieldResolver:
        fieldResolver !== null && fieldResolver !== void 0
          ? fieldResolver
          : defaultFieldResolver,
      typeResolver:
        typeResolver !== null && typeResolver !== void 0
          ? typeResolver
          : defaultTypeResolver,
      subscribeFieldResolver:
        subscribeFieldResolver !== null && subscribeFieldResolver !== void 0
          ? subscribeFieldResolver
          : defaultFieldResolver,
      errors: [],
    };
  }
  /**
   * Implements the "Executing operations" section of the spec.
   */

  function executeOperation(exeContext, operation, rootValue) {
    const rootType = exeContext.schema.getRootType(operation.operation);

    if (rootType == null) {
      throw new _GraphQLError$5.GraphQLError(
        `Schema is not configured to execute ${operation.operation} operation.`,
        operation,
      );
    }

    const rootFields = (0, _collectFields$1.collectFields)(
      exeContext.schema,
      exeContext.fragments,
      exeContext.variableValues,
      rootType,
      operation.selectionSet,
    );
    const path = undefined;

    switch (operation.operation) {
      case _ast.OperationTypeNode.QUERY:
        return executeFields(exeContext, rootType, rootValue, path, rootFields);

      case _ast.OperationTypeNode.MUTATION:
        return executeFieldsSerially(
          exeContext,
          rootType,
          rootValue,
          path,
          rootFields,
        );

      case _ast.OperationTypeNode.SUBSCRIPTION:
        // TODO: deprecate `subscribe` and move all logic here
        // Temporary solution until we finish merging execute and subscribe together
        return executeFields(exeContext, rootType, rootValue, path, rootFields);
    }
  }
  /**
   * Implements the "Executing selection sets" section of the spec
   * for fields that must be executed serially.
   */

  function executeFieldsSerially(
    exeContext,
    parentType,
    sourceValue,
    path,
    fields,
  ) {
    return (0, _promiseReduce.promiseReduce)(
      fields.entries(),
      (results, [responseName, fieldNodes]) => {
        const fieldPath = (0, _Path$1.addPath)(path, responseName, parentType.name);
        const result = executeField(
          exeContext,
          parentType,
          sourceValue,
          fieldNodes,
          fieldPath,
        );

        if (result === undefined) {
          return results;
        }

        if ((0, _isPromise$1.isPromise)(result)) {
          return result.then((resolvedResult) => {
            results[responseName] = resolvedResult;
            return results;
          });
        }

        results[responseName] = result;
        return results;
      },
      Object.create(null),
    );
  }
  /**
   * Implements the "Executing selection sets" section of the spec
   * for fields that may be executed in parallel.
   */

  function executeFields(exeContext, parentType, sourceValue, path, fields) {
    const results = Object.create(null);
    let containsPromise = false;

    for (const [responseName, fieldNodes] of fields.entries()) {
      const fieldPath = (0, _Path$1.addPath)(path, responseName, parentType.name);
      const result = executeField(
        exeContext,
        parentType,
        sourceValue,
        fieldNodes,
        fieldPath,
      );

      if (result !== undefined) {
        results[responseName] = result;

        if ((0, _isPromise$1.isPromise)(result)) {
          containsPromise = true;
        }
      }
    } // If there are no promises, we can just return the object

    if (!containsPromise) {
      return results;
    } // Otherwise, results is a map from field name to the result of resolving that
    // field, which is possibly a promise. Return a promise that will return this
    // same map, but with any promises replaced with the values they resolved to.

    return (0, _promiseForObject.promiseForObject)(results);
  }
  /**
   * Implements the "Executing fields" section of the spec
   * In particular, this function figures out the value that the field returns by
   * calling its resolve function, then calls completeValue to complete promises,
   * serialize scalars, or execute the sub-selection-set for objects.
   */

  function executeField(exeContext, parentType, source, fieldNodes, path) {
    var _fieldDef$resolve;

    const fieldDef = getFieldDef(exeContext.schema, parentType, fieldNodes[0]);

    if (!fieldDef) {
      return;
    }

    const returnType = fieldDef.type;
    const resolveFn =
      (_fieldDef$resolve = fieldDef.resolve) !== null &&
      _fieldDef$resolve !== void 0
        ? _fieldDef$resolve
        : exeContext.fieldResolver;
    const info = buildResolveInfo(
      exeContext,
      fieldDef,
      fieldNodes,
      parentType,
      path,
    ); // Get the resolve function, regardless of if its result is normal or abrupt (error).

    try {
      // Build a JS object of arguments from the field.arguments AST, using the
      // variables scope to fulfill any variable references.
      // TODO: find a way to memoize, in case this field is within a List type.
      const args = (0, _values$2.getArgumentValues)(
        fieldDef,
        fieldNodes[0],
        exeContext.variableValues,
      ); // The resolve function's optional third argument is a context value that
      // is provided to every resolve function within an execution. It is commonly
      // used to represent an authenticated user, or request-specific caches.

      const contextValue = exeContext.contextValue;
      const result = resolveFn(source, args, contextValue, info);
      let completed;

      if ((0, _isPromise$1.isPromise)(result)) {
        completed = result.then((resolved) =>
          completeValue(exeContext, returnType, fieldNodes, info, path, resolved),
        );
      } else {
        completed = completeValue(
          exeContext,
          returnType,
          fieldNodes,
          info,
          path,
          result,
        );
      }

      if ((0, _isPromise$1.isPromise)(completed)) {
        // Note: we don't rely on a `catch` method, but we do expect "thenable"
        // to take a second callback for the error case.
        return completed.then(undefined, (rawError) => {
          const error = (0, _locatedError$1.locatedError)(
            rawError,
            fieldNodes,
            (0, _Path$1.pathToArray)(path),
          );
          return handleFieldError(error, returnType, exeContext);
        });
      }

      return completed;
    } catch (rawError) {
      const error = (0, _locatedError$1.locatedError)(
        rawError,
        fieldNodes,
        (0, _Path$1.pathToArray)(path),
      );
      return handleFieldError(error, returnType, exeContext);
    }
  }
  /**
   * @internal
   */

  function buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path) {
    // The resolve function's optional fourth argument is a collection of
    // information about the current execution state.
    return {
      fieldName: fieldDef.name,
      fieldNodes,
      returnType: fieldDef.type,
      parentType,
      path,
      schema: exeContext.schema,
      fragments: exeContext.fragments,
      rootValue: exeContext.rootValue,
      operation: exeContext.operation,
      variableValues: exeContext.variableValues,
    };
  }

  function handleFieldError(error, returnType, exeContext) {
    // If the field type is non-nullable, then it is resolved without any
    // protection from errors, however it still properly locates the error.
    if ((0, _definition$7.isNonNullType)(returnType)) {
      throw error;
    } // Otherwise, error protection is applied, logging the error and resolving
    // a null value for this field if one is encountered.

    exeContext.errors.push(error);
    return null;
  }
  /**
   * Implements the instructions for completeValue as defined in the
   * "Value Completion" section of the spec.
   *
   * If the field type is Non-Null, then this recursively completes the value
   * for the inner type. It throws a field error if that completion returns null,
   * as per the "Nullability" section of the spec.
   *
   * If the field type is a List, then this recursively completes the value
   * for the inner type on each item in the list.
   *
   * If the field type is a Scalar or Enum, ensures the completed value is a legal
   * value of the type by calling the `serialize` method of GraphQL type
   * definition.
   *
   * If the field is an abstract type, determine the runtime type of the value
   * and then complete based on that type
   *
   * Otherwise, the field type expects a sub-selection set, and will complete the
   * value by executing all sub-selections.
   */

  function completeValue(exeContext, returnType, fieldNodes, info, path, result) {
    // If result is an Error, throw a located error.
    if (result instanceof Error) {
      throw result;
    } // If field type is NonNull, complete for inner type, and throw field error
    // if result is null.

    if ((0, _definition$7.isNonNullType)(returnType)) {
      const completed = completeValue(
        exeContext,
        returnType.ofType,
        fieldNodes,
        info,
        path,
        result,
      );

      if (completed === null) {
        throw new Error(
          `Cannot return null for non-nullable field ${info.parentType.name}.${info.fieldName}.`,
        );
      }

      return completed;
    } // If result value is null or undefined then return null.

    if (result == null) {
      return null;
    } // If field type is List, complete each item in the list with the inner type

    if ((0, _definition$7.isListType)(returnType)) {
      return completeListValue(
        exeContext,
        returnType,
        fieldNodes,
        info,
        path,
        result,
      );
    } // If field type is a leaf type, Scalar or Enum, serialize to a valid value,
    // returning null if serialization is not possible.

    if ((0, _definition$7.isLeafType)(returnType)) {
      return completeLeafValue(returnType, result);
    } // If field type is an abstract type, Interface or Union, determine the
    // runtime Object type and complete for that type.

    if ((0, _definition$7.isAbstractType)(returnType)) {
      return completeAbstractValue(
        exeContext,
        returnType,
        fieldNodes,
        info,
        path,
        result,
      );
    } // If field type is Object, execute and complete all sub-selections.

    if ((0, _definition$7.isObjectType)(returnType)) {
      return completeObjectValue(
        exeContext,
        returnType,
        fieldNodes,
        info,
        path,
        result,
      );
    }
    /* c8 ignore next 6 */
    // Not reachable, all possible output types have been considered.

    (0, _invariant$6.invariant)(
        false,
        'Cannot complete value of unexpected output type: ' +
          (0, _inspect$6.inspect)(returnType),
      );
  }
  /**
   * Complete a list value by completing each item in the list with the
   * inner type
   */

  function completeListValue(
    exeContext,
    returnType,
    fieldNodes,
    info,
    path,
    result,
  ) {
    if (!(0, _isIterableObject.isIterableObject)(result)) {
      throw new _GraphQLError$5.GraphQLError(
        `Expected Iterable, but did not find one for field "${info.parentType.name}.${info.fieldName}".`,
      );
    } // This is specified as a simple map, however we're optimizing the path
    // where the list contains no Promises by avoiding creating another Promise.

    const itemType = returnType.ofType;
    let containsPromise = false;
    const completedResults = Array.from(result, (item, index) => {
      // No need to modify the info object containing the path,
      // since from here on it is not ever accessed by resolver functions.
      const itemPath = (0, _Path$1.addPath)(path, index, undefined);

      try {
        let completedItem;

        if ((0, _isPromise$1.isPromise)(item)) {
          completedItem = item.then((resolved) =>
            completeValue(
              exeContext,
              itemType,
              fieldNodes,
              info,
              itemPath,
              resolved,
            ),
          );
        } else {
          completedItem = completeValue(
            exeContext,
            itemType,
            fieldNodes,
            info,
            itemPath,
            item,
          );
        }

        if ((0, _isPromise$1.isPromise)(completedItem)) {
          containsPromise = true; // Note: we don't rely on a `catch` method, but we do expect "thenable"
          // to take a second callback for the error case.

          return completedItem.then(undefined, (rawError) => {
            const error = (0, _locatedError$1.locatedError)(
              rawError,
              fieldNodes,
              (0, _Path$1.pathToArray)(itemPath),
            );
            return handleFieldError(error, itemType, exeContext);
          });
        }

        return completedItem;
      } catch (rawError) {
        const error = (0, _locatedError$1.locatedError)(
          rawError,
          fieldNodes,
          (0, _Path$1.pathToArray)(itemPath),
        );
        return handleFieldError(error, itemType, exeContext);
      }
    });
    return containsPromise ? Promise.all(completedResults) : completedResults;
  }
  /**
   * Complete a Scalar or Enum by serializing to a valid value, returning
   * null if serialization is not possible.
   */

  function completeLeafValue(returnType, result) {
    const serializedResult = returnType.serialize(result);

    if (serializedResult == null) {
      throw new Error(
        `Expected \`${(0, _inspect$6.inspect)(returnType)}.serialize(${(0, _inspect$6.inspect)(result)})\` to ` +
          `return non-nullable value, returned: ${(0, _inspect$6.inspect)(
          serializedResult,
        )}`,
      );
    }

    return serializedResult;
  }
  /**
   * Complete a value of an abstract type by determining the runtime object type
   * of that value, then complete the value for that type.
   */

  function completeAbstractValue(
    exeContext,
    returnType,
    fieldNodes,
    info,
    path,
    result,
  ) {
    var _returnType$resolveTy;

    const resolveTypeFn =
      (_returnType$resolveTy = returnType.resolveType) !== null &&
      _returnType$resolveTy !== void 0
        ? _returnType$resolveTy
        : exeContext.typeResolver;
    const contextValue = exeContext.contextValue;
    const runtimeType = resolveTypeFn(result, contextValue, info, returnType);

    if ((0, _isPromise$1.isPromise)(runtimeType)) {
      return runtimeType.then((resolvedRuntimeType) =>
        completeObjectValue(
          exeContext,
          ensureValidRuntimeType(
            resolvedRuntimeType,
            exeContext,
            returnType,
            fieldNodes,
            info,
            result,
          ),
          fieldNodes,
          info,
          path,
          result,
        ),
      );
    }

    return completeObjectValue(
      exeContext,
      ensureValidRuntimeType(
        runtimeType,
        exeContext,
        returnType,
        fieldNodes,
        info,
        result,
      ),
      fieldNodes,
      info,
      path,
      result,
    );
  }

  function ensureValidRuntimeType(
    runtimeTypeName,
    exeContext,
    returnType,
    fieldNodes,
    info,
    result,
  ) {
    if (runtimeTypeName == null) {
      throw new _GraphQLError$5.GraphQLError(
        `Abstract type "${returnType.name}" must resolve to an Object type at runtime for field "${info.parentType.name}.${info.fieldName}". Either the "${returnType.name}" type should provide a "resolveType" function or each possible type should provide an "isTypeOf" function.`,
        fieldNodes,
      );
    } // releases before 16.0.0 supported returning `GraphQLObjectType` from `resolveType`
    // TODO: remove in 17.0.0 release

    if ((0, _definition$7.isObjectType)(runtimeTypeName)) {
      throw new _GraphQLError$5.GraphQLError(
        'Support for returning GraphQLObjectType from resolveType was removed in graphql-js@16.0.0 please return type name instead.',
      );
    }

    if (typeof runtimeTypeName !== 'string') {
      throw new _GraphQLError$5.GraphQLError(
        `Abstract type "${returnType.name}" must resolve to an Object type at runtime for field "${info.parentType.name}.${info.fieldName}" with ` +
          `value ${(0, _inspect$6.inspect)(result)}, received "${(0, _inspect$6.inspect)(runtimeTypeName)}".`,
      );
    }

    const runtimeType = exeContext.schema.getType(runtimeTypeName);

    if (runtimeType == null) {
      throw new _GraphQLError$5.GraphQLError(
        `Abstract type "${returnType.name}" was resolved to a type "${runtimeTypeName}" that does not exist inside the schema.`,
        fieldNodes,
      );
    }

    if (!(0, _definition$7.isObjectType)(runtimeType)) {
      throw new _GraphQLError$5.GraphQLError(
        `Abstract type "${returnType.name}" was resolved to a non-object type "${runtimeTypeName}".`,
        fieldNodes,
      );
    }

    if (!exeContext.schema.isSubType(returnType, runtimeType)) {
      throw new _GraphQLError$5.GraphQLError(
        `Runtime Object type "${runtimeType.name}" is not a possible type for "${returnType.name}".`,
        fieldNodes,
      );
    }

    return runtimeType;
  }
  /**
   * Complete an Object value by executing all sub-selections.
   */

  function completeObjectValue(
    exeContext,
    returnType,
    fieldNodes,
    info,
    path,
    result,
  ) {
    // Collect sub-fields to execute to complete this value.
    const subFieldNodes = collectSubfields(exeContext, returnType, fieldNodes); // If there is an isTypeOf predicate function, call it with the
    // current result. If isTypeOf returns false, then raise an error rather
    // than continuing execution.

    if (returnType.isTypeOf) {
      const isTypeOf = returnType.isTypeOf(result, exeContext.contextValue, info);

      if ((0, _isPromise$1.isPromise)(isTypeOf)) {
        return isTypeOf.then((resolvedIsTypeOf) => {
          if (!resolvedIsTypeOf) {
            throw invalidReturnTypeError(returnType, result, fieldNodes);
          }

          return executeFields(
            exeContext,
            returnType,
            result,
            path,
            subFieldNodes,
          );
        });
      }

      if (!isTypeOf) {
        throw invalidReturnTypeError(returnType, result, fieldNodes);
      }
    }

    return executeFields(exeContext, returnType, result, path, subFieldNodes);
  }

  function invalidReturnTypeError(returnType, result, fieldNodes) {
    return new _GraphQLError$5.GraphQLError(
      `Expected value of type "${returnType.name}" but got: ${(0, _inspect$6.inspect)(result)}.`,
      fieldNodes,
    );
  }
  /**
   * If a resolveType function is not given, then a default resolve behavior is
   * used which attempts two strategies:
   *
   * First, See if the provided value has a `__typename` field defined, if so, use
   * that value as name of the resolved type.
   *
   * Otherwise, test each possible type for the abstract type by calling
   * isTypeOf for the object being coerced, returning the first type that matches.
   */

  const defaultTypeResolver = function (value, contextValue, info, abstractType) {
    // First, look for `__typename`.
    if (
      (0, _isObjectLike$1.isObjectLike)(value) &&
      typeof value.__typename === 'string'
    ) {
      return value.__typename;
    } // Otherwise, test each possible type.

    const possibleTypes = info.schema.getPossibleTypes(abstractType);
    const promisedIsTypeOfResults = [];

    for (let i = 0; i < possibleTypes.length; i++) {
      const type = possibleTypes[i];

      if (type.isTypeOf) {
        const isTypeOfResult = type.isTypeOf(value, contextValue, info);

        if ((0, _isPromise$1.isPromise)(isTypeOfResult)) {
          promisedIsTypeOfResults[i] = isTypeOfResult;
        } else if (isTypeOfResult) {
          return type.name;
        }
      }
    }

    if (promisedIsTypeOfResults.length) {
      return Promise.all(promisedIsTypeOfResults).then((isTypeOfResults) => {
        for (let i = 0; i < isTypeOfResults.length; i++) {
          if (isTypeOfResults[i]) {
            return possibleTypes[i].name;
          }
        }
      });
    }
  };
  /**
   * If a resolve function is not given, then a default resolve behavior is used
   * which takes the property of the source object of the same name as the field
   * and returns it as the result, or if it's a function, returns the result
   * of calling that function while passing along args and context value.
   */

  execute$1.defaultTypeResolver = defaultTypeResolver;

  const defaultFieldResolver = function (source, args, contextValue, info) {
    // ensure source is a value for which property access is acceptable.
    if ((0, _isObjectLike$1.isObjectLike)(source) || typeof source === 'function') {
      const property = source[info.fieldName];

      if (typeof property === 'function') {
        return source[info.fieldName](args, contextValue, info);
      }

      return property;
    }
  };
  /**
   * This method looks up the field on the given type definition.
   * It has special casing for the three introspection fields,
   * __schema, __type and __typename. __typename is special because
   * it can always be queried as a field, even in situations where no
   * other fields are allowed, like on a Union. __schema and __type
   * could get automatically added to the query type, but that would
   * require mutating type definitions, which would cause issues.
   *
   * @internal
   */

  execute$1.defaultFieldResolver = defaultFieldResolver;

  function getFieldDef(schema, parentType, fieldNode) {
    const fieldName = fieldNode.name.value;

    if (
      fieldName === _introspection$5.SchemaMetaFieldDef.name &&
      schema.getQueryType() === parentType
    ) {
      return _introspection$5.SchemaMetaFieldDef;
    } else if (
      fieldName === _introspection$5.TypeMetaFieldDef.name &&
      schema.getQueryType() === parentType
    ) {
      return _introspection$5.TypeMetaFieldDef;
    } else if (fieldName === _introspection$5.TypeNameMetaFieldDef.name) {
      return _introspection$5.TypeNameMetaFieldDef;
    }

    return parentType.getFields()[fieldName];
  }

  Object.defineProperty(graphql$2, '__esModule', {
    value: true,
  });
  graphql$2.graphql = graphql$1;
  graphql$2.graphqlSync = graphqlSync;

  var _devAssert$5 = devAssert$1;

  var _isPromise = isPromise$1;

  var _parser$3 = parser;

  var _validate$2 = validate$2;

  var _validate2 = validate$1;

  var _execute$2 = execute$1;

  function graphql$1(args) {
    // Always return a Promise for a consistent API.
    return new Promise((resolve) => resolve(graphqlImpl(args)));
  }
  /**
   * The graphqlSync function also fulfills GraphQL operations by parsing,
   * validating, and executing a GraphQL document along side a GraphQL schema.
   * However, it guarantees to complete synchronously (or throw an error) assuming
   * that all field resolvers are also synchronous.
   */

  function graphqlSync(args) {
    const result = graphqlImpl(args); // Assert that the execution was synchronous.

    if ((0, _isPromise.isPromise)(result)) {
      throw new Error('GraphQL execution failed to complete synchronously.');
    }

    return result;
  }

  function graphqlImpl(args) {
    // Temporary for v15 to v16 migration. Remove in v17
    arguments.length < 2 ||
      (0, _devAssert$5.devAssert)(
        false,
        'graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead.',
      );
    const {
      schema,
      source,
      rootValue,
      contextValue,
      variableValues,
      operationName,
      fieldResolver,
      typeResolver,
    } = args; // Validate Schema

    const schemaValidationErrors = (0, _validate$2.validateSchema)(schema);

    if (schemaValidationErrors.length > 0) {
      return {
        errors: schemaValidationErrors,
      };
    } // Parse

    let document;

    try {
      document = (0, _parser$3.parse)(source);
    } catch (syntaxError) {
      return {
        errors: [syntaxError],
      };
    } // Validate

    const validationErrors = (0, _validate2.validate)(schema, document);

    if (validationErrors.length > 0) {
      return {
        errors: validationErrors,
      };
    } // Execute

    return (0, _execute$2.execute)({
      schema,
      document,
      rootValue,
      contextValue,
      variableValues,
      operationName,
      fieldResolver,
      typeResolver,
    });
  }

  var type = {};

  (function (exports) {

  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  Object.defineProperty(exports, 'DEFAULT_DEPRECATION_REASON', {
    enumerable: true,
    get: function () {
      return _directives.DEFAULT_DEPRECATION_REASON;
    },
  });
  Object.defineProperty(exports, 'GRAPHQL_MAX_INT', {
    enumerable: true,
    get: function () {
      return _scalars.GRAPHQL_MAX_INT;
    },
  });
  Object.defineProperty(exports, 'GRAPHQL_MIN_INT', {
    enumerable: true,
    get: function () {
      return _scalars.GRAPHQL_MIN_INT;
    },
  });
  Object.defineProperty(exports, 'GraphQLBoolean', {
    enumerable: true,
    get: function () {
      return _scalars.GraphQLBoolean;
    },
  });
  Object.defineProperty(exports, 'GraphQLDeprecatedDirective', {
    enumerable: true,
    get: function () {
      return _directives.GraphQLDeprecatedDirective;
    },
  });
  Object.defineProperty(exports, 'GraphQLDirective', {
    enumerable: true,
    get: function () {
      return _directives.GraphQLDirective;
    },
  });
  Object.defineProperty(exports, 'GraphQLEnumType', {
    enumerable: true,
    get: function () {
      return _definition.GraphQLEnumType;
    },
  });
  Object.defineProperty(exports, 'GraphQLFloat', {
    enumerable: true,
    get: function () {
      return _scalars.GraphQLFloat;
    },
  });
  Object.defineProperty(exports, 'GraphQLID', {
    enumerable: true,
    get: function () {
      return _scalars.GraphQLID;
    },
  });
  Object.defineProperty(exports, 'GraphQLIncludeDirective', {
    enumerable: true,
    get: function () {
      return _directives.GraphQLIncludeDirective;
    },
  });
  Object.defineProperty(exports, 'GraphQLInputObjectType', {
    enumerable: true,
    get: function () {
      return _definition.GraphQLInputObjectType;
    },
  });
  Object.defineProperty(exports, 'GraphQLInt', {
    enumerable: true,
    get: function () {
      return _scalars.GraphQLInt;
    },
  });
  Object.defineProperty(exports, 'GraphQLInterfaceType', {
    enumerable: true,
    get: function () {
      return _definition.GraphQLInterfaceType;
    },
  });
  Object.defineProperty(exports, 'GraphQLList', {
    enumerable: true,
    get: function () {
      return _definition.GraphQLList;
    },
  });
  Object.defineProperty(exports, 'GraphQLNonNull', {
    enumerable: true,
    get: function () {
      return _definition.GraphQLNonNull;
    },
  });
  Object.defineProperty(exports, 'GraphQLObjectType', {
    enumerable: true,
    get: function () {
      return _definition.GraphQLObjectType;
    },
  });
  Object.defineProperty(exports, 'GraphQLScalarType', {
    enumerable: true,
    get: function () {
      return _definition.GraphQLScalarType;
    },
  });
  Object.defineProperty(exports, 'GraphQLSchema', {
    enumerable: true,
    get: function () {
      return _schema.GraphQLSchema;
    },
  });
  Object.defineProperty(exports, 'GraphQLSkipDirective', {
    enumerable: true,
    get: function () {
      return _directives.GraphQLSkipDirective;
    },
  });
  Object.defineProperty(exports, 'GraphQLSpecifiedByDirective', {
    enumerable: true,
    get: function () {
      return _directives.GraphQLSpecifiedByDirective;
    },
  });
  Object.defineProperty(exports, 'GraphQLString', {
    enumerable: true,
    get: function () {
      return _scalars.GraphQLString;
    },
  });
  Object.defineProperty(exports, 'GraphQLUnionType', {
    enumerable: true,
    get: function () {
      return _definition.GraphQLUnionType;
    },
  });
  Object.defineProperty(exports, 'SchemaMetaFieldDef', {
    enumerable: true,
    get: function () {
      return _introspection.SchemaMetaFieldDef;
    },
  });
  Object.defineProperty(exports, 'TypeKind', {
    enumerable: true,
    get: function () {
      return _introspection.TypeKind;
    },
  });
  Object.defineProperty(exports, 'TypeMetaFieldDef', {
    enumerable: true,
    get: function () {
      return _introspection.TypeMetaFieldDef;
    },
  });
  Object.defineProperty(exports, 'TypeNameMetaFieldDef', {
    enumerable: true,
    get: function () {
      return _introspection.TypeNameMetaFieldDef;
    },
  });
  Object.defineProperty(exports, '__Directive', {
    enumerable: true,
    get: function () {
      return _introspection.__Directive;
    },
  });
  Object.defineProperty(exports, '__DirectiveLocation', {
    enumerable: true,
    get: function () {
      return _introspection.__DirectiveLocation;
    },
  });
  Object.defineProperty(exports, '__EnumValue', {
    enumerable: true,
    get: function () {
      return _introspection.__EnumValue;
    },
  });
  Object.defineProperty(exports, '__Field', {
    enumerable: true,
    get: function () {
      return _introspection.__Field;
    },
  });
  Object.defineProperty(exports, '__InputValue', {
    enumerable: true,
    get: function () {
      return _introspection.__InputValue;
    },
  });
  Object.defineProperty(exports, '__Schema', {
    enumerable: true,
    get: function () {
      return _introspection.__Schema;
    },
  });
  Object.defineProperty(exports, '__Type', {
    enumerable: true,
    get: function () {
      return _introspection.__Type;
    },
  });
  Object.defineProperty(exports, '__TypeKind', {
    enumerable: true,
    get: function () {
      return _introspection.__TypeKind;
    },
  });
  Object.defineProperty(exports, 'assertAbstractType', {
    enumerable: true,
    get: function () {
      return _definition.assertAbstractType;
    },
  });
  Object.defineProperty(exports, 'assertCompositeType', {
    enumerable: true,
    get: function () {
      return _definition.assertCompositeType;
    },
  });
  Object.defineProperty(exports, 'assertDirective', {
    enumerable: true,
    get: function () {
      return _directives.assertDirective;
    },
  });
  Object.defineProperty(exports, 'assertEnumType', {
    enumerable: true,
    get: function () {
      return _definition.assertEnumType;
    },
  });
  Object.defineProperty(exports, 'assertEnumValueName', {
    enumerable: true,
    get: function () {
      return _assertName.assertEnumValueName;
    },
  });
  Object.defineProperty(exports, 'assertInputObjectType', {
    enumerable: true,
    get: function () {
      return _definition.assertInputObjectType;
    },
  });
  Object.defineProperty(exports, 'assertInputType', {
    enumerable: true,
    get: function () {
      return _definition.assertInputType;
    },
  });
  Object.defineProperty(exports, 'assertInterfaceType', {
    enumerable: true,
    get: function () {
      return _definition.assertInterfaceType;
    },
  });
  Object.defineProperty(exports, 'assertLeafType', {
    enumerable: true,
    get: function () {
      return _definition.assertLeafType;
    },
  });
  Object.defineProperty(exports, 'assertListType', {
    enumerable: true,
    get: function () {
      return _definition.assertListType;
    },
  });
  Object.defineProperty(exports, 'assertName', {
    enumerable: true,
    get: function () {
      return _assertName.assertName;
    },
  });
  Object.defineProperty(exports, 'assertNamedType', {
    enumerable: true,
    get: function () {
      return _definition.assertNamedType;
    },
  });
  Object.defineProperty(exports, 'assertNonNullType', {
    enumerable: true,
    get: function () {
      return _definition.assertNonNullType;
    },
  });
  Object.defineProperty(exports, 'assertNullableType', {
    enumerable: true,
    get: function () {
      return _definition.assertNullableType;
    },
  });
  Object.defineProperty(exports, 'assertObjectType', {
    enumerable: true,
    get: function () {
      return _definition.assertObjectType;
    },
  });
  Object.defineProperty(exports, 'assertOutputType', {
    enumerable: true,
    get: function () {
      return _definition.assertOutputType;
    },
  });
  Object.defineProperty(exports, 'assertScalarType', {
    enumerable: true,
    get: function () {
      return _definition.assertScalarType;
    },
  });
  Object.defineProperty(exports, 'assertSchema', {
    enumerable: true,
    get: function () {
      return _schema.assertSchema;
    },
  });
  Object.defineProperty(exports, 'assertType', {
    enumerable: true,
    get: function () {
      return _definition.assertType;
    },
  });
  Object.defineProperty(exports, 'assertUnionType', {
    enumerable: true,
    get: function () {
      return _definition.assertUnionType;
    },
  });
  Object.defineProperty(exports, 'assertValidSchema', {
    enumerable: true,
    get: function () {
      return _validate.assertValidSchema;
    },
  });
  Object.defineProperty(exports, 'assertWrappingType', {
    enumerable: true,
    get: function () {
      return _definition.assertWrappingType;
    },
  });
  Object.defineProperty(exports, 'getNamedType', {
    enumerable: true,
    get: function () {
      return _definition.getNamedType;
    },
  });
  Object.defineProperty(exports, 'getNullableType', {
    enumerable: true,
    get: function () {
      return _definition.getNullableType;
    },
  });
  Object.defineProperty(exports, 'introspectionTypes', {
    enumerable: true,
    get: function () {
      return _introspection.introspectionTypes;
    },
  });
  Object.defineProperty(exports, 'isAbstractType', {
    enumerable: true,
    get: function () {
      return _definition.isAbstractType;
    },
  });
  Object.defineProperty(exports, 'isCompositeType', {
    enumerable: true,
    get: function () {
      return _definition.isCompositeType;
    },
  });
  Object.defineProperty(exports, 'isDirective', {
    enumerable: true,
    get: function () {
      return _directives.isDirective;
    },
  });
  Object.defineProperty(exports, 'isEnumType', {
    enumerable: true,
    get: function () {
      return _definition.isEnumType;
    },
  });
  Object.defineProperty(exports, 'isInputObjectType', {
    enumerable: true,
    get: function () {
      return _definition.isInputObjectType;
    },
  });
  Object.defineProperty(exports, 'isInputType', {
    enumerable: true,
    get: function () {
      return _definition.isInputType;
    },
  });
  Object.defineProperty(exports, 'isInterfaceType', {
    enumerable: true,
    get: function () {
      return _definition.isInterfaceType;
    },
  });
  Object.defineProperty(exports, 'isIntrospectionType', {
    enumerable: true,
    get: function () {
      return _introspection.isIntrospectionType;
    },
  });
  Object.defineProperty(exports, 'isLeafType', {
    enumerable: true,
    get: function () {
      return _definition.isLeafType;
    },
  });
  Object.defineProperty(exports, 'isListType', {
    enumerable: true,
    get: function () {
      return _definition.isListType;
    },
  });
  Object.defineProperty(exports, 'isNamedType', {
    enumerable: true,
    get: function () {
      return _definition.isNamedType;
    },
  });
  Object.defineProperty(exports, 'isNonNullType', {
    enumerable: true,
    get: function () {
      return _definition.isNonNullType;
    },
  });
  Object.defineProperty(exports, 'isNullableType', {
    enumerable: true,
    get: function () {
      return _definition.isNullableType;
    },
  });
  Object.defineProperty(exports, 'isObjectType', {
    enumerable: true,
    get: function () {
      return _definition.isObjectType;
    },
  });
  Object.defineProperty(exports, 'isOutputType', {
    enumerable: true,
    get: function () {
      return _definition.isOutputType;
    },
  });
  Object.defineProperty(exports, 'isRequiredArgument', {
    enumerable: true,
    get: function () {
      return _definition.isRequiredArgument;
    },
  });
  Object.defineProperty(exports, 'isRequiredInputField', {
    enumerable: true,
    get: function () {
      return _definition.isRequiredInputField;
    },
  });
  Object.defineProperty(exports, 'isScalarType', {
    enumerable: true,
    get: function () {
      return _definition.isScalarType;
    },
  });
  Object.defineProperty(exports, 'isSchema', {
    enumerable: true,
    get: function () {
      return _schema.isSchema;
    },
  });
  Object.defineProperty(exports, 'isSpecifiedDirective', {
    enumerable: true,
    get: function () {
      return _directives.isSpecifiedDirective;
    },
  });
  Object.defineProperty(exports, 'isSpecifiedScalarType', {
    enumerable: true,
    get: function () {
      return _scalars.isSpecifiedScalarType;
    },
  });
  Object.defineProperty(exports, 'isType', {
    enumerable: true,
    get: function () {
      return _definition.isType;
    },
  });
  Object.defineProperty(exports, 'isUnionType', {
    enumerable: true,
    get: function () {
      return _definition.isUnionType;
    },
  });
  Object.defineProperty(exports, 'isWrappingType', {
    enumerable: true,
    get: function () {
      return _definition.isWrappingType;
    },
  });
  Object.defineProperty(exports, 'resolveObjMapThunk', {
    enumerable: true,
    get: function () {
      return _definition.resolveObjMapThunk;
    },
  });
  Object.defineProperty(exports, 'resolveReadonlyArrayThunk', {
    enumerable: true,
    get: function () {
      return _definition.resolveReadonlyArrayThunk;
    },
  });
  Object.defineProperty(exports, 'specifiedDirectives', {
    enumerable: true,
    get: function () {
      return _directives.specifiedDirectives;
    },
  });
  Object.defineProperty(exports, 'specifiedScalarTypes', {
    enumerable: true,
    get: function () {
      return _scalars.specifiedScalarTypes;
    },
  });
  Object.defineProperty(exports, 'validateSchema', {
    enumerable: true,
    get: function () {
      return _validate.validateSchema;
    },
  });

  var _schema = schema;

  var _definition = definition;

  var _directives = directives;

  var _scalars = scalars;

  var _introspection = introspection;

  var _validate = validate$2;

  var _assertName = assertName$1;
  }(type));

  var language = {};

  (function (exports) {

  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  Object.defineProperty(exports, 'BREAK', {
    enumerable: true,
    get: function () {
      return _visitor.BREAK;
    },
  });
  Object.defineProperty(exports, 'DirectiveLocation', {
    enumerable: true,
    get: function () {
      return _directiveLocation.DirectiveLocation;
    },
  });
  Object.defineProperty(exports, 'Kind', {
    enumerable: true,
    get: function () {
      return _kinds.Kind;
    },
  });
  Object.defineProperty(exports, 'Lexer', {
    enumerable: true,
    get: function () {
      return _lexer.Lexer;
    },
  });
  Object.defineProperty(exports, 'Location', {
    enumerable: true,
    get: function () {
      return _ast.Location;
    },
  });
  Object.defineProperty(exports, 'OperationTypeNode', {
    enumerable: true,
    get: function () {
      return _ast.OperationTypeNode;
    },
  });
  Object.defineProperty(exports, 'Source', {
    enumerable: true,
    get: function () {
      return _source.Source;
    },
  });
  Object.defineProperty(exports, 'Token', {
    enumerable: true,
    get: function () {
      return _ast.Token;
    },
  });
  Object.defineProperty(exports, 'TokenKind', {
    enumerable: true,
    get: function () {
      return _tokenKind.TokenKind;
    },
  });
  Object.defineProperty(exports, 'getEnterLeaveForKind', {
    enumerable: true,
    get: function () {
      return _visitor.getEnterLeaveForKind;
    },
  });
  Object.defineProperty(exports, 'getLocation', {
    enumerable: true,
    get: function () {
      return _location.getLocation;
    },
  });
  Object.defineProperty(exports, 'getVisitFn', {
    enumerable: true,
    get: function () {
      return _visitor.getVisitFn;
    },
  });
  Object.defineProperty(exports, 'isConstValueNode', {
    enumerable: true,
    get: function () {
      return _predicates.isConstValueNode;
    },
  });
  Object.defineProperty(exports, 'isDefinitionNode', {
    enumerable: true,
    get: function () {
      return _predicates.isDefinitionNode;
    },
  });
  Object.defineProperty(exports, 'isExecutableDefinitionNode', {
    enumerable: true,
    get: function () {
      return _predicates.isExecutableDefinitionNode;
    },
  });
  Object.defineProperty(exports, 'isSelectionNode', {
    enumerable: true,
    get: function () {
      return _predicates.isSelectionNode;
    },
  });
  Object.defineProperty(exports, 'isTypeDefinitionNode', {
    enumerable: true,
    get: function () {
      return _predicates.isTypeDefinitionNode;
    },
  });
  Object.defineProperty(exports, 'isTypeExtensionNode', {
    enumerable: true,
    get: function () {
      return _predicates.isTypeExtensionNode;
    },
  });
  Object.defineProperty(exports, 'isTypeNode', {
    enumerable: true,
    get: function () {
      return _predicates.isTypeNode;
    },
  });
  Object.defineProperty(exports, 'isTypeSystemDefinitionNode', {
    enumerable: true,
    get: function () {
      return _predicates.isTypeSystemDefinitionNode;
    },
  });
  Object.defineProperty(exports, 'isTypeSystemExtensionNode', {
    enumerable: true,
    get: function () {
      return _predicates.isTypeSystemExtensionNode;
    },
  });
  Object.defineProperty(exports, 'isValueNode', {
    enumerable: true,
    get: function () {
      return _predicates.isValueNode;
    },
  });
  Object.defineProperty(exports, 'parse', {
    enumerable: true,
    get: function () {
      return _parser.parse;
    },
  });
  Object.defineProperty(exports, 'parseConstValue', {
    enumerable: true,
    get: function () {
      return _parser.parseConstValue;
    },
  });
  Object.defineProperty(exports, 'parseType', {
    enumerable: true,
    get: function () {
      return _parser.parseType;
    },
  });
  Object.defineProperty(exports, 'parseValue', {
    enumerable: true,
    get: function () {
      return _parser.parseValue;
    },
  });
  Object.defineProperty(exports, 'print', {
    enumerable: true,
    get: function () {
      return _printer.print;
    },
  });
  Object.defineProperty(exports, 'printLocation', {
    enumerable: true,
    get: function () {
      return _printLocation.printLocation;
    },
  });
  Object.defineProperty(exports, 'printSourceLocation', {
    enumerable: true,
    get: function () {
      return _printLocation.printSourceLocation;
    },
  });
  Object.defineProperty(exports, 'visit', {
    enumerable: true,
    get: function () {
      return _visitor.visit;
    },
  });
  Object.defineProperty(exports, 'visitInParallel', {
    enumerable: true,
    get: function () {
      return _visitor.visitInParallel;
    },
  });

  var _source = source;

  var _location = location$1;

  var _printLocation = printLocation$1;

  var _kinds = kinds;

  var _tokenKind = tokenKind;

  var _lexer = lexer$1;

  var _parser = parser;

  var _printer = printer;

  var _visitor = visitor;

  var _ast = ast;

  var _predicates = predicates;

  var _directiveLocation = directiveLocation;
  }(language));

  var execution = {};

  var subscribe$1 = {};

  var isAsyncIterable$1 = {};

  Object.defineProperty(isAsyncIterable$1, '__esModule', {
    value: true,
  });
  isAsyncIterable$1.isAsyncIterable = isAsyncIterable;

  /**
   * Returns true if the provided object implements the AsyncIterator protocol via
   * implementing a `Symbol.asyncIterator` method.
   */
  function isAsyncIterable(maybeAsyncIterable) {
    return (
      typeof (maybeAsyncIterable === null || maybeAsyncIterable === void 0
        ? void 0
        : maybeAsyncIterable[Symbol.asyncIterator]) === 'function'
    );
  }

  var mapAsyncIterator$1 = {};

  Object.defineProperty(mapAsyncIterator$1, '__esModule', {
    value: true,
  });
  mapAsyncIterator$1.mapAsyncIterator = mapAsyncIterator;

  /**
   * Given an AsyncIterable and a callback function, return an AsyncIterator
   * which produces values mapped via calling the callback function.
   */
  function mapAsyncIterator(iterable, callback) {
    const iterator = iterable[Symbol.asyncIterator]();

    async function mapResult(result) {
      if (result.done) {
        return result;
      }

      try {
        return {
          value: await callback(result.value),
          done: false,
        };
      } catch (error) {
        /* c8 ignore start */
        // FIXME: add test case
        if (typeof iterator.return === 'function') {
          try {
            await iterator.return();
          } catch (_e) {
            /* ignore error */
          }
        }

        throw error;
        /* c8 ignore stop */
      }
    }

    return {
      async next() {
        return mapResult(await iterator.next());
      },

      async return() {
        // If iterator.return() does not exist, then type R must be undefined.
        return typeof iterator.return === 'function'
          ? mapResult(await iterator.return())
          : {
              value: undefined,
              done: true,
            };
      },

      async throw(error) {
        if (typeof iterator.throw === 'function') {
          return mapResult(await iterator.throw(error));
        }

        throw error;
      },

      [Symbol.asyncIterator]() {
        return this;
      },
    };
  }

  Object.defineProperty(subscribe$1, '__esModule', {
    value: true,
  });
  subscribe$1.createSourceEventStream = createSourceEventStream;
  subscribe$1.subscribe = subscribe;

  var _devAssert$4 = devAssert$1;

  var _inspect$5 = inspect$1;

  var _isAsyncIterable = isAsyncIterable$1;

  var _Path = Path;

  var _GraphQLError$4 = GraphQLError$1;

  var _locatedError = locatedError$1;

  var _collectFields = collectFields$1;

  var _execute$1 = execute$1;

  var _mapAsyncIterator = mapAsyncIterator$1;

  var _values$1 = values;

  /**
   * Implements the "Subscribe" algorithm described in the GraphQL specification.
   *
   * Returns a Promise which resolves to either an AsyncIterator (if successful)
   * or an ExecutionResult (error). The promise will be rejected if the schema or
   * other arguments to this function are invalid, or if the resolved event stream
   * is not an async iterable.
   *
   * If the client-provided arguments to this function do not result in a
   * compliant subscription, a GraphQL Response (ExecutionResult) with
   * descriptive errors and no data will be returned.
   *
   * If the source stream could not be created due to faulty subscription
   * resolver logic or underlying systems, the promise will resolve to a single
   * ExecutionResult containing `errors` and no `data`.
   *
   * If the operation succeeded, the promise resolves to an AsyncIterator, which
   * yields a stream of ExecutionResults representing the response stream.
   *
   * Accepts either an object with named arguments, or individual arguments.
   */
  async function subscribe(args) {
    // Temporary for v15 to v16 migration. Remove in v17
    arguments.length < 2 ||
      (0, _devAssert$4.devAssert)(
        false,
        'graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead.',
      );
    const {
      schema,
      document,
      rootValue,
      contextValue,
      variableValues,
      operationName,
      fieldResolver,
      subscribeFieldResolver,
    } = args;
    const resultOrStream = await createSourceEventStream(
      schema,
      document,
      rootValue,
      contextValue,
      variableValues,
      operationName,
      subscribeFieldResolver,
    );

    if (!(0, _isAsyncIterable.isAsyncIterable)(resultOrStream)) {
      return resultOrStream;
    } // For each payload yielded from a subscription, map it over the normal
    // GraphQL `execute` function, with `payload` as the rootValue.
    // This implements the "MapSourceToResponseEvent" algorithm described in
    // the GraphQL specification. The `execute` function provides the
    // "ExecuteSubscriptionEvent" algorithm, as it is nearly identical to the
    // "ExecuteQuery" algorithm, for which `execute` is also used.

    const mapSourceToResponse = (payload) =>
      (0, _execute$1.execute)({
        schema,
        document,
        rootValue: payload,
        contextValue,
        variableValues,
        operationName,
        fieldResolver,
      }); // Map every source value to a ExecutionResult value as described above.

    return (0, _mapAsyncIterator.mapAsyncIterator)(
      resultOrStream,
      mapSourceToResponse,
    );
  }
  /**
   * Implements the "CreateSourceEventStream" algorithm described in the
   * GraphQL specification, resolving the subscription source event stream.
   *
   * Returns a Promise which resolves to either an AsyncIterable (if successful)
   * or an ExecutionResult (error). The promise will be rejected if the schema or
   * other arguments to this function are invalid, or if the resolved event stream
   * is not an async iterable.
   *
   * If the client-provided arguments to this function do not result in a
   * compliant subscription, a GraphQL Response (ExecutionResult) with
   * descriptive errors and no data will be returned.
   *
   * If the the source stream could not be created due to faulty subscription
   * resolver logic or underlying systems, the promise will resolve to a single
   * ExecutionResult containing `errors` and no `data`.
   *
   * If the operation succeeded, the promise resolves to the AsyncIterable for the
   * event stream returned by the resolver.
   *
   * A Source Event Stream represents a sequence of events, each of which triggers
   * a GraphQL execution for that event.
   *
   * This may be useful when hosting the stateful subscription service in a
   * different process or machine than the stateless GraphQL execution engine,
   * or otherwise separating these two steps. For more on this, see the
   * "Supporting Subscriptions at Scale" information in the GraphQL specification.
   */

  async function createSourceEventStream(
    schema,
    document,
    rootValue,
    contextValue,
    variableValues,
    operationName,
    subscribeFieldResolver,
  ) {
    // If arguments are missing or incorrectly typed, this is an internal
    // developer mistake which should throw an early error.
    (0, _execute$1.assertValidExecutionArguments)(schema, document, variableValues); // If a valid execution context cannot be created due to incorrect arguments,
    // a "Response" with only errors is returned.

    const exeContext = (0, _execute$1.buildExecutionContext)({
      schema,
      document,
      rootValue,
      contextValue,
      variableValues,
      operationName,
      subscribeFieldResolver,
    }); // Return early errors if execution context failed.

    if (!('schema' in exeContext)) {
      return {
        errors: exeContext,
      };
    }

    try {
      const eventStream = await executeSubscription(exeContext); // Assert field returned an event stream, otherwise yield an error.

      if (!(0, _isAsyncIterable.isAsyncIterable)(eventStream)) {
        throw new Error(
          'Subscription field must return Async Iterable. ' +
            `Received: ${(0, _inspect$5.inspect)(eventStream)}.`,
        );
      }

      return eventStream;
    } catch (error) {
      // If it GraphQLError, report it as an ExecutionResult, containing only errors and no data.
      // Otherwise treat the error as a system-class error and re-throw it.
      if (error instanceof _GraphQLError$4.GraphQLError) {
        return {
          errors: [error],
        };
      }

      throw error;
    }
  }

  async function executeSubscription(exeContext) {
    const { schema, fragments, operation, variableValues, rootValue } =
      exeContext;
    const rootType = schema.getSubscriptionType();

    if (rootType == null) {
      throw new _GraphQLError$4.GraphQLError(
        'Schema is not configured to execute subscription operation.',
        operation,
      );
    }

    const rootFields = (0, _collectFields.collectFields)(
      schema,
      fragments,
      variableValues,
      rootType,
      operation.selectionSet,
    );
    const [responseName, fieldNodes] = [...rootFields.entries()][0];
    const fieldDef = (0, _execute$1.getFieldDef)(schema, rootType, fieldNodes[0]);

    if (!fieldDef) {
      const fieldName = fieldNodes[0].name.value;
      throw new _GraphQLError$4.GraphQLError(
        `The subscription field "${fieldName}" is not defined.`,
        fieldNodes,
      );
    }

    const path = (0, _Path.addPath)(undefined, responseName, rootType.name);
    const info = (0, _execute$1.buildResolveInfo)(
      exeContext,
      fieldDef,
      fieldNodes,
      rootType,
      path,
    );

    try {
      var _fieldDef$subscribe;

      // Implements the "ResolveFieldEventStream" algorithm from GraphQL specification.
      // It differs from "ResolveFieldValue" due to providing a different `resolveFn`.
      // Build a JS object of arguments from the field.arguments AST, using the
      // variables scope to fulfill any variable references.
      const args = (0, _values$1.getArgumentValues)(
        fieldDef,
        fieldNodes[0],
        variableValues,
      ); // The resolve function's optional third argument is a context value that
      // is provided to every resolve function within an execution. It is commonly
      // used to represent an authenticated user, or request-specific caches.

      const contextValue = exeContext.contextValue; // Call the `subscribe()` resolver or the default resolver to produce an
      // AsyncIterable yielding raw payloads.

      const resolveFn =
        (_fieldDef$subscribe = fieldDef.subscribe) !== null &&
        _fieldDef$subscribe !== void 0
          ? _fieldDef$subscribe
          : exeContext.subscribeFieldResolver;
      const eventStream = await resolveFn(rootValue, args, contextValue, info);

      if (eventStream instanceof Error) {
        throw eventStream;
      }

      return eventStream;
    } catch (error) {
      throw (0, _locatedError.locatedError)(
        error,
        fieldNodes,
        (0, _Path.pathToArray)(path),
      );
    }
  }

  (function (exports) {

  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  Object.defineProperty(exports, 'createSourceEventStream', {
    enumerable: true,
    get: function () {
      return _subscribe.createSourceEventStream;
    },
  });
  Object.defineProperty(exports, 'defaultFieldResolver', {
    enumerable: true,
    get: function () {
      return _execute.defaultFieldResolver;
    },
  });
  Object.defineProperty(exports, 'defaultTypeResolver', {
    enumerable: true,
    get: function () {
      return _execute.defaultTypeResolver;
    },
  });
  Object.defineProperty(exports, 'execute', {
    enumerable: true,
    get: function () {
      return _execute.execute;
    },
  });
  Object.defineProperty(exports, 'executeSync', {
    enumerable: true,
    get: function () {
      return _execute.executeSync;
    },
  });
  Object.defineProperty(exports, 'getDirectiveValues', {
    enumerable: true,
    get: function () {
      return _values.getDirectiveValues;
    },
  });
  Object.defineProperty(exports, 'getVariableValues', {
    enumerable: true,
    get: function () {
      return _values.getVariableValues;
    },
  });
  Object.defineProperty(exports, 'responsePathAsArray', {
    enumerable: true,
    get: function () {
      return _Path.pathToArray;
    },
  });
  Object.defineProperty(exports, 'subscribe', {
    enumerable: true,
    get: function () {
      return _subscribe.subscribe;
    },
  });

  var _Path = Path;

  var _execute = execute$1;

  var _subscribe = subscribe$1;

  var _values = values;
  }(execution));

  var validation = {};

  var NoDeprecatedCustomRule$1 = {};

  Object.defineProperty(NoDeprecatedCustomRule$1, '__esModule', {
    value: true,
  });
  NoDeprecatedCustomRule$1.NoDeprecatedCustomRule = NoDeprecatedCustomRule;

  var _invariant$5 = invariant$1;

  var _GraphQLError$3 = GraphQLError$1;

  var _definition$6 = definition;

  /**
   * No deprecated
   *
   * A GraphQL document is only valid if all selected fields and all used enum values have not been
   * deprecated.
   *
   * Note: This rule is optional and is not part of the Validation section of the GraphQL
   * Specification. The main purpose of this rule is detection of deprecated usages and not
   * necessarily to forbid their use when querying a service.
   */
  function NoDeprecatedCustomRule(context) {
    return {
      Field(node) {
        const fieldDef = context.getFieldDef();
        const deprecationReason =
          fieldDef === null || fieldDef === void 0
            ? void 0
            : fieldDef.deprecationReason;

        if (fieldDef && deprecationReason != null) {
          const parentType = context.getParentType();
          parentType != null || (0, _invariant$5.invariant)(false);
          context.reportError(
            new _GraphQLError$3.GraphQLError(
              `The field ${parentType.name}.${fieldDef.name} is deprecated. ${deprecationReason}`,
              node,
            ),
          );
        }
      },

      Argument(node) {
        const argDef = context.getArgument();
        const deprecationReason =
          argDef === null || argDef === void 0
            ? void 0
            : argDef.deprecationReason;

        if (argDef && deprecationReason != null) {
          const directiveDef = context.getDirective();

          if (directiveDef != null) {
            context.reportError(
              new _GraphQLError$3.GraphQLError(
                `Directive "@${directiveDef.name}" argument "${argDef.name}" is deprecated. ${deprecationReason}`,
                node,
              ),
            );
          } else {
            const parentType = context.getParentType();
            const fieldDef = context.getFieldDef();
            (parentType != null && fieldDef != null) ||
              (0, _invariant$5.invariant)(false);
            context.reportError(
              new _GraphQLError$3.GraphQLError(
                `Field "${parentType.name}.${fieldDef.name}" argument "${argDef.name}" is deprecated. ${deprecationReason}`,
                node,
              ),
            );
          }
        }
      },

      ObjectField(node) {
        const inputObjectDef = (0, _definition$6.getNamedType)(
          context.getParentInputType(),
        );

        if ((0, _definition$6.isInputObjectType)(inputObjectDef)) {
          const inputFieldDef = inputObjectDef.getFields()[node.name.value];
          const deprecationReason =
            inputFieldDef === null || inputFieldDef === void 0
              ? void 0
              : inputFieldDef.deprecationReason;

          if (deprecationReason != null) {
            context.reportError(
              new _GraphQLError$3.GraphQLError(
                `The input field ${inputObjectDef.name}.${inputFieldDef.name} is deprecated. ${deprecationReason}`,
                node,
              ),
            );
          }
        }
      },

      EnumValue(node) {
        const enumValueDef = context.getEnumValue();
        const deprecationReason =
          enumValueDef === null || enumValueDef === void 0
            ? void 0
            : enumValueDef.deprecationReason;

        if (enumValueDef && deprecationReason != null) {
          const enumTypeDef = (0, _definition$6.getNamedType)(
            context.getInputType(),
          );
          enumTypeDef != null || (0, _invariant$5.invariant)(false);
          context.reportError(
            new _GraphQLError$3.GraphQLError(
              `The enum value "${enumTypeDef.name}.${enumValueDef.name}" is deprecated. ${deprecationReason}`,
              node,
            ),
          );
        }
      },
    };
  }

  var NoSchemaIntrospectionCustomRule$1 = {};

  Object.defineProperty(NoSchemaIntrospectionCustomRule$1, '__esModule', {
    value: true,
  });
  NoSchemaIntrospectionCustomRule$1.NoSchemaIntrospectionCustomRule = NoSchemaIntrospectionCustomRule;

  var _GraphQLError$2 = GraphQLError$1;

  var _definition$5 = definition;

  var _introspection$4 = introspection;

  /**
   * Prohibit introspection queries
   *
   * A GraphQL document is only valid if all fields selected are not fields that
   * return an introspection type.
   *
   * Note: This rule is optional and is not part of the Validation section of the
   * GraphQL Specification. This rule effectively disables introspection, which
   * does not reflect best practices and should only be done if absolutely necessary.
   */
  function NoSchemaIntrospectionCustomRule(context) {
    return {
      Field(node) {
        const type = (0, _definition$5.getNamedType)(context.getType());

        if (type && (0, _introspection$4.isIntrospectionType)(type)) {
          context.reportError(
            new _GraphQLError$2.GraphQLError(
              `GraphQL introspection has been disabled, but the requested query contained the field "${node.name.value}".`,
              node,
            ),
          );
        }
      },
    };
  }

  (function (exports) {

  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  Object.defineProperty(exports, 'ExecutableDefinitionsRule', {
    enumerable: true,
    get: function () {
      return _ExecutableDefinitionsRule.ExecutableDefinitionsRule;
    },
  });
  Object.defineProperty(exports, 'FieldsOnCorrectTypeRule', {
    enumerable: true,
    get: function () {
      return _FieldsOnCorrectTypeRule.FieldsOnCorrectTypeRule;
    },
  });
  Object.defineProperty(exports, 'FragmentsOnCompositeTypesRule', {
    enumerable: true,
    get: function () {
      return _FragmentsOnCompositeTypesRule.FragmentsOnCompositeTypesRule;
    },
  });
  Object.defineProperty(exports, 'KnownArgumentNamesRule', {
    enumerable: true,
    get: function () {
      return _KnownArgumentNamesRule.KnownArgumentNamesRule;
    },
  });
  Object.defineProperty(exports, 'KnownDirectivesRule', {
    enumerable: true,
    get: function () {
      return _KnownDirectivesRule.KnownDirectivesRule;
    },
  });
  Object.defineProperty(exports, 'KnownFragmentNamesRule', {
    enumerable: true,
    get: function () {
      return _KnownFragmentNamesRule.KnownFragmentNamesRule;
    },
  });
  Object.defineProperty(exports, 'KnownTypeNamesRule', {
    enumerable: true,
    get: function () {
      return _KnownTypeNamesRule.KnownTypeNamesRule;
    },
  });
  Object.defineProperty(exports, 'LoneAnonymousOperationRule', {
    enumerable: true,
    get: function () {
      return _LoneAnonymousOperationRule.LoneAnonymousOperationRule;
    },
  });
  Object.defineProperty(exports, 'LoneSchemaDefinitionRule', {
    enumerable: true,
    get: function () {
      return _LoneSchemaDefinitionRule.LoneSchemaDefinitionRule;
    },
  });
  Object.defineProperty(exports, 'NoDeprecatedCustomRule', {
    enumerable: true,
    get: function () {
      return _NoDeprecatedCustomRule.NoDeprecatedCustomRule;
    },
  });
  Object.defineProperty(exports, 'NoFragmentCyclesRule', {
    enumerable: true,
    get: function () {
      return _NoFragmentCyclesRule.NoFragmentCyclesRule;
    },
  });
  Object.defineProperty(exports, 'NoSchemaIntrospectionCustomRule', {
    enumerable: true,
    get: function () {
      return _NoSchemaIntrospectionCustomRule.NoSchemaIntrospectionCustomRule;
    },
  });
  Object.defineProperty(exports, 'NoUndefinedVariablesRule', {
    enumerable: true,
    get: function () {
      return _NoUndefinedVariablesRule.NoUndefinedVariablesRule;
    },
  });
  Object.defineProperty(exports, 'NoUnusedFragmentsRule', {
    enumerable: true,
    get: function () {
      return _NoUnusedFragmentsRule.NoUnusedFragmentsRule;
    },
  });
  Object.defineProperty(exports, 'NoUnusedVariablesRule', {
    enumerable: true,
    get: function () {
      return _NoUnusedVariablesRule.NoUnusedVariablesRule;
    },
  });
  Object.defineProperty(exports, 'OverlappingFieldsCanBeMergedRule', {
    enumerable: true,
    get: function () {
      return _OverlappingFieldsCanBeMergedRule.OverlappingFieldsCanBeMergedRule;
    },
  });
  Object.defineProperty(exports, 'PossibleFragmentSpreadsRule', {
    enumerable: true,
    get: function () {
      return _PossibleFragmentSpreadsRule.PossibleFragmentSpreadsRule;
    },
  });
  Object.defineProperty(exports, 'PossibleTypeExtensionsRule', {
    enumerable: true,
    get: function () {
      return _PossibleTypeExtensionsRule.PossibleTypeExtensionsRule;
    },
  });
  Object.defineProperty(exports, 'ProvidedRequiredArgumentsRule', {
    enumerable: true,
    get: function () {
      return _ProvidedRequiredArgumentsRule.ProvidedRequiredArgumentsRule;
    },
  });
  Object.defineProperty(exports, 'ScalarLeafsRule', {
    enumerable: true,
    get: function () {
      return _ScalarLeafsRule.ScalarLeafsRule;
    },
  });
  Object.defineProperty(exports, 'SingleFieldSubscriptionsRule', {
    enumerable: true,
    get: function () {
      return _SingleFieldSubscriptionsRule.SingleFieldSubscriptionsRule;
    },
  });
  Object.defineProperty(exports, 'UniqueArgumentDefinitionNamesRule', {
    enumerable: true,
    get: function () {
      return _UniqueArgumentDefinitionNamesRule.UniqueArgumentDefinitionNamesRule;
    },
  });
  Object.defineProperty(exports, 'UniqueArgumentNamesRule', {
    enumerable: true,
    get: function () {
      return _UniqueArgumentNamesRule.UniqueArgumentNamesRule;
    },
  });
  Object.defineProperty(exports, 'UniqueDirectiveNamesRule', {
    enumerable: true,
    get: function () {
      return _UniqueDirectiveNamesRule.UniqueDirectiveNamesRule;
    },
  });
  Object.defineProperty(exports, 'UniqueDirectivesPerLocationRule', {
    enumerable: true,
    get: function () {
      return _UniqueDirectivesPerLocationRule.UniqueDirectivesPerLocationRule;
    },
  });
  Object.defineProperty(exports, 'UniqueEnumValueNamesRule', {
    enumerable: true,
    get: function () {
      return _UniqueEnumValueNamesRule.UniqueEnumValueNamesRule;
    },
  });
  Object.defineProperty(exports, 'UniqueFieldDefinitionNamesRule', {
    enumerable: true,
    get: function () {
      return _UniqueFieldDefinitionNamesRule.UniqueFieldDefinitionNamesRule;
    },
  });
  Object.defineProperty(exports, 'UniqueFragmentNamesRule', {
    enumerable: true,
    get: function () {
      return _UniqueFragmentNamesRule.UniqueFragmentNamesRule;
    },
  });
  Object.defineProperty(exports, 'UniqueInputFieldNamesRule', {
    enumerable: true,
    get: function () {
      return _UniqueInputFieldNamesRule.UniqueInputFieldNamesRule;
    },
  });
  Object.defineProperty(exports, 'UniqueOperationNamesRule', {
    enumerable: true,
    get: function () {
      return _UniqueOperationNamesRule.UniqueOperationNamesRule;
    },
  });
  Object.defineProperty(exports, 'UniqueOperationTypesRule', {
    enumerable: true,
    get: function () {
      return _UniqueOperationTypesRule.UniqueOperationTypesRule;
    },
  });
  Object.defineProperty(exports, 'UniqueTypeNamesRule', {
    enumerable: true,
    get: function () {
      return _UniqueTypeNamesRule.UniqueTypeNamesRule;
    },
  });
  Object.defineProperty(exports, 'UniqueVariableNamesRule', {
    enumerable: true,
    get: function () {
      return _UniqueVariableNamesRule.UniqueVariableNamesRule;
    },
  });
  Object.defineProperty(exports, 'ValidationContext', {
    enumerable: true,
    get: function () {
      return _ValidationContext.ValidationContext;
    },
  });
  Object.defineProperty(exports, 'ValuesOfCorrectTypeRule', {
    enumerable: true,
    get: function () {
      return _ValuesOfCorrectTypeRule.ValuesOfCorrectTypeRule;
    },
  });
  Object.defineProperty(exports, 'VariablesAreInputTypesRule', {
    enumerable: true,
    get: function () {
      return _VariablesAreInputTypesRule.VariablesAreInputTypesRule;
    },
  });
  Object.defineProperty(exports, 'VariablesInAllowedPositionRule', {
    enumerable: true,
    get: function () {
      return _VariablesInAllowedPositionRule.VariablesInAllowedPositionRule;
    },
  });
  Object.defineProperty(exports, 'specifiedRules', {
    enumerable: true,
    get: function () {
      return _specifiedRules.specifiedRules;
    },
  });
  Object.defineProperty(exports, 'validate', {
    enumerable: true,
    get: function () {
      return _validate.validate;
    },
  });

  var _validate = validate$1;

  var _ValidationContext = ValidationContext$1;

  var _specifiedRules = specifiedRules$1;

  var _ExecutableDefinitionsRule = ExecutableDefinitionsRule$1;

  var _FieldsOnCorrectTypeRule = FieldsOnCorrectTypeRule$1;

  var _FragmentsOnCompositeTypesRule = FragmentsOnCompositeTypesRule$1;

  var _KnownArgumentNamesRule = KnownArgumentNamesRule$1;

  var _KnownDirectivesRule = KnownDirectivesRule$1;

  var _KnownFragmentNamesRule = KnownFragmentNamesRule$1;

  var _KnownTypeNamesRule = KnownTypeNamesRule$1;

  var _LoneAnonymousOperationRule = LoneAnonymousOperationRule$1;

  var _NoFragmentCyclesRule = NoFragmentCyclesRule$1;

  var _NoUndefinedVariablesRule = NoUndefinedVariablesRule$1;

  var _NoUnusedFragmentsRule = NoUnusedFragmentsRule$1;

  var _NoUnusedVariablesRule = NoUnusedVariablesRule$1;

  var _OverlappingFieldsCanBeMergedRule = OverlappingFieldsCanBeMergedRule$1;

  var _PossibleFragmentSpreadsRule = PossibleFragmentSpreadsRule$1;

  var _ProvidedRequiredArgumentsRule = ProvidedRequiredArgumentsRule$1;

  var _ScalarLeafsRule = ScalarLeafsRule$1;

  var _SingleFieldSubscriptionsRule = SingleFieldSubscriptionsRule$1;

  var _UniqueArgumentNamesRule = UniqueArgumentNamesRule$1;

  var _UniqueDirectivesPerLocationRule = UniqueDirectivesPerLocationRule$1;

  var _UniqueFragmentNamesRule = UniqueFragmentNamesRule$1;

  var _UniqueInputFieldNamesRule = UniqueInputFieldNamesRule$1;

  var _UniqueOperationNamesRule = UniqueOperationNamesRule$1;

  var _UniqueVariableNamesRule = UniqueVariableNamesRule$1;

  var _ValuesOfCorrectTypeRule = ValuesOfCorrectTypeRule$1;

  var _VariablesAreInputTypesRule = VariablesAreInputTypesRule$1;

  var _VariablesInAllowedPositionRule = VariablesInAllowedPositionRule$1;

  var _LoneSchemaDefinitionRule = LoneSchemaDefinitionRule$1;

  var _UniqueOperationTypesRule = UniqueOperationTypesRule$1;

  var _UniqueTypeNamesRule = UniqueTypeNamesRule$1;

  var _UniqueEnumValueNamesRule = UniqueEnumValueNamesRule$1;

  var _UniqueFieldDefinitionNamesRule = UniqueFieldDefinitionNamesRule$1;

  var _UniqueArgumentDefinitionNamesRule = UniqueArgumentDefinitionNamesRule$1;

  var _UniqueDirectiveNamesRule = UniqueDirectiveNamesRule$1;

  var _PossibleTypeExtensionsRule = PossibleTypeExtensionsRule$1;

  var _NoDeprecatedCustomRule = NoDeprecatedCustomRule$1;

  var _NoSchemaIntrospectionCustomRule = NoSchemaIntrospectionCustomRule$1;
  }(validation));

  var error = {};

  (function (exports) {

  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  Object.defineProperty(exports, 'GraphQLError', {
    enumerable: true,
    get: function () {
      return _GraphQLError.GraphQLError;
    },
  });
  Object.defineProperty(exports, 'formatError', {
    enumerable: true,
    get: function () {
      return _GraphQLError.formatError;
    },
  });
  Object.defineProperty(exports, 'locatedError', {
    enumerable: true,
    get: function () {
      return _locatedError.locatedError;
    },
  });
  Object.defineProperty(exports, 'printError', {
    enumerable: true,
    get: function () {
      return _GraphQLError.printError;
    },
  });
  Object.defineProperty(exports, 'syntaxError', {
    enumerable: true,
    get: function () {
      return _syntaxError.syntaxError;
    },
  });

  var _GraphQLError = GraphQLError$1;

  var _syntaxError = syntaxError$1;

  var _locatedError = locatedError$1;
  }(error));

  var utilities = {};

  var getIntrospectionQuery$1 = {};

  Object.defineProperty(getIntrospectionQuery$1, '__esModule', {
    value: true,
  });
  getIntrospectionQuery$1.getIntrospectionQuery = getIntrospectionQuery;

  /**
   * Produce the GraphQL query recommended for a full schema introspection.
   * Accepts optional IntrospectionOptions.
   */
  function getIntrospectionQuery(options) {
    const optionsWithDefault = {
      descriptions: true,
      specifiedByUrl: false,
      directiveIsRepeatable: false,
      schemaDescription: false,
      inputValueDeprecation: false,
      ...options,
    };
    const descriptions = optionsWithDefault.descriptions ? 'description' : '';
    const specifiedByUrl = optionsWithDefault.specifiedByUrl
      ? 'specifiedByURL'
      : '';
    const directiveIsRepeatable = optionsWithDefault.directiveIsRepeatable
      ? 'isRepeatable'
      : '';
    const schemaDescription = optionsWithDefault.schemaDescription
      ? descriptions
      : '';

    function inputDeprecation(str) {
      return optionsWithDefault.inputValueDeprecation ? str : '';
    }

    return `
    query IntrospectionQuery {
      __schema {
        ${schemaDescription}
        queryType { name }
        mutationType { name }
        subscriptionType { name }
        types {
          ...FullType
        }
        directives {
          name
          ${descriptions}
          ${directiveIsRepeatable}
          locations
          args${inputDeprecation('(includeDeprecated: true)')} {
            ...InputValue
          }
        }
      }
    }

    fragment FullType on __Type {
      kind
      name
      ${descriptions}
      ${specifiedByUrl}
      fields(includeDeprecated: true) {
        name
        ${descriptions}
        args${inputDeprecation('(includeDeprecated: true)')} {
          ...InputValue
        }
        type {
          ...TypeRef
        }
        isDeprecated
        deprecationReason
      }
      inputFields${inputDeprecation('(includeDeprecated: true)')} {
        ...InputValue
      }
      interfaces {
        ...TypeRef
      }
      enumValues(includeDeprecated: true) {
        name
        ${descriptions}
        isDeprecated
        deprecationReason
      }
      possibleTypes {
        ...TypeRef
      }
    }

    fragment InputValue on __InputValue {
      name
      ${descriptions}
      type { ...TypeRef }
      defaultValue
      ${inputDeprecation('isDeprecated')}
      ${inputDeprecation('deprecationReason')}
    }

    fragment TypeRef on __Type {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                  ofType {
                    kind
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
  }

  var getOperationAST$1 = {};

  Object.defineProperty(getOperationAST$1, '__esModule', {
    value: true,
  });
  getOperationAST$1.getOperationAST = getOperationAST;

  var _kinds$5 = kinds;

  /**
   * Returns an operation AST given a document AST and optionally an operation
   * name. If a name is not provided, an operation is only returned if only one is
   * provided in the document.
   */
  function getOperationAST(documentAST, operationName) {
    let operation = null;

    for (const definition of documentAST.definitions) {
      if (definition.kind === _kinds$5.Kind.OPERATION_DEFINITION) {
        var _definition$name;

        if (operationName == null) {
          // If no operation name was provided, only return an Operation if there
          // is one defined in the document. Upon encountering the second, return
          // null.
          if (operation) {
            return null;
          }

          operation = definition;
        } else if (
          ((_definition$name = definition.name) === null ||
          _definition$name === void 0
            ? void 0
            : _definition$name.value) === operationName
        ) {
          return definition;
        }
      }
    }

    return operation;
  }

  var getOperationRootType$1 = {};

  Object.defineProperty(getOperationRootType$1, '__esModule', {
    value: true,
  });
  getOperationRootType$1.getOperationRootType = getOperationRootType;

  var _GraphQLError$1 = GraphQLError$1;

  /**
   * Extracts the root type of the operation from the schema.
   *
   * @deprecated Please use `GraphQLSchema.getRootType` instead. Will be removed in v17
   */
  function getOperationRootType(schema, operation) {
    if (operation.operation === 'query') {
      const queryType = schema.getQueryType();

      if (!queryType) {
        throw new _GraphQLError$1.GraphQLError(
          'Schema does not define the required query root type.',
          operation,
        );
      }

      return queryType;
    }

    if (operation.operation === 'mutation') {
      const mutationType = schema.getMutationType();

      if (!mutationType) {
        throw new _GraphQLError$1.GraphQLError(
          'Schema is not configured for mutations.',
          operation,
        );
      }

      return mutationType;
    }

    if (operation.operation === 'subscription') {
      const subscriptionType = schema.getSubscriptionType();

      if (!subscriptionType) {
        throw new _GraphQLError$1.GraphQLError(
          'Schema is not configured for subscriptions.',
          operation,
        );
      }

      return subscriptionType;
    }

    throw new _GraphQLError$1.GraphQLError(
      'Can only have query, mutation and subscription operations.',
      operation,
    );
  }

  var introspectionFromSchema$1 = {};

  Object.defineProperty(introspectionFromSchema$1, '__esModule', {
    value: true,
  });
  introspectionFromSchema$1.introspectionFromSchema = introspectionFromSchema;

  var _invariant$4 = invariant$1;

  var _parser$2 = parser;

  var _execute = execute$1;

  var _getIntrospectionQuery = getIntrospectionQuery$1;

  /**
   * Build an IntrospectionQuery from a GraphQLSchema
   *
   * IntrospectionQuery is useful for utilities that care about type and field
   * relationships, but do not need to traverse through those relationships.
   *
   * This is the inverse of buildClientSchema. The primary use case is outside
   * of the server context, for instance when doing schema comparisons.
   */
  function introspectionFromSchema(schema, options) {
    const optionsWithDefaults = {
      specifiedByUrl: true,
      directiveIsRepeatable: true,
      schemaDescription: true,
      inputValueDeprecation: true,
      ...options,
    };
    const document = (0, _parser$2.parse)(
      (0, _getIntrospectionQuery.getIntrospectionQuery)(optionsWithDefaults),
    );
    const result = (0, _execute.executeSync)({
      schema,
      document,
    });
    (!result.errors && result.data) || (0, _invariant$4.invariant)(false);
    return result.data;
  }

  var buildClientSchema$1 = {};

  Object.defineProperty(buildClientSchema$1, '__esModule', {
    value: true,
  });
  buildClientSchema$1.buildClientSchema = buildClientSchema;

  var _devAssert$3 = devAssert$1;

  var _inspect$4 = inspect$1;

  var _isObjectLike = isObjectLike$1;

  var _keyValMap$1 = keyValMap$1;

  var _parser$1 = parser;

  var _definition$4 = definition;

  var _directives$4 = directives;

  var _introspection$3 = introspection;

  var _scalars$3 = scalars;

  var _schema$3 = schema;

  var _valueFromAST$1 = valueFromAST$1;

  /**
   * Build a GraphQLSchema for use by client tools.
   *
   * Given the result of a client running the introspection query, creates and
   * returns a GraphQLSchema instance which can be then used with all graphql-js
   * tools, but cannot be used to execute a query, as introspection does not
   * represent the "resolver", "parse" or "serialize" functions or any other
   * server-internal mechanisms.
   *
   * This function expects a complete introspection result. Don't forget to check
   * the "errors" field of a server response before calling this function.
   */
  function buildClientSchema(introspection, options) {
    ((0, _isObjectLike.isObjectLike)(introspection) &&
      (0, _isObjectLike.isObjectLike)(introspection.__schema)) ||
      (0, _devAssert$3.devAssert)(
        false,
        `Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${(0, _inspect$4.inspect)(introspection)}.`,
      ); // Get the schema from the introspection result.

    const schemaIntrospection = introspection.__schema; // Iterate through all types, getting the type definition for each.

    const typeMap = (0, _keyValMap$1.keyValMap)(
      schemaIntrospection.types,
      (typeIntrospection) => typeIntrospection.name,
      (typeIntrospection) => buildType(typeIntrospection),
    ); // Include standard types only if they are used.

    for (const stdType of [
      ..._scalars$3.specifiedScalarTypes,
      ..._introspection$3.introspectionTypes,
    ]) {
      if (typeMap[stdType.name]) {
        typeMap[stdType.name] = stdType;
      }
    } // Get the root Query, Mutation, and Subscription types.

    const queryType = schemaIntrospection.queryType
      ? getObjectType(schemaIntrospection.queryType)
      : null;
    const mutationType = schemaIntrospection.mutationType
      ? getObjectType(schemaIntrospection.mutationType)
      : null;
    const subscriptionType = schemaIntrospection.subscriptionType
      ? getObjectType(schemaIntrospection.subscriptionType)
      : null; // Get the directives supported by Introspection, assuming empty-set if
    // directives were not queried for.

    const directives = schemaIntrospection.directives
      ? schemaIntrospection.directives.map(buildDirective)
      : []; // Then produce and return a Schema with these types.

    return new _schema$3.GraphQLSchema({
      description: schemaIntrospection.description,
      query: queryType,
      mutation: mutationType,
      subscription: subscriptionType,
      types: Object.values(typeMap),
      directives,
      assumeValid:
        options === null || options === void 0 ? void 0 : options.assumeValid,
    }); // Given a type reference in introspection, return the GraphQLType instance.
    // preferring cached instances before building new instances.

    function getType(typeRef) {
      if (typeRef.kind === _introspection$3.TypeKind.LIST) {
        const itemRef = typeRef.ofType;

        if (!itemRef) {
          throw new Error('Decorated type deeper than introspection query.');
        }

        return new _definition$4.GraphQLList(getType(itemRef));
      }

      if (typeRef.kind === _introspection$3.TypeKind.NON_NULL) {
        const nullableRef = typeRef.ofType;

        if (!nullableRef) {
          throw new Error('Decorated type deeper than introspection query.');
        }

        const nullableType = getType(nullableRef);
        return new _definition$4.GraphQLNonNull(
          (0, _definition$4.assertNullableType)(nullableType),
        );
      }

      return getNamedType(typeRef);
    }

    function getNamedType(typeRef) {
      const typeName = typeRef.name;

      if (!typeName) {
        throw new Error(
          `Unknown type reference: ${(0, _inspect$4.inspect)(typeRef)}.`,
        );
      }

      const type = typeMap[typeName];

      if (!type) {
        throw new Error(
          `Invalid or incomplete schema, unknown type: ${typeName}. Ensure that a full introspection query is used in order to build a client schema.`,
        );
      }

      return type;
    }

    function getObjectType(typeRef) {
      return (0, _definition$4.assertObjectType)(getNamedType(typeRef));
    }

    function getInterfaceType(typeRef) {
      return (0, _definition$4.assertInterfaceType)(getNamedType(typeRef));
    } // Given a type's introspection result, construct the correct
    // GraphQLType instance.

    function buildType(type) {
      // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
      if (type != null && type.name != null && type.kind != null) {
        // FIXME: Properly type IntrospectionType, it's a breaking change so fix in v17
        // eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check
        switch (type.kind) {
          case _introspection$3.TypeKind.SCALAR:
            return buildScalarDef(type);

          case _introspection$3.TypeKind.OBJECT:
            return buildObjectDef(type);

          case _introspection$3.TypeKind.INTERFACE:
            return buildInterfaceDef(type);

          case _introspection$3.TypeKind.UNION:
            return buildUnionDef(type);

          case _introspection$3.TypeKind.ENUM:
            return buildEnumDef(type);

          case _introspection$3.TypeKind.INPUT_OBJECT:
            return buildInputObjectDef(type);
        }
      }

      const typeStr = (0, _inspect$4.inspect)(type);
      throw new Error(
        `Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${typeStr}.`,
      );
    }

    function buildScalarDef(scalarIntrospection) {
      return new _definition$4.GraphQLScalarType({
        name: scalarIntrospection.name,
        description: scalarIntrospection.description,
        specifiedByURL: scalarIntrospection.specifiedByURL,
      });
    }

    function buildImplementationsList(implementingIntrospection) {
      // TODO: Temporary workaround until GraphQL ecosystem will fully support
      // 'interfaces' on interface types.
      if (
        implementingIntrospection.interfaces === null &&
        implementingIntrospection.kind === _introspection$3.TypeKind.INTERFACE
      ) {
        return [];
      }

      if (!implementingIntrospection.interfaces) {
        const implementingIntrospectionStr = (0, _inspect$4.inspect)(
          implementingIntrospection,
        );
        throw new Error(
          `Introspection result missing interfaces: ${implementingIntrospectionStr}.`,
        );
      }

      return implementingIntrospection.interfaces.map(getInterfaceType);
    }

    function buildObjectDef(objectIntrospection) {
      return new _definition$4.GraphQLObjectType({
        name: objectIntrospection.name,
        description: objectIntrospection.description,
        interfaces: () => buildImplementationsList(objectIntrospection),
        fields: () => buildFieldDefMap(objectIntrospection),
      });
    }

    function buildInterfaceDef(interfaceIntrospection) {
      return new _definition$4.GraphQLInterfaceType({
        name: interfaceIntrospection.name,
        description: interfaceIntrospection.description,
        interfaces: () => buildImplementationsList(interfaceIntrospection),
        fields: () => buildFieldDefMap(interfaceIntrospection),
      });
    }

    function buildUnionDef(unionIntrospection) {
      if (!unionIntrospection.possibleTypes) {
        const unionIntrospectionStr = (0, _inspect$4.inspect)(unionIntrospection);
        throw new Error(
          `Introspection result missing possibleTypes: ${unionIntrospectionStr}.`,
        );
      }

      return new _definition$4.GraphQLUnionType({
        name: unionIntrospection.name,
        description: unionIntrospection.description,
        types: () => unionIntrospection.possibleTypes.map(getObjectType),
      });
    }

    function buildEnumDef(enumIntrospection) {
      if (!enumIntrospection.enumValues) {
        const enumIntrospectionStr = (0, _inspect$4.inspect)(enumIntrospection);
        throw new Error(
          `Introspection result missing enumValues: ${enumIntrospectionStr}.`,
        );
      }

      return new _definition$4.GraphQLEnumType({
        name: enumIntrospection.name,
        description: enumIntrospection.description,
        values: (0, _keyValMap$1.keyValMap)(
          enumIntrospection.enumValues,
          (valueIntrospection) => valueIntrospection.name,
          (valueIntrospection) => ({
            description: valueIntrospection.description,
            deprecationReason: valueIntrospection.deprecationReason,
          }),
        ),
      });
    }

    function buildInputObjectDef(inputObjectIntrospection) {
      if (!inputObjectIntrospection.inputFields) {
        const inputObjectIntrospectionStr = (0, _inspect$4.inspect)(
          inputObjectIntrospection,
        );
        throw new Error(
          `Introspection result missing inputFields: ${inputObjectIntrospectionStr}.`,
        );
      }

      return new _definition$4.GraphQLInputObjectType({
        name: inputObjectIntrospection.name,
        description: inputObjectIntrospection.description,
        fields: () => buildInputValueDefMap(inputObjectIntrospection.inputFields),
      });
    }

    function buildFieldDefMap(typeIntrospection) {
      if (!typeIntrospection.fields) {
        throw new Error(
          `Introspection result missing fields: ${(0, _inspect$4.inspect)(
          typeIntrospection,
        )}.`,
        );
      }

      return (0, _keyValMap$1.keyValMap)(
        typeIntrospection.fields,
        (fieldIntrospection) => fieldIntrospection.name,
        buildField,
      );
    }

    function buildField(fieldIntrospection) {
      const type = getType(fieldIntrospection.type);

      if (!(0, _definition$4.isOutputType)(type)) {
        const typeStr = (0, _inspect$4.inspect)(type);
        throw new Error(
          `Introspection must provide output type for fields, but received: ${typeStr}.`,
        );
      }

      if (!fieldIntrospection.args) {
        const fieldIntrospectionStr = (0, _inspect$4.inspect)(fieldIntrospection);
        throw new Error(
          `Introspection result missing field args: ${fieldIntrospectionStr}.`,
        );
      }

      return {
        description: fieldIntrospection.description,
        deprecationReason: fieldIntrospection.deprecationReason,
        type,
        args: buildInputValueDefMap(fieldIntrospection.args),
      };
    }

    function buildInputValueDefMap(inputValueIntrospections) {
      return (0, _keyValMap$1.keyValMap)(
        inputValueIntrospections,
        (inputValue) => inputValue.name,
        buildInputValue,
      );
    }

    function buildInputValue(inputValueIntrospection) {
      const type = getType(inputValueIntrospection.type);

      if (!(0, _definition$4.isInputType)(type)) {
        const typeStr = (0, _inspect$4.inspect)(type);
        throw new Error(
          `Introspection must provide input type for arguments, but received: ${typeStr}.`,
        );
      }

      const defaultValue =
        inputValueIntrospection.defaultValue != null
          ? (0, _valueFromAST$1.valueFromAST)(
              (0, _parser$1.parseValue)(inputValueIntrospection.defaultValue),
              type,
            )
          : undefined;
      return {
        description: inputValueIntrospection.description,
        type,
        defaultValue,
        deprecationReason: inputValueIntrospection.deprecationReason,
      };
    }

    function buildDirective(directiveIntrospection) {
      if (!directiveIntrospection.args) {
        const directiveIntrospectionStr = (0, _inspect$4.inspect)(
          directiveIntrospection,
        );
        throw new Error(
          `Introspection result missing directive args: ${directiveIntrospectionStr}.`,
        );
      }

      if (!directiveIntrospection.locations) {
        const directiveIntrospectionStr = (0, _inspect$4.inspect)(
          directiveIntrospection,
        );
        throw new Error(
          `Introspection result missing directive locations: ${directiveIntrospectionStr}.`,
        );
      }

      return new _directives$4.GraphQLDirective({
        name: directiveIntrospection.name,
        description: directiveIntrospection.description,
        isRepeatable: directiveIntrospection.isRepeatable,
        locations: directiveIntrospection.locations.slice(),
        args: buildInputValueDefMap(directiveIntrospection.args),
      });
    }
  }

  var buildASTSchema$1 = {};

  var extendSchema$1 = {};

  Object.defineProperty(extendSchema$1, '__esModule', {
    value: true,
  });
  extendSchema$1.extendSchema = extendSchema;
  extendSchema$1.extendSchemaImpl = extendSchemaImpl;

  var _devAssert$2 = devAssert$1;

  var _inspect$3 = inspect$1;

  var _invariant$3 = invariant$1;

  var _keyMap$1 = keyMap$1;

  var _mapValue = mapValue$1;

  var _kinds$4 = kinds;

  var _predicates = predicates;

  var _definition$3 = definition;

  var _directives$3 = directives;

  var _introspection$2 = introspection;

  var _scalars$2 = scalars;

  var _schema$2 = schema;

  var _validate$1 = validate$1;

  var _values = values;

  var _valueFromAST = valueFromAST$1;

  /**
   * Produces a new schema given an existing schema and a document which may
   * contain GraphQL type extensions and definitions. The original schema will
   * remain unaltered.
   *
   * Because a schema represents a graph of references, a schema cannot be
   * extended without effectively making an entire copy. We do not know until it's
   * too late if subgraphs remain unchanged.
   *
   * This algorithm copies the provided schema, applying extensions while
   * producing the copy. The original schema remains unaltered.
   */
  function extendSchema(schema, documentAST, options) {
    (0, _schema$2.assertSchema)(schema);
    (documentAST != null && documentAST.kind === _kinds$4.Kind.DOCUMENT) ||
      (0, _devAssert$2.devAssert)(false, 'Must provide valid Document AST.');

    if (
      (options === null || options === void 0 ? void 0 : options.assumeValid) !==
        true &&
      (options === null || options === void 0
        ? void 0
        : options.assumeValidSDL) !== true
    ) {
      (0, _validate$1.assertValidSDLExtension)(documentAST, schema);
    }

    const schemaConfig = schema.toConfig();
    const extendedConfig = extendSchemaImpl(schemaConfig, documentAST, options);
    return schemaConfig === extendedConfig
      ? schema
      : new _schema$2.GraphQLSchema(extendedConfig);
  }
  /**
   * @internal
   */

  function extendSchemaImpl(schemaConfig, documentAST, options) {
    var _schemaDef, _schemaDef$descriptio, _schemaDef2, _options$assumeValid;

    // Collect the type definitions and extensions found in the document.
    const typeDefs = [];
    const typeExtensionsMap = Object.create(null); // New directives and types are separate because a directives and types can
    // have the same name. For example, a type named "skip".

    const directiveDefs = [];
    let schemaDef; // Schema extensions are collected which may add additional operation types.

    const schemaExtensions = [];

    for (const def of documentAST.definitions) {
      if (def.kind === _kinds$4.Kind.SCHEMA_DEFINITION) {
        schemaDef = def;
      } else if (def.kind === _kinds$4.Kind.SCHEMA_EXTENSION) {
        schemaExtensions.push(def);
      } else if ((0, _predicates.isTypeDefinitionNode)(def)) {
        typeDefs.push(def);
      } else if ((0, _predicates.isTypeExtensionNode)(def)) {
        const extendedTypeName = def.name.value;
        const existingTypeExtensions = typeExtensionsMap[extendedTypeName];
        typeExtensionsMap[extendedTypeName] = existingTypeExtensions
          ? existingTypeExtensions.concat([def])
          : [def];
      } else if (def.kind === _kinds$4.Kind.DIRECTIVE_DEFINITION) {
        directiveDefs.push(def);
      }
    } // If this document contains no new types, extensions, or directives then
    // return the same unmodified GraphQLSchema instance.

    if (
      Object.keys(typeExtensionsMap).length === 0 &&
      typeDefs.length === 0 &&
      directiveDefs.length === 0 &&
      schemaExtensions.length === 0 &&
      schemaDef == null
    ) {
      return schemaConfig;
    }

    const typeMap = Object.create(null);

    for (const existingType of schemaConfig.types) {
      typeMap[existingType.name] = extendNamedType(existingType);
    }

    for (const typeNode of typeDefs) {
      var _stdTypeMap$name;

      const name = typeNode.name.value;
      typeMap[name] =
        (_stdTypeMap$name = stdTypeMap[name]) !== null &&
        _stdTypeMap$name !== void 0
          ? _stdTypeMap$name
          : buildType(typeNode);
    }

    const operationTypes = {
      // Get the extended root operation types.
      query: schemaConfig.query && replaceNamedType(schemaConfig.query),
      mutation: schemaConfig.mutation && replaceNamedType(schemaConfig.mutation),
      subscription:
        schemaConfig.subscription && replaceNamedType(schemaConfig.subscription),
      // Then, incorporate schema definition and all schema extensions.
      ...(schemaDef && getOperationTypes([schemaDef])),
      ...getOperationTypes(schemaExtensions),
    }; // Then produce and return a Schema config with these types.

    return {
      description:
        (_schemaDef = schemaDef) === null || _schemaDef === void 0
          ? void 0
          : (_schemaDef$descriptio = _schemaDef.description) === null ||
            _schemaDef$descriptio === void 0
          ? void 0
          : _schemaDef$descriptio.value,
      ...operationTypes,
      types: Object.values(typeMap),
      directives: [
        ...schemaConfig.directives.map(replaceDirective),
        ...directiveDefs.map(buildDirective),
      ],
      extensions: Object.create(null),
      astNode:
        (_schemaDef2 = schemaDef) !== null && _schemaDef2 !== void 0
          ? _schemaDef2
          : schemaConfig.astNode,
      extensionASTNodes: schemaConfig.extensionASTNodes.concat(schemaExtensions),
      assumeValid:
        (_options$assumeValid =
          options === null || options === void 0
            ? void 0
            : options.assumeValid) !== null && _options$assumeValid !== void 0
          ? _options$assumeValid
          : false,
    }; // Below are functions used for producing this schema that have closed over
    // this scope and have access to the schema, cache, and newly defined types.

    function replaceType(type) {
      if ((0, _definition$3.isListType)(type)) {
        // @ts-expect-error
        return new _definition$3.GraphQLList(replaceType(type.ofType));
      }

      if ((0, _definition$3.isNonNullType)(type)) {
        // @ts-expect-error
        return new _definition$3.GraphQLNonNull(replaceType(type.ofType));
      } // @ts-expect-error FIXME

      return replaceNamedType(type);
    }

    function replaceNamedType(type) {
      // Note: While this could make early assertions to get the correctly
      // typed values, that would throw immediately while type system
      // validation with validateSchema() will produce more actionable results.
      return typeMap[type.name];
    }

    function replaceDirective(directive) {
      const config = directive.toConfig();
      return new _directives$3.GraphQLDirective({
        ...config,
        args: (0, _mapValue.mapValue)(config.args, extendArg),
      });
    }

    function extendNamedType(type) {
      if (
        (0, _introspection$2.isIntrospectionType)(type) ||
        (0, _scalars$2.isSpecifiedScalarType)(type)
      ) {
        // Builtin types are not extended.
        return type;
      }

      if ((0, _definition$3.isScalarType)(type)) {
        return extendScalarType(type);
      }

      if ((0, _definition$3.isObjectType)(type)) {
        return extendObjectType(type);
      }

      if ((0, _definition$3.isInterfaceType)(type)) {
        return extendInterfaceType(type);
      }

      if ((0, _definition$3.isUnionType)(type)) {
        return extendUnionType(type);
      }

      if ((0, _definition$3.isEnumType)(type)) {
        return extendEnumType(type);
      }

      if ((0, _definition$3.isInputObjectType)(type)) {
        return extendInputObjectType(type);
      }
      /* c8 ignore next 3 */
      // Not reachable, all possible type definition nodes have been considered.

      (0, _invariant$3.invariant)(
          false,
          'Unexpected type: ' + (0, _inspect$3.inspect)(type),
        );
    }

    function extendInputObjectType(type) {
      var _typeExtensionsMap$co;

      const config = type.toConfig();
      const extensions =
        (_typeExtensionsMap$co = typeExtensionsMap[config.name]) !== null &&
        _typeExtensionsMap$co !== void 0
          ? _typeExtensionsMap$co
          : [];
      return new _definition$3.GraphQLInputObjectType({
        ...config,
        fields: () => ({
          ...(0, _mapValue.mapValue)(config.fields, (field) => ({
            ...field,
            type: replaceType(field.type),
          })),
          ...buildInputFieldMap(extensions),
        }),
        extensionASTNodes: config.extensionASTNodes.concat(extensions),
      });
    }

    function extendEnumType(type) {
      var _typeExtensionsMap$ty;

      const config = type.toConfig();
      const extensions =
        (_typeExtensionsMap$ty = typeExtensionsMap[type.name]) !== null &&
        _typeExtensionsMap$ty !== void 0
          ? _typeExtensionsMap$ty
          : [];
      return new _definition$3.GraphQLEnumType({
        ...config,
        values: { ...config.values, ...buildEnumValueMap(extensions) },
        extensionASTNodes: config.extensionASTNodes.concat(extensions),
      });
    }

    function extendScalarType(type) {
      var _typeExtensionsMap$co2;

      const config = type.toConfig();
      const extensions =
        (_typeExtensionsMap$co2 = typeExtensionsMap[config.name]) !== null &&
        _typeExtensionsMap$co2 !== void 0
          ? _typeExtensionsMap$co2
          : [];
      let specifiedByURL = config.specifiedByURL;

      for (const extensionNode of extensions) {
        var _getSpecifiedByURL;

        specifiedByURL =
          (_getSpecifiedByURL = getSpecifiedByURL(extensionNode)) !== null &&
          _getSpecifiedByURL !== void 0
            ? _getSpecifiedByURL
            : specifiedByURL;
      }

      return new _definition$3.GraphQLScalarType({
        ...config,
        specifiedByURL,
        extensionASTNodes: config.extensionASTNodes.concat(extensions),
      });
    }

    function extendObjectType(type) {
      var _typeExtensionsMap$co3;

      const config = type.toConfig();
      const extensions =
        (_typeExtensionsMap$co3 = typeExtensionsMap[config.name]) !== null &&
        _typeExtensionsMap$co3 !== void 0
          ? _typeExtensionsMap$co3
          : [];
      return new _definition$3.GraphQLObjectType({
        ...config,
        interfaces: () => [
          ...type.getInterfaces().map(replaceNamedType),
          ...buildInterfaces(extensions),
        ],
        fields: () => ({
          ...(0, _mapValue.mapValue)(config.fields, extendField),
          ...buildFieldMap(extensions),
        }),
        extensionASTNodes: config.extensionASTNodes.concat(extensions),
      });
    }

    function extendInterfaceType(type) {
      var _typeExtensionsMap$co4;

      const config = type.toConfig();
      const extensions =
        (_typeExtensionsMap$co4 = typeExtensionsMap[config.name]) !== null &&
        _typeExtensionsMap$co4 !== void 0
          ? _typeExtensionsMap$co4
          : [];
      return new _definition$3.GraphQLInterfaceType({
        ...config,
        interfaces: () => [
          ...type.getInterfaces().map(replaceNamedType),
          ...buildInterfaces(extensions),
        ],
        fields: () => ({
          ...(0, _mapValue.mapValue)(config.fields, extendField),
          ...buildFieldMap(extensions),
        }),
        extensionASTNodes: config.extensionASTNodes.concat(extensions),
      });
    }

    function extendUnionType(type) {
      var _typeExtensionsMap$co5;

      const config = type.toConfig();
      const extensions =
        (_typeExtensionsMap$co5 = typeExtensionsMap[config.name]) !== null &&
        _typeExtensionsMap$co5 !== void 0
          ? _typeExtensionsMap$co5
          : [];
      return new _definition$3.GraphQLUnionType({
        ...config,
        types: () => [
          ...type.getTypes().map(replaceNamedType),
          ...buildUnionTypes(extensions),
        ],
        extensionASTNodes: config.extensionASTNodes.concat(extensions),
      });
    }

    function extendField(field) {
      return {
        ...field,
        type: replaceType(field.type),
        args: field.args && (0, _mapValue.mapValue)(field.args, extendArg),
      };
    }

    function extendArg(arg) {
      return { ...arg, type: replaceType(arg.type) };
    }

    function getOperationTypes(nodes) {
      const opTypes = {};

      for (const node of nodes) {
        var _node$operationTypes;

        // FIXME: https://github.com/graphql/graphql-js/issues/2203
        const operationTypesNodes =
          /* c8 ignore next */
          (_node$operationTypes = node.operationTypes) !== null &&
          _node$operationTypes !== void 0
            ? _node$operationTypes
            : [];

        for (const operationType of operationTypesNodes) {
          // Note: While this could make early assertions to get the correctly
          // typed values below, that would throw immediately while type system
          // validation with validateSchema() will produce more actionable results.
          // @ts-expect-error
          opTypes[operationType.operation] = getNamedType(operationType.type);
        }
      }

      return opTypes;
    }

    function getNamedType(node) {
      var _stdTypeMap$name2;

      const name = node.name.value;
      const type =
        (_stdTypeMap$name2 = stdTypeMap[name]) !== null &&
        _stdTypeMap$name2 !== void 0
          ? _stdTypeMap$name2
          : typeMap[name];

      if (type === undefined) {
        throw new Error(`Unknown type: "${name}".`);
      }

      return type;
    }

    function getWrappedType(node) {
      if (node.kind === _kinds$4.Kind.LIST_TYPE) {
        return new _definition$3.GraphQLList(getWrappedType(node.type));
      }

      if (node.kind === _kinds$4.Kind.NON_NULL_TYPE) {
        return new _definition$3.GraphQLNonNull(getWrappedType(node.type));
      }

      return getNamedType(node);
    }

    function buildDirective(node) {
      var _node$description;

      return new _directives$3.GraphQLDirective({
        name: node.name.value,
        description:
          (_node$description = node.description) === null ||
          _node$description === void 0
            ? void 0
            : _node$description.value,
        // @ts-expect-error
        locations: node.locations.map(({ value }) => value),
        isRepeatable: node.repeatable,
        args: buildArgumentMap(node.arguments),
        astNode: node,
      });
    }

    function buildFieldMap(nodes) {
      const fieldConfigMap = Object.create(null);

      for (const node of nodes) {
        var _node$fields;

        // FIXME: https://github.com/graphql/graphql-js/issues/2203
        const nodeFields =
          /* c8 ignore next */
          (_node$fields = node.fields) !== null && _node$fields !== void 0
            ? _node$fields
            : [];

        for (const field of nodeFields) {
          var _field$description;

          fieldConfigMap[field.name.value] = {
            // Note: While this could make assertions to get the correctly typed
            // value, that would throw immediately while type system validation
            // with validateSchema() will produce more actionable results.
            type: getWrappedType(field.type),
            description:
              (_field$description = field.description) === null ||
              _field$description === void 0
                ? void 0
                : _field$description.value,
            args: buildArgumentMap(field.arguments),
            deprecationReason: getDeprecationReason(field),
            astNode: field,
          };
        }
      }

      return fieldConfigMap;
    }

    function buildArgumentMap(args) {
      // FIXME: https://github.com/graphql/graphql-js/issues/2203
      const argsNodes =
        /* c8 ignore next */
        args !== null && args !== void 0 ? args : [];
      const argConfigMap = Object.create(null);

      for (const arg of argsNodes) {
        var _arg$description;

        // Note: While this could make assertions to get the correctly typed
        // value, that would throw immediately while type system validation
        // with validateSchema() will produce more actionable results.
        const type = getWrappedType(arg.type);
        argConfigMap[arg.name.value] = {
          type,
          description:
            (_arg$description = arg.description) === null ||
            _arg$description === void 0
              ? void 0
              : _arg$description.value,
          defaultValue: (0, _valueFromAST.valueFromAST)(arg.defaultValue, type),
          deprecationReason: getDeprecationReason(arg),
          astNode: arg,
        };
      }

      return argConfigMap;
    }

    function buildInputFieldMap(nodes) {
      const inputFieldMap = Object.create(null);

      for (const node of nodes) {
        var _node$fields2;

        // FIXME: https://github.com/graphql/graphql-js/issues/2203
        const fieldsNodes =
          /* c8 ignore next */
          (_node$fields2 = node.fields) !== null && _node$fields2 !== void 0
            ? _node$fields2
            : [];

        for (const field of fieldsNodes) {
          var _field$description2;

          // Note: While this could make assertions to get the correctly typed
          // value, that would throw immediately while type system validation
          // with validateSchema() will produce more actionable results.
          const type = getWrappedType(field.type);
          inputFieldMap[field.name.value] = {
            type,
            description:
              (_field$description2 = field.description) === null ||
              _field$description2 === void 0
                ? void 0
                : _field$description2.value,
            defaultValue: (0, _valueFromAST.valueFromAST)(
              field.defaultValue,
              type,
            ),
            deprecationReason: getDeprecationReason(field),
            astNode: field,
          };
        }
      }

      return inputFieldMap;
    }

    function buildEnumValueMap(nodes) {
      const enumValueMap = Object.create(null);

      for (const node of nodes) {
        var _node$values;

        // FIXME: https://github.com/graphql/graphql-js/issues/2203
        const valuesNodes =
          /* c8 ignore next */
          (_node$values = node.values) !== null && _node$values !== void 0
            ? _node$values
            : [];

        for (const value of valuesNodes) {
          var _value$description;

          enumValueMap[value.name.value] = {
            description:
              (_value$description = value.description) === null ||
              _value$description === void 0
                ? void 0
                : _value$description.value,
            deprecationReason: getDeprecationReason(value),
            astNode: value,
          };
        }
      }

      return enumValueMap;
    }

    function buildInterfaces(nodes) {
      // Note: While this could make assertions to get the correctly typed
      // values below, that would throw immediately while type system
      // validation with validateSchema() will produce more actionable results.
      // @ts-expect-error
      return nodes.flatMap(
        // FIXME: https://github.com/graphql/graphql-js/issues/2203
        (node) => {
          var _node$interfaces$map, _node$interfaces;

          return (
            /* c8 ignore next */
            (_node$interfaces$map =
              (_node$interfaces = node.interfaces) === null ||
              _node$interfaces === void 0
                ? void 0
                : _node$interfaces.map(getNamedType)) !== null &&
              _node$interfaces$map !== void 0
              ? _node$interfaces$map
              : []
          );
        },
      );
    }

    function buildUnionTypes(nodes) {
      // Note: While this could make assertions to get the correctly typed
      // values below, that would throw immediately while type system
      // validation with validateSchema() will produce more actionable results.
      // @ts-expect-error
      return nodes.flatMap(
        // FIXME: https://github.com/graphql/graphql-js/issues/2203
        (node) => {
          var _node$types$map, _node$types;

          return (
            /* c8 ignore next */
            (_node$types$map =
              (_node$types = node.types) === null || _node$types === void 0
                ? void 0
                : _node$types.map(getNamedType)) !== null &&
              _node$types$map !== void 0
              ? _node$types$map
              : []
          );
        },
      );
    }

    function buildType(astNode) {
      var _typeExtensionsMap$na;

      const name = astNode.name.value;
      const extensionASTNodes =
        (_typeExtensionsMap$na = typeExtensionsMap[name]) !== null &&
        _typeExtensionsMap$na !== void 0
          ? _typeExtensionsMap$na
          : [];

      switch (astNode.kind) {
        case _kinds$4.Kind.OBJECT_TYPE_DEFINITION: {
          var _astNode$description;

          const allNodes = [astNode, ...extensionASTNodes];
          return new _definition$3.GraphQLObjectType({
            name,
            description:
              (_astNode$description = astNode.description) === null ||
              _astNode$description === void 0
                ? void 0
                : _astNode$description.value,
            interfaces: () => buildInterfaces(allNodes),
            fields: () => buildFieldMap(allNodes),
            astNode,
            extensionASTNodes,
          });
        }

        case _kinds$4.Kind.INTERFACE_TYPE_DEFINITION: {
          var _astNode$description2;

          const allNodes = [astNode, ...extensionASTNodes];
          return new _definition$3.GraphQLInterfaceType({
            name,
            description:
              (_astNode$description2 = astNode.description) === null ||
              _astNode$description2 === void 0
                ? void 0
                : _astNode$description2.value,
            interfaces: () => buildInterfaces(allNodes),
            fields: () => buildFieldMap(allNodes),
            astNode,
            extensionASTNodes,
          });
        }

        case _kinds$4.Kind.ENUM_TYPE_DEFINITION: {
          var _astNode$description3;

          const allNodes = [astNode, ...extensionASTNodes];
          return new _definition$3.GraphQLEnumType({
            name,
            description:
              (_astNode$description3 = astNode.description) === null ||
              _astNode$description3 === void 0
                ? void 0
                : _astNode$description3.value,
            values: buildEnumValueMap(allNodes),
            astNode,
            extensionASTNodes,
          });
        }

        case _kinds$4.Kind.UNION_TYPE_DEFINITION: {
          var _astNode$description4;

          const allNodes = [astNode, ...extensionASTNodes];
          return new _definition$3.GraphQLUnionType({
            name,
            description:
              (_astNode$description4 = astNode.description) === null ||
              _astNode$description4 === void 0
                ? void 0
                : _astNode$description4.value,
            types: () => buildUnionTypes(allNodes),
            astNode,
            extensionASTNodes,
          });
        }

        case _kinds$4.Kind.SCALAR_TYPE_DEFINITION: {
          var _astNode$description5;

          return new _definition$3.GraphQLScalarType({
            name,
            description:
              (_astNode$description5 = astNode.description) === null ||
              _astNode$description5 === void 0
                ? void 0
                : _astNode$description5.value,
            specifiedByURL: getSpecifiedByURL(astNode),
            astNode,
            extensionASTNodes,
          });
        }

        case _kinds$4.Kind.INPUT_OBJECT_TYPE_DEFINITION: {
          var _astNode$description6;

          const allNodes = [astNode, ...extensionASTNodes];
          return new _definition$3.GraphQLInputObjectType({
            name,
            description:
              (_astNode$description6 = astNode.description) === null ||
              _astNode$description6 === void 0
                ? void 0
                : _astNode$description6.value,
            fields: () => buildInputFieldMap(allNodes),
            astNode,
            extensionASTNodes,
          });
        }
      }
    }
  }

  const stdTypeMap = (0, _keyMap$1.keyMap)(
    [..._scalars$2.specifiedScalarTypes, ..._introspection$2.introspectionTypes],
    (type) => type.name,
  );
  /**
   * Given a field or enum value node, returns the string value for the
   * deprecation reason.
   */

  function getDeprecationReason(node) {
    const deprecated = (0, _values.getDirectiveValues)(
      _directives$3.GraphQLDeprecatedDirective,
      node,
    ); // @ts-expect-error validated by `getDirectiveValues`

    return deprecated === null || deprecated === void 0
      ? void 0
      : deprecated.reason;
  }
  /**
   * Given a scalar node, returns the string value for the specifiedByURL.
   */

  function getSpecifiedByURL(node) {
    const specifiedBy = (0, _values.getDirectiveValues)(
      _directives$3.GraphQLSpecifiedByDirective,
      node,
    ); // @ts-expect-error validated by `getDirectiveValues`

    return specifiedBy === null || specifiedBy === void 0
      ? void 0
      : specifiedBy.url;
  }

  Object.defineProperty(buildASTSchema$1, '__esModule', {
    value: true,
  });
  buildASTSchema$1.buildASTSchema = buildASTSchema;
  buildASTSchema$1.buildSchema = buildSchema;

  var _devAssert$1 = devAssert$1;

  var _kinds$3 = kinds;

  var _parser = parser;

  var _directives$2 = directives;

  var _schema$1 = schema;

  var _validate = validate$1;

  var _extendSchema = extendSchema$1;

  /**
   * This takes the ast of a schema document produced by the parse function in
   * src/language/parser.js.
   *
   * If no schema definition is provided, then it will look for types named Query,
   * Mutation and Subscription.
   *
   * Given that AST it constructs a GraphQLSchema. The resulting schema
   * has no resolve methods, so execution will use default resolvers.
   */
  function buildASTSchema(documentAST, options) {
    (documentAST != null && documentAST.kind === _kinds$3.Kind.DOCUMENT) ||
      (0, _devAssert$1.devAssert)(false, 'Must provide valid Document AST.');

    if (
      (options === null || options === void 0 ? void 0 : options.assumeValid) !==
        true &&
      (options === null || options === void 0
        ? void 0
        : options.assumeValidSDL) !== true
    ) {
      (0, _validate.assertValidSDL)(documentAST);
    }

    const emptySchemaConfig = {
      description: undefined,
      types: [],
      directives: [],
      extensions: Object.create(null),
      extensionASTNodes: [],
      assumeValid: false,
    };
    const config = (0, _extendSchema.extendSchemaImpl)(
      emptySchemaConfig,
      documentAST,
      options,
    );

    if (config.astNode == null) {
      for (const type of config.types) {
        switch (type.name) {
          // Note: While this could make early assertions to get the correctly
          // typed values below, that would throw immediately while type system
          // validation with validateSchema() will produce more actionable results.
          case 'Query':
            // @ts-expect-error validated in `validateSchema`
            config.query = type;
            break;

          case 'Mutation':
            // @ts-expect-error validated in `validateSchema`
            config.mutation = type;
            break;

          case 'Subscription':
            // @ts-expect-error validated in `validateSchema`
            config.subscription = type;
            break;
        }
      }
    }

    const directives = [
      ...config.directives, // If specified directives were not explicitly declared, add them.
      ..._directives$2.specifiedDirectives.filter((stdDirective) =>
        config.directives.every(
          (directive) => directive.name !== stdDirective.name,
        ),
      ),
    ];
    return new _schema$1.GraphQLSchema({ ...config, directives });
  }
  /**
   * A helper function to build a GraphQLSchema directly from a source
   * document.
   */

  function buildSchema(source, options) {
    const document = (0, _parser.parse)(source, {
      noLocation:
        options === null || options === void 0 ? void 0 : options.noLocation,
      allowLegacyFragmentVariables:
        options === null || options === void 0
          ? void 0
          : options.allowLegacyFragmentVariables,
    });
    return buildASTSchema(document, {
      assumeValidSDL:
        options === null || options === void 0 ? void 0 : options.assumeValidSDL,
      assumeValid:
        options === null || options === void 0 ? void 0 : options.assumeValid,
    });
  }

  var lexicographicSortSchema$1 = {};

  Object.defineProperty(lexicographicSortSchema$1, '__esModule', {
    value: true,
  });
  lexicographicSortSchema$1.lexicographicSortSchema = lexicographicSortSchema;

  var _inspect$2 = inspect$1;

  var _invariant$2 = invariant$1;

  var _keyValMap = keyValMap$1;

  var _naturalCompare = naturalCompare$1;

  var _definition$2 = definition;

  var _directives$1 = directives;

  var _introspection$1 = introspection;

  var _schema = schema;

  /**
   * Sort GraphQLSchema.
   *
   * This function returns a sorted copy of the given GraphQLSchema.
   */
  function lexicographicSortSchema(schema) {
    const schemaConfig = schema.toConfig();
    const typeMap = (0, _keyValMap.keyValMap)(
      sortByName(schemaConfig.types),
      (type) => type.name,
      sortNamedType,
    );
    return new _schema.GraphQLSchema({
      ...schemaConfig,
      types: Object.values(typeMap),
      directives: sortByName(schemaConfig.directives).map(sortDirective),
      query: replaceMaybeType(schemaConfig.query),
      mutation: replaceMaybeType(schemaConfig.mutation),
      subscription: replaceMaybeType(schemaConfig.subscription),
    });

    function replaceType(type) {
      if ((0, _definition$2.isListType)(type)) {
        // @ts-expect-error
        return new _definition$2.GraphQLList(replaceType(type.ofType));
      } else if ((0, _definition$2.isNonNullType)(type)) {
        // @ts-expect-error
        return new _definition$2.GraphQLNonNull(replaceType(type.ofType));
      } // @ts-expect-error FIXME: TS Conversion

      return replaceNamedType(type);
    }

    function replaceNamedType(type) {
      return typeMap[type.name];
    }

    function replaceMaybeType(maybeType) {
      return maybeType && replaceNamedType(maybeType);
    }

    function sortDirective(directive) {
      const config = directive.toConfig();
      return new _directives$1.GraphQLDirective({
        ...config,
        locations: sortBy(config.locations, (x) => x),
        args: sortArgs(config.args),
      });
    }

    function sortArgs(args) {
      return sortObjMap(args, (arg) => ({ ...arg, type: replaceType(arg.type) }));
    }

    function sortFields(fieldsMap) {
      return sortObjMap(fieldsMap, (field) => ({
        ...field,
        type: replaceType(field.type),
        args: field.args && sortArgs(field.args),
      }));
    }

    function sortInputFields(fieldsMap) {
      return sortObjMap(fieldsMap, (field) => ({
        ...field,
        type: replaceType(field.type),
      }));
    }

    function sortTypes(array) {
      return sortByName(array).map(replaceNamedType);
    }

    function sortNamedType(type) {
      if (
        (0, _definition$2.isScalarType)(type) ||
        (0, _introspection$1.isIntrospectionType)(type)
      ) {
        return type;
      }

      if ((0, _definition$2.isObjectType)(type)) {
        const config = type.toConfig();
        return new _definition$2.GraphQLObjectType({
          ...config,
          interfaces: () => sortTypes(config.interfaces),
          fields: () => sortFields(config.fields),
        });
      }

      if ((0, _definition$2.isInterfaceType)(type)) {
        const config = type.toConfig();
        return new _definition$2.GraphQLInterfaceType({
          ...config,
          interfaces: () => sortTypes(config.interfaces),
          fields: () => sortFields(config.fields),
        });
      }

      if ((0, _definition$2.isUnionType)(type)) {
        const config = type.toConfig();
        return new _definition$2.GraphQLUnionType({
          ...config,
          types: () => sortTypes(config.types),
        });
      }

      if ((0, _definition$2.isEnumType)(type)) {
        const config = type.toConfig();
        return new _definition$2.GraphQLEnumType({
          ...config,
          values: sortObjMap(config.values, (value) => value),
        });
      }

      if ((0, _definition$2.isInputObjectType)(type)) {
        const config = type.toConfig();
        return new _definition$2.GraphQLInputObjectType({
          ...config,
          fields: () => sortInputFields(config.fields),
        });
      }
      /* c8 ignore next 3 */
      // Not reachable, all possible types have been considered.

      (0, _invariant$2.invariant)(
          false,
          'Unexpected type: ' + (0, _inspect$2.inspect)(type),
        );
    }
  }

  function sortObjMap(map, sortValueFn) {
    const sortedMap = Object.create(null);

    for (const key of Object.keys(map).sort(_naturalCompare.naturalCompare)) {
      sortedMap[key] = sortValueFn(map[key]);
    }

    return sortedMap;
  }

  function sortByName(array) {
    return sortBy(array, (obj) => obj.name);
  }

  function sortBy(array, mapToKey) {
    return array.slice().sort((obj1, obj2) => {
      const key1 = mapToKey(obj1);
      const key2 = mapToKey(obj2);
      return (0, _naturalCompare.naturalCompare)(key1, key2);
    });
  }

  var printSchema$1 = {};

  Object.defineProperty(printSchema$1, '__esModule', {
    value: true,
  });
  printSchema$1.printIntrospectionSchema = printIntrospectionSchema;
  printSchema$1.printSchema = printSchema;
  printSchema$1.printType = printType;

  var _inspect$1 = inspect$1;

  var _invariant$1 = invariant$1;

  var _blockString$1 = blockString;

  var _kinds$2 = kinds;

  var _printer$1 = printer;

  var _definition$1 = definition;

  var _directives = directives;

  var _introspection = introspection;

  var _scalars$1 = scalars;

  var _astFromValue$1 = astFromValue$1;

  function printSchema(schema) {
    return printFilteredSchema(
      schema,
      (n) => !(0, _directives.isSpecifiedDirective)(n),
      isDefinedType,
    );
  }

  function printIntrospectionSchema(schema) {
    return printFilteredSchema(
      schema,
      _directives.isSpecifiedDirective,
      _introspection.isIntrospectionType,
    );
  }

  function isDefinedType(type) {
    return (
      !(0, _scalars$1.isSpecifiedScalarType)(type) &&
      !(0, _introspection.isIntrospectionType)(type)
    );
  }

  function printFilteredSchema(schema, directiveFilter, typeFilter) {
    const directives = schema.getDirectives().filter(directiveFilter);
    const types = Object.values(schema.getTypeMap()).filter(typeFilter);
    return [
      printSchemaDefinition(schema),
      ...directives.map((directive) => printDirective(directive)),
      ...types.map((type) => printType(type)),
    ]
      .filter(Boolean)
      .join('\n\n');
  }

  function printSchemaDefinition(schema) {
    if (schema.description == null && isSchemaOfCommonNames(schema)) {
      return;
    }

    const operationTypes = [];
    const queryType = schema.getQueryType();

    if (queryType) {
      operationTypes.push(`  query: ${queryType.name}`);
    }

    const mutationType = schema.getMutationType();

    if (mutationType) {
      operationTypes.push(`  mutation: ${mutationType.name}`);
    }

    const subscriptionType = schema.getSubscriptionType();

    if (subscriptionType) {
      operationTypes.push(`  subscription: ${subscriptionType.name}`);
    }

    return printDescription(schema) + `schema {\n${operationTypes.join('\n')}\n}`;
  }
  /**
   * GraphQL schema define root types for each type of operation. These types are
   * the same as any other type and can be named in any manner, however there is
   * a common naming convention:
   *
   * ```graphql
   *   schema {
   *     query: Query
   *     mutation: Mutation
   *     subscription: Subscription
   *   }
   * ```
   *
   * When using this naming convention, the schema description can be omitted.
   */

  function isSchemaOfCommonNames(schema) {
    const queryType = schema.getQueryType();

    if (queryType && queryType.name !== 'Query') {
      return false;
    }

    const mutationType = schema.getMutationType();

    if (mutationType && mutationType.name !== 'Mutation') {
      return false;
    }

    const subscriptionType = schema.getSubscriptionType();

    if (subscriptionType && subscriptionType.name !== 'Subscription') {
      return false;
    }

    return true;
  }

  function printType(type) {
    if ((0, _definition$1.isScalarType)(type)) {
      return printScalar(type);
    }

    if ((0, _definition$1.isObjectType)(type)) {
      return printObject(type);
    }

    if ((0, _definition$1.isInterfaceType)(type)) {
      return printInterface(type);
    }

    if ((0, _definition$1.isUnionType)(type)) {
      return printUnion(type);
    }

    if ((0, _definition$1.isEnumType)(type)) {
      return printEnum(type);
    }

    if ((0, _definition$1.isInputObjectType)(type)) {
      return printInputObject(type);
    }
    /* c8 ignore next 3 */
    // Not reachable, all possible types have been considered.

    (0, _invariant$1.invariant)(
        false,
        'Unexpected type: ' + (0, _inspect$1.inspect)(type),
      );
  }

  function printScalar(type) {
    return (
      printDescription(type) + `scalar ${type.name}` + printSpecifiedByURL(type)
    );
  }

  function printImplementedInterfaces(type) {
    const interfaces = type.getInterfaces();
    return interfaces.length
      ? ' implements ' + interfaces.map((i) => i.name).join(' & ')
      : '';
  }

  function printObject(type) {
    return (
      printDescription(type) +
      `type ${type.name}` +
      printImplementedInterfaces(type) +
      printFields(type)
    );
  }

  function printInterface(type) {
    return (
      printDescription(type) +
      `interface ${type.name}` +
      printImplementedInterfaces(type) +
      printFields(type)
    );
  }

  function printUnion(type) {
    const types = type.getTypes();
    const possibleTypes = types.length ? ' = ' + types.join(' | ') : '';
    return printDescription(type) + 'union ' + type.name + possibleTypes;
  }

  function printEnum(type) {
    const values = type
      .getValues()
      .map(
        (value, i) =>
          printDescription(value, '  ', !i) +
          '  ' +
          value.name +
          printDeprecated(value.deprecationReason),
      );
    return printDescription(type) + `enum ${type.name}` + printBlock(values);
  }

  function printInputObject(type) {
    const fields = Object.values(type.getFields()).map(
      (f, i) => printDescription(f, '  ', !i) + '  ' + printInputValue(f),
    );
    return printDescription(type) + `input ${type.name}` + printBlock(fields);
  }

  function printFields(type) {
    const fields = Object.values(type.getFields()).map(
      (f, i) =>
        printDescription(f, '  ', !i) +
        '  ' +
        f.name +
        printArgs(f.args, '  ') +
        ': ' +
        String(f.type) +
        printDeprecated(f.deprecationReason),
    );
    return printBlock(fields);
  }

  function printBlock(items) {
    return items.length !== 0 ? ' {\n' + items.join('\n') + '\n}' : '';
  }

  function printArgs(args, indentation = '') {
    if (args.length === 0) {
      return '';
    } // If every arg does not have a description, print them on one line.

    if (args.every((arg) => !arg.description)) {
      return '(' + args.map(printInputValue).join(', ') + ')';
    }

    return (
      '(\n' +
      args
        .map(
          (arg, i) =>
            printDescription(arg, '  ' + indentation, !i) +
            '  ' +
            indentation +
            printInputValue(arg),
        )
        .join('\n') +
      '\n' +
      indentation +
      ')'
    );
  }

  function printInputValue(arg) {
    const defaultAST = (0, _astFromValue$1.astFromValue)(
      arg.defaultValue,
      arg.type,
    );
    let argDecl = arg.name + ': ' + String(arg.type);

    if (defaultAST) {
      argDecl += ` = ${(0, _printer$1.print)(defaultAST)}`;
    }

    return argDecl + printDeprecated(arg.deprecationReason);
  }

  function printDirective(directive) {
    return (
      printDescription(directive) +
      'directive @' +
      directive.name +
      printArgs(directive.args) +
      (directive.isRepeatable ? ' repeatable' : '') +
      ' on ' +
      directive.locations.join(' | ')
    );
  }

  function printDeprecated(reason) {
    if (reason == null) {
      return '';
    }

    if (reason !== _directives.DEFAULT_DEPRECATION_REASON) {
      const astValue = (0, _printer$1.print)({
        kind: _kinds$2.Kind.STRING,
        value: reason,
      });
      return ` @deprecated(reason: ${astValue})`;
    }

    return ' @deprecated';
  }

  function printSpecifiedByURL(scalar) {
    if (scalar.specifiedByURL == null) {
      return '';
    }

    const astValue = (0, _printer$1.print)({
      kind: _kinds$2.Kind.STRING,
      value: scalar.specifiedByURL,
    });
    return ` @specifiedBy(url: ${astValue})`;
  }

  function printDescription(def, indentation = '', firstInBlock = true) {
    const { description } = def;

    if (description == null) {
      return '';
    }

    const blockString = (0, _printer$1.print)({
      kind: _kinds$2.Kind.STRING,
      value: description,
      block: (0, _blockString$1.isPrintableAsBlockString)(description),
    });
    const prefix =
      indentation && !firstInBlock ? '\n' + indentation : indentation;
    return prefix + blockString.replace(/\n/g, '\n' + indentation) + '\n';
  }

  var concatAST$1 = {};

  Object.defineProperty(concatAST$1, '__esModule', {
    value: true,
  });
  concatAST$1.concatAST = concatAST;

  var _kinds$1 = kinds;

  /**
   * Provided a collection of ASTs, presumably each from different files,
   * concatenate the ASTs together into batched AST, useful for validating many
   * GraphQL source files which together represent one conceptual application.
   */
  function concatAST(documents) {
    const definitions = [];

    for (const doc of documents) {
      definitions.push(...doc.definitions);
    }

    return {
      kind: _kinds$1.Kind.DOCUMENT,
      definitions,
    };
  }

  var separateOperations$1 = {};

  Object.defineProperty(separateOperations$1, '__esModule', {
    value: true,
  });
  separateOperations$1.separateOperations = separateOperations;

  var _kinds = kinds;

  var _visitor = visitor;

  /**
   * separateOperations accepts a single AST document which may contain many
   * operations and fragments and returns a collection of AST documents each of
   * which contains a single operation as well the fragment definitions it
   * refers to.
   */
  function separateOperations(documentAST) {
    const operations = [];
    const depGraph = Object.create(null); // Populate metadata and build a dependency graph.

    for (const definitionNode of documentAST.definitions) {
      switch (definitionNode.kind) {
        case _kinds.Kind.OPERATION_DEFINITION:
          operations.push(definitionNode);
          break;

        case _kinds.Kind.FRAGMENT_DEFINITION:
          depGraph[definitionNode.name.value] = collectDependencies(
            definitionNode.selectionSet,
          );
          break;
      }
    } // For each operation, produce a new synthesized AST which includes only what
    // is necessary for completing that operation.

    const separatedDocumentASTs = Object.create(null);

    for (const operation of operations) {
      const dependencies = new Set();

      for (const fragmentName of collectDependencies(operation.selectionSet)) {
        collectTransitiveDependencies(dependencies, depGraph, fragmentName);
      } // Provides the empty string for anonymous operations.

      const operationName = operation.name ? operation.name.value : ''; // The list of definition nodes to be included for this operation, sorted
      // to retain the same order as the original document.

      separatedDocumentASTs[operationName] = {
        kind: _kinds.Kind.DOCUMENT,
        definitions: documentAST.definitions.filter(
          (node) =>
            node === operation ||
            (node.kind === _kinds.Kind.FRAGMENT_DEFINITION &&
              dependencies.has(node.name.value)),
        ),
      };
    }

    return separatedDocumentASTs;
  }

  // From a dependency graph, collects a list of transitive dependencies by
  // recursing through a dependency graph.
  function collectTransitiveDependencies(collected, depGraph, fromName) {
    if (!collected.has(fromName)) {
      collected.add(fromName);
      const immediateDeps = depGraph[fromName];

      if (immediateDeps !== undefined) {
        for (const toName of immediateDeps) {
          collectTransitiveDependencies(collected, depGraph, toName);
        }
      }
    }
  }

  function collectDependencies(selectionSet) {
    const dependencies = [];
    (0, _visitor.visit)(selectionSet, {
      FragmentSpread(node) {
        dependencies.push(node.name.value);
      },
    });
    return dependencies;
  }

  var stripIgnoredCharacters$1 = {};

  Object.defineProperty(stripIgnoredCharacters$1, '__esModule', {
    value: true,
  });
  stripIgnoredCharacters$1.stripIgnoredCharacters = stripIgnoredCharacters;

  var _blockString = blockString;

  var _lexer = lexer$1;

  var _source = source;

  var _tokenKind = tokenKind;

  /**
   * Strips characters that are not significant to the validity or execution
   * of a GraphQL document:
   *   - UnicodeBOM
   *   - WhiteSpace
   *   - LineTerminator
   *   - Comment
   *   - Comma
   *   - BlockString indentation
   *
   * Note: It is required to have a delimiter character between neighboring
   * non-punctuator tokens and this function always uses single space as delimiter.
   *
   * It is guaranteed that both input and output documents if parsed would result
   * in the exact same AST except for nodes location.
   *
   * Warning: It is guaranteed that this function will always produce stable results.
   * However, it's not guaranteed that it will stay the same between different
   * releases due to bugfixes or changes in the GraphQL specification.
   *
   * Query example:
   *
   * ```graphql
   * query SomeQuery($foo: String!, $bar: String) {
   *   someField(foo: $foo, bar: $bar) {
   *     a
   *     b {
   *       c
   *       d
   *     }
   *   }
   * }
   * ```
   *
   * Becomes:
   *
   * ```graphql
   * query SomeQuery($foo:String!$bar:String){someField(foo:$foo bar:$bar){a b{c d}}}
   * ```
   *
   * SDL example:
   *
   * ```graphql
   * """
   * Type description
   * """
   * type Foo {
   *   """
   *   Field description
   *   """
   *   bar: String
   * }
   * ```
   *
   * Becomes:
   *
   * ```graphql
   * """Type description""" type Foo{"""Field description""" bar:String}
   * ```
   */
  function stripIgnoredCharacters(source) {
    const sourceObj = (0, _source.isSource)(source)
      ? source
      : new _source.Source(source);
    const body = sourceObj.body;
    const lexer = new _lexer.Lexer(sourceObj);
    let strippedBody = '';
    let wasLastAddedTokenNonPunctuator = false;

    while (lexer.advance().kind !== _tokenKind.TokenKind.EOF) {
      const currentToken = lexer.token;
      const tokenKind = currentToken.kind;
      /**
       * Every two non-punctuator tokens should have space between them.
       * Also prevent case of non-punctuator token following by spread resulting
       * in invalid token (e.g. `1...` is invalid Float token).
       */

      const isNonPunctuator = !(0, _lexer.isPunctuatorTokenKind)(
        currentToken.kind,
      );

      if (wasLastAddedTokenNonPunctuator) {
        if (
          isNonPunctuator ||
          currentToken.kind === _tokenKind.TokenKind.SPREAD
        ) {
          strippedBody += ' ';
        }
      }

      const tokenBody = body.slice(currentToken.start, currentToken.end);

      if (tokenKind === _tokenKind.TokenKind.BLOCK_STRING) {
        strippedBody += (0, _blockString.printBlockString)(currentToken.value, {
          minimize: true,
        });
      } else {
        strippedBody += tokenBody;
      }

      wasLastAddedTokenNonPunctuator = isNonPunctuator;
    }

    return strippedBody;
  }

  var assertValidName$1 = {};

  Object.defineProperty(assertValidName$1, '__esModule', {
    value: true,
  });
  assertValidName$1.assertValidName = assertValidName;
  assertValidName$1.isValidNameError = isValidNameError;

  var _devAssert = devAssert$1;

  var _GraphQLError = GraphQLError$1;

  var _assertName = assertName$1;

  /* c8 ignore start */

  /**
   * Upholds the spec rules about naming.
   * @deprecated Please use `assertName` instead. Will be removed in v17
   */
  function assertValidName(name) {
    const error = isValidNameError(name);

    if (error) {
      throw error;
    }

    return name;
  }
  /**
   * Returns an Error if a name is invalid.
   * @deprecated Please use `assertName` instead. Will be removed in v17
   */

  function isValidNameError(name) {
    typeof name === 'string' ||
      (0, _devAssert.devAssert)(false, 'Expected name to be a string.');

    if (name.startsWith('__')) {
      return new _GraphQLError.GraphQLError(
        `Name "${name}" must not begin with "__", which is reserved by GraphQL introspection.`,
      );
    }

    try {
      (0, _assertName.assertName)(name);
    } catch (error) {
      return error;
    }
  }

  var findBreakingChanges$1 = {};

  Object.defineProperty(findBreakingChanges$1, '__esModule', {
    value: true,
  });
  findBreakingChanges$1.DangerousChangeType = findBreakingChanges$1.BreakingChangeType = void 0;
  findBreakingChanges$1.findBreakingChanges = findBreakingChanges;
  findBreakingChanges$1.findDangerousChanges = findDangerousChanges;

  var _inspect = inspect$1;

  var _invariant = invariant$1;

  var _keyMap = keyMap$1;

  var _printer = printer;

  var _definition = definition;

  var _scalars = scalars;

  var _astFromValue = astFromValue$1;

  var _sortValueNode = sortValueNode$1;

  let BreakingChangeType;
  findBreakingChanges$1.BreakingChangeType = BreakingChangeType;

  (function (BreakingChangeType) {
    BreakingChangeType['TYPE_REMOVED'] = 'TYPE_REMOVED';
    BreakingChangeType['TYPE_CHANGED_KIND'] = 'TYPE_CHANGED_KIND';
    BreakingChangeType['TYPE_REMOVED_FROM_UNION'] = 'TYPE_REMOVED_FROM_UNION';
    BreakingChangeType['VALUE_REMOVED_FROM_ENUM'] = 'VALUE_REMOVED_FROM_ENUM';
    BreakingChangeType['REQUIRED_INPUT_FIELD_ADDED'] =
      'REQUIRED_INPUT_FIELD_ADDED';
    BreakingChangeType['IMPLEMENTED_INTERFACE_REMOVED'] =
      'IMPLEMENTED_INTERFACE_REMOVED';
    BreakingChangeType['FIELD_REMOVED'] = 'FIELD_REMOVED';
    BreakingChangeType['FIELD_CHANGED_KIND'] = 'FIELD_CHANGED_KIND';
    BreakingChangeType['REQUIRED_ARG_ADDED'] = 'REQUIRED_ARG_ADDED';
    BreakingChangeType['ARG_REMOVED'] = 'ARG_REMOVED';
    BreakingChangeType['ARG_CHANGED_KIND'] = 'ARG_CHANGED_KIND';
    BreakingChangeType['DIRECTIVE_REMOVED'] = 'DIRECTIVE_REMOVED';
    BreakingChangeType['DIRECTIVE_ARG_REMOVED'] = 'DIRECTIVE_ARG_REMOVED';
    BreakingChangeType['REQUIRED_DIRECTIVE_ARG_ADDED'] =
      'REQUIRED_DIRECTIVE_ARG_ADDED';
    BreakingChangeType['DIRECTIVE_REPEATABLE_REMOVED'] =
      'DIRECTIVE_REPEATABLE_REMOVED';
    BreakingChangeType['DIRECTIVE_LOCATION_REMOVED'] =
      'DIRECTIVE_LOCATION_REMOVED';
  })(
    BreakingChangeType || (findBreakingChanges$1.BreakingChangeType = BreakingChangeType = {}),
  );

  let DangerousChangeType;
  findBreakingChanges$1.DangerousChangeType = DangerousChangeType;

  (function (DangerousChangeType) {
    DangerousChangeType['VALUE_ADDED_TO_ENUM'] = 'VALUE_ADDED_TO_ENUM';
    DangerousChangeType['TYPE_ADDED_TO_UNION'] = 'TYPE_ADDED_TO_UNION';
    DangerousChangeType['OPTIONAL_INPUT_FIELD_ADDED'] =
      'OPTIONAL_INPUT_FIELD_ADDED';
    DangerousChangeType['OPTIONAL_ARG_ADDED'] = 'OPTIONAL_ARG_ADDED';
    DangerousChangeType['IMPLEMENTED_INTERFACE_ADDED'] =
      'IMPLEMENTED_INTERFACE_ADDED';
    DangerousChangeType['ARG_DEFAULT_VALUE_CHANGE'] = 'ARG_DEFAULT_VALUE_CHANGE';
  })(
    DangerousChangeType ||
      (findBreakingChanges$1.DangerousChangeType = DangerousChangeType = {}),
  );

  /**
   * Given two schemas, returns an Array containing descriptions of all the types
   * of breaking changes covered by the other functions down below.
   */
  function findBreakingChanges(oldSchema, newSchema) {
    // @ts-expect-error
    return findSchemaChanges(oldSchema, newSchema).filter(
      (change) => change.type in BreakingChangeType,
    );
  }
  /**
   * Given two schemas, returns an Array containing descriptions of all the types
   * of potentially dangerous changes covered by the other functions down below.
   */

  function findDangerousChanges(oldSchema, newSchema) {
    // @ts-expect-error
    return findSchemaChanges(oldSchema, newSchema).filter(
      (change) => change.type in DangerousChangeType,
    );
  }

  function findSchemaChanges(oldSchema, newSchema) {
    return [
      ...findTypeChanges(oldSchema, newSchema),
      ...findDirectiveChanges(oldSchema, newSchema),
    ];
  }

  function findDirectiveChanges(oldSchema, newSchema) {
    const schemaChanges = [];
    const directivesDiff = diff(
      oldSchema.getDirectives(),
      newSchema.getDirectives(),
    );

    for (const oldDirective of directivesDiff.removed) {
      schemaChanges.push({
        type: BreakingChangeType.DIRECTIVE_REMOVED,
        description: `${oldDirective.name} was removed.`,
      });
    }

    for (const [oldDirective, newDirective] of directivesDiff.persisted) {
      const argsDiff = diff(oldDirective.args, newDirective.args);

      for (const newArg of argsDiff.added) {
        if ((0, _definition.isRequiredArgument)(newArg)) {
          schemaChanges.push({
            type: BreakingChangeType.REQUIRED_DIRECTIVE_ARG_ADDED,
            description: `A required arg ${newArg.name} on directive ${oldDirective.name} was added.`,
          });
        }
      }

      for (const oldArg of argsDiff.removed) {
        schemaChanges.push({
          type: BreakingChangeType.DIRECTIVE_ARG_REMOVED,
          description: `${oldArg.name} was removed from ${oldDirective.name}.`,
        });
      }

      if (oldDirective.isRepeatable && !newDirective.isRepeatable) {
        schemaChanges.push({
          type: BreakingChangeType.DIRECTIVE_REPEATABLE_REMOVED,
          description: `Repeatable flag was removed from ${oldDirective.name}.`,
        });
      }

      for (const location of oldDirective.locations) {
        if (!newDirective.locations.includes(location)) {
          schemaChanges.push({
            type: BreakingChangeType.DIRECTIVE_LOCATION_REMOVED,
            description: `${location} was removed from ${oldDirective.name}.`,
          });
        }
      }
    }

    return schemaChanges;
  }

  function findTypeChanges(oldSchema, newSchema) {
    const schemaChanges = [];
    const typesDiff = diff(
      Object.values(oldSchema.getTypeMap()),
      Object.values(newSchema.getTypeMap()),
    );

    for (const oldType of typesDiff.removed) {
      schemaChanges.push({
        type: BreakingChangeType.TYPE_REMOVED,
        description: (0, _scalars.isSpecifiedScalarType)(oldType)
          ? `Standard scalar ${oldType.name} was removed because it is not referenced anymore.`
          : `${oldType.name} was removed.`,
      });
    }

    for (const [oldType, newType] of typesDiff.persisted) {
      if (
        (0, _definition.isEnumType)(oldType) &&
        (0, _definition.isEnumType)(newType)
      ) {
        schemaChanges.push(...findEnumTypeChanges(oldType, newType));
      } else if (
        (0, _definition.isUnionType)(oldType) &&
        (0, _definition.isUnionType)(newType)
      ) {
        schemaChanges.push(...findUnionTypeChanges(oldType, newType));
      } else if (
        (0, _definition.isInputObjectType)(oldType) &&
        (0, _definition.isInputObjectType)(newType)
      ) {
        schemaChanges.push(...findInputObjectTypeChanges(oldType, newType));
      } else if (
        (0, _definition.isObjectType)(oldType) &&
        (0, _definition.isObjectType)(newType)
      ) {
        schemaChanges.push(
          ...findFieldChanges(oldType, newType),
          ...findImplementedInterfacesChanges(oldType, newType),
        );
      } else if (
        (0, _definition.isInterfaceType)(oldType) &&
        (0, _definition.isInterfaceType)(newType)
      ) {
        schemaChanges.push(
          ...findFieldChanges(oldType, newType),
          ...findImplementedInterfacesChanges(oldType, newType),
        );
      } else if (oldType.constructor !== newType.constructor) {
        schemaChanges.push({
          type: BreakingChangeType.TYPE_CHANGED_KIND,
          description:
            `${oldType.name} changed from ` +
            `${typeKindName(oldType)} to ${typeKindName(newType)}.`,
        });
      }
    }

    return schemaChanges;
  }

  function findInputObjectTypeChanges(oldType, newType) {
    const schemaChanges = [];
    const fieldsDiff = diff(
      Object.values(oldType.getFields()),
      Object.values(newType.getFields()),
    );

    for (const newField of fieldsDiff.added) {
      if ((0, _definition.isRequiredInputField)(newField)) {
        schemaChanges.push({
          type: BreakingChangeType.REQUIRED_INPUT_FIELD_ADDED,
          description: `A required field ${newField.name} on input type ${oldType.name} was added.`,
        });
      } else {
        schemaChanges.push({
          type: DangerousChangeType.OPTIONAL_INPUT_FIELD_ADDED,
          description: `An optional field ${newField.name} on input type ${oldType.name} was added.`,
        });
      }
    }

    for (const oldField of fieldsDiff.removed) {
      schemaChanges.push({
        type: BreakingChangeType.FIELD_REMOVED,
        description: `${oldType.name}.${oldField.name} was removed.`,
      });
    }

    for (const [oldField, newField] of fieldsDiff.persisted) {
      const isSafe = isChangeSafeForInputObjectFieldOrFieldArg(
        oldField.type,
        newField.type,
      );

      if (!isSafe) {
        schemaChanges.push({
          type: BreakingChangeType.FIELD_CHANGED_KIND,
          description:
            `${oldType.name}.${oldField.name} changed type from ` +
            `${String(oldField.type)} to ${String(newField.type)}.`,
        });
      }
    }

    return schemaChanges;
  }

  function findUnionTypeChanges(oldType, newType) {
    const schemaChanges = [];
    const possibleTypesDiff = diff(oldType.getTypes(), newType.getTypes());

    for (const newPossibleType of possibleTypesDiff.added) {
      schemaChanges.push({
        type: DangerousChangeType.TYPE_ADDED_TO_UNION,
        description: `${newPossibleType.name} was added to union type ${oldType.name}.`,
      });
    }

    for (const oldPossibleType of possibleTypesDiff.removed) {
      schemaChanges.push({
        type: BreakingChangeType.TYPE_REMOVED_FROM_UNION,
        description: `${oldPossibleType.name} was removed from union type ${oldType.name}.`,
      });
    }

    return schemaChanges;
  }

  function findEnumTypeChanges(oldType, newType) {
    const schemaChanges = [];
    const valuesDiff = diff(oldType.getValues(), newType.getValues());

    for (const newValue of valuesDiff.added) {
      schemaChanges.push({
        type: DangerousChangeType.VALUE_ADDED_TO_ENUM,
        description: `${newValue.name} was added to enum type ${oldType.name}.`,
      });
    }

    for (const oldValue of valuesDiff.removed) {
      schemaChanges.push({
        type: BreakingChangeType.VALUE_REMOVED_FROM_ENUM,
        description: `${oldValue.name} was removed from enum type ${oldType.name}.`,
      });
    }

    return schemaChanges;
  }

  function findImplementedInterfacesChanges(oldType, newType) {
    const schemaChanges = [];
    const interfacesDiff = diff(oldType.getInterfaces(), newType.getInterfaces());

    for (const newInterface of interfacesDiff.added) {
      schemaChanges.push({
        type: DangerousChangeType.IMPLEMENTED_INTERFACE_ADDED,
        description: `${newInterface.name} added to interfaces implemented by ${oldType.name}.`,
      });
    }

    for (const oldInterface of interfacesDiff.removed) {
      schemaChanges.push({
        type: BreakingChangeType.IMPLEMENTED_INTERFACE_REMOVED,
        description: `${oldType.name} no longer implements interface ${oldInterface.name}.`,
      });
    }

    return schemaChanges;
  }

  function findFieldChanges(oldType, newType) {
    const schemaChanges = [];
    const fieldsDiff = diff(
      Object.values(oldType.getFields()),
      Object.values(newType.getFields()),
    );

    for (const oldField of fieldsDiff.removed) {
      schemaChanges.push({
        type: BreakingChangeType.FIELD_REMOVED,
        description: `${oldType.name}.${oldField.name} was removed.`,
      });
    }

    for (const [oldField, newField] of fieldsDiff.persisted) {
      schemaChanges.push(...findArgChanges(oldType, oldField, newField));
      const isSafe = isChangeSafeForObjectOrInterfaceField(
        oldField.type,
        newField.type,
      );

      if (!isSafe) {
        schemaChanges.push({
          type: BreakingChangeType.FIELD_CHANGED_KIND,
          description:
            `${oldType.name}.${oldField.name} changed type from ` +
            `${String(oldField.type)} to ${String(newField.type)}.`,
        });
      }
    }

    return schemaChanges;
  }

  function findArgChanges(oldType, oldField, newField) {
    const schemaChanges = [];
    const argsDiff = diff(oldField.args, newField.args);

    for (const oldArg of argsDiff.removed) {
      schemaChanges.push({
        type: BreakingChangeType.ARG_REMOVED,
        description: `${oldType.name}.${oldField.name} arg ${oldArg.name} was removed.`,
      });
    }

    for (const [oldArg, newArg] of argsDiff.persisted) {
      const isSafe = isChangeSafeForInputObjectFieldOrFieldArg(
        oldArg.type,
        newArg.type,
      );

      if (!isSafe) {
        schemaChanges.push({
          type: BreakingChangeType.ARG_CHANGED_KIND,
          description:
            `${oldType.name}.${oldField.name} arg ${oldArg.name} has changed type from ` +
            `${String(oldArg.type)} to ${String(newArg.type)}.`,
        });
      } else if (oldArg.defaultValue !== undefined) {
        if (newArg.defaultValue === undefined) {
          schemaChanges.push({
            type: DangerousChangeType.ARG_DEFAULT_VALUE_CHANGE,
            description: `${oldType.name}.${oldField.name} arg ${oldArg.name} defaultValue was removed.`,
          });
        } else {
          // Since we looking only for client's observable changes we should
          // compare default values in the same representation as they are
          // represented inside introspection.
          const oldValueStr = stringifyValue(oldArg.defaultValue, oldArg.type);
          const newValueStr = stringifyValue(newArg.defaultValue, newArg.type);

          if (oldValueStr !== newValueStr) {
            schemaChanges.push({
              type: DangerousChangeType.ARG_DEFAULT_VALUE_CHANGE,
              description: `${oldType.name}.${oldField.name} arg ${oldArg.name} has changed defaultValue from ${oldValueStr} to ${newValueStr}.`,
            });
          }
        }
      }
    }

    for (const newArg of argsDiff.added) {
      if ((0, _definition.isRequiredArgument)(newArg)) {
        schemaChanges.push({
          type: BreakingChangeType.REQUIRED_ARG_ADDED,
          description: `A required arg ${newArg.name} on ${oldType.name}.${oldField.name} was added.`,
        });
      } else {
        schemaChanges.push({
          type: DangerousChangeType.OPTIONAL_ARG_ADDED,
          description: `An optional arg ${newArg.name} on ${oldType.name}.${oldField.name} was added.`,
        });
      }
    }

    return schemaChanges;
  }

  function isChangeSafeForObjectOrInterfaceField(oldType, newType) {
    if ((0, _definition.isListType)(oldType)) {
      return (
        // if they're both lists, make sure the underlying types are compatible
        ((0, _definition.isListType)(newType) &&
          isChangeSafeForObjectOrInterfaceField(
            oldType.ofType,
            newType.ofType,
          )) || // moving from nullable to non-null of the same underlying type is safe
        ((0, _definition.isNonNullType)(newType) &&
          isChangeSafeForObjectOrInterfaceField(oldType, newType.ofType))
      );
    }

    if ((0, _definition.isNonNullType)(oldType)) {
      // if they're both non-null, make sure the underlying types are compatible
      return (
        (0, _definition.isNonNullType)(newType) &&
        isChangeSafeForObjectOrInterfaceField(oldType.ofType, newType.ofType)
      );
    }

    return (
      // if they're both named types, see if their names are equivalent
      ((0, _definition.isNamedType)(newType) && oldType.name === newType.name) || // moving from nullable to non-null of the same underlying type is safe
      ((0, _definition.isNonNullType)(newType) &&
        isChangeSafeForObjectOrInterfaceField(oldType, newType.ofType))
    );
  }

  function isChangeSafeForInputObjectFieldOrFieldArg(oldType, newType) {
    if ((0, _definition.isListType)(oldType)) {
      // if they're both lists, make sure the underlying types are compatible
      return (
        (0, _definition.isListType)(newType) &&
        isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType.ofType)
      );
    }

    if ((0, _definition.isNonNullType)(oldType)) {
      return (
        // if they're both non-null, make sure the underlying types are
        // compatible
        ((0, _definition.isNonNullType)(newType) &&
          isChangeSafeForInputObjectFieldOrFieldArg(
            oldType.ofType,
            newType.ofType,
          )) || // moving from non-null to nullable of the same underlying type is safe
        (!(0, _definition.isNonNullType)(newType) &&
          isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType))
      );
    } // if they're both named types, see if their names are equivalent

    return (0, _definition.isNamedType)(newType) && oldType.name === newType.name;
  }

  function typeKindName(type) {
    if ((0, _definition.isScalarType)(type)) {
      return 'a Scalar type';
    }

    if ((0, _definition.isObjectType)(type)) {
      return 'an Object type';
    }

    if ((0, _definition.isInterfaceType)(type)) {
      return 'an Interface type';
    }

    if ((0, _definition.isUnionType)(type)) {
      return 'a Union type';
    }

    if ((0, _definition.isEnumType)(type)) {
      return 'an Enum type';
    }

    if ((0, _definition.isInputObjectType)(type)) {
      return 'an Input type';
    }
    /* c8 ignore next 3 */
    // Not reachable, all possible types have been considered.

    (0, _invariant.invariant)(
        false,
        'Unexpected type: ' + (0, _inspect.inspect)(type),
      );
  }

  function stringifyValue(value, type) {
    const ast = (0, _astFromValue.astFromValue)(value, type);
    ast != null || (0, _invariant.invariant)(false);
    return (0, _printer.print)((0, _sortValueNode.sortValueNode)(ast));
  }

  function diff(oldArray, newArray) {
    const added = [];
    const removed = [];
    const persisted = [];
    const oldMap = (0, _keyMap.keyMap)(oldArray, ({ name }) => name);
    const newMap = (0, _keyMap.keyMap)(newArray, ({ name }) => name);

    for (const oldItem of oldArray) {
      const newItem = newMap[oldItem.name];

      if (newItem === undefined) {
        removed.push(oldItem);
      } else {
        persisted.push([oldItem, newItem]);
      }
    }

    for (const newItem of newArray) {
      if (oldMap[newItem.name] === undefined) {
        added.push(newItem);
      }
    }

    return {
      added,
      persisted,
      removed,
    };
  }

  (function (exports) {

  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  Object.defineProperty(exports, 'BreakingChangeType', {
    enumerable: true,
    get: function () {
      return _findBreakingChanges.BreakingChangeType;
    },
  });
  Object.defineProperty(exports, 'DangerousChangeType', {
    enumerable: true,
    get: function () {
      return _findBreakingChanges.DangerousChangeType;
    },
  });
  Object.defineProperty(exports, 'TypeInfo', {
    enumerable: true,
    get: function () {
      return _TypeInfo.TypeInfo;
    },
  });
  Object.defineProperty(exports, 'assertValidName', {
    enumerable: true,
    get: function () {
      return _assertValidName.assertValidName;
    },
  });
  Object.defineProperty(exports, 'astFromValue', {
    enumerable: true,
    get: function () {
      return _astFromValue.astFromValue;
    },
  });
  Object.defineProperty(exports, 'buildASTSchema', {
    enumerable: true,
    get: function () {
      return _buildASTSchema.buildASTSchema;
    },
  });
  Object.defineProperty(exports, 'buildClientSchema', {
    enumerable: true,
    get: function () {
      return _buildClientSchema.buildClientSchema;
    },
  });
  Object.defineProperty(exports, 'buildSchema', {
    enumerable: true,
    get: function () {
      return _buildASTSchema.buildSchema;
    },
  });
  Object.defineProperty(exports, 'coerceInputValue', {
    enumerable: true,
    get: function () {
      return _coerceInputValue.coerceInputValue;
    },
  });
  Object.defineProperty(exports, 'concatAST', {
    enumerable: true,
    get: function () {
      return _concatAST.concatAST;
    },
  });
  Object.defineProperty(exports, 'doTypesOverlap', {
    enumerable: true,
    get: function () {
      return _typeComparators.doTypesOverlap;
    },
  });
  Object.defineProperty(exports, 'extendSchema', {
    enumerable: true,
    get: function () {
      return _extendSchema.extendSchema;
    },
  });
  Object.defineProperty(exports, 'findBreakingChanges', {
    enumerable: true,
    get: function () {
      return _findBreakingChanges.findBreakingChanges;
    },
  });
  Object.defineProperty(exports, 'findDangerousChanges', {
    enumerable: true,
    get: function () {
      return _findBreakingChanges.findDangerousChanges;
    },
  });
  Object.defineProperty(exports, 'getIntrospectionQuery', {
    enumerable: true,
    get: function () {
      return _getIntrospectionQuery.getIntrospectionQuery;
    },
  });
  Object.defineProperty(exports, 'getOperationAST', {
    enumerable: true,
    get: function () {
      return _getOperationAST.getOperationAST;
    },
  });
  Object.defineProperty(exports, 'getOperationRootType', {
    enumerable: true,
    get: function () {
      return _getOperationRootType.getOperationRootType;
    },
  });
  Object.defineProperty(exports, 'introspectionFromSchema', {
    enumerable: true,
    get: function () {
      return _introspectionFromSchema.introspectionFromSchema;
    },
  });
  Object.defineProperty(exports, 'isEqualType', {
    enumerable: true,
    get: function () {
      return _typeComparators.isEqualType;
    },
  });
  Object.defineProperty(exports, 'isTypeSubTypeOf', {
    enumerable: true,
    get: function () {
      return _typeComparators.isTypeSubTypeOf;
    },
  });
  Object.defineProperty(exports, 'isValidNameError', {
    enumerable: true,
    get: function () {
      return _assertValidName.isValidNameError;
    },
  });
  Object.defineProperty(exports, 'lexicographicSortSchema', {
    enumerable: true,
    get: function () {
      return _lexicographicSortSchema.lexicographicSortSchema;
    },
  });
  Object.defineProperty(exports, 'printIntrospectionSchema', {
    enumerable: true,
    get: function () {
      return _printSchema.printIntrospectionSchema;
    },
  });
  Object.defineProperty(exports, 'printSchema', {
    enumerable: true,
    get: function () {
      return _printSchema.printSchema;
    },
  });
  Object.defineProperty(exports, 'printType', {
    enumerable: true,
    get: function () {
      return _printSchema.printType;
    },
  });
  Object.defineProperty(exports, 'separateOperations', {
    enumerable: true,
    get: function () {
      return _separateOperations.separateOperations;
    },
  });
  Object.defineProperty(exports, 'stripIgnoredCharacters', {
    enumerable: true,
    get: function () {
      return _stripIgnoredCharacters.stripIgnoredCharacters;
    },
  });
  Object.defineProperty(exports, 'typeFromAST', {
    enumerable: true,
    get: function () {
      return _typeFromAST.typeFromAST;
    },
  });
  Object.defineProperty(exports, 'valueFromAST', {
    enumerable: true,
    get: function () {
      return _valueFromAST.valueFromAST;
    },
  });
  Object.defineProperty(exports, 'valueFromASTUntyped', {
    enumerable: true,
    get: function () {
      return _valueFromASTUntyped.valueFromASTUntyped;
    },
  });
  Object.defineProperty(exports, 'visitWithTypeInfo', {
    enumerable: true,
    get: function () {
      return _TypeInfo.visitWithTypeInfo;
    },
  });

  var _getIntrospectionQuery = getIntrospectionQuery$1;

  var _getOperationAST = getOperationAST$1;

  var _getOperationRootType = getOperationRootType$1;

  var _introspectionFromSchema = introspectionFromSchema$1;

  var _buildClientSchema = buildClientSchema$1;

  var _buildASTSchema = buildASTSchema$1;

  var _extendSchema = extendSchema$1;

  var _lexicographicSortSchema = lexicographicSortSchema$1;

  var _printSchema = printSchema$1;

  var _typeFromAST = typeFromAST$1;

  var _valueFromAST = valueFromAST$1;

  var _valueFromASTUntyped = valueFromASTUntyped$1;

  var _astFromValue = astFromValue$1;

  var _TypeInfo = TypeInfo$1;

  var _coerceInputValue = coerceInputValue$1;

  var _concatAST = concatAST$1;

  var _separateOperations = separateOperations$1;

  var _stripIgnoredCharacters = stripIgnoredCharacters$1;

  var _typeComparators = typeComparators;

  var _assertValidName = assertValidName$1;

  var _findBreakingChanges = findBreakingChanges$1;
  }(utilities));

  (function (exports) {

  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  Object.defineProperty(exports, 'BREAK', {
    enumerable: true,
    get: function () {
      return _index2.BREAK;
    },
  });
  Object.defineProperty(exports, 'BreakingChangeType', {
    enumerable: true,
    get: function () {
      return _index6.BreakingChangeType;
    },
  });
  Object.defineProperty(exports, 'DEFAULT_DEPRECATION_REASON', {
    enumerable: true,
    get: function () {
      return _index.DEFAULT_DEPRECATION_REASON;
    },
  });
  Object.defineProperty(exports, 'DangerousChangeType', {
    enumerable: true,
    get: function () {
      return _index6.DangerousChangeType;
    },
  });
  Object.defineProperty(exports, 'DirectiveLocation', {
    enumerable: true,
    get: function () {
      return _index2.DirectiveLocation;
    },
  });
  Object.defineProperty(exports, 'ExecutableDefinitionsRule', {
    enumerable: true,
    get: function () {
      return _index4.ExecutableDefinitionsRule;
    },
  });
  Object.defineProperty(exports, 'FieldsOnCorrectTypeRule', {
    enumerable: true,
    get: function () {
      return _index4.FieldsOnCorrectTypeRule;
    },
  });
  Object.defineProperty(exports, 'FragmentsOnCompositeTypesRule', {
    enumerable: true,
    get: function () {
      return _index4.FragmentsOnCompositeTypesRule;
    },
  });
  Object.defineProperty(exports, 'GRAPHQL_MAX_INT', {
    enumerable: true,
    get: function () {
      return _index.GRAPHQL_MAX_INT;
    },
  });
  Object.defineProperty(exports, 'GRAPHQL_MIN_INT', {
    enumerable: true,
    get: function () {
      return _index.GRAPHQL_MIN_INT;
    },
  });
  Object.defineProperty(exports, 'GraphQLBoolean', {
    enumerable: true,
    get: function () {
      return _index.GraphQLBoolean;
    },
  });
  Object.defineProperty(exports, 'GraphQLDeprecatedDirective', {
    enumerable: true,
    get: function () {
      return _index.GraphQLDeprecatedDirective;
    },
  });
  Object.defineProperty(exports, 'GraphQLDirective', {
    enumerable: true,
    get: function () {
      return _index.GraphQLDirective;
    },
  });
  Object.defineProperty(exports, 'GraphQLEnumType', {
    enumerable: true,
    get: function () {
      return _index.GraphQLEnumType;
    },
  });
  Object.defineProperty(exports, 'GraphQLError', {
    enumerable: true,
    get: function () {
      return _index5.GraphQLError;
    },
  });
  Object.defineProperty(exports, 'GraphQLFloat', {
    enumerable: true,
    get: function () {
      return _index.GraphQLFloat;
    },
  });
  Object.defineProperty(exports, 'GraphQLID', {
    enumerable: true,
    get: function () {
      return _index.GraphQLID;
    },
  });
  Object.defineProperty(exports, 'GraphQLIncludeDirective', {
    enumerable: true,
    get: function () {
      return _index.GraphQLIncludeDirective;
    },
  });
  Object.defineProperty(exports, 'GraphQLInputObjectType', {
    enumerable: true,
    get: function () {
      return _index.GraphQLInputObjectType;
    },
  });
  Object.defineProperty(exports, 'GraphQLInt', {
    enumerable: true,
    get: function () {
      return _index.GraphQLInt;
    },
  });
  Object.defineProperty(exports, 'GraphQLInterfaceType', {
    enumerable: true,
    get: function () {
      return _index.GraphQLInterfaceType;
    },
  });
  Object.defineProperty(exports, 'GraphQLList', {
    enumerable: true,
    get: function () {
      return _index.GraphQLList;
    },
  });
  Object.defineProperty(exports, 'GraphQLNonNull', {
    enumerable: true,
    get: function () {
      return _index.GraphQLNonNull;
    },
  });
  Object.defineProperty(exports, 'GraphQLObjectType', {
    enumerable: true,
    get: function () {
      return _index.GraphQLObjectType;
    },
  });
  Object.defineProperty(exports, 'GraphQLScalarType', {
    enumerable: true,
    get: function () {
      return _index.GraphQLScalarType;
    },
  });
  Object.defineProperty(exports, 'GraphQLSchema', {
    enumerable: true,
    get: function () {
      return _index.GraphQLSchema;
    },
  });
  Object.defineProperty(exports, 'GraphQLSkipDirective', {
    enumerable: true,
    get: function () {
      return _index.GraphQLSkipDirective;
    },
  });
  Object.defineProperty(exports, 'GraphQLSpecifiedByDirective', {
    enumerable: true,
    get: function () {
      return _index.GraphQLSpecifiedByDirective;
    },
  });
  Object.defineProperty(exports, 'GraphQLString', {
    enumerable: true,
    get: function () {
      return _index.GraphQLString;
    },
  });
  Object.defineProperty(exports, 'GraphQLUnionType', {
    enumerable: true,
    get: function () {
      return _index.GraphQLUnionType;
    },
  });
  Object.defineProperty(exports, 'Kind', {
    enumerable: true,
    get: function () {
      return _index2.Kind;
    },
  });
  Object.defineProperty(exports, 'KnownArgumentNamesRule', {
    enumerable: true,
    get: function () {
      return _index4.KnownArgumentNamesRule;
    },
  });
  Object.defineProperty(exports, 'KnownDirectivesRule', {
    enumerable: true,
    get: function () {
      return _index4.KnownDirectivesRule;
    },
  });
  Object.defineProperty(exports, 'KnownFragmentNamesRule', {
    enumerable: true,
    get: function () {
      return _index4.KnownFragmentNamesRule;
    },
  });
  Object.defineProperty(exports, 'KnownTypeNamesRule', {
    enumerable: true,
    get: function () {
      return _index4.KnownTypeNamesRule;
    },
  });
  Object.defineProperty(exports, 'Lexer', {
    enumerable: true,
    get: function () {
      return _index2.Lexer;
    },
  });
  Object.defineProperty(exports, 'Location', {
    enumerable: true,
    get: function () {
      return _index2.Location;
    },
  });
  Object.defineProperty(exports, 'LoneAnonymousOperationRule', {
    enumerable: true,
    get: function () {
      return _index4.LoneAnonymousOperationRule;
    },
  });
  Object.defineProperty(exports, 'LoneSchemaDefinitionRule', {
    enumerable: true,
    get: function () {
      return _index4.LoneSchemaDefinitionRule;
    },
  });
  Object.defineProperty(exports, 'NoDeprecatedCustomRule', {
    enumerable: true,
    get: function () {
      return _index4.NoDeprecatedCustomRule;
    },
  });
  Object.defineProperty(exports, 'NoFragmentCyclesRule', {
    enumerable: true,
    get: function () {
      return _index4.NoFragmentCyclesRule;
    },
  });
  Object.defineProperty(exports, 'NoSchemaIntrospectionCustomRule', {
    enumerable: true,
    get: function () {
      return _index4.NoSchemaIntrospectionCustomRule;
    },
  });
  Object.defineProperty(exports, 'NoUndefinedVariablesRule', {
    enumerable: true,
    get: function () {
      return _index4.NoUndefinedVariablesRule;
    },
  });
  Object.defineProperty(exports, 'NoUnusedFragmentsRule', {
    enumerable: true,
    get: function () {
      return _index4.NoUnusedFragmentsRule;
    },
  });
  Object.defineProperty(exports, 'NoUnusedVariablesRule', {
    enumerable: true,
    get: function () {
      return _index4.NoUnusedVariablesRule;
    },
  });
  Object.defineProperty(exports, 'OperationTypeNode', {
    enumerable: true,
    get: function () {
      return _index2.OperationTypeNode;
    },
  });
  Object.defineProperty(exports, 'OverlappingFieldsCanBeMergedRule', {
    enumerable: true,
    get: function () {
      return _index4.OverlappingFieldsCanBeMergedRule;
    },
  });
  Object.defineProperty(exports, 'PossibleFragmentSpreadsRule', {
    enumerable: true,
    get: function () {
      return _index4.PossibleFragmentSpreadsRule;
    },
  });
  Object.defineProperty(exports, 'PossibleTypeExtensionsRule', {
    enumerable: true,
    get: function () {
      return _index4.PossibleTypeExtensionsRule;
    },
  });
  Object.defineProperty(exports, 'ProvidedRequiredArgumentsRule', {
    enumerable: true,
    get: function () {
      return _index4.ProvidedRequiredArgumentsRule;
    },
  });
  Object.defineProperty(exports, 'ScalarLeafsRule', {
    enumerable: true,
    get: function () {
      return _index4.ScalarLeafsRule;
    },
  });
  Object.defineProperty(exports, 'SchemaMetaFieldDef', {
    enumerable: true,
    get: function () {
      return _index.SchemaMetaFieldDef;
    },
  });
  Object.defineProperty(exports, 'SingleFieldSubscriptionsRule', {
    enumerable: true,
    get: function () {
      return _index4.SingleFieldSubscriptionsRule;
    },
  });
  Object.defineProperty(exports, 'Source', {
    enumerable: true,
    get: function () {
      return _index2.Source;
    },
  });
  Object.defineProperty(exports, 'Token', {
    enumerable: true,
    get: function () {
      return _index2.Token;
    },
  });
  Object.defineProperty(exports, 'TokenKind', {
    enumerable: true,
    get: function () {
      return _index2.TokenKind;
    },
  });
  Object.defineProperty(exports, 'TypeInfo', {
    enumerable: true,
    get: function () {
      return _index6.TypeInfo;
    },
  });
  Object.defineProperty(exports, 'TypeKind', {
    enumerable: true,
    get: function () {
      return _index.TypeKind;
    },
  });
  Object.defineProperty(exports, 'TypeMetaFieldDef', {
    enumerable: true,
    get: function () {
      return _index.TypeMetaFieldDef;
    },
  });
  Object.defineProperty(exports, 'TypeNameMetaFieldDef', {
    enumerable: true,
    get: function () {
      return _index.TypeNameMetaFieldDef;
    },
  });
  Object.defineProperty(exports, 'UniqueArgumentDefinitionNamesRule', {
    enumerable: true,
    get: function () {
      return _index4.UniqueArgumentDefinitionNamesRule;
    },
  });
  Object.defineProperty(exports, 'UniqueArgumentNamesRule', {
    enumerable: true,
    get: function () {
      return _index4.UniqueArgumentNamesRule;
    },
  });
  Object.defineProperty(exports, 'UniqueDirectiveNamesRule', {
    enumerable: true,
    get: function () {
      return _index4.UniqueDirectiveNamesRule;
    },
  });
  Object.defineProperty(exports, 'UniqueDirectivesPerLocationRule', {
    enumerable: true,
    get: function () {
      return _index4.UniqueDirectivesPerLocationRule;
    },
  });
  Object.defineProperty(exports, 'UniqueEnumValueNamesRule', {
    enumerable: true,
    get: function () {
      return _index4.UniqueEnumValueNamesRule;
    },
  });
  Object.defineProperty(exports, 'UniqueFieldDefinitionNamesRule', {
    enumerable: true,
    get: function () {
      return _index4.UniqueFieldDefinitionNamesRule;
    },
  });
  Object.defineProperty(exports, 'UniqueFragmentNamesRule', {
    enumerable: true,
    get: function () {
      return _index4.UniqueFragmentNamesRule;
    },
  });
  Object.defineProperty(exports, 'UniqueInputFieldNamesRule', {
    enumerable: true,
    get: function () {
      return _index4.UniqueInputFieldNamesRule;
    },
  });
  Object.defineProperty(exports, 'UniqueOperationNamesRule', {
    enumerable: true,
    get: function () {
      return _index4.UniqueOperationNamesRule;
    },
  });
  Object.defineProperty(exports, 'UniqueOperationTypesRule', {
    enumerable: true,
    get: function () {
      return _index4.UniqueOperationTypesRule;
    },
  });
  Object.defineProperty(exports, 'UniqueTypeNamesRule', {
    enumerable: true,
    get: function () {
      return _index4.UniqueTypeNamesRule;
    },
  });
  Object.defineProperty(exports, 'UniqueVariableNamesRule', {
    enumerable: true,
    get: function () {
      return _index4.UniqueVariableNamesRule;
    },
  });
  Object.defineProperty(exports, 'ValidationContext', {
    enumerable: true,
    get: function () {
      return _index4.ValidationContext;
    },
  });
  Object.defineProperty(exports, 'ValuesOfCorrectTypeRule', {
    enumerable: true,
    get: function () {
      return _index4.ValuesOfCorrectTypeRule;
    },
  });
  Object.defineProperty(exports, 'VariablesAreInputTypesRule', {
    enumerable: true,
    get: function () {
      return _index4.VariablesAreInputTypesRule;
    },
  });
  Object.defineProperty(exports, 'VariablesInAllowedPositionRule', {
    enumerable: true,
    get: function () {
      return _index4.VariablesInAllowedPositionRule;
    },
  });
  Object.defineProperty(exports, '__Directive', {
    enumerable: true,
    get: function () {
      return _index.__Directive;
    },
  });
  Object.defineProperty(exports, '__DirectiveLocation', {
    enumerable: true,
    get: function () {
      return _index.__DirectiveLocation;
    },
  });
  Object.defineProperty(exports, '__EnumValue', {
    enumerable: true,
    get: function () {
      return _index.__EnumValue;
    },
  });
  Object.defineProperty(exports, '__Field', {
    enumerable: true,
    get: function () {
      return _index.__Field;
    },
  });
  Object.defineProperty(exports, '__InputValue', {
    enumerable: true,
    get: function () {
      return _index.__InputValue;
    },
  });
  Object.defineProperty(exports, '__Schema', {
    enumerable: true,
    get: function () {
      return _index.__Schema;
    },
  });
  Object.defineProperty(exports, '__Type', {
    enumerable: true,
    get: function () {
      return _index.__Type;
    },
  });
  Object.defineProperty(exports, '__TypeKind', {
    enumerable: true,
    get: function () {
      return _index.__TypeKind;
    },
  });
  Object.defineProperty(exports, 'assertAbstractType', {
    enumerable: true,
    get: function () {
      return _index.assertAbstractType;
    },
  });
  Object.defineProperty(exports, 'assertCompositeType', {
    enumerable: true,
    get: function () {
      return _index.assertCompositeType;
    },
  });
  Object.defineProperty(exports, 'assertDirective', {
    enumerable: true,
    get: function () {
      return _index.assertDirective;
    },
  });
  Object.defineProperty(exports, 'assertEnumType', {
    enumerable: true,
    get: function () {
      return _index.assertEnumType;
    },
  });
  Object.defineProperty(exports, 'assertEnumValueName', {
    enumerable: true,
    get: function () {
      return _index.assertEnumValueName;
    },
  });
  Object.defineProperty(exports, 'assertInputObjectType', {
    enumerable: true,
    get: function () {
      return _index.assertInputObjectType;
    },
  });
  Object.defineProperty(exports, 'assertInputType', {
    enumerable: true,
    get: function () {
      return _index.assertInputType;
    },
  });
  Object.defineProperty(exports, 'assertInterfaceType', {
    enumerable: true,
    get: function () {
      return _index.assertInterfaceType;
    },
  });
  Object.defineProperty(exports, 'assertLeafType', {
    enumerable: true,
    get: function () {
      return _index.assertLeafType;
    },
  });
  Object.defineProperty(exports, 'assertListType', {
    enumerable: true,
    get: function () {
      return _index.assertListType;
    },
  });
  Object.defineProperty(exports, 'assertName', {
    enumerable: true,
    get: function () {
      return _index.assertName;
    },
  });
  Object.defineProperty(exports, 'assertNamedType', {
    enumerable: true,
    get: function () {
      return _index.assertNamedType;
    },
  });
  Object.defineProperty(exports, 'assertNonNullType', {
    enumerable: true,
    get: function () {
      return _index.assertNonNullType;
    },
  });
  Object.defineProperty(exports, 'assertNullableType', {
    enumerable: true,
    get: function () {
      return _index.assertNullableType;
    },
  });
  Object.defineProperty(exports, 'assertObjectType', {
    enumerable: true,
    get: function () {
      return _index.assertObjectType;
    },
  });
  Object.defineProperty(exports, 'assertOutputType', {
    enumerable: true,
    get: function () {
      return _index.assertOutputType;
    },
  });
  Object.defineProperty(exports, 'assertScalarType', {
    enumerable: true,
    get: function () {
      return _index.assertScalarType;
    },
  });
  Object.defineProperty(exports, 'assertSchema', {
    enumerable: true,
    get: function () {
      return _index.assertSchema;
    },
  });
  Object.defineProperty(exports, 'assertType', {
    enumerable: true,
    get: function () {
      return _index.assertType;
    },
  });
  Object.defineProperty(exports, 'assertUnionType', {
    enumerable: true,
    get: function () {
      return _index.assertUnionType;
    },
  });
  Object.defineProperty(exports, 'assertValidName', {
    enumerable: true,
    get: function () {
      return _index6.assertValidName;
    },
  });
  Object.defineProperty(exports, 'assertValidSchema', {
    enumerable: true,
    get: function () {
      return _index.assertValidSchema;
    },
  });
  Object.defineProperty(exports, 'assertWrappingType', {
    enumerable: true,
    get: function () {
      return _index.assertWrappingType;
    },
  });
  Object.defineProperty(exports, 'astFromValue', {
    enumerable: true,
    get: function () {
      return _index6.astFromValue;
    },
  });
  Object.defineProperty(exports, 'buildASTSchema', {
    enumerable: true,
    get: function () {
      return _index6.buildASTSchema;
    },
  });
  Object.defineProperty(exports, 'buildClientSchema', {
    enumerable: true,
    get: function () {
      return _index6.buildClientSchema;
    },
  });
  Object.defineProperty(exports, 'buildSchema', {
    enumerable: true,
    get: function () {
      return _index6.buildSchema;
    },
  });
  Object.defineProperty(exports, 'coerceInputValue', {
    enumerable: true,
    get: function () {
      return _index6.coerceInputValue;
    },
  });
  Object.defineProperty(exports, 'concatAST', {
    enumerable: true,
    get: function () {
      return _index6.concatAST;
    },
  });
  Object.defineProperty(exports, 'createSourceEventStream', {
    enumerable: true,
    get: function () {
      return _index3.createSourceEventStream;
    },
  });
  Object.defineProperty(exports, 'defaultFieldResolver', {
    enumerable: true,
    get: function () {
      return _index3.defaultFieldResolver;
    },
  });
  Object.defineProperty(exports, 'defaultTypeResolver', {
    enumerable: true,
    get: function () {
      return _index3.defaultTypeResolver;
    },
  });
  Object.defineProperty(exports, 'doTypesOverlap', {
    enumerable: true,
    get: function () {
      return _index6.doTypesOverlap;
    },
  });
  Object.defineProperty(exports, 'execute', {
    enumerable: true,
    get: function () {
      return _index3.execute;
    },
  });
  Object.defineProperty(exports, 'executeSync', {
    enumerable: true,
    get: function () {
      return _index3.executeSync;
    },
  });
  Object.defineProperty(exports, 'extendSchema', {
    enumerable: true,
    get: function () {
      return _index6.extendSchema;
    },
  });
  Object.defineProperty(exports, 'findBreakingChanges', {
    enumerable: true,
    get: function () {
      return _index6.findBreakingChanges;
    },
  });
  Object.defineProperty(exports, 'findDangerousChanges', {
    enumerable: true,
    get: function () {
      return _index6.findDangerousChanges;
    },
  });
  Object.defineProperty(exports, 'formatError', {
    enumerable: true,
    get: function () {
      return _index5.formatError;
    },
  });
  Object.defineProperty(exports, 'getDirectiveValues', {
    enumerable: true,
    get: function () {
      return _index3.getDirectiveValues;
    },
  });
  Object.defineProperty(exports, 'getEnterLeaveForKind', {
    enumerable: true,
    get: function () {
      return _index2.getEnterLeaveForKind;
    },
  });
  Object.defineProperty(exports, 'getIntrospectionQuery', {
    enumerable: true,
    get: function () {
      return _index6.getIntrospectionQuery;
    },
  });
  Object.defineProperty(exports, 'getLocation', {
    enumerable: true,
    get: function () {
      return _index2.getLocation;
    },
  });
  Object.defineProperty(exports, 'getNamedType', {
    enumerable: true,
    get: function () {
      return _index.getNamedType;
    },
  });
  Object.defineProperty(exports, 'getNullableType', {
    enumerable: true,
    get: function () {
      return _index.getNullableType;
    },
  });
  Object.defineProperty(exports, 'getOperationAST', {
    enumerable: true,
    get: function () {
      return _index6.getOperationAST;
    },
  });
  Object.defineProperty(exports, 'getOperationRootType', {
    enumerable: true,
    get: function () {
      return _index6.getOperationRootType;
    },
  });
  Object.defineProperty(exports, 'getVariableValues', {
    enumerable: true,
    get: function () {
      return _index3.getVariableValues;
    },
  });
  Object.defineProperty(exports, 'getVisitFn', {
    enumerable: true,
    get: function () {
      return _index2.getVisitFn;
    },
  });
  Object.defineProperty(exports, 'graphql', {
    enumerable: true,
    get: function () {
      return _graphql.graphql;
    },
  });
  Object.defineProperty(exports, 'graphqlSync', {
    enumerable: true,
    get: function () {
      return _graphql.graphqlSync;
    },
  });
  Object.defineProperty(exports, 'introspectionFromSchema', {
    enumerable: true,
    get: function () {
      return _index6.introspectionFromSchema;
    },
  });
  Object.defineProperty(exports, 'introspectionTypes', {
    enumerable: true,
    get: function () {
      return _index.introspectionTypes;
    },
  });
  Object.defineProperty(exports, 'isAbstractType', {
    enumerable: true,
    get: function () {
      return _index.isAbstractType;
    },
  });
  Object.defineProperty(exports, 'isCompositeType', {
    enumerable: true,
    get: function () {
      return _index.isCompositeType;
    },
  });
  Object.defineProperty(exports, 'isConstValueNode', {
    enumerable: true,
    get: function () {
      return _index2.isConstValueNode;
    },
  });
  Object.defineProperty(exports, 'isDefinitionNode', {
    enumerable: true,
    get: function () {
      return _index2.isDefinitionNode;
    },
  });
  Object.defineProperty(exports, 'isDirective', {
    enumerable: true,
    get: function () {
      return _index.isDirective;
    },
  });
  Object.defineProperty(exports, 'isEnumType', {
    enumerable: true,
    get: function () {
      return _index.isEnumType;
    },
  });
  Object.defineProperty(exports, 'isEqualType', {
    enumerable: true,
    get: function () {
      return _index6.isEqualType;
    },
  });
  Object.defineProperty(exports, 'isExecutableDefinitionNode', {
    enumerable: true,
    get: function () {
      return _index2.isExecutableDefinitionNode;
    },
  });
  Object.defineProperty(exports, 'isInputObjectType', {
    enumerable: true,
    get: function () {
      return _index.isInputObjectType;
    },
  });
  Object.defineProperty(exports, 'isInputType', {
    enumerable: true,
    get: function () {
      return _index.isInputType;
    },
  });
  Object.defineProperty(exports, 'isInterfaceType', {
    enumerable: true,
    get: function () {
      return _index.isInterfaceType;
    },
  });
  Object.defineProperty(exports, 'isIntrospectionType', {
    enumerable: true,
    get: function () {
      return _index.isIntrospectionType;
    },
  });
  Object.defineProperty(exports, 'isLeafType', {
    enumerable: true,
    get: function () {
      return _index.isLeafType;
    },
  });
  Object.defineProperty(exports, 'isListType', {
    enumerable: true,
    get: function () {
      return _index.isListType;
    },
  });
  Object.defineProperty(exports, 'isNamedType', {
    enumerable: true,
    get: function () {
      return _index.isNamedType;
    },
  });
  Object.defineProperty(exports, 'isNonNullType', {
    enumerable: true,
    get: function () {
      return _index.isNonNullType;
    },
  });
  Object.defineProperty(exports, 'isNullableType', {
    enumerable: true,
    get: function () {
      return _index.isNullableType;
    },
  });
  Object.defineProperty(exports, 'isObjectType', {
    enumerable: true,
    get: function () {
      return _index.isObjectType;
    },
  });
  Object.defineProperty(exports, 'isOutputType', {
    enumerable: true,
    get: function () {
      return _index.isOutputType;
    },
  });
  Object.defineProperty(exports, 'isRequiredArgument', {
    enumerable: true,
    get: function () {
      return _index.isRequiredArgument;
    },
  });
  Object.defineProperty(exports, 'isRequiredInputField', {
    enumerable: true,
    get: function () {
      return _index.isRequiredInputField;
    },
  });
  Object.defineProperty(exports, 'isScalarType', {
    enumerable: true,
    get: function () {
      return _index.isScalarType;
    },
  });
  Object.defineProperty(exports, 'isSchema', {
    enumerable: true,
    get: function () {
      return _index.isSchema;
    },
  });
  Object.defineProperty(exports, 'isSelectionNode', {
    enumerable: true,
    get: function () {
      return _index2.isSelectionNode;
    },
  });
  Object.defineProperty(exports, 'isSpecifiedDirective', {
    enumerable: true,
    get: function () {
      return _index.isSpecifiedDirective;
    },
  });
  Object.defineProperty(exports, 'isSpecifiedScalarType', {
    enumerable: true,
    get: function () {
      return _index.isSpecifiedScalarType;
    },
  });
  Object.defineProperty(exports, 'isType', {
    enumerable: true,
    get: function () {
      return _index.isType;
    },
  });
  Object.defineProperty(exports, 'isTypeDefinitionNode', {
    enumerable: true,
    get: function () {
      return _index2.isTypeDefinitionNode;
    },
  });
  Object.defineProperty(exports, 'isTypeExtensionNode', {
    enumerable: true,
    get: function () {
      return _index2.isTypeExtensionNode;
    },
  });
  Object.defineProperty(exports, 'isTypeNode', {
    enumerable: true,
    get: function () {
      return _index2.isTypeNode;
    },
  });
  Object.defineProperty(exports, 'isTypeSubTypeOf', {
    enumerable: true,
    get: function () {
      return _index6.isTypeSubTypeOf;
    },
  });
  Object.defineProperty(exports, 'isTypeSystemDefinitionNode', {
    enumerable: true,
    get: function () {
      return _index2.isTypeSystemDefinitionNode;
    },
  });
  Object.defineProperty(exports, 'isTypeSystemExtensionNode', {
    enumerable: true,
    get: function () {
      return _index2.isTypeSystemExtensionNode;
    },
  });
  Object.defineProperty(exports, 'isUnionType', {
    enumerable: true,
    get: function () {
      return _index.isUnionType;
    },
  });
  Object.defineProperty(exports, 'isValidNameError', {
    enumerable: true,
    get: function () {
      return _index6.isValidNameError;
    },
  });
  Object.defineProperty(exports, 'isValueNode', {
    enumerable: true,
    get: function () {
      return _index2.isValueNode;
    },
  });
  Object.defineProperty(exports, 'isWrappingType', {
    enumerable: true,
    get: function () {
      return _index.isWrappingType;
    },
  });
  Object.defineProperty(exports, 'lexicographicSortSchema', {
    enumerable: true,
    get: function () {
      return _index6.lexicographicSortSchema;
    },
  });
  Object.defineProperty(exports, 'locatedError', {
    enumerable: true,
    get: function () {
      return _index5.locatedError;
    },
  });
  Object.defineProperty(exports, 'parse', {
    enumerable: true,
    get: function () {
      return _index2.parse;
    },
  });
  Object.defineProperty(exports, 'parseConstValue', {
    enumerable: true,
    get: function () {
      return _index2.parseConstValue;
    },
  });
  Object.defineProperty(exports, 'parseType', {
    enumerable: true,
    get: function () {
      return _index2.parseType;
    },
  });
  Object.defineProperty(exports, 'parseValue', {
    enumerable: true,
    get: function () {
      return _index2.parseValue;
    },
  });
  Object.defineProperty(exports, 'print', {
    enumerable: true,
    get: function () {
      return _index2.print;
    },
  });
  Object.defineProperty(exports, 'printError', {
    enumerable: true,
    get: function () {
      return _index5.printError;
    },
  });
  Object.defineProperty(exports, 'printIntrospectionSchema', {
    enumerable: true,
    get: function () {
      return _index6.printIntrospectionSchema;
    },
  });
  Object.defineProperty(exports, 'printLocation', {
    enumerable: true,
    get: function () {
      return _index2.printLocation;
    },
  });
  Object.defineProperty(exports, 'printSchema', {
    enumerable: true,
    get: function () {
      return _index6.printSchema;
    },
  });
  Object.defineProperty(exports, 'printSourceLocation', {
    enumerable: true,
    get: function () {
      return _index2.printSourceLocation;
    },
  });
  Object.defineProperty(exports, 'printType', {
    enumerable: true,
    get: function () {
      return _index6.printType;
    },
  });
  Object.defineProperty(exports, 'resolveObjMapThunk', {
    enumerable: true,
    get: function () {
      return _index.resolveObjMapThunk;
    },
  });
  Object.defineProperty(exports, 'resolveReadonlyArrayThunk', {
    enumerable: true,
    get: function () {
      return _index.resolveReadonlyArrayThunk;
    },
  });
  Object.defineProperty(exports, 'responsePathAsArray', {
    enumerable: true,
    get: function () {
      return _index3.responsePathAsArray;
    },
  });
  Object.defineProperty(exports, 'separateOperations', {
    enumerable: true,
    get: function () {
      return _index6.separateOperations;
    },
  });
  Object.defineProperty(exports, 'specifiedDirectives', {
    enumerable: true,
    get: function () {
      return _index.specifiedDirectives;
    },
  });
  Object.defineProperty(exports, 'specifiedRules', {
    enumerable: true,
    get: function () {
      return _index4.specifiedRules;
    },
  });
  Object.defineProperty(exports, 'specifiedScalarTypes', {
    enumerable: true,
    get: function () {
      return _index.specifiedScalarTypes;
    },
  });
  Object.defineProperty(exports, 'stripIgnoredCharacters', {
    enumerable: true,
    get: function () {
      return _index6.stripIgnoredCharacters;
    },
  });
  Object.defineProperty(exports, 'subscribe', {
    enumerable: true,
    get: function () {
      return _index3.subscribe;
    },
  });
  Object.defineProperty(exports, 'syntaxError', {
    enumerable: true,
    get: function () {
      return _index5.syntaxError;
    },
  });
  Object.defineProperty(exports, 'typeFromAST', {
    enumerable: true,
    get: function () {
      return _index6.typeFromAST;
    },
  });
  Object.defineProperty(exports, 'validate', {
    enumerable: true,
    get: function () {
      return _index4.validate;
    },
  });
  Object.defineProperty(exports, 'validateSchema', {
    enumerable: true,
    get: function () {
      return _index.validateSchema;
    },
  });
  Object.defineProperty(exports, 'valueFromAST', {
    enumerable: true,
    get: function () {
      return _index6.valueFromAST;
    },
  });
  Object.defineProperty(exports, 'valueFromASTUntyped', {
    enumerable: true,
    get: function () {
      return _index6.valueFromASTUntyped;
    },
  });
  Object.defineProperty(exports, 'version', {
    enumerable: true,
    get: function () {
      return _version.version;
    },
  });
  Object.defineProperty(exports, 'versionInfo', {
    enumerable: true,
    get: function () {
      return _version.versionInfo;
    },
  });
  Object.defineProperty(exports, 'visit', {
    enumerable: true,
    get: function () {
      return _index2.visit;
    },
  });
  Object.defineProperty(exports, 'visitInParallel', {
    enumerable: true,
    get: function () {
      return _index2.visitInParallel;
    },
  });
  Object.defineProperty(exports, 'visitWithTypeInfo', {
    enumerable: true,
    get: function () {
      return _index6.visitWithTypeInfo;
    },
  });

  var _version = version$1;

  var _graphql = graphql$2;

  var _index = type;

  var _index2 = language;

  var _index3 = execution;

  var _index4 = validation;

  var _index5 = error;

  var _index6 = utilities;
  }(graphql$3));

  /**
   * Returns a relative URL if the given request URL is relative to the current origin.
   * Otherwise returns an absolute URL.
   */
  const getPublicUrlFromRequest = (request) => {
      return request.referrer.startsWith(request.url.origin)
          ? request.url.pathname
          : new URL(request.url.pathname, `${request.url.protocol}//${request.url.host}`).href;
  };

  function parseDocumentNode(node) {
      var _a;
      const operationDef = node.definitions.find((def) => {
          return def.kind === 'OperationDefinition';
      });
      return {
          operationType: operationDef === null || operationDef === void 0 ? void 0 : operationDef.operation,
          operationName: (_a = operationDef === null || operationDef === void 0 ? void 0 : operationDef.name) === null || _a === void 0 ? void 0 : _a.value,
      };
  }
  function parseQuery(query) {
      try {
          const ast = graphql$3.parse(query);
          return parseDocumentNode(ast);
      }
      catch (error) {
          return error;
      }
  }
  function extractMultipartVariables(variables, map, files) {
      const operations = { variables };
      for (const [key, pathArray] of Object.entries(map)) {
          if (!(key in files)) {
              throw new Error(`Given files do not have a key '${key}' .`);
          }
          for (const dotPath of pathArray) {
              const [lastPath, ...reversedPaths] = dotPath.split('.').reverse();
              const paths = reversedPaths.reverse();
              let target = operations;
              for (const path of paths) {
                  if (!(path in target)) {
                      throw new Error(`Property '${paths}' is not in operations.`);
                  }
                  target = target[path];
              }
              target[lastPath] = files[key];
          }
      }
      return operations.variables;
  }
  function getGraphQLInput(request) {
      var _a, _b;
      switch (request.method) {
          case 'GET': {
              const query = request.url.searchParams.get('query');
              const variables = request.url.searchParams.get('variables') || '';
              return {
                  query,
                  variables: jsonParse(variables),
              };
          }
          case 'POST': {
              if ((_a = request.body) === null || _a === void 0 ? void 0 : _a.query) {
                  const { query, variables } = request.body;
                  return {
                      query,
                      variables,
                  };
              }
              // Handle multipart body operations.
              if ((_b = request.body) === null || _b === void 0 ? void 0 : _b.operations) {
                  const _c = request.body, { operations, map } = _c, files = __rest(_c, ["operations", "map"]);
                  const parsedOperations = jsonParse(operations) || {};
                  if (!parsedOperations.query) {
                      return null;
                  }
                  const parsedMap = jsonParse(map || '') || {};
                  const variables = parsedOperations.variables
                      ? extractMultipartVariables(parsedOperations.variables, parsedMap, files)
                      : {};
                  return {
                      query: parsedOperations.query,
                      variables,
                  };
              }
          }
          default:
              return null;
      }
  }
  /**
   * Determines if a given request can be considered a GraphQL request.
   * Does not parse the query and does not guarantee its validity.
   */
  function parseGraphQLRequest(request) {
      const input = getGraphQLInput(request);
      if (!input || !input.query) {
          return undefined;
      }
      const { query, variables } = input;
      const parsedResult = parseQuery(query);
      if (parsedResult instanceof Error) {
          const requestPublicUrl = getPublicUrlFromRequest(request);
          throw new Error(devUtils.formatMessage('Failed to intercept a GraphQL request to "%s %s": cannot parse query. See the error message from the parser below.\n\n%s', request.method, requestPublicUrl, parsedResult.message));
      }
      return {
          operationType: parsedResult.operationType,
          operationName: parsedResult.operationName,
          variables,
      };
  }

  var StatusCodeColor;
  (function (StatusCodeColor) {
      StatusCodeColor["Success"] = "#69AB32";
      StatusCodeColor["Warning"] = "#F0BB4B";
      StatusCodeColor["Danger"] = "#E95F5D";
  })(StatusCodeColor || (StatusCodeColor = {}));
  /**
   * Returns a HEX color for a given response status code number.
   */
  function getStatusCodeColor(status) {
      if (status < 300) {
          return StatusCodeColor.Success;
      }
      if (status < 400) {
          return StatusCodeColor.Warning;
      }
      return StatusCodeColor.Danger;
  }

  /**
   * Returns a timestamp string in a "HH:MM:SS" format.
   */
  function getTimestamp() {
      const now = new Date();
      return [now.getHours(), now.getMinutes(), now.getSeconds()]
          .map(String)
          .map((chunk) => chunk.slice(0, 2))
          .map((chunk) => chunk.padStart(2, '0'))
          .join(':');
  }

  /**
   * Formats a mocked request for introspection in browser's console.
   */
  function prepareRequest(request) {
      return Object.assign(Object.assign({}, request), { headers: request.headers.all() });
  }

  /**
   * Formats a mocked response for introspection in the browser's console.
   */
  function prepareResponse(res) {
      const responseHeaders = lib$7.objectToHeaders(res.headers);
      return Object.assign(Object.assign({}, res), { 
          // Parse a response JSON body for preview in the logs
          body: parseBody(res.body, responseHeaders) });
  }

  var dist = {};

  Object.defineProperty(dist, "__esModule", { value: true });
  dist.pathToRegexp = dist.tokensToRegexp = dist.regexpToFunction = match_1 = dist.match = dist.tokensToFunction = dist.compile = dist.parse = void 0;
  /**
   * Tokenize input string.
   */
  function lexer(str) {
      var tokens = [];
      var i = 0;
      while (i < str.length) {
          var char = str[i];
          if (char === "*" || char === "+" || char === "?") {
              tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
              continue;
          }
          if (char === "\\") {
              tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
              continue;
          }
          if (char === "{") {
              tokens.push({ type: "OPEN", index: i, value: str[i++] });
              continue;
          }
          if (char === "}") {
              tokens.push({ type: "CLOSE", index: i, value: str[i++] });
              continue;
          }
          if (char === ":") {
              var name = "";
              var j = i + 1;
              while (j < str.length) {
                  var code = str.charCodeAt(j);
                  if (
                  // `0-9`
                  (code >= 48 && code <= 57) ||
                      // `A-Z`
                      (code >= 65 && code <= 90) ||
                      // `a-z`
                      (code >= 97 && code <= 122) ||
                      // `_`
                      code === 95) {
                      name += str[j++];
                      continue;
                  }
                  break;
              }
              if (!name)
                  throw new TypeError("Missing parameter name at " + i);
              tokens.push({ type: "NAME", index: i, value: name });
              i = j;
              continue;
          }
          if (char === "(") {
              var count = 1;
              var pattern = "";
              var j = i + 1;
              if (str[j] === "?") {
                  throw new TypeError("Pattern cannot start with \"?\" at " + j);
              }
              while (j < str.length) {
                  if (str[j] === "\\") {
                      pattern += str[j++] + str[j++];
                      continue;
                  }
                  if (str[j] === ")") {
                      count--;
                      if (count === 0) {
                          j++;
                          break;
                      }
                  }
                  else if (str[j] === "(") {
                      count++;
                      if (str[j + 1] !== "?") {
                          throw new TypeError("Capturing groups are not allowed at " + j);
                      }
                  }
                  pattern += str[j++];
              }
              if (count)
                  throw new TypeError("Unbalanced pattern at " + i);
              if (!pattern)
                  throw new TypeError("Missing pattern at " + i);
              tokens.push({ type: "PATTERN", index: i, value: pattern });
              i = j;
              continue;
          }
          tokens.push({ type: "CHAR", index: i, value: str[i++] });
      }
      tokens.push({ type: "END", index: i, value: "" });
      return tokens;
  }
  /**
   * Parse a string for the raw tokens.
   */
  function parse$2(str, options) {
      if (options === void 0) { options = {}; }
      var tokens = lexer(str);
      var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
      var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
      var result = [];
      var key = 0;
      var i = 0;
      var path = "";
      var tryConsume = function (type) {
          if (i < tokens.length && tokens[i].type === type)
              return tokens[i++].value;
      };
      var mustConsume = function (type) {
          var value = tryConsume(type);
          if (value !== undefined)
              return value;
          var _a = tokens[i], nextType = _a.type, index = _a.index;
          throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
      };
      var consumeText = function () {
          var result = "";
          var value;
          // tslint:disable-next-line
          while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
              result += value;
          }
          return result;
      };
      while (i < tokens.length) {
          var char = tryConsume("CHAR");
          var name = tryConsume("NAME");
          var pattern = tryConsume("PATTERN");
          if (name || pattern) {
              var prefix = char || "";
              if (prefixes.indexOf(prefix) === -1) {
                  path += prefix;
                  prefix = "";
              }
              if (path) {
                  result.push(path);
                  path = "";
              }
              result.push({
                  name: name || key++,
                  prefix: prefix,
                  suffix: "",
                  pattern: pattern || defaultPattern,
                  modifier: tryConsume("MODIFIER") || ""
              });
              continue;
          }
          var value = char || tryConsume("ESCAPED_CHAR");
          if (value) {
              path += value;
              continue;
          }
          if (path) {
              result.push(path);
              path = "";
          }
          var open = tryConsume("OPEN");
          if (open) {
              var prefix = consumeText();
              var name_1 = tryConsume("NAME") || "";
              var pattern_1 = tryConsume("PATTERN") || "";
              var suffix = consumeText();
              mustConsume("CLOSE");
              result.push({
                  name: name_1 || (pattern_1 ? key++ : ""),
                  pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                  prefix: prefix,
                  suffix: suffix,
                  modifier: tryConsume("MODIFIER") || ""
              });
              continue;
          }
          mustConsume("END");
      }
      return result;
  }
  dist.parse = parse$2;
  /**
   * Compile a string to a template function for the path.
   */
  function compile(str, options) {
      return tokensToFunction(parse$2(str, options), options);
  }
  dist.compile = compile;
  /**
   * Expose a method for transforming tokens into the path function.
   */
  function tokensToFunction(tokens, options) {
      if (options === void 0) { options = {}; }
      var reFlags = flags(options);
      var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
      // Compile all the tokens into regexps.
      var matches = tokens.map(function (token) {
          if (typeof token === "object") {
              return new RegExp("^(?:" + token.pattern + ")$", reFlags);
          }
      });
      return function (data) {
          var path = "";
          for (var i = 0; i < tokens.length; i++) {
              var token = tokens[i];
              if (typeof token === "string") {
                  path += token;
                  continue;
              }
              var value = data ? data[token.name] : undefined;
              var optional = token.modifier === "?" || token.modifier === "*";
              var repeat = token.modifier === "*" || token.modifier === "+";
              if (Array.isArray(value)) {
                  if (!repeat) {
                      throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                  }
                  if (value.length === 0) {
                      if (optional)
                          continue;
                      throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                  }
                  for (var j = 0; j < value.length; j++) {
                      var segment = encode(value[j], token);
                      if (validate && !matches[i].test(segment)) {
                          throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                      }
                      path += token.prefix + segment + token.suffix;
                  }
                  continue;
              }
              if (typeof value === "string" || typeof value === "number") {
                  var segment = encode(String(value), token);
                  if (validate && !matches[i].test(segment)) {
                      throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                  }
                  path += token.prefix + segment + token.suffix;
                  continue;
              }
              if (optional)
                  continue;
              var typeOfMessage = repeat ? "an array" : "a string";
              throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
          }
          return path;
      };
  }
  dist.tokensToFunction = tokensToFunction;
  /**
   * Create path match function from `path-to-regexp` spec.
   */
  function match(str, options) {
      var keys = [];
      var re = pathToRegexp(str, keys, options);
      return regexpToFunction(re, keys, options);
  }
  var match_1 = dist.match = match;
  /**
   * Create a path match function from `path-to-regexp` output.
   */
  function regexpToFunction(re, keys, options) {
      if (options === void 0) { options = {}; }
      var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
      return function (pathname) {
          var m = re.exec(pathname);
          if (!m)
              return false;
          var path = m[0], index = m.index;
          var params = Object.create(null);
          var _loop_1 = function (i) {
              // tslint:disable-next-line
              if (m[i] === undefined)
                  return "continue";
              var key = keys[i - 1];
              if (key.modifier === "*" || key.modifier === "+") {
                  params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                      return decode(value, key);
                  });
              }
              else {
                  params[key.name] = decode(m[i], key);
              }
          };
          for (var i = 1; i < m.length; i++) {
              _loop_1(i);
          }
          return { path: path, index: index, params: params };
      };
  }
  dist.regexpToFunction = regexpToFunction;
  /**
   * Escape a regular expression string.
   */
  function escapeString(str) {
      return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
  }
  /**
   * Get the flags for a regexp from the options.
   */
  function flags(options) {
      return options && options.sensitive ? "" : "i";
  }
  /**
   * Pull out keys from a regexp.
   */
  function regexpToRegexp(path, keys) {
      if (!keys)
          return path;
      var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
      var index = 0;
      var execResult = groupsRegex.exec(path.source);
      while (execResult) {
          keys.push({
              // Use parenthesized substring match if available, index otherwise
              name: execResult[1] || index++,
              prefix: "",
              suffix: "",
              modifier: "",
              pattern: ""
          });
          execResult = groupsRegex.exec(path.source);
      }
      return path;
  }
  /**
   * Transform an array into a regexp.
   */
  function arrayToRegexp(paths, keys, options) {
      var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
      return new RegExp("(?:" + parts.join("|") + ")", flags(options));
  }
  /**
   * Create a path regexp from string input.
   */
  function stringToRegexp(path, keys, options) {
      return tokensToRegexp(parse$2(path, options), keys, options);
  }
  /**
   * Expose a function for taking tokens and returning a RegExp.
   */
  function tokensToRegexp(tokens, keys, options) {
      if (options === void 0) { options = {}; }
      var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
      var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
      var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
      var route = start ? "^" : "";
      // Iterate over the tokens and create our regexp string.
      for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
          var token = tokens_1[_i];
          if (typeof token === "string") {
              route += escapeString(encode(token));
          }
          else {
              var prefix = escapeString(encode(token.prefix));
              var suffix = escapeString(encode(token.suffix));
              if (token.pattern) {
                  if (keys)
                      keys.push(token);
                  if (prefix || suffix) {
                      if (token.modifier === "+" || token.modifier === "*") {
                          var mod = token.modifier === "*" ? "?" : "";
                          route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                      }
                      else {
                          route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                      }
                  }
                  else {
                      route += "(" + token.pattern + ")" + token.modifier;
                  }
              }
              else {
                  route += "(?:" + prefix + suffix + ")" + token.modifier;
              }
          }
      }
      if (end) {
          if (!strict)
              route += delimiter + "?";
          route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
      }
      else {
          var endToken = tokens[tokens.length - 1];
          var isEndDelimited = typeof endToken === "string"
              ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
              : // tslint:disable-next-line
                  endToken === undefined;
          if (!strict) {
              route += "(?:" + delimiter + "(?=" + endsWith + "))?";
          }
          if (!isEndDelimited) {
              route += "(?=" + delimiter + "|" + endsWith + ")";
          }
      }
      return new RegExp(route, flags(options));
  }
  dist.tokensToRegexp = tokensToRegexp;
  /**
   * Normalize the given path string, returning a regular expression.
   *
   * An empty array can be passed in for the keys, which will hold the
   * placeholder key descriptions. For example, using `/user/:id`, `keys` will
   * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
   */
  function pathToRegexp(path, keys, options) {
      if (path instanceof RegExp)
          return regexpToRegexp(path, keys);
      if (Array.isArray(path))
          return arrayToRegexp(path, keys, options);
      return stringToRegexp(path, keys, options);
  }
  dist.pathToRegexp = pathToRegexp;

  var getCleanUrl$1 = {};

  Object.defineProperty(getCleanUrl$1, "__esModule", { value: true });
  var getCleanUrl_2 = getCleanUrl$1.getCleanUrl = void 0;
  /**
   * Removes query parameters and hashes from a given URL.
   */
  function getCleanUrl(url, isAbsolute) {
      if (isAbsolute === void 0) { isAbsolute = true; }
      return [isAbsolute && url.origin, url.pathname].filter(Boolean).join('');
  }
  getCleanUrl_2 = getCleanUrl$1.getCleanUrl = getCleanUrl;

  const REDUNDANT_CHARACTERS_EXP = /[\?|#].*$/g;
  function getSearchParams(path) {
      return new URL(`/${path}`, 'http://localhost').searchParams;
  }
  /**
   * Removes query parameters and hashes from a given URL string.
   */
  function cleanUrl(path) {
      return path.replace(REDUNDANT_CHARACTERS_EXP, '');
  }

  /**
   * Determines if the given URL string is an absolute URL.
   */
  function isAbsoluteUrl(url) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
  }

  /**
   * Returns an absolute URL based on the given path.
   */
  function getAbsoluteUrl(path, baseUrl) {
      // already absolute URL
      if (isAbsoluteUrl(path)) {
          return path;
      }
      // Ignore path with pattern start with *
      if (path.startsWith('*')) {
          return path;
      }
      // Resolve a relative request URL against a given custom "baseUrl"
      // or the document baseURI (in the case of browser/browser-like environments).
      const origin = baseUrl || (typeof document !== 'undefined' && document.baseURI);
      return origin
          ? // Encode and decode the path to preserve escaped characters.
              decodeURI(new URL(encodeURI(path), origin).href)
          : path;
  }

  /**
   * Normalizes a given request handler path:
   * - Preserves RegExp.
   * - Removes query parameters and hashes.
   * - Rebases relative URLs against the "baseUrl" or the current location.
   * - Preserves relative URLs in Node.js, unless specified otherwise.
   */
  function normalizePath(path, baseUrl) {
      // RegExp paths do not need normalization.
      if (path instanceof RegExp) {
          return path;
      }
      const maybeAbsoluteUrl = getAbsoluteUrl(path, baseUrl);
      return cleanUrl(maybeAbsoluteUrl);
  }

  /**
   * Coerce a path supported by MSW into a path
   * supported by "path-to-regexp".
   */
  function coercePath(path) {
      return (path
          /**
           * Replace wildcards ("*") with unnamed capturing groups
           * because "path-to-regexp" doesn't support wildcards.
           * Ignore path parameter' modifiers (i.e. ":name*").
           */
          .replace(/([:a-zA-Z_-]*)(\*{1,2})+/g, (_, parameterName, wildcard) => {
          const expression = '(.*)';
          if (!parameterName) {
              return expression;
          }
          return parameterName.startsWith(':')
              ? `${parameterName}${wildcard}`
              : `${parameterName}${expression}`;
      })
          /**
           * Escape the port so that "path-to-regexp" can match
           * absolute URLs including port numbers.
           */
          .replace(/([^\/])(:)(?=\d+)/, '$1\\$2')
          /**
           * Escape the protocol so that "path-to-regexp" could match
           * absolute URL.
           * @see https://github.com/pillarjs/path-to-regexp/issues/259
           */
          .replace(/^([^\/]+)(:)(?=\/\/)/, '$1\\$2'));
  }
  /**
   * Returns the result of matching given request URL against a mask.
   */
  function matchRequestUrl(url, path, baseUrl) {
      const normalizedPath = normalizePath(path, baseUrl);
      const cleanPath = typeof normalizedPath === 'string'
          ? coercePath(normalizedPath)
          : normalizedPath;
      const cleanUrl = getCleanUrl_2(url);
      const result = match_1(cleanPath, { decode: decodeURIComponent })(cleanUrl);
      const params = (result && result.params) || {};
      return {
          matches: result !== false,
          params,
      };
  }

  /**
   * Composes a given list of functions into a new function that
   * executes from right to left.
   */
  function compose(...fns) {
      return (...args) => {
          return fns.reduceRight((leftFn, rightFn) => {
              return leftFn instanceof Promise
                  ? Promise.resolve(leftFn).then(rightFn)
                  : rightFn(leftFn);
          }, args[0]);
      };
  }

  const defaultResponse = {
      status: 200,
      statusText: 'OK',
      body: null,
      delay: 0,
      once: false,
  };
  const defaultResponseTransformers = [];
  function createResponseComposition(responseOverrides, defaultTransformers = defaultResponseTransformers) {
      return (...transformers) => __awaiter$3(this, void 0, void 0, function* () {
          const initialResponse = Object.assign({}, defaultResponse, {
              headers: new lib$7.Headers({
                  'x-powered-by': 'msw',
              }),
          }, responseOverrides);
          const resolvedTransformers = [
              ...defaultTransformers,
              ...transformers,
          ].filter(Boolean);
          const resolvedResponse = resolvedTransformers.length > 0
              ? compose(...resolvedTransformers)(initialResponse)
              : initialResponse;
          return resolvedResponse;
      });
  }
  const response = Object.assign(createResponseComposition(), {
      once: createResponseComposition({ once: true }),
      networkError(message) {
          throw new NetworkError(message);
      },
  });

  const BUILD_FRAME = /(node_modules)?[\/\\]lib[\/\\](umd|esm|iief|cjs)[\/\\]|^[^\/\\]*$/;
  /**
   * Return the stack trace frame of a function's invocation.
   */
  function getCallFrame(error) {
      // In <IE11, new Error may return an undefined stack
      const stack = error.stack;
      if (!stack) {
          return;
      }
      const frames = stack.split('\n').slice(1);
      // Get the first frame that doesn't reference the library's internal trace.
      // Assume that frame is the invocation frame.
      const declarationFrame = frames.find((frame) => {
          return !BUILD_FRAME.test(frame);
      });
      if (!declarationFrame) {
          return;
      }
      // Extract file reference from the stack frame.
      const declarationPath = declarationFrame
          .replace(/\s*at [^()]*\(([^)]+)\)/, '$1')
          .replace(/^@/, '');
      return declarationPath;
  }

  /**
   * Determines if the given function is an iterator.
   */
  function isIterable(fn) {
      if (!fn) {
          return false;
      }
      return typeof fn[Symbol.iterator] == 'function';
  }

  const defaultContext = {
      status,
      set,
      delay,
      fetch: fetch$1,
  };
  class RequestHandler {
      constructor(options) {
          this.shouldSkip = false;
          this.ctx = options.ctx || defaultContext;
          this.resolver = options.resolver;
          const callFrame = getCallFrame(new Error());
          this.info = Object.assign(Object.assign({}, options.info), { callFrame });
      }
      /**
       * Parse the captured request to extract additional information from it.
       * Parsed result is then exposed to other methods of this request handler.
       */
      parse(_request, _resolutionContext) {
          return null;
      }
      /**
       * Test if this handler matches the given request.
       */
      test(request, resolutionContext) {
          return this.predicate(request, this.parse(request, resolutionContext), resolutionContext);
      }
      /**
       * Derive the publicly exposed request (`req`) instance of the response resolver
       * from the captured request and its parsed result.
       */
      getPublicRequest(request, _parsedResult) {
          return request;
      }
      markAsSkipped(shouldSkip = true) {
          this.shouldSkip = shouldSkip;
      }
      /**
       * Execute this request handler and produce a mocked response
       * using the given resolver function.
       */
      run(request, resolutionContext) {
          return __awaiter$3(this, void 0, void 0, function* () {
              if (this.shouldSkip) {
                  return null;
              }
              const parsedResult = this.parse(request, resolutionContext);
              const shouldIntercept = this.predicate(request, parsedResult, resolutionContext);
              if (!shouldIntercept) {
                  return null;
              }
              const publicRequest = this.getPublicRequest(request, parsedResult);
              // Create a response extraction wrapper around the resolver
              // since it can be both an async function and a generator.
              const executeResolver = this.wrapResolver(this.resolver);
              const mockedResponse = yield executeResolver(publicRequest, response, this.ctx);
              return this.createExecutionResult(parsedResult, publicRequest, mockedResponse);
          });
      }
      wrapResolver(resolver) {
          return (req, res, ctx) => __awaiter$3(this, void 0, void 0, function* () {
              const result = this.resolverGenerator || (yield resolver(req, res, ctx));
              if (isIterable(result)) {
                  const { value, done } = result[Symbol.iterator]().next();
                  const nextResponse = yield value;
                  // If the generator is done and there is no next value,
                  // return the previous generator's value.
                  if (!nextResponse && done) {
                      return this.resolverGeneratorResult;
                  }
                  if (!this.resolverGenerator) {
                      this.resolverGenerator = result;
                  }
                  this.resolverGeneratorResult = nextResponse;
                  return nextResponse;
              }
              return result;
          });
      }
      createExecutionResult(parsedResult, request, response) {
          return {
              handler: this,
              parsedResult: parsedResult || null,
              request,
              response: response || null,
          };
      }
  }

  exports.RESTMethods = void 0;
  (function (RESTMethods) {
      RESTMethods["HEAD"] = "HEAD";
      RESTMethods["GET"] = "GET";
      RESTMethods["POST"] = "POST";
      RESTMethods["PUT"] = "PUT";
      RESTMethods["PATCH"] = "PATCH";
      RESTMethods["OPTIONS"] = "OPTIONS";
      RESTMethods["DELETE"] = "DELETE";
  })(exports.RESTMethods || (exports.RESTMethods = {}));
  const restContext = {
      set,
      status,
      cookie,
      body,
      text,
      json,
      xml,
      delay,
      fetch: fetch$1,
  };
  /**
   * Request handler for REST API requests.
   * Provides request matching based on method and URL.
   */
  class RestHandler extends RequestHandler {
      constructor(method, path, resolver) {
          super({
              info: {
                  header: `${method} ${path}`,
                  path,
                  method,
              },
              ctx: restContext,
              resolver,
          });
          this.checkRedundantQueryParameters();
      }
      checkRedundantQueryParameters() {
          const { method, path } = this.info;
          if (path instanceof RegExp) {
              return;
          }
          const url = cleanUrl(path);
          // Bypass request handler URLs that have no redundant characters.
          if (url === path) {
              return;
          }
          const searchParams = getSearchParams(path);
          searchParams.forEach((_, paramName) => {
          });
          devUtils.warn(`Found a redundant usage of query parameters in the request handler URL for "${method} ${path}". Please match against a path instead and access query parameters in the response resolver function using "req.url.searchParams".`);
      }
      parse(request, resolutionContext) {
          return matchRequestUrl(request.url, this.info.path, resolutionContext === null || resolutionContext === void 0 ? void 0 : resolutionContext.baseUrl);
      }
      getPublicRequest(request, parsedResult) {
          return Object.assign(Object.assign({}, request), { params: parsedResult.params || {} });
      }
      predicate(request, parsedResult) {
          const matchesMethod = this.info.method instanceof RegExp
              ? this.info.method.test(request.method)
              : isStringEqual(this.info.method, request.method);
          return matchesMethod && parsedResult.matches;
      }
      log(request, response) {
          const publicUrl = getPublicUrlFromRequest(request);
          const loggedRequest = prepareRequest(request);
          const loggedResponse = prepareResponse(response);
          const statusColor = getStatusCodeColor(response.status);
          console.groupCollapsed(devUtils.formatMessage('%s %s %s (%c%s%c)'), getTimestamp(), request.method, publicUrl, `color:${statusColor}`, `${response.status} ${response.statusText}`, 'color:inherit');
          console.log('Request', loggedRequest);
          console.log('Handler:', {
              mask: this.info.path,
              resolver: this.resolver,
          });
          console.log('Response', loggedResponse);
          console.groupEnd();
      }
  }

  function tryCatch(fn, onException) {
      try {
          const result = fn();
          return result;
      }
      catch (error) {
          onException === null || onException === void 0 ? void 0 : onException(error);
      }
  }

  const graphqlContext = {
      set,
      status,
      delay,
      fetch: fetch$1,
      data,
      extensions,
      errors,
      cookie,
  };
  function isDocumentNode(value) {
      if (value == null) {
          return false;
      }
      return typeof value === 'object' && 'kind' in value && 'definitions' in value;
  }
  class GraphQLHandler extends RequestHandler {
      constructor(operationType, operationName, endpoint, resolver) {
          let resolvedOperationName = operationName;
          if (isDocumentNode(operationName)) {
              const parsedNode = parseDocumentNode(operationName);
              if (parsedNode.operationType !== operationType) {
                  throw new Error(`Failed to create a GraphQL handler: provided a DocumentNode with a mismatched operation type (expected "${operationType}", but got "${parsedNode.operationType}").`);
              }
              if (!parsedNode.operationName) {
                  throw new Error(`Failed to create a GraphQL handler: provided a DocumentNode with no operation name.`);
              }
              resolvedOperationName = parsedNode.operationName;
          }
          const header = operationType === 'all'
              ? `${operationType} (origin: ${endpoint.toString()})`
              : `${operationType} ${resolvedOperationName} (origin: ${endpoint.toString()})`;
          super({
              info: {
                  header,
                  operationType,
                  operationName: resolvedOperationName,
              },
              ctx: graphqlContext,
              resolver,
          });
          this.endpoint = endpoint;
      }
      parse(request) {
          return tryCatch(() => parseGraphQLRequest(request), (error) => console.error(error.message));
      }
      getPublicRequest(request, parsedResult) {
          return Object.assign(Object.assign({}, request), { variables: (parsedResult === null || parsedResult === void 0 ? void 0 : parsedResult.variables) || {} });
      }
      predicate(request, parsedResult) {
          if (!parsedResult) {
              return false;
          }
          if (!parsedResult.operationName && this.info.operationType !== 'all') {
              const publicUrl = getPublicUrlFromRequest(request);
              devUtils.warn(`\
Failed to intercept a GraphQL request at "${request.method} ${publicUrl}": anonymous GraphQL operations are not supported.

Consider naming this operation or using "graphql.operation" request handler to intercept GraphQL requests regardless of their operation name/type. Read more: https://mswjs.io/docs/api/graphql/operation\
      `);
              return false;
          }
          const hasMatchingUrl = matchRequestUrl(request.url, this.endpoint);
          const hasMatchingOperationType = this.info.operationType === 'all' ||
              parsedResult.operationType === this.info.operationType;
          const hasMatchingOperationName = this.info.operationName instanceof RegExp
              ? this.info.operationName.test(parsedResult.operationName || '')
              : parsedResult.operationName === this.info.operationName;
          return (hasMatchingUrl.matches &&
              hasMatchingOperationType &&
              hasMatchingOperationName);
      }
      log(request, response, handler, parsedRequest) {
          const loggedRequest = prepareRequest(request);
          const loggedResponse = prepareResponse(response);
          const statusColor = getStatusCodeColor(response.status);
          const requestInfo = (parsedRequest === null || parsedRequest === void 0 ? void 0 : parsedRequest.operationName)
              ? `${parsedRequest === null || parsedRequest === void 0 ? void 0 : parsedRequest.operationType} ${parsedRequest === null || parsedRequest === void 0 ? void 0 : parsedRequest.operationName}`
              : `anonymous ${parsedRequest === null || parsedRequest === void 0 ? void 0 : parsedRequest.operationType}`;
          console.groupCollapsed(devUtils.formatMessage('%s %s (%c%s%c)'), getTimestamp(), `${requestInfo}`, `color:${statusColor}`, `${response.status} ${response.statusText}`, 'color:inherit');
          console.log('Request:', loggedRequest);
          console.log('Handler:', this);
          console.log('Response:', loggedResponse);
          console.groupEnd();
      }
  }

  const MAX_MATCH_SCORE = 3;
  const MAX_SUGGESTION_COUNT = 4;
  const TYPE_MATCH_DELTA = 0.5;
  function groupHandlersByType(handlers) {
      return handlers.reduce((groups, handler) => {
          if (handler instanceof RestHandler) {
              groups.rest.push(handler);
          }
          if (handler instanceof GraphQLHandler) {
              groups.graphql.push(handler);
          }
          return groups;
      }, {
          rest: [],
          graphql: [],
      });
  }
  function getRestHandlerScore() {
      return (request, handler) => {
          const { path, method } = handler.info;
          if (path instanceof RegExp || method instanceof RegExp) {
              return Infinity;
          }
          const hasSameMethod = isStringEqual(request.method, method);
          // Always treat a handler with the same method as a more similar one.
          const methodScoreDelta = hasSameMethod ? TYPE_MATCH_DELTA : 0;
          const requestPublicUrl = getPublicUrlFromRequest(request);
          const score = jsLevenshtein(requestPublicUrl, path);
          return score - methodScoreDelta;
      };
  }
  function getGraphQLHandlerScore(parsedQuery) {
      return (_, handler) => {
          if (typeof parsedQuery.operationName === 'undefined') {
              return Infinity;
          }
          const { operationType, operationName } = handler.info;
          if (typeof operationName !== 'string') {
              return Infinity;
          }
          const hasSameOperationType = parsedQuery.operationType === operationType;
          // Always treat a handler with the same operation type as a more similar one.
          const operationTypeScoreDelta = hasSameOperationType ? TYPE_MATCH_DELTA : 0;
          const score = jsLevenshtein(parsedQuery.operationName, operationName);
          return score - operationTypeScoreDelta;
      };
  }
  function getSuggestedHandler(request, handlers, getScore) {
      const suggestedHandlers = handlers
          .reduce((suggestions, handler) => {
          const score = getScore(request, handler);
          return suggestions.concat([[score, handler]]);
      }, [])
          .sort(([leftScore], [rightScore]) => leftScore - rightScore)
          .filter(([score]) => score <= MAX_MATCH_SCORE)
          .slice(0, MAX_SUGGESTION_COUNT)
          .map(([, handler]) => handler);
      return suggestedHandlers;
  }
  function getSuggestedHandlersMessage(handlers) {
      if (handlers.length > 1) {
          return `\
Did you mean to request one of the following resources instead?

${handlers.map((handler) => `  • ${handler.info.header}`).join('\n')}`;
      }
      return `Did you mean to request "${handlers[0].info.header}" instead?`;
  }
  function onUnhandledRequest(request, handlers, strategy = 'warn') {
      const parsedGraphQLQuery = tryCatch(() => parseGraphQLRequest(request));
      function generateHandlerSuggestion() {
          /**
           * @note Ignore exceptions during GraphQL request parsing because at this point
           * we cannot assume the unhandled request is a valid GraphQL request.
           * If the GraphQL parsing fails, just don't treat it as a GraphQL request.
           */
          const handlerGroups = groupHandlersByType(handlers);
          const relevantHandlers = parsedGraphQLQuery
              ? handlerGroups.graphql
              : handlerGroups.rest;
          const suggestedHandlers = getSuggestedHandler(request, relevantHandlers, parsedGraphQLQuery
              ? getGraphQLHandlerScore(parsedGraphQLQuery)
              : getRestHandlerScore());
          return suggestedHandlers.length > 0
              ? getSuggestedHandlersMessage(suggestedHandlers)
              : '';
      }
      function generateUnhandledRequestMessage() {
          const publicUrl = getPublicUrlFromRequest(request);
          const requestHeader = parsedGraphQLQuery
              ? `${parsedGraphQLQuery.operationType} ${parsedGraphQLQuery.operationName} (${request.method} ${publicUrl})`
              : `${request.method} ${publicUrl}`;
          const handlerSuggestion = generateHandlerSuggestion();
          const messageTemplate = [
              `captured a request without a matching request handler:`,
              `  \u2022 ${requestHeader}`,
              handlerSuggestion,
              `\
If you still wish to intercept this unhandled request, please create a request handler for it.
Read more: https://mswjs.io/docs/getting-started/mocks\
`,
          ].filter(Boolean);
          return messageTemplate.join('\n\n');
      }
      function applyStrategy(strategy) {
          // Generate handler suggestions only when applying the strategy.
          // This saves bandwidth for scenarios when developers opt-out
          // from the default unhandled request handling strategy.
          const message = generateUnhandledRequestMessage();
          switch (strategy) {
              case 'error': {
                  // Print a developer-friendly error.
                  devUtils.error('Error: %s', message);
                  // Throw an exception to halt request processing and not perform the original request.
                  throw new Error(devUtils.formatMessage('Cannot bypass a request when using the "error" strategy for the "onUnhandledRequest" option.'));
              }
              case 'warn': {
                  devUtils.warn('Warning: %s', message);
                  break;
              }
              case 'bypass':
                  break;
              default:
                  throw new Error(devUtils.formatMessage('Failed to react to an unhandled request: unknown strategy "%s". Please provide one of the supported strategies ("bypass", "warn", "error") or a custom callback function as the value of the "onUnhandledRequest" option.', strategy));
          }
      }
      if (typeof strategy === 'function') {
          strategy(request, {
              warning: applyStrategy.bind(null, 'warn'),
              error: applyStrategy.bind(null, 'error'),
          });
          return;
      }
      applyStrategy(strategy);
  }

  function readResponseCookies(request, response) {
      lib$2.store.add(Object.assign(Object.assign({}, request), { url: request.url.toString() }), response);
      lib$2.store.persist();
  }

  function handleRequest(request, handlers, options, emitter, handleRequestOptions) {
      var _a, _b, _c;
      return __awaiter$3(this, void 0, void 0, function* () {
          emitter.emit('request:start', request);
          // Perform bypassed requests (i.e. issued via "ctx.fetch") as-is.
          if (request.headers.get('x-msw-bypass') === 'true') {
              emitter.emit('request:end', request);
              (_a = handleRequestOptions === null || handleRequestOptions === void 0 ? void 0 : handleRequestOptions.onBypassResponse) === null || _a === void 0 ? void 0 : _a.call(handleRequestOptions, request);
              return;
          }
          // Resolve a mocked response from the list of request handlers.
          const lookupResult = yield getResponse(request, handlers, handleRequestOptions === null || handleRequestOptions === void 0 ? void 0 : handleRequestOptions.resolutionContext);
          const { handler, response } = lookupResult;
          // When there's no handler for the request, consider it unhandled.
          // Allow the developer to react to such cases.
          if (!handler) {
              onUnhandledRequest(request, handlers, options.onUnhandledRequest);
              emitter.emit('request:unhandled', request);
              emitter.emit('request:end', request);
              (_b = handleRequestOptions === null || handleRequestOptions === void 0 ? void 0 : handleRequestOptions.onBypassResponse) === null || _b === void 0 ? void 0 : _b.call(handleRequestOptions, request);
              return;
          }
          // When the handled request returned no mocked response, warn the developer,
          // as it may be an oversight on their part. Perform the request as-is.
          if (!response) {
              devUtils.warn(`\
Expected response resolver to return a mocked response Object, but got %s. The original response is going to be used instead.\
\n
  \u2022 %s
    %s\
`, response, handler.info.header, handler.info.callFrame);
              emitter.emit('request:end', request);
              (_c = handleRequestOptions === null || handleRequestOptions === void 0 ? void 0 : handleRequestOptions.onBypassResponse) === null || _c === void 0 ? void 0 : _c.call(handleRequestOptions, request);
              return;
          }
          // Store all the received response cookies in the virtual cookie store.
          readResponseCookies(request, response);
          emitter.emit('request:match', request);
          return new Promise((resolve) => {
              var _a, _b, _c;
              const requiredLookupResult = lookupResult;
              const transformedResponse = ((_a = handleRequestOptions === null || handleRequestOptions === void 0 ? void 0 : handleRequestOptions.transformResponse) === null || _a === void 0 ? void 0 : _a.call(handleRequestOptions, response)) ||
                  response;
              (_b = handleRequestOptions === null || handleRequestOptions === void 0 ? void 0 : handleRequestOptions.onMockedResponse) === null || _b === void 0 ? void 0 : _b.call(handleRequestOptions, transformedResponse, requiredLookupResult);
              setTimeout(() => {
                  var _a;
                  (_a = handleRequestOptions === null || handleRequestOptions === void 0 ? void 0 : handleRequestOptions.onMockedResponseSent) === null || _a === void 0 ? void 0 : _a.call(handleRequestOptions, transformedResponse, requiredLookupResult);
                  emitter.emit('request:end', request);
                  resolve(transformedResponse);
              }, (_c = response.delay) !== null && _c !== void 0 ? _c : 0);
          });
      });
  }

  const createRequestListener = (context, options) => {
      return (event, message) => __awaiter$3(void 0, void 0, void 0, function* () {
          const channel = createBroadcastChannel(event);
          try {
              const request = parseWorkerRequest(message.payload);
              yield handleRequest(request, context.requestHandlers, options, context.emitter, {
                  transformResponse(response) {
                      return Object.assign(Object.assign({}, response), { headers: response.headers.all() });
                  },
                  onBypassResponse() {
                      return channel.send({
                          type: 'MOCK_NOT_FOUND',
                      });
                  },
                  onMockedResponse(response) {
                      channel.send({
                          type: 'MOCK_SUCCESS',
                          payload: response,
                      });
                  },
                  onMockedResponseSent(response, { handler, publicRequest, parsedRequest }) {
                      if (!options.quiet) {
                          handler.log(publicRequest, response, handler, parsedRequest);
                      }
                  },
              });
          }
          catch (error) {
              if (error instanceof NetworkError) {
                  // Treat emulated network error differently,
                  // as it is an intended exception in a request handler.
                  return channel.send({
                      type: 'NETWORK_ERROR',
                      payload: {
                          name: error.name,
                          message: error.message,
                      },
                  });
              }
              // Treat all the other exceptions in a request handler
              // as unintended, alerting that there is a problem needs fixing.
              channel.send({
                  type: 'INTERNAL_ERROR',
                  payload: {
                      status: 500,
                      body: JSON.stringify({
                          errorType: error.constructor.name,
                          message: error.message,
                          location: error.stack,
                      }),
                  },
              });
          }
      });
  };

  function requestIntegrityCheck(context, serviceWorker) {
      return __awaiter$3(this, void 0, void 0, function* () {
          // Signal Service Worker to report back its integrity
          context.workerChannel.send('INTEGRITY_CHECK_REQUEST');
          const { payload: actualChecksum } = yield context.events.once('INTEGRITY_CHECK_RESPONSE');
          // Compare the response from the Service Worker and the
          // global variable set by Rollup during the build.
          if (actualChecksum !== "02f4ad4a2797f85668baf196e553d929") {
              throw new Error(`Currently active Service Worker (${actualChecksum}) is behind the latest published one (${"02f4ad4a2797f85668baf196e553d929"}).`);
          }
          return serviceWorker;
      });
  }

  /**
   * Intercepts and defers any requests on the page
   * until the Service Worker instance is ready.
   * Must only be used in a browser.
   */
  function deferNetworkRequestsUntil(predicatePromise) {
      // Defer any `XMLHttpRequest` requests until the Service Worker is ready.
      const originalXhrSend = window.XMLHttpRequest.prototype.send;
      window.XMLHttpRequest.prototype.send = function (...args) {
          // Keep this function synchronous to comply with `XMLHttpRequest.prototype.send`,
          // because that method is always synchronous.
          until(() => predicatePromise).then(() => {
              window.XMLHttpRequest.prototype.send = originalXhrSend;
              this.send(...args);
          });
      };
      // Defer any `fetch` requests until the Service Worker is ready.
      const originalFetch = window.fetch;
      window.fetch = (...args) => __awaiter$3(this, void 0, void 0, function* () {
          yield until(() => predicatePromise);
          window.fetch = originalFetch;
          return window.fetch(...args);
      });
  }

  function createResponseListener(context) {
      return (_, message) => {
          var _a;
          const { payload: responseJson } = message;
          /**
           * CORS requests with `mode: "no-cors"` result in "opaque" responses.
           * That kind of responses cannot be manipulated in JavaScript due
           * to the security considerations.
           * @see https://fetch.spec.whatwg.org/#concept-filtered-response-opaque
           * @see https://github.com/mswjs/msw/issues/529
           */
          if ((_a = responseJson.type) === null || _a === void 0 ? void 0 : _a.includes('opaque')) {
              return;
          }
          const response = new Response(responseJson.body || null, responseJson);
          const isMockedResponse = response.headers.get('x-powered-by') === 'msw';
          if (isMockedResponse) {
              context.emitter.emit('response:mocked', response, responseJson.requestId);
          }
          else {
              context.emitter.emit('response:bypass', response, responseJson.requestId);
          }
      };
  }

  function validateWorkerScope(registration, options) {
      if (!(options === null || options === void 0 ? void 0 : options.quiet) && !location.href.startsWith(registration.scope)) {
          devUtils.warn(`\
Cannot intercept requests on this page because it's outside of the worker's scope ("${registration.scope}"). If you wish to mock API requests on this page, you must resolve this scope issue.

- (Recommended) Register the worker at the root level ("/") of your application.
- Set the "Service-Worker-Allowed" response header to allow out-of-scope workers.\
`);
      }
  }

  const createStartHandler = (context) => {
      return function start(options, customOptions) {
          const startWorkerInstance = () => __awaiter$3(this, void 0, void 0, function* () {
              // Remove all previously existing event listeners.
              // This way none of the listeners persists between Fast refresh
              // of the application's code.
              context.events.removeAllListeners();
              // Handle requests signaled by the worker.
              context.workerChannel.on('REQUEST', createRequestListener(context, options));
              context.workerChannel.on('RESPONSE', createResponseListener(context));
              const instance = yield getWorkerInstance(options.serviceWorker.url, options.serviceWorker.options, options.findWorker);
              const [worker, registration] = instance;
              if (!worker) {
                  const missingWorkerMessage = (customOptions === null || customOptions === void 0 ? void 0 : customOptions.findWorker)
                      ? devUtils.formatMessage(`Failed to locate the Service Worker registration using a custom "findWorker" predicate.

Please ensure that the custom predicate properly locates the Service Worker registration at "%s".
More details: https://mswjs.io/docs/api/setup-worker/start#findworker
`, options.serviceWorker.url)
                      : devUtils.formatMessage(`Failed to locate the Service Worker registration.

This most likely means that the worker script URL "%s" cannot resolve against the actual public hostname (%s). This may happen if your application runs behind a proxy, or has a dynamic hostname.

Please consider using a custom "serviceWorker.url" option to point to the actual worker script location, or a custom "findWorker" option to resolve the Service Worker registration manually. More details: https://mswjs.io/docs/api/setup-worker/start`, options.serviceWorker.url, location.host);
                  throw new Error(missingWorkerMessage);
              }
              context.worker = worker;
              context.registration = registration;
              context.events.addListener(window, 'beforeunload', () => {
                  if (worker.state !== 'redundant') {
                      // Notify the Service Worker that this client has closed.
                      // Internally, it's similar to disabling the mocking, only
                      // client close event has a handler that self-terminates
                      // the Service Worker when there are no open clients.
                      context.workerChannel.send('CLIENT_CLOSED');
                  }
                  // Make sure we're always clearing the interval - there are reports that not doing this can
                  // cause memory leaks in headless browser environments.
                  window.clearInterval(context.keepAliveInterval);
              });
              // Check if the active Service Worker is the latest published one
              const [integrityError] = yield until(() => requestIntegrityCheck(context, worker));
              if (integrityError) {
                  devUtils.error(`\
Detected outdated Service Worker: ${integrityError.message}

The mocking is still enabled, but it's highly recommended that you update your Service Worker by running:

$ npx msw init <PUBLIC_DIR>

This is necessary to ensure that the Service Worker is in sync with the library to guarantee its stability.
If this message still persists after updating, please report an issue: https://github.com/open-draft/msw/issues\
      `);
              }
              context.keepAliveInterval = window.setInterval(() => context.workerChannel.send('KEEPALIVE_REQUEST'), 5000);
              // Warn the user when loading the page that lies outside
              // of the worker's scope.
              validateWorkerScope(registration, context.startOptions);
              return registration;
          });
          const workerRegistration = startWorkerInstance().then((registration) => __awaiter$3(this, void 0, void 0, function* () {
              const pendingInstance = registration.installing || registration.waiting;
              // Wait until the worker is activated.
              // Assume the worker is already activated if there's no pending registration
              // (i.e. when reloading the page after a successful activation).
              if (pendingInstance) {
                  yield new Promise((resolve) => {
                      pendingInstance.addEventListener('statechange', () => {
                          if (pendingInstance.state === 'activated') {
                              return resolve();
                          }
                      });
                  });
              }
              // Print the activation message only after the worker has been activated.
              yield enableMocking(context, options).catch((error) => {
                  throw new Error(`Failed to enable mocking: ${error === null || error === void 0 ? void 0 : error.message}`);
              });
              return registration;
          }));
          // Defer any network requests until the Service Worker instance is ready.
          // This prevents a race condition between the Service Worker registration
          // and application's runtime requests (i.e. requests on mount).
          if (options.waitUntilReady) {
              deferNetworkRequestsUntil(workerRegistration);
          }
          return workerRegistration;
      };
  };

  function printStopMessage(args = {}) {
      if (args.quiet) {
          return;
      }
      console.log(`%c${devUtils.formatMessage('Mocking disabled.')}`, 'color:orangered;font-weight:bold;');
  }

  const createStop = (context) => {
      return function stop() {
          var _a;
          /**
           * Signal the Service Worker to disable mocking for this client.
           * Use this an an explicit way to stop the mocking, while preserving
           * the worker-client relation. Does not affect the worker's lifecycle.
           */
          context.workerChannel.send('MOCK_DEACTIVATE');
          window.clearInterval(context.keepAliveInterval);
          printStopMessage({ quiet: (_a = context.startOptions) === null || _a === void 0 ? void 0 : _a.quiet });
      };
  };

  function use(currentHandlers, ...handlers) {
      currentHandlers.unshift(...handlers);
  }
  function restoreHandlers(handlers) {
      handlers.forEach((handler) => {
          handler.markAsSkipped(false);
      });
  }
  function resetHandlers(initialHandlers, ...nextHandlers) {
      return nextHandlers.length > 0 ? [...nextHandlers] : [...initialHandlers];
  }

  const DEFAULT_START_OPTIONS = {
      serviceWorker: {
          url: '/mockServiceWorker.js',
          options: null,
      },
      quiet: false,
      waitUntilReady: true,
      onUnhandledRequest: 'warn',
      findWorker(scriptURL, mockServiceWorkerUrl) {
          return scriptURL === mockServiceWorkerUrl;
      },
  };
  /**
   * Returns resolved worker start options, merging the default options
   * with the given custom options.
   */
  function resolveStartOptions(initialOptions) {
      return mergeRight(DEFAULT_START_OPTIONS, initialOptions || {});
  }
  function prepareStartHandler(handler, context) {
      return (initialOptions) => {
          context.startOptions = resolveStartOptions(initialOptions);
          return handler(context.startOptions, initialOptions || {});
      };
  }

  var lib$1 = {};

  var createInterceptor$1 = {};

  Object.defineProperty(createInterceptor$1, "__esModule", { value: true });
  createInterceptor$1.createInterceptor = void 0;
  var strict_event_emitter_1$1 = lib$5;
  function createInterceptor(options) {
      var observer = new strict_event_emitter_1$1.StrictEventEmitter();
      var cleanupFns = [];
      return {
          apply: function () {
              cleanupFns = options.modules.map(function (interceptor) {
                  return interceptor(observer, options.resolver);
              });
          },
          on: function (event, listener) {
              observer.addListener(event, listener);
          },
          restore: function () {
              observer.removeAllListeners();
              if (cleanupFns.length === 0) {
                  throw new Error("Failed to restore patched modules: no patches found. Did you forget to run \".apply()\"?");
              }
              cleanupFns.forEach(function (restore) { return restore(); });
          },
      };
  }
  createInterceptor$1.createInterceptor = createInterceptor;

  var remote = {};

  var toIsoResponse$1 = {};

  Object.defineProperty(toIsoResponse$1, "__esModule", { value: true });
  toIsoResponse$1.toIsoResponse = void 0;
  var headers_polyfill_1$3 = lib$7;
  /**
   * Converts a given mocked response object into an isomorphic response.
   */
  function toIsoResponse(response) {
      return {
          status: response.status || 200,
          statusText: response.statusText || 'OK',
          headers: headers_polyfill_1$3.objectToHeaders(response.headers || {}),
          body: response.body,
      };
  }
  toIsoResponse$1.toIsoResponse = toIsoResponse;

  var __assign$1 = (commonjsGlobal && commonjsGlobal.__assign) || function () {
      __assign$1 = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                  t[p] = s[p];
          }
          return t;
      };
      return __assign$1.apply(this, arguments);
  };
  var __awaiter$2 = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  };
  var __generator$2 = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
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
  var __read$1 = (commonjsGlobal && commonjsGlobal.__read) || function (o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o), r, ar = [], e;
      try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      }
      catch (error) { e = { error: error }; }
      finally {
          try {
              if (r && !r.done && (m = i["return"])) m.call(i);
          }
          finally { if (e) throw e.error; }
      }
      return ar;
  };
  Object.defineProperty(remote, "__esModule", { value: true });
  remote.createRemoteResolver = remote.createRemoteInterceptor = void 0;
  var headers_polyfill_1$2 = lib$7;
  var outvariant_1 = lib$3;
  var strict_event_emitter_1 = lib$5;
  var createInterceptor_1 = createInterceptor$1;
  var toIsoResponse_1$2 = toIsoResponse$1;
  function requestReviver(key, value) {
      switch (key) {
          case 'url':
              return new URL(value);
          case 'headers':
              return new headers_polyfill_1$2.Headers(value);
          default:
              return value;
      }
  }
  /**
   * Creates a remote request interceptor that delegates
   * the mocked response resolution to the parent process.
   * The parent process must establish a remote resolver
   * by calling `createRemoteResolver` function.
   */
  function createRemoteInterceptor(options) {
      outvariant_1.invariant(process.connected, "Failed to create a remote interceptor: the current process (%s) does not have a parent. Please make sure you're spawning this process as a child process in order to use remote request interception.", process.pid);
      if (typeof process.send === 'undefined') {
          throw new Error("Failed to create a remote interceptor: the current process (" + process.pid + ") does not have the IPC enabled. Please make sure you're spawning this process with the \"ipc\" stdio value set:\n\nspawn('node', ['module.js'], { stdio: ['ipc'] })");
      }
      var handleParentMessage;
      var interceptor = createInterceptor_1.createInterceptor(__assign$1(__assign$1({}, options), { resolver: function (request) {
              var _a;
              var serializedRequest = JSON.stringify(request);
              (_a = process.send) === null || _a === void 0 ? void 0 : _a.call(process, "request:" + serializedRequest);
              return new Promise(function (resolve) {
                  handleParentMessage = function (message) {
                      if (typeof message !== 'string') {
                          return;
                      }
                      if (message.startsWith("response:" + request.id)) {
                          var _a = __read$1(message.match(/^response:.+?:(.+)$/) || [], 2), responseString = _a[1];
                          if (!responseString) {
                              return resolve();
                          }
                          var mockedResponse = JSON.parse(responseString);
                          return resolve(mockedResponse);
                      }
                  };
                  process.addListener('message', handleParentMessage);
              });
          } }));
      return __assign$1(__assign$1({}, interceptor), { restore: function () {
              interceptor.restore();
              process.removeListener('message', handleParentMessage);
          } });
  }
  remote.createRemoteInterceptor = createRemoteInterceptor;
  /**
   * Creates a response resolver function attached to the given `ChildProcess`.
   * The child process must establish a remote interceptor by calling `createRemoteInterceptor` function.
   */
  function createRemoteResolver(options) {
      var _this = this;
      var observer = new strict_event_emitter_1.StrictEventEmitter();
      var handleChildMessage = function (message) { return __awaiter$2(_this, void 0, void 0, function () {
          var _a, requestString, isoRequest_1, mockedResponse_1, serializedResponse;
          return __generator$2(this, function (_b) {
              switch (_b.label) {
                  case 0:
                      if (typeof message !== 'string') {
                          return [2 /*return*/];
                      }
                      if (!message.startsWith('request:')) return [3 /*break*/, 2];
                      _a = __read$1(message.match(/^request:(.+)$/) || [], 2), requestString = _a[1];
                      if (!requestString) {
                          return [2 /*return*/];
                      }
                      isoRequest_1 = JSON.parse(requestString, requestReviver);
                      observer.emit('request', isoRequest_1);
                      return [4 /*yield*/, options.resolver(isoRequest_1, undefined)
                          // Send the mocked response to the child process.
                      ];
                  case 1:
                      mockedResponse_1 = _b.sent();
                      serializedResponse = JSON.stringify(mockedResponse_1);
                      options.process.send("response:" + isoRequest_1.id + ":" + serializedResponse, function (error) {
                          if (error) {
                              return;
                          }
                          if (mockedResponse_1) {
                              // Emit an optimisting "response" event at this point,
                              // not to rely on the back-and-forth signaling for the sake of the event.
                              observer.emit('response', isoRequest_1, toIsoResponse_1$2.toIsoResponse(mockedResponse_1));
                          }
                      });
                      _b.label = 2;
                  case 2: return [2 /*return*/];
              }
          });
      }); };
      var cleanup = function () {
          options.process.removeListener('message', handleChildMessage);
      };
      options.process.addListener('message', handleChildMessage);
      options.process.addListener('disconnect', cleanup);
      options.process.addListener('error', cleanup);
      options.process.addListener('exit', cleanup);
      return {
          on: function (event, listener) {
              observer.addListener(event, listener);
          },
      };
  }
  remote.createRemoteResolver = createRemoteResolver;

  (function (exports) {
  var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
  }) : (function(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
  }));
  var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getCleanUrl = void 0;
  __exportStar(createInterceptor$1, exports);
  __exportStar(remote, exports);
  /* Utils */
  var getCleanUrl_1 = getCleanUrl$1;
  Object.defineProperty(exports, "getCleanUrl", { enumerable: true, get: function () { return getCleanUrl_1.getCleanUrl; } });

  }(lib$1));

  var fetch = {};

  var uuid = {};

  Object.defineProperty(uuid, "__esModule", { value: true });
  uuid.uuidv4 = void 0;
  function uuidv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          var r = (Math.random() * 16) | 0;
          var v = c == 'x' ? r : (r & 0x3) | 0x8;
          return v.toString(16);
      });
  }
  uuid.uuidv4 = uuidv4;

  var browser = {exports: {}};

  /**
   * Helpers.
   */

  var s = 1000;
  var m = s * 60;
  var h = m * 60;
  var d = h * 24;
  var w = d * 7;
  var y = d * 365.25;

  /**
   * Parse or format the given `val`.
   *
   * Options:
   *
   *  - `long` verbose formatting [false]
   *
   * @param {String|Number} val
   * @param {Object} [options]
   * @throws {Error} throw an error if val is not a non-empty string or a number
   * @return {String|Number}
   * @api public
   */

  var ms = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === 'string' && val.length > 0) {
      return parse$1(val);
    } else if (type === 'number' && isFinite(val)) {
      return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error(
      'val is not a non-empty string or a valid number. val=' +
        JSON.stringify(val)
    );
  };

  /**
   * Parse the given `str` and return milliseconds.
   *
   * @param {String} str
   * @return {Number}
   * @api private
   */

  function parse$1(str) {
    str = String(str);
    if (str.length > 100) {
      return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
      str
    );
    if (!match) {
      return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();
    switch (type) {
      case 'years':
      case 'year':
      case 'yrs':
      case 'yr':
      case 'y':
        return n * y;
      case 'weeks':
      case 'week':
      case 'w':
        return n * w;
      case 'days':
      case 'day':
      case 'd':
        return n * d;
      case 'hours':
      case 'hour':
      case 'hrs':
      case 'hr':
      case 'h':
        return n * h;
      case 'minutes':
      case 'minute':
      case 'mins':
      case 'min':
      case 'm':
        return n * m;
      case 'seconds':
      case 'second':
      case 'secs':
      case 'sec':
      case 's':
        return n * s;
      case 'milliseconds':
      case 'millisecond':
      case 'msecs':
      case 'msec':
      case 'ms':
        return n;
      default:
        return undefined;
    }
  }

  /**
   * Short format for `ms`.
   *
   * @param {Number} ms
   * @return {String}
   * @api private
   */

  function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
      return Math.round(ms / d) + 'd';
    }
    if (msAbs >= h) {
      return Math.round(ms / h) + 'h';
    }
    if (msAbs >= m) {
      return Math.round(ms / m) + 'm';
    }
    if (msAbs >= s) {
      return Math.round(ms / s) + 's';
    }
    return ms + 'ms';
  }

  /**
   * Long format for `ms`.
   *
   * @param {Number} ms
   * @return {String}
   * @api private
   */

  function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
      return plural(ms, msAbs, d, 'day');
    }
    if (msAbs >= h) {
      return plural(ms, msAbs, h, 'hour');
    }
    if (msAbs >= m) {
      return plural(ms, msAbs, m, 'minute');
    }
    if (msAbs >= s) {
      return plural(ms, msAbs, s, 'second');
    }
    return ms + ' ms';
  }

  /**
   * Pluralization helper.
   */

  function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
  }

  /**
   * This is the common logic for both the Node.js and web browser
   * implementations of `debug()`.
   */

  function setup(env) {
  	createDebug.debug = createDebug;
  	createDebug.default = createDebug;
  	createDebug.coerce = coerce;
  	createDebug.disable = disable;
  	createDebug.enable = enable;
  	createDebug.enabled = enabled;
  	createDebug.humanize = ms;
  	createDebug.destroy = destroy;

  	Object.keys(env).forEach(key => {
  		createDebug[key] = env[key];
  	});

  	/**
  	* The currently active debug mode names, and names to skip.
  	*/

  	createDebug.names = [];
  	createDebug.skips = [];

  	/**
  	* Map of special "%n" handling functions, for the debug "format" argument.
  	*
  	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
  	*/
  	createDebug.formatters = {};

  	/**
  	* Selects a color for a debug namespace
  	* @param {String} namespace The namespace string for the debug instance to be colored
  	* @return {Number|String} An ANSI color code for the given namespace
  	* @api private
  	*/
  	function selectColor(namespace) {
  		let hash = 0;

  		for (let i = 0; i < namespace.length; i++) {
  			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
  			hash |= 0; // Convert to 32bit integer
  		}

  		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
  	}
  	createDebug.selectColor = selectColor;

  	/**
  	* Create a debugger with the given `namespace`.
  	*
  	* @param {String} namespace
  	* @return {Function}
  	* @api public
  	*/
  	function createDebug(namespace) {
  		let prevTime;
  		let enableOverride = null;
  		let namespacesCache;
  		let enabledCache;

  		function debug(...args) {
  			// Disabled?
  			if (!debug.enabled) {
  				return;
  			}

  			const self = debug;

  			// Set `diff` timestamp
  			const curr = Number(new Date());
  			const ms = curr - (prevTime || curr);
  			self.diff = ms;
  			self.prev = prevTime;
  			self.curr = curr;
  			prevTime = curr;

  			args[0] = createDebug.coerce(args[0]);

  			if (typeof args[0] !== 'string') {
  				// Anything else let's inspect with %O
  				args.unshift('%O');
  			}

  			// Apply any `formatters` transformations
  			let index = 0;
  			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
  				// If we encounter an escaped % then don't increase the array index
  				if (match === '%%') {
  					return '%';
  				}
  				index++;
  				const formatter = createDebug.formatters[format];
  				if (typeof formatter === 'function') {
  					const val = args[index];
  					match = formatter.call(self, val);

  					// Now we need to remove `args[index]` since it's inlined in the `format`
  					args.splice(index, 1);
  					index--;
  				}
  				return match;
  			});

  			// Apply env-specific formatting (colors, etc.)
  			createDebug.formatArgs.call(self, args);

  			const logFn = self.log || createDebug.log;
  			logFn.apply(self, args);
  		}

  		debug.namespace = namespace;
  		debug.useColors = createDebug.useColors();
  		debug.color = createDebug.selectColor(namespace);
  		debug.extend = extend;
  		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

  		Object.defineProperty(debug, 'enabled', {
  			enumerable: true,
  			configurable: false,
  			get: () => {
  				if (enableOverride !== null) {
  					return enableOverride;
  				}
  				if (namespacesCache !== createDebug.namespaces) {
  					namespacesCache = createDebug.namespaces;
  					enabledCache = createDebug.enabled(namespace);
  				}

  				return enabledCache;
  			},
  			set: v => {
  				enableOverride = v;
  			}
  		});

  		// Env-specific initialization logic for debug instances
  		if (typeof createDebug.init === 'function') {
  			createDebug.init(debug);
  		}

  		return debug;
  	}

  	function extend(namespace, delimiter) {
  		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
  		newDebug.log = this.log;
  		return newDebug;
  	}

  	/**
  	* Enables a debug mode by namespaces. This can include modes
  	* separated by a colon and wildcards.
  	*
  	* @param {String} namespaces
  	* @api public
  	*/
  	function enable(namespaces) {
  		createDebug.save(namespaces);
  		createDebug.namespaces = namespaces;

  		createDebug.names = [];
  		createDebug.skips = [];

  		let i;
  		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  		const len = split.length;

  		for (i = 0; i < len; i++) {
  			if (!split[i]) {
  				// ignore empty strings
  				continue;
  			}

  			namespaces = split[i].replace(/\*/g, '.*?');

  			if (namespaces[0] === '-') {
  				createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
  			} else {
  				createDebug.names.push(new RegExp('^' + namespaces + '$'));
  			}
  		}
  	}

  	/**
  	* Disable debug output.
  	*
  	* @return {String} namespaces
  	* @api public
  	*/
  	function disable() {
  		const namespaces = [
  			...createDebug.names.map(toNamespace),
  			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
  		].join(',');
  		createDebug.enable('');
  		return namespaces;
  	}

  	/**
  	* Returns true if the given mode name is enabled, false otherwise.
  	*
  	* @param {String} name
  	* @return {Boolean}
  	* @api public
  	*/
  	function enabled(name) {
  		if (name[name.length - 1] === '*') {
  			return true;
  		}

  		let i;
  		let len;

  		for (i = 0, len = createDebug.skips.length; i < len; i++) {
  			if (createDebug.skips[i].test(name)) {
  				return false;
  			}
  		}

  		for (i = 0, len = createDebug.names.length; i < len; i++) {
  			if (createDebug.names[i].test(name)) {
  				return true;
  			}
  		}

  		return false;
  	}

  	/**
  	* Convert regexp to namespace
  	*
  	* @param {RegExp} regxep
  	* @return {String} namespace
  	* @api private
  	*/
  	function toNamespace(regexp) {
  		return regexp.toString()
  			.substring(2, regexp.toString().length - 2)
  			.replace(/\.\*\?$/, '*');
  	}

  	/**
  	* Coerce `val`.
  	*
  	* @param {Mixed} val
  	* @return {Mixed}
  	* @api private
  	*/
  	function coerce(val) {
  		if (val instanceof Error) {
  			return val.stack || val.message;
  		}
  		return val;
  	}

  	/**
  	* XXX DO NOT USE. This is a temporary stub function.
  	* XXX It WILL be removed in the next major release.
  	*/
  	function destroy() {
  		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
  	}

  	createDebug.enable(createDebug.load());

  	return createDebug;
  }

  var common = setup;

  /* eslint-env browser */

  (function (module, exports) {
  /**
   * This is the web browser implementation of `debug()`.
   */

  exports.formatArgs = formatArgs;
  exports.save = save;
  exports.load = load;
  exports.useColors = useColors;
  exports.storage = localstorage();
  exports.destroy = (() => {
  	let warned = false;

  	return () => {
  		if (!warned) {
  			warned = true;
  			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
  		}
  	};
  })();

  /**
   * Colors.
   */

  exports.colors = [
  	'#0000CC',
  	'#0000FF',
  	'#0033CC',
  	'#0033FF',
  	'#0066CC',
  	'#0066FF',
  	'#0099CC',
  	'#0099FF',
  	'#00CC00',
  	'#00CC33',
  	'#00CC66',
  	'#00CC99',
  	'#00CCCC',
  	'#00CCFF',
  	'#3300CC',
  	'#3300FF',
  	'#3333CC',
  	'#3333FF',
  	'#3366CC',
  	'#3366FF',
  	'#3399CC',
  	'#3399FF',
  	'#33CC00',
  	'#33CC33',
  	'#33CC66',
  	'#33CC99',
  	'#33CCCC',
  	'#33CCFF',
  	'#6600CC',
  	'#6600FF',
  	'#6633CC',
  	'#6633FF',
  	'#66CC00',
  	'#66CC33',
  	'#9900CC',
  	'#9900FF',
  	'#9933CC',
  	'#9933FF',
  	'#99CC00',
  	'#99CC33',
  	'#CC0000',
  	'#CC0033',
  	'#CC0066',
  	'#CC0099',
  	'#CC00CC',
  	'#CC00FF',
  	'#CC3300',
  	'#CC3333',
  	'#CC3366',
  	'#CC3399',
  	'#CC33CC',
  	'#CC33FF',
  	'#CC6600',
  	'#CC6633',
  	'#CC9900',
  	'#CC9933',
  	'#CCCC00',
  	'#CCCC33',
  	'#FF0000',
  	'#FF0033',
  	'#FF0066',
  	'#FF0099',
  	'#FF00CC',
  	'#FF00FF',
  	'#FF3300',
  	'#FF3333',
  	'#FF3366',
  	'#FF3399',
  	'#FF33CC',
  	'#FF33FF',
  	'#FF6600',
  	'#FF6633',
  	'#FF9900',
  	'#FF9933',
  	'#FFCC00',
  	'#FFCC33'
  ];

  /**
   * Currently only WebKit-based Web Inspectors, Firefox >= v31,
   * and the Firebug extension (any Firefox version) are known
   * to support "%c" CSS customizations.
   *
   * TODO: add a `localStorage` variable to explicitly enable/disable colors
   */

  // eslint-disable-next-line complexity
  function useColors() {
  	// NB: In an Electron preload script, document will be defined but not fully
  	// initialized. Since we know we're in Chrome, we'll just detect this case
  	// explicitly
  	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
  		return true;
  	}

  	// Internet Explorer and Edge do not support colors.
  	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
  		return false;
  	}

  	// Is webkit? http://stackoverflow.com/a/16459606/376773
  	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
  		// Is firebug? http://stackoverflow.com/a/398120/376773
  		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
  		// Is firefox >= v31?
  		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
  		// Double check webkit in userAgent just in case we are in a worker
  		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
  }

  /**
   * Colorize log arguments if enabled.
   *
   * @api public
   */

  function formatArgs(args) {
  	args[0] = (this.useColors ? '%c' : '') +
  		this.namespace +
  		(this.useColors ? ' %c' : ' ') +
  		args[0] +
  		(this.useColors ? '%c ' : ' ') +
  		'+' + module.exports.humanize(this.diff);

  	if (!this.useColors) {
  		return;
  	}

  	const c = 'color: ' + this.color;
  	args.splice(1, 0, c, 'color: inherit');

  	// The final "%c" is somewhat tricky, because there could be other
  	// arguments passed either before or after the %c, so we need to
  	// figure out the correct index to insert the CSS into
  	let index = 0;
  	let lastC = 0;
  	args[0].replace(/%[a-zA-Z%]/g, match => {
  		if (match === '%%') {
  			return;
  		}
  		index++;
  		if (match === '%c') {
  			// We only are interested in the *last* %c
  			// (the user may have provided their own)
  			lastC = index;
  		}
  	});

  	args.splice(lastC, 0, c);
  }

  /**
   * Invokes `console.debug()` when available.
   * No-op when `console.debug` is not a "function".
   * If `console.debug` is not available, falls back
   * to `console.log`.
   *
   * @api public
   */
  exports.log = console.debug || console.log || (() => {});

  /**
   * Save `namespaces`.
   *
   * @param {String} namespaces
   * @api private
   */
  function save(namespaces) {
  	try {
  		if (namespaces) {
  			exports.storage.setItem('debug', namespaces);
  		} else {
  			exports.storage.removeItem('debug');
  		}
  	} catch (error) {
  		// Swallow
  		// XXX (@Qix-) should we be logging these?
  	}
  }

  /**
   * Load `namespaces`.
   *
   * @return {String} returns the previously persisted debug modes
   * @api private
   */
  function load() {
  	let r;
  	try {
  		r = exports.storage.getItem('debug');
  	} catch (error) {
  		// Swallow
  		// XXX (@Qix-) should we be logging these?
  	}

  	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  	if (!r && typeof process !== 'undefined' && 'env' in process) {
  		r = process.env.DEBUG;
  	}

  	return r;
  }

  /**
   * Localstorage attempts to return the localstorage.
   *
   * This is necessary because safari throws
   * when a user disables cookies/localstorage
   * and you attempt to access it.
   *
   * @return {LocalStorage}
   * @api private
   */

  function localstorage() {
  	try {
  		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
  		// The Browser also has localStorage in the global context.
  		return localStorage;
  	} catch (error) {
  		// Swallow
  		// XXX (@Qix-) should we be logging these?
  	}
  }

  module.exports = common(exports);

  const {formatters} = module.exports;

  /**
   * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
   */

  formatters.j = function (v) {
  	try {
  		return JSON.stringify(v);
  	} catch (error) {
  		return '[UnexpectedJSONParseError]: ' + error.message;
  	}
  };
  }(browser, browser.exports));

  var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
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
  var __awaiter$1 = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  };
  var __generator$1 = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
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
  Object.defineProperty(fetch, "__esModule", { value: true });
  var interceptFetch_1 = fetch.interceptFetch = void 0;
  var headers_polyfill_1$1 = lib$7;
  var toIsoResponse_1$1 = toIsoResponse$1;
  var uuid_1$1 = uuid;
  var debug$1 = browser.exports('fetch');
  var interceptFetch = function (observer, resolver) {
      var pureFetch = window.fetch;
      debug$1('replacing "window.fetch"...');
      window.fetch = function (input, init) { return __awaiter$1(void 0, void 0, void 0, function () {
          var request, url, method, isoRequest, response, isomorphicResponse;
          var _a;
          return __generator$1(this, function (_b) {
              switch (_b.label) {
                  case 0:
                      request = new Request(input, init);
                      url = typeof input === 'string' ? input : input.url;
                      method = request.method;
                      debug$1('[%s] %s', method, url);
                      _a = {
                          id: uuid_1$1.uuidv4(),
                          url: new URL(url, location.origin),
                          method: method,
                          headers: new headers_polyfill_1$1.Headers(request.headers),
                          credentials: request.credentials
                      };
                      return [4 /*yield*/, request.clone().text()];
                  case 1:
                      isoRequest = (_a.body = _b.sent(),
                          _a);
                      debug$1('isomorphic request', isoRequest);
                      observer.emit('request', isoRequest);
                      debug$1('awaiting for the mocked response...');
                      return [4 /*yield*/, resolver(isoRequest, request)];
                  case 2:
                      response = _b.sent();
                      debug$1('mocked response', response);
                      if (response) {
                          isomorphicResponse = toIsoResponse_1$1.toIsoResponse(response);
                          debug$1('derived isomorphic response', isomorphicResponse);
                          observer.emit('response', isoRequest, isomorphicResponse);
                          return [2 /*return*/, new Response(response.body, __assign(__assign({}, isomorphicResponse), { 
                                  // `Response.headers` cannot be instantiated with the `Headers` polyfill.
                                  // Apparently, it halts if the `Headers` class contains unknown properties
                                  // (i.e. the internal `Headers.map`).
                                  headers: headers_polyfill_1$1.flattenHeadersObject(response.headers || {}) }))];
                      }
                      debug$1('no mocked response found, bypassing...');
                      return [2 /*return*/, pureFetch(request).then(function (response) { return __awaiter$1(void 0, void 0, void 0, function () {
                              var cloneResponse, _a, _b, _c;
                              return __generator$1(this, function (_d) {
                                  switch (_d.label) {
                                      case 0:
                                          cloneResponse = response.clone();
                                          debug$1('original fetch performed', cloneResponse);
                                          _b = (_a = observer).emit;
                                          _c = ['response',
                                              isoRequest];
                                          return [4 /*yield*/, normalizeFetchResponse(cloneResponse)];
                                      case 1:
                                          _b.apply(_a, _c.concat([_d.sent()]));
                                          return [2 /*return*/, response];
                                  }
                              });
                          }); })];
              }
          });
      }); };
      return function () {
          debug$1('restoring modules...');
          window.fetch = pureFetch;
      };
  };
  interceptFetch_1 = fetch.interceptFetch = interceptFetch;
  function normalizeFetchResponse(response) {
      return __awaiter$1(this, void 0, void 0, function () {
          var _a;
          return __generator$1(this, function (_b) {
              switch (_b.label) {
                  case 0:
                      _a = {
                          status: response.status,
                          statusText: response.statusText,
                          headers: headers_polyfill_1$1.objectToHeaders(headers_polyfill_1$1.headersToObject(response.headers))
                      };
                      return [4 /*yield*/, response.text()];
                  case 1: return [2 /*return*/, (_a.body = _b.sent(),
                          _a)];
              }
          });
      });
  }

  var XMLHttpRequest = {};

  var XMLHttpRequestOverride = {};

  var lib = {};

  var dom$2 = {};

  var conventions$2 = {};

  /**
   * "Shallow freezes" an object to render it immutable.
   * Uses `Object.freeze` if available,
   * otherwise the immutability is only in the type.
   *
   * Is used to create "enum like" objects.
   *
   * @template T
   * @param {T} object the object to freeze
   * @param {Pick<ObjectConstructor, 'freeze'> = Object} oc `Object` by default,
   * 				allows to inject custom object constructor for tests
   * @returns {Readonly<T>}
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
   */
  function freeze(object, oc) {
  	if (oc === undefined) {
  		oc = Object;
  	}
  	return oc && typeof oc.freeze === 'function' ? oc.freeze(object) : object
  }

  /**
   * All mime types that are allowed as input to `DOMParser.parseFromString`
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString#Argument02 MDN
   * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#domparsersupportedtype WHATWG HTML Spec
   * @see DOMParser.prototype.parseFromString
   */
  var MIME_TYPE = freeze({
  	/**
  	 * `text/html`, the only mime type that triggers treating an XML document as HTML.
  	 *
  	 * @see DOMParser.SupportedType.isHTML
  	 * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
  	 * @see https://en.wikipedia.org/wiki/HTML Wikipedia
  	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
  	 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring WHATWG HTML Spec
  	 */
  	HTML: 'text/html',

  	/**
  	 * Helper method to check a mime type if it indicates an HTML document
  	 *
  	 * @param {string} [value]
  	 * @returns {boolean}
  	 *
  	 * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
  	 * @see https://en.wikipedia.org/wiki/HTML Wikipedia
  	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
  	 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring 	 */
  	isHTML: function (value) {
  		return value === MIME_TYPE.HTML
  	},

  	/**
  	 * `application/xml`, the standard mime type for XML documents.
  	 *
  	 * @see https://www.iana.org/assignments/media-types/application/xml IANA MimeType registration
  	 * @see https://tools.ietf.org/html/rfc7303#section-9.1 RFC 7303
  	 * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
  	 */
  	XML_APPLICATION: 'application/xml',

  	/**
  	 * `text/html`, an alias for `application/xml`.
  	 *
  	 * @see https://tools.ietf.org/html/rfc7303#section-9.2 RFC 7303
  	 * @see https://www.iana.org/assignments/media-types/text/xml IANA MimeType registration
  	 * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
  	 */
  	XML_TEXT: 'text/xml',

  	/**
  	 * `application/xhtml+xml`, indicates an XML document that has the default HTML namespace,
  	 * but is parsed as an XML document.
  	 *
  	 * @see https://www.iana.org/assignments/media-types/application/xhtml+xml IANA MimeType registration
  	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument WHATWG DOM Spec
  	 * @see https://en.wikipedia.org/wiki/XHTML Wikipedia
  	 */
  	XML_XHTML_APPLICATION: 'application/xhtml+xml',

  	/**
  	 * `image/svg+xml`,
  	 *
  	 * @see https://www.iana.org/assignments/media-types/image/svg+xml IANA MimeType registration
  	 * @see https://www.w3.org/TR/SVG11/ W3C SVG 1.1
  	 * @see https://en.wikipedia.org/wiki/Scalable_Vector_Graphics Wikipedia
  	 */
  	XML_SVG_IMAGE: 'image/svg+xml',
  });

  /**
   * Namespaces that are used in this code base.
   *
   * @see http://www.w3.org/TR/REC-xml-names
   */
  var NAMESPACE$3 = freeze({
  	/**
  	 * The XHTML namespace.
  	 *
  	 * @see http://www.w3.org/1999/xhtml
  	 */
  	HTML: 'http://www.w3.org/1999/xhtml',

  	/**
  	 * Checks if `uri` equals `NAMESPACE.HTML`.
  	 *
  	 * @param {string} [uri]
  	 *
  	 * @see NAMESPACE.HTML
  	 */
  	isHTML: function (uri) {
  		return uri === NAMESPACE$3.HTML
  	},

  	/**
  	 * The SVG namespace.
  	 *
  	 * @see http://www.w3.org/2000/svg
  	 */
  	SVG: 'http://www.w3.org/2000/svg',

  	/**
  	 * The `xml:` namespace.
  	 *
  	 * @see http://www.w3.org/XML/1998/namespace
  	 */
  	XML: 'http://www.w3.org/XML/1998/namespace',

  	/**
  	 * The `xmlns:` namespace
  	 *
  	 * @see https://www.w3.org/2000/xmlns/
  	 */
  	XMLNS: 'http://www.w3.org/2000/xmlns/',
  });

  conventions$2.freeze = freeze;
  conventions$2.MIME_TYPE = MIME_TYPE;
  conventions$2.NAMESPACE = NAMESPACE$3;

  var conventions$1 = conventions$2;

  var NAMESPACE$2 = conventions$1.NAMESPACE;

  /**
   * A prerequisite for `[].filter`, to drop elements that are empty
   * @param {string} input
   * @returns {boolean}
   */
  function notEmptyString (input) {
  	return input !== ''
  }
  /**
   * @see https://infra.spec.whatwg.org/#split-on-ascii-whitespace
   * @see https://infra.spec.whatwg.org/#ascii-whitespace
   *
   * @param {string} input
   * @returns {string[]} (can be empty)
   */
  function splitOnASCIIWhitespace(input) {
  	// U+0009 TAB, U+000A LF, U+000C FF, U+000D CR, U+0020 SPACE
  	return input ? input.split(/[\t\n\f\r ]+/).filter(notEmptyString) : []
  }

  /**
   * Adds element as a key to current if it is not already present.
   *
   * @param {Record<string, boolean | undefined>} current
   * @param {string} element
   * @returns {Record<string, boolean | undefined>}
   */
  function orderedSetReducer (current, element) {
  	if (!current.hasOwnProperty(element)) {
  		current[element] = true;
  	}
  	return current;
  }

  /**
   * @see https://infra.spec.whatwg.org/#ordered-set
   * @param {string} input
   * @returns {string[]}
   */
  function toOrderedSet(input) {
  	if (!input) return [];
  	var list = splitOnASCIIWhitespace(input);
  	return Object.keys(list.reduce(orderedSetReducer, {}))
  }

  /**
   * Uses `list.indexOf` to implement something like `Array.prototype.includes`,
   * which we can not rely on being available.
   *
   * @param {any[]} list
   * @returns {function(any): boolean}
   */
  function arrayIncludes (list) {
  	return function(element) {
  		return list && list.indexOf(element) !== -1;
  	}
  }

  function copy(src,dest){
  	for(var p in src){
  		dest[p] = src[p];
  	}
  }

  /**
  ^\w+\.prototype\.([_\w]+)\s*=\s*((?:.*\{\s*?[\r\n][\s\S]*?^})|\S.*?(?=[;\r\n]));?
  ^\w+\.prototype\.([_\w]+)\s*=\s*(\S.*?(?=[;\r\n]));?
   */
  function _extends(Class,Super){
  	var pt = Class.prototype;
  	if(!(pt instanceof Super)){
  		function t(){}		t.prototype = Super.prototype;
  		t = new t();
  		copy(pt,t);
  		Class.prototype = pt = t;
  	}
  	if(pt.constructor != Class){
  		if(typeof Class != 'function'){
  			console.error("unknown Class:"+Class);
  		}
  		pt.constructor = Class;
  	}
  }

  // Node Types
  var NodeType = {};
  var ELEMENT_NODE                = NodeType.ELEMENT_NODE                = 1;
  var ATTRIBUTE_NODE              = NodeType.ATTRIBUTE_NODE              = 2;
  var TEXT_NODE                   = NodeType.TEXT_NODE                   = 3;
  var CDATA_SECTION_NODE          = NodeType.CDATA_SECTION_NODE          = 4;
  var ENTITY_REFERENCE_NODE       = NodeType.ENTITY_REFERENCE_NODE       = 5;
  var ENTITY_NODE                 = NodeType.ENTITY_NODE                 = 6;
  var PROCESSING_INSTRUCTION_NODE = NodeType.PROCESSING_INSTRUCTION_NODE = 7;
  var COMMENT_NODE                = NodeType.COMMENT_NODE                = 8;
  var DOCUMENT_NODE               = NodeType.DOCUMENT_NODE               = 9;
  var DOCUMENT_TYPE_NODE          = NodeType.DOCUMENT_TYPE_NODE          = 10;
  var DOCUMENT_FRAGMENT_NODE      = NodeType.DOCUMENT_FRAGMENT_NODE      = 11;
  var NOTATION_NODE               = NodeType.NOTATION_NODE               = 12;

  // ExceptionCode
  var ExceptionCode = {};
  var ExceptionMessage = {};
  ExceptionCode.INDEX_SIZE_ERR              = ((ExceptionMessage[1]="Index size error"),1);
  ExceptionCode.DOMSTRING_SIZE_ERR          = ((ExceptionMessage[2]="DOMString size error"),2);
  var HIERARCHY_REQUEST_ERR       = ExceptionCode.HIERARCHY_REQUEST_ERR       = ((ExceptionMessage[3]="Hierarchy request error"),3);
  ExceptionCode.WRONG_DOCUMENT_ERR          = ((ExceptionMessage[4]="Wrong document"),4);
  ExceptionCode.INVALID_CHARACTER_ERR       = ((ExceptionMessage[5]="Invalid character"),5);
  ExceptionCode.NO_DATA_ALLOWED_ERR         = ((ExceptionMessage[6]="No data allowed"),6);
  ExceptionCode.NO_MODIFICATION_ALLOWED_ERR = ((ExceptionMessage[7]="No modification allowed"),7);
  var NOT_FOUND_ERR               = ExceptionCode.NOT_FOUND_ERR               = ((ExceptionMessage[8]="Not found"),8);
  ExceptionCode.NOT_SUPPORTED_ERR           = ((ExceptionMessage[9]="Not supported"),9);
  var INUSE_ATTRIBUTE_ERR         = ExceptionCode.INUSE_ATTRIBUTE_ERR         = ((ExceptionMessage[10]="Attribute in use"),10);
  //level2
  ExceptionCode.INVALID_STATE_ERR        	= ((ExceptionMessage[11]="Invalid state"),11);
  ExceptionCode.SYNTAX_ERR               	= ((ExceptionMessage[12]="Syntax error"),12);
  ExceptionCode.INVALID_MODIFICATION_ERR 	= ((ExceptionMessage[13]="Invalid modification"),13);
  ExceptionCode.NAMESPACE_ERR           	= ((ExceptionMessage[14]="Invalid namespace"),14);
  ExceptionCode.INVALID_ACCESS_ERR      	= ((ExceptionMessage[15]="Invalid access"),15);

  /**
   * DOM Level 2
   * Object DOMException
   * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
   * @see http://www.w3.org/TR/REC-DOM-Level-1/ecma-script-language-binding.html
   */
  function DOMException(code, message) {
  	if(message instanceof Error){
  		var error = message;
  	}else {
  		error = this;
  		Error.call(this, ExceptionMessage[code]);
  		this.message = ExceptionMessage[code];
  		if(Error.captureStackTrace) Error.captureStackTrace(this, DOMException);
  	}
  	error.code = code;
  	if(message) this.message = this.message + ": " + message;
  	return error;
  }DOMException.prototype = Error.prototype;
  copy(ExceptionCode,DOMException);

  /**
   * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-536297177
   * The NodeList interface provides the abstraction of an ordered collection of nodes, without defining or constraining how this collection is implemented. NodeList objects in the DOM are live.
   * The items in the NodeList are accessible via an integral index, starting from 0.
   */
  function NodeList() {
  }NodeList.prototype = {
  	/**
  	 * The number of nodes in the list. The range of valid child node indices is 0 to length-1 inclusive.
  	 * @standard level1
  	 */
  	length:0, 
  	/**
  	 * Returns the indexth item in the collection. If index is greater than or equal to the number of nodes in the list, this returns null.
  	 * @standard level1
  	 * @param index  unsigned long 
  	 *   Index into the collection.
  	 * @return Node
  	 * 	The node at the indexth position in the NodeList, or null if that is not a valid index. 
  	 */
  	item: function(index) {
  		return this[index] || null;
  	},
  	toString:function(isHTML,nodeFilter){
  		for(var buf = [], i = 0;i<this.length;i++){
  			serializeToString(this[i],buf,isHTML,nodeFilter);
  		}
  		return buf.join('');
  	}
  };

  function LiveNodeList(node,refresh){
  	this._node = node;
  	this._refresh = refresh;
  	_updateLiveList(this);
  }
  function _updateLiveList(list){
  	var inc = list._node._inc || list._node.ownerDocument._inc;
  	if(list._inc != inc){
  		var ls = list._refresh(list._node);
  		//console.log(ls.length)
  		__set__(list,'length',ls.length);
  		copy(ls,list);
  		list._inc = inc;
  	}
  }
  LiveNodeList.prototype.item = function(i){
  	_updateLiveList(this);
  	return this[i];
  };

  _extends(LiveNodeList,NodeList);

  /**
   * Objects implementing the NamedNodeMap interface are used
   * to represent collections of nodes that can be accessed by name.
   * Note that NamedNodeMap does not inherit from NodeList;
   * NamedNodeMaps are not maintained in any particular order.
   * Objects contained in an object implementing NamedNodeMap may also be accessed by an ordinal index,
   * but this is simply to allow convenient enumeration of the contents of a NamedNodeMap,
   * and does not imply that the DOM specifies an order to these Nodes.
   * NamedNodeMap objects in the DOM are live.
   * used for attributes or DocumentType entities 
   */
  function NamedNodeMap() {
  }
  function _findNodeIndex(list,node){
  	var i = list.length;
  	while(i--){
  		if(list[i] === node){return i}
  	}
  }

  function _addNamedNode(el,list,newAttr,oldAttr){
  	if(oldAttr){
  		list[_findNodeIndex(list,oldAttr)] = newAttr;
  	}else {
  		list[list.length++] = newAttr;
  	}
  	if(el){
  		newAttr.ownerElement = el;
  		var doc = el.ownerDocument;
  		if(doc){
  			oldAttr && _onRemoveAttribute(doc,el,oldAttr);
  			_onAddAttribute(doc,el,newAttr);
  		}
  	}
  }
  function _removeNamedNode(el,list,attr){
  	//console.log('remove attr:'+attr)
  	var i = _findNodeIndex(list,attr);
  	if(i>=0){
  		var lastIndex = list.length-1;
  		while(i<lastIndex){
  			list[i] = list[++i];
  		}
  		list.length = lastIndex;
  		if(el){
  			var doc = el.ownerDocument;
  			if(doc){
  				_onRemoveAttribute(doc,el,attr);
  				attr.ownerElement = null;
  			}
  		}
  	}else {
  		throw DOMException(NOT_FOUND_ERR,new Error(el.tagName+'@'+attr))
  	}
  }
  NamedNodeMap.prototype = {
  	length:0,
  	item:NodeList.prototype.item,
  	getNamedItem: function(key) {
  //		if(key.indexOf(':')>0 || key == 'xmlns'){
  //			return null;
  //		}
  		//console.log()
  		var i = this.length;
  		while(i--){
  			var attr = this[i];
  			//console.log(attr.nodeName,key)
  			if(attr.nodeName == key){
  				return attr;
  			}
  		}
  	},
  	setNamedItem: function(attr) {
  		var el = attr.ownerElement;
  		if(el && el!=this._ownerElement){
  			throw new DOMException(INUSE_ATTRIBUTE_ERR);
  		}
  		var oldAttr = this.getNamedItem(attr.nodeName);
  		_addNamedNode(this._ownerElement,this,attr,oldAttr);
  		return oldAttr;
  	},
  	/* returns Node */
  	setNamedItemNS: function(attr) {// raises: WRONG_DOCUMENT_ERR,NO_MODIFICATION_ALLOWED_ERR,INUSE_ATTRIBUTE_ERR
  		var el = attr.ownerElement, oldAttr;
  		if(el && el!=this._ownerElement){
  			throw new DOMException(INUSE_ATTRIBUTE_ERR);
  		}
  		oldAttr = this.getNamedItemNS(attr.namespaceURI,attr.localName);
  		_addNamedNode(this._ownerElement,this,attr,oldAttr);
  		return oldAttr;
  	},

  	/* returns Node */
  	removeNamedItem: function(key) {
  		var attr = this.getNamedItem(key);
  		_removeNamedNode(this._ownerElement,this,attr);
  		return attr;
  		
  		
  	},// raises: NOT_FOUND_ERR,NO_MODIFICATION_ALLOWED_ERR
  	
  	//for level2
  	removeNamedItemNS:function(namespaceURI,localName){
  		var attr = this.getNamedItemNS(namespaceURI,localName);
  		_removeNamedNode(this._ownerElement,this,attr);
  		return attr;
  	},
  	getNamedItemNS: function(namespaceURI, localName) {
  		var i = this.length;
  		while(i--){
  			var node = this[i];
  			if(node.localName == localName && node.namespaceURI == namespaceURI){
  				return node;
  			}
  		}
  		return null;
  	}
  };

  /**
   * The DOMImplementation interface represents an object providing methods
   * which are not dependent on any particular document.
   * Such an object is returned by the `Document.implementation` property.
   *
   * __The individual methods describe the differences compared to the specs.__
   *
   * @constructor
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation MDN
   * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-102161490 DOM Level 1 Core (Initial)
   * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-102161490 DOM Level 2 Core
   * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-102161490 DOM Level 3 Core
   * @see https://dom.spec.whatwg.org/#domimplementation DOM Living Standard
   */
  function DOMImplementation$1() {
  }

  DOMImplementation$1.prototype = {
  	/**
  	 * The DOMImplementation.hasFeature() method returns a Boolean flag indicating if a given feature is supported.
  	 * The different implementations fairly diverged in what kind of features were reported.
  	 * The latest version of the spec settled to force this method to always return true, where the functionality was accurate and in use.
  	 *
  	 * @deprecated It is deprecated and modern browsers return true in all cases.
  	 *
  	 * @param {string} feature
  	 * @param {string} [version]
  	 * @returns {boolean} always true
  	 *
  	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/hasFeature MDN
  	 * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-5CED94D7 DOM Level 1 Core
  	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-hasfeature DOM Living Standard
  	 */
  	hasFeature: function(feature, version) {
  			return true;
  	},
  	/**
  	 * Creates an XML Document object of the specified type with its document element.
  	 *
  	 * __It behaves slightly different from the description in the living standard__:
  	 * - There is no interface/class `XMLDocument`, it returns a `Document` instance.
  	 * - `contentType`, `encoding`, `mode`, `origin`, `url` fields are currently not declared.
  	 * - this implementation is not validating names or qualified names
  	 *   (when parsing XML strings, the SAX parser takes care of that)
  	 *
  	 * @param {string|null} namespaceURI
  	 * @param {string} qualifiedName
  	 * @param {DocumentType=null} doctype
  	 * @returns {Document}
  	 *
  	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocument MDN
  	 * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocument DOM Level 2 Core (initial)
  	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument  DOM Level 2 Core
  	 *
  	 * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
  	 * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
  	 * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
  	 */
  	createDocument: function(namespaceURI,  qualifiedName, doctype){
  		var doc = new Document();
  		doc.implementation = this;
  		doc.childNodes = new NodeList();
  		doc.doctype = doctype || null;
  		if (doctype){
  			doc.appendChild(doctype);
  		}
  		if (qualifiedName){
  			var root = doc.createElementNS(namespaceURI, qualifiedName);
  			doc.appendChild(root);
  		}
  		return doc;
  	},
  	/**
  	 * Returns a doctype, with the given `qualifiedName`, `publicId`, and `systemId`.
  	 *
  	 * __This behavior is slightly different from the in the specs__:
  	 * - this implementation is not validating names or qualified names
  	 *   (when parsing XML strings, the SAX parser takes care of that)
  	 *
  	 * @param {string} qualifiedName
  	 * @param {string} [publicId]
  	 * @param {string} [systemId]
  	 * @returns {DocumentType} which can either be used with `DOMImplementation.createDocument` upon document creation
  	 * 				  or can be put into the document via methods like `Node.insertBefore()` or `Node.replaceChild()`
  	 *
  	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocumentType MDN
  	 * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocType DOM Level 2 Core
  	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocumenttype DOM Living Standard
  	 *
  	 * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
  	 * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
  	 * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
  	 */
  	createDocumentType: function(qualifiedName, publicId, systemId){
  		var node = new DocumentType();
  		node.name = qualifiedName;
  		node.nodeName = qualifiedName;
  		node.publicId = publicId || '';
  		node.systemId = systemId || '';

  		return node;
  	}
  };


  /**
   * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-1950641247
   */

  function Node() {
  }
  Node.prototype = {
  	firstChild : null,
  	lastChild : null,
  	previousSibling : null,
  	nextSibling : null,
  	attributes : null,
  	parentNode : null,
  	childNodes : null,
  	ownerDocument : null,
  	nodeValue : null,
  	namespaceURI : null,
  	prefix : null,
  	localName : null,
  	// Modified in DOM Level 2:
  	insertBefore:function(newChild, refChild){//raises 
  		return _insertBefore(this,newChild,refChild);
  	},
  	replaceChild:function(newChild, oldChild){//raises 
  		this.insertBefore(newChild,oldChild);
  		if(oldChild){
  			this.removeChild(oldChild);
  		}
  	},
  	removeChild:function(oldChild){
  		return _removeChild(this,oldChild);
  	},
  	appendChild:function(newChild){
  		return this.insertBefore(newChild,null);
  	},
  	hasChildNodes:function(){
  		return this.firstChild != null;
  	},
  	cloneNode:function(deep){
  		return cloneNode(this.ownerDocument||this,this,deep);
  	},
  	// Modified in DOM Level 2:
  	normalize:function(){
  		var child = this.firstChild;
  		while(child){
  			var next = child.nextSibling;
  			if(next && next.nodeType == TEXT_NODE && child.nodeType == TEXT_NODE){
  				this.removeChild(next);
  				child.appendData(next.data);
  			}else {
  				child.normalize();
  				child = next;
  			}
  		}
  	},
    	// Introduced in DOM Level 2:
  	isSupported:function(feature, version){
  		return this.ownerDocument.implementation.hasFeature(feature,version);
  	},
      // Introduced in DOM Level 2:
      hasAttributes:function(){
      	return this.attributes.length>0;
      },
  	/**
  	 * Look up the prefix associated to the given namespace URI, starting from this node.
  	 * **The default namespace declarations are ignored by this method.**
  	 * See Namespace Prefix Lookup for details on the algorithm used by this method.
  	 *
  	 * _Note: The implementation seems to be incomplete when compared to the algorithm described in the specs._
  	 *
  	 * @param {string | null} namespaceURI
  	 * @returns {string | null}
  	 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespacePrefix
  	 * @see https://www.w3.org/TR/DOM-Level-3-Core/namespaces-algorithms.html#lookupNamespacePrefixAlgo
  	 * @see https://dom.spec.whatwg.org/#dom-node-lookupprefix
  	 * @see https://github.com/xmldom/xmldom/issues/322
  	 */
      lookupPrefix:function(namespaceURI){
      	var el = this;
      	while(el){
      		var map = el._nsMap;
      		//console.dir(map)
      		if(map){
      			for(var n in map){
      				if(map[n] == namespaceURI){
      					return n;
      				}
      			}
      		}
      		el = el.nodeType == ATTRIBUTE_NODE?el.ownerDocument : el.parentNode;
      	}
      	return null;
      },
      // Introduced in DOM Level 3:
      lookupNamespaceURI:function(prefix){
      	var el = this;
      	while(el){
      		var map = el._nsMap;
      		//console.dir(map)
      		if(map){
      			if(prefix in map){
      				return map[prefix] ;
      			}
      		}
      		el = el.nodeType == ATTRIBUTE_NODE?el.ownerDocument : el.parentNode;
      	}
      	return null;
      },
      // Introduced in DOM Level 3:
      isDefaultNamespace:function(namespaceURI){
      	var prefix = this.lookupPrefix(namespaceURI);
      	return prefix == null;
      }
  };


  function _xmlEncoder(c){
  	return c == '<' && '&lt;' ||
           c == '>' && '&gt;' ||
           c == '&' && '&amp;' ||
           c == '"' && '&quot;' ||
           '&#'+c.charCodeAt()+';'
  }


  copy(NodeType,Node);
  copy(NodeType,Node.prototype);

  /**
   * @param callback return true for continue,false for break
   * @return boolean true: break visit;
   */
  function _visitNode(node,callback){
  	if(callback(node)){
  		return true;
  	}
  	if(node = node.firstChild){
  		do{
  			if(_visitNode(node,callback)){return true}
          }while(node=node.nextSibling)
      }
  }



  function Document(){
  }

  function _onAddAttribute(doc,el,newAttr){
  	doc && doc._inc++;
  	var ns = newAttr.namespaceURI ;
  	if(ns === NAMESPACE$2.XMLNS){
  		//update namespace
  		el._nsMap[newAttr.prefix?newAttr.localName:''] = newAttr.value;
  	}
  }

  function _onRemoveAttribute(doc,el,newAttr,remove){
  	doc && doc._inc++;
  	var ns = newAttr.namespaceURI ;
  	if(ns === NAMESPACE$2.XMLNS){
  		//update namespace
  		delete el._nsMap[newAttr.prefix?newAttr.localName:''];
  	}
  }

  function _onUpdateChild(doc,el,newChild){
  	if(doc && doc._inc){
  		doc._inc++;
  		//update childNodes
  		var cs = el.childNodes;
  		if(newChild){
  			cs[cs.length++] = newChild;
  		}else {
  			//console.log(1)
  			var child = el.firstChild;
  			var i = 0;
  			while(child){
  				cs[i++] = child;
  				child =child.nextSibling;
  			}
  			cs.length = i;
  		}
  	}
  }

  /**
   * attributes;
   * children;
   * 
   * writeable properties:
   * nodeValue,Attr:value,CharacterData:data
   * prefix
   */
  function _removeChild(parentNode,child){
  	var previous = child.previousSibling;
  	var next = child.nextSibling;
  	if(previous){
  		previous.nextSibling = next;
  	}else {
  		parentNode.firstChild = next;
  	}
  	if(next){
  		next.previousSibling = previous;
  	}else {
  		parentNode.lastChild = previous;
  	}
  	_onUpdateChild(parentNode.ownerDocument,parentNode);
  	return child;
  }
  /**
   * preformance key(refChild == null)
   */
  function _insertBefore(parentNode,newChild,nextChild){
  	var cp = newChild.parentNode;
  	if(cp){
  		cp.removeChild(newChild);//remove and update
  	}
  	if(newChild.nodeType === DOCUMENT_FRAGMENT_NODE){
  		var newFirst = newChild.firstChild;
  		if (newFirst == null) {
  			return newChild;
  		}
  		var newLast = newChild.lastChild;
  	}else {
  		newFirst = newLast = newChild;
  	}
  	var pre = nextChild ? nextChild.previousSibling : parentNode.lastChild;

  	newFirst.previousSibling = pre;
  	newLast.nextSibling = nextChild;
  	
  	
  	if(pre){
  		pre.nextSibling = newFirst;
  	}else {
  		parentNode.firstChild = newFirst;
  	}
  	if(nextChild == null){
  		parentNode.lastChild = newLast;
  	}else {
  		nextChild.previousSibling = newLast;
  	}
  	do{
  		newFirst.parentNode = parentNode;
  	}while(newFirst !== newLast && (newFirst= newFirst.nextSibling))
  	_onUpdateChild(parentNode.ownerDocument||parentNode,parentNode);
  	//console.log(parentNode.lastChild.nextSibling == null)
  	if (newChild.nodeType == DOCUMENT_FRAGMENT_NODE) {
  		newChild.firstChild = newChild.lastChild = null;
  	}
  	return newChild;
  }
  function _appendSingleChild(parentNode,newChild){
  	var cp = newChild.parentNode;
  	if(cp){
  		var pre = parentNode.lastChild;
  		cp.removeChild(newChild);//remove and update
  		var pre = parentNode.lastChild;
  	}
  	var pre = parentNode.lastChild;
  	newChild.parentNode = parentNode;
  	newChild.previousSibling = pre;
  	newChild.nextSibling = null;
  	if(pre){
  		pre.nextSibling = newChild;
  	}else {
  		parentNode.firstChild = newChild;
  	}
  	parentNode.lastChild = newChild;
  	_onUpdateChild(parentNode.ownerDocument,parentNode,newChild);
  	return newChild;
  	//console.log("__aa",parentNode.lastChild.nextSibling == null)
  }
  Document.prototype = {
  	//implementation : null,
  	nodeName :  '#document',
  	nodeType :  DOCUMENT_NODE,
  	/**
  	 * The DocumentType node of the document.
  	 *
  	 * @readonly
  	 * @type DocumentType
  	 */
  	doctype :  null,
  	documentElement :  null,
  	_inc : 1,

  	insertBefore :  function(newChild, refChild){//raises
  		if(newChild.nodeType == DOCUMENT_FRAGMENT_NODE){
  			var child = newChild.firstChild;
  			while(child){
  				var next = child.nextSibling;
  				this.insertBefore(child,refChild);
  				child = next;
  			}
  			return newChild;
  		}
  		if(this.documentElement == null && newChild.nodeType == ELEMENT_NODE){
  			this.documentElement = newChild;
  		}

  		return _insertBefore(this,newChild,refChild),(newChild.ownerDocument = this),newChild;
  	},
  	removeChild :  function(oldChild){
  		if(this.documentElement == oldChild){
  			this.documentElement = null;
  		}
  		return _removeChild(this,oldChild);
  	},
  	// Introduced in DOM Level 2:
  	importNode : function(importedNode,deep){
  		return importNode(this,importedNode,deep);
  	},
  	// Introduced in DOM Level 2:
  	getElementById :	function(id){
  		var rtv = null;
  		_visitNode(this.documentElement,function(node){
  			if(node.nodeType == ELEMENT_NODE){
  				if(node.getAttribute('id') == id){
  					rtv = node;
  					return true;
  				}
  			}
  		});
  		return rtv;
  	},

  	/**
  	 * The `getElementsByClassName` method of `Document` interface returns an array-like object
  	 * of all child elements which have **all** of the given class name(s).
  	 *
  	 * Returns an empty list if `classeNames` is an empty string or only contains HTML white space characters.
  	 *
  	 *
  	 * Warning: This is a live LiveNodeList.
  	 * Changes in the DOM will reflect in the array as the changes occur.
  	 * If an element selected by this array no longer qualifies for the selector,
  	 * it will automatically be removed. Be aware of this for iteration purposes.
  	 *
  	 * @param {string} classNames is a string representing the class name(s) to match; multiple class names are separated by (ASCII-)whitespace
  	 *
  	 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
  	 * @see https://dom.spec.whatwg.org/#concept-getelementsbyclassname
  	 */
  	getElementsByClassName: function(classNames) {
  		var classNamesSet = toOrderedSet(classNames);
  		return new LiveNodeList(this, function(base) {
  			var ls = [];
  			if (classNamesSet.length > 0) {
  				_visitNode(base.documentElement, function(node) {
  					if(node !== base && node.nodeType === ELEMENT_NODE) {
  						var nodeClassNames = node.getAttribute('class');
  						// can be null if the attribute does not exist
  						if (nodeClassNames) {
  							// before splitting and iterating just compare them for the most common case
  							var matches = classNames === nodeClassNames;
  							if (!matches) {
  								var nodeClassNamesSet = toOrderedSet(nodeClassNames);
  								matches = classNamesSet.every(arrayIncludes(nodeClassNamesSet));
  							}
  							if(matches) {
  								ls.push(node);
  							}
  						}
  					}
  				});
  			}
  			return ls;
  		});
  	},

  	//document factory method:
  	createElement :	function(tagName){
  		var node = new Element();
  		node.ownerDocument = this;
  		node.nodeName = tagName;
  		node.tagName = tagName;
  		node.localName = tagName;
  		node.childNodes = new NodeList();
  		var attrs	= node.attributes = new NamedNodeMap();
  		attrs._ownerElement = node;
  		return node;
  	},
  	createDocumentFragment :	function(){
  		var node = new DocumentFragment();
  		node.ownerDocument = this;
  		node.childNodes = new NodeList();
  		return node;
  	},
  	createTextNode :	function(data){
  		var node = new Text();
  		node.ownerDocument = this;
  		node.appendData(data);
  		return node;
  	},
  	createComment :	function(data){
  		var node = new Comment();
  		node.ownerDocument = this;
  		node.appendData(data);
  		return node;
  	},
  	createCDATASection :	function(data){
  		var node = new CDATASection();
  		node.ownerDocument = this;
  		node.appendData(data);
  		return node;
  	},
  	createProcessingInstruction :	function(target,data){
  		var node = new ProcessingInstruction();
  		node.ownerDocument = this;
  		node.tagName = node.target = target;
  		node.nodeValue= node.data = data;
  		return node;
  	},
  	createAttribute :	function(name){
  		var node = new Attr();
  		node.ownerDocument	= this;
  		node.name = name;
  		node.nodeName	= name;
  		node.localName = name;
  		node.specified = true;
  		return node;
  	},
  	createEntityReference :	function(name){
  		var node = new EntityReference();
  		node.ownerDocument	= this;
  		node.nodeName	= name;
  		return node;
  	},
  	// Introduced in DOM Level 2:
  	createElementNS :	function(namespaceURI,qualifiedName){
  		var node = new Element();
  		var pl = qualifiedName.split(':');
  		var attrs	= node.attributes = new NamedNodeMap();
  		node.childNodes = new NodeList();
  		node.ownerDocument = this;
  		node.nodeName = qualifiedName;
  		node.tagName = qualifiedName;
  		node.namespaceURI = namespaceURI;
  		if(pl.length == 2){
  			node.prefix = pl[0];
  			node.localName = pl[1];
  		}else {
  			//el.prefix = null;
  			node.localName = qualifiedName;
  		}
  		attrs._ownerElement = node;
  		return node;
  	},
  	// Introduced in DOM Level 2:
  	createAttributeNS :	function(namespaceURI,qualifiedName){
  		var node = new Attr();
  		var pl = qualifiedName.split(':');
  		node.ownerDocument = this;
  		node.nodeName = qualifiedName;
  		node.name = qualifiedName;
  		node.namespaceURI = namespaceURI;
  		node.specified = true;
  		if(pl.length == 2){
  			node.prefix = pl[0];
  			node.localName = pl[1];
  		}else {
  			//el.prefix = null;
  			node.localName = qualifiedName;
  		}
  		return node;
  	}
  };
  _extends(Document,Node);


  function Element() {
  	this._nsMap = {};
  }Element.prototype = {
  	nodeType : ELEMENT_NODE,
  	hasAttribute : function(name){
  		return this.getAttributeNode(name)!=null;
  	},
  	getAttribute : function(name){
  		var attr = this.getAttributeNode(name);
  		return attr && attr.value || '';
  	},
  	getAttributeNode : function(name){
  		return this.attributes.getNamedItem(name);
  	},
  	setAttribute : function(name, value){
  		var attr = this.ownerDocument.createAttribute(name);
  		attr.value = attr.nodeValue = "" + value;
  		this.setAttributeNode(attr);
  	},
  	removeAttribute : function(name){
  		var attr = this.getAttributeNode(name);
  		attr && this.removeAttributeNode(attr);
  	},
  	
  	//four real opeartion method
  	appendChild:function(newChild){
  		if(newChild.nodeType === DOCUMENT_FRAGMENT_NODE){
  			return this.insertBefore(newChild,null);
  		}else {
  			return _appendSingleChild(this,newChild);
  		}
  	},
  	setAttributeNode : function(newAttr){
  		return this.attributes.setNamedItem(newAttr);
  	},
  	setAttributeNodeNS : function(newAttr){
  		return this.attributes.setNamedItemNS(newAttr);
  	},
  	removeAttributeNode : function(oldAttr){
  		//console.log(this == oldAttr.ownerElement)
  		return this.attributes.removeNamedItem(oldAttr.nodeName);
  	},
  	//get real attribute name,and remove it by removeAttributeNode
  	removeAttributeNS : function(namespaceURI, localName){
  		var old = this.getAttributeNodeNS(namespaceURI, localName);
  		old && this.removeAttributeNode(old);
  	},
  	
  	hasAttributeNS : function(namespaceURI, localName){
  		return this.getAttributeNodeNS(namespaceURI, localName)!=null;
  	},
  	getAttributeNS : function(namespaceURI, localName){
  		var attr = this.getAttributeNodeNS(namespaceURI, localName);
  		return attr && attr.value || '';
  	},
  	setAttributeNS : function(namespaceURI, qualifiedName, value){
  		var attr = this.ownerDocument.createAttributeNS(namespaceURI, qualifiedName);
  		attr.value = attr.nodeValue = "" + value;
  		this.setAttributeNode(attr);
  	},
  	getAttributeNodeNS : function(namespaceURI, localName){
  		return this.attributes.getNamedItemNS(namespaceURI, localName);
  	},
  	
  	getElementsByTagName : function(tagName){
  		return new LiveNodeList(this,function(base){
  			var ls = [];
  			_visitNode(base,function(node){
  				if(node !== base && node.nodeType == ELEMENT_NODE && (tagName === '*' || node.tagName == tagName)){
  					ls.push(node);
  				}
  			});
  			return ls;
  		});
  	},
  	getElementsByTagNameNS : function(namespaceURI, localName){
  		return new LiveNodeList(this,function(base){
  			var ls = [];
  			_visitNode(base,function(node){
  				if(node !== base && node.nodeType === ELEMENT_NODE && (namespaceURI === '*' || node.namespaceURI === namespaceURI) && (localName === '*' || node.localName == localName)){
  					ls.push(node);
  				}
  			});
  			return ls;
  			
  		});
  	}
  };
  Document.prototype.getElementsByTagName = Element.prototype.getElementsByTagName;
  Document.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS;


  _extends(Element,Node);
  function Attr() {
  }Attr.prototype.nodeType = ATTRIBUTE_NODE;
  _extends(Attr,Node);


  function CharacterData() {
  }CharacterData.prototype = {
  	data : '',
  	substringData : function(offset, count) {
  		return this.data.substring(offset, offset+count);
  	},
  	appendData: function(text) {
  		text = this.data+text;
  		this.nodeValue = this.data = text;
  		this.length = text.length;
  	},
  	insertData: function(offset,text) {
  		this.replaceData(offset,0,text);
  	
  	},
  	appendChild:function(newChild){
  		throw new Error(ExceptionMessage[HIERARCHY_REQUEST_ERR])
  	},
  	deleteData: function(offset, count) {
  		this.replaceData(offset,count,"");
  	},
  	replaceData: function(offset, count, text) {
  		var start = this.data.substring(0,offset);
  		var end = this.data.substring(offset+count);
  		text = start + text + end;
  		this.nodeValue = this.data = text;
  		this.length = text.length;
  	}
  };
  _extends(CharacterData,Node);
  function Text() {
  }Text.prototype = {
  	nodeName : "#text",
  	nodeType : TEXT_NODE,
  	splitText : function(offset) {
  		var text = this.data;
  		var newText = text.substring(offset);
  		text = text.substring(0, offset);
  		this.data = this.nodeValue = text;
  		this.length = text.length;
  		var newNode = this.ownerDocument.createTextNode(newText);
  		if(this.parentNode){
  			this.parentNode.insertBefore(newNode, this.nextSibling);
  		}
  		return newNode;
  	}
  };
  _extends(Text,CharacterData);
  function Comment() {
  }Comment.prototype = {
  	nodeName : "#comment",
  	nodeType : COMMENT_NODE
  };
  _extends(Comment,CharacterData);

  function CDATASection() {
  }CDATASection.prototype = {
  	nodeName : "#cdata-section",
  	nodeType : CDATA_SECTION_NODE
  };
  _extends(CDATASection,CharacterData);


  function DocumentType() {
  }DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE;
  _extends(DocumentType,Node);

  function Notation() {
  }Notation.prototype.nodeType = NOTATION_NODE;
  _extends(Notation,Node);

  function Entity() {
  }Entity.prototype.nodeType = ENTITY_NODE;
  _extends(Entity,Node);

  function EntityReference() {
  }EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE;
  _extends(EntityReference,Node);

  function DocumentFragment() {
  }DocumentFragment.prototype.nodeName =	"#document-fragment";
  DocumentFragment.prototype.nodeType =	DOCUMENT_FRAGMENT_NODE;
  _extends(DocumentFragment,Node);


  function ProcessingInstruction() {
  }
  ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE;
  _extends(ProcessingInstruction,Node);
  function XMLSerializer(){}
  XMLSerializer.prototype.serializeToString = function(node,isHtml,nodeFilter){
  	return nodeSerializeToString.call(node,isHtml,nodeFilter);
  };
  Node.prototype.toString = nodeSerializeToString;
  function nodeSerializeToString(isHtml,nodeFilter){
  	var buf = [];
  	var refNode = this.nodeType == 9 && this.documentElement || this;
  	var prefix = refNode.prefix;
  	var uri = refNode.namespaceURI;
  	
  	if(uri && prefix == null){
  		//console.log(prefix)
  		var prefix = refNode.lookupPrefix(uri);
  		if(prefix == null){
  			//isHTML = true;
  			var visibleNamespaces=[
  			{namespace:uri,prefix:null}
  			//{namespace:uri,prefix:''}
  			];
  		}
  	}
  	serializeToString(this,buf,isHtml,nodeFilter,visibleNamespaces);
  	//console.log('###',this.nodeType,uri,prefix,buf.join(''))
  	return buf.join('');
  }

  function needNamespaceDefine(node, isHTML, visibleNamespaces) {
  	var prefix = node.prefix || '';
  	var uri = node.namespaceURI;
  	// According to [Namespaces in XML 1.0](https://www.w3.org/TR/REC-xml-names/#ns-using) ,
  	// and more specifically https://www.w3.org/TR/REC-xml-names/#nsc-NoPrefixUndecl :
  	// > In a namespace declaration for a prefix [...], the attribute value MUST NOT be empty.
  	// in a similar manner [Namespaces in XML 1.1](https://www.w3.org/TR/xml-names11/#ns-using)
  	// and more specifically https://www.w3.org/TR/xml-names11/#nsc-NSDeclared :
  	// > [...] Furthermore, the attribute value [...] must not be an empty string.
  	// so serializing empty namespace value like xmlns:ds="" would produce an invalid XML document.
  	if (!uri) {
  		return false;
  	}
  	if (prefix === "xml" && uri === NAMESPACE$2.XML || uri === NAMESPACE$2.XMLNS) {
  		return false;
  	}
  	
  	var i = visibleNamespaces.length; 
  	while (i--) {
  		var ns = visibleNamespaces[i];
  		// get namespace prefix
  		if (ns.prefix === prefix) {
  			return ns.namespace !== uri;
  		}
  	}
  	return true;
  }
  /**
   * Well-formed constraint: No < in Attribute Values
   * The replacement text of any entity referred to directly or indirectly in an attribute value must not contain a <.
   * @see https://www.w3.org/TR/xml/#CleanAttrVals
   * @see https://www.w3.org/TR/xml/#NT-AttValue
   */
  function addSerializedAttribute(buf, qualifiedName, value) {
  	buf.push(' ', qualifiedName, '="', value.replace(/[<&"]/g,_xmlEncoder), '"');
  }

  function serializeToString(node,buf,isHTML,nodeFilter,visibleNamespaces){
  	if (!visibleNamespaces) {
  		visibleNamespaces = [];
  	}

  	if(nodeFilter){
  		node = nodeFilter(node);
  		if(node){
  			if(typeof node == 'string'){
  				buf.push(node);
  				return;
  			}
  		}else {
  			return;
  		}
  		//buf.sort.apply(attrs, attributeSorter);
  	}

  	switch(node.nodeType){
  	case ELEMENT_NODE:
  		var attrs = node.attributes;
  		var len = attrs.length;
  		var child = node.firstChild;
  		var nodeName = node.tagName;
  		
  		isHTML = NAMESPACE$2.isHTML(node.namespaceURI) || isHTML;

  		var prefixedNodeName = nodeName;
  		if (!isHTML && !node.prefix && node.namespaceURI) {
  			var defaultNS;
  			// lookup current default ns from `xmlns` attribute
  			for (var ai = 0; ai < attrs.length; ai++) {
  				if (attrs.item(ai).name === 'xmlns') {
  					defaultNS = attrs.item(ai).value;
  					break
  				}
  			}
  			if (!defaultNS) {
  				// lookup current default ns in visibleNamespaces
  				for (var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--) {
  					var namespace = visibleNamespaces[nsi];
  					if (namespace.prefix === '' && namespace.namespace === node.namespaceURI) {
  						defaultNS = namespace.namespace;
  						break
  					}
  				}
  			}
  			if (defaultNS !== node.namespaceURI) {
  				for (var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--) {
  					var namespace = visibleNamespaces[nsi];
  					if (namespace.namespace === node.namespaceURI) {
  						if (namespace.prefix) {
  							prefixedNodeName = namespace.prefix + ':' + nodeName;
  						}
  						break
  					}
  				}
  			}
  		}

  		buf.push('<', prefixedNodeName);

  		for(var i=0;i<len;i++){
  			// add namespaces for attributes
  			var attr = attrs.item(i);
  			if (attr.prefix == 'xmlns') {
  				visibleNamespaces.push({ prefix: attr.localName, namespace: attr.value });
  			}else if(attr.nodeName == 'xmlns'){
  				visibleNamespaces.push({ prefix: '', namespace: attr.value });
  			}
  		}

  		for(var i=0;i<len;i++){
  			var attr = attrs.item(i);
  			if (needNamespaceDefine(attr,isHTML, visibleNamespaces)) {
  				var prefix = attr.prefix||'';
  				var uri = attr.namespaceURI;
  				addSerializedAttribute(buf, prefix ? 'xmlns:' + prefix : "xmlns", uri);
  				visibleNamespaces.push({ prefix: prefix, namespace:uri });
  			}
  			serializeToString(attr,buf,isHTML,nodeFilter,visibleNamespaces);
  		}

  		// add namespace for current node		
  		if (nodeName === prefixedNodeName && needNamespaceDefine(node, isHTML, visibleNamespaces)) {
  			var prefix = node.prefix||'';
  			var uri = node.namespaceURI;
  			addSerializedAttribute(buf, prefix ? 'xmlns:' + prefix : "xmlns", uri);
  			visibleNamespaces.push({ prefix: prefix, namespace:uri });
  		}
  		
  		if(child || isHTML && !/^(?:meta|link|img|br|hr|input)$/i.test(nodeName)){
  			buf.push('>');
  			//if is cdata child node
  			if(isHTML && /^script$/i.test(nodeName)){
  				while(child){
  					if(child.data){
  						buf.push(child.data);
  					}else {
  						serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
  					}
  					child = child.nextSibling;
  				}
  			}else
  			{
  				while(child){
  					serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
  					child = child.nextSibling;
  				}
  			}
  			buf.push('</',prefixedNodeName,'>');
  		}else {
  			buf.push('/>');
  		}
  		// remove added visible namespaces
  		//visibleNamespaces.length = startVisibleNamespaces;
  		return;
  	case DOCUMENT_NODE:
  	case DOCUMENT_FRAGMENT_NODE:
  		var child = node.firstChild;
  		while(child){
  			serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
  			child = child.nextSibling;
  		}
  		return;
  	case ATTRIBUTE_NODE:
  		return addSerializedAttribute(buf, node.name, node.value);
  	case TEXT_NODE:
  		/**
  		 * The ampersand character (&) and the left angle bracket (<) must not appear in their literal form,
  		 * except when used as markup delimiters, or within a comment, a processing instruction, or a CDATA section.
  		 * If they are needed elsewhere, they must be escaped using either numeric character references or the strings
  		 * `&amp;` and `&lt;` respectively.
  		 * The right angle bracket (>) may be represented using the string " &gt; ", and must, for compatibility,
  		 * be escaped using either `&gt;` or a character reference when it appears in the string `]]>` in content,
  		 * when that string is not marking the end of a CDATA section.
  		 *
  		 * In the content of elements, character data is any string of characters
  		 * which does not contain the start-delimiter of any markup
  		 * and does not include the CDATA-section-close delimiter, `]]>`.
  		 *
  		 * @see https://www.w3.org/TR/xml/#NT-CharData
  		 */
  		return buf.push(node.data
  			.replace(/[<&]/g,_xmlEncoder)
  			.replace(/]]>/g, ']]&gt;')
  		);
  	case CDATA_SECTION_NODE:
  		return buf.push( '<![CDATA[',node.data,']]>');
  	case COMMENT_NODE:
  		return buf.push( "<!--",node.data,"-->");
  	case DOCUMENT_TYPE_NODE:
  		var pubid = node.publicId;
  		var sysid = node.systemId;
  		buf.push('<!DOCTYPE ',node.name);
  		if(pubid){
  			buf.push(' PUBLIC ', pubid);
  			if (sysid && sysid!='.') {
  				buf.push(' ', sysid);
  			}
  			buf.push('>');
  		}else if(sysid && sysid!='.'){
  			buf.push(' SYSTEM ', sysid, '>');
  		}else {
  			var sub = node.internalSubset;
  			if(sub){
  				buf.push(" [",sub,"]");
  			}
  			buf.push(">");
  		}
  		return;
  	case PROCESSING_INSTRUCTION_NODE:
  		return buf.push( "<?",node.target," ",node.data,"?>");
  	case ENTITY_REFERENCE_NODE:
  		return buf.push( '&',node.nodeName,';');
  	//case ENTITY_NODE:
  	//case NOTATION_NODE:
  	default:
  		buf.push('??',node.nodeName);
  	}
  }
  function importNode(doc,node,deep){
  	var node2;
  	switch (node.nodeType) {
  	case ELEMENT_NODE:
  		node2 = node.cloneNode(false);
  		node2.ownerDocument = doc;
  		//var attrs = node2.attributes;
  		//var len = attrs.length;
  		//for(var i=0;i<len;i++){
  			//node2.setAttributeNodeNS(importNode(doc,attrs.item(i),deep));
  		//}
  	case DOCUMENT_FRAGMENT_NODE:
  		break;
  	case ATTRIBUTE_NODE:
  		deep = true;
  		break;
  	//case ENTITY_REFERENCE_NODE:
  	//case PROCESSING_INSTRUCTION_NODE:
  	////case TEXT_NODE:
  	//case CDATA_SECTION_NODE:
  	//case COMMENT_NODE:
  	//	deep = false;
  	//	break;
  	//case DOCUMENT_NODE:
  	//case DOCUMENT_TYPE_NODE:
  	//cannot be imported.
  	//case ENTITY_NODE:
  	//case NOTATION_NODE：
  	//can not hit in level3
  	//default:throw e;
  	}
  	if(!node2){
  		node2 = node.cloneNode(false);//false
  	}
  	node2.ownerDocument = doc;
  	node2.parentNode = null;
  	if(deep){
  		var child = node.firstChild;
  		while(child){
  			node2.appendChild(importNode(doc,child,deep));
  			child = child.nextSibling;
  		}
  	}
  	return node2;
  }
  //
  //var _relationMap = {firstChild:1,lastChild:1,previousSibling:1,nextSibling:1,
  //					attributes:1,childNodes:1,parentNode:1,documentElement:1,doctype,};
  function cloneNode(doc,node,deep){
  	var node2 = new node.constructor();
  	for(var n in node){
  		var v = node[n];
  		if(typeof v != 'object' ){
  			if(v != node2[n]){
  				node2[n] = v;
  			}
  		}
  	}
  	if(node.childNodes){
  		node2.childNodes = new NodeList();
  	}
  	node2.ownerDocument = doc;
  	switch (node2.nodeType) {
  	case ELEMENT_NODE:
  		var attrs	= node.attributes;
  		var attrs2	= node2.attributes = new NamedNodeMap();
  		var len = attrs.length;
  		attrs2._ownerElement = node2;
  		for(var i=0;i<len;i++){
  			node2.setAttributeNode(cloneNode(doc,attrs.item(i),true));
  		}
  		break;	case ATTRIBUTE_NODE:
  		deep = true;
  	}
  	if(deep){
  		var child = node.firstChild;
  		while(child){
  			node2.appendChild(cloneNode(doc,child,deep));
  			child = child.nextSibling;
  		}
  	}
  	return node2;
  }

  function __set__(object,key,value){
  	object[key] = value;
  }
  //do dynamic
  try{
  	if(Object.defineProperty){
  		Object.defineProperty(LiveNodeList.prototype,'length',{
  			get:function(){
  				_updateLiveList(this);
  				return this.$$length;
  			}
  		});

  		Object.defineProperty(Node.prototype,'textContent',{
  			get:function(){
  				return getTextContent(this);
  			},

  			set:function(data){
  				switch(this.nodeType){
  				case ELEMENT_NODE:
  				case DOCUMENT_FRAGMENT_NODE:
  					while(this.firstChild){
  						this.removeChild(this.firstChild);
  					}
  					if(data || String(data)){
  						this.appendChild(this.ownerDocument.createTextNode(data));
  					}
  					break;

  				default:
  					this.data = data;
  					this.value = data;
  					this.nodeValue = data;
  				}
  			}
  		});
  		
  		function getTextContent(node){
  			switch(node.nodeType){
  			case ELEMENT_NODE:
  			case DOCUMENT_FRAGMENT_NODE:
  				var buf = [];
  				node = node.firstChild;
  				while(node){
  					if(node.nodeType!==7 && node.nodeType !==8){
  						buf.push(getTextContent(node));
  					}
  					node = node.nextSibling;
  				}
  				return buf.join('');
  			default:
  				return node.nodeValue;
  			}
  		}

  		__set__ = function(object,key,value){
  			//console.log(value)
  			object['$$'+key] = value;
  		};
  	}
  }catch(e){//ie8
  }

  //if(typeof require == 'function'){
  	dom$2.DocumentType = DocumentType;
  	dom$2.DOMException = DOMException;
  	dom$2.DOMImplementation = DOMImplementation$1;
  	dom$2.Element = Element;
  	dom$2.Node = Node;
  	dom$2.NodeList = NodeList;
  	dom$2.XMLSerializer = XMLSerializer;

  var domParser = {};

  var entities$1 = {};

  (function (exports) {
  var freeze = conventions$2.freeze;

  /**
   * The entities that are predefined in every XML document.
   *
   * @see https://www.w3.org/TR/2006/REC-xml11-20060816/#sec-predefined-ent W3C XML 1.1
   * @see https://www.w3.org/TR/2008/REC-xml-20081126/#sec-predefined-ent W3C XML 1.0
   * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Predefined_entities_in_XML Wikipedia
   */
  exports.XML_ENTITIES = freeze({amp:'&', apos:"'", gt:'>', lt:'<', quot:'"'});

  /**
   * A map of currently 241 entities that are detected in an HTML document.
   * They contain all entries from `XML_ENTITIES`.
   *
   * @see XML_ENTITIES
   * @see DOMParser.parseFromString
   * @see DOMImplementation.prototype.createHTMLDocument
   * @see https://html.spec.whatwg.org/#named-character-references WHATWG HTML(5) Spec
   * @see https://www.w3.org/TR/xml-entity-names/ W3C XML Entity Names
   * @see https://www.w3.org/TR/html4/sgml/entities.html W3C HTML4/SGML
   * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Character_entity_references_in_HTML Wikipedia (HTML)
   * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Entities_representing_special_characters_in_XHTML Wikpedia (XHTML)
   */
  exports.HTML_ENTITIES = freeze({
         lt: '<',
         gt: '>',
         amp: '&',
         quot: '"',
         apos: "'",
         Agrave: "À",
         Aacute: "Á",
         Acirc: "Â",
         Atilde: "Ã",
         Auml: "Ä",
         Aring: "Å",
         AElig: "Æ",
         Ccedil: "Ç",
         Egrave: "È",
         Eacute: "É",
         Ecirc: "Ê",
         Euml: "Ë",
         Igrave: "Ì",
         Iacute: "Í",
         Icirc: "Î",
         Iuml: "Ï",
         ETH: "Ð",
         Ntilde: "Ñ",
         Ograve: "Ò",
         Oacute: "Ó",
         Ocirc: "Ô",
         Otilde: "Õ",
         Ouml: "Ö",
         Oslash: "Ø",
         Ugrave: "Ù",
         Uacute: "Ú",
         Ucirc: "Û",
         Uuml: "Ü",
         Yacute: "Ý",
         THORN: "Þ",
         szlig: "ß",
         agrave: "à",
         aacute: "á",
         acirc: "â",
         atilde: "ã",
         auml: "ä",
         aring: "å",
         aelig: "æ",
         ccedil: "ç",
         egrave: "è",
         eacute: "é",
         ecirc: "ê",
         euml: "ë",
         igrave: "ì",
         iacute: "í",
         icirc: "î",
         iuml: "ï",
         eth: "ð",
         ntilde: "ñ",
         ograve: "ò",
         oacute: "ó",
         ocirc: "ô",
         otilde: "õ",
         ouml: "ö",
         oslash: "ø",
         ugrave: "ù",
         uacute: "ú",
         ucirc: "û",
         uuml: "ü",
         yacute: "ý",
         thorn: "þ",
         yuml: "ÿ",
         nbsp: "\u00a0",
         iexcl: "¡",
         cent: "¢",
         pound: "£",
         curren: "¤",
         yen: "¥",
         brvbar: "¦",
         sect: "§",
         uml: "¨",
         copy: "©",
         ordf: "ª",
         laquo: "«",
         not: "¬",
         shy: "­­",
         reg: "®",
         macr: "¯",
         deg: "°",
         plusmn: "±",
         sup2: "²",
         sup3: "³",
         acute: "´",
         micro: "µ",
         para: "¶",
         middot: "·",
         cedil: "¸",
         sup1: "¹",
         ordm: "º",
         raquo: "»",
         frac14: "¼",
         frac12: "½",
         frac34: "¾",
         iquest: "¿",
         times: "×",
         divide: "÷",
         forall: "∀",
         part: "∂",
         exist: "∃",
         empty: "∅",
         nabla: "∇",
         isin: "∈",
         notin: "∉",
         ni: "∋",
         prod: "∏",
         sum: "∑",
         minus: "−",
         lowast: "∗",
         radic: "√",
         prop: "∝",
         infin: "∞",
         ang: "∠",
         and: "∧",
         or: "∨",
         cap: "∩",
         cup: "∪",
         'int': "∫",
         there4: "∴",
         sim: "∼",
         cong: "≅",
         asymp: "≈",
         ne: "≠",
         equiv: "≡",
         le: "≤",
         ge: "≥",
         sub: "⊂",
         sup: "⊃",
         nsub: "⊄",
         sube: "⊆",
         supe: "⊇",
         oplus: "⊕",
         otimes: "⊗",
         perp: "⊥",
         sdot: "⋅",
         Alpha: "Α",
         Beta: "Β",
         Gamma: "Γ",
         Delta: "Δ",
         Epsilon: "Ε",
         Zeta: "Ζ",
         Eta: "Η",
         Theta: "Θ",
         Iota: "Ι",
         Kappa: "Κ",
         Lambda: "Λ",
         Mu: "Μ",
         Nu: "Ν",
         Xi: "Ξ",
         Omicron: "Ο",
         Pi: "Π",
         Rho: "Ρ",
         Sigma: "Σ",
         Tau: "Τ",
         Upsilon: "Υ",
         Phi: "Φ",
         Chi: "Χ",
         Psi: "Ψ",
         Omega: "Ω",
         alpha: "α",
         beta: "β",
         gamma: "γ",
         delta: "δ",
         epsilon: "ε",
         zeta: "ζ",
         eta: "η",
         theta: "θ",
         iota: "ι",
         kappa: "κ",
         lambda: "λ",
         mu: "μ",
         nu: "ν",
         xi: "ξ",
         omicron: "ο",
         pi: "π",
         rho: "ρ",
         sigmaf: "ς",
         sigma: "σ",
         tau: "τ",
         upsilon: "υ",
         phi: "φ",
         chi: "χ",
         psi: "ψ",
         omega: "ω",
         thetasym: "ϑ",
         upsih: "ϒ",
         piv: "ϖ",
         OElig: "Œ",
         oelig: "œ",
         Scaron: "Š",
         scaron: "š",
         Yuml: "Ÿ",
         fnof: "ƒ",
         circ: "ˆ",
         tilde: "˜",
         ensp: " ",
         emsp: " ",
         thinsp: " ",
         zwnj: "‌",
         zwj: "‍",
         lrm: "‎",
         rlm: "‏",
         ndash: "–",
         mdash: "—",
         lsquo: "‘",
         rsquo: "’",
         sbquo: "‚",
         ldquo: "“",
         rdquo: "”",
         bdquo: "„",
         dagger: "†",
         Dagger: "‡",
         bull: "•",
         hellip: "…",
         permil: "‰",
         prime: "′",
         Prime: "″",
         lsaquo: "‹",
         rsaquo: "›",
         oline: "‾",
         euro: "€",
         trade: "™",
         larr: "←",
         uarr: "↑",
         rarr: "→",
         darr: "↓",
         harr: "↔",
         crarr: "↵",
         lceil: "⌈",
         rceil: "⌉",
         lfloor: "⌊",
         rfloor: "⌋",
         loz: "◊",
         spades: "♠",
         clubs: "♣",
         hearts: "♥",
         diams: "♦"
  });

  /**
   * @deprecated use `HTML_ENTITIES` instead
   * @see HTML_ENTITIES
   */
  exports.entityMap = exports.HTML_ENTITIES;
  }(entities$1));

  var sax$1 = {};

  var NAMESPACE$1 = conventions$2.NAMESPACE;

  //[4]   	NameStartChar	   ::=   	":" | [A-Z] | "_" | [a-z] | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x2FF] | [#x370-#x37D] | [#x37F-#x1FFF] | [#x200C-#x200D] | [#x2070-#x218F] | [#x2C00-#x2FEF] | [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]
  //[4a]   	NameChar	   ::=   	NameStartChar | "-" | "." | [0-9] | #xB7 | [#x0300-#x036F] | [#x203F-#x2040]
  //[5]   	Name	   ::=   	NameStartChar (NameChar)*
  var nameStartChar = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;//\u10000-\uEFFFF
  var nameChar = new RegExp("[\\-\\.0-9"+nameStartChar.source.slice(1,-1)+"\\u00B7\\u0300-\\u036F\\u203F-\\u2040]");
  var tagNamePattern = new RegExp('^'+nameStartChar.source+nameChar.source+'*(?:\:'+nameStartChar.source+nameChar.source+'*)?$');
  //var tagNamePattern = /^[a-zA-Z_][\w\-\.]*(?:\:[a-zA-Z_][\w\-\.]*)?$/
  //var handlers = 'resolveEntity,getExternalSubset,characters,endDocument,endElement,endPrefixMapping,ignorableWhitespace,processingInstruction,setDocumentLocator,skippedEntity,startDocument,startElement,startPrefixMapping,notationDecl,unparsedEntityDecl,error,fatalError,warning,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,comment,endCDATA,endDTD,endEntity,startCDATA,startDTD,startEntity'.split(',')

  //S_TAG,	S_ATTR,	S_EQ,	S_ATTR_NOQUOT_VALUE
  //S_ATTR_SPACE,	S_ATTR_END,	S_TAG_SPACE, S_TAG_CLOSE
  var S_TAG = 0;//tag name offerring
  var S_ATTR = 1;//attr name offerring 
  var S_ATTR_SPACE=2;//attr name end and space offer
  var S_EQ = 3;//=space?
  var S_ATTR_NOQUOT_VALUE = 4;//attr value(no quot value only)
  var S_ATTR_END = 5;//attr value end and no space(quot end)
  var S_TAG_SPACE = 6;//(attr value end || tag end ) && (space offer)
  var S_TAG_CLOSE = 7;//closed el<el />

  /**
   * Creates an error that will not be caught by XMLReader aka the SAX parser.
   *
   * @param {string} message
   * @param {any?} locator Optional, can provide details about the location in the source
   * @constructor
   */
  function ParseError$1(message, locator) {
  	this.message = message;
  	this.locator = locator;
  	if(Error.captureStackTrace) Error.captureStackTrace(this, ParseError$1);
  }
  ParseError$1.prototype = new Error();
  ParseError$1.prototype.name = ParseError$1.name;

  function XMLReader$1(){
  	
  }

  XMLReader$1.prototype = {
  	parse:function(source,defaultNSMap,entityMap){
  		var domBuilder = this.domBuilder;
  		domBuilder.startDocument();
  		_copy(defaultNSMap ,defaultNSMap = {});
  		parse(source,defaultNSMap,entityMap,
  				domBuilder,this.errorHandler);
  		domBuilder.endDocument();
  	}
  };
  function parse(source,defaultNSMapCopy,entityMap,domBuilder,errorHandler){
  	function fixedFromCharCode(code) {
  		// String.prototype.fromCharCode does not supports
  		// > 2 bytes unicode chars directly
  		if (code > 0xffff) {
  			code -= 0x10000;
  			var surrogate1 = 0xd800 + (code >> 10)
  				, surrogate2 = 0xdc00 + (code & 0x3ff);

  			return String.fromCharCode(surrogate1, surrogate2);
  		} else {
  			return String.fromCharCode(code);
  		}
  	}
  	function entityReplacer(a){
  		var k = a.slice(1,-1);
  		if(k in entityMap){
  			return entityMap[k]; 
  		}else if(k.charAt(0) === '#'){
  			return fixedFromCharCode(parseInt(k.substr(1).replace('x','0x')))
  		}else {
  			errorHandler.error('entity not found:'+a);
  			return a;
  		}
  	}
  	function appendText(end){//has some bugs
  		if(end>start){
  			var xt = source.substring(start,end).replace(/&#?\w+;/g,entityReplacer);
  			locator&&position(start);
  			domBuilder.characters(xt,0,end-start);
  			start = end;
  		}
  	}
  	function position(p,m){
  		while(p>=lineEnd && (m = linePattern.exec(source))){
  			lineStart = m.index;
  			lineEnd = lineStart + m[0].length;
  			locator.lineNumber++;
  			//console.log('line++:',locator,startPos,endPos)
  		}
  		locator.columnNumber = p-lineStart+1;
  	}
  	var lineStart = 0;
  	var lineEnd = 0;
  	var linePattern = /.*(?:\r\n?|\n)|.*$/g;
  	var locator = domBuilder.locator;
  	
  	var parseStack = [{currentNSMap:defaultNSMapCopy}];
  	var closeMap = {};
  	var start = 0;
  	while(true){
  		try{
  			var tagStart = source.indexOf('<',start);
  			if(tagStart<0){
  				if(!source.substr(start).match(/^\s*$/)){
  					var doc = domBuilder.doc;
  	    			var text = doc.createTextNode(source.substr(start));
  	    			doc.appendChild(text);
  	    			domBuilder.currentElement = text;
  				}
  				return;
  			}
  			if(tagStart>start){
  				appendText(tagStart);
  			}
  			switch(source.charAt(tagStart+1)){
  			case '/':
  				var end = source.indexOf('>',tagStart+3);
  				var tagName = source.substring(tagStart + 2, end).replace(/[ \t\n\r]+$/g, '');
  				var config = parseStack.pop();
  				if(end<0){
  					
  	        		tagName = source.substring(tagStart+2).replace(/[\s<].*/,'');
  	        		errorHandler.error("end tag name: "+tagName+' is not complete:'+config.tagName);
  	        		end = tagStart+1+tagName.length;
  	        	}else if(tagName.match(/\s</)){
  	        		tagName = tagName.replace(/[\s<].*/,'');
  	        		errorHandler.error("end tag name: "+tagName+' maybe not complete');
  	        		end = tagStart+1+tagName.length;
  				}
  				var localNSMap = config.localNSMap;
  				var endMatch = config.tagName == tagName;
  				var endIgnoreCaseMach = endMatch || config.tagName&&config.tagName.toLowerCase() == tagName.toLowerCase();
  		        if(endIgnoreCaseMach){
  		        	domBuilder.endElement(config.uri,config.localName,tagName);
  					if(localNSMap){
  						for(var prefix in localNSMap){
  							domBuilder.endPrefixMapping(prefix) ;
  						}
  					}
  					if(!endMatch){
  		            	errorHandler.fatalError("end tag name: "+tagName+' is not match the current start tagName:'+config.tagName ); // No known test case
  					}
  		        }else {
  		        	parseStack.push(config);
  		        }
  				
  				end++;
  				break;
  				// end elment
  			case '?':// <?...?>
  				locator&&position(tagStart);
  				end = parseInstruction(source,tagStart,domBuilder);
  				break;
  			case '!':// <!doctype,<![CDATA,<!--
  				locator&&position(tagStart);
  				end = parseDCC(source,tagStart,domBuilder,errorHandler);
  				break;
  			default:
  				locator&&position(tagStart);
  				var el = new ElementAttributes();
  				var currentNSMap = parseStack[parseStack.length-1].currentNSMap;
  				//elStartEnd
  				var end = parseElementStartPart(source,tagStart,el,currentNSMap,entityReplacer,errorHandler);
  				var len = el.length;
  				
  				
  				if(!el.closed && fixSelfClosed(source,end,el.tagName,closeMap)){
  					el.closed = true;
  					if(!entityMap.nbsp){
  						errorHandler.warning('unclosed xml attribute');
  					}
  				}
  				if(locator && len){
  					var locator2 = copyLocator(locator,{});
  					//try{//attribute position fixed
  					for(var i = 0;i<len;i++){
  						var a = el[i];
  						position(a.offset);
  						a.locator = copyLocator(locator,{});
  					}
  					domBuilder.locator = locator2;
  					if(appendElement$1(el,domBuilder,currentNSMap)){
  						parseStack.push(el);
  					}
  					domBuilder.locator = locator;
  				}else {
  					if(appendElement$1(el,domBuilder,currentNSMap)){
  						parseStack.push(el);
  					}
  				}

  				if (NAMESPACE$1.isHTML(el.uri) && !el.closed) {
  					end = parseHtmlSpecialContent(source,end,el.tagName,entityReplacer,domBuilder);
  				} else {
  					end++;
  				}
  			}
  		}catch(e){
  			if (e instanceof ParseError$1) {
  				throw e;
  			}
  			errorHandler.error('element parse error: '+e);
  			end = -1;
  		}
  		if(end>start){
  			start = end;
  		}else {
  			//TODO: 这里有可能sax回退，有位置错误风险
  			appendText(Math.max(tagStart,start)+1);
  		}
  	}
  }
  function copyLocator(f,t){
  	t.lineNumber = f.lineNumber;
  	t.columnNumber = f.columnNumber;
  	return t;
  }

  /**
   * @see #appendElement(source,elStartEnd,el,selfClosed,entityReplacer,domBuilder,parseStack);
   * @return end of the elementStartPart(end of elementEndPart for selfClosed el)
   */
  function parseElementStartPart(source,start,el,currentNSMap,entityReplacer,errorHandler){

  	/**
  	 * @param {string} qname
  	 * @param {string} value
  	 * @param {number} startIndex
  	 */
  	function addAttribute(qname, value, startIndex) {
  		if (el.attributeNames.hasOwnProperty(qname)) {
  			errorHandler.fatalError('Attribute ' + qname + ' redefined');
  		}
  		el.addValue(qname, value, startIndex);
  	}
  	var attrName;
  	var value;
  	var p = ++start;
  	var s = S_TAG;//status
  	while(true){
  		var c = source.charAt(p);
  		switch(c){
  		case '=':
  			if(s === S_ATTR){//attrName
  				attrName = source.slice(start,p);
  				s = S_EQ;
  			}else if(s === S_ATTR_SPACE){
  				s = S_EQ;
  			}else {
  				//fatalError: equal must after attrName or space after attrName
  				throw new Error('attribute equal must after attrName'); // No known test case
  			}
  			break;
  		case '\'':
  		case '"':
  			if(s === S_EQ || s === S_ATTR //|| s == S_ATTR_SPACE
  				){//equal
  				if(s === S_ATTR){
  					errorHandler.warning('attribute value must after "="');
  					attrName = source.slice(start,p);
  				}
  				start = p+1;
  				p = source.indexOf(c,start);
  				if(p>0){
  					value = source.slice(start,p).replace(/&#?\w+;/g,entityReplacer);
  					addAttribute(attrName, value, start-1);
  					s = S_ATTR_END;
  				}else {
  					//fatalError: no end quot match
  					throw new Error('attribute value no end \''+c+'\' match');
  				}
  			}else if(s == S_ATTR_NOQUOT_VALUE){
  				value = source.slice(start,p).replace(/&#?\w+;/g,entityReplacer);
  				//console.log(attrName,value,start,p)
  				addAttribute(attrName, value, start);
  				//console.dir(el)
  				errorHandler.warning('attribute "'+attrName+'" missed start quot('+c+')!!');
  				start = p+1;
  				s = S_ATTR_END;
  			}else {
  				//fatalError: no equal before
  				throw new Error('attribute value must after "="'); // No known test case
  			}
  			break;
  		case '/':
  			switch(s){
  			case S_TAG:
  				el.setTagName(source.slice(start,p));
  			case S_ATTR_END:
  			case S_TAG_SPACE:
  			case S_TAG_CLOSE:
  				s =S_TAG_CLOSE;
  				el.closed = true;
  			case S_ATTR_NOQUOT_VALUE:
  			case S_ATTR:
  			case S_ATTR_SPACE:
  				break;
  			//case S_EQ:
  			default:
  				throw new Error("attribute invalid close char('/')") // No known test case
  			}
  			break;
  		case ''://end document
  			errorHandler.error('unexpected end of input');
  			if(s == S_TAG){
  				el.setTagName(source.slice(start,p));
  			}
  			return p;
  		case '>':
  			switch(s){
  			case S_TAG:
  				el.setTagName(source.slice(start,p));
  			case S_ATTR_END:
  			case S_TAG_SPACE:
  			case S_TAG_CLOSE:
  				break;//normal
  			case S_ATTR_NOQUOT_VALUE://Compatible state
  			case S_ATTR:
  				value = source.slice(start,p);
  				if(value.slice(-1) === '/'){
  					el.closed  = true;
  					value = value.slice(0,-1);
  				}
  			case S_ATTR_SPACE:
  				if(s === S_ATTR_SPACE){
  					value = attrName;
  				}
  				if(s == S_ATTR_NOQUOT_VALUE){
  					errorHandler.warning('attribute "'+value+'" missed quot(")!');
  					addAttribute(attrName, value.replace(/&#?\w+;/g,entityReplacer), start);
  				}else {
  					if(!NAMESPACE$1.isHTML(currentNSMap['']) || !value.match(/^(?:disabled|checked|selected)$/i)){
  						errorHandler.warning('attribute "'+value+'" missed value!! "'+value+'" instead!!');
  					}
  					addAttribute(value, value, start);
  				}
  				break;
  			case S_EQ:
  				throw new Error('attribute value missed!!');
  			}
  //			console.log(tagName,tagNamePattern,tagNamePattern.test(tagName))
  			return p;
  		/*xml space '\x20' | #x9 | #xD | #xA; */
  		case '\u0080':
  			c = ' ';
  		default:
  			if(c<= ' '){//space
  				switch(s){
  				case S_TAG:
  					el.setTagName(source.slice(start,p));//tagName
  					s = S_TAG_SPACE;
  					break;
  				case S_ATTR:
  					attrName = source.slice(start,p);
  					s = S_ATTR_SPACE;
  					break;
  				case S_ATTR_NOQUOT_VALUE:
  					var value = source.slice(start,p).replace(/&#?\w+;/g,entityReplacer);
  					errorHandler.warning('attribute "'+value+'" missed quot(")!!');
  					addAttribute(attrName, value, start);
  				case S_ATTR_END:
  					s = S_TAG_SPACE;
  					break;
  				//case S_TAG_SPACE:
  				//case S_EQ:
  				//case S_ATTR_SPACE:
  				//	void();break;
  				//case S_TAG_CLOSE:
  					//ignore warning
  				}
  			}else {//not space
  //S_TAG,	S_ATTR,	S_EQ,	S_ATTR_NOQUOT_VALUE
  //S_ATTR_SPACE,	S_ATTR_END,	S_TAG_SPACE, S_TAG_CLOSE
  				switch(s){
  				//case S_TAG:void();break;
  				//case S_ATTR:void();break;
  				//case S_ATTR_NOQUOT_VALUE:void();break;
  				case S_ATTR_SPACE:
  					el.tagName;
  					if (!NAMESPACE$1.isHTML(currentNSMap['']) || !attrName.match(/^(?:disabled|checked|selected)$/i)) {
  						errorHandler.warning('attribute "'+attrName+'" missed value!! "'+attrName+'" instead2!!');
  					}
  					addAttribute(attrName, attrName, start);
  					start = p;
  					s = S_ATTR;
  					break;
  				case S_ATTR_END:
  					errorHandler.warning('attribute space is required"'+attrName+'"!!');
  				case S_TAG_SPACE:
  					s = S_ATTR;
  					start = p;
  					break;
  				case S_EQ:
  					s = S_ATTR_NOQUOT_VALUE;
  					start = p;
  					break;
  				case S_TAG_CLOSE:
  					throw new Error("elements closed character '/' and '>' must be connected to");
  				}
  			}
  		}//end outer switch
  		//console.log('p++',p)
  		p++;
  	}
  }
  /**
   * @return true if has new namespace define
   */
  function appendElement$1(el,domBuilder,currentNSMap){
  	var tagName = el.tagName;
  	var localNSMap = null;
  	//var currentNSMap = parseStack[parseStack.length-1].currentNSMap;
  	var i = el.length;
  	while(i--){
  		var a = el[i];
  		var qName = a.qName;
  		var value = a.value;
  		var nsp = qName.indexOf(':');
  		if(nsp>0){
  			var prefix = a.prefix = qName.slice(0,nsp);
  			var localName = qName.slice(nsp+1);
  			var nsPrefix = prefix === 'xmlns' && localName;
  		}else {
  			localName = qName;
  			prefix = null;
  			nsPrefix = qName === 'xmlns' && '';
  		}
  		//can not set prefix,because prefix !== ''
  		a.localName = localName ;
  		//prefix == null for no ns prefix attribute 
  		if(nsPrefix !== false){//hack!!
  			if(localNSMap == null){
  				localNSMap = {};
  				//console.log(currentNSMap,0)
  				_copy(currentNSMap,currentNSMap={});
  				//console.log(currentNSMap,1)
  			}
  			currentNSMap[nsPrefix] = localNSMap[nsPrefix] = value;
  			a.uri = NAMESPACE$1.XMLNS;
  			domBuilder.startPrefixMapping(nsPrefix, value); 
  		}
  	}
  	var i = el.length;
  	while(i--){
  		a = el[i];
  		var prefix = a.prefix;
  		if(prefix){//no prefix attribute has no namespace
  			if(prefix === 'xml'){
  				a.uri = NAMESPACE$1.XML;
  			}if(prefix !== 'xmlns'){
  				a.uri = currentNSMap[prefix || ''];
  				
  				//{console.log('###'+a.qName,domBuilder.locator.systemId+'',currentNSMap,a.uri)}
  			}
  		}
  	}
  	var nsp = tagName.indexOf(':');
  	if(nsp>0){
  		prefix = el.prefix = tagName.slice(0,nsp);
  		localName = el.localName = tagName.slice(nsp+1);
  	}else {
  		prefix = null;//important!!
  		localName = el.localName = tagName;
  	}
  	//no prefix element has default namespace
  	var ns = el.uri = currentNSMap[prefix || ''];
  	domBuilder.startElement(ns,localName,tagName,el);
  	//endPrefixMapping and startPrefixMapping have not any help for dom builder
  	//localNSMap = null
  	if(el.closed){
  		domBuilder.endElement(ns,localName,tagName);
  		if(localNSMap){
  			for(prefix in localNSMap){
  				domBuilder.endPrefixMapping(prefix); 
  			}
  		}
  	}else {
  		el.currentNSMap = currentNSMap;
  		el.localNSMap = localNSMap;
  		//parseStack.push(el);
  		return true;
  	}
  }
  function parseHtmlSpecialContent(source,elStartEnd,tagName,entityReplacer,domBuilder){
  	if(/^(?:script|textarea)$/i.test(tagName)){
  		var elEndStart =  source.indexOf('</'+tagName+'>',elStartEnd);
  		var text = source.substring(elStartEnd+1,elEndStart);
  		if(/[&<]/.test(text)){
  			if(/^script$/i.test(tagName)){
  				//if(!/\]\]>/.test(text)){
  					//lexHandler.startCDATA();
  					domBuilder.characters(text,0,text.length);
  					//lexHandler.endCDATA();
  					return elEndStart;
  				//}
  			}//}else{//text area
  				text = text.replace(/&#?\w+;/g,entityReplacer);
  				domBuilder.characters(text,0,text.length);
  				return elEndStart;
  			//}
  			
  		}
  	}
  	return elStartEnd+1;
  }
  function fixSelfClosed(source,elStartEnd,tagName,closeMap){
  	//if(tagName in closeMap){
  	var pos = closeMap[tagName];
  	if(pos == null){
  		//console.log(tagName)
  		pos =  source.lastIndexOf('</'+tagName+'>');
  		if(pos<elStartEnd){//忘记闭合
  			pos = source.lastIndexOf('</'+tagName);
  		}
  		closeMap[tagName] =pos;
  	}
  	return pos<elStartEnd;
  	//} 
  }
  function _copy(source,target){
  	for(var n in source){target[n] = source[n];}
  }
  function parseDCC(source,start,domBuilder,errorHandler){//sure start with '<!'
  	var next= source.charAt(start+2);
  	switch(next){
  	case '-':
  		if(source.charAt(start + 3) === '-'){
  			var end = source.indexOf('-->',start+4);
  			//append comment source.substring(4,end)//<!--
  			if(end>start){
  				domBuilder.comment(source,start+4,end-start-4);
  				return end+3;
  			}else {
  				errorHandler.error("Unclosed comment");
  				return -1;
  			}
  		}else {
  			//error
  			return -1;
  		}
  	default:
  		if(source.substr(start+3,6) == 'CDATA['){
  			var end = source.indexOf(']]>',start+9);
  			domBuilder.startCDATA();
  			domBuilder.characters(source,start+9,end-start-9);
  			domBuilder.endCDATA(); 
  			return end+3;
  		}
  		//<!DOCTYPE
  		//startDTD(java.lang.String name, java.lang.String publicId, java.lang.String systemId) 
  		var matchs = split(source,start);
  		var len = matchs.length;
  		if(len>1 && /!doctype/i.test(matchs[0][0])){
  			var name = matchs[1][0];
  			var pubid = false;
  			var sysid = false;
  			if(len>3){
  				if(/^public$/i.test(matchs[2][0])){
  					pubid = matchs[3][0];
  					sysid = len>4 && matchs[4][0];
  				}else if(/^system$/i.test(matchs[2][0])){
  					sysid = matchs[3][0];
  				}
  			}
  			var lastMatch = matchs[len-1];
  			domBuilder.startDTD(name, pubid, sysid);
  			domBuilder.endDTD();
  			
  			return lastMatch.index+lastMatch[0].length
  		}
  	}
  	return -1;
  }



  function parseInstruction(source,start,domBuilder){
  	var end = source.indexOf('?>',start);
  	if(end){
  		var match = source.substring(start,end).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
  		if(match){
  			match[0].length;
  			domBuilder.processingInstruction(match[1], match[2]) ;
  			return end+2;
  		}else {//error
  			return -1;
  		}
  	}
  	return -1;
  }

  function ElementAttributes(){
  	this.attributeNames = {};
  }
  ElementAttributes.prototype = {
  	setTagName:function(tagName){
  		if(!tagNamePattern.test(tagName)){
  			throw new Error('invalid tagName:'+tagName)
  		}
  		this.tagName = tagName;
  	},
  	addValue:function(qName, value, offset) {
  		if(!tagNamePattern.test(qName)){
  			throw new Error('invalid attribute:'+qName)
  		}
  		this.attributeNames[qName] = this.length;
  		this[this.length++] = {qName:qName,value:value,offset:offset};
  	},
  	length:0,
  	getLocalName:function(i){return this[i].localName},
  	getLocator:function(i){return this[i].locator},
  	getQName:function(i){return this[i].qName},
  	getURI:function(i){return this[i].uri},
  	getValue:function(i){return this[i].value}
  //	,getIndex:function(uri, localName)){
  //		if(localName){
  //			
  //		}else{
  //			var qName = uri
  //		}
  //	},
  //	getValue:function(){return this.getValue(this.getIndex.apply(this,arguments))},
  //	getType:function(uri,localName){}
  //	getType:function(i){},
  };



  function split(source,start){
  	var match;
  	var buf = [];
  	var reg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
  	reg.lastIndex = start;
  	reg.exec(source);//skip <
  	while(match = reg.exec(source)){
  		buf.push(match);
  		if(match[1])return buf;
  	}
  }

  sax$1.XMLReader = XMLReader$1;
  sax$1.ParseError = ParseError$1;

  var conventions = conventions$2;
  var dom$1 = dom$2;
  var entities = entities$1;
  var sax = sax$1;

  var DOMImplementation = dom$1.DOMImplementation;

  var NAMESPACE = conventions.NAMESPACE;

  var ParseError = sax.ParseError;
  var XMLReader = sax.XMLReader;

  function DOMParser(options){
  	this.options = options ||{locator:{}};
  }

  DOMParser.prototype.parseFromString = function(source,mimeType){
  	var options = this.options;
  	var sax =  new XMLReader();
  	var domBuilder = options.domBuilder || new DOMHandler();//contentHandler and LexicalHandler
  	var errorHandler = options.errorHandler;
  	var locator = options.locator;
  	var defaultNSMap = options.xmlns||{};
  	var isHTML = /\/x?html?$/.test(mimeType);//mimeType.toLowerCase().indexOf('html') > -1;
    	var entityMap = isHTML ? entities.HTML_ENTITIES : entities.XML_ENTITIES;
  	if(locator){
  		domBuilder.setDocumentLocator(locator);
  	}

  	sax.errorHandler = buildErrorHandler(errorHandler,domBuilder,locator);
  	sax.domBuilder = options.domBuilder || domBuilder;
  	if(isHTML){
  		defaultNSMap[''] = NAMESPACE.HTML;
  	}
  	defaultNSMap.xml = defaultNSMap.xml || NAMESPACE.XML;
  	if(source && typeof source === 'string'){
  		sax.parse(source,defaultNSMap,entityMap);
  	}else {
  		sax.errorHandler.error("invalid doc source");
  	}
  	return domBuilder.doc;
  };
  function buildErrorHandler(errorImpl,domBuilder,locator){
  	if(!errorImpl){
  		if(domBuilder instanceof DOMHandler){
  			return domBuilder;
  		}
  		errorImpl = domBuilder ;
  	}
  	var errorHandler = {};
  	var isCallback = errorImpl instanceof Function;
  	locator = locator||{};
  	function build(key){
  		var fn = errorImpl[key];
  		if(!fn && isCallback){
  			fn = errorImpl.length == 2?function(msg){errorImpl(key,msg);}:errorImpl;
  		}
  		errorHandler[key] = fn && function(msg){
  			fn('[xmldom '+key+']\t'+msg+_locator(locator));
  		}||function(){};
  	}
  	build('warning');
  	build('error');
  	build('fatalError');
  	return errorHandler;
  }

  //console.log('#\n\n\n\n\n\n\n####')
  /**
   * +ContentHandler+ErrorHandler
   * +LexicalHandler+EntityResolver2
   * -DeclHandler-DTDHandler
   *
   * DefaultHandler:EntityResolver, DTDHandler, ContentHandler, ErrorHandler
   * DefaultHandler2:DefaultHandler,LexicalHandler, DeclHandler, EntityResolver2
   * @link http://www.saxproject.org/apidoc/org/xml/sax/helpers/DefaultHandler.html
   */
  function DOMHandler() {
      this.cdata = false;
  }
  function position(locator,node){
  	node.lineNumber = locator.lineNumber;
  	node.columnNumber = locator.columnNumber;
  }
  /**
   * @see org.xml.sax.ContentHandler#startDocument
   * @link http://www.saxproject.org/apidoc/org/xml/sax/ContentHandler.html
   */
  DOMHandler.prototype = {
  	startDocument : function() {
      	this.doc = new DOMImplementation().createDocument(null, null, null);
      	if (this.locator) {
          	this.doc.documentURI = this.locator.systemId;
      	}
  	},
  	startElement:function(namespaceURI, localName, qName, attrs) {
  		var doc = this.doc;
  	    var el = doc.createElementNS(namespaceURI, qName||localName);
  	    var len = attrs.length;
  	    appendElement(this, el);
  	    this.currentElement = el;

  		this.locator && position(this.locator,el);
  	    for (var i = 0 ; i < len; i++) {
  	        var namespaceURI = attrs.getURI(i);
  	        var value = attrs.getValue(i);
  	        var qName = attrs.getQName(i);
  			var attr = doc.createAttributeNS(namespaceURI, qName);
  			this.locator &&position(attrs.getLocator(i),attr);
  			attr.value = attr.nodeValue = value;
  			el.setAttributeNode(attr);
  	    }
  	},
  	endElement:function(namespaceURI, localName, qName) {
  		var current = this.currentElement;
  		current.tagName;
  		this.currentElement = current.parentNode;
  	},
  	startPrefixMapping:function(prefix, uri) {
  	},
  	endPrefixMapping:function(prefix) {
  	},
  	processingInstruction:function(target, data) {
  	    var ins = this.doc.createProcessingInstruction(target, data);
  	    this.locator && position(this.locator,ins);
  	    appendElement(this, ins);
  	},
  	ignorableWhitespace:function(ch, start, length) {
  	},
  	characters:function(chars, start, length) {
  		chars = _toString.apply(this,arguments);
  		//console.log(chars)
  		if(chars){
  			if (this.cdata) {
  				var charNode = this.doc.createCDATASection(chars);
  			} else {
  				var charNode = this.doc.createTextNode(chars);
  			}
  			if(this.currentElement){
  				this.currentElement.appendChild(charNode);
  			}else if(/^\s*$/.test(chars)){
  				this.doc.appendChild(charNode);
  				//process xml
  			}
  			this.locator && position(this.locator,charNode);
  		}
  	},
  	skippedEntity:function(name) {
  	},
  	endDocument:function() {
  		this.doc.normalize();
  	},
  	setDocumentLocator:function (locator) {
  	    if(this.locator = locator){// && !('lineNumber' in locator)){
  	    	locator.lineNumber = 0;
  	    }
  	},
  	//LexicalHandler
  	comment:function(chars, start, length) {
  		chars = _toString.apply(this,arguments);
  	    var comm = this.doc.createComment(chars);
  	    this.locator && position(this.locator,comm);
  	    appendElement(this, comm);
  	},

  	startCDATA:function() {
  	    //used in characters() methods
  	    this.cdata = true;
  	},
  	endCDATA:function() {
  	    this.cdata = false;
  	},

  	startDTD:function(name, publicId, systemId) {
  		var impl = this.doc.implementation;
  	    if (impl && impl.createDocumentType) {
  	        var dt = impl.createDocumentType(name, publicId, systemId);
  	        this.locator && position(this.locator,dt);
  	        appendElement(this, dt);
  					this.doc.doctype = dt;
  	    }
  	},
  	/**
  	 * @see org.xml.sax.ErrorHandler
  	 * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
  	 */
  	warning:function(error) {
  		console.warn('[xmldom warning]\t'+error,_locator(this.locator));
  	},
  	error:function(error) {
  		console.error('[xmldom error]\t'+error,_locator(this.locator));
  	},
  	fatalError:function(error) {
  		throw new ParseError(error, this.locator);
  	}
  };
  function _locator(l){
  	if(l){
  		return '\n@'+(l.systemId ||'')+'#[line:'+l.lineNumber+',col:'+l.columnNumber+']'
  	}
  }
  function _toString(chars,start,length){
  	if(typeof chars == 'string'){
  		return chars.substr(start,length)
  	}else {//java sax connect width xmldom on rhino(what about: "? && !(chars instanceof String)")
  		if(chars.length >= start+length || start){
  			return new java.lang.String(chars,start,length)+'';
  		}
  		return chars;
  	}
  }

  /*
   * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/LexicalHandler.html
   * used method of org.xml.sax.ext.LexicalHandler:
   *  #comment(chars, start, length)
   *  #startCDATA()
   *  #endCDATA()
   *  #startDTD(name, publicId, systemId)
   *
   *
   * IGNORED method of org.xml.sax.ext.LexicalHandler:
   *  #endDTD()
   *  #startEntity(name)
   *  #endEntity(name)
   *
   *
   * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/DeclHandler.html
   * IGNORED method of org.xml.sax.ext.DeclHandler
   * 	#attributeDecl(eName, aName, type, mode, value)
   *  #elementDecl(name, model)
   *  #externalEntityDecl(name, publicId, systemId)
   *  #internalEntityDecl(name, value)
   * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/EntityResolver2.html
   * IGNORED method of org.xml.sax.EntityResolver2
   *  #resolveEntity(String name,String publicId,String baseURI,String systemId)
   *  #resolveEntity(publicId, systemId)
   *  #getExternalSubset(name, baseURI)
   * @link http://www.saxproject.org/apidoc/org/xml/sax/DTDHandler.html
   * IGNORED method of org.xml.sax.DTDHandler
   *  #notationDecl(name, publicId, systemId) {};
   *  #unparsedEntityDecl(name, publicId, systemId, notationName) {};
   */
  "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g,function(key){
  	DOMHandler.prototype[key] = function(){return null};
  });

  /* Private static helpers treated below as private instance methods, so don't need to add these to the public API; we might use a Relator to also get rid of non-standard public properties */
  function appendElement (hander,node) {
      if (!hander.currentElement) {
          hander.doc.appendChild(node);
      } else {
          hander.currentElement.appendChild(node);
      }
  }//appendChild and setAttributeNS are preformance key

  domParser.__DOMHandler = DOMHandler;
  domParser.DOMParser = DOMParser;

  /**
   * @deprecated Import/require from main entry point instead
   */
  domParser.DOMImplementation = dom$1.DOMImplementation;

  /**
   * @deprecated Import/require from main entry point instead
   */
  domParser.XMLSerializer = dom$1.XMLSerializer;

  var dom = dom$2;
  lib.DOMImplementation = dom.DOMImplementation;
  lib.XMLSerializer = dom.XMLSerializer;
  lib.DOMParser = domParser.DOMParser;

  var parseJson$1 = {};

  Object.defineProperty(parseJson$1, "__esModule", { value: true });
  parseJson$1.parseJson = void 0;
  /**
   * Parses a given string into JSON.
   * Gracefully handles invalid JSON by returning `null`.
   */
  function parseJson(data) {
      try {
          var json = JSON.parse(data);
          return json;
      }
      catch (_) {
          return null;
      }
  }
  parseJson$1.parseJson = parseJson;

  var bufferFrom$1 = {};

  Object.defineProperty(bufferFrom$1, "__esModule", { value: true });
  bufferFrom$1.bufferFrom = void 0;
  /**
   * Convert a given string into a `Uint8Array`.
   * We don't use `TextEncoder` because it's unavailable in some environments.
   */
  function bufferFrom(init) {
      var encodedString = encodeURIComponent(init);
      var binaryString = encodedString.replace(/%([0-9A-F]{2})/g, function (_, char) {
          return String.fromCharCode(('0x' + char));
      });
      var buffer = new Uint8Array(binaryString.length);
      Array.prototype.forEach.call(binaryString, function (char, index) {
          buffer[index] = char.charCodeAt(0);
      });
      return buffer;
  }
  bufferFrom$1.bufferFrom = bufferFrom;

  var createEvent$1 = {};

  var EventPolyfill$1 = {};

  Object.defineProperty(EventPolyfill$1, "__esModule", { value: true });
  EventPolyfill$1.EventPolyfill = void 0;
  var EventPolyfill = /** @class */ (function () {
      function EventPolyfill(type, options) {
          this.AT_TARGET = 0;
          this.BUBBLING_PHASE = 0;
          this.CAPTURING_PHASE = 0;
          this.NONE = 0;
          this.type = '';
          this.srcElement = null;
          this.currentTarget = null;
          this.eventPhase = 0;
          this.isTrusted = true;
          this.composed = false;
          this.cancelable = true;
          this.defaultPrevented = false;
          this.bubbles = true;
          this.lengthComputable = true;
          this.loaded = 0;
          this.total = 0;
          this.cancelBubble = false;
          this.returnValue = true;
          this.type = type;
          this.target = (options === null || options === void 0 ? void 0 : options.target) || null;
          this.currentTarget = (options === null || options === void 0 ? void 0 : options.currentTarget) || null;
          this.timeStamp = Date.now();
      }
      EventPolyfill.prototype.composedPath = function () {
          return [];
      };
      EventPolyfill.prototype.initEvent = function (type, bubbles, cancelable) {
          this.type = type;
          this.bubbles = !!bubbles;
          this.cancelable = !!cancelable;
      };
      EventPolyfill.prototype.preventDefault = function () {
          this.defaultPrevented = true;
      };
      EventPolyfill.prototype.stopPropagation = function () { };
      EventPolyfill.prototype.stopImmediatePropagation = function () { };
      return EventPolyfill;
  }());
  EventPolyfill$1.EventPolyfill = EventPolyfill;

  var ProgressEventPolyfill$1 = {};

  var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          if (typeof b !== "function" && b !== null)
              throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  Object.defineProperty(ProgressEventPolyfill$1, "__esModule", { value: true });
  ProgressEventPolyfill$1.ProgressEventPolyfill = void 0;
  var EventPolyfill_1$1 = EventPolyfill$1;
  var ProgressEventPolyfill = /** @class */ (function (_super) {
      __extends(ProgressEventPolyfill, _super);
      function ProgressEventPolyfill(type, init) {
          var _this = _super.call(this, type) || this;
          _this.lengthComputable = (init === null || init === void 0 ? void 0 : init.lengthComputable) || false;
          _this.composed = (init === null || init === void 0 ? void 0 : init.composed) || false;
          _this.loaded = (init === null || init === void 0 ? void 0 : init.loaded) || 0;
          _this.total = (init === null || init === void 0 ? void 0 : init.total) || 0;
          return _this;
      }
      return ProgressEventPolyfill;
  }(EventPolyfill_1$1.EventPolyfill));
  ProgressEventPolyfill$1.ProgressEventPolyfill = ProgressEventPolyfill;

  Object.defineProperty(createEvent$1, "__esModule", { value: true });
  createEvent$1.createEvent = void 0;
  var EventPolyfill_1 = EventPolyfill$1;
  var ProgressEventPolyfill_1 = ProgressEventPolyfill$1;
  var SUPPORTS_PROGRESS_EVENT = typeof ProgressEvent !== 'undefined';
  function createEvent(target, type, init) {
      var progressEvents = [
          'error',
          'progress',
          'loadstart',
          'loadend',
          'load',
          'timeout',
          'abort',
      ];
      /**
       * `ProgressEvent` is not supported in React Native.
       * @see https://github.com/mswjs/interceptors/issues/40
       */
      var ProgressEventClass = SUPPORTS_PROGRESS_EVENT
          ? ProgressEvent
          : ProgressEventPolyfill_1.ProgressEventPolyfill;
      var event = progressEvents.includes(type)
          ? new ProgressEventClass(type, {
              lengthComputable: true,
              loaded: (init === null || init === void 0 ? void 0 : init.loaded) || 0,
              total: (init === null || init === void 0 ? void 0 : init.total) || 0,
          })
          : new EventPolyfill_1.EventPolyfill(type, {
              target: target,
              currentTarget: target,
          });
      return event;
  }
  createEvent$1.createEvent = createEvent;

  var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  };
  var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
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
  var __values = (commonjsGlobal && commonjsGlobal.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var __read = (commonjsGlobal && commonjsGlobal.__read) || function (o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o), r, ar = [], e;
      try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      }
      catch (error) { e = { error: error }; }
      finally {
          try {
              if (r && !r.done && (m = i["return"])) m.call(i);
          }
          finally { if (e) throw e.error; }
      }
      return ar;
  };
  Object.defineProperty(XMLHttpRequestOverride, "__esModule", { value: true });
  XMLHttpRequestOverride.createXMLHttpRequestOverride = void 0;
  /**
   * XMLHttpRequest override class.
   * Inspired by https://github.com/marvinhagemeister/xhr-mocklet.
   */
  var until_1 = lib$4;
  var headers_polyfill_1 = lib$7;
  var xmldom_1 = lib;
  var parseJson_1 = parseJson$1;
  var toIsoResponse_1 = toIsoResponse$1;
  var uuid_1 = uuid;
  var bufferFrom_1 = bufferFrom$1;
  var createEvent_1 = createEvent$1;
  var createDebug = browser.exports;
  var createXMLHttpRequestOverride = function (options) {
      var _a;
      var pureXMLHttpRequest = options.pureXMLHttpRequest, observer = options.observer, resolver = options.resolver;
      var debug = createDebug('XHR');
      return _a = /** @class */ (function () {
              function XMLHttpRequestOverride() {
                  // Collection of events modified by `addEventListener`/`removeEventListener` calls.
                  this._events = [];
                  this.UNSENT = 0;
                  this.OPENED = 1;
                  this.HEADERS_RECEIVED = 2;
                  this.LOADING = 3;
                  this.DONE = 4;
                  this.onreadystatechange = null;
                  /* Events */
                  this.onabort = null;
                  this.onerror = null;
                  this.onload = null;
                  this.onloadend = null;
                  this.onloadstart = null;
                  this.onprogress = null;
                  this.ontimeout = null;
                  this.url = '';
                  this.method = 'GET';
                  this.readyState = this.UNSENT;
                  this.withCredentials = false;
                  this.status = 200;
                  this.statusText = 'OK';
                  this.data = '';
                  this.response = '';
                  this.responseType = 'text';
                  this.responseText = '';
                  this.responseXML = null;
                  this.responseURL = '';
                  this.upload = {};
                  this.timeout = 0;
                  this._requestHeaders = new headers_polyfill_1.Headers();
                  this._responseHeaders = new headers_polyfill_1.Headers();
              }
              XMLHttpRequestOverride.prototype.setReadyState = function (nextState) {
                  if (nextState === this.readyState) {
                      return;
                  }
                  debug('readyState change %d -> %d', this.readyState, nextState);
                  this.readyState = nextState;
                  if (nextState !== this.UNSENT) {
                      debug('triggerring readystate change...');
                      this.trigger('readystatechange');
                  }
              };
              /**
               * Triggers both direct callback and attached event listeners
               * for the given event.
               */
              XMLHttpRequestOverride.prototype.trigger = function (eventName, options) {
                  var e_1, _a;
                  debug('trigger "%s" (%d)', eventName, this.readyState);
                  debug('resolve listener for event "%s"', eventName);
                  // @ts-expect-error XMLHttpRequest class has no index signature.
                  var callback = this["on" + eventName];
                  callback === null || callback === void 0 ? void 0 : callback.call(this, createEvent_1.createEvent(this, eventName, options));
                  try {
                      for (var _b = __values(this._events), _c = _b.next(); !_c.done; _c = _b.next()) {
                          var event_1 = _c.value;
                          if (event_1.name === eventName) {
                              debug('calling mock event listener "%s" (%d)', eventName, this.readyState);
                              event_1.listener.call(this, createEvent_1.createEvent(this, eventName, options));
                          }
                      }
                  }
                  catch (e_1_1) { e_1 = { error: e_1_1 }; }
                  finally {
                      try {
                          if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                      }
                      finally { if (e_1) throw e_1.error; }
                  }
                  return this;
              };
              XMLHttpRequestOverride.prototype.reset = function () {
                  debug('reset');
                  this.setReadyState(this.UNSENT);
                  this.status = 200;
                  this.statusText = 'OK';
                  this.data = '';
                  this.response = null;
                  this.responseText = null;
                  this.responseXML = null;
                  this._requestHeaders = new headers_polyfill_1.Headers();
                  this._responseHeaders = new headers_polyfill_1.Headers();
              };
              XMLHttpRequestOverride.prototype.open = function (method, url, async, user, password) {
                  if (async === void 0) { async = true; }
                  return __awaiter(this, void 0, void 0, function () {
                      return __generator(this, function (_a) {
                          debug = createDebug("XHR " + method + " " + url);
                          debug('open', { method: method, url: url, async: async, user: user, password: password });
                          this.reset();
                          this.setReadyState(this.OPENED);
                          if (typeof url === 'undefined') {
                              this.url = method;
                              this.method = 'GET';
                          }
                          else {
                              this.url = url;
                              this.method = method;
                              this.async = async;
                              this.user = user;
                              this.password = password;
                          }
                          return [2 /*return*/];
                      });
                  });
              };
              XMLHttpRequestOverride.prototype.send = function (data) {
                  var _this = this;
                  debug('send %s %s', this.method, this.url);
                  this.data = data || '';
                  var url;
                  try {
                      url = new URL(this.url);
                  }
                  catch (error) {
                      // Assume a relative URL, if construction of a new `URL` instance fails.
                      // Since `XMLHttpRequest` always executed in a DOM-like environment,
                      // resolve the relative request URL against the current window location.
                      url = new URL(this.url, window.location.href);
                  }
                  debug('request headers', this._requestHeaders);
                  // Create an intercepted request instance exposed to the request intercepting middleware.
                  var isoRequest = {
                      id: uuid_1.uuidv4(),
                      url: url,
                      method: this.method,
                      headers: this._requestHeaders,
                      credentials: this.withCredentials ? 'include' : 'omit',
                      body: this.data,
                  };
                  observer.emit('request', isoRequest);
                  debug('awaiting mocked response...');
                  Promise.resolve(until_1.until(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                      return [2 /*return*/, resolver(isoRequest, this)];
                  }); }); })).then(function (_a) {
                      var _b;
                      var _c = __read(_a, 2), middlewareException = _c[0], mockedResponse = _c[1];
                      // When the request middleware throws an exception, error the request.
                      // This cancels the request and is similar to a network error.
                      if (middlewareException) {
                          debug('middleware function threw an exception!', middlewareException);
                          // No way to propagate the actual error message.
                          _this.trigger('error');
                          _this.abort();
                          return;
                      }
                      // Return a mocked response, if provided in the middleware.
                      if (mockedResponse) {
                          debug('received mocked response', mockedResponse);
                          // Trigger a loadstart event to indicate the initialization of the fetch.
                          _this.trigger('loadstart');
                          _this.status = mockedResponse.status || 200;
                          _this.statusText = mockedResponse.statusText || 'OK';
                          _this._responseHeaders = mockedResponse.headers
                              ? headers_polyfill_1.objectToHeaders(mockedResponse.headers)
                              : new headers_polyfill_1.Headers();
                          debug('set response status', _this.status, _this.statusText);
                          debug('set response headers', _this._responseHeaders);
                          // Mark that response headers has been received
                          // and trigger a ready state event to reflect received headers
                          // in a custom `onreadystatechange` callback.
                          _this.setReadyState(_this.HEADERS_RECEIVED);
                          debug('response type', _this.responseType);
                          _this.response = _this.getResponseBody(mockedResponse.body);
                          _this.responseText = mockedResponse.body || '';
                          _this.responseXML = _this.getResponseXML();
                          debug('set response body', _this.response);
                          if (mockedResponse.body && _this.response) {
                              _this.setReadyState(_this.LOADING);
                              // Presense of the mocked response implies a response body (not null).
                              // Presense of the coerced `this.response` implies the mocked body is valid.
                              var bodyBuffer = bufferFrom_1.bufferFrom(mockedResponse.body);
                              // Trigger a progress event based on the mocked response body.
                              _this.trigger('progress', {
                                  loaded: bodyBuffer.length,
                                  total: bodyBuffer.length,
                              });
                          }
                          /**
                           * Explicitly mark the request as done so its response never hangs.
                           * @see https://github.com/mswjs/interceptors/issues/13
                           */
                          _this.setReadyState(_this.DONE);
                          // Trigger a load event to indicate the fetch has succeeded.
                          _this.trigger('load');
                          // Trigger a loadend event to indicate the fetch has completed.
                          _this.trigger('loadend');
                          observer.emit('response', isoRequest, toIsoResponse_1.toIsoResponse(mockedResponse));
                      }
                      else {
                          debug('no mocked response received!');
                          // Perform an original request, when the request middleware returned no mocked response.
                          var originalRequest_1 = new pureXMLHttpRequest();
                          debug('opening an original request %s %s', _this.method, _this.url);
                          originalRequest_1.open(_this.method, _this.url, (_b = _this.async) !== null && _b !== void 0 ? _b : true, _this.user, _this.password);
                          // Reflect a successful state of the original request
                          // on the patched instance.
                          originalRequest_1.addEventListener('load', function () {
                              debug('original "onload"');
                              _this.status = originalRequest_1.status;
                              _this.statusText = originalRequest_1.statusText;
                              _this.responseURL = originalRequest_1.responseURL;
                              _this.responseType = originalRequest_1.responseType;
                              _this.response = originalRequest_1.response;
                              _this.responseText = originalRequest_1.responseText;
                              _this.responseXML = originalRequest_1.responseXML;
                              debug('set mock request readyState to DONE');
                              // Explicitly mark the mocked request instance as done
                              // so the response never hangs.
                              /**
                               * @note `readystatechange` listener is called TWICE
                               * in the case of unhandled request.
                               */
                              _this.setReadyState(_this.DONE);
                              debug('received original response', _this.status, _this.statusText);
                              debug('original response body:', _this.response);
                              var responseHeaders = originalRequest_1.getAllResponseHeaders();
                              debug('original response headers:\n', responseHeaders);
                              _this._responseHeaders = headers_polyfill_1.stringToHeaders(responseHeaders);
                              debug('original response headers (normalized)', _this._responseHeaders);
                              debug('original response finished');
                              observer.emit('response', isoRequest, {
                                  status: originalRequest_1.status,
                                  statusText: originalRequest_1.statusText,
                                  headers: _this._responseHeaders,
                                  body: originalRequest_1.response,
                              });
                          });
                          // Assign callbacks and event listeners from the intercepted XHR instance
                          // to the original XHR instance.
                          _this.propagateCallbacks(originalRequest_1);
                          _this.propagateListeners(originalRequest_1);
                          _this.propagateHeaders(originalRequest_1, _this._requestHeaders);
                          if (_this.async) {
                              originalRequest_1.timeout = _this.timeout;
                          }
                          debug('send', _this.data);
                          originalRequest_1.send(_this.data);
                      }
                  });
              };
              XMLHttpRequestOverride.prototype.abort = function () {
                  debug('abort');
                  if (this.readyState > this.UNSENT && this.readyState < this.DONE) {
                      this.setReadyState(this.UNSENT);
                      this.trigger('abort');
                  }
              };
              XMLHttpRequestOverride.prototype.dispatchEvent = function () {
                  return false;
              };
              XMLHttpRequestOverride.prototype.setRequestHeader = function (name, value) {
                  debug('set request header "%s" to "%s"', name, value);
                  this._requestHeaders.append(name, value);
              };
              XMLHttpRequestOverride.prototype.getResponseHeader = function (name) {
                  debug('get response header "%s"', name);
                  if (this.readyState < this.HEADERS_RECEIVED) {
                      debug('cannot return a header: headers not received (state: %s)', this.readyState);
                      return null;
                  }
                  var headerValue = this._responseHeaders.get(name);
                  debug('resolved response header "%s" to "%s"', name, headerValue, this._responseHeaders);
                  return headerValue;
              };
              XMLHttpRequestOverride.prototype.getAllResponseHeaders = function () {
                  debug('get all response headers');
                  if (this.readyState < this.HEADERS_RECEIVED) {
                      debug('cannot return headers: headers not received (state: %s)', this.readyState);
                      return '';
                  }
                  return headers_polyfill_1.headersToString(this._responseHeaders);
              };
              XMLHttpRequestOverride.prototype.addEventListener = function (name, listener) {
                  debug('addEventListener', name, listener);
                  this._events.push({
                      name: name,
                      listener: listener,
                  });
              };
              XMLHttpRequestOverride.prototype.removeEventListener = function (name, listener) {
                  debug('removeEventListener', name, listener);
                  this._events = this._events.filter(function (storedEvent) {
                      return storedEvent.name !== name && storedEvent.listener !== listener;
                  });
              };
              XMLHttpRequestOverride.prototype.overrideMimeType = function () { };
              /**
               * Resolves the response based on the `responseType` value.
               */
              XMLHttpRequestOverride.prototype.getResponseBody = function (body) {
                  // Handle an improperly set "null" value of the mocked response body.
                  var textBody = body !== null && body !== void 0 ? body : '';
                  debug('coerced response body to', textBody);
                  switch (this.responseType) {
                      case 'json': {
                          debug('resolving response body as JSON');
                          return parseJson_1.parseJson(textBody);
                      }
                      case 'blob': {
                          var blobType = this.getResponseHeader('content-type') || 'text/plain';
                          debug('resolving response body as Blob', { type: blobType });
                          return new Blob([textBody], {
                              type: blobType,
                          });
                      }
                      case 'arraybuffer': {
                          debug('resolving response body as ArrayBuffer');
                          var arrayBuffer = bufferFrom_1.bufferFrom(textBody);
                          return arrayBuffer;
                      }
                      default:
                          return textBody;
                  }
              };
              XMLHttpRequestOverride.prototype.getResponseXML = function () {
                  var contentType = this.getResponseHeader('Content-Type');
                  if (contentType === 'application/xml' || contentType === 'text/xml') {
                      return new xmldom_1.DOMParser().parseFromString(this.responseText, contentType);
                  }
                  return null;
              };
              /**
               * Propagates mock XMLHttpRequest instance callbacks
               * to the given XMLHttpRequest instance.
               */
              XMLHttpRequestOverride.prototype.propagateCallbacks = function (request) {
                  request.onabort = this.abort;
                  request.onerror = this.onerror;
                  request.ontimeout = this.ontimeout;
                  request.onload = this.onload;
                  request.onloadstart = this.onloadstart;
                  request.onloadend = this.onloadend;
                  request.onprogress = this.onprogress;
                  request.onreadystatechange = this.onreadystatechange;
              };
              /**
               * Propagates the mock XMLHttpRequest instance listeners
               * to the given XMLHttpRequest instance.
               */
              XMLHttpRequestOverride.prototype.propagateListeners = function (request) {
                  debug('propagating request listeners (%d) to the original request', this._events.length, this._events);
                  this._events.forEach(function (_a) {
                      var name = _a.name, listener = _a.listener;
                      request.addEventListener(name, listener);
                  });
              };
              XMLHttpRequestOverride.prototype.propagateHeaders = function (request, headers) {
                  debug('propagating request headers to the original request', headers);
                  // Preserve the request headers casing.
                  Object.entries(headers.raw()).forEach(function (_a) {
                      var _b = __read(_a, 2), name = _b[0], value = _b[1];
                      debug('setting "%s" (%s) header on the original request', name, value);
                      request.setRequestHeader(name, value);
                  });
              };
              return XMLHttpRequestOverride;
          }()),
          /* Request state */
          _a.UNSENT = 0,
          _a.OPENED = 1,
          _a.HEADERS_RECEIVED = 2,
          _a.LOADING = 3,
          _a.DONE = 4,
          _a;
  };
  XMLHttpRequestOverride.createXMLHttpRequestOverride = createXMLHttpRequestOverride;

  Object.defineProperty(XMLHttpRequest, "__esModule", { value: true });
  var interceptXMLHttpRequest_1 = XMLHttpRequest.interceptXMLHttpRequest = void 0;
  var XMLHttpRequestOverride_1 = XMLHttpRequestOverride;
  var debug = browser.exports('XHR');
  var pureXMLHttpRequest = 
  // Although executed in node, certain processes emulate the DOM-like environment
  // (i.e. `js-dom` in Jest). The `window` object would be avilable in such environments.
  typeof window === 'undefined' ? undefined : window.XMLHttpRequest;
  /**
   * Intercepts requests issued via `XMLHttpRequest`.
   */
  var interceptXMLHttpRequest = function (observer, resolver) {
      if (pureXMLHttpRequest) {
          debug('patching "XMLHttpRequest" module...');
          var XMLHttpRequestOverride = XMLHttpRequestOverride_1.createXMLHttpRequestOverride({
              pureXMLHttpRequest: pureXMLHttpRequest,
              observer: observer,
              resolver: resolver,
          });
          window.XMLHttpRequest = XMLHttpRequestOverride;
      }
      return function () {
          if (pureXMLHttpRequest) {
              debug('restoring modules...');
              window.XMLHttpRequest = pureXMLHttpRequest;
          }
      };
  };
  interceptXMLHttpRequest_1 = XMLHttpRequest.interceptXMLHttpRequest = interceptXMLHttpRequest;

  /**
   * Converts a given isomorphic request to a `MockedRequest` instance.
   */
  function parseIsomorphicRequest(request) {
      const mockedRequest = {
          id: request.id,
          url: request.url,
          method: request.method,
          body: parseBody(request.body, request.headers),
          credentials: request.credentials || 'same-origin',
          headers: request.headers,
          cookies: {},
          redirect: 'manual',
          referrer: '',
          keepalive: false,
          cache: 'default',
          mode: 'cors',
          referrerPolicy: 'no-referrer',
          integrity: '',
          destination: 'document',
          bodyUsed: false,
      };
      // Attach all the cookies from the virtual cookie store.
      setRequestCookies(mockedRequest);
      return mockedRequest;
  }

  function createFallbackRequestListener(context, options) {
      const interceptor = lib$1.createInterceptor({
          modules: [interceptFetch_1, interceptXMLHttpRequest_1],
          resolver(request) {
              return __awaiter$3(this, void 0, void 0, function* () {
                  const mockedRequest = parseIsomorphicRequest(request);
                  return handleRequest(mockedRequest, context.requestHandlers, options, context.emitter, {
                      transformResponse(response) {
                          return {
                              status: response.status,
                              statusText: response.statusText,
                              headers: response.headers.all(),
                              body: response.body,
                          };
                      },
                      onMockedResponseSent(response, { handler, publicRequest, parsedRequest }) {
                          if (!options.quiet) {
                              handler.log(publicRequest, response, handler, parsedRequest);
                          }
                      },
                  });
              });
          },
      });
      interceptor.apply();
      return interceptor;
  }

  function createFallbackStart(context) {
      return function start(options) {
          return __awaiter$3(this, void 0, void 0, function* () {
              context.fallbackInterceptor = createFallbackRequestListener(context, options);
              printStartMessage({
                  message: 'Mocking enabled (fallback mode).',
                  quiet: options.quiet,
              });
              return undefined;
          });
      };
  }

  function createFallbackStop(context) {
      return function stop() {
          var _a, _b;
          (_a = context.fallbackInterceptor) === null || _a === void 0 ? void 0 : _a.restore();
          printStopMessage({ quiet: (_b = context.startOptions) === null || _b === void 0 ? void 0 : _b.quiet });
      };
  }

  /**
   * Pipes all emitted events from one emitter to another.
   */
  function pipeEvents(source, destination) {
      const rawEmit = source.emit;
      // @ts-ignore
      if (rawEmit._isPiped) {
          return;
      }
      source.emit = function (event, ...data) {
          destination.emit(event, ...data);
          return rawEmit.call(this, event, ...data);
      };
      // @ts-ignore
      source.emit._isPiped = true;
  }

  // Declare the list of event handlers on the module's scope
  // so it persists between Fash refreshes of the application's code.
  let listeners = [];
  /**
   * Creates a new mock Service Worker registration
   * with the given request handlers.
   * @param {RequestHandler[]} requestHandlers List of request handlers
   * @see {@link https://mswjs.io/docs/api/setup-worker `setupWorker`}
   */
  function setupWorker(...requestHandlers) {
      requestHandlers.forEach((handler) => {
          if (Array.isArray(handler))
              throw new Error(devUtils.formatMessage('Failed to call "setupWorker" given an Array of request handlers (setupWorker([a, b])), expected to receive each handler individually: setupWorker(a, b).'));
      });
      // Error when attempting to run this function in a Node.js environment.
      if (lib$6.exports.isNodeProcess()) {
          throw new Error(devUtils.formatMessage('Failed to execute `setupWorker` in a non-browser environment. Consider using `setupServer` for Node.js environment instead.'));
      }
      const emitter = new lib$5.StrictEventEmitter();
      const publicEmitter = new lib$5.StrictEventEmitter();
      pipeEvents(emitter, publicEmitter);
      const context = {
          startOptions: undefined,
          worker: null,
          registration: null,
          requestHandlers: [...requestHandlers],
          emitter,
          workerChannel: {
              on(eventType, callback) {
                  context.events.addListener(navigator.serviceWorker, 'message', (event) => {
                      // Avoid messages broadcasted from unrelated workers.
                      if (event.source !== context.worker) {
                          return;
                      }
                      const message = jsonParse(event.data);
                      if (!message) {
                          return;
                      }
                      if (message.type === eventType) {
                          callback(event, message);
                      }
                  });
              },
              send(type) {
                  var _a;
                  (_a = context.worker) === null || _a === void 0 ? void 0 : _a.postMessage(type);
              },
          },
          events: {
              addListener(target, eventType, callback) {
                  target.addEventListener(eventType, callback);
                  listeners.push({ eventType, target, callback });
                  return () => {
                      target.removeEventListener(eventType, callback);
                  };
              },
              removeAllListeners() {
                  for (const { target, eventType, callback } of listeners) {
                      target.removeEventListener(eventType, callback);
                  }
                  listeners = [];
              },
              once(eventType) {
                  const bindings = [];
                  return new Promise((resolve, reject) => {
                      const handleIncomingMessage = (event) => {
                          try {
                              const message = JSON.parse(event.data);
                              if (message.type === eventType) {
                                  resolve(message);
                              }
                          }
                          catch (error) {
                              reject(error);
                          }
                      };
                      bindings.push(context.events.addListener(navigator.serviceWorker, 'message', handleIncomingMessage), context.events.addListener(navigator.serviceWorker, 'messageerror', reject));
                  }).finally(() => {
                      bindings.forEach((unbind) => unbind());
                  });
              },
          },
          useFallbackMode: !('serviceWorker' in navigator) || location.protocol === 'file:',
      };
      const startHandler = context.useFallbackMode
          ? createFallbackStart(context)
          : createStartHandler(context);
      const stopHandler = context.useFallbackMode
          ? createFallbackStop(context)
          : createStop(context);
      return {
          start: prepareStartHandler(startHandler, context),
          stop() {
              context.events.removeAllListeners();
              context.emitter.removeAllListeners();
              publicEmitter.removeAllListeners();
              stopHandler();
          },
          use(...handlers) {
              use(context.requestHandlers, ...handlers);
          },
          restoreHandlers() {
              restoreHandlers(context.requestHandlers);
          },
          resetHandlers(...nextHandlers) {
              context.requestHandlers = resetHandlers(requestHandlers, ...nextHandlers);
          },
          printHandlers() {
              context.requestHandlers.forEach((handler) => {
                  const { header, callFrame } = handler.info;
                  const pragma = handler.info.hasOwnProperty('operationType')
                      ? '[graphql]'
                      : '[rest]';
                  console.groupCollapsed(`${pragma} ${header}`);
                  if (callFrame) {
                      console.log(`Declaration: ${callFrame}`);
                  }
                  console.log('Handler:', handler);
                  if (handler instanceof RestHandler) {
                      console.log('Match:', `https://mswjs.io/repl?path=${handler.info.path}`);
                  }
                  console.groupEnd();
              });
          },
          events: {
              on(...args) {
                  return publicEmitter.on(...args);
              },
              removeListener(...args) {
                  return publicEmitter.removeListener(...args);
              },
              removeAllListeners(...args) {
                  return publicEmitter.removeAllListeners(...args);
              },
          },
      };
  }

  function createRestHandler(method) {
      return (path, resolver) => {
          return new RestHandler(method, path, resolver);
      };
  }
  const rest = {
      all: createRestHandler(/.+/),
      head: createRestHandler(exports.RESTMethods.HEAD),
      get: createRestHandler(exports.RESTMethods.GET),
      post: createRestHandler(exports.RESTMethods.POST),
      put: createRestHandler(exports.RESTMethods.PUT),
      delete: createRestHandler(exports.RESTMethods.DELETE),
      patch: createRestHandler(exports.RESTMethods.PATCH),
      options: createRestHandler(exports.RESTMethods.OPTIONS),
  };

  function createScopedGraphQLHandler(operationType, url) {
      return (operationName, resolver) => {
          return new GraphQLHandler(operationType, operationName, url, resolver);
      };
  }
  function createGraphQLOperationHandler(url) {
      return (resolver) => {
          return new GraphQLHandler('all', new RegExp('.*'), url, resolver);
      };
  }
  const standardGraphQLHandlers = {
      /**
       * Captures any GraphQL operation, regardless of its name, under the current scope.
       * @example
       * graphql.operation((req, res, ctx) => {
       *   return res(ctx.data({ name: 'John' }))
       * })
       * @see {@link https://mswjs.io/docs/api/graphql/operation `graphql.operation()`}
       */
      operation: createGraphQLOperationHandler('*'),
      /**
       * Captures a GraphQL query by a given name.
       * @example
       * graphql.query('GetUser', (req, res, ctx) => {
       *   return res(ctx.data({ user: { name: 'John' } }))
       * })
       * @see {@link https://mswjs.io/docs/api/graphql/query `graphql.query()`}
       */
      query: createScopedGraphQLHandler(graphql$3.OperationTypeNode.QUERY, '*'),
      /**
       * Captures a GraphQL mutation by a given name.
       * @example
       * graphql.mutation('SavePost', (req, res, ctx) => {
       *   return res(ctx.data({ post: { id: 'abc-123' } }))
       * })
       * @see {@link https://mswjs.io/docs/api/graphql/mutation `graphql.mutation()`}
       */
      mutation: createScopedGraphQLHandler(graphql$3.OperationTypeNode.MUTATION, '*'),
  };
  function createGraphQLLink(url) {
      return {
          operation: createGraphQLOperationHandler(url),
          query: createScopedGraphQLHandler(graphql$3.OperationTypeNode.QUERY, url),
          mutation: createScopedGraphQLHandler(graphql$3.OperationTypeNode.MUTATION, url),
      };
  }
  const graphql = Object.assign(Object.assign({}, standardGraphQLHandlers), { link: createGraphQLLink });

  exports.GraphQLHandler = GraphQLHandler;
  exports.RequestHandler = RequestHandler;
  exports.RestHandler = RestHandler;
  exports.cleanUrl = cleanUrl;
  exports.compose = compose;
  exports.context = index;
  exports.createResponseComposition = createResponseComposition;
  exports.defaultContext = defaultContext;
  exports.defaultResponse = defaultResponse;
  exports.graphql = graphql;
  exports.graphqlContext = graphqlContext;
  exports.handleRequest = handleRequest;
  exports.matchRequestUrl = matchRequestUrl;
  exports.parseIsomorphicRequest = parseIsomorphicRequest;
  exports.response = response;
  exports.rest = rest;
  exports.restContext = restContext;
  exports.setupWorker = setupWorker;

}));
