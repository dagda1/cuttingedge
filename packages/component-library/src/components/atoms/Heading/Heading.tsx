import type { FC, HTMLAttributes } from 'react';
import cs from 'classnames';
import { Taggable } from '@cutting/util';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: number;
  className?: string;

  tabIndex?: number;
}

export const Heading: FC<HeadingProps> = ({ level = 1, className, tabIndex, children, ...rest }) => {
  const Tag = `h${level}` as Taggable;

  return (
    <Tag className={cs(className)} {...rest} tabIndex={tabIndex}>
      {children}
    </Tag>
  );
};

Heading.displayName = 'Heading';
