import type { BundleFile, BundleSource, ManualChunks, SizeUnit } from './types.js';
import { extractPackageName, formatSize } from './utils.js';

interface LargeDependency {
  name: string;
  size: number;
  gzipSize?: number;
  percent: string;
}

export function findDuplicateDependencies(data: BundleFile[]): Array<{ name: string; count: number }> {
  const depMap = new Map<string, Set<string>>();

  data.forEach((file) => {
    if (file.source) {
      const nodeModules = file.source.find((s) => s.label && s.label.includes('node_modules'));
      if (nodeModules) {
        const dependencies = nodeModules.groups || nodeModules.source || [];
        dependencies.forEach((dep: BundleSource) => {
          const name = extractPackageName(dep.label);
          if (!depMap.has(name)) {
            depMap.set(name, new Set());
          }
          depMap.get(name)!.add(file.filename);
        });
      }
    }
  });

  return Array.from(depMap.entries())
    .filter(([_, files]) => files.size > 1)
    .map(([name, files]) => ({ name, count: files.size }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
}

export function suggestOptimizations(data: BundleFile[], unit: SizeUnit, existingChunks: ManualChunks | null): void {
  console.log('\n' + '='.repeat(80));
  console.log('BUNDLE OPTIMIZATION SUGGESTIONS');
  console.log('='.repeat(80) + '\n');

  const entryFile = data.find((item) => item.isEntry);
  if (!entryFile || !entryFile.source) {
    console.log('No entry file found for analysis.');
    return;
  }

  console.log(
    `Entry Bundle: ${formatSize(entryFile.parsedSize, unit)} ${unit} (${formatSize(entryFile.gzipSize, unit)} ${unit} gzipped)\n`,
  );

  const nodeModulesSource = entryFile.source.find((s) => s.label && s.label.includes('node_modules'));
  if (!nodeModulesSource) {
    console.log('No node_modules dependencies found in entry file.\n');
    console.log('Available sources:', entryFile.source.map((s) => s.label).join(', '));
    return;
  }

  const dependencies = nodeModulesSource.groups || nodeModulesSource.source || [];
  if (dependencies.length === 0) {
    console.log('Node_modules source found but has no nested dependencies.\n');
    return;
  }

  const vendorPercent = ((nodeModulesSource.parsedSize / entryFile.parsedSize) * 100).toFixed(1);
  console.log(`📊 Vendor Dependencies: ${vendorPercent}% of entry bundle\n`);

  const largeDeps: LargeDependency[] = dependencies
    .map((dep: BundleSource) => ({
      name: extractPackageName(dep.label),
      size: dep.parsedSize,
      gzipSize: dep.gzipSize,
      percent: ((dep.parsedSize / entryFile.parsedSize) * 100).toFixed(1),
    }))
    .filter((dep) => dep.size > 50000)
    .sort((a, b) => b.size - a.size);

  if (largeDeps.length > 0) {
    console.log('🎯 Large Dependencies in Entry Bundle:\n');
    largeDeps.forEach((dep) => {
      console.log(`  • ${dep.name}: ${formatSize(dep.size, unit)} ${unit} (${dep.percent}%)`);
    });
    console.log('');
  }

  if (existingChunks) {
    console.log('📦 Current Manual Chunks:\n');
    Object.entries(existingChunks).forEach(([name, deps]) => {
      console.log(`  ${name}: [${deps.join(', ')}]`);
    });
    console.log('\n');
  }

  console.log('💡 Vendor Chunk Analysis:\n');
  analyzeSuggestions(largeDeps, existingChunks, unit);

  const lazyChunks = data
    .filter((f) => !f.isEntry && f.parsedSize > 200000)
    .sort((a, b) => b.parsedSize - a.parsedSize);
  if (lazyChunks.length > 0) {
    console.log('\n✅ Large Lazy-Loaded Chunks (Good!):\n');
    lazyChunks.slice(0, 5).forEach((chunk) => {
      console.log(`  • ${chunk.filename}: ${formatSize(chunk.parsedSize, unit)} ${unit}`);
    });
    console.log('');
  }

  const duplicates = findDuplicateDependencies(data);
  if (duplicates.length > 0) {
    console.log('\n⚠️  Potential Duplicate Dependencies:\n');
    duplicates.forEach((dup) => {
      console.log(`  • ${dup.name} appears in ${dup.count} chunks`);
    });
    console.log('');
  }
}

function analyzeSuggestions(largeDeps: LargeDependency[], existingChunks: ManualChunks | null, unit: SizeUnit): void {
  const suggestions = [
    {
      name: 'vendor-react',
      deps: ['react', 'react-dom', 'react-router'],
      filter: (d: LargeDependency) => ['react', 'react-dom', 'react-router'].includes(d.name),
    },
    {
      name: 'vendor-mui',
      deps: ['@mui/material', '@mui/system', '@mui/icons-material', '@emotion/react', '@emotion/styled'],
      filter: (d: LargeDependency) => d.name.startsWith('@mui') || d.name.startsWith('@emotion'),
    },
    {
      name: 'vendor-query',
      deps: ['@tanstack/react-query', 'urql', '@urql/core', '@urql/exchange-graphcache'],
      filter: (d: LargeDependency) => d.name.includes('react-query') || d.name.includes('urql'),
    },
    {
      name: 'vendor-utils',
      deps: ['date-fns', 'immer', 'zustand'],
      filter: (d: LargeDependency) => ['date-fns', 'immer', 'zustand', 'lodash'].some((u) => d.name.includes(u)),
    },
  ];

  const newSuggestions = suggestions.filter((s) => {
    const matchingDeps = largeDeps.filter(s.filter);
    const isConfigured = existingChunks && existingChunks[s.name];
    return matchingDeps.length > 0 && !isConfigured;
  });

  const configured = suggestions.filter((s) => {
    const matchingDeps = largeDeps.filter(s.filter);
    const isConfigured = existingChunks && existingChunks[s.name];
    return matchingDeps.length > 0 && isConfigured;
  });

  if (newSuggestions.length > 0) {
    console.log('New Suggestions:\n');
    newSuggestions.forEach((s) => {
      const totalSize = largeDeps.filter(s.filter).reduce((sum, d) => sum + d.size, 0);
      console.log(`  ${s.name}: ${JSON.stringify(s.deps)}`);
      console.log(`    → ${formatSize(totalSize, unit)} ${unit}\n`);
    });
  }

  if (configured.length > 0) {
    console.log('✅ Already Optimized:\n');
    configured.forEach((s) => {
      const totalSize = largeDeps.filter(s.filter).reduce((sum, d) => sum + d.size, 0);
      console.log(`  ${s.name}: ${formatSize(totalSize, unit)} ${unit}`);
    });
    console.log('');
  }

  if (newSuggestions.length === 0 && configured.length > 0) {
    console.log('🎉 All recommended vendor chunks are already configured!\n');
  }
}
