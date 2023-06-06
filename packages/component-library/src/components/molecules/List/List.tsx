import { type ReactNode, Children } from 'react';
import { Box } from '../Box/Box';
import * as styles from './List.css';
import cs from 'classnames';
import type { ReactNodeNoStrings, StackProps } from '../Stack/Stack';
import { Stack } from '../Stack/Stack';
import { Text, type TextProps } from '~/components/atoms/Text/Text';
import { DefaultTextPropsProvider, useDefaultTextProps } from '~/components/atoms/Text/defaultTextProps';
import flattenChildren from '~/style/util/flatten-children';
import { lineHeightContainer } from '~/style/lineHeightContainer.css';

function numberToAlpha(inputNumber: number) {
  let returnValue = '';
  let counter = inputNumber;

  while (counter > 0) {
    const t = (counter - 1) % 26;
    returnValue = String.fromCharCode(97 + t) + returnValue;
    counter = ((counter - t) / 26) | 0;
  }

  return returnValue;
}

const romanNumerals = {
  m: 1000,
  cm: 900,
  d: 500,
  cd: 400,
  c: 100,
  xc: 90,
  l: 50,
  xl: 40,
  x: 10,
  ix: 9,
  v: 5,
  iv: 4,
  i: 1,
} as const;
function numberToRomanNumerals(inputNumber: number) {
  let returnValue = '';
  let counter = inputNumber;

  (Object.keys(romanNumerals) as Array<keyof typeof romanNumerals>).forEach((romanNumeral) => {
    const value = romanNumerals[romanNumeral];

    while (counter >= value) {
      returnValue += romanNumeral;
      counter -= value;
    }
  });

  return returnValue;
}

interface CharacterBulletProps {
  length?: number;
  children: string | number;
}

const CharacterBullet = ({ length = 1, children }: CharacterBulletProps) => (
  <Box
    display="inlineBlock"
    className={cs(
      styles.minCharacterWidth[length - 1] ?? styles.minCharacterWidth[styles.minCharacterWidth.length - 1],
      styles.trimGutter,
    )}
  >
    {children}.
  </Box>
);

type ListTypeCharacter = {
  type?: 'bullet' | 'number' | 'alpha' | 'roman' | 'none';
  icon?: never;
};

type ListTypeIcon = {
  type: 'icon';
  icon: ReactNode;
};

export type ListProps = {
  children: StackProps['children'];
  size?: TextProps['size'];
  space?: StackProps['space'];
  start?: number;
} & (ListTypeIcon | ListTypeCharacter);

export function List({
  children,
  size: sizeProp,
  space = 'medium',
  type = 'bullet',
  start = 1,
  ...restProps
}: ListProps): JSX.Element {
  const { size } = useDefaultTextProps({
    size: sizeProp,
  });
  const listItems = flattenChildren(children) as ReactNodeNoStrings[];
  const lastNumberLength = type === 'number' ? (listItems.length + (start - 1)).toString().length : -1;

  return (
    <DefaultTextPropsProvider size={size}>
      <Stack component={/^(bullet|icon|none)$/.test(type) ? 'ul' : 'ol'} space={space}>
        {Children.map(listItems, (listItem, index) => {
          const resolvedIndex = index + (start - 1);

          return (
            <Box display="flex">
              <Text component="div" size={size}>
                <Box
                  display="flex"
                  alignItems={/^(bullet|icon)$/.test(type) ? 'center' : undefined}
                  className={lineHeightContainer[size]}
                  userSelect="none"
                  aria-hidden
                >
                  {(() => {
                    if (type === 'none') {
                      return null;
                    }

                    if (type === 'number') {
                      return <CharacterBullet length={lastNumberLength}>{resolvedIndex + 1}</CharacterBullet>;
                    }

                    if (type === 'alpha') {
                      return <CharacterBullet>{numberToAlpha(resolvedIndex + 1)}</CharacterBullet>;
                    }

                    if (type === 'roman') {
                      return <CharacterBullet length={2}>{numberToRomanNumerals(resolvedIndex + 1)}</CharacterBullet>;
                    }

                    if (type === 'icon' && 'icon' in restProps) {
                      return restProps.icon;
                    }

                    return <Box borderRadius="full" className={cs(styles.currentColor, styles.size[size])} />;
                  })()}
                </Box>
              </Text>
              <Box minWidth={0} width="full" paddingLeft={size === 'xsmall' ? 'xsmall' : 'small'}>
                {listItem}
              </Box>
            </Box>
          );
        })}
      </Stack>
    </DefaultTextPropsProvider>
  );
}
