"use strict";
exports.id = 8639;
exports.ids = [8639];
exports.modules = {

/***/ 8639:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CE": () => (/* binding */ R),
/* harmony export */   "EL": () => (/* binding */ w),
/* harmony export */   "Q8": () => (/* binding */ D),
/* harmony export */   "Xv": () => (/* binding */ E),
/* harmony export */   "kC": () => (/* binding */ I),
/* harmony export */   "kK": () => (/* binding */ o),
/* harmony export */   "w6": () => (/* binding */ v),
/* harmony export */   "yR": () => (/* binding */ h),
/* harmony export */   "yv": () => (/* binding */ B)
/* harmony export */ });
/* unused harmony exports HttpMethod, HttpStatusCode, StorageHelper, combinations, countBy, dasherize, decamelize, env, flatten, flattenDeep, generateUUID, isAsyncFunction, isCI, isDate, isDevelopment, isElementInViewportTop, isEqual, isFunction, isNumber, isObject, isPromise, isTest, keyBy, once, padNumber, pickBy, sortBy, sortedUniqBy, stripSpaces, uniqBy, unique, wait */
/* harmony import */ var assert_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1912);
const t=e=>e instanceof Date&&!isNaN(e),r=e=>e&&e.getBoundingClientRect().top>=0,n=(e,t=10,r=100)=>new Promise(((n,o)=>{const i=(c=0)=>{const a=document.querySelector(e);a?n(a):setTimeout((()=>{c<t?i(c+1):o(new Error(`no element found for ${e}`))}),r)};i()})),o=e=>null==e,i=e=>!o(e)&&/^\d+$/g.test(e.toString());var c,a;!function(e){e.GET="get",e.POST="post",e.PUT="put",e.DELETE="delete"}(c||(c={})),function(e){e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NoContent=204]="NoContent",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.BadRequest=400]="BadRequest",e[e.Unauthorised=401]="Unauthorised",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout"}(a||(a={}));const s=(e,t,r)=>{e.addEventListener(t,(function n(...o){e.removeEventListener(t,n),r(...o)}))},u=e=>Array.isArray(e)?e.reduce(((e,t)=>e.concat(t)),[]):[e],l=e=>Array.isArray(e)?e.reduce(((e,t)=>[...l(e),...l(t)]),[]):[e],f=(e,t)=>(e||[]).reduce(((e,r)=>({...e,[t?r[t]:r]:r})),{}),d=(e,t)=>{if(o(e))return e;const r={};for(const[n,i]of Object.entries(e))o(i)||0==!!t(i)||(r[n]=i);return r},g=(e,t)=>{const r={};for(const[,n]of Object.entries(e)){const e=t(n);r[e]||(r[e]=0),!1!==Boolean(n)&&null!=e&&r[e]++}return r},y=(e,t)=>{if(o(e))return[];const r=e.slice(0);return r.sort(((e,r)=>{const n=t(e),o=t(r);return n>o?1:n<o?-1:0})),r},p=(e,t)=>{const r=[],n=new Set;for(const o of e){const e=t(o);!1===n.has(e)&&(n.add(e),r.push(o))}return r},m=(e,t)=>p(y(e,t),t),h=e=>e,x=e=>{const t=typeof e;return!1===o(e)&&("object"===t||"function"===t)};function*v(e,t,r=1){let n,o;t?(n=e,o=t):(n=0,o=e);for(let e=n;e<=o;e+=r)yield e}const w=(S=0,(e="")=>`${e}${++S}`);var S;const O=e=>e.replace(/([a-z\d])([A-Z])/g,"$1_$2").toLowerCase(),b=e=>O(e).replace(/[ _]/g,"-"),A=e=>(e||"").replace(/\s/g,""),I=e=>e?.replace(/^[a-z]/,(e=>e.toUpperCase())),j=e=>{const t=String(e||"");return 1!==t.length?t:`0${t}`};function E(e){return e.replace(/[&<>"']/g,(e=>{switch(e){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";case'"':return"&quot;";default:return"&#039;"}}))}let N={};class C{static setItem(e,t){return N[e]=t,N[e]}static getItem(e){return Object.prototype.hasOwnProperty.call(N,e)?N[e]:void 0}static removeItem(e){return delete N[e]}static clear(){return N={},N}static key(e){return N[e]}}class P{storageWindow;getItem(e){return this.getStorage().getItem(e)}setItem(e,t){this.getStorage().setItem(e,t)}removeItem(e){this.getStorage().removeItem(e)}clear(){this.getStorage().clear()}get length(){return this.getStorage().length}constructor(e){try{localStorage,this.storageWindow=window[e],this.storageWindow.setItem("cutting.test-ls","1"),this.storageWindow.removeItem("cutting.test-ls")}catch(e){this.storageWindow=C}}getStorage(){return this.storageWindow}}var T;!function(e){e.development="development",e.test="test",e.production="production"}(T||(T={}));const k=T["production"]||T.development,$=k===T.development,q=k===T.test,B=k===T.production,F=(/* unused pure expression or super */ null && ($)),M=e=>typeof!o(e)&&"object"==typeof e&&null!==e&&"then"in e&&"function"==typeof e.then,U=e=>{if("function"!=typeof e)return!1;const t=e.toString().trim();return!(!t.match(/^async /)&&!t.match(/return __awaiter/))},W=e=>!t(e)&&"function"==typeof e,G=(e,t,r)=>r.indexOf(e)===t,L=e=>e.filter(G);function R(e,...t){if(!e)return{};const r={},n=Object.keys(e).flatMap((e=>!1===t.includes(e)?[e]:[]));for(const t of n)r[t]=e[t];return r}function _(t,r){function n(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}const o=n(t);return o===n(r)&&("array"===o?function(){if(e(Array.isArray(t)&&Array.isArray(r),"eiter left or right is not an array"),t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(!_(t[e],r[e]))return!1;return!0}():"object"===o?function(){if(e(!Array.isArray(t)&&!Array.isArray(r),"eiter left or right is an array"),e("function"!=typeof t&&"function"!=typeof r),Object.keys(t).length!==Object.keys(r).length)return!1;for(const e of Object.keys(t))if(!_(t[e],r[e]))return!1;return!0}():"function"===o?(e("function"==typeof t&&"function"==typeof r,"either left or right is not function"),t.toString()===r.toString()):t===r)}const D=(e,t)=>Object.entries(e).reduce(((r,[n,o])=>(r[n]=t(o,n,e),r)),{});function*z(e){if(1!==e.length){yield[e[0]];for(const t of z(e.slice(1)))yield t,yield[e[0],...t]}else yield e}function V(){let e=(new Date).getTime(),t="undefined"!=typeof performance&&performance.now&&1e3*performance.now()||0;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(r){let n=16*Math.random();return e>0?(n=(e+n)%16|0,e=Math.floor(e/16)):(n=(t+n)%16|0,t=Math.floor(t/16)),("x"===r?n:3&n|8).toString(16)}))}
//# sourceMappingURL=index.js.map


/***/ })

};
;