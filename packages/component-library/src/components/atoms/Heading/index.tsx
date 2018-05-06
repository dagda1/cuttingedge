import * as cs from 'classnames';
import * as React from 'react';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: number;
  className?: string;
  tabIndex?: number;
}

export const Heading: React.SFC<HeadingProps> = ({ level, className, tabIndex, children, ...rest }) => {
  const Tag = `h${level}`;

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
