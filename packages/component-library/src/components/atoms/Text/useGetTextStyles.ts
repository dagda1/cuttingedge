import { assert } from '@cutting/assert';
import cs from 'classnames';
import { useContext, useMemo } from 'react';

import { textStyles } from '~/style/typography/typography';

import { base } from '../TextLink/TextLink.css';
import { TextContext } from './TextContext';

export function useGetTextStyles(): string {
  const textContext = useContext(TextContext);

  assert(!!textContext, `you need to wrap the component in <Text /> or <Heading />`);

  const { size, weight, baseline, tone } = textContext;

  const textStylingProps = useMemo(
    () => ({
      size,
      weight,
      baseline,
      tone,
    }),
    [size, weight, baseline, tone],
  );

  return cs(textStyles(textStylingProps).join(' '), base);
}
