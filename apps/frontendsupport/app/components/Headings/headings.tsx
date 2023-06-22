import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import cs from 'classnames';

export function H1({
  className,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>): JSX.Element {
  return <h1 className={cs('md:text-4xl 2xl:text-9xl', className)} {...props} />;
}
