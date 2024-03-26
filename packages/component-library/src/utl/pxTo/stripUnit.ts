const cssRegex = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;

export function stripUnit(value: string | number): string | number {
  if (typeof value !== 'string') {
    return value;
  }
  const matchedValue = value.match(cssRegex);
  return matchedValue ? parseFloat(value) : value;
}
