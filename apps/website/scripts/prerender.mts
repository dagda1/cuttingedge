import { readFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import { extractRoutePaths, parseConstants, prerenderSite, type SiteMeta } from '@cutting/devtools/prerender.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const clientDir = join(__dirname, '../dist/client');
const srcDir = join(__dirname, '../src');

const BASE_URL = 'https://cutting.scot';

const DEFAULT_META: SiteMeta = {
  title: 'Paul Cowan - elite frontend developer and gun for hire',
  description: 'Elite level frontend developer.',
};

const urls = parseConstants(await readFile(join(srcDir, 'urls.ts'), 'utf-8'));

const topRoutes = extractRoutePaths(await readFile(join(srcDir, 'routes/index.tsx'), 'utf-8'), urls);
const vizRoutes = extractRoutePaths(await readFile(join(srcDir, 'pages/Viz/Viz.tsx'), 'utf-8'), urls).map(
  (path) => `/viz${path}`,
);
const routes = [...topRoutes, '/viz', ...vizRoutes];

const EXCLUDE = ['/download-pdf', '/download-word-doc'];

await prerenderSite({
  clientDir,
  baseUrl: BASE_URL,
  defaultMeta: DEFAULT_META,
  routes,
  exclude: EXCLUDE,
});
