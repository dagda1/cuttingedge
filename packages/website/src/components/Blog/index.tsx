import * as React from 'react';
import { pageMaker } from '../PageMaker';
import { posts, Post } from './posts';
import { StaticLayout } from '../../layouts/StaticLayout';
import { Heading, ExternalLink } from '@cutting/component-library';

export const Blog: React.SFC = () => (
  <StaticLayout heading="Blog">
    {posts.map((post: Post, i: number) => (
      <div key={i}>
        <Heading level={2}>{post.title}</Heading>
        <p>{post.summary}</p>
        <p>
          <ExternalLink href={post.link}>Read More</ExternalLink>
        </p>
      </div>
    ))}
  </StaticLayout>
);

export default pageMaker({ Comp: Blog });
