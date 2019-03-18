// tslint:disable
require('./global.scss');
import React from 'react';
import { Rhombus, Cow, Modal, Heading, FormInput, FormSelect } from '../src/components';
import { Button, ButtonStyle } from '../src/components/atoms/Button';
import { Wrap, Layout, GelItem } from '@cutting/react-gel';

export interface AppProps {}
export interface AppState {
  modalOpen: boolean;
}

export class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      modalOpen: false
    };
  }

  openModal = (open: boolean) => this.setState({ modalOpen: open });

  render() {
    return (
      <Wrap>
        <Layout>
          <GelItem>
            <Heading level={2}>Inputs</Heading>
          </GelItem>
        </Layout>
        <Layout>
          <GelItem l="1/4">
            <FormInput
              highlight
              label="Highlight"
              maxLength={100}
              onKeyDown={e => {
                console.log(e);
                return true;
              }}
            />
          </GelItem>
          <GelItem l="1/4">
            <FormInput label="Invalid" invalid errorMessage="Error Message" />
          </GelItem>
          <GelItem l="1/4">
            <FormInput label="Invalid & required" invalid required errorMessage="Error Message" />
          </GelItem>
          <GelItem l="1/4">
            <FormInput
              strong={false}
              label="This is a really, really, really, really, really, really, really, really, really, really long bit of text"
            />
          </GelItem>
        </Layout>
        <Layout>
          <GelItem>
            <Heading level={2}>Selects</Heading>
          </GelItem>
        </Layout>
        <Layout>
          <GelItem s="1/4">
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
          </GelItem>
          <GelItem s="1/4">
            <FormSelect
              label="invalid"
              invalid
              defaultLabel="Select a country"
              options={[{ id: 'uk', displayName: 'United Kingdom' }]}
              valueKey="id"
              optionKey="displayName"
              errorMessage="Invalid Select"
            />
          </GelItem>
        </Layout>
        <Layout>
          <GelItem>
            <Modal
              heading="heading"
              description="accessibility description"
              footer="footer"
              openHandler={this.openModal}
              open={this.state.modalOpen}
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
          </GelItem>
        </Layout>
        <Layout>
          <GelItem>
            <div>
              <Button onClick={() => this.openModal(true)} buttonStyle={ButtonStyle.Inverse}>
                Open Modal
              </Button>
            </div>
            <Rhombus />
          </GelItem>
        </Layout>
        <Layout>
          <GelItem>
            <Cow />
          </GelItem>
        </Layout>
      </Wrap>
    );
  }
}
