import { type ReactNode } from 'react';
import { ContentBlock, type ContentBlockProps } from '../ContentBlock/ContentBlock';
import type { BoxProps } from '~/components/molecules/Box/Box.js';
import { Box } from '~/components/molecules/Box/Box.js';
import { atoms } from '~/style/atoms/atoms.js';
import cs from 'classnames';
import type { ContainerBoxProps } from '../ApplicationLayout/ApplicationLayout.js';

export const validPageBlockComponents = ['div', 'article', 'aside', 'main', 'section', 'nav'] as const;

export const gutters = { mobile: 'xsmall', tablet: 'gutter' } as const;

type Props = {
  children: ReactNode;
  width?: Extract<ContentBlockProps['width'], 'medium' | 'large'>;
  component?: (typeof validPageBlockComponents)[number];
  height?: BoxProps['height'];
} & ContainerBoxProps;

export function PageBlock({
  children,
  width = 'large',
  height,
  component: componentProp,
  justifyContent,
  alignItems,
}: Props): JSX.Element {
  const component = componentProp && validPageBlockComponents.includes(componentProp) ? componentProp : 'div';

  const classes = cs(atoms({ justifyContent, alignItems, display: 'flex' }));

  return (
    <Box height={height} className={classes} component={component} paddingX={gutters}>
      <ContentBlock height={height} width={width}>
        {children}
      </ContentBlock>
    </Box>
  );
}
