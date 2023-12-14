import { useLoaderData } from '@remix-run/react';
import { getPosts } from '~/utils/post';
import { type LoaderFunction } from '@remix-run/node';
import { Posts } from '~/components/Posts/Posts.js';
import type { PostData } from '@cutting/markdown';

export const loader: LoaderFunction = async () => {
  return getPosts();
};

export default function PostsHome() {
  const posts = useLoaderData<PostData[]>();

  return <Posts posts={posts} />;
}
