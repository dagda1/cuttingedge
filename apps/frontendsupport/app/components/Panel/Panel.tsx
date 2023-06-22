import type { ReactNode, Ref } from 'react';
import cs from 'classnames';
import * as styles from './Panel.css';

interface PanelProps {
  className?: string;
  children: ReactNode;
  innerRef?: Ref<HTMLDivElement>;
}

export function Panel({ className, innerRef, ...props }: PanelProps) {
  return <section className={cs('panel', styles.panel, className)} ref={innerRef} {...props} />;
}
