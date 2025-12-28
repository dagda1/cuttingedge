import { useEffect, useState } from 'react';

import { Posts } from '../components/Posts/Posts';
import type { PostData } from '../types/post';

export default function PostsHome(): JSX.Element {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    fetch('/posts/posts-list.json')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  return <Posts posts={posts} />;
}
