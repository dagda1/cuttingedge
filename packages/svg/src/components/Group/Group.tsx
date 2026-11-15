import cx from 'classnames';
import type { ReactNode, Ref, SVGProps } from 'react';

type GroupOnlyProps = {
  y?: number;
  x?: number;
  transform?: string;
  className?: string;
  children?: ReactNode;
  innerRef?: Ref<SVGGElement>;
};

type GroupProps = GroupOnlyProps & Omit<SVGProps<SVGGElement>, keyof GroupOnlyProps>;

export function Group({
  y = 0,
  x = 0,
  transform,
  className,
  children,
  innerRef,
  ...restProps
}: GroupProps): JSX.Element {
  return (
    <g
      ref={innerRef}
      className={cx('visx-group', className)}
      transform={transform || `translate(${x}, ${y})`}
      {...restProps}
    >
      {children}
    </g>
  );
}
