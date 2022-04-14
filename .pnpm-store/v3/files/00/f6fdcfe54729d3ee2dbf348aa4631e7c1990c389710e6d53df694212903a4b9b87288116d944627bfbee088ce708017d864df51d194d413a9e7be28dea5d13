"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.assert = exports.testResetConfiguration = exports.configureAssert = void 0;
var FailureType;
(function (FailureType) {
    FailureType["Condition"] = "Condition";
    FailureType["NoValue"] = "NoValue";
})(FailureType || (FailureType = {}));
var messageFormatter = function (failureType, message, props) {
    var _a;
    var typeMap = (_a = {},
        _a[FailureType.Condition] = 'Assert condition failed',
        _a[FailureType.NoValue] = 'Assert value not undefined/null failed',
        _a);
    var msg = typeMap[failureType] +
        (message ? ": " + message : '') +
        (props ? ": " + JSON.stringify(props) : '');
    return msg;
};
var errorCreatorFactory = function (formatter) {
    return function (failureType, message, props) {
        return new Error(formatter(failureType, message, props));
    };
};
var defaultConfiguration = {
    formatter: messageFormatter,
    errorCreator: errorCreatorFactory(messageFormatter),
};
var configuration = defaultConfiguration;
/**
 * Customize formatting of assertion failure messages, creation of failure Errors and reporting of failures
 * @param custom
 */
function configureAssert(custom) {
    var newConfig = __assign(__assign({}, configuration), custom);
    newConfig.errorCreator =
        custom.errorCreator || errorCreatorFactory(newConfig.formatter);
    configuration = newConfig;
}
exports.configureAssert = configureAssert;
/**
 * For test purpose
 */
function testResetConfiguration() {
    configuration = defaultConfiguration;
}
exports.testResetConfiguration = testResetConfiguration;
var hardAssert = function (conditionOrValue, message, props) {
    if (typeof conditionOrValue === 'boolean') {
        if (!conditionOrValue) {
            var properties = typeof props === 'function' ? props() : props;
            var error = configuration.errorCreator(FailureType.Condition, message, properties);
            if (configuration.errorReporter) {
                configuration.errorReporter(FailureType.Condition, error, message, properties);
            }
            throw error;
        }
        return;
    }
    if (typeof conditionOrValue === 'undefined' || conditionOrValue === null) {
        var properties = typeof props === 'function' ? props() : props;
        var error = configuration.errorCreator(FailureType.NoValue, message, properties);
        if (configuration.errorReporter) {
            configuration.errorReporter(FailureType.NoValue, error, message, properties);
        }
        throw error;
    }
    return conditionOrValue;
};
var softAssert = function (conditionOrValue, message, props) {
    var warningReporter = configuration.warningReporter;
    if (typeof conditionOrValue === 'boolean') {
        if (!conditionOrValue) {
            var properties = typeof props === 'function' ? props() : props;
            exports.assert(warningReporter, 'assert.soft must have warningReporter configured, see https://www.npmjs.com/package/assert-ts#configuration')(FailureType.Condition, message, properties);
        }
        return conditionOrValue;
    }
    if (conditionOrValue === undefined || conditionOrValue === null) {
        var properties = typeof props === 'function' ? props() : props;
        exports.assert(warningReporter, 'assert.soft must have warningReporter configured, see https://www.npmjs.com/package/assert-ts#configuration')(FailureType.NoValue, message, properties);
        return false;
    }
    return true;
};
var _assert = hardAssert;
_assert.soft = softAssert;
exports.assert = _assert;
