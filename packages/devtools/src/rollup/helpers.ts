export const safePackageName = (name: string): string =>
  name.toLowerCase().replace(/(^@.*\/)|((^[^a-zA-Z]+)|[^\w.-])|([^a-zA-Z0-9]+$)/g, '');
