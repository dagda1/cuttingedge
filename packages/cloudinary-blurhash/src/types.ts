export interface SubFolder {
  folders: { path: string }[];
}

export type AssetType = 'image';

type AssetTypes = `${AssetType}s`;

interface SearcResultTotals {
  total_count: number;
  time: number;
}

export interface Resource {
  asset_id: string;
  public_id: string;
  folder: string;
  filename: string;
  format: 'jpg' | 'png';
  version: number;
  resource_type: 'image' | 'video';
  type: 'upload';
  created_at: string;
  uploaded_at: string;
  bytes: number;
  backup_bytes: number;
  width: number;
  height: number;
  aspect_ratio: number;
  pixels: number;
  url: string;
  secure_url: string;
  status: 'active';
  access_mode: 'public';
}

export type SearchResults<A extends AssetTypes> = Record<A, SearcResultTotals> & {
  resources: Resource[];
};

export interface BlurHashImage {
  id: string;
  url: string;
  blurhash: string;
}
