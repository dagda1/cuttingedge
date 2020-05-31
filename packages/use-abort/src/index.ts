declare const __BROWSER__: boolean;

export { useAbort } from './useAbort';
export { AbortableStates } from './types';

if (!__BROWSER__) {
  (global as any).fetch = require('node-fetch');
  require('abortcontroller-polyfill/dist/polyfill-patch-fetch');
}
