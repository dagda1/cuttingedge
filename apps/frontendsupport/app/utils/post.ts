import parseFrontMatter from 'front-matter';
import fs from 'fs/promises';
import path from 'path';
import { bundleMDX } from './mdx.server';
import remarkFootnotes from 'remark-footnotes';
import remarkMdxImages from 'remark-mdx-images';
import remarkBreaks from 'remark-breaks';
import { remarkCodeTitles } from './remark-code-title';
import { remarkInlineCodeLanguageCreator } from './remark-inline-code-language';
import type { FrontMatter, FrontMatterMeta } from '~/types';
import readingTime from 'reading-time';

export type PostMarkdownAttributes = {
  title: string;
};

const root = process.cwd();

export async function getPost(slug: string) {
  const source = await fs.readFile(path.join(`${__dirname}/../blog-posts`, `${slug}/index.md`), 'utf-8');

  const { default: remarkGfm } = await import('remark-gfm');
  const { default: rehypeAutolinkHeadings } = await import('rehype-autolink-headings');

  const { default: rehypeSlug } = await import('rehype-slug');
  const { default: remarkMath } = await import('remark-math');

  const { default: rehypeKatex } = await import('rehype-katex');
  const { default: rehypeCitation } = await import('rehype-citation');
  const { default: rehypePrismPlus } = await import('rehype-prism-plus');
  const { default: rehypeRaw } = await import('rehype-raw');
  const { default: rehypePresetMinify } = await import('rehype-preset-minify');

  const remarkInlineCodeLanguage = await remarkInlineCodeLanguageCreator();

  process.env.ESBUILD_BINARY_PATH = path.join(root, 'node_modules', 'esbuild', 'bin', 'esbuild');

  const post = await bundleMDX({
    source,
    mdxOptions(options, frontmatter) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkMdxImages,
        remarkGfm,
        remarkBreaks,
        remarkCodeTitles,
        remarkInlineCodeLanguage,
        [remarkFootnotes, { inlineNotes: true }],
        remarkMath,

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        // remarkImgToJsx as any,
      ];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeAutolinkHeadings,
        rehypeSlug,
        rehypeKatex,
        [rehypeCitation, { path: path.join(root, 'data') }],
        [rehypePrismPlus, { ignoreMissing: true }],
        rehypePresetMinify,
        [
          rehypeRaw,
          {
            passThrough: [
              'mdxjsEsm',
              'mdxFlowExpression',
              'mdxTextExpression',
              'mdxJsxFlowElement',
              'mdxJsxTextElement',
            ],
          },
        ],
      ];

      return options;
    },
  }).catch((e) => {
    console.error(e);
    throw e;
  });

  return {
    ...post,
    frontmatter: {
      meta: {
        readingTime: readingTime(post.code),
        ...post.frontmatter.meta,
      },
    },
  };
}

export async function getPosts() {
  const postsPath = await fs.readdir(`${__dirname}/../blog-posts`, {
    withFileTypes: true,
  });

  const posts: FrontMatterMeta[] = [];

  for (const dirent of postsPath) {
    const file = await fs.readFile(path.join(`${__dirname}/../blog-posts`, dirent.name, 'index.md'));

    const {
      attributes: {
        meta: { date, slug, ...meta },
      },
    } = parseFrontMatter(file.toString()) as { attributes: FrontMatter };

    posts.push({
      slug: dirent.name.replace(/\.mdx/, ''),
      date: new Date(date).toISOString(),
      ...meta,
    });
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
