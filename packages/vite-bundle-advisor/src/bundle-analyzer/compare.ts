import type { BundleSnapshot, SizeUnit } from './types.js';
import { formatSize } from './utils.js';

export function compareBundles(current: BundleSnapshot, previous: BundleSnapshot, unit: SizeUnit): void {
  console.log('\n' + '='.repeat(80));
  console.log('BUNDLE SIZE COMPARISON');
  console.log('='.repeat(80) + '\n');

  const prevDate = new Date(previous.timestamp).toLocaleString();
  console.log(`Comparing with build from: ${prevDate}\n`);

  const entryDiff = current.entrySize - previous.entrySize;
  const entryPercentNum = (entryDiff / previous.entrySize) * 100;
  const entryPercent = entryPercentNum.toFixed(1);
  const entryStatus = entryDiff > 0 ? '⚠️' : entryDiff < 0 ? '✅' : '➖';

  console.log(
    `Entry Bundle: ${formatSize(previous.entrySize, unit)} ${unit} → ${formatSize(current.entrySize, unit)} ${unit}`,
  );
  console.log(
    `  Change: ${entryDiff > 0 ? '+' : ''}${formatSize(entryDiff, unit)} ${unit} (${entryPercentNum > 0 ? '+' : ''}${entryPercent}%) ${entryStatus}\n`,
  );

  const totalDiff = current.totalSize - previous.totalSize;
  const totalPercentNum = (totalDiff / previous.totalSize) * 100;
  const totalPercent = totalPercentNum.toFixed(1);
  const totalStatus = totalDiff > 0 ? '⚠️' : totalDiff < 0 ? '✅' : '➖';

  console.log(
    `Total Bundle: ${formatSize(previous.totalSize, unit)} ${unit} → ${formatSize(current.totalSize, unit)} ${unit}`,
  );
  console.log(
    `  Change: ${totalDiff > 0 ? '+' : ''}${formatSize(totalDiff, unit)} ${unit} (${totalPercentNum > 0 ? '+' : ''}${totalPercent}%) ${totalStatus}\n`,
  );

  const chunkChanges: Array<{ name: string; diff: number; percentNum: number; prevSize: number; currSize: number }> =
    [];
  current.chunks.forEach((chunk) => {
    const prevChunk = previous.chunks.find((c) => c.name === chunk.name);
    if (prevChunk) {
      const diff = chunk.size - prevChunk.size;
      const percentNum = (diff / prevChunk.size) * 100;
      if (Math.abs(diff) > 1000) {
        chunkChanges.push({
          name: chunk.name,
          diff,
          percentNum,
          prevSize: prevChunk.size,
          currSize: chunk.size,
        });
      }
    }
  });

  if (chunkChanges.length > 0) {
    console.log('\nChunk Size Changes:\n');
    console.log(`Chunk Name                     | Previous  | Current   | Change    | %`);
    console.log('-------------------------------|-----------|-----------|-----------|----------');
    chunkChanges
      .sort((a, b) => Math.abs(b.diff) - Math.abs(a.diff))
      .forEach((change) => {
        const status = change.diff > 0 ? '⚠️' : '✅';
        const percentStr = change.percentNum.toFixed(1);
        const chunkName = change.name
          .substring(change.name.lastIndexOf('/') + 1)
          .padEnd(30)
          .substring(0, 30);
        const prevSize = formatSize(change.prevSize, unit).padStart(9);
        const currSize = formatSize(change.currSize, unit).padStart(9);
        const diffStr = `${change.diff > 0 ? '+' : ''}${formatSize(change.diff, unit)}`.padStart(9);
        const percentPadded = `${change.percentNum > 0 ? '+' : ''}${percentStr}%`.padStart(8);
        console.log(`${chunkName} | ${prevSize} | ${currSize} | ${diffStr} | ${percentPadded} ${status}`);
      });
    console.log('');
  } else {
    console.log('\n✅ No significant chunk changes detected.\n');
  }
}
