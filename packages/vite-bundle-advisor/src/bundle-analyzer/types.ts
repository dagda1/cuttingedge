export type SizeUnit = 'KB' | 'MB';

export interface BundleFile {
  filename: string;
  parsedSize: number;
  gzipSize?: number;
  brotliSize?: number;
  isEntry?: boolean;
  isAsset?: boolean;
  imports?: string[];
  source?: BundleSource[];
  groups?: BundleSource[];
}

export interface BundleSource {
  label: string;
  parsedSize: number;
  gzipSize?: number;
  brotliSize?: number;
  source?: BundleSource[];
  groups?: BundleSource[];
}

export interface BundleSnapshot {
  timestamp: string;
  totalSize: number;
  totalGzip: number;
  totalBrotli: number;
  entrySize: number;
  entryGzip: number;
  entryBrotli: number;
  chunks: Array<{
    name: string;
    size: number;
    gzip?: number;
    brotli?: number;
    isEntry?: boolean;
  }>;
}

export interface ParsedArgs {
  unit: SizeUnit;
  detailFile: string | null;
  detailAll: boolean;
  detailTop: boolean;
  suggest: boolean;
  noSave: boolean;
  compare: string | boolean;
  topN: number;
  chunkStats: boolean;
}

export interface ManualChunks {
  [key: string]: string[];
}
