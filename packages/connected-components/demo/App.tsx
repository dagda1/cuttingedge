import React from 'react';
import { Heading } from '@cutting/component-library';
import { Wrap, Layout, GelItem } from '@cutting/react-gel';

require('./App.scss');

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
            <Heading>Heading</Heading>
          </GelItem>
        </Layout>
      </Wrap>
    );
  }
}
