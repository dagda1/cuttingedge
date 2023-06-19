import { formatSlug, getFileBySlug, getFiles } from '../../util/mdx/mdx';
import type { Post } from '../../types';
import { MDXLayoutRenderer } from '../../components/MDX/MDX';

export default function Blog({ post }: { post: Post }): JSX.Element {
  const { mdxSource, frontMatter } = post;

  return <MDXLayoutRenderer mdxSource={mdxSource} frontMatter={frontMatter} />;
}

export async function getStaticPaths(): Promise<{
  paths: {
    params: {
      slug: string[];
    };
  }[];
  fallback: boolean;
}> {
  const posts = getFiles();
  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p).split('/'),
      },
    })),
    fallback: false,
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getStaticProps({ params }: any): Promise<{ props: { post: Post } }> {
  // const allPosts = await getAllFilesFrontMatter();
  // TODO: add previous and next
  // const postIndex = allPosts.findIndex((post) => formatSlug(post.slug) === params.slug.join('/'));
  // const prev = allPosts[postIndex + 1] || null;
  // const next = allPosts[postIndex - 1] || null;
  const post = await getFileBySlug(params.slug.join('/'));

  // TODO: add rss
  // if (allPosts.length > 0) {
  //   const rss = generateRss(allPosts);
  //   fs.writeFileSync('./public/feed.xml', rss);
  // }

  return { props: { post } };
}
