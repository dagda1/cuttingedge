import '../src/style/reset';
import styles from './global.module.scss';
import type { FC } from 'react';
import { Heading, FormInput } from '../src';
import { Button } from '../src/components/atoms/Button/Button';
import { RadioGroup } from '../src/components/molecules/RadioGroup';
import { ApplicationLayout } from '../src/components/templates/ApplicationLayout/ApplicationLayout';

export const App: FC = () => {
  return (
    
      <ApplicationLayout heading="@cutting/component-library">
        <div className={styles.wrap}>
          <div className={styles.layout}>
            <div className={styles.item}>
              <Heading level={2}>Buttons</Heading>
            </div>
          </div>
          <div className={styles.layout}>
            <div className={styles.item}>
              <Button buttonStyle="primary">Primary</Button>
            </div>
            <div className={styles.item}>
              <Button buttonStyle="secondary">Secondary</Button>
            </div>
            <div className={styles.item}>
              <Button buttonStyle="inverse">Inverse</Button>
            </div>
            <div className={styles.item}>
              <Button buttonStyle="warning">Warning</Button>
            </div>
          </div>
          <div className={styles.layout}>
            <div className={styles.item}>
              <Heading level={2}>Radio Group</Heading>
            </div>
          </div>
          <div className={styles.layout}>
            <div className={styles.item}>
              <RadioGroup
                legend="large stacked"
                name="large-stacked"
                layout={'stacked'}
                size={'large'}
                options={[
                  {
                    value: 'off',
                    content: 'OFF',
                  },
                  {
                    value: 'on',
                    checked: true,
                    content: 'ON',
                  },
                ]}
              />
            </div>
            <div className={styles.item}>
              <RadioGroup
                name="small-stacked"
                layout={'stacked'}
                size={'small'}
                legend="small stacked"
                options={[
                  {
                    value: 'off',
                    content: 'OFF',
                  },
                  {
                    value: 'on',
                    checked: true,
                    content: 'ON',
                  },
                ]}
              />
            </div>
            <div className={styles.item}>
              <RadioGroup
                name="large-inline"
                layout={'inline'}
                size={'large'}
                legend="large inline"
                options={[
                  {
                    value: 'off',
                    content: 'OFF',
                  },
                  {
                    value: 'on',
                    checked: true,
                    content: 'ON',
                  },
                ]}
              />
            </div>
            <div className={styles.item}>
              <RadioGroup
                name="small-inline"
                layout={'inline'}
                size={'small'}
                legend="small inline"
                options={[
                  {
                    value: 'off',
                    content: 'OFF',
                  },
                  {
                    value: 'on',
                    checked: true,
                    content: 'ON',
                  },
                ]}
              />
            </div>
          </div>
          <div className={styles.layout}>
            <div className={styles.item}>
              <Heading level={2}>Input</Heading>
            </div>
          </div>
          <div className={styles.layout}>
            <div className={styles.item}>
              <FormInput
                highlight
                label="Highlight"
                maxLength={100}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                  console.log(e);
                  return true;
                }}
              />
            </div>
            <div className={styles.item}>
              <FormInput label="Invalid" invalid errorMessage="Error Message" />
            </div>
            <div className={styles.item}>
              <FormInput label="Invalid &amp; required" invalid required errorMessage="Error Message" />
            </div>
            <div className={styles.item}>
              <FormInput
                strong={false}
                label="This is a really, really, really, really, really, really, really, really, really, really long bit of text"
              />
            </div>
          </div>
          <div className={styles.layout}>
            <div className={styles.item}>
              <FormInput
                layout="horizontal"
                label="Horizontal"
                maxLength={100}
                onKeyDown={() => {
                  return true;
                }}
                invalid
                errorMessage="foo bar"
              />
            </div>
          </div>
        </div>
      </ApplicationLayout>
    </ThemeProvider>
  );
};
