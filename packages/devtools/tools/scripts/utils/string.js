export const decamelize = (str) => str.replace(/([a-z\d])([A-Z])/g, '$1_$2').toLowerCase();
export const dasherize = (str) => decamelize(str).replace(/[ _]/g, '-');
//# sourceMappingURL=string.js.map