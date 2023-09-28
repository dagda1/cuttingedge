import { Box, Heading, List, PageBlock, Stack, Text, vars } from '@cutting/component-library';
import { TextNavLink } from '../TextNavLink/TextNavLink';
import * as styles from './Posts.css';
import type { PostData } from '@cutting/markdown';
import { LazyLoadedImage } from '../LazyLoadedImage/LazyLoadedImage';

interface PostsProps {
  posts: PostData[];
}

export function Posts({ posts }: PostsProps): JSX.Element {
  return (
    <Box style={{ marginTop: '6rem' }} display="flex" justifyContent="center">
      <PageBlock>
        <Stack space="medium">
          <Heading level="1">leading from the front(end)</Heading>
          <List type="none">
            {posts.map((post) => {
              return (
                <Box
                  key={post.slug}
                  padding={{ mobile: 'small', desktop: 'none' }}
                  style={{ border: `1px solid ${vars.foregroundColor.primary}` }}
                >
                  <Box display={{ mobile: 'block', desktop: 'flex' }} alignItems="center">
                    <Box marginRight="small">
                      {post.image && <LazyLoadedImage loading="lazy" src={post.image} width={150} height={100} />}
                    </Box>
                    <Stack space="medium">
                      <Heading level="2">
                        <TextNavLink key={post.slug} underline to={`/posts/${post.slug}`}>
                          {post.title}
                        </TextNavLink>
                      </Heading>
                      <Box paddingY={{ mobile: 'medium', desktop: 'none' }}>
                        <Text component="p">{post.description}</Text>
                      </Box>
                      <Text tone="promote">{post.formattedDate}</Text>
                    </Stack>
                  </Box>
                </Box>
              );
            })}
          </List>
        </Stack>
        <Box className={styles.background}></Box>
      </PageBlock>
    </Box>
  );
}
