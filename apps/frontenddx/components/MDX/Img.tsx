import type { ImgHTMLAttributes } from 'react';
import { CDN } from '../../constants';
import { assert } from 'assert-ts';

export function Img({ src, alt, ...rest }: ImgHTMLAttributes<HTMLImageElement>): JSX.Element {
  assert(!!src, `an img must have a valid src attribute`);
  const url = new URL(src, CDN).href;

  return <img alt={alt} src={url} {...rest} />;
}
