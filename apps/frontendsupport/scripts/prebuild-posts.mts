import parseFrontMatter from 'front-matter';
import { mkdir, readdir, readFile, writeFile } from 'fs/promises';
import { dirname, join } from 'path';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const postsRootPath = join(__dirname, '../blog-posts');
const outputDir = join(__dirname, '../public/posts');

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
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeHighlight)
      .use(rehypeStringify)
      .process(body);

    const html = String(result);

    const postData = {
      html,
      frontmatter: attributes,
    };

    await writeFile(join(outputDir, `${dir.name}.json`), JSON.stringify(postData), 'utf-8');

    // Add to posts list
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

  // Write posts list
  await writeFile(join(outputDir, 'posts-list.json'), JSON.stringify(postsList), 'utf-8');

  console.log(`Pre-rendered ${postDirs.length} blog posts`);
}

prebuildPosts().catch(console.error);
