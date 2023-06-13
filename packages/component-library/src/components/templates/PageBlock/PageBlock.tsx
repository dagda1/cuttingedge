import { type ReactNode } from 'react';
import { ContentBlock, type ContentBlockProps } from '../ContentBlock/ContentBlock';
import { Box } from '~/components/molecules/Box/Box';
import { atoms } from '~/style/atoms/atoms';
import cs from 'classnames';
import type { ContainerBoxProps } from '../ApplicationLayout/ApplicationLayout';

export const validPageBlockComponents = ['div', 'article', 'aside', 'main', 'section', 'nav'] as const;

export const gutters = { mobile: 'xsmall', tablet: 'gutter' } as const;

type Props = {
  children: ReactNode;
  width?: Extract<ContentBlockProps['width'], 'medium' | 'large'>;
  component?: (typeof validPageBlockComponents)[number];
} & ContainerBoxProps;

export function PageBlock({
  children,
  width = 'large',
  component: componentProp,
  display,
  flexDirection,
  justifyContent,
  alignItems,
  height,
}: Props): JSX.Element {
  const component = componentProp && validPageBlockComponents.includes(componentProp) ? componentProp : 'div';

  const classes = cs(atoms({ display, flexDirection, justifyContent, alignItems, height }));

  return (
    <Box style={{ border: '10px solid blue' }} className={classes} component={component} paddingX={gutters}>
      <ContentBlock width={width}>{children}</ContentBlock>
    </Box>
  );
}
