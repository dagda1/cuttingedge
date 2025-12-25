import { execSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

import type { Plugin } from 'vite';

interface BundleFile {
  label: string;
  statSize: number;
  parsedSize: number;
  gzipSize: number;
}

interface AnalyzerData {
  label: string;
  statSize: number;
  parsedSize: number;
  gzipSize: number;
  groups?: AnalyzerData[];
}

function flattenFiles(data: AnalyzerData, files: BundleFile[] = []): BundleFile[] {
  if (data.groups && data.groups.length > 0) {
    data.groups.forEach((group) => flattenFiles(group, files));
  } else {
    files.push({
      label: data.label,
      statSize: data.statSize,
      parsedSize: data.parsedSize,
      gzipSize: data.gzipSize,
    });
  }
  return files;
}

function formatBytes(bytes: number): string {
  if (bytes === 0) {
    return '0 B';
  }
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / Math.pow(k, i)).toFixed(2)} ${sizes[i]}`;
}

export default function bundleInspector(): Plugin {
  const plugin: Plugin = {
    name: 'vite-bundle-inspector',
    apply: 'build',
    closeBundle(error?: Error) {
      if (error) {
        console.error('❌ Build failed, skipping bundle analysis');
        return;
      }

      try {
        const outputPath = join(process.cwd(), 'dist');
        const statsFile = join(outputPath, 'herman.json');

        console.log('\n🔍 Running bundle analysis...');

        execSync('npx vite-bundle-analyzer --analyzerMode=json --openAnalyzer=false --fileName=herman', {
          stdio: 'inherit',
        });

        if (!existsSync(statsFile)) {
          console.error('❌ Stats file not found:', statsFile);
          return;
        }

        const statsData = JSON.parse(readFileSync(statsFile, 'utf-8'));
        const allFiles = flattenFiles(statsData);

        const largest = allFiles.sort((a, b) => b.parsedSize - a.parsedSize).slice(0, 10);

        console.log('\n📊 Top 10 Largest Files:\n');
        largest.forEach((file, index) => {
          console.log(
            `${index + 1}. ${file.label}\n` +
              `   Parsed: ${formatBytes(file.parsedSize)} | ` +
              `Gzip: ${formatBytes(file.gzipSize)}\n`,
          );
        });
      } catch (error) {
        console.error('❌ Bundle analysis failed:', error);
      }
    },
  } as Plugin;

  return plugin;
}
