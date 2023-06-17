import { useMemo } from 'react';
// TODO: replace getMDXComponent, it breaks csp with new Function
import { getMDXComponent } from 'mdx-bundler/client';
import { Link } from './Link';
import type { Post } from '../../types';
import BlogLayout from '../Layouts/BlogLayout';
import { Img } from './Img';

export const MDXComponents = {
  a: Link,
  img: Img,
};

interface Props {
  mdxSource: string;
  frontMatter: Post['frontMatter'];
}

export function MDXLayoutRenderer({ mdxSource, ...rest }: Props): JSX.Element {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource]);

  return (
    <BlogLayout heading={rest.frontMatter.title}>
      <MDXLayout components={MDXComponents} {...rest} />
    </BlogLayout>
  );
}
