import type { FC } from 'react';
import { posts } from './posts';
import { ExternalLink } from '@cutting/component-library';
import { ApplicationLayout } from '../../layouts/ApplicationLayout';

export const Blog: FC = () => (
  <ApplicationLayout heading="My blog posts">
    <p>
      I blog professionally for
      <ExternalLink href="https://blog.logrocket.com/author/paulcowan/">Logrocket</ExternalLink>
      .<br />
      My personal blog is <ExternalLink href="https://thesoftwaresimpleton.com/">here</ExternalLink>.
    </p>
    {posts.map((post, i) => (
      <div key={i}>
        <ExternalLink href={post.link} blank={false}>
          <h2>{post.title}</h2>
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

export default Blog;
