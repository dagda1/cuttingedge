/* eslint-disable */
/**
 * @licstart The following is the entire license notice for the
 * Javascript code in this page
 *
 * Copyright 2018 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @licend The above is the entire license notice for the
 * Javascript code in this page
 */

(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define('pdfjs-dist/build/pdf', [], factory);
  } else if (typeof exports === 'object') {
    exports['pdfjs-dist/build/pdf'] = factory();
  } else {
    root['pdfjs-dist/build/pdf'] = root.pdfjsLib = factory();
  }
})(this, function () {
  return /******/ (function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ const installedModules = {}; // The require function
    /******/
    /******/ /******/ function __w_pdfjs_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports;
        /******/
      } // Create a new module (and put it into the cache)
      /******/ /******/ const module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {},
        /******/
      }); // Execute the module function
      /******/
      /******/ /******/ modules[moduleId].call(module.exports, module, module.exports, __w_pdfjs_require__); // Flag the module as loaded
      /******/
      /******/ /******/ module.l = true; // Return the exports of the module
      /******/
      /******/ /******/ return module.exports;
      /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __w_pdfjs_require__.m = modules; // expose the module cache
    /******/
    /******/ /******/ __w_pdfjs_require__.c = installedModules; // define getter function for harmony exports
    /******/
    /******/ /******/ __w_pdfjs_require__.d = function (exports, name, getter) {
      /******/ if (!__w_pdfjs_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, { enumerable: true, get: getter });
        /******/
      }
      /******/
    }; // define __esModule on exports
    /******/
    /******/ /******/ __w_pdfjs_require__.r = function (exports) {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
    /******/
    /******/ /******/ /******/ /******/ /******/ /******/ __w_pdfjs_require__.t = function (value, mode) {
      /******/ if (mode & 1) {
        value = __w_pdfjs_require__(value);
      }
      /******/ if (mode & 8) {
        return value;
      }
      /******/ if (mode & 4 && typeof value === 'object' && value && value.__esModule) {
        return value;
      }
      /******/ const ns = Object.create(null);
      /******/ __w_pdfjs_require__.r(ns);
      /******/ Object.defineProperty(ns, 'default', { enumerable: true, value: value });
      /******/ if (mode & 2 && typeof value !== 'string') {
        for (const key in value) {
          __w_pdfjs_require__.d(
            ns,
            key,
            function (key) {
              return value[key];
            }.bind(null, key),
          );
        }
      }
      /******/ return ns;
      /******/
    }; // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __w_pdfjs_require__.n = function (module) {
      /******/ const getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module['default'];
            }
          : /******/ function getModuleExports() {
              return module;
            };
      /******/ __w_pdfjs_require__.d(getter, 'a', getter);
      /******/ return getter;
      /******/
    }; // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __w_pdfjs_require__.o = function (object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    }; // __webpack_public_path__
    /******/
    /******/ /******/ __w_pdfjs_require__.p = ''; // Load entry module and return exports
    /******/
    /******/
    /******/ /******/ return __w_pdfjs_require__((__w_pdfjs_require__.s = 0));
    /******/
  })(
    /************************************************************************/
    /******/ [
      /* 0 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const pdfjsVersion = '2.0.943';
        const pdfjsBuild = 'dc98bf76';
        const pdfjsSharedUtil = __w_pdfjs_require__(1);
        const pdfjsDisplayAPI = __w_pdfjs_require__(129);
        const pdfjsDisplayTextLayer = __w_pdfjs_require__(145);
        const pdfjsDisplayAnnotationLayer = __w_pdfjs_require__(146);
        const pdfjsDisplayDOMUtils = __w_pdfjs_require__(130);
        const pdfjsDisplaySVG = __w_pdfjs_require__(147);
        const pdfjsDisplayWorkerOptions = __w_pdfjs_require__(135);
        const pdfjsDisplayAPICompatibility = __w_pdfjs_require__(132);
        {
          const isNodeJS = __w_pdfjs_require__(4);
          if (isNodeJS()) {
            const PDFNodeStream = __w_pdfjs_require__(148).PDFNodeStream;
            pdfjsDisplayAPI.setPDFNetworkStreamFactory(function (params) {
              return new PDFNodeStream(params);
            });
          } else if (typeof Response !== 'undefined' && 'body' in Response.prototype && typeof ReadableStream !== 'undefined') {
            const PDFFetchStream = __w_pdfjs_require__(151).PDFFetchStream;
            pdfjsDisplayAPI.setPDFNetworkStreamFactory(function (params) {
              return new PDFFetchStream(params);
            });
          } else {
            const PDFNetworkStream = __w_pdfjs_require__(152).PDFNetworkStream;
            pdfjsDisplayAPI.setPDFNetworkStreamFactory(function (params) {
              return new PDFNetworkStream(params);
            });
          }
        }
        exports.build = pdfjsDisplayAPI.build;
        exports.version = pdfjsDisplayAPI.version;
        exports.getDocument = pdfjsDisplayAPI.getDocument;
        exports.LoopbackPort = pdfjsDisplayAPI.LoopbackPort;
        exports.PDFDataRangeTransport = pdfjsDisplayAPI.PDFDataRangeTransport;
        exports.PDFWorker = pdfjsDisplayAPI.PDFWorker;
        exports.renderTextLayer = pdfjsDisplayTextLayer.renderTextLayer;
        exports.AnnotationLayer = pdfjsDisplayAnnotationLayer.AnnotationLayer;
        exports.createPromiseCapability = pdfjsSharedUtil.createPromiseCapability;
        exports.PasswordResponses = pdfjsSharedUtil.PasswordResponses;
        exports.InvalidPDFException = pdfjsSharedUtil.InvalidPDFException;
        exports.MissingPDFException = pdfjsSharedUtil.MissingPDFException;
        exports.SVGGraphics = pdfjsDisplaySVG.SVGGraphics;
        exports.NativeImageDecoding = pdfjsSharedUtil.NativeImageDecoding;
        exports.CMapCompressionType = pdfjsSharedUtil.CMapCompressionType;
        exports.PermissionFlag = pdfjsSharedUtil.PermissionFlag;
        exports.UnexpectedResponseException = pdfjsSharedUtil.UnexpectedResponseException;
        exports.OPS = pdfjsSharedUtil.OPS;
        exports.VerbosityLevel = pdfjsSharedUtil.VerbosityLevel;
        exports.UNSUPPORTED_FEATURES = pdfjsSharedUtil.UNSUPPORTED_FEATURES;
        exports.createValidAbsoluteUrl = pdfjsSharedUtil.createValidAbsoluteUrl;
        exports.createObjectURL = pdfjsSharedUtil.createObjectURL;
        exports.removeNullCharacters = pdfjsSharedUtil.removeNullCharacters;
        exports.shadow = pdfjsSharedUtil.shadow;
        exports.Util = pdfjsSharedUtil.Util;
        exports.ReadableStream = pdfjsSharedUtil.ReadableStream;
        exports.URL = pdfjsSharedUtil.URL;
        exports.RenderingCancelledException = pdfjsDisplayDOMUtils.RenderingCancelledException;
        exports.getFilenameFromUrl = pdfjsDisplayDOMUtils.getFilenameFromUrl;
        exports.LinkTarget = pdfjsDisplayDOMUtils.LinkTarget;
        exports.addLinkAttributes = pdfjsDisplayDOMUtils.addLinkAttributes;
        exports.loadScript = pdfjsDisplayDOMUtils.loadScript;
        exports.GlobalWorkerOptions = pdfjsDisplayWorkerOptions.GlobalWorkerOptions;
        exports.apiCompatibilityParams = pdfjsDisplayAPICompatibility.apiCompatibilityParams;

        /***/
      },
      /* 1 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.unreachable = exports.warn = exports.utf8StringToString = exports.stringToUTF8String = exports.stringToPDFString = exports.stringToBytes = exports.string32 = exports.shadow = exports.setVerbosityLevel = exports.URL = exports.ReadableStream = exports.removeNullCharacters = exports.readUint32 = exports.readUint16 = exports.readInt8 = exports.log2 = exports.isEvalSupported = exports.isLittleEndian = exports.createValidAbsoluteUrl = exports.isSameOrigin = exports.isSpace = exports.isString = exports.isNum = exports.isEmptyObj = exports.isBool = exports.isArrayBuffer = exports.info = exports.getVerbosityLevel = exports.getLookupTableFactory = exports.getInheritableProperty = exports.deprecated = exports.createObjectURL = exports.createPromiseCapability = exports.bytesToString = exports.assert = exports.arraysToBytes = exports.arrayByteLength = exports.FormatError = exports.XRefParseException = exports.toRomanNumerals = exports.Util = exports.UnknownErrorException = exports.UnexpectedResponseException = exports.TextRenderingMode = exports.StreamType = exports.PermissionFlag = exports.PasswordResponses = exports.PasswordException = exports.NativeImageDecoding = exports.MissingPDFException = exports.MissingDataException = exports.InvalidPDFException = exports.AbortException = exports.CMapCompressionType = exports.ImageKind = exports.FontType = exports.AnnotationType = exports.AnnotationFlag = exports.AnnotationFieldFlag = exports.AnnotationBorderStyleType = exports.UNSUPPORTED_FEATURES = exports.VerbosityLevel = exports.OPS = exports.IDENTITY_MATRIX = exports.FONT_IDENTITY_MATRIX = undefined;

        const _typeof =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (obj) {
                return typeof obj;
              }
            : function (obj) {
                return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              };

        __w_pdfjs_require__(2);

        const _streams_polyfill = __w_pdfjs_require__(125);

        const _url_polyfill = __w_pdfjs_require__(127);

        const IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0];
        const FONT_IDENTITY_MATRIX = [0.001, 0, 0, 0.001, 0, 0];
        const NativeImageDecoding = {
          NONE: 'none',
          DECODE: 'decode',
          DISPLAY: 'display',
        };
        const PermissionFlag = {
          PRINT: 0x04,
          MODIFY_CONTENTS: 0x08,
          COPY: 0x10,
          MODIFY_ANNOTATIONS: 0x20,
          FILL_INTERACTIVE_FORMS: 0x100,
          COPY_FOR_ACCESSIBILITY: 0x200,
          ASSEMBLE: 0x400,
          PRINT_HIGH_QUALITY: 0x800,
        };
        const TextRenderingMode = {
          FILL: 0,
          STROKE: 1,
          FILL_STROKE: 2,
          INVISIBLE: 3,
          FILL_ADD_TO_PATH: 4,
          STROKE_ADD_TO_PATH: 5,
          FILL_STROKE_ADD_TO_PATH: 6,
          ADD_TO_PATH: 7,
          FILL_STROKE_MASK: 3,
          ADD_TO_PATH_FLAG: 4,
        };
        const ImageKind = {
          GRAYSCALE_1BPP: 1,
          RGB_24BPP: 2,
          RGBA_32BPP: 3,
        };
        const AnnotationType = {
          TEXT: 1,
          LINK: 2,
          FREETEXT: 3,
          LINE: 4,
          SQUARE: 5,
          CIRCLE: 6,
          POLYGON: 7,
          POLYLINE: 8,
          HIGHLIGHT: 9,
          UNDERLINE: 10,
          SQUIGGLY: 11,
          STRIKEOUT: 12,
          STAMP: 13,
          CARET: 14,
          INK: 15,
          POPUP: 16,
          FILEATTACHMENT: 17,
          SOUND: 18,
          MOVIE: 19,
          WIDGET: 20,
          SCREEN: 21,
          PRINTERMARK: 22,
          TRAPNET: 23,
          WATERMARK: 24,
          THREED: 25,
          REDACT: 26,
        };
        const AnnotationFlag = {
          INVISIBLE: 0x01,
          HIDDEN: 0x02,
          PRINT: 0x04,
          NOZOOM: 0x08,
          NOROTATE: 0x10,
          NOVIEW: 0x20,
          READONLY: 0x40,
          LOCKED: 0x80,
          TOGGLENOVIEW: 0x100,
          LOCKEDCONTENTS: 0x200,
        };
        const AnnotationFieldFlag = {
          READONLY: 0x0000001,
          REQUIRED: 0x0000002,
          NOEXPORT: 0x0000004,
          MULTILINE: 0x0001000,
          PASSWORD: 0x0002000,
          NOTOGGLETOOFF: 0x0004000,
          RADIO: 0x0008000,
          PUSHBUTTON: 0x0010000,
          COMBO: 0x0020000,
          EDIT: 0x0040000,
          SORT: 0x0080000,
          FILESELECT: 0x0100000,
          MULTISELECT: 0x0200000,
          DONOTSPELLCHECK: 0x0400000,
          DONOTSCROLL: 0x0800000,
          COMB: 0x1000000,
          RICHTEXT: 0x2000000,
          RADIOSINUNISON: 0x2000000,
          COMMITONSELCHANGE: 0x4000000,
        };
        const AnnotationBorderStyleType = {
          SOLID: 1,
          DASHED: 2,
          BEVELED: 3,
          INSET: 4,
          UNDERLINE: 5,
        };
        const StreamType = {
          UNKNOWN: 0,
          FLATE: 1,
          LZW: 2,
          DCT: 3,
          JPX: 4,
          JBIG: 5,
          A85: 6,
          AHX: 7,
          CCF: 8,
          RL: 9,
        };
        const FontType = {
          UNKNOWN: 0,
          TYPE1: 1,
          TYPE1C: 2,
          CIDFONTTYPE0: 3,
          CIDFONTTYPE0C: 4,
          TRUETYPE: 5,
          CIDFONTTYPE2: 6,
          TYPE3: 7,
          OPENTYPE: 8,
          TYPE0: 9,
          MMTYPE1: 10,
        };
        const VerbosityLevel = {
          ERRORS: 0,
          WARNINGS: 1,
          INFOS: 5,
        };
        const CMapCompressionType = {
          NONE: 0,
          BINARY: 1,
          STREAM: 2,
        };
        const OPS = {
          dependency: 1,
          setLineWidth: 2,
          setLineCap: 3,
          setLineJoin: 4,
          setMiterLimit: 5,
          setDash: 6,
          setRenderingIntent: 7,
          setFlatness: 8,
          setGState: 9,
          save: 10,
          restore: 11,
          transform: 12,
          moveTo: 13,
          lineTo: 14,
          curveTo: 15,
          curveTo2: 16,
          curveTo3: 17,
          closePath: 18,
          rectangle: 19,
          stroke: 20,
          closeStroke: 21,
          fill: 22,
          eoFill: 23,
          fillStroke: 24,
          eoFillStroke: 25,
          closeFillStroke: 26,
          closeEOFillStroke: 27,
          endPath: 28,
          clip: 29,
          eoClip: 30,
          beginText: 31,
          endText: 32,
          setCharSpacing: 33,
          setWordSpacing: 34,
          setHScale: 35,
          setLeading: 36,
          setFont: 37,
          setTextRenderingMode: 38,
          setTextRise: 39,
          moveText: 40,
          setLeadingMoveText: 41,
          setTextMatrix: 42,
          nextLine: 43,
          showText: 44,
          showSpacedText: 45,
          nextLineShowText: 46,
          nextLineSetSpacingShowText: 47,
          setCharWidth: 48,
          setCharWidthAndBounds: 49,
          setStrokeColorSpace: 50,
          setFillColorSpace: 51,
          setStrokeColor: 52,
          setStrokeColorN: 53,
          setFillColor: 54,
          setFillColorN: 55,
          setStrokeGray: 56,
          setFillGray: 57,
          setStrokeRGBColor: 58,
          setFillRGBColor: 59,
          setStrokeCMYKColor: 60,
          setFillCMYKColor: 61,
          shadingFill: 62,
          beginInlineImage: 63,
          beginImageData: 64,
          endInlineImage: 65,
          paintXObject: 66,
          markPoint: 67,
          markPointProps: 68,
          beginMarkedContent: 69,
          beginMarkedContentProps: 70,
          endMarkedContent: 71,
          beginCompat: 72,
          endCompat: 73,
          paintFormXObjectBegin: 74,
          paintFormXObjectEnd: 75,
          beginGroup: 76,
          endGroup: 77,
          beginAnnotations: 78,
          endAnnotations: 79,
          beginAnnotation: 80,
          endAnnotation: 81,
          paintJpegXObject: 82,
          paintImageMaskXObject: 83,
          paintImageMaskXObjectGroup: 84,
          paintImageXObject: 85,
          paintInlineImageXObject: 86,
          paintInlineImageXObjectGroup: 87,
          paintImageXObjectRepeat: 88,
          paintImageMaskXObjectRepeat: 89,
          paintSolidColorImageMask: 90,
          constructPath: 91,
        };
        const UNSUPPORTED_FEATURES = {
          unknown: 'unknown',
          forms: 'forms',
          javaScript: 'javaScript',
          smask: 'smask',
          shadingPattern: 'shadingPattern',
          font: 'font',
        };
        const PasswordResponses = {
          NEED_PASSWORD: 1,
          INCORRECT_PASSWORD: 2,
        };
        let verbosity = VerbosityLevel.WARNINGS;
        function setVerbosityLevel(level) {
          if (Number.isInteger(level)) {
            verbosity = level;
          }
        }
        function getVerbosityLevel() {
          return verbosity;
        }
        function info(msg) {
          if (verbosity >= VerbosityLevel.INFOS) {
            console.log('Info: ' + msg);
          }
        }
        function warn(msg) {
          if (verbosity >= VerbosityLevel.WARNINGS) {
            console.log('Warning: ' + msg);
          }
        }
        function deprecated(details) {
          console.log('Deprecated API usage: ' + details);
        }
        function unreachable(msg) {
          throw new Error(msg);
        }
        function assert(cond, msg) {
          if (!cond) {
            unreachable(msg);
          }
        }
        function isSameOrigin(baseUrl, otherUrl) {
          try {
            var base = new _url_polyfill.URL(baseUrl);
            if (!base.origin || base.origin === 'null') {
              return false;
            }
          } catch (e) {
            return false;
          }
          const other = new _url_polyfill.URL(otherUrl, base);
          return base.origin === other.origin;
        }
        function _isValidProtocol(url) {
          if (!url) {
            return false;
          }
          switch (url.protocol) {
            case 'http:':
            case 'https:':
            case 'ftp:':
            case 'mailto:':
            case 'tel:':
              return true;
            default:
              return false;
          }
        }
        function createValidAbsoluteUrl(url, baseUrl) {
          if (!url) {
            return null;
          }
          try {
            const absoluteUrl = baseUrl ? new _url_polyfill.URL(url, baseUrl) : new _url_polyfill.URL(url);
            if (_isValidProtocol(absoluteUrl)) {
              return absoluteUrl;
            }
          } catch (ex) {}
          return null;
        }
        function shadow(obj, prop, value) {
          Object.defineProperty(obj, prop, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: false,
          });
          return value;
        }
        function getLookupTableFactory(initializer) {
          let lookup;
          return function () {
            if (initializer) {
              lookup = Object.create(null);
              initializer(lookup);
              initializer = null;
            }
            return lookup;
          };
        }
        const PasswordException = (function PasswordExceptionClosure() {
          function PasswordException(msg, code) {
            this.name = 'PasswordException';
            this.message = msg;
            this.code = code;
          }
          PasswordException.prototype = new Error();
          PasswordException.constructor = PasswordException;
          return PasswordException;
        })();
        const UnknownErrorException = (function UnknownErrorExceptionClosure() {
          function UnknownErrorException(msg, details) {
            this.name = 'UnknownErrorException';
            this.message = msg;
            this.details = details;
          }
          UnknownErrorException.prototype = new Error();
          UnknownErrorException.constructor = UnknownErrorException;
          return UnknownErrorException;
        })();
        const InvalidPDFException = (function InvalidPDFExceptionClosure() {
          function InvalidPDFException(msg) {
            this.name = 'InvalidPDFException';
            this.message = msg;
          }
          InvalidPDFException.prototype = new Error();
          InvalidPDFException.constructor = InvalidPDFException;
          return InvalidPDFException;
        })();
        const MissingPDFException = (function MissingPDFExceptionClosure() {
          function MissingPDFException(msg) {
            this.name = 'MissingPDFException';
            this.message = msg;
          }
          MissingPDFException.prototype = new Error();
          MissingPDFException.constructor = MissingPDFException;
          return MissingPDFException;
        })();
        const UnexpectedResponseException = (function UnexpectedResponseExceptionClosure() {
          function UnexpectedResponseException(msg, status) {
            this.name = 'UnexpectedResponseException';
            this.message = msg;
            this.status = status;
          }
          UnexpectedResponseException.prototype = new Error();
          UnexpectedResponseException.constructor = UnexpectedResponseException;
          return UnexpectedResponseException;
        })();
        const MissingDataException = (function MissingDataExceptionClosure() {
          function MissingDataException(begin, end) {
            this.begin = begin;
            this.end = end;
            this.message = 'Missing data [' + begin + ', ' + end + ')';
          }
          MissingDataException.prototype = new Error();
          MissingDataException.prototype.name = 'MissingDataException';
          MissingDataException.constructor = MissingDataException;
          return MissingDataException;
        })();
        const XRefParseException = (function XRefParseExceptionClosure() {
          function XRefParseException(msg) {
            this.message = msg;
          }
          XRefParseException.prototype = new Error();
          XRefParseException.prototype.name = 'XRefParseException';
          XRefParseException.constructor = XRefParseException;
          return XRefParseException;
        })();
        const FormatError = (function FormatErrorClosure() {
          function FormatError(msg) {
            this.message = msg;
          }
          FormatError.prototype = new Error();
          FormatError.prototype.name = 'FormatError';
          FormatError.constructor = FormatError;
          return FormatError;
        })();
        const AbortException = (function AbortExceptionClosure() {
          function AbortException(msg) {
            this.name = 'AbortException';
            this.message = msg;
          }
          AbortException.prototype = new Error();
          AbortException.constructor = AbortException;
          return AbortException;
        })();
        const NullCharactersRegExp = /\x00/g;
        function removeNullCharacters(str) {
          if (typeof str !== 'string') {
            warn('The argument for removeNullCharacters must be a string.');
            return str;
          }
          return str.replace(NullCharactersRegExp, '');
        }
        function bytesToString(bytes) {
          assert(
            bytes !== null && (typeof bytes === 'undefined' ? 'undefined' : _typeof(bytes)) === 'object' && bytes.length !== undefined,
            'Invalid argument for bytesToString',
          );
          const length = bytes.length;
          const MAX_ARGUMENT_COUNT = 8192;
          if (length < MAX_ARGUMENT_COUNT) {
            return String.fromCharCode.apply(null, bytes);
          }
          const strBuf = [];
          for (let i = 0; i < length; i += MAX_ARGUMENT_COUNT) {
            const chunkEnd = Math.min(i + MAX_ARGUMENT_COUNT, length);
            const chunk = bytes.subarray(i, chunkEnd);
            strBuf.push(String.fromCharCode.apply(null, chunk));
          }
          return strBuf.join('');
        }
        function stringToBytes(str) {
          assert(typeof str === 'string', 'Invalid argument for stringToBytes');
          const length = str.length;
          const bytes = new Uint8Array(length);
          for (let i = 0; i < length; ++i) {
            bytes[i] = str.charCodeAt(i) & 0xff;
          }
          return bytes;
        }
        function arrayByteLength(arr) {
          if (arr.length !== undefined) {
            return arr.length;
          }
          assert(arr.byteLength !== undefined);
          return arr.byteLength;
        }
        function arraysToBytes(arr) {
          if (arr.length === 1 && arr[0] instanceof Uint8Array) {
            return arr[0];
          }
          let resultLength = 0;
          let i,
            ii = arr.length;
          let item, itemLength;
          for (i = 0; i < ii; i++) {
            item = arr[i];
            itemLength = arrayByteLength(item);
            resultLength += itemLength;
          }
          let pos = 0;
          const data = new Uint8Array(resultLength);
          for (i = 0; i < ii; i++) {
            item = arr[i];
            if (!(item instanceof Uint8Array)) {
              if (typeof item === 'string') {
                item = stringToBytes(item);
              } else {
                item = new Uint8Array(item);
              }
            }
            itemLength = item.byteLength;
            data.set(item, pos);
            pos += itemLength;
          }
          return data;
        }
        function string32(value) {
          return String.fromCharCode((value >> 24) & 0xff, (value >> 16) & 0xff, (value >> 8) & 0xff, value & 0xff);
        }
        function log2(x) {
          if (x <= 0) {
            return 0;
          }
          return Math.ceil(Math.log2(x));
        }
        function readInt8(data, start) {
          return (data[start] << 24) >> 24;
        }
        function readUint16(data, offset) {
          return (data[offset] << 8) | data[offset + 1];
        }
        function readUint32(data, offset) {
          return ((data[offset] << 24) | (data[offset + 1] << 16) | (data[offset + 2] << 8) | data[offset + 3]) >>> 0;
        }
        function isLittleEndian() {
          const buffer8 = new Uint8Array(4);
          buffer8[0] = 1;
          const view32 = new Uint32Array(buffer8.buffer, 0, 1);
          return view32[0] === 1;
        }
        function isEvalSupported() {
          try {
            new Function('');
            return true;
          } catch (e) {
            return false;
          }
        }
        function getInheritableProperty(_ref) {
          let dict = _ref.dict,
            key = _ref.key,
            _ref$getArray = _ref.getArray,
            getArray = _ref$getArray === undefined ? false : _ref$getArray,
            _ref$stopWhenFound = _ref.stopWhenFound,
            stopWhenFound = _ref$stopWhenFound === undefined ? true : _ref$stopWhenFound;

          const LOOP_LIMIT = 100;
          let loopCount = 0;
          let values = void 0;
          while (dict) {
            const value = getArray ? dict.getArray(key) : dict.get(key);
            if (value !== undefined) {
              if (stopWhenFound) {
                return value;
              }
              if (!values) {
                values = [];
              }
              values.push(value);
            }
            if (++loopCount > LOOP_LIMIT) {
              warn('getInheritableProperty: maximum loop count exceeded for "' + key + '"');
              break;
            }
            dict = dict.get('Parent');
          }
          return values;
        }
        const Util = (function UtilClosure() {
          function Util() {}
          const rgbBuf = ['rgb(', 0, ',', 0, ',', 0, ')'];
          Util.makeCssRgb = function Util_makeCssRgb(r, g, b) {
            rgbBuf[1] = r;
            rgbBuf[3] = g;
            rgbBuf[5] = b;
            return rgbBuf.join('');
          };
          Util.transform = function Util_transform(m1, m2) {
            return [
              m1[0] * m2[0] + m1[2] * m2[1],
              m1[1] * m2[0] + m1[3] * m2[1],
              m1[0] * m2[2] + m1[2] * m2[3],
              m1[1] * m2[2] + m1[3] * m2[3],
              m1[0] * m2[4] + m1[2] * m2[5] + m1[4],
              m1[1] * m2[4] + m1[3] * m2[5] + m1[5],
            ];
          };
          Util.applyTransform = function Util_applyTransform(p, m) {
            const xt = p[0] * m[0] + p[1] * m[2] + m[4];
            const yt = p[0] * m[1] + p[1] * m[3] + m[5];
            return [xt, yt];
          };
          Util.applyInverseTransform = function Util_applyInverseTransform(p, m) {
            const d = m[0] * m[3] - m[1] * m[2];
            const xt = (p[0] * m[3] - p[1] * m[2] + m[2] * m[5] - m[4] * m[3]) / d;
            const yt = (-p[0] * m[1] + p[1] * m[0] + m[4] * m[1] - m[5] * m[0]) / d;
            return [xt, yt];
          };
          Util.getAxialAlignedBoundingBox = function Util_getAxialAlignedBoundingBox(r, m) {
            const p1 = Util.applyTransform(r, m);
            const p2 = Util.applyTransform(r.slice(2, 4), m);
            const p3 = Util.applyTransform([r[0], r[3]], m);
            const p4 = Util.applyTransform([r[2], r[1]], m);
            return [
              Math.min(p1[0], p2[0], p3[0], p4[0]),
              Math.min(p1[1], p2[1], p3[1], p4[1]),
              Math.max(p1[0], p2[0], p3[0], p4[0]),
              Math.max(p1[1], p2[1], p3[1], p4[1]),
            ];
          };
          Util.inverseTransform = function Util_inverseTransform(m) {
            const d = m[0] * m[3] - m[1] * m[2];
            return [m[3] / d, -m[1] / d, -m[2] / d, m[0] / d, (m[2] * m[5] - m[4] * m[3]) / d, (m[4] * m[1] - m[5] * m[0]) / d];
          };
          Util.apply3dTransform = function Util_apply3dTransform(m, v) {
            return [
              m[0] * v[0] + m[1] * v[1] + m[2] * v[2],
              m[3] * v[0] + m[4] * v[1] + m[5] * v[2],
              m[6] * v[0] + m[7] * v[1] + m[8] * v[2],
            ];
          };
          Util.singularValueDecompose2dScale = function Util_singularValueDecompose2dScale(m) {
            const transpose = [m[0], m[2], m[1], m[3]];
            const a = m[0] * transpose[0] + m[1] * transpose[2];
            const b = m[0] * transpose[1] + m[1] * transpose[3];
            const c = m[2] * transpose[0] + m[3] * transpose[2];
            const d = m[2] * transpose[1] + m[3] * transpose[3];
            const first = (a + d) / 2;
            const second = Math.sqrt((a + d) * (a + d) - 4 * (a * d - c * b)) / 2;
            const sx = first + second || 1;
            const sy = first - second || 1;
            return [Math.sqrt(sx), Math.sqrt(sy)];
          };
          Util.normalizeRect = function Util_normalizeRect(rect) {
            const r = rect.slice(0);
            if (rect[0] > rect[2]) {
              r[0] = rect[2];
              r[2] = rect[0];
            }
            if (rect[1] > rect[3]) {
              r[1] = rect[3];
              r[3] = rect[1];
            }
            return r;
          };
          Util.intersect = function Util_intersect(rect1, rect2) {
            function compare(a, b) {
              return a - b;
            }
            const orderedX = [rect1[0], rect1[2], rect2[0], rect2[2]].sort(compare),
              orderedY = [rect1[1], rect1[3], rect2[1], rect2[3]].sort(compare),
              result = [];
            rect1 = Util.normalizeRect(rect1);
            rect2 = Util.normalizeRect(rect2);
            if ((orderedX[0] === rect1[0] && orderedX[1] === rect2[0]) || (orderedX[0] === rect2[0] && orderedX[1] === rect1[0])) {
              result[0] = orderedX[1];
              result[2] = orderedX[2];
            } else {
              return false;
            }
            if ((orderedY[0] === rect1[1] && orderedY[1] === rect2[1]) || (orderedY[0] === rect2[1] && orderedY[1] === rect1[1])) {
              result[1] = orderedY[1];
              result[3] = orderedY[2];
            } else {
              return false;
            }
            return result;
          };
          return Util;
        })();
        const ROMAN_NUMBER_MAP = [
          '',
          'C',
          'CC',
          'CCC',
          'CD',
          'D',
          'DC',
          'DCC',
          'DCCC',
          'CM',
          '',
          'X',
          'XX',
          'XXX',
          'XL',
          'L',
          'LX',
          'LXX',
          'LXXX',
          'XC',
          '',
          'I',
          'II',
          'III',
          'IV',
          'V',
          'VI',
          'VII',
          'VIII',
          'IX',
        ];
        function toRomanNumerals(number) {
          const lowerCase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          assert(Number.isInteger(number) && number > 0, 'The number should be a positive integer.');
          let pos = void 0,
            romanBuf = [];
          while (number >= 1000) {
            number -= 1000;
            romanBuf.push('M');
          }
          pos = (number / 100) | 0;
          number %= 100;
          romanBuf.push(ROMAN_NUMBER_MAP[pos]);
          pos = (number / 10) | 0;
          number %= 10;
          romanBuf.push(ROMAN_NUMBER_MAP[10 + pos]);
          romanBuf.push(ROMAN_NUMBER_MAP[20 + number]);
          const romanStr = romanBuf.join('');
          return lowerCase ? romanStr.toLowerCase() : romanStr;
        }
        const PDFStringTranslateTable = [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0x2d8,
          0x2c7,
          0x2c6,
          0x2d9,
          0x2dd,
          0x2db,
          0x2da,
          0x2dc,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0x2022,
          0x2020,
          0x2021,
          0x2026,
          0x2014,
          0x2013,
          0x192,
          0x2044,
          0x2039,
          0x203a,
          0x2212,
          0x2030,
          0x201e,
          0x201c,
          0x201d,
          0x2018,
          0x2019,
          0x201a,
          0x2122,
          0xfb01,
          0xfb02,
          0x141,
          0x152,
          0x160,
          0x178,
          0x17d,
          0x131,
          0x142,
          0x153,
          0x161,
          0x17e,
          0,
          0x20ac,
        ];
        function stringToPDFString(str) {
          let i,
            n = str.length,
            strBuf = [];
          if (str[0] === '\xFE' && str[1] === '\xFF') {
            for (i = 2; i < n; i += 2) {
              strBuf.push(String.fromCharCode((str.charCodeAt(i) << 8) | str.charCodeAt(i + 1)));
            }
          } else {
            for (i = 0; i < n; ++i) {
              const code = PDFStringTranslateTable[str.charCodeAt(i)];
              strBuf.push(code ? String.fromCharCode(code) : str.charAt(i));
            }
          }
          return strBuf.join('');
        }
        function stringToUTF8String(str) {
          return decodeURIComponent(escape(str));
        }
        function utf8StringToString(str) {
          return unescape(encodeURIComponent(str));
        }
        function isEmptyObj(obj) {
          for (const key in obj) {
            return false;
          }
          return true;
        }
        function isBool(v) {
          return typeof v === 'boolean';
        }
        function isNum(v) {
          return typeof v === 'number';
        }
        function isString(v) {
          return typeof v === 'string';
        }
        function isArrayBuffer(v) {
          return (typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object' && v !== null && v.byteLength !== undefined;
        }
        function isSpace(ch) {
          return ch === 0x20 || ch === 0x09 || ch === 0x0d || ch === 0x0a;
        }
        function createPromiseCapability() {
          const capability = {};
          capability.promise = new Promise(function (resolve, reject) {
            capability.resolve = resolve;
            capability.reject = reject;
          });
          return capability;
        }
        const createObjectURL = (function createObjectURLClosure() {
          const digits = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
          return function createObjectURL(data, contentType) {
            const forceDataSchema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            if (!forceDataSchema && _url_polyfill.URL.createObjectURL) {
              const blob = new Blob([data], { type: contentType });
              return _url_polyfill.URL.createObjectURL(blob);
            }
            let buffer = 'data:' + contentType + ';base64,';
            for (let i = 0, ii = data.length; i < ii; i += 3) {
              const b1 = data[i] & 0xff;
              const b2 = data[i + 1] & 0xff;
              const b3 = data[i + 2] & 0xff;
              const d1 = b1 >> 2,
                d2 = ((b1 & 3) << 4) | (b2 >> 4);
              const d3 = i + 1 < ii ? ((b2 & 0xf) << 2) | (b3 >> 6) : 64;
              const d4 = i + 2 < ii ? b3 & 0x3f : 64;
              buffer += digits[d1] + digits[d2] + digits[d3] + digits[d4];
            }
            return buffer;
          };
        })();
        exports.FONT_IDENTITY_MATRIX = FONT_IDENTITY_MATRIX;
        exports.IDENTITY_MATRIX = IDENTITY_MATRIX;
        exports.OPS = OPS;
        exports.VerbosityLevel = VerbosityLevel;
        exports.UNSUPPORTED_FEATURES = UNSUPPORTED_FEATURES;
        exports.AnnotationBorderStyleType = AnnotationBorderStyleType;
        exports.AnnotationFieldFlag = AnnotationFieldFlag;
        exports.AnnotationFlag = AnnotationFlag;
        exports.AnnotationType = AnnotationType;
        exports.FontType = FontType;
        exports.ImageKind = ImageKind;
        exports.CMapCompressionType = CMapCompressionType;
        exports.AbortException = AbortException;
        exports.InvalidPDFException = InvalidPDFException;
        exports.MissingDataException = MissingDataException;
        exports.MissingPDFException = MissingPDFException;
        exports.NativeImageDecoding = NativeImageDecoding;
        exports.PasswordException = PasswordException;
        exports.PasswordResponses = PasswordResponses;
        exports.PermissionFlag = PermissionFlag;
        exports.StreamType = StreamType;
        exports.TextRenderingMode = TextRenderingMode;
        exports.UnexpectedResponseException = UnexpectedResponseException;
        exports.UnknownErrorException = UnknownErrorException;
        exports.Util = Util;
        exports.toRomanNumerals = toRomanNumerals;
        exports.XRefParseException = XRefParseException;
        exports.FormatError = FormatError;
        exports.arrayByteLength = arrayByteLength;
        exports.arraysToBytes = arraysToBytes;
        exports.assert = assert;
        exports.bytesToString = bytesToString;
        exports.createPromiseCapability = createPromiseCapability;
        exports.createObjectURL = createObjectURL;
        exports.deprecated = deprecated;
        exports.getInheritableProperty = getInheritableProperty;
        exports.getLookupTableFactory = getLookupTableFactory;
        exports.getVerbosityLevel = getVerbosityLevel;
        exports.info = info;
        exports.isArrayBuffer = isArrayBuffer;
        exports.isBool = isBool;
        exports.isEmptyObj = isEmptyObj;
        exports.isNum = isNum;
        exports.isString = isString;
        exports.isSpace = isSpace;
        exports.isSameOrigin = isSameOrigin;
        exports.createValidAbsoluteUrl = createValidAbsoluteUrl;
        exports.isLittleEndian = isLittleEndian;
        exports.isEvalSupported = isEvalSupported;
        exports.log2 = log2;
        exports.readInt8 = readInt8;
        exports.readUint16 = readUint16;
        exports.readUint32 = readUint32;
        exports.removeNullCharacters = removeNullCharacters;
        exports.ReadableStream = _streams_polyfill.ReadableStream;
        exports.URL = _url_polyfill.URL;
        exports.setVerbosityLevel = setVerbosityLevel;
        exports.shadow = shadow;
        exports.string32 = string32;
        exports.stringToBytes = stringToBytes;
        exports.stringToPDFString = stringToPDFString;
        exports.stringToUTF8String = stringToUTF8String;
        exports.utf8StringToString = utf8StringToString;
        exports.warn = warn;
        exports.unreachable = unreachable;

        /***/
      },
      /* 2 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const _typeof =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (obj) {
                return typeof obj;
              }
            : function (obj) {
                return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              };

        const globalScope = __w_pdfjs_require__(3);
        if (!globalScope._pdfjsCompatibilityChecked) {
          globalScope._pdfjsCompatibilityChecked = true;
          const isNodeJS = __w_pdfjs_require__(4);
          const hasDOM =
            (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' &&
            (typeof document === 'undefined' ? 'undefined' : _typeof(document)) === 'object';
          (function checkNodeBtoa() {
            if (globalScope.btoa || !isNodeJS()) {
              return;
            }
            globalScope.btoa = function (chars) {
              return Buffer.from(chars, 'binary').toString('base64');
            };
          })();
          (function checkNodeAtob() {
            if (globalScope.atob || !isNodeJS()) {
              return;
            }
            globalScope.atob = function (input) {
              return Buffer.from(input, 'base64').toString('binary');
            };
          })();
          (function checkCurrentScript() {
            if (!hasDOM) {
              return;
            }
            if ('currentScript' in document) {
              return;
            }
            Object.defineProperty(document, 'currentScript', {
              get: function get() {
                const scripts = document.getElementsByTagName('script');
                return scripts[scripts.length - 1];
              },

              enumerable: true,
              configurable: true,
            });
          })();
          (function checkChildNodeRemove() {
            if (!hasDOM) {
              return;
            }
            if (typeof Element.prototype.remove !== 'undefined') {
              return;
            }
            Element.prototype.remove = function () {
              if (this.parentNode) {
                this.parentNode.removeChild(this);
              }
            };
          })();
          (function checkDOMTokenListToggle() {
            if (!hasDOM || isNodeJS()) {
              return;
            }
            const div = document.createElement('div');
            if (div.classList.toggle('test', 0) === false) {
              return;
            }
            const originalDOMTokenListToggle = DOMTokenList.prototype.toggle;
            DOMTokenList.prototype.toggle = function (token) {
              if (arguments.length > 1) {
                const force = !!arguments[1];
                return this[force ? 'add' : 'remove'](token), force;
              }
              return originalDOMTokenListToggle(token);
            };
          })();
          (function checkStringIncludes() {
            if (String.prototype.includes) {
              return;
            }
            __w_pdfjs_require__(5);
          })();
          (function checkArrayIncludes() {
            if (Array.prototype.includes) {
              return;
            }
            __w_pdfjs_require__(33);
          })();
          (function checkObjectAssign() {
            if (Object.assign) {
              return;
            }
            __w_pdfjs_require__(42);
          })();
          (function checkMathLog2() {
            if (Math.log2) {
              return;
            }
            Math.log2 = __w_pdfjs_require__(52);
          })();
          (function checkNumberIsNaN() {
            if (Number.isNaN) {
              return;
            }
            Number.isNaN = __w_pdfjs_require__(54);
          })();
          (function checkNumberIsInteger() {
            if (Number.isInteger) {
              return;
            }
            Number.isInteger = __w_pdfjs_require__(56);
          })();
          (function checkPromise() {
            if (globalScope.Promise) {
              return;
            }
            globalScope.Promise = __w_pdfjs_require__(59);
          })();
          (function checkWeakMap() {
            if (globalScope.WeakMap) {
              return;
            }
            globalScope.WeakMap = __w_pdfjs_require__(94);
          })();
          (function checkStringCodePointAt() {
            if (String.codePointAt) {
              return;
            }
            String.codePointAt = __w_pdfjs_require__(111);
          })();
          (function checkStringFromCodePoint() {
            if (String.fromCodePoint) {
              return;
            }
            String.fromCodePoint = __w_pdfjs_require__(113);
          })();
          (function checkSymbol() {
            if (globalScope.Symbol) {
              return;
            }
            __w_pdfjs_require__(115);
          })();
          (function checkObjectValues() {
            if (Object.values) {
              return;
            }
            Object.values = __w_pdfjs_require__(122);
          })();
        }

        /***/
      },
      /* 3 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        module.exports =
          typeof window !== 'undefined' && window.Math === Math
            ? window
            : typeof global !== 'undefined' && global.Math === Math
            ? global
            : typeof self !== 'undefined' && self.Math === Math
            ? self
            : {};

        /***/
      },
      /* 4 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const _typeof =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (obj) {
                return typeof obj;
              }
            : function (obj) {
                return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              };

        module.exports = function isNodeJS() {
          return (typeof process === 'undefined' ? 'undefined' : _typeof(process)) === 'object' && process + '' === '[object process]';
        };

        /***/
      },
      /* 5 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        __w_pdfjs_require__(6);
        module.exports = __w_pdfjs_require__(9).String.includes;

        /***/
      },
      /* 6 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const $export = __w_pdfjs_require__(7);
        const context = __w_pdfjs_require__(25);
        const INCLUDES = 'includes';
        $export($export.P + $export.F * __w_pdfjs_require__(32)(INCLUDES), 'String', {
          includes: function includes(searchString) {
            return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
          },
        });

        /***/
      },
      /* 7 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const global = __w_pdfjs_require__(8);
        const core = __w_pdfjs_require__(9);
        const hide = __w_pdfjs_require__(10);
        const redefine = __w_pdfjs_require__(20);
        const ctx = __w_pdfjs_require__(23);
        const PROTOTYPE = 'prototype';
        const $export = function $export(type, name, source) {
          const IS_FORCED = type & $export.F;
          const IS_GLOBAL = type & $export.G;
          const IS_STATIC = type & $export.S;
          const IS_PROTO = type & $export.P;
          const IS_BIND = type & $export.B;
          const target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
          const exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
          const expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
          let key, own, out, exp;
          if (IS_GLOBAL) {
            source = name;
          }
          for (key in source) {
            own = !IS_FORCED && target && target[key] !== undefined;
            out = (own ? target : source)[key];
            exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out === 'function' ? ctx(Function.call, out) : out;
            if (target) {
              redefine(target, key, out, type & $export.U);
            }
            if (exports[key] != out) {
              hide(exports, key, exp);
            }
            if (IS_PROTO && expProto[key] != out) {
              expProto[key] = out;
            }
          }
        };
        global.core = core;
        $export.F = 1;
        $export.G = 2;
        $export.S = 4;
        $export.P = 8;
        $export.B = 16;
        $export.W = 32;
        $export.U = 64;
        $export.R = 128;
        module.exports = $export;

        /***/
      },
      /* 8 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const global = (module.exports =
          typeof window !== 'undefined' && window.Math == Math
            ? window
            : typeof self !== 'undefined' && self.Math == Math
            ? self
            : Function('return this')());
        if (typeof __g === 'number') {
          __g = global;
        }

        /***/
      },
      /* 9 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const core = (module.exports = { version: '2.5.7' });
        if (typeof __e === 'number') {
          __e = core;
        }

        /***/
      },
      /* 10 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const dP = __w_pdfjs_require__(11);
        const createDesc = __w_pdfjs_require__(19);
        module.exports = __w_pdfjs_require__(15)
          ? function (object, key, value) {
              return dP.f(object, key, createDesc(1, value));
            }
          : function (object, key, value) {
              object[key] = value;
              return object;
            };

        /***/
      },
      /* 11 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const anObject = __w_pdfjs_require__(12);
        const IE8_DOM_DEFINE = __w_pdfjs_require__(14);
        const toPrimitive = __w_pdfjs_require__(18);
        const dP = Object.defineProperty;
        exports.f = __w_pdfjs_require__(15)
          ? Object.defineProperty
          : function defineProperty(O, P, Attributes) {
              anObject(O);
              P = toPrimitive(P, true);
              anObject(Attributes);
              if (IE8_DOM_DEFINE) {
                try {
                  return dP(O, P, Attributes);
                } catch (e) {}
              }
              if ('get' in Attributes || 'set' in Attributes) {
                throw TypeError('Accessors not supported!');
              }
              if ('value' in Attributes) {
                O[P] = Attributes.value;
              }
              return O;
            };

        /***/
      },
      /* 12 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const isObject = __w_pdfjs_require__(13);
        module.exports = function (it) {
          if (!isObject(it)) {
            throw TypeError(it + ' is not an object!');
          }
          return it;
        };

        /***/
      },
      /* 13 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const _typeof =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (obj) {
                return typeof obj;
              }
            : function (obj) {
                return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              };

        module.exports = function (it) {
          return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
        };

        /***/
      },
      /* 14 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        module.exports =
          !__w_pdfjs_require__(15) &&
          !__w_pdfjs_require__(16)(function () {
            return (
              Object.defineProperty(__w_pdfjs_require__(17)('div'), 'a', {
                get: function get() {
                  return 7;
                },
              }).a != 7
            );
          });

        /***/
      },
      /* 15 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        module.exports = !__w_pdfjs_require__(16)(function () {
          return (
            Object.defineProperty({}, 'a', {
              get: function get() {
                return 7;
              },
            }).a != 7
          );
        });

        /***/
      },
      /* 16 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        module.exports = function (exec) {
          try {
            return !!exec();
          } catch (e) {
            return true;
          }
        };

        /***/
      },
      /* 17 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const isObject = __w_pdfjs_require__(13);
        const document = __w_pdfjs_require__(8).document;
        const is = isObject(document) && isObject(document.createElement);
        module.exports = function (it) {
          return is ? document.createElement(it) : {};
        };

        /***/
      },
      /* 18 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const isObject = __w_pdfjs_require__(13);
        module.exports = function (it, S) {
          if (!isObject(it)) {
            return it;
          }
          let fn, val;
          if (S && typeof (fn = it.toString) === 'function' && !isObject((val = fn.call(it)))) {
            return val;
          }
          if (typeof (fn = it.valueOf) === 'function' && !isObject((val = fn.call(it)))) {
            return val;
          }
          if (!S && typeof (fn = it.toString) === 'function' && !isObject((val = fn.call(it)))) {
            return val;
          }
          throw TypeError("Can't convert object to primitive value");
        };

        /***/
      },
      /* 19 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        module.exports = function (bitmap, value) {
          return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value: value,
          };
        };

        /***/
      },
      /* 20 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const global = __w_pdfjs_require__(8);
        const hide = __w_pdfjs_require__(10);
        const has = __w_pdfjs_require__(21);
        const SRC = __w_pdfjs_require__(22)('src');
        const TO_STRING = 'toString';
        const $toString = Function[TO_STRING];
        const TPL = ('' + $toString).split(TO_STRING);
        __w_pdfjs_require__(9).inspectSource = function (it) {
          return $toString.call(it);
        };
        (module.exports = function (O, key, val, safe) {
          const isFunction = typeof val === 'function';
          if (isFunction) {
            has(val, 'name') || hide(val, 'name', key);
          }
          if (O[key] === val) {
            return;
          }
          if (isFunction) {
            has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
          }
          if (O === global) {
            O[key] = val;
          } else if (!safe) {
            delete O[key];
            hide(O, key, val);
          } else if (O[key]) {
            O[key] = val;
          } else {
            hide(O, key, val);
          }
        })(Function.prototype, TO_STRING, function toString() {
          return (typeof this === 'function' && this[SRC]) || $toString.call(this);
        });

        /***/
      },
      /* 21 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const hasOwnProperty = {}.hasOwnProperty;
        module.exports = function (it, key) {
          return hasOwnProperty.call(it, key);
        };

        /***/
      },
      /* 22 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        let id = 0;
        const px = Math.random();
        module.exports = function (key) {
          return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
        };

        /***/
      },
      /* 23 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const aFunction = __w_pdfjs_require__(24);
        module.exports = function (fn, that, length) {
          aFunction(fn);
          if (that === undefined) {
            return fn;
          }
          switch (length) {
            case 1:
              return function (a) {
                return fn.call(that, a);
              };
            case 2:
              return function (a, b) {
                return fn.call(that, a, b);
              };
            case 3:
              return function (a, b, c) {
                return fn.call(that, a, b, c);
              };
          }
          return function () {
            return fn.apply(that, arguments);
          };
        };

        /***/
      },
      /* 24 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        module.exports = function (it) {
          if (typeof it !== 'function') {
            throw TypeError(it + ' is not a function!');
          }
          return it;
        };

        /***/
      },
      /* 25 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const isRegExp = __w_pdfjs_require__(26);
        const defined = __w_pdfjs_require__(31);
        module.exports = function (that, searchString, NAME) {
          if (isRegExp(searchString)) {
            throw TypeError('String#' + NAME + " doesn't accept regex!");
          }
          return String(defined(that));
        };

        /***/
      },
      /* 26 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const isObject = __w_pdfjs_require__(13);
        const cof = __w_pdfjs_require__(27);
        const MATCH = __w_pdfjs_require__(28)('match');
        module.exports = function (it) {
          let isRegExp;
          return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
        };

        /***/
      },
      /* 27 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const toString = {}.toString;
        module.exports = function (it) {
          return toString.call(it).slice(8, -1);
        };

        /***/
      },
      /* 28 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const store = __w_pdfjs_require__(29)('wks');
        const uid = __w_pdfjs_require__(22);
        const _Symbol = __w_pdfjs_require__(8).Symbol;
        const USE_SYMBOL = typeof _Symbol === 'function';
        const $exports = (module.exports = function (name) {
          return store[name] || (store[name] = (USE_SYMBOL && _Symbol[name]) || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
        });
        $exports.store = store;

        /***/
      },
      /* 29 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const core = __w_pdfjs_require__(9);
        const global = __w_pdfjs_require__(8);
        const SHARED = '__core-js_shared__';
        const store = global[SHARED] || (global[SHARED] = {});
        (module.exports = function (key, value) {
          return store[key] || (store[key] = value !== undefined ? value : {});
        })('versions', []).push({
          version: core.version,
          mode: __w_pdfjs_require__(30) ? 'pure' : 'global',
          copyright: '© 2018 Denis Pushkarev (zloirock.ru)',
        });

        /***/
      },
      /* 30 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        module.exports = false;

        /***/
      },
      /* 31 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        module.exports = function (it) {
          if (it == undefined) {
            throw TypeError("Can't call method on  " + it);
          }
          return it;
        };

        /***/
      },
      /* 32 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const MATCH = __w_pdfjs_require__(28)('match');
        module.exports = function (KEY) {
          const re = /./;
          try {
            '/./'[KEY](re);
          } catch (e) {
            try {
              re[MATCH] = false;
              return !'/./'[KEY](re);
            } catch (f) {}
          }
          return true;
        };

        /***/
      },
      /* 33 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        __w_pdfjs_require__(34);
        module.exports = __w_pdfjs_require__(9).Array.includes;

        /***/
      },
      /* 34 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const $export = __w_pdfjs_require__(7);
        const $includes = __w_pdfjs_require__(35)(true);
        $export($export.P, 'Array', {
          includes: function includes(el) {
            return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
          },
        });
        __w_pdfjs_require__(41)('includes');

        /***/
      },
      /* 35 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const toIObject = __w_pdfjs_require__(36);
        const toLength = __w_pdfjs_require__(38);
        const toAbsoluteIndex = __w_pdfjs_require__(40);
        module.exports = function (IS_INCLUDES) {
          return function ($this, el, fromIndex) {
            const O = toIObject($this);
            const length = toLength(O.length);
            let index = toAbsoluteIndex(fromIndex, length);
            let value;
            if (IS_INCLUDES && el != el) {
              while (length > index) {
                value = O[index++];
                if (value != value) {
                  return true;
                }
              }
            } else {
              for (; length > index; index++) {
                if (IS_INCLUDES || index in O) {
                  if (O[index] === el) {
                    return IS_INCLUDES || index || 0;
                  }
                }
              }
            }
            return !IS_INCLUDES && -1;
          };
        };

        /***/
      },
      /* 36 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const IObject = __w_pdfjs_require__(37);
        const defined = __w_pdfjs_require__(31);
        module.exports = function (it) {
          return IObject(defined(it));
        };

        /***/
      },
      /* 37 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const cof = __w_pdfjs_require__(27);
        module.exports = Object('z').propertyIsEnumerable(0)
          ? Object
          : function (it) {
              return cof(it) == 'String' ? it.split('') : Object(it);
            };

        /***/
      },
      /* 38 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const toInteger = __w_pdfjs_require__(39);
        const min = Math.min;
        module.exports = function (it) {
          return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
        };

        /***/
      },
      /* 39 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const ceil = Math.ceil;
        const floor = Math.floor;
        module.exports = function (it) {
          return isNaN((it = +it)) ? 0 : (it > 0 ? floor : ceil)(it);
        };

        /***/
      },
      /* 40 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const toInteger = __w_pdfjs_require__(39);
        const max = Math.max;
        const min = Math.min;
        module.exports = function (index, length) {
          index = toInteger(index);
          return index < 0 ? max(index + length, 0) : min(index, length);
        };

        /***/
      },
      /* 41 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const UNSCOPABLES = __w_pdfjs_require__(28)('unscopables');
        const ArrayProto = Array.prototype;
        if (ArrayProto[UNSCOPABLES] == undefined) {
          __w_pdfjs_require__(10)(ArrayProto, UNSCOPABLES, {});
        }
        module.exports = function (key) {
          ArrayProto[UNSCOPABLES][key] = true;
        };

        /***/
      },
      /* 42 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        __w_pdfjs_require__(43);
        module.exports = __w_pdfjs_require__(9).Object.assign;

        /***/
      },
      /* 43 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const $export = __w_pdfjs_require__(7);
        $export($export.S + $export.F, 'Object', { assign: __w_pdfjs_require__(44) });

        /***/
      },
      /* 44 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const getKeys = __w_pdfjs_require__(45);
        const gOPS = __w_pdfjs_require__(49);
        const pIE = __w_pdfjs_require__(50);
        const toObject = __w_pdfjs_require__(51);
        const IObject = __w_pdfjs_require__(37);
        const $assign = Object.assign;
        module.exports =
          !$assign ||
          __w_pdfjs_require__(16)(function () {
            const A = {};
            const B = {};
            const S = Symbol();
            const K = 'abcdefghijklmnopqrst';
            A[S] = 7;
            K.split('').forEach(function (k) {
              B[k] = k;
            });
            return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
          })
            ? function assign(target, source) {
                const T = toObject(target);
                const aLen = arguments.length;
                let index = 1;
                const getSymbols = gOPS.f;
                const isEnum = pIE.f;
                while (aLen > index) {
                  const S = IObject(arguments[index++]);
                  const keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
                  const length = keys.length;
                  let j = 0;
                  var key;
                  while (length > j) {
                    if (isEnum.call(S, (key = keys[j++]))) {
                      T[key] = S[key];
                    }
                  }
                }
                return T;
              }
            : $assign;

        /***/
      },
      /* 45 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const $keys = __w_pdfjs_require__(46);
        const enumBugKeys = __w_pdfjs_require__(48);
        module.exports =
          Object.keys ||
          function keys(O) {
            return $keys(O, enumBugKeys);
          };

        /***/
      },
      /* 46 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const has = __w_pdfjs_require__(21);
        const toIObject = __w_pdfjs_require__(36);
        const arrayIndexOf = __w_pdfjs_require__(35)(false);
        const IE_PROTO = __w_pdfjs_require__(47)('IE_PROTO');
        module.exports = function (object, names) {
          const O = toIObject(object);
          let i = 0;
          const result = [];
          let key;
          for (key in O) {
            if (key != IE_PROTO) {
              has(O, key) && result.push(key);
            }
          }
          while (names.length > i) {
            if (has(O, (key = names[i++]))) {
              ~arrayIndexOf(result, key) || result.push(key);
            }
          }
          return result;
        };

        /***/
      },
      /* 47 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const shared = __w_pdfjs_require__(29)('keys');
        const uid = __w_pdfjs_require__(22);
        module.exports = function (key) {
          return shared[key] || (shared[key] = uid(key));
        };

        /***/
      },
      /* 48 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

        /***/
      },
      /* 49 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        exports.f = Object.getOwnPropertySymbols;

        /***/
      },
      /* 50 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        exports.f = {}.propertyIsEnumerable;

        /***/
      },
      /* 51 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const defined = __w_pdfjs_require__(31);
        module.exports = function (it) {
          return Object(defined(it));
        };

        /***/
      },
      /* 52 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        __w_pdfjs_require__(53);
        module.exports = __w_pdfjs_require__(9).Math.log2;

        /***/
      },
      /* 53 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const $export = __w_pdfjs_require__(7);
        $export($export.S, 'Math', {
          log2: function log2(x) {
            return Math.log(x) / Math.LN2;
          },
        });

        /***/
      },
      /* 54 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        __w_pdfjs_require__(55);
        module.exports = __w_pdfjs_require__(9).Number.isNaN;

        /***/
      },
      /* 55 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const $export = __w_pdfjs_require__(7);
        $export($export.S, 'Number', {
          isNaN: function isNaN(number) {
            return number != number;
          },
        });

        /***/
      },
      /* 56 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        __w_pdfjs_require__(57);
        module.exports = __w_pdfjs_require__(9).Number.isInteger;

        /***/
      },
      /* 57 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const $export = __w_pdfjs_require__(7);
        $export($export.S, 'Number', { isInteger: __w_pdfjs_require__(58) });

        /***/
      },
      /* 58 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const isObject = __w_pdfjs_require__(13);
        const floor = Math.floor;
        module.exports = function isInteger(it) {
          return !isObject(it) && isFinite(it) && floor(it) === it;
        };

        /***/
      },
      /* 59 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        __w_pdfjs_require__(60);
        __w_pdfjs_require__(62);
        __w_pdfjs_require__(72);
        __w_pdfjs_require__(75);
        __w_pdfjs_require__(92);
        __w_pdfjs_require__(93);
        module.exports = __w_pdfjs_require__(9).Promise;

        /***/
      },
      /* 60 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const classof = __w_pdfjs_require__(61);
        const test = {};

        test[__w_pdfjs_require__(28)('toStringTag')] = 'z';
        if (test + '' != '[object z]') {
          __w_pdfjs_require__(20)(
            Object.prototype,
            'toString',
            function toString() {
              return '[object ' + classof(this) + ']';
            },
            true,
          );
        }

        /***/
      },
      /* 61 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const cof = __w_pdfjs_require__(27);
        const TAG = __w_pdfjs_require__(28)('toStringTag');
        const ARG =
          cof(
            (function () {
              return arguments;
            })(),
          ) == 'Arguments';
        const tryGet = function tryGet(it, key) {
          try {
            return it[key];
          } catch (e) {}
        };
        module.exports = function (it) {
          let O, T, B;
          return it === undefined
            ? 'Undefined'
            : it === null
            ? 'Null'
            : typeof (T = tryGet((O = Object(it)), TAG)) === 'string'
            ? T
            : ARG
            ? cof(O)
            : (B = cof(O)) == 'Object' && typeof O.callee === 'function'
            ? 'Arguments'
            : B;
        };

        /***/
      },
      /* 62 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const $at = __w_pdfjs_require__(63)(true);
        __w_pdfjs_require__(64)(
          String,
          'String',
          function (iterated) {
            this._t = String(iterated);
            this._i = 0;
          },
          function () {
            const O = this._t;
            const index = this._i;
            let point;
            if (index >= O.length) {
              return {
                value: undefined,
                done: true,
              };
            }
            point = $at(O, index);
            this._i += point.length;
            return {
              value: point,
              done: false,
            };
          },
        );

        /***/
      },
      /* 63 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const toInteger = __w_pdfjs_require__(39);
        const defined = __w_pdfjs_require__(31);
        module.exports = function (TO_STRING) {
          return function (that, pos) {
            const s = String(defined(that));
            const i = toInteger(pos);
            const l = s.length;
            let a, b;
            if (i < 0 || i >= l) {
              return TO_STRING ? '' : undefined;
            }
            a = s.charCodeAt(i);
            return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
              ? TO_STRING
                ? s.charAt(i)
                : a
              : TO_STRING
              ? s.slice(i, i + 2)
              : ((a - 0xd800) << 10) + (b - 0xdc00) + 0x10000;
          };
        };

        /***/
      },
      /* 64 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const LIBRARY = __w_pdfjs_require__(30);
        const $export = __w_pdfjs_require__(7);
        const redefine = __w_pdfjs_require__(20);
        const hide = __w_pdfjs_require__(10);
        const Iterators = __w_pdfjs_require__(65);
        const $iterCreate = __w_pdfjs_require__(66);
        const setToStringTag = __w_pdfjs_require__(70);
        const getPrototypeOf = __w_pdfjs_require__(71);
        const ITERATOR = __w_pdfjs_require__(28)('iterator');
        const BUGGY = !([].keys && 'next' in [].keys());
        const FF_ITERATOR = '@@iterator';
        const KEYS = 'keys';
        const VALUES = 'values';
        const returnThis = function returnThis() {
          return this;
        };
        module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
          $iterCreate(Constructor, NAME, next);
          const getMethod = function getMethod(kind) {
            if (!BUGGY && kind in proto) {
              return proto[kind];
            }
            switch (kind) {
              case KEYS:
                return function keys() {
                  return new Constructor(this, kind);
                };
              case VALUES:
                return function values() {
                  return new Constructor(this, kind);
                };
            }
            return function entries() {
              return new Constructor(this, kind);
            };
          };
          const TAG = NAME + ' Iterator';
          const DEF_VALUES = DEFAULT == VALUES;
          let VALUES_BUG = false;
          var proto = Base.prototype;
          const $native = proto[ITERATOR] || proto[FF_ITERATOR] || (DEFAULT && proto[DEFAULT]);
          let $default = $native || getMethod(DEFAULT);
          const $entries = DEFAULT ? (!DEF_VALUES ? $default : getMethod('entries')) : undefined;
          const $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
          let methods, key, IteratorPrototype;
          if ($anyNative) {
            IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
            if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
              setToStringTag(IteratorPrototype, TAG, true);
              if (!LIBRARY && typeof IteratorPrototype[ITERATOR] !== 'function') {
                hide(IteratorPrototype, ITERATOR, returnThis);
              }
            }
          }
          if (DEF_VALUES && $native && $native.name !== VALUES) {
            VALUES_BUG = true;
            $default = function values() {
              return $native.call(this);
            };
          }
          if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
            hide(proto, ITERATOR, $default);
          }
          Iterators[NAME] = $default;
          Iterators[TAG] = returnThis;
          if (DEFAULT) {
            methods = {
              values: DEF_VALUES ? $default : getMethod(VALUES),
              keys: IS_SET ? $default : getMethod(KEYS),
              entries: $entries,
            };
            if (FORCED) {
              for (key in methods) {
                if (!(key in proto)) {
                  redefine(proto, key, methods[key]);
                }
              }
            } else {
              $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
            }
          }
          return methods;
        };

        /***/
      },
      /* 65 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        module.exports = {};

        /***/
      },
      /* 66 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const create = __w_pdfjs_require__(67);
        const descriptor = __w_pdfjs_require__(19);
        const setToStringTag = __w_pdfjs_require__(70);
        const IteratorPrototype = {};
        __w_pdfjs_require__(10)(IteratorPrototype, __w_pdfjs_require__(28)('iterator'), function () {
          return this;
        });
        module.exports = function (Constructor, NAME, next) {
          Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
          setToStringTag(Constructor, NAME + ' Iterator');
        };

        /***/
      },
      /* 67 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const anObject = __w_pdfjs_require__(12);
        const dPs = __w_pdfjs_require__(68);
        const enumBugKeys = __w_pdfjs_require__(48);
        const IE_PROTO = __w_pdfjs_require__(47)('IE_PROTO');
        const Empty = function Empty() {};
        const PROTOTYPE = 'prototype';
        var _createDict = function createDict() {
          const iframe = __w_pdfjs_require__(17)('iframe');
          let i = enumBugKeys.length;
          const lt = '<';
          const gt = '>';
          let iframeDocument;
          iframe.style.display = 'none';
          __w_pdfjs_require__(69).appendChild(iframe);
          iframe.src = 'javascript:';
          iframeDocument = iframe.contentWindow.document;
          iframeDocument.open();
          iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
          iframeDocument.close();
          _createDict = iframeDocument.F;
          while (i--) {
            delete _createDict[PROTOTYPE][enumBugKeys[i]];
          }
          return _createDict();
        };
        module.exports =
          Object.create ||
          function create(O, Properties) {
            let result;
            if (O !== null) {
              Empty[PROTOTYPE] = anObject(O);
              result = new Empty();
              Empty[PROTOTYPE] = null;
              result[IE_PROTO] = O;
            } else {
              result = _createDict();
            }
            return Properties === undefined ? result : dPs(result, Properties);
          };

        /***/
      },
      /* 68 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const dP = __w_pdfjs_require__(11);
        const anObject = __w_pdfjs_require__(12);
        const getKeys = __w_pdfjs_require__(45);
        module.exports = __w_pdfjs_require__(15)
          ? Object.defineProperties
          : function defineProperties(O, Properties) {
              anObject(O);
              const keys = getKeys(Properties);
              const length = keys.length;
              let i = 0;
              let P;
              while (length > i) {
                dP.f(O, (P = keys[i++]), Properties[P]);
              }
              return O;
            };

        /***/
      },
      /* 69 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const document = __w_pdfjs_require__(8).document;
        module.exports = document && document.documentElement;

        /***/
      },
      /* 70 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const def = __w_pdfjs_require__(11).f;
        const has = __w_pdfjs_require__(21);
        const TAG = __w_pdfjs_require__(28)('toStringTag');
        module.exports = function (it, tag, stat) {
          if (it && !has((it = stat ? it : it.prototype), TAG)) {
            def(it, TAG, {
              configurable: true,
              value: tag,
            });
          }
        };

        /***/
      },
      /* 71 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const has = __w_pdfjs_require__(21);
        const toObject = __w_pdfjs_require__(51);
        const IE_PROTO = __w_pdfjs_require__(47)('IE_PROTO');
        const ObjectProto = Object.prototype;
        module.exports =
          Object.getPrototypeOf ||
          function (O) {
            O = toObject(O);
            if (has(O, IE_PROTO)) {
              return O[IE_PROTO];
            }
            if (typeof O.constructor === 'function' && O instanceof O.constructor) {
              return O.constructor.prototype;
            }
            return O instanceof Object ? ObjectProto : null;
          };

        /***/
      },
      /* 72 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const $iterators = __w_pdfjs_require__(73);
        const getKeys = __w_pdfjs_require__(45);
        const redefine = __w_pdfjs_require__(20);
        const global = __w_pdfjs_require__(8);
        const hide = __w_pdfjs_require__(10);
        const Iterators = __w_pdfjs_require__(65);
        const wks = __w_pdfjs_require__(28);
        const ITERATOR = wks('iterator');
        const TO_STRING_TAG = wks('toStringTag');
        const ArrayValues = Iterators.Array;
        const DOMIterables = {
          CSSRuleList: true,
          CSSStyleDeclaration: false,
          CSSValueList: false,
          ClientRectList: false,
          DOMRectList: false,
          DOMStringList: false,
          DOMTokenList: true,
          DataTransferItemList: false,
          FileList: false,
          HTMLAllCollection: false,
          HTMLCollection: false,
          HTMLFormElement: false,
          HTMLSelectElement: false,
          MediaList: true,
          MimeTypeArray: false,
          NamedNodeMap: false,
          NodeList: true,
          PaintRequestList: false,
          Plugin: false,
          PluginArray: false,
          SVGLengthList: false,
          SVGNumberList: false,
          SVGPathSegList: false,
          SVGPointList: false,
          SVGStringList: false,
          SVGTransformList: false,
          SourceBufferList: false,
          StyleSheetList: true,
          TextTrackCueList: false,
          TextTrackList: false,
          TouchList: false,
        };
        for (let collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
          const NAME = collections[i];
          const explicit = DOMIterables[NAME];
          const Collection = global[NAME];
          const proto = Collection && Collection.prototype;
          var key;
          if (proto) {
            if (!proto[ITERATOR]) {
              hide(proto, ITERATOR, ArrayValues);
            }
            if (!proto[TO_STRING_TAG]) {
              hide(proto, TO_STRING_TAG, NAME);
            }
            Iterators[NAME] = ArrayValues;
            if (explicit) {
              for (key in $iterators) {
                if (!proto[key]) {
                  redefine(proto, key, $iterators[key], true);
                }
              }
            }
          }
        }

        /***/
      },
      /* 73 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const addToUnscopables = __w_pdfjs_require__(41);
        const step = __w_pdfjs_require__(74);
        const Iterators = __w_pdfjs_require__(65);
        const toIObject = __w_pdfjs_require__(36);
        module.exports = __w_pdfjs_require__(64)(
          Array,
          'Array',
          function (iterated, kind) {
            this._t = toIObject(iterated);
            this._i = 0;
            this._k = kind;
          },
          function () {
            const O = this._t;
            const kind = this._k;
            const index = this._i++;
            if (!O || index >= O.length) {
              this._t = undefined;
              return step(1);
            }
            if (kind == 'keys') {
              return step(0, index);
            }
            if (kind == 'values') {
              return step(0, O[index]);
            }
            return step(0, [index, O[index]]);
          },
          'values',
        );
        Iterators.Arguments = Iterators.Array;
        addToUnscopables('keys');
        addToUnscopables('values');
        addToUnscopables('entries');

        /***/
      },
      /* 74 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        module.exports = function (done, value) {
          return {
            value: value,
            done: !!done,
          };
        };

        /***/
      },
      /* 75 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const LIBRARY = __w_pdfjs_require__(30);
        const global = __w_pdfjs_require__(8);
        const ctx = __w_pdfjs_require__(23);
        const classof = __w_pdfjs_require__(61);
        const $export = __w_pdfjs_require__(7);
        const isObject = __w_pdfjs_require__(13);
        const aFunction = __w_pdfjs_require__(24);
        const anInstance = __w_pdfjs_require__(76);
        const forOf = __w_pdfjs_require__(77);
        const speciesConstructor = __w_pdfjs_require__(81);
        const task = __w_pdfjs_require__(82).set;
        const microtask = __w_pdfjs_require__(84)();
        const newPromiseCapabilityModule = __w_pdfjs_require__(85);
        const perform = __w_pdfjs_require__(86);
        const userAgent = __w_pdfjs_require__(87);
        const promiseResolve = __w_pdfjs_require__(88);
        const PROMISE = 'Promise';
        const TypeError = global.TypeError;
        const process = global.process;
        const versions = process && process.versions;
        const v8 = (versions && versions.v8) || '';
        let $Promise = global[PROMISE];
        const isNode = classof(process) == 'process';
        const empty = function empty() {};
        let Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
        let newPromiseCapability = (newGenericPromiseCapability = newPromiseCapabilityModule.f);
        const USE_NATIVE = !!(function () {
          try {
            const promise = $Promise.resolve(1);
            const FakePromise = ((promise.constructor = {})[__w_pdfjs_require__(28)('species')] = function (exec) {
              exec(empty, empty);
            });
            return (
              (isNode || typeof PromiseRejectionEvent === 'function') &&
              promise.then(empty) instanceof FakePromise &&
              v8.indexOf('6.6') !== 0 &&
              userAgent.indexOf('Chrome/66') === -1
            );
          } catch (e) {}
        })();
        const isThenable = function isThenable(it) {
          let then;
          return isObject(it) && typeof (then = it.then) === 'function' ? then : false;
        };
        const notify = function notify(promise, isReject) {
          if (promise._n) {
            return;
          }
          promise._n = true;
          const chain = promise._c;
          microtask(function () {
            const value = promise._v;
            const ok = promise._s == 1;
            let i = 0;
            const run = function run(reaction) {
              const handler = ok ? reaction.ok : reaction.fail;
              const resolve = reaction.resolve;
              const reject = reaction.reject;
              const domain = reaction.domain;
              let result, then, exited;
              try {
                if (handler) {
                  if (!ok) {
                    if (promise._h == 2) {
                      onHandleUnhandled(promise);
                    }
                    promise._h = 1;
                  }
                  if (handler === true) {
                    result = value;
                  } else {
                    if (domain) {
                      domain.enter();
                    }
                    result = handler(value);
                    if (domain) {
                      domain.exit();
                      exited = true;
                    }
                  }
                  if (result === reaction.promise) {
                    reject(TypeError('Promise-chain cycle'));
                  } else if ((then = isThenable(result))) {
                    then.call(result, resolve, reject);
                  } else {
                    resolve(result);
                  }
                } else {
                  reject(value);
                }
              } catch (e) {
                if (domain && !exited) {
                  domain.exit();
                }
                reject(e);
              }
            };
            while (chain.length > i) {
              run(chain[i++]);
            }
            promise._c = [];
            promise._n = false;
            if (isReject && !promise._h) {
              onUnhandled(promise);
            }
          });
        };
        var onUnhandled = function onUnhandled(promise) {
          task.call(global, function () {
            const value = promise._v;
            const unhandled = isUnhandled(promise);
            let result, handler, console;
            if (unhandled) {
              result = perform(function () {
                if (isNode) {
                  process.emit('unhandledRejection', value, promise);
                } else if ((handler = global.onunhandledrejection)) {
                  handler({
                    promise: promise,
                    reason: value,
                  });
                } else if ((console = global.console) && console.error) {
                  console.error('Unhandled promise rejection', value);
                }
              });
              promise._h = isNode || isUnhandled(promise) ? 2 : 1;
            }
            promise._a = undefined;
            if (unhandled && result.e) {
              throw result.v;
            }
          });
        };
        var isUnhandled = function isUnhandled(promise) {
          return promise._h !== 1 && (promise._a || promise._c).length === 0;
        };
        var onHandleUnhandled = function onHandleUnhandled(promise) {
          task.call(global, function () {
            let handler;
            if (isNode) {
              process.emit('rejectionHandled', promise);
            } else if ((handler = global.onrejectionhandled)) {
              handler({
                promise: promise,
                reason: promise._v,
              });
            }
          });
        };
        const $reject = function $reject(value) {
          let promise = this;
          if (promise._d) {
            return;
          }
          promise._d = true;
          promise = promise._w || promise;
          promise._v = value;
          promise._s = 2;
          if (!promise._a) {
            promise._a = promise._c.slice();
          }
          notify(promise, true);
        };
        const $resolve = function $resolve(value) {
          let promise = this;
          let then;
          if (promise._d) {
            return;
          }
          promise._d = true;
          promise = promise._w || promise;
          try {
            if (promise === value) {
              throw TypeError("Promise can't be resolved itself");
            }
            if ((then = isThenable(value))) {
              microtask(function () {
                const wrapper = {
                  _w: promise,
                  _d: false,
                };
                try {
                  then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
                } catch (e) {
                  $reject.call(wrapper, e);
                }
              });
            } else {
              promise._v = value;
              promise._s = 1;
              notify(promise, false);
            }
          } catch (e) {
            $reject.call(
              {
                _w: promise,
                _d: false,
              },
              e,
            );
          }
        };
        if (!USE_NATIVE) {
          $Promise = function Promise(executor) {
            anInstance(this, $Promise, PROMISE, '_h');
            aFunction(executor);
            Internal.call(this);
            try {
              executor(ctx($resolve, this, 1), ctx($reject, this, 1));
            } catch (err) {
              $reject.call(this, err);
            }
          };
          Internal = function Promise(executor) {
            this._c = [];
            this._a = undefined;
            this._s = 0;
            this._d = false;
            this._v = undefined;
            this._h = 0;
            this._n = false;
          };
          Internal.prototype = __w_pdfjs_require__(89)($Promise.prototype, {
            then: function then(onFulfilled, onRejected) {
              const reaction = newPromiseCapability(speciesConstructor(this, $Promise));
              reaction.ok = typeof onFulfilled === 'function' ? onFulfilled : true;
              reaction.fail = typeof onRejected === 'function' && onRejected;
              reaction.domain = isNode ? process.domain : undefined;
              this._c.push(reaction);
              if (this._a) {
                this._a.push(reaction);
              }
              if (this._s) {
                notify(this, false);
              }
              return reaction.promise;
            },
            catch: function _catch(onRejected) {
              return this.then(undefined, onRejected);
            },
          });
          OwnPromiseCapability = function OwnPromiseCapability() {
            const promise = new Internal();
            this.promise = promise;
            this.resolve = ctx($resolve, promise, 1);
            this.reject = ctx($reject, promise, 1);
          };
          newPromiseCapabilityModule.f = newPromiseCapability = function newPromiseCapability(C) {
            return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
          };
        }
        $export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
        __w_pdfjs_require__(70)($Promise, PROMISE);
        __w_pdfjs_require__(90)(PROMISE);
        Wrapper = __w_pdfjs_require__(9)[PROMISE];
        $export($export.S + $export.F * !USE_NATIVE, PROMISE, {
          reject: function reject(r) {
            const capability = newPromiseCapability(this);
            const $$reject = capability.reject;
            $$reject(r);
            return capability.promise;
          },
        });
        $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
          resolve: function resolve(x) {
            return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
          },
        });
        $export(
          $export.S +
            $export.F *
              !(
                USE_NATIVE &&
                __w_pdfjs_require__(91)(function (iter) {
                  $Promise.all(iter)['catch'](empty);
                })
              ),
          PROMISE,
          {
            all: function all(iterable) {
              const C = this;
              const capability = newPromiseCapability(C);
              const resolve = capability.resolve;
              const reject = capability.reject;
              const result = perform(function () {
                const values = [];
                let index = 0;
                let remaining = 1;
                forOf(iterable, false, function (promise) {
                  const $index = index++;
                  let alreadyCalled = false;
                  values.push(undefined);
                  remaining++;
                  C.resolve(promise).then(function (value) {
                    if (alreadyCalled) {
                      return;
                    }
                    alreadyCalled = true;
                    values[$index] = value;
                    --remaining || resolve(values);
                  }, reject);
                });
                --remaining || resolve(values);
              });
              if (result.e) {
                reject(result.v);
              }
              return capability.promise;
            },
            race: function race(iterable) {
              const C = this;
              const capability = newPromiseCapability(C);
              const reject = capability.reject;
              const result = perform(function () {
                forOf(iterable, false, function (promise) {
                  C.resolve(promise).then(capability.resolve, reject);
                });
              });
              if (result.e) {
                reject(result.v);
              }
              return capability.promise;
            },
          },
        );

        /***/
      },
      /* 76 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        module.exports = function (it, Constructor, name, forbiddenField) {
          if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
            throw TypeError(name + ': incorrect invocation!');
          }
          return it;
        };

        /***/
      },
      /* 77 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const ctx = __w_pdfjs_require__(23);
        const call = __w_pdfjs_require__(78);
        const isArrayIter = __w_pdfjs_require__(79);
        const anObject = __w_pdfjs_require__(12);
        const toLength = __w_pdfjs_require__(38);
        const getIterFn = __w_pdfjs_require__(80);
        const BREAK = {};
        const RETURN = {};
        const _exports = (module.exports = function (iterable, entries, fn, that, ITERATOR) {
          const iterFn = ITERATOR
            ? function () {
                return iterable;
              }
            : getIterFn(iterable);
          const f = ctx(fn, that, entries ? 2 : 1);
          let index = 0;
          let length, step, iterator, result;
          if (typeof iterFn !== 'function') {
            throw TypeError(iterable + ' is not iterable!');
          }
          if (isArrayIter(iterFn)) {
            for (length = toLength(iterable.length); length > index; index++) {
              result = entries ? f(anObject((step = iterable[index]))[0], step[1]) : f(iterable[index]);
              if (result === BREAK || result === RETURN) {
                return result;
              }
            }
          } else {
            for (iterator = iterFn.call(iterable); !(step = iterator.next()).done; ) {
              result = call(iterator, f, step.value, entries);
              if (result === BREAK || result === RETURN) {
                return result;
              }
            }
          }
        });
        _exports.BREAK = BREAK;
        _exports.RETURN = RETURN;

        /***/
      },
      /* 78 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const anObject = __w_pdfjs_require__(12);
        module.exports = function (iterator, fn, value, entries) {
          try {
            return entries ? fn(anObject(value)[0], value[1]) : fn(value);
          } catch (e) {
            const ret = iterator['return'];
            if (ret !== undefined) {
              anObject(ret.call(iterator));
            }
            throw e;
          }
        };

        /***/
      },
      /* 79 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const Iterators = __w_pdfjs_require__(65);
        const ITERATOR = __w_pdfjs_require__(28)('iterator');
        const ArrayProto = Array.prototype;
        module.exports = function (it) {
          return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
        };

        /***/
      },
      /* 80 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const classof = __w_pdfjs_require__(61);
        const ITERATOR = __w_pdfjs_require__(28)('iterator');
        const Iterators = __w_pdfjs_require__(65);
        module.exports = __w_pdfjs_require__(9).getIteratorMethod = function (it) {
          if (it != undefined) {
            return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
          }
        };

        /***/
      },
      /* 81 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const anObject = __w_pdfjs_require__(12);
        const aFunction = __w_pdfjs_require__(24);
        const SPECIES = __w_pdfjs_require__(28)('species');
        module.exports = function (O, D) {
          const C = anObject(O).constructor;
          let S;
          return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
        };

        /***/
      },
      /* 82 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const ctx = __w_pdfjs_require__(23);
        const invoke = __w_pdfjs_require__(83);
        const html = __w_pdfjs_require__(69);
        const cel = __w_pdfjs_require__(17);
        const global = __w_pdfjs_require__(8);
        const process = global.process;
        let setTask = global.setImmediate;
        let clearTask = global.clearImmediate;
        const MessageChannel = global.MessageChannel;
        const Dispatch = global.Dispatch;
        let counter = 0;
        const queue = {};
        const ONREADYSTATECHANGE = 'onreadystatechange';
        let defer, channel, port;
        const run = function run() {
          const id = +this;
          if (queue.hasOwnProperty(id)) {
            const fn = queue[id];
            delete queue[id];
            fn();
          }
        };
        const listener = function listener(event) {
          run.call(event.data);
        };
        if (!setTask || !clearTask) {
          setTask = function setImmediate(fn) {
            const args = [];
            let i = 1;
            while (arguments.length > i) {
              args.push(arguments[i++]);
            }
            queue[++counter] = function () {
              invoke(typeof fn === 'function' ? fn : Function(fn), args);
            };
            defer(counter);
            return counter;
          };
          clearTask = function clearImmediate(id) {
            delete queue[id];
          };
          if (__w_pdfjs_require__(27)(process) == 'process') {
            defer = function defer(id) {
              process.nextTick(ctx(run, id, 1));
            };
          } else if (Dispatch && Dispatch.now) {
            defer = function defer(id) {
              Dispatch.now(ctx(run, id, 1));
            };
          } else if (MessageChannel) {
            channel = new MessageChannel();
            port = channel.port2;
            channel.port1.onmessage = listener;
            defer = ctx(port.postMessage, port, 1);
          } else if (global.addEventListener && typeof postMessage === 'function' && !global.importScripts) {
            defer = function defer(id) {
              global.postMessage(id + '', '*');
            };
            global.addEventListener('message', listener, false);
          } else if (ONREADYSTATECHANGE in cel('script')) {
            defer = function defer(id) {
              html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
                html.removeChild(this);
                run.call(id);
              };
            };
          } else {
            defer = function defer(id) {
              setTimeout(ctx(run, id, 1), 0);
            };
          }
        }
        module.exports = {
          set: setTask,
          clear: clearTask,
        };

        /***/
      },
      /* 83 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        module.exports = function (fn, args, that) {
          const un = that === undefined;
          switch (args.length) {
            case 0:
              return un ? fn() : fn.call(that);
            case 1:
              return un ? fn(args[0]) : fn.call(that, args[0]);
            case 2:
              return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
            case 3:
              return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
            case 4:
              return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
          }
          return fn.apply(that, args);
        };

        /***/
      },
      /* 84 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const global = __w_pdfjs_require__(8);
        const macrotask = __w_pdfjs_require__(82).set;
        const Observer = global.MutationObserver || global.WebKitMutationObserver;
        const process = global.process;
        const Promise = global.Promise;
        const isNode = __w_pdfjs_require__(27)(process) == 'process';
        module.exports = function () {
          let head, last, notify;
          const flush = function flush() {
            let parent, fn;
            if (isNode && (parent = process.domain)) {
              parent.exit();
            }
            while (head) {
              fn = head.fn;
              head = head.next;
              try {
                fn();
              } catch (e) {
                if (head) {
                  notify();
                } else {
                  last = undefined;
                }
                throw e;
              }
            }
            last = undefined;
            if (parent) {
              parent.enter();
            }
          };
          if (isNode) {
            notify = function notify() {
              process.nextTick(flush);
            };
          } else if (Observer && !(global.navigator && global.navigator.standalone)) {
            let toggle = true;
            const node = document.createTextNode('');
            new Observer(flush).observe(node, { characterData: true });
            notify = function notify() {
              node.data = toggle = !toggle;
            };
          } else if (Promise && Promise.resolve) {
            const promise = Promise.resolve(undefined);
            notify = function notify() {
              promise.then(flush);
            };
          } else {
            notify = function notify() {
              macrotask.call(global, flush);
            };
          }
          return function (fn) {
            const task = {
              fn: fn,
              next: undefined,
            };
            if (last) {
              last.next = task;
            }
            if (!head) {
              head = task;
              notify();
            }
            last = task;
          };
        };

        /***/
      },
      /* 85 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const aFunction = __w_pdfjs_require__(24);
        function PromiseCapability(C) {
          let resolve, reject;
          this.promise = new C(function ($$resolve, $$reject) {
            if (resolve !== undefined || reject !== undefined) {
              throw TypeError('Bad Promise constructor');
            }
            resolve = $$resolve;
            reject = $$reject;
          });
          this.resolve = aFunction(resolve);
          this.reject = aFunction(reject);
        }
        module.exports.f = function (C) {
          return new PromiseCapability(C);
        };

        /***/
      },
      /* 86 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        module.exports = function (exec) {
          try {
            return {
              e: false,
              v: exec(),
            };
          } catch (e) {
            return {
              e: true,
              v: e,
            };
          }
        };

        /***/
      },
      /* 87 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const global = __w_pdfjs_require__(8);
        const navigator = global.navigator;
        module.exports = (navigator && navigator.userAgent) || '';

        /***/
      },
      /* 88 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const anObject = __w_pdfjs_require__(12);
        const isObject = __w_pdfjs_require__(13);
        const newPromiseCapability = __w_pdfjs_require__(85);
        module.exports = function (C, x) {
          anObject(C);
          if (isObject(x) && x.constructor === C) {
            return x;
          }
          const promiseCapability = newPromiseCapability.f(C);
          const resolve = promiseCapability.resolve;
          resolve(x);
          return promiseCapability.promise;
        };

        /***/
      },
      /* 89 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const redefine = __w_pdfjs_require__(20);
        module.exports = function (target, src, safe) {
          for (const key in src) {
            redefine(target, key, src[key], safe);
          }
          return target;
        };

        /***/
      },
      /* 90 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const global = __w_pdfjs_require__(8);
        const dP = __w_pdfjs_require__(11);
        const DESCRIPTORS = __w_pdfjs_require__(15);
        const SPECIES = __w_pdfjs_require__(28)('species');
        module.exports = function (KEY) {
          const C = global[KEY];
          if (DESCRIPTORS && C && !C[SPECIES]) {
            dP.f(C, SPECIES, {
              configurable: true,
              get: function get() {
                return this;
              },
            });
          }
        };

        /***/
      },
      /* 91 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const ITERATOR = __w_pdfjs_require__(28)('iterator');
        let SAFE_CLOSING = false;
        try {
          const riter = [7][ITERATOR]();
          riter['return'] = function () {
            SAFE_CLOSING = true;
          };
          Array.from(riter, function () {
            throw 2;
          });
        } catch (e) {}
        module.exports = function (exec, skipClosing) {
          if (!skipClosing && !SAFE_CLOSING) {
            return false;
          }
          let safe = false;
          try {
            const arr = [7];
            const iter = arr[ITERATOR]();
            iter.next = function () {
              return { done: (safe = true) };
            };
            arr[ITERATOR] = function () {
              return iter;
            };
            exec(arr);
          } catch (e) {}
          return safe;
        };

        /***/
      },
      /* 92 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const $export = __w_pdfjs_require__(7);
        const core = __w_pdfjs_require__(9);
        const global = __w_pdfjs_require__(8);
        const speciesConstructor = __w_pdfjs_require__(81);
        const promiseResolve = __w_pdfjs_require__(88);
        $export($export.P + $export.R, 'Promise', {
          finally: function _finally(onFinally) {
            const C = speciesConstructor(this, core.Promise || global.Promise);
            const isFunction = typeof onFinally === 'function';
            return this.then(
              isFunction
                ? function (x) {
                    return promiseResolve(C, onFinally()).then(function () {
                      return x;
                    });
                  }
                : onFinally,
              isFunction
                ? function (e) {
                    return promiseResolve(C, onFinally()).then(function () {
                      throw e;
                    });
                  }
                : onFinally,
            );
          },
        });

        /***/
      },
      /* 93 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const $export = __w_pdfjs_require__(7);
        const newPromiseCapability = __w_pdfjs_require__(85);
        const perform = __w_pdfjs_require__(86);
        $export($export.S, 'Promise', {
          try: function _try(callbackfn) {
            const promiseCapability = newPromiseCapability.f(this);
            const result = perform(callbackfn);
            (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
            return promiseCapability.promise;
          },
        });

        /***/
      },
      /* 94 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        __w_pdfjs_require__(60);
        __w_pdfjs_require__(72);
        __w_pdfjs_require__(95);
        __w_pdfjs_require__(107);
        __w_pdfjs_require__(109);
        module.exports = __w_pdfjs_require__(9).WeakMap;

        /***/
      },
      /* 95 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const each = __w_pdfjs_require__(96)(0);
        const redefine = __w_pdfjs_require__(20);
        const meta = __w_pdfjs_require__(100);
        const assign = __w_pdfjs_require__(44);
        const weak = __w_pdfjs_require__(101);
        const isObject = __w_pdfjs_require__(13);
        const fails = __w_pdfjs_require__(16);
        const validate = __w_pdfjs_require__(102);
        const WEAK_MAP = 'WeakMap';
        const getWeak = meta.getWeak;
        const isExtensible = Object.isExtensible;
        const uncaughtFrozenStore = weak.ufstore;
        const tmp = {};
        let InternalMap;
        const wrapper = function wrapper(get) {
          return function WeakMap() {
            return get(this, arguments.length > 0 ? arguments[0] : undefined);
          };
        };
        const methods = {
          get: function get(key) {
            if (isObject(key)) {
              const data = getWeak(key);
              if (data === true) {
                return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
              }
              return data ? data[this._i] : undefined;
            }
          },
          set: function set(key, value) {
            return weak.def(validate(this, WEAK_MAP), key, value);
          },
        };
        const $WeakMap = (module.exports = __w_pdfjs_require__(103)(WEAK_MAP, wrapper, methods, weak, true, true));
        if (
          fails(function () {
            return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7;
          })
        ) {
          InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
          assign(InternalMap.prototype, methods);
          meta.NEED = true;
          each(['delete', 'has', 'get', 'set'], function (key) {
            const proto = $WeakMap.prototype;
            const method = proto[key];
            redefine(proto, key, function (a, b) {
              if (isObject(a) && !isExtensible(a)) {
                if (!this._f) {
                  this._f = new InternalMap();
                }
                const result = this._f[key](a, b);
                return key == 'set' ? this : result;
              }
              return method.call(this, a, b);
            });
          });
        }

        /***/
      },
      /* 96 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const ctx = __w_pdfjs_require__(23);
        const IObject = __w_pdfjs_require__(37);
        const toObject = __w_pdfjs_require__(51);
        const toLength = __w_pdfjs_require__(38);
        const asc = __w_pdfjs_require__(97);
        module.exports = function (TYPE, $create) {
          const IS_MAP = TYPE == 1;
          const IS_FILTER = TYPE == 2;
          const IS_SOME = TYPE == 3;
          const IS_EVERY = TYPE == 4;
          const IS_FIND_INDEX = TYPE == 6;
          const NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
          const create = $create || asc;
          return function ($this, callbackfn, that) {
            const O = toObject($this);
            const self = IObject(O);
            const f = ctx(callbackfn, that, 3);
            const length = toLength(self.length);
            let index = 0;
            const result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
            let val, res;
            for (; length > index; index++) {
              if (NO_HOLES || index in self) {
                val = self[index];
                res = f(val, index, O);
                if (TYPE) {
                  if (IS_MAP) {
                    result[index] = res;
                  } else if (res) {
                    switch (TYPE) {
                      case 3:
                        return true;
                      case 5:
                        return val;
                      case 6:
                        return index;
                      case 2:
                        result.push(val);
                    }
                  } else if (IS_EVERY) {
                    return false;
                  }
                }
              }
            }
            return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
          };
        };

        /***/
      },
      /* 97 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const speciesConstructor = __w_pdfjs_require__(98);
        module.exports = function (original, length) {
          return new (speciesConstructor(original))(length);
        };

        /***/
      },
      /* 98 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const isObject = __w_pdfjs_require__(13);
        const isArray = __w_pdfjs_require__(99);
        const SPECIES = __w_pdfjs_require__(28)('species');
        module.exports = function (original) {
          let C;
          if (isArray(original)) {
            C = original.constructor;
            if (typeof C === 'function' && (C === Array || isArray(C.prototype))) {
              C = undefined;
            }
            if (isObject(C)) {
              C = C[SPECIES];
              if (C === null) {
                C = undefined;
              }
            }
          }
          return C === undefined ? Array : C;
        };

        /***/
      },
      /* 99 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const cof = __w_pdfjs_require__(27);
        module.exports =
          Array.isArray ||
          function isArray(arg) {
            return cof(arg) == 'Array';
          };

        /***/
      },
      /* 100 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const _typeof =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (obj) {
                return typeof obj;
              }
            : function (obj) {
                return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              };

        const META = __w_pdfjs_require__(22)('meta');
        const isObject = __w_pdfjs_require__(13);
        const has = __w_pdfjs_require__(21);
        const setDesc = __w_pdfjs_require__(11).f;
        let id = 0;
        const isExtensible =
          Object.isExtensible ||
          function () {
            return true;
          };
        const FREEZE = !__w_pdfjs_require__(16)(function () {
          return isExtensible(Object.preventExtensions({}));
        });
        const setMeta = function setMeta(it) {
          setDesc(it, META, {
            value: {
              i: 'O' + ++id,
              w: {},
            },
          });
        };
        const fastKey = function fastKey(it, create) {
          if (!isObject(it)) {
            return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : (typeof it === 'string' ? 'S' : 'P') + it;
          }
          if (!has(it, META)) {
            if (!isExtensible(it)) {
              return 'F';
            }
            if (!create) {
              return 'E';
            }
            setMeta(it);
          }
          return it[META].i;
        };
        const getWeak = function getWeak(it, create) {
          if (!has(it, META)) {
            if (!isExtensible(it)) {
              return true;
            }
            if (!create) {
              return false;
            }
            setMeta(it);
          }
          return it[META].w;
        };
        const onFreeze = function onFreeze(it) {
          if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) {
            setMeta(it);
          }
          return it;
        };
        var meta = (module.exports = {
          KEY: META,
          NEED: false,
          fastKey: fastKey,
          getWeak: getWeak,
          onFreeze: onFreeze,
        });

        /***/
      },
      /* 101 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const redefineAll = __w_pdfjs_require__(89);
        const getWeak = __w_pdfjs_require__(100).getWeak;
        const anObject = __w_pdfjs_require__(12);
        const isObject = __w_pdfjs_require__(13);
        const anInstance = __w_pdfjs_require__(76);
        const forOf = __w_pdfjs_require__(77);
        const createArrayMethod = __w_pdfjs_require__(96);
        const $has = __w_pdfjs_require__(21);
        const validate = __w_pdfjs_require__(102);
        const arrayFind = createArrayMethod(5);
        const arrayFindIndex = createArrayMethod(6);
        let id = 0;
        const uncaughtFrozenStore = function uncaughtFrozenStore(that) {
          return that._l || (that._l = new UncaughtFrozenStore());
        };
        var UncaughtFrozenStore = function UncaughtFrozenStore() {
          this.a = [];
        };
        const findUncaughtFrozen = function findUncaughtFrozen(store, key) {
          return arrayFind(store.a, function (it) {
            return it[0] === key;
          });
        };
        UncaughtFrozenStore.prototype = {
          get: function get(key) {
            const entry = findUncaughtFrozen(this, key);
            if (entry) {
              return entry[1];
            }
          },
          has: function has(key) {
            return !!findUncaughtFrozen(this, key);
          },
          set: function set(key, value) {
            const entry = findUncaughtFrozen(this, key);
            if (entry) {
              entry[1] = value;
            } else {
              this.a.push([key, value]);
            }
          },
          delete: function _delete(key) {
            const index = arrayFindIndex(this.a, function (it) {
              return it[0] === key;
            });
            if (~index) {
              this.a.splice(index, 1);
            }
            return !!~index;
          },
        };
        module.exports = {
          getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
            var C = wrapper(function (that, iterable) {
              anInstance(that, C, NAME, '_i');
              that._t = NAME;
              that._i = id++;
              that._l = undefined;
              if (iterable != undefined) {
                forOf(iterable, IS_MAP, that[ADDER], that);
              }
            });
            redefineAll(C.prototype, {
              delete: function _delete(key) {
                if (!isObject(key)) {
                  return false;
                }
                const data = getWeak(key);
                if (data === true) {
                  return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
                }
                return data && $has(data, this._i) && delete data[this._i];
              },
              has: function has(key) {
                if (!isObject(key)) {
                  return false;
                }
                const data = getWeak(key);
                if (data === true) {
                  return uncaughtFrozenStore(validate(this, NAME)).has(key);
                }
                return data && $has(data, this._i);
              },
            });
            return C;
          },
          def: function def(that, key, value) {
            const data = getWeak(anObject(key), true);
            if (data === true) {
              uncaughtFrozenStore(that).set(key, value);
            } else {
              data[that._i] = value;
            }
            return that;
          },
          ufstore: uncaughtFrozenStore,
        };

        /***/
      },
      /* 102 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const isObject = __w_pdfjs_require__(13);
        module.exports = function (it, TYPE) {
          if (!isObject(it) || it._t !== TYPE) {
            throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
          }
          return it;
        };

        /***/
      },
      /* 103 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const global = __w_pdfjs_require__(8);
        const $export = __w_pdfjs_require__(7);
        const redefine = __w_pdfjs_require__(20);
        const redefineAll = __w_pdfjs_require__(89);
        const meta = __w_pdfjs_require__(100);
        const forOf = __w_pdfjs_require__(77);
        const anInstance = __w_pdfjs_require__(76);
        const isObject = __w_pdfjs_require__(13);
        const fails = __w_pdfjs_require__(16);
        const $iterDetect = __w_pdfjs_require__(91);
        const setToStringTag = __w_pdfjs_require__(70);
        const inheritIfRequired = __w_pdfjs_require__(104);
        module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
          const Base = global[NAME];
          let C = Base;
          const ADDER = IS_MAP ? 'set' : 'add';
          const proto = C && C.prototype;
          const O = {};
          const fixMethod = function fixMethod(KEY) {
            const fn = proto[KEY];
            redefine(
              proto,
              KEY,
              KEY == 'delete'
                ? function (a) {
                    return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
                  }
                : KEY == 'has'
                ? function has(a) {
                    return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
                  }
                : KEY == 'get'
                ? function get(a) {
                    return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
                  }
                : KEY == 'add'
                ? function add(a) {
                    fn.call(this, a === 0 ? 0 : a);
                    return this;
                  }
                : function set(a, b) {
                    fn.call(this, a === 0 ? 0 : a, b);
                    return this;
                  },
            );
          };
          if (
            typeof C !== 'function' ||
            !(
              IS_WEAK ||
              (proto.forEach &&
                !fails(function () {
                  new C().entries().next();
                }))
            )
          ) {
            C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
            redefineAll(C.prototype, methods);
            meta.NEED = true;
          } else {
            const instance = new C();
            const HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
            const THROWS_ON_PRIMITIVES = fails(function () {
              instance.has(1);
            });
            const ACCEPT_ITERABLES = $iterDetect(function (iter) {
              new C(iter);
            });
            const BUGGY_ZERO =
              !IS_WEAK &&
              fails(function () {
                const $instance = new C();
                let index = 5;
                while (index--) {
                  $instance[ADDER](index, index);
                }
                return !$instance.has(-0);
              });
            if (!ACCEPT_ITERABLES) {
              C = wrapper(function (target, iterable) {
                anInstance(target, C, NAME);
                const that = inheritIfRequired(new Base(), target, C);
                if (iterable != undefined) {
                  forOf(iterable, IS_MAP, that[ADDER], that);
                }
                return that;
              });
              C.prototype = proto;
              proto.constructor = C;
            }
            if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
              fixMethod('delete');
              fixMethod('has');
              IS_MAP && fixMethod('get');
            }
            if (BUGGY_ZERO || HASNT_CHAINING) {
              fixMethod(ADDER);
            }
            if (IS_WEAK && proto.clear) {
              delete proto.clear;
            }
          }
          setToStringTag(C, NAME);
          O[NAME] = C;
          $export($export.G + $export.W + $export.F * (C != Base), O);
          if (!IS_WEAK) {
            common.setStrong(C, NAME, IS_MAP);
          }
          return C;
        };

        /***/
      },
      /* 104 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const isObject = __w_pdfjs_require__(13);
        const setPrototypeOf = __w_pdfjs_require__(105).set;
        module.exports = function (that, target, C) {
          const S = target.constructor;
          let P;
          if (S !== C && typeof S === 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
            setPrototypeOf(that, P);
          }
          return that;
        };

        /***/
      },
      /* 105 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const isObject = __w_pdfjs_require__(13);
        const anObject = __w_pdfjs_require__(12);
        const check = function check(O, proto) {
          anObject(O);
          if (!isObject(proto) && proto !== null) {
            throw TypeError(proto + ": can't set as prototype!");
          }
        };
        module.exports = {
          set:
            Object.setPrototypeOf ||
            ('__proto__' in {}
              ? (function (test, buggy, set) {
                  try {
                    set = __w_pdfjs_require__(23)(Function.call, __w_pdfjs_require__(106).f(Object.prototype, '__proto__').set, 2);
                    set(test, []);
                    buggy = !(test instanceof Array);
                  } catch (e) {
                    buggy = true;
                  }
                  return function setPrototypeOf(O, proto) {
                    check(O, proto);
                    if (buggy) {
                      O.__proto__ = proto;
                    } else {
                      set(O, proto);
                    }
                    return O;
                  };
                })({}, false)
              : undefined),
          check: check,
        };

        /***/
      },
      /* 106 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const pIE = __w_pdfjs_require__(50);
        const createDesc = __w_pdfjs_require__(19);
        const toIObject = __w_pdfjs_require__(36);
        const toPrimitive = __w_pdfjs_require__(18);
        const has = __w_pdfjs_require__(21);
        const IE8_DOM_DEFINE = __w_pdfjs_require__(14);
        const gOPD = Object.getOwnPropertyDescriptor;
        exports.f = __w_pdfjs_require__(15)
          ? gOPD
          : function getOwnPropertyDescriptor(O, P) {
              O = toIObject(O);
              P = toPrimitive(P, true);
              if (IE8_DOM_DEFINE) {
                try {
                  return gOPD(O, P);
                } catch (e) {}
              }
              if (has(O, P)) {
                return createDesc(!pIE.f.call(O, P), O[P]);
              }
            };

        /***/
      },
      /* 107 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        __w_pdfjs_require__(108)('WeakMap');

        /***/
      },
      /* 108 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const $export = __w_pdfjs_require__(7);
        module.exports = function (COLLECTION) {
          $export($export.S, COLLECTION, {
            of: function of() {
              let length = arguments.length;
              const A = new Array(length);
              while (length--) {
                A[length] = arguments[length];
              }
              return new this(A);
            },
          });
        };

        /***/
      },
      /* 109 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        __w_pdfjs_require__(110)('WeakMap');

        /***/
      },
      /* 110 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const $export = __w_pdfjs_require__(7);
        const aFunction = __w_pdfjs_require__(24);
        const ctx = __w_pdfjs_require__(23);
        const forOf = __w_pdfjs_require__(77);
        module.exports = function (COLLECTION) {
          $export($export.S, COLLECTION, {
            from: function from(source) {
              const mapFn = arguments[1];
              let mapping, A, n, cb;
              aFunction(this);
              mapping = mapFn !== undefined;
              if (mapping) {
                aFunction(mapFn);
              }
              if (source == undefined) {
                return new this();
              }
              A = [];
              if (mapping) {
                n = 0;
                cb = ctx(mapFn, arguments[2], 2);
                forOf(source, false, function (nextItem) {
                  A.push(cb(nextItem, n++));
                });
              } else {
                forOf(source, false, A.push, A);
              }
              return new this(A);
            },
          });
        };

        /***/
      },
      /* 111 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        __w_pdfjs_require__(112);
        module.exports = __w_pdfjs_require__(9).String.codePointAt;

        /***/
      },
      /* 112 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const $export = __w_pdfjs_require__(7);
        const $at = __w_pdfjs_require__(63)(false);
        $export($export.P, 'String', {
          codePointAt: function codePointAt(pos) {
            return $at(this, pos);
          },
        });

        /***/
      },
      /* 113 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        __w_pdfjs_require__(114);
        module.exports = __w_pdfjs_require__(9).String.fromCodePoint;

        /***/
      },
      /* 114 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const $export = __w_pdfjs_require__(7);
        const toAbsoluteIndex = __w_pdfjs_require__(40);
        const fromCharCode = String.fromCharCode;
        const $fromCodePoint = String.fromCodePoint;
        $export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
          fromCodePoint: function fromCodePoint(x) {
            const res = [];
            const aLen = arguments.length;
            let i = 0;
            let code;
            while (aLen > i) {
              code = +arguments[i++];
              if (toAbsoluteIndex(code, 0x10ffff) !== code) {
                throw RangeError(code + ' is not a valid code point');
              }
              res.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, (code % 0x400) + 0xdc00));
            }
            return res.join('');
          },
        });

        /***/
      },
      /* 115 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        __w_pdfjs_require__(116);
        __w_pdfjs_require__(60);
        module.exports = __w_pdfjs_require__(9).Symbol;

        /***/
      },
      /* 116 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const _typeof =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (obj) {
                return typeof obj;
              }
            : function (obj) {
                return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              };

        const global = __w_pdfjs_require__(8);
        const has = __w_pdfjs_require__(21);
        const DESCRIPTORS = __w_pdfjs_require__(15);
        const $export = __w_pdfjs_require__(7);
        const redefine = __w_pdfjs_require__(20);
        const META = __w_pdfjs_require__(100).KEY;
        const $fails = __w_pdfjs_require__(16);
        const shared = __w_pdfjs_require__(29);
        const setToStringTag = __w_pdfjs_require__(70);
        const uid = __w_pdfjs_require__(22);
        const wks = __w_pdfjs_require__(28);
        const wksExt = __w_pdfjs_require__(117);
        const wksDefine = __w_pdfjs_require__(118);
        const enumKeys = __w_pdfjs_require__(119);
        const isArray = __w_pdfjs_require__(99);
        const anObject = __w_pdfjs_require__(12);
        const isObject = __w_pdfjs_require__(13);
        const toIObject = __w_pdfjs_require__(36);
        const toPrimitive = __w_pdfjs_require__(18);
        const createDesc = __w_pdfjs_require__(19);
        const _create = __w_pdfjs_require__(67);
        const gOPNExt = __w_pdfjs_require__(120);
        const $GOPD = __w_pdfjs_require__(106);
        const $DP = __w_pdfjs_require__(11);
        const $keys = __w_pdfjs_require__(45);
        const gOPD = $GOPD.f;
        const dP = $DP.f;
        const gOPN = gOPNExt.f;
        let $Symbol = global.Symbol;
        const $JSON = global.JSON;
        const _stringify = $JSON && $JSON.stringify;
        const PROTOTYPE = 'prototype';
        const HIDDEN = wks('_hidden');
        const TO_PRIMITIVE = wks('toPrimitive');
        const isEnum = {}.propertyIsEnumerable;
        const SymbolRegistry = shared('symbol-registry');
        const AllSymbols = shared('symbols');
        const OPSymbols = shared('op-symbols');
        const ObjectProto = Object[PROTOTYPE];
        const USE_NATIVE = typeof $Symbol === 'function';
        const QObject = global.QObject;
        let setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
        const setSymbolDesc =
          DESCRIPTORS &&
          $fails(function () {
            return (
              _create(
                dP({}, 'a', {
                  get: function get() {
                    return dP(this, 'a', { value: 7 }).a;
                  },
                }),
              ).a != 7
            );
          })
            ? function (it, key, D) {
                const protoDesc = gOPD(ObjectProto, key);
                if (protoDesc) {
                  delete ObjectProto[key];
                }
                dP(it, key, D);
                if (protoDesc && it !== ObjectProto) {
                  dP(ObjectProto, key, protoDesc);
                }
              }
            : dP;
        const wrap = function wrap(tag) {
          const sym = (AllSymbols[tag] = _create($Symbol[PROTOTYPE]));
          sym._k = tag;
          return sym;
        };
        const isSymbol =
          USE_NATIVE && _typeof($Symbol.iterator) == 'symbol'
            ? function (it) {
                return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol';
              }
            : function (it) {
                return it instanceof $Symbol;
              };
        var $defineProperty = function defineProperty(it, key, D) {
          if (it === ObjectProto) {
            $defineProperty(OPSymbols, key, D);
          }
          anObject(it);
          key = toPrimitive(key, true);
          anObject(D);
          if (has(AllSymbols, key)) {
            if (!D.enumerable) {
              if (!has(it, HIDDEN)) {
                dP(it, HIDDEN, createDesc(1, {}));
              }

              it[HIDDEN][key] = true;
            } else {
              if (has(it, HIDDEN) && it[HIDDEN][key]) {
                it[HIDDEN][key] = false;
              }
              D = _create(D, { enumerable: createDesc(0, false) });
            }
            return setSymbolDesc(it, key, D);
          }
          return dP(it, key, D);
        };
        const $defineProperties = function defineProperties(it, P) {
          anObject(it);
          const keys = enumKeys((P = toIObject(P)));
          let i = 0;
          const l = keys.length;
          let key;
          while (l > i) {
            $defineProperty(it, (key = keys[i++]), P[key]);
          }
          return it;
        };
        const $create = function create(it, P) {
          return P === undefined ? _create(it) : $defineProperties(_create(it), P);
        };
        const $propertyIsEnumerable = function propertyIsEnumerable(key) {
          const E = isEnum.call(this, (key = toPrimitive(key, true)));
          if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) {
            return false;
          }
          return E || !has(this, key) || !has(AllSymbols, key) || (has(this, HIDDEN) && this[HIDDEN][key]) ? E : true;
        };
        const $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
          it = toIObject(it);
          key = toPrimitive(key, true);
          if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) {
            return;
          }
          const D = gOPD(it, key);
          if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
            D.enumerable = true;
          }
          return D;
        };
        const $getOwnPropertyNames = function getOwnPropertyNames(it) {
          const names = gOPN(toIObject(it));
          const result = [];
          let i = 0;
          let key;
          while (names.length > i) {
            if (!has(AllSymbols, (key = names[i++])) && key != HIDDEN && key != META) {
              result.push(key);
            }
          }
          return result;
        };
        const $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
          const IS_OP = it === ObjectProto;
          const names = gOPN(IS_OP ? OPSymbols : toIObject(it));
          const result = [];
          let i = 0;
          let key;
          while (names.length > i) {
            if (has(AllSymbols, (key = names[i++])) && (IS_OP ? has(ObjectProto, key) : true)) {
              result.push(AllSymbols[key]);
            }
          }
          return result;
        };
        if (!USE_NATIVE) {
          $Symbol = function _Symbol() {
            if (this instanceof $Symbol) {
              throw TypeError('Symbol is not a constructor!');
            }
            const tag = uid(arguments.length > 0 ? arguments[0] : undefined);
            const $set = function $set(value) {
              if (this === ObjectProto) {
                $set.call(OPSymbols, value);
              }
              if (has(this, HIDDEN) && has(this[HIDDEN], tag)) {
                this[HIDDEN][tag] = false;
              }
              setSymbolDesc(this, tag, createDesc(1, value));
            };
            if (DESCRIPTORS && setter) {
              setSymbolDesc(ObjectProto, tag, {
                configurable: true,
                set: $set,
              });
            }
            return wrap(tag);
          };
          redefine($Symbol[PROTOTYPE], 'toString', function toString() {
            return this._k;
          });
          $GOPD.f = $getOwnPropertyDescriptor;
          $DP.f = $defineProperty;
          __w_pdfjs_require__(121).f = gOPNExt.f = $getOwnPropertyNames;
          __w_pdfjs_require__(50).f = $propertyIsEnumerable;
          __w_pdfjs_require__(49).f = $getOwnPropertySymbols;
          if (DESCRIPTORS && !__w_pdfjs_require__(30)) {
            redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
          }
          wksExt.f = function (name) {
            return wrap(wks(name));
          };
        }
        $export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });
        for (
          let es6Symbols = 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(
              ',',
            ),
            j = 0;
          es6Symbols.length > j;

        ) {
          wks(es6Symbols[j++]);
        }
        for (let wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k; ) {
          wksDefine(wellKnownSymbols[k++]);
        }
        $export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
          for: function _for(key) {
            return has(SymbolRegistry, (key += '')) ? SymbolRegistry[key] : (SymbolRegistry[key] = $Symbol(key));
          },
          keyFor: function keyFor(sym) {
            if (!isSymbol(sym)) {
              throw TypeError(sym + ' is not a symbol!');
            }
            for (const key in SymbolRegistry) {
              if (SymbolRegistry[key] === sym) {
                return key;
              }
            }
          },
          useSetter: function useSetter() {
            setter = true;
          },
          useSimple: function useSimple() {
            setter = false;
          },
        });
        $export($export.S + $export.F * !USE_NATIVE, 'Object', {
          create: $create,
          defineProperty: $defineProperty,
          defineProperties: $defineProperties,
          getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
          getOwnPropertyNames: $getOwnPropertyNames,
          getOwnPropertySymbols: $getOwnPropertySymbols,
        });
        $JSON &&
          $export(
            $export.S +
              $export.F *
                (!USE_NATIVE ||
                  $fails(function () {
                    const S = $Symbol();
                    return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
                  })),
            'JSON',
            {
              stringify: function stringify(it) {
                const args = [it];
                let i = 1;
                let replacer, $replacer;
                while (arguments.length > i) {
                  args.push(arguments[i++]);
                }
                $replacer = replacer = args[1];
                if ((!isObject(replacer) && it === undefined) || isSymbol(it)) {
                  return;
                }
                if (!isArray(replacer)) {
                  replacer = function replacer(key, value) {
                    if (typeof $replacer === 'function') {
                      value = $replacer.call(this, key, value);
                    }
                    if (!isSymbol(value)) {
                      return value;
                    }
                  };
                }
                args[1] = replacer;
                return _stringify.apply($JSON, args);
              },
            },
          );
        $Symbol[PROTOTYPE][TO_PRIMITIVE] || __w_pdfjs_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
        setToStringTag($Symbol, 'Symbol');
        setToStringTag(Math, 'Math', true);
        setToStringTag(global.JSON, 'JSON', true);

        /***/
      },
      /* 117 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        exports.f = __w_pdfjs_require__(28);

        /***/
      },
      /* 118 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const global = __w_pdfjs_require__(8);
        const core = __w_pdfjs_require__(9);
        const LIBRARY = __w_pdfjs_require__(30);
        const wksExt = __w_pdfjs_require__(117);
        const defineProperty = __w_pdfjs_require__(11).f;
        module.exports = function (name) {
          const $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
          if (name.charAt(0) != '_' && !(name in $Symbol)) {
            defineProperty($Symbol, name, { value: wksExt.f(name) });
          }
        };

        /***/
      },
      /* 119 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const getKeys = __w_pdfjs_require__(45);
        const gOPS = __w_pdfjs_require__(49);
        const pIE = __w_pdfjs_require__(50);
        module.exports = function (it) {
          const result = getKeys(it);
          const getSymbols = gOPS.f;
          if (getSymbols) {
            const symbols = getSymbols(it);
            const isEnum = pIE.f;
            let i = 0;
            let key;
            while (symbols.length > i) {
              if (isEnum.call(it, (key = symbols[i++]))) {
                result.push(key);
              }
            }
          }
          return result;
        };

        /***/
      },
      /* 120 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const _typeof =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (obj) {
                return typeof obj;
              }
            : function (obj) {
                return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              };

        const toIObject = __w_pdfjs_require__(36);
        const gOPN = __w_pdfjs_require__(121).f;
        const toString = {}.toString;
        const windowNames =
          (typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && window && Object.getOwnPropertyNames
            ? Object.getOwnPropertyNames(window)
            : [];
        const getWindowNames = function getWindowNames(it) {
          try {
            return gOPN(it);
          } catch (e) {
            return windowNames.slice();
          }
        };
        module.exports.f = function getOwnPropertyNames(it) {
          return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
        };

        /***/
      },
      /* 121 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const $keys = __w_pdfjs_require__(46);
        const hiddenKeys = __w_pdfjs_require__(48).concat('length', 'prototype');
        exports.f =
          Object.getOwnPropertyNames ||
          function getOwnPropertyNames(O) {
            return $keys(O, hiddenKeys);
          };

        /***/
      },
      /* 122 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        __w_pdfjs_require__(123);
        module.exports = __w_pdfjs_require__(9).Object.values;

        /***/
      },
      /* 123 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const $export = __w_pdfjs_require__(7);
        const $values = __w_pdfjs_require__(124)(false);
        $export($export.S, 'Object', {
          values: function values(it) {
            return $values(it);
          },
        });

        /***/
      },
      /* 124 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const getKeys = __w_pdfjs_require__(45);
        const toIObject = __w_pdfjs_require__(36);
        const isEnum = __w_pdfjs_require__(50).f;
        module.exports = function (isEntries) {
          return function (it) {
            const O = toIObject(it);
            const keys = getKeys(O);
            const length = keys.length;
            let i = 0;
            const result = [];
            let key;
            while (length > i) {
              if (isEnum.call(O, (key = keys[i++]))) {
                result.push(isEntries ? [key, O[key]] : O[key]);
              }
            }
            return result;
          };
        };

        /***/
      },
      /* 125 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        let isReadableStreamSupported = false;
        if (typeof ReadableStream !== 'undefined') {
          try {
            new ReadableStream({
              start: function start(controller) {
                controller.close();
              },
            });
            isReadableStreamSupported = true;
          } catch (e) {}
        }
        if (isReadableStreamSupported) {
          exports.ReadableStream = ReadableStream;
        } else {
          exports.ReadableStream = __w_pdfjs_require__(126).ReadableStream;
        }

        /***/
      },
      /* 126 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const _typeof2 =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (obj) {
                return typeof obj;
              }
            : function (obj) {
                return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              };

        (function (e, a) {
          for (const i in a) {
            e[i] = a[i];
          }
        })(
          exports,
          (function (modules) {
            const installedModules = {};
            function __w_pdfjs_require__(moduleId) {
              if (installedModules[moduleId]) {
                return installedModules[moduleId].exports;
              }
              const module = (installedModules[moduleId] = {
                i: moduleId,
                l: false,
                exports: {},
              });
              modules[moduleId].call(module.exports, module, module.exports, __w_pdfjs_require__);
              module.l = true;
              return module.exports;
            }
            __w_pdfjs_require__.m = modules;
            __w_pdfjs_require__.c = installedModules;
            __w_pdfjs_require__.i = function (value) {
              return value;
            };
            __w_pdfjs_require__.d = function (exports, name, getter) {
              if (!__w_pdfjs_require__.o(exports, name)) {
                Object.defineProperty(exports, name, {
                  configurable: false,
                  enumerable: true,
                  get: getter,
                });
              }
            };
            __w_pdfjs_require__.n = function (module) {
              const getter =
                module && module.__esModule
                  ? function getDefault() {
                      return module['default'];
                    }
                  : function getModuleExports() {
                      return module;
                    };
              __w_pdfjs_require__.d(getter, 'a', getter);
              return getter;
            };
            __w_pdfjs_require__.o = function (object, property) {
              return Object.prototype.hasOwnProperty.call(object, property);
            };
            __w_pdfjs_require__.p = '';
            return __w_pdfjs_require__((__w_pdfjs_require__.s = 7));
          })([
            function (module, exports, __w_pdfjs_require__) {
              'use strict';

              const _typeof =
                typeof Symbol === 'function' && _typeof2(Symbol.iterator) === 'symbol'
                  ? function (obj) {
                      return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
                    }
                  : function (obj) {
                      return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype
                        ? 'symbol'
                        : typeof obj === 'undefined'
                        ? 'undefined'
                        : _typeof2(obj);
                    };
              const _require = __w_pdfjs_require__(1),
                assert = _require.assert;
              function IsPropertyKey(argument) {
                return typeof argument === 'string' || (typeof argument === 'undefined' ? 'undefined' : _typeof(argument)) === 'symbol';
              }
              exports.typeIsObject = function (x) {
                return ((typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && x !== null) || typeof x === 'function';
              };
              exports.createDataProperty = function (o, p, v) {
                assert(exports.typeIsObject(o));
                Object.defineProperty(o, p, {
                  value: v,
                  writable: true,
                  enumerable: true,
                  configurable: true,
                });
              };
              exports.createArrayFromList = function (elements) {
                return elements.slice();
              };
              exports.ArrayBufferCopy = function (dest, destOffset, src, srcOffset, n) {
                new Uint8Array(dest).set(new Uint8Array(src, srcOffset, n), destOffset);
              };
              exports.CreateIterResultObject = function (value, done) {
                assert(typeof done === 'boolean');
                const obj = {};
                Object.defineProperty(obj, 'value', {
                  value: value,
                  enumerable: true,
                  writable: true,
                  configurable: true,
                });
                Object.defineProperty(obj, 'done', {
                  value: done,
                  enumerable: true,
                  writable: true,
                  configurable: true,
                });
                return obj;
              };
              exports.IsFiniteNonNegativeNumber = function (v) {
                if (Number.isNaN(v)) {
                  return false;
                }
                if (v === Infinity) {
                  return false;
                }
                if (v < 0) {
                  return false;
                }
                return true;
              };
              function Call(F, V, args) {
                if (typeof F !== 'function') {
                  throw new TypeError('Argument is not a function');
                }
                return Function.prototype.apply.call(F, V, args);
              }
              exports.InvokeOrNoop = function (O, P, args) {
                assert(O !== undefined);
                assert(IsPropertyKey(P));
                assert(Array.isArray(args));
                const method = O[P];
                if (method === undefined) {
                  return undefined;
                }
                return Call(method, O, args);
              };
              exports.PromiseInvokeOrNoop = function (O, P, args) {
                assert(O !== undefined);
                assert(IsPropertyKey(P));
                assert(Array.isArray(args));
                try {
                  return Promise.resolve(exports.InvokeOrNoop(O, P, args));
                } catch (returnValueE) {
                  return Promise.reject(returnValueE);
                }
              };
              exports.PromiseInvokeOrPerformFallback = function (O, P, args, F, argsF) {
                assert(O !== undefined);
                assert(IsPropertyKey(P));
                assert(Array.isArray(args));
                assert(Array.isArray(argsF));
                let method = void 0;
                try {
                  method = O[P];
                } catch (methodE) {
                  return Promise.reject(methodE);
                }
                if (method === undefined) {
                  return F.apply(null, argsF);
                }
                try {
                  return Promise.resolve(Call(method, O, args));
                } catch (e) {
                  return Promise.reject(e);
                }
              };
              exports.TransferArrayBuffer = function (O) {
                return O.slice();
              };
              exports.ValidateAndNormalizeHighWaterMark = function (highWaterMark) {
                highWaterMark = Number(highWaterMark);
                if (Number.isNaN(highWaterMark) || highWaterMark < 0) {
                  throw new RangeError('highWaterMark property of a queuing strategy must be non-negative and non-NaN');
                }
                return highWaterMark;
              };
              exports.ValidateAndNormalizeQueuingStrategy = function (size, highWaterMark) {
                if (size !== undefined && typeof size !== 'function') {
                  throw new TypeError('size property of a queuing strategy must be a function');
                }
                highWaterMark = exports.ValidateAndNormalizeHighWaterMark(highWaterMark);
                return {
                  size: size,
                  highWaterMark: highWaterMark,
                };
              };
            },
            function (module, exports, __w_pdfjs_require__) {
              'use strict';

              function rethrowAssertionErrorRejection(e) {
                if (e && e.constructor === AssertionError) {
                  setTimeout(function () {
                    throw e;
                  }, 0);
                }
              }
              function AssertionError(message) {
                this.name = 'AssertionError';
                this.message = message || '';
                this.stack = new Error().stack;
              }
              AssertionError.prototype = Object.create(Error.prototype);
              AssertionError.prototype.constructor = AssertionError;
              function assert(value, message) {
                if (!value) {
                  throw new AssertionError(message);
                }
              }
              module.exports = {
                rethrowAssertionErrorRejection: rethrowAssertionErrorRejection,
                AssertionError: AssertionError,
                assert: assert,
              };
            },
            function (module, exports, __w_pdfjs_require__) {
              'use strict';

              const _createClass = (function () {
                function defineProperties(target, props) {
                  for (let i = 0; i < props.length; i++) {
                    const descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ('value' in descriptor) {
                      descriptor.writable = true;
                    }
                    Object.defineProperty(target, descriptor.key, descriptor);
                  }
                }
                return function (Constructor, protoProps, staticProps) {
                  if (protoProps) {
                    defineProperties(Constructor.prototype, protoProps);
                  }
                  if (staticProps) {
                    defineProperties(Constructor, staticProps);
                  }
                  return Constructor;
                };
              })();
              function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                  throw new TypeError('Cannot call a class as a function');
                }
              }
              const _require = __w_pdfjs_require__(0),
                InvokeOrNoop = _require.InvokeOrNoop,
                PromiseInvokeOrNoop = _require.PromiseInvokeOrNoop,
                ValidateAndNormalizeQueuingStrategy = _require.ValidateAndNormalizeQueuingStrategy,
                typeIsObject = _require.typeIsObject;
              const _require2 = __w_pdfjs_require__(1),
                assert = _require2.assert,
                rethrowAssertionErrorRejection = _require2.rethrowAssertionErrorRejection;
              const _require3 = __w_pdfjs_require__(3),
                DequeueValue = _require3.DequeueValue,
                EnqueueValueWithSize = _require3.EnqueueValueWithSize,
                PeekQueueValue = _require3.PeekQueueValue,
                ResetQueue = _require3.ResetQueue;
              const WritableStream = (function () {
                function WritableStream() {
                  const underlyingSink = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                  const _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                    size = _ref.size,
                    _ref$highWaterMark = _ref.highWaterMark,
                    highWaterMark = _ref$highWaterMark === undefined ? 1 : _ref$highWaterMark;
                  _classCallCheck(this, WritableStream);
                  this._state = 'writable';
                  this._storedError = undefined;
                  this._writer = undefined;
                  this._writableStreamController = undefined;
                  this._writeRequests = [];
                  this._inFlightWriteRequest = undefined;
                  this._closeRequest = undefined;
                  this._inFlightCloseRequest = undefined;
                  this._pendingAbortRequest = undefined;
                  this._backpressure = false;
                  const type = underlyingSink.type;
                  if (type !== undefined) {
                    throw new RangeError('Invalid type is specified');
                  }
                  this._writableStreamController = new WritableStreamDefaultController(this, underlyingSink, size, highWaterMark);
                  this._writableStreamController.__startSteps();
                }
                _createClass(WritableStream, [
                  {
                    key: 'abort',
                    value: function abort(reason) {
                      if (IsWritableStream(this) === false) {
                        return Promise.reject(streamBrandCheckException('abort'));
                      }
                      if (IsWritableStreamLocked(this) === true) {
                        return Promise.reject(new TypeError('Cannot abort a stream that already has a writer'));
                      }
                      return WritableStreamAbort(this, reason);
                    },
                  },
                  {
                    key: 'getWriter',
                    value: function getWriter() {
                      if (IsWritableStream(this) === false) {
                        throw streamBrandCheckException('getWriter');
                      }
                      return AcquireWritableStreamDefaultWriter(this);
                    },
                  },
                  {
                    key: 'locked',
                    get: function get() {
                      if (IsWritableStream(this) === false) {
                        throw streamBrandCheckException('locked');
                      }
                      return IsWritableStreamLocked(this);
                    },
                  },
                ]);
                return WritableStream;
              })();
              module.exports = {
                AcquireWritableStreamDefaultWriter: AcquireWritableStreamDefaultWriter,
                IsWritableStream: IsWritableStream,
                IsWritableStreamLocked: IsWritableStreamLocked,
                WritableStream: WritableStream,
                WritableStreamAbort: WritableStreamAbort,
                WritableStreamDefaultControllerError: WritableStreamDefaultControllerError,
                WritableStreamDefaultWriterCloseWithErrorPropagation: WritableStreamDefaultWriterCloseWithErrorPropagation,
                WritableStreamDefaultWriterRelease: WritableStreamDefaultWriterRelease,
                WritableStreamDefaultWriterWrite: WritableStreamDefaultWriterWrite,
                WritableStreamCloseQueuedOrInFlight: WritableStreamCloseQueuedOrInFlight,
              };
              function AcquireWritableStreamDefaultWriter(stream) {
                return new WritableStreamDefaultWriter(stream);
              }
              function IsWritableStream(x) {
                if (!typeIsObject(x)) {
                  return false;
                }
                if (!Object.prototype.hasOwnProperty.call(x, '_writableStreamController')) {
                  return false;
                }
                return true;
              }
              function IsWritableStreamLocked(stream) {
                assert(IsWritableStream(stream) === true, 'IsWritableStreamLocked should only be used on known writable streams');
                if (stream._writer === undefined) {
                  return false;
                }
                return true;
              }
              function WritableStreamAbort(stream, reason) {
                const state = stream._state;
                if (state === 'closed') {
                  return Promise.resolve(undefined);
                }
                if (state === 'errored') {
                  return Promise.reject(stream._storedError);
                }
                const error = new TypeError('Requested to abort');
                if (stream._pendingAbortRequest !== undefined) {
                  return Promise.reject(error);
                }
                assert(state === 'writable' || state === 'erroring', 'state must be writable or erroring');
                let wasAlreadyErroring = false;
                if (state === 'erroring') {
                  wasAlreadyErroring = true;
                  reason = undefined;
                }
                const promise = new Promise(function (resolve, reject) {
                  stream._pendingAbortRequest = {
                    _resolve: resolve,
                    _reject: reject,
                    _reason: reason,
                    _wasAlreadyErroring: wasAlreadyErroring,
                  };
                });
                if (wasAlreadyErroring === false) {
                  WritableStreamStartErroring(stream, error);
                }
                return promise;
              }
              function WritableStreamAddWriteRequest(stream) {
                assert(IsWritableStreamLocked(stream) === true);
                assert(stream._state === 'writable');
                const promise = new Promise(function (resolve, reject) {
                  const writeRequest = {
                    _resolve: resolve,
                    _reject: reject,
                  };
                  stream._writeRequests.push(writeRequest);
                });
                return promise;
              }
              function WritableStreamDealWithRejection(stream, error) {
                const state = stream._state;
                if (state === 'writable') {
                  WritableStreamStartErroring(stream, error);
                  return;
                }
                assert(state === 'erroring');
                WritableStreamFinishErroring(stream);
              }
              function WritableStreamStartErroring(stream, reason) {
                assert(stream._storedError === undefined, 'stream._storedError === undefined');
                assert(stream._state === 'writable', 'state must be writable');
                const controller = stream._writableStreamController;
                assert(controller !== undefined, 'controller must not be undefined');
                stream._state = 'erroring';
                stream._storedError = reason;
                const writer = stream._writer;
                if (writer !== undefined) {
                  WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, reason);
                }
                if (WritableStreamHasOperationMarkedInFlight(stream) === false && controller._started === true) {
                  WritableStreamFinishErroring(stream);
                }
              }
              function WritableStreamFinishErroring(stream) {
                assert(stream._state === 'erroring', 'stream._state === erroring');
                assert(
                  WritableStreamHasOperationMarkedInFlight(stream) === false,
                  'WritableStreamHasOperationMarkedInFlight(stream) === false',
                );
                stream._state = 'errored';
                stream._writableStreamController.__errorSteps();
                const storedError = stream._storedError;
                for (let i = 0; i < stream._writeRequests.length; i++) {
                  const writeRequest = stream._writeRequests[i];
                  writeRequest._reject(storedError);
                }
                stream._writeRequests = [];
                if (stream._pendingAbortRequest === undefined) {
                  WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
                  return;
                }
                const abortRequest = stream._pendingAbortRequest;
                stream._pendingAbortRequest = undefined;
                if (abortRequest._wasAlreadyErroring === true) {
                  abortRequest._reject(storedError);
                  WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
                  return;
                }
                const promise = stream._writableStreamController.__abortSteps(abortRequest._reason);
                promise.then(
                  function () {
                    abortRequest._resolve();
                    WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
                  },
                  function (reason) {
                    abortRequest._reject(reason);
                    WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
                  },
                );
              }
              function WritableStreamFinishInFlightWrite(stream) {
                assert(stream._inFlightWriteRequest !== undefined);
                stream._inFlightWriteRequest._resolve(undefined);
                stream._inFlightWriteRequest = undefined;
              }
              function WritableStreamFinishInFlightWriteWithError(stream, error) {
                assert(stream._inFlightWriteRequest !== undefined);
                stream._inFlightWriteRequest._reject(error);
                stream._inFlightWriteRequest = undefined;
                assert(stream._state === 'writable' || stream._state === 'erroring');
                WritableStreamDealWithRejection(stream, error);
              }
              function WritableStreamFinishInFlightClose(stream) {
                assert(stream._inFlightCloseRequest !== undefined);
                stream._inFlightCloseRequest._resolve(undefined);
                stream._inFlightCloseRequest = undefined;
                const state = stream._state;
                assert(state === 'writable' || state === 'erroring');
                if (state === 'erroring') {
                  stream._storedError = undefined;
                  if (stream._pendingAbortRequest !== undefined) {
                    stream._pendingAbortRequest._resolve();
                    stream._pendingAbortRequest = undefined;
                  }
                }
                stream._state = 'closed';
                const writer = stream._writer;
                if (writer !== undefined) {
                  defaultWriterClosedPromiseResolve(writer);
                }
                assert(stream._pendingAbortRequest === undefined, 'stream._pendingAbortRequest === undefined');
                assert(stream._storedError === undefined, 'stream._storedError === undefined');
              }
              function WritableStreamFinishInFlightCloseWithError(stream, error) {
                assert(stream._inFlightCloseRequest !== undefined);
                stream._inFlightCloseRequest._reject(error);
                stream._inFlightCloseRequest = undefined;
                assert(stream._state === 'writable' || stream._state === 'erroring');
                if (stream._pendingAbortRequest !== undefined) {
                  stream._pendingAbortRequest._reject(error);
                  stream._pendingAbortRequest = undefined;
                }
                WritableStreamDealWithRejection(stream, error);
              }
              function WritableStreamCloseQueuedOrInFlight(stream) {
                if (stream._closeRequest === undefined && stream._inFlightCloseRequest === undefined) {
                  return false;
                }
                return true;
              }
              function WritableStreamHasOperationMarkedInFlight(stream) {
                if (stream._inFlightWriteRequest === undefined && stream._inFlightCloseRequest === undefined) {
                  return false;
                }
                return true;
              }
              function WritableStreamMarkCloseRequestInFlight(stream) {
                assert(stream._inFlightCloseRequest === undefined);
                assert(stream._closeRequest !== undefined);
                stream._inFlightCloseRequest = stream._closeRequest;
                stream._closeRequest = undefined;
              }
              function WritableStreamMarkFirstWriteRequestInFlight(stream) {
                assert(stream._inFlightWriteRequest === undefined, 'there must be no pending write request');
                assert(stream._writeRequests.length !== 0, 'writeRequests must not be empty');
                stream._inFlightWriteRequest = stream._writeRequests.shift();
              }
              function WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream) {
                assert(stream._state === 'errored', '_stream_.[[state]] is `"errored"`');
                if (stream._closeRequest !== undefined) {
                  assert(stream._inFlightCloseRequest === undefined);
                  stream._closeRequest._reject(stream._storedError);
                  stream._closeRequest = undefined;
                }
                const writer = stream._writer;
                if (writer !== undefined) {
                  defaultWriterClosedPromiseReject(writer, stream._storedError);
                  writer._closedPromise.catch(function () {});
                }
              }
              function WritableStreamUpdateBackpressure(stream, backpressure) {
                assert(stream._state === 'writable');
                assert(WritableStreamCloseQueuedOrInFlight(stream) === false);
                const writer = stream._writer;
                if (writer !== undefined && backpressure !== stream._backpressure) {
                  if (backpressure === true) {
                    defaultWriterReadyPromiseReset(writer);
                  } else {
                    assert(backpressure === false);
                    defaultWriterReadyPromiseResolve(writer);
                  }
                }
                stream._backpressure = backpressure;
              }
              var WritableStreamDefaultWriter = (function () {
                function WritableStreamDefaultWriter(stream) {
                  _classCallCheck(this, WritableStreamDefaultWriter);
                  if (IsWritableStream(stream) === false) {
                    throw new TypeError('WritableStreamDefaultWriter can only be constructed with a WritableStream instance');
                  }
                  if (IsWritableStreamLocked(stream) === true) {
                    throw new TypeError('This stream has already been locked for exclusive writing by another writer');
                  }
                  this._ownerWritableStream = stream;
                  stream._writer = this;
                  const state = stream._state;
                  if (state === 'writable') {
                    if (WritableStreamCloseQueuedOrInFlight(stream) === false && stream._backpressure === true) {
                      defaultWriterReadyPromiseInitialize(this);
                    } else {
                      defaultWriterReadyPromiseInitializeAsResolved(this);
                    }
                    defaultWriterClosedPromiseInitialize(this);
                  } else if (state === 'erroring') {
                    defaultWriterReadyPromiseInitializeAsRejected(this, stream._storedError);
                    this._readyPromise.catch(function () {});
                    defaultWriterClosedPromiseInitialize(this);
                  } else if (state === 'closed') {
                    defaultWriterReadyPromiseInitializeAsResolved(this);
                    defaultWriterClosedPromiseInitializeAsResolved(this);
                  } else {
                    assert(state === 'errored', 'state must be errored');
                    const storedError = stream._storedError;
                    defaultWriterReadyPromiseInitializeAsRejected(this, storedError);
                    this._readyPromise.catch(function () {});
                    defaultWriterClosedPromiseInitializeAsRejected(this, storedError);
                    this._closedPromise.catch(function () {});
                  }
                }
                _createClass(WritableStreamDefaultWriter, [
                  {
                    key: 'abort',
                    value: function abort(reason) {
                      if (IsWritableStreamDefaultWriter(this) === false) {
                        return Promise.reject(defaultWriterBrandCheckException('abort'));
                      }
                      if (this._ownerWritableStream === undefined) {
                        return Promise.reject(defaultWriterLockException('abort'));
                      }
                      return WritableStreamDefaultWriterAbort(this, reason);
                    },
                  },
                  {
                    key: 'close',
                    value: function close() {
                      if (IsWritableStreamDefaultWriter(this) === false) {
                        return Promise.reject(defaultWriterBrandCheckException('close'));
                      }
                      const stream = this._ownerWritableStream;
                      if (stream === undefined) {
                        return Promise.reject(defaultWriterLockException('close'));
                      }
                      if (WritableStreamCloseQueuedOrInFlight(stream) === true) {
                        return Promise.reject(new TypeError('cannot close an already-closing stream'));
                      }
                      return WritableStreamDefaultWriterClose(this);
                    },
                  },
                  {
                    key: 'releaseLock',
                    value: function releaseLock() {
                      if (IsWritableStreamDefaultWriter(this) === false) {
                        throw defaultWriterBrandCheckException('releaseLock');
                      }
                      const stream = this._ownerWritableStream;
                      if (stream === undefined) {
                        return;
                      }
                      assert(stream._writer !== undefined);
                      WritableStreamDefaultWriterRelease(this);
                    },
                  },
                  {
                    key: 'write',
                    value: function write(chunk) {
                      if (IsWritableStreamDefaultWriter(this) === false) {
                        return Promise.reject(defaultWriterBrandCheckException('write'));
                      }
                      if (this._ownerWritableStream === undefined) {
                        return Promise.reject(defaultWriterLockException('write to'));
                      }
                      return WritableStreamDefaultWriterWrite(this, chunk);
                    },
                  },
                  {
                    key: 'closed',
                    get: function get() {
                      if (IsWritableStreamDefaultWriter(this) === false) {
                        return Promise.reject(defaultWriterBrandCheckException('closed'));
                      }
                      return this._closedPromise;
                    },
                  },
                  {
                    key: 'desiredSize',
                    get: function get() {
                      if (IsWritableStreamDefaultWriter(this) === false) {
                        throw defaultWriterBrandCheckException('desiredSize');
                      }
                      if (this._ownerWritableStream === undefined) {
                        throw defaultWriterLockException('desiredSize');
                      }
                      return WritableStreamDefaultWriterGetDesiredSize(this);
                    },
                  },
                  {
                    key: 'ready',
                    get: function get() {
                      if (IsWritableStreamDefaultWriter(this) === false) {
                        return Promise.reject(defaultWriterBrandCheckException('ready'));
                      }
                      return this._readyPromise;
                    },
                  },
                ]);
                return WritableStreamDefaultWriter;
              })();
              function IsWritableStreamDefaultWriter(x) {
                if (!typeIsObject(x)) {
                  return false;
                }
                if (!Object.prototype.hasOwnProperty.call(x, '_ownerWritableStream')) {
                  return false;
                }
                return true;
              }
              function WritableStreamDefaultWriterAbort(writer, reason) {
                const stream = writer._ownerWritableStream;
                assert(stream !== undefined);
                return WritableStreamAbort(stream, reason);
              }
              function WritableStreamDefaultWriterClose(writer) {
                const stream = writer._ownerWritableStream;
                assert(stream !== undefined);
                const state = stream._state;
                if (state === 'closed' || state === 'errored') {
                  return Promise.reject(
                    new TypeError('The stream (in ' + state + ' state) is not in the writable state and cannot be closed'),
                  );
                }
                assert(state === 'writable' || state === 'erroring');
                assert(WritableStreamCloseQueuedOrInFlight(stream) === false);
                const promise = new Promise(function (resolve, reject) {
                  const closeRequest = {
                    _resolve: resolve,
                    _reject: reject,
                  };
                  stream._closeRequest = closeRequest;
                });
                if (stream._backpressure === true && state === 'writable') {
                  defaultWriterReadyPromiseResolve(writer);
                }
                WritableStreamDefaultControllerClose(stream._writableStreamController);
                return promise;
              }
              function WritableStreamDefaultWriterCloseWithErrorPropagation(writer) {
                const stream = writer._ownerWritableStream;
                assert(stream !== undefined);
                const state = stream._state;
                if (WritableStreamCloseQueuedOrInFlight(stream) === true || state === 'closed') {
                  return Promise.resolve();
                }
                if (state === 'errored') {
                  return Promise.reject(stream._storedError);
                }
                assert(state === 'writable' || state === 'erroring');
                return WritableStreamDefaultWriterClose(writer);
              }
              function WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, error) {
                if (writer._closedPromiseState === 'pending') {
                  defaultWriterClosedPromiseReject(writer, error);
                } else {
                  defaultWriterClosedPromiseResetToRejected(writer, error);
                }
                writer._closedPromise.catch(function () {});
              }
              function WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, error) {
                if (writer._readyPromiseState === 'pending') {
                  defaultWriterReadyPromiseReject(writer, error);
                } else {
                  defaultWriterReadyPromiseResetToRejected(writer, error);
                }
                writer._readyPromise.catch(function () {});
              }
              function WritableStreamDefaultWriterGetDesiredSize(writer) {
                const stream = writer._ownerWritableStream;
                const state = stream._state;
                if (state === 'errored' || state === 'erroring') {
                  return null;
                }
                if (state === 'closed') {
                  return 0;
                }
                return WritableStreamDefaultControllerGetDesiredSize(stream._writableStreamController);
              }
              function WritableStreamDefaultWriterRelease(writer) {
                const stream = writer._ownerWritableStream;
                assert(stream !== undefined);
                assert(stream._writer === writer);
                const releasedError = new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");
                WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, releasedError);
                WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, releasedError);
                stream._writer = undefined;
                writer._ownerWritableStream = undefined;
              }
              function WritableStreamDefaultWriterWrite(writer, chunk) {
                const stream = writer._ownerWritableStream;
                assert(stream !== undefined);
                const controller = stream._writableStreamController;
                const chunkSize = WritableStreamDefaultControllerGetChunkSize(controller, chunk);
                if (stream !== writer._ownerWritableStream) {
                  return Promise.reject(defaultWriterLockException('write to'));
                }
                const state = stream._state;
                if (state === 'errored') {
                  return Promise.reject(stream._storedError);
                }
                if (WritableStreamCloseQueuedOrInFlight(stream) === true || state === 'closed') {
                  return Promise.reject(new TypeError('The stream is closing or closed and cannot be written to'));
                }
                if (state === 'erroring') {
                  return Promise.reject(stream._storedError);
                }
                assert(state === 'writable');
                const promise = WritableStreamAddWriteRequest(stream);
                WritableStreamDefaultControllerWrite(controller, chunk, chunkSize);
                return promise;
              }
              var WritableStreamDefaultController = (function () {
                function WritableStreamDefaultController(stream, underlyingSink, size, highWaterMark) {
                  _classCallCheck(this, WritableStreamDefaultController);
                  if (IsWritableStream(stream) === false) {
                    throw new TypeError('WritableStreamDefaultController can only be constructed with a WritableStream instance');
                  }
                  if (stream._writableStreamController !== undefined) {
                    throw new TypeError('WritableStreamDefaultController instances can only be created by the WritableStream constructor');
                  }
                  this._controlledWritableStream = stream;
                  this._underlyingSink = underlyingSink;
                  this._queue = undefined;
                  this._queueTotalSize = undefined;
                  ResetQueue(this);
                  this._started = false;
                  const normalizedStrategy = ValidateAndNormalizeQueuingStrategy(size, highWaterMark);
                  this._strategySize = normalizedStrategy.size;
                  this._strategyHWM = normalizedStrategy.highWaterMark;
                  const backpressure = WritableStreamDefaultControllerGetBackpressure(this);
                  WritableStreamUpdateBackpressure(stream, backpressure);
                }
                _createClass(WritableStreamDefaultController, [
                  {
                    key: 'error',
                    value: function error(e) {
                      if (IsWritableStreamDefaultController(this) === false) {
                        throw new TypeError(
                          'WritableStreamDefaultController.prototype.error can only be used on a WritableStreamDefaultController',
                        );
                      }
                      const state = this._controlledWritableStream._state;
                      if (state !== 'writable') {
                        return;
                      }
                      WritableStreamDefaultControllerError(this, e);
                    },
                  },
                  {
                    key: '__abortSteps',
                    value: function __abortSteps(reason) {
                      return PromiseInvokeOrNoop(this._underlyingSink, 'abort', [reason]);
                    },
                  },
                  {
                    key: '__errorSteps',
                    value: function __errorSteps() {
                      ResetQueue(this);
                    },
                  },
                  {
                    key: '__startSteps',
                    value: function __startSteps() {
                      const _this = this;
                      const startResult = InvokeOrNoop(this._underlyingSink, 'start', [this]);
                      const stream = this._controlledWritableStream;
                      Promise.resolve(startResult)
                        .then(
                          function () {
                            assert(stream._state === 'writable' || stream._state === 'erroring');
                            _this._started = true;
                            WritableStreamDefaultControllerAdvanceQueueIfNeeded(_this);
                          },
                          function (r) {
                            assert(stream._state === 'writable' || stream._state === 'erroring');
                            _this._started = true;
                            WritableStreamDealWithRejection(stream, r);
                          },
                        )
                        .catch(rethrowAssertionErrorRejection);
                    },
                  },
                ]);
                return WritableStreamDefaultController;
              })();
              function WritableStreamDefaultControllerClose(controller) {
                EnqueueValueWithSize(controller, 'close', 0);
                WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
              }
              function WritableStreamDefaultControllerGetChunkSize(controller, chunk) {
                const strategySize = controller._strategySize;
                if (strategySize === undefined) {
                  return 1;
                }
                try {
                  return strategySize(chunk);
                } catch (chunkSizeE) {
                  WritableStreamDefaultControllerErrorIfNeeded(controller, chunkSizeE);
                  return 1;
                }
              }
              function WritableStreamDefaultControllerGetDesiredSize(controller) {
                return controller._strategyHWM - controller._queueTotalSize;
              }
              function WritableStreamDefaultControllerWrite(controller, chunk, chunkSize) {
                const writeRecord = { chunk: chunk };
                try {
                  EnqueueValueWithSize(controller, writeRecord, chunkSize);
                } catch (enqueueE) {
                  WritableStreamDefaultControllerErrorIfNeeded(controller, enqueueE);
                  return;
                }
                const stream = controller._controlledWritableStream;
                if (WritableStreamCloseQueuedOrInFlight(stream) === false && stream._state === 'writable') {
                  const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
                  WritableStreamUpdateBackpressure(stream, backpressure);
                }
                WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
              }
              function IsWritableStreamDefaultController(x) {
                if (!typeIsObject(x)) {
                  return false;
                }
                if (!Object.prototype.hasOwnProperty.call(x, '_underlyingSink')) {
                  return false;
                }
                return true;
              }
              function WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller) {
                const stream = controller._controlledWritableStream;
                if (controller._started === false) {
                  return;
                }
                if (stream._inFlightWriteRequest !== undefined) {
                  return;
                }
                const state = stream._state;
                if (state === 'closed' || state === 'errored') {
                  return;
                }
                if (state === 'erroring') {
                  WritableStreamFinishErroring(stream);
                  return;
                }
                if (controller._queue.length === 0) {
                  return;
                }
                const writeRecord = PeekQueueValue(controller);
                if (writeRecord === 'close') {
                  WritableStreamDefaultControllerProcessClose(controller);
                } else {
                  WritableStreamDefaultControllerProcessWrite(controller, writeRecord.chunk);
                }
              }
              function WritableStreamDefaultControllerErrorIfNeeded(controller, error) {
                if (controller._controlledWritableStream._state === 'writable') {
                  WritableStreamDefaultControllerError(controller, error);
                }
              }
              function WritableStreamDefaultControllerProcessClose(controller) {
                const stream = controller._controlledWritableStream;
                WritableStreamMarkCloseRequestInFlight(stream);
                DequeueValue(controller);
                assert(controller._queue.length === 0, 'queue must be empty once the final write record is dequeued');
                const sinkClosePromise = PromiseInvokeOrNoop(controller._underlyingSink, 'close', []);
                sinkClosePromise
                  .then(
                    function () {
                      WritableStreamFinishInFlightClose(stream);
                    },
                    function (reason) {
                      WritableStreamFinishInFlightCloseWithError(stream, reason);
                    },
                  )
                  .catch(rethrowAssertionErrorRejection);
              }
              function WritableStreamDefaultControllerProcessWrite(controller, chunk) {
                const stream = controller._controlledWritableStream;
                WritableStreamMarkFirstWriteRequestInFlight(stream);
                const sinkWritePromise = PromiseInvokeOrNoop(controller._underlyingSink, 'write', [chunk, controller]);
                sinkWritePromise
                  .then(
                    function () {
                      WritableStreamFinishInFlightWrite(stream);
                      const state = stream._state;
                      assert(state === 'writable' || state === 'erroring');
                      DequeueValue(controller);
                      if (WritableStreamCloseQueuedOrInFlight(stream) === false && state === 'writable') {
                        const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
                        WritableStreamUpdateBackpressure(stream, backpressure);
                      }
                      WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
                    },
                    function (reason) {
                      WritableStreamFinishInFlightWriteWithError(stream, reason);
                    },
                  )
                  .catch(rethrowAssertionErrorRejection);
              }
              function WritableStreamDefaultControllerGetBackpressure(controller) {
                const desiredSize = WritableStreamDefaultControllerGetDesiredSize(controller);
                return desiredSize <= 0;
              }
              function WritableStreamDefaultControllerError(controller, error) {
                const stream = controller._controlledWritableStream;
                assert(stream._state === 'writable');
                WritableStreamStartErroring(stream, error);
              }
              function streamBrandCheckException(name) {
                return new TypeError('WritableStream.prototype.' + name + ' can only be used on a WritableStream');
              }
              function defaultWriterBrandCheckException(name) {
                return new TypeError(
                  'WritableStreamDefaultWriter.prototype.' + name + ' can only be used on a WritableStreamDefaultWriter',
                );
              }
              function defaultWriterLockException(name) {
                return new TypeError('Cannot ' + name + ' a stream using a released writer');
              }
              function defaultWriterClosedPromiseInitialize(writer) {
                writer._closedPromise = new Promise(function (resolve, reject) {
                  writer._closedPromise_resolve = resolve;
                  writer._closedPromise_reject = reject;
                  writer._closedPromiseState = 'pending';
                });
              }
              function defaultWriterClosedPromiseInitializeAsRejected(writer, reason) {
                writer._closedPromise = Promise.reject(reason);
                writer._closedPromise_resolve = undefined;
                writer._closedPromise_reject = undefined;
                writer._closedPromiseState = 'rejected';
              }
              function defaultWriterClosedPromiseInitializeAsResolved(writer) {
                writer._closedPromise = Promise.resolve(undefined);
                writer._closedPromise_resolve = undefined;
                writer._closedPromise_reject = undefined;
                writer._closedPromiseState = 'resolved';
              }
              function defaultWriterClosedPromiseReject(writer, reason) {
                assert(writer._closedPromise_resolve !== undefined, 'writer._closedPromise_resolve !== undefined');
                assert(writer._closedPromise_reject !== undefined, 'writer._closedPromise_reject !== undefined');
                assert(writer._closedPromiseState === 'pending', 'writer._closedPromiseState is pending');
                writer._closedPromise_reject(reason);
                writer._closedPromise_resolve = undefined;
                writer._closedPromise_reject = undefined;
                writer._closedPromiseState = 'rejected';
              }
              function defaultWriterClosedPromiseResetToRejected(writer, reason) {
                assert(writer._closedPromise_resolve === undefined, 'writer._closedPromise_resolve === undefined');
                assert(writer._closedPromise_reject === undefined, 'writer._closedPromise_reject === undefined');
                assert(writer._closedPromiseState !== 'pending', 'writer._closedPromiseState is not pending');
                writer._closedPromise = Promise.reject(reason);
                writer._closedPromiseState = 'rejected';
              }
              function defaultWriterClosedPromiseResolve(writer) {
                assert(writer._closedPromise_resolve !== undefined, 'writer._closedPromise_resolve !== undefined');
                assert(writer._closedPromise_reject !== undefined, 'writer._closedPromise_reject !== undefined');
                assert(writer._closedPromiseState === 'pending', 'writer._closedPromiseState is pending');
                writer._closedPromise_resolve(undefined);
                writer._closedPromise_resolve = undefined;
                writer._closedPromise_reject = undefined;
                writer._closedPromiseState = 'resolved';
              }
              function defaultWriterReadyPromiseInitialize(writer) {
                writer._readyPromise = new Promise(function (resolve, reject) {
                  writer._readyPromise_resolve = resolve;
                  writer._readyPromise_reject = reject;
                });
                writer._readyPromiseState = 'pending';
              }
              function defaultWriterReadyPromiseInitializeAsRejected(writer, reason) {
                writer._readyPromise = Promise.reject(reason);
                writer._readyPromise_resolve = undefined;
                writer._readyPromise_reject = undefined;
                writer._readyPromiseState = 'rejected';
              }
              function defaultWriterReadyPromiseInitializeAsResolved(writer) {
                writer._readyPromise = Promise.resolve(undefined);
                writer._readyPromise_resolve = undefined;
                writer._readyPromise_reject = undefined;
                writer._readyPromiseState = 'fulfilled';
              }
              function defaultWriterReadyPromiseReject(writer, reason) {
                assert(writer._readyPromise_resolve !== undefined, 'writer._readyPromise_resolve !== undefined');
                assert(writer._readyPromise_reject !== undefined, 'writer._readyPromise_reject !== undefined');
                writer._readyPromise_reject(reason);
                writer._readyPromise_resolve = undefined;
                writer._readyPromise_reject = undefined;
                writer._readyPromiseState = 'rejected';
              }
              function defaultWriterReadyPromiseReset(writer) {
                assert(writer._readyPromise_resolve === undefined, 'writer._readyPromise_resolve === undefined');
                assert(writer._readyPromise_reject === undefined, 'writer._readyPromise_reject === undefined');
                writer._readyPromise = new Promise(function (resolve, reject) {
                  writer._readyPromise_resolve = resolve;
                  writer._readyPromise_reject = reject;
                });
                writer._readyPromiseState = 'pending';
              }
              function defaultWriterReadyPromiseResetToRejected(writer, reason) {
                assert(writer._readyPromise_resolve === undefined, 'writer._readyPromise_resolve === undefined');
                assert(writer._readyPromise_reject === undefined, 'writer._readyPromise_reject === undefined');
                writer._readyPromise = Promise.reject(reason);
                writer._readyPromiseState = 'rejected';
              }
              function defaultWriterReadyPromiseResolve(writer) {
                assert(writer._readyPromise_resolve !== undefined, 'writer._readyPromise_resolve !== undefined');
                assert(writer._readyPromise_reject !== undefined, 'writer._readyPromise_reject !== undefined');
                writer._readyPromise_resolve(undefined);
                writer._readyPromise_resolve = undefined;
                writer._readyPromise_reject = undefined;
                writer._readyPromiseState = 'fulfilled';
              }
            },
            function (module, exports, __w_pdfjs_require__) {
              'use strict';

              const _require = __w_pdfjs_require__(0),
                IsFiniteNonNegativeNumber = _require.IsFiniteNonNegativeNumber;
              const _require2 = __w_pdfjs_require__(1),
                assert = _require2.assert;
              exports.DequeueValue = function (container) {
                assert(
                  '_queue' in container && '_queueTotalSize' in container,
                  'Spec-level failure: DequeueValue should only be used on containers with [[queue]] and [[queueTotalSize]].',
                );
                assert(container._queue.length > 0, 'Spec-level failure: should never dequeue from an empty queue.');
                const pair = container._queue.shift();
                container._queueTotalSize -= pair.size;
                if (container._queueTotalSize < 0) {
                  container._queueTotalSize = 0;
                }
                return pair.value;
              };
              exports.EnqueueValueWithSize = function (container, value, size) {
                assert(
                  '_queue' in container && '_queueTotalSize' in container,
                  'Spec-level failure: EnqueueValueWithSize should only be used on containers with [[queue]] and ' + '[[queueTotalSize]].',
                );
                size = Number(size);
                if (!IsFiniteNonNegativeNumber(size)) {
                  throw new RangeError('Size must be a finite, non-NaN, non-negative number.');
                }
                container._queue.push({
                  value: value,
                  size: size,
                });
                container._queueTotalSize += size;
              };
              exports.PeekQueueValue = function (container) {
                assert(
                  '_queue' in container && '_queueTotalSize' in container,
                  'Spec-level failure: PeekQueueValue should only be used on containers with [[queue]] and [[queueTotalSize]].',
                );
                assert(container._queue.length > 0, 'Spec-level failure: should never peek at an empty queue.');
                const pair = container._queue[0];
                return pair.value;
              };
              exports.ResetQueue = function (container) {
                assert(
                  '_queue' in container && '_queueTotalSize' in container,
                  'Spec-level failure: ResetQueue should only be used on containers with [[queue]] and [[queueTotalSize]].',
                );
                container._queue = [];
                container._queueTotalSize = 0;
              };
            },
            function (module, exports, __w_pdfjs_require__) {
              'use strict';

              const _createClass = (function () {
                function defineProperties(target, props) {
                  for (let i = 0; i < props.length; i++) {
                    const descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ('value' in descriptor) {
                      descriptor.writable = true;
                    }
                    Object.defineProperty(target, descriptor.key, descriptor);
                  }
                }
                return function (Constructor, protoProps, staticProps) {
                  if (protoProps) {
                    defineProperties(Constructor.prototype, protoProps);
                  }
                  if (staticProps) {
                    defineProperties(Constructor, staticProps);
                  }
                  return Constructor;
                };
              })();
              function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                  throw new TypeError('Cannot call a class as a function');
                }
              }
              const _require = __w_pdfjs_require__(0),
                ArrayBufferCopy = _require.ArrayBufferCopy,
                CreateIterResultObject = _require.CreateIterResultObject,
                IsFiniteNonNegativeNumber = _require.IsFiniteNonNegativeNumber,
                InvokeOrNoop = _require.InvokeOrNoop,
                PromiseInvokeOrNoop = _require.PromiseInvokeOrNoop,
                TransferArrayBuffer = _require.TransferArrayBuffer,
                ValidateAndNormalizeQueuingStrategy = _require.ValidateAndNormalizeQueuingStrategy,
                ValidateAndNormalizeHighWaterMark = _require.ValidateAndNormalizeHighWaterMark;
              const _require2 = __w_pdfjs_require__(0),
                createArrayFromList = _require2.createArrayFromList,
                createDataProperty = _require2.createDataProperty,
                typeIsObject = _require2.typeIsObject;
              const _require3 = __w_pdfjs_require__(1),
                assert = _require3.assert,
                rethrowAssertionErrorRejection = _require3.rethrowAssertionErrorRejection;
              const _require4 = __w_pdfjs_require__(3),
                DequeueValue = _require4.DequeueValue,
                EnqueueValueWithSize = _require4.EnqueueValueWithSize,
                ResetQueue = _require4.ResetQueue;
              const _require5 = __w_pdfjs_require__(2),
                AcquireWritableStreamDefaultWriter = _require5.AcquireWritableStreamDefaultWriter,
                IsWritableStream = _require5.IsWritableStream,
                IsWritableStreamLocked = _require5.IsWritableStreamLocked,
                WritableStreamAbort = _require5.WritableStreamAbort,
                WritableStreamDefaultWriterCloseWithErrorPropagation = _require5.WritableStreamDefaultWriterCloseWithErrorPropagation,
                WritableStreamDefaultWriterRelease = _require5.WritableStreamDefaultWriterRelease,
                WritableStreamDefaultWriterWrite = _require5.WritableStreamDefaultWriterWrite,
                WritableStreamCloseQueuedOrInFlight = _require5.WritableStreamCloseQueuedOrInFlight;
              const ReadableStream = (function () {
                function ReadableStream() {
                  const underlyingSource = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                  let _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                    size = _ref.size,
                    highWaterMark = _ref.highWaterMark;
                  _classCallCheck(this, ReadableStream);
                  this._state = 'readable';
                  this._reader = undefined;
                  this._storedError = undefined;
                  this._disturbed = false;
                  this._readableStreamController = undefined;
                  const type = underlyingSource.type;
                  const typeString = String(type);
                  if (typeString === 'bytes') {
                    if (highWaterMark === undefined) {
                      highWaterMark = 0;
                    }
                    this._readableStreamController = new ReadableByteStreamController(this, underlyingSource, highWaterMark);
                  } else if (type === undefined) {
                    if (highWaterMark === undefined) {
                      highWaterMark = 1;
                    }
                    this._readableStreamController = new ReadableStreamDefaultController(this, underlyingSource, size, highWaterMark);
                  } else {
                    throw new RangeError('Invalid type is specified');
                  }
                }
                _createClass(ReadableStream, [
                  {
                    key: 'cancel',
                    value: function cancel(reason) {
                      if (IsReadableStream(this) === false) {
                        return Promise.reject(streamBrandCheckException('cancel'));
                      }
                      if (IsReadableStreamLocked(this) === true) {
                        return Promise.reject(new TypeError('Cannot cancel a stream that already has a reader'));
                      }
                      return ReadableStreamCancel(this, reason);
                    },
                  },
                  {
                    key: 'getReader',
                    value: function getReader() {
                      let _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                        mode = _ref2.mode;
                      if (IsReadableStream(this) === false) {
                        throw streamBrandCheckException('getReader');
                      }
                      if (mode === undefined) {
                        return AcquireReadableStreamDefaultReader(this);
                      }
                      mode = String(mode);
                      if (mode === 'byob') {
                        return AcquireReadableStreamBYOBReader(this);
                      }
                      throw new RangeError('Invalid mode is specified');
                    },
                  },
                  {
                    key: 'pipeThrough',
                    value: function pipeThrough(_ref3, options) {
                      const writable = _ref3.writable,
                        readable = _ref3.readable;
                      const promise = this.pipeTo(writable, options);
                      ifIsObjectAndHasAPromiseIsHandledInternalSlotSetPromiseIsHandledToTrue(promise);
                      return readable;
                    },
                  },
                  {
                    key: 'pipeTo',
                    value: function pipeTo(dest) {
                      const _this = this;
                      let _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                        preventClose = _ref4.preventClose,
                        preventAbort = _ref4.preventAbort,
                        preventCancel = _ref4.preventCancel;
                      if (IsReadableStream(this) === false) {
                        return Promise.reject(streamBrandCheckException('pipeTo'));
                      }
                      if (IsWritableStream(dest) === false) {
                        return Promise.reject(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"));
                      }
                      preventClose = Boolean(preventClose);
                      preventAbort = Boolean(preventAbort);
                      preventCancel = Boolean(preventCancel);
                      if (IsReadableStreamLocked(this) === true) {
                        return Promise.reject(new TypeError('ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream'));
                      }
                      if (IsWritableStreamLocked(dest) === true) {
                        return Promise.reject(new TypeError('ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream'));
                      }
                      const reader = AcquireReadableStreamDefaultReader(this);
                      const writer = AcquireWritableStreamDefaultWriter(dest);
                      let shuttingDown = false;
                      let currentWrite = Promise.resolve();
                      return new Promise(function (resolve, reject) {
                        function pipeLoop() {
                          currentWrite = Promise.resolve();
                          if (shuttingDown === true) {
                            return Promise.resolve();
                          }
                          return writer._readyPromise
                            .then(function () {
                              return ReadableStreamDefaultReaderRead(reader).then(function (_ref5) {
                                const value = _ref5.value,
                                  done = _ref5.done;
                                if (done === true) {
                                  return;
                                }
                                currentWrite = WritableStreamDefaultWriterWrite(writer, value).catch(function () {});
                              });
                            })
                            .then(pipeLoop);
                        }
                        isOrBecomesErrored(_this, reader._closedPromise, function (storedError) {
                          if (preventAbort === false) {
                            shutdownWithAction(
                              function () {
                                return WritableStreamAbort(dest, storedError);
                              },
                              true,
                              storedError,
                            );
                          } else {
                            shutdown(true, storedError);
                          }
                        });
                        isOrBecomesErrored(dest, writer._closedPromise, function (storedError) {
                          if (preventCancel === false) {
                            shutdownWithAction(
                              function () {
                                return ReadableStreamCancel(_this, storedError);
                              },
                              true,
                              storedError,
                            );
                          } else {
                            shutdown(true, storedError);
                          }
                        });
                        isOrBecomesClosed(_this, reader._closedPromise, function () {
                          if (preventClose === false) {
                            shutdownWithAction(function () {
                              return WritableStreamDefaultWriterCloseWithErrorPropagation(writer);
                            });
                          } else {
                            shutdown();
                          }
                        });
                        if (WritableStreamCloseQueuedOrInFlight(dest) === true || dest._state === 'closed') {
                          const destClosed = new TypeError('the destination writable stream closed before all data could be piped to it');
                          if (preventCancel === false) {
                            shutdownWithAction(
                              function () {
                                return ReadableStreamCancel(_this, destClosed);
                              },
                              true,
                              destClosed,
                            );
                          } else {
                            shutdown(true, destClosed);
                          }
                        }
                        pipeLoop().catch(function (err) {
                          currentWrite = Promise.resolve();
                          rethrowAssertionErrorRejection(err);
                        });
                        function waitForWritesToFinish() {
                          const oldCurrentWrite = currentWrite;
                          return currentWrite.then(function () {
                            return oldCurrentWrite !== currentWrite ? waitForWritesToFinish() : undefined;
                          });
                        }
                        function isOrBecomesErrored(stream, promise, action) {
                          if (stream._state === 'errored') {
                            action(stream._storedError);
                          } else {
                            promise.catch(action).catch(rethrowAssertionErrorRejection);
                          }
                        }
                        function isOrBecomesClosed(stream, promise, action) {
                          if (stream._state === 'closed') {
                            action();
                          } else {
                            promise.then(action).catch(rethrowAssertionErrorRejection);
                          }
                        }
                        function shutdownWithAction(action, originalIsError, originalError) {
                          if (shuttingDown === true) {
                            return;
                          }
                          shuttingDown = true;
                          if (dest._state === 'writable' && WritableStreamCloseQueuedOrInFlight(dest) === false) {
                            waitForWritesToFinish().then(doTheRest);
                          } else {
                            doTheRest();
                          }
                          function doTheRest() {
                            action()
                              .then(
                                function () {
                                  return finalize(originalIsError, originalError);
                                },
                                function (newError) {
                                  return finalize(true, newError);
                                },
                              )
                              .catch(rethrowAssertionErrorRejection);
                          }
                        }
                        function shutdown(isError, error) {
                          if (shuttingDown === true) {
                            return;
                          }
                          shuttingDown = true;
                          if (dest._state === 'writable' && WritableStreamCloseQueuedOrInFlight(dest) === false) {
                            waitForWritesToFinish()
                              .then(function () {
                                return finalize(isError, error);
                              })
                              .catch(rethrowAssertionErrorRejection);
                          } else {
                            finalize(isError, error);
                          }
                        }
                        function finalize(isError, error) {
                          WritableStreamDefaultWriterRelease(writer);
                          ReadableStreamReaderGenericRelease(reader);
                          if (isError) {
                            reject(error);
                          } else {
                            resolve(undefined);
                          }
                        }
                      });
                    },
                  },
                  {
                    key: 'tee',
                    value: function tee() {
                      if (IsReadableStream(this) === false) {
                        throw streamBrandCheckException('tee');
                      }
                      const branches = ReadableStreamTee(this, false);
                      return createArrayFromList(branches);
                    },
                  },
                  {
                    key: 'locked',
                    get: function get() {
                      if (IsReadableStream(this) === false) {
                        throw streamBrandCheckException('locked');
                      }
                      return IsReadableStreamLocked(this);
                    },
                  },
                ]);
                return ReadableStream;
              })();
              module.exports = {
                ReadableStream: ReadableStream,
                IsReadableStreamDisturbed: IsReadableStreamDisturbed,
                ReadableStreamDefaultControllerClose: ReadableStreamDefaultControllerClose,
                ReadableStreamDefaultControllerEnqueue: ReadableStreamDefaultControllerEnqueue,
                ReadableStreamDefaultControllerError: ReadableStreamDefaultControllerError,
                ReadableStreamDefaultControllerGetDesiredSize: ReadableStreamDefaultControllerGetDesiredSize,
              };
              function AcquireReadableStreamBYOBReader(stream) {
                return new ReadableStreamBYOBReader(stream);
              }
              function AcquireReadableStreamDefaultReader(stream) {
                return new ReadableStreamDefaultReader(stream);
              }
              function IsReadableStream(x) {
                if (!typeIsObject(x)) {
                  return false;
                }
                if (!Object.prototype.hasOwnProperty.call(x, '_readableStreamController')) {
                  return false;
                }
                return true;
              }
              function IsReadableStreamDisturbed(stream) {
                assert(IsReadableStream(stream) === true, 'IsReadableStreamDisturbed should only be used on known readable streams');
                return stream._disturbed;
              }
              function IsReadableStreamLocked(stream) {
                assert(IsReadableStream(stream) === true, 'IsReadableStreamLocked should only be used on known readable streams');
                if (stream._reader === undefined) {
                  return false;
                }
                return true;
              }
              function ReadableStreamTee(stream, cloneForBranch2) {
                assert(IsReadableStream(stream) === true);
                assert(typeof cloneForBranch2 === 'boolean');
                const reader = AcquireReadableStreamDefaultReader(stream);
                const teeState = {
                  closedOrErrored: false,
                  canceled1: false,
                  canceled2: false,
                  reason1: undefined,
                  reason2: undefined,
                };
                teeState.promise = new Promise(function (resolve) {
                  teeState._resolve = resolve;
                });
                const pull = create_ReadableStreamTeePullFunction();
                pull._reader = reader;
                pull._teeState = teeState;
                pull._cloneForBranch2 = cloneForBranch2;
                const cancel1 = create_ReadableStreamTeeBranch1CancelFunction();
                cancel1._stream = stream;
                cancel1._teeState = teeState;
                const cancel2 = create_ReadableStreamTeeBranch2CancelFunction();
                cancel2._stream = stream;
                cancel2._teeState = teeState;
                const underlyingSource1 = Object.create(Object.prototype);
                createDataProperty(underlyingSource1, 'pull', pull);
                createDataProperty(underlyingSource1, 'cancel', cancel1);
                const branch1Stream = new ReadableStream(underlyingSource1);
                const underlyingSource2 = Object.create(Object.prototype);
                createDataProperty(underlyingSource2, 'pull', pull);
                createDataProperty(underlyingSource2, 'cancel', cancel2);
                const branch2Stream = new ReadableStream(underlyingSource2);
                pull._branch1 = branch1Stream._readableStreamController;
                pull._branch2 = branch2Stream._readableStreamController;
                reader._closedPromise.catch(function (r) {
                  if (teeState.closedOrErrored === true) {
                    return;
                  }
                  ReadableStreamDefaultControllerError(pull._branch1, r);
                  ReadableStreamDefaultControllerError(pull._branch2, r);
                  teeState.closedOrErrored = true;
                });
                return [branch1Stream, branch2Stream];
              }
              function create_ReadableStreamTeePullFunction() {
                function f() {
                  const reader = f._reader,
                    branch1 = f._branch1,
                    branch2 = f._branch2,
                    teeState = f._teeState;
                  return ReadableStreamDefaultReaderRead(reader).then(function (result) {
                    assert(typeIsObject(result));
                    const value = result.value;
                    const done = result.done;
                    assert(typeof done === 'boolean');
                    if (done === true && teeState.closedOrErrored === false) {
                      if (teeState.canceled1 === false) {
                        ReadableStreamDefaultControllerClose(branch1);
                      }
                      if (teeState.canceled2 === false) {
                        ReadableStreamDefaultControllerClose(branch2);
                      }
                      teeState.closedOrErrored = true;
                    }
                    if (teeState.closedOrErrored === true) {
                      return;
                    }
                    const value1 = value;
                    const value2 = value;
                    if (teeState.canceled1 === false) {
                      ReadableStreamDefaultControllerEnqueue(branch1, value1);
                    }
                    if (teeState.canceled2 === false) {
                      ReadableStreamDefaultControllerEnqueue(branch2, value2);
                    }
                  });
                }
                return f;
              }
              function create_ReadableStreamTeeBranch1CancelFunction() {
                function f(reason) {
                  const stream = f._stream,
                    teeState = f._teeState;
                  teeState.canceled1 = true;
                  teeState.reason1 = reason;
                  if (teeState.canceled2 === true) {
                    const compositeReason = createArrayFromList([teeState.reason1, teeState.reason2]);
                    const cancelResult = ReadableStreamCancel(stream, compositeReason);
                    teeState._resolve(cancelResult);
                  }
                  return teeState.promise;
                }
                return f;
              }
              function create_ReadableStreamTeeBranch2CancelFunction() {
                function f(reason) {
                  const stream = f._stream,
                    teeState = f._teeState;
                  teeState.canceled2 = true;
                  teeState.reason2 = reason;
                  if (teeState.canceled1 === true) {
                    const compositeReason = createArrayFromList([teeState.reason1, teeState.reason2]);
                    const cancelResult = ReadableStreamCancel(stream, compositeReason);
                    teeState._resolve(cancelResult);
                  }
                  return teeState.promise;
                }
                return f;
              }
              function ReadableStreamAddReadIntoRequest(stream) {
                assert(IsReadableStreamBYOBReader(stream._reader) === true);
                assert(stream._state === 'readable' || stream._state === 'closed');
                const promise = new Promise(function (resolve, reject) {
                  const readIntoRequest = {
                    _resolve: resolve,
                    _reject: reject,
                  };
                  stream._reader._readIntoRequests.push(readIntoRequest);
                });
                return promise;
              }
              function ReadableStreamAddReadRequest(stream) {
                assert(IsReadableStreamDefaultReader(stream._reader) === true);
                assert(stream._state === 'readable');
                const promise = new Promise(function (resolve, reject) {
                  const readRequest = {
                    _resolve: resolve,
                    _reject: reject,
                  };
                  stream._reader._readRequests.push(readRequest);
                });
                return promise;
              }
              function ReadableStreamCancel(stream, reason) {
                stream._disturbed = true;
                if (stream._state === 'closed') {
                  return Promise.resolve(undefined);
                }
                if (stream._state === 'errored') {
                  return Promise.reject(stream._storedError);
                }
                ReadableStreamClose(stream);
                const sourceCancelPromise = stream._readableStreamController.__cancelSteps(reason);
                return sourceCancelPromise.then(function () {
                  return undefined;
                });
              }
              function ReadableStreamClose(stream) {
                assert(stream._state === 'readable');
                stream._state = 'closed';
                const reader = stream._reader;
                if (reader === undefined) {
                  return undefined;
                }
                if (IsReadableStreamDefaultReader(reader) === true) {
                  for (let i = 0; i < reader._readRequests.length; i++) {
                    const _resolve = reader._readRequests[i]._resolve;
                    _resolve(CreateIterResultObject(undefined, true));
                  }
                  reader._readRequests = [];
                }
                defaultReaderClosedPromiseResolve(reader);
                return undefined;
              }
              function ReadableStreamError(stream, e) {
                assert(IsReadableStream(stream) === true, 'stream must be ReadableStream');
                assert(stream._state === 'readable', 'state must be readable');
                stream._state = 'errored';
                stream._storedError = e;
                const reader = stream._reader;
                if (reader === undefined) {
                  return undefined;
                }
                if (IsReadableStreamDefaultReader(reader) === true) {
                  for (let i = 0; i < reader._readRequests.length; i++) {
                    const readRequest = reader._readRequests[i];
                    readRequest._reject(e);
                  }
                  reader._readRequests = [];
                } else {
                  assert(IsReadableStreamBYOBReader(reader), 'reader must be ReadableStreamBYOBReader');
                  for (let _i = 0; _i < reader._readIntoRequests.length; _i++) {
                    const readIntoRequest = reader._readIntoRequests[_i];
                    readIntoRequest._reject(e);
                  }
                  reader._readIntoRequests = [];
                }
                defaultReaderClosedPromiseReject(reader, e);
                reader._closedPromise.catch(function () {});
              }
              function ReadableStreamFulfillReadIntoRequest(stream, chunk, done) {
                const reader = stream._reader;
                assert(reader._readIntoRequests.length > 0);
                const readIntoRequest = reader._readIntoRequests.shift();
                readIntoRequest._resolve(CreateIterResultObject(chunk, done));
              }
              function ReadableStreamFulfillReadRequest(stream, chunk, done) {
                const reader = stream._reader;
                assert(reader._readRequests.length > 0);
                const readRequest = reader._readRequests.shift();
                readRequest._resolve(CreateIterResultObject(chunk, done));
              }
              function ReadableStreamGetNumReadIntoRequests(stream) {
                return stream._reader._readIntoRequests.length;
              }
              function ReadableStreamGetNumReadRequests(stream) {
                return stream._reader._readRequests.length;
              }
              function ReadableStreamHasBYOBReader(stream) {
                const reader = stream._reader;
                if (reader === undefined) {
                  return false;
                }
                if (IsReadableStreamBYOBReader(reader) === false) {
                  return false;
                }
                return true;
              }
              function ReadableStreamHasDefaultReader(stream) {
                const reader = stream._reader;
                if (reader === undefined) {
                  return false;
                }
                if (IsReadableStreamDefaultReader(reader) === false) {
                  return false;
                }
                return true;
              }
              var ReadableStreamDefaultReader = (function () {
                function ReadableStreamDefaultReader(stream) {
                  _classCallCheck(this, ReadableStreamDefaultReader);
                  if (IsReadableStream(stream) === false) {
                    throw new TypeError('ReadableStreamDefaultReader can only be constructed with a ReadableStream instance');
                  }
                  if (IsReadableStreamLocked(stream) === true) {
                    throw new TypeError('This stream has already been locked for exclusive reading by another reader');
                  }
                  ReadableStreamReaderGenericInitialize(this, stream);
                  this._readRequests = [];
                }
                _createClass(ReadableStreamDefaultReader, [
                  {
                    key: 'cancel',
                    value: function cancel(reason) {
                      if (IsReadableStreamDefaultReader(this) === false) {
                        return Promise.reject(defaultReaderBrandCheckException('cancel'));
                      }
                      if (this._ownerReadableStream === undefined) {
                        return Promise.reject(readerLockException('cancel'));
                      }
                      return ReadableStreamReaderGenericCancel(this, reason);
                    },
                  },
                  {
                    key: 'read',
                    value: function read() {
                      if (IsReadableStreamDefaultReader(this) === false) {
                        return Promise.reject(defaultReaderBrandCheckException('read'));
                      }
                      if (this._ownerReadableStream === undefined) {
                        return Promise.reject(readerLockException('read from'));
                      }
                      return ReadableStreamDefaultReaderRead(this);
                    },
                  },
                  {
                    key: 'releaseLock',
                    value: function releaseLock() {
                      if (IsReadableStreamDefaultReader(this) === false) {
                        throw defaultReaderBrandCheckException('releaseLock');
                      }
                      if (this._ownerReadableStream === undefined) {
                        return;
                      }
                      if (this._readRequests.length > 0) {
                        throw new TypeError('Tried to release a reader lock when that reader has pending read() calls un-settled');
                      }
                      ReadableStreamReaderGenericRelease(this);
                    },
                  },
                  {
                    key: 'closed',
                    get: function get() {
                      if (IsReadableStreamDefaultReader(this) === false) {
                        return Promise.reject(defaultReaderBrandCheckException('closed'));
                      }
                      return this._closedPromise;
                    },
                  },
                ]);
                return ReadableStreamDefaultReader;
              })();
              var ReadableStreamBYOBReader = (function () {
                function ReadableStreamBYOBReader(stream) {
                  _classCallCheck(this, ReadableStreamBYOBReader);
                  if (!IsReadableStream(stream)) {
                    throw new TypeError(
                      'ReadableStreamBYOBReader can only be constructed with a ReadableStream instance given a ' + 'byte source',
                    );
                  }
                  if (IsReadableByteStreamController(stream._readableStreamController) === false) {
                    throw new TypeError('Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte ' + 'source');
                  }
                  if (IsReadableStreamLocked(stream)) {
                    throw new TypeError('This stream has already been locked for exclusive reading by another reader');
                  }
                  ReadableStreamReaderGenericInitialize(this, stream);
                  this._readIntoRequests = [];
                }
                _createClass(ReadableStreamBYOBReader, [
                  {
                    key: 'cancel',
                    value: function cancel(reason) {
                      if (!IsReadableStreamBYOBReader(this)) {
                        return Promise.reject(byobReaderBrandCheckException('cancel'));
                      }
                      if (this._ownerReadableStream === undefined) {
                        return Promise.reject(readerLockException('cancel'));
                      }
                      return ReadableStreamReaderGenericCancel(this, reason);
                    },
                  },
                  {
                    key: 'read',
                    value: function read(view) {
                      if (!IsReadableStreamBYOBReader(this)) {
                        return Promise.reject(byobReaderBrandCheckException('read'));
                      }
                      if (this._ownerReadableStream === undefined) {
                        return Promise.reject(readerLockException('read from'));
                      }
                      if (!ArrayBuffer.isView(view)) {
                        return Promise.reject(new TypeError('view must be an array buffer view'));
                      }
                      if (view.byteLength === 0) {
                        return Promise.reject(new TypeError('view must have non-zero byteLength'));
                      }
                      return ReadableStreamBYOBReaderRead(this, view);
                    },
                  },
                  {
                    key: 'releaseLock',
                    value: function releaseLock() {
                      if (!IsReadableStreamBYOBReader(this)) {
                        throw byobReaderBrandCheckException('releaseLock');
                      }
                      if (this._ownerReadableStream === undefined) {
                        return;
                      }
                      if (this._readIntoRequests.length > 0) {
                        throw new TypeError('Tried to release a reader lock when that reader has pending read() calls un-settled');
                      }
                      ReadableStreamReaderGenericRelease(this);
                    },
                  },
                  {
                    key: 'closed',
                    get: function get() {
                      if (!IsReadableStreamBYOBReader(this)) {
                        return Promise.reject(byobReaderBrandCheckException('closed'));
                      }
                      return this._closedPromise;
                    },
                  },
                ]);
                return ReadableStreamBYOBReader;
              })();
              function IsReadableStreamBYOBReader(x) {
                if (!typeIsObject(x)) {
                  return false;
                }
                if (!Object.prototype.hasOwnProperty.call(x, '_readIntoRequests')) {
                  return false;
                }
                return true;
              }
              function IsReadableStreamDefaultReader(x) {
                if (!typeIsObject(x)) {
                  return false;
                }
                if (!Object.prototype.hasOwnProperty.call(x, '_readRequests')) {
                  return false;
                }
                return true;
              }
              function ReadableStreamReaderGenericInitialize(reader, stream) {
                reader._ownerReadableStream = stream;
                stream._reader = reader;
                if (stream._state === 'readable') {
                  defaultReaderClosedPromiseInitialize(reader);
                } else if (stream._state === 'closed') {
                  defaultReaderClosedPromiseInitializeAsResolved(reader);
                } else {
                  assert(stream._state === 'errored', 'state must be errored');
                  defaultReaderClosedPromiseInitializeAsRejected(reader, stream._storedError);
                  reader._closedPromise.catch(function () {});
                }
              }
              function ReadableStreamReaderGenericCancel(reader, reason) {
                const stream = reader._ownerReadableStream;
                assert(stream !== undefined);
                return ReadableStreamCancel(stream, reason);
              }
              function ReadableStreamReaderGenericRelease(reader) {
                assert(reader._ownerReadableStream !== undefined);
                assert(reader._ownerReadableStream._reader === reader);
                if (reader._ownerReadableStream._state === 'readable') {
                  defaultReaderClosedPromiseReject(
                    reader,
                    new TypeError("Reader was released and can no longer be used to monitor the stream's closedness"),
                  );
                } else {
                  defaultReaderClosedPromiseResetToRejected(
                    reader,
                    new TypeError("Reader was released and can no longer be used to monitor the stream's closedness"),
                  );
                }
                reader._closedPromise.catch(function () {});
                reader._ownerReadableStream._reader = undefined;
                reader._ownerReadableStream = undefined;
              }
              function ReadableStreamBYOBReaderRead(reader, view) {
                const stream = reader._ownerReadableStream;
                assert(stream !== undefined);
                stream._disturbed = true;
                if (stream._state === 'errored') {
                  return Promise.reject(stream._storedError);
                }
                return ReadableByteStreamControllerPullInto(stream._readableStreamController, view);
              }
              function ReadableStreamDefaultReaderRead(reader) {
                const stream = reader._ownerReadableStream;
                assert(stream !== undefined);
                stream._disturbed = true;
                if (stream._state === 'closed') {
                  return Promise.resolve(CreateIterResultObject(undefined, true));
                }
                if (stream._state === 'errored') {
                  return Promise.reject(stream._storedError);
                }
                assert(stream._state === 'readable');
                return stream._readableStreamController.__pullSteps();
              }
              var ReadableStreamDefaultController = (function () {
                function ReadableStreamDefaultController(stream, underlyingSource, size, highWaterMark) {
                  _classCallCheck(this, ReadableStreamDefaultController);
                  if (IsReadableStream(stream) === false) {
                    throw new TypeError('ReadableStreamDefaultController can only be constructed with a ReadableStream instance');
                  }
                  if (stream._readableStreamController !== undefined) {
                    throw new TypeError('ReadableStreamDefaultController instances can only be created by the ReadableStream constructor');
                  }
                  this._controlledReadableStream = stream;
                  this._underlyingSource = underlyingSource;
                  this._queue = undefined;
                  this._queueTotalSize = undefined;
                  ResetQueue(this);
                  this._started = false;
                  this._closeRequested = false;
                  this._pullAgain = false;
                  this._pulling = false;
                  const normalizedStrategy = ValidateAndNormalizeQueuingStrategy(size, highWaterMark);
                  this._strategySize = normalizedStrategy.size;
                  this._strategyHWM = normalizedStrategy.highWaterMark;
                  const controller = this;
                  const startResult = InvokeOrNoop(underlyingSource, 'start', [this]);
                  Promise.resolve(startResult)
                    .then(
                      function () {
                        controller._started = true;
                        assert(controller._pulling === false);
                        assert(controller._pullAgain === false);
                        ReadableStreamDefaultControllerCallPullIfNeeded(controller);
                      },
                      function (r) {
                        ReadableStreamDefaultControllerErrorIfNeeded(controller, r);
                      },
                    )
                    .catch(rethrowAssertionErrorRejection);
                }
                _createClass(ReadableStreamDefaultController, [
                  {
                    key: 'close',
                    value: function close() {
                      if (IsReadableStreamDefaultController(this) === false) {
                        throw defaultControllerBrandCheckException('close');
                      }
                      if (this._closeRequested === true) {
                        throw new TypeError('The stream has already been closed; do not close it again!');
                      }
                      const state = this._controlledReadableStream._state;
                      if (state !== 'readable') {
                        throw new TypeError('The stream (in ' + state + ' state) is not in the readable state and cannot be closed');
                      }
                      ReadableStreamDefaultControllerClose(this);
                    },
                  },
                  {
                    key: 'enqueue',
                    value: function enqueue(chunk) {
                      if (IsReadableStreamDefaultController(this) === false) {
                        throw defaultControllerBrandCheckException('enqueue');
                      }
                      if (this._closeRequested === true) {
                        throw new TypeError('stream is closed or draining');
                      }
                      const state = this._controlledReadableStream._state;
                      if (state !== 'readable') {
                        throw new TypeError('The stream (in ' + state + ' state) is not in the readable state and cannot be enqueued to');
                      }
                      return ReadableStreamDefaultControllerEnqueue(this, chunk);
                    },
                  },
                  {
                    key: 'error',
                    value: function error(e) {
                      if (IsReadableStreamDefaultController(this) === false) {
                        throw defaultControllerBrandCheckException('error');
                      }
                      const stream = this._controlledReadableStream;
                      if (stream._state !== 'readable') {
                        throw new TypeError('The stream is ' + stream._state + ' and so cannot be errored');
                      }
                      ReadableStreamDefaultControllerError(this, e);
                    },
                  },
                  {
                    key: '__cancelSteps',
                    value: function __cancelSteps(reason) {
                      ResetQueue(this);
                      return PromiseInvokeOrNoop(this._underlyingSource, 'cancel', [reason]);
                    },
                  },
                  {
                    key: '__pullSteps',
                    value: function __pullSteps() {
                      const stream = this._controlledReadableStream;
                      if (this._queue.length > 0) {
                        const chunk = DequeueValue(this);
                        if (this._closeRequested === true && this._queue.length === 0) {
                          ReadableStreamClose(stream);
                        } else {
                          ReadableStreamDefaultControllerCallPullIfNeeded(this);
                        }
                        return Promise.resolve(CreateIterResultObject(chunk, false));
                      }
                      const pendingPromise = ReadableStreamAddReadRequest(stream);
                      ReadableStreamDefaultControllerCallPullIfNeeded(this);
                      return pendingPromise;
                    },
                  },
                  {
                    key: 'desiredSize',
                    get: function get() {
                      if (IsReadableStreamDefaultController(this) === false) {
                        throw defaultControllerBrandCheckException('desiredSize');
                      }
                      return ReadableStreamDefaultControllerGetDesiredSize(this);
                    },
                  },
                ]);
                return ReadableStreamDefaultController;
              })();
              function IsReadableStreamDefaultController(x) {
                if (!typeIsObject(x)) {
                  return false;
                }
                if (!Object.prototype.hasOwnProperty.call(x, '_underlyingSource')) {
                  return false;
                }
                return true;
              }
              function ReadableStreamDefaultControllerCallPullIfNeeded(controller) {
                const shouldPull = ReadableStreamDefaultControllerShouldCallPull(controller);
                if (shouldPull === false) {
                  return undefined;
                }
                if (controller._pulling === true) {
                  controller._pullAgain = true;
                  return undefined;
                }
                assert(controller._pullAgain === false);
                controller._pulling = true;
                const pullPromise = PromiseInvokeOrNoop(controller._underlyingSource, 'pull', [controller]);
                pullPromise
                  .then(
                    function () {
                      controller._pulling = false;
                      if (controller._pullAgain === true) {
                        controller._pullAgain = false;
                        return ReadableStreamDefaultControllerCallPullIfNeeded(controller);
                      }
                      return undefined;
                    },
                    function (e) {
                      ReadableStreamDefaultControllerErrorIfNeeded(controller, e);
                    },
                  )
                  .catch(rethrowAssertionErrorRejection);
                return undefined;
              }
              function ReadableStreamDefaultControllerShouldCallPull(controller) {
                const stream = controller._controlledReadableStream;
                if (stream._state === 'closed' || stream._state === 'errored') {
                  return false;
                }
                if (controller._closeRequested === true) {
                  return false;
                }
                if (controller._started === false) {
                  return false;
                }
                if (IsReadableStreamLocked(stream) === true && ReadableStreamGetNumReadRequests(stream) > 0) {
                  return true;
                }
                const desiredSize = ReadableStreamDefaultControllerGetDesiredSize(controller);
                if (desiredSize > 0) {
                  return true;
                }
                return false;
              }
              function ReadableStreamDefaultControllerClose(controller) {
                const stream = controller._controlledReadableStream;
                assert(controller._closeRequested === false);
                assert(stream._state === 'readable');
                controller._closeRequested = true;
                if (controller._queue.length === 0) {
                  ReadableStreamClose(stream);
                }
              }
              function ReadableStreamDefaultControllerEnqueue(controller, chunk) {
                const stream = controller._controlledReadableStream;
                assert(controller._closeRequested === false);
                assert(stream._state === 'readable');
                if (IsReadableStreamLocked(stream) === true && ReadableStreamGetNumReadRequests(stream) > 0) {
                  ReadableStreamFulfillReadRequest(stream, chunk, false);
                } else {
                  let chunkSize = 1;
                  if (controller._strategySize !== undefined) {
                    const strategySize = controller._strategySize;
                    try {
                      chunkSize = strategySize(chunk);
                    } catch (chunkSizeE) {
                      ReadableStreamDefaultControllerErrorIfNeeded(controller, chunkSizeE);
                      throw chunkSizeE;
                    }
                  }
                  try {
                    EnqueueValueWithSize(controller, chunk, chunkSize);
                  } catch (enqueueE) {
                    ReadableStreamDefaultControllerErrorIfNeeded(controller, enqueueE);
                    throw enqueueE;
                  }
                }
                ReadableStreamDefaultControllerCallPullIfNeeded(controller);
                return undefined;
              }
              function ReadableStreamDefaultControllerError(controller, e) {
                const stream = controller._controlledReadableStream;
                assert(stream._state === 'readable');
                ResetQueue(controller);
                ReadableStreamError(stream, e);
              }
              function ReadableStreamDefaultControllerErrorIfNeeded(controller, e) {
                if (controller._controlledReadableStream._state === 'readable') {
                  ReadableStreamDefaultControllerError(controller, e);
                }
              }
              function ReadableStreamDefaultControllerGetDesiredSize(controller) {
                const stream = controller._controlledReadableStream;
                const state = stream._state;
                if (state === 'errored') {
                  return null;
                }
                if (state === 'closed') {
                  return 0;
                }
                return controller._strategyHWM - controller._queueTotalSize;
              }
              const ReadableStreamBYOBRequest = (function () {
                function ReadableStreamBYOBRequest(controller, view) {
                  _classCallCheck(this, ReadableStreamBYOBRequest);
                  this._associatedReadableByteStreamController = controller;
                  this._view = view;
                }
                _createClass(ReadableStreamBYOBRequest, [
                  {
                    key: 'respond',
                    value: function respond(bytesWritten) {
                      if (IsReadableStreamBYOBRequest(this) === false) {
                        throw byobRequestBrandCheckException('respond');
                      }
                      if (this._associatedReadableByteStreamController === undefined) {
                        throw new TypeError('This BYOB request has been invalidated');
                      }
                      ReadableByteStreamControllerRespond(this._associatedReadableByteStreamController, bytesWritten);
                    },
                  },
                  {
                    key: 'respondWithNewView',
                    value: function respondWithNewView(view) {
                      if (IsReadableStreamBYOBRequest(this) === false) {
                        throw byobRequestBrandCheckException('respond');
                      }
                      if (this._associatedReadableByteStreamController === undefined) {
                        throw new TypeError('This BYOB request has been invalidated');
                      }
                      if (!ArrayBuffer.isView(view)) {
                        throw new TypeError('You can only respond with array buffer views');
                      }
                      ReadableByteStreamControllerRespondWithNewView(this._associatedReadableByteStreamController, view);
                    },
                  },
                  {
                    key: 'view',
                    get: function get() {
                      return this._view;
                    },
                  },
                ]);
                return ReadableStreamBYOBRequest;
              })();
              var ReadableByteStreamController = (function () {
                function ReadableByteStreamController(stream, underlyingByteSource, highWaterMark) {
                  _classCallCheck(this, ReadableByteStreamController);
                  if (IsReadableStream(stream) === false) {
                    throw new TypeError(
                      'ReadableByteStreamController can only be constructed with a ReadableStream instance given ' + 'a byte source',
                    );
                  }
                  if (stream._readableStreamController !== undefined) {
                    throw new TypeError(
                      'ReadableByteStreamController instances can only be created by the ReadableStream constructor given a byte ' +
                        'source',
                    );
                  }
                  this._controlledReadableStream = stream;
                  this._underlyingByteSource = underlyingByteSource;
                  this._pullAgain = false;
                  this._pulling = false;
                  ReadableByteStreamControllerClearPendingPullIntos(this);
                  this._queue = this._queueTotalSize = undefined;
                  ResetQueue(this);
                  this._closeRequested = false;
                  this._started = false;
                  this._strategyHWM = ValidateAndNormalizeHighWaterMark(highWaterMark);
                  const autoAllocateChunkSize = underlyingByteSource.autoAllocateChunkSize;
                  if (autoAllocateChunkSize !== undefined) {
                    if (Number.isInteger(autoAllocateChunkSize) === false || autoAllocateChunkSize <= 0) {
                      throw new RangeError('autoAllocateChunkSize must be a positive integer');
                    }
                  }
                  this._autoAllocateChunkSize = autoAllocateChunkSize;
                  this._pendingPullIntos = [];
                  const controller = this;
                  const startResult = InvokeOrNoop(underlyingByteSource, 'start', [this]);
                  Promise.resolve(startResult)
                    .then(
                      function () {
                        controller._started = true;
                        assert(controller._pulling === false);
                        assert(controller._pullAgain === false);
                        ReadableByteStreamControllerCallPullIfNeeded(controller);
                      },
                      function (r) {
                        if (stream._state === 'readable') {
                          ReadableByteStreamControllerError(controller, r);
                        }
                      },
                    )
                    .catch(rethrowAssertionErrorRejection);
                }
                _createClass(ReadableByteStreamController, [
                  {
                    key: 'close',
                    value: function close() {
                      if (IsReadableByteStreamController(this) === false) {
                        throw byteStreamControllerBrandCheckException('close');
                      }
                      if (this._closeRequested === true) {
                        throw new TypeError('The stream has already been closed; do not close it again!');
                      }
                      const state = this._controlledReadableStream._state;
                      if (state !== 'readable') {
                        throw new TypeError('The stream (in ' + state + ' state) is not in the readable state and cannot be closed');
                      }
                      ReadableByteStreamControllerClose(this);
                    },
                  },
                  {
                    key: 'enqueue',
                    value: function enqueue(chunk) {
                      if (IsReadableByteStreamController(this) === false) {
                        throw byteStreamControllerBrandCheckException('enqueue');
                      }
                      if (this._closeRequested === true) {
                        throw new TypeError('stream is closed or draining');
                      }
                      const state = this._controlledReadableStream._state;
                      if (state !== 'readable') {
                        throw new TypeError('The stream (in ' + state + ' state) is not in the readable state and cannot be enqueued to');
                      }
                      if (!ArrayBuffer.isView(chunk)) {
                        throw new TypeError('You can only enqueue array buffer views when using a ReadableByteStreamController');
                      }
                      ReadableByteStreamControllerEnqueue(this, chunk);
                    },
                  },
                  {
                    key: 'error',
                    value: function error(e) {
                      if (IsReadableByteStreamController(this) === false) {
                        throw byteStreamControllerBrandCheckException('error');
                      }
                      const stream = this._controlledReadableStream;
                      if (stream._state !== 'readable') {
                        throw new TypeError('The stream is ' + stream._state + ' and so cannot be errored');
                      }
                      ReadableByteStreamControllerError(this, e);
                    },
                  },
                  {
                    key: '__cancelSteps',
                    value: function __cancelSteps(reason) {
                      if (this._pendingPullIntos.length > 0) {
                        const firstDescriptor = this._pendingPullIntos[0];
                        firstDescriptor.bytesFilled = 0;
                      }
                      ResetQueue(this);
                      return PromiseInvokeOrNoop(this._underlyingByteSource, 'cancel', [reason]);
                    },
                  },
                  {
                    key: '__pullSteps',
                    value: function __pullSteps() {
                      const stream = this._controlledReadableStream;
                      assert(ReadableStreamHasDefaultReader(stream) === true);
                      if (this._queueTotalSize > 0) {
                        assert(ReadableStreamGetNumReadRequests(stream) === 0);
                        const entry = this._queue.shift();
                        this._queueTotalSize -= entry.byteLength;
                        ReadableByteStreamControllerHandleQueueDrain(this);
                        let view = void 0;
                        try {
                          view = new Uint8Array(entry.buffer, entry.byteOffset, entry.byteLength);
                        } catch (viewE) {
                          return Promise.reject(viewE);
                        }
                        return Promise.resolve(CreateIterResultObject(view, false));
                      }
                      const autoAllocateChunkSize = this._autoAllocateChunkSize;
                      if (autoAllocateChunkSize !== undefined) {
                        let buffer = void 0;
                        try {
                          buffer = new ArrayBuffer(autoAllocateChunkSize);
                        } catch (bufferE) {
                          return Promise.reject(bufferE);
                        }
                        const pullIntoDescriptor = {
                          buffer: buffer,
                          byteOffset: 0,
                          byteLength: autoAllocateChunkSize,
                          bytesFilled: 0,
                          elementSize: 1,
                          ctor: Uint8Array,
                          readerType: 'default',
                        };
                        this._pendingPullIntos.push(pullIntoDescriptor);
                      }
                      const promise = ReadableStreamAddReadRequest(stream);
                      ReadableByteStreamControllerCallPullIfNeeded(this);
                      return promise;
                    },
                  },
                  {
                    key: 'byobRequest',
                    get: function get() {
                      if (IsReadableByteStreamController(this) === false) {
                        throw byteStreamControllerBrandCheckException('byobRequest');
                      }
                      if (this._byobRequest === undefined && this._pendingPullIntos.length > 0) {
                        const firstDescriptor = this._pendingPullIntos[0];
                        const view = new Uint8Array(
                          firstDescriptor.buffer,
                          firstDescriptor.byteOffset + firstDescriptor.bytesFilled,
                          firstDescriptor.byteLength - firstDescriptor.bytesFilled,
                        );
                        this._byobRequest = new ReadableStreamBYOBRequest(this, view);
                      }
                      return this._byobRequest;
                    },
                  },
                  {
                    key: 'desiredSize',
                    get: function get() {
                      if (IsReadableByteStreamController(this) === false) {
                        throw byteStreamControllerBrandCheckException('desiredSize');
                      }
                      return ReadableByteStreamControllerGetDesiredSize(this);
                    },
                  },
                ]);
                return ReadableByteStreamController;
              })();
              function IsReadableByteStreamController(x) {
                if (!typeIsObject(x)) {
                  return false;
                }
                if (!Object.prototype.hasOwnProperty.call(x, '_underlyingByteSource')) {
                  return false;
                }
                return true;
              }
              function IsReadableStreamBYOBRequest(x) {
                if (!typeIsObject(x)) {
                  return false;
                }
                if (!Object.prototype.hasOwnProperty.call(x, '_associatedReadableByteStreamController')) {
                  return false;
                }
                return true;
              }
              function ReadableByteStreamControllerCallPullIfNeeded(controller) {
                const shouldPull = ReadableByteStreamControllerShouldCallPull(controller);
                if (shouldPull === false) {
                  return undefined;
                }
                if (controller._pulling === true) {
                  controller._pullAgain = true;
                  return undefined;
                }
                assert(controller._pullAgain === false);
                controller._pulling = true;
                const pullPromise = PromiseInvokeOrNoop(controller._underlyingByteSource, 'pull', [controller]);
                pullPromise
                  .then(
                    function () {
                      controller._pulling = false;
                      if (controller._pullAgain === true) {
                        controller._pullAgain = false;
                        ReadableByteStreamControllerCallPullIfNeeded(controller);
                      }
                    },
                    function (e) {
                      if (controller._controlledReadableStream._state === 'readable') {
                        ReadableByteStreamControllerError(controller, e);
                      }
                    },
                  )
                  .catch(rethrowAssertionErrorRejection);
                return undefined;
              }
              function ReadableByteStreamControllerClearPendingPullIntos(controller) {
                ReadableByteStreamControllerInvalidateBYOBRequest(controller);
                controller._pendingPullIntos = [];
              }
              function ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor) {
                assert(stream._state !== 'errored', 'state must not be errored');
                let done = false;
                if (stream._state === 'closed') {
                  assert(pullIntoDescriptor.bytesFilled === 0);
                  done = true;
                }
                const filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
                if (pullIntoDescriptor.readerType === 'default') {
                  ReadableStreamFulfillReadRequest(stream, filledView, done);
                } else {
                  assert(pullIntoDescriptor.readerType === 'byob');
                  ReadableStreamFulfillReadIntoRequest(stream, filledView, done);
                }
              }
              function ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor) {
                const bytesFilled = pullIntoDescriptor.bytesFilled;
                const elementSize = pullIntoDescriptor.elementSize;
                assert(bytesFilled <= pullIntoDescriptor.byteLength);
                assert(bytesFilled % elementSize === 0);
                return new pullIntoDescriptor.ctor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, bytesFilled / elementSize);
              }
              function ReadableByteStreamControllerEnqueueChunkToQueue(controller, buffer, byteOffset, byteLength) {
                controller._queue.push({
                  buffer: buffer,
                  byteOffset: byteOffset,
                  byteLength: byteLength,
                });
                controller._queueTotalSize += byteLength;
              }
              function ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) {
                const elementSize = pullIntoDescriptor.elementSize;
                const currentAlignedBytes = pullIntoDescriptor.bytesFilled - (pullIntoDescriptor.bytesFilled % elementSize);
                const maxBytesToCopy = Math.min(controller._queueTotalSize, pullIntoDescriptor.byteLength - pullIntoDescriptor.bytesFilled);
                const maxBytesFilled = pullIntoDescriptor.bytesFilled + maxBytesToCopy;
                const maxAlignedBytes = maxBytesFilled - (maxBytesFilled % elementSize);
                let totalBytesToCopyRemaining = maxBytesToCopy;
                let ready = false;
                if (maxAlignedBytes > currentAlignedBytes) {
                  totalBytesToCopyRemaining = maxAlignedBytes - pullIntoDescriptor.bytesFilled;
                  ready = true;
                }
                const queue = controller._queue;
                while (totalBytesToCopyRemaining > 0) {
                  const headOfQueue = queue[0];
                  const bytesToCopy = Math.min(totalBytesToCopyRemaining, headOfQueue.byteLength);
                  const destStart = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
                  ArrayBufferCopy(pullIntoDescriptor.buffer, destStart, headOfQueue.buffer, headOfQueue.byteOffset, bytesToCopy);
                  if (headOfQueue.byteLength === bytesToCopy) {
                    queue.shift();
                  } else {
                    headOfQueue.byteOffset += bytesToCopy;
                    headOfQueue.byteLength -= bytesToCopy;
                  }
                  controller._queueTotalSize -= bytesToCopy;
                  ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesToCopy, pullIntoDescriptor);
                  totalBytesToCopyRemaining -= bytesToCopy;
                }
                if (ready === false) {
                  assert(controller._queueTotalSize === 0, 'queue must be empty');
                  assert(pullIntoDescriptor.bytesFilled > 0);
                  assert(pullIntoDescriptor.bytesFilled < pullIntoDescriptor.elementSize);
                }
                return ready;
              }
              function ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, size, pullIntoDescriptor) {
                assert(controller._pendingPullIntos.length === 0 || controller._pendingPullIntos[0] === pullIntoDescriptor);
                ReadableByteStreamControllerInvalidateBYOBRequest(controller);
                pullIntoDescriptor.bytesFilled += size;
              }
              function ReadableByteStreamControllerHandleQueueDrain(controller) {
                assert(controller._controlledReadableStream._state === 'readable');
                if (controller._queueTotalSize === 0 && controller._closeRequested === true) {
                  ReadableStreamClose(controller._controlledReadableStream);
                } else {
                  ReadableByteStreamControllerCallPullIfNeeded(controller);
                }
              }
              function ReadableByteStreamControllerInvalidateBYOBRequest(controller) {
                if (controller._byobRequest === undefined) {
                  return;
                }
                controller._byobRequest._associatedReadableByteStreamController = undefined;
                controller._byobRequest._view = undefined;
                controller._byobRequest = undefined;
              }
              function ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller) {
                assert(controller._closeRequested === false);
                while (controller._pendingPullIntos.length > 0) {
                  if (controller._queueTotalSize === 0) {
                    return;
                  }
                  const pullIntoDescriptor = controller._pendingPullIntos[0];
                  if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) === true) {
                    ReadableByteStreamControllerShiftPendingPullInto(controller);
                    ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableStream, pullIntoDescriptor);
                  }
                }
              }
              function ReadableByteStreamControllerPullInto(controller, view) {
                const stream = controller._controlledReadableStream;
                let elementSize = 1;
                if (view.constructor !== DataView) {
                  elementSize = view.constructor.BYTES_PER_ELEMENT;
                }
                const ctor = view.constructor;
                const pullIntoDescriptor = {
                  buffer: view.buffer,
                  byteOffset: view.byteOffset,
                  byteLength: view.byteLength,
                  bytesFilled: 0,
                  elementSize: elementSize,
                  ctor: ctor,
                  readerType: 'byob',
                };
                if (controller._pendingPullIntos.length > 0) {
                  pullIntoDescriptor.buffer = TransferArrayBuffer(pullIntoDescriptor.buffer);
                  controller._pendingPullIntos.push(pullIntoDescriptor);
                  return ReadableStreamAddReadIntoRequest(stream);
                }
                if (stream._state === 'closed') {
                  const emptyView = new view.constructor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, 0);
                  return Promise.resolve(CreateIterResultObject(emptyView, true));
                }
                if (controller._queueTotalSize > 0) {
                  if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) === true) {
                    const filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
                    ReadableByteStreamControllerHandleQueueDrain(controller);
                    return Promise.resolve(CreateIterResultObject(filledView, false));
                  }
                  if (controller._closeRequested === true) {
                    const e = new TypeError('Insufficient bytes to fill elements in the given buffer');
                    ReadableByteStreamControllerError(controller, e);
                    return Promise.reject(e);
                  }
                }
                pullIntoDescriptor.buffer = TransferArrayBuffer(pullIntoDescriptor.buffer);
                controller._pendingPullIntos.push(pullIntoDescriptor);
                const promise = ReadableStreamAddReadIntoRequest(stream);
                ReadableByteStreamControllerCallPullIfNeeded(controller);
                return promise;
              }
              function ReadableByteStreamControllerRespondInClosedState(controller, firstDescriptor) {
                firstDescriptor.buffer = TransferArrayBuffer(firstDescriptor.buffer);
                assert(firstDescriptor.bytesFilled === 0, 'bytesFilled must be 0');
                const stream = controller._controlledReadableStream;
                if (ReadableStreamHasBYOBReader(stream) === true) {
                  while (ReadableStreamGetNumReadIntoRequests(stream) > 0) {
                    const pullIntoDescriptor = ReadableByteStreamControllerShiftPendingPullInto(controller);
                    ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor);
                  }
                }
              }
              function ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, pullIntoDescriptor) {
                if (pullIntoDescriptor.bytesFilled + bytesWritten > pullIntoDescriptor.byteLength) {
                  throw new RangeError('bytesWritten out of range');
                }
                ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesWritten, pullIntoDescriptor);
                if (pullIntoDescriptor.bytesFilled < pullIntoDescriptor.elementSize) {
                  return;
                }
                ReadableByteStreamControllerShiftPendingPullInto(controller);
                const remainderSize = pullIntoDescriptor.bytesFilled % pullIntoDescriptor.elementSize;
                if (remainderSize > 0) {
                  const end = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
                  const remainder = pullIntoDescriptor.buffer.slice(end - remainderSize, end);
                  ReadableByteStreamControllerEnqueueChunkToQueue(controller, remainder, 0, remainder.byteLength);
                }
                pullIntoDescriptor.buffer = TransferArrayBuffer(pullIntoDescriptor.buffer);
                pullIntoDescriptor.bytesFilled -= remainderSize;
                ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableStream, pullIntoDescriptor);
                ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
              }
              function ReadableByteStreamControllerRespondInternal(controller, bytesWritten) {
                const firstDescriptor = controller._pendingPullIntos[0];
                const stream = controller._controlledReadableStream;
                if (stream._state === 'closed') {
                  if (bytesWritten !== 0) {
                    throw new TypeError('bytesWritten must be 0 when calling respond() on a closed stream');
                  }
                  ReadableByteStreamControllerRespondInClosedState(controller, firstDescriptor);
                } else {
                  assert(stream._state === 'readable');
                  ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, firstDescriptor);
                }
              }
              function ReadableByteStreamControllerShiftPendingPullInto(controller) {
                const descriptor = controller._pendingPullIntos.shift();
                ReadableByteStreamControllerInvalidateBYOBRequest(controller);
                return descriptor;
              }
              function ReadableByteStreamControllerShouldCallPull(controller) {
                const stream = controller._controlledReadableStream;
                if (stream._state !== 'readable') {
                  return false;
                }
                if (controller._closeRequested === true) {
                  return false;
                }
                if (controller._started === false) {
                  return false;
                }
                if (ReadableStreamHasDefaultReader(stream) === true && ReadableStreamGetNumReadRequests(stream) > 0) {
                  return true;
                }
                if (ReadableStreamHasBYOBReader(stream) === true && ReadableStreamGetNumReadIntoRequests(stream) > 0) {
                  return true;
                }
                if (ReadableByteStreamControllerGetDesiredSize(controller) > 0) {
                  return true;
                }
                return false;
              }
              function ReadableByteStreamControllerClose(controller) {
                const stream = controller._controlledReadableStream;
                assert(controller._closeRequested === false);
                assert(stream._state === 'readable');
                if (controller._queueTotalSize > 0) {
                  controller._closeRequested = true;
                  return;
                }
                if (controller._pendingPullIntos.length > 0) {
                  const firstPendingPullInto = controller._pendingPullIntos[0];
                  if (firstPendingPullInto.bytesFilled > 0) {
                    const e = new TypeError('Insufficient bytes to fill elements in the given buffer');
                    ReadableByteStreamControllerError(controller, e);
                    throw e;
                  }
                }
                ReadableStreamClose(stream);
              }
              function ReadableByteStreamControllerEnqueue(controller, chunk) {
                const stream = controller._controlledReadableStream;
                assert(controller._closeRequested === false);
                assert(stream._state === 'readable');
                const buffer = chunk.buffer;
                const byteOffset = chunk.byteOffset;
                const byteLength = chunk.byteLength;
                const transferredBuffer = TransferArrayBuffer(buffer);
                if (ReadableStreamHasDefaultReader(stream) === true) {
                  if (ReadableStreamGetNumReadRequests(stream) === 0) {
                    ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
                  } else {
                    assert(controller._queue.length === 0);
                    const transferredView = new Uint8Array(transferredBuffer, byteOffset, byteLength);
                    ReadableStreamFulfillReadRequest(stream, transferredView, false);
                  }
                } else if (ReadableStreamHasBYOBReader(stream) === true) {
                  ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
                  ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
                } else {
                  assert(IsReadableStreamLocked(stream) === false, 'stream must not be locked');
                  ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
                }
              }
              function ReadableByteStreamControllerError(controller, e) {
                const stream = controller._controlledReadableStream;
                assert(stream._state === 'readable');
                ReadableByteStreamControllerClearPendingPullIntos(controller);
                ResetQueue(controller);
                ReadableStreamError(stream, e);
              }
              function ReadableByteStreamControllerGetDesiredSize(controller) {
                const stream = controller._controlledReadableStream;
                const state = stream._state;
                if (state === 'errored') {
                  return null;
                }
                if (state === 'closed') {
                  return 0;
                }
                return controller._strategyHWM - controller._queueTotalSize;
              }
              function ReadableByteStreamControllerRespond(controller, bytesWritten) {
                bytesWritten = Number(bytesWritten);
                if (IsFiniteNonNegativeNumber(bytesWritten) === false) {
                  throw new RangeError('bytesWritten must be a finite');
                }
                assert(controller._pendingPullIntos.length > 0);
                ReadableByteStreamControllerRespondInternal(controller, bytesWritten);
              }
              function ReadableByteStreamControllerRespondWithNewView(controller, view) {
                assert(controller._pendingPullIntos.length > 0);
                const firstDescriptor = controller._pendingPullIntos[0];
                if (firstDescriptor.byteOffset + firstDescriptor.bytesFilled !== view.byteOffset) {
                  throw new RangeError('The region specified by view does not match byobRequest');
                }
                if (firstDescriptor.byteLength !== view.byteLength) {
                  throw new RangeError('The buffer of view has different capacity than byobRequest');
                }
                firstDescriptor.buffer = view.buffer;
                ReadableByteStreamControllerRespondInternal(controller, view.byteLength);
              }
              function streamBrandCheckException(name) {
                return new TypeError('ReadableStream.prototype.' + name + ' can only be used on a ReadableStream');
              }
              function readerLockException(name) {
                return new TypeError('Cannot ' + name + ' a stream using a released reader');
              }
              function defaultReaderBrandCheckException(name) {
                return new TypeError(
                  'ReadableStreamDefaultReader.prototype.' + name + ' can only be used on a ReadableStreamDefaultReader',
                );
              }
              function defaultReaderClosedPromiseInitialize(reader) {
                reader._closedPromise = new Promise(function (resolve, reject) {
                  reader._closedPromise_resolve = resolve;
                  reader._closedPromise_reject = reject;
                });
              }
              function defaultReaderClosedPromiseInitializeAsRejected(reader, reason) {
                reader._closedPromise = Promise.reject(reason);
                reader._closedPromise_resolve = undefined;
                reader._closedPromise_reject = undefined;
              }
              function defaultReaderClosedPromiseInitializeAsResolved(reader) {
                reader._closedPromise = Promise.resolve(undefined);
                reader._closedPromise_resolve = undefined;
                reader._closedPromise_reject = undefined;
              }
              function defaultReaderClosedPromiseReject(reader, reason) {
                assert(reader._closedPromise_resolve !== undefined);
                assert(reader._closedPromise_reject !== undefined);
                reader._closedPromise_reject(reason);
                reader._closedPromise_resolve = undefined;
                reader._closedPromise_reject = undefined;
              }
              function defaultReaderClosedPromiseResetToRejected(reader, reason) {
                assert(reader._closedPromise_resolve === undefined);
                assert(reader._closedPromise_reject === undefined);
                reader._closedPromise = Promise.reject(reason);
              }
              function defaultReaderClosedPromiseResolve(reader) {
                assert(reader._closedPromise_resolve !== undefined);
                assert(reader._closedPromise_reject !== undefined);
                reader._closedPromise_resolve(undefined);
                reader._closedPromise_resolve = undefined;
                reader._closedPromise_reject = undefined;
              }
              function byobReaderBrandCheckException(name) {
                return new TypeError('ReadableStreamBYOBReader.prototype.' + name + ' can only be used on a ReadableStreamBYOBReader');
              }
              function defaultControllerBrandCheckException(name) {
                return new TypeError(
                  'ReadableStreamDefaultController.prototype.' + name + ' can only be used on a ReadableStreamDefaultController',
                );
              }
              function byobRequestBrandCheckException(name) {
                return new TypeError('ReadableStreamBYOBRequest.prototype.' + name + ' can only be used on a ReadableStreamBYOBRequest');
              }
              function byteStreamControllerBrandCheckException(name) {
                return new TypeError(
                  'ReadableByteStreamController.prototype.' + name + ' can only be used on a ReadableByteStreamController',
                );
              }
              function ifIsObjectAndHasAPromiseIsHandledInternalSlotSetPromiseIsHandledToTrue(promise) {
                try {
                  Promise.prototype.then.call(promise, undefined, function () {});
                } catch (e) {}
              }
            },
            function (module, exports, __w_pdfjs_require__) {
              'use strict';

              const transformStream = __w_pdfjs_require__(6);
              const readableStream = __w_pdfjs_require__(4);
              const writableStream = __w_pdfjs_require__(2);
              exports.TransformStream = transformStream.TransformStream;
              exports.ReadableStream = readableStream.ReadableStream;
              exports.IsReadableStreamDisturbed = readableStream.IsReadableStreamDisturbed;
              exports.ReadableStreamDefaultControllerClose = readableStream.ReadableStreamDefaultControllerClose;
              exports.ReadableStreamDefaultControllerEnqueue = readableStream.ReadableStreamDefaultControllerEnqueue;
              exports.ReadableStreamDefaultControllerError = readableStream.ReadableStreamDefaultControllerError;
              exports.ReadableStreamDefaultControllerGetDesiredSize = readableStream.ReadableStreamDefaultControllerGetDesiredSize;
              exports.AcquireWritableStreamDefaultWriter = writableStream.AcquireWritableStreamDefaultWriter;
              exports.IsWritableStream = writableStream.IsWritableStream;
              exports.IsWritableStreamLocked = writableStream.IsWritableStreamLocked;
              exports.WritableStream = writableStream.WritableStream;
              exports.WritableStreamAbort = writableStream.WritableStreamAbort;
              exports.WritableStreamDefaultControllerError = writableStream.WritableStreamDefaultControllerError;
              exports.WritableStreamDefaultWriterCloseWithErrorPropagation =
                writableStream.WritableStreamDefaultWriterCloseWithErrorPropagation;
              exports.WritableStreamDefaultWriterRelease = writableStream.WritableStreamDefaultWriterRelease;
              exports.WritableStreamDefaultWriterWrite = writableStream.WritableStreamDefaultWriterWrite;
            },
            function (module, exports, __w_pdfjs_require__) {
              'use strict';

              const _createClass = (function () {
                function defineProperties(target, props) {
                  for (let i = 0; i < props.length; i++) {
                    const descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ('value' in descriptor) {
                      descriptor.writable = true;
                    }
                    Object.defineProperty(target, descriptor.key, descriptor);
                  }
                }
                return function (Constructor, protoProps, staticProps) {
                  if (protoProps) {
                    defineProperties(Constructor.prototype, protoProps);
                  }
                  if (staticProps) {
                    defineProperties(Constructor, staticProps);
                  }
                  return Constructor;
                };
              })();
              function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                  throw new TypeError('Cannot call a class as a function');
                }
              }
              const _require = __w_pdfjs_require__(1),
                assert = _require.assert;
              const _require2 = __w_pdfjs_require__(0),
                InvokeOrNoop = _require2.InvokeOrNoop,
                PromiseInvokeOrPerformFallback = _require2.PromiseInvokeOrPerformFallback,
                PromiseInvokeOrNoop = _require2.PromiseInvokeOrNoop,
                typeIsObject = _require2.typeIsObject;
              const _require3 = __w_pdfjs_require__(4),
                ReadableStream = _require3.ReadableStream,
                ReadableStreamDefaultControllerClose = _require3.ReadableStreamDefaultControllerClose,
                ReadableStreamDefaultControllerEnqueue = _require3.ReadableStreamDefaultControllerEnqueue,
                ReadableStreamDefaultControllerError = _require3.ReadableStreamDefaultControllerError,
                ReadableStreamDefaultControllerGetDesiredSize = _require3.ReadableStreamDefaultControllerGetDesiredSize;
              const _require4 = __w_pdfjs_require__(2),
                WritableStream = _require4.WritableStream,
                WritableStreamDefaultControllerError = _require4.WritableStreamDefaultControllerError;
              function TransformStreamCloseReadable(transformStream) {
                if (transformStream._errored === true) {
                  throw new TypeError('TransformStream is already errored');
                }
                if (transformStream._readableClosed === true) {
                  throw new TypeError('Readable side is already closed');
                }
                TransformStreamCloseReadableInternal(transformStream);
              }
              function TransformStreamEnqueueToReadable(transformStream, chunk) {
                if (transformStream._errored === true) {
                  throw new TypeError('TransformStream is already errored');
                }
                if (transformStream._readableClosed === true) {
                  throw new TypeError('Readable side is already closed');
                }
                const controller = transformStream._readableController;
                try {
                  ReadableStreamDefaultControllerEnqueue(controller, chunk);
                } catch (e) {
                  transformStream._readableClosed = true;
                  TransformStreamErrorIfNeeded(transformStream, e);
                  throw transformStream._storedError;
                }
                const desiredSize = ReadableStreamDefaultControllerGetDesiredSize(controller);
                const maybeBackpressure = desiredSize <= 0;
                if (maybeBackpressure === true && transformStream._backpressure === false) {
                  TransformStreamSetBackpressure(transformStream, true);
                }
              }
              function TransformStreamError(transformStream, e) {
                if (transformStream._errored === true) {
                  throw new TypeError('TransformStream is already errored');
                }
                TransformStreamErrorInternal(transformStream, e);
              }
              function TransformStreamCloseReadableInternal(transformStream) {
                assert(transformStream._errored === false);
                assert(transformStream._readableClosed === false);
                try {
                  ReadableStreamDefaultControllerClose(transformStream._readableController);
                } catch (e) {
                  assert(false);
                }
                transformStream._readableClosed = true;
              }
              function TransformStreamErrorIfNeeded(transformStream, e) {
                if (transformStream._errored === false) {
                  TransformStreamErrorInternal(transformStream, e);
                }
              }
              function TransformStreamErrorInternal(transformStream, e) {
                assert(transformStream._errored === false);
                transformStream._errored = true;
                transformStream._storedError = e;
                if (transformStream._writableDone === false) {
                  WritableStreamDefaultControllerError(transformStream._writableController, e);
                }
                if (transformStream._readableClosed === false) {
                  ReadableStreamDefaultControllerError(transformStream._readableController, e);
                }
              }
              function TransformStreamReadableReadyPromise(transformStream) {
                assert(transformStream._backpressureChangePromise !== undefined, '_backpressureChangePromise should have been initialized');
                if (transformStream._backpressure === false) {
                  return Promise.resolve();
                }
                assert(transformStream._backpressure === true, '_backpressure should have been initialized');
                return transformStream._backpressureChangePromise;
              }
              function TransformStreamSetBackpressure(transformStream, backpressure) {
                assert(
                  transformStream._backpressure !== backpressure,
                  'TransformStreamSetBackpressure() should be called only when backpressure is changed',
                );
                if (transformStream._backpressureChangePromise !== undefined) {
                  transformStream._backpressureChangePromise_resolve(backpressure);
                }
                transformStream._backpressureChangePromise = new Promise(function (resolve) {
                  transformStream._backpressureChangePromise_resolve = resolve;
                });
                transformStream._backpressureChangePromise.then(function (resolution) {
                  assert(resolution !== backpressure, '_backpressureChangePromise should be fulfilled only when backpressure is changed');
                });
                transformStream._backpressure = backpressure;
              }
              function TransformStreamDefaultTransform(chunk, transformStreamController) {
                const transformStream = transformStreamController._controlledTransformStream;
                TransformStreamEnqueueToReadable(transformStream, chunk);
                return Promise.resolve();
              }
              function TransformStreamTransform(transformStream, chunk) {
                assert(transformStream._errored === false);
                assert(transformStream._transforming === false);
                assert(transformStream._backpressure === false);
                transformStream._transforming = true;
                const transformer = transformStream._transformer;
                const controller = transformStream._transformStreamController;
                const transformPromise = PromiseInvokeOrPerformFallback(
                  transformer,
                  'transform',
                  [chunk, controller],
                  TransformStreamDefaultTransform,
                  [chunk, controller],
                );
                return transformPromise.then(
                  function () {
                    transformStream._transforming = false;
                    return TransformStreamReadableReadyPromise(transformStream);
                  },
                  function (e) {
                    TransformStreamErrorIfNeeded(transformStream, e);
                    return Promise.reject(e);
                  },
                );
              }
              function IsTransformStreamDefaultController(x) {
                if (!typeIsObject(x)) {
                  return false;
                }
                if (!Object.prototype.hasOwnProperty.call(x, '_controlledTransformStream')) {
                  return false;
                }
                return true;
              }
              function IsTransformStream(x) {
                if (!typeIsObject(x)) {
                  return false;
                }
                if (!Object.prototype.hasOwnProperty.call(x, '_transformStreamController')) {
                  return false;
                }
                return true;
              }
              const TransformStreamSink = (function () {
                function TransformStreamSink(transformStream, startPromise) {
                  _classCallCheck(this, TransformStreamSink);
                  this._transformStream = transformStream;
                  this._startPromise = startPromise;
                }
                _createClass(TransformStreamSink, [
                  {
                    key: 'start',
                    value: function start(c) {
                      const transformStream = this._transformStream;
                      transformStream._writableController = c;
                      return this._startPromise.then(function () {
                        return TransformStreamReadableReadyPromise(transformStream);
                      });
                    },
                  },
                  {
                    key: 'write',
                    value: function write(chunk) {
                      const transformStream = this._transformStream;
                      return TransformStreamTransform(transformStream, chunk);
                    },
                  },
                  {
                    key: 'abort',
                    value: function abort() {
                      const transformStream = this._transformStream;
                      transformStream._writableDone = true;
                      TransformStreamErrorInternal(transformStream, new TypeError('Writable side aborted'));
                    },
                  },
                  {
                    key: 'close',
                    value: function close() {
                      const transformStream = this._transformStream;
                      assert(transformStream._transforming === false);
                      transformStream._writableDone = true;
                      const flushPromise = PromiseInvokeOrNoop(transformStream._transformer, 'flush', [
                        transformStream._transformStreamController,
                      ]);
                      return flushPromise
                        .then(function () {
                          if (transformStream._errored === true) {
                            return Promise.reject(transformStream._storedError);
                          }
                          if (transformStream._readableClosed === false) {
                            TransformStreamCloseReadableInternal(transformStream);
                          }
                          return Promise.resolve();
                        })
                        .catch(function (r) {
                          TransformStreamErrorIfNeeded(transformStream, r);
                          return Promise.reject(transformStream._storedError);
                        });
                    },
                  },
                ]);
                return TransformStreamSink;
              })();
              const TransformStreamSource = (function () {
                function TransformStreamSource(transformStream, startPromise) {
                  _classCallCheck(this, TransformStreamSource);
                  this._transformStream = transformStream;
                  this._startPromise = startPromise;
                }
                _createClass(TransformStreamSource, [
                  {
                    key: 'start',
                    value: function start(c) {
                      const transformStream = this._transformStream;
                      transformStream._readableController = c;
                      return this._startPromise.then(function () {
                        assert(
                          transformStream._backpressureChangePromise !== undefined,
                          '_backpressureChangePromise should have been initialized',
                        );
                        if (transformStream._backpressure === true) {
                          return Promise.resolve();
                        }
                        assert(transformStream._backpressure === false, '_backpressure should have been initialized');
                        return transformStream._backpressureChangePromise;
                      });
                    },
                  },
                  {
                    key: 'pull',
                    value: function pull() {
                      const transformStream = this._transformStream;
                      assert(transformStream._backpressure === true, 'pull() should be never called while _backpressure is false');
                      assert(
                        transformStream._backpressureChangePromise !== undefined,
                        '_backpressureChangePromise should have been initialized',
                      );
                      TransformStreamSetBackpressure(transformStream, false);
                      return transformStream._backpressureChangePromise;
                    },
                  },
                  {
                    key: 'cancel',
                    value: function cancel() {
                      const transformStream = this._transformStream;
                      transformStream._readableClosed = true;
                      TransformStreamErrorInternal(transformStream, new TypeError('Readable side canceled'));
                    },
                  },
                ]);
                return TransformStreamSource;
              })();
              const TransformStreamDefaultController = (function () {
                function TransformStreamDefaultController(transformStream) {
                  _classCallCheck(this, TransformStreamDefaultController);
                  if (IsTransformStream(transformStream) === false) {
                    throw new TypeError('TransformStreamDefaultController can only be ' + 'constructed with a TransformStream instance');
                  }
                  if (transformStream._transformStreamController !== undefined) {
                    throw new TypeError(
                      'TransformStreamDefaultController instances can ' + 'only be created by the TransformStream constructor',
                    );
                  }
                  this._controlledTransformStream = transformStream;
                }
                _createClass(TransformStreamDefaultController, [
                  {
                    key: 'enqueue',
                    value: function enqueue(chunk) {
                      if (IsTransformStreamDefaultController(this) === false) {
                        throw defaultControllerBrandCheckException('enqueue');
                      }
                      TransformStreamEnqueueToReadable(this._controlledTransformStream, chunk);
                    },
                  },
                  {
                    key: 'close',
                    value: function close() {
                      if (IsTransformStreamDefaultController(this) === false) {
                        throw defaultControllerBrandCheckException('close');
                      }
                      TransformStreamCloseReadable(this._controlledTransformStream);
                    },
                  },
                  {
                    key: 'error',
                    value: function error(reason) {
                      if (IsTransformStreamDefaultController(this) === false) {
                        throw defaultControllerBrandCheckException('error');
                      }
                      TransformStreamError(this._controlledTransformStream, reason);
                    },
                  },
                  {
                    key: 'desiredSize',
                    get: function get() {
                      if (IsTransformStreamDefaultController(this) === false) {
                        throw defaultControllerBrandCheckException('desiredSize');
                      }
                      const transformStream = this._controlledTransformStream;
                      const readableController = transformStream._readableController;
                      return ReadableStreamDefaultControllerGetDesiredSize(readableController);
                    },
                  },
                ]);
                return TransformStreamDefaultController;
              })();
              const TransformStream = (function () {
                function TransformStream() {
                  const transformer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                  _classCallCheck(this, TransformStream);
                  this._transformer = transformer;
                  const readableStrategy = transformer.readableStrategy,
                    writableStrategy = transformer.writableStrategy;
                  this._transforming = false;
                  this._errored = false;
                  this._storedError = undefined;
                  this._writableController = undefined;
                  this._readableController = undefined;
                  this._transformStreamController = undefined;
                  this._writableDone = false;
                  this._readableClosed = false;
                  this._backpressure = undefined;
                  this._backpressureChangePromise = undefined;
                  this._backpressureChangePromise_resolve = undefined;
                  this._transformStreamController = new TransformStreamDefaultController(this);
                  let startPromise_resolve = void 0;
                  const startPromise = new Promise(function (resolve) {
                    startPromise_resolve = resolve;
                  });
                  const source = new TransformStreamSource(this, startPromise);
                  this._readable = new ReadableStream(source, readableStrategy);
                  const sink = new TransformStreamSink(this, startPromise);
                  this._writable = new WritableStream(sink, writableStrategy);
                  assert(this._writableController !== undefined);
                  assert(this._readableController !== undefined);
                  const desiredSize = ReadableStreamDefaultControllerGetDesiredSize(this._readableController);
                  TransformStreamSetBackpressure(this, desiredSize <= 0);
                  const transformStream = this;
                  const startResult = InvokeOrNoop(transformer, 'start', [transformStream._transformStreamController]);
                  startPromise_resolve(startResult);
                  startPromise.catch(function (e) {
                    if (transformStream._errored === false) {
                      transformStream._errored = true;
                      transformStream._storedError = e;
                    }
                  });
                }
                _createClass(TransformStream, [
                  {
                    key: 'readable',
                    get: function get() {
                      if (IsTransformStream(this) === false) {
                        throw streamBrandCheckException('readable');
                      }
                      return this._readable;
                    },
                  },
                  {
                    key: 'writable',
                    get: function get() {
                      if (IsTransformStream(this) === false) {
                        throw streamBrandCheckException('writable');
                      }
                      return this._writable;
                    },
                  },
                ]);
                return TransformStream;
              })();
              module.exports = { TransformStream: TransformStream };
              function defaultControllerBrandCheckException(name) {
                return new TypeError(
                  'TransformStreamDefaultController.prototype.' + name + ' can only be used on a TransformStreamDefaultController',
                );
              }
              function streamBrandCheckException(name) {
                return new TypeError('TransformStream.prototype.' + name + ' can only be used on a TransformStream');
              }
            },
            function (module, exports, __w_pdfjs_require__) {
              module.exports = __w_pdfjs_require__(5);
            },
          ]),
        );

        /***/
      },
      /* 127 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const _typeof =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (obj) {
                return typeof obj;
              }
            : function (obj) {
                return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              };

        {
          let isURLSupported = false;
          try {
            if (typeof URL === 'function' && _typeof(URL.prototype) === 'object' && 'origin' in URL.prototype) {
              const u = new URL('b', 'http://a');
              u.pathname = 'c%20d';
              isURLSupported = u.href === 'http://a/c%20d';
            }
          } catch (ex) {}
          if (isURLSupported) {
            exports.URL = URL;
          } else {
            const PolyfillURL = __w_pdfjs_require__(128).URL;
            const OriginalURL = __w_pdfjs_require__(3).URL;
            if (OriginalURL) {
              PolyfillURL.createObjectURL = function (blob) {
                return OriginalURL.createObjectURL.apply(OriginalURL, arguments);
              };
              PolyfillURL.revokeObjectURL = function (url) {
                OriginalURL.revokeObjectURL(url);
              };
            }
            exports.URL = PolyfillURL;
          }
        }

        /***/
      },
      /* 128 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        (function URLConstructorClosure() {
          'use strict';

          const relative = Object.create(null);
          relative['ftp'] = 21;
          relative['file'] = 0;
          relative['gopher'] = 70;
          relative['http'] = 80;
          relative['https'] = 443;
          relative['ws'] = 80;
          relative['wss'] = 443;
          const relativePathDotMapping = Object.create(null);
          relativePathDotMapping['%2e'] = '.';
          relativePathDotMapping['.%2e'] = '..';
          relativePathDotMapping['%2e.'] = '..';
          relativePathDotMapping['%2e%2e'] = '..';
          function isRelativeScheme(scheme) {
            return relative[scheme] !== undefined;
          }
          function invalid() {
            clear.call(this);
            this._isInvalid = true;
          }
          function IDNAToASCII(h) {
            if (h === '') {
              invalid.call(this);
            }
            return h.toLowerCase();
          }
          function percentEscape(c) {
            const unicode = c.charCodeAt(0);
            if (unicode > 0x20 && unicode < 0x7f && [0x22, 0x23, 0x3c, 0x3e, 0x3f, 0x60].indexOf(unicode) === -1) {
              return c;
            }
            return encodeURIComponent(c);
          }
          function percentEscapeQuery(c) {
            const unicode = c.charCodeAt(0);
            if (unicode > 0x20 && unicode < 0x7f && [0x22, 0x23, 0x3c, 0x3e, 0x60].indexOf(unicode) === -1) {
              return c;
            }
            return encodeURIComponent(c);
          }
          let EOF,
            ALPHA = /[a-zA-Z]/,
            ALPHANUMERIC = /[a-zA-Z0-9\+\-\.]/;
          function parse(input, stateOverride, base) {
            function err(message) {
              errors.push(message);
            }
            var state = stateOverride || 'scheme start',
              cursor = 0,
              buffer = '',
              seenAt = false,
              seenBracket = false,
              errors = [];
            loop: while ((input[cursor - 1] !== EOF || cursor === 0) && !this._isInvalid) {
              const c = input[cursor];
              switch (state) {
                case 'scheme start':
                  if (c && ALPHA.test(c)) {
                    buffer += c.toLowerCase();
                    state = 'scheme';
                  } else if (!stateOverride) {
                    buffer = '';
                    state = 'no scheme';
                    continue;
                  } else {
                    err('Invalid scheme.');
                    break loop;
                  }
                  break;
                case 'scheme':
                  if (c && ALPHANUMERIC.test(c)) {
                    buffer += c.toLowerCase();
                  } else if (c === ':') {
                    this._scheme = buffer;
                    buffer = '';
                    if (stateOverride) {
                      break loop;
                    }
                    if (isRelativeScheme(this._scheme)) {
                      this._isRelative = true;
                    }
                    if (this._scheme === 'file') {
                      state = 'relative';
                    } else if (this._isRelative && base && base._scheme === this._scheme) {
                      state = 'relative or authority';
                    } else if (this._isRelative) {
                      state = 'authority first slash';
                    } else {
                      state = 'scheme data';
                    }
                  } else if (!stateOverride) {
                    buffer = '';
                    cursor = 0;
                    state = 'no scheme';
                    continue;
                  } else if (c === EOF) {
                    break loop;
                  } else {
                    err('Code point not allowed in scheme: ' + c);
                    break loop;
                  }
                  break;
                case 'scheme data':
                  if (c === '?') {
                    this._query = '?';
                    state = 'query';
                  } else if (c === '#') {
                    this._fragment = '#';
                    state = 'fragment';
                  } else {
                    if (c !== EOF && c !== '\t' && c !== '\n' && c !== '\r') {
                      this._schemeData += percentEscape(c);
                    }
                  }
                  break;
                case 'no scheme':
                  if (!base || !isRelativeScheme(base._scheme)) {
                    err('Missing scheme.');
                    invalid.call(this);
                  } else {
                    state = 'relative';
                    continue;
                  }
                  break;
                case 'relative or authority':
                  if (c === '/' && input[cursor + 1] === '/') {
                    state = 'authority ignore slashes';
                  } else {
                    err('Expected /, got: ' + c);
                    state = 'relative';
                    continue;
                  }
                  break;
                case 'relative':
                  this._isRelative = true;
                  if (this._scheme !== 'file') {
                    this._scheme = base._scheme;
                  }
                  if (c === EOF) {
                    this._host = base._host;
                    this._port = base._port;
                    this._path = base._path.slice();
                    this._query = base._query;
                    this._username = base._username;
                    this._password = base._password;
                    break loop;
                  } else if (c === '/' || c === '\\') {
                    if (c === '\\') {
                      err('\\ is an invalid code point.');
                    }
                    state = 'relative slash';
                  } else if (c === '?') {
                    this._host = base._host;
                    this._port = base._port;
                    this._path = base._path.slice();
                    this._query = '?';
                    this._username = base._username;
                    this._password = base._password;
                    state = 'query';
                  } else if (c === '#') {
                    this._host = base._host;
                    this._port = base._port;
                    this._path = base._path.slice();
                    this._query = base._query;
                    this._fragment = '#';
                    this._username = base._username;
                    this._password = base._password;
                    state = 'fragment';
                  } else {
                    const nextC = input[cursor + 1];
                    const nextNextC = input[cursor + 2];
                    if (
                      this._scheme !== 'file' ||
                      !ALPHA.test(c) ||
                      (nextC !== ':' && nextC !== '|') ||
                      (nextNextC !== EOF && nextNextC !== '/' && nextNextC !== '\\' && nextNextC !== '?' && nextNextC !== '#')
                    ) {
                      this._host = base._host;
                      this._port = base._port;
                      this._username = base._username;
                      this._password = base._password;
                      this._path = base._path.slice();
                      this._path.pop();
                    }
                    state = 'relative path';
                    continue;
                  }
                  break;
                case 'relative slash':
                  if (c === '/' || c === '\\') {
                    if (c === '\\') {
                      err('\\ is an invalid code point.');
                    }
                    if (this._scheme === 'file') {
                      state = 'file host';
                    } else {
                      state = 'authority ignore slashes';
                    }
                  } else {
                    if (this._scheme !== 'file') {
                      this._host = base._host;
                      this._port = base._port;
                      this._username = base._username;
                      this._password = base._password;
                    }
                    state = 'relative path';
                    continue;
                  }
                  break;
                case 'authority first slash':
                  if (c === '/') {
                    state = 'authority second slash';
                  } else {
                    err("Expected '/', got: " + c);
                    state = 'authority ignore slashes';
                    continue;
                  }
                  break;
                case 'authority second slash':
                  state = 'authority ignore slashes';
                  if (c !== '/') {
                    err("Expected '/', got: " + c);
                    continue;
                  }
                  break;
                case 'authority ignore slashes':
                  if (c !== '/' && c !== '\\') {
                    state = 'authority';
                    continue;
                  } else {
                    err('Expected authority, got: ' + c);
                  }
                  break;
                case 'authority':
                  if (c === '@') {
                    if (seenAt) {
                      err('@ already seen.');
                      buffer += '%40';
                    }
                    seenAt = true;
                    for (let i = 0; i < buffer.length; i++) {
                      const cp = buffer[i];
                      if (cp === '\t' || cp === '\n' || cp === '\r') {
                        err('Invalid whitespace in authority.');
                        continue;
                      }
                      if (cp === ':' && this._password === null) {
                        this._password = '';
                        continue;
                      }
                      const tempC = percentEscape(cp);
                      if (this._password !== null) {
                        this._password += tempC;
                      } else {
                        this._username += tempC;
                      }
                    }
                    buffer = '';
                  } else if (c === EOF || c === '/' || c === '\\' || c === '?' || c === '#') {
                    cursor -= buffer.length;
                    buffer = '';
                    state = 'host';
                    continue;
                  } else {
                    buffer += c;
                  }
                  break;
                case 'file host':
                  if (c === EOF || c === '/' || c === '\\' || c === '?' || c === '#') {
                    if (buffer.length === 2 && ALPHA.test(buffer[0]) && (buffer[1] === ':' || buffer[1] === '|')) {
                      state = 'relative path';
                    } else if (buffer.length === 0) {
                      state = 'relative path start';
                    } else {
                      this._host = IDNAToASCII.call(this, buffer);
                      buffer = '';
                      state = 'relative path start';
                    }
                    continue;
                  } else if (c === '\t' || c === '\n' || c === '\r') {
                    err('Invalid whitespace in file host.');
                  } else {
                    buffer += c;
                  }
                  break;
                case 'host':
                case 'hostname':
                  if (c === ':' && !seenBracket) {
                    this._host = IDNAToASCII.call(this, buffer);
                    buffer = '';
                    state = 'port';
                    if (stateOverride === 'hostname') {
                      break loop;
                    }
                  } else if (c === EOF || c === '/' || c === '\\' || c === '?' || c === '#') {
                    this._host = IDNAToASCII.call(this, buffer);
                    buffer = '';
                    state = 'relative path start';
                    if (stateOverride) {
                      break loop;
                    }
                    continue;
                  } else if (c !== '\t' && c !== '\n' && c !== '\r') {
                    if (c === '[') {
                      seenBracket = true;
                    } else if (c === ']') {
                      seenBracket = false;
                    }
                    buffer += c;
                  } else {
                    err('Invalid code point in host/hostname: ' + c);
                  }
                  break;
                case 'port':
                  if (/[0-9]/.test(c)) {
                    buffer += c;
                  } else if (c === EOF || c === '/' || c === '\\' || c === '?' || c === '#' || stateOverride) {
                    if (buffer !== '') {
                      const temp = parseInt(buffer, 10);
                      if (temp !== relative[this._scheme]) {
                        this._port = temp + '';
                      }
                      buffer = '';
                    }
                    if (stateOverride) {
                      break loop;
                    }
                    state = 'relative path start';
                    continue;
                  } else if (c === '\t' || c === '\n' || c === '\r') {
                    err('Invalid code point in port: ' + c);
                  } else {
                    invalid.call(this);
                  }
                  break;
                case 'relative path start':
                  if (c === '\\') {
                    err("'\\' not allowed in path.");
                  }
                  state = 'relative path';
                  if (c !== '/' && c !== '\\') {
                    continue;
                  }
                  break;
                case 'relative path':
                  if (c === EOF || c === '/' || c === '\\' || (!stateOverride && (c === '?' || c === '#'))) {
                    if (c === '\\') {
                      err('\\ not allowed in relative path.');
                    }
                    var tmp;
                    if ((tmp = relativePathDotMapping[buffer.toLowerCase()])) {
                      buffer = tmp;
                    }
                    if (buffer === '..') {
                      this._path.pop();
                      if (c !== '/' && c !== '\\') {
                        this._path.push('');
                      }
                    } else if (buffer === '.' && c !== '/' && c !== '\\') {
                      this._path.push('');
                    } else if (buffer !== '.') {
                      if (
                        this._scheme === 'file' &&
                        this._path.length === 0 &&
                        buffer.length === 2 &&
                        ALPHA.test(buffer[0]) &&
                        buffer[1] === '|'
                      ) {
                        buffer = buffer[0] + ':';
                      }
                      this._path.push(buffer);
                    }
                    buffer = '';
                    if (c === '?') {
                      this._query = '?';
                      state = 'query';
                    } else if (c === '#') {
                      this._fragment = '#';
                      state = 'fragment';
                    }
                  } else if (c !== '\t' && c !== '\n' && c !== '\r') {
                    buffer += percentEscape(c);
                  }
                  break;
                case 'query':
                  if (!stateOverride && c === '#') {
                    this._fragment = '#';
                    state = 'fragment';
                  } else if (c !== EOF && c !== '\t' && c !== '\n' && c !== '\r') {
                    this._query += percentEscapeQuery(c);
                  }
                  break;
                case 'fragment':
                  if (c !== EOF && c !== '\t' && c !== '\n' && c !== '\r') {
                    this._fragment += c;
                  }
                  break;
              }
              cursor++;
            }
          }
          function clear() {
            this._scheme = '';
            this._schemeData = '';
            this._username = '';
            this._password = null;
            this._host = '';
            this._port = '';
            this._path = [];
            this._query = '';
            this._fragment = '';
            this._isInvalid = false;
            this._isRelative = false;
          }
          function JURL(url, base) {
            if (base !== undefined && !(base instanceof JURL)) {
              base = new JURL(String(base));
            }
            this._url = url;
            clear.call(this);
            const input = url.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, '');
            parse.call(this, input, null, base);
          }
          JURL.prototype = {
            toString: function toString() {
              return this.href;
            },

            get href() {
              if (this._isInvalid) {
                return this._url;
              }
              let authority = '';
              if (this._username !== '' || this._password !== null) {
                authority = this._username + (this._password !== null ? ':' + this._password : '') + '@';
              }
              return this.protocol + (this._isRelative ? '//' + authority + this.host : '') + this.pathname + this._query + this._fragment;
            },
            set href(value) {
              clear.call(this);
              parse.call(this, value);
            },
            get protocol() {
              return this._scheme + ':';
            },
            set protocol(value) {
              if (this._isInvalid) {
                return;
              }
              parse.call(this, value + ':', 'scheme start');
            },
            get host() {
              return this._isInvalid ? '' : this._port ? this._host + ':' + this._port : this._host;
            },
            set host(value) {
              if (this._isInvalid || !this._isRelative) {
                return;
              }
              parse.call(this, value, 'host');
            },
            get hostname() {
              return this._host;
            },
            set hostname(value) {
              if (this._isInvalid || !this._isRelative) {
                return;
              }
              parse.call(this, value, 'hostname');
            },
            get port() {
              return this._port;
            },
            set port(value) {
              if (this._isInvalid || !this._isRelative) {
                return;
              }
              parse.call(this, value, 'port');
            },
            get pathname() {
              return this._isInvalid ? '' : this._isRelative ? '/' + this._path.join('/') : this._schemeData;
            },
            set pathname(value) {
              if (this._isInvalid || !this._isRelative) {
                return;
              }
              this._path = [];
              parse.call(this, value, 'relative path start');
            },
            get search() {
              return this._isInvalid || !this._query || this._query === '?' ? '' : this._query;
            },
            set search(value) {
              if (this._isInvalid || !this._isRelative) {
                return;
              }
              this._query = '?';
              if (value[0] === '?') {
                value = value.slice(1);
              }
              parse.call(this, value, 'query');
            },
            get hash() {
              return this._isInvalid || !this._fragment || this._fragment === '#' ? '' : this._fragment;
            },
            set hash(value) {
              if (this._isInvalid) {
                return;
              }
              this._fragment = '#';
              if (value[0] === '#') {
                value = value.slice(1);
              }
              parse.call(this, value, 'fragment');
            },
            get origin() {
              let host;
              if (this._isInvalid || !this._scheme) {
                return '';
              }
              switch (this._scheme) {
                case 'data':
                case 'file':
                case 'javascript':
                case 'mailto':
                  return 'null';
                case 'blob':
                  try {
                    return new JURL(this._schemeData).origin || 'null';
                  } catch (_) {}
                  return 'null';
              }
              host = this.host;
              if (!host) {
                return '';
              }
              return this._scheme + '://' + host;
            },
          };
          exports.URL = JURL;
        })();

        /***/
      },
      /* 129 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.build = exports.version = exports.setPDFNetworkStreamFactory = exports.PDFPageProxy = exports.PDFDocumentProxy = exports.PDFWorker = exports.PDFDataRangeTransport = exports.LoopbackPort = exports.getDocument = undefined;

        const _slicedToArray = (function () {
          function sliceIterator(arr, i) {
            const _arr = [];
            let _n = true;
            let _d = false;
            let _e = undefined;
            try {
              for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);
                if (i && _arr.length === i) {
                  break;
                }
              }
            } catch (err) {
              _d = true;
              _e = err;
            } finally {
              try {
                if (!_n && _i['return']) {
                  _i['return']();
                }
              } finally {
                if (_d) {
                  throw _e;
                }
              }
            }
            return _arr;
          }
          return function (arr, i) {
            if (Array.isArray(arr)) {
              return arr;
            } else if (Symbol.iterator in Object(arr)) {
              return sliceIterator(arr, i);
            } else {
              throw new TypeError('Invalid attempt to destructure non-iterable instance');
            }
          };
        })();

        const _createClass = (function () {
          function defineProperties(target, props) {
            for (let i = 0; i < props.length; i++) {
              const descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) {
                descriptor.writable = true;
              }
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function (Constructor, protoProps, staticProps) {
            if (protoProps) {
              defineProperties(Constructor.prototype, protoProps);
            }
            if (staticProps) {
              defineProperties(Constructor, staticProps);
            }
            return Constructor;
          };
        })();

        const _typeof =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (obj) {
                return typeof obj;
              }
            : function (obj) {
                return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              };

        const _util = __w_pdfjs_require__(1);

        const _dom_utils = __w_pdfjs_require__(130);

        const _font_loader = __w_pdfjs_require__(131);

        const _api_compatibility = __w_pdfjs_require__(132);

        const _canvas = __w_pdfjs_require__(133);

        const _global_scope = __w_pdfjs_require__(3);

        const _global_scope2 = _interopRequireDefault(_global_scope);

        const _worker_options = __w_pdfjs_require__(135);

        const _message_handler = __w_pdfjs_require__(136);

        const _metadata = __w_pdfjs_require__(141);

        const _transport_stream = __w_pdfjs_require__(143);

        const _webgl = __w_pdfjs_require__(144);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _toConsumableArray(arr) {
          if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
              arr2[i] = arr[i];
            }
            return arr2;
          } else {
            return Array.from(arr);
          }
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        const DEFAULT_RANGE_CHUNK_SIZE = 65536;
        let isWorkerDisabled = false;
        let fallbackWorkerSrc = void 0;
        let fakeWorkerFilesLoader = null;
        {
          let useRequireEnsure = false;
          if (typeof window === 'undefined') {
            isWorkerDisabled = true;
            if (typeof require.ensure === 'undefined') {
              require.ensure = require('node-ensure');
            }
            useRequireEnsure = true;
          } else if (typeof require !== 'undefined' && typeof require.ensure === 'function') {
            useRequireEnsure = true;
          }
          if (typeof requirejs !== 'undefined' && requirejs.toUrl) {
            fallbackWorkerSrc = requirejs.toUrl('pdfjs-dist/build/pdf.worker.js');
          }
          const dynamicLoaderSupported = typeof requirejs !== 'undefined' && requirejs.load;
          fakeWorkerFilesLoader = useRequireEnsure
            ? function () {
                return new Promise(function (resolve, reject) {
                  require.ensure(
                    [],
                    function () {
                      try {
                        let worker = void 0;
                        worker = require('./pdf.worker.js');
                        resolve(worker.WorkerMessageHandler);
                      } catch (ex) {
                        reject(ex);
                      }
                    },
                    reject,
                    'pdfjsWorker',
                  );
                });
              }
            : dynamicLoaderSupported
            ? function () {
                return new Promise(function (resolve, reject) {
                  requirejs(
                    ['pdfjs-dist/build/pdf.worker'],
                    function (worker) {
                      try {
                        resolve(worker.WorkerMessageHandler);
                      } catch (ex) {
                        reject(ex);
                      }
                    },
                    reject,
                  );
                });
              }
            : null;
          if (!fallbackWorkerSrc && typeof document !== 'undefined') {
            const pdfjsFilePath = document.currentScript && document.currentScript.src;
            if (pdfjsFilePath) {
              fallbackWorkerSrc = pdfjsFilePath.replace(/(\.(?:min\.)?js)(\?.*)?$/i, '.worker$1$2');
            }
          }
        }
        let createPDFNetworkStream;
        function setPDFNetworkStreamFactory(pdfNetworkStreamFactory) {
          createPDFNetworkStream = pdfNetworkStreamFactory;
        }
        function getDocument(src) {
          const task = new PDFDocumentLoadingTask();
          let source;
          if (typeof src === 'string') {
            source = { url: src };
          } else if ((0, _util.isArrayBuffer)(src)) {
            source = { data: src };
          } else if (src instanceof PDFDataRangeTransport) {
            source = { range: src };
          } else {
            if ((typeof src === 'undefined' ? 'undefined' : _typeof(src)) !== 'object') {
              throw new Error('Invalid parameter in getDocument, ' + 'need either Uint8Array, string or a parameter object');
            }
            if (!src.url && !src.data && !src.range) {
              throw new Error('Invalid parameter object: need either .data, .range or .url');
            }
            source = src;
          }
          const params = Object.create(null);
          let rangeTransport = null;
          let worker = null;
          for (const key in source) {
            if (key === 'url' && typeof window !== 'undefined') {
              params[key] = new _util.URL(source[key], window.location).href;
              continue;
            } else if (key === 'range') {
              rangeTransport = source[key];
              continue;
            } else if (key === 'worker') {
              worker = source[key];
              continue;
            } else if (key === 'data' && !(source[key] instanceof Uint8Array)) {
              const pdfBytes = source[key];
              if (typeof pdfBytes === 'string') {
                params[key] = (0, _util.stringToBytes)(pdfBytes);
              } else if (
                (typeof pdfBytes === 'undefined' ? 'undefined' : _typeof(pdfBytes)) === 'object' &&
                pdfBytes !== null &&
                !isNaN(pdfBytes.length)
              ) {
                params[key] = new Uint8Array(pdfBytes);
              } else if ((0, _util.isArrayBuffer)(pdfBytes)) {
                params[key] = new Uint8Array(pdfBytes);
              } else {
                throw new Error(
                  'Invalid PDF binary data: either typed array, ' + 'string or array-like object is expected in the ' + 'data property.',
                );
              }
              continue;
            }
            params[key] = source[key];
          }
          params.rangeChunkSize = params.rangeChunkSize || DEFAULT_RANGE_CHUNK_SIZE;
          params.CMapReaderFactory = params.CMapReaderFactory || _dom_utils.DOMCMapReaderFactory;
          params.ignoreErrors = params.stopAtErrors !== true;
          params.pdfBug = params.pdfBug === true;
          const NativeImageDecoderValues = Object.values(_util.NativeImageDecoding);
          if (params.nativeImageDecoderSupport === undefined || !NativeImageDecoderValues.includes(params.nativeImageDecoderSupport)) {
            params.nativeImageDecoderSupport =
              _api_compatibility.apiCompatibilityParams.nativeImageDecoderSupport || _util.NativeImageDecoding.DECODE;
          }
          if (!Number.isInteger(params.maxImageSize)) {
            params.maxImageSize = -1;
          }
          if (typeof params.isEvalSupported !== 'boolean') {
            params.isEvalSupported = true;
          }
          if (typeof params.disableFontFace !== 'boolean') {
            params.disableFontFace = _api_compatibility.apiCompatibilityParams.disableFontFace || false;
          }
          if (typeof params.disableRange !== 'boolean') {
            params.disableRange = false;
          }
          if (typeof params.disableStream !== 'boolean') {
            params.disableStream = false;
          }
          if (typeof params.disableAutoFetch !== 'boolean') {
            params.disableAutoFetch = false;
          }
          if (typeof params.disableCreateObjectURL !== 'boolean') {
            params.disableCreateObjectURL = _api_compatibility.apiCompatibilityParams.disableCreateObjectURL || false;
          }
          (0, _util.setVerbosityLevel)(params.verbosity);
          if (!worker) {
            const workerParams = {
              postMessageTransfers: params.postMessageTransfers,
              verbosity: params.verbosity,
            };
            const workerPort = _worker_options.GlobalWorkerOptions.workerPort;
            if (workerPort) {
              workerParams.port = workerPort;
              worker = PDFWorker.fromPort(workerParams);
            } else {
              worker = new PDFWorker(workerParams);
            }
            task._worker = worker;
          }
          const docId = task.docId;
          worker.promise
            .then(function () {
              if (task.destroyed) {
                throw new Error('Loading aborted');
              }
              return _fetchDocument(worker, params, rangeTransport, docId).then(function (workerId) {
                if (task.destroyed) {
                  throw new Error('Loading aborted');
                }
                let networkStream = void 0;
                if (rangeTransport) {
                  networkStream = new _transport_stream.PDFDataTransportStream(
                    {
                      length: params.length,
                      initialData: params.initialData,
                      disableRange: params.disableRange,
                      disableStream: params.disableStream,
                    },
                    rangeTransport,
                  );
                } else if (!params.data) {
                  networkStream = createPDFNetworkStream({
                    url: params.url,
                    length: params.length,
                    httpHeaders: params.httpHeaders,
                    withCredentials: params.withCredentials,
                    rangeChunkSize: params.rangeChunkSize,
                    disableRange: params.disableRange,
                    disableStream: params.disableStream,
                  });
                }
                const messageHandler = new _message_handler.MessageHandler(docId, workerId, worker.port);
                messageHandler.postMessageTransfers = worker.postMessageTransfers;
                const transport = new WorkerTransport(messageHandler, task, networkStream, params);
                task._transport = transport;
                messageHandler.send('Ready', null);
              });
            })
            .catch(task._capability.reject);
          return task;
        }
        function _fetchDocument(worker, source, pdfDataRangeTransport, docId) {
          if (worker.destroyed) {
            return Promise.reject(new Error('Worker was destroyed'));
          }
          if (pdfDataRangeTransport) {
            source.length = pdfDataRangeTransport.length;
            source.initialData = pdfDataRangeTransport.initialData;
          }
          return worker.messageHandler
            .sendWithPromise('GetDocRequest', {
              docId: docId,
              apiVersion: '2.0.943',
              source: {
                data: source.data,
                url: source.url,
                password: source.password,
                disableAutoFetch: source.disableAutoFetch,
                rangeChunkSize: source.rangeChunkSize,
                length: source.length,
              },
              maxImageSize: source.maxImageSize,
              disableFontFace: source.disableFontFace,
              disableCreateObjectURL: source.disableCreateObjectURL,
              postMessageTransfers: worker.postMessageTransfers,
              docBaseUrl: source.docBaseUrl,
              nativeImageDecoderSupport: source.nativeImageDecoderSupport,
              ignoreErrors: source.ignoreErrors,
              isEvalSupported: source.isEvalSupported,
            })
            .then(function (workerId) {
              if (worker.destroyed) {
                throw new Error('Worker was destroyed');
              }
              return workerId;
            });
        }
        var PDFDocumentLoadingTask = (function PDFDocumentLoadingTaskClosure() {
          let nextDocumentId = 0;
          function PDFDocumentLoadingTask() {
            this._capability = (0, _util.createPromiseCapability)();
            this._transport = null;
            this._worker = null;
            this.docId = 'd' + nextDocumentId++;
            this.destroyed = false;
            this.onPassword = null;
            this.onProgress = null;
            this.onUnsupportedFeature = null;
          }
          PDFDocumentLoadingTask.prototype = {
            get promise() {
              return this._capability.promise;
            },
            destroy: function destroy() {
              const _this = this;

              this.destroyed = true;
              const transportDestroyed = !this._transport ? Promise.resolve() : this._transport.destroy();
              return transportDestroyed.then(function () {
                _this._transport = null;
                if (_this._worker) {
                  _this._worker.destroy();
                  _this._worker = null;
                }
              });
            },

            then: function PDFDocumentLoadingTask_then(onFulfilled, onRejected) {
              return this.promise.then.apply(this.promise, arguments);
            },
          };
          return PDFDocumentLoadingTask;
        })();

        var PDFDataRangeTransport = (function () {
          function PDFDataRangeTransport(length, initialData) {
            _classCallCheck(this, PDFDataRangeTransport);

            this.length = length;
            this.initialData = initialData;
            this._rangeListeners = [];
            this._progressListeners = [];
            this._progressiveReadListeners = [];
            this._readyCapability = (0, _util.createPromiseCapability)();
          }

          _createClass(PDFDataRangeTransport, [
            {
              key: 'addRangeListener',
              value: function addRangeListener(listener) {
                this._rangeListeners.push(listener);
              },
            },
            {
              key: 'addProgressListener',
              value: function addProgressListener(listener) {
                this._progressListeners.push(listener);
              },
            },
            {
              key: 'addProgressiveReadListener',
              value: function addProgressiveReadListener(listener) {
                this._progressiveReadListeners.push(listener);
              },
            },
            {
              key: 'onDataRange',
              value: function onDataRange(begin, chunk) {
                let _iteratorNormalCompletion = true;
                let _didIteratorError = false;
                let _iteratorError = undefined;

                try {
                  for (
                    var _iterator = this._rangeListeners[Symbol.iterator](), _step;
                    !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                    _iteratorNormalCompletion = true
                  ) {
                    const listener = _step.value;

                    listener(begin, chunk);
                  }
                } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                      _iterator.return();
                    }
                  } finally {
                    if (_didIteratorError) {
                      throw _iteratorError;
                    }
                  }
                }
              },
            },
            {
              key: 'onDataProgress',
              value: function onDataProgress(loaded) {
                const _this2 = this;

                this._readyCapability.promise.then(function () {
                  let _iteratorNormalCompletion2 = true;
                  let _didIteratorError2 = false;
                  let _iteratorError2 = undefined;

                  try {
                    for (
                      var _iterator2 = _this2._progressListeners[Symbol.iterator](), _step2;
                      !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done);
                      _iteratorNormalCompletion2 = true
                    ) {
                      const listener = _step2.value;

                      listener(loaded);
                    }
                  } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                      }
                    } finally {
                      if (_didIteratorError2) {
                        throw _iteratorError2;
                      }
                    }
                  }
                });
              },
            },
            {
              key: 'onDataProgressiveRead',
              value: function onDataProgressiveRead(chunk) {
                const _this3 = this;

                this._readyCapability.promise.then(function () {
                  let _iteratorNormalCompletion3 = true;
                  let _didIteratorError3 = false;
                  let _iteratorError3 = undefined;

                  try {
                    for (
                      var _iterator3 = _this3._progressiveReadListeners[Symbol.iterator](), _step3;
                      !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done);
                      _iteratorNormalCompletion3 = true
                    ) {
                      const listener = _step3.value;

                      listener(chunk);
                    }
                  } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                      }
                    } finally {
                      if (_didIteratorError3) {
                        throw _iteratorError3;
                      }
                    }
                  }
                });
              },
            },
            {
              key: 'transportReady',
              value: function transportReady() {
                this._readyCapability.resolve();
              },
            },
            {
              key: 'requestDataRange',
              value: function requestDataRange(begin, end) {
                (0, _util.unreachable)('Abstract method PDFDataRangeTransport.requestDataRange');
              },
            },
            {
              key: 'abort',
              value: function abort() {},
            },
          ]);

          return PDFDataRangeTransport;
        })();

        const PDFDocumentProxy = (function () {
          function PDFDocumentProxy(pdfInfo, transport, loadingTask) {
            _classCallCheck(this, PDFDocumentProxy);

            this.loadingTask = loadingTask;
            this._pdfInfo = pdfInfo;
            this._transport = transport;
          }

          _createClass(PDFDocumentProxy, [
            {
              key: 'getPage',
              value: function getPage(pageNumber) {
                return this._transport.getPage(pageNumber);
              },
            },
            {
              key: 'getPageIndex',
              value: function getPageIndex(ref) {
                return this._transport.getPageIndex(ref);
              },
            },
            {
              key: 'getDestinations',
              value: function getDestinations() {
                return this._transport.getDestinations();
              },
            },
            {
              key: 'getDestination',
              value: function getDestination(id) {
                return this._transport.getDestination(id);
              },
            },
            {
              key: 'getPageLabels',
              value: function getPageLabels() {
                return this._transport.getPageLabels();
              },
            },
            {
              key: 'getPageMode',
              value: function getPageMode() {
                return this._transport.getPageMode();
              },
            },
            {
              key: 'getAttachments',
              value: function getAttachments() {
                return this._transport.getAttachments();
              },
            },
            {
              key: 'getJavaScript',
              value: function getJavaScript() {
                return this._transport.getJavaScript();
              },
            },
            {
              key: 'getOutline',
              value: function getOutline() {
                return this._transport.getOutline();
              },
            },
            {
              key: 'getPermissions',
              value: function getPermissions() {
                return this._transport.getPermissions();
              },
            },
            {
              key: 'getMetadata',
              value: function getMetadata() {
                return this._transport.getMetadata();
              },
            },
            {
              key: 'getData',
              value: function getData() {
                return this._transport.getData();
              },
            },
            {
              key: 'getDownloadInfo',
              value: function getDownloadInfo() {
                return this._transport.downloadInfoCapability.promise;
              },
            },
            {
              key: 'getStats',
              value: function getStats() {
                return this._transport.getStats();
              },
            },
            {
              key: 'cleanup',
              value: function cleanup() {
                this._transport.startCleanup();
              },
            },
            {
              key: 'destroy',
              value: function destroy() {
                return this.loadingTask.destroy();
              },
            },
            {
              key: 'numPages',
              get: function get() {
                return this._pdfInfo.numPages;
              },
            },
            {
              key: 'fingerprint',
              get: function get() {
                return this._pdfInfo.fingerprint;
              },
            },
            {
              key: 'loadingParams',
              get: function get() {
                return this._transport.loadingParams;
              },
            },
          ]);

          return PDFDocumentProxy;
        })();

        const PDFPageProxy = (function PDFPageProxyClosure() {
          function PDFPageProxy(pageIndex, pageInfo, transport) {
            const pdfBug = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

            this.pageIndex = pageIndex;
            this._pageInfo = pageInfo;
            this.transport = transport;
            this._stats = pdfBug ? new _dom_utils.StatTimer() : _dom_utils.DummyStatTimer;
            this._pdfBug = pdfBug;
            this.commonObjs = transport.commonObjs;
            this.objs = new PDFObjects();
            this.cleanupAfterRender = false;
            this.pendingCleanup = false;
            this.intentStates = Object.create(null);
            this.destroyed = false;
          }
          PDFPageProxy.prototype = {
            get pageNumber() {
              return this.pageIndex + 1;
            },
            get rotate() {
              return this._pageInfo.rotate;
            },
            get ref() {
              return this._pageInfo.ref;
            },
            get userUnit() {
              return this._pageInfo.userUnit;
            },
            get view() {
              return this._pageInfo.view;
            },
            getViewport: function getViewport(scale) {
              const rotate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.rotate;
              const dontFlip = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

              return new _dom_utils.PageViewport({
                viewBox: this.view,
                scale: scale,
                rotation: rotate,
                dontFlip: dontFlip,
              });
            },

            getAnnotations: function PDFPageProxy_getAnnotations(params) {
              const intent = (params && params.intent) || null;
              if (!this.annotationsPromise || this.annotationsIntent !== intent) {
                this.annotationsPromise = this.transport.getAnnotations(this.pageIndex, intent);
                this.annotationsIntent = intent;
              }
              return this.annotationsPromise;
            },
            render: function PDFPageProxy_render(params) {
              const _this4 = this;

              const stats = this._stats;
              stats.time('Overall');
              this.pendingCleanup = false;
              const renderingIntent = params.intent === 'print' ? 'print' : 'display';
              const canvasFactory = params.canvasFactory || new _dom_utils.DOMCanvasFactory();
              const webGLContext = new _webgl.WebGLContext({ enable: params.enableWebGL });
              if (!this.intentStates[renderingIntent]) {
                this.intentStates[renderingIntent] = Object.create(null);
              }
              const intentState = this.intentStates[renderingIntent];
              if (!intentState.displayReadyCapability) {
                intentState.receivingOperatorList = true;
                intentState.displayReadyCapability = (0, _util.createPromiseCapability)();
                intentState.operatorList = {
                  fnArray: [],
                  argsArray: [],
                  lastChunk: false,
                };
                stats.time('Page Request');
                this.transport.messageHandler.send('RenderPageRequest', {
                  pageIndex: this.pageNumber - 1,
                  intent: renderingIntent,
                  renderInteractiveForms: params.renderInteractiveForms === true,
                });
              }
              const complete = function complete(error) {
                const i = intentState.renderTasks.indexOf(internalRenderTask);
                if (i >= 0) {
                  intentState.renderTasks.splice(i, 1);
                }
                if (_this4.cleanupAfterRender) {
                  _this4.pendingCleanup = true;
                }
                _this4._tryCleanup();
                if (error) {
                  internalRenderTask.capability.reject(error);
                } else {
                  internalRenderTask.capability.resolve();
                }
                stats.timeEnd('Rendering');
                stats.timeEnd('Overall');
              };
              var internalRenderTask = new InternalRenderTask(
                complete,
                params,
                this.objs,
                this.commonObjs,
                intentState.operatorList,
                this.pageNumber,
                canvasFactory,
                webGLContext,
                this._pdfBug,
              );
              internalRenderTask.useRequestAnimationFrame = renderingIntent !== 'print';
              if (!intentState.renderTasks) {
                intentState.renderTasks = [];
              }
              intentState.renderTasks.push(internalRenderTask);
              const renderTask = internalRenderTask.task;
              intentState.displayReadyCapability.promise
                .then(function (transparency) {
                  if (_this4.pendingCleanup) {
                    complete();
                    return;
                  }
                  stats.time('Rendering');
                  internalRenderTask.initializeGraphics(transparency);
                  internalRenderTask.operatorListChanged();
                })
                .catch(complete);
              return renderTask;
            },
            getOperatorList: function PDFPageProxy_getOperatorList() {
              function operatorListChanged() {
                if (intentState.operatorList.lastChunk) {
                  intentState.opListReadCapability.resolve(intentState.operatorList);
                  const i = intentState.renderTasks.indexOf(opListTask);
                  if (i >= 0) {
                    intentState.renderTasks.splice(i, 1);
                  }
                }
              }
              const renderingIntent = 'oplist';
              if (!this.intentStates[renderingIntent]) {
                this.intentStates[renderingIntent] = Object.create(null);
              }
              var intentState = this.intentStates[renderingIntent];
              let opListTask;
              if (!intentState.opListReadCapability) {
                opListTask = {};
                opListTask.operatorListChanged = operatorListChanged;
                intentState.receivingOperatorList = true;
                intentState.opListReadCapability = (0, _util.createPromiseCapability)();
                intentState.renderTasks = [];
                intentState.renderTasks.push(opListTask);
                intentState.operatorList = {
                  fnArray: [],
                  argsArray: [],
                  lastChunk: false,
                };
                this._stats.time('Page Request');
                this.transport.messageHandler.send('RenderPageRequest', {
                  pageIndex: this.pageIndex,
                  intent: renderingIntent,
                });
              }
              return intentState.opListReadCapability.promise;
            },
            streamTextContent: function streamTextContent() {
              const params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              const TEXT_CONTENT_CHUNK_SIZE = 100;
              return this.transport.messageHandler.sendWithStream(
                'GetTextContent',
                {
                  pageIndex: this.pageNumber - 1,
                  normalizeWhitespace: params.normalizeWhitespace === true,
                  combineTextItems: params.disableCombineTextItems !== true,
                },
                {
                  highWaterMark: TEXT_CONTENT_CHUNK_SIZE,
                  size: function size(textContent) {
                    return textContent.items.length;
                  },
                },
              );
            },

            getTextContent: function PDFPageProxy_getTextContent(params) {
              params = params || {};
              const readableStream = this.streamTextContent(params);
              return new Promise(function (resolve, reject) {
                function pump() {
                  reader.read().then(function (_ref) {
                    let _textContent$items;

                    const value = _ref.value,
                      done = _ref.done;

                    if (done) {
                      resolve(textContent);
                      return;
                    }
                    Object.assign(textContent.styles, value.styles);
                    (_textContent$items = textContent.items).push.apply(_textContent$items, _toConsumableArray(value.items));
                    pump();
                  }, reject);
                }
                var reader = readableStream.getReader();
                var textContent = {
                  items: [],
                  styles: Object.create(null),
                };
                pump();
              });
            },
            _destroy: function PDFPageProxy_destroy() {
              this.destroyed = true;
              this.transport.pageCache[this.pageIndex] = null;
              const waitOn = [];
              Object.keys(this.intentStates).forEach(function (intent) {
                if (intent === 'oplist') {
                  return;
                }
                const intentState = this.intentStates[intent];
                intentState.renderTasks.forEach(function (renderTask) {
                  const renderCompleted = renderTask.capability.promise.catch(function () {});
                  waitOn.push(renderCompleted);
                  renderTask.cancel();
                });
              }, this);
              this.objs.clear();
              this.annotationsPromise = null;
              this.pendingCleanup = false;
              return Promise.all(waitOn);
            },
            cleanup: function cleanup() {
              const resetStats = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

              this.pendingCleanup = true;
              this._tryCleanup(resetStats);
            },
            _tryCleanup: function _tryCleanup() {
              const resetStats = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

              if (
                !this.pendingCleanup ||
                Object.keys(this.intentStates).some(function (intent) {
                  const intentState = this.intentStates[intent];
                  return intentState.renderTasks.length !== 0 || intentState.receivingOperatorList;
                }, this)
              ) {
                return;
              }
              Object.keys(this.intentStates).forEach(function (intent) {
                delete this.intentStates[intent];
              }, this);
              this.objs.clear();
              this.annotationsPromise = null;
              if (resetStats && this._stats instanceof _dom_utils.StatTimer) {
                this._stats = new _dom_utils.StatTimer();
              }
              this.pendingCleanup = false;
            },

            _startRenderPage: function PDFPageProxy_startRenderPage(transparency, intent) {
              const intentState = this.intentStates[intent];
              if (intentState.displayReadyCapability) {
                intentState.displayReadyCapability.resolve(transparency);
              }
            },
            _renderPageChunk: function PDFPageProxy_renderPageChunk(operatorListChunk, intent) {
              const intentState = this.intentStates[intent];
              let i, ii;
              for (i = 0, ii = operatorListChunk.length; i < ii; i++) {
                intentState.operatorList.fnArray.push(operatorListChunk.fnArray[i]);
                intentState.operatorList.argsArray.push(operatorListChunk.argsArray[i]);
              }
              intentState.operatorList.lastChunk = operatorListChunk.lastChunk;
              for (i = 0; i < intentState.renderTasks.length; i++) {
                intentState.renderTasks[i].operatorListChanged();
              }
              if (operatorListChunk.lastChunk) {
                intentState.receivingOperatorList = false;
                this._tryCleanup();
              }
            },
            get stats() {
              return this._stats instanceof _dom_utils.StatTimer ? this._stats : null;
            },
          };
          return PDFPageProxy;
        })();

        const LoopbackPort = (function () {
          function LoopbackPort() {
            const defer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            _classCallCheck(this, LoopbackPort);

            this._listeners = [];
            this._defer = defer;
            this._deferred = Promise.resolve(undefined);
          }

          _createClass(LoopbackPort, [
            {
              key: 'postMessage',
              value: function postMessage(obj, transfers) {
                const _this5 = this;

                function cloneValue(value) {
                  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object' || value === null) {
                    return value;
                  }
                  if (cloned.has(value)) {
                    return cloned.get(value);
                  }
                  let result;
                  let buffer;
                  if ((buffer = value.buffer) && (0, _util.isArrayBuffer)(buffer)) {
                    const transferable = transfers && transfers.includes(buffer);
                    if (value === buffer) {
                      result = value;
                    } else if (transferable) {
                      result = new value.constructor(buffer, value.byteOffset, value.byteLength);
                    } else {
                      result = new value.constructor(value);
                    }
                    cloned.set(value, result);
                    return result;
                  }
                  result = Array.isArray(value) ? [] : {};
                  cloned.set(value, result);
                  for (const i in value) {
                    var desc,
                      p = value;
                    while (!(desc = Object.getOwnPropertyDescriptor(p, i))) {
                      p = Object.getPrototypeOf(p);
                    }
                    if (typeof desc.value === 'undefined' || typeof desc.value === 'function') {
                      continue;
                    }
                    result[i] = cloneValue(desc.value);
                  }
                  return result;
                }
                if (!this._defer) {
                  this._listeners.forEach(function (listener) {
                    listener.call(this, { data: obj });
                  }, this);
                  return;
                }
                var cloned = new WeakMap();
                const e = { data: cloneValue(obj) };
                this._deferred.then(function () {
                  _this5._listeners.forEach(function (listener) {
                    listener.call(this, e);
                  }, _this5);
                });
              },
            },
            {
              key: 'addEventListener',
              value: function addEventListener(name, listener) {
                this._listeners.push(listener);
              },
            },
            {
              key: 'removeEventListener',
              value: function removeEventListener(name, listener) {
                const i = this._listeners.indexOf(listener);
                this._listeners.splice(i, 1);
              },
            },
            {
              key: 'terminate',
              value: function terminate() {
                this._listeners = [];
              },
            },
          ]);

          return LoopbackPort;
        })();

        var PDFWorker = (function PDFWorkerClosure() {
          let nextFakeWorkerId = 0;
          function getWorkerSrc() {
            if (_worker_options.GlobalWorkerOptions.workerSrc) {
              return _worker_options.GlobalWorkerOptions.workerSrc;
            }
            if (typeof fallbackWorkerSrc !== 'undefined') {
              return fallbackWorkerSrc;
            }
            throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
          }
          function getMainThreadWorkerMessageHandler() {
            try {
              if (typeof window !== 'undefined') {
                return window.pdfjsWorker && window.pdfjsWorker.WorkerMessageHandler;
              }
            } catch (ex) {}
            return null;
          }
          let fakeWorkerFilesLoadedCapability = void 0;
          function setupFakeWorkerGlobal() {
            if (fakeWorkerFilesLoadedCapability) {
              return fakeWorkerFilesLoadedCapability.promise;
            }
            fakeWorkerFilesLoadedCapability = (0, _util.createPromiseCapability)();
            const mainWorkerMessageHandler = getMainThreadWorkerMessageHandler();
            if (mainWorkerMessageHandler) {
              fakeWorkerFilesLoadedCapability.resolve(mainWorkerMessageHandler);
              return fakeWorkerFilesLoadedCapability.promise;
            }
            const loader =
              fakeWorkerFilesLoader ||
              function () {
                return (0, _dom_utils.loadScript)(getWorkerSrc()).then(function () {
                  return window.pdfjsWorker.WorkerMessageHandler;
                });
              };
            loader().then(fakeWorkerFilesLoadedCapability.resolve, fakeWorkerFilesLoadedCapability.reject);
            return fakeWorkerFilesLoadedCapability.promise;
          }
          function createCDNWrapper(url) {
            const wrapper = "importScripts('" + url + "');";
            return _util.URL.createObjectURL(new Blob([wrapper]));
          }
          const pdfWorkerPorts = new WeakMap();
          function PDFWorker() {
            const _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              _ref2$name = _ref2.name,
              name = _ref2$name === undefined ? null : _ref2$name,
              _ref2$port = _ref2.port,
              port = _ref2$port === undefined ? null : _ref2$port,
              _ref2$postMessageTran = _ref2.postMessageTransfers,
              postMessageTransfers = _ref2$postMessageTran === undefined ? true : _ref2$postMessageTran,
              _ref2$verbosity = _ref2.verbosity,
              verbosity = _ref2$verbosity === undefined ? (0, _util.getVerbosityLevel)() : _ref2$verbosity;

            if (port && pdfWorkerPorts.has(port)) {
              throw new Error('Cannot use more than one PDFWorker per port');
            }
            this.name = name;
            this.destroyed = false;
            this.postMessageTransfers = postMessageTransfers !== false;
            this.verbosity = verbosity;
            this._readyCapability = (0, _util.createPromiseCapability)();
            this._port = null;
            this._webWorker = null;
            this._messageHandler = null;
            if (port) {
              pdfWorkerPorts.set(port, this);
              this._initializeFromPort(port);
              return;
            }
            this._initialize();
          }
          PDFWorker.prototype = {
            get promise() {
              return this._readyCapability.promise;
            },
            get port() {
              return this._port;
            },
            get messageHandler() {
              return this._messageHandler;
            },
            _initializeFromPort: function PDFWorker_initializeFromPort(port) {
              this._port = port;
              this._messageHandler = new _message_handler.MessageHandler('main', 'worker', port);
              this._messageHandler.on('ready', function () {});
              this._readyCapability.resolve();
            },
            _initialize: function PDFWorker_initialize() {
              const _this6 = this;

              if (typeof Worker !== 'undefined' && !isWorkerDisabled && !getMainThreadWorkerMessageHandler()) {
                let workerSrc = getWorkerSrc();
                try {
                  if (!(0, _util.isSameOrigin)(window.location.href, workerSrc)) {
                    workerSrc = createCDNWrapper(new _util.URL(workerSrc, window.location).href);
                  }
                  const worker = new Worker(workerSrc);
                  const messageHandler = new _message_handler.MessageHandler('main', 'worker', worker);
                  const terminateEarly = function terminateEarly() {
                    worker.removeEventListener('error', onWorkerError);
                    messageHandler.destroy();
                    worker.terminate();
                    if (_this6.destroyed) {
                      _this6._readyCapability.reject(new Error('Worker was destroyed'));
                    } else {
                      _this6._setupFakeWorker();
                    }
                  };
                  var onWorkerError = function onWorkerError() {
                    if (!_this6._webWorker) {
                      terminateEarly();
                    }
                  };
                  worker.addEventListener('error', onWorkerError);
                  messageHandler.on('test', function (data) {
                    worker.removeEventListener('error', onWorkerError);
                    if (_this6.destroyed) {
                      terminateEarly();
                      return;
                    }
                    if (data && data.supportTypedArray) {
                      _this6._messageHandler = messageHandler;
                      _this6._port = worker;
                      _this6._webWorker = worker;
                      if (!data.supportTransfers) {
                        _this6.postMessageTransfers = false;
                      }
                      _this6._readyCapability.resolve();
                      messageHandler.send('configure', { verbosity: _this6.verbosity });
                    } else {
                      _this6._setupFakeWorker();
                      messageHandler.destroy();
                      worker.terminate();
                    }
                  });
                  messageHandler.on('ready', function (data) {
                    worker.removeEventListener('error', onWorkerError);
                    if (_this6.destroyed) {
                      terminateEarly();
                      return;
                    }
                    try {
                      sendTest();
                    } catch (e) {
                      _this6._setupFakeWorker();
                    }
                  });
                  var sendTest = function sendTest() {
                    const testObj = new Uint8Array([_this6.postMessageTransfers ? 255 : 0]);
                    try {
                      messageHandler.send('test', testObj, [testObj.buffer]);
                    } catch (ex) {
                      (0, _util.info)('Cannot use postMessage transfers');
                      testObj[0] = 0;
                      messageHandler.send('test', testObj);
                    }
                  };
                  sendTest();
                  return;
                } catch (e) {
                  (0, _util.info)('The worker has been disabled.');
                }
              }
              this._setupFakeWorker();
            },
            _setupFakeWorker: function PDFWorker_setupFakeWorker() {
              const _this7 = this;

              if (!isWorkerDisabled) {
                (0, _util.warn)('Setting up fake worker.');
                isWorkerDisabled = true;
              }
              setupFakeWorkerGlobal()
                .then(function (WorkerMessageHandler) {
                  if (_this7.destroyed) {
                    _this7._readyCapability.reject(new Error('Worker was destroyed'));
                    return;
                  }
                  const port = new LoopbackPort();
                  _this7._port = port;
                  const id = 'fake' + nextFakeWorkerId++;
                  const workerHandler = new _message_handler.MessageHandler(id + '_worker', id, port);
                  WorkerMessageHandler.setup(workerHandler, port);
                  const messageHandler = new _message_handler.MessageHandler(id, id + '_worker', port);
                  _this7._messageHandler = messageHandler;
                  _this7._readyCapability.resolve();
                })
                .catch(function (reason) {
                  _this7._readyCapability.reject(new Error('Setting up fake worker failed: "' + reason.message + '".'));
                });
            },
            destroy: function PDFWorker_destroy() {
              this.destroyed = true;
              if (this._webWorker) {
                this._webWorker.terminate();
                this._webWorker = null;
              }
              pdfWorkerPorts.delete(this._port);
              this._port = null;
              if (this._messageHandler) {
                this._messageHandler.destroy();
                this._messageHandler = null;
              }
            },
          };
          PDFWorker.fromPort = function (params) {
            if (!params || !params.port) {
              throw new Error('PDFWorker.fromPort - invalid method signature.');
            }
            if (pdfWorkerPorts.has(params.port)) {
              return pdfWorkerPorts.get(params.port);
            }
            return new PDFWorker(params);
          };
          PDFWorker.getWorkerSrc = function () {
            return getWorkerSrc();
          };
          return PDFWorker;
        })();

        var WorkerTransport = (function () {
          function WorkerTransport(messageHandler, loadingTask, networkStream, params) {
            _classCallCheck(this, WorkerTransport);

            this.messageHandler = messageHandler;
            this.loadingTask = loadingTask;
            this.commonObjs = new PDFObjects();
            this.fontLoader = new _font_loader.FontLoader(loadingTask.docId);
            this._params = params;
            this.CMapReaderFactory = new params.CMapReaderFactory({
              baseUrl: params.cMapUrl,
              isCompressed: params.cMapPacked,
            });
            this.destroyed = false;
            this.destroyCapability = null;
            this._passwordCapability = null;
            this._networkStream = networkStream;
            this._fullReader = null;
            this._lastProgress = null;
            this.pageCache = [];
            this.pagePromises = [];
            this.downloadInfoCapability = (0, _util.createPromiseCapability)();
            this.setupMessageHandler();
          }

          _createClass(WorkerTransport, [
            {
              key: 'destroy',
              value: function destroy() {
                const _this8 = this;

                if (this.destroyCapability) {
                  return this.destroyCapability.promise;
                }
                this.destroyed = true;
                this.destroyCapability = (0, _util.createPromiseCapability)();
                if (this._passwordCapability) {
                  this._passwordCapability.reject(new Error('Worker was destroyed during onPassword callback'));
                }
                const waitOn = [];
                this.pageCache.forEach(function (page) {
                  if (page) {
                    waitOn.push(page._destroy());
                  }
                });
                this.pageCache = [];
                this.pagePromises = [];
                const terminated = this.messageHandler.sendWithPromise('Terminate', null);
                waitOn.push(terminated);
                Promise.all(waitOn).then(function () {
                  _this8.fontLoader.clear();
                  if (_this8._networkStream) {
                    _this8._networkStream.cancelAllRequests();
                  }
                  if (_this8.messageHandler) {
                    _this8.messageHandler.destroy();
                    _this8.messageHandler = null;
                  }
                  _this8.destroyCapability.resolve();
                }, this.destroyCapability.reject);
                return this.destroyCapability.promise;
              },
            },
            {
              key: 'setupMessageHandler',
              value: function setupMessageHandler() {
                const messageHandler = this.messageHandler,
                  loadingTask = this.loadingTask;

                messageHandler.on(
                  'GetReader',
                  function (data, sink) {
                    const _this9 = this;

                    (0, _util.assert)(this._networkStream);
                    this._fullReader = this._networkStream.getFullReader();
                    this._fullReader.onProgress = function (evt) {
                      _this9._lastProgress = {
                        loaded: evt.loaded,
                        total: evt.total,
                      };
                    };
                    sink.onPull = function () {
                      _this9._fullReader
                        .read()
                        .then(function (_ref3) {
                          const value = _ref3.value,
                            done = _ref3.done;

                          if (done) {
                            sink.close();
                            return;
                          }
                          (0, _util.assert)((0, _util.isArrayBuffer)(value));
                          sink.enqueue(new Uint8Array(value), 1, [value]);
                        })
                        .catch(function (reason) {
                          sink.error(reason);
                        });
                    };
                    sink.onCancel = function (reason) {
                      _this9._fullReader.cancel(reason);
                    };
                  },
                  this,
                );
                messageHandler.on(
                  'ReaderHeadersReady',
                  function (data) {
                    const _this10 = this;

                    const headersCapability = (0, _util.createPromiseCapability)();
                    const fullReader = this._fullReader;
                    fullReader.headersReady.then(function () {
                      if (!fullReader.isStreamingSupported || !fullReader.isRangeSupported) {
                        if (_this10._lastProgress && loadingTask.onProgress) {
                          loadingTask.onProgress(_this10._lastProgress);
                        }
                        fullReader.onProgress = function (evt) {
                          if (loadingTask.onProgress) {
                            loadingTask.onProgress({
                              loaded: evt.loaded,
                              total: evt.total,
                            });
                          }
                        };
                      }
                      headersCapability.resolve({
                        isStreamingSupported: fullReader.isStreamingSupported,
                        isRangeSupported: fullReader.isRangeSupported,
                        contentLength: fullReader.contentLength,
                      });
                    }, headersCapability.reject);
                    return headersCapability.promise;
                  },
                  this,
                );
                messageHandler.on(
                  'GetRangeReader',
                  function (data, sink) {
                    (0, _util.assert)(this._networkStream);
                    const rangeReader = this._networkStream.getRangeReader(data.begin, data.end);
                    sink.onPull = function () {
                      rangeReader
                        .read()
                        .then(function (_ref4) {
                          const value = _ref4.value,
                            done = _ref4.done;

                          if (done) {
                            sink.close();
                            return;
                          }
                          (0, _util.assert)((0, _util.isArrayBuffer)(value));
                          sink.enqueue(new Uint8Array(value), 1, [value]);
                        })
                        .catch(function (reason) {
                          sink.error(reason);
                        });
                    };
                    sink.onCancel = function (reason) {
                      rangeReader.cancel(reason);
                    };
                  },
                  this,
                );
                messageHandler.on(
                  'GetDoc',
                  function (_ref5) {
                    const pdfInfo = _ref5.pdfInfo;

                    this.numPages = pdfInfo.numPages;
                    this.pdfDocument = new PDFDocumentProxy(pdfInfo, this, loadingTask);
                    loadingTask._capability.resolve(this.pdfDocument);
                  },
                  this,
                );
                messageHandler.on(
                  'PasswordRequest',
                  function (exception) {
                    const _this11 = this;

                    this._passwordCapability = (0, _util.createPromiseCapability)();
                    if (loadingTask.onPassword) {
                      const updatePassword = function updatePassword(password) {
                        _this11._passwordCapability.resolve({ password: password });
                      };
                      try {
                        loadingTask.onPassword(updatePassword, exception.code);
                      } catch (ex) {
                        this._passwordCapability.reject(ex);
                      }
                    } else {
                      this._passwordCapability.reject(new _util.PasswordException(exception.message, exception.code));
                    }
                    return this._passwordCapability.promise;
                  },
                  this,
                );
                messageHandler.on(
                  'PasswordException',
                  function (exception) {
                    loadingTask._capability.reject(new _util.PasswordException(exception.message, exception.code));
                  },
                  this,
                );
                messageHandler.on(
                  'InvalidPDF',
                  function (exception) {
                    loadingTask._capability.reject(new _util.InvalidPDFException(exception.message));
                  },
                  this,
                );
                messageHandler.on(
                  'MissingPDF',
                  function (exception) {
                    loadingTask._capability.reject(new _util.MissingPDFException(exception.message));
                  },
                  this,
                );
                messageHandler.on(
                  'UnexpectedResponse',
                  function (exception) {
                    loadingTask._capability.reject(new _util.UnexpectedResponseException(exception.message, exception.status));
                  },
                  this,
                );
                messageHandler.on(
                  'UnknownError',
                  function (exception) {
                    loadingTask._capability.reject(new _util.UnknownErrorException(exception.message, exception.details));
                  },
                  this,
                );
                messageHandler.on(
                  'DataLoaded',
                  function (data) {
                    if (loadingTask.onProgress) {
                      loadingTask.onProgress({
                        loaded: data.length,
                        total: data.length,
                      });
                    }
                    this.downloadInfoCapability.resolve(data);
                  },
                  this,
                );
                messageHandler.on(
                  'StartRenderPage',
                  function (data) {
                    if (this.destroyed) {
                      return;
                    }
                    const page = this.pageCache[data.pageIndex];
                    page._stats.timeEnd('Page Request');
                    page._startRenderPage(data.transparency, data.intent);
                  },
                  this,
                );
                messageHandler.on(
                  'RenderPageChunk',
                  function (data) {
                    if (this.destroyed) {
                      return;
                    }
                    const page = this.pageCache[data.pageIndex];
                    page._renderPageChunk(data.operatorList, data.intent);
                  },
                  this,
                );
                messageHandler.on(
                  'commonobj',
                  function (data) {
                    const _this12 = this;

                    if (this.destroyed) {
                      return;
                    }

                    const _data = _slicedToArray(data, 3),
                      id = _data[0],
                      type = _data[1],
                      exportedData = _data[2];

                    if (this.commonObjs.hasData(id)) {
                      return;
                    }
                    switch (type) {
                      case 'Font':
                        var params = this._params;
                        if ('error' in exportedData) {
                          const exportedError = exportedData.error;
                          (0, _util.warn)('Error during font loading: ' + exportedError);
                          this.commonObjs.resolve(id, exportedError);
                          break;
                        }
                        var fontRegistry = null;
                        if (params.pdfBug && _global_scope2.default.FontInspector && _global_scope2.default.FontInspector.enabled) {
                          fontRegistry = {
                            registerFont: function registerFont(font, url) {
                              _global_scope2.default['FontInspector'].fontAdded(font, url);
                            },
                          };
                        }
                        var font = new _font_loader.FontFaceObject(exportedData, {
                          isEvalSupported: params.isEvalSupported,
                          disableFontFace: params.disableFontFace,
                          ignoreErrors: params.ignoreErrors,
                          onUnsupportedFeature: this._onUnsupportedFeature.bind(this),
                          fontRegistry: fontRegistry,
                        });
                        var fontReady = function fontReady(fontObjs) {
                          _this12.commonObjs.resolve(id, font);
                        };
                        this.fontLoader.bind([font], fontReady);
                        break;
                      case 'FontPath':
                        this.commonObjs.resolve(id, exportedData);
                        break;
                      default:
                        throw new Error('Got unknown common object type ' + type);
                    }
                  },
                  this,
                );
                messageHandler.on(
                  'obj',
                  function (data) {
                    if (this.destroyed) {
                      return;
                    }

                    const _data2 = _slicedToArray(data, 4),
                      id = _data2[0],
                      pageIndex = _data2[1],
                      type = _data2[2],
                      imageData = _data2[3];

                    const pageProxy = this.pageCache[pageIndex];
                    if (pageProxy.objs.hasData(id)) {
                      return;
                    }
                    switch (type) {
                      case 'JpegStream':
                        return new Promise(function (resolve, reject) {
                          const img = new Image();
                          img.onload = function () {
                            resolve(img);
                          };
                          img.onerror = function () {
                            reject(new Error('Error during JPEG image loading'));
                          };
                          img.src = imageData;
                        }).then(function (img) {
                          pageProxy.objs.resolve(id, img);
                        });
                      case 'Image':
                        pageProxy.objs.resolve(id, imageData);
                        var MAX_IMAGE_SIZE_TO_STORE = 8000000;
                        if (imageData && 'data' in imageData && imageData.data.length > MAX_IMAGE_SIZE_TO_STORE) {
                          pageProxy.cleanupAfterRender = true;
                        }
                        break;
                      default:
                        throw new Error('Got unknown object type ' + type);
                    }
                  },
                  this,
                );
                messageHandler.on(
                  'DocProgress',
                  function (data) {
                    if (this.destroyed) {
                      return;
                    }
                    if (loadingTask.onProgress) {
                      loadingTask.onProgress({
                        loaded: data.loaded,
                        total: data.total,
                      });
                    }
                  },
                  this,
                );
                messageHandler.on(
                  'PageError',
                  function (data) {
                    if (this.destroyed) {
                      return;
                    }
                    const page = this.pageCache[data.pageNum - 1];
                    const intentState = page.intentStates[data.intent];
                    if (intentState.displayReadyCapability) {
                      intentState.displayReadyCapability.reject(data.error);
                    } else {
                      throw new Error(data.error);
                    }
                    if (intentState.operatorList) {
                      intentState.operatorList.lastChunk = true;
                      for (let i = 0; i < intentState.renderTasks.length; i++) {
                        intentState.renderTasks[i].operatorListChanged();
                      }
                    }
                  },
                  this,
                );
                messageHandler.on('UnsupportedFeature', this._onUnsupportedFeature, this);
                messageHandler.on(
                  'JpegDecode',
                  function (data) {
                    if (this.destroyed) {
                      return Promise.reject(new Error('Worker was destroyed'));
                    }
                    if (typeof document === 'undefined') {
                      return Promise.reject(new Error('"document" is not defined.'));
                    }

                    const _data3 = _slicedToArray(data, 2),
                      imageUrl = _data3[0],
                      components = _data3[1];

                    if (components !== 3 && components !== 1) {
                      return Promise.reject(new Error('Only 3 components or 1 component can be returned'));
                    }
                    return new Promise(function (resolve, reject) {
                      const img = new Image();
                      img.onload = function () {
                        const width = img.width;
                        const height = img.height;
                        const size = width * height;
                        const rgbaLength = size * 4;
                        const buf = new Uint8ClampedArray(size * components);
                        const tmpCanvas = document.createElement('canvas');
                        tmpCanvas.width = width;
                        tmpCanvas.height = height;
                        const tmpCtx = tmpCanvas.getContext('2d');
                        tmpCtx.drawImage(img, 0, 0);
                        const data = tmpCtx.getImageData(0, 0, width, height).data;
                        if (components === 3) {
                          for (let i = 0, j = 0; i < rgbaLength; i += 4, j += 3) {
                            buf[j] = data[i];
                            buf[j + 1] = data[i + 1];
                            buf[j + 2] = data[i + 2];
                          }
                        } else if (components === 1) {
                          for (let _i = 0, _j = 0; _i < rgbaLength; _i += 4, _j++) {
                            buf[_j] = data[_i];
                          }
                        }
                        resolve({
                          data: buf,
                          width: width,
                          height: height,
                        });
                      };
                      img.onerror = function () {
                        reject(new Error('JpegDecode failed to load image'));
                      };
                      img.src = imageUrl;
                    });
                  },
                  this,
                );
                messageHandler.on(
                  'FetchBuiltInCMap',
                  function (data) {
                    if (this.destroyed) {
                      return Promise.reject(new Error('Worker was destroyed'));
                    }
                    return this.CMapReaderFactory.fetch({ name: data.name });
                  },
                  this,
                );
              },
            },
            {
              key: '_onUnsupportedFeature',
              value: function _onUnsupportedFeature(_ref6) {
                const featureId = _ref6.featureId;

                if (this.destroyed) {
                  return;
                }
                if (this.loadingTask.onUnsupportedFeature) {
                  this.loadingTask.onUnsupportedFeature(featureId);
                }
              },
            },
            {
              key: 'getData',
              value: function getData() {
                return this.messageHandler.sendWithPromise('GetData', null);
              },
            },
            {
              key: 'getPage',
              value: function getPage(pageNumber) {
                const _this13 = this;

                if (!Number.isInteger(pageNumber) || pageNumber <= 0 || pageNumber > this.numPages) {
                  return Promise.reject(new Error('Invalid page request'));
                }
                const pageIndex = pageNumber - 1;
                if (pageIndex in this.pagePromises) {
                  return this.pagePromises[pageIndex];
                }
                const promise = this.messageHandler.sendWithPromise('GetPage', { pageIndex: pageIndex }).then(function (pageInfo) {
                  if (_this13.destroyed) {
                    throw new Error('Transport destroyed');
                  }
                  const page = new PDFPageProxy(pageIndex, pageInfo, _this13, _this13._params.pdfBug);
                  _this13.pageCache[pageIndex] = page;
                  return page;
                });
                this.pagePromises[pageIndex] = promise;
                return promise;
              },
            },
            {
              key: 'getPageIndex',
              value: function getPageIndex(ref) {
                return this.messageHandler.sendWithPromise('GetPageIndex', { ref: ref }).catch(function (reason) {
                  return Promise.reject(new Error(reason));
                });
              },
            },
            {
              key: 'getAnnotations',
              value: function getAnnotations(pageIndex, intent) {
                return this.messageHandler.sendWithPromise('GetAnnotations', {
                  pageIndex: pageIndex,
                  intent: intent,
                });
              },
            },
            {
              key: 'getDestinations',
              value: function getDestinations() {
                return this.messageHandler.sendWithPromise('GetDestinations', null);
              },
            },
            {
              key: 'getDestination',
              value: function getDestination(id) {
                if (typeof id !== 'string') {
                  return Promise.reject(new Error('Invalid destination request.'));
                }
                return this.messageHandler.sendWithPromise('GetDestination', { id: id });
              },
            },
            {
              key: 'getPageLabels',
              value: function getPageLabels() {
                return this.messageHandler.sendWithPromise('GetPageLabels', null);
              },
            },
            {
              key: 'getPageMode',
              value: function getPageMode() {
                return this.messageHandler.sendWithPromise('GetPageMode', null);
              },
            },
            {
              key: 'getAttachments',
              value: function getAttachments() {
                return this.messageHandler.sendWithPromise('GetAttachments', null);
              },
            },
            {
              key: 'getJavaScript',
              value: function getJavaScript() {
                return this.messageHandler.sendWithPromise('GetJavaScript', null);
              },
            },
            {
              key: 'getOutline',
              value: function getOutline() {
                return this.messageHandler.sendWithPromise('GetOutline', null);
              },
            },
            {
              key: 'getPermissions',
              value: function getPermissions() {
                return this.messageHandler.sendWithPromise('GetPermissions', null);
              },
            },
            {
              key: 'getMetadata',
              value: function getMetadata() {
                const _this14 = this;

                return this.messageHandler.sendWithPromise('GetMetadata', null).then(function (results) {
                  return {
                    info: results[0],
                    metadata: results[1] ? new _metadata.Metadata(results[1]) : null,
                    contentDispositionFilename: _this14._fullReader ? _this14._fullReader.filename : null,
                  };
                });
              },
            },
            {
              key: 'getStats',
              value: function getStats() {
                return this.messageHandler.sendWithPromise('GetStats', null);
              },
            },
            {
              key: 'startCleanup',
              value: function startCleanup() {
                const _this15 = this;

                this.messageHandler.sendWithPromise('Cleanup', null).then(function () {
                  for (let i = 0, ii = _this15.pageCache.length; i < ii; i++) {
                    const page = _this15.pageCache[i];
                    if (page) {
                      page.cleanup();
                    }
                  }
                  _this15.commonObjs.clear();
                  _this15.fontLoader.clear();
                });
              },
            },
            {
              key: 'loadingParams',
              get: function get() {
                const params = this._params;
                return (0, _util.shadow)(this, 'loadingParams', {
                  disableAutoFetch: params.disableAutoFetch,
                  disableCreateObjectURL: params.disableCreateObjectURL,
                  disableFontFace: params.disableFontFace,
                  nativeImageDecoderSupport: params.nativeImageDecoderSupport,
                });
              },
            },
          ]);

          return WorkerTransport;
        })();

        var PDFObjects = (function PDFObjectsClosure() {
          function PDFObjects() {
            this.objs = Object.create(null);
          }
          PDFObjects.prototype = {
            ensureObj: function PDFObjects_ensureObj(objId) {
              if (this.objs[objId]) {
                return this.objs[objId];
              }
              const obj = {
                capability: (0, _util.createPromiseCapability)(),
                data: null,
                resolved: false,
              };
              this.objs[objId] = obj;
              return obj;
            },
            get: function PDFObjects_get(objId, callback) {
              if (callback) {
                this.ensureObj(objId).capability.promise.then(callback);
                return null;
              }
              const obj = this.objs[objId];
              if (!obj || !obj.resolved) {
                throw new Error("Requesting object that isn't resolved yet " + objId);
              }
              return obj.data;
            },
            resolve: function PDFObjects_resolve(objId, data) {
              const obj = this.ensureObj(objId);
              obj.resolved = true;
              obj.data = data;
              obj.capability.resolve(data);
            },
            isResolved: function PDFObjects_isResolved(objId) {
              const objs = this.objs;
              if (!objs[objId]) {
                return false;
              }
              return objs[objId].resolved;
            },
            hasData: function PDFObjects_hasData(objId) {
              return this.isResolved(objId);
            },
            getData: function PDFObjects_getData(objId) {
              const objs = this.objs;
              if (!objs[objId] || !objs[objId].resolved) {
                return null;
              }
              return objs[objId].data;
            },
            clear: function PDFObjects_clear() {
              this.objs = Object.create(null);
            },
          };
          return PDFObjects;
        })();
        const RenderTask = (function RenderTaskClosure() {
          function RenderTask(internalRenderTask) {
            this._internalRenderTask = internalRenderTask;
            this.onContinue = null;
          }
          RenderTask.prototype = {
            get promise() {
              return this._internalRenderTask.capability.promise;
            },
            cancel: function RenderTask_cancel() {
              this._internalRenderTask.cancel();
            },
            then: function RenderTask_then(onFulfilled, onRejected) {
              return this.promise.then.apply(this.promise, arguments);
            },
          };
          return RenderTask;
        })();
        var InternalRenderTask = (function InternalRenderTaskClosure() {
          const canvasInRendering = new WeakMap();
          function InternalRenderTask(callback, params, objs, commonObjs, operatorList, pageNumber, canvasFactory, webGLContext) {
            const pdfBug = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : false;

            this.callback = callback;
            this.params = params;
            this.objs = objs;
            this.commonObjs = commonObjs;
            this.operatorListIdx = null;
            this.operatorList = operatorList;
            this.pageNumber = pageNumber;
            this.canvasFactory = canvasFactory;
            this.webGLContext = webGLContext;
            this._pdfBug = pdfBug;
            this.running = false;
            this.graphicsReadyCallback = null;
            this.graphicsReady = false;
            this.useRequestAnimationFrame = false;
            this.cancelled = false;
            this.capability = (0, _util.createPromiseCapability)();
            this.task = new RenderTask(this);
            this._continueBound = this._continue.bind(this);
            this._scheduleNextBound = this._scheduleNext.bind(this);
            this._nextBound = this._next.bind(this);
            this._canvas = params.canvasContext.canvas;
          }
          InternalRenderTask.prototype = {
            initializeGraphics: function initializeGraphics(transparency) {
              if (this.cancelled) {
                return;
              }
              if (this._canvas) {
                if (canvasInRendering.has(this._canvas)) {
                  throw new Error(
                    'Cannot use the same canvas during multiple render() operations. ' +
                      'Use different canvas or ensure previous operations were ' +
                      'cancelled or completed.',
                  );
                }
                canvasInRendering.set(this._canvas, this);
              }
              if (this._pdfBug && _global_scope2.default.StepperManager && _global_scope2.default.StepperManager.enabled) {
                this.stepper = _global_scope2.default.StepperManager.create(this.pageNumber - 1);
                this.stepper.init(this.operatorList);
                this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint();
              }
              const params = this.params;
              this.gfx = new _canvas.CanvasGraphics(
                params.canvasContext,
                this.commonObjs,
                this.objs,
                this.canvasFactory,
                this.webGLContext,
                params.imageLayer,
              );
              this.gfx.beginDrawing({
                transform: params.transform,
                viewport: params.viewport,
                transparency: transparency,
                background: params.background,
              });
              this.operatorListIdx = 0;
              this.graphicsReady = true;
              if (this.graphicsReadyCallback) {
                this.graphicsReadyCallback();
              }
            },

            cancel: function InternalRenderTask_cancel() {
              this.running = false;
              this.cancelled = true;
              if (this._canvas) {
                canvasInRendering.delete(this._canvas);
              }
              this.callback(new _dom_utils.RenderingCancelledException('Rendering cancelled, page ' + this.pageNumber, 'canvas'));
            },
            operatorListChanged: function InternalRenderTask_operatorListChanged() {
              if (!this.graphicsReady) {
                if (!this.graphicsReadyCallback) {
                  this.graphicsReadyCallback = this._continueBound;
                }
                return;
              }
              if (this.stepper) {
                this.stepper.updateOperatorList(this.operatorList);
              }
              if (this.running) {
                return;
              }
              this._continue();
            },
            _continue: function InternalRenderTask__continue() {
              this.running = true;
              if (this.cancelled) {
                return;
              }
              if (this.task.onContinue) {
                this.task.onContinue(this._scheduleNextBound);
              } else {
                this._scheduleNext();
              }
            },
            _scheduleNext: function InternalRenderTask__scheduleNext() {
              const _this16 = this;

              if (this.useRequestAnimationFrame && typeof window !== 'undefined') {
                window.requestAnimationFrame(function () {
                  _this16._nextBound().catch(_this16.callback);
                });
              } else {
                Promise.resolve().then(this._nextBound).catch(this.callback);
              }
            },
            _next: function InternalRenderTask__next() {
              const _this17 = this;

              return new Promise(function () {
                if (_this17.cancelled) {
                  return;
                }
                _this17.operatorListIdx = _this17.gfx.executeOperatorList(
                  _this17.operatorList,
                  _this17.operatorListIdx,
                  _this17._continueBound,
                  _this17.stepper,
                );
                if (_this17.operatorListIdx === _this17.operatorList.argsArray.length) {
                  _this17.running = false;
                  if (_this17.operatorList.lastChunk) {
                    _this17.gfx.endDrawing();
                    if (_this17._canvas) {
                      canvasInRendering.delete(_this17._canvas);
                    }
                    _this17.callback();
                  }
                }
              });
            },
          };
          return InternalRenderTask;
        })();
        let version, build;
        {
          exports.version = version = '2.0.943';
          exports.build = build = 'dc98bf76';
        }
        exports.getDocument = getDocument;
        exports.LoopbackPort = LoopbackPort;
        exports.PDFDataRangeTransport = PDFDataRangeTransport;
        exports.PDFWorker = PDFWorker;
        exports.PDFDocumentProxy = PDFDocumentProxy;
        exports.PDFPageProxy = PDFPageProxy;
        exports.setPDFNetworkStreamFactory = setPDFNetworkStreamFactory;
        exports.version = version;
        exports.build = build;

        /***/
      },
      /* 130 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.loadScript = exports.DummyStatTimer = exports.StatTimer = exports.DOMSVGFactory = exports.DOMCMapReaderFactory = exports.DOMCanvasFactory = exports.DEFAULT_LINK_REL = exports.LinkTarget = exports.getFilenameFromUrl = exports.addLinkAttributes = exports.RenderingCancelledException = exports.PageViewport = undefined;

        const _createClass = (function () {
          function defineProperties(target, props) {
            for (let i = 0; i < props.length; i++) {
              const descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) {
                descriptor.writable = true;
              }
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function (Constructor, protoProps, staticProps) {
            if (protoProps) {
              defineProperties(Constructor.prototype, protoProps);
            }
            if (staticProps) {
              defineProperties(Constructor, staticProps);
            }
            return Constructor;
          };
        })();

        const _util = __w_pdfjs_require__(1);

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        const DEFAULT_LINK_REL = 'noopener noreferrer nofollow';
        const SVG_NS = 'http://www.w3.org/2000/svg';

        const DOMCanvasFactory = (function () {
          function DOMCanvasFactory() {
            _classCallCheck(this, DOMCanvasFactory);
          }

          _createClass(DOMCanvasFactory, [
            {
              key: 'create',
              value: function create(width, height) {
                if (width <= 0 || height <= 0) {
                  throw new Error('invalid canvas size');
                }
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                canvas.width = width;
                canvas.height = height;
                return {
                  canvas: canvas,
                  context: context,
                };
              },
            },
            {
              key: 'reset',
              value: function reset(canvasAndContext, width, height) {
                if (!canvasAndContext.canvas) {
                  throw new Error('canvas is not specified');
                }
                if (width <= 0 || height <= 0) {
                  throw new Error('invalid canvas size');
                }
                canvasAndContext.canvas.width = width;
                canvasAndContext.canvas.height = height;
              },
            },
            {
              key: 'destroy',
              value: function destroy(canvasAndContext) {
                if (!canvasAndContext.canvas) {
                  throw new Error('canvas is not specified');
                }
                canvasAndContext.canvas.width = 0;
                canvasAndContext.canvas.height = 0;
                canvasAndContext.canvas = null;
                canvasAndContext.context = null;
              },
            },
          ]);

          return DOMCanvasFactory;
        })();

        const DOMCMapReaderFactory = (function () {
          function DOMCMapReaderFactory(_ref) {
            const _ref$baseUrl = _ref.baseUrl,
              baseUrl = _ref$baseUrl === undefined ? null : _ref$baseUrl,
              _ref$isCompressed = _ref.isCompressed,
              isCompressed = _ref$isCompressed === undefined ? false : _ref$isCompressed;

            _classCallCheck(this, DOMCMapReaderFactory);

            this.baseUrl = baseUrl;
            this.isCompressed = isCompressed;
          }

          _createClass(DOMCMapReaderFactory, [
            {
              key: 'fetch',
              value: function fetch(_ref2) {
                const _this = this;

                const name = _ref2.name;

                if (!this.baseUrl) {
                  return Promise.reject(
                    new Error(
                      'The CMap "baseUrl" parameter must be specified, ensure that ' +
                        'the "cMapUrl" and "cMapPacked" API parameters are provided.',
                    ),
                  );
                }
                if (!name) {
                  return Promise.reject(new Error('CMap name must be specified.'));
                }
                return new Promise(function (resolve, reject) {
                  const url = _this.baseUrl + name + (_this.isCompressed ? '.bcmap' : '');
                  const request = new XMLHttpRequest();
                  request.open('GET', url, true);
                  if (_this.isCompressed) {
                    request.responseType = 'arraybuffer';
                  }
                  request.onreadystatechange = function () {
                    if (request.readyState !== XMLHttpRequest.DONE) {
                      return;
                    }
                    if (request.status === 200 || request.status === 0) {
                      let data = void 0;
                      if (_this.isCompressed && request.response) {
                        data = new Uint8Array(request.response);
                      } else if (!_this.isCompressed && request.responseText) {
                        data = (0, _util.stringToBytes)(request.responseText);
                      }
                      if (data) {
                        resolve({
                          cMapData: data,
                          compressionType: _this.isCompressed ? _util.CMapCompressionType.BINARY : _util.CMapCompressionType.NONE,
                        });
                        return;
                      }
                    }
                    reject(new Error('Unable to load ' + (_this.isCompressed ? 'binary ' : '') + 'CMap at: ' + url));
                  };
                  request.send(null);
                });
              },
            },
          ]);

          return DOMCMapReaderFactory;
        })();

        const DOMSVGFactory = (function () {
          function DOMSVGFactory() {
            _classCallCheck(this, DOMSVGFactory);
          }

          _createClass(DOMSVGFactory, [
            {
              key: 'create',
              value: function create(width, height) {
                (0, _util.assert)(width > 0 && height > 0, 'Invalid SVG dimensions');
                const svg = document.createElementNS(SVG_NS, 'svg:svg');
                svg.setAttribute('version', '1.1');
                svg.setAttribute('width', width + 'px');
                svg.setAttribute('height', height + 'px');
                svg.setAttribute('preserveAspectRatio', 'none');
                svg.setAttribute('viewBox', '0 0 ' + width + ' ' + height);
                return svg;
              },
            },
            {
              key: 'createElement',
              value: function createElement(type) {
                (0, _util.assert)(typeof type === 'string', 'Invalid SVG element type');
                return document.createElementNS(SVG_NS, type);
              },
            },
          ]);

          return DOMSVGFactory;
        })();

        const PageViewport = (function () {
          function PageViewport(_ref3) {
            let viewBox = _ref3.viewBox,
              scale = _ref3.scale,
              rotation = _ref3.rotation,
              _ref3$offsetX = _ref3.offsetX,
              offsetX = _ref3$offsetX === undefined ? 0 : _ref3$offsetX,
              _ref3$offsetY = _ref3.offsetY,
              offsetY = _ref3$offsetY === undefined ? 0 : _ref3$offsetY,
              _ref3$dontFlip = _ref3.dontFlip,
              dontFlip = _ref3$dontFlip === undefined ? false : _ref3$dontFlip;

            _classCallCheck(this, PageViewport);

            this.viewBox = viewBox;
            this.scale = scale;
            this.rotation = rotation;
            this.offsetX = offsetX;
            this.offsetY = offsetY;
            const centerX = (viewBox[2] + viewBox[0]) / 2;
            const centerY = (viewBox[3] + viewBox[1]) / 2;
            let rotateA = void 0,
              rotateB = void 0,
              rotateC = void 0,
              rotateD = void 0;
            rotation = rotation % 360;
            rotation = rotation < 0 ? rotation + 360 : rotation;
            switch (rotation) {
              case 180:
                rotateA = -1;
                rotateB = 0;
                rotateC = 0;
                rotateD = 1;
                break;
              case 90:
                rotateA = 0;
                rotateB = 1;
                rotateC = 1;
                rotateD = 0;
                break;
              case 270:
                rotateA = 0;
                rotateB = -1;
                rotateC = -1;
                rotateD = 0;
                break;
              default:
                rotateA = 1;
                rotateB = 0;
                rotateC = 0;
                rotateD = -1;
                break;
            }
            if (dontFlip) {
              rotateC = -rotateC;
              rotateD = -rotateD;
            }
            let offsetCanvasX = void 0,
              offsetCanvasY = void 0;
            let width = void 0,
              height = void 0;
            if (rotateA === 0) {
              offsetCanvasX = Math.abs(centerY - viewBox[1]) * scale + offsetX;
              offsetCanvasY = Math.abs(centerX - viewBox[0]) * scale + offsetY;
              width = Math.abs(viewBox[3] - viewBox[1]) * scale;
              height = Math.abs(viewBox[2] - viewBox[0]) * scale;
            } else {
              offsetCanvasX = Math.abs(centerX - viewBox[0]) * scale + offsetX;
              offsetCanvasY = Math.abs(centerY - viewBox[1]) * scale + offsetY;
              width = Math.abs(viewBox[2] - viewBox[0]) * scale;
              height = Math.abs(viewBox[3] - viewBox[1]) * scale;
            }
            this.transform = [
              rotateA * scale,
              rotateB * scale,
              rotateC * scale,
              rotateD * scale,
              offsetCanvasX - rotateA * scale * centerX - rotateC * scale * centerY,
              offsetCanvasY - rotateB * scale * centerX - rotateD * scale * centerY,
            ];
            this.width = width;
            this.height = height;
          }

          _createClass(PageViewport, [
            {
              key: 'clone',
              value: function clone() {
                const _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                  _ref4$scale = _ref4.scale,
                  scale = _ref4$scale === undefined ? this.scale : _ref4$scale,
                  _ref4$rotation = _ref4.rotation,
                  rotation = _ref4$rotation === undefined ? this.rotation : _ref4$rotation,
                  _ref4$dontFlip = _ref4.dontFlip,
                  dontFlip = _ref4$dontFlip === undefined ? false : _ref4$dontFlip;

                return new PageViewport({
                  viewBox: this.viewBox.slice(),
                  scale: scale,
                  rotation: rotation,
                  offsetX: this.offsetX,
                  offsetY: this.offsetY,
                  dontFlip: dontFlip,
                });
              },
            },
            {
              key: 'convertToViewportPoint',
              value: function convertToViewportPoint(x, y) {
                return _util.Util.applyTransform([x, y], this.transform);
              },
            },
            {
              key: 'convertToViewportRectangle',
              value: function convertToViewportRectangle(rect) {
                const tl = _util.Util.applyTransform([rect[0], rect[1]], this.transform);
                const br = _util.Util.applyTransform([rect[2], rect[3]], this.transform);
                return [tl[0], tl[1], br[0], br[1]];
              },
            },
            {
              key: 'convertToPdfPoint',
              value: function convertToPdfPoint(x, y) {
                return _util.Util.applyInverseTransform([x, y], this.transform);
              },
            },
          ]);

          return PageViewport;
        })();

        const RenderingCancelledException = (function RenderingCancelledException() {
          function RenderingCancelledException(msg, type) {
            this.message = msg;
            this.type = type;
          }
          RenderingCancelledException.prototype = new Error();
          RenderingCancelledException.prototype.name = 'RenderingCancelledException';
          RenderingCancelledException.constructor = RenderingCancelledException;
          return RenderingCancelledException;
        })();
        const LinkTarget = {
          NONE: 0,
          SELF: 1,
          BLANK: 2,
          PARENT: 3,
          TOP: 4,
        };
        const LinkTargetStringMap = ['', '_self', '_blank', '_parent', '_top'];
        function addLinkAttributes(link) {
          const _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            url = _ref5.url,
            target = _ref5.target,
            rel = _ref5.rel;

          link.href = link.title = url ? (0, _util.removeNullCharacters)(url) : '';
          if (url) {
            const LinkTargetValues = Object.values(LinkTarget);
            const targetIndex = LinkTargetValues.includes(target) ? target : LinkTarget.NONE;
            link.target = LinkTargetStringMap[targetIndex];
            link.rel = typeof rel === 'string' ? rel : DEFAULT_LINK_REL;
          }
        }
        function getFilenameFromUrl(url) {
          const anchor = url.indexOf('#');
          const query = url.indexOf('?');
          const end = Math.min(anchor > 0 ? anchor : url.length, query > 0 ? query : url.length);
          return url.substring(url.lastIndexOf('/', end) + 1, end);
        }

        const StatTimer = (function () {
          function StatTimer() {
            const enable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            _classCallCheck(this, StatTimer);

            this.enabled = !!enable;
            this.started = Object.create(null);
            this.times = [];
          }

          _createClass(StatTimer, [
            {
              key: 'time',
              value: function time(name) {
                if (!this.enabled) {
                  return;
                }
                if (name in this.started) {
                  (0, _util.warn)('Timer is already running for ' + name);
                }
                this.started[name] = Date.now();
              },
            },
            {
              key: 'timeEnd',
              value: function timeEnd(name) {
                if (!this.enabled) {
                  return;
                }
                if (!(name in this.started)) {
                  (0, _util.warn)('Timer has not been started for ' + name);
                }
                this.times.push({
                  name: name,
                  start: this.started[name],
                  end: Date.now(),
                });
                delete this.started[name];
              },
            },
            {
              key: 'toString',
              value: function toString() {
                const times = this.times;
                let out = '',
                  longest = 0;
                for (let i = 0, ii = times.length; i < ii; ++i) {
                  const name = times[i]['name'];
                  if (name.length > longest) {
                    longest = name.length;
                  }
                }
                for (let _i = 0, _ii = times.length; _i < _ii; ++_i) {
                  const span = times[_i];
                  const duration = span.end - span.start;
                  out += span['name'].padEnd(longest) + ' ' + duration + 'ms\n';
                }
                return out;
              },
            },
          ]);

          return StatTimer;
        })();

        const DummyStatTimer = (function () {
          function DummyStatTimer() {
            _classCallCheck(this, DummyStatTimer);

            (0, _util.unreachable)('Cannot initialize DummyStatTimer.');
          }

          _createClass(DummyStatTimer, null, [
            {
              key: 'time',
              value: function time(name) {},
            },
            {
              key: 'timeEnd',
              value: function timeEnd(name) {},
            },
            {
              key: 'toString',
              value: function toString() {
                return '';
              },
            },
          ]);

          return DummyStatTimer;
        })();

        function loadScript(src) {
          return new Promise(function (resolve, reject) {
            const script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            script.onerror = function () {
              reject(new Error('Cannot load script at: ' + script.src));
            };
            (document.head || document.documentElement).appendChild(script);
          });
        }
        exports.PageViewport = PageViewport;
        exports.RenderingCancelledException = RenderingCancelledException;
        exports.addLinkAttributes = addLinkAttributes;
        exports.getFilenameFromUrl = getFilenameFromUrl;
        exports.LinkTarget = LinkTarget;
        exports.DEFAULT_LINK_REL = DEFAULT_LINK_REL;
        exports.DOMCanvasFactory = DOMCanvasFactory;
        exports.DOMCMapReaderFactory = DOMCMapReaderFactory;
        exports.DOMSVGFactory = DOMSVGFactory;
        exports.StatTimer = StatTimer;
        exports.DummyStatTimer = DummyStatTimer;
        exports.loadScript = loadScript;

        /***/
      },
      /* 131 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.FontLoader = exports.FontFaceObject = undefined;

        const _createClass = (function () {
          function defineProperties(target, props) {
            for (let i = 0; i < props.length; i++) {
              const descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) {
                descriptor.writable = true;
              }
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function (Constructor, protoProps, staticProps) {
            if (protoProps) {
              defineProperties(Constructor.prototype, protoProps);
            }
            if (staticProps) {
              defineProperties(Constructor, staticProps);
            }
            return Constructor;
          };
        })();

        const _util = __w_pdfjs_require__(1);

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: { value: subClass, enumerable: false, writable: true, configurable: true },
          });
          if (superClass) {
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : (subClass.__proto__ = superClass);
          }
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        const BaseFontLoader = (function () {
          function BaseFontLoader(docId) {
            _classCallCheck(this, BaseFontLoader);

            if (this.constructor === BaseFontLoader) {
              (0, _util.unreachable)('Cannot initialize BaseFontLoader.');
            }
            this.docId = docId;
            this.nativeFontFaces = [];
            this.styleElement = null;
            this.loadingContext = {
              requests: [],
              nextRequestId: 0,
            };
          }

          _createClass(BaseFontLoader, [
            {
              key: 'addNativeFontFace',
              value: function addNativeFontFace(nativeFontFace) {
                this.nativeFontFaces.push(nativeFontFace);
                document.fonts.add(nativeFontFace);
              },
            },
            {
              key: 'insertRule',
              value: function insertRule(rule) {
                let styleElement = this.styleElement;
                if (!styleElement) {
                  styleElement = this.styleElement = document.createElement('style');
                  styleElement.id = 'PDFJS_FONT_STYLE_TAG_' + this.docId;
                  document.documentElement.getElementsByTagName('head')[0].appendChild(styleElement);
                }
                const styleSheet = styleElement.sheet;
                styleSheet.insertRule(rule, styleSheet.cssRules.length);
              },
            },
            {
              key: 'clear',
              value: function clear() {
                this.nativeFontFaces.forEach(function (nativeFontFace) {
                  document.fonts.delete(nativeFontFace);
                });
                this.nativeFontFaces.length = 0;
                if (this.styleElement) {
                  this.styleElement.remove();
                  this.styleElement = null;
                }
              },
            },
            {
              key: 'bind',
              value: function bind(fonts, callback) {
                const rules = [];
                const fontsToLoad = [];
                const fontLoadPromises = [];
                const getNativeFontPromise = function getNativeFontPromise(nativeFontFace) {
                  return nativeFontFace.loaded.catch(function (reason) {
                    (0, _util.warn)('Failed to load font "' + nativeFontFace.family + '": ' + reason);
                  });
                };
                let _iteratorNormalCompletion = true;
                let _didIteratorError = false;
                let _iteratorError = undefined;

                try {
                  for (
                    var _iterator = fonts[Symbol.iterator](), _step;
                    !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                    _iteratorNormalCompletion = true
                  ) {
                    const font = _step.value;

                    if (font.attached || font.missingFile) {
                      continue;
                    }
                    font.attached = true;
                    if (this.isFontLoadingAPISupported) {
                      const nativeFontFace = font.createNativeFontFace();
                      if (nativeFontFace) {
                        this.addNativeFontFace(nativeFontFace);
                        fontLoadPromises.push(getNativeFontPromise(nativeFontFace));
                      }
                    } else {
                      const rule = font.createFontFaceRule();
                      if (rule) {
                        this.insertRule(rule);
                        rules.push(rule);
                        fontsToLoad.push(font);
                      }
                    }
                  }
                } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                      _iterator.return();
                    }
                  } finally {
                    if (_didIteratorError) {
                      throw _iteratorError;
                    }
                  }
                }

                const request = this._queueLoadingCallback(callback);
                if (this.isFontLoadingAPISupported) {
                  Promise.all(fontLoadPromises).then(request.complete);
                } else if (rules.length > 0 && !this.isSyncFontLoadingSupported) {
                  this._prepareFontLoadEvent(rules, fontsToLoad, request);
                } else {
                  request.complete();
                }
              },
            },
            {
              key: '_queueLoadingCallback',
              value: function _queueLoadingCallback(callback) {
                function completeRequest() {
                  (0, _util.assert)(!request.done, 'completeRequest() cannot be called twice.');
                  request.done = true;
                  while (context.requests.length > 0 && context.requests[0].done) {
                    const otherRequest = context.requests.shift();
                    setTimeout(otherRequest.callback, 0);
                  }
                }
                var context = this.loadingContext;
                var request = {
                  id: 'pdfjs-font-loading-' + context.nextRequestId++,
                  done: false,
                  complete: completeRequest,
                  callback: callback,
                };
                context.requests.push(request);
                return request;
              },
            },
            {
              key: '_prepareFontLoadEvent',
              value: function _prepareFontLoadEvent(rules, fontsToLoad, request) {
                (0, _util.unreachable)('Abstract method `_prepareFontLoadEvent`.');
              },
            },
            {
              key: 'isFontLoadingAPISupported',
              get: function get() {
                (0, _util.unreachable)('Abstract method `isFontLoadingAPISupported`.');
              },
            },
            {
              key: 'isSyncFontLoadingSupported',
              get: function get() {
                (0, _util.unreachable)('Abstract method `isSyncFontLoadingSupported`.');
              },
            },
            {
              key: '_loadTestFont',
              get: function get() {
                (0, _util.unreachable)('Abstract method `_loadTestFont`.');
              },
            },
          ]);

          return BaseFontLoader;
        })();

        let FontLoader = void 0;
        {
          exports.FontLoader = FontLoader = (function (_BaseFontLoader) {
            _inherits(GenericFontLoader, _BaseFontLoader);

            function GenericFontLoader(docId) {
              _classCallCheck(this, GenericFontLoader);

              const _this = _possibleConstructorReturn(
                this,
                (GenericFontLoader.__proto__ || Object.getPrototypeOf(GenericFontLoader)).call(this, docId),
              );

              _this.loadTestFontId = 0;
              return _this;
            }

            _createClass(GenericFontLoader, [
              {
                key: '_prepareFontLoadEvent',
                value: function _prepareFontLoadEvent(rules, fonts, request) {
                  function int32(data, offset) {
                    return (
                      (data.charCodeAt(offset) << 24) |
                      (data.charCodeAt(offset + 1) << 16) |
                      (data.charCodeAt(offset + 2) << 8) |
                      (data.charCodeAt(offset + 3) & 0xff)
                    );
                  }
                  function spliceString(s, offset, remove, insert) {
                    const chunk1 = s.substring(0, offset);
                    const chunk2 = s.substring(offset + remove);
                    return chunk1 + insert + chunk2;
                  }
                  let i = void 0,
                    ii = void 0;
                  const canvas = document.createElement('canvas');
                  canvas.width = 1;
                  canvas.height = 1;
                  const ctx = canvas.getContext('2d');
                  let called = 0;
                  function isFontReady(name, callback) {
                    called++;
                    if (called > 30) {
                      (0, _util.warn)('Load test font never loaded.');
                      callback();
                      return;
                    }
                    ctx.font = '30px ' + name;
                    ctx.fillText('.', 0, 20);
                    const imageData = ctx.getImageData(0, 0, 1, 1);
                    if (imageData.data[3] > 0) {
                      callback();
                      return;
                    }
                    setTimeout(isFontReady.bind(null, name, callback));
                  }
                  const loadTestFontId = 'lt' + Date.now() + this.loadTestFontId++;
                  let data = this._loadTestFont;
                  const COMMENT_OFFSET = 976;
                  data = spliceString(data, COMMENT_OFFSET, loadTestFontId.length, loadTestFontId);
                  const CFF_CHECKSUM_OFFSET = 16;
                  const XXXX_VALUE = 0x58585858;
                  let checksum = int32(data, CFF_CHECKSUM_OFFSET);
                  for (i = 0, ii = loadTestFontId.length - 3; i < ii; i += 4) {
                    checksum = (checksum - XXXX_VALUE + int32(loadTestFontId, i)) | 0;
                  }
                  if (i < loadTestFontId.length) {
                    checksum = (checksum - XXXX_VALUE + int32(loadTestFontId + 'XXX', i)) | 0;
                  }
                  data = spliceString(data, CFF_CHECKSUM_OFFSET, 4, (0, _util.string32)(checksum));
                  const url = 'url(data:font/opentype;base64,' + btoa(data) + ');';
                  const rule = '@font-face {font-family:"' + loadTestFontId + '";src:' + url + '}';
                  this.insertRule(rule);
                  const names = [];
                  for (i = 0, ii = fonts.length; i < ii; i++) {
                    names.push(fonts[i].loadedName);
                  }
                  names.push(loadTestFontId);
                  const div = document.createElement('div');
                  div.setAttribute(
                    'style',
                    'visibility: hidden;' + 'width: 10px; height: 10px;' + 'position: absolute; top: 0px; left: 0px;',
                  );
                  for (i = 0, ii = names.length; i < ii; ++i) {
                    const span = document.createElement('span');
                    span.textContent = 'Hi';
                    span.style.fontFamily = names[i];
                    div.appendChild(span);
                  }
                  document.body.appendChild(div);
                  isFontReady(loadTestFontId, function () {
                    document.body.removeChild(div);
                    request.complete();
                  });
                },
              },
              {
                key: 'isFontLoadingAPISupported',
                get: function get() {
                  let supported = typeof document !== 'undefined' && !!document.fonts;
                  if (supported && typeof navigator !== 'undefined') {
                    const m = /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent);
                    if (m && m[1] < 63) {
                      supported = false;
                    }
                  }
                  return (0, _util.shadow)(this, 'isFontLoadingAPISupported', supported);
                },
              },
              {
                key: 'isSyncFontLoadingSupported',
                get: function get() {
                  let supported = false;
                  if (typeof navigator === 'undefined') {
                    supported = true;
                  } else {
                    const m = /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent);
                    if (m && m[1] >= 14) {
                      supported = true;
                    }
                  }
                  return (0, _util.shadow)(this, 'isSyncFontLoadingSupported', supported);
                },
              },
              {
                key: '_loadTestFont',
                get: function get() {
                  const getLoadTestFont = function getLoadTestFont() {
                    return atob(
                      'T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQA' +
                        'FQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAA' +
                        'ALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgA' +
                        'AAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1' +
                        'AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD' +
                        '6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACM' +
                        'AooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4D' +
                        'IP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAA' +
                        'AAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUA' +
                        'AQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgAB' +
                        'AAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABY' +
                        'AAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAA' +
                        'AC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
                        'AAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
                        'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
                        'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
                        'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
                        'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAA' +
                        'AAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQAC' +
                        'AQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3' +
                        'Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTj' +
                        'FQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==',
                    );
                  };
                  return (0, _util.shadow)(this, '_loadTestFont', getLoadTestFont());
                },
              },
            ]);

            return GenericFontLoader;
          })(BaseFontLoader);
        }
        const IsEvalSupportedCached = {
          get value() {
            return (0, _util.shadow)(this, 'value', (0, _util.isEvalSupported)());
          },
        };

        const FontFaceObject = (function () {
          function FontFaceObject(translatedData, _ref) {
            const _ref$isEvalSupported = _ref.isEvalSupported,
              isEvalSupported = _ref$isEvalSupported === undefined ? true : _ref$isEvalSupported,
              _ref$disableFontFace = _ref.disableFontFace,
              disableFontFace = _ref$disableFontFace === undefined ? false : _ref$disableFontFace,
              _ref$ignoreErrors = _ref.ignoreErrors,
              ignoreErrors = _ref$ignoreErrors === undefined ? false : _ref$ignoreErrors,
              _ref$onUnsupportedFea = _ref.onUnsupportedFeature,
              onUnsupportedFeature = _ref$onUnsupportedFea === undefined ? null : _ref$onUnsupportedFea,
              _ref$fontRegistry = _ref.fontRegistry,
              fontRegistry = _ref$fontRegistry === undefined ? null : _ref$fontRegistry;

            _classCallCheck(this, FontFaceObject);

            this.compiledGlyphs = Object.create(null);
            for (const i in translatedData) {
              this[i] = translatedData[i];
            }
            this.isEvalSupported = isEvalSupported !== false;
            this.disableFontFace = disableFontFace === true;
            this.ignoreErrors = ignoreErrors === true;
            this._onUnsupportedFeature = onUnsupportedFeature;
            this.fontRegistry = fontRegistry;
          }

          _createClass(FontFaceObject, [
            {
              key: 'createNativeFontFace',
              value: function createNativeFontFace() {
                if (!this.data || this.disableFontFace) {
                  return null;
                }
                const nativeFontFace = new FontFace(this.loadedName, this.data, {});
                if (this.fontRegistry) {
                  this.fontRegistry.registerFont(this);
                }
                return nativeFontFace;
              },
            },
            {
              key: 'createFontFaceRule',
              value: function createFontFaceRule() {
                if (!this.data || this.disableFontFace) {
                  return null;
                }
                const data = (0, _util.bytesToString)(new Uint8Array(this.data));
                const url = 'url(data:' + this.mimetype + ';base64,' + btoa(data) + ');';
                const rule = '@font-face {font-family:"' + this.loadedName + '";src:' + url + '}';
                if (this.fontRegistry) {
                  this.fontRegistry.registerFont(this, url);
                }
                return rule;
              },
            },
            {
              key: 'getPathGenerator',
              value: function getPathGenerator(objs, character) {
                if (this.compiledGlyphs[character] !== undefined) {
                  return this.compiledGlyphs[character];
                }
                let cmds = void 0,
                  current = void 0;
                try {
                  cmds = objs.get(this.loadedName + '_path_' + character);
                } catch (ex) {
                  if (!this.ignoreErrors) {
                    throw ex;
                  }
                  if (this._onUnsupportedFeature) {
                    this._onUnsupportedFeature({ featureId: _util.UNSUPPORTED_FEATURES.font });
                  }
                  (0, _util.warn)('getPathGenerator - ignoring character: "' + ex + '".');
                  return (this.compiledGlyphs[character] = function (c, size) {});
                }
                if (this.isEvalSupported && IsEvalSupportedCached.value) {
                  let args = void 0,
                    js = '';
                  for (let i = 0, ii = cmds.length; i < ii; i++) {
                    current = cmds[i];
                    if (current.args !== undefined) {
                      args = current.args.join(',');
                    } else {
                      args = '';
                    }
                    js += 'c.' + current.cmd + '(' + args + ');\n';
                  }
                  return (this.compiledGlyphs[character] = new Function('c', 'size', js));
                }
                return (this.compiledGlyphs[character] = function (c, size) {
                  for (let _i = 0, _ii = cmds.length; _i < _ii; _i++) {
                    current = cmds[_i];
                    if (current.cmd === 'scale') {
                      current.args = [size, -size];
                    }
                    c[current.cmd].apply(c, current.args);
                  }
                });
              },
            },
          ]);

          return FontFaceObject;
        })();

        exports.FontFaceObject = FontFaceObject;
        exports.FontLoader = FontLoader;

        /***/
      },
      /* 132 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const compatibilityParams = Object.create(null);
        {
          const isNodeJS = __w_pdfjs_require__(4);
          const userAgent = (typeof navigator !== 'undefined' && navigator.userAgent) || '';
          const isIE = /Trident/.test(userAgent);
          const isIOSChrome = /CriOS/.test(userAgent);
          (function checkOnBlobSupport() {
            if (isIE || isIOSChrome) {
              compatibilityParams.disableCreateObjectURL = true;
            }
          })();
          (function checkFontFaceAndImage() {
            if (isNodeJS()) {
              compatibilityParams.disableFontFace = true;
              compatibilityParams.nativeImageDecoderSupport = 'none';
            }
          })();
        }
        exports.apiCompatibilityParams = Object.freeze(compatibilityParams);

        /***/
      },
      /* 133 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.CanvasGraphics = undefined;

        const _util = __w_pdfjs_require__(1);

        const _pattern_helper = __w_pdfjs_require__(134);

        const MIN_FONT_SIZE = 16;
        const MAX_FONT_SIZE = 100;
        const MAX_GROUP_SIZE = 4096;
        const MIN_WIDTH_FACTOR = 0.65;
        const COMPILE_TYPE3_GLYPHS = true;
        const MAX_SIZE_TO_COMPILE = 1000;
        const FULL_CHUNK_HEIGHT = 16;
        var IsLittleEndianCached = {
          get value() {
            return (0, _util.shadow)(IsLittleEndianCached, 'value', (0, _util.isLittleEndian)());
          },
        };
        function addContextCurrentTransform(ctx) {
          if (!ctx.mozCurrentTransform) {
            ctx._originalSave = ctx.save;
            ctx._originalRestore = ctx.restore;
            ctx._originalRotate = ctx.rotate;
            ctx._originalScale = ctx.scale;
            ctx._originalTranslate = ctx.translate;
            ctx._originalTransform = ctx.transform;
            ctx._originalSetTransform = ctx.setTransform;
            ctx._transformMatrix = ctx._transformMatrix || [1, 0, 0, 1, 0, 0];
            ctx._transformStack = [];
            Object.defineProperty(ctx, 'mozCurrentTransform', {
              get: function getCurrentTransform() {
                return this._transformMatrix;
              },
            });
            Object.defineProperty(ctx, 'mozCurrentTransformInverse', {
              get: function getCurrentTransformInverse() {
                const m = this._transformMatrix;
                const a = m[0],
                  b = m[1],
                  c = m[2],
                  d = m[3],
                  e = m[4],
                  f = m[5];
                const ad_bc = a * d - b * c;
                const bc_ad = b * c - a * d;
                return [d / ad_bc, b / bc_ad, c / bc_ad, a / ad_bc, (d * e - c * f) / bc_ad, (b * e - a * f) / ad_bc];
              },
            });
            ctx.save = function ctxSave() {
              const old = this._transformMatrix;
              this._transformStack.push(old);
              this._transformMatrix = old.slice(0, 6);
              this._originalSave();
            };
            ctx.restore = function ctxRestore() {
              const prev = this._transformStack.pop();
              if (prev) {
                this._transformMatrix = prev;
                this._originalRestore();
              }
            };
            ctx.translate = function ctxTranslate(x, y) {
              const m = this._transformMatrix;
              m[4] = m[0] * x + m[2] * y + m[4];
              m[5] = m[1] * x + m[3] * y + m[5];
              this._originalTranslate(x, y);
            };
            ctx.scale = function ctxScale(x, y) {
              const m = this._transformMatrix;
              m[0] = m[0] * x;
              m[1] = m[1] * x;
              m[2] = m[2] * y;
              m[3] = m[3] * y;
              this._originalScale(x, y);
            };
            ctx.transform = function ctxTransform(a, b, c, d, e, f) {
              const m = this._transformMatrix;
              this._transformMatrix = [
                m[0] * a + m[2] * b,
                m[1] * a + m[3] * b,
                m[0] * c + m[2] * d,
                m[1] * c + m[3] * d,
                m[0] * e + m[2] * f + m[4],
                m[1] * e + m[3] * f + m[5],
              ];
              ctx._originalTransform(a, b, c, d, e, f);
            };
            ctx.setTransform = function ctxSetTransform(a, b, c, d, e, f) {
              this._transformMatrix = [a, b, c, d, e, f];
              ctx._originalSetTransform(a, b, c, d, e, f);
            };
            ctx.rotate = function ctxRotate(angle) {
              const cosValue = Math.cos(angle);
              const sinValue = Math.sin(angle);
              const m = this._transformMatrix;
              this._transformMatrix = [
                m[0] * cosValue + m[2] * sinValue,
                m[1] * cosValue + m[3] * sinValue,
                m[0] * -sinValue + m[2] * cosValue,
                m[1] * -sinValue + m[3] * cosValue,
                m[4],
                m[5],
              ];
              this._originalRotate(angle);
            };
          }
        }
        const CachedCanvases = (function CachedCanvasesClosure() {
          function CachedCanvases(canvasFactory) {
            this.canvasFactory = canvasFactory;
            this.cache = Object.create(null);
          }
          CachedCanvases.prototype = {
            getCanvas: function CachedCanvases_getCanvas(id, width, height, trackTransform) {
              let canvasEntry;
              if (this.cache[id] !== undefined) {
                canvasEntry = this.cache[id];
                this.canvasFactory.reset(canvasEntry, width, height);
                canvasEntry.context.setTransform(1, 0, 0, 1, 0, 0);
              } else {
                canvasEntry = this.canvasFactory.create(width, height);
                this.cache[id] = canvasEntry;
              }
              if (trackTransform) {
                addContextCurrentTransform(canvasEntry.context);
              }
              return canvasEntry;
            },
            clear: function clear() {
              for (const id in this.cache) {
                const canvasEntry = this.cache[id];
                this.canvasFactory.destroy(canvasEntry);
                delete this.cache[id];
              }
            },
          };
          return CachedCanvases;
        })();
        function compileType3Glyph(imgData) {
          const POINT_TO_PROCESS_LIMIT = 1000;
          const width = imgData.width,
            height = imgData.height;
          let i,
            j,
            j0,
            width1 = width + 1;
          const points = new Uint8Array(width1 * (height + 1));
          const POINT_TYPES = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]);
          const lineSize = (width + 7) & ~7,
            data0 = imgData.data;
          let data = new Uint8Array(lineSize * height),
            pos = 0,
            ii;
          for (i = 0, ii = data0.length; i < ii; i++) {
            let mask = 128,
              elem = data0[i];
            while (mask > 0) {
              data[pos++] = elem & mask ? 0 : 255;
              mask >>= 1;
            }
          }
          let count = 0;
          pos = 0;
          if (data[pos] !== 0) {
            points[0] = 1;
            ++count;
          }
          for (j = 1; j < width; j++) {
            if (data[pos] !== data[pos + 1]) {
              points[j] = data[pos] ? 2 : 1;
              ++count;
            }
            pos++;
          }
          if (data[pos] !== 0) {
            points[j] = 2;
            ++count;
          }
          for (i = 1; i < height; i++) {
            pos = i * lineSize;
            j0 = i * width1;
            if (data[pos - lineSize] !== data[pos]) {
              points[j0] = data[pos] ? 1 : 8;
              ++count;
            }
            let sum = (data[pos] ? 4 : 0) + (data[pos - lineSize] ? 8 : 0);
            for (j = 1; j < width; j++) {
              sum = (sum >> 2) + (data[pos + 1] ? 4 : 0) + (data[pos - lineSize + 1] ? 8 : 0);
              if (POINT_TYPES[sum]) {
                points[j0 + j] = POINT_TYPES[sum];
                ++count;
              }
              pos++;
            }
            if (data[pos - lineSize] !== data[pos]) {
              points[j0 + j] = data[pos] ? 2 : 4;
              ++count;
            }
            if (count > POINT_TO_PROCESS_LIMIT) {
              return null;
            }
          }
          pos = lineSize * (height - 1);
          j0 = i * width1;
          if (data[pos] !== 0) {
            points[j0] = 8;
            ++count;
          }
          for (j = 1; j < width; j++) {
            if (data[pos] !== data[pos + 1]) {
              points[j0 + j] = data[pos] ? 4 : 8;
              ++count;
            }
            pos++;
          }
          if (data[pos] !== 0) {
            points[j0 + j] = 4;
            ++count;
          }
          if (count > POINT_TO_PROCESS_LIMIT) {
            return null;
          }
          const steps = new Int32Array([0, width1, -1, 0, -width1, 0, 0, 0, 1]);
          const outlines = [];
          for (i = 0; count && i <= height; i++) {
            let p = i * width1;
            const end = p + width;
            while (p < end && !points[p]) {
              p++;
            }
            if (p === end) {
              continue;
            }
            const coords = [p % width1, i];
            var type = points[p],
              p0 = p,
              pp;
            do {
              const step = steps[type];
              do {
                p += step;
              } while (!points[p]);
              pp = points[p];
              if (pp !== 5 && pp !== 10) {
                type = pp;
                points[p] = 0;
              } else {
                type = pp & ((0x33 * type) >> 4);
                points[p] &= (type >> 2) | (type << 2);
              }
              coords.push(p % width1);
              coords.push((p / width1) | 0);
              --count;
            } while (p0 !== p);
            outlines.push(coords);
            --i;
          }
          const drawOutline = function drawOutline(c) {
            c.save();
            c.scale(1 / width, -1 / height);
            c.translate(0, -height);
            c.beginPath();
            for (let i = 0, ii = outlines.length; i < ii; i++) {
              const o = outlines[i];
              c.moveTo(o[0], o[1]);
              for (let j = 2, jj = o.length; j < jj; j += 2) {
                c.lineTo(o[j], o[j + 1]);
              }
            }
            c.fill();
            c.beginPath();
            c.restore();
          };
          return drawOutline;
        }
        const CanvasExtraState = (function CanvasExtraStateClosure() {
          function CanvasExtraState() {
            this.alphaIsShape = false;
            this.fontSize = 0;
            this.fontSizeScale = 1;
            this.textMatrix = _util.IDENTITY_MATRIX;
            this.textMatrixScale = 1;
            this.fontMatrix = _util.FONT_IDENTITY_MATRIX;
            this.leading = 0;
            this.x = 0;
            this.y = 0;
            this.lineX = 0;
            this.lineY = 0;
            this.charSpacing = 0;
            this.wordSpacing = 0;
            this.textHScale = 1;
            this.textRenderingMode = _util.TextRenderingMode.FILL;
            this.textRise = 0;
            this.fillColor = '#000000';
            this.strokeColor = '#000000';
            this.patternFill = false;
            this.fillAlpha = 1;
            this.strokeAlpha = 1;
            this.lineWidth = 1;
            this.activeSMask = null;
            this.resumeSMaskCtx = null;
          }
          CanvasExtraState.prototype = {
            clone: function CanvasExtraState_clone() {
              return Object.create(this);
            },
            setCurrentPoint: function CanvasExtraState_setCurrentPoint(x, y) {
              this.x = x;
              this.y = y;
            },
          };
          return CanvasExtraState;
        })();
        const CanvasGraphics = (function CanvasGraphicsClosure() {
          const EXECUTION_TIME = 15;
          const EXECUTION_STEPS = 10;
          function CanvasGraphics(canvasCtx, commonObjs, objs, canvasFactory, webGLContext, imageLayer) {
            this.ctx = canvasCtx;
            this.current = new CanvasExtraState();
            this.stateStack = [];
            this.pendingClip = null;
            this.pendingEOFill = false;
            this.res = null;
            this.xobjs = null;
            this.commonObjs = commonObjs;
            this.objs = objs;
            this.canvasFactory = canvasFactory;
            this.webGLContext = webGLContext;
            this.imageLayer = imageLayer;
            this.groupStack = [];
            this.processingType3 = null;
            this.baseTransform = null;
            this.baseTransformStack = [];
            this.groupLevel = 0;
            this.smaskStack = [];
            this.smaskCounter = 0;
            this.tempSMask = null;
            this.cachedCanvases = new CachedCanvases(this.canvasFactory);
            if (canvasCtx) {
              addContextCurrentTransform(canvasCtx);
            }
            this._cachedGetSinglePixelWidth = null;
          }
          function putBinaryImageData(ctx, imgData) {
            if (typeof ImageData !== 'undefined' && imgData instanceof ImageData) {
              ctx.putImageData(imgData, 0, 0);
              return;
            }
            const height = imgData.height,
              width = imgData.width;
            const partialChunkHeight = height % FULL_CHUNK_HEIGHT;
            const fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
            const totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;
            const chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
            let srcPos = 0,
              destPos;
            const src = imgData.data;
            const dest = chunkImgData.data;
            let i, j, thisChunkHeight, elemsInThisChunk;
            if (imgData.kind === _util.ImageKind.GRAYSCALE_1BPP) {
              const srcLength = src.byteLength;
              const dest32 = new Uint32Array(dest.buffer, 0, dest.byteLength >> 2);
              const dest32DataLength = dest32.length;
              const fullSrcDiff = (width + 7) >> 3;
              const white = 0xffffffff;
              const black = IsLittleEndianCached.value ? 0xff000000 : 0x000000ff;
              for (i = 0; i < totalChunks; i++) {
                thisChunkHeight = i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight;
                destPos = 0;
                for (j = 0; j < thisChunkHeight; j++) {
                  const srcDiff = srcLength - srcPos;
                  let k = 0;
                  const kEnd = srcDiff > fullSrcDiff ? width : srcDiff * 8 - 7;
                  const kEndUnrolled = kEnd & ~7;
                  let mask = 0;
                  let srcByte = 0;
                  for (; k < kEndUnrolled; k += 8) {
                    srcByte = src[srcPos++];
                    dest32[destPos++] = srcByte & 128 ? white : black;
                    dest32[destPos++] = srcByte & 64 ? white : black;
                    dest32[destPos++] = srcByte & 32 ? white : black;
                    dest32[destPos++] = srcByte & 16 ? white : black;
                    dest32[destPos++] = srcByte & 8 ? white : black;
                    dest32[destPos++] = srcByte & 4 ? white : black;
                    dest32[destPos++] = srcByte & 2 ? white : black;
                    dest32[destPos++] = srcByte & 1 ? white : black;
                  }
                  for (; k < kEnd; k++) {
                    if (mask === 0) {
                      srcByte = src[srcPos++];
                      mask = 128;
                    }
                    dest32[destPos++] = srcByte & mask ? white : black;
                    mask >>= 1;
                  }
                }
                while (destPos < dest32DataLength) {
                  dest32[destPos++] = 0;
                }
                ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
              }
            } else if (imgData.kind === _util.ImageKind.RGBA_32BPP) {
              j = 0;
              elemsInThisChunk = width * FULL_CHUNK_HEIGHT * 4;
              for (i = 0; i < fullChunks; i++) {
                dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
                srcPos += elemsInThisChunk;
                ctx.putImageData(chunkImgData, 0, j);
                j += FULL_CHUNK_HEIGHT;
              }
              if (i < totalChunks) {
                elemsInThisChunk = width * partialChunkHeight * 4;
                dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
                ctx.putImageData(chunkImgData, 0, j);
              }
            } else if (imgData.kind === _util.ImageKind.RGB_24BPP) {
              thisChunkHeight = FULL_CHUNK_HEIGHT;
              elemsInThisChunk = width * thisChunkHeight;
              for (i = 0; i < totalChunks; i++) {
                if (i >= fullChunks) {
                  thisChunkHeight = partialChunkHeight;
                  elemsInThisChunk = width * thisChunkHeight;
                }
                destPos = 0;
                for (j = elemsInThisChunk; j--; ) {
                  dest[destPos++] = src[srcPos++];
                  dest[destPos++] = src[srcPos++];
                  dest[destPos++] = src[srcPos++];
                  dest[destPos++] = 255;
                }
                ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
              }
            } else {
              throw new Error('bad image kind: ' + imgData.kind);
            }
          }
          function putBinaryImageMask(ctx, imgData) {
            const height = imgData.height,
              width = imgData.width;
            const partialChunkHeight = height % FULL_CHUNK_HEIGHT;
            const fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
            const totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;
            const chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
            let srcPos = 0;
            const src = imgData.data;
            const dest = chunkImgData.data;
            for (let i = 0; i < totalChunks; i++) {
              const thisChunkHeight = i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight;
              let destPos = 3;
              for (let j = 0; j < thisChunkHeight; j++) {
                let mask = 0;
                for (let k = 0; k < width; k++) {
                  if (!mask) {
                    var elem = src[srcPos++];
                    mask = 128;
                  }
                  dest[destPos] = elem & mask ? 0 : 255;
                  destPos += 4;
                  mask >>= 1;
                }
              }
              ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
            }
          }
          function copyCtxState(sourceCtx, destCtx) {
            const properties = [
              'strokeStyle',
              'fillStyle',
              'fillRule',
              'globalAlpha',
              'lineWidth',
              'lineCap',
              'lineJoin',
              'miterLimit',
              'globalCompositeOperation',
              'font',
            ];
            for (let i = 0, ii = properties.length; i < ii; i++) {
              const property = properties[i];
              if (sourceCtx[property] !== undefined) {
                destCtx[property] = sourceCtx[property];
              }
            }
            if (sourceCtx.setLineDash !== undefined) {
              destCtx.setLineDash(sourceCtx.getLineDash());
              destCtx.lineDashOffset = sourceCtx.lineDashOffset;
            }
          }
          function resetCtxToDefault(ctx) {
            ctx.strokeStyle = '#000000';
            ctx.fillStyle = '#000000';
            ctx.fillRule = 'nonzero';
            ctx.globalAlpha = 1;
            ctx.lineWidth = 1;
            ctx.lineCap = 'butt';
            ctx.lineJoin = 'miter';
            ctx.miterLimit = 10;
            ctx.globalCompositeOperation = 'source-over';
            ctx.font = '10px sans-serif';
            if (ctx.setLineDash !== undefined) {
              ctx.setLineDash([]);
              ctx.lineDashOffset = 0;
            }
          }
          function composeSMaskBackdrop(bytes, r0, g0, b0) {
            const length = bytes.length;
            for (let i = 3; i < length; i += 4) {
              const alpha = bytes[i];
              if (alpha === 0) {
                bytes[i - 3] = r0;
                bytes[i - 2] = g0;
                bytes[i - 1] = b0;
              } else if (alpha < 255) {
                const alpha_ = 255 - alpha;
                bytes[i - 3] = (bytes[i - 3] * alpha + r0 * alpha_) >> 8;
                bytes[i - 2] = (bytes[i - 2] * alpha + g0 * alpha_) >> 8;
                bytes[i - 1] = (bytes[i - 1] * alpha + b0 * alpha_) >> 8;
              }
            }
          }
          function composeSMaskAlpha(maskData, layerData, transferMap) {
            const length = maskData.length;
            const scale = 1 / 255;
            for (let i = 3; i < length; i += 4) {
              const alpha = transferMap ? transferMap[maskData[i]] : maskData[i];
              layerData[i] = (layerData[i] * alpha * scale) | 0;
            }
          }
          function composeSMaskLuminosity(maskData, layerData, transferMap) {
            const length = maskData.length;
            for (let i = 3; i < length; i += 4) {
              const y = maskData[i - 3] * 77 + maskData[i - 2] * 152 + maskData[i - 1] * 28;
              layerData[i] = transferMap ? (layerData[i] * transferMap[y >> 8]) >> 8 : (layerData[i] * y) >> 16;
            }
          }
          function genericComposeSMask(maskCtx, layerCtx, width, height, subtype, backdrop, transferMap) {
            const hasBackdrop = !!backdrop;
            const r0 = hasBackdrop ? backdrop[0] : 0;
            const g0 = hasBackdrop ? backdrop[1] : 0;
            const b0 = hasBackdrop ? backdrop[2] : 0;
            let composeFn;
            if (subtype === 'Luminosity') {
              composeFn = composeSMaskLuminosity;
            } else {
              composeFn = composeSMaskAlpha;
            }
            const PIXELS_TO_PROCESS = 1048576;
            const chunkSize = Math.min(height, Math.ceil(PIXELS_TO_PROCESS / width));
            for (let row = 0; row < height; row += chunkSize) {
              const chunkHeight = Math.min(chunkSize, height - row);
              const maskData = maskCtx.getImageData(0, row, width, chunkHeight);
              const layerData = layerCtx.getImageData(0, row, width, chunkHeight);
              if (hasBackdrop) {
                composeSMaskBackdrop(maskData.data, r0, g0, b0);
              }
              composeFn(maskData.data, layerData.data, transferMap);
              maskCtx.putImageData(layerData, 0, row);
            }
          }
          function composeSMask(ctx, smask, layerCtx, webGLContext) {
            const mask = smask.canvas;
            const maskCtx = smask.context;
            ctx.setTransform(smask.scaleX, 0, 0, smask.scaleY, smask.offsetX, smask.offsetY);
            const backdrop = smask.backdrop || null;
            if (!smask.transferMap && webGLContext.isEnabled) {
              const composed = webGLContext.composeSMask({
                layer: layerCtx.canvas,
                mask: mask,
                properties: {
                  subtype: smask.subtype,
                  backdrop: backdrop,
                },
              });
              ctx.setTransform(1, 0, 0, 1, 0, 0);
              ctx.drawImage(composed, smask.offsetX, smask.offsetY);
              return;
            }
            genericComposeSMask(maskCtx, layerCtx, mask.width, mask.height, smask.subtype, backdrop, smask.transferMap);
            ctx.drawImage(mask, 0, 0);
          }
          const LINE_CAP_STYLES = ['butt', 'round', 'square'];
          const LINE_JOIN_STYLES = ['miter', 'round', 'bevel'];
          const NORMAL_CLIP = {};
          const EO_CLIP = {};
          CanvasGraphics.prototype = {
            beginDrawing: function beginDrawing(_ref) {
              const transform = _ref.transform,
                viewport = _ref.viewport,
                transparency = _ref.transparency,
                _ref$background = _ref.background,
                background = _ref$background === undefined ? null : _ref$background;

              const width = this.ctx.canvas.width;
              const height = this.ctx.canvas.height;
              this.ctx.save();
              this.ctx.fillStyle = background || 'rgb(255, 255, 255)';
              this.ctx.fillRect(0, 0, width, height);
              this.ctx.restore();
              if (transparency) {
                const transparentCanvas = this.cachedCanvases.getCanvas('transparent', width, height, true);
                this.compositeCtx = this.ctx;
                this.transparentCanvas = transparentCanvas.canvas;
                this.ctx = transparentCanvas.context;
                this.ctx.save();
                this.ctx.transform.apply(this.ctx, this.compositeCtx.mozCurrentTransform);
              }
              this.ctx.save();
              resetCtxToDefault(this.ctx);
              if (transform) {
                this.ctx.transform.apply(this.ctx, transform);
              }
              this.ctx.transform.apply(this.ctx, viewport.transform);
              this.baseTransform = this.ctx.mozCurrentTransform.slice();
              if (this.imageLayer) {
                this.imageLayer.beginLayout();
              }
            },

            executeOperatorList: function CanvasGraphics_executeOperatorList(operatorList, executionStartIdx, continueCallback, stepper) {
              const argsArray = operatorList.argsArray;
              const fnArray = operatorList.fnArray;
              let i = executionStartIdx || 0;
              const argsArrayLen = argsArray.length;
              if (argsArrayLen === i) {
                return i;
              }
              const chunkOperations = argsArrayLen - i > EXECUTION_STEPS && typeof continueCallback === 'function';
              const endTime = chunkOperations ? Date.now() + EXECUTION_TIME : 0;
              let steps = 0;
              const commonObjs = this.commonObjs;
              const objs = this.objs;
              let fnId;
              while (true) {
                if (stepper !== undefined && i === stepper.nextBreakPoint) {
                  stepper.breakIt(i, continueCallback);
                  return i;
                }
                fnId = fnArray[i];
                if (fnId !== _util.OPS.dependency) {
                  this[fnId].apply(this, argsArray[i]);
                } else {
                  const deps = argsArray[i];
                  for (let n = 0, nn = deps.length; n < nn; n++) {
                    const depObjId = deps[n];
                    const common = depObjId[0] === 'g' && depObjId[1] === '_';
                    const objsPool = common ? commonObjs : objs;
                    if (!objsPool.isResolved(depObjId)) {
                      objsPool.get(depObjId, continueCallback);
                      return i;
                    }
                  }
                }
                i++;
                if (i === argsArrayLen) {
                  return i;
                }
                if (chunkOperations && ++steps > EXECUTION_STEPS) {
                  if (Date.now() > endTime) {
                    continueCallback();
                    return i;
                  }
                  steps = 0;
                }
              }
            },
            endDrawing: function CanvasGraphics_endDrawing() {
              if (this.current.activeSMask !== null) {
                this.endSMaskGroup();
              }
              this.ctx.restore();
              if (this.transparentCanvas) {
                this.ctx = this.compositeCtx;
                this.ctx.save();
                this.ctx.setTransform(1, 0, 0, 1, 0, 0);
                this.ctx.drawImage(this.transparentCanvas, 0, 0);
                this.ctx.restore();
                this.transparentCanvas = null;
              }
              this.cachedCanvases.clear();
              this.webGLContext.clear();
              if (this.imageLayer) {
                this.imageLayer.endLayout();
              }
            },
            setLineWidth: function CanvasGraphics_setLineWidth(width) {
              this.current.lineWidth = width;
              this.ctx.lineWidth = width;
            },
            setLineCap: function CanvasGraphics_setLineCap(style) {
              this.ctx.lineCap = LINE_CAP_STYLES[style];
            },
            setLineJoin: function CanvasGraphics_setLineJoin(style) {
              this.ctx.lineJoin = LINE_JOIN_STYLES[style];
            },
            setMiterLimit: function CanvasGraphics_setMiterLimit(limit) {
              this.ctx.miterLimit = limit;
            },
            setDash: function CanvasGraphics_setDash(dashArray, dashPhase) {
              const ctx = this.ctx;
              if (ctx.setLineDash !== undefined) {
                ctx.setLineDash(dashArray);
                ctx.lineDashOffset = dashPhase;
              }
            },
            setRenderingIntent: function CanvasGraphics_setRenderingIntent(intent) {},
            setFlatness: function CanvasGraphics_setFlatness(flatness) {},
            setGState: function CanvasGraphics_setGState(states) {
              for (let i = 0, ii = states.length; i < ii; i++) {
                const state = states[i];
                const key = state[0];
                const value = state[1];
                switch (key) {
                  case 'LW':
                    this.setLineWidth(value);
                    break;
                  case 'LC':
                    this.setLineCap(value);
                    break;
                  case 'LJ':
                    this.setLineJoin(value);
                    break;
                  case 'ML':
                    this.setMiterLimit(value);
                    break;
                  case 'D':
                    this.setDash(value[0], value[1]);
                    break;
                  case 'RI':
                    this.setRenderingIntent(value);
                    break;
                  case 'FL':
                    this.setFlatness(value);
                    break;
                  case 'Font':
                    this.setFont(value[0], value[1]);
                    break;
                  case 'CA':
                    this.current.strokeAlpha = state[1];
                    break;
                  case 'ca':
                    this.current.fillAlpha = state[1];
                    this.ctx.globalAlpha = state[1];
                    break;
                  case 'BM':
                    this.ctx.globalCompositeOperation = value;
                    break;
                  case 'SMask':
                    if (this.current.activeSMask) {
                      if (
                        this.stateStack.length > 0 &&
                        this.stateStack[this.stateStack.length - 1].activeSMask === this.current.activeSMask
                      ) {
                        this.suspendSMaskGroup();
                      } else {
                        this.endSMaskGroup();
                      }
                    }
                    this.current.activeSMask = value ? this.tempSMask : null;
                    if (this.current.activeSMask) {
                      this.beginSMaskGroup();
                    }
                    this.tempSMask = null;
                    break;
                }
              }
            },
            beginSMaskGroup: function CanvasGraphics_beginSMaskGroup() {
              const activeSMask = this.current.activeSMask;
              const drawnWidth = activeSMask.canvas.width;
              const drawnHeight = activeSMask.canvas.height;
              const cacheId = 'smaskGroupAt' + this.groupLevel;
              const scratchCanvas = this.cachedCanvases.getCanvas(cacheId, drawnWidth, drawnHeight, true);
              const currentCtx = this.ctx;
              const currentTransform = currentCtx.mozCurrentTransform;
              this.ctx.save();
              const groupCtx = scratchCanvas.context;
              groupCtx.scale(1 / activeSMask.scaleX, 1 / activeSMask.scaleY);
              groupCtx.translate(-activeSMask.offsetX, -activeSMask.offsetY);
              groupCtx.transform.apply(groupCtx, currentTransform);
              activeSMask.startTransformInverse = groupCtx.mozCurrentTransformInverse;
              copyCtxState(currentCtx, groupCtx);
              this.ctx = groupCtx;
              this.setGState([
                ['BM', 'source-over'],
                ['ca', 1],
                ['CA', 1],
              ]);
              this.groupStack.push(currentCtx);
              this.groupLevel++;
            },
            suspendSMaskGroup: function CanvasGraphics_endSMaskGroup() {
              const groupCtx = this.ctx;
              this.groupLevel--;
              this.ctx = this.groupStack.pop();
              composeSMask(this.ctx, this.current.activeSMask, groupCtx, this.webGLContext);
              this.ctx.restore();
              this.ctx.save();
              copyCtxState(groupCtx, this.ctx);
              this.current.resumeSMaskCtx = groupCtx;
              const deltaTransform = _util.Util.transform(this.current.activeSMask.startTransformInverse, groupCtx.mozCurrentTransform);
              this.ctx.transform.apply(this.ctx, deltaTransform);
              groupCtx.save();
              groupCtx.setTransform(1, 0, 0, 1, 0, 0);
              groupCtx.clearRect(0, 0, groupCtx.canvas.width, groupCtx.canvas.height);
              groupCtx.restore();
            },
            resumeSMaskGroup: function CanvasGraphics_endSMaskGroup() {
              const groupCtx = this.current.resumeSMaskCtx;
              const currentCtx = this.ctx;
              this.ctx = groupCtx;
              this.groupStack.push(currentCtx);
              this.groupLevel++;
            },
            endSMaskGroup: function CanvasGraphics_endSMaskGroup() {
              const groupCtx = this.ctx;
              this.groupLevel--;
              this.ctx = this.groupStack.pop();
              composeSMask(this.ctx, this.current.activeSMask, groupCtx, this.webGLContext);
              this.ctx.restore();
              copyCtxState(groupCtx, this.ctx);
              const deltaTransform = _util.Util.transform(this.current.activeSMask.startTransformInverse, groupCtx.mozCurrentTransform);
              this.ctx.transform.apply(this.ctx, deltaTransform);
            },
            save: function CanvasGraphics_save() {
              this.ctx.save();
              const old = this.current;
              this.stateStack.push(old);
              this.current = old.clone();
              this.current.resumeSMaskCtx = null;
            },
            restore: function CanvasGraphics_restore() {
              if (this.current.resumeSMaskCtx) {
                this.resumeSMaskGroup();
              }
              if (
                this.current.activeSMask !== null &&
                (this.stateStack.length === 0 || this.stateStack[this.stateStack.length - 1].activeSMask !== this.current.activeSMask)
              ) {
                this.endSMaskGroup();
              }
              if (this.stateStack.length !== 0) {
                this.current = this.stateStack.pop();
                this.ctx.restore();
                this.pendingClip = null;
                this._cachedGetSinglePixelWidth = null;
              }
            },
            transform: function CanvasGraphics_transform(a, b, c, d, e, f) {
              this.ctx.transform(a, b, c, d, e, f);
              this._cachedGetSinglePixelWidth = null;
            },
            constructPath: function CanvasGraphics_constructPath(ops, args) {
              const ctx = this.ctx;
              const current = this.current;
              let x = current.x,
                y = current.y;
              for (let i = 0, j = 0, ii = ops.length; i < ii; i++) {
                switch (ops[i] | 0) {
                  case _util.OPS.rectangle:
                    x = args[j++];
                    y = args[j++];
                    var width = args[j++];
                    var height = args[j++];
                    if (width === 0) {
                      width = this.getSinglePixelWidth();
                    }
                    if (height === 0) {
                      height = this.getSinglePixelWidth();
                    }
                    var xw = x + width;
                    var yh = y + height;
                    this.ctx.moveTo(x, y);
                    this.ctx.lineTo(xw, y);
                    this.ctx.lineTo(xw, yh);
                    this.ctx.lineTo(x, yh);
                    this.ctx.lineTo(x, y);
                    this.ctx.closePath();
                    break;
                  case _util.OPS.moveTo:
                    x = args[j++];
                    y = args[j++];
                    ctx.moveTo(x, y);
                    break;
                  case _util.OPS.lineTo:
                    x = args[j++];
                    y = args[j++];
                    ctx.lineTo(x, y);
                    break;
                  case _util.OPS.curveTo:
                    x = args[j + 4];
                    y = args[j + 5];
                    ctx.bezierCurveTo(args[j], args[j + 1], args[j + 2], args[j + 3], x, y);
                    j += 6;
                    break;
                  case _util.OPS.curveTo2:
                    ctx.bezierCurveTo(x, y, args[j], args[j + 1], args[j + 2], args[j + 3]);
                    x = args[j + 2];
                    y = args[j + 3];
                    j += 4;
                    break;
                  case _util.OPS.curveTo3:
                    x = args[j + 2];
                    y = args[j + 3];
                    ctx.bezierCurveTo(args[j], args[j + 1], x, y, x, y);
                    j += 4;
                    break;
                  case _util.OPS.closePath:
                    ctx.closePath();
                    break;
                }
              }
              current.setCurrentPoint(x, y);
            },
            closePath: function CanvasGraphics_closePath() {
              this.ctx.closePath();
            },
            stroke: function CanvasGraphics_stroke(consumePath) {
              consumePath = typeof consumePath !== 'undefined' ? consumePath : true;
              const ctx = this.ctx;
              const strokeColor = this.current.strokeColor;
              ctx.lineWidth = Math.max(this.getSinglePixelWidth() * MIN_WIDTH_FACTOR, this.current.lineWidth);
              ctx.globalAlpha = this.current.strokeAlpha;
              if (strokeColor && strokeColor.hasOwnProperty('type') && strokeColor.type === 'Pattern') {
                ctx.save();
                ctx.strokeStyle = strokeColor.getPattern(ctx, this);
                ctx.stroke();
                ctx.restore();
              } else {
                ctx.stroke();
              }
              if (consumePath) {
                this.consumePath();
              }
              ctx.globalAlpha = this.current.fillAlpha;
            },
            closeStroke: function CanvasGraphics_closeStroke() {
              this.closePath();
              this.stroke();
            },
            fill: function CanvasGraphics_fill(consumePath) {
              consumePath = typeof consumePath !== 'undefined' ? consumePath : true;
              const ctx = this.ctx;
              const fillColor = this.current.fillColor;
              const isPatternFill = this.current.patternFill;
              let needRestore = false;
              if (isPatternFill) {
                ctx.save();
                if (this.baseTransform) {
                  ctx.setTransform.apply(ctx, this.baseTransform);
                }
                ctx.fillStyle = fillColor.getPattern(ctx, this);
                needRestore = true;
              }
              if (this.pendingEOFill) {
                ctx.fill('evenodd');
                this.pendingEOFill = false;
              } else {
                ctx.fill();
              }
              if (needRestore) {
                ctx.restore();
              }
              if (consumePath) {
                this.consumePath();
              }
            },
            eoFill: function CanvasGraphics_eoFill() {
              this.pendingEOFill = true;
              this.fill();
            },
            fillStroke: function CanvasGraphics_fillStroke() {
              this.fill(false);
              this.stroke(false);
              this.consumePath();
            },
            eoFillStroke: function CanvasGraphics_eoFillStroke() {
              this.pendingEOFill = true;
              this.fillStroke();
            },
            closeFillStroke: function CanvasGraphics_closeFillStroke() {
              this.closePath();
              this.fillStroke();
            },
            closeEOFillStroke: function CanvasGraphics_closeEOFillStroke() {
              this.pendingEOFill = true;
              this.closePath();
              this.fillStroke();
            },
            endPath: function CanvasGraphics_endPath() {
              this.consumePath();
            },
            clip: function CanvasGraphics_clip() {
              this.pendingClip = NORMAL_CLIP;
            },
            eoClip: function CanvasGraphics_eoClip() {
              this.pendingClip = EO_CLIP;
            },
            beginText: function CanvasGraphics_beginText() {
              this.current.textMatrix = _util.IDENTITY_MATRIX;
              this.current.textMatrixScale = 1;
              this.current.x = this.current.lineX = 0;
              this.current.y = this.current.lineY = 0;
            },
            endText: function CanvasGraphics_endText() {
              const paths = this.pendingTextPaths;
              const ctx = this.ctx;
              if (paths === undefined) {
                ctx.beginPath();
                return;
              }
              ctx.save();
              ctx.beginPath();
              for (let i = 0; i < paths.length; i++) {
                const path = paths[i];
                ctx.setTransform.apply(ctx, path.transform);
                ctx.translate(path.x, path.y);
                path.addToPath(ctx, path.fontSize);
              }
              ctx.restore();
              ctx.clip();
              ctx.beginPath();
              delete this.pendingTextPaths;
            },
            setCharSpacing: function CanvasGraphics_setCharSpacing(spacing) {
              this.current.charSpacing = spacing;
            },
            setWordSpacing: function CanvasGraphics_setWordSpacing(spacing) {
              this.current.wordSpacing = spacing;
            },
            setHScale: function CanvasGraphics_setHScale(scale) {
              this.current.textHScale = scale / 100;
            },
            setLeading: function CanvasGraphics_setLeading(leading) {
              this.current.leading = -leading;
            },
            setFont: function CanvasGraphics_setFont(fontRefName, size) {
              const fontObj = this.commonObjs.get(fontRefName);
              const current = this.current;
              if (!fontObj) {
                throw new Error("Can't find font for " + fontRefName);
              }
              current.fontMatrix = fontObj.fontMatrix ? fontObj.fontMatrix : _util.FONT_IDENTITY_MATRIX;
              if (current.fontMatrix[0] === 0 || current.fontMatrix[3] === 0) {
                (0, _util.warn)('Invalid font matrix for font ' + fontRefName);
              }
              if (size < 0) {
                size = -size;
                current.fontDirection = -1;
              } else {
                current.fontDirection = 1;
              }
              this.current.font = fontObj;
              this.current.fontSize = size;
              if (fontObj.isType3Font) {
                return;
              }
              const name = fontObj.loadedName || 'sans-serif';
              const bold = fontObj.black ? '900' : fontObj.bold ? 'bold' : 'normal';
              const italic = fontObj.italic ? 'italic' : 'normal';
              const typeface = '"' + name + '", ' + fontObj.fallbackName;
              const browserFontSize = size < MIN_FONT_SIZE ? MIN_FONT_SIZE : size > MAX_FONT_SIZE ? MAX_FONT_SIZE : size;
              this.current.fontSizeScale = size / browserFontSize;
              const rule = italic + ' ' + bold + ' ' + browserFontSize + 'px ' + typeface;
              this.ctx.font = rule;
            },
            setTextRenderingMode: function CanvasGraphics_setTextRenderingMode(mode) {
              this.current.textRenderingMode = mode;
            },
            setTextRise: function CanvasGraphics_setTextRise(rise) {
              this.current.textRise = rise;
            },
            moveText: function CanvasGraphics_moveText(x, y) {
              this.current.x = this.current.lineX += x;
              this.current.y = this.current.lineY += y;
            },
            setLeadingMoveText: function CanvasGraphics_setLeadingMoveText(x, y) {
              this.setLeading(-y);
              this.moveText(x, y);
            },
            setTextMatrix: function CanvasGraphics_setTextMatrix(a, b, c, d, e, f) {
              this.current.textMatrix = [a, b, c, d, e, f];
              this.current.textMatrixScale = Math.sqrt(a * a + b * b);
              this.current.x = this.current.lineX = 0;
              this.current.y = this.current.lineY = 0;
            },
            nextLine: function CanvasGraphics_nextLine() {
              this.moveText(0, this.current.leading);
            },
            paintChar: function paintChar(character, x, y, patternTransform) {
              const ctx = this.ctx;
              const current = this.current;
              const font = current.font;
              const textRenderingMode = current.textRenderingMode;
              const fontSize = current.fontSize / current.fontSizeScale;
              const fillStrokeMode = textRenderingMode & _util.TextRenderingMode.FILL_STROKE_MASK;
              const isAddToPathSet = !!(textRenderingMode & _util.TextRenderingMode.ADD_TO_PATH_FLAG);
              const patternFill = current.patternFill && font.data;
              let addToPath;
              if (font.disableFontFace || isAddToPathSet || patternFill) {
                addToPath = font.getPathGenerator(this.commonObjs, character);
              }
              if (font.disableFontFace || patternFill) {
                ctx.save();
                ctx.translate(x, y);
                ctx.beginPath();
                addToPath(ctx, fontSize);
                if (patternTransform) {
                  ctx.setTransform.apply(ctx, patternTransform);
                }
                if (fillStrokeMode === _util.TextRenderingMode.FILL || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
                  ctx.fill();
                }
                if (fillStrokeMode === _util.TextRenderingMode.STROKE || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
                  ctx.stroke();
                }
                ctx.restore();
              } else {
                if (fillStrokeMode === _util.TextRenderingMode.FILL || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
                  ctx.fillText(character, x, y);
                }
                if (fillStrokeMode === _util.TextRenderingMode.STROKE || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
                  ctx.strokeText(character, x, y);
                }
              }
              if (isAddToPathSet) {
                const paths = this.pendingTextPaths || (this.pendingTextPaths = []);
                paths.push({
                  transform: ctx.mozCurrentTransform,
                  x: x,
                  y: y,
                  fontSize: fontSize,
                  addToPath: addToPath,
                });
              }
            },

            get isFontSubpixelAAEnabled() {
              const ctx = this.canvasFactory.create(10, 10).context;
              ctx.scale(1.5, 1);
              ctx.fillText('I', 0, 10);
              const data = ctx.getImageData(0, 0, 10, 10).data;
              let enabled = false;
              for (let i = 3; i < data.length; i += 4) {
                if (data[i] > 0 && data[i] < 255) {
                  enabled = true;
                  break;
                }
              }
              return (0, _util.shadow)(this, 'isFontSubpixelAAEnabled', enabled);
            },
            showText: function CanvasGraphics_showText(glyphs) {
              const current = this.current;
              const font = current.font;
              if (font.isType3Font) {
                return this.showType3Text(glyphs);
              }
              const fontSize = current.fontSize;
              if (fontSize === 0) {
                return;
              }
              const ctx = this.ctx;
              const fontSizeScale = current.fontSizeScale;
              const charSpacing = current.charSpacing;
              const wordSpacing = current.wordSpacing;
              const fontDirection = current.fontDirection;
              const textHScale = current.textHScale * fontDirection;
              const glyphsLength = glyphs.length;
              const vertical = font.vertical;
              const spacingDir = vertical ? 1 : -1;
              const defaultVMetrics = font.defaultVMetrics;
              const widthAdvanceScale = fontSize * current.fontMatrix[0];
              const simpleFillText =
                current.textRenderingMode === _util.TextRenderingMode.FILL && !font.disableFontFace && !current.patternFill;
              ctx.save();
              let patternTransform = void 0;
              if (current.patternFill) {
                ctx.save();
                const pattern = current.fillColor.getPattern(ctx, this);
                patternTransform = ctx.mozCurrentTransform;
                ctx.restore();
                ctx.fillStyle = pattern;
              }
              ctx.transform.apply(ctx, current.textMatrix);
              ctx.translate(current.x, current.y + current.textRise);
              if (fontDirection > 0) {
                ctx.scale(textHScale, -1);
              } else {
                ctx.scale(textHScale, 1);
              }
              let lineWidth = current.lineWidth;
              const scale = current.textMatrixScale;
              if (scale === 0 || lineWidth === 0) {
                const fillStrokeMode = current.textRenderingMode & _util.TextRenderingMode.FILL_STROKE_MASK;
                if (fillStrokeMode === _util.TextRenderingMode.STROKE || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
                  this._cachedGetSinglePixelWidth = null;
                  lineWidth = this.getSinglePixelWidth() * MIN_WIDTH_FACTOR;
                }
              } else {
                lineWidth /= scale;
              }
              if (fontSizeScale !== 1.0) {
                ctx.scale(fontSizeScale, fontSizeScale);
                lineWidth /= fontSizeScale;
              }
              ctx.lineWidth = lineWidth;
              let x = 0,
                i;
              for (i = 0; i < glyphsLength; ++i) {
                const glyph = glyphs[i];
                if ((0, _util.isNum)(glyph)) {
                  x += (spacingDir * glyph * fontSize) / 1000;
                  continue;
                }
                let restoreNeeded = false;
                const spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
                const character = glyph.fontChar;
                const accent = glyph.accent;
                var scaledX, scaledY, scaledAccentX, scaledAccentY;
                let width = glyph.width;
                if (vertical) {
                  var vmetric, vx, vy;
                  vmetric = glyph.vmetric || defaultVMetrics;
                  vx = glyph.vmetric ? vmetric[1] : width * 0.5;
                  vx = -vx * widthAdvanceScale;
                  vy = vmetric[2] * widthAdvanceScale;
                  width = vmetric ? -vmetric[0] : width;
                  scaledX = vx / fontSizeScale;
                  scaledY = (x + vy) / fontSizeScale;
                } else {
                  scaledX = x / fontSizeScale;
                  scaledY = 0;
                }
                if (font.remeasure && width > 0) {
                  const measuredWidth = ((ctx.measureText(character).width * 1000) / fontSize) * fontSizeScale;
                  if (width < measuredWidth && this.isFontSubpixelAAEnabled) {
                    const characterScaleX = width / measuredWidth;
                    restoreNeeded = true;
                    ctx.save();
                    ctx.scale(characterScaleX, 1);
                    scaledX /= characterScaleX;
                  } else if (width !== measuredWidth) {
                    scaledX += (((width - measuredWidth) / 2000) * fontSize) / fontSizeScale;
                  }
                }
                if (glyph.isInFont || font.missingFile) {
                  if (simpleFillText && !accent) {
                    ctx.fillText(character, scaledX, scaledY);
                  } else {
                    this.paintChar(character, scaledX, scaledY, patternTransform);
                    if (accent) {
                      scaledAccentX = scaledX + accent.offset.x / fontSizeScale;
                      scaledAccentY = scaledY - accent.offset.y / fontSizeScale;
                      this.paintChar(accent.fontChar, scaledAccentX, scaledAccentY, patternTransform);
                    }
                  }
                }
                const charWidth = width * widthAdvanceScale + spacing * fontDirection;
                x += charWidth;
                if (restoreNeeded) {
                  ctx.restore();
                }
              }
              if (vertical) {
                current.y -= x * textHScale;
              } else {
                current.x += x * textHScale;
              }
              ctx.restore();
            },
            showType3Text: function CanvasGraphics_showType3Text(glyphs) {
              const ctx = this.ctx;
              const current = this.current;
              const font = current.font;
              const fontSize = current.fontSize;
              const fontDirection = current.fontDirection;
              const spacingDir = font.vertical ? 1 : -1;
              const charSpacing = current.charSpacing;
              const wordSpacing = current.wordSpacing;
              const textHScale = current.textHScale * fontDirection;
              const fontMatrix = current.fontMatrix || _util.FONT_IDENTITY_MATRIX;
              const glyphsLength = glyphs.length;
              const isTextInvisible = current.textRenderingMode === _util.TextRenderingMode.INVISIBLE;
              let i, glyph, width, spacingLength;
              if (isTextInvisible || fontSize === 0) {
                return;
              }
              this._cachedGetSinglePixelWidth = null;
              ctx.save();
              ctx.transform.apply(ctx, current.textMatrix);
              ctx.translate(current.x, current.y);
              ctx.scale(textHScale, fontDirection);
              for (i = 0; i < glyphsLength; ++i) {
                glyph = glyphs[i];
                if ((0, _util.isNum)(glyph)) {
                  spacingLength = (spacingDir * glyph * fontSize) / 1000;
                  this.ctx.translate(spacingLength, 0);
                  current.x += spacingLength * textHScale;
                  continue;
                }
                const spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
                const operatorList = font.charProcOperatorList[glyph.operatorListId];
                if (!operatorList) {
                  (0, _util.warn)('Type3 character "' + glyph.operatorListId + '" is not available.');
                  continue;
                }
                this.processingType3 = glyph;
                this.save();
                ctx.scale(fontSize, fontSize);
                ctx.transform.apply(ctx, fontMatrix);
                this.executeOperatorList(operatorList);
                this.restore();
                const transformed = _util.Util.applyTransform([glyph.width, 0], fontMatrix);
                width = transformed[0] * fontSize + spacing;
                ctx.translate(width, 0);
                current.x += width * textHScale;
              }
              ctx.restore();
              this.processingType3 = null;
            },
            setCharWidth: function CanvasGraphics_setCharWidth(xWidth, yWidth) {},
            setCharWidthAndBounds: function CanvasGraphics_setCharWidthAndBounds(xWidth, yWidth, llx, lly, urx, ury) {
              this.ctx.rect(llx, lly, urx - llx, ury - lly);
              this.clip();
              this.endPath();
            },
            getColorN_Pattern: function CanvasGraphics_getColorN_Pattern(IR) {
              const _this = this;

              let pattern;
              if (IR[0] === 'TilingPattern') {
                const color = IR[1];
                const baseTransform = this.baseTransform || this.ctx.mozCurrentTransform.slice();
                const canvasGraphicsFactory = {
                  createCanvasGraphics: function createCanvasGraphics(ctx) {
                    return new CanvasGraphics(ctx, _this.commonObjs, _this.objs, _this.canvasFactory, _this.webGLContext);
                  },
                };
                pattern = new _pattern_helper.TilingPattern(IR, color, this.ctx, canvasGraphicsFactory, baseTransform);
              } else {
                pattern = (0, _pattern_helper.getShadingPatternFromIR)(IR);
              }
              return pattern;
            },
            setStrokeColorN: function CanvasGraphics_setStrokeColorN() {
              this.current.strokeColor = this.getColorN_Pattern(arguments);
            },
            setFillColorN: function CanvasGraphics_setFillColorN() {
              this.current.fillColor = this.getColorN_Pattern(arguments);
              this.current.patternFill = true;
            },
            setStrokeRGBColor: function CanvasGraphics_setStrokeRGBColor(r, g, b) {
              const color = _util.Util.makeCssRgb(r, g, b);
              this.ctx.strokeStyle = color;
              this.current.strokeColor = color;
            },
            setFillRGBColor: function CanvasGraphics_setFillRGBColor(r, g, b) {
              const color = _util.Util.makeCssRgb(r, g, b);
              this.ctx.fillStyle = color;
              this.current.fillColor = color;
              this.current.patternFill = false;
            },
            shadingFill: function CanvasGraphics_shadingFill(patternIR) {
              const ctx = this.ctx;
              this.save();
              const pattern = (0, _pattern_helper.getShadingPatternFromIR)(patternIR);
              ctx.fillStyle = pattern.getPattern(ctx, this, true);
              const inv = ctx.mozCurrentTransformInverse;
              if (inv) {
                const canvas = ctx.canvas;
                const width = canvas.width;
                const height = canvas.height;
                const bl = _util.Util.applyTransform([0, 0], inv);
                const br = _util.Util.applyTransform([0, height], inv);
                const ul = _util.Util.applyTransform([width, 0], inv);
                const ur = _util.Util.applyTransform([width, height], inv);
                const x0 = Math.min(bl[0], br[0], ul[0], ur[0]);
                const y0 = Math.min(bl[1], br[1], ul[1], ur[1]);
                const x1 = Math.max(bl[0], br[0], ul[0], ur[0]);
                const y1 = Math.max(bl[1], br[1], ul[1], ur[1]);
                this.ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
              } else {
                this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
              }
              this.restore();
            },
            beginInlineImage: function CanvasGraphics_beginInlineImage() {
              (0, _util.unreachable)('Should not call beginInlineImage');
            },
            beginImageData: function CanvasGraphics_beginImageData() {
              (0, _util.unreachable)('Should not call beginImageData');
            },
            paintFormXObjectBegin: function CanvasGraphics_paintFormXObjectBegin(matrix, bbox) {
              this.save();
              this.baseTransformStack.push(this.baseTransform);
              if (Array.isArray(matrix) && matrix.length === 6) {
                this.transform.apply(this, matrix);
              }
              this.baseTransform = this.ctx.mozCurrentTransform;
              if (Array.isArray(bbox) && bbox.length === 4) {
                const width = bbox[2] - bbox[0];
                const height = bbox[3] - bbox[1];
                this.ctx.rect(bbox[0], bbox[1], width, height);
                this.clip();
                this.endPath();
              }
            },
            paintFormXObjectEnd: function CanvasGraphics_paintFormXObjectEnd() {
              this.restore();
              this.baseTransform = this.baseTransformStack.pop();
            },
            beginGroup: function CanvasGraphics_beginGroup(group) {
              this.save();
              const currentCtx = this.ctx;
              if (!group.isolated) {
                (0, _util.info)('TODO: Support non-isolated groups.');
              }
              if (group.knockout) {
                (0, _util.warn)('Knockout groups not supported.');
              }
              const currentTransform = currentCtx.mozCurrentTransform;
              if (group.matrix) {
                currentCtx.transform.apply(currentCtx, group.matrix);
              }
              if (!group.bbox) {
                throw new Error('Bounding box is required.');
              }
              let bounds = _util.Util.getAxialAlignedBoundingBox(group.bbox, currentCtx.mozCurrentTransform);
              const canvasBounds = [0, 0, currentCtx.canvas.width, currentCtx.canvas.height];
              bounds = _util.Util.intersect(bounds, canvasBounds) || [0, 0, 0, 0];
              const offsetX = Math.floor(bounds[0]);
              const offsetY = Math.floor(bounds[1]);
              let drawnWidth = Math.max(Math.ceil(bounds[2]) - offsetX, 1);
              let drawnHeight = Math.max(Math.ceil(bounds[3]) - offsetY, 1);
              let scaleX = 1,
                scaleY = 1;
              if (drawnWidth > MAX_GROUP_SIZE) {
                scaleX = drawnWidth / MAX_GROUP_SIZE;
                drawnWidth = MAX_GROUP_SIZE;
              }
              if (drawnHeight > MAX_GROUP_SIZE) {
                scaleY = drawnHeight / MAX_GROUP_SIZE;
                drawnHeight = MAX_GROUP_SIZE;
              }
              let cacheId = 'groupAt' + this.groupLevel;
              if (group.smask) {
                cacheId += '_smask_' + (this.smaskCounter++ % 2);
              }
              const scratchCanvas = this.cachedCanvases.getCanvas(cacheId, drawnWidth, drawnHeight, true);
              const groupCtx = scratchCanvas.context;
              groupCtx.scale(1 / scaleX, 1 / scaleY);
              groupCtx.translate(-offsetX, -offsetY);
              groupCtx.transform.apply(groupCtx, currentTransform);
              if (group.smask) {
                this.smaskStack.push({
                  canvas: scratchCanvas.canvas,
                  context: groupCtx,
                  offsetX: offsetX,
                  offsetY: offsetY,
                  scaleX: scaleX,
                  scaleY: scaleY,
                  subtype: group.smask.subtype,
                  backdrop: group.smask.backdrop,
                  transferMap: group.smask.transferMap || null,
                  startTransformInverse: null,
                });
              } else {
                currentCtx.setTransform(1, 0, 0, 1, 0, 0);
                currentCtx.translate(offsetX, offsetY);
                currentCtx.scale(scaleX, scaleY);
              }
              copyCtxState(currentCtx, groupCtx);
              this.ctx = groupCtx;
              this.setGState([
                ['BM', 'source-over'],
                ['ca', 1],
                ['CA', 1],
              ]);
              this.groupStack.push(currentCtx);
              this.groupLevel++;
              this.current.activeSMask = null;
            },
            endGroup: function CanvasGraphics_endGroup(group) {
              this.groupLevel--;
              const groupCtx = this.ctx;
              this.ctx = this.groupStack.pop();
              if (this.ctx.imageSmoothingEnabled !== undefined) {
                this.ctx.imageSmoothingEnabled = false;
              } else {
                this.ctx.mozImageSmoothingEnabled = false;
              }
              if (group.smask) {
                this.tempSMask = this.smaskStack.pop();
              } else {
                this.ctx.drawImage(groupCtx.canvas, 0, 0);
              }
              this.restore();
            },
            beginAnnotations: function CanvasGraphics_beginAnnotations() {
              this.save();
              if (this.baseTransform) {
                this.ctx.setTransform.apply(this.ctx, this.baseTransform);
              }
            },
            endAnnotations: function CanvasGraphics_endAnnotations() {
              this.restore();
            },
            beginAnnotation: function CanvasGraphics_beginAnnotation(rect, transform, matrix) {
              this.save();
              resetCtxToDefault(this.ctx);
              this.current = new CanvasExtraState();
              if (Array.isArray(rect) && rect.length === 4) {
                const width = rect[2] - rect[0];
                const height = rect[3] - rect[1];
                this.ctx.rect(rect[0], rect[1], width, height);
                this.clip();
                this.endPath();
              }
              this.transform.apply(this, transform);
              this.transform.apply(this, matrix);
            },
            endAnnotation: function CanvasGraphics_endAnnotation() {
              this.restore();
            },
            paintJpegXObject: function CanvasGraphics_paintJpegXObject(objId, w, h) {
              const domImage = this.objs.get(objId);
              if (!domImage) {
                (0, _util.warn)("Dependent image isn't ready yet");
                return;
              }
              this.save();
              const ctx = this.ctx;
              ctx.scale(1 / w, -1 / h);
              ctx.drawImage(domImage, 0, 0, domImage.width, domImage.height, 0, -h, w, h);
              if (this.imageLayer) {
                const currentTransform = ctx.mozCurrentTransformInverse;
                const position = this.getCanvasPosition(0, 0);
                this.imageLayer.appendImage({
                  objId: objId,
                  left: position[0],
                  top: position[1],
                  width: w / currentTransform[0],
                  height: h / currentTransform[3],
                });
              }
              this.restore();
            },
            paintImageMaskXObject: function CanvasGraphics_paintImageMaskXObject(img) {
              const ctx = this.ctx;
              const width = img.width,
                height = img.height;
              const fillColor = this.current.fillColor;
              const isPatternFill = this.current.patternFill;
              const glyph = this.processingType3;
              if (COMPILE_TYPE3_GLYPHS && glyph && glyph.compiled === undefined) {
                if (width <= MAX_SIZE_TO_COMPILE && height <= MAX_SIZE_TO_COMPILE) {
                  glyph.compiled = compileType3Glyph({
                    data: img.data,
                    width: width,
                    height: height,
                  });
                } else {
                  glyph.compiled = null;
                }
              }
              if (glyph && glyph.compiled) {
                glyph.compiled(ctx);
                return;
              }
              const maskCanvas = this.cachedCanvases.getCanvas('maskCanvas', width, height);
              const maskCtx = maskCanvas.context;
              maskCtx.save();
              putBinaryImageMask(maskCtx, img);
              maskCtx.globalCompositeOperation = 'source-in';
              maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this) : fillColor;
              maskCtx.fillRect(0, 0, width, height);
              maskCtx.restore();
              this.paintInlineImageXObject(maskCanvas.canvas);
            },
            paintImageMaskXObjectRepeat: function CanvasGraphics_paintImageMaskXObjectRepeat(imgData, scaleX, scaleY, positions) {
              const width = imgData.width;
              const height = imgData.height;
              const fillColor = this.current.fillColor;
              const isPatternFill = this.current.patternFill;
              const maskCanvas = this.cachedCanvases.getCanvas('maskCanvas', width, height);
              const maskCtx = maskCanvas.context;
              maskCtx.save();
              putBinaryImageMask(maskCtx, imgData);
              maskCtx.globalCompositeOperation = 'source-in';
              maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this) : fillColor;
              maskCtx.fillRect(0, 0, width, height);
              maskCtx.restore();
              const ctx = this.ctx;
              for (let i = 0, ii = positions.length; i < ii; i += 2) {
                ctx.save();
                ctx.transform(scaleX, 0, 0, scaleY, positions[i], positions[i + 1]);
                ctx.scale(1, -1);
                ctx.drawImage(maskCanvas.canvas, 0, 0, width, height, 0, -1, 1, 1);
                ctx.restore();
              }
            },
            paintImageMaskXObjectGroup: function CanvasGraphics_paintImageMaskXObjectGroup(images) {
              const ctx = this.ctx;
              const fillColor = this.current.fillColor;
              const isPatternFill = this.current.patternFill;
              for (let i = 0, ii = images.length; i < ii; i++) {
                const image = images[i];
                const width = image.width,
                  height = image.height;
                const maskCanvas = this.cachedCanvases.getCanvas('maskCanvas', width, height);
                const maskCtx = maskCanvas.context;
                maskCtx.save();
                putBinaryImageMask(maskCtx, image);
                maskCtx.globalCompositeOperation = 'source-in';
                maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this) : fillColor;
                maskCtx.fillRect(0, 0, width, height);
                maskCtx.restore();
                ctx.save();
                ctx.transform.apply(ctx, image.transform);
                ctx.scale(1, -1);
                ctx.drawImage(maskCanvas.canvas, 0, 0, width, height, 0, -1, 1, 1);
                ctx.restore();
              }
            },
            paintImageXObject: function CanvasGraphics_paintImageXObject(objId) {
              const imgData = this.objs.get(objId);
              if (!imgData) {
                (0, _util.warn)("Dependent image isn't ready yet");
                return;
              }
              this.paintInlineImageXObject(imgData);
            },
            paintImageXObjectRepeat: function CanvasGraphics_paintImageXObjectRepeat(objId, scaleX, scaleY, positions) {
              const imgData = this.objs.get(objId);
              if (!imgData) {
                (0, _util.warn)("Dependent image isn't ready yet");
                return;
              }
              const width = imgData.width;
              const height = imgData.height;
              const map = [];
              for (let i = 0, ii = positions.length; i < ii; i += 2) {
                map.push({
                  transform: [scaleX, 0, 0, scaleY, positions[i], positions[i + 1]],
                  x: 0,
                  y: 0,
                  w: width,
                  h: height,
                });
              }
              this.paintInlineImageXObjectGroup(imgData, map);
            },
            paintInlineImageXObject: function CanvasGraphics_paintInlineImageXObject(imgData) {
              const width = imgData.width;
              const height = imgData.height;
              const ctx = this.ctx;
              this.save();
              ctx.scale(1 / width, -1 / height);
              const currentTransform = ctx.mozCurrentTransformInverse;
              const a = currentTransform[0],
                b = currentTransform[1];
              let widthScale = Math.max(Math.sqrt(a * a + b * b), 1);
              const c = currentTransform[2],
                d = currentTransform[3];
              let heightScale = Math.max(Math.sqrt(c * c + d * d), 1);
              let imgToPaint, tmpCanvas;
              if ((typeof HTMLElement === 'function' && imgData instanceof HTMLElement) || !imgData.data) {
                imgToPaint = imgData;
              } else {
                tmpCanvas = this.cachedCanvases.getCanvas('inlineImage', width, height);
                var tmpCtx = tmpCanvas.context;
                putBinaryImageData(tmpCtx, imgData);
                imgToPaint = tmpCanvas.canvas;
              }
              let paintWidth = width,
                paintHeight = height;
              let tmpCanvasId = 'prescale1';
              while ((widthScale > 2 && paintWidth > 1) || (heightScale > 2 && paintHeight > 1)) {
                let newWidth = paintWidth,
                  newHeight = paintHeight;
                if (widthScale > 2 && paintWidth > 1) {
                  newWidth = Math.ceil(paintWidth / 2);
                  widthScale /= paintWidth / newWidth;
                }
                if (heightScale > 2 && paintHeight > 1) {
                  newHeight = Math.ceil(paintHeight / 2);
                  heightScale /= paintHeight / newHeight;
                }
                tmpCanvas = this.cachedCanvases.getCanvas(tmpCanvasId, newWidth, newHeight);
                tmpCtx = tmpCanvas.context;
                tmpCtx.clearRect(0, 0, newWidth, newHeight);
                tmpCtx.drawImage(imgToPaint, 0, 0, paintWidth, paintHeight, 0, 0, newWidth, newHeight);
                imgToPaint = tmpCanvas.canvas;
                paintWidth = newWidth;
                paintHeight = newHeight;
                tmpCanvasId = tmpCanvasId === 'prescale1' ? 'prescale2' : 'prescale1';
              }
              ctx.drawImage(imgToPaint, 0, 0, paintWidth, paintHeight, 0, -height, width, height);
              if (this.imageLayer) {
                const position = this.getCanvasPosition(0, -height);
                this.imageLayer.appendImage({
                  imgData: imgData,
                  left: position[0],
                  top: position[1],
                  width: width / currentTransform[0],
                  height: height / currentTransform[3],
                });
              }
              this.restore();
            },
            paintInlineImageXObjectGroup: function CanvasGraphics_paintInlineImageXObjectGroup(imgData, map) {
              const ctx = this.ctx;
              const w = imgData.width;
              const h = imgData.height;
              const tmpCanvas = this.cachedCanvases.getCanvas('inlineImage', w, h);
              const tmpCtx = tmpCanvas.context;
              putBinaryImageData(tmpCtx, imgData);
              for (let i = 0, ii = map.length; i < ii; i++) {
                const entry = map[i];
                ctx.save();
                ctx.transform.apply(ctx, entry.transform);
                ctx.scale(1, -1);
                ctx.drawImage(tmpCanvas.canvas, entry.x, entry.y, entry.w, entry.h, 0, -1, 1, 1);
                if (this.imageLayer) {
                  const position = this.getCanvasPosition(entry.x, entry.y);
                  this.imageLayer.appendImage({
                    imgData: imgData,
                    left: position[0],
                    top: position[1],
                    width: w,
                    height: h,
                  });
                }
                ctx.restore();
              }
            },
            paintSolidColorImageMask: function CanvasGraphics_paintSolidColorImageMask() {
              this.ctx.fillRect(0, 0, 1, 1);
            },
            paintXObject: function CanvasGraphics_paintXObject() {
              (0, _util.warn)("Unsupported 'paintXObject' command.");
            },
            markPoint: function CanvasGraphics_markPoint(tag) {},
            markPointProps: function CanvasGraphics_markPointProps(tag, properties) {},
            beginMarkedContent: function CanvasGraphics_beginMarkedContent(tag) {},
            beginMarkedContentProps: function CanvasGraphics_beginMarkedContentProps(tag, properties) {},
            endMarkedContent: function CanvasGraphics_endMarkedContent() {},
            beginCompat: function CanvasGraphics_beginCompat() {},
            endCompat: function CanvasGraphics_endCompat() {},
            consumePath: function CanvasGraphics_consumePath() {
              const ctx = this.ctx;
              if (this.pendingClip) {
                if (this.pendingClip === EO_CLIP) {
                  ctx.clip('evenodd');
                } else {
                  ctx.clip();
                }
                this.pendingClip = null;
              }
              ctx.beginPath();
            },
            getSinglePixelWidth: function getSinglePixelWidth(scale) {
              if (this._cachedGetSinglePixelWidth === null) {
                const inverse = this.ctx.mozCurrentTransformInverse;
                this._cachedGetSinglePixelWidth = Math.sqrt(
                  Math.max(inverse[0] * inverse[0] + inverse[1] * inverse[1], inverse[2] * inverse[2] + inverse[3] * inverse[3]),
                );
              }
              return this._cachedGetSinglePixelWidth;
            },

            getCanvasPosition: function CanvasGraphics_getCanvasPosition(x, y) {
              const transform = this.ctx.mozCurrentTransform;
              return [transform[0] * x + transform[2] * y + transform[4], transform[1] * x + transform[3] * y + transform[5]];
            },
          };
          for (const op in _util.OPS) {
            CanvasGraphics.prototype[_util.OPS[op]] = CanvasGraphics.prototype[op];
          }
          return CanvasGraphics;
        })();
        exports.CanvasGraphics = CanvasGraphics;

        /***/
      },
      /* 134 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.TilingPattern = exports.getShadingPatternFromIR = undefined;

        const _util = __w_pdfjs_require__(1);

        const ShadingIRs = {};
        ShadingIRs.RadialAxial = {
          fromIR: function RadialAxial_fromIR(raw) {
            const type = raw[1];
            const colorStops = raw[2];
            const p0 = raw[3];
            const p1 = raw[4];
            const r0 = raw[5];
            const r1 = raw[6];
            return {
              type: 'Pattern',
              getPattern: function RadialAxial_getPattern(ctx) {
                let grad;
                if (type === 'axial') {
                  grad = ctx.createLinearGradient(p0[0], p0[1], p1[0], p1[1]);
                } else if (type === 'radial') {
                  grad = ctx.createRadialGradient(p0[0], p0[1], r0, p1[0], p1[1], r1);
                }
                for (let i = 0, ii = colorStops.length; i < ii; ++i) {
                  const c = colorStops[i];
                  grad.addColorStop(c[0], c[1]);
                }
                return grad;
              },
            };
          },
        };
        const createMeshCanvas = (function createMeshCanvasClosure() {
          function drawTriangle(data, context, p1, p2, p3, c1, c2, c3) {
            const coords = context.coords,
              colors = context.colors;
            const bytes = data.data,
              rowSize = data.width * 4;
            let tmp;
            if (coords[p1 + 1] > coords[p2 + 1]) {
              tmp = p1;
              p1 = p2;
              p2 = tmp;
              tmp = c1;
              c1 = c2;
              c2 = tmp;
            }
            if (coords[p2 + 1] > coords[p3 + 1]) {
              tmp = p2;
              p2 = p3;
              p3 = tmp;
              tmp = c2;
              c2 = c3;
              c3 = tmp;
            }
            if (coords[p1 + 1] > coords[p2 + 1]) {
              tmp = p1;
              p1 = p2;
              p2 = tmp;
              tmp = c1;
              c1 = c2;
              c2 = tmp;
            }
            const x1 = (coords[p1] + context.offsetX) * context.scaleX;
            const y1 = (coords[p1 + 1] + context.offsetY) * context.scaleY;
            const x2 = (coords[p2] + context.offsetX) * context.scaleX;
            const y2 = (coords[p2 + 1] + context.offsetY) * context.scaleY;
            const x3 = (coords[p3] + context.offsetX) * context.scaleX;
            const y3 = (coords[p3 + 1] + context.offsetY) * context.scaleY;
            if (y1 >= y3) {
              return;
            }
            const c1r = colors[c1],
              c1g = colors[c1 + 1],
              c1b = colors[c1 + 2];
            const c2r = colors[c2],
              c2g = colors[c2 + 1],
              c2b = colors[c2 + 2];
            const c3r = colors[c3],
              c3g = colors[c3 + 1],
              c3b = colors[c3 + 2];
            const minY = Math.round(y1),
              maxY = Math.round(y3);
            let xa, car, cag, cab;
            let xb, cbr, cbg, cbb;
            let k;
            for (let y = minY; y <= maxY; y++) {
              if (y < y2) {
                k = y < y1 ? 0 : y1 === y2 ? 1 : (y1 - y) / (y1 - y2);
                xa = x1 - (x1 - x2) * k;
                car = c1r - (c1r - c2r) * k;
                cag = c1g - (c1g - c2g) * k;
                cab = c1b - (c1b - c2b) * k;
              } else {
                k = y > y3 ? 1 : y2 === y3 ? 0 : (y2 - y) / (y2 - y3);
                xa = x2 - (x2 - x3) * k;
                car = c2r - (c2r - c3r) * k;
                cag = c2g - (c2g - c3g) * k;
                cab = c2b - (c2b - c3b) * k;
              }
              k = y < y1 ? 0 : y > y3 ? 1 : (y1 - y) / (y1 - y3);
              xb = x1 - (x1 - x3) * k;
              cbr = c1r - (c1r - c3r) * k;
              cbg = c1g - (c1g - c3g) * k;
              cbb = c1b - (c1b - c3b) * k;
              const x1_ = Math.round(Math.min(xa, xb));
              const x2_ = Math.round(Math.max(xa, xb));
              let j = rowSize * y + x1_ * 4;
              for (let x = x1_; x <= x2_; x++) {
                k = (xa - x) / (xa - xb);
                k = k < 0 ? 0 : k > 1 ? 1 : k;
                bytes[j++] = (car - (car - cbr) * k) | 0;
                bytes[j++] = (cag - (cag - cbg) * k) | 0;
                bytes[j++] = (cab - (cab - cbb) * k) | 0;
                bytes[j++] = 255;
              }
            }
          }
          function drawFigure(data, figure, context) {
            const ps = figure.coords;
            const cs = figure.colors;
            let i, ii;
            switch (figure.type) {
              case 'lattice':
                var verticesPerRow = figure.verticesPerRow;
                var rows = Math.floor(ps.length / verticesPerRow) - 1;
                var cols = verticesPerRow - 1;
                for (i = 0; i < rows; i++) {
                  let q = i * verticesPerRow;
                  for (let j = 0; j < cols; j++, q++) {
                    drawTriangle(data, context, ps[q], ps[q + 1], ps[q + verticesPerRow], cs[q], cs[q + 1], cs[q + verticesPerRow]);
                    drawTriangle(
                      data,
                      context,
                      ps[q + verticesPerRow + 1],
                      ps[q + 1],
                      ps[q + verticesPerRow],
                      cs[q + verticesPerRow + 1],
                      cs[q + 1],
                      cs[q + verticesPerRow],
                    );
                  }
                }
                break;
              case 'triangles':
                for (i = 0, ii = ps.length; i < ii; i += 3) {
                  drawTriangle(data, context, ps[i], ps[i + 1], ps[i + 2], cs[i], cs[i + 1], cs[i + 2]);
                }
                break;
              default:
                throw new Error('illegal figure');
            }
          }
          function createMeshCanvas(bounds, combinesScale, coords, colors, figures, backgroundColor, cachedCanvases, webGLContext) {
            const EXPECTED_SCALE = 1.1;
            const MAX_PATTERN_SIZE = 3000;
            const BORDER_SIZE = 2;
            const offsetX = Math.floor(bounds[0]);
            const offsetY = Math.floor(bounds[1]);
            const boundsWidth = Math.ceil(bounds[2]) - offsetX;
            const boundsHeight = Math.ceil(bounds[3]) - offsetY;
            const width = Math.min(Math.ceil(Math.abs(boundsWidth * combinesScale[0] * EXPECTED_SCALE)), MAX_PATTERN_SIZE);
            const height = Math.min(Math.ceil(Math.abs(boundsHeight * combinesScale[1] * EXPECTED_SCALE)), MAX_PATTERN_SIZE);
            const scaleX = boundsWidth / width;
            const scaleY = boundsHeight / height;
            const context = {
              coords: coords,
              colors: colors,
              offsetX: -offsetX,
              offsetY: -offsetY,
              scaleX: 1 / scaleX,
              scaleY: 1 / scaleY,
            };
            const paddedWidth = width + BORDER_SIZE * 2;
            const paddedHeight = height + BORDER_SIZE * 2;
            let canvas, tmpCanvas, i, ii;
            if (webGLContext.isEnabled) {
              canvas = webGLContext.drawFigures({
                width: width,
                height: height,
                backgroundColor: backgroundColor,
                figures: figures,
                context: context,
              });
              tmpCanvas = cachedCanvases.getCanvas('mesh', paddedWidth, paddedHeight, false);
              tmpCanvas.context.drawImage(canvas, BORDER_SIZE, BORDER_SIZE);
              canvas = tmpCanvas.canvas;
            } else {
              tmpCanvas = cachedCanvases.getCanvas('mesh', paddedWidth, paddedHeight, false);
              const tmpCtx = tmpCanvas.context;
              const data = tmpCtx.createImageData(width, height);
              if (backgroundColor) {
                const bytes = data.data;
                for (i = 0, ii = bytes.length; i < ii; i += 4) {
                  bytes[i] = backgroundColor[0];
                  bytes[i + 1] = backgroundColor[1];
                  bytes[i + 2] = backgroundColor[2];
                  bytes[i + 3] = 255;
                }
              }
              for (i = 0; i < figures.length; i++) {
                drawFigure(data, figures[i], context);
              }
              tmpCtx.putImageData(data, BORDER_SIZE, BORDER_SIZE);
              canvas = tmpCanvas.canvas;
            }
            return {
              canvas: canvas,
              offsetX: offsetX - BORDER_SIZE * scaleX,
              offsetY: offsetY - BORDER_SIZE * scaleY,
              scaleX: scaleX,
              scaleY: scaleY,
            };
          }
          return createMeshCanvas;
        })();
        ShadingIRs.Mesh = {
          fromIR: function Mesh_fromIR(raw) {
            const coords = raw[2];
            const colors = raw[3];
            const figures = raw[4];
            const bounds = raw[5];
            const matrix = raw[6];
            const background = raw[8];
            return {
              type: 'Pattern',
              getPattern: function Mesh_getPattern(ctx, owner, shadingFill) {
                let scale;
                if (shadingFill) {
                  scale = _util.Util.singularValueDecompose2dScale(ctx.mozCurrentTransform);
                } else {
                  scale = _util.Util.singularValueDecompose2dScale(owner.baseTransform);
                  if (matrix) {
                    const matrixScale = _util.Util.singularValueDecompose2dScale(matrix);
                    scale = [scale[0] * matrixScale[0], scale[1] * matrixScale[1]];
                  }
                }
                const temporaryPatternCanvas = createMeshCanvas(
                  bounds,
                  scale,
                  coords,
                  colors,
                  figures,
                  shadingFill ? null : background,
                  owner.cachedCanvases,
                  owner.webGLContext,
                );
                if (!shadingFill) {
                  ctx.setTransform.apply(ctx, owner.baseTransform);
                  if (matrix) {
                    ctx.transform.apply(ctx, matrix);
                  }
                }
                ctx.translate(temporaryPatternCanvas.offsetX, temporaryPatternCanvas.offsetY);
                ctx.scale(temporaryPatternCanvas.scaleX, temporaryPatternCanvas.scaleY);
                return ctx.createPattern(temporaryPatternCanvas.canvas, 'no-repeat');
              },
            };
          },
        };
        ShadingIRs.Dummy = {
          fromIR: function Dummy_fromIR() {
            return {
              type: 'Pattern',
              getPattern: function Dummy_fromIR_getPattern() {
                return 'hotpink';
              },
            };
          },
        };
        function getShadingPatternFromIR(raw) {
          const shadingIR = ShadingIRs[raw[0]];
          if (!shadingIR) {
            throw new Error('Unknown IR type: ' + raw[0]);
          }
          return shadingIR.fromIR(raw);
        }
        const TilingPattern = (function TilingPatternClosure() {
          const PaintType = {
            COLORED: 1,
            UNCOLORED: 2,
          };
          const MAX_PATTERN_SIZE = 3000;
          function TilingPattern(IR, color, ctx, canvasGraphicsFactory, baseTransform) {
            this.operatorList = IR[2];
            this.matrix = IR[3] || [1, 0, 0, 1, 0, 0];
            this.bbox = IR[4];
            this.xstep = IR[5];
            this.ystep = IR[6];
            this.paintType = IR[7];
            this.tilingType = IR[8];
            this.color = color;
            this.canvasGraphicsFactory = canvasGraphicsFactory;
            this.baseTransform = baseTransform;
            this.type = 'Pattern';
            this.ctx = ctx;
          }
          TilingPattern.prototype = {
            createPatternCanvas: function TilinPattern_createPatternCanvas(owner) {
              const operatorList = this.operatorList;
              const bbox = this.bbox;
              const xstep = this.xstep;
              const ystep = this.ystep;
              const paintType = this.paintType;
              const tilingType = this.tilingType;
              const color = this.color;
              const canvasGraphicsFactory = this.canvasGraphicsFactory;
              (0, _util.info)('TilingType: ' + tilingType);
              const x0 = bbox[0],
                y0 = bbox[1],
                x1 = bbox[2],
                y1 = bbox[3];
              const topLeft = [x0, y0];
              const botRight = [x0 + xstep, y0 + ystep];
              let width = botRight[0] - topLeft[0];
              let height = botRight[1] - topLeft[1];
              const matrixScale = _util.Util.singularValueDecompose2dScale(this.matrix);
              const curMatrixScale = _util.Util.singularValueDecompose2dScale(this.baseTransform);
              const combinedScale = [matrixScale[0] * curMatrixScale[0], matrixScale[1] * curMatrixScale[1]];
              width = Math.min(Math.ceil(Math.abs(width * combinedScale[0])), MAX_PATTERN_SIZE);
              height = Math.min(Math.ceil(Math.abs(height * combinedScale[1])), MAX_PATTERN_SIZE);
              const tmpCanvas = owner.cachedCanvases.getCanvas('pattern', width, height, true);
              const tmpCtx = tmpCanvas.context;
              const graphics = canvasGraphicsFactory.createCanvasGraphics(tmpCtx);
              graphics.groupLevel = owner.groupLevel;
              this.setFillAndStrokeStyleToContext(graphics, paintType, color);
              this.setScale(width, height, xstep, ystep);
              this.transformToScale(graphics);
              const tmpTranslate = [1, 0, 0, 1, -topLeft[0], -topLeft[1]];
              graphics.transform.apply(graphics, tmpTranslate);
              this.clipBbox(graphics, bbox, x0, y0, x1, y1);
              graphics.executeOperatorList(operatorList);
              return tmpCanvas.canvas;
            },
            setScale: function TilingPattern_setScale(width, height, xstep, ystep) {
              this.scale = [width / xstep, height / ystep];
            },
            transformToScale: function TilingPattern_transformToScale(graphics) {
              const scale = this.scale;
              const tmpScale = [scale[0], 0, 0, scale[1], 0, 0];
              graphics.transform.apply(graphics, tmpScale);
            },
            scaleToContext: function TilingPattern_scaleToContext() {
              const scale = this.scale;
              this.ctx.scale(1 / scale[0], 1 / scale[1]);
            },
            clipBbox: function clipBbox(graphics, bbox, x0, y0, x1, y1) {
              if (Array.isArray(bbox) && bbox.length === 4) {
                const bboxWidth = x1 - x0;
                const bboxHeight = y1 - y0;
                graphics.ctx.rect(x0, y0, bboxWidth, bboxHeight);
                graphics.clip();
                graphics.endPath();
              }
            },
            setFillAndStrokeStyleToContext: function setFillAndStrokeStyleToContext(graphics, paintType, color) {
              const context = graphics.ctx,
                current = graphics.current;
              switch (paintType) {
                case PaintType.COLORED:
                  var ctx = this.ctx;
                  context.fillStyle = ctx.fillStyle;
                  context.strokeStyle = ctx.strokeStyle;
                  current.fillColor = ctx.fillStyle;
                  current.strokeColor = ctx.strokeStyle;
                  break;
                case PaintType.UNCOLORED:
                  var cssColor = _util.Util.makeCssRgb(color[0], color[1], color[2]);
                  context.fillStyle = cssColor;
                  context.strokeStyle = cssColor;
                  current.fillColor = cssColor;
                  current.strokeColor = cssColor;
                  break;
                default:
                  throw new _util.FormatError('Unsupported paint type: ' + paintType);
              }
            },
            getPattern: function TilingPattern_getPattern(ctx, owner) {
              const temporaryPatternCanvas = this.createPatternCanvas(owner);
              ctx = this.ctx;
              ctx.setTransform.apply(ctx, this.baseTransform);
              ctx.transform.apply(ctx, this.matrix);
              this.scaleToContext();
              return ctx.createPattern(temporaryPatternCanvas, 'repeat');
            },
          };
          return TilingPattern;
        })();
        exports.getShadingPatternFromIR = getShadingPatternFromIR;
        exports.TilingPattern = TilingPattern;

        /***/
      },
      /* 135 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        const GlobalWorkerOptions = Object.create(null);
        GlobalWorkerOptions.workerPort = GlobalWorkerOptions.workerPort === undefined ? null : GlobalWorkerOptions.workerPort;
        GlobalWorkerOptions.workerSrc = GlobalWorkerOptions.workerSrc === undefined ? '' : GlobalWorkerOptions.workerSrc;
        exports.GlobalWorkerOptions = GlobalWorkerOptions;

        /***/
      },
      /* 136 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.MessageHandler = undefined;

        const _regenerator = __w_pdfjs_require__(137);

        const _regenerator2 = _interopRequireDefault(_regenerator);

        const _typeof =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (obj) {
                return typeof obj;
              }
            : function (obj) {
                return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              };

        const resolveCall = (function () {
          const _ref = _asyncToGenerator(
            /*#__PURE__*/ _regenerator2.default.mark(function _callee(fn, args) {
              const thisArg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
              return _regenerator2.default.wrap(
                function _callee$(_context) {
                  while (1) {
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        if (fn) {
                          _context.next = 2;
                          break;
                        }

                        return _context.abrupt('return');

                      case 2:
                        return _context.abrupt('return', fn.apply(thisArg, args));

                      case 3:
                      case 'end':
                        return _context.stop();
                    }
                  }
                },
                _callee,
                this,
              );
            }),
          );

          return function resolveCall(_x2, _x3) {
            return _ref.apply(this, arguments);
          };
        })();

        const _util = __w_pdfjs_require__(1);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _asyncToGenerator(fn) {
          return function () {
            const gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
              function step(key, arg) {
                try {
                  var info = gen[key](arg);
                  var value = info.value;
                } catch (error) {
                  reject(error);
                  return;
                }
                if (info.done) {
                  resolve(value);
                } else {
                  return Promise.resolve(value).then(
                    function (value) {
                      step('next', value);
                    },
                    function (err) {
                      step('throw', err);
                    },
                  );
                }
              }
              return step('next');
            });
          };
        }

        function wrapReason(reason) {
          if ((typeof reason === 'undefined' ? 'undefined' : _typeof(reason)) !== 'object') {
            return reason;
          }
          switch (reason.name) {
            case 'AbortException':
              return new _util.AbortException(reason.message);
            case 'MissingPDFException':
              return new _util.MissingPDFException(reason.message);
            case 'UnexpectedResponseException':
              return new _util.UnexpectedResponseException(reason.message, reason.status);
            default:
              return new _util.UnknownErrorException(reason.message, reason.details);
          }
        }
        function makeReasonSerializable(reason) {
          if (
            !(reason instanceof Error) ||
            reason instanceof _util.AbortException ||
            reason instanceof _util.MissingPDFException ||
            reason instanceof _util.UnexpectedResponseException ||
            reason instanceof _util.UnknownErrorException
          ) {
            return reason;
          }
          return new _util.UnknownErrorException(reason.message, reason.toString());
        }
        function resolveOrReject(capability, success, reason) {
          if (success) {
            capability.resolve();
          } else {
            capability.reject(reason);
          }
        }
        function finalize(promise) {
          return Promise.resolve(promise).catch(function () {});
        }
        function MessageHandler(sourceName, targetName, comObj) {
          const _this = this;

          this.sourceName = sourceName;
          this.targetName = targetName;
          this.comObj = comObj;
          this.callbackId = 1;
          this.streamId = 1;
          this.postMessageTransfers = true;
          this.streamSinks = Object.create(null);
          this.streamControllers = Object.create(null);
          const callbacksCapabilities = (this.callbacksCapabilities = Object.create(null));
          const ah = (this.actionHandler = Object.create(null));
          this._onComObjOnMessage = function (event) {
            const data = event.data;
            if (data.targetName !== _this.sourceName) {
              return;
            }
            if (data.stream) {
              _this._processStreamMessage(data);
            } else if (data.isReply) {
              const callbackId = data.callbackId;
              if (data.callbackId in callbacksCapabilities) {
                const callback = callbacksCapabilities[callbackId];
                delete callbacksCapabilities[callbackId];
                if ('error' in data) {
                  callback.reject(wrapReason(data.error));
                } else {
                  callback.resolve(data.data);
                }
              } else {
                throw new Error('Cannot resolve callback ' + callbackId);
              }
            } else if (data.action in ah) {
              const action = ah[data.action];
              if (data.callbackId) {
                const _sourceName = _this.sourceName;
                const _targetName = data.sourceName;
                Promise.resolve()
                  .then(function () {
                    return action[0].call(action[1], data.data);
                  })
                  .then(
                    function (result) {
                      comObj.postMessage({
                        sourceName: _sourceName,
                        targetName: _targetName,
                        isReply: true,
                        callbackId: data.callbackId,
                        data: result,
                      });
                    },
                    function (reason) {
                      comObj.postMessage({
                        sourceName: _sourceName,
                        targetName: _targetName,
                        isReply: true,
                        callbackId: data.callbackId,
                        error: makeReasonSerializable(reason),
                      });
                    },
                  );
              } else if (data.streamId) {
                _this._createStreamSink(data);
              } else {
                action[0].call(action[1], data.data);
              }
            } else {
              throw new Error('Unknown action from worker: ' + data.action);
            }
          };
          comObj.addEventListener('message', this._onComObjOnMessage);
        }
        MessageHandler.prototype = {
          on: function on(actionName, handler, scope) {
            const ah = this.actionHandler;
            if (ah[actionName]) {
              throw new Error('There is already an actionName called "' + actionName + '"');
            }
            ah[actionName] = [handler, scope];
          },
          send: function send(actionName, data, transfers) {
            const message = {
              sourceName: this.sourceName,
              targetName: this.targetName,
              action: actionName,
              data: data,
            };
            this.postMessage(message, transfers);
          },
          sendWithPromise: function sendWithPromise(actionName, data, transfers) {
            const callbackId = this.callbackId++;
            const message = {
              sourceName: this.sourceName,
              targetName: this.targetName,
              action: actionName,
              data: data,
              callbackId: callbackId,
            };
            const capability = (0, _util.createPromiseCapability)();
            this.callbacksCapabilities[callbackId] = capability;
            try {
              this.postMessage(message, transfers);
            } catch (e) {
              capability.reject(e);
            }
            return capability.promise;
          },
          sendWithStream: function sendWithStream(actionName, data, queueingStrategy, transfers) {
            const _this2 = this;

            const streamId = this.streamId++;
            const sourceName = this.sourceName;
            const targetName = this.targetName;
            return new _util.ReadableStream(
              {
                start: function start(controller) {
                  const startCapability = (0, _util.createPromiseCapability)();
                  _this2.streamControllers[streamId] = {
                    controller: controller,
                    startCall: startCapability,
                    isClosed: false,
                  };
                  _this2.postMessage({
                    sourceName: sourceName,
                    targetName: targetName,
                    action: actionName,
                    streamId: streamId,
                    data: data,
                    desiredSize: controller.desiredSize,
                  });
                  return startCapability.promise;
                },
                pull: function pull(controller) {
                  const pullCapability = (0, _util.createPromiseCapability)();
                  _this2.streamControllers[streamId].pullCall = pullCapability;
                  _this2.postMessage({
                    sourceName: sourceName,
                    targetName: targetName,
                    stream: 'pull',
                    streamId: streamId,
                    desiredSize: controller.desiredSize,
                  });
                  return pullCapability.promise;
                },
                cancel: function cancel(reason) {
                  const cancelCapability = (0, _util.createPromiseCapability)();
                  _this2.streamControllers[streamId].cancelCall = cancelCapability;
                  _this2.streamControllers[streamId].isClosed = true;
                  _this2.postMessage({
                    sourceName: sourceName,
                    targetName: targetName,
                    stream: 'cancel',
                    reason: reason,
                    streamId: streamId,
                  });
                  return cancelCapability.promise;
                },
              },
              queueingStrategy,
            );
          },
          _createStreamSink: function _createStreamSink(data) {
            const _this3 = this;

            const self = this;
            const action = this.actionHandler[data.action];
            const streamId = data.streamId;
            const desiredSize = data.desiredSize;
            const sourceName = this.sourceName;
            const targetName = data.sourceName;
            const capability = (0, _util.createPromiseCapability)();
            const sendStreamRequest = function sendStreamRequest(_ref2) {
              const stream = _ref2.stream,
                chunk = _ref2.chunk,
                transfers = _ref2.transfers,
                success = _ref2.success,
                reason = _ref2.reason;

              _this3.postMessage(
                {
                  sourceName: sourceName,
                  targetName: targetName,
                  stream: stream,
                  streamId: streamId,
                  chunk: chunk,
                  success: success,
                  reason: reason,
                },
                transfers,
              );
            };
            const streamSink = {
              enqueue: function enqueue(chunk) {
                const size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
                const transfers = arguments[2];

                if (this.isCancelled) {
                  return;
                }
                const lastDesiredSize = this.desiredSize;
                this.desiredSize -= size;
                if (lastDesiredSize > 0 && this.desiredSize <= 0) {
                  this.sinkCapability = (0, _util.createPromiseCapability)();
                  this.ready = this.sinkCapability.promise;
                }
                sendStreamRequest({
                  stream: 'enqueue',
                  chunk: chunk,
                  transfers: transfers,
                });
              },
              close: function close() {
                if (this.isCancelled) {
                  return;
                }
                this.isCancelled = true;
                sendStreamRequest({ stream: 'close' });
                delete self.streamSinks[streamId];
              },
              error: function error(reason) {
                if (this.isCancelled) {
                  return;
                }
                this.isCancelled = true;
                sendStreamRequest({
                  stream: 'error',
                  reason: reason,
                });
              },

              sinkCapability: capability,
              onPull: null,
              onCancel: null,
              isCancelled: false,
              desiredSize: desiredSize,
              ready: null,
            };
            streamSink.sinkCapability.resolve();
            streamSink.ready = streamSink.sinkCapability.promise;
            this.streamSinks[streamId] = streamSink;
            resolveCall(action[0], [data.data, streamSink], action[1]).then(
              function () {
                sendStreamRequest({
                  stream: 'start_complete',
                  success: true,
                });
              },
              function (reason) {
                sendStreamRequest({
                  stream: 'start_complete',
                  success: false,
                  reason: reason,
                });
              },
            );
          },
          _processStreamMessage: function _processStreamMessage(data) {
            const _this4 = this;

            const sourceName = this.sourceName;
            const targetName = data.sourceName;
            const streamId = data.streamId;
            const sendStreamResponse = function sendStreamResponse(_ref3) {
              const stream = _ref3.stream,
                success = _ref3.success,
                reason = _ref3.reason;

              _this4.comObj.postMessage({
                sourceName: sourceName,
                targetName: targetName,
                stream: stream,
                success: success,
                streamId: streamId,
                reason: reason,
              });
            };
            const deleteStreamController = function deleteStreamController() {
              Promise.all(
                [
                  _this4.streamControllers[data.streamId].startCall,
                  _this4.streamControllers[data.streamId].pullCall,
                  _this4.streamControllers[data.streamId].cancelCall,
                ].map(function (capability) {
                  return capability && finalize(capability.promise);
                }),
              ).then(function () {
                delete _this4.streamControllers[data.streamId];
              });
            };
            switch (data.stream) {
              case 'start_complete':
                resolveOrReject(this.streamControllers[data.streamId].startCall, data.success, wrapReason(data.reason));
                break;
              case 'pull_complete':
                resolveOrReject(this.streamControllers[data.streamId].pullCall, data.success, wrapReason(data.reason));
                break;
              case 'pull':
                if (!this.streamSinks[data.streamId]) {
                  sendStreamResponse({
                    stream: 'pull_complete',
                    success: true,
                  });
                  break;
                }
                if (this.streamSinks[data.streamId].desiredSize <= 0 && data.desiredSize > 0) {
                  this.streamSinks[data.streamId].sinkCapability.resolve();
                }
                this.streamSinks[data.streamId].desiredSize = data.desiredSize;
                resolveCall(this.streamSinks[data.streamId].onPull).then(
                  function () {
                    sendStreamResponse({
                      stream: 'pull_complete',
                      success: true,
                    });
                  },
                  function (reason) {
                    sendStreamResponse({
                      stream: 'pull_complete',
                      success: false,
                      reason: reason,
                    });
                  },
                );
                break;
              case 'enqueue':
                (0, _util.assert)(this.streamControllers[data.streamId], 'enqueue should have stream controller');
                if (!this.streamControllers[data.streamId].isClosed) {
                  this.streamControllers[data.streamId].controller.enqueue(data.chunk);
                }
                break;
              case 'close':
                (0, _util.assert)(this.streamControllers[data.streamId], 'close should have stream controller');
                if (this.streamControllers[data.streamId].isClosed) {
                  break;
                }
                this.streamControllers[data.streamId].isClosed = true;
                this.streamControllers[data.streamId].controller.close();
                deleteStreamController();
                break;
              case 'error':
                (0, _util.assert)(this.streamControllers[data.streamId], 'error should have stream controller');
                this.streamControllers[data.streamId].controller.error(wrapReason(data.reason));
                deleteStreamController();
                break;
              case 'cancel_complete':
                resolveOrReject(this.streamControllers[data.streamId].cancelCall, data.success, wrapReason(data.reason));
                deleteStreamController();
                break;
              case 'cancel':
                if (!this.streamSinks[data.streamId]) {
                  break;
                }
                resolveCall(this.streamSinks[data.streamId].onCancel, [wrapReason(data.reason)]).then(
                  function () {
                    sendStreamResponse({
                      stream: 'cancel_complete',
                      success: true,
                    });
                  },
                  function (reason) {
                    sendStreamResponse({
                      stream: 'cancel_complete',
                      success: false,
                      reason: reason,
                    });
                  },
                );
                this.streamSinks[data.streamId].sinkCapability.reject(wrapReason(data.reason));
                this.streamSinks[data.streamId].isCancelled = true;
                delete this.streamSinks[data.streamId];
                break;
              default:
                throw new Error('Unexpected stream case');
            }
          },
          postMessage: function postMessage(message, transfers) {
            if (transfers && this.postMessageTransfers) {
              this.comObj.postMessage(message, transfers);
            } else {
              this.comObj.postMessage(message);
            }
          },
          destroy: function destroy() {
            this.comObj.removeEventListener('message', this._onComObjOnMessage);
          },
        };
        exports.MessageHandler = MessageHandler;

        /***/
      },
      /* 137 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        module.exports = __w_pdfjs_require__(138);

        /***/
      },
      /* 138 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        const g =
          (function () {
            return this;
          })() || Function('return this')();
        const hadRuntime = g.regeneratorRuntime && Object.getOwnPropertyNames(g).indexOf('regeneratorRuntime') >= 0;
        const oldRuntime = hadRuntime && g.regeneratorRuntime;
        g.regeneratorRuntime = undefined;
        module.exports = __w_pdfjs_require__(139);
        if (hadRuntime) {
          g.regeneratorRuntime = oldRuntime;
        } else {
          try {
            delete g.regeneratorRuntime;
          } catch (e) {
            g.regeneratorRuntime = undefined;
          }
        }

        /***/
      },
      /* 139 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';
        /* WEBPACK VAR INJECTION */ (function (module) {
          const _typeof =
            typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype
                    ? 'symbol'
                    : typeof obj;
                };

          !(function (global) {
            'use strict';

            const Op = Object.prototype;
            const hasOwn = Op.hasOwnProperty;
            let undefined;
            const $Symbol = typeof Symbol === 'function' ? Symbol : {};
            const iteratorSymbol = $Symbol.iterator || '@@iterator';
            const asyncIteratorSymbol = $Symbol.asyncIterator || '@@asyncIterator';
            const toStringTagSymbol = $Symbol.toStringTag || '@@toStringTag';
            const inModule = (false ? undefined : _typeof(module)) === 'object';
            let runtime = global.regeneratorRuntime;
            if (runtime) {
              if (inModule) {
                module.exports = runtime;
              }
              return;
            }
            runtime = global.regeneratorRuntime = inModule ? module.exports : {};
            function wrap(innerFn, outerFn, self, tryLocsList) {
              const protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
              const generator = Object.create(protoGenerator.prototype);
              const context = new Context(tryLocsList || []);
              generator._invoke = makeInvokeMethod(innerFn, self, context);
              return generator;
            }
            runtime.wrap = wrap;
            function tryCatch(fn, obj, arg) {
              try {
                return {
                  type: 'normal',
                  arg: fn.call(obj, arg),
                };
              } catch (err) {
                return {
                  type: 'throw',
                  arg: err,
                };
              }
            }
            const GenStateSuspendedStart = 'suspendedStart';
            const GenStateSuspendedYield = 'suspendedYield';
            const GenStateExecuting = 'executing';
            const GenStateCompleted = 'completed';
            const ContinueSentinel = {};
            function Generator() {}
            function GeneratorFunction() {}
            function GeneratorFunctionPrototype() {}
            let IteratorPrototype = {};
            IteratorPrototype[iteratorSymbol] = function () {
              return this;
            };
            const getProto = Object.getPrototypeOf;
            const NativeIteratorPrototype = getProto && getProto(getProto(values([])));
            if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
              IteratorPrototype = NativeIteratorPrototype;
            }
            const Gp = (GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype));
            GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
            GeneratorFunctionPrototype.constructor = GeneratorFunction;
            GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = 'GeneratorFunction';
            function defineIteratorMethods(prototype) {
              ['next', 'throw', 'return'].forEach(function (method) {
                prototype[method] = function (arg) {
                  return this._invoke(method, arg);
                };
              });
            }
            runtime.isGeneratorFunction = function (genFun) {
              const ctor = typeof genFun === 'function' && genFun.constructor;
              return ctor ? ctor === GeneratorFunction || (ctor.displayName || ctor.name) === 'GeneratorFunction' : false;
            };
            runtime.mark = function (genFun) {
              if (Object.setPrototypeOf) {
                Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
              } else {
                genFun.__proto__ = GeneratorFunctionPrototype;
                if (!(toStringTagSymbol in genFun)) {
                  genFun[toStringTagSymbol] = 'GeneratorFunction';
                }
              }
              genFun.prototype = Object.create(Gp);
              return genFun;
            };
            runtime.awrap = function (arg) {
              return { __await: arg };
            };
            function AsyncIterator(generator) {
              function invoke(method, arg, resolve, reject) {
                const record = tryCatch(generator[method], generator, arg);
                if (record.type === 'throw') {
                  reject(record.arg);
                } else {
                  const result = record.arg;
                  const value = result.value;
                  if (
                    value &&
                    (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' &&
                    hasOwn.call(value, '__await')
                  ) {
                    return Promise.resolve(value.__await).then(
                      function (value) {
                        invoke('next', value, resolve, reject);
                      },
                      function (err) {
                        invoke('throw', err, resolve, reject);
                      },
                    );
                  }
                  return Promise.resolve(value).then(function (unwrapped) {
                    result.value = unwrapped;
                    resolve(result);
                  }, reject);
                }
              }
              let previousPromise;
              function enqueue(method, arg) {
                function callInvokeWithMethodAndArg() {
                  return new Promise(function (resolve, reject) {
                    invoke(method, arg, resolve, reject);
                  });
                }
                return (previousPromise = previousPromise
                  ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
                  : callInvokeWithMethodAndArg());
              }
              this._invoke = enqueue;
            }
            defineIteratorMethods(AsyncIterator.prototype);
            AsyncIterator.prototype[asyncIteratorSymbol] = function () {
              return this;
            };
            runtime.AsyncIterator = AsyncIterator;
            runtime.async = function (innerFn, outerFn, self, tryLocsList) {
              const iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
              return runtime.isGeneratorFunction(outerFn)
                ? iter
                : iter.next().then(function (result) {
                    return result.done ? result.value : iter.next();
                  });
            };
            function makeInvokeMethod(innerFn, self, context) {
              let state = GenStateSuspendedStart;
              return function invoke(method, arg) {
                if (state === GenStateExecuting) {
                  throw new Error('Generator is already running');
                }
                if (state === GenStateCompleted) {
                  if (method === 'throw') {
                    throw arg;
                  }
                  return doneResult();
                }
                context.method = method;
                context.arg = arg;
                while (true) {
                  const delegate = context.delegate;
                  if (delegate) {
                    const delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                      if (delegateResult === ContinueSentinel) {
                        continue;
                      }
                      return delegateResult;
                    }
                  }
                  if (context.method === 'next') {
                    context.sent = context._sent = context.arg;
                  } else if (context.method === 'throw') {
                    if (state === GenStateSuspendedStart) {
                      state = GenStateCompleted;
                      throw context.arg;
                    }
                    context.dispatchException(context.arg);
                  } else if (context.method === 'return') {
                    context.abrupt('return', context.arg);
                  }
                  state = GenStateExecuting;
                  const record = tryCatch(innerFn, self, context);
                  if (record.type === 'normal') {
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) {
                      continue;
                    }
                    return {
                      value: record.arg,
                      done: context.done,
                    };
                  } else if (record.type === 'throw') {
                    state = GenStateCompleted;
                    context.method = 'throw';
                    context.arg = record.arg;
                  }
                }
              };
            }
            function maybeInvokeDelegate(delegate, context) {
              const method = delegate.iterator[context.method];
              if (method === undefined) {
                context.delegate = null;
                if (context.method === 'throw') {
                  if (delegate.iterator.return) {
                    context.method = 'return';
                    context.arg = undefined;
                    maybeInvokeDelegate(delegate, context);
                    if (context.method === 'throw') {
                      return ContinueSentinel;
                    }
                  }
                  context.method = 'throw';
                  context.arg = new TypeError("The iterator does not provide a 'throw' method");
                }
                return ContinueSentinel;
              }
              const record = tryCatch(method, delegate.iterator, context.arg);
              if (record.type === 'throw') {
                context.method = 'throw';
                context.arg = record.arg;
                context.delegate = null;
                return ContinueSentinel;
              }
              const info = record.arg;
              if (!info) {
                context.method = 'throw';
                context.arg = new TypeError('iterator result is not an object');
                context.delegate = null;
                return ContinueSentinel;
              }
              if (info.done) {
                context[delegate.resultName] = info.value;
                context.next = delegate.nextLoc;
                if (context.method !== 'return') {
                  context.method = 'next';
                  context.arg = undefined;
                }
              } else {
                return info;
              }
              context.delegate = null;
              return ContinueSentinel;
            }
            defineIteratorMethods(Gp);
            Gp[toStringTagSymbol] = 'Generator';
            Gp[iteratorSymbol] = function () {
              return this;
            };
            Gp.toString = function () {
              return '[object Generator]';
            };
            function pushTryEntry(locs) {
              const entry = { tryLoc: locs[0] };
              if (1 in locs) {
                entry.catchLoc = locs[1];
              }
              if (2 in locs) {
                entry.finallyLoc = locs[2];
                entry.afterLoc = locs[3];
              }
              this.tryEntries.push(entry);
            }
            function resetTryEntry(entry) {
              const record = entry.completion || {};
              record.type = 'normal';
              delete record.arg;
              entry.completion = record;
            }
            function Context(tryLocsList) {
              this.tryEntries = [{ tryLoc: 'root' }];
              tryLocsList.forEach(pushTryEntry, this);
              this.reset(true);
            }
            runtime.keys = function (object) {
              const keys = [];
              for (const key in object) {
                keys.push(key);
              }
              keys.reverse();
              return function next() {
                while (keys.length) {
                  const key = keys.pop();
                  if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                  }
                }
                next.done = true;
                return next;
              };
            };
            function values(iterable) {
              if (iterable) {
                const iteratorMethod = iterable[iteratorSymbol];
                if (iteratorMethod) {
                  return iteratorMethod.call(iterable);
                }
                if (typeof iterable.next === 'function') {
                  return iterable;
                }
                if (!isNaN(iterable.length)) {
                  let i = -1,
                    next = function next() {
                      while (++i < iterable.length) {
                        if (hasOwn.call(iterable, i)) {
                          next.value = iterable[i];
                          next.done = false;
                          return next;
                        }
                      }
                      next.value = undefined;
                      next.done = true;
                      return next;
                    };
                  return (next.next = next);
                }
              }
              return { next: doneResult };
            }
            runtime.values = values;
            function doneResult() {
              return {
                value: undefined,
                done: true,
              };
            }
            Context.prototype = {
              constructor: Context,
              reset: function reset(skipTempReset) {
                this.prev = 0;
                this.next = 0;
                this.sent = this._sent = undefined;
                this.done = false;
                this.delegate = null;
                this.method = 'next';
                this.arg = undefined;
                this.tryEntries.forEach(resetTryEntry);
                if (!skipTempReset) {
                  for (const name in this) {
                    if (name.charAt(0) === 't' && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                      this[name] = undefined;
                    }
                  }
                }
              },
              stop: function stop() {
                this.done = true;
                const rootEntry = this.tryEntries[0];
                const rootRecord = rootEntry.completion;
                if (rootRecord.type === 'throw') {
                  throw rootRecord.arg;
                }
                return this.rval;
              },
              dispatchException: function dispatchException(exception) {
                if (this.done) {
                  throw exception;
                }
                const context = this;
                function handle(loc, caught) {
                  record.type = 'throw';
                  record.arg = exception;
                  context.next = loc;
                  if (caught) {
                    context.method = 'next';
                    context.arg = undefined;
                  }
                  return !!caught;
                }
                for (let i = this.tryEntries.length - 1; i >= 0; --i) {
                  const entry = this.tryEntries[i];
                  var record = entry.completion;
                  if (entry.tryLoc === 'root') {
                    return handle('end');
                  }
                  if (entry.tryLoc <= this.prev) {
                    const hasCatch = hasOwn.call(entry, 'catchLoc');
                    const hasFinally = hasOwn.call(entry, 'finallyLoc');
                    if (hasCatch && hasFinally) {
                      if (this.prev < entry.catchLoc) {
                        return handle(entry.catchLoc, true);
                      } else if (this.prev < entry.finallyLoc) {
                        return handle(entry.finallyLoc);
                      }
                    } else if (hasCatch) {
                      if (this.prev < entry.catchLoc) {
                        return handle(entry.catchLoc, true);
                      }
                    } else if (hasFinally) {
                      if (this.prev < entry.finallyLoc) {
                        return handle(entry.finallyLoc);
                      }
                    } else {
                      throw new Error('try statement without catch or finally');
                    }
                  }
                }
              },
              abrupt: function abrupt(type, arg) {
                for (let i = this.tryEntries.length - 1; i >= 0; --i) {
                  const entry = this.tryEntries[i];
                  if (entry.tryLoc <= this.prev && hasOwn.call(entry, 'finallyLoc') && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                  }
                }
                if (
                  finallyEntry &&
                  (type === 'break' || type === 'continue') &&
                  finallyEntry.tryLoc <= arg &&
                  arg <= finallyEntry.finallyLoc
                ) {
                  finallyEntry = null;
                }
                const record = finallyEntry ? finallyEntry.completion : {};
                record.type = type;
                record.arg = arg;
                if (finallyEntry) {
                  this.method = 'next';
                  this.next = finallyEntry.finallyLoc;
                  return ContinueSentinel;
                }
                return this.complete(record);
              },
              complete: function complete(record, afterLoc) {
                if (record.type === 'throw') {
                  throw record.arg;
                }
                if (record.type === 'break' || record.type === 'continue') {
                  this.next = record.arg;
                } else if (record.type === 'return') {
                  this.rval = this.arg = record.arg;
                  this.method = 'return';
                  this.next = 'end';
                } else if (record.type === 'normal' && afterLoc) {
                  this.next = afterLoc;
                }
                return ContinueSentinel;
              },
              finish: function finish(finallyLoc) {
                for (let i = this.tryEntries.length - 1; i >= 0; --i) {
                  const entry = this.tryEntries[i];
                  if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                  }
                }
              },
              catch: function _catch(tryLoc) {
                for (let i = this.tryEntries.length - 1; i >= 0; --i) {
                  const entry = this.tryEntries[i];
                  if (entry.tryLoc === tryLoc) {
                    const record = entry.completion;
                    if (record.type === 'throw') {
                      var thrown = record.arg;
                      resetTryEntry(entry);
                    }
                    return thrown;
                  }
                }
                throw new Error('illegal catch attempt');
              },
              delegateYield: function delegateYield(iterable, resultName, nextLoc) {
                this.delegate = {
                  iterator: values(iterable),
                  resultName: resultName,
                  nextLoc: nextLoc,
                };
                if (this.method === 'next') {
                  this.arg = undefined;
                }
                return ContinueSentinel;
              },
            };
          })(
            (function () {
              return this;
            })() || Function('return this')(),
          );
          /* WEBPACK VAR INJECTION */
        }.call(this, __w_pdfjs_require__(140)(module)));

        /***/
      },
      /* 140 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        module.exports = function (module) {
          if (!module.webpackPolyfill) {
            module.deprecate = function () {};
            module.paths = [];
            if (!module.children) {
              module.children = [];
            }
            Object.defineProperty(module, 'loaded', {
              enumerable: true,
              get: function get() {
                return module.l;
              },
            });
            Object.defineProperty(module, 'id', {
              enumerable: true,
              get: function get() {
                return module.i;
              },
            });
            module.webpackPolyfill = 1;
          }
          return module;
        };

        /***/
      },
      /* 141 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.Metadata = undefined;

        const _createClass = (function () {
          function defineProperties(target, props) {
            for (let i = 0; i < props.length; i++) {
              const descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) {
                descriptor.writable = true;
              }
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function (Constructor, protoProps, staticProps) {
            if (protoProps) {
              defineProperties(Constructor.prototype, protoProps);
            }
            if (staticProps) {
              defineProperties(Constructor, staticProps);
            }
            return Constructor;
          };
        })();

        const _util = __w_pdfjs_require__(1);

        const _xml_parser = __w_pdfjs_require__(142);

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        const Metadata = (function () {
          function Metadata(data) {
            _classCallCheck(this, Metadata);

            (0, _util.assert)(typeof data === 'string', 'Metadata: input is not a string');
            data = this._repair(data);
            const parser = new _xml_parser.SimpleXMLParser();
            const xmlDocument = parser.parseFromString(data);
            this._metadata = Object.create(null);
            if (xmlDocument) {
              this._parse(xmlDocument);
            }
          }

          _createClass(Metadata, [
            {
              key: '_repair',
              value: function _repair(data) {
                return data.replace(/>\\376\\377([^<]+)/g, function (all, codes) {
                  const bytes = codes
                    .replace(/\\([0-3])([0-7])([0-7])/g, function (code, d1, d2, d3) {
                      return String.fromCharCode(d1 * 64 + d2 * 8 + d3 * 1);
                    })
                    .replace(/&(amp|apos|gt|lt|quot);/g, function (str, name) {
                      switch (name) {
                        case 'amp':
                          return '&';
                        case 'apos':
                          return "'";
                        case 'gt':
                          return '>';
                        case 'lt':
                          return '<';
                        case 'quot':
                          return '"';
                      }
                      throw new Error('_repair: ' + name + " isn't defined.");
                    });
                  let chars = '';
                  for (let i = 0, ii = bytes.length; i < ii; i += 2) {
                    const code = bytes.charCodeAt(i) * 256 + bytes.charCodeAt(i + 1);
                    if (code >= 32 && code < 127 && code !== 60 && code !== 62 && code !== 38) {
                      chars += String.fromCharCode(code);
                    } else {
                      chars += '&#x' + (0x10000 + code).toString(16).substring(1) + ';';
                    }
                  }
                  return '>' + chars;
                });
              },
            },
            {
              key: '_parse',
              value: function _parse(xmlDocument) {
                let rdf = xmlDocument.documentElement;
                if (rdf.nodeName.toLowerCase() !== 'rdf:rdf') {
                  rdf = rdf.firstChild;
                  while (rdf && rdf.nodeName.toLowerCase() !== 'rdf:rdf') {
                    rdf = rdf.nextSibling;
                  }
                }
                const nodeName = rdf ? rdf.nodeName.toLowerCase() : null;
                if (!rdf || nodeName !== 'rdf:rdf' || !rdf.hasChildNodes()) {
                  return;
                }
                const children = rdf.childNodes;
                for (let i = 0, ii = children.length; i < ii; i++) {
                  const desc = children[i];
                  if (desc.nodeName.toLowerCase() !== 'rdf:description') {
                    continue;
                  }
                  for (let j = 0, jj = desc.childNodes.length; j < jj; j++) {
                    if (desc.childNodes[j].nodeName.toLowerCase() !== '#text') {
                      const entry = desc.childNodes[j];
                      const name = entry.nodeName.toLowerCase();
                      this._metadata[name] = entry.textContent.trim();
                    }
                  }
                }
              },
            },
            {
              key: 'get',
              value: function get(name) {
                return this._metadata[name] || null;
              },
            },
            {
              key: 'getAll',
              value: function getAll() {
                return this._metadata;
              },
            },
            {
              key: 'has',
              value: function has(name) {
                return typeof this._metadata[name] !== 'undefined';
              },
            },
          ]);

          return Metadata;
        })();

        exports.Metadata = Metadata;

        /***/
      },
      /* 142 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });

        const _slicedToArray = (function () {
          function sliceIterator(arr, i) {
            const _arr = [];
            let _n = true;
            let _d = false;
            let _e = undefined;
            try {
              for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);
                if (i && _arr.length === i) {
                  break;
                }
              }
            } catch (err) {
              _d = true;
              _e = err;
            } finally {
              try {
                if (!_n && _i['return']) {
                  _i['return']();
                }
              } finally {
                if (_d) {
                  throw _e;
                }
              }
            }
            return _arr;
          }
          return function (arr, i) {
            if (Array.isArray(arr)) {
              return arr;
            } else if (Symbol.iterator in Object(arr)) {
              return sliceIterator(arr, i);
            } else {
              throw new TypeError('Invalid attempt to destructure non-iterable instance');
            }
          };
        })();

        const _get = function get(object, property, receiver) {
          if (object === null) {
            object = Function.prototype;
          }
          const desc = Object.getOwnPropertyDescriptor(object, property);
          if (desc === undefined) {
            const parent = Object.getPrototypeOf(object);
            if (parent === null) {
              return undefined;
            } else {
              return get(parent, property, receiver);
            }
          } else if ('value' in desc) {
            return desc.value;
          } else {
            const getter = desc.get;
            if (getter === undefined) {
              return undefined;
            }
            return getter.call(receiver);
          }
        };

        const _createClass = (function () {
          function defineProperties(target, props) {
            for (let i = 0; i < props.length; i++) {
              const descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) {
                descriptor.writable = true;
              }
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function (Constructor, protoProps, staticProps) {
            if (protoProps) {
              defineProperties(Constructor.prototype, protoProps);
            }
            if (staticProps) {
              defineProperties(Constructor, staticProps);
            }
            return Constructor;
          };
        })();

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: { value: subClass, enumerable: false, writable: true, configurable: true },
          });
          if (superClass) {
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : (subClass.__proto__ = superClass);
          }
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        const XMLParserErrorCode = {
          NoError: 0,
          EndOfDocument: -1,
          UnterminatedCdat: -2,
          UnterminatedXmlDeclaration: -3,
          UnterminatedDoctypeDeclaration: -4,
          UnterminatedComment: -5,
          MalformedElement: -6,
          OutOfMemory: -7,
          UnterminatedAttributeValue: -8,
          UnterminatedElement: -9,
          ElementNeverBegun: -10,
        };
        function isWhitespace(s, index) {
          const ch = s[index];
          return ch === ' ' || ch === '\n' || ch === '\r' || ch === '\t';
        }
        function isWhitespaceString(s) {
          for (let i = 0, ii = s.length; i < ii; i++) {
            if (!isWhitespace(s, i)) {
              return false;
            }
          }
          return true;
        }

        const XMLParserBase = (function () {
          function XMLParserBase() {
            _classCallCheck(this, XMLParserBase);
          }

          _createClass(XMLParserBase, [
            {
              key: '_resolveEntities',
              value: function _resolveEntities(s) {
                return s.replace(/&([^;]+);/g, function (all, entity) {
                  if (entity.substring(0, 2) === '#x') {
                    return String.fromCharCode(parseInt(entity.substring(2), 16));
                  } else if (entity.substring(0, 1) === '#') {
                    return String.fromCharCode(parseInt(entity.substring(1), 10));
                  }
                  switch (entity) {
                    case 'lt':
                      return '<';
                    case 'gt':
                      return '>';
                    case 'amp':
                      return '&';
                    case 'quot':
                      return '"';
                  }
                  return this.onResolveEntity(entity);
                });
              },
            },
            {
              key: '_parseContent',
              value: function _parseContent(s, start) {
                let pos = start,
                  name = void 0,
                  attributes = [];
                function skipWs() {
                  while (pos < s.length && isWhitespace(s, pos)) {
                    ++pos;
                  }
                }
                while (pos < s.length && !isWhitespace(s, pos) && s[pos] !== '>' && s[pos] !== '/') {
                  ++pos;
                }
                name = s.substring(start, pos);
                skipWs();
                while (pos < s.length && s[pos] !== '>' && s[pos] !== '/' && s[pos] !== '?') {
                  skipWs();
                  let attrName = '',
                    attrValue = '';
                  while (pos < s.length && !isWhitespace(s, pos) && s[pos] !== '=') {
                    attrName += s[pos];
                    ++pos;
                  }
                  skipWs();
                  if (s[pos] !== '=') {
                    return null;
                  }
                  ++pos;
                  skipWs();
                  const attrEndChar = s[pos];
                  if (attrEndChar !== '"' && attrEndChar !== "'") {
                    return null;
                  }
                  const attrEndIndex = s.indexOf(attrEndChar, ++pos);
                  if (attrEndIndex < 0) {
                    return null;
                  }
                  attrValue = s.substring(pos, attrEndIndex);
                  attributes.push({
                    name: attrName,
                    value: this._resolveEntities(attrValue),
                  });
                  pos = attrEndIndex + 1;
                  skipWs();
                }
                return {
                  name: name,
                  attributes: attributes,
                  parsed: pos - start,
                };
              },
            },
            {
              key: '_parseProcessingInstruction',
              value: function _parseProcessingInstruction(s, start) {
                let pos = start,
                  name = void 0,
                  value = void 0;
                function skipWs() {
                  while (pos < s.length && isWhitespace(s, pos)) {
                    ++pos;
                  }
                }
                while (pos < s.length && !isWhitespace(s, pos) && s[pos] !== '>' && s[pos] !== '/') {
                  ++pos;
                }
                name = s.substring(start, pos);
                skipWs();
                const attrStart = pos;
                while (pos < s.length && (s[pos] !== '?' || s[pos + 1] !== '>')) {
                  ++pos;
                }
                value = s.substring(attrStart, pos);
                return {
                  name: name,
                  value: value,
                  parsed: pos - start,
                };
              },
            },
            {
              key: 'parseXml',
              value: function parseXml(s) {
                let i = 0;
                while (i < s.length) {
                  const ch = s[i];
                  let j = i;
                  if (ch === '<') {
                    ++j;
                    const ch2 = s[j];
                    let q = void 0;
                    switch (ch2) {
                      case '/':
                        ++j;
                        q = s.indexOf('>', j);
                        if (q < 0) {
                          this.onError(XMLParserErrorCode.UnterminatedElement);
                          return;
                        }
                        this.onEndElement(s.substring(j, q));
                        j = q + 1;
                        break;
                      case '?':
                        ++j;
                        var pi = this._parseProcessingInstruction(s, j);
                        if (s.substring(j + pi.parsed, j + pi.parsed + 2) !== '?>') {
                          this.onError(XMLParserErrorCode.UnterminatedXmlDeclaration);
                          return;
                        }
                        this.onPi(pi.name, pi.value);
                        j += pi.parsed + 2;
                        break;
                      case '!':
                        if (s.substring(j + 1, j + 3) === '--') {
                          q = s.indexOf('-->', j + 3);
                          if (q < 0) {
                            this.onError(XMLParserErrorCode.UnterminatedComment);
                            return;
                          }
                          this.onComment(s.substring(j + 3, q));
                          j = q + 3;
                        } else if (s.substring(j + 1, j + 8) === '[CDATA[') {
                          q = s.indexOf(']]>', j + 8);
                          if (q < 0) {
                            this.onError(XMLParserErrorCode.UnterminatedCdat);
                            return;
                          }
                          this.onCdata(s.substring(j + 8, q));
                          j = q + 3;
                        } else if (s.substring(j + 1, j + 8) === 'DOCTYPE') {
                          const q2 = s.indexOf('[', j + 8);
                          let complexDoctype = false;
                          q = s.indexOf('>', j + 8);
                          if (q < 0) {
                            this.onError(XMLParserErrorCode.UnterminatedDoctypeDeclaration);
                            return;
                          }
                          if (q2 > 0 && q > q2) {
                            q = s.indexOf(']>', j + 8);
                            if (q < 0) {
                              this.onError(XMLParserErrorCode.UnterminatedDoctypeDeclaration);
                              return;
                            }
                            complexDoctype = true;
                          }
                          const doctypeContent = s.substring(j + 8, q + (complexDoctype ? 1 : 0));
                          this.onDoctype(doctypeContent);
                          j = q + (complexDoctype ? 2 : 1);
                        } else {
                          this.onError(XMLParserErrorCode.MalformedElement);
                          return;
                        }
                        break;
                      default:
                        var content = this._parseContent(s, j);
                        if (content === null) {
                          this.onError(XMLParserErrorCode.MalformedElement);
                          return;
                        }
                        var isClosed = false;
                        if (s.substring(j + content.parsed, j + content.parsed + 2) === '/>') {
                          isClosed = true;
                        } else if (s.substring(j + content.parsed, j + content.parsed + 1) !== '>') {
                          this.onError(XMLParserErrorCode.UnterminatedElement);
                          return;
                        }
                        this.onBeginElement(content.name, content.attributes, isClosed);
                        j += content.parsed + (isClosed ? 2 : 1);
                        break;
                    }
                  } else {
                    while (j < s.length && s[j] !== '<') {
                      j++;
                    }
                    const text = s.substring(i, j);
                    this.onText(this._resolveEntities(text));
                  }
                  i = j;
                }
              },
            },
            {
              key: 'onResolveEntity',
              value: function onResolveEntity(name) {
                return '&' + name + ';';
              },
            },
            {
              key: 'onPi',
              value: function onPi(name, value) {},
            },
            {
              key: 'onComment',
              value: function onComment(text) {},
            },
            {
              key: 'onCdata',
              value: function onCdata(text) {},
            },
            {
              key: 'onDoctype',
              value: function onDoctype(doctypeContent) {},
            },
            {
              key: 'onText',
              value: function onText(text) {},
            },
            {
              key: 'onBeginElement',
              value: function onBeginElement(name, attributes, isEmpty) {},
            },
            {
              key: 'onEndElement',
              value: function onEndElement(name) {},
            },
            {
              key: 'onError',
              value: function onError(code) {},
            },
          ]);

          return XMLParserBase;
        })();

        const SimpleDOMNode = (function () {
          function SimpleDOMNode(nodeName, nodeValue) {
            _classCallCheck(this, SimpleDOMNode);

            this.nodeName = nodeName;
            this.nodeValue = nodeValue;
            Object.defineProperty(this, 'parentNode', {
              value: null,
              writable: true,
            });
          }

          _createClass(SimpleDOMNode, [
            {
              key: 'hasChildNodes',
              value: function hasChildNodes() {
                return this.childNodes && this.childNodes.length > 0;
              },
            },
            {
              key: 'firstChild',
              get: function get() {
                return this.childNodes[0];
              },
            },
            {
              key: 'nextSibling',
              get: function get() {
                const index = this.parentNode.childNodes.indexOf(this);
                return this.parentNode.childNodes[index + 1];
              },
            },
            {
              key: 'textContent',
              get: function get() {
                if (!this.childNodes) {
                  return this.nodeValue || '';
                }
                return this.childNodes
                  .map(function (child) {
                    return child.textContent;
                  })
                  .join('');
              },
            },
          ]);

          return SimpleDOMNode;
        })();

        const SimpleXMLParser = (function (_XMLParserBase) {
          _inherits(SimpleXMLParser, _XMLParserBase);

          function SimpleXMLParser() {
            _classCallCheck(this, SimpleXMLParser);

            const _this = _possibleConstructorReturn(
              this,
              (SimpleXMLParser.__proto__ || Object.getPrototypeOf(SimpleXMLParser)).call(this),
            );

            _this._currentFragment = null;
            _this._stack = null;
            _this._errorCode = XMLParserErrorCode.NoError;
            return _this;
          }

          _createClass(SimpleXMLParser, [
            {
              key: 'parseFromString',
              value: function parseFromString(data) {
                this._currentFragment = [];
                this._stack = [];
                this._errorCode = XMLParserErrorCode.NoError;
                this.parseXml(data);
                if (this._errorCode !== XMLParserErrorCode.NoError) {
                  return undefined;
                }

                const _currentFragment = _slicedToArray(this._currentFragment, 1),
                  documentElement = _currentFragment[0];

                if (!documentElement) {
                  return undefined;
                }
                return { documentElement: documentElement };
              },
            },
            {
              key: 'onResolveEntity',
              value: function onResolveEntity(name) {
                switch (name) {
                  case 'apos':
                    return "'";
                }
                return _get(
                  SimpleXMLParser.prototype.__proto__ || Object.getPrototypeOf(SimpleXMLParser.prototype),
                  'onResolveEntity',
                  this,
                ).call(this, name);
              },
            },
            {
              key: 'onText',
              value: function onText(text) {
                if (isWhitespaceString(text)) {
                  return;
                }
                const node = new SimpleDOMNode('#text', text);
                this._currentFragment.push(node);
              },
            },
            {
              key: 'onCdata',
              value: function onCdata(text) {
                const node = new SimpleDOMNode('#text', text);
                this._currentFragment.push(node);
              },
            },
            {
              key: 'onBeginElement',
              value: function onBeginElement(name, attributes, isEmpty) {
                const node = new SimpleDOMNode(name);
                node.childNodes = [];
                this._currentFragment.push(node);
                if (isEmpty) {
                  return;
                }
                this._stack.push(this._currentFragment);
                this._currentFragment = node.childNodes;
              },
            },
            {
              key: 'onEndElement',
              value: function onEndElement(name) {
                this._currentFragment = this._stack.pop();
                const lastElement = this._currentFragment[this._currentFragment.length - 1];
                for (let i = 0, ii = lastElement.childNodes.length; i < ii; i++) {
                  lastElement.childNodes[i].parentNode = lastElement;
                }
              },
            },
            {
              key: 'onError',
              value: function onError(code) {
                this._errorCode = code;
              },
            },
          ]);

          return SimpleXMLParser;
        })(XMLParserBase);

        exports.SimpleXMLParser = SimpleXMLParser;

        /***/
      },
      /* 143 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.PDFDataTransportStream = undefined;

        const _regenerator = __w_pdfjs_require__(137);

        const _regenerator2 = _interopRequireDefault(_regenerator);

        const _util = __w_pdfjs_require__(1);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _asyncToGenerator(fn) {
          return function () {
            const gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
              function step(key, arg) {
                try {
                  var info = gen[key](arg);
                  var value = info.value;
                } catch (error) {
                  reject(error);
                  return;
                }
                if (info.done) {
                  resolve(value);
                } else {
                  return Promise.resolve(value).then(
                    function (value) {
                      step('next', value);
                    },
                    function (err) {
                      step('throw', err);
                    },
                  );
                }
              }
              return step('next');
            });
          };
        }

        const PDFDataTransportStream = (function PDFDataTransportStreamClosure() {
          function PDFDataTransportStream(params, pdfDataRangeTransport) {
            const _this = this;

            (0, _util.assert)(pdfDataRangeTransport);
            this._queuedChunks = [];
            const initialData = params.initialData;
            if (initialData && initialData.length > 0) {
              const buffer = new Uint8Array(initialData).buffer;
              this._queuedChunks.push(buffer);
            }
            this._pdfDataRangeTransport = pdfDataRangeTransport;
            this._isStreamingSupported = !params.disableStream;
            this._isRangeSupported = !params.disableRange;
            this._contentLength = params.length;
            this._fullRequestReader = null;
            this._rangeReaders = [];
            this._pdfDataRangeTransport.addRangeListener(function (begin, chunk) {
              _this._onReceiveData({
                begin: begin,
                chunk: chunk,
              });
            });
            this._pdfDataRangeTransport.addProgressListener(function (loaded) {
              _this._onProgress({ loaded: loaded });
            });
            this._pdfDataRangeTransport.addProgressiveReadListener(function (chunk) {
              _this._onReceiveData({ chunk: chunk });
            });
            this._pdfDataRangeTransport.transportReady();
          }
          PDFDataTransportStream.prototype = {
            _onReceiveData: function PDFDataTransportStream_onReceiveData(args) {
              const buffer = new Uint8Array(args.chunk).buffer;
              if (args.begin === undefined) {
                if (this._fullRequestReader) {
                  this._fullRequestReader._enqueue(buffer);
                } else {
                  this._queuedChunks.push(buffer);
                }
              } else {
                const found = this._rangeReaders.some(function (rangeReader) {
                  if (rangeReader._begin !== args.begin) {
                    return false;
                  }
                  rangeReader._enqueue(buffer);
                  return true;
                });
                (0, _util.assert)(found);
              }
            },
            _onProgress: function PDFDataTransportStream_onDataProgress(evt) {
              if (this._rangeReaders.length > 0) {
                const firstReader = this._rangeReaders[0];
                if (firstReader.onProgress) {
                  firstReader.onProgress({ loaded: evt.loaded });
                }
              }
            },
            _removeRangeReader: function PDFDataTransportStream_removeRangeReader(reader) {
              const i = this._rangeReaders.indexOf(reader);
              if (i >= 0) {
                this._rangeReaders.splice(i, 1);
              }
            },
            getFullReader: function PDFDataTransportStream_getFullReader() {
              (0, _util.assert)(!this._fullRequestReader);
              const queuedChunks = this._queuedChunks;
              this._queuedChunks = null;
              return new PDFDataTransportStreamReader(this, queuedChunks);
            },
            getRangeReader: function PDFDataTransportStream_getRangeReader(begin, end) {
              const reader = new PDFDataTransportStreamRangeReader(this, begin, end);
              this._pdfDataRangeTransport.requestDataRange(begin, end);
              this._rangeReaders.push(reader);
              return reader;
            },
            cancelAllRequests: function PDFDataTransportStream_cancelAllRequests(reason) {
              if (this._fullRequestReader) {
                this._fullRequestReader.cancel(reason);
              }
              const readers = this._rangeReaders.slice(0);
              readers.forEach(function (rangeReader) {
                rangeReader.cancel(reason);
              });
              this._pdfDataRangeTransport.abort();
            },
          };
          function PDFDataTransportStreamReader(stream, queuedChunks) {
            this._stream = stream;
            this._done = false;
            this._filename = null;
            this._queuedChunks = queuedChunks || [];
            this._requests = [];
            this._headersReady = Promise.resolve();
            stream._fullRequestReader = this;
            this.onProgress = null;
          }
          PDFDataTransportStreamReader.prototype = {
            _enqueue: function PDFDataTransportStreamReader_enqueue(chunk) {
              if (this._done) {
                return;
              }
              if (this._requests.length > 0) {
                const requestCapability = this._requests.shift();
                requestCapability.resolve({
                  value: chunk,
                  done: false,
                });
                return;
              }
              this._queuedChunks.push(chunk);
            },
            get headersReady() {
              return this._headersReady;
            },
            get filename() {
              return this._filename;
            },
            get isRangeSupported() {
              return this._stream._isRangeSupported;
            },
            get isStreamingSupported() {
              return this._stream._isStreamingSupported;
            },
            get contentLength() {
              return this._stream._contentLength;
            },
            read: (function () {
              const _ref = _asyncToGenerator(
                /*#__PURE__*/ _regenerator2.default.mark(function _callee() {
                  let chunk, requestCapability;
                  return _regenerator2.default.wrap(
                    function _callee$(_context) {
                      while (1) {
                        switch ((_context.prev = _context.next)) {
                          case 0:
                            if (!(this._queuedChunks.length > 0)) {
                              _context.next = 3;
                              break;
                            }

                            chunk = this._queuedChunks.shift();
                            return _context.abrupt('return', {
                              value: chunk,
                              done: false,
                            });

                          case 3:
                            if (!this._done) {
                              _context.next = 5;
                              break;
                            }

                            return _context.abrupt('return', {
                              value: undefined,
                              done: true,
                            });

                          case 5:
                            requestCapability = (0, _util.createPromiseCapability)();

                            this._requests.push(requestCapability);
                            return _context.abrupt('return', requestCapability.promise);

                          case 8:
                          case 'end':
                            return _context.stop();
                        }
                      }
                    },
                    _callee,
                    this,
                  );
                }),
              );

              function read() {
                return _ref.apply(this, arguments);
              }

              return read;
            })(),

            cancel: function PDFDataTransportStreamReader_cancel(reason) {
              this._done = true;
              this._requests.forEach(function (requestCapability) {
                requestCapability.resolve({
                  value: undefined,
                  done: true,
                });
              });
              this._requests = [];
            },
          };
          function PDFDataTransportStreamRangeReader(stream, begin, end) {
            this._stream = stream;
            this._begin = begin;
            this._end = end;
            this._queuedChunk = null;
            this._requests = [];
            this._done = false;
            this.onProgress = null;
          }
          PDFDataTransportStreamRangeReader.prototype = {
            _enqueue: function PDFDataTransportStreamRangeReader_enqueue(chunk) {
              if (this._done) {
                return;
              }
              if (this._requests.length === 0) {
                this._queuedChunk = chunk;
              } else {
                const requestsCapability = this._requests.shift();
                requestsCapability.resolve({
                  value: chunk,
                  done: false,
                });
                this._requests.forEach(function (requestCapability) {
                  requestCapability.resolve({
                    value: undefined,
                    done: true,
                  });
                });
                this._requests = [];
              }
              this._done = true;
              this._stream._removeRangeReader(this);
            },
            get isStreamingSupported() {
              return false;
            },
            read: (function () {
              const _ref2 = _asyncToGenerator(
                /*#__PURE__*/ _regenerator2.default.mark(function _callee2() {
                  let chunk, requestCapability;
                  return _regenerator2.default.wrap(
                    function _callee2$(_context2) {
                      while (1) {
                        switch ((_context2.prev = _context2.next)) {
                          case 0:
                            if (!this._queuedChunk) {
                              _context2.next = 4;
                              break;
                            }

                            chunk = this._queuedChunk;

                            this._queuedChunk = null;
                            return _context2.abrupt('return', {
                              value: chunk,
                              done: false,
                            });

                          case 4:
                            if (!this._done) {
                              _context2.next = 6;
                              break;
                            }

                            return _context2.abrupt('return', {
                              value: undefined,
                              done: true,
                            });

                          case 6:
                            requestCapability = (0, _util.createPromiseCapability)();

                            this._requests.push(requestCapability);
                            return _context2.abrupt('return', requestCapability.promise);

                          case 9:
                          case 'end':
                            return _context2.stop();
                        }
                      }
                    },
                    _callee2,
                    this,
                  );
                }),
              );

              function read() {
                return _ref2.apply(this, arguments);
              }

              return read;
            })(),

            cancel: function PDFDataTransportStreamRangeReader_cancel(reason) {
              this._done = true;
              this._requests.forEach(function (requestCapability) {
                requestCapability.resolve({
                  value: undefined,
                  done: true,
                });
              });
              this._requests = [];
              this._stream._removeRangeReader(this);
            },
          };
          return PDFDataTransportStream;
        })();
        exports.PDFDataTransportStream = PDFDataTransportStream;

        /***/
      },
      /* 144 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.WebGLContext = undefined;

        const _createClass = (function () {
          function defineProperties(target, props) {
            for (let i = 0; i < props.length; i++) {
              const descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) {
                descriptor.writable = true;
              }
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function (Constructor, protoProps, staticProps) {
            if (protoProps) {
              defineProperties(Constructor.prototype, protoProps);
            }
            if (staticProps) {
              defineProperties(Constructor, staticProps);
            }
            return Constructor;
          };
        })();

        const _util = __w_pdfjs_require__(1);

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        const WebGLContext = (function () {
          function WebGLContext(_ref) {
            const _ref$enable = _ref.enable,
              enable = _ref$enable === undefined ? false : _ref$enable;

            _classCallCheck(this, WebGLContext);

            this._enabled = enable === true;
          }

          _createClass(WebGLContext, [
            {
              key: 'composeSMask',
              value: function composeSMask(_ref2) {
                const layer = _ref2.layer,
                  mask = _ref2.mask,
                  properties = _ref2.properties;

                return WebGLUtils.composeSMask(layer, mask, properties);
              },
            },
            {
              key: 'drawFigures',
              value: function drawFigures(_ref3) {
                const width = _ref3.width,
                  height = _ref3.height,
                  backgroundColor = _ref3.backgroundColor,
                  figures = _ref3.figures,
                  context = _ref3.context;

                return WebGLUtils.drawFigures(width, height, backgroundColor, figures, context);
              },
            },
            {
              key: 'clear',
              value: function clear() {
                WebGLUtils.cleanup();
              },
            },
            {
              key: 'isEnabled',
              get: function get() {
                let enabled = this._enabled;
                if (enabled) {
                  enabled = WebGLUtils.tryInitGL();
                }
                return (0, _util.shadow)(this, 'isEnabled', enabled);
              },
            },
          ]);

          return WebGLContext;
        })();

        var WebGLUtils = (function WebGLUtilsClosure() {
          function loadShader(gl, code, shaderType) {
            const shader = gl.createShader(shaderType);
            gl.shaderSource(shader, code);
            gl.compileShader(shader);
            const compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
            if (!compiled) {
              const errorMsg = gl.getShaderInfoLog(shader);
              throw new Error('Error during shader compilation: ' + errorMsg);
            }
            return shader;
          }
          function createVertexShader(gl, code) {
            return loadShader(gl, code, gl.VERTEX_SHADER);
          }
          function createFragmentShader(gl, code) {
            return loadShader(gl, code, gl.FRAGMENT_SHADER);
          }
          function createProgram(gl, shaders) {
            const program = gl.createProgram();
            for (let i = 0, ii = shaders.length; i < ii; ++i) {
              gl.attachShader(program, shaders[i]);
            }
            gl.linkProgram(program);
            const linked = gl.getProgramParameter(program, gl.LINK_STATUS);
            if (!linked) {
              const errorMsg = gl.getProgramInfoLog(program);
              throw new Error('Error during program linking: ' + errorMsg);
            }
            return program;
          }
          function createTexture(gl, image, textureId) {
            gl.activeTexture(textureId);
            const texture = gl.createTexture();
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
            return texture;
          }
          let currentGL, currentCanvas;
          function generateGL() {
            if (currentGL) {
              return;
            }
            currentCanvas = document.createElement('canvas');
            currentGL = currentCanvas.getContext('webgl', { premultipliedalpha: false });
          }
          const smaskVertexShaderCode =
            '\
  attribute vec2 a_position;                                    \
  attribute vec2 a_texCoord;                                    \
                                                                \
  uniform vec2 u_resolution;                                    \
                                                                \
  varying vec2 v_texCoord;                                      \
                                                                \
  void main() {                                                 \
    vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0;   \
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);          \
                                                                \
    v_texCoord = a_texCoord;                                    \
  }                                                             ';
          const smaskFragmentShaderCode =
            '\
  precision mediump float;                                      \
                                                                \
  uniform vec4 u_backdrop;                                      \
  uniform int u_subtype;                                        \
  uniform sampler2D u_image;                                    \
  uniform sampler2D u_mask;                                     \
                                                                \
  varying vec2 v_texCoord;                                      \
                                                                \
  void main() {                                                 \
    vec4 imageColor = texture2D(u_image, v_texCoord);           \
    vec4 maskColor = texture2D(u_mask, v_texCoord);             \
    if (u_backdrop.a > 0.0) {                                   \
      maskColor.rgb = maskColor.rgb * maskColor.a +             \
                      u_backdrop.rgb * (1.0 - maskColor.a);     \
    }                                                           \
    float lum;                                                  \
    if (u_subtype == 0) {                                       \
      lum = maskColor.a;                                        \
    } else {                                                    \
      lum = maskColor.r * 0.3 + maskColor.g * 0.59 +            \
            maskColor.b * 0.11;                                 \
    }                                                           \
    imageColor.a *= lum;                                        \
    imageColor.rgb *= imageColor.a;                             \
    gl_FragColor = imageColor;                                  \
  }                                                             ';
          let smaskCache = null;
          function initSmaskGL() {
            let canvas, gl;
            generateGL();
            canvas = currentCanvas;
            currentCanvas = null;
            gl = currentGL;
            currentGL = null;
            const vertexShader = createVertexShader(gl, smaskVertexShaderCode);
            const fragmentShader = createFragmentShader(gl, smaskFragmentShaderCode);
            const program = createProgram(gl, [vertexShader, fragmentShader]);
            gl.useProgram(program);
            const cache = {};
            cache.gl = gl;
            cache.canvas = canvas;
            cache.resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
            cache.positionLocation = gl.getAttribLocation(program, 'a_position');
            cache.backdropLocation = gl.getUniformLocation(program, 'u_backdrop');
            cache.subtypeLocation = gl.getUniformLocation(program, 'u_subtype');
            const texCoordLocation = gl.getAttribLocation(program, 'a_texCoord');
            const texLayerLocation = gl.getUniformLocation(program, 'u_image');
            const texMaskLocation = gl.getUniformLocation(program, 'u_mask');
            const texCoordBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0]), gl.STATIC_DRAW);
            gl.enableVertexAttribArray(texCoordLocation);
            gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);
            gl.uniform1i(texLayerLocation, 0);
            gl.uniform1i(texMaskLocation, 1);
            smaskCache = cache;
          }
          function composeSMask(layer, mask, properties) {
            const width = layer.width,
              height = layer.height;
            if (!smaskCache) {
              initSmaskGL();
            }
            const cache = smaskCache,
              canvas = cache.canvas,
              gl = cache.gl;
            canvas.width = width;
            canvas.height = height;
            gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
            gl.uniform2f(cache.resolutionLocation, width, height);
            if (properties.backdrop) {
              gl.uniform4f(cache.resolutionLocation, properties.backdrop[0], properties.backdrop[1], properties.backdrop[2], 1);
            } else {
              gl.uniform4f(cache.resolutionLocation, 0, 0, 0, 0);
            }
            gl.uniform1i(cache.subtypeLocation, properties.subtype === 'Luminosity' ? 1 : 0);
            const texture = createTexture(gl, layer, gl.TEXTURE0);
            const maskTexture = createTexture(gl, mask, gl.TEXTURE1);
            const buffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.bufferData(
              gl.ARRAY_BUFFER,
              new Float32Array([0, 0, width, 0, 0, height, 0, height, width, 0, width, height]),
              gl.STATIC_DRAW,
            );
            gl.enableVertexAttribArray(cache.positionLocation);
            gl.vertexAttribPointer(cache.positionLocation, 2, gl.FLOAT, false, 0, 0);
            gl.clearColor(0, 0, 0, 0);
            gl.enable(gl.BLEND);
            gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
            gl.clear(gl.COLOR_BUFFER_BIT);
            gl.drawArrays(gl.TRIANGLES, 0, 6);
            gl.flush();
            gl.deleteTexture(texture);
            gl.deleteTexture(maskTexture);
            gl.deleteBuffer(buffer);
            return canvas;
          }
          const figuresVertexShaderCode =
            '\
  attribute vec2 a_position;                                    \
  attribute vec3 a_color;                                       \
                                                                \
  uniform vec2 u_resolution;                                    \
  uniform vec2 u_scale;                                         \
  uniform vec2 u_offset;                                        \
                                                                \
  varying vec4 v_color;                                         \
                                                                \
  void main() {                                                 \
    vec2 position = (a_position + u_offset) * u_scale;          \
    vec2 clipSpace = (position / u_resolution) * 2.0 - 1.0;     \
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);          \
                                                                \
    v_color = vec4(a_color / 255.0, 1.0);                       \
  }                                                             ';
          const figuresFragmentShaderCode =
            '\
  precision mediump float;                                      \
                                                                \
  varying vec4 v_color;                                         \
                                                                \
  void main() {                                                 \
    gl_FragColor = v_color;                                     \
  }                                                             ';
          let figuresCache = null;
          function initFiguresGL() {
            let canvas, gl;
            generateGL();
            canvas = currentCanvas;
            currentCanvas = null;
            gl = currentGL;
            currentGL = null;
            const vertexShader = createVertexShader(gl, figuresVertexShaderCode);
            const fragmentShader = createFragmentShader(gl, figuresFragmentShaderCode);
            const program = createProgram(gl, [vertexShader, fragmentShader]);
            gl.useProgram(program);
            const cache = {};
            cache.gl = gl;
            cache.canvas = canvas;
            cache.resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
            cache.scaleLocation = gl.getUniformLocation(program, 'u_scale');
            cache.offsetLocation = gl.getUniformLocation(program, 'u_offset');
            cache.positionLocation = gl.getAttribLocation(program, 'a_position');
            cache.colorLocation = gl.getAttribLocation(program, 'a_color');
            figuresCache = cache;
          }
          function drawFigures(width, height, backgroundColor, figures, context) {
            if (!figuresCache) {
              initFiguresGL();
            }
            const cache = figuresCache,
              canvas = cache.canvas,
              gl = cache.gl;
            canvas.width = width;
            canvas.height = height;
            gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
            gl.uniform2f(cache.resolutionLocation, width, height);
            let count = 0;
            let i, ii, rows;
            for (i = 0, ii = figures.length; i < ii; i++) {
              switch (figures[i].type) {
                case 'lattice':
                  rows = (figures[i].coords.length / figures[i].verticesPerRow) | 0;
                  count += (rows - 1) * (figures[i].verticesPerRow - 1) * 6;
                  break;
                case 'triangles':
                  count += figures[i].coords.length;
                  break;
              }
            }
            const coords = new Float32Array(count * 2);
            const colors = new Uint8Array(count * 3);
            const coordsMap = context.coords,
              colorsMap = context.colors;
            let pIndex = 0,
              cIndex = 0;
            for (i = 0, ii = figures.length; i < ii; i++) {
              const figure = figures[i],
                ps = figure.coords,
                cs = figure.colors;
              switch (figure.type) {
                case 'lattice':
                  var cols = figure.verticesPerRow;
                  rows = (ps.length / cols) | 0;
                  for (let row = 1; row < rows; row++) {
                    let offset = row * cols + 1;
                    for (let col = 1; col < cols; col++, offset++) {
                      coords[pIndex] = coordsMap[ps[offset - cols - 1]];
                      coords[pIndex + 1] = coordsMap[ps[offset - cols - 1] + 1];
                      coords[pIndex + 2] = coordsMap[ps[offset - cols]];
                      coords[pIndex + 3] = coordsMap[ps[offset - cols] + 1];
                      coords[pIndex + 4] = coordsMap[ps[offset - 1]];
                      coords[pIndex + 5] = coordsMap[ps[offset - 1] + 1];
                      colors[cIndex] = colorsMap[cs[offset - cols - 1]];
                      colors[cIndex + 1] = colorsMap[cs[offset - cols - 1] + 1];
                      colors[cIndex + 2] = colorsMap[cs[offset - cols - 1] + 2];
                      colors[cIndex + 3] = colorsMap[cs[offset - cols]];
                      colors[cIndex + 4] = colorsMap[cs[offset - cols] + 1];
                      colors[cIndex + 5] = colorsMap[cs[offset - cols] + 2];
                      colors[cIndex + 6] = colorsMap[cs[offset - 1]];
                      colors[cIndex + 7] = colorsMap[cs[offset - 1] + 1];
                      colors[cIndex + 8] = colorsMap[cs[offset - 1] + 2];
                      coords[pIndex + 6] = coords[pIndex + 2];
                      coords[pIndex + 7] = coords[pIndex + 3];
                      coords[pIndex + 8] = coords[pIndex + 4];
                      coords[pIndex + 9] = coords[pIndex + 5];
                      coords[pIndex + 10] = coordsMap[ps[offset]];
                      coords[pIndex + 11] = coordsMap[ps[offset] + 1];
                      colors[cIndex + 9] = colors[cIndex + 3];
                      colors[cIndex + 10] = colors[cIndex + 4];
                      colors[cIndex + 11] = colors[cIndex + 5];
                      colors[cIndex + 12] = colors[cIndex + 6];
                      colors[cIndex + 13] = colors[cIndex + 7];
                      colors[cIndex + 14] = colors[cIndex + 8];
                      colors[cIndex + 15] = colorsMap[cs[offset]];
                      colors[cIndex + 16] = colorsMap[cs[offset] + 1];
                      colors[cIndex + 17] = colorsMap[cs[offset] + 2];
                      pIndex += 12;
                      cIndex += 18;
                    }
                  }
                  break;
                case 'triangles':
                  for (let j = 0, jj = ps.length; j < jj; j++) {
                    coords[pIndex] = coordsMap[ps[j]];
                    coords[pIndex + 1] = coordsMap[ps[j] + 1];
                    colors[cIndex] = colorsMap[cs[j]];
                    colors[cIndex + 1] = colorsMap[cs[j] + 1];
                    colors[cIndex + 2] = colorsMap[cs[j] + 2];
                    pIndex += 2;
                    cIndex += 3;
                  }
                  break;
              }
            }
            if (backgroundColor) {
              gl.clearColor(backgroundColor[0] / 255, backgroundColor[1] / 255, backgroundColor[2] / 255, 1.0);
            } else {
              gl.clearColor(0, 0, 0, 0);
            }
            gl.clear(gl.COLOR_BUFFER_BIT);
            const coordsBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, coordsBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, coords, gl.STATIC_DRAW);
            gl.enableVertexAttribArray(cache.positionLocation);
            gl.vertexAttribPointer(cache.positionLocation, 2, gl.FLOAT, false, 0, 0);
            const colorsBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, colorsBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW);
            gl.enableVertexAttribArray(cache.colorLocation);
            gl.vertexAttribPointer(cache.colorLocation, 3, gl.UNSIGNED_BYTE, false, 0, 0);
            gl.uniform2f(cache.scaleLocation, context.scaleX, context.scaleY);
            gl.uniform2f(cache.offsetLocation, context.offsetX, context.offsetY);
            gl.drawArrays(gl.TRIANGLES, 0, count);
            gl.flush();
            gl.deleteBuffer(coordsBuffer);
            gl.deleteBuffer(colorsBuffer);
            return canvas;
          }
          return {
            tryInitGL: function tryInitGL() {
              try {
                generateGL();
                return !!currentGL;
              } catch (ex) {}
              return false;
            },

            composeSMask: composeSMask,
            drawFigures: drawFigures,
            cleanup: function cleanup() {
              if (smaskCache && smaskCache.canvas) {
                smaskCache.canvas.width = 0;
                smaskCache.canvas.height = 0;
              }
              if (figuresCache && figuresCache.canvas) {
                figuresCache.canvas.width = 0;
                figuresCache.canvas.height = 0;
              }
              smaskCache = null;
              figuresCache = null;
            },
          };
        })();
        exports.WebGLContext = WebGLContext;

        /***/
      },
      /* 145 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.renderTextLayer = undefined;

        const _util = __w_pdfjs_require__(1);

        const _global_scope = __w_pdfjs_require__(3);

        const _global_scope2 = _interopRequireDefault(_global_scope);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        const renderTextLayer = (function renderTextLayerClosure() {
          const MAX_TEXT_DIVS_TO_RENDER = 100000;
          const NonWhitespaceRegexp = /\S/;
          function isAllWhitespace(str) {
            return !NonWhitespaceRegexp.test(str);
          }
          const styleBuf = ['left: ', 0, 'px; top: ', 0, 'px; font-size: ', 0, 'px; font-family: ', '', ';'];
          function appendText(task, geom, styles) {
            const textDiv = document.createElement('div');
            const textDivProperties = {
              style: null,
              angle: 0,
              canvasWidth: 0,
              isWhitespace: false,
              originalTransform: null,
              paddingBottom: 0,
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 0,
              scale: 1,
            };
            task._textDivs.push(textDiv);
            if (isAllWhitespace(geom.str)) {
              textDivProperties.isWhitespace = true;
              task._textDivProperties.set(textDiv, textDivProperties);
              return;
            }
            const tx = _util.Util.transform(task._viewport.transform, geom.transform);
            let angle = Math.atan2(tx[1], tx[0]);
            const style = styles[geom.fontName];
            if (style.vertical) {
              angle += Math.PI / 2;
            }
            const fontHeight = Math.sqrt(tx[2] * tx[2] + tx[3] * tx[3]);
            let fontAscent = fontHeight;
            if (style.ascent) {
              fontAscent = style.ascent * fontAscent;
            } else if (style.descent) {
              fontAscent = (1 + style.descent) * fontAscent;
            }
            let left;
            let top;
            if (angle === 0) {
              left = tx[4];
              top = tx[5] - fontAscent;
            } else {
              left = tx[4] + fontAscent * Math.sin(angle);
              top = tx[5] - fontAscent * Math.cos(angle);
            }
            styleBuf[1] = left;
            styleBuf[3] = top;
            styleBuf[5] = fontHeight;
            styleBuf[7] = style.fontFamily;
            textDivProperties.style = styleBuf.join('');
            textDiv.setAttribute('style', textDivProperties.style);
            textDiv.textContent = geom.str;
            if (task._fontInspectorEnabled) {
              textDiv.dataset.fontName = geom.fontName;
            }
            if (angle !== 0) {
              textDivProperties.angle = angle * (180 / Math.PI);
            }
            if (geom.str.length > 1) {
              if (style.vertical) {
                textDivProperties.canvasWidth = geom.height * task._viewport.scale;
              } else {
                textDivProperties.canvasWidth = geom.width * task._viewport.scale;
              }
            }
            task._textDivProperties.set(textDiv, textDivProperties);
            if (task._textContentStream) {
              task._layoutText(textDiv);
            }
            if (task._enhanceTextSelection) {
              let angleCos = 1,
                angleSin = 0;
              if (angle !== 0) {
                angleCos = Math.cos(angle);
                angleSin = Math.sin(angle);
              }
              const divWidth = (style.vertical ? geom.height : geom.width) * task._viewport.scale;
              const divHeight = fontHeight;
              let m, b;
              if (angle !== 0) {
                m = [angleCos, angleSin, -angleSin, angleCos, left, top];
                b = _util.Util.getAxialAlignedBoundingBox([0, 0, divWidth, divHeight], m);
              } else {
                b = [left, top, left + divWidth, top + divHeight];
              }
              task._bounds.push({
                left: b[0],
                top: b[1],
                right: b[2],
                bottom: b[3],
                div: textDiv,
                size: [divWidth, divHeight],
                m: m,
              });
            }
          }
          function render(task) {
            if (task._canceled) {
              return;
            }
            const textDivs = task._textDivs;
            const capability = task._capability;
            const textDivsLength = textDivs.length;
            if (textDivsLength > MAX_TEXT_DIVS_TO_RENDER) {
              task._renderingDone = true;
              capability.resolve();
              return;
            }
            if (!task._textContentStream) {
              for (let i = 0; i < textDivsLength; i++) {
                task._layoutText(textDivs[i]);
              }
            }
            task._renderingDone = true;
            capability.resolve();
          }
          function expand(task) {
            const bounds = task._bounds;
            const viewport = task._viewport;
            const expanded = expandBounds(viewport.width, viewport.height, bounds);
            for (let i = 0; i < expanded.length; i++) {
              const div = bounds[i].div;
              const divProperties = task._textDivProperties.get(div);
              if (divProperties.angle === 0) {
                divProperties.paddingLeft = bounds[i].left - expanded[i].left;
                divProperties.paddingTop = bounds[i].top - expanded[i].top;
                divProperties.paddingRight = expanded[i].right - bounds[i].right;
                divProperties.paddingBottom = expanded[i].bottom - bounds[i].bottom;
                task._textDivProperties.set(div, divProperties);
                continue;
              }
              var e = expanded[i],
                b = bounds[i];
              var m = b.m,
                c = m[0],
                s = m[1];
              const points = [[0, 0], [0, b.size[1]], [b.size[0], 0], b.size];
              var ts = new Float64Array(64);
              points.forEach(function (p, i) {
                const t = _util.Util.applyTransform(p, m);
                ts[i + 0] = c && (e.left - t[0]) / c;
                ts[i + 4] = s && (e.top - t[1]) / s;
                ts[i + 8] = c && (e.right - t[0]) / c;
                ts[i + 12] = s && (e.bottom - t[1]) / s;
                ts[i + 16] = s && (e.left - t[0]) / -s;
                ts[i + 20] = c && (e.top - t[1]) / c;
                ts[i + 24] = s && (e.right - t[0]) / -s;
                ts[i + 28] = c && (e.bottom - t[1]) / c;
                ts[i + 32] = c && (e.left - t[0]) / -c;
                ts[i + 36] = s && (e.top - t[1]) / -s;
                ts[i + 40] = c && (e.right - t[0]) / -c;
                ts[i + 44] = s && (e.bottom - t[1]) / -s;
                ts[i + 48] = s && (e.left - t[0]) / s;
                ts[i + 52] = c && (e.top - t[1]) / -c;
                ts[i + 56] = s && (e.right - t[0]) / s;
                ts[i + 60] = c && (e.bottom - t[1]) / -c;
              });
              const findPositiveMin = function findPositiveMin(ts, offset, count) {
                let result = 0;
                for (let i = 0; i < count; i++) {
                  const t = ts[offset++];
                  if (t > 0) {
                    result = result ? Math.min(t, result) : t;
                  }
                }
                return result;
              };
              const boxScale = 1 + Math.min(Math.abs(c), Math.abs(s));
              divProperties.paddingLeft = findPositiveMin(ts, 32, 16) / boxScale;
              divProperties.paddingTop = findPositiveMin(ts, 48, 16) / boxScale;
              divProperties.paddingRight = findPositiveMin(ts, 0, 16) / boxScale;
              divProperties.paddingBottom = findPositiveMin(ts, 16, 16) / boxScale;
              task._textDivProperties.set(div, divProperties);
            }
          }
          function expandBounds(width, height, boxes) {
            const bounds = boxes.map(function (box, i) {
              return {
                x1: box.left,
                y1: box.top,
                x2: box.right,
                y2: box.bottom,
                index: i,
                x1New: undefined,
                x2New: undefined,
              };
            });
            expandBoundsLTR(width, bounds);
            const expanded = new Array(boxes.length);
            bounds.forEach(function (b) {
              const i = b.index;
              expanded[i] = {
                left: b.x1New,
                top: 0,
                right: b.x2New,
                bottom: 0,
              };
            });
            boxes.map(function (box, i) {
              const e = expanded[i],
                b = bounds[i];
              b.x1 = box.top;
              b.y1 = width - e.right;
              b.x2 = box.bottom;
              b.y2 = width - e.left;
              b.index = i;
              b.x1New = undefined;
              b.x2New = undefined;
            });
            expandBoundsLTR(height, bounds);
            bounds.forEach(function (b) {
              const i = b.index;
              expanded[i].top = b.x1New;
              expanded[i].bottom = b.x2New;
            });
            return expanded;
          }
          function expandBoundsLTR(width, bounds) {
            bounds.sort(function (a, b) {
              return a.x1 - b.x1 || a.index - b.index;
            });
            const fakeBoundary = {
              x1: -Infinity,
              y1: -Infinity,
              x2: 0,
              y2: Infinity,
              index: -1,
              x1New: 0,
              x2New: 0,
            };
            const horizon = [
              {
                start: -Infinity,
                end: Infinity,
                boundary: fakeBoundary,
              },
            ];
            bounds.forEach(function (boundary) {
              let i = 0;
              while (i < horizon.length && horizon[i].end <= boundary.y1) {
                i++;
              }
              let j = horizon.length - 1;
              while (j >= 0 && horizon[j].start >= boundary.y2) {
                j--;
              }
              let horizonPart, affectedBoundary;
              let q,
                k,
                maxXNew = -Infinity;
              for (q = i; q <= j; q++) {
                horizonPart = horizon[q];
                affectedBoundary = horizonPart.boundary;
                var xNew;
                if (affectedBoundary.x2 > boundary.x1) {
                  xNew = affectedBoundary.index > boundary.index ? affectedBoundary.x1New : boundary.x1;
                } else if (affectedBoundary.x2New === undefined) {
                  xNew = (affectedBoundary.x2 + boundary.x1) / 2;
                } else {
                  xNew = affectedBoundary.x2New;
                }
                if (xNew > maxXNew) {
                  maxXNew = xNew;
                }
              }
              boundary.x1New = maxXNew;
              for (q = i; q <= j; q++) {
                horizonPart = horizon[q];
                affectedBoundary = horizonPart.boundary;
                if (affectedBoundary.x2New === undefined) {
                  if (affectedBoundary.x2 > boundary.x1) {
                    if (affectedBoundary.index > boundary.index) {
                      affectedBoundary.x2New = affectedBoundary.x2;
                    }
                  } else {
                    affectedBoundary.x2New = maxXNew;
                  }
                } else if (affectedBoundary.x2New > maxXNew) {
                  affectedBoundary.x2New = Math.max(maxXNew, affectedBoundary.x2);
                }
              }
              let changedHorizon = [],
                lastBoundary = null;
              for (q = i; q <= j; q++) {
                horizonPart = horizon[q];
                affectedBoundary = horizonPart.boundary;
                const useBoundary = affectedBoundary.x2 > boundary.x2 ? affectedBoundary : boundary;
                if (lastBoundary === useBoundary) {
                  changedHorizon[changedHorizon.length - 1].end = horizonPart.end;
                } else {
                  changedHorizon.push({
                    start: horizonPart.start,
                    end: horizonPart.end,
                    boundary: useBoundary,
                  });
                  lastBoundary = useBoundary;
                }
              }
              if (horizon[i].start < boundary.y1) {
                changedHorizon[0].start = boundary.y1;
                changedHorizon.unshift({
                  start: horizon[i].start,
                  end: boundary.y1,
                  boundary: horizon[i].boundary,
                });
              }
              if (boundary.y2 < horizon[j].end) {
                changedHorizon[changedHorizon.length - 1].end = boundary.y2;
                changedHorizon.push({
                  start: boundary.y2,
                  end: horizon[j].end,
                  boundary: horizon[j].boundary,
                });
              }
              for (q = i; q <= j; q++) {
                horizonPart = horizon[q];
                affectedBoundary = horizonPart.boundary;
                if (affectedBoundary.x2New !== undefined) {
                  continue;
                }
                let used = false;
                for (k = i - 1; !used && k >= 0 && horizon[k].start >= affectedBoundary.y1; k--) {
                  used = horizon[k].boundary === affectedBoundary;
                }
                for (k = j + 1; !used && k < horizon.length && horizon[k].end <= affectedBoundary.y2; k++) {
                  used = horizon[k].boundary === affectedBoundary;
                }
                for (k = 0; !used && k < changedHorizon.length; k++) {
                  used = changedHorizon[k].boundary === affectedBoundary;
                }
                if (!used) {
                  affectedBoundary.x2New = maxXNew;
                }
              }
              Array.prototype.splice.apply(horizon, [i, j - i + 1].concat(changedHorizon));
            });
            horizon.forEach(function (horizonPart) {
              const affectedBoundary = horizonPart.boundary;
              if (affectedBoundary.x2New === undefined) {
                affectedBoundary.x2New = Math.max(width, affectedBoundary.x2);
              }
            });
          }
          function TextLayerRenderTask(_ref) {
            const textContent = _ref.textContent,
              textContentStream = _ref.textContentStream,
              container = _ref.container,
              viewport = _ref.viewport,
              textDivs = _ref.textDivs,
              textContentItemsStr = _ref.textContentItemsStr,
              enhanceTextSelection = _ref.enhanceTextSelection;

            this._textContent = textContent;
            this._textContentStream = textContentStream;
            this._container = container;
            this._viewport = viewport;
            this._textDivs = textDivs || [];
            this._textContentItemsStr = textContentItemsStr || [];
            this._enhanceTextSelection = !!enhanceTextSelection;
            this._fontInspectorEnabled = !!(_global_scope2.default.FontInspector && _global_scope2.default.FontInspector.enabled);
            this._reader = null;
            this._layoutTextLastFontSize = null;
            this._layoutTextLastFontFamily = null;
            this._layoutTextCtx = null;
            this._textDivProperties = new WeakMap();
            this._renderingDone = false;
            this._canceled = false;
            this._capability = (0, _util.createPromiseCapability)();
            this._renderTimer = null;
            this._bounds = [];
          }
          TextLayerRenderTask.prototype = {
            get promise() {
              return this._capability.promise;
            },
            cancel: function TextLayer_cancel() {
              if (this._reader) {
                this._reader.cancel(new _util.AbortException('text layer task cancelled'));
                this._reader = null;
              }
              this._canceled = true;
              if (this._renderTimer !== null) {
                clearTimeout(this._renderTimer);
                this._renderTimer = null;
              }
              this._capability.reject('canceled');
            },
            _processItems: function _processItems(items, styleCache) {
              for (let i = 0, len = items.length; i < len; i++) {
                this._textContentItemsStr.push(items[i].str);
                appendText(this, items[i], styleCache);
              }
            },
            _layoutText: function _layoutText(textDiv) {
              const textLayerFrag = this._container;
              const textDivProperties = this._textDivProperties.get(textDiv);
              if (textDivProperties.isWhitespace) {
                return;
              }
              const fontSize = textDiv.style.fontSize;
              const fontFamily = textDiv.style.fontFamily;
              if (fontSize !== this._layoutTextLastFontSize || fontFamily !== this._layoutTextLastFontFamily) {
                this._layoutTextCtx.font = fontSize + ' ' + fontFamily;
                this._layoutTextLastFontSize = fontSize;
                this._layoutTextLastFontFamily = fontFamily;
              }
              const width = this._layoutTextCtx.measureText(textDiv.textContent).width;
              let transform = '';
              if (textDivProperties.canvasWidth !== 0 && width > 0) {
                textDivProperties.scale = textDivProperties.canvasWidth / width;
                transform = 'scaleX(' + textDivProperties.scale + ')';
              }
              if (textDivProperties.angle !== 0) {
                transform = 'rotate(' + textDivProperties.angle + 'deg) ' + transform;
              }
              if (transform !== '') {
                textDivProperties.originalTransform = transform;
                textDiv.style.transform = transform;
              }
              this._textDivProperties.set(textDiv, textDivProperties);
              textLayerFrag.appendChild(textDiv);
            },

            _render: function TextLayer_render(timeout) {
              const _this = this;

              const capability = (0, _util.createPromiseCapability)();
              let styleCache = Object.create(null);
              const canvas = document.createElement('canvas');
              canvas.mozOpaque = true;
              this._layoutTextCtx = canvas.getContext('2d', { alpha: false });
              if (this._textContent) {
                const textItems = this._textContent.items;
                const textStyles = this._textContent.styles;
                this._processItems(textItems, textStyles);
                capability.resolve();
              } else if (this._textContentStream) {
                const pump = function pump() {
                  _this._reader.read().then(function (_ref2) {
                    const value = _ref2.value,
                      done = _ref2.done;

                    if (done) {
                      capability.resolve();
                      return;
                    }
                    Object.assign(styleCache, value.styles);
                    _this._processItems(value.items, styleCache);
                    pump();
                  }, capability.reject);
                };
                this._reader = this._textContentStream.getReader();
                pump();
              } else {
                throw new Error('Neither "textContent" nor "textContentStream"' + ' parameters specified.');
              }
              capability.promise.then(function () {
                styleCache = null;
                if (!timeout) {
                  render(_this);
                } else {
                  _this._renderTimer = setTimeout(function () {
                    render(_this);
                    _this._renderTimer = null;
                  }, timeout);
                }
              }, this._capability.reject);
            },
            expandTextDivs: function TextLayer_expandTextDivs(expandDivs) {
              if (!this._enhanceTextSelection || !this._renderingDone) {
                return;
              }
              if (this._bounds !== null) {
                expand(this);
                this._bounds = null;
              }
              for (let i = 0, ii = this._textDivs.length; i < ii; i++) {
                const div = this._textDivs[i];
                const divProperties = this._textDivProperties.get(div);
                if (divProperties.isWhitespace) {
                  continue;
                }
                if (expandDivs) {
                  let transform = '',
                    padding = '';
                  if (divProperties.scale !== 1) {
                    transform = 'scaleX(' + divProperties.scale + ')';
                  }
                  if (divProperties.angle !== 0) {
                    transform = 'rotate(' + divProperties.angle + 'deg) ' + transform;
                  }
                  if (divProperties.paddingLeft !== 0) {
                    padding += ' padding-left: ' + divProperties.paddingLeft / divProperties.scale + 'px;';
                    transform += ' translateX(' + -divProperties.paddingLeft / divProperties.scale + 'px)';
                  }
                  if (divProperties.paddingTop !== 0) {
                    padding += ' padding-top: ' + divProperties.paddingTop + 'px;';
                    transform += ' translateY(' + -divProperties.paddingTop + 'px)';
                  }
                  if (divProperties.paddingRight !== 0) {
                    padding += ' padding-right: ' + divProperties.paddingRight / divProperties.scale + 'px;';
                  }
                  if (divProperties.paddingBottom !== 0) {
                    padding += ' padding-bottom: ' + divProperties.paddingBottom + 'px;';
                  }
                  if (padding !== '') {
                    div.setAttribute('style', divProperties.style + padding);
                  }
                  if (transform !== '') {
                    div.style.transform = transform;
                  }
                } else {
                  div.style.padding = 0;
                  div.style.transform = divProperties.originalTransform || '';
                }
              }
            },
          };
          function renderTextLayer(renderParameters) {
            const task = new TextLayerRenderTask({
              textContent: renderParameters.textContent,
              textContentStream: renderParameters.textContentStream,
              container: renderParameters.container,
              viewport: renderParameters.viewport,
              textDivs: renderParameters.textDivs,
              textContentItemsStr: renderParameters.textContentItemsStr,
              enhanceTextSelection: renderParameters.enhanceTextSelection,
            });
            task._render(renderParameters.timeout);
            return task;
          }
          return renderTextLayer;
        })();
        exports.renderTextLayer = renderTextLayer;

        /***/
      },
      /* 146 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.AnnotationLayer = undefined;

        const _get = function get(object, property, receiver) {
          if (object === null) {
            object = Function.prototype;
          }
          const desc = Object.getOwnPropertyDescriptor(object, property);
          if (desc === undefined) {
            const parent = Object.getPrototypeOf(object);
            if (parent === null) {
              return undefined;
            } else {
              return get(parent, property, receiver);
            }
          } else if ('value' in desc) {
            return desc.value;
          } else {
            const getter = desc.get;
            if (getter === undefined) {
              return undefined;
            }
            return getter.call(receiver);
          }
        };

        const _createClass = (function () {
          function defineProperties(target, props) {
            for (let i = 0; i < props.length; i++) {
              const descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) {
                descriptor.writable = true;
              }
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function (Constructor, protoProps, staticProps) {
            if (protoProps) {
              defineProperties(Constructor.prototype, protoProps);
            }
            if (staticProps) {
              defineProperties(Constructor, staticProps);
            }
            return Constructor;
          };
        })();

        const _dom_utils = __w_pdfjs_require__(130);

        const _util = __w_pdfjs_require__(1);

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: { value: subClass, enumerable: false, writable: true, configurable: true },
          });
          if (superClass) {
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : (subClass.__proto__ = superClass);
          }
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        const AnnotationElementFactory = (function () {
          function AnnotationElementFactory() {
            _classCallCheck(this, AnnotationElementFactory);
          }

          _createClass(AnnotationElementFactory, null, [
            {
              key: 'create',
              value: function create(parameters) {
                const subtype = parameters.data.annotationType;
                switch (subtype) {
                  case _util.AnnotationType.LINK:
                    return new LinkAnnotationElement(parameters);
                  case _util.AnnotationType.TEXT:
                    return new TextAnnotationElement(parameters);
                  case _util.AnnotationType.WIDGET:
                    var fieldType = parameters.data.fieldType;
                    switch (fieldType) {
                      case 'Tx':
                        return new TextWidgetAnnotationElement(parameters);
                      case 'Btn':
                        if (parameters.data.radioButton) {
                          return new RadioButtonWidgetAnnotationElement(parameters);
                        } else if (parameters.data.checkBox) {
                          return new CheckboxWidgetAnnotationElement(parameters);
                        }
                        return new PushButtonWidgetAnnotationElement(parameters);
                      case 'Ch':
                        return new ChoiceWidgetAnnotationElement(parameters);
                    }
                    return new WidgetAnnotationElement(parameters);
                  case _util.AnnotationType.POPUP:
                    return new PopupAnnotationElement(parameters);
                  case _util.AnnotationType.LINE:
                    return new LineAnnotationElement(parameters);
                  case _util.AnnotationType.SQUARE:
                    return new SquareAnnotationElement(parameters);
                  case _util.AnnotationType.CIRCLE:
                    return new CircleAnnotationElement(parameters);
                  case _util.AnnotationType.POLYLINE:
                    return new PolylineAnnotationElement(parameters);
                  case _util.AnnotationType.INK:
                    return new InkAnnotationElement(parameters);
                  case _util.AnnotationType.POLYGON:
                    return new PolygonAnnotationElement(parameters);
                  case _util.AnnotationType.HIGHLIGHT:
                    return new HighlightAnnotationElement(parameters);
                  case _util.AnnotationType.UNDERLINE:
                    return new UnderlineAnnotationElement(parameters);
                  case _util.AnnotationType.SQUIGGLY:
                    return new SquigglyAnnotationElement(parameters);
                  case _util.AnnotationType.STRIKEOUT:
                    return new StrikeOutAnnotationElement(parameters);
                  case _util.AnnotationType.STAMP:
                    return new StampAnnotationElement(parameters);
                  case _util.AnnotationType.FILEATTACHMENT:
                    return new FileAttachmentAnnotationElement(parameters);
                  default:
                    return new AnnotationElement(parameters);
                }
              },
            },
          ]);

          return AnnotationElementFactory;
        })();

        var AnnotationElement = (function () {
          function AnnotationElement(parameters) {
            const isRenderable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            const ignoreBorder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            _classCallCheck(this, AnnotationElement);

            this.isRenderable = isRenderable;
            this.data = parameters.data;
            this.layer = parameters.layer;
            this.page = parameters.page;
            this.viewport = parameters.viewport;
            this.linkService = parameters.linkService;
            this.downloadManager = parameters.downloadManager;
            this.imageResourcesPath = parameters.imageResourcesPath;
            this.renderInteractiveForms = parameters.renderInteractiveForms;
            this.svgFactory = parameters.svgFactory;
            if (isRenderable) {
              this.container = this._createContainer(ignoreBorder);
            }
          }

          _createClass(AnnotationElement, [
            {
              key: '_createContainer',
              value: function _createContainer() {
                const ignoreBorder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

                const data = this.data,
                  page = this.page,
                  viewport = this.viewport;
                const container = document.createElement('section');
                let width = data.rect[2] - data.rect[0];
                let height = data.rect[3] - data.rect[1];
                container.setAttribute('data-annotation-id', data.id);
                const rect = _util.Util.normalizeRect([
                  data.rect[0],
                  page.view[3] - data.rect[1] + page.view[1],
                  data.rect[2],
                  page.view[3] - data.rect[3] + page.view[1],
                ]);
                container.style.transform = 'matrix(' + viewport.transform.join(',') + ')';
                container.style.transformOrigin = -rect[0] + 'px ' + -rect[1] + 'px';
                if (!ignoreBorder && data.borderStyle.width > 0) {
                  container.style.borderWidth = data.borderStyle.width + 'px';
                  if (data.borderStyle.style !== _util.AnnotationBorderStyleType.UNDERLINE) {
                    width = width - 2 * data.borderStyle.width;
                    height = height - 2 * data.borderStyle.width;
                  }
                  const horizontalRadius = data.borderStyle.horizontalCornerRadius;
                  const verticalRadius = data.borderStyle.verticalCornerRadius;
                  if (horizontalRadius > 0 || verticalRadius > 0) {
                    const radius = horizontalRadius + 'px / ' + verticalRadius + 'px';
                    container.style.borderRadius = radius;
                  }
                  switch (data.borderStyle.style) {
                    case _util.AnnotationBorderStyleType.SOLID:
                      container.style.borderStyle = 'solid';
                      break;
                    case _util.AnnotationBorderStyleType.DASHED:
                      container.style.borderStyle = 'dashed';
                      break;
                    case _util.AnnotationBorderStyleType.BEVELED:
                      (0, _util.warn)('Unimplemented border style: beveled');
                      break;
                    case _util.AnnotationBorderStyleType.INSET:
                      (0, _util.warn)('Unimplemented border style: inset');
                      break;
                    case _util.AnnotationBorderStyleType.UNDERLINE:
                      container.style.borderBottomStyle = 'solid';
                      break;
                    default:
                      break;
                  }
                  if (data.color) {
                    container.style.borderColor = _util.Util.makeCssRgb(data.color[0] | 0, data.color[1] | 0, data.color[2] | 0);
                  } else {
                    container.style.borderWidth = 0;
                  }
                }
                container.style.left = rect[0] + 'px';
                container.style.top = rect[1] + 'px';
                container.style.width = width + 'px';
                container.style.height = height + 'px';
                return container;
              },
            },
            {
              key: '_createPopup',
              value: function _createPopup(container, trigger, data) {
                if (!trigger) {
                  trigger = document.createElement('div');
                  trigger.style.height = container.style.height;
                  trigger.style.width = container.style.width;
                  container.appendChild(trigger);
                }
                const popupElement = new PopupElement({
                  container: container,
                  trigger: trigger,
                  color: data.color,
                  title: data.title,
                  contents: data.contents,
                  hideWrapper: true,
                });
                const popup = popupElement.render();
                popup.style.left = container.style.width;
                container.appendChild(popup);
              },
            },
            {
              key: 'render',
              value: function render() {
                (0, _util.unreachable)('Abstract method `AnnotationElement.render` called');
              },
            },
          ]);

          return AnnotationElement;
        })();

        var LinkAnnotationElement = (function (_AnnotationElement) {
          _inherits(LinkAnnotationElement, _AnnotationElement);

          function LinkAnnotationElement(parameters) {
            _classCallCheck(this, LinkAnnotationElement);

            const isRenderable = !!(parameters.data.url || parameters.data.dest || parameters.data.action);
            return _possibleConstructorReturn(
              this,
              (LinkAnnotationElement.__proto__ || Object.getPrototypeOf(LinkAnnotationElement)).call(this, parameters, isRenderable),
            );
          }

          _createClass(LinkAnnotationElement, [
            {
              key: 'render',
              value: function render() {
                this.container.className = 'linkAnnotation';
                const data = this.data,
                  linkService = this.linkService;

                const link = document.createElement('a');
                (0, _dom_utils.addLinkAttributes)(link, {
                  url: data.url,
                  target: data.newWindow ? _dom_utils.LinkTarget.BLANK : linkService.externalLinkTarget,
                  rel: linkService.externalLinkRel,
                });
                if (!data.url) {
                  if (data.action) {
                    this._bindNamedAction(link, data.action);
                  } else {
                    this._bindLink(link, data.dest);
                  }
                }
                this.container.appendChild(link);
                return this.container;
              },
            },
            {
              key: '_bindLink',
              value: function _bindLink(link, destination) {
                const _this2 = this;

                link.href = this.linkService.getDestinationHash(destination);
                link.onclick = function () {
                  if (destination) {
                    _this2.linkService.navigateTo(destination);
                  }
                  return false;
                };
                if (destination) {
                  link.className = 'internalLink';
                }
              },
            },
            {
              key: '_bindNamedAction',
              value: function _bindNamedAction(link, action) {
                const _this3 = this;

                link.href = this.linkService.getAnchorUrl('');
                link.onclick = function () {
                  _this3.linkService.executeNamedAction(action);
                  return false;
                };
                link.className = 'internalLink';
              },
            },
          ]);

          return LinkAnnotationElement;
        })(AnnotationElement);

        var TextAnnotationElement = (function (_AnnotationElement2) {
          _inherits(TextAnnotationElement, _AnnotationElement2);

          function TextAnnotationElement(parameters) {
            _classCallCheck(this, TextAnnotationElement);

            const isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
            return _possibleConstructorReturn(
              this,
              (TextAnnotationElement.__proto__ || Object.getPrototypeOf(TextAnnotationElement)).call(this, parameters, isRenderable),
            );
          }

          _createClass(TextAnnotationElement, [
            {
              key: 'render',
              value: function render() {
                this.container.className = 'textAnnotation';
                const image = document.createElement('img');
                image.style.height = this.container.style.height;
                image.style.width = this.container.style.width;
                image.src = this.imageResourcesPath + 'annotation-' + this.data.name.toLowerCase() + '.svg';
                image.alt = '[{{type}} Annotation]';
                image.dataset.l10nId = 'text_annotation_type';
                image.dataset.l10nArgs = JSON.stringify({ type: this.data.name });
                if (!this.data.hasPopup) {
                  this._createPopup(this.container, image, this.data);
                }
                this.container.appendChild(image);
                return this.container;
              },
            },
          ]);

          return TextAnnotationElement;
        })(AnnotationElement);

        var WidgetAnnotationElement = (function (_AnnotationElement3) {
          _inherits(WidgetAnnotationElement, _AnnotationElement3);

          function WidgetAnnotationElement() {
            _classCallCheck(this, WidgetAnnotationElement);

            return _possibleConstructorReturn(
              this,
              (WidgetAnnotationElement.__proto__ || Object.getPrototypeOf(WidgetAnnotationElement)).apply(this, arguments),
            );
          }

          _createClass(WidgetAnnotationElement, [
            {
              key: 'render',
              value: function render() {
                return this.container;
              },
            },
          ]);

          return WidgetAnnotationElement;
        })(AnnotationElement);

        var TextWidgetAnnotationElement = (function (_WidgetAnnotationElem) {
          _inherits(TextWidgetAnnotationElement, _WidgetAnnotationElem);

          function TextWidgetAnnotationElement(parameters) {
            _classCallCheck(this, TextWidgetAnnotationElement);

            const isRenderable = parameters.renderInteractiveForms || (!parameters.data.hasAppearance && !!parameters.data.fieldValue);
            return _possibleConstructorReturn(
              this,
              (TextWidgetAnnotationElement.__proto__ || Object.getPrototypeOf(TextWidgetAnnotationElement)).call(
                this,
                parameters,
                isRenderable,
              ),
            );
          }

          _createClass(TextWidgetAnnotationElement, [
            {
              key: 'render',
              value: function render() {
                const TEXT_ALIGNMENT = ['left', 'center', 'right'];
                this.container.className = 'textWidgetAnnotation';
                let element = null;
                if (this.renderInteractiveForms) {
                  if (this.data.multiLine) {
                    element = document.createElement('textarea');
                    element.textContent = this.data.fieldValue;
                  } else {
                    element = document.createElement('input');
                    element.type = 'text';
                    element.setAttribute('value', this.data.fieldValue);
                  }
                  element.disabled = this.data.readOnly;
                  if (this.data.maxLen !== null) {
                    element.maxLength = this.data.maxLen;
                  }
                  if (this.data.comb) {
                    const fieldWidth = this.data.rect[2] - this.data.rect[0];
                    const combWidth = fieldWidth / this.data.maxLen;
                    element.classList.add('comb');
                    element.style.letterSpacing = 'calc(' + combWidth + 'px - 1ch)';
                  }
                } else {
                  element = document.createElement('div');
                  element.textContent = this.data.fieldValue;
                  element.style.verticalAlign = 'middle';
                  element.style.display = 'table-cell';
                  let font = null;
                  if (this.data.fontRefName) {
                    font = this.page.commonObjs.getData(this.data.fontRefName);
                  }
                  this._setTextStyle(element, font);
                }
                if (this.data.textAlignment !== null) {
                  element.style.textAlign = TEXT_ALIGNMENT[this.data.textAlignment];
                }
                this.container.appendChild(element);
                return this.container;
              },
            },
            {
              key: '_setTextStyle',
              value: function _setTextStyle(element, font) {
                const style = element.style;
                style.fontSize = this.data.fontSize + 'px';
                style.direction = this.data.fontDirection < 0 ? 'rtl' : 'ltr';
                if (!font) {
                  return;
                }
                style.fontWeight = font.black ? (font.bold ? '900' : 'bold') : font.bold ? 'bold' : 'normal';
                style.fontStyle = font.italic ? 'italic' : 'normal';
                const fontFamily = font.loadedName ? '"' + font.loadedName + '", ' : '';
                const fallbackName = font.fallbackName || 'Helvetica, sans-serif';
                style.fontFamily = fontFamily + fallbackName;
              },
            },
          ]);

          return TextWidgetAnnotationElement;
        })(WidgetAnnotationElement);

        var CheckboxWidgetAnnotationElement = (function (_WidgetAnnotationElem2) {
          _inherits(CheckboxWidgetAnnotationElement, _WidgetAnnotationElem2);

          function CheckboxWidgetAnnotationElement(parameters) {
            _classCallCheck(this, CheckboxWidgetAnnotationElement);

            return _possibleConstructorReturn(
              this,
              (CheckboxWidgetAnnotationElement.__proto__ || Object.getPrototypeOf(CheckboxWidgetAnnotationElement)).call(
                this,
                parameters,
                parameters.renderInteractiveForms,
              ),
            );
          }

          _createClass(CheckboxWidgetAnnotationElement, [
            {
              key: 'render',
              value: function render() {
                this.container.className = 'buttonWidgetAnnotation checkBox';
                const element = document.createElement('input');
                element.disabled = this.data.readOnly;
                element.type = 'checkbox';
                if (this.data.fieldValue && this.data.fieldValue !== 'Off') {
                  element.setAttribute('checked', true);
                }
                this.container.appendChild(element);
                return this.container;
              },
            },
          ]);

          return CheckboxWidgetAnnotationElement;
        })(WidgetAnnotationElement);

        var RadioButtonWidgetAnnotationElement = (function (_WidgetAnnotationElem3) {
          _inherits(RadioButtonWidgetAnnotationElement, _WidgetAnnotationElem3);

          function RadioButtonWidgetAnnotationElement(parameters) {
            _classCallCheck(this, RadioButtonWidgetAnnotationElement);

            return _possibleConstructorReturn(
              this,
              (RadioButtonWidgetAnnotationElement.__proto__ || Object.getPrototypeOf(RadioButtonWidgetAnnotationElement)).call(
                this,
                parameters,
                parameters.renderInteractiveForms,
              ),
            );
          }

          _createClass(RadioButtonWidgetAnnotationElement, [
            {
              key: 'render',
              value: function render() {
                this.container.className = 'buttonWidgetAnnotation radioButton';
                const element = document.createElement('input');
                element.disabled = this.data.readOnly;
                element.type = 'radio';
                element.name = this.data.fieldName;
                if (this.data.fieldValue === this.data.buttonValue) {
                  element.setAttribute('checked', true);
                }
                this.container.appendChild(element);
                return this.container;
              },
            },
          ]);

          return RadioButtonWidgetAnnotationElement;
        })(WidgetAnnotationElement);

        var PushButtonWidgetAnnotationElement = (function (_LinkAnnotationElemen) {
          _inherits(PushButtonWidgetAnnotationElement, _LinkAnnotationElemen);

          function PushButtonWidgetAnnotationElement() {
            _classCallCheck(this, PushButtonWidgetAnnotationElement);

            return _possibleConstructorReturn(
              this,
              (PushButtonWidgetAnnotationElement.__proto__ || Object.getPrototypeOf(PushButtonWidgetAnnotationElement)).apply(
                this,
                arguments,
              ),
            );
          }

          _createClass(PushButtonWidgetAnnotationElement, [
            {
              key: 'render',
              value: function render() {
                const container = _get(
                  PushButtonWidgetAnnotationElement.prototype.__proto__ ||
                    Object.getPrototypeOf(PushButtonWidgetAnnotationElement.prototype),
                  'render',
                  this,
                ).call(this);
                container.className = 'buttonWidgetAnnotation pushButton';
                return container;
              },
            },
          ]);

          return PushButtonWidgetAnnotationElement;
        })(LinkAnnotationElement);

        var ChoiceWidgetAnnotationElement = (function (_WidgetAnnotationElem4) {
          _inherits(ChoiceWidgetAnnotationElement, _WidgetAnnotationElem4);

          function ChoiceWidgetAnnotationElement(parameters) {
            _classCallCheck(this, ChoiceWidgetAnnotationElement);

            return _possibleConstructorReturn(
              this,
              (ChoiceWidgetAnnotationElement.__proto__ || Object.getPrototypeOf(ChoiceWidgetAnnotationElement)).call(
                this,
                parameters,
                parameters.renderInteractiveForms,
              ),
            );
          }

          _createClass(ChoiceWidgetAnnotationElement, [
            {
              key: 'render',
              value: function render() {
                this.container.className = 'choiceWidgetAnnotation';
                const selectElement = document.createElement('select');
                selectElement.disabled = this.data.readOnly;
                if (!this.data.combo) {
                  selectElement.size = this.data.options.length;
                  if (this.data.multiSelect) {
                    selectElement.multiple = true;
                  }
                }
                for (let i = 0, ii = this.data.options.length; i < ii; i++) {
                  const option = this.data.options[i];
                  const optionElement = document.createElement('option');
                  optionElement.textContent = option.displayValue;
                  optionElement.value = option.exportValue;
                  if (this.data.fieldValue.includes(option.displayValue)) {
                    optionElement.setAttribute('selected', true);
                  }
                  selectElement.appendChild(optionElement);
                }
                this.container.appendChild(selectElement);
                return this.container;
              },
            },
          ]);

          return ChoiceWidgetAnnotationElement;
        })(WidgetAnnotationElement);

        var PopupAnnotationElement = (function (_AnnotationElement4) {
          _inherits(PopupAnnotationElement, _AnnotationElement4);

          function PopupAnnotationElement(parameters) {
            _classCallCheck(this, PopupAnnotationElement);

            const isRenderable = !!(parameters.data.title || parameters.data.contents);
            return _possibleConstructorReturn(
              this,
              (PopupAnnotationElement.__proto__ || Object.getPrototypeOf(PopupAnnotationElement)).call(this, parameters, isRenderable),
            );
          }

          _createClass(PopupAnnotationElement, [
            {
              key: 'render',
              value: function render() {
                const IGNORE_TYPES = ['Line', 'Square', 'Circle', 'PolyLine', 'Polygon', 'Ink'];
                this.container.className = 'popupAnnotation';
                if (IGNORE_TYPES.includes(this.data.parentType)) {
                  return this.container;
                }
                const selector = '[data-annotation-id="' + this.data.parentId + '"]';
                const parentElement = this.layer.querySelector(selector);
                if (!parentElement) {
                  return this.container;
                }
                const popup = new PopupElement({
                  container: this.container,
                  trigger: parentElement,
                  color: this.data.color,
                  title: this.data.title,
                  contents: this.data.contents,
                });
                const parentLeft = parseFloat(parentElement.style.left);
                const parentWidth = parseFloat(parentElement.style.width);
                this.container.style.transformOrigin = -(parentLeft + parentWidth) + 'px -' + parentElement.style.top;
                this.container.style.left = parentLeft + parentWidth + 'px';
                this.container.appendChild(popup.render());
                return this.container;
              },
            },
          ]);

          return PopupAnnotationElement;
        })(AnnotationElement);

        var PopupElement = (function () {
          function PopupElement(parameters) {
            _classCallCheck(this, PopupElement);

            this.container = parameters.container;
            this.trigger = parameters.trigger;
            this.color = parameters.color;
            this.title = parameters.title;
            this.contents = parameters.contents;
            this.hideWrapper = parameters.hideWrapper || false;
            this.pinned = false;
          }

          _createClass(PopupElement, [
            {
              key: 'render',
              value: function render() {
                const BACKGROUND_ENLIGHT = 0.7;
                const wrapper = document.createElement('div');
                wrapper.className = 'popupWrapper';
                this.hideElement = this.hideWrapper ? wrapper : this.container;
                this.hideElement.setAttribute('hidden', true);
                const popup = document.createElement('div');
                popup.className = 'popup';
                const color = this.color;
                if (color) {
                  const r = BACKGROUND_ENLIGHT * (255 - color[0]) + color[0];
                  const g = BACKGROUND_ENLIGHT * (255 - color[1]) + color[1];
                  const b = BACKGROUND_ENLIGHT * (255 - color[2]) + color[2];
                  popup.style.backgroundColor = _util.Util.makeCssRgb(r | 0, g | 0, b | 0);
                }
                const contents = this._formatContents(this.contents);
                const title = document.createElement('h1');
                title.textContent = this.title;
                this.trigger.addEventListener('click', this._toggle.bind(this));
                this.trigger.addEventListener('mouseover', this._show.bind(this, false));
                this.trigger.addEventListener('mouseout', this._hide.bind(this, false));
                popup.addEventListener('click', this._hide.bind(this, true));
                popup.appendChild(title);
                popup.appendChild(contents);
                wrapper.appendChild(popup);
                return wrapper;
              },
            },
            {
              key: '_formatContents',
              value: function _formatContents(contents) {
                const p = document.createElement('p');
                const lines = contents.split(/(?:\r\n?|\n)/);
                for (let i = 0, ii = lines.length; i < ii; ++i) {
                  const line = lines[i];
                  p.appendChild(document.createTextNode(line));
                  if (i < ii - 1) {
                    p.appendChild(document.createElement('br'));
                  }
                }
                return p;
              },
            },
            {
              key: '_toggle',
              value: function _toggle() {
                if (this.pinned) {
                  this._hide(true);
                } else {
                  this._show(true);
                }
              },
            },
            {
              key: '_show',
              value: function _show() {
                const pin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

                if (pin) {
                  this.pinned = true;
                }
                if (this.hideElement.hasAttribute('hidden')) {
                  this.hideElement.removeAttribute('hidden');
                  this.container.style.zIndex += 1;
                }
              },
            },
            {
              key: '_hide',
              value: function _hide() {
                const unpin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

                if (unpin) {
                  this.pinned = false;
                }
                if (!this.hideElement.hasAttribute('hidden') && !this.pinned) {
                  this.hideElement.setAttribute('hidden', true);
                  this.container.style.zIndex -= 1;
                }
              },
            },
          ]);

          return PopupElement;
        })();

        var LineAnnotationElement = (function (_AnnotationElement5) {
          _inherits(LineAnnotationElement, _AnnotationElement5);

          function LineAnnotationElement(parameters) {
            _classCallCheck(this, LineAnnotationElement);

            const isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
            return _possibleConstructorReturn(
              this,
              (LineAnnotationElement.__proto__ || Object.getPrototypeOf(LineAnnotationElement)).call(this, parameters, isRenderable, true),
            );
          }

          _createClass(LineAnnotationElement, [
            {
              key: 'render',
              value: function render() {
                this.container.className = 'lineAnnotation';
                const data = this.data;
                const width = data.rect[2] - data.rect[0];
                const height = data.rect[3] - data.rect[1];
                const svg = this.svgFactory.create(width, height);
                const line = this.svgFactory.createElement('svg:line');
                line.setAttribute('x1', data.rect[2] - data.lineCoordinates[0]);
                line.setAttribute('y1', data.rect[3] - data.lineCoordinates[1]);
                line.setAttribute('x2', data.rect[2] - data.lineCoordinates[2]);
                line.setAttribute('y2', data.rect[3] - data.lineCoordinates[3]);
                line.setAttribute('stroke-width', data.borderStyle.width);
                line.setAttribute('stroke', 'transparent');
                svg.appendChild(line);
                this.container.append(svg);
                this._createPopup(this.container, line, data);
                return this.container;
              },
            },
          ]);

          return LineAnnotationElement;
        })(AnnotationElement);

        var SquareAnnotationElement = (function (_AnnotationElement6) {
          _inherits(SquareAnnotationElement, _AnnotationElement6);

          function SquareAnnotationElement(parameters) {
            _classCallCheck(this, SquareAnnotationElement);

            const isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
            return _possibleConstructorReturn(
              this,
              (SquareAnnotationElement.__proto__ || Object.getPrototypeOf(SquareAnnotationElement)).call(
                this,
                parameters,
                isRenderable,
                true,
              ),
            );
          }

          _createClass(SquareAnnotationElement, [
            {
              key: 'render',
              value: function render() {
                this.container.className = 'squareAnnotation';
                const data = this.data;
                const width = data.rect[2] - data.rect[0];
                const height = data.rect[3] - data.rect[1];
                const svg = this.svgFactory.create(width, height);
                const borderWidth = data.borderStyle.width;
                const square = this.svgFactory.createElement('svg:rect');
                square.setAttribute('x', borderWidth / 2);
                square.setAttribute('y', borderWidth / 2);
                square.setAttribute('width', width - borderWidth);
                square.setAttribute('height', height - borderWidth);
                square.setAttribute('stroke-width', borderWidth);
                square.setAttribute('stroke', 'transparent');
                square.setAttribute('fill', 'none');
                svg.appendChild(square);
                this.container.append(svg);
                this._createPopup(this.container, square, data);
                return this.container;
              },
            },
          ]);

          return SquareAnnotationElement;
        })(AnnotationElement);

        var CircleAnnotationElement = (function (_AnnotationElement7) {
          _inherits(CircleAnnotationElement, _AnnotationElement7);

          function CircleAnnotationElement(parameters) {
            _classCallCheck(this, CircleAnnotationElement);

            const isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
            return _possibleConstructorReturn(
              this,
              (CircleAnnotationElement.__proto__ || Object.getPrototypeOf(CircleAnnotationElement)).call(
                this,
                parameters,
                isRenderable,
                true,
              ),
            );
          }

          _createClass(CircleAnnotationElement, [
            {
              key: 'render',
              value: function render() {
                this.container.className = 'circleAnnotation';
                const data = this.data;
                const width = data.rect[2] - data.rect[0];
                const height = data.rect[3] - data.rect[1];
                const svg = this.svgFactory.create(width, height);
                const borderWidth = data.borderStyle.width;
                const circle = this.svgFactory.createElement('svg:ellipse');
                circle.setAttribute('cx', width / 2);
                circle.setAttribute('cy', height / 2);
                circle.setAttribute('rx', width / 2 - borderWidth / 2);
                circle.setAttribute('ry', height / 2 - borderWidth / 2);
                circle.setAttribute('stroke-width', borderWidth);
                circle.setAttribute('stroke', 'transparent');
                circle.setAttribute('fill', 'none');
                svg.appendChild(circle);
                this.container.append(svg);
                this._createPopup(this.container, circle, data);
                return this.container;
              },
            },
          ]);

          return CircleAnnotationElement;
        })(AnnotationElement);

        var PolylineAnnotationElement = (function (_AnnotationElement8) {
          _inherits(PolylineAnnotationElement, _AnnotationElement8);

          function PolylineAnnotationElement(parameters) {
            _classCallCheck(this, PolylineAnnotationElement);

            const isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);

            const _this15 = _possibleConstructorReturn(
              this,
              (PolylineAnnotationElement.__proto__ || Object.getPrototypeOf(PolylineAnnotationElement)).call(
                this,
                parameters,
                isRenderable,
                true,
              ),
            );

            _this15.containerClassName = 'polylineAnnotation';
            _this15.svgElementName = 'svg:polyline';
            return _this15;
          }

          _createClass(PolylineAnnotationElement, [
            {
              key: 'render',
              value: function render() {
                this.container.className = this.containerClassName;
                const data = this.data;
                const width = data.rect[2] - data.rect[0];
                const height = data.rect[3] - data.rect[1];
                const svg = this.svgFactory.create(width, height);
                const vertices = data.vertices;
                let points = [];
                for (let i = 0, ii = vertices.length; i < ii; i++) {
                  const x = vertices[i].x - data.rect[0];
                  const y = data.rect[3] - vertices[i].y;
                  points.push(x + ',' + y);
                }
                points = points.join(' ');
                const borderWidth = data.borderStyle.width;
                const polyline = this.svgFactory.createElement(this.svgElementName);
                polyline.setAttribute('points', points);
                polyline.setAttribute('stroke-width', borderWidth);
                polyline.setAttribute('stroke', 'transparent');
                polyline.setAttribute('fill', 'none');
                svg.appendChild(polyline);
                this.container.append(svg);
                this._createPopup(this.container, polyline, data);
                return this.container;
              },
            },
          ]);

          return PolylineAnnotationElement;
        })(AnnotationElement);

        var PolygonAnnotationElement = (function (_PolylineAnnotationEl) {
          _inherits(PolygonAnnotationElement, _PolylineAnnotationEl);

          function PolygonAnnotationElement(parameters) {
            _classCallCheck(this, PolygonAnnotationElement);

            const _this16 = _possibleConstructorReturn(
              this,
              (PolygonAnnotationElement.__proto__ || Object.getPrototypeOf(PolygonAnnotationElement)).call(this, parameters),
            );

            _this16.containerClassName = 'polygonAnnotation';
            _this16.svgElementName = 'svg:polygon';
            return _this16;
          }

          return PolygonAnnotationElement;
        })(PolylineAnnotationElement);

        var InkAnnotationElement = (function (_AnnotationElement9) {
          _inherits(InkAnnotationElement, _AnnotationElement9);

          function InkAnnotationElement(parameters) {
            _classCallCheck(this, InkAnnotationElement);

            const isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);

            const _this17 = _possibleConstructorReturn(
              this,
              (InkAnnotationElement.__proto__ || Object.getPrototypeOf(InkAnnotationElement)).call(this, parameters, isRenderable, true),
            );

            _this17.containerClassName = 'inkAnnotation';
            _this17.svgElementName = 'svg:polyline';
            return _this17;
          }

          _createClass(InkAnnotationElement, [
            {
              key: 'render',
              value: function render() {
                this.container.className = this.containerClassName;
                const data = this.data;
                const width = data.rect[2] - data.rect[0];
                const height = data.rect[3] - data.rect[1];
                const svg = this.svgFactory.create(width, height);
                const inkLists = data.inkLists;
                for (let i = 0, ii = inkLists.length; i < ii; i++) {
                  const inkList = inkLists[i];
                  let points = [];
                  for (let j = 0, jj = inkList.length; j < jj; j++) {
                    const x = inkList[j].x - data.rect[0];
                    const y = data.rect[3] - inkList[j].y;
                    points.push(x + ',' + y);
                  }
                  points = points.join(' ');
                  const borderWidth = data.borderStyle.width;
                  const polyline = this.svgFactory.createElement(this.svgElementName);
                  polyline.setAttribute('points', points);
                  polyline.setAttribute('stroke-width', borderWidth);
                  polyline.setAttribute('stroke', 'transparent');
                  polyline.setAttribute('fill', 'none');
                  this._createPopup(this.container, polyline, data);
                  svg.appendChild(polyline);
                }
                this.container.append(svg);
                return this.container;
              },
            },
          ]);

          return InkAnnotationElement;
        })(AnnotationElement);

        var HighlightAnnotationElement = (function (_AnnotationElement10) {
          _inherits(HighlightAnnotationElement, _AnnotationElement10);

          function HighlightAnnotationElement(parameters) {
            _classCallCheck(this, HighlightAnnotationElement);

            const isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
            return _possibleConstructorReturn(
              this,
              (HighlightAnnotationElement.__proto__ || Object.getPrototypeOf(HighlightAnnotationElement)).call(
                this,
                parameters,
                isRenderable,
                true,
              ),
            );
          }

          _createClass(HighlightAnnotationElement, [
            {
              key: 'render',
              value: function render() {
                this.container.className = 'highlightAnnotation';
                if (!this.data.hasPopup) {
                  this._createPopup(this.container, null, this.data);
                }
                return this.container;
              },
            },
          ]);

          return HighlightAnnotationElement;
        })(AnnotationElement);

        var UnderlineAnnotationElement = (function (_AnnotationElement11) {
          _inherits(UnderlineAnnotationElement, _AnnotationElement11);

          function UnderlineAnnotationElement(parameters) {
            _classCallCheck(this, UnderlineAnnotationElement);

            const isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
            return _possibleConstructorReturn(
              this,
              (UnderlineAnnotationElement.__proto__ || Object.getPrototypeOf(UnderlineAnnotationElement)).call(
                this,
                parameters,
                isRenderable,
                true,
              ),
            );
          }

          _createClass(UnderlineAnnotationElement, [
            {
              key: 'render',
              value: function render() {
                this.container.className = 'underlineAnnotation';
                if (!this.data.hasPopup) {
                  this._createPopup(this.container, null, this.data);
                }
                return this.container;
              },
            },
          ]);

          return UnderlineAnnotationElement;
        })(AnnotationElement);

        var SquigglyAnnotationElement = (function (_AnnotationElement12) {
          _inherits(SquigglyAnnotationElement, _AnnotationElement12);

          function SquigglyAnnotationElement(parameters) {
            _classCallCheck(this, SquigglyAnnotationElement);

            const isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
            return _possibleConstructorReturn(
              this,
              (SquigglyAnnotationElement.__proto__ || Object.getPrototypeOf(SquigglyAnnotationElement)).call(
                this,
                parameters,
                isRenderable,
                true,
              ),
            );
          }

          _createClass(SquigglyAnnotationElement, [
            {
              key: 'render',
              value: function render() {
                this.container.className = 'squigglyAnnotation';
                if (!this.data.hasPopup) {
                  this._createPopup(this.container, null, this.data);
                }
                return this.container;
              },
            },
          ]);

          return SquigglyAnnotationElement;
        })(AnnotationElement);

        var StrikeOutAnnotationElement = (function (_AnnotationElement13) {
          _inherits(StrikeOutAnnotationElement, _AnnotationElement13);

          function StrikeOutAnnotationElement(parameters) {
            _classCallCheck(this, StrikeOutAnnotationElement);

            const isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
            return _possibleConstructorReturn(
              this,
              (StrikeOutAnnotationElement.__proto__ || Object.getPrototypeOf(StrikeOutAnnotationElement)).call(
                this,
                parameters,
                isRenderable,
                true,
              ),
            );
          }

          _createClass(StrikeOutAnnotationElement, [
            {
              key: 'render',
              value: function render() {
                this.container.className = 'strikeoutAnnotation';
                if (!this.data.hasPopup) {
                  this._createPopup(this.container, null, this.data);
                }
                return this.container;
              },
            },
          ]);

          return StrikeOutAnnotationElement;
        })(AnnotationElement);

        var StampAnnotationElement = (function (_AnnotationElement14) {
          _inherits(StampAnnotationElement, _AnnotationElement14);

          function StampAnnotationElement(parameters) {
            _classCallCheck(this, StampAnnotationElement);

            const isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
            return _possibleConstructorReturn(
              this,
              (StampAnnotationElement.__proto__ || Object.getPrototypeOf(StampAnnotationElement)).call(
                this,
                parameters,
                isRenderable,
                true,
              ),
            );
          }

          _createClass(StampAnnotationElement, [
            {
              key: 'render',
              value: function render() {
                this.container.className = 'stampAnnotation';
                if (!this.data.hasPopup) {
                  this._createPopup(this.container, null, this.data);
                }
                return this.container;
              },
            },
          ]);

          return StampAnnotationElement;
        })(AnnotationElement);

        var FileAttachmentAnnotationElement = (function (_AnnotationElement15) {
          _inherits(FileAttachmentAnnotationElement, _AnnotationElement15);

          function FileAttachmentAnnotationElement(parameters) {
            _classCallCheck(this, FileAttachmentAnnotationElement);

            const _this23 = _possibleConstructorReturn(
              this,
              (FileAttachmentAnnotationElement.__proto__ || Object.getPrototypeOf(FileAttachmentAnnotationElement)).call(
                this,
                parameters,
                true,
              ),
            );

            const _this23$data$file = _this23.data.file,
              filename = _this23$data$file.filename,
              content = _this23$data$file.content;

            _this23.filename = (0, _dom_utils.getFilenameFromUrl)(filename);
            _this23.content = content;
            if (_this23.linkService.eventBus) {
              _this23.linkService.eventBus.dispatch('fileattachmentannotation', {
                source: _this23,
                id: (0, _util.stringToPDFString)(filename),
                filename: filename,
                content: content,
              });
            }
            return _this23;
          }

          _createClass(FileAttachmentAnnotationElement, [
            {
              key: 'render',
              value: function render() {
                this.container.className = 'fileAttachmentAnnotation';
                const trigger = document.createElement('div');
                trigger.style.height = this.container.style.height;
                trigger.style.width = this.container.style.width;
                trigger.addEventListener('dblclick', this._download.bind(this));
                if (!this.data.hasPopup && (this.data.title || this.data.contents)) {
                  this._createPopup(this.container, trigger, this.data);
                }
                this.container.appendChild(trigger);
                return this.container;
              },
            },
            {
              key: '_download',
              value: function _download() {
                if (!this.downloadManager) {
                  (0, _util.warn)('Download cannot be started due to unavailable download manager');
                  return;
                }
                this.downloadManager.downloadData(this.content, this.filename, '');
              },
            },
          ]);

          return FileAttachmentAnnotationElement;
        })(AnnotationElement);

        const AnnotationLayer = (function () {
          function AnnotationLayer() {
            _classCallCheck(this, AnnotationLayer);
          }

          _createClass(AnnotationLayer, null, [
            {
              key: 'render',
              value: function render(parameters) {
                for (let i = 0, ii = parameters.annotations.length; i < ii; i++) {
                  const data = parameters.annotations[i];
                  if (!data) {
                    continue;
                  }
                  const element = AnnotationElementFactory.create({
                    data: data,
                    layer: parameters.div,
                    page: parameters.page,
                    viewport: parameters.viewport,
                    linkService: parameters.linkService,
                    downloadManager: parameters.downloadManager,
                    imageResourcesPath: parameters.imageResourcesPath || '',
                    renderInteractiveForms: parameters.renderInteractiveForms || false,
                    svgFactory: new _dom_utils.DOMSVGFactory(),
                  });
                  if (element.isRenderable) {
                    parameters.div.appendChild(element.render());
                  }
                }
              },
            },
            {
              key: 'update',
              value: function update(parameters) {
                for (let i = 0, ii = parameters.annotations.length; i < ii; i++) {
                  const data = parameters.annotations[i];
                  const element = parameters.div.querySelector('[data-annotation-id="' + data.id + '"]');
                  if (element) {
                    element.style.transform = 'matrix(' + parameters.viewport.transform.join(',') + ')';
                  }
                }
                parameters.div.removeAttribute('hidden');
              },
            },
          ]);

          return AnnotationLayer;
        })();

        exports.AnnotationLayer = AnnotationLayer;

        /***/
      },
      /* 147 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.SVGGraphics = undefined;

        const _util = __w_pdfjs_require__(1);

        const _dom_utils = __w_pdfjs_require__(130);

        const _is_node = __w_pdfjs_require__(4);

        const _is_node2 = _interopRequireDefault(_is_node);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        let SVGGraphics = function SVGGraphics() {
          throw new Error('Not implemented: SVGGraphics');
        };
        {
          const SVG_DEFAULTS = {
            fontStyle: 'normal',
            fontWeight: 'normal',
            fillColor: '#000000',
          };
          const convertImgDataToPng = (function convertImgDataToPngClosure() {
            const PNG_HEADER = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
            const CHUNK_WRAPPER_SIZE = 12;
            const crcTable = new Int32Array(256);
            for (let i = 0; i < 256; i++) {
              let c = i;
              for (let h = 0; h < 8; h++) {
                if (c & 1) {
                  c = 0xedb88320 ^ ((c >> 1) & 0x7fffffff);
                } else {
                  c = (c >> 1) & 0x7fffffff;
                }
              }
              crcTable[i] = c;
            }
            function crc32(data, start, end) {
              let crc = -1;
              for (let i = start; i < end; i++) {
                const a = (crc ^ data[i]) & 0xff;
                const b = crcTable[a];
                crc = (crc >>> 8) ^ b;
              }
              return crc ^ -1;
            }
            function writePngChunk(type, body, data, offset) {
              let p = offset;
              const len = body.length;
              data[p] = (len >> 24) & 0xff;
              data[p + 1] = (len >> 16) & 0xff;
              data[p + 2] = (len >> 8) & 0xff;
              data[p + 3] = len & 0xff;
              p += 4;
              data[p] = type.charCodeAt(0) & 0xff;
              data[p + 1] = type.charCodeAt(1) & 0xff;
              data[p + 2] = type.charCodeAt(2) & 0xff;
              data[p + 3] = type.charCodeAt(3) & 0xff;
              p += 4;
              data.set(body, p);
              p += body.length;
              const crc = crc32(data, offset + 4, p);
              data[p] = (crc >> 24) & 0xff;
              data[p + 1] = (crc >> 16) & 0xff;
              data[p + 2] = (crc >> 8) & 0xff;
              data[p + 3] = crc & 0xff;
            }
            function adler32(data, start, end) {
              let a = 1;
              let b = 0;
              for (let i = start; i < end; ++i) {
                a = (a + (data[i] & 0xff)) % 65521;
                b = (b + a) % 65521;
              }
              return (b << 16) | a;
            }
            function deflateSync(literals) {
              if (!(0, _is_node2.default)()) {
                return deflateSyncUncompressed(literals);
              }
              try {
                let input;
                if (parseInt(process.versions.node) >= 8) {
                  input = literals;
                } else {
                  input = new Buffer(literals);
                }
                const output = require('zlib').deflateSync(input, { level: 9 });
                return output instanceof Uint8Array ? output : new Uint8Array(output);
              } catch (e) {
                (0, _util.warn)('Not compressing PNG because zlib.deflateSync is unavailable: ' + e);
              }
              return deflateSyncUncompressed(literals);
            }
            function deflateSyncUncompressed(literals) {
              let len = literals.length;
              const maxBlockLength = 0xffff;
              const deflateBlocks = Math.ceil(len / maxBlockLength);
              const idat = new Uint8Array(2 + len + deflateBlocks * 5 + 4);
              let pi = 0;
              idat[pi++] = 0x78;
              idat[pi++] = 0x9c;
              let pos = 0;
              while (len > maxBlockLength) {
                idat[pi++] = 0x00;
                idat[pi++] = 0xff;
                idat[pi++] = 0xff;
                idat[pi++] = 0x00;
                idat[pi++] = 0x00;
                idat.set(literals.subarray(pos, pos + maxBlockLength), pi);
                pi += maxBlockLength;
                pos += maxBlockLength;
                len -= maxBlockLength;
              }
              idat[pi++] = 0x01;
              idat[pi++] = len & 0xff;
              idat[pi++] = (len >> 8) & 0xff;
              idat[pi++] = ~len & 0xffff & 0xff;
              idat[pi++] = ((~len & 0xffff) >> 8) & 0xff;
              idat.set(literals.subarray(pos), pi);
              pi += literals.length - pos;
              const adler = adler32(literals, 0, literals.length);
              idat[pi++] = (adler >> 24) & 0xff;
              idat[pi++] = (adler >> 16) & 0xff;
              idat[pi++] = (adler >> 8) & 0xff;
              idat[pi++] = adler & 0xff;
              return idat;
            }
            function encode(imgData, kind, forceDataSchema, isMask) {
              const width = imgData.width;
              const height = imgData.height;
              let bitDepth, colorType, lineSize;
              const bytes = imgData.data;
              switch (kind) {
                case _util.ImageKind.GRAYSCALE_1BPP:
                  colorType = 0;
                  bitDepth = 1;
                  lineSize = (width + 7) >> 3;
                  break;
                case _util.ImageKind.RGB_24BPP:
                  colorType = 2;
                  bitDepth = 8;
                  lineSize = width * 3;
                  break;
                case _util.ImageKind.RGBA_32BPP:
                  colorType = 6;
                  bitDepth = 8;
                  lineSize = width * 4;
                  break;
                default:
                  throw new Error('invalid format');
              }
              const literals = new Uint8Array((1 + lineSize) * height);
              let offsetLiterals = 0,
                offsetBytes = 0;
              let y, i;
              for (y = 0; y < height; ++y) {
                literals[offsetLiterals++] = 0;
                literals.set(bytes.subarray(offsetBytes, offsetBytes + lineSize), offsetLiterals);
                offsetBytes += lineSize;
                offsetLiterals += lineSize;
              }
              if (kind === _util.ImageKind.GRAYSCALE_1BPP && isMask) {
                offsetLiterals = 0;
                for (y = 0; y < height; y++) {
                  offsetLiterals++;
                  for (i = 0; i < lineSize; i++) {
                    literals[offsetLiterals++] ^= 0xff;
                  }
                }
              }
              const ihdr = new Uint8Array([
                (width >> 24) & 0xff,
                (width >> 16) & 0xff,
                (width >> 8) & 0xff,
                width & 0xff,
                (height >> 24) & 0xff,
                (height >> 16) & 0xff,
                (height >> 8) & 0xff,
                height & 0xff,
                bitDepth,
                colorType,
                0x00,
                0x00,
                0x00,
              ]);
              const idat = deflateSync(literals);
              const pngLength = PNG_HEADER.length + CHUNK_WRAPPER_SIZE * 3 + ihdr.length + idat.length;
              const data = new Uint8Array(pngLength);
              let offset = 0;
              data.set(PNG_HEADER, offset);
              offset += PNG_HEADER.length;
              writePngChunk('IHDR', ihdr, data, offset);
              offset += CHUNK_WRAPPER_SIZE + ihdr.length;
              writePngChunk('IDATA', idat, data, offset);
              offset += CHUNK_WRAPPER_SIZE + idat.length;
              writePngChunk('IEND', new Uint8Array(0), data, offset);
              return (0, _util.createObjectURL)(data, 'image/png', forceDataSchema);
            }
            return function convertImgDataToPng(imgData, forceDataSchema, isMask) {
              const kind = imgData.kind === undefined ? _util.ImageKind.GRAYSCALE_1BPP : imgData.kind;
              return encode(imgData, kind, forceDataSchema, isMask);
            };
          })();
          const SVGExtraState = (function SVGExtraStateClosure() {
            function SVGExtraState() {
              this.fontSizeScale = 1;
              this.fontWeight = SVG_DEFAULTS.fontWeight;
              this.fontSize = 0;
              this.textMatrix = _util.IDENTITY_MATRIX;
              this.fontMatrix = _util.FONT_IDENTITY_MATRIX;
              this.leading = 0;
              this.textRenderingMode = _util.TextRenderingMode.FILL;
              this.x = 0;
              this.y = 0;
              this.lineX = 0;
              this.lineY = 0;
              this.charSpacing = 0;
              this.wordSpacing = 0;
              this.textHScale = 1;
              this.textRise = 0;
              this.fillColor = SVG_DEFAULTS.fillColor;
              this.strokeColor = '#000000';
              this.fillAlpha = 1;
              this.strokeAlpha = 1;
              this.lineWidth = 1;
              this.lineJoin = '';
              this.lineCap = '';
              this.miterLimit = 0;
              this.dashArray = [];
              this.dashPhase = 0;
              this.dependencies = [];
              this.activeClipUrl = null;
              this.clipGroup = null;
              this.maskId = '';
            }
            SVGExtraState.prototype = {
              clone: function SVGExtraState_clone() {
                return Object.create(this);
              },
              setCurrentPoint: function SVGExtraState_setCurrentPoint(x, y) {
                this.x = x;
                this.y = y;
              },
            };
            return SVGExtraState;
          })();
          exports.SVGGraphics = SVGGraphics = (function SVGGraphicsClosure() {
            function opListToTree(opList) {
              let opTree = [];
              const tmp = [];
              const opListLen = opList.length;
              for (let x = 0; x < opListLen; x++) {
                if (opList[x].fn === 'save') {
                  opTree.push({
                    fnId: 92,
                    fn: 'group',
                    items: [],
                  });
                  tmp.push(opTree);
                  opTree = opTree[opTree.length - 1].items;
                  continue;
                }
                if (opList[x].fn === 'restore') {
                  opTree = tmp.pop();
                } else {
                  opTree.push(opList[x]);
                }
              }
              return opTree;
            }
            function pf(value) {
              if (Number.isInteger(value)) {
                return value.toString();
              }
              const s = value.toFixed(10);
              let i = s.length - 1;
              if (s[i] !== '0') {
                return s;
              }
              do {
                i--;
              } while (s[i] === '0');
              return s.substring(0, s[i] === '.' ? i : i + 1);
            }
            function pm(m) {
              if (m[4] === 0 && m[5] === 0) {
                if (m[1] === 0 && m[2] === 0) {
                  if (m[0] === 1 && m[3] === 1) {
                    return '';
                  }
                  return 'scale(' + pf(m[0]) + ' ' + pf(m[3]) + ')';
                }
                if (m[0] === m[3] && m[1] === -m[2]) {
                  const a = (Math.acos(m[0]) * 180) / Math.PI;
                  return 'rotate(' + pf(a) + ')';
                }
              } else {
                if (m[0] === 1 && m[1] === 0 && m[2] === 0 && m[3] === 1) {
                  return 'translate(' + pf(m[4]) + ' ' + pf(m[5]) + ')';
                }
              }
              return 'matrix(' + pf(m[0]) + ' ' + pf(m[1]) + ' ' + pf(m[2]) + ' ' + pf(m[3]) + ' ' + pf(m[4]) + ' ' + pf(m[5]) + ')';
            }
            function SVGGraphics(commonObjs, objs, forceDataSchema) {
              this.svgFactory = new _dom_utils.DOMSVGFactory();
              this.current = new SVGExtraState();
              this.transformMatrix = _util.IDENTITY_MATRIX;
              this.transformStack = [];
              this.extraStack = [];
              this.commonObjs = commonObjs;
              this.objs = objs;
              this.pendingClip = null;
              this.pendingEOFill = false;
              this.embedFonts = false;
              this.embeddedFonts = Object.create(null);
              this.cssStyle = null;
              this.forceDataSchema = !!forceDataSchema;
            }
            const XML_NS = 'http://www.w3.org/XML/1998/namespace';
            const XLINK_NS = 'http://www.w3.org/1999/xlink';
            const LINE_CAP_STYLES = ['butt', 'round', 'square'];
            const LINE_JOIN_STYLES = ['miter', 'round', 'bevel'];
            let clipCount = 0;
            let maskCount = 0;
            SVGGraphics.prototype = {
              save: function SVGGraphics_save() {
                this.transformStack.push(this.transformMatrix);
                const old = this.current;
                this.extraStack.push(old);
                this.current = old.clone();
              },
              restore: function SVGGraphics_restore() {
                this.transformMatrix = this.transformStack.pop();
                this.current = this.extraStack.pop();
                this.pendingClip = null;
                this.tgrp = null;
              },
              group: function SVGGraphics_group(items) {
                this.save();
                this.executeOpTree(items);
                this.restore();
              },
              loadDependencies: function SVGGraphics_loadDependencies(operatorList) {
                const _this = this;

                const fnArray = operatorList.fnArray;
                const fnArrayLen = fnArray.length;
                const argsArray = operatorList.argsArray;
                for (let i = 0; i < fnArrayLen; i++) {
                  if (_util.OPS.dependency === fnArray[i]) {
                    const deps = argsArray[i];
                    for (let n = 0, nn = deps.length; n < nn; n++) {
                      var obj = deps[n];
                      const common = obj.substring(0, 2) === 'g_';
                      var promise;
                      if (common) {
                        promise = new Promise(function (resolve) {
                          _this.commonObjs.get(obj, resolve);
                        });
                      } else {
                        promise = new Promise(function (resolve) {
                          _this.objs.get(obj, resolve);
                        });
                      }
                      this.current.dependencies.push(promise);
                    }
                  }
                }
                return Promise.all(this.current.dependencies);
              },
              transform: function SVGGraphics_transform(a, b, c, d, e, f) {
                const transformMatrix = [a, b, c, d, e, f];
                this.transformMatrix = _util.Util.transform(this.transformMatrix, transformMatrix);
                this.tgrp = null;
              },
              getSVG: function SVGGraphics_getSVG(operatorList, viewport) {
                const _this2 = this;

                this.viewport = viewport;
                const svgElement = this._initialize(viewport);
                return this.loadDependencies(operatorList).then(function () {
                  _this2.transformMatrix = _util.IDENTITY_MATRIX;
                  const opTree = _this2.convertOpList(operatorList);
                  _this2.executeOpTree(opTree);
                  return svgElement;
                });
              },
              convertOpList: function SVGGraphics_convertOpList(operatorList) {
                const argsArray = operatorList.argsArray;
                const fnArray = operatorList.fnArray;
                const fnArrayLen = fnArray.length;
                const REVOPS = [];
                const opList = [];
                for (const op in _util.OPS) {
                  REVOPS[_util.OPS[op]] = op;
                }
                for (let x = 0; x < fnArrayLen; x++) {
                  const fnId = fnArray[x];
                  opList.push({
                    fnId: fnId,
                    fn: REVOPS[fnId],
                    args: argsArray[x],
                  });
                }
                return opListToTree(opList);
              },
              executeOpTree: function SVGGraphics_executeOpTree(opTree) {
                const opTreeLen = opTree.length;
                for (let x = 0; x < opTreeLen; x++) {
                  const fn = opTree[x].fn;
                  const fnId = opTree[x].fnId;
                  const args = opTree[x].args;
                  switch (fnId | 0) {
                    case _util.OPS.beginText:
                      this.beginText();
                      break;
                    case _util.OPS.dependency:
                      break;
                    case _util.OPS.setLeading:
                      this.setLeading(args);
                      break;
                    case _util.OPS.setLeadingMoveText:
                      this.setLeadingMoveText(args[0], args[1]);
                      break;
                    case _util.OPS.setFont:
                      this.setFont(args);
                      break;
                    case _util.OPS.showText:
                      this.showText(args[0]);
                      break;
                    case _util.OPS.showSpacedText:
                      this.showText(args[0]);
                      break;
                    case _util.OPS.endText:
                      this.endText();
                      break;
                    case _util.OPS.moveText:
                      this.moveText(args[0], args[1]);
                      break;
                    case _util.OPS.setCharSpacing:
                      this.setCharSpacing(args[0]);
                      break;
                    case _util.OPS.setWordSpacing:
                      this.setWordSpacing(args[0]);
                      break;
                    case _util.OPS.setHScale:
                      this.setHScale(args[0]);
                      break;
                    case _util.OPS.setTextMatrix:
                      this.setTextMatrix(args[0], args[1], args[2], args[3], args[4], args[5]);
                      break;
                    case _util.OPS.setTextRise:
                      this.setTextRise(args[0]);
                      break;
                    case _util.OPS.setTextRenderingMode:
                      this.setTextRenderingMode(args[0]);
                      break;
                    case _util.OPS.setLineWidth:
                      this.setLineWidth(args[0]);
                      break;
                    case _util.OPS.setLineJoin:
                      this.setLineJoin(args[0]);
                      break;
                    case _util.OPS.setLineCap:
                      this.setLineCap(args[0]);
                      break;
                    case _util.OPS.setMiterLimit:
                      this.setMiterLimit(args[0]);
                      break;
                    case _util.OPS.setFillRGBColor:
                      this.setFillRGBColor(args[0], args[1], args[2]);
                      break;
                    case _util.OPS.setStrokeRGBColor:
                      this.setStrokeRGBColor(args[0], args[1], args[2]);
                      break;
                    case _util.OPS.setDash:
                      this.setDash(args[0], args[1]);
                      break;
                    case _util.OPS.setGState:
                      this.setGState(args[0]);
                      break;
                    case _util.OPS.fill:
                      this.fill();
                      break;
                    case _util.OPS.eoFill:
                      this.eoFill();
                      break;
                    case _util.OPS.stroke:
                      this.stroke();
                      break;
                    case _util.OPS.fillStroke:
                      this.fillStroke();
                      break;
                    case _util.OPS.eoFillStroke:
                      this.eoFillStroke();
                      break;
                    case _util.OPS.clip:
                      this.clip('nonzero');
                      break;
                    case _util.OPS.eoClip:
                      this.clip('evenodd');
                      break;
                    case _util.OPS.paintSolidColorImageMask:
                      this.paintSolidColorImageMask();
                      break;
                    case _util.OPS.paintJpegXObject:
                      this.paintJpegXObject(args[0], args[1], args[2]);
                      break;
                    case _util.OPS.paintImageXObject:
                      this.paintImageXObject(args[0]);
                      break;
                    case _util.OPS.paintInlineImageXObject:
                      this.paintInlineImageXObject(args[0]);
                      break;
                    case _util.OPS.paintImageMaskXObject:
                      this.paintImageMaskXObject(args[0]);
                      break;
                    case _util.OPS.paintFormXObjectBegin:
                      this.paintFormXObjectBegin(args[0], args[1]);
                      break;
                    case _util.OPS.paintFormXObjectEnd:
                      this.paintFormXObjectEnd();
                      break;
                    case _util.OPS.closePath:
                      this.closePath();
                      break;
                    case _util.OPS.closeStroke:
                      this.closeStroke();
                      break;
                    case _util.OPS.closeFillStroke:
                      this.closeFillStroke();
                      break;
                    case _util.OPS.closeEOFillStroke:
                      this.closeEOFillStroke();
                      break;
                    case _util.OPS.nextLine:
                      this.nextLine();
                      break;
                    case _util.OPS.transform:
                      this.transform(args[0], args[1], args[2], args[3], args[4], args[5]);
                      break;
                    case _util.OPS.constructPath:
                      this.constructPath(args[0], args[1]);
                      break;
                    case _util.OPS.endPath:
                      this.endPath();
                      break;
                    case 92:
                      this.group(opTree[x].items);
                      break;
                    default:
                      (0, _util.warn)('Unimplemented operator ' + fn);
                      break;
                  }
                }
              },
              setWordSpacing: function SVGGraphics_setWordSpacing(wordSpacing) {
                this.current.wordSpacing = wordSpacing;
              },
              setCharSpacing: function SVGGraphics_setCharSpacing(charSpacing) {
                this.current.charSpacing = charSpacing;
              },
              nextLine: function SVGGraphics_nextLine() {
                this.moveText(0, this.current.leading);
              },
              setTextMatrix: function SVGGraphics_setTextMatrix(a, b, c, d, e, f) {
                const current = this.current;
                this.current.textMatrix = this.current.lineMatrix = [a, b, c, d, e, f];
                this.current.x = this.current.lineX = 0;
                this.current.y = this.current.lineY = 0;
                current.xcoords = [];
                current.tspan = this.svgFactory.createElement('svg:tspan');
                current.tspan.setAttributeNS(null, 'font-family', current.fontFamily);
                current.tspan.setAttributeNS(null, 'font-size', pf(current.fontSize) + 'px');
                current.tspan.setAttributeNS(null, 'y', pf(-current.y));
                current.txtElement = this.svgFactory.createElement('svg:text');
                current.txtElement.appendChild(current.tspan);
              },
              beginText: function SVGGraphics_beginText() {
                this.current.x = this.current.lineX = 0;
                this.current.y = this.current.lineY = 0;
                this.current.textMatrix = _util.IDENTITY_MATRIX;
                this.current.lineMatrix = _util.IDENTITY_MATRIX;
                this.current.tspan = this.svgFactory.createElement('svg:tspan');
                this.current.txtElement = this.svgFactory.createElement('svg:text');
                this.current.txtgrp = this.svgFactory.createElement('svg:g');
                this.current.xcoords = [];
              },
              moveText: function SVGGraphics_moveText(x, y) {
                const current = this.current;
                this.current.x = this.current.lineX += x;
                this.current.y = this.current.lineY += y;
                current.xcoords = [];
                current.tspan = this.svgFactory.createElement('svg:tspan');
                current.tspan.setAttributeNS(null, 'font-family', current.fontFamily);
                current.tspan.setAttributeNS(null, 'font-size', pf(current.fontSize) + 'px');
                current.tspan.setAttributeNS(null, 'y', pf(-current.y));
              },
              showText: function SVGGraphics_showText(glyphs) {
                const current = this.current;
                const font = current.font;
                const fontSize = current.fontSize;
                if (fontSize === 0) {
                  return;
                }
                const charSpacing = current.charSpacing;
                const wordSpacing = current.wordSpacing;
                const fontDirection = current.fontDirection;
                const textHScale = current.textHScale * fontDirection;
                const glyphsLength = glyphs.length;
                const vertical = font.vertical;
                const widthAdvanceScale = fontSize * current.fontMatrix[0];
                let x = 0,
                  i;
                for (i = 0; i < glyphsLength; ++i) {
                  const glyph = glyphs[i];
                  if (glyph === null) {
                    x += fontDirection * wordSpacing;
                    continue;
                  } else if ((0, _util.isNum)(glyph)) {
                    x += -glyph * fontSize * 0.001;
                    continue;
                  }
                  const width = glyph.width;
                  const character = glyph.fontChar;
                  const spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
                  const charWidth = width * widthAdvanceScale + spacing * fontDirection;
                  if (!glyph.isInFont && !font.missingFile) {
                    x += charWidth;
                    continue;
                  }
                  current.xcoords.push(current.x + x * textHScale);
                  current.tspan.textContent += character;
                  x += charWidth;
                }
                if (vertical) {
                  current.y -= x * textHScale;
                } else {
                  current.x += x * textHScale;
                }
                current.tspan.setAttributeNS(null, 'x', current.xcoords.map(pf).join(' '));
                current.tspan.setAttributeNS(null, 'y', pf(-current.y));
                current.tspan.setAttributeNS(null, 'font-family', current.fontFamily);
                current.tspan.setAttributeNS(null, 'font-size', pf(current.fontSize) + 'px');
                if (current.fontStyle !== SVG_DEFAULTS.fontStyle) {
                  current.tspan.setAttributeNS(null, 'font-style', current.fontStyle);
                }
                if (current.fontWeight !== SVG_DEFAULTS.fontWeight) {
                  current.tspan.setAttributeNS(null, 'font-weight', current.fontWeight);
                }
                const fillStrokeMode = current.textRenderingMode & _util.TextRenderingMode.FILL_STROKE_MASK;
                if (fillStrokeMode === _util.TextRenderingMode.FILL || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
                  if (current.fillColor !== SVG_DEFAULTS.fillColor) {
                    current.tspan.setAttributeNS(null, 'fill', current.fillColor);
                  }
                  if (current.fillAlpha < 1) {
                    current.tspan.setAttributeNS(null, 'fill-opacity', current.fillAlpha);
                  }
                } else if (current.textRenderingMode === _util.TextRenderingMode.ADD_TO_PATH) {
                  current.tspan.setAttributeNS(null, 'fill', 'transparent');
                } else {
                  current.tspan.setAttributeNS(null, 'fill', 'none');
                }
                if (fillStrokeMode === _util.TextRenderingMode.STROKE || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
                  this._setStrokeAttributes(current.tspan);
                }
                let textMatrix = current.textMatrix;
                if (current.textRise !== 0) {
                  textMatrix = textMatrix.slice();
                  textMatrix[5] += current.textRise;
                }
                current.txtElement.setAttributeNS(null, 'transform', pm(textMatrix) + ' scale(1, -1)');
                current.txtElement.setAttributeNS(XML_NS, 'xml:space', 'preserve');
                current.txtElement.appendChild(current.tspan);
                current.txtgrp.appendChild(current.txtElement);
                this._ensureTransformGroup().appendChild(current.txtElement);
              },
              setLeadingMoveText: function SVGGraphics_setLeadingMoveText(x, y) {
                this.setLeading(-y);
                this.moveText(x, y);
              },
              addFontStyle: function SVGGraphics_addFontStyle(fontObj) {
                if (!this.cssStyle) {
                  this.cssStyle = this.svgFactory.createElement('svg:style');
                  this.cssStyle.setAttributeNS(null, 'type', 'text/css');
                  this.defs.appendChild(this.cssStyle);
                }
                const url = (0, _util.createObjectURL)(fontObj.data, fontObj.mimetype, this.forceDataSchema);
                this.cssStyle.textContent += '@font-face { font-family: "' + fontObj.loadedName + '";' + ' src: url(' + url + '); }\n';
              },
              setFont: function SVGGraphics_setFont(details) {
                const current = this.current;
                const fontObj = this.commonObjs.get(details[0]);
                let size = details[1];
                this.current.font = fontObj;
                if (this.embedFonts && fontObj.data && !this.embeddedFonts[fontObj.loadedName]) {
                  this.addFontStyle(fontObj);
                  this.embeddedFonts[fontObj.loadedName] = fontObj;
                }
                current.fontMatrix = fontObj.fontMatrix ? fontObj.fontMatrix : _util.FONT_IDENTITY_MATRIX;
                const bold = fontObj.black ? (fontObj.bold ? 'bolder' : 'bold') : fontObj.bold ? 'bold' : 'normal';
                const italic = fontObj.italic ? 'italic' : 'normal';
                if (size < 0) {
                  size = -size;
                  current.fontDirection = -1;
                } else {
                  current.fontDirection = 1;
                }
                current.fontSize = size;
                current.fontFamily = fontObj.loadedName;
                current.fontWeight = bold;
                current.fontStyle = italic;
                current.tspan = this.svgFactory.createElement('svg:tspan');
                current.tspan.setAttributeNS(null, 'y', pf(-current.y));
                current.xcoords = [];
              },
              endText: function endText() {
                const current = this.current;
                if (
                  current.textRenderingMode & _util.TextRenderingMode.ADD_TO_PATH_FLAG &&
                  current.txtElement &&
                  current.txtElement.hasChildNodes()
                ) {
                  current.element = current.txtElement;
                  this.clip('nonzero');
                  this.endPath();
                }
              },

              setLineWidth: function SVGGraphics_setLineWidth(width) {
                this.current.lineWidth = width;
              },
              setLineCap: function SVGGraphics_setLineCap(style) {
                this.current.lineCap = LINE_CAP_STYLES[style];
              },
              setLineJoin: function SVGGraphics_setLineJoin(style) {
                this.current.lineJoin = LINE_JOIN_STYLES[style];
              },
              setMiterLimit: function SVGGraphics_setMiterLimit(limit) {
                this.current.miterLimit = limit;
              },
              setStrokeAlpha: function SVGGraphics_setStrokeAlpha(strokeAlpha) {
                this.current.strokeAlpha = strokeAlpha;
              },
              setStrokeRGBColor: function SVGGraphics_setStrokeRGBColor(r, g, b) {
                const color = _util.Util.makeCssRgb(r, g, b);
                this.current.strokeColor = color;
              },
              setFillAlpha: function SVGGraphics_setFillAlpha(fillAlpha) {
                this.current.fillAlpha = fillAlpha;
              },
              setFillRGBColor: function SVGGraphics_setFillRGBColor(r, g, b) {
                const color = _util.Util.makeCssRgb(r, g, b);
                this.current.fillColor = color;
                this.current.tspan = this.svgFactory.createElement('svg:tspan');
                this.current.xcoords = [];
              },
              setDash: function SVGGraphics_setDash(dashArray, dashPhase) {
                this.current.dashArray = dashArray;
                this.current.dashPhase = dashPhase;
              },
              constructPath: function SVGGraphics_constructPath(ops, args) {
                const current = this.current;
                let x = current.x,
                  y = current.y;
                current.path = this.svgFactory.createElement('svg:path');
                const d = [];
                const opLength = ops.length;
                for (let i = 0, j = 0; i < opLength; i++) {
                  switch (ops[i] | 0) {
                    case _util.OPS.rectangle:
                      x = args[j++];
                      y = args[j++];
                      var width = args[j++];
                      var height = args[j++];
                      var xw = x + width;
                      var yh = y + height;
                      d.push('M', pf(x), pf(y), 'L', pf(xw), pf(y), 'L', pf(xw), pf(yh), 'L', pf(x), pf(yh), 'Z');
                      break;
                    case _util.OPS.moveTo:
                      x = args[j++];
                      y = args[j++];
                      d.push('M', pf(x), pf(y));
                      break;
                    case _util.OPS.lineTo:
                      x = args[j++];
                      y = args[j++];
                      d.push('L', pf(x), pf(y));
                      break;
                    case _util.OPS.curveTo:
                      x = args[j + 4];
                      y = args[j + 5];
                      d.push('C', pf(args[j]), pf(args[j + 1]), pf(args[j + 2]), pf(args[j + 3]), pf(x), pf(y));
                      j += 6;
                      break;
                    case _util.OPS.curveTo2:
                      x = args[j + 2];
                      y = args[j + 3];
                      d.push('C', pf(x), pf(y), pf(args[j]), pf(args[j + 1]), pf(args[j + 2]), pf(args[j + 3]));
                      j += 4;
                      break;
                    case _util.OPS.curveTo3:
                      x = args[j + 2];
                      y = args[j + 3];
                      d.push('C', pf(args[j]), pf(args[j + 1]), pf(x), pf(y), pf(x), pf(y));
                      j += 4;
                      break;
                    case _util.OPS.closePath:
                      d.push('Z');
                      break;
                  }
                }
                current.path.setAttributeNS(null, 'd', d.join(' '));
                current.path.setAttributeNS(null, 'fill', 'none');
                this._ensureTransformGroup().appendChild(current.path);
                current.element = current.path;
                current.setCurrentPoint(x, y);
              },
              endPath: function SVGGraphics_endPath() {
                if (!this.pendingClip) {
                  return;
                }
                const current = this.current;
                const clipId = 'clippath' + clipCount;
                clipCount++;
                const clipPath = this.svgFactory.createElement('svg:clipPath');
                clipPath.setAttributeNS(null, 'id', clipId);
                clipPath.setAttributeNS(null, 'transform', pm(this.transformMatrix));
                const clipElement = current.element.cloneNode(true);
                if (this.pendingClip === 'evenodd') {
                  clipElement.setAttributeNS(null, 'clip-rule', 'evenodd');
                } else {
                  clipElement.setAttributeNS(null, 'clip-rule', 'nonzero');
                }
                this.pendingClip = null;
                clipPath.appendChild(clipElement);
                this.defs.appendChild(clipPath);
                if (current.activeClipUrl) {
                  current.clipGroup = null;
                  this.extraStack.forEach(function (prev) {
                    prev.clipGroup = null;
                  });
                  clipPath.setAttributeNS(null, 'clip-path', current.activeClipUrl);
                }
                current.activeClipUrl = 'url(#' + clipId + ')';
                this.tgrp = null;
              },
              clip: function SVGGraphics_clip(type) {
                this.pendingClip = type;
              },
              closePath: function SVGGraphics_closePath() {
                const current = this.current;
                if (current.path) {
                  let d = current.path.getAttributeNS(null, 'd');
                  d += 'Z';
                  current.path.setAttributeNS(null, 'd', d);
                }
              },
              setLeading: function SVGGraphics_setLeading(leading) {
                this.current.leading = -leading;
              },
              setTextRise: function SVGGraphics_setTextRise(textRise) {
                this.current.textRise = textRise;
              },
              setTextRenderingMode: function setTextRenderingMode(textRenderingMode) {
                this.current.textRenderingMode = textRenderingMode;
              },

              setHScale: function SVGGraphics_setHScale(scale) {
                this.current.textHScale = scale / 100;
              },
              setGState: function SVGGraphics_setGState(states) {
                for (let i = 0, ii = states.length; i < ii; i++) {
                  const state = states[i];
                  const key = state[0];
                  const value = state[1];
                  switch (key) {
                    case 'LW':
                      this.setLineWidth(value);
                      break;
                    case 'LC':
                      this.setLineCap(value);
                      break;
                    case 'LJ':
                      this.setLineJoin(value);
                      break;
                    case 'ML':
                      this.setMiterLimit(value);
                      break;
                    case 'D':
                      this.setDash(value[0], value[1]);
                      break;
                    case 'Font':
                      this.setFont(value);
                      break;
                    case 'CA':
                      this.setStrokeAlpha(value);
                      break;
                    case 'ca':
                      this.setFillAlpha(value);
                      break;
                    default:
                      (0, _util.warn)('Unimplemented graphic state ' + key);
                      break;
                  }
                }
              },
              fill: function SVGGraphics_fill() {
                const current = this.current;
                if (current.element) {
                  current.element.setAttributeNS(null, 'fill', current.fillColor);
                  current.element.setAttributeNS(null, 'fill-opacity', current.fillAlpha);
                  this.endPath();
                }
              },
              stroke: function SVGGraphics_stroke() {
                const current = this.current;
                if (current.element) {
                  this._setStrokeAttributes(current.element);
                  current.element.setAttributeNS(null, 'fill', 'none');
                  this.endPath();
                }
              },
              _setStrokeAttributes: function _setStrokeAttributes(element) {
                const current = this.current;
                element.setAttributeNS(null, 'stroke', current.strokeColor);
                element.setAttributeNS(null, 'stroke-opacity', current.strokeAlpha);
                element.setAttributeNS(null, 'stroke-miterlimit', pf(current.miterLimit));
                element.setAttributeNS(null, 'stroke-linecap', current.lineCap);
                element.setAttributeNS(null, 'stroke-linejoin', current.lineJoin);
                element.setAttributeNS(null, 'stroke-width', pf(current.lineWidth) + 'px');
                element.setAttributeNS(null, 'stroke-dasharray', current.dashArray.map(pf).join(' '));
                element.setAttributeNS(null, 'stroke-dashoffset', pf(current.dashPhase) + 'px');
              },

              eoFill: function SVGGraphics_eoFill() {
                if (this.current.element) {
                  this.current.element.setAttributeNS(null, 'fill-rule', 'evenodd');
                }
                this.fill();
              },
              fillStroke: function SVGGraphics_fillStroke() {
                this.stroke();
                this.fill();
              },
              eoFillStroke: function SVGGraphics_eoFillStroke() {
                if (this.current.element) {
                  this.current.element.setAttributeNS(null, 'fill-rule', 'evenodd');
                }
                this.fillStroke();
              },
              closeStroke: function SVGGraphics_closeStroke() {
                this.closePath();
                this.stroke();
              },
              closeFillStroke: function SVGGraphics_closeFillStroke() {
                this.closePath();
                this.fillStroke();
              },
              closeEOFillStroke: function closeEOFillStroke() {
                this.closePath();
                this.eoFillStroke();
              },

              paintSolidColorImageMask: function SVGGraphics_paintSolidColorImageMask() {
                const current = this.current;
                const rect = this.svgFactory.createElement('svg:rect');
                rect.setAttributeNS(null, 'x', '0');
                rect.setAttributeNS(null, 'y', '0');
                rect.setAttributeNS(null, 'width', '1px');
                rect.setAttributeNS(null, 'height', '1px');
                rect.setAttributeNS(null, 'fill', current.fillColor);
                this._ensureTransformGroup().appendChild(rect);
              },
              paintJpegXObject: function SVGGraphics_paintJpegXObject(objId, w, h) {
                const imgObj = this.objs.get(objId);
                const imgEl = this.svgFactory.createElement('svg:image');
                imgEl.setAttributeNS(XLINK_NS, 'xlink:href', imgObj.src);
                imgEl.setAttributeNS(null, 'width', pf(w));
                imgEl.setAttributeNS(null, 'height', pf(h));
                imgEl.setAttributeNS(null, 'x', '0');
                imgEl.setAttributeNS(null, 'y', pf(-h));
                imgEl.setAttributeNS(null, 'transform', 'scale(' + pf(1 / w) + ' ' + pf(-1 / h) + ')');
                this._ensureTransformGroup().appendChild(imgEl);
              },
              paintImageXObject: function SVGGraphics_paintImageXObject(objId) {
                const imgData = this.objs.get(objId);
                if (!imgData) {
                  (0, _util.warn)("Dependent image isn't ready yet");
                  return;
                }
                this.paintInlineImageXObject(imgData);
              },
              paintInlineImageXObject: function SVGGraphics_paintInlineImageXObject(imgData, mask) {
                const width = imgData.width;
                const height = imgData.height;
                const imgSrc = convertImgDataToPng(imgData, this.forceDataSchema, !!mask);
                const cliprect = this.svgFactory.createElement('svg:rect');
                cliprect.setAttributeNS(null, 'x', '0');
                cliprect.setAttributeNS(null, 'y', '0');
                cliprect.setAttributeNS(null, 'width', pf(width));
                cliprect.setAttributeNS(null, 'height', pf(height));
                this.current.element = cliprect;
                this.clip('nonzero');
                const imgEl = this.svgFactory.createElement('svg:image');
                imgEl.setAttributeNS(XLINK_NS, 'xlink:href', imgSrc);
                imgEl.setAttributeNS(null, 'x', '0');
                imgEl.setAttributeNS(null, 'y', pf(-height));
                imgEl.setAttributeNS(null, 'width', pf(width) + 'px');
                imgEl.setAttributeNS(null, 'height', pf(height) + 'px');
                imgEl.setAttributeNS(null, 'transform', 'scale(' + pf(1 / width) + ' ' + pf(-1 / height) + ')');
                if (mask) {
                  mask.appendChild(imgEl);
                } else {
                  this._ensureTransformGroup().appendChild(imgEl);
                }
              },
              paintImageMaskXObject: function SVGGraphics_paintImageMaskXObject(imgData) {
                const current = this.current;
                const width = imgData.width;
                const height = imgData.height;
                const fillColor = current.fillColor;
                current.maskId = 'mask' + maskCount++;
                const mask = this.svgFactory.createElement('svg:mask');
                mask.setAttributeNS(null, 'id', current.maskId);
                const rect = this.svgFactory.createElement('svg:rect');
                rect.setAttributeNS(null, 'x', '0');
                rect.setAttributeNS(null, 'y', '0');
                rect.setAttributeNS(null, 'width', pf(width));
                rect.setAttributeNS(null, 'height', pf(height));
                rect.setAttributeNS(null, 'fill', fillColor);
                rect.setAttributeNS(null, 'mask', 'url(#' + current.maskId + ')');
                this.defs.appendChild(mask);
                this._ensureTransformGroup().appendChild(rect);
                this.paintInlineImageXObject(imgData, mask);
              },
              paintFormXObjectBegin: function SVGGraphics_paintFormXObjectBegin(matrix, bbox) {
                if (Array.isArray(matrix) && matrix.length === 6) {
                  this.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
                }
                if (Array.isArray(bbox) && bbox.length === 4) {
                  const width = bbox[2] - bbox[0];
                  const height = bbox[3] - bbox[1];
                  const cliprect = this.svgFactory.createElement('svg:rect');
                  cliprect.setAttributeNS(null, 'x', bbox[0]);
                  cliprect.setAttributeNS(null, 'y', bbox[1]);
                  cliprect.setAttributeNS(null, 'width', pf(width));
                  cliprect.setAttributeNS(null, 'height', pf(height));
                  this.current.element = cliprect;
                  this.clip('nonzero');
                  this.endPath();
                }
              },
              paintFormXObjectEnd: function SVGGraphics_paintFormXObjectEnd() {},
              _initialize: function _initialize(viewport) {
                const svg = this.svgFactory.create(viewport.width, viewport.height);
                const definitions = this.svgFactory.createElement('svg:defs');
                svg.appendChild(definitions);
                this.defs = definitions;
                const rootGroup = this.svgFactory.createElement('svg:g');
                rootGroup.setAttributeNS(null, 'transform', pm(viewport.transform));
                svg.appendChild(rootGroup);
                this.svg = rootGroup;
                return svg;
              },

              _ensureClipGroup: function SVGGraphics_ensureClipGroup() {
                if (!this.current.clipGroup) {
                  const clipGroup = this.svgFactory.createElement('svg:g');
                  clipGroup.setAttributeNS(null, 'clip-path', this.current.activeClipUrl);
                  this.svg.appendChild(clipGroup);
                  this.current.clipGroup = clipGroup;
                }
                return this.current.clipGroup;
              },
              _ensureTransformGroup: function SVGGraphics_ensureTransformGroup() {
                if (!this.tgrp) {
                  this.tgrp = this.svgFactory.createElement('svg:g');
                  this.tgrp.setAttributeNS(null, 'transform', pm(this.transformMatrix));
                  if (this.current.activeClipUrl) {
                    this._ensureClipGroup().appendChild(this.tgrp);
                  } else {
                    this.svg.appendChild(this.tgrp);
                  }
                }
                return this.tgrp;
              },
            };
            return SVGGraphics;
          })();
        }
        exports.SVGGraphics = SVGGraphics;

        /***/
      },
      /* 148 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.PDFNodeStream = undefined;

        const _regenerator = __w_pdfjs_require__(137);

        const _regenerator2 = _interopRequireDefault(_regenerator);

        const _createClass = (function () {
          function defineProperties(target, props) {
            for (let i = 0; i < props.length; i++) {
              const descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) {
                descriptor.writable = true;
              }
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function (Constructor, protoProps, staticProps) {
            if (protoProps) {
              defineProperties(Constructor.prototype, protoProps);
            }
            if (staticProps) {
              defineProperties(Constructor, staticProps);
            }
            return Constructor;
          };
        })();

        const _util = __w_pdfjs_require__(1);

        const _network_utils = __w_pdfjs_require__(149);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: { value: subClass, enumerable: false, writable: true, configurable: true },
          });
          if (superClass) {
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : (subClass.__proto__ = superClass);
          }
        }

        function _asyncToGenerator(fn) {
          return function () {
            const gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
              function step(key, arg) {
                try {
                  var info = gen[key](arg);
                  var value = info.value;
                } catch (error) {
                  reject(error);
                  return;
                }
                if (info.done) {
                  resolve(value);
                } else {
                  return Promise.resolve(value).then(
                    function (value) {
                      step('next', value);
                    },
                    function (err) {
                      step('throw', err);
                    },
                  );
                }
              }
              return step('next');
            });
          };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        const fs = require('fs');
        const http = require('http');
        const https = require('https');
        const url = require('url');

        const fileUriRegex = /^file:\/\/\/[a-zA-Z]:\//;
        function parseUrl(sourceUrl) {
          const parsedUrl = url.parse(sourceUrl);
          if (parsedUrl.protocol === 'file:' || parsedUrl.host) {
            return parsedUrl;
          }
          if (/^[a-z]:[/\\]/i.test(sourceUrl)) {
            return url.parse('file:///' + sourceUrl);
          }
          if (!parsedUrl.host) {
            parsedUrl.protocol = 'file:';
          }
          return parsedUrl;
        }

        const PDFNodeStream = (function () {
          function PDFNodeStream(source) {
            _classCallCheck(this, PDFNodeStream);

            this.source = source;
            this.url = parseUrl(source.url);
            this.isHttp = this.url.protocol === 'http:' || this.url.protocol === 'https:';
            this.isFsUrl = this.url.protocol === 'file:';
            this.httpHeaders = (this.isHttp && source.httpHeaders) || {};
            this._fullRequest = null;
            this._rangeRequestReaders = [];
          }

          _createClass(PDFNodeStream, [
            {
              key: 'getFullReader',
              value: function getFullReader() {
                (0, _util.assert)(!this._fullRequest);
                this._fullRequest = this.isFsUrl ? new PDFNodeStreamFsFullReader(this) : new PDFNodeStreamFullReader(this);
                return this._fullRequest;
              },
            },
            {
              key: 'getRangeReader',
              value: function getRangeReader(start, end) {
                const rangeReader = this.isFsUrl
                  ? new PDFNodeStreamFsRangeReader(this, start, end)
                  : new PDFNodeStreamRangeReader(this, start, end);
                this._rangeRequestReaders.push(rangeReader);
                return rangeReader;
              },
            },
            {
              key: 'cancelAllRequests',
              value: function cancelAllRequests(reason) {
                if (this._fullRequest) {
                  this._fullRequest.cancel(reason);
                }
                const readers = this._rangeRequestReaders.slice(0);
                readers.forEach(function (reader) {
                  reader.cancel(reason);
                });
              },
            },
          ]);

          return PDFNodeStream;
        })();

        const BaseFullReader = (function () {
          function BaseFullReader(stream) {
            _classCallCheck(this, BaseFullReader);

            this._url = stream.url;
            this._done = false;
            this._storedError = null;
            this.onProgress = null;
            const source = stream.source;
            this._contentLength = source.length;
            this._loaded = 0;
            this._filename = null;
            this._disableRange = source.disableRange || false;
            this._rangeChunkSize = source.rangeChunkSize;
            if (!this._rangeChunkSize && !this._disableRange) {
              this._disableRange = true;
            }
            this._isStreamingSupported = !source.disableStream;
            this._isRangeSupported = !source.disableRange;
            this._readableStream = null;
            this._readCapability = (0, _util.createPromiseCapability)();
            this._headersCapability = (0, _util.createPromiseCapability)();
          }

          _createClass(BaseFullReader, [
            {
              key: 'read',
              value: (function () {
                const _ref = _asyncToGenerator(
                  /*#__PURE__*/ _regenerator2.default.mark(function _callee() {
                    let chunk, buffer;
                    return _regenerator2.default.wrap(
                      function _callee$(_context) {
                        while (1) {
                          switch ((_context.prev = _context.next)) {
                            case 0:
                              _context.next = 2;
                              return this._readCapability.promise;

                            case 2:
                              if (!this._done) {
                                _context.next = 4;
                                break;
                              }

                              return _context.abrupt('return', {
                                value: undefined,
                                done: true,
                              });

                            case 4:
                              if (!this._storedError) {
                                _context.next = 6;
                                break;
                              }

                              throw this._storedError;

                            case 6:
                              chunk = this._readableStream.read();

                              if (!(chunk === null)) {
                                _context.next = 10;
                                break;
                              }

                              this._readCapability = (0, _util.createPromiseCapability)();
                              return _context.abrupt('return', this.read());

                            case 10:
                              this._loaded += chunk.length;
                              if (this.onProgress) {
                                this.onProgress({
                                  loaded: this._loaded,
                                  total: this._contentLength,
                                });
                              }
                              buffer = new Uint8Array(chunk).buffer;
                              return _context.abrupt('return', {
                                value: buffer,
                                done: false,
                              });

                            case 14:
                            case 'end':
                              return _context.stop();
                          }
                        }
                      },
                      _callee,
                      this,
                    );
                  }),
                );

                function read() {
                  return _ref.apply(this, arguments);
                }

                return read;
              })(),
            },
            {
              key: 'cancel',
              value: function cancel(reason) {
                if (!this._readableStream) {
                  this._error(reason);
                  return;
                }
                this._readableStream.destroy(reason);
              },
            },
            {
              key: '_error',
              value: function _error(reason) {
                this._storedError = reason;
                this._readCapability.resolve();
              },
            },
            {
              key: '_setReadableStream',
              value: function _setReadableStream(readableStream) {
                const _this = this;

                this._readableStream = readableStream;
                readableStream.on('readable', function () {
                  _this._readCapability.resolve();
                });
                readableStream.on('end', function () {
                  readableStream.destroy();
                  _this._done = true;
                  _this._readCapability.resolve();
                });
                readableStream.on('error', function (reason) {
                  _this._error(reason);
                });
                if (!this._isStreamingSupported && this._isRangeSupported) {
                  this._error(new _util.AbortException('streaming is disabled'));
                }
                if (this._storedError) {
                  this._readableStream.destroy(this._storedError);
                }
              },
            },
            {
              key: 'headersReady',
              get: function get() {
                return this._headersCapability.promise;
              },
            },
            {
              key: 'filename',
              get: function get() {
                return this._filename;
              },
            },
            {
              key: 'contentLength',
              get: function get() {
                return this._contentLength;
              },
            },
            {
              key: 'isRangeSupported',
              get: function get() {
                return this._isRangeSupported;
              },
            },
            {
              key: 'isStreamingSupported',
              get: function get() {
                return this._isStreamingSupported;
              },
            },
          ]);

          return BaseFullReader;
        })();

        const BaseRangeReader = (function () {
          function BaseRangeReader(stream) {
            _classCallCheck(this, BaseRangeReader);

            this._url = stream.url;
            this._done = false;
            this._storedError = null;
            this.onProgress = null;
            this._loaded = 0;
            this._readableStream = null;
            this._readCapability = (0, _util.createPromiseCapability)();
            const source = stream.source;
            this._isStreamingSupported = !source.disableStream;
          }

          _createClass(BaseRangeReader, [
            {
              key: 'read',
              value: (function () {
                const _ref2 = _asyncToGenerator(
                  /*#__PURE__*/ _regenerator2.default.mark(function _callee2() {
                    let chunk, buffer;
                    return _regenerator2.default.wrap(
                      function _callee2$(_context2) {
                        while (1) {
                          switch ((_context2.prev = _context2.next)) {
                            case 0:
                              _context2.next = 2;
                              return this._readCapability.promise;

                            case 2:
                              if (!this._done) {
                                _context2.next = 4;
                                break;
                              }

                              return _context2.abrupt('return', {
                                value: undefined,
                                done: true,
                              });

                            case 4:
                              if (!this._storedError) {
                                _context2.next = 6;
                                break;
                              }

                              throw this._storedError;

                            case 6:
                              chunk = this._readableStream.read();

                              if (!(chunk === null)) {
                                _context2.next = 10;
                                break;
                              }

                              this._readCapability = (0, _util.createPromiseCapability)();
                              return _context2.abrupt('return', this.read());

                            case 10:
                              this._loaded += chunk.length;
                              if (this.onProgress) {
                                this.onProgress({ loaded: this._loaded });
                              }
                              buffer = new Uint8Array(chunk).buffer;
                              return _context2.abrupt('return', {
                                value: buffer,
                                done: false,
                              });

                            case 14:
                            case 'end':
                              return _context2.stop();
                          }
                        }
                      },
                      _callee2,
                      this,
                    );
                  }),
                );

                function read() {
                  return _ref2.apply(this, arguments);
                }

                return read;
              })(),
            },
            {
              key: 'cancel',
              value: function cancel(reason) {
                if (!this._readableStream) {
                  this._error(reason);
                  return;
                }
                this._readableStream.destroy(reason);
              },
            },
            {
              key: '_error',
              value: function _error(reason) {
                this._storedError = reason;
                this._readCapability.resolve();
              },
            },
            {
              key: '_setReadableStream',
              value: function _setReadableStream(readableStream) {
                const _this2 = this;

                this._readableStream = readableStream;
                readableStream.on('readable', function () {
                  _this2._readCapability.resolve();
                });
                readableStream.on('end', function () {
                  readableStream.destroy();
                  _this2._done = true;
                  _this2._readCapability.resolve();
                });
                readableStream.on('error', function (reason) {
                  _this2._error(reason);
                });
                if (this._storedError) {
                  this._readableStream.destroy(this._storedError);
                }
              },
            },
            {
              key: 'isStreamingSupported',
              get: function get() {
                return this._isStreamingSupported;
              },
            },
          ]);

          return BaseRangeReader;
        })();

        function createRequestOptions(url, headers) {
          return {
            protocol: url.protocol,
            auth: url.auth,
            host: url.hostname,
            port: url.port,
            path: url.path,
            method: 'GET',
            headers: headers,
          };
        }

        var PDFNodeStreamFullReader = (function (_BaseFullReader) {
          _inherits(PDFNodeStreamFullReader, _BaseFullReader);

          function PDFNodeStreamFullReader(stream) {
            _classCallCheck(this, PDFNodeStreamFullReader);

            const _this3 = _possibleConstructorReturn(
              this,
              (PDFNodeStreamFullReader.__proto__ || Object.getPrototypeOf(PDFNodeStreamFullReader)).call(this, stream),
            );

            const handleResponse = function handleResponse(response) {
              if (response.statusCode === 404) {
                const error = new _util.MissingPDFException('Missing PDF "' + _this3._url + '".');
                _this3._storedError = error;
                _this3._headersCapability.reject(error);
                return;
              }
              _this3._headersCapability.resolve();
              _this3._setReadableStream(response);
              const getResponseHeader = function getResponseHeader(name) {
                return _this3._readableStream.headers[name.toLowerCase()];
              };

              const _validateRangeRequest = (0, _network_utils.validateRangeRequestCapabilities)({
                  getResponseHeader: getResponseHeader,
                  isHttp: stream.isHttp,
                  rangeChunkSize: _this3._rangeChunkSize,
                  disableRange: _this3._disableRange,
                }),
                allowRangeRequests = _validateRangeRequest.allowRangeRequests,
                suggestedLength = _validateRangeRequest.suggestedLength;

              _this3._isRangeSupported = allowRangeRequests;
              _this3._contentLength = suggestedLength || _this3._contentLength;
              _this3._filename = (0, _network_utils.extractFilenameFromHeader)(getResponseHeader);
            };
            _this3._request = null;
            if (_this3._url.protocol === 'http:') {
              _this3._request = http.request(createRequestOptions(_this3._url, stream.httpHeaders), handleResponse);
            } else {
              _this3._request = https.request(createRequestOptions(_this3._url, stream.httpHeaders), handleResponse);
            }
            _this3._request.on('error', function (reason) {
              _this3._storedError = reason;
              _this3._headersCapability.reject(reason);
            });
            _this3._request.end();
            return _this3;
          }

          return PDFNodeStreamFullReader;
        })(BaseFullReader);

        var PDFNodeStreamRangeReader = (function (_BaseRangeReader) {
          _inherits(PDFNodeStreamRangeReader, _BaseRangeReader);

          function PDFNodeStreamRangeReader(stream, start, end) {
            _classCallCheck(this, PDFNodeStreamRangeReader);

            const _this4 = _possibleConstructorReturn(
              this,
              (PDFNodeStreamRangeReader.__proto__ || Object.getPrototypeOf(PDFNodeStreamRangeReader)).call(this, stream),
            );

            _this4._httpHeaders = {};
            for (const property in stream.httpHeaders) {
              const value = stream.httpHeaders[property];
              if (typeof value === 'undefined') {
                continue;
              }
              _this4._httpHeaders[property] = value;
            }
            _this4._httpHeaders['Range'] = 'bytes=' + start + '-' + (end - 1);
            const handleResponse = function handleResponse(response) {
              if (response.statusCode === 404) {
                const error = new _util.MissingPDFException('Missing PDF "' + _this4._url + '".');
                _this4._storedError = error;
                return;
              }
              _this4._setReadableStream(response);
            };
            _this4._request = null;
            if (_this4._url.protocol === 'http:') {
              _this4._request = http.request(createRequestOptions(_this4._url, _this4._httpHeaders), handleResponse);
            } else {
              _this4._request = https.request(createRequestOptions(_this4._url, _this4._httpHeaders), handleResponse);
            }
            _this4._request.on('error', function (reason) {
              _this4._storedError = reason;
            });
            _this4._request.end();
            return _this4;
          }

          return PDFNodeStreamRangeReader;
        })(BaseRangeReader);

        var PDFNodeStreamFsFullReader = (function (_BaseFullReader2) {
          _inherits(PDFNodeStreamFsFullReader, _BaseFullReader2);

          function PDFNodeStreamFsFullReader(stream) {
            _classCallCheck(this, PDFNodeStreamFsFullReader);

            const _this5 = _possibleConstructorReturn(
              this,
              (PDFNodeStreamFsFullReader.__proto__ || Object.getPrototypeOf(PDFNodeStreamFsFullReader)).call(this, stream),
            );

            let path = decodeURIComponent(_this5._url.path);
            if (fileUriRegex.test(_this5._url.href)) {
              path = path.replace(/^\//, '');
            }
            fs.lstat(path, function (error, stat) {
              if (error) {
                if (error.code === 'ENOENT') {
                  error = new _util.MissingPDFException('Missing PDF "' + path + '".');
                }
                _this5._storedError = error;
                _this5._headersCapability.reject(error);
                return;
              }
              _this5._contentLength = stat.size;
              _this5._setReadableStream(fs.createReadStream(path));
              _this5._headersCapability.resolve();
            });
            return _this5;
          }

          return PDFNodeStreamFsFullReader;
        })(BaseFullReader);

        var PDFNodeStreamFsRangeReader = (function (_BaseRangeReader2) {
          _inherits(PDFNodeStreamFsRangeReader, _BaseRangeReader2);

          function PDFNodeStreamFsRangeReader(stream, start, end) {
            _classCallCheck(this, PDFNodeStreamFsRangeReader);

            const _this6 = _possibleConstructorReturn(
              this,
              (PDFNodeStreamFsRangeReader.__proto__ || Object.getPrototypeOf(PDFNodeStreamFsRangeReader)).call(this, stream),
            );

            let path = decodeURIComponent(_this6._url.path);
            if (fileUriRegex.test(_this6._url.href)) {
              path = path.replace(/^\//, '');
            }
            _this6._setReadableStream(
              fs.createReadStream(path, {
                start: start,
                end: end - 1,
              }),
            );
            return _this6;
          }

          return PDFNodeStreamFsRangeReader;
        })(BaseRangeReader);

        exports.PDFNodeStream = PDFNodeStream;

        /***/
      },
      /* 149 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.validateResponseStatus = exports.validateRangeRequestCapabilities = exports.extractFilenameFromHeader = exports.createResponseStatusError = undefined;

        const _util = __w_pdfjs_require__(1);

        const _content_disposition = __w_pdfjs_require__(150);

        function validateRangeRequestCapabilities(_ref) {
          const getResponseHeader = _ref.getResponseHeader,
            isHttp = _ref.isHttp,
            rangeChunkSize = _ref.rangeChunkSize,
            disableRange = _ref.disableRange;

          (0, _util.assert)(rangeChunkSize > 0, 'Range chunk size must be larger than zero');
          const returnValues = {
            allowRangeRequests: false,
            suggestedLength: undefined,
          };
          const length = parseInt(getResponseHeader('Content-Length'), 10);
          if (!Number.isInteger(length)) {
            return returnValues;
          }
          returnValues.suggestedLength = length;
          if (length <= 2 * rangeChunkSize) {
            return returnValues;
          }
          if (disableRange || !isHttp) {
            return returnValues;
          }
          if (getResponseHeader('Accept-Ranges') !== 'bytes') {
            return returnValues;
          }
          const contentEncoding = getResponseHeader('Content-Encoding') || 'identity';
          if (contentEncoding !== 'identity') {
            return returnValues;
          }
          returnValues.allowRangeRequests = true;
          return returnValues;
        }
        function extractFilenameFromHeader(getResponseHeader) {
          const contentDisposition = getResponseHeader('Content-Disposition');
          if (contentDisposition) {
            const filename = (0, _content_disposition.getFilenameFromContentDispositionHeader)(contentDisposition);
            if (/\.pdf$/i.test(filename)) {
              return filename;
            }
          }
          return null;
        }
        function createResponseStatusError(status, url) {
          if (status === 404 || (status === 0 && /^file:/.test(url))) {
            return new _util.MissingPDFException('Missing PDF "' + url + '".');
          }
          return new _util.UnexpectedResponseException(
            'Unexpected server response (' + status + ') while retrieving PDF "' + url + '".',
            status,
          );
        }
        function validateResponseStatus(status) {
          return status === 200 || status === 206;
        }
        exports.createResponseStatusError = createResponseStatusError;
        exports.extractFilenameFromHeader = extractFilenameFromHeader;
        exports.validateRangeRequestCapabilities = validateRangeRequestCapabilities;
        exports.validateResponseStatus = validateResponseStatus;

        /***/
      },
      /* 150 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });

        const _slicedToArray = (function () {
          function sliceIterator(arr, i) {
            const _arr = [];
            let _n = true;
            let _d = false;
            let _e = undefined;
            try {
              for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);
                if (i && _arr.length === i) {
                  break;
                }
              }
            } catch (err) {
              _d = true;
              _e = err;
            } finally {
              try {
                if (!_n && _i['return']) {
                  _i['return']();
                }
              } finally {
                if (_d) {
                  throw _e;
                }
              }
            }
            return _arr;
          }
          return function (arr, i) {
            if (Array.isArray(arr)) {
              return arr;
            } else if (Symbol.iterator in Object(arr)) {
              return sliceIterator(arr, i);
            } else {
              throw new TypeError('Invalid attempt to destructure non-iterable instance');
            }
          };
        })();

        function getFilenameFromContentDispositionHeader(contentDisposition) {
          let needsEncodingFixup = true;
          let tmp = toParamRegExp('filename\\*', 'i').exec(contentDisposition);
          if (tmp) {
            tmp = tmp[1];
            let filename = rfc2616unquote(tmp);
            filename = unescape(filename);
            filename = rfc5987decode(filename);
            filename = rfc2047decode(filename);
            return fixupEncoding(filename);
          }
          tmp = rfc2231getparam(contentDisposition);
          if (tmp) {
            const _filename = rfc2047decode(tmp);
            return fixupEncoding(_filename);
          }
          tmp = toParamRegExp('filename', 'i').exec(contentDisposition);
          if (tmp) {
            tmp = tmp[1];
            let _filename2 = rfc2616unquote(tmp);
            _filename2 = rfc2047decode(_filename2);
            return fixupEncoding(_filename2);
          }
          function toParamRegExp(attributePattern, flags) {
            return new RegExp(
              '(?:^|;)\\s*' + attributePattern + '\\s*=\\s*' + '(' + '[^";\\s][^;\\s]*' + '|' + '"(?:[^"\\\\]|\\\\"?)+"?' + ')',
              flags,
            );
          }
          function textdecode(encoding, value) {
            if (encoding) {
              if (!/^[\x00-\xFF]+$/.test(value)) {
                return value;
              }
              try {
                const decoder = new TextDecoder(encoding, { fatal: true });
                const bytes = new Array(value.length);
                for (let i = 0; i < value.length; ++i) {
                  bytes[i] = value.charCodeAt(i);
                }
                value = decoder.decode(new Uint8Array(bytes));
                needsEncodingFixup = false;
              } catch (e) {
                if (/^utf-?8$/i.test(encoding)) {
                  try {
                    value = decodeURIComponent(escape(value));
                    needsEncodingFixup = false;
                  } catch (err) {}
                }
              }
            }
            return value;
          }
          function fixupEncoding(value) {
            if (needsEncodingFixup && /[\x80-\xff]/.test(value)) {
              value = textdecode('utf-8', value);
              if (needsEncodingFixup) {
                value = textdecode('iso-8859-1', value);
              }
            }
            return value;
          }
          function rfc2231getparam(contentDisposition) {
            let matches = [],
              match = void 0;
            const iter = toParamRegExp('filename\\*((?!0\\d)\\d+)(\\*?)', 'ig');
            while ((match = iter.exec(contentDisposition)) !== null) {
              let _match = match,
                _match2 = _slicedToArray(_match, 4),
                n = _match2[1],
                quot = _match2[2],
                part = _match2[3];

              n = parseInt(n, 10);
              if (n in matches) {
                if (n === 0) {
                  break;
                }
                continue;
              }
              matches[n] = [quot, part];
            }
            const parts = [];
            for (let _n = 0; _n < matches.length; ++_n) {
              if (!(_n in matches)) {
                break;
              }

              let _matches$_n = _slicedToArray(matches[_n], 2),
                _quot = _matches$_n[0],
                _part = _matches$_n[1];

              _part = rfc2616unquote(_part);
              if (_quot) {
                _part = unescape(_part);
                if (_n === 0) {
                  _part = rfc5987decode(_part);
                }
              }
              parts.push(_part);
            }
            return parts.join('');
          }
          function rfc2616unquote(value) {
            if (value.charAt(0) === '"') {
              const parts = value.slice(1).split('\\"');
              for (let i = 0; i < parts.length; ++i) {
                const quotindex = parts[i].indexOf('"');
                if (quotindex !== -1) {
                  parts[i] = parts[i].slice(0, quotindex);
                  parts.length = i + 1;
                }
                parts[i] = parts[i].replace(/\\(.)/g, '$1');
              }
              value = parts.join('"');
            }
            return value;
          }
          function rfc5987decode(extvalue) {
            const encodingend = extvalue.indexOf("'");
            if (encodingend === -1) {
              return extvalue;
            }
            const encoding = extvalue.slice(0, encodingend);
            const langvalue = extvalue.slice(encodingend + 1);
            const value = langvalue.replace(/^[^']*'/, '');
            return textdecode(encoding, value);
          }
          function rfc2047decode(value) {
            if (value.slice(0, 2) !== '=?' || /[\x00-\x19\x80-\xff]/.test(value)) {
              return value;
            }
            return value.replace(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function (_, charset, encoding, text) {
              if (encoding === 'q' || encoding === 'Q') {
                text = text.replace(/_/g, ' ');
                text = text.replace(/=([0-9a-fA-F]{2})/g, function (_, hex) {
                  return String.fromCharCode(parseInt(hex, 16));
                });
                return textdecode(charset, text);
              }
              try {
                text = atob(text);
              } catch (e) {}
              return textdecode(charset, text);
            });
          }
          return '';
        }
        exports.getFilenameFromContentDispositionHeader = getFilenameFromContentDispositionHeader;

        /***/
      },
      /* 151 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.PDFFetchStream = undefined;

        const _regenerator = __w_pdfjs_require__(137);

        const _regenerator2 = _interopRequireDefault(_regenerator);

        const _createClass = (function () {
          function defineProperties(target, props) {
            for (let i = 0; i < props.length; i++) {
              const descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) {
                descriptor.writable = true;
              }
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function (Constructor, protoProps, staticProps) {
            if (protoProps) {
              defineProperties(Constructor.prototype, protoProps);
            }
            if (staticProps) {
              defineProperties(Constructor, staticProps);
            }
            return Constructor;
          };
        })();

        const _util = __w_pdfjs_require__(1);

        const _network_utils = __w_pdfjs_require__(149);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _asyncToGenerator(fn) {
          return function () {
            const gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
              function step(key, arg) {
                try {
                  var info = gen[key](arg);
                  var value = info.value;
                } catch (error) {
                  reject(error);
                  return;
                }
                if (info.done) {
                  resolve(value);
                } else {
                  return Promise.resolve(value).then(
                    function (value) {
                      step('next', value);
                    },
                    function (err) {
                      step('throw', err);
                    },
                  );
                }
              }
              return step('next');
            });
          };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        function createFetchOptions(headers, withCredentials, abortController) {
          return {
            method: 'GET',
            headers: headers,
            // signal: abortController && abortController.signal,
            mode: 'cors',
            credentials: withCredentials ? 'include' : 'same-origin',
            redirect: 'follow',
          };
        }

        const PDFFetchStream = (function () {
          function PDFFetchStream(source) {
            _classCallCheck(this, PDFFetchStream);

            this.source = source;
            this.isHttp = /^https?:/i.test(source.url);
            this.httpHeaders = (this.isHttp && source.httpHeaders) || {};
            this._fullRequestReader = null;
            this._rangeRequestReaders = [];
          }

          _createClass(PDFFetchStream, [
            {
              key: 'getFullReader',
              value: function getFullReader() {
                (0, _util.assert)(!this._fullRequestReader);
                this._fullRequestReader = new PDFFetchStreamReader(this);
                return this._fullRequestReader;
              },
            },
            {
              key: 'getRangeReader',
              value: function getRangeReader(begin, end) {
                const reader = new PDFFetchStreamRangeReader(this, begin, end);
                this._rangeRequestReaders.push(reader);
                return reader;
              },
            },
            {
              key: 'cancelAllRequests',
              value: function cancelAllRequests(reason) {
                if (this._fullRequestReader) {
                  this._fullRequestReader.cancel(reason);
                }
                const readers = this._rangeRequestReaders.slice(0);
                readers.forEach(function (reader) {
                  reader.cancel(reason);
                });
              },
            },
          ]);

          return PDFFetchStream;
        })();

        var PDFFetchStreamReader = (function () {
          function PDFFetchStreamReader(stream) {
            const _this = this;

            _classCallCheck(this, PDFFetchStreamReader);

            this._stream = stream;
            this._reader = null;
            this._loaded = 0;
            this._filename = null;
            const source = stream.source;
            this._withCredentials = source.withCredentials;
            this._contentLength = source.length;
            this._headersCapability = (0, _util.createPromiseCapability)();
            this._disableRange = source.disableRange || false;
            this._rangeChunkSize = source.rangeChunkSize;
            if (!this._rangeChunkSize && !this._disableRange) {
              this._disableRange = true;
            }
            if (typeof AbortController !== 'undefined') {
              this._abortController = new AbortController();
            }
            this._isStreamingSupported = !source.disableStream;
            this._isRangeSupported = !source.disableRange;
            this._headers = new Headers();
            for (const property in this._stream.httpHeaders) {
              const value = this._stream.httpHeaders[property];
              if (typeof value === 'undefined') {
                continue;
              }
              this._headers.append(property, value);
            }
            const url = source.url;
            fetch(url, createFetchOptions(this._headers, this._withCredentials, this._abortController))
              .then(function (response) {
                if (!(0, _network_utils.validateResponseStatus)(response.status)) {
                  throw (0, _network_utils.createResponseStatusError)(response.status, url);
                }
                _this._reader = response.body.getReader();
                _this._headersCapability.resolve();
                const getResponseHeader = function getResponseHeader(name) {
                  return response.headers.get(name);
                };

                const _validateRangeRequest = (0, _network_utils.validateRangeRequestCapabilities)({
                    getResponseHeader: getResponseHeader,
                    isHttp: _this._stream.isHttp,
                    rangeChunkSize: _this._rangeChunkSize,
                    disableRange: _this._disableRange,
                  }),
                  allowRangeRequests = _validateRangeRequest.allowRangeRequests,
                  suggestedLength = _validateRangeRequest.suggestedLength;

                _this._isRangeSupported = allowRangeRequests;
                _this._contentLength = suggestedLength || _this._contentLength;
                _this._filename = (0, _network_utils.extractFilenameFromHeader)(getResponseHeader);
                if (!_this._isStreamingSupported && _this._isRangeSupported) {
                  _this.cancel(new _util.AbortException('streaming is disabled'));
                }
              })
              .catch(this._headersCapability.reject);
            this.onProgress = null;
          }

          _createClass(PDFFetchStreamReader, [
            {
              key: 'read',
              value: (function () {
                const _ref = _asyncToGenerator(
                  /*#__PURE__*/ _regenerator2.default.mark(function _callee() {
                    let _ref2, value, done, buffer;

                    return _regenerator2.default.wrap(
                      function _callee$(_context) {
                        while (1) {
                          switch ((_context.prev = _context.next)) {
                            case 0:
                              _context.next = 2;
                              return this._headersCapability.promise;

                            case 2:
                              _context.next = 4;
                              return this._reader.read();

                            case 4:
                              _ref2 = _context.sent;
                              value = _ref2.value;
                              done = _ref2.done;

                              if (!done) {
                                _context.next = 9;
                                break;
                              }

                              return _context.abrupt('return', {
                                value: value,
                                done: done,
                              });

                            case 9:
                              this._loaded += value.byteLength;
                              if (this.onProgress) {
                                this.onProgress({
                                  loaded: this._loaded,
                                  total: this._contentLength,
                                });
                              }
                              buffer = new Uint8Array(value).buffer;
                              return _context.abrupt('return', {
                                value: buffer,
                                done: false,
                              });

                            case 13:
                            case 'end':
                              return _context.stop();
                          }
                        }
                      },
                      _callee,
                      this,
                    );
                  }),
                );

                function read() {
                  return _ref.apply(this, arguments);
                }

                return read;
              })(),
            },
            {
              key: 'cancel',
              value: function cancel(reason) {
                if (this._reader) {
                  this._reader.cancel(reason);
                }
                if (this._abortController) {
                  this._abortController.abort();
                }
              },
            },
            {
              key: 'headersReady',
              get: function get() {
                return this._headersCapability.promise;
              },
            },
            {
              key: 'filename',
              get: function get() {
                return this._filename;
              },
            },
            {
              key: 'contentLength',
              get: function get() {
                return this._contentLength;
              },
            },
            {
              key: 'isRangeSupported',
              get: function get() {
                return this._isRangeSupported;
              },
            },
            {
              key: 'isStreamingSupported',
              get: function get() {
                return this._isStreamingSupported;
              },
            },
          ]);

          return PDFFetchStreamReader;
        })();

        var PDFFetchStreamRangeReader = (function () {
          function PDFFetchStreamRangeReader(stream, begin, end) {
            const _this2 = this;

            _classCallCheck(this, PDFFetchStreamRangeReader);

            this._stream = stream;
            this._reader = null;
            this._loaded = 0;
            const source = stream.source;
            this._withCredentials = source.withCredentials;
            this._readCapability = (0, _util.createPromiseCapability)();
            this._isStreamingSupported = !source.disableStream;
            if (typeof AbortController !== 'undefined') {
              this._abortController = new AbortController();
            }
            this._headers = new Headers();
            for (const property in this._stream.httpHeaders) {
              const value = this._stream.httpHeaders[property];
              if (typeof value === 'undefined') {
                continue;
              }
              this._headers.append(property, value);
            }
            const rangeStr = begin + '-' + (end - 1);
            this._headers.append('Range', 'bytes=' + rangeStr);
            const url = source.url;
            fetch(url, createFetchOptions(this._headers, this._withCredentials, this._abortController)).then(function (response) {
              if (!(0, _network_utils.validateResponseStatus)(response.status)) {
                throw (0, _network_utils.createResponseStatusError)(response.status, url);
              }
              _this2._readCapability.resolve();
              _this2._reader = response.body.getReader();
            });
            this.onProgress = null;
          }

          _createClass(PDFFetchStreamRangeReader, [
            {
              key: 'read',
              value: (function () {
                const _ref3 = _asyncToGenerator(
                  /*#__PURE__*/ _regenerator2.default.mark(function _callee2() {
                    let _ref4, value, done, buffer;

                    return _regenerator2.default.wrap(
                      function _callee2$(_context2) {
                        while (1) {
                          switch ((_context2.prev = _context2.next)) {
                            case 0:
                              _context2.next = 2;
                              return this._readCapability.promise;

                            case 2:
                              _context2.next = 4;
                              return this._reader.read();

                            case 4:
                              _ref4 = _context2.sent;
                              value = _ref4.value;
                              done = _ref4.done;

                              if (!done) {
                                _context2.next = 9;
                                break;
                              }

                              return _context2.abrupt('return', {
                                value: value,
                                done: done,
                              });

                            case 9:
                              this._loaded += value.byteLength;
                              if (this.onProgress) {
                                this.onProgress({ loaded: this._loaded });
                              }
                              buffer = new Uint8Array(value).buffer;
                              return _context2.abrupt('return', {
                                value: buffer,
                                done: false,
                              });

                            case 13:
                            case 'end':
                              return _context2.stop();
                          }
                        }
                      },
                      _callee2,
                      this,
                    );
                  }),
                );

                function read() {
                  return _ref3.apply(this, arguments);
                }

                return read;
              })(),
            },
            {
              key: 'cancel',
              value: function cancel(reason) {
                if (this._reader) {
                  this._reader.cancel(reason);
                }
                if (this._abortController) {
                  this._abortController.abort();
                }
              },
            },
            {
              key: 'isStreamingSupported',
              get: function get() {
                return this._isStreamingSupported;
              },
            },
          ]);

          return PDFFetchStreamRangeReader;
        })();

        exports.PDFFetchStream = PDFFetchStream;

        /***/
      },
      /* 152 */
      /***/ function (module, exports, __w_pdfjs_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.NetworkManager = exports.PDFNetworkStream = undefined;

        const _regenerator = __w_pdfjs_require__(137);

        const _regenerator2 = _interopRequireDefault(_regenerator);

        const _util = __w_pdfjs_require__(1);

        const _network_utils = __w_pdfjs_require__(149);

        const _global_scope = __w_pdfjs_require__(3);

        const _global_scope2 = _interopRequireDefault(_global_scope);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _asyncToGenerator(fn) {
          return function () {
            const gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
              function step(key, arg) {
                try {
                  var info = gen[key](arg);
                  var value = info.value;
                } catch (error) {
                  reject(error);
                  return;
                }
                if (info.done) {
                  resolve(value);
                } else {
                  return Promise.resolve(value).then(
                    function (value) {
                      step('next', value);
                    },
                    function (err) {
                      step('throw', err);
                    },
                  );
                }
              }
              return step('next');
            });
          };
        }

        const OK_RESPONSE = 200;
        const PARTIAL_CONTENT_RESPONSE = 206;
        function NetworkManager(url, args) {
          this.url = url;
          args = args || {};
          this.isHttp = /^https?:/i.test(url);
          this.httpHeaders = (this.isHttp && args.httpHeaders) || {};
          this.withCredentials = args.withCredentials || false;
          this.getXhr =
            args.getXhr ||
            function NetworkManager_getXhr() {
              return new XMLHttpRequest();
            };
          this.currXhrId = 0;
          this.pendingRequests = Object.create(null);
          this.loadedRequests = Object.create(null);
        }
        function getArrayBuffer(xhr) {
          const data = xhr.response;
          if (typeof data !== 'string') {
            return data;
          }
          const array = (0, _util.stringToBytes)(data);
          return array.buffer;
        }
        const supportsMozChunked = (function supportsMozChunkedClosure() {
          try {
            const x = new XMLHttpRequest();
            x.open('GET', _global_scope2.default.location.href);
            x.responseType = 'moz-chunked-arraybuffer';
            return x.responseType === 'moz-chunked-arraybuffer';
          } catch (e) {
            return false;
          }
        })();
        NetworkManager.prototype = {
          requestRange: function NetworkManager_requestRange(begin, end, listeners) {
            const args = {
              begin: begin,
              end: end,
            };
            for (const prop in listeners) {
              args[prop] = listeners[prop];
            }
            return this.request(args);
          },
          requestFull: function NetworkManager_requestFull(listeners) {
            return this.request(listeners);
          },
          request: function NetworkManager_request(args) {
            const xhr = this.getXhr();
            const xhrId = this.currXhrId++;
            const pendingRequest = (this.pendingRequests[xhrId] = { xhr: xhr });
            xhr.open('GET', this.url);
            xhr.withCredentials = this.withCredentials;
            for (const property in this.httpHeaders) {
              const value = this.httpHeaders[property];
              if (typeof value === 'undefined') {
                continue;
              }
              xhr.setRequestHeader(property, value);
            }
            if (this.isHttp && 'begin' in args && 'end' in args) {
              const rangeStr = args.begin + '-' + (args.end - 1);
              xhr.setRequestHeader('Range', 'bytes=' + rangeStr);
              pendingRequest.expectedStatus = 206;
            } else {
              pendingRequest.expectedStatus = 200;
            }
            const useMozChunkedLoading = supportsMozChunked && !!args.onProgressiveData;
            if (useMozChunkedLoading) {
              xhr.responseType = 'moz-chunked-arraybuffer';
              pendingRequest.onProgressiveData = args.onProgressiveData;
              pendingRequest.mozChunked = true;
            } else {
              xhr.responseType = 'arraybuffer';
            }
            if (args.onError) {
              xhr.onerror = function (evt) {
                args.onError(xhr.status);
              };
            }
            xhr.onreadystatechange = this.onStateChange.bind(this, xhrId);
            xhr.onprogress = this.onProgress.bind(this, xhrId);
            pendingRequest.onHeadersReceived = args.onHeadersReceived;
            pendingRequest.onDone = args.onDone;
            pendingRequest.onError = args.onError;
            pendingRequest.onProgress = args.onProgress;
            xhr.send(null);
            return xhrId;
          },
          onProgress: function NetworkManager_onProgress(xhrId, evt) {
            const pendingRequest = this.pendingRequests[xhrId];
            if (!pendingRequest) {
              return;
            }
            if (pendingRequest.mozChunked) {
              const chunk = getArrayBuffer(pendingRequest.xhr);
              pendingRequest.onProgressiveData(chunk);
            }
            const onProgress = pendingRequest.onProgress;
            if (onProgress) {
              onProgress(evt);
            }
          },
          onStateChange: function NetworkManager_onStateChange(xhrId, evt) {
            const pendingRequest = this.pendingRequests[xhrId];
            if (!pendingRequest) {
              return;
            }
            const xhr = pendingRequest.xhr;
            if (xhr.readyState >= 2 && pendingRequest.onHeadersReceived) {
              pendingRequest.onHeadersReceived();
              delete pendingRequest.onHeadersReceived;
            }
            if (xhr.readyState !== 4) {
              return;
            }
            if (!(xhrId in this.pendingRequests)) {
              return;
            }
            delete this.pendingRequests[xhrId];
            if (xhr.status === 0 && this.isHttp) {
              if (pendingRequest.onError) {
                pendingRequest.onError(xhr.status);
              }
              return;
            }
            const xhrStatus = xhr.status || OK_RESPONSE;
            const ok_response_on_range_request = xhrStatus === OK_RESPONSE && pendingRequest.expectedStatus === PARTIAL_CONTENT_RESPONSE;
            if (!ok_response_on_range_request && xhrStatus !== pendingRequest.expectedStatus) {
              if (pendingRequest.onError) {
                pendingRequest.onError(xhr.status);
              }
              return;
            }
            this.loadedRequests[xhrId] = true;
            const chunk = getArrayBuffer(xhr);
            if (xhrStatus === PARTIAL_CONTENT_RESPONSE) {
              const rangeHeader = xhr.getResponseHeader('Content-Range');
              const matches = /bytes (\d+)-(\d+)\/(\d+)/.exec(rangeHeader);
              const begin = parseInt(matches[1], 10);
              pendingRequest.onDone({
                begin: begin,
                chunk: chunk,
              });
            } else if (pendingRequest.onProgressiveData) {
              pendingRequest.onDone(null);
            } else if (chunk) {
              pendingRequest.onDone({
                begin: 0,
                chunk: chunk,
              });
            } else if (pendingRequest.onError) {
              pendingRequest.onError(xhr.status);
            }
          },
          hasPendingRequests: function NetworkManager_hasPendingRequests() {
            for (const xhrId in this.pendingRequests) {
              return true;
            }
            return false;
          },
          getRequestXhr: function NetworkManager_getXhr(xhrId) {
            return this.pendingRequests[xhrId].xhr;
          },
          isStreamingRequest: function NetworkManager_isStreamingRequest(xhrId) {
            return !!this.pendingRequests[xhrId].onProgressiveData;
          },
          isPendingRequest: function NetworkManager_isPendingRequest(xhrId) {
            return xhrId in this.pendingRequests;
          },
          isLoadedRequest: function NetworkManager_isLoadedRequest(xhrId) {
            return xhrId in this.loadedRequests;
          },
          abortAllRequests: function NetworkManager_abortAllRequests() {
            for (const xhrId in this.pendingRequests) {
              this.abortRequest(xhrId | 0);
            }
          },
          abortRequest: function NetworkManager_abortRequest(xhrId) {
            const xhr = this.pendingRequests[xhrId].xhr;
            delete this.pendingRequests[xhrId];
            xhr.abort();
          },
        };
        function PDFNetworkStream(source) {
          this._source = source;
          this._manager = new NetworkManager(source.url, {
            httpHeaders: source.httpHeaders,
            withCredentials: source.withCredentials,
          });
          this._rangeChunkSize = source.rangeChunkSize;
          this._fullRequestReader = null;
          this._rangeRequestReaders = [];
        }
        PDFNetworkStream.prototype = {
          _onRangeRequestReaderClosed: function PDFNetworkStream_onRangeRequestReaderClosed(reader) {
            const i = this._rangeRequestReaders.indexOf(reader);
            if (i >= 0) {
              this._rangeRequestReaders.splice(i, 1);
            }
          },
          getFullReader: function PDFNetworkStream_getFullReader() {
            (0, _util.assert)(!this._fullRequestReader);
            this._fullRequestReader = new PDFNetworkStreamFullRequestReader(this._manager, this._source);
            return this._fullRequestReader;
          },
          getRangeReader: function PDFNetworkStream_getRangeReader(begin, end) {
            const reader = new PDFNetworkStreamRangeRequestReader(this._manager, begin, end);
            reader.onClosed = this._onRangeRequestReaderClosed.bind(this);
            this._rangeRequestReaders.push(reader);
            return reader;
          },
          cancelAllRequests: function PDFNetworkStream_cancelAllRequests(reason) {
            if (this._fullRequestReader) {
              this._fullRequestReader.cancel(reason);
            }
            const readers = this._rangeRequestReaders.slice(0);
            readers.forEach(function (reader) {
              reader.cancel(reason);
            });
          },
        };
        function PDFNetworkStreamFullRequestReader(manager, source) {
          this._manager = manager;
          const args = {
            onHeadersReceived: this._onHeadersReceived.bind(this),
            onProgressiveData: source.disableStream ? null : this._onProgressiveData.bind(this),
            onDone: this._onDone.bind(this),
            onError: this._onError.bind(this),
            onProgress: this._onProgress.bind(this),
          };
          this._url = source.url;
          this._fullRequestId = manager.requestFull(args);
          this._headersReceivedCapability = (0, _util.createPromiseCapability)();
          this._disableRange = source.disableRange || false;
          this._contentLength = source.length;
          this._rangeChunkSize = source.rangeChunkSize;
          if (!this._rangeChunkSize && !this._disableRange) {
            this._disableRange = true;
          }
          this._isStreamingSupported = false;
          this._isRangeSupported = false;
          this._cachedChunks = [];
          this._requests = [];
          this._done = false;
          this._storedError = undefined;
          this._filename = null;
          this.onProgress = null;
        }
        PDFNetworkStreamFullRequestReader.prototype = {
          _onHeadersReceived: function PDFNetworkStreamFullRequestReader_onHeadersReceived() {
            const fullRequestXhrId = this._fullRequestId;
            const fullRequestXhr = this._manager.getRequestXhr(fullRequestXhrId);
            const getResponseHeader = function getResponseHeader(name) {
              return fullRequestXhr.getResponseHeader(name);
            };

            const _validateRangeRequest = (0, _network_utils.validateRangeRequestCapabilities)({
                getResponseHeader: getResponseHeader,
                isHttp: this._manager.isHttp,
                rangeChunkSize: this._rangeChunkSize,
                disableRange: this._disableRange,
              }),
              allowRangeRequests = _validateRangeRequest.allowRangeRequests,
              suggestedLength = _validateRangeRequest.suggestedLength;

            if (allowRangeRequests) {
              this._isRangeSupported = true;
            }
            this._contentLength = suggestedLength || this._contentLength;
            this._filename = (0, _network_utils.extractFilenameFromHeader)(getResponseHeader);
            const networkManager = this._manager;
            if (networkManager.isStreamingRequest(fullRequestXhrId)) {
              this._isStreamingSupported = true;
            } else if (this._isRangeSupported) {
              networkManager.abortRequest(fullRequestXhrId);
            }
            this._headersReceivedCapability.resolve();
          },
          _onProgressiveData: function PDFNetworkStreamFullRequestReader_onProgressiveData(chunk) {
            if (this._requests.length > 0) {
              const requestCapability = this._requests.shift();
              requestCapability.resolve({
                value: chunk,
                done: false,
              });
            } else {
              this._cachedChunks.push(chunk);
            }
          },
          _onDone: function PDFNetworkStreamFullRequestReader_onDone(args) {
            if (args) {
              this._onProgressiveData(args.chunk);
            }
            this._done = true;
            if (this._cachedChunks.length > 0) {
              return;
            }
            this._requests.forEach(function (requestCapability) {
              requestCapability.resolve({
                value: undefined,
                done: true,
              });
            });
            this._requests = [];
          },
          _onError: function PDFNetworkStreamFullRequestReader_onError(status) {
            const url = this._url;
            const exception = (0, _network_utils.createResponseStatusError)(status, url);
            this._storedError = exception;
            this._headersReceivedCapability.reject(exception);
            this._requests.forEach(function (requestCapability) {
              requestCapability.reject(exception);
            });
            this._requests = [];
            this._cachedChunks = [];
          },
          _onProgress: function PDFNetworkStreamFullRequestReader_onProgress(data) {
            if (this.onProgress) {
              this.onProgress({
                loaded: data.loaded,
                total: data.lengthComputable ? data.total : this._contentLength,
              });
            }
          },
          get filename() {
            return this._filename;
          },
          get isRangeSupported() {
            return this._isRangeSupported;
          },
          get isStreamingSupported() {
            return this._isStreamingSupported;
          },
          get contentLength() {
            return this._contentLength;
          },
          get headersReady() {
            return this._headersReceivedCapability.promise;
          },
          read: (function () {
            const _ref = _asyncToGenerator(
              /*#__PURE__*/ _regenerator2.default.mark(function _callee() {
                let chunk, requestCapability;
                return _regenerator2.default.wrap(
                  function _callee$(_context) {
                    while (1) {
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          if (!this._storedError) {
                            _context.next = 2;
                            break;
                          }

                          throw this._storedError;

                        case 2:
                          if (!(this._cachedChunks.length > 0)) {
                            _context.next = 5;
                            break;
                          }

                          chunk = this._cachedChunks.shift();
                          return _context.abrupt('return', {
                            value: chunk,
                            done: false,
                          });

                        case 5:
                          if (!this._done) {
                            _context.next = 7;
                            break;
                          }

                          return _context.abrupt('return', {
                            value: undefined,
                            done: true,
                          });

                        case 7:
                          requestCapability = (0, _util.createPromiseCapability)();

                          this._requests.push(requestCapability);
                          return _context.abrupt('return', requestCapability.promise);

                        case 10:
                        case 'end':
                          return _context.stop();
                      }
                    }
                  },
                  _callee,
                  this,
                );
              }),
            );

            function read() {
              return _ref.apply(this, arguments);
            }

            return read;
          })(),

          cancel: function PDFNetworkStreamFullRequestReader_cancel(reason) {
            this._done = true;
            this._headersReceivedCapability.reject(reason);
            this._requests.forEach(function (requestCapability) {
              requestCapability.resolve({
                value: undefined,
                done: true,
              });
            });
            this._requests = [];
            if (this._manager.isPendingRequest(this._fullRequestId)) {
              this._manager.abortRequest(this._fullRequestId);
            }
            this._fullRequestReader = null;
          },
        };
        function PDFNetworkStreamRangeRequestReader(manager, begin, end) {
          this._manager = manager;
          const args = {
            onDone: this._onDone.bind(this),
            onProgress: this._onProgress.bind(this),
          };
          this._requestId = manager.requestRange(begin, end, args);
          this._requests = [];
          this._queuedChunk = null;
          this._done = false;
          this.onProgress = null;
          this.onClosed = null;
        }
        PDFNetworkStreamRangeRequestReader.prototype = {
          _close: function PDFNetworkStreamRangeRequestReader_close() {
            if (this.onClosed) {
              this.onClosed(this);
            }
          },
          _onDone: function PDFNetworkStreamRangeRequestReader_onDone(data) {
            const chunk = data.chunk;
            if (this._requests.length > 0) {
              const requestCapability = this._requests.shift();
              requestCapability.resolve({
                value: chunk,
                done: false,
              });
            } else {
              this._queuedChunk = chunk;
            }
            this._done = true;
            this._requests.forEach(function (requestCapability) {
              requestCapability.resolve({
                value: undefined,
                done: true,
              });
            });
            this._requests = [];
            this._close();
          },
          _onProgress: function PDFNetworkStreamRangeRequestReader_onProgress(evt) {
            if (!this.isStreamingSupported && this.onProgress) {
              this.onProgress({ loaded: evt.loaded });
            }
          },
          get isStreamingSupported() {
            return false;
          },
          read: (function () {
            const _ref2 = _asyncToGenerator(
              /*#__PURE__*/ _regenerator2.default.mark(function _callee2() {
                let chunk, requestCapability;
                return _regenerator2.default.wrap(
                  function _callee2$(_context2) {
                    while (1) {
                      switch ((_context2.prev = _context2.next)) {
                        case 0:
                          if (!(this._queuedChunk !== null)) {
                            _context2.next = 4;
                            break;
                          }

                          chunk = this._queuedChunk;

                          this._queuedChunk = null;
                          return _context2.abrupt('return', {
                            value: chunk,
                            done: false,
                          });

                        case 4:
                          if (!this._done) {
                            _context2.next = 6;
                            break;
                          }

                          return _context2.abrupt('return', {
                            value: undefined,
                            done: true,
                          });

                        case 6:
                          requestCapability = (0, _util.createPromiseCapability)();

                          this._requests.push(requestCapability);
                          return _context2.abrupt('return', requestCapability.promise);

                        case 9:
                        case 'end':
                          return _context2.stop();
                      }
                    }
                  },
                  _callee2,
                  this,
                );
              }),
            );

            function read() {
              return _ref2.apply(this, arguments);
            }

            return read;
          })(),

          cancel: function PDFNetworkStreamRangeRequestReader_cancel(reason) {
            this._done = true;
            this._requests.forEach(function (requestCapability) {
              requestCapability.resolve({
                value: undefined,
                done: true,
              });
            });
            this._requests = [];
            if (this._manager.isPendingRequest(this._requestId)) {
              this._manager.abortRequest(this._requestId);
            }
            this._close();
          },
        };
        exports.PDFNetworkStream = PDFNetworkStream;
        exports.NetworkManager = NetworkManager;

        /***/
      },
      /******/
    ],
  );
});
//# sourceMappingURL=pdf.js.map
