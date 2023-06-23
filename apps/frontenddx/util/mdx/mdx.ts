import { bundleMDX } from 'mdx-bundler';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';
import { getAllFilesRecursively } from '../files/files';
// Remark packages
import remarkGfm from 'remark-gfm';
import remarkFootnotes from 'remark-footnotes';
import remarkMath from 'remark-math';
import { extractFrontmatter } from './remark-extract-frontmatter';
import { remarkCodeTitles } from './remark-code-title';
import { remarkImgToJsx } from './remark-img-to-jsx';
// Rehype packages
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeKatex from 'rehype-katex';
import rehypeCitation from 'rehype-citation';
import rehypePrismPlus from 'rehype-prism-plus';
import rehypePresetMinify from 'rehype-preset-minify';
import type { Post } from '../../types';
import { remarkInlineCodeLanguage } from './remark-inline-code-language';
import rehypeRaw from 'rehype-raw';

const root = process.cwd();

export function getFiles(): string[] {
  const prefixPaths = path.join(root, '_posts');
  const files = getAllFilesRecursively(prefixPaths);
  // Only want to return blog/path and ignore root, replace is needed to work on Windows
  return files.map((file) => file.slice(prefixPaths.length + 1).replace(/\\/g, '/'));
}

export function formatSlug(slug: string): string {
  return slug.replace(/\.(mdx|md)/, '');
}

export function dateSortDesc(a: string, b: string): 1 | -1 | 0 {
  if (a > b) {
    return -1;
  }
  if (a < b) {
    return 1;
  }
  return 0;
}

export async function getFileBySlug(slug: string): Promise<Post> {
  const mdxPath = path.join(root, '_posts', `${slug}.mdx`);
  const mdPath = path.join(root, '_posts', `${slug}.md`);
  const source = fs.existsSync(mdxPath) ? fs.readFileSync(mdxPath, 'utf8') : fs.readFileSync(mdPath, 'utf8');

  // https://github.com/kentcdodds/mdx-bundler#nextjs-esbuild-enoent
  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = path.join(root, 'node_modules', 'esbuild', 'esbuild.exe');
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(root, 'node_modules', 'esbuild', 'bin', 'esbuild');
  }

  const { code, frontmatter } = await bundleMDX({
    source,
    // mdx imports can be automatically source from the components directory
    cwd: path.join(root, 'components'),
    mdxOptions(options) {
      // this is the recommended way to add custom remark/rehype plugins:
      // The syntax might look weird, but it protects you in case we add/remove
      // plugins in the future.
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        extractFrontmatter,
        remarkGfm,
        remarkCodeTitles,
        remarkInlineCodeLanguage,
        [remarkFootnotes, { inlineNotes: true }],
        remarkMath,

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        remarkImgToJsx as any,
      ];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        rehypeAutolinkHeadings,
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
    esbuildOptions: (options) => {
      options.loader = {
        ...options.loader,
        '.ts': 'tsx',
      };
      return options;
    },
  });

  return {
    mdxSource: code,
    frontMatter: {
      readingTime: readingTime(code),
      slug,
      fileName: fs.existsSync(mdxPath) ? `${slug}.mdx` : `${slug}.md`,
      ...frontmatter,
      date: new Date(frontmatter.date).toISOString(),
    },
    // TODO: remove
  } as Post;
}

export async function getAllFilesFrontMatter(): Promise<
  {
    title: string;
    summary: string;
    date: string;
    tags: string[];
  }[]
> {
  const prefixPaths = path.join(root, '_posts');

  const files = getAllFilesRecursively(prefixPaths);

  const allFrontMatter: Post['frontMatter'][] = [];

  for (const file of files) {
    // Replace is needed to work on Windows
    const fileName = file.slice(prefixPaths.length + 1).replace(/\\/g, '/');
    // Remove Unexpected File
    if (path.extname(fileName) !== '.md' && path.extname(fileName) !== '.mdx') {
      continue;
    }
    const source = fs.readFileSync(file, 'utf8');
    const { data: frontmatter } = matter(source);
    if (frontmatter.draft !== true) {
      allFrontMatter.push({
        slug: formatSlug(fileName),
        ...frontmatter,
        date: new Date(frontmatter.date).toISOString(),
      } as Post['frontMatter']);
    }
  }

  return allFrontMatter.sort((a, b) => dateSortDesc(a.date, b.date));
}
