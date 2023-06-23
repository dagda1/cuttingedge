import { FullPageLayout } from '../Layouts/FullPageLayout';
import { Link } from '../MDX/Link';
import type { Post } from '../../types';
import { formatDate } from '../../util/date';
import { post, container } from './blog.css';
import { Tag } from '../Tag/Tag';
import { Heading } from '@cutting/component-library';

const MAX_DISPLAY = 10;

export function Blog({ posts }: { posts: Post['frontMatter'][] }): JSX.Element {
  return (
    <FullPageLayout heading="Tips from the front" className={container}>
      <div>
        <ul>
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary } = frontMatter;
            return (
              <li key={slug} className={post}>
                <article>
                  <div>
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd>
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div>
                      {frontMatter.tags.map((tag, i) => {
                        return <Tag key={tag} text={`${tag}${i !== frontMatter.tags.length - 1 ? ', ' : ''}`} />;
                      })}
                    </div>
                    <div>
                      <div>
                        <div>
                          <Heading level="2">
                            <Link href={`/blog/${slug}`}>{title}</Link>
                          </Heading>
                        </div>
                        <div>{summary}</div>
                      </div>
                      <div>
                        <Link href={`/blog/${slug}`} aria-label={`Read "${title}"`}>
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div>
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </FullPageLayout>
  );
}
