import 'font-awesome/css/font-awesome.css';
import * as React from 'react';

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
    return <div>dfsd</div>;
  }
}
