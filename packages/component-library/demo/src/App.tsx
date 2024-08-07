import { range } from '@cutting/util';
import React, { useState } from 'react';

import {
  Alert,
  ButtonLink,
  Card,
  CheckboxGroup,
  Column,
  Columns,
  ContentBlock,
  Donut,
  FormInput,
  FormRadioGroup,
  FormTextArea,
  Hamburger,
  Heading,
  Redhatestimonial,
  Stack,
  Text,
  TextLink,
} from '../../src';
import { Button } from '../../src/components/atoms/Button/Button';
import { RadioGroup } from '../../src/components/molecules/RadioGroup/RadioGroup';
import type { ThemeKeys } from '../../src/components/templates/ApplicationLayout/ApplicationLayout';
import { ApplicationLayout } from '../../src/components/templates/ApplicationLayout/ApplicationLayout';
import * as styles from './global.css';

export function App(): JSX.Element {
  const [theme, setTheme] = useState<ThemeKeys>('supportTheme');
  const [open, setOpen] = useState(false);

  return (
    <ApplicationLayout theme={theme} className={styles.background} heading="cutting component library">
      <Stack space="large">
        <ContentBlock width="large">
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
              },
              {
                value: 'salesTheme',
                content: 'sales',
              },
              {
                value: 'supportTheme',
                content: 'support',
                checked: true,
              },
            ]}
          />
        </ContentBlock>
        <ContentBlock width="large">
          <Heading level="2">Inputs</Heading>
        </ContentBlock>
        <ContentBlock width="large">
          <Columns space="large">
            <Column>
              <FormInput
                highlight
                label="Highlight"
                maxLength={100}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                  console.log(e);
                  return true;
                }}
              />
            </Column>
            <Column>
              <FormInput label="Invalid" invalid errorMessage="Error Message" />
            </Column>
            <Column>
              <FormInput label="Invalid &amp; required" invalid required errorMessage="Error Message" />
            </Column>
            <Column>
              <FormInput
                fontWeight="regular"
                label="This is a really, really, really, really, really, really, really, really, really, really long bit of text"
              />
            </Column>
          </Columns>
        </ContentBlock>
        <ContentBlock width="large">
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
        </ContentBlock>
        <ContentBlock width="large">
          <Heading level="2">Checkbox Group</Heading>
        </ContentBlock>
        <ContentBlock width="large">
          <Columns space="large">
            <Column>
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
            </Column>
            <Column>
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
            </Column>
            <Column>
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
            </Column>
            <Column>
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
            </Column>
          </Columns>
        </ContentBlock>
        <ContentBlock width="large">
          <Heading level="2">Radio Group</Heading>
        </ContentBlock>
        <ContentBlock width="large">
          <Columns space="large">
            <Column>
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
            </Column>
            <Column>
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
            </Column>
            <Column>
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
            </Column>
            <Column>
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
            </Column>
          </Columns>
        </ContentBlock>
        <ContentBlock width="large">
          <Heading level="2">TextArea</Heading>
        </ContentBlock>
        <ContentBlock width="large">
          <Column>
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
          </Column>
        </ContentBlock>
        <ContentBlock width="large">
          <Heading level="2">Buttons</Heading>
        </ContentBlock>
        <ContentBlock width="large">
          <Columns space="large" align="left" alignY="top">
            <Column>
              <Button buttonStyle="primary">Primary</Button>
            </Column>
            <Column>
              <Button buttonStyle="secondary">Secondary</Button>
            </Column>
            <Column>
              <Button buttonStyle="warning">Warning</Button>
            </Column>
            <Column>
              <Button disabled buttonStyle="primary">
                Disabled
              </Button>
            </Column>
          </Columns>
        </ContentBlock>
        <ContentBlock width="large">
          <Heading level="2">Cards</Heading>
        </ContentBlock>
        <ContentBlock width="large">
          <Columns space="large" align="left" collapseBelow="tablet">
            {[...range(3)].map((score) => (
              <Column key={score}>
                <Card rounded>
                  <Heading level="2">{score}</Heading>
                </Card>
              </Column>
            ))}
          </Columns>
        </ContentBlock>
        <ContentBlock width="large">
          <Heading level="2">Donuts</Heading>
        </ContentBlock>
        <ContentBlock width="large">
          <Columns space="large" align="left" collapseBelow="tablet">
            {[0, 50, 100].map((score) => (
              <Column key={score}>
                <Donut score={score} />
              </Column>
            ))}
          </Columns>
        </ContentBlock>
        <ContentBlock width="large">
          <Heading level="2">Alerts</Heading>
        </ContentBlock>
        <ContentBlock width="large">
          <Columns space="large" collapseBelow="desktop">
            <Column>
              <Alert type="success" bannerHeading="Training outcome recorded and trainee withdrawn">
                <p>This is good</p>
              </Alert>
            </Column>
            <Column>
              <Alert type="warning" bannerHeading="Training outcome recorded and trainee withdrawn">
                <p>Houston we might have a problem</p>
              </Alert>
            </Column>
            <Column>
              <Alert type="error" bannerHeading="Training outcome recorded and trainee withdrawn">
                <p>Houston we have a problem</p>
              </Alert>
            </Column>
          </Columns>
        </ContentBlock>
        <ContentBlock width="large">
          <Heading level="2">Headings</Heading>
        </ContentBlock>
        <ContentBlock width="large">
          <Stack space="small">
            <Heading level="1">H1 heading</Heading>
            <Heading level="2">H2 heading</Heading>
            <Heading level="3">H3 heading</Heading>
            <Heading level="4">H4 heading</Heading>
          </Stack>
        </ContentBlock>
        <ContentBlock width="large">
          <Heading level="4">
            H2 heading with lots and lots and lots and lots and lots and lots of and lots of and lots of and lots of and
            lots of and lots of and lots of text
          </Heading>
        </ContentBlock>
        <ContentBlock width="large">
          <Heading level="2">Paragaphs</Heading>
        </ContentBlock>
        <ContentBlock width="large">
          <Text component="p">A paragraph</Text>
        </ContentBlock>
        <ContentBlock width="large">
          <Text component="p">
            A paragraph with lots and lots and lots and lots and lots and lots and lots and lots and lots and lots and
            lots and lots and lots and lots and lots and lots of text
          </Text>
        </ContentBlock>
        <ContentBlock>
          <Stack space="medium">
            <Text component="p">
              Jurgen Klopp&apos;s side started slowly at the Singapore National Stadium but scored three quick-fire
              goals before half-time to put the game beyond Leicester. Nunez, Bobby Clark and Diogo Jota netted for
              Jurgen Klopp&apos;s men in an eight-minute blitz after the Foxes began well.
            </Text>
            <Text component="p">
              Similarly to their win over Karlsruher and draw against Greuther Furth, Klopp decided to rotate his squad
              at half-time with 23 players handed game time. As the game wore on, Liverpool created more chances and
              they eventually scored a fourth in the 65th minute as Ben Doak headed home to wrap up the win for the
              Reds.
            </Text>
            <Text component="p">
              After scoring twice and grabbing one assist in Liverpool&apos;s 4-4 draw with Greuther Furth on Monday,
              Nunez continued his impressive pre-season form with a goal against Leicester. The Uruguayan, who struggled
              for service during the opening half an hour, didn&apos;t pass up his first clear-cut chance of the game.
            </Text>
          </Stack>
        </ContentBlock>
        <ContentBlock width="large">
          <Heading level="2">Links</Heading>
        </ContentBlock>
        <ContentBlock width="large">
          <Columns space="large" align="left" alignY="top">
            <Column>
              <Text>
                <TextLink href="//cutting.scot" target="_blank">
                  Text Link
                </TextLink>
              </Text>
            </Column>
            <Column>
              <ButtonLink href="//cutting.scot" target="_blank">
                Button Link
              </ButtonLink>
            </Column>
            <Column>
              <Text>
                <TextLink external href="//cutting.scot" target="_blank">
                  External Link
                </TextLink>
              </Text>
            </Column>
          </Columns>
        </ContentBlock>
        <ContentBlock>
          <Redhatestimonial />
        </ContentBlock>
        <ContentBlock width="large">
          <Heading level="2">Hamburger Menu</Heading>
          <Stack space="medium">
            <Hamburger open={open} setOpen={setOpen} variant={theme === 'defaultTheme' ? 'dark' : 'light'} />
          </Stack>
        </ContentBlock>
      </Stack>
    </ApplicationLayout>
  );
}
