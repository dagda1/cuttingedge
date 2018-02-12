import * as React from 'react';
import { pageMaker } from '../PageMaker';

const markdown = require('../../../markdown/privacy.md');

export const PrivacyPolicy: React.StatelessComponent = () => (
  <>
    <div>
      <h1>Privacy Policy</h1>
    </div>
    <div dangerouslySetInnerHTML={{ __html: markdown }} />
  </>
);

export default pageMaker({ Comp: PrivacyPolicy });
