import { type ReactNode } from 'react';
import { ContentBlock, type ContentBlockProps } from '../ContentBlock/ContentBlock';
import { Box } from '~/components/molecules/Box/Box';

export const validPageBlockComponents = ['div', 'article', 'aside', 'main', 'section', 'nav'] as const;

export const gutters = { mobile: 'xsmall', tablet: 'gutter' } as const;

interface Props {
  children: ReactNode;
  width?: Extract<ContentBlockProps['width'], 'medium' | 'large'>;
  component?: (typeof validPageBlockComponents)[number];
}

export function PageBlock({ children, width = 'large', component: componentProp }: Props): JSX.Element {
  const component = componentProp && validPageBlockComponents.includes(componentProp) ? componentProp : 'div';

  return (
    <Box component={component} paddingX={gutters}>
      <ContentBlock width={width}>{children}</ContentBlock>
    </Box>
  );
}
