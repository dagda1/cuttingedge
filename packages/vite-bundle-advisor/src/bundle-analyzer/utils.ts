import type { ParsedArgs, SizeUnit } from './types.js';

export function formatSize(bytes: number | undefined, unit: SizeUnit): string {
  if (!bytes) {
    return 'N/A';
  }
  const divisor = unit === 'MB' ? 1024 * 1024 : 1024;
  return (bytes / divisor).toFixed(2);
}

export function extractPackageName(label: string): string {
  const match = label.match(/node_modules\.pnpm\/([^@\/]+(?:@[^\/]+)?)/) || label.match(/node_modules\/([^@\/]+)/);
  return match ? match[1] : label;
}

export function parseArgs(): ParsedArgs {
  const args = process.argv.slice(2);
  const unit = args.find((arg) => arg === '--mb' || arg === '--kb') || '--kb';
  const detailArg = args.find((arg) => arg.startsWith('--detail'));
  const detailFile = detailArg?.includes('=') ? detailArg.split('=')[1] : null;
  const detailAll = Boolean(detailArg && !detailArg.includes('='));
  const detailTop = args.includes('--detail-top');
  const suggest = args.includes('--suggest');
  const chunkStats = args.includes('--chunk-stats');
  const noSave = args.includes('--no-save');
  const noCompare = args.includes('--no-compare');
  const compareArg = args.find((arg) => arg.startsWith('--compare'));
  const compare = noCompare ? false : compareArg ? (compareArg.includes('=') ? compareArg.split('=')[1] : true) : true;
  const topArg = args.find((arg) => arg.startsWith('--top='));
  const topN = topArg ? parseInt(topArg.split('=')[1], 10) : 10;
  return {
    unit: (unit === '--mb' ? 'MB' : 'KB') as SizeUnit,
    detailFile,
    detailAll,
    detailTop,
    suggest,
    chunkStats,
    noSave,
    compare,
    topN,
  };
}
