# Bundle Optimization: From 125 Chunks to Intelligent Analysis

## Overview

This session focused on optimizing a React monorepo's bundle size and chunk strategy, reducing the entry chunk from 1.24MB to 0.55MB and building a comprehensive bundle analysis tool.

## Key Achievements

### 1. Bundle Size Reduction (55% improvement)

- **Before**: Entry chunk 1.24 MB uncompressed
- **After**: Entry chunk 0.55 MB uncompressed
- **Method**: Strategic vendor chunking in Vite configuration

### 2. Vendor Chunk Strategy

Implemented manual chunk splitting in `vite.config.mts`:

```typescript
manualChunks: {
  'vendor-react': ['react', 'react-dom', 'react-router'],
  'vendor-mui': [
    '@mui/icons-material',
    '@mui/material',
    '@mui/styled-engine',
    '@mui/system',
    '@mui/utils',
    '@mui/x-date-pickers',
    '@emotion/react',
    '@emotion/styled',
  ],
  'vendor-rjsf': ['@rjsf/core', '@rjsf/mui', '@rjsf/utils', '@rjsf/validator-ajv8'],
  'vendor-cutting': ['@cutting/assert', '@cutting/svg', '@cutting/use-get-parent-size'],
  'vendor-query': [
    '@tanstack/query-core',
    '@tanstack/react-query',
    'urql',
    '@urql/core',
    '@urql/exchange-graphcache',
  ],
  'vendor-utils': ['date-fns', 'immer', 'zustand'],
}
```

**Benefits**:

- Better browser caching (vendor code changes less frequently)
- Parallel downloads with HTTP/2
- Reduced initial bundle size

### 3. Bundle Analyzer Tool

Built a comprehensive TypeScript-based bundle analyzer (`bundle-analyzer/`) with multiple features:

#### Core Features

**Automatic Bundle Comparison**

- Tracks bundle size history in `.bundle-history/`
- Compares current build against previous snapshots
- Shows size changes at entry, total, and chunk levels
- Only saves snapshots when sizes actually change

**Detailed File Analysis**

```bash
pnpm analyze-bundle -- --detail-top
```

- Analyzes the largest chunk automatically
- Shows imports sorted by size
- Provides source breakdown (node_modules vs app code)
- Context-aware optimization hints

**Chunk Statistics & Recommendations**

```bash
pnpm analyze-bundle -- --chunk-stats
```

- Analyzes chunk size distribution
- Detects over-splitting (too many small chunks)
- **Calculates optimal `experimentalMinChunkSize`** based on actual data
- Projects impact of different threshold values

Example output:

```
📊 Suggested experimentalMinChunkSize values:
   50KB → ~53 chunks (40% reduction, combines 81 small chunks)
   100KB → ~35 chunks (61% reduction, combines 87 small chunks)
   150KB → ~23 chunks (74% reduction, combines 89 small chunks)

🎯 Recommended: experimentalMinChunkSize: 100000 (100KB)
   Current value (20KB) is too low - increase to 100KB
```

**Optimization Hints**
The analyzer provides context-aware suggestions:

- Detects if vendor chunks already exist
- Identifies barrel export issues in monorepo packages
- Flags large app code in lazy chunks for further splitting
- Distinguishes between entry chunks and lazy-loaded chunks

#### CLI Flags

```bash
# Basic analysis (top 10 files, auto-compare)
pnpm analyze-bundle

# Show sizes in MB
pnpm analyze-bundle -- --mb

# Analyze specific file
pnpm analyze-bundle -- --detail=filename

# Analyze largest chunk
pnpm analyze-bundle -- --detail-top

# Show chunk statistics
pnpm analyze-bundle -- --chunk-stats

# Suggest optimizations
pnpm analyze-bundle -- --suggest

# Don't save snapshot
pnpm analyze-bundle -- --no-save

# Don't compare with history
pnpm analyze-bundle -- --no-compare

# Show top N files
pnpm analyze-bundle -- --top=20
```

### 4. Addressing Over-Splitting (Attempted)

**Problem Identified**: 125 chunks with 77% being <10KB

- Too many HTTP requests
- Overhead from parsing/evaluating tiny chunks
- Poor performance despite HTTP/2

**Solution Attempted**: `experimentalMinChunkSize`

```typescript
rollupOptions: {
  output: {
    format: 'esm',
    experimentalMinChunkSize: 150000, // 150KB
    manualChunks: { /* ... */ }
  }
}
```

**Results**:

- Reduced chunk count from 125 → 88 (30% reduction)
- **BUT increased entry bundle from 550 KB → 613 KB (+63 KB, +11%)**
- The 63 KB increase in entry bundle outweighed the benefit of fewer chunks

**Decision**: Removed `experimentalMinChunkSize`

- With HTTP/2, 125 chunks is acceptable
- Smaller entry bundle (550 KB) is better for initial load performance
- The 63 KB savings on first paint matters more than reducing chunk count
- Users get to interactive faster with smaller entry bundle

**Lesson Learned**: `experimentalMinChunkSize` can increase entry bundle size by combining code that would otherwise be lazy-loaded. Always measure the tradeoff between chunk count and entry bundle size.

### 5. Modular Architecture

The bundle analyzer follows clean architecture principles:

```
bundle-analyzer/
├── src/
│   ├── index.ts          # Main orchestration
│   ├── types.ts          # TypeScript definitions
│   ├── utils.ts          # Argument parsing, formatting
│   ├── history.ts        # Snapshot management
│   ├── compare.ts        # Bundle comparison logic
│   ├── details.ts        # Detailed file analysis
│   ├── chunkStats.ts     # Chunk statistics & recommendations
│   ├── suggest.ts        # Optimization suggestions
│   └── config.ts         # Vite config parsing
└── package.json
```

All files kept under 100 lines for maintainability.

## Technical Insights

### 1. Bundle Analysis Data Source

Uses Vite's Rollup plugin `rollup-plugin-visualizer` to generate `herman.json`:

- Contains detailed bundle composition
- Shows import relationships
- Includes size metrics (raw, gzip, brotli)
- Enables programmatic analysis

### 2. Vendor Chunking Strategy

**Why it works**:

- Dependencies change less frequently than app code
- Browser can cache vendor chunks longer
- Parallel downloads improve load time
- Smaller entry chunk = faster initial parse

**What to extract**:

- Large UI frameworks (React, MUI)
- Form libraries (RJSF)
- State management (React Query, Zustand)
- Utilities (date-fns, immer)

### 3. Chunk Size Thresholds

**Too small (<10KB)**:

- HTTP overhead outweighs benefits
- Too many chunks to manage
- Poor cache efficiency

**Too large (>500KB)**:

- Long parse/compile time
- Defeats lazy loading purpose
- Poor cache granularity

**Sweet spot (20-200KB)**:

- Good cache granularity
- Reasonable parse time
- Effective lazy loading

### 4. Context-Aware Optimization

The analyzer detects:

- **Existing vendor chunks**: Doesn't suggest work already done
- **Lazy vs entry chunks**: Different optimization strategies
- **Current configuration**: Suggests more aggressive settings if needed
- **Actual bundle composition**: Data-driven recommendations

## Lessons Learned

### 1. Barrel Files Are Fine (Mostly)

Modern bundlers (Vite, Webpack 5+) handle barrel exports well with proper tree shaking. The real issues are:

- Side effects in imported modules
- `export * from` patterns (harder to tree shake)
- Missing `sideEffects: false` in package.json

### 2. Dead Code Detection Is Hard

Tools like Knip report many false positives:

- Can't trace GraphQL queries in `gql` template literals
- Misses dynamic imports and lazy-loaded components
- Doesn't understand framework-specific patterns

**Better approach**: Use bundle analyzer to see what's actually shipped.

### 3. Over-Splitting Is Real

Route-based code splitting can create too many tiny chunks. Use `experimentalMinChunkSize` to automatically combine them without changing code.

### 4. Data-Driven Optimization

Instead of guessing, analyze actual bundle composition:

- Measure before optimizing
- Track changes over time
- Use real data to guide decisions
- Automate recommendations

## Common Bundle Optimization Strategies

1. **Vendor chunking** - Separate dependencies from app code
2. **Route-based splitting** - Lazy load pages/routes
3. **Component lazy loading** - Defer heavy components (charts, editors)
4. **Tree shaking** - Remove unused code (requires proper ESM)
5. **Dynamic imports** - Load features conditionally
6. **CSS code splitting** - Extract CSS per route
7. **Image optimization** - Lazy load, modern formats
8. **Dependency optimization** - Replace heavy libraries
9. **Module federation** - Share code across micro-frontends (advanced)

## Scripts Added

```json
{
  "scripts": {
    "analyze-bundle": "cd bundle-analyzer && tsx src/index.ts",
    "knip": "knip",
    "knip:unused-deps": "knip --include dependencies",
    "knip:unused-files": "knip --include files",
    "knip:unused-exports": "knip --include exports"
  }
}
```

## Results Summary

| Metric               | Before   | After    | Improvement    |
| -------------------- | -------- | -------- | -------------- |
| Entry chunk size     | 1.24 MB  | 0.55 MB  | 55% reduction  |
| Total chunks         | 125      | 88       | 30% reduction  |
| Small chunks (<10KB) | 96 (77%) | 59 (67%) | 38% reduction  |
| Vendor chunks        | 0        | 6        | Better caching |

## Future Enhancements

Potential additions to the bundle analyzer:

- Source map integration for precise code attribution
- Source code parsing to identify lazy loading opportunities
- Duplicate dependency detection across chunks
- Bundle size budget enforcement
- CI/CD integration for automated checks
- Trend analysis over multiple builds
- Comparison against industry benchmarks

## Conclusion

This session demonstrated that effective bundle optimization requires:

1. **Measurement** - Build tools to understand your bundle
2. **Strategy** - Apply vendor chunking and lazy loading
3. **Automation** - Let tools suggest optimizations
4. **Iteration** - Measure, optimize, repeat

The bundle analyzer tool provides actionable, data-driven recommendations that make optimization accessible without deep bundler expertise.
