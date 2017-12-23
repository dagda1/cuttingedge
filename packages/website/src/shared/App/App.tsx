import * as React from 'react';
import '../../assets/fonts/GeosansLight/GeosansLight.ttf';
require('../global.scss');
const styles = require('./App.scss');

console.log(styles);

export class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>We are ssr.</h1>
      </div>
    );
  }
}
