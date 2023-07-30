import { getMDXComponent } from 'mdx-bundler/client';
import type { ReactNode } from 'react';
import { useMemo } from 'react';
import { type LoaderFunction, json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getPost } from '~/utils/post';
import { Box, Heading, PageBlock, Stack, Text, TextLink } from '@cutting/component-library';
import type { FrontMatter } from '~/types';

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
  return <Heading level="2">{children}</Heading>;
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

  console.dir({ frontmatter }, { depth: 8 });

  return (
    <Box marginTop="xxxlarge">
      <PageBlock>
        {/* <TextNavLink to="/">← Back to blog index</TextNavLink>
        {frontmatter.image && (
          <Text component="p">
            Credit: <TextLink href={frontmatter.image.credit.url}>{frontmatter.image.credit.text}</TextLink>
          </Text>
        )} */}
        <Heading level="1">{frontmatter.meta.title}</Heading>
        <Stack space="xxlarge">
          <Component
            components={{ p: Paragraph, h1: Heading1, h2: Heading2, a: TextLink as any }}
            attributes={frontmatter}
          />
        </Stack>
        {/* <div className="hero">Sign up to get notified about new posts.</div> */}
      </PageBlock>
    </Box>
  );
}
