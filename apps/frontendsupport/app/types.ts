export type FrontMatterMeta = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  date: string;
  tags: string[];
  fileName?: string;
  image?: string;
};
export interface FrontMatter {
  meta: FrontMatterMeta;
  attributes: {
    meta: FrontMatterMeta;
  };
  filename: string;
}
