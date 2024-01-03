import * as mdxBundler from 'mdx-bundler/client/index.js';
import type { ReactNode } from 'react';
import { Children, isValidElement, useMemo } from 'react';
import { json } from '@remix-run/node';
import type { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getPost } from '../utils/post.js';
import type { ReactNodeNoStrings } from '@cutting/component-library';
import { Box, Heading, List, PageBlock, Text, TextLink } from '@cutting/component-library';
import type { FrontMatter } from '../types.js';
import type { Location, MetaFunction } from '@remix-run/react';
import { LazyLoadedImage } from '../components/LazyLoadedImage/LazyLoadedImage.js';
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
    <Box component="p" marginY="medium" marginBottom="large">
      <Text>{children}</Text>
    </Box>
  );
}

function Heading1({ children }: Props): JSX.Element {
  return (
    <Box marginY="xxlarge">
      <Heading level="1">{children}</Heading>
    </Box>
  );
}

function Heading2({ children }: Props): JSX.Element {
  return (
    <Box marginY="large">
      <Heading level="2">{children}</Heading>
    </Box>
  );
}

function Heading3({ children }: Props): JSX.Element {
  return (
    <Box marginY="large">
      <Heading level="3">{children}</Heading>
    </Box>
  );
}

function Heading4({ children }: Props): JSX.Element {
  return (
    <Box marginY="large">
      <Heading level="4">{children}</Heading>
    </Box>
  );
}

function Ul({ children }: Props): JSX.Element {
  if (!children || typeof children === 'string' || typeof children === 'boolean' || typeof children === 'number') {
    return children as unknown as JSX.Element;
  }

  return (
    <List>
      {
        Children.toArray(children).map((child, i) => {
          if (!isValidElement(child)) {
            return child;
          }

          const childChildren = child.props.children;

          return (
            <Text key={i} component="span">
              {childChildren}
            </Text>
          );
        }) as ReactNodeNoStrings
      }
    </List>
  );
}

function Img({ alt, src }: { alt: string; src: string }): JSX.Element {
  if (src.endsWith('gif')) {
    return <Image layout="fullWidth" src={src} alt={alt} />;
  }
  return <LazyLoadedImage src={src} alt={alt} />;
}

export const loader: LoaderFunction = async ({ params }) => {
  const slug = params.slug;
  if (!slug) {
    throw new Response('404 - Not found', { status: 404 });
  }

  const post = await getPost(slug);

  if (post) {
    const { frontmatter, code } = post;
    return json({ frontmatter, code });
  }
};

export const meta: MetaFunction<any> = ({
  location,
  data: {
    frontmatter: { meta },
  },
}: {
  location: Location;
  data: { frontmatter: FrontMatter; code: string };
}) => {
  return [
    { title: meta.title },
    { property: 'og:url', content: location.pathname },
    { property: 'og:description', content: meta.description },
    { property: 'og:image', content: meta.image },
    { property: 'og:image:width', content: '600' },
    { property: 'og:image:height', content: '400' },
    { property: 'og:title', content: meta.title },
    { property: 'og:image:alt', content: meta.title },
    { name: 'twitter:title', content: meta.title },
    { name: 'twitter:url', content: location.pathname },
    { name: 'twitter:description', content: meta.description },
    {
      name: 'twitter:image:src',
      content: meta.image,
    },
  ];
};

export default function PostRoute() {
  const { code, frontmatter } = useLoaderData<LoaderData>();

  const Component = useMemo(() => mdxBundler.getMDXComponent(code), [code]);

  return (
    <Box style={{ marginTop: '6rem' }} className="post">
      <PageBlock>
        <Box marginBottom="large">
          <Heading level="1">{frontmatter.meta.title}</Heading>
        </Box>
        {frontmatter.meta.image && (
          <LazyLoadedImage loading="lazy" layout="constrained" width={600} height={400} src={frontmatter.meta.image} />
        )}
        <Box paddingX={{ mobile: 'small', desktop: 'none' }}>
          <Component
            components={{
              p: Paragraph,
              h1: Heading1,
              h2: Heading2,
              h3: Heading3,
              h4: Heading4,
              a: TextLink as any,
              ul: Ul,
              img: Img as any,
            }}
            attributes={frontmatter}
          />
        </Box>
      </PageBlock>
    </Box>
  );
}
