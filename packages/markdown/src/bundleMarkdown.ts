import parseFrontMatter from 'front-matter';
import { bundleMDX } from 'mdx-bundler';
import remarkFootnotes from 'remark-footnotes';
import remarkMdxImages from 'remark-mdx-images';
import remarkBreaks from 'remark-breaks';
import { remarkCodeTitles } from './remark/remark-code-title';
import { remarkInlineCodeLanguageCreator } from './remark/remark-inline-code-language';
import type { FrontMatter, FrontMatterMeta } from './types';
import readingTime from 'reading-time';
import { join } from 'path';
import { readFile, readdir } from 'fs/promises';
import { DateTime } from 'luxon';

export type MarkdownAttributes = {
  title: string;
};

const root = process.cwd();

type Matter = ReturnType<typeof bundleMDX>;

export async function bundleMarkdown(markdownPath: string): Promise<Matter> {
  const source = await readFile(markdownPath, 'utf-8');

  const { default: remarkGfm } = await import('remark-gfm');
  const { default: rehypeAutolinkHeadings } = await import('rehype-autolink-headings');

  const { default: rehypeSlug } = await import('rehype-slug');
  const { default: remarkMath } = await import('remark-math');

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { default: rehypeMathjax } = await import('rehype-mathjax');
  const { default: rehypeCitation } = await import('rehype-citation');
  const { default: rehypePrismPlus } = await import('rehype-prism-plus');
  const { default: rehypeRaw } = await import('rehype-raw');
  const { default: rehypePresetMinify } = await import('rehype-preset-minify');

  const remarkInlineCodeLanguage = await remarkInlineCodeLanguageCreator();

  process.env.ESBUILD_BINARY_PATH = join(root, 'node_modules', 'esbuild', 'bin', 'esbuild');

  const post = await bundleMDX({
    source,
    mdxOptions(options) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkMdxImages,
        remarkGfm,
        remarkBreaks,
        remarkCodeTitles,
        remarkInlineCodeLanguage,
        [remarkFootnotes, { inlineNotes: true }],
        remarkMath,
      ];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeAutolinkHeadings,
        rehypeSlug,
        rehypeMathjax,
        [rehypeCitation, { path: join(root, 'data') }],
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

export type PostData = FrontMatterMeta & { formattedDate: string };

export async function getPosts(postsRootPath: string): Promise<PostData[]> {
  const postsPath = await readdir(postsRootPath, {
    withFileTypes: true,
  });

  const posts: PostData[] = [];

  for (const dirent of postsPath) {
    const file = await readFile(join(postsRootPath, dirent.name, 'index.md'));

    const {
      attributes: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        meta: { date, slug, ...meta },
      },
    } = parseFrontMatter(file.toString()) as { attributes: FrontMatter };

    posts.push({
      slug: dirent.name.replace(/\.mdx/, ''),
      date: new Date(date).toISOString(),
      formattedDate: DateTime.fromISO(date).toLocaleString(DateTime.DATE_FULL),
      ...meta,
    });
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
