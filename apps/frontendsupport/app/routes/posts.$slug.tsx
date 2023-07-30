import { getMDXComponent } from 'mdx-bundler/client';
import type { ReactNode } from 'react';
import { useMemo } from 'react';
import { type LoaderFunction, json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getPost } from '~/utils/post';
import { Box, Heading, List, PageBlock, Text, TextLink } from '@cutting/component-library';
import type { FrontMatter } from '~/types';
import { Image } from '@unpic/react';

type LoaderData = {
  frontmatter: FrontMatter;
  code: string;
};

interface Props {
  children?: ReactNode;
}

function Paragraph({ children }: Props): JSX.Element {
  return (
    <Box component="p" marginY="large">
      <Text>{children}</Text>
    </Box>
  );
}

function Heading1({ children }: Props): JSX.Element {
  return (
    <Box marginTop="xxlarge" style={{ border: '10px solid green' }}>
      <Heading level="1">{children}</Heading>
    </Box>
  );
}

function Heading2({ children }: Props): JSX.Element {
  return (
    <Box marginTop="large">
      <Heading level="2">{children}</Heading>
    </Box>
  );
}

export const loader: LoaderFunction = async ({ params }) => {
  const slug = params.slug;
  if (!slug) {
    throw new Response('Not found', { status: 404 });
  }

  const post = await getPost(slug);

  if (post) {
    const { frontmatter, code } = post;
    return json({ frontmatter, code });
  }
};

export default function PostRoute() {
  const { code, frontmatter } = useLoaderData<LoaderData>();
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <Box style={{ marginTop: '6rem' }}>
      <PageBlock>
        <Heading level="1">{frontmatter.meta.title}</Heading>
        {frontmatter.meta.image && <Image layout="constrained" width={600} height={400} src={frontmatter.meta.image} />}
        <Component
          components={{ p: Paragraph, h1: Heading1, h2: Heading2, a: TextLink as any }}
          attributes={frontmatter}
        />
      </PageBlock>
    </Box>
  );
}
