import * as styles from './global.css';
import React, { useState } from 'react';
import { FormInput, ExternalLink, ButtonLink, CheckboxGroup, FormTextArea, FormRadioGroup, Donut } from '../src';
import { Button } from '../src/components/atoms/Button/Button';
import { RadioGroup } from '../src/components/molecules/RadioGroup/RadioGroup';
import { ApplicationLayout } from '../src/components/templates/ApplicationLayout/ApplicationLayout';
import { defaultTheme } from '../src/style/themes/default/default.css';
import { cuttingTheme } from '../src/style/themes/cutting/cutting.css';
import { salesTheme } from '../src/style/themes/sales/salesTheme.css';
import { consultingTheme } from '../src/style/themes/consulting/consultingTheme.css';
import cs from 'classnames';

const AvailableThemes = { defaultTheme, cuttingTheme, salesTheme, consultingTheme } as const;

type Theme = keyof typeof AvailableThemes;

export function App(): JSX.Element {
  const [theme, setTheme] = useState<Theme>('salesTheme');

  return (
    <ApplicationLayout className={cs(AvailableThemes[theme], styles.background)}>
      <div className={styles.wrap}>
        <div className={styles.layout}>
          <div className={styles.item}>
            <h1>@cutting/component-library</h1>
          </div>
        </div>
        <div className={styles.layout}>
          <div className={styles.item}>
            <RadioGroup<Theme>
              legend="Choose theme"
              legendMode="visible"
              name="theme"
              checkableLayout="inline"
              checkableSize={'large'}
              onChange={(o) => {
                setTheme(o.target.value as Theme);
              }}
              options={[
                {
                  value: 'defaultTheme',
                  content: 'gov.uk',
                },
                {
                  value: 'cuttingTheme',
                  content: 'cutting',
                },
                {
                  value: 'consultingTheme',
                  content: 'consulting',
                },
                {
                  value: 'salesTheme',
                  content: 'sales',
                  checked: true,
                },
              ]}
            />
          </div>
        </div>
        <div className={styles.layout}>
          <div className={styles.item}>
            <h2>Donuts</h2>
          </div>
        </div>
        <div className={styles.layout}>
          {[0, 50, 100].map((score) => (
            <div key={score} className={styles.item}>
              <Donut score={score} />
            </div>
          ))}
        </div>
        <div className={styles.layout}>
          <div className={styles.item}>
            <h2>Links</h2>
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
          <div className={styles.item}>
            <ButtonLink href="//cutting.scot" target="_blank">
              Button Link
            </ButtonLink>
          </div>
        </div>
        <div className={styles.layout}>
          <div className={styles.item}>
            <h2>Buttons</h2>
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
            <h2>Checkbox Group</h2>
          </div>
        </div>
        <div className={styles.layout}>
          <div className={styles.item}>
            <CheckboxGroup
              legend="large stacked"
              name="large-stacked-checkbox"
              checkableLayout={'stacked'}
              checkableSize={'large'}
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
            <CheckboxGroup
              name="small-stacked-checkbox"
              checkableLayout={'stacked'}
              checkableSize={'small'}
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
            <CheckboxGroup
              name="large-inline-checkbox"
              checkableLayout={'inline'}
              checkableSize={'large'}
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
            <CheckboxGroup
              name="small-inline-checkbox"
              checkableLayout={'inline'}
              checkableSize={'small'}
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
            <h2>Radio Group</h2>
          </div>
        </div>
        <div className={styles.layout}>
          <div className={styles.item}>
            <RadioGroup
              legend="large stacked"
              name="large-stacked-radio"
              checkableLayout={'stacked'}
              checkableSize={'large'}
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
              name="small-stacked-radio"
              checkableLayout={'stacked'}
              checkableSize={'small'}
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
            <FormRadioGroup
              name="large-inline-radio"
              checkableLayout={'inline'}
              checkableSize={'large'}
              legend="large inline"
              label="large inline"
              options={[
                {
                  content: 'Yes',
                  value: 'yes',
                  checked: true,
                },
                {
                  content: 'No',
                  value: 'no',
                  checked: false,
                },
              ]}
            />
          </div>
          <div className={styles.item}>
            <RadioGroup
              name="small-inline-radio"
              checkableLayout={'inline'}
              checkableSize={'small'}
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
            <h2>TextArea</h2>
          </div>
        </div>
        <div className={styles.layout}>
          <div className={styles.item}>
            <FormTextArea
              highlight
              label="Highlight"
              maxLength={100}
              onKeyDown={(e) => {
                console.log(e);
                return true;
              }}
              rows={3}
              cols={3}
            />
          </div>
        </div>
        <div className={styles.layout}>
          <div className={styles.item}>
            <h2>Input</h2>
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
            <h2>Headings</h2>
          </div>
        </div>
        <div className={styles.layout}>
          <div className={styles.item}>
            <h1>H1 headings</h1>
            <h2>H2 headings</h2>
            <h3>H3 headings</h3>
            <h4>H4 headings</h4>
          </div>
        </div>
        <div className={styles.layout}>
          <div className={styles.item}>
            <h2>Paragaphs</h2>
          </div>
        </div>
        <div className={styles.layout}>
          <div className={styles.item}>
            <p>A paragraph</p>
          </div>
        </div>
      </div>
    </ApplicationLayout>
  );
}
