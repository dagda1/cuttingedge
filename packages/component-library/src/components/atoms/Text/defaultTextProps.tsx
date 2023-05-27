import { type ReactNode, createContext, useContext, useMemo } from 'react';
import type { TextStyleProps } from '../../../style/typography/typography';

interface DefaultTextProps {
  weight?: TextStyleProps['weight'];
  size?: TextStyleProps['size'];
}

const DefaultTextPropsContext = createContext<DefaultTextProps>({
  weight: undefined,
  size: undefined,
});

interface DefaultTextPropsProviderProps extends DefaultTextProps {
  children: ReactNode;
}

export function DefaultTextPropsProvider({ size, weight, children }: DefaultTextPropsProviderProps): JSX.Element {
  const defaultTextProps = useMemo(
    () => ({
      size,
      weight,
    }),
    [size, weight],
  );

  return <DefaultTextPropsContext.Provider value={defaultTextProps}>{children}</DefaultTextPropsContext.Provider>;
}

export function useDefaultTextProps({ size: sizeProp, weight: weightProp }: DefaultTextProps): {
  size: 'xsmall' | 'small' | 'large' | 'standard';
  weight: 'regular' | 'medium' | 'strong';
} {
  const { size, weight } = useContext(DefaultTextPropsContext);

  return {
    size: sizeProp ?? size ?? 'standard',
    weight: weightProp ?? weight ?? 'regular',
  };
}
