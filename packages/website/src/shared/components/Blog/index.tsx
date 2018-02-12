import * as React from 'react';
import { pageMaker } from '../PageMaker';
import { posts, Post } from './posts';
import { Heading, ExternalLink } from '@cutting/component-library';

export const Blog: React.StatelessComponent = () => (
  <>
    <h1>Blog</h1>
    {posts.map((post: Post, i: number) => (
      <>
        <Heading level={2}>{post.title}</Heading>
        <p>{post.summary}</p>
        <p>
          <ExternalLink href={post.link}>Read More</ExternalLink>
        </p>
      </>
    ))}
  </>
);

export default pageMaker({ Comp: Blog });
