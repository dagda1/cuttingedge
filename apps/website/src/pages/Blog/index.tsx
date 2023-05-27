import { posts } from './posts';
import { ExternalLink } from '@cutting/component-library';
import { ApplicationLayout } from '../../layouts/ApplicationLayout';
import { Heading } from '@cutting/component-library';

export function Blog(): JSX.Element {
  return (
    <ApplicationLayout heading="Published blog posts">
      <p>
        I blog professionally for&nbsp;
        <ExternalLink href="https://blog.logrocket.com/author/paulcowan/">Logrocket</ExternalLink>
        .<br />
        My personal blog is <ExternalLink href="https://thesoftwaresimpleton.com/">here</ExternalLink>.
      </p>
      {posts.map((post, i) => (
        <div key={i}>
          <ExternalLink href={post.link} blank={false}>
            <Heading level="2">{post.title}</Heading>
          </ExternalLink>
          <p>{post.summary}</p>
          <p>
            <ExternalLink href={post.link} blank={false}>
              Read More
            </ExternalLink>
          </p>
        </div>
      ))}
    </ApplicationLayout>
  );
}
export default Blog;
