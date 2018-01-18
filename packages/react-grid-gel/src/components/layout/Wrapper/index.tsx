import * as React from 'react';
import * as cs from 'classnames';

require('./Wrapper.scss');

export interface WrapperProps {
  Tag?: any;
  className?: string;
}

export const Wrapper: React.StatelessComponent<WrapperProps> = ({ Tag, className, children }) => (
  <Tag className={cs('gel-wrap', className)}>{children}</Tag>
);

Wrapper.defaultProps = {
  Tag: 'div'
};
