import { posts } from './posts';
import { ContentBlock, ExternalLink, Inline, Stack, Text } from '@cutting/component-library';
import { ApplicationLayout } from '~/layouts/ApplicationLayout';
import { Heading } from '@cutting/component-library';

export function Blog(): JSX.Element {
  return (
    <ApplicationLayout heading="Published blog posts">
      <ContentBlock width="large">
        <Stack space="medium">
          <Inline space="none">
            <Text>I blog professionally for&nbsp;</Text>
            <ExternalLink href="https://blog.logrocket.com/author/paulcowan/">Logrocket</ExternalLink>
          </Inline>
          <Inline space="none">
            <Text>My personal blog is&nbsp;</Text>
            <ExternalLink href="https://thesoftwaresimpleton.com/">here</ExternalLink>
          </Inline>
          {posts.map((post, i) => (
            <Stack space="medium" key={i}>
              <ExternalLink href={post.link} blank={false}>
                <Heading level="2">{post.title}</Heading>
              </ExternalLink>
              <Text component="p">{post.summary}</Text>
              <p>
                <ExternalLink href={post.link} blank={false}>
                  Read More
                </ExternalLink>
              </p>
            </Stack>
          ))}
        </Stack>
      </ContentBlock>
    </ApplicationLayout>
  );
}
export default Blog;
