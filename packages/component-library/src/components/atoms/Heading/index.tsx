import cs from 'classnames';
import React from 'react';
import { Taggable } from '@cutting/util';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: number;
  className?: string;
  tabIndex?: number;
}

export const Heading: React.FC<HeadingProps> = ({ level, className, tabIndex, children, ...rest }) => {
  const Tag = `h${level}` as Taggable;

  return (
    <Tag className={cs(className)} {...rest} tabIndex={tabIndex}>
      {children}
    </Tag>
  );
};

Heading.defaultProps = {
  level: 1,
};

Heading.displayName = 'Heading';
