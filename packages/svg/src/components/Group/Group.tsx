import type { FC } from 'react';
import cx from 'classnames';

type GroupOnlyProps = {
  /** Top offset applied to `<g/>`. */
  y?: number;
  /** Left offset applied to `<g/>`. */
  x?: number;
  /** Override `x` and `y` to provide the entire `transform` string. */
  transform?: string;
  className?: string;
  children?: React.ReactNode;
  innerRef?: React.Ref<SVGGElement>;
};

type GroupProps = GroupOnlyProps & Omit<React.SVGProps<SVGGElement>, keyof GroupOnlyProps>;

export const Group: FC<GroupProps> = ({
  y = 0,
  x = 0,
  transform,
  className,
  children,
  innerRef,
  ...restProps
}: GroupProps): JSX.Element => {
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
};
