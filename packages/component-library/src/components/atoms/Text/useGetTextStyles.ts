import { useContext, useMemo } from 'react';
import { TextContext } from './TextContext';
import { assert } from 'assert-ts';
import { textStyles } from '~/style/typography/typography';
import cs from 'classnames';
import { base } from '../TextLink/TextLink.css';

export function useGetTextStyles(): string {
  const textContext = useContext(TextContext);

  assert(!!textContext, `you need to wrap the component in <Text /> or <Heading />`);

  const { size, weight, baseline } = textContext;

  const textStylingProps = useMemo(
    () => ({
      size,
      weight,
      baseline,
    }),
    [size, weight, baseline],
  );

  return cs(textStyles(textStylingProps).join(' '), base);
}
