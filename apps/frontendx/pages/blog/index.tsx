import { Blog as Posts } from '../../components/Blog/Blog';
import type { Post } from '../../types';
import { getAllFilesFrontMatter } from '../../util/mdx/mdx';

export default function Blog({ posts }: { posts: Post['frontMatter'][] }): JSX.Element {
  return <Posts posts={posts} />;
}

type GetPData<P extends PromiseLike<unknown>> = P extends PromiseLike<infer D> ? D : P;

export async function getStaticProps(): Promise<{
  props: { posts: GetPData<ReturnType<typeof getAllFilesFrontMatter>> };
}> {
  const posts = await getAllFilesFrontMatter();

  return { props: { posts } };
}
