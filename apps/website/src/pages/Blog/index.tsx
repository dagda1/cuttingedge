import { Heading, Inline, PageBlock, Stack, Text, TextLink } from '@cutting/component-library';

import { ApplicationLayout } from '~/layouts/ApplicationLayout';

import { posts } from './posts';

export function Blog(): JSX.Element {
  return (
    <ApplicationLayout heading="Published blog posts">
      <PageBlock>
        <Stack space="medium">
          <Inline space="none">
            <Text>
              I have blogged professionally for&nbsp;
              <TextLink href="https://blog.logrocket.com/author/paulcowan/">Logrocket</TextLink>
            </Text>
          </Inline>
          <Inline space="none">
            <Text>
              My latest blog is&nbsp;
              <TextLink href="https://frontendrescue.com/posts">here</TextLink>
            </Text>
          </Inline>
          <Inline space="none">
            <Text>
              My old personal blog is&nbsp;
              <TextLink href="https://thesoftwaresimpleton.com/">here</TextLink>
            </Text>
          </Inline>
          {posts.map((post, i) => (
            <Stack space="medium" key={i}>
              <TextLink href={post.link} blank={false}>
                <Heading level="2">{post.title}</Heading>
              </TextLink>
              <Text component="p">{post.summary}</Text>
              <p>
                <TextLink href={post.link} blank={false}>
                  <Text>Read More</Text>
                </TextLink>
              </p>
            </Stack>
          ))}
        </Stack>
      </PageBlock>
    </ApplicationLayout>
  );
}
export default Blog;
