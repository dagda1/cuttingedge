import type { BundleFile, SizeUnit } from './types.js';
import { formatSize } from './utils.js';

export function showChunkStats(data: BundleFile[], unit: SizeUnit): void {
  const chunks = data.filter((f) => !f.isAsset || f.filename.endsWith('.js'));
  const totalChunks = chunks.length;
  const smallChunks = chunks.filter((f) => f.parsedSize < 10000);
  const mediumChunks = chunks.filter((f) => f.parsedSize >= 10000 && f.parsedSize < 100000);
  const largeChunks = chunks.filter((f) => f.parsedSize >= 100000);

  console.log('='.repeat(80));
  console.log('CHUNK STATISTICS');
  console.log('='.repeat(80) + '\n');

  console.log(`Total chunks: ${totalChunks}\n`);
  console.log(
    `Small chunks (<10KB): ${smallChunks.length} (${((smallChunks.length / totalChunks) * 100).toFixed(1)}%)`,
  );
  console.log(
    `Medium chunks (10-100KB): ${mediumChunks.length} (${((mediumChunks.length / totalChunks) * 100).toFixed(1)}%)`,
  );
  console.log(
    `Large chunks (>100KB): ${largeChunks.length} (${((largeChunks.length / totalChunks) * 100).toFixed(1)}%)\n`,
  );

  if (smallChunks.length > 0) {
    console.log('Small chunks:');
    const sortedSmallChunks = [...smallChunks].sort((a, b) => b.parsedSize - a.parsedSize);
    sortedSmallChunks.forEach((chunk) => {
      console.log(`  ${chunk.filename.padEnd(50)} ${formatSize(chunk.parsedSize, unit).padStart(9)} ${unit}`);
    });
    console.log('');
  }

  console.log('💡 Recommendations:');
  if (totalChunks > 50) {
    console.log('  ⚠️  You have >50 chunks - consider combining some lazy routes');
  } else if (totalChunks > 20) {
    console.log('  ℹ️  You have 20-50 chunks - monitor performance, likely okay with HTTP/2');
  } else {
    console.log('  ✅ Chunk count is optimal (<20 chunks)');
  }

  if (smallChunks.length > totalChunks * 0.3) {
    console.log(`  ⚠️  ${smallChunks.length} small chunks (<10KB) - consider combining related chunks`);
    console.log('');
    console.log('  💡 Option to consider: experimentalMinChunkSize');
    console.log('     This Rollup option can combine small chunks, but has tradeoffs:');
    console.log('');

    const thresholds = [20000, 50000, 100000];
    const projections = thresholds.map((threshold) => {
      const wouldBeCombined = chunks.filter((c) => c.parsedSize < threshold).length;
      const estimatedChunks = totalChunks - Math.floor(wouldBeCombined * 0.6);
      return { threshold, estimatedChunks, wouldBeCombined };
    });

    console.log('  📊 Potential experimentalMinChunkSize values:');
    projections.forEach(({ threshold, estimatedChunks, wouldBeCombined }) => {
      const thresholdKB = (threshold / 1000).toFixed(0);
      const reduction = ((1 - estimatedChunks / totalChunks) * 100).toFixed(0);
      console.log(
        `     ${thresholdKB}KB → ~${estimatedChunks} chunks (${reduction}% reduction, combines ${wouldBeCombined} small chunks)`,
      );
    });

    console.log('');
    console.log('  ⚠️  Warning: This may INCREASE your entry bundle size!');
    console.log('     - Combines lazy-loaded code into entry bundle');
    console.log('     - Test with/without and compare entry bundle size');
    console.log('     - Smaller entry bundle usually better than fewer chunks with HTTP/2');
    console.log('');
    console.log('  ℹ️  Note: experimentalMinChunkSize respects explicit dynamic imports (React.lazy)');
    console.log('     Reductions may be less than projected if you use route-based code splitting');
  }
}
