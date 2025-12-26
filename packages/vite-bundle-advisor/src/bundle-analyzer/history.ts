import fs from 'fs';
import path from 'path';

import type { BundleFile, BundleSnapshot } from './types.js';

const MAX_HISTORY_FILES = 30;

export function saveBundleHistory(data: BundleFile[], historyDir: string): void {
  try {
    if (!fs.existsSync(historyDir)) {
      fs.mkdirSync(historyDir, { recursive: true });
    }

    const timestamp = new Date().toISOString();
    const entryFile = data.find((item) => item.isEntry);
    const snapshot: BundleSnapshot = {
      timestamp,
      totalSize: data.reduce((sum: number, f: BundleFile) => sum + f.parsedSize, 0),
      totalGzip: data.reduce((sum: number, f: BundleFile) => sum + (f.gzipSize || 0), 0),
      totalBrotli: data.reduce((sum: number, f: BundleFile) => sum + (f.brotliSize || 0), 0),
      entrySize: entryFile?.parsedSize || 0,
      entryGzip: entryFile?.gzipSize || 0,
      entryBrotli: entryFile?.brotliSize || 0,
      chunks: data
        .sort((a, b) => b.parsedSize - a.parsedSize)
        .slice(0, 10)
        .map((f) => ({
          name: f.filename,
          size: f.parsedSize,
          gzip: f.gzipSize,
          brotli: f.brotliSize,
          isEntry: f.isEntry,
        })),
    };

    const existingFiles = fs
      .readdirSync(historyDir)
      .filter((f) => f.endsWith('.json'))
      .sort()
      .reverse();

    if (existingFiles.length > 0) {
      const lastFile = existingFiles[0];
      const lastSnapshot: BundleSnapshot = JSON.parse(fs.readFileSync(path.join(historyDir, lastFile), 'utf-8'));

      if (
        lastSnapshot.totalSize === snapshot.totalSize &&
        lastSnapshot.totalGzip === snapshot.totalGzip &&
        lastSnapshot.entrySize === snapshot.entrySize
      ) {
        return;
      }
    }

    const filename = timestamp.replace(/:/g, '-').replace(/\..+/, '') + '.json';
    const filepath = path.join(historyDir, filename);

    fs.writeFileSync(filepath, JSON.stringify(snapshot, null, 2));

    const files = fs
      .readdirSync(historyDir)
      .filter((f) => f.endsWith('.json'))
      .sort()
      .reverse();
    if (files.length > MAX_HISTORY_FILES) {
      files.slice(MAX_HISTORY_FILES).forEach((f) => {
        fs.unlinkSync(path.join(historyDir, f));
      });
    }
  } catch (error) {
    console.error('Failed to save bundle history:', (error as Error).message);
  }
}

export function loadBundleHistory(dateFilter: string | boolean, historyDir: string): BundleSnapshot | null {
  try {
    if (!fs.existsSync(historyDir)) {
      return null;
    }

    const files = fs
      .readdirSync(historyDir)
      .filter((f) => f.endsWith('.json'))
      .sort()
      .reverse();

    if (files.length === 0) {
      return null;
    }

    let targetFile: string;
    if (dateFilter === true) {
      targetFile = files[1] || files[0];
    } else if (dateFilter) {
      targetFile = files.find((f) => f.includes(dateFilter as string)) || files[1] || files[0];
    } else {
      targetFile = files[0];
    }

    const filepath = path.join(historyDir, targetFile);
    return JSON.parse(fs.readFileSync(filepath, 'utf-8')) as BundleSnapshot;
  } catch (error) {
    console.error('Failed to load bundle history:', error);
    throw error;
  }
}
