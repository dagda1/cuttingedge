import { Plugin } from 'webpack';

export const isPlugin = (a: unknown): a is Plugin => typeof a === 'object';
