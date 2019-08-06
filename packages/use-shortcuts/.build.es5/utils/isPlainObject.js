// eslint-disable-next-line @typescript-eslint/no-explicit-any
export var isPlainObject = function (obj) {
    var isObject = typeof obj === 'object' && obj !== null && !Array.isArray(obj);
    if (!isObject || (obj.toString && obj.toString() !== '[object Object]')) {
        return false;
    }
    var proto = Object.getPrototypeOf(obj);
    if (proto === null) {
        return true;
    }
    var Ctor = Object.prototype.hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return (typeof Ctor === 'function' &&
        Ctor instanceof Ctor &&
        Function.prototype.toString.call(Ctor) === Function.prototype.toString.call(Object));
};
