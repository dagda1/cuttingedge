export function endsWith(string: string, suffix: string): boolean {
  return string.substr(-suffix.length) === suffix;
}
