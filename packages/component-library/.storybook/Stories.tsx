import type { ComponentType } from 'react';

import type { ThemeKeys } from '~/components/templates/ApplicationLayout/ApplicationLayout';
import { ApplicationLayout, Themes } from '~/components/templates/ApplicationLayout/ApplicationLayout';

import * as styles from './Stories.css';

interface ThemeArgTypes {
  theme: {
    options: ThemeKeys[];
    control: { type: 'select' };
  };
}

export function themedSelect(): ThemeArgTypes {
  return {
    theme: {
      options: Themes,
      control: { type: 'select' },
    },
  };
}

type ThemedProps<T> = T & { theme?: ThemeKeys };

export type ThemedTemplate<T> = ((props: ThemedProps<T>) => JSX.Element) & { args?: Partial<T> };

export function themedTemplateMaker<T extends object>(Component: ComponentType<T>): ThemedTemplate<T> {
  return function ThemedStory({ theme = 'defaultTheme', ...args }: ThemedProps<T>): JSX.Element {
    return (
      <ApplicationLayout theme={theme}>
        <div className={styles.root}>
          <Component {...(args as T)} />
        </div>
      </ApplicationLayout>
    );
  };
}
