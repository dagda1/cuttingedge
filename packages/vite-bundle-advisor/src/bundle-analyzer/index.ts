#!/usr/bin/env tsx

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { showChunkStats } from './chunkStats.js';
import { compareBundles } from './compare.js';
import { getExistingManualChunks } from './config.js';
import { analyzeFileDetails } from './details.js';
import { loadBundleHistory, saveBundleHistory } from './history.js';
import { suggestOptimizations } from './suggest.js';
import type { BundleFile, BundleSnapshot } from './types.js';
import { formatSize, parseArgs } from './utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const HERMAN_PATH = path.join(__dirname, '../../apps/frontend/dist/herman.json');
const VITE_CONFIG_PATH = path.join(__dirname, '../../apps/frontend/vite.config.mts');
const HISTORY_DIR = path.join(__dirname, '../../.bundle-history');

function analyzeBundle(): void {
  const { unit, detailFile, detailAll, detailTop, suggest, chunkStats, noSave, compare, topN } = parseArgs();

  console.log('Reading herman.json...\n');

  const data: BundleFile[] = JSON.parse(fs.readFileSync(HERMAN_PATH, 'utf-8'));

  if (chunkStats) {
    showChunkStats(data, unit);
    return;
  }

  if (detailFile) {
    analyzeFileDetails(data, detailFile, unit);
    return;
  }

  if (detailTop) {
    const largest = [...data].sort((a, b) => b.parsedSize - a.parsedSize)[0];
    if (largest) {
      analyzeFileDetails(data, largest.filename, unit);
    } else {
      console.log('No files found in bundle.');
    }
    return;
  }

  if (detailAll) {
    const sortedFiles = [...data].sort((a, b) => b.parsedSize - a.parsedSize);
    sortedFiles.forEach((file, index) => {
      if (index > 0) {
        console.log('\n' + '='.repeat(80) + '\n');
      }
      analyzeFileDetails(data, file.filename, unit);
    });
    return;
  }

  if (suggest) {
    const existingChunks = getExistingManualChunks(VITE_CONFIG_PATH);
    suggestOptimizations(data, unit, existingChunks);
    return;
  }

  const files = data.map((item) => ({
    path: item.filename || '',
    size: item.parsedSize,
    gzipSize: item.gzipSize,
    brotliSize: item.brotliSize,
    imports: item.imports?.length || 0,
    isEntry: item.isEntry,
    isAsset: item.isAsset,
  }));

  files.sort((a, b) => b.size - a.size);

  console.log(`Top ${topN} Largest Files (sizes in ${unit}):\n`);
  console.log(`Rank | Size (${unit}) | Gzip (${unit}) | Brotli (${unit}) | File Path`);
  console.log('-----|-----------|-----------|-------------|----------');

  files.slice(0, topN).forEach((file, index) => {
    const size = formatSize(file.size, unit);
    const gzip = formatSize(file.gzipSize, unit);
    const brotli = formatSize(file.brotliSize, unit);
    const entryMarker = file.isEntry ? ' [ENTRY]' : '';

    console.log(
      `${(index + 1).toString().padStart(4)} | ${size.padStart(9)} | ` +
        `${gzip.padStart(9)} | ${brotli.padStart(11)} | ${file.path}${entryMarker}`,
    );
  });

  console.log('\n');
  console.log(`Total files analyzed: ${files.length}`);
  const totalSize = files.reduce((sum, f) => sum + f.size, 0);
  const totalGzip = files.reduce((sum, f) => sum + (f.gzipSize || 0), 0);
  console.log(`Total bundle size: ${formatSize(totalSize, unit)} ${unit}`);
  console.log(`Total gzipped size: ${formatSize(totalGzip, unit)} ${unit}`);

  const previous = loadBundleHistory(true, HISTORY_DIR);
  if (previous && compare !== false) {
    const entryFile = data.find((item) => item.isEntry);
    const current: BundleSnapshot = {
      timestamp: new Date().toISOString(),
      totalSize: data.reduce((sum: number, f: BundleFile) => sum + f.parsedSize, 0),
      totalGzip: data.reduce((sum: number, f: BundleFile) => sum + (f.gzipSize || 0), 0),
      totalBrotli: data.reduce((sum: number, f: BundleFile) => sum + (f.brotliSize || 0), 0),
      entrySize: entryFile?.parsedSize || 0,
      entryGzip: entryFile?.gzipSize || 0,
      entryBrotli: entryFile?.brotliSize || 0,
      chunks: data
        .sort((a, b) => b.parsedSize - a.parsedSize)
        .slice(0, topN)
        .map((f: BundleFile) => ({
          name: f.filename,
          size: f.parsedSize,
          gzip: f.gzipSize,
          brotli: f.brotliSize,
          isEntry: f.isEntry,
        })),
    };

    if (
      current.totalSize === previous.totalSize &&
      current.totalGzip === previous.totalGzip &&
      current.entrySize === previous.entrySize
    ) {
      console.log('\n✅ Bundle size unchanged from previous build.\n');
    } else {
      compareBundles(current, previous, unit);
    }
  }

  if (!noSave) {
    saveBundleHistory(data, HISTORY_DIR);
    console.log('\n📊 Bundle snapshot saved to .bundle-history/');
  }
}

try {
  analyzeBundle();
} catch (error) {
  console.error('Error analyzing bundle:', (error as Error).message);
  process.exit(1);
}
