import { join, dirname } from './path.server.js';
import { getBlogPosts, bundleMarkdown } from './markdown.server.js';
import { fileURLToPath } from './url.server.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

export async function getPost(slug: string) {
  const postsRootPath = join(__dirname, `./blog-posts`);

  return bundleMarkdown(join(postsRootPath, `${slug}/index.md`));
}

export async function getPosts() {
  const postsRootPath = join(__dirname, `./blog-posts`);

  return getBlogPosts(postsRootPath);
}
