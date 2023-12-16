import { useContext, useMemo } from 'react';
import { TextContext } from './TextContext';
import { assert } from 'assert-ts';
import { textStyles } from '~/style/typography/typography.js';
import cs from 'classnames';
import { base } from '../TextLink/TextLink.css.js';

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
