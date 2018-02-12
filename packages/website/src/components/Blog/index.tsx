import * as React from 'react';
import { pageMaker } from '../PageMaker';
import { posts, Post } from './posts';
import { StaticLayout } from '../../layouts/StaticLayout';
import { Heading, ExternalLink } from '@cutting/component-library';

export const Blog: React.StatelessComponent = () => (
  <StaticLayout heading="blog">
    {posts.map((post: Post, i: number) => (
      <>
        <Heading level={2}>{post.title}</Heading>
        <p>{post.summary}</p>
        <p>
          <ExternalLink href={post.link}>Read More</ExternalLink>
        </p>
      </>
    ))}
  </StaticLayout>
);

export default pageMaker({ Comp: Blog });
