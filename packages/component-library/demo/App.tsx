/* eslint-disable no-console */
// eslint:disable
import React, { useState } from 'react';
import { Modal, Heading, FormInput, FormSelect, LayoutType } from '../src/components';
import { Button, ButtonStyle } from '../src/components/atoms/Button';
import { RadioGroup } from '../src/components/molecules/RadioGroup';
import { RadioSize, RadioLayout } from '../src/components/atoms/Radio/types';

const styles = require('./global.scss');

export const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className={styles.wrap}>
      <div className={styles.layout}>
        <div className={styles.item}>
          <Heading level={2}>Radio Group</Heading>
        </div>
      </div>
      <div className={styles.layout}>
        <div className={styles.item}>
          <RadioGroup
            legend="large stacked"
            name="larg-stacked"
            layout={RadioLayout.stacked}
            size={RadioSize.large}
            options={[
              {
                value: 'off',
                content: 'OFF'
              },
              {
                value: 'on',
                checked: true,
                content: 'ON'
              }
            ]}
          />
        </div>
        <div className={styles.item}>
          <RadioGroup
            name="small-stacked"
            layout={RadioLayout.stacked}
            size={RadioSize.small}
            legend="small stacked"
            options={[
              {
                value: 'off',
                content: 'OFF'
              },
              {
                value: 'on',
                checked: true,
                content: 'ON'
              }
            ]}
          />
        </div>
        <div className={styles.item}>
          <RadioGroup
            name="large-inline"
            layout={RadioLayout.inline}
            size={RadioSize.large}
            legend="large inline"
            options={[
              {
                value: 'off',
                content: 'OFF'
              },
              {
                value: 'on',
                checked: true,
                content: 'ON'
              }
            ]}
          />
        </div>
        <div className={styles.item}>
          <RadioGroup
            name="small-inline"
            layout={RadioLayout.inline}
            size={RadioSize.small}
            legend="small inline"
            options={[
              {
                value: 'off',
                content: 'OFF'
              },
              {
                value: 'on',
                checked: true,
                content: 'ON'
              }
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
            onKeyDown={(e) => {
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
            layoutType={LayoutType.horizontal}
            label="Horizontal"
            maxLength={100}
            onKeyDown={(e) => {
              console.log(e);
              return true;
            }}
            invalid
            errorMessage="foo bar"
          />
        </div>
      </div>
      <div className={styles.layout}>
        <div className={styles.item}>
          <Heading level={2}>Selects</Heading>
        </div>
      </div>
      <div className={styles.layout}>
        <div className={styles.item}>
          <FormSelect
            label="Select"
            options={[
              { key: 'Mr', value: 'Mr' },
              { key: 'Mrs', value: 'Mrs' },
              { key: 'Miss', value: 'Miss' },
              { key: 'Ms', value: 'Ms' },
              { key: 'Dr', value: 'Dr' },
              { key: 'Reverend', value: 'Reverend' },
              { key: 'Professor', value: 'Professor' },
              { key: 'Other', value: 'Other' }
            ]}
            optionKey="key"
            valueKey="value"
            dividerAt={1}
          />
        </div>
        <div className={styles.item}>
          <FormSelect
            label="invalid"
            invalid
            defaultLabel="Select a country"
            options={[{ id: 'uk', displayName: 'United Kingdom' }]}
            valueKey="id"
            optionKey="displayName"
            errorMessage="Invalid Select"
          />
        </div>
      </div>
      <div className={styles.layout}>
        <div className={styles.item}>
          <Modal
            heading="heading"
            description="accessibility description"
            footer="footer"
            openHandler={() => setModalOpen(false)}
            open={modalOpen}
          >
            <nav>
              <ul>
                <li>
                  <a href="one.html">Link One</a>
                </li>
                <li>
                  <a href="two.html">Link Two</a>
                </li>
                <li>
                  <a href="three.html">Link Three</a>
                </li>
              </ul>
            </nav>
          </Modal>
        </div>
      </div>
      <div className={styles.layout}>
        <div className={styles.item}>
          <div>
            <Button onClick={() => setModalOpen(true)} buttonStyle={ButtonStyle.Inverse}>
              Open Modal
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
