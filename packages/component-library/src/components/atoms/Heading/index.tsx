import cs from 'classnames';
import React from 'react';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: number;
  className?: string;
  tabIndex?: number;
}

export const Heading: React.SFC<HeadingProps> = ({ level, className, tabIndex, children, ...rest }) => {
  const Tag = `h${level}` as any;

  return (
    <Tag className={cs(className)} {...rest} tabIndex={tabIndex}>
      {children}
    </Tag>
  );
};

Heading.defaultProps = {
  level: 1
};

Heading.displayName = 'Heading';
