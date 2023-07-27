import { useLoaderData } from '@remix-run/react';

import { getPosts } from '~/utils/post';
import type { Post } from '~/utils/post';
import { type LoaderFunction } from '@remix-run/node';
import { TextNavLink } from '~/components/TextNavLink/TextNavLink';
import { Box, List, PageBlock } from '@cutting/component-library';

export const loader: LoaderFunction = async () => {
  return getPosts();
};

export default function Posts() {
  const posts = useLoaderData<Post[]>();

  return (
    <Box marginTop="xxxlarge" display="flex" justifyContent="center">
      <PageBlock>
        <List type="none">
          {posts.map((post) => (
            <TextNavLink key={post.slug} underline to={`/posts/${post.slug}`}>
              {post.title}
            </TextNavLink>
          ))}
        </List>
      </PageBlock>
    </Box>
  );
}
