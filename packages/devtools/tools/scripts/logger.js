"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = exports.LoggerTypes = void 0;
var chalk_1 = __importDefault(require("chalk"));
var LoggerTypes;
(function (LoggerTypes) {
    LoggerTypes["warn"] = "warn";
    LoggerTypes["debug"] = "debug";
    LoggerTypes["info"] = "info";
    LoggerTypes["error"] = "error";
    LoggerTypes["start"] = "start";
    LoggerTypes["done"] = "done";
})(LoggerTypes = exports.LoggerTypes || (exports.LoggerTypes = {}));
var logTypes = {
    warn: {
        bg: 'bgYellow',
        msg: ' WARNING ',
        text: 'yellow',
    },
    debug: {
        bg: 'bgMagenta',
        msg: ' DEBUG ',
        text: 'magenta',
    },
    info: {
        bg: 'bgCyan',
        msg: ' INFO ',
        text: 'cyan',
    },
    error: {
        bg: 'bgRed',
        msg: ' ERROR ',
        text: 'red',
    },
    start: {
        bg: 'bgBlue',
        msg: ' START ',
        text: 'blue',
    },
    done: {
        bg: 'bgGreen',
        msg: ' DONE ',
        text: 'green',
    },
};
var write = function (type, text, verbose) {
    var textToLog = '';
    var logObject = false;
    var logType = logTypes[type];
    textToLog += chalk_1.default[logType.bg].black(logType.msg.padEnd(8)) + " " + chalk_1.default[logType.text](text);
    if (verbose) {
        if (typeof verbose === 'object') {
            logObject = true;
        }
        else {
            textToLog += "\n\n" + verbose;
        }
    }
    console.log(textToLog);
    if ([LoggerTypes.start, LoggerTypes.done, LoggerTypes.error].indexOf(type) > -1) {
        console.log();
    }
    if (logObject) {
        console.dir(verbose, { depth: 15 });
    }
};
var log = function (text) {
    if (text === void 0) { text = ''; }
    return console.log(text);
};
var start = function (text) {
    write(LoggerTypes.start, text);
};
var done = function (text) {
    write(LoggerTypes.done, text);
};
var info = function (text) {
    write(LoggerTypes.info, text);
};
var debug = function (text, data) {
    write(LoggerTypes.debug, text, data);
};
var warn = function (text, data) {
    write(LoggerTypes.warn, text, data);
};
var error = function (err) {
    if (typeof err === 'string') {
        write(LoggerTypes.error, err);
        return;
    }
    if (err.message) {
        write(LoggerTypes.error, err.message);
    }
    write(LoggerTypes.error, err);
    if (err.stack) {
        write(LoggerTypes.error, err.stack);
    }
};
exports.logger = {
    log: log,
    info: info,
    debug: debug,
    warn: warn,
    error: error,
    start: start,
    done: done,
};
exports.default = exports.logger;
//# sourceMappingURL=logger.js.map