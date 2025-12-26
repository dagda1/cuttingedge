import type { BundleFile, SizeUnit } from './types.js';
import { formatSize } from './utils.js';

export function analyzeFileDetails(data: BundleFile[], filename: string, unit: SizeUnit): void {
  const file = data.find((item) => item.filename.includes(filename));
  const hasVendorChunks = data.some((f) => f.filename.includes('vendor-'));

  if (!file) {
    console.error(`\nFile not found: ${filename}`);
    return;
  }

  console.log(`\n${'='.repeat(80)}`);
  console.log(`Detailed Analysis: ${file.filename}`);
  console.log(`${'='.repeat(80)}\n`);

  console.log(`Total Size: ${formatSize(file.parsedSize, unit)} ${unit}`);
  console.log(`Gzipped: ${formatSize(file.gzipSize, unit)} ${unit}`);
  console.log(`Brotli: ${formatSize(file.brotliSize, unit)} ${unit}`);
  console.log(`Entry Point: ${file.isEntry ? 'Yes' : 'No'}`);
  console.log(`Asset: ${file.isAsset ? 'Yes' : 'No'}\n`);

  if (file.imports && file.imports.length > 0) {
    console.log(`Imports (${file.imports.length}):\n`);
    console.log(
      `File Name                                          | Size (${unit}) | Gzip (${unit}) | Brotli (${unit})`,
    );
    console.log('---------------------------------------------------|-----------|-----------|-------------');

    const importsWithSize = file.imports.map((imp) => {
      const importedFile = data.find((f) => f.filename === imp);
      return {
        filename: imp,
        size: importedFile?.parsedSize || 0,
        gzip: importedFile?.gzipSize,
        brotli: importedFile?.brotliSize,
      };
    });

    importsWithSize
      .sort((a, b) => b.size - a.size)
      .forEach((imp) => {
        const fileName = imp.filename
          .substring(imp.filename.lastIndexOf('/') + 1)
          .padEnd(50)
          .substring(0, 50);
        const size = formatSize(imp.size, unit).padStart(9);
        const gzip = formatSize(imp.gzip, unit).padStart(9);
        const brotli = formatSize(imp.brotli, unit).padStart(11);
        console.log(`${fileName} | ${size} | ${gzip} | ${brotli}`);
      });
    console.log('');
  }

  if (file.source && file.source.length > 0) {
    console.log(`Top-level Source Breakdown:\n`);
    console.log(`Label                          | Size (${unit}) | Gzip (${unit}) | % of Total`);
    console.log('-------------------------------|-----------|-----------|----------');

    const sortedSources = [...file.source].sort((a, b) => b.parsedSize - a.parsedSize);

    sortedSources.forEach((src) => {
      const size = formatSize(src.parsedSize, unit);
      const gzip = formatSize(src.gzipSize, unit);
      const percent = ((src.parsedSize / file.parsedSize) * 100).toFixed(1);
      const label = src.label.padEnd(30).substring(0, 30);
      console.log(`${label} | ${size.padStart(9)} | ${gzip.padStart(9)} | ${percent.padStart(8)}%`);
    });

    console.log('\n');
    console.log('💡 Optimization Hints:');

    const nodeModulesSource = sortedSources.find((s) => s.label.includes('node_modules'));
    if (nodeModulesSource) {
      const percent = ((nodeModulesSource.parsedSize / file.parsedSize) * 100).toFixed(1);
      const nmPercent = parseFloat(percent);

      if (file.isEntry && nmPercent > 30) {
        if (hasVendorChunks) {
          console.log(`  • ${percent}% from node_modules in entry chunk`);
          console.log(`    💡 Some dependencies remain in entry - Consider adding more vendor chunks`);
        } else {
          console.log(`  • ${percent}% from node_modules - Extract to vendor chunks for better caching`);
        }
      } else if (!file.isEntry && nmPercent > 50) {
        console.log(`  • ${percent}% from node_modules in lazy chunk`);
        console.log(`    ✅ This is fine - chunk is lazy loaded when needed`);
      } else {
        console.log(`  • ${percent}% from node_modules`);
        if (nmPercent > 70) {
          console.log(`    ⚠️  Very high dependency usage - Review if all imports are necessary`);
        }
      }
    }

    const packagesSource = sortedSources.find((s) => s.label === 'packages');
    if (packagesSource) {
      const percent = ((packagesSource.parsedSize / file.parsedSize) * 100).toFixed(1);
      console.log(`  • ${percent}% from monorepo packages`);
      if (parseFloat(percent) > 30) {
        console.log(`    💡 Check for barrel export issues - ensure you're not importing unused code`);
      }
    }

    const srcSource = sortedSources.find((s) => s.label === 'src');
    if (srcSource) {
      const percent = ((srcSource.parsedSize / file.parsedSize) * 100).toFixed(1);
      console.log(`  • ${percent}% from application code`);
      if (parseFloat(percent) > 50 && !file.isEntry) {
        console.log(`    💡 Large app code in lazy chunk - Consider further splitting if used in multiple routes`);
      }
    }
  }
}
