import t from '@babel/runtime/helpers/esm/objectSpread2';
import { assert as e } from 'assert-ts';
const r = (t) => t instanceof Date && !isNaN(t),
  n = (t) => t && t.getBoundingClientRect().top >= 0,
  o = (t) =>
    new Promise((e, r) => {
      !(function t(n) {
        let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const i = document.querySelector(n);
        i
          ? e(i)
          : setTimeout(() => {
              o++, o < 10 ? t(n, o) : r(new Error('no'));
            }, 100);
      })(t);
    }),
  i = (t) => null == t,
  c = (t) => !i(t) && /^\d+$/g.test(t.toString()),
  s = {
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NoContent: 204,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    BadRequest: 400,
    Unauthorised: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
  },
  a = (t, e, r) => {
    t.addEventListener(e, function n() {
      t.removeEventListener(e, n), r(...arguments);
    });
  },
  u = (t) => (Array.isArray(t) ? t.reduce((t, e) => t.concat(e), []) : [t]),
  l = (t) => (Array.isArray(t) ? t.reduce((t, e) => [...l(t), ...l(e)], []) : [t]),
  f = (e, r) => (e || []).reduce((e, n) => t(t({}, e), {}, { [r ? n[r] : n]: n }), {}),
  g = (t, e) => {
    if (i(t)) {
      return t;
    }
    const r = {};
    for (const [n, o] of Object.entries(t)) {
      i(o) || 0 == !!e(o) || (r[n] = o);
    }
    return r;
  },
  d = (t, e) => {
    const r = {};
    for (const [, n] of Object.entries(t)) {
      const t = e(n);
      r[t] || (r[t] = 0), !1 !== Boolean(n) && null != t && r[t]++;
    }
    return r;
  },
  y = (t, e) => {
    if (i(t)) {
      return [];
    }
    const r = t.slice(0);
    return (
      r.sort((t, r) => {
        const n = e(t),
          o = e(r);
        return n > o ? 1 : n < o ? -1 : 0;
      }),
      r
    );
  },
  h = (t, e) => {
    const r = [],
      n = new Set();
    for (const o of t) {
      const t = e(o);
      !1 === n.has(t) && (n.add(t), r.push(o));
    }
    return r;
  },
  m = (t, e) => h(y(t, e), e),
  p = (t) => t,
  w = (t) => {
    const e = typeof t;
    return !1 === i(t) && ('object' === e || 'function' === e);
  };
function* S(t, e) {
  let r,
    n,
    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
  e ? ((r = t), (n = e)) : ((r = 0), (n = t));
  for (let t = r; t <= n; t += o) {
    yield t;
  }
}
const v = ((t) =>
    function () {
      const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
      return ''.concat(e).concat(++t);
    })(0),
  b = (t) => t.replace(/([a-z\d])([A-Z])/g, '$1_$2').toLowerCase(),
  A = (t) => b(t).replace(/[ _]/g, '-'),
  O = (t) => (t || '').replace(/\s/g, ''),
  j = (t) => (null == t ? void 0 : t.replace(/^[a-z]/, (t) => t.toUpperCase())),
  I = (t) => {
    const e = String(t || '');
    return 1 !== e.length ? e : '0'.concat(e);
  };
function C(t) {
  return t.replace(/[&<>"']/g, (t) => {
    switch (t) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quot;';
      default:
        return '&#039;';
    }
  });
}
let W = {};
class k {
  static setItem(t, e) {
    return (W[t] = e), W[t];
  }
  static getItem(t) {
    return Object.prototype.hasOwnProperty.call(W, t) ? W[t] : void 0;
  }
  static removeItem(t) {
    return delete W[t];
  }
  static clear() {
    return (W = {}), W;
  }
  static key(t) {
    return W[t];
  }
}
class N {
  getItem(t) {
    return this.getStorage().getItem(t);
  }
  setItem(t, e) {
    this.getStorage().setItem(t, e);
  }
  removeItem(t) {
    this.getStorage().removeItem(t);
  }
  clear() {
    this.getStorage().clear();
  }
  get length() {
    return this.getStorage().length;
  }
  constructor(t) {
    this.storageWindow = void 0;
    try {
      localStorage,
        (this.storageWindow = window[t]),
        this.storageWindow.setItem('cutting.test-ls', '1'),
        this.storageWindow.removeItem('cutting.test-ls');
    } catch (t) {
      this.storageWindow = k;
    }
  }
  getStorage() {
    return this.storageWindow;
  }
}
const P = (t) => typeof !i(t) && 'object' === typeof t && null !== t && 'then' in t && 'function' === typeof t.then,
  q = (t) => {
    if ('function' !== typeof t) {
      return !1;
    }
    const e = t.toString().trim();
    return !(!e.match(/^async /) && !e.match(/return __awaiter/));
  },
  B = (t) => !r(t) && 'function' === typeof t,
  E = (t, e, r) => r.indexOf(t) === e,
  L = (t) => t.filter(E);
function _(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) {
    r[n - 1] = arguments[n];
  }
  const o = {},
    i = Object.keys(t).flatMap((t) => (!1 === r.includes(t) ? [t] : []));
  for (const e of i) {
    o[e] = t[e];
  }
  return o;
}
function F(t, r) {
  function n(t) {
    return Object.prototype.toString.call(t).slice(8, -1).toLowerCase();
  }
  const o = n(t);
  return (
    o === n(r) &&
    ('array' === o
      ? (function () {
          if ((e(Array.isArray(t) && Array.isArray(r), 'eiter left or right is not an array'), t.length !== r.length)) {
            return !1;
          }
          for (let e = 0; e < t.length; e++) {
            if (!F(t[e], r[e])) {
              return !1;
            }
          }
          return !0;
        })()
      : 'object' === o
      ? (function () {
          if (
            (e(!Array.isArray(t) && !Array.isArray(r), 'eiter left or right is an array'), Object.keys(t).length !== Object.keys(r).length)
          ) {
            return !1;
          }
          for (const e in t) {
            if (Object.prototype.hasOwnProperty.call(t, e) && !F(t[e], r[e])) {
              return !1;
            }
          }
          return !0;
        })()
      : 'function' === o
      ? (e('function' === typeof t && 'function' === typeof r, 'either left or right is not function'), t.toString() === r.toString())
      : t === r)
  );
}
const R = (t, e) =>
  Object.entries(t).reduce((r, n) => {
    const [o, i] = n;
    return (r[o] = e(i, o, t)), r;
  }, {});
function* U(t) {
  if (1 !== t.length) {
    yield [t[0]];
    for (const e of U(t.slice(1))) {
      yield e, yield [t[0], ...e];
    }
  } else {
    yield t;
  }
}
export {
  s as HttpStatusCode,
  N as StorageHelper,
  j as capitalize,
  U as combinations,
  d as countBy,
  A as dasherize,
  b as decamelize,
  C as escapeHtml,
  u as flatten,
  l as flattenDeep,
  p as identity,
  q as isAsyncFunction,
  r as isDate,
  n as isElementInViewportTop,
  F as isEqual,
  B as isFunction,
  i as isNil,
  c as isNumber,
  w as isObject,
  P as isPromise,
  f as keyBy,
  R as mapValues,
  _ as omit,
  a as once,
  I as padNumber,
  g as pickBy,
  S as range,
  y as sortBy,
  m as sortedUniqBy,
  O as stripSpaces,
  h as uniqBy,
  L as unique,
  v as uniqueId,
  o as wait,
};
//# sourceMappingURL=index.js.map
