import { useContext, useMemo } from 'react';
import { assert } from 'assert-ts';
import type { TextStyleProps } from '../../../style/typography/typography';
import { textStyles } from '../../../style/typography/typography';
import { TextContext } from './TextContext';
import { useDefaultTextProps } from './defaultTextProps';
import cs from 'classnames';
import * as styles from './Text.css';
import { Typography, type TypographyProps } from '../Typography/Typography';

type Layout = 'inline' | 'block';

export interface TextProps extends TypographyProps {
  size?: TextStyleProps['size'];
  tone?: TextStyleProps['tone'];
  weight?: TextStyleProps['weight'];
  baseline?: TextStyleProps['baseline'];
  dataTestid?: string;
  className?: string;
  layout?: Layout;
}

export function Text({
  size: sizeProp,
  tone: toneProp,
  weight: weightProp,
  baseline = true,
  dataTestid,
  layout = 'block',
  className,
  ...typographyProps
}: TextProps): JSX.Element {
  assert(!useContext(TextContext), 'Text components should not be nested within each other');

  const { size, weight, tone } = useDefaultTextProps({
    size: sizeProp,
    weight: weightProp,
    tone: toneProp,
  });

  // Prevent re-renders when context values haven't changed
  const textStylingProps = useMemo(
    () => ({
      size,
      tone,
      weight,
      baseline,
    }),
    [size, tone, weight, baseline],
  );

  return (
    <TextContext.Provider value={textStylingProps}>
      <Typography
        dataTestid={dataTestid}
        {...typographyProps}
        className={cs({ [styles.inline]: layout === 'inline' }, className, textStyles(textStylingProps).join(' '))}
      />
    </TextContext.Provider>
  );
}
