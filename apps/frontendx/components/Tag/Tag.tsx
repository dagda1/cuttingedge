import { capitalize } from '@cutting/util';
import { tag } from './Tag.css';

export function Tag({ text }: { text: string }): JSX.Element {
  return (
    <span className={tag}>{capitalize(text)}</span>
    // <Link href={`/tags/${kebabCase(text)}`}>
    //   <a>{text.split(' ').join('-')}</a>
    // </Link>
  );
}
