import parseFrontMatter from 'front-matter';
import { bundleMDX } from 'mdx-bundler';
import { remarkCodeTitles } from './remark/remark-code-title';
import { remarkInlineCodeLanguageCreator } from './remark/remark-inline-code-language';
import type { FrontMatter, FrontMatterMeta } from './types';
import { join } from 'path';
import { readFile, readdir } from 'fs/promises';
import { DateTime } from 'luxon';

export type MarkdownAttributes = {
  title: string;
};

const root = process.cwd();

type Matter = ReturnType<typeof bundleMDX>;

export async function bundleMarkdown(markdownPath: string): Promise<Matter> {
  const startTime = performance.now();
  const source = await readFile(markdownPath, 'utf-8');

  const { default: remarkMath } = await import('remark-math');

  const { default: rehypeMathjax } = await import('rehype-mathjax');
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
        remarkCodeTitles,
        remarkInlineCodeLanguage,
        remarkMath,
      ];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeMathjax,
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

  const result = {
    ...post,
    frontmatter: {
      meta: {
        ...post.frontmatter.meta,
      },
    },
  };

  const endTime = performance.now();

  console.log('==============================');
  console.log(`bundleMdx took ${endTime - startTime} ms`);
  console.log('==============================');

  return result;
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
