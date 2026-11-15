import { assert } from '@cutting/assert';

import { fetchMatches } from '../src/understat/fetchMatches';

const [dataDir] = process.argv.slice(2).filter((argument) => !argument.startsWith('--'));
assert(dataDir, 'usage: fetch-data <data-dir> [--force]');

await fetchMatches(dataDir, process.argv.includes('--force') ? 'force' : 'incremental');
