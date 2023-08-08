import { join } from './path.server';
import { getBlogPosts, bundleMarkdown } from './markdown.server';

export async function getPost(slug: string) {
  const postsRootPath = join(__dirname, `./blog-posts`);

  return bundleMarkdown(join(postsRootPath, `${slug}/index.md`));
}

export async function getPosts() {
  const postsRootPath = join(__dirname, `./blog-posts`);

  return getBlogPosts(postsRootPath);
}
