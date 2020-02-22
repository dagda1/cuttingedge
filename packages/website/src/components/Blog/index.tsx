import React from 'react';
import { posts, Post } from './posts';
import { Heading, ExternalLink } from '@cutting/component-library';
import { ApplicationLayout } from 'src/layouts/ApplicationLayout';

export const Blog: React.FC = () => (
  <ApplicationLayout heading="My blog posts">
    <p>
      I blog professionally for <ExternalLink href="https://blog.logrocket.com/">Logrocket</ExternalLink>. My personal
      blog is <ExternalLink href="https://thesoftwaresimpleton.com/">here</ExternalLink>.
    </p>
    {posts.map((post: Post, i: number) => (
      <div key={i}>
        <ExternalLink href={post.link} blank={false}>
          <Heading level={2}>{post.title}</Heading>
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
