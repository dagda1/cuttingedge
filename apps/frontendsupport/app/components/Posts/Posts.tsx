import { Box, Heading, Inline, List, PageBlock, Stack, Text, vars } from '@cutting/component-library';
import { Image } from '@unpic/react';
import { TextNavLink } from '../TextNavLink/TextNavLink';
import { DateTime } from 'luxon';
import type { FrontMatterMeta } from '~/types';
import * as styles from './Posts.css';

interface PostsProps {
  posts: FrontMatterMeta[];
}

export function Posts({ posts }: PostsProps): JSX.Element {
  return (
    <Box style={{ marginTop: '6rem' }} display="flex" justifyContent="center">
      <PageBlock>
        <Stack space="medium">
          <Heading level="1">Leading from the front(end)</Heading>
          <List type="none">
            {posts.map((post) => (
              <Box
                key={post.slug}
                padding={{ mobile: 'small', tablet: 'none' }}
                style={{ border: `1px solid ${vars.foregroundColor.primary}` }}
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
        </Stack>
        <Box className={styles.background}></Box>
      </PageBlock>
    </Box>
  );
}
