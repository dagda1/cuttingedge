import { type ReactElement, type ReactNode } from 'react';
import type { BoxProps } from '../../molecules/Box/Box';
import { Box } from '../../molecules/Box/Box';
import { MaxLines } from '../MaxLines/MaxLines';
import { alignToFlexAlign } from '../../../style/util/align';
import type * as typographyStyles from '../../../style/typography/typography.css';

type IconSize = keyof typeof typographyStyles.textSizeUntrimmed | 'fill';

export type UseIconProps = {
  size?: IconSize;
  alignY?: 'uppercase' | 'lowercase';
};

export interface TypographyProps extends Pick<BoxProps, 'id' | 'component'> {
  children?: ReactNode;
  icon?: ReactElement<UseIconProps>;
  align?: BoxProps['textAlign'];
  maxLines?: number;
  className?: string;
  dataTestid?: string;
}

export function Typography({
  id,
  component = 'span',
  className,
  align,
  maxLines,
  icon,
  dataTestid,
  children,
}: TypographyProps): JSX.Element {
  const contents = typeof maxLines === 'number' ? <MaxLines lines={maxLines}>{children}</MaxLines> : children;

  return (
    <Box dataTestid={dataTestid} id={id} display="block" component={component} textAlign={align} className={className}>
      {icon ? (
        <Box component="span" display="flex" justifyContent={alignToFlexAlign(align)}>
          <Box
            component="span"
            display="block"
            paddingRight="xsmall"
            flexGrow={0}
            flexShrink={0}
            minWidth={0}
            textAlign={align}
          >
            {icon}
          </Box>
          <Box component="span" display="block" minWidth={0}>
            {contents}
          </Box>
        </Box>
      ) : (
        contents
      )}
    </Box>
  );
}
