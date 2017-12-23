import * as React from 'react';
import '../../assets/fonts/GeosansLight/GeosansLight.ttf';
require('../global.scss');

export class App extends React.Component<any, any> {
  render() {
    return (
      <div>
        <h1>We are ssr.</h1>
      </div>
    );
  }
}
