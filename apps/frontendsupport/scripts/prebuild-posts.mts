/* eslint-disable @typescript-eslint/no-explicit-any */
import parseFrontMatter from 'front-matter';
import { mkdir, readdir, readFile, writeFile } from 'fs/promises';
import { dirname, join } from 'path';
import remarkAutolinkHeadings from 'rehype-autolink-headings';
import rehypeMathjax from 'rehype-mathjax';
import rehypePresetMinify from 'rehype-preset-minify';
import rehypePrism from 'rehype-prism-plus';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import { remark } from 'remark';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkRehype from 'remark-rehype';
import { visit } from 'unist-util-visit';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const postsRootPath = join(__dirname, '../blog-posts');
const outputDir = join(__dirname, '../public/posts');

const LANGUAGE_ALIASES: Record<string, string> = {
  ts: 'typescript',
  js: 'javascript',
};

function rehypeInlineCodeLanguage() {
  return (tree: any) => {
    visit(tree, 'element', (node: any, _index: number, parent: any) => {
      if (node.tagName !== 'code') {
        return;
      }
      if (parent?.tagName === 'pre') {
        return;
      }

      const text = node.children?.[0]?.value;
      if (!text) {
        return;
      }

      const match = text.match(/^(\w+)\s+(.+)$/s);
      if (!match) {
        return;
      }

      const [, lang, code] = match;
      const language = LANGUAGE_ALIASES[lang] || lang;
      node.properties = node.properties || {};
      node.properties.className = [`language-${language}`, 'code-inline'];
      node.children[0].value = code;
    });
  };
}

function remarkCodeTitles() {
  return (tree: any): void =>
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    visit(tree, 'code', (node: { lang?: string }, index: number, parent: any) => {
      const nodeLang = node.lang || '';
      let language = '';
      let title = '';

      if (nodeLang.includes(':')) {
        language = nodeLang.slice(0, nodeLang.search(':'));
        title = nodeLang.slice(nodeLang.search(':') + 1, nodeLang.length);
      }

      if (!title) {
        return;
      }

      const className = 'remark-code-title';

      const titleNode = {
        type: 'html',
        value: `<div class="${className}">${title}</div>`,
      };

      parent.children.splice(index, 0, titleNode);
      node.lang = language;
    });
}

async function prebuildPosts() {
  const dirs = await readdir(postsRootPath, { withFileTypes: true });
  const postDirs = dirs.filter((d) => d.isDirectory());

  await mkdir(outputDir, { recursive: true });

  const postsList = [];

  for (const dir of postDirs) {
    const mdPath = join(postsRootPath, dir.name, 'index.md');
    const source = await readFile(mdPath, 'utf-8');
    const { body, attributes } = parseFrontMatter(source);

    const result = await remark()
      .use(remarkBreaks)
      .use(remarkCodeTitles)
      .use(remarkAutolinkHeadings, { behavior: 'wrap' })
      .use(rehypeSlug)
      .use(remarkGfm)
      .use(remarkMath)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeMathjax)
      .use(rehypePrism, { ignoreMissing: true })
      .use(rehypeInlineCodeLanguage)
      .use(rehypePresetMinify)
      .use(rehypeRaw, {
        passThrough: ['mdxjsEsm', 'mdxFlowExpression', 'mdxTextExpression', 'mdxJsxFlowElement', 'mdxJsxTextElement'],
      })
      .use(rehypeStringify, { allowDangerousHtml: true })
      .process(body);

    const html = String(result);

    const postData = {
      html,
      frontmatter: attributes,
    };

    await writeFile(join(outputDir, `${dir.name}.json`), JSON.stringify(postData), 'utf-8');

    const meta = (attributes as any).meta || {};
    postsList.push({
      slug: dir.name,
      title: meta.title || '',
      description: meta.description || '',
      date: meta.date || '',
      formattedDate: meta.date ? new Date(meta.date).toLocaleDateString() : '',
      image: meta.image,
      tags: meta.tags,
    });
  }

  postsList.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  await writeFile(join(outputDir, 'posts-list.json'), JSON.stringify(postsList), 'utf-8');

  console.log(`Pre-rendered ${postDirs.length} blog posts`);
}

prebuildPosts().catch(console.error);
