import { Link, useLoaderData } from '@remix-run/react';

import { getPosts } from '~/utils/post';
import type { Post } from '~/utils/post';
import { type LoaderFunction } from '@remix-run/node';

export const loader: LoaderFunction = async () => {
  return getPosts();
};

export default function Posts() {
  const posts = useLoaderData<Post[]>();

  console.dir(posts);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
