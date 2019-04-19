import React from 'react';
import { posts, Post } from './posts';
import { StaticLayout } from '../../layouts/StaticLayout';
import { Heading, ExternalLink } from '@cutting/component-library';

export const Blog: React.FunctionComponent = () => (
  <StaticLayout heading="Blog">
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
  </StaticLayout>
);
