import type { PostData } from '@cutting/markdown';
import { type LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { Posts } from '../components/Posts/Posts.js';
import { getPosts } from '../utils/post.js';

export const loader: LoaderFunction = async () => {
  return getPosts();
};

export default function PostsHome(): JSX.Element {
  const posts = useLoaderData<PostData[]>();

  return <Posts posts={posts} />;
}
