declare const __BROWSER__: boolean;

export { useAbort } from './useAbort';
export type { AbortableStates } from './types';

if (!__BROWSER__) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (global as any).fetch = require('node-fetch');
  require('abortcontroller-polyfill/dist/polyfill-patch-fetch');
}
