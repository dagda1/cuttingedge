import { type ReactNode } from 'react';
import { ContentBlock, type ContentBlockProps } from '../ContentBlock/ContentBlock';
import { Box } from '~/components/molecules/Box/Box';
import type { ResponsiveAtomicProperties } from '~/style/atoms/sprinkles.css';
import { atoms } from '~/style/atoms/atoms';
import cs from 'classnames';

export const validPageBlockComponents = ['div', 'article', 'aside', 'main', 'section', 'nav'] as const;

export const gutters = { mobile: 'xsmall', tablet: 'gutter' } as const;

interface Props {
  children: ReactNode;
  width?: Extract<ContentBlockProps['width'], 'medium' | 'large'>;
  component?: (typeof validPageBlockComponents)[number];
  display?: keyof ResponsiveAtomicProperties['styles']['display']['values'];
  flexDirection?: keyof ResponsiveAtomicProperties['styles']['flexDirection']['values'];
}

export function PageBlock({
  children,
  width = 'large',
  component: componentProp,
  display,
  flexDirection,
}: Props): JSX.Element {
  const component = componentProp && validPageBlockComponents.includes(componentProp) ? componentProp : 'div';

  const classes = cs(display && atoms({ reset: component, display, flexDirection }));

  return (
    <Box className={classes} component={component} paddingX={gutters}>
      <ContentBlock width={width}>{children}</ContentBlock>
    </Box>
  );
}
