import 'font-awesome/css/font-awesome.css';
import * as React from 'react';
import { Rhombus, Cow, Modal } from '../src/components';
import { Wrap, Layout, GelItem } from '@cutting/react-gel';
import { Button, ButtonStyle } from '../src/components/atoms/Button';

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
