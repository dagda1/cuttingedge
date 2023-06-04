import { useContext, useMemo } from 'react';
import { assert } from 'assert-ts';
import type { TypographyProps } from '../Typography/Typography';
import { Typography } from '../Typography/Typography';
import type { TextStyleProps } from '../../../style/typography/typography';
import { textStyles } from '../../../style/typography/typography';
import { TextContext } from './TextContext';
import { useDefaultTextProps } from './defaultTextProps';
import cs from 'classnames';
import * as styles from './Text.css';

type Layout = 'inline' | 'block';

export interface TextProps extends TypographyProps {
  size?: TextStyleProps['size'];
  weight?: TextStyleProps['weight'];
  baseline?: TextStyleProps['baseline'];
  dataTestid?: string;
  className?: string;
  layout?: Layout;
}

export function Text({
  size: sizeProp,
  weight: weightProp,
  baseline = true,
  dataTestid,
  layout = 'block',
  className,
  ...typographyProps
}: TextProps): JSX.Element {
  assert(!useContext(TextContext), 'Text components should not be nested within each other');

  const { size, weight } = useDefaultTextProps({
    size: sizeProp,
    weight: weightProp,
  });

  // Prevent re-renders when context values haven't changed
  const textStylingProps = useMemo(
    () => ({
      size,
      weight,
      baseline,
    }),
    [size, weight, baseline],
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
