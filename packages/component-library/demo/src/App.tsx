import * as styles from './global.css';
import { useState } from 'react';
import { RadioGroup } from '../../src/components/molecules/RadioGroup/RadioGroup';
import type { ThemeKeys } from '../../src/components/templates/ApplicationLayout/ApplicationLayout';
import { ApplicationLayout } from '../../src/components/templates/ApplicationLayout/ApplicationLayout';

export function App(): JSX.Element {
  const [theme, setTheme] = useState<ThemeKeys>('cuttingTheme');

  return (
    <ApplicationLayout theme={theme} className={styles.background}>
      <RadioGroup<ThemeKeys>
        legend="Choose theme"
        legendMode="visible"
        name="theme"
        checkableLayout="inline"
        checkableSize={'large'}
        onChange={(o) => {
          setTheme(o.target.value as ThemeKeys);
        }}
        options={[
          {
            value: 'defaultTheme',
            content: 'gov.uk',
          },
          {
            value: 'cuttingTheme',
            content: 'cutting',
            checked: true,
          },
          {
            value: 'consultingTheme',
            content: 'consulting',
          },
          {
            value: 'salesTheme',
            content: 'sales',
          },
        ]}
      />
    </ApplicationLayout>
  );
}
