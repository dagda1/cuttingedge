import type { PostData } from '@cutting/markdown';

import { bundleMarkdown, getBlogPosts } from './markdown.server';
import { dirname, join } from './path.server';
import { fileURLToPath } from './url.server';

type MD = ReturnType<typeof bundleMarkdown>;

const __dirname = dirname(fileURLToPath(import.meta.url));

export async function getPost(slug: string): MD {
  const postsRootPath = join(__dirname, `./blog-posts`);

  return bundleMarkdown(join(postsRootPath, `${slug}/index.md`));
}

export async function getPosts(): Promise<PostData[]> {
  const postsRootPath = join(__dirname, `./blog-posts`);

  return getBlogPosts(postsRootPath);
}
