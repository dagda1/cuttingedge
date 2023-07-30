import type { ReadTimeResults } from 'reading-time';

export interface FrontMatter {
  meta: {
    slug: string;
    title: string;
    summary: string;
    description: string;
    date: string;
    tags: string[];
    readingTime?: ReadTimeResults;
    fileName?: string;
    image?: string;
  };
}

export type FrontMatterMeta = FrontMatter['meta'];
