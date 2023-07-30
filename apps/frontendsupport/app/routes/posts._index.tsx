import { useLoaderData } from '@remix-run/react';
import { getPosts } from '~/utils/post';
import { type LoaderFunction } from '@remix-run/node';
import { TextNavLink } from '~/components/TextNavLink/TextNavLink';
import { Box, Heading, Inline, List, PageBlock, vars, Text, Stack } from '@cutting/component-library';
import { Image } from '@unpic/react';
import type { FrontMatter } from '~/types';
import { DateTime } from 'luxon';

export const loader: LoaderFunction = async () => {
  return getPosts();
};

export default function Posts() {
  const posts = useLoaderData<FrontMatter['meta'][]>();

  return (
    <Box style={{ marginTop: '6rem' }} display="flex" justifyContent="center">
      <PageBlock>
        <Heading level="1">Leading from the front(end)</Heading>
        <List type="none">
          {posts.map((post) => (
            <Box
              key={post.slug}
              style={{ border: `1px solid ${vars.foregroundColor.primary}`, paddingRight: vars.space.small }}
            >
              <Inline alignY="center" space="medium">
                {post.image && <Image src={post.image} width={100} height={100} />}
                <Stack space="medium">
                  <Heading level="2">
                    <TextNavLink key={post.slug} underline to={`/posts/${post.slug}`}>
                      {post.title}
                    </TextNavLink>
                  </Heading>
                  <Text component="p">{post.description}</Text>
                  <Text tone="promote">{DateTime.fromISO(post.date).toLocaleString()}</Text>
                </Stack>
              </Inline>
            </Box>
          ))}
        </List>
      </PageBlock>
    </Box>
  );
}
