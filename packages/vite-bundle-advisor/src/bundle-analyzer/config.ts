import fs from 'fs';

import type { ManualChunks } from './types.js';

export function getExistingManualChunks(viteConfigPath: string): ManualChunks | null {
  try {
    const viteConfig = fs.readFileSync(viteConfigPath, 'utf-8');
    const manualChunksMatch = viteConfig.match(/manualChunks:\s*\{([^}]+)\}/s);
    if (!manualChunksMatch) {
      return null;
    }

    const chunks: ManualChunks = {};
    const content = manualChunksMatch[1];
    const chunkPattern = /'([^']+)':\s*\[([^\]]+)\]/g;
    let match: RegExpExecArray | null;

    while ((match = chunkPattern.exec(content)) !== null) {
      const chunkName = match[1];
      const deps = match[2]
        .split(',')
        .map((d) => d.trim().replace(/['"]/g, ''))
        .filter((d) => d.length > 0);
      chunks[chunkName] = deps;
    }

    return Object.keys(chunks).length > 0 ? chunks : null;
  } catch (error) {
    console.error('Failed to get existing manual chunks:', error);
    throw error;
  }
}
