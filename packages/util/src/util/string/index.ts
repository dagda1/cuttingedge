export const decamelize = (str: string): string => str.replace(/([a-z\d])([A-Z])/g, '$1_$2').toLowerCase();

export const dasherize = (str: string): string => decamelize(str).replace(/[ _]/g, '-');

export const stripSpaces = (txt: string) => (txt || '').replace(/\s/g, '');

export const padNumber = (num: string): string => {
  const s = String(num || '');

  return s.length !== 1 ? s : `0${s}`;
};
