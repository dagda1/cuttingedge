import { SimplifiedTypeWithIDs } from 'src/types';

export function buildId(...parts: string[]): string {
  return parts.join('::');
}

export function typeNameToId(name: string): string {
  return buildId('TYPE', name);
}

export function isSystemType(type: SimplifiedTypeWithIDs): boolean {
  return type.name.startsWith('__');
}
