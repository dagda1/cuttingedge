import * as React from 'react';
import { pageMaker } from '../PageMaker';
/* const styles = require('./PrivacyPolicy.scss'); */

export const PrivacyPolicy: React.StatelessComponent = () => (
  <div>
    <h1>Privacy Policy</h1>
  </div>
);

export default pageMaker({ Comp: PrivacyPolicy });
