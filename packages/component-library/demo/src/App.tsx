import * as styles from './global.css';
import React, { useState } from 'react';
import {
  FormInput,
  ExternalLink,
  ButtonLink,
  CheckboxGroup,
  FormTextArea,
  FormRadioGroup,
  Donut,
  Alert,
} from '../../src';
import { Button } from '../../src/components/atoms/Button/Button';
import { RadioGroup } from '../../src/components/molecules/RadioGroup/RadioGroup';
import type { ThemeKeys } from '../../src/components/templates/ApplicationLayout/ApplicationLayout';
import { ApplicationLayout } from '../../src/components/templates/ApplicationLayout/ApplicationLayout';

export function App(): JSX.Element {
  const [theme, setTheme] = useState<ThemeKeys>('cuttingTheme');

  return (
    <ApplicationLayout theme={theme} className={styles.background}>
      <div className={styles.wrap}>
        <div className={styles.layout}>
          <div className={styles.item}>
            <h1>@cutting/component-library</h1>
          </div>
        </div>
        <div className={styles.layout}>
          <div className={styles.item}>
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
          </div>
        </div>
      </div>
      <footer>
        <div><h2>A Footer</h2></div>
      </footer>
    </ApplicationLayout>
  );
}
