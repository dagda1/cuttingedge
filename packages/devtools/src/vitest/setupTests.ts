import { fetch } from 'cross-fetch';

global.fetch = fetch;
globalThis.fetch = fetch;
