import { useLoaderData } from '@remix-run/react';
import { getPosts } from '~/utils/post';
import { type LoaderFunction } from '@remix-run/node';

import type { FrontMatter } from '~/types';
import { Posts } from '~/components/Posts/Posts';

export const loader: LoaderFunction = async () => {
  return getPosts();
};

export default function PostsHome() {
  const posts = useLoaderData<FrontMatter['meta'][]>();

  return <Posts posts={posts} />;
}
