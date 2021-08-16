import '../src/style/reset';
import * as styles from './global.css';
import React, { FC, useState } from 'react';
import { Heading, FormInput, ExternalLink } from '../src';
import { Button } from '@cutting/component-library';
import { RadioGroup } from '@cutting/component-library';
import { ApplicationLayout } from '@cutting/component-library';
import { defaultTheme } from '../src/style/themes/default/default.css';
import { cuttingTheme } from '../src/style/themes/cutting/cutting.css';

const AvailableThemes = { defaultTheme, cuttingTheme } as const;

type Theme = keyof typeof AvailableThemes;

export const App: FC = () => {
  const [theme, setTheme] = useState<Theme>('defaultTheme');

  console.log(theme);

  return (
    <ApplicationLayout className={AvailableThemes[theme]} heading="@cutting/component-library">
      <div className={styles.wrap}>
        <div className={styles.layout}>
          <div className={styles.item}>
            <RadioGroup<Theme>
              legend="Choose theme"
              legendMode="visible"
              name="theme"
              layout="inline"
              size={'large'}
              onChange={(o) => {
                setTheme(o.value);
              }}
              options={[
                {
                  value: 'defaultTheme',
                  content: 'gov.uk',
                  checked: true,
                },
                {
                  value: 'cuttingTheme',
                  content: 'cutting',
                },
              ]}
            />
          </div>
        </div>
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
            <Button buttonStyle="warning">Warning</Button>
          </div>
          <div className={styles.item}>
            <Button disabled buttonStyle="primary">
              Disabled
            </Button>
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
              fontWeight="regular"
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
        <div className={styles.layout}>
          <div className={styles.item}>
            <Heading level={2}>Links</Heading>
          </div>
        </div>
        <div className={styles.layout}>
          <div className={styles.item}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#">A link</a>
          </div>
          <div className={styles.item}>
            <ExternalLink href="//cutting.scot" target="_blank">
              External Link
            </ExternalLink>
          </div>
        </div>
        <div className={styles.layout}>
          <div className={styles.item}>
            <Heading level={2}>Headings</Heading>
          </div>
        </div>
        <div className={styles.layout}>
          <div className={styles.item}>
            <Heading level={1}>H1</Heading>
            <Heading level={2}>H2</Heading>
            <Heading level={3}>H3</Heading>
            <Heading level={4}>H4</Heading>
          </div>
        </div>
      </div>
    </ApplicationLayout>
  );
};
