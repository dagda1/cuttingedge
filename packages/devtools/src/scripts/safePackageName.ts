const isAlphanumeric = (character: string): boolean => /[a-z0-9]/i.test(character);

const trimTrailingNonAlphanumeric = (name: string): string => {
  let end = name.length;

  while (end > 0 && !isAlphanumeric(name[end - 1])) {
    end -= 1;
  }

  return name.slice(0, end);
};

const withoutScope = (name: string): string => {
  const scopeEnd = name.startsWith('@') ? name.lastIndexOf('/') + 1 : 0;

  return scopeEnd > 0 ? name.slice(scopeEnd) : name.replace(/^[^a-zA-Z]+/, '');
};

export const safePackageName = (name: string): string =>
  trimTrailingNonAlphanumeric(withoutScope(name.toLowerCase()).replace(/[^\w.-]/g, ''));
